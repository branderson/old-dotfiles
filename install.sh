#!/bin/bash

dir=~/dotfiles                    # dotfiles directory
olddir=~/dotfiles_old             # old dotfiles backup directory
platform=$(uname)

# list of files/folders to symlink in homedir
files="
config
xinitrc
xmodmap 
Xresources 
crontab
bashrc 
zshrc 
vimrc 
vim 
tmux.conf
tmuxinator
gitconfig 
gimp-2.8 
mednafen 
PyCharm40 
themes 
profile
pam_environment"
overrides="
zshrc_local
vimrc_local
tmux_local.conf
"
# oh-my-zsh 
# github repos to clone
GIT="
rupa/z
bkendzior/cowfiles
"
PIP2="
powerline-status
"
# install yaourt on Arch Linux
AUR="
package-query
yaourt
"
# list of AUR programs to install on Arch Linux
YAOURT="
dmenu2
compton
pulseaudio-ctl
google-chrome
atom-editor
dropbox
dropbox-cli
thunar-dropbox
numix-icon-theme-git
ttf-hack
virtualbox-ext-oracle
gtk-theme-arc-git
"
PROGRAMS="
i3
feh
imagemagick
cron
pavucontrol
pulseaudio
python2-pip
terminator
tree
gvim
tmux
build-essential
ctags
clang
cmake
ruby
sl
cowsay
fortune-mod
ranger
highlight
"
# rxvt-unicode-patched

# Returns 1 if program is installed and 0 otherwise
function program_installed {
	local return_=1

	type $1 >/dev/null 2>&1 || { local return_=0; }
	
	echo "$return_"
}

function link_dotfiles {
    # create dotfiles_old in homedir
    echo -n "Creating $olddir for backup of any existing dotfiles in ~ ..."
    mkdir -p $olddir

    # change to the dotfiles directory
    cd $dir

    # move any existing dotfiles in homedir to dotfiles_old directory, then create symlinks from the 
    # homedir to any files in the ~/dotfiles directory specified in $files
    for file in $files; do
        if [[ -f $file ]]; then
            echo ""
            if [[ -f ~/.$file ]]; then
                echo "Moving : .$file (~/.$file -> $olddir/.$file)"
                mv ~/.$file $olddir/
            fi
            echo "Linking: $file ($dir/$file -> ~/.$file)"
            ln -s $dir/$file ~/.$file
        fi
    done
    for file in $overrides; do
        if [[ -f dotfile_overrides/$file ]]; then
            echo ""
            if [[ -f ~/.$file ]]; then
                echo "Moving : .$file (~/.$file -> $olddir/.$file)"
                mv ~/.$file $olddir/
            fi
            echo "Linking: $file ($dir/dotfile_overrides/$file -> ~/.$file)"
            ln -s $dir/dotfile_overrides/$file ~/.$file
        fi
    done
    # create symlink for bin directory
    if [[ ! -d ~/bin ]]; then 
        ln -s ~/dotfiles/bin ~/bin
    fi
    if [[ ! -f ~/.z ]]; then
       touch ~/.z
    fi
}

# function install_all() {

# }

function install_AUR() {
    # install AUR programs if on Arch
    if [ $(program_installed pacman) == 1 ]; then
        echo -n "Do you want to install AUR programs? (y/n) "
        read response
        if [ $response == y ] || [ $response == Y ]; then
            echo "Creating ~/builds to hold AUR programs."
            mkdir -p ~/builds
            echo "Installing git if it's not installed."
            sudo pacman -S git
            echo "Installing base-devel if it's not installed."
            sudo pacman -S base-devel
            echo "Installing yaourt."
            for program in $AUR; do
                if [[ ! -d ~/builds/$program ]]; then 
                    echo "Git cloning $program to ~/builds/$program ."
                    git clone https://aur.archlinux.org/$program.git ~/builds/$program
                    cd ~/builds/$program
                    makepkg -sri
                    cd $dir
                fi
            done
            echo "Installing AUR programs through yaourt."
            for program in $YAOURT; do
                if [ $(program_installed $program) == 0 ]; then
                    yaourt -S --force $program
                fi
            done
        fi
    fi
}

function install_programs() {
    if [ $(program_installed pacman) == 1 ]; then
        sudo pacman -Syu
        for program in $PROGRAMS; do
            sudo pacman -S $program 
        done
    elif [ $(program_installed apt-get) == 1 ]; then
        sudo apt-get update
        for program in $PROGRAMS; do
            sudo apt-get install $program 
        done
    else
        echo "Cannot install tools, no compatible package manager."
    fi

    # cd into $dir
    cd $dir

    # clone submodules
    for repo in $GIT; do
        git clone https://github.com/$repo 
    done
}

