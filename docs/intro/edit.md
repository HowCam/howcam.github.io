# 编辑页面说明

感谢你愿意为 Starship 作出贡献！🎉

在跳转至 GitHub 编辑页面之前，请确保你已经阅读了以下内容：

## 参与编辑前必读

- **阅读贡献指南**
   
   请先阅读 [贡献指南](contribute.md)，了解我们的编辑规范和流程。

- **查看格式手册**
   
   为保证内容的统一性，请参考 [格式手册](format.md)。

- **GitHub 使用指南**
   
   如果你还不熟悉 GitHub 的编辑流程，请先阅读 [如何使用 GitHub](how-to-use-GitHub.md)。

## 注意事项

- 请在编辑前仔细核对内容的准确性
- 保持格式与原文一致
- 提交前检查是否有遗漏

<script>
  // 获取URL参数中的page值
  function getPageParam() {
    const params = new URLSearchParams(window.location.search);
    return params.get('page');
  }

  // 生成GitHub编辑链接并跳转
  function openReferenceURL() {
    const pageUrl = getPageParam();
    if (!pageUrl) {
      alert('未检测到页面路径参数，请从内容页面点击编辑按钮。');
      return;
    }
    
    // 移除开头的斜杠和末尾的斜杠
    let cleanPath = pageUrl.replace(/^\/|\/$/g, '');
    
    // 移除 .md 扩展名（如果有的话）
    cleanPath = cleanPath.replace(/\.md$/, '');
    
    // 跳转到GitHub编辑页面
    window.location.href = 'https://github.com/HowCam/howcam.github.io/edit/main/docs/' + cleanPath + '.md';
  }
</script>
<div style="margin: 2rem 0;">
  <button style="padding:.75em 1.25em; display:inline-block; line-height:1; text-decoration:none; white-space:nowrap; cursor:pointer; border:1px solid #42b983; border-radius:5px; background:#42b983; color:#fff; outline:none; font-size:.75em" onclick="openReferenceURL()"><b>开始编辑</b></button>
</div>

## 无法使用 GitHub？

如果你无法使用 GitHub 编辑，请参考 [其它贡献方式](contribute.md)。