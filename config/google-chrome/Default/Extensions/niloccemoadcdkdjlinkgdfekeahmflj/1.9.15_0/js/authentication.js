/**
 * The authentication module
 */
var authentication = (function () {

    var authURL = 'https://getpocket.com/signup?src=extension&route=/extension_login_success';
    // var authURL = 'https://admin:s3krit@nick1.dev.readitlater.com/signup?src=extension&route=/extension_login_success';
    var afterLoginCallback;

    // If we are not able to show the login popup from the toolbar
    // we show a login window. This is especially important for Chrome as
    // in Safari we can trigger open the login popup but within Chrome that's
    // not possible
    var showLoginWindow = function(callback) 
    {
        afterLoginCallback = callback;
        if (getSetting("signupSameTab") !== 'ext_simplesignup_simpletag1' && getSetting("signupSameTab") !== 'ext_simplesignup_simpletag2' && getSetting("signupSameTab") !== 'ext_simplesignup_simpletag3')
        {
            // Open a new window for the login signup page

            if (isSafari()) {
                // var ntab = safari.application.browserWindow.openTab();
                // ntab.url = authURL;
                safari.self.contentWindow.openTabWithURL(authURL);
                return;
            }

            window.open(authURL);
        }
    };

    /**
     * If the login process was successfully this function needs to be
     * called to cleanup and further steps that are after login necesary
     * @param  {Function} loginSuccessCallback Callback after login cleanup was successfully
     */
    var onLoginSuccess = function(loginSuccessCallback) {
        if (isChrome()) {
            // Search the extension login success window and close it
            getAllTabs(function(tabs) {
                tabs.forEach(function(tab) {
                    var url = tab.url;
                    var windowId = tab.windowId;
                    if (url.indexOf("extension_login_success") !== -1) {
                        chrome.tabs.remove(tab.id, function() {});
                    }
                });
            });
        }
        else {
            // all tabs
            var browserWindows = safari.application.browserWindows;
            for (var i = 0; i < browserWindows.length; i++) {
                var browserWindow = browserWindows[i];
                var tabs = browserWindow.tabs;
                var activetab;
                var shouldCloseBrowserTab = false;
                for (var j = 0; j < tabs.length; j++) {
                    activetab = tabs[j];
                    var url = activetab.url;
                    if (typeof url !== "undefined" && url.indexOf("extension_login_success") !== -1) {
                        shouldCloseBrowserTab = true;
                    }
                }
                if (shouldCloseBrowserTab) {
                    browserWindow.activeTab.close();
                }
            }
        }

        // Send message to all tabs to update the option page
        // this will add the username to the options page if
        // it's one of the open tabs
        broadcastMessageToAllTabs({action: "updateOptions"});

        // If no afterLogin action declared try to save the actual
        // loaded page
        if (afterLoginCallback) {
            afterLoginCallback();
            afterLoginCallback = undefined;
        }

        // send AB test message on setup
        var variant = 'control';
        if (getSetting("premium_status") !== '1' && getSetting("premUpsell") == '1')
        {
            variant = 'show_upsell';
        }
        ril.sendAbTestRegister(getSetting('guid'),getSetting('oauth_token'),'premium_ext_upsell_v2',variant);

        if (loginSuccessCallback) { loginSuccessCallback(); }
    };

    /**
     * Handle messages related to authentifications
     */
    addMessageListener(function(request, sender, sendResponse) {

        if (request.action === "showLoginWindow") {
            showLoginWindow(undefined);

            sendResponse({});
            return false;
        }
        else if (request.action === "loginSuccessfull") {
            // Handle successfull login. This message is sent from the
            // login successfull page
            var loginInformation = request.value;
            ril.login(loginInformation, {
                success: function() {
                    // Handle login success
                    onLoginSuccess();
                },
                error: function() {
                    // TODO: Add error handling
                }
            });

            sendResponse({});
            return true;
        }
        else if (request.action === "logout") {
            // Logout the extension
            ril.logout();

            // Update options in case the option page is open
            broadcastMessageToAllTabs({action: "updateOptions"});

            sendResponse({});
            return false;
        }
    });

    return {
        showLoginWindow: showLoginWindow,
    };
}());