发现错误？想一起完善？<a id="btn-startedit" style="padding: 0.75em 1.25em; display: inline-block; line-height: 1; text-decoration: none; white-space: nowrap; cursor: pointer; border: 1px solid #6190e8; border-radius: 5px; background-color: #6190e8; color: #fff; outline: none; font-size: 0.75em;" href="#">编辑此页</a>

<script>
  function getQueryVariable(dft)
  {
    var reg = new RegExp('^#(.*)', 'i');
    var r = window.location.hash.match(reg);
    if (r[1] != '/')
    {
      return r[1] + '.md';
    }
    return dft;
  }
    // 等待DOM完全加载后再添加事件监听器
  document.addEventListener('DOMContentLoaded', (event) => {
      // 获取链接元素
      const link = document.getElementById('btn-startedit');

      // 检查链接是否存在以避免错误
      if (link) {
          // 为链接添加点击事件监听器
          link.addEventListener('click', (event) => {
              // 阻止链接的默认行为（例如导航到href所指向的URL）
              event.preventDefault();

              // 在链接被点击时执行的代码
              document.getElementById("btn-startedit").href = "https://github.com/HowCam/howcam.github.io/edit/master/docs" + getQueryVariable("/README.md");
          });
      } else {
          console.error('Link with id "btn-startedit" not found.');
      }
  });

</script>


本页面的全部内容在 [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/legalcode.zh-hans) 协议之条款下提供，附加条款亦可能应用