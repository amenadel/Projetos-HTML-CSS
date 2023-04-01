(function(){
    var $body = document.querySelector('body')
    $body.classList.remove('no-js')
    $body.classList.add('js')

    var $btnmenu = document.querySelector('header__btnmenu')
    $btnmenu.removeAttribute('style')
})();