# Markdown扫盲

## Markdown 是什么？

Markdown 是一种轻量级的标记语言，可用于在纯文本文档中添加格式化元素。Markdown 由 John Gruber 于 2004 年创建，如今已成为世界上最受欢迎的标记语言之一。

1. 专注于文字内容；
2. 纯文本，易读易写，可以方便地纳入版本控制；
3. 语法简单，没有什么学习成本，能轻松在码字的同时做出美观大方的排版。

使用 Markdown 与使用 Word 类编辑器不同。在 Word 之类的应用程序中，单击按钮以设置单词和短语的格式，并且，更改立即可见。而 Markdown 与此不同，当你创建 Markdown 格式的文件时，可以在文本中添加 Markdown 语法，以指示哪些单词和短语看起来应该有所不同。

## 为什么要使用 Markdown？

当你可以通过按下界面中的按钮来设置文本格式时，为什么还要使用 Markdown 来书写呢？使用 Markdown 而不是 word 类编辑器的原因有：

- Markdown 无处不在。StackOverflow、CSDN、掘金、简书、GitBook、有道云笔记、V2EX、光谷社区等。主流的代码托管平台，如 GitHub、GitLab、BitBucket、Coding、Gitee 等等，都支持 Markdown 语法，很多开源项目的 README、开发文档、帮助文档、Wiki 等都用 Markdown 写作。
- Markdown 是纯文本可移植的。几乎可以使用任何应用程序打开包含 Markdown 格式的文本文件。如果你不喜欢当前使用的 Markdown 应用程序了，则可以将 Markdown 文件导入另一个 Markdown 应用程序中。这与 Microsoft Word 等文字处理应用程序形成了鲜明的对比，Microsoft Word 将你的内容锁定在专有文件格式中。
- Markdown 是独立于平台的。你可以在运行任何操作系统的任何设备上创建 Markdown 格式的文本。
- Markdown 能适应未来的变化。即使你正在使用的应用程序将来会在某个时候不能使用了，你仍然可以使用文本编辑器读取 Markdown 格式的文本。当涉及需要无限期保存的书籍、大学论文和其他里程碑式的文件时，这是一个重要的考虑因素。

## 如何使用Markdown？

你可以使用文本编辑器为纯文本文件添加 Markdown 格式的元素。或者，你也可以安装针对 macOS、Windows、Linux、iOS 和 Android 操作系统的 Markdown 应用程序。或者还可以使用一些基于 Web 的应用程序用于 Markdown 编写。

依赖于你所使用的应用程序，你可能无法实时预览格式化的文档。但是没关系。[根据 Gruber 的说法](https://daringfireball.net/projects/markdown/)，Markdown 的语法被设计为可读性强且不显眼，因此即使 Markdown 文件中的文本未经过渲染也易于阅读。

> Markdown 语法的首要设计目标是尽可能易读。基于这个目标，Markdown 格式的文档能够以纯文本形式原样发布，而不会看起来像被填满了标签或格式化指令。

### 编辑器

- OSX
  - [Typora](https://www.typora.io/)
  - [Byword](http://bywordapp.com/)
  - [iA Writer](http://ia.net/writer/)
  - [Mouapp](http://mouapp.com/)
  - [TEXTS](http://www.texts.io/)
  - [Kobito](http://kobito.qiita.com/)
- Windows
  - [Typora](https://www.typora.io/)
  - [MarkdownPad](http://markdownpad.com/)
  - [TEXTS](http://www.texts.io/)
- iOS
  - [Byword](http://bywordapp.com/)
  - [iA Writer](http://ia.net/writer/)

#### 通用文字编辑器

- [Sublime Text](http://www.sublimetext.com/)
- Vim
  - [plasticboy/vim-markdown](https://github.com/plasticboy/vim-markdown)
  - [tpope/vim-markdown](https://github.com/tpope/vim-markdown)

#### 在线编辑器

- [markdown](https://markdown.com.cn/editor/)
- [CodeMirror](http://codemirror.net/)
- [Dillinger](http://dillinger.io/)
- [Markgiu](https://github.com/bianchimro/markgiu)

### 浏览器扩展 Extension

- [Markdown Here](https://github.com/adam-p/markdown-here/)

### Markdown 扩展

- [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown)
- [MultiMarkdown](http://fletcherpenney.net/multimarkdown/)
- [Pandoc's markdown](http://johnmacfarlane.net/pandoc/README.html#pandocs-markdown)
- [PHP Markdown Extra](http://michelf.ca/projects/php-markdown/extra/)

### 引擎

- C
  - [Sundown](https://github.com/vmg/sundown)
- JavaScript
  - [showdown](https://github.com/cky/wmd), not maintained any more
  - [pagedown](https://code.google.com/p/pagedown/), StackOverflow
  - [coreyti/showdown](https://github.com/coreyti/showdown)
  - [marked](https://github.com/chjj/marked)
- PHP
  - [PHP Markdown](http://michelf.ca/projects/php-markdown/)
- Ruby
  - [Redcarpet](https://github.com/vmg/redcarpet)
  - [Maruku](https://github.com/bhollis/maruku)