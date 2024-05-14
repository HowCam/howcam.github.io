发现错误？想一起完善？<a id="btn-startedit" style="padding: 0.75em 1.25em; display: inline-block; line-height: 1; text-decoration: none; white-space: nowrap; cursor: pointer; border: 1px solid #6190e8; border-radius: 5px; background-color: #6190e8; color: #fff; outline: none; font-size: 0.75em; " hf="">编辑此页</a>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    var btnStartEdit = document.getElementById('btn-startedit');
    console.log('Button element:', btnStartEdit);

    btnStartEdit.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Button clicked');
        var currentPageURL = window.location.href;
        var fragmentMatch = currentPageURL.match(/#(.*)/);
        var fragment = fragmentMatch ? fragmentMatch[1] : 'README';
        var mdLink = fragment + '.md';
        var githubEditLink = 'https://github.com/HowCam/howcam.github.io/edit/main/docs/' + mdLink;
        console.log('GitHub edit link:', githubEditLink);
        window.open(githubEditLink, '_blank');
    });
});
</script>

本页面的全部内容在 [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/legalcode.zh-hans) 协议之条款下提供，附加条款亦可能应用