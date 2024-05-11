document.addEventListener('DOMContentLoaded', (event) => {
    var linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';

    if (window.matchMedia("only screen and (max-width: 767px)").matches) {      //max_screen_width < 767px ? mobile : desktop
        linkElement.href = '/assets/css/mobile.css';
    } else {
        linkElement.href = '/assets/css/desktop.css';
    }

    // 将新创建的link元素添加到文档的head部分
    document.head.appendChild(linkElement);
});