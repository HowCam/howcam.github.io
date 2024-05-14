发现错误？想一起完善？<a id="btn-startedit" style="padding: 0.75em 1.25em; display: inline-block; line-height: 1; text-decoration: none; white-space: nowrap; cursor: pointer; border: 1px solid #6190e8; border-radius: 5px; background-color: #6190e8; color: #fff; outline: none; font-size: 0.75em; ">编辑此页</a>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // 获取按钮元素
    var btnStartEdit = document.getElementById('btn-startedit');

    // 给按钮添加点击事件监听器
    btnStartEdit.addEventListener('click', function(event) {
        // 阻止默认的点击行为
        event.preventDefault();

        // 获取当前页面的URL
        var currentPageURL = window.location.href;

        // 使用正则表达式提取 '#“后面的内容
        var fragmentMatch = currentPageURL.match(/#(.*)$/);

        // 如果找到匹配项，则提取片段标识符
        var fragment = fragmentMatch ? fragmentMatch[1] : 'README'; // 如果没有匹配到，使用默认值 'README'

        // 拼接上.md扩展名
        var mdLink = fragment + '.md';

        // 将拼接好的链接设置到按钮的href属性中
        this.href = 'https://github.com/HowCam/howcam.github.io/edit/main/docs/' + mdLink;
    });
});
</script>

本页面的全部内容在 [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/legalcode.zh-hans) 协议之条款下提供，附加条款亦可能应用