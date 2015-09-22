" ------ General Settings ------
set nocompatible " Turn off vim compatibility mode
filetype on " Detect file types
filetype plugin indent on
syntax enable " Syntax highlighting
" Control-X Control-O to open autocomplete box
set omnifunc=syntaxcomplete#Complete
" Leave hidden buffers open
set hidden
set autoread " Reload files changed outside vim

set t_Co=256 " Run in 256-color mode
colorscheme desert
set number " Show line numbers

" Matchit plugin enhances %
runtime macros/matchit.vim

" Set unix line endings
set fileformat=unix

" Don't redraw screen when not needed
set lazyredraw

" Allow backspacing over everything
set backspace=indent,eol,start

" Keep longer history
set history=700

" Incremental search
set incsearch

" Smart case insensitive search
set ignorecase
set smartcase

" Maintain context around cursor
set scrolloff=7

" Wildmode configuration
set wildmode=longest,list
set wildmenu

" Configure tab behavior
set tabstop=8 softtabstop=4 expandtab shiftwidth=4 smarttab

" Show current position
set ruler

" Show matching brackets
set showmatch

" ------ Plugins ------
" Clone vundle if not present
if empty(glob("~/.vim/bundle/vundle"))
    !git clone https://github.com/gmarik/vundle ~/.vim/bundle/vundle
endif

" Powerline
set rtp+=/usr/lib/python2.7/site-packages/powerline/bindings/vim
python from powerline.vim import setup as powerline_setup
python powerline_setup()
python del powerline_setup

" Always display powerline statusline
set laststatus=2
" Hide default statusline text
set noshowmode "

set rtp+=~/.vim/bundle/vundle
call vundle#begin()

" let Vundle manage Vundle
" required!
Bundle 'gmarik/vundle'

" The bundles you install will be listed here
Bundle 'scrooloose/nerdtree'
Bundle 'klen/python-mode'
Bundle 'davidhalter/jedi-vim'
Bundle 'jlanzarotta/bufexplorer'
Bundle 'Valloric/YouCompleteMe'
Bundle 'rdnetto/YCM-Generator'
Bundle 'rust-lang/rust.vim'
Bundle 'phildawes/racer'

Bundle 'L9'
Bundle 'FuzzyFinder'
Bundle 'taglist.vim'

call vundle#end()

" Run in python using F9
autocmd FileType python nnoremap <buffer> <F9> :exec '!python' shellescape(@%, 1)<cr>

" ------ Plugin Configuration ------
" Powerline configuration
let g:powerline_pycmd = "py"
let g:powerline_pyeval = "pyeval"

" SuperTab omnicomplete movement
" let g:SuperTabDefaultCompletionType = "context"

" Documentation
let g:pymode_doc = 1
let g:pymode_doc_key = 'K'

" Linting
let g:pymode_lint = 1
let g:pymode_lint_checker = "pyflakes,pep8"

" Auto check on save
let g:pymode_lint_write = 1

" Support virtualenv
let g:pymode_virtualenv = 1

" Enable breakpoints plugin
let g:pymode_breakpoint = 1
let g:pymode_breakpoint_key = '<leader>b'

" Syntax highlighting
let g:pymode_syntax = 1
let g:pymode_syntax_all = 1
let g:pymode_syntax_indent_errors = g:pymode_syntax_all
let g:pymode_syntax_space_errors = g:pymode_syntax_all

" Don't autofold code
let g:pymode_folding = 0
 
" Rust racer
let g:racer_cmd = "~/dotfiles/racer/target/release/racer"
" Must install Rust source to this location first
let $RUST_SRC_PATH="/usr/local/src/rust/src/"

"------ Keybindings ------
" Plugins
" FuzzyFinder
" Leader-f opens buffer mode
" :FufFile - file mode
" 
" BufferExplorer
" leader-be - Open explorer
" leader-bs - Open horizontal split
" leader-bv - Open vertical split
" t or Shift-Enter - Open in new tab
"   switch between open tabs with gt and gT
"
" Tag List
" Leader-t opens tag list
"
" C-VIm
" I should get this when I have time to learn it
"
noremap <space> :
inoremap ,, <ESC>  
cnoremap ,, <ESC><ESC> 
" imap ,c <C-X><C-O>
let mapleader=","
" Enable hex mode
map <leader>he :%!xxd<CR>
" Disable hex mode
map <leader>hd :%!xxd -r<CR>
map <leader>w :w<CR>
map <leader>d :NERDTreeToggle<CR>
map <leader>fc :FufFileWithCurrentBufferDir<CR>
map <leader>fb :FufBuffer<CR>
map <leader>ft :FufTag<CR>
map <leader>t :TlistToggle<CR>
map <leader>ygc :YcmGenerateConfig<CR>
map <leader>v :e $MYVIMRC<CR>
" Update vimrc
map <leader>rr :source ~/.vimrc<CR>
" Prev/next buffer
map <leader>q :bp<CR>
map <leader>w :bn<CR>
" System clipboard cut copy paste
map <C-y> "+y
map <C-y><C-y> "+Y
map <C-p> "+p
map <C-p><C-p> "+P
map <C-x> "+x
map <C-d><C-d> "+dd
" Move between windows
map <C-j> <C-W>j
map <C-k> <C-W>k
map <C-h> <C-W>h
map <C-l> <C-W>l

" Return to last edit position when opening files (You want this!)
autocmd BufReadPost *
     \ if line("'\"") > 0 && line("'\"") <= line("$") |
     \   exe "normal! g`\"" |
     \ endif
" Remember info about open buffers on close
 " set viminfo=%M

" Delete trailing white space on save, useful for Python and CoffeeScript ;)
func! DeleteTrailingWS()
    exe "normal mz"
    %s/\s\+$//ge
    exe "normal `z"
endfunc
autocmd BufWrite *.py :call DeleteTrailingWS()
autocmd BufWrite *.coffee :call DeleteTrailingWS()
