function getFileName(dft) {
    /**
     * 获取当前文档的文件名
     */
    var reg = new RegExp('^#(.*)', 'i');
    var fileName = window.location.hash.match(reg);
    if (fileName && fileName[1] != '/') {
        return 'docs' + fileName[1].split('?')[0] + '.md';
        /* 防止在 `#/md/edit?ref=docs/md/edit.md` 出现递归引用*/
    } else {
        return dft;
    }
}

function openReferenceURL() {
    /**
     * 打开当前传参引用的文档的 GitHub 编辑页面
     */
    var reg = new RegExp('(^|&)ref=([^&]*)(&|$)', 'i');
    var fileName = window.location.hash.split('ref=');
    if (fileName[1]) {
        window.open('https://github.com/HowCam/howcam.github.io/edit/main/' + fileName[1], target='_blank');
    } else {
        /* WTF? */
        console.error('[ERR!] getReferenceURL() does not find the name of the file.');
    }
}