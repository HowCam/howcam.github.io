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

### 页面更新历史

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

  // 显示页面更新历史
  async function showPageHistory() {
    const pageUrl = getPageParam();
    if (!pageUrl) {
      document.getElementById('history-container').innerHTML = '<p>未检测到页面路径参数，无法显示历史记录。</p>';
      return;
    }

    // 移除开头的斜杠和末尾的斜杠
    let cleanPath = pageUrl.replace(/^\/|\/$/g, '');
    
    // 确保路径以 docs/ 开头
    if (!cleanPath.startsWith('docs/')) {
      cleanPath = 'docs/' + cleanPath;
    }
    
    // 移除 .md 扩展名（如果有的话）
    cleanPath = cleanPath.replace(/\.md$/, '');

    try {
      const response = await fetch(`https://api.github.com/repos/HowCam/howcam.github.io/commits?path=${cleanPath}.md&per_page=10`);
      const commits = await response.json();

      if (!Array.isArray(commits) || commits.length === 0) {
        document.getElementById('history-container').innerHTML = '<p>暂无该页面的历史记录。</p>';
        return;
      }

      const historyList = commits.map(commit => {
        const date = new Date(commit.commit.author.date).toLocaleString('zh-CN', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit'
        });
        const author = commit.commit.author.name;
        const authorAvatar = commit.author ? commit.author.avatar_url : '';
        const message = commit.commit.message.split('\n')[0];
        const url = commit.html_url;
        
        const avatarHtml = authorAvatar ? 
          `<img src="${authorAvatar}" alt="${author}" style="width: 20px; height: 20px; border-radius: 50%; vertical-align: middle; margin-left: 4px;">` : '';
        
        return `<li style="display: flex; align-items: center; justify-content: space-between; padding: 6px 12px; background: #e8f5e9; border-radius: 4px; margin-bottom: 4px; font-size: 0.85em;">
          <span><strong>${date}</strong> ${author}${avatarHtml} <span style="color: #666;">${message}</span></span>
          <a href="${url}" target="_blank" style="color: #2e7d32; text-decoration: none; white-space: nowrap; margin-left: 8px;">查看 →</a>
        </li>`;
      }).join('');

      document.getElementById('history-container').innerHTML = `<div style="max-height: 200px; overflow-y: auto; border: 1px solid #c8e6c9; border-radius: 8px; padding: 8px;"><ul style="list-style: none; padding: 0; margin: 0;">${historyList}</ul></div>`;
    } catch (error) {
      console.error('获取历史记录失败:', error);
      document.getElementById('history-container').innerHTML = '<p>获取历史记录失败，请刷新页面重试。</p>';
    }
  }

  // 页面加载完成后获取历史
  window.addEventListener('DOMContentLoaded', showPageHistory);
</script>

<div id="history-container" style="margin: 2rem 0;">
  <p>加载中...</p>
</div>

<div style="margin: 2rem 0; text-align: right;">
  <button style="padding:.75em 1.25em; display:inline-block; line-height:1; text-decoration:none; white-space:nowrap; cursor:pointer; border:1px solid #42b983; border-radius:5px; background:#42b983; color:#fff; outline:none; font-size:.75em" onclick="openReferenceURL()"><b>开始编辑</b></button>
</div>

## 无法使用 GitHub？

如果你无法使用 GitHub 编辑，请参考 [其它贡献方式](contribute.md)。