function install_gems() {
    if [ $(program_installed ruby) == 1 ]; then
        gem install tmuxinator
        gem install guard
        gem install bropages
    fi
}

function install_rust_src () {
    echo "Cloning rust source into /usr/local/src/rust."
    if [[ $platform == 'Linux' ]]; then
        if [[ ! -d /usr/local/src/rust/ ]]; then 
            sudo git clone https://github.com/rust-lang/rust.git /usr/local/src/rust
        else
            echo "Rust source is installed"
        fi
    fi
}

function install_zsh() {
    # Test to see if zshell is installed.  If it is:
    if [ -f /bin/zsh -o -f /usr/bin/zsh ]; then
        # Clone my oh-my-zsh repository from GitHub only if it isn't already present
        if [[ ! -d $dir/oh-my-zsh/ ]]; then
            cd $dir
            git clone http://github.com/robbyrussell/oh-my-zsh.git
        fi
        # Set the default shell to zsh if it isn't currently set to zsh
        if [[ ! $(echo $SHELL) == $(which zsh) ]]; then
            chsh -s $(which zsh)
        fi
    else
        # If zsh isn't installed, get the platform of the current machine
        platform=$(uname);
        # If the platform is Linux, try an apt-get to install zsh and then recurse
        if [[ $platform == 'Linux' ]]; then
	    if [ $(program_installed apt-get) == 1 ]; then
                sudo apt-get install zsh
                install_zsh
            elif [ $(program_installed pacman) == 1 ]; then
                sudo pacman -S zsh
                install_zsh
            else 
                echo "Cannot install zsh, no compatible package manager."
	    fi
        # If the platform is OS X, tell the user to install zsh :)
        elif [[ $platform == 'Darwin' ]]; then
            echo "Please install zsh, then re-run this script!"
            exit
        fi
    fi

    # clone zsh-syntax-highlighting
    if [[ ! -d $dir/oh-my-zsh/custom/plugins/zsh-syntax-highlighting ]]; then
        git clone https://github.com/zsh-users/zsh-syntax-highlighting $dir/oh-my-zsh/custom/plugins/zsh-syntax-highlighting
    fi
}

install_powerline_fonts() {
    cd $dir
    git clone http://github.com/powerline/fonts.git
    fonts/install.sh
    rm -rf fonts
}

function install_pip() {
    for program in $PIP2; do
        sudo pip2 install $program
    done
}

function configure_system() {
    # If on arch, set time
    if [ $(program_installed pacman) == 1 ]; then
        timedatectl set-ntp true
    fi
    # Enable crontab
    systemctl enable cronie.service
}

function push_dotfiles() {
    cd $dir
    echo "Pushing dotfiles"
    git add -A
    git commit
    git push origin master
}

function update_dotfiles() {
    cd $dir
    git pull
}

function main() {
    echo "[1] Complete install and configuration"
    echo "[2] Push to github"
    echo "[3] Pull from github"
    echo "[4] Install dotfiles only"
    echo "[5] Install programs only"
    echo "[6] Configure system only"
    echo "[7] Install official repository programs only"
    echo "[8] Install AUR programs only"
    # echo "[9] Clone git repositories only"
    echo "[10] Install pip programs only"
    echo "[11] Install gems only"
    echo "[0] Quit"
    echo ""
    echo "What would you like to do?"
    read response
    if [[ $response == "1" ]]; then
        link_dotfiles
        install_programs
        install_AUR
        install_pip
        install_gems
        install_rust_src
        install_zsh
        install_powerline_fonts
        configure_system
    elif [[ $response == "2" ]]; then
        push_dotfiles
    elif [[ $response == "3" ]]; then
        update_dotfiles
    elif [[ $response == "4" ]]; then
        link_dotfiles
        echo ""
        main
    elif [[ $response == "5" ]]; then
        install_programs
        install_AUR
        install_pip
        install_gems
        echo ""
        main
    elif [[ $response == "6" ]]; then
        configure_system
        echo ""
        main
    elif [[ $response == "7" ]]; then
        install_programs
        echo ""
        main
    elif [[ $response == "8" ]]; then
        echo "Not yet implemented."
        echo ""
        main
    elif [[ $response == "9" ]]; then
        install_pip
        echo ""
        main
    elif [[ $response == "10" ]]; then
        install_gems
        echo ""
        main
    fi
}

main
