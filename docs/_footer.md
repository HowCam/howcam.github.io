发现错误？想一起完善？<a id="btn-startedit" style="padding: 0.75em 1.25em; display: inline-block; line-height: 1; text-decoration: none; white-space: nowrap; cursor: pointer; border: 1px solid #6190e8; border-radius: 5px; background-color: #6190e8; color: #fff; outline: none; font-size: 0.75em; " href="/#/md/edit.md">编辑此页</a>

<script>
  // 获取当前页面的URL
  var currentPageURL = window.location.href;
  // 利用正则表达式匹配URL中的文件名部分
  var match = currentPageURL.match(/[?&](?:[^=&]+)=([^&]+)/);
  // 如果匹配成功，提取文件名
  var filename = match ? match[1] : 'index'; // 如果没有匹配到，使用默认值 'index'
  // 创建一个函数来构建带ref参数的链接
  function createRefLink(baseURL) {
      // 检查baseURL是否已经包含查询参数
      if (baseURL.includes('?')) {
          // 如果已经包含查询参数，添加ref参数
          return baseURL + '&ref=' + encodeURIComponent(filename);
      } else {
          // 如果没有查询参数，添加一个问号开始查询参数
          return baseURL + '?ref=' + encodeURIComponent(filename);
      }
  }
  // 假设有一个按钮，其ID为btn-startedit
  document.getElementById("btn-startedit").addEventListener('click', function(event) {
      // 阻止默认的点击行为
      event.preventDefault();
      // 获取按钮的href属性值
      var baseURL = this.href;
      // 使用上面创建的函数来构建带ref参数的链接
      var refLink = createRefLink(baseURL);
      // 重定向到新的链接
      window.location.href = refLink;
  });
</scrtpt>

本页面的全部内容在 [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/legalcode.zh-hans) 协议之条款下提供，附加条款亦可能应用