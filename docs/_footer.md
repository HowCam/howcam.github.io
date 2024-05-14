发现错误？想一起完善？<a id="btn-startedit" style="padding: 0.75em 1.25em; display: inline-block; line-height: 1; text-decoration: none; white-space: nowrap; cursor: pointer; border: 1px solid #6190e8; border-radius: 5px; background-color: #6190e8; color: #fff; outline: none; font-size: 0.75em; " href="/#/">编辑此页</a>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        console.log('DOM fully loaded and parsed');
        // 获取按钮元素
        var btnStartEdit = document.getElementById('btn-startedit');
        console.log('Button element:', btnStartEdit);

        // 给按钮添加点击事件监听器
        btnStartEdit.addEventListener('click', function(event) {
            // 阻止默认的点击行为
            event.preventDefault();
            console.log('Button clicked');

            // 获取当前页面的URL
            var currentPageURL = window.location.href;

            // 使用正则表达式提取 '#/' 后面的内容
            var fragmentMatch = currentPageURL.match(/#\/(.*)$/);
            console.log('Fragment match:', fragmentMatch);

            // 如果找到匹配项，则提取片段标识符
            var fragment = fragmentMatch ? fragmentMatch[1] : 'README'; // 如果没有匹配到，使用默认值 'README'
            console.log('Fragment:', fragment);

            // 拼接上.md扩展名
            var mdLink = fragment + '.md';
            console.log('Markdown link:', mdLink);

            // 构建完整的GitHub编辑链接
            var githubEditLink = 'https://github.com/HowCam/howcam.github.io/edit/main/docs/' + mdLink;
            console.log('GitHub edit link:', githubEditLink);

            // 打开新的浏览器标签页或窗口
            window.open(githubEditLink, '_blank');
        });
    });
</script>

本页面的全部内容在 [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/legalcode.zh-hans) 协议之条款下提供，附加条款亦可能应用