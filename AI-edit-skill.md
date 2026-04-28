开始编辑/开发前，需要运行：

mkdocs serve

开始运行开发服务器，并打开localhost:8000网页

运行前，需要将./mkdocs.yml下的plugins的git-committers插件和git-revision-date-localized插件相关代码注释掉，避免在开发过程中反复获取committers信息。

所有的配置都在mkdocs.yml下，包括文件目录。注意，在新增页面时，要及时同步更新yml中的nav内容。

学术用语务必准确，参考人教版教科书的内容。在必要时可以使用专属语法（见下方）

编辑时，注意可以使用mkdocs material的专属语法：

1. 提示块 Admonitions

!!! note "普通笔记"
    笔记内容

!!! tip "小贴士"
    提示内容

!!! info "信息"
    信息说明

!!! warning "警告"
    风险提醒

!!! danger "危险"
    高危警示

??? note "默认折叠"
    折叠隐藏内容

???+ note "默认展开"
    默认直接展开
2. 带标题代码块

```python title="Python 示例"
print("Hello MkDocs Material")
plaintext

### 3. 代码行号 + 高亮
```
```javascript linenums="1" hl_lines="2-3"
let a = 1;
let b = 2;
let c = 3;
plaintext

### 4. 代码行标注
```
```css
.box { padding: 10px; } // (1)
内边距设置说明
plaintext

### 5. 按钮 Buttons
```
[普通按钮](https://example.com){ .md-button }
[主按钮](https://example.com){ .md-button .md-button--primary }
[下载 :material-download:](https://example.com){ .md-button }
6. 图标 Icons

Material图标：:material-home: :material-github:
FontAwesome图标：:fontawesome-solid-github: :fontawesome-solid-user:
7. 标签页 Tabs

=== "标签一"
    标签一内容

=== "标签二"
    标签二内容
8. 图片增强

![居中图片](demo.png){ align=center }
![左对齐](demo.png){ align=left }
![右对齐](demo.png){ align=right }
![缩放图片](demo.png){ width=50% }
9. 文本高亮

==高亮显示文本内容==
10. 键盘按键

++Ctrl+S++
++Command+Enter++
++Shift+Esc++
11. 数学公式

行内公式：$E=mc^2$

\[
\sum_{i=1}^n i = \frac{n(n+1)}{2}
\]
12. 任务列表

- [x] 已完成任务
- [ ] 未完成任务
- [ ] 待办任务
13. 页面 Front Matter

---
title: 页面标题
icon: material/rocket
status: new
tags: [MkDocs, Material]
hide:
  - navigation
  - toc
toc:
  depth: 3
  title: 自定义目录
---
14. 页面内目录

[TOC]
15. 隐藏注释

<!-- 注释内容，页面不渲染显示 -->

