# 如何使用GitHub

## 前言

首先，本页面是一篇「新手向」的扫盲指南，老鸟请绕道。

本页面将介绍 GitHub 平台的基本使用方法。将着重讲解如何使用 GitHub 向 **Starship** 提交更改。

## GitHub简介

GitHub 是一个面向开源及私有软件项目的托管平台，因为只支持 Git 作为唯一的版本库格式进行托管，故名 GitHub。

!!! warning
    由于GitHub属于「国外网站」，国内直接访问速度可能会很慢，需要足够的耐心等待。

    有条件可以使用技术进行「科学上网」。

## 敲开 GitHub 的大门 · 注册账号

GitHub官方文档： [在GitHub上创建账户 - GitHub 文档](https://docs.github.com/zh/get-started/start-your-journey/creating-an-account-on-github)



想要使用GitHub，首先需要注册一个账户。

1. 访问[GitHub官网](https://github.com)

   ![Main](https://pic.imgdb.cn/item/664853ffd9c307b7e974bc52.png)

2. 点击右上角`Sign up`，进入注册界面。（此步骤可能加载很慢，耐心等待，会加载出来的）

   加载完成后如下图。

   ![](https://pic.imgdb.cn/item/66486201d9c307b7e98628cf.png)

   根据提示，输入信息**（username比较重要，最好起对我们具有标识性的用户名）**。

   ![](https://pic.imgdb.cn/item/66486201d9c307b7e98629a8.png)

   过验证。

   ![](https://pic.imgdb.cn/item/66486202d9c307b7e98629f9.png)

   邮箱接收验证码。

   ![](https://pic.imgdb.cn/item/66486202d9c307b7e9862a60.png)

   填写问题（随意填）。

   ![](https://pic.imgdb.cn/item/66489c76d9c307b7e9cccbe3.png)

   ![](https://pic.imgdb.cn/item/66489c77d9c307b7e9ccccd6.png)

   此处选择`continue for free`。

   ![](https://pic.imgdb.cn/item/66489c78d9c307b7e9cccecc.png)

   

3. 注册完成后，登录账号。

   ![](https://pic.imgdb.cn/item/66486200d9c307b7e9862864.png)

   **恭喜你，已经成功获得GitHub账号了！请牢记账号密码！**

## 初识GitHub

注册并登录账号后，就算是正式开启GitHub的大门了。下面将介绍GitHub的一些基本功能。

### 完善和修改个人信息

1. 点击右上角头像。
   ![](https://pic.imgdb.cn/item/66489c26d9c307b7e9cc7d02.png)

2. 选择`Settings`。

   ![](https://pic.imgdb.cn/item/6648a634d9c307b7e9d7ff49.png)

3. 设置对应的姓名、头像、个人简介等。

   ![](https://pic.imgdb.cn/item/6648a632d9c307b7e9d7fc9e.png)

### GitHub 术语解释

为了大家进一步了解和使用 GitHub，下面列举了 GitHub 的常用术语（也可以说是基本概念）：

**Repository**：简称Repo，可以理解为“仓库”，我们的项目就存放在仓库之中。也就是说，如果我们想要建立项目，就得先建立仓库；有多个项目，就建立多个仓库。

**Issues**：可以理解为“问题”，举一个简单的例子，如果我们开源一个项目，如果别人看了我们的项目，并且发现了bug，或者感觉那个地方有待改进，他就可以给我们提出Issue，等我们把Issues解决之后，就可以把这些Issues关闭；反之，我们也可以给他人提出Issue。你可以在[ **Starship** 的issues](https://github.com/HowCam/howcam.github.io/issues)列表中提出你的 issue 。这些 Issues 将会得到及时妥善的解决。

**Star**：可以理解为“点赞”，当我们感觉某一个项目做的比较好之后，就可以为这个项目点赞，而且我们点赞过的项目，都会保存到我们的Stars之中，方便我们随时查看。在 GitHub 之中，如果一个项目的点星数能够超百，那么说明这个项目已经很不错了。欢迎大家给 [**Starship**项目](https://github.com/HowCam/howcam.github.io/) 加一颗星。

**Fork**：可以理解为“拉分支”，如果我们对某一个项目比较感兴趣，并且想在此基础之上开发新的功能，这时我们就可以Fork这个项目，这表示复制一个完成相同的项目到我们的 GitHub 账号之中，而且独立于原项目。之后，我们就可以在自己复制的项目中进行开发了。

**Pull Request (pr)**：可以理解为“提交请求”，此功能是建立在Fork之上的，如果我们Fork了一个项目，对其进行了修改，而且感觉修改的还不错，我们就可以对原项目的拥有者提出一个Pull请求，等其对我们的请求审核，并且通过审核之后，就可以把我们修改过的内容合并到原项目之中，这时我们就成了该项目的贡献者（contributor）。

**Merge：**可以理解为“合并”，如果别人Fork了我们的项目，对其进行了修改，并且提出了Pull请求，这时我们就可以对这个Pull请求进行审核。如果这个Pull请求的内容满足我们的要求，并且跟我们原有的项目没有冲突的话，就可以将其合并到我们的项目之中。当然，是否进行合并，由我们决定。在 **Starship** 项目中，如果你按照要求提交了你的pr，并且没有内容大的问题，你的pr就可以被Merge。

**Watch：**可以理解为“在看”，如果我们Watch了一个项目，之后，如果这个项目有了任何更新，我们都会在第一时候收到该项目的更新通知。

**Gist：**如果我们没有项目可以开源或者只是单纯的想分享一些代码片段的话，我们就可以选择Gist。

## 如何使用GitHub参与Starship文档编辑

一般地，你需要将本仓库 **fork** ，然后在你 **fork** 的仓库中进行更改。更改完成并检查无误后，你需要向我们提交 **Pull Request** 。

简易地，你可以点击网页下方的「编辑此页」按钮，然后在新打开的网页中点击「开始编辑」，跳转到 GitHub 根据 GitHub 的指引开始进行文档编辑。

下面将演示如何通过网页在 GitHub 上完成一次完整的文档编辑与提交。

### 第一步：从「编辑此页」跳转到 GitHub

1. 打开你想要修改的页面（例如本页面），滚动到正文顶部，点击「**编辑**」图标按钮。

2. 浏览器会跳转到[参与编辑页面](edit.md)。在正式编辑之前，请再次确认你已经阅读了[贡献指南](contribute.md)和[格式手册](format.md)。阅读完毕后，点击页面右下方的「**开始编辑**」按钮。

3. 此时，浏览器会跳转到 GitHub 上对应文件的编辑页面。地址栏中的链接形如：

   ```
   https://github.com/HowCam/howcam.github.io/edit/main/docs/intro/how-to-use-GitHub.md
   ```

   其中 `docs/intro/how-to-use-GitHub.md` 就是该文件在仓库中的路径。

!!! warning
    跳转和加载 GitHub 页面可能较慢，请耐心等待。如果你的浏览器开启了**自动翻译**功能，请先将其**关闭**——自动翻译有时会错误地改写文件名，从而破坏仓库的目录结构。

### 第二步：在 GitHub 上修改文件

编辑页面分为两部分：

- 一部分是编辑器，显示文件的 Markdown 源代码，你可以直接在这里增删改内容；
- 另一半部分是预览区，展示渲染后的效果，方便你检查排版是否正确。

在编辑器中完成修改后，对照预览区检查一遍，确认内容准确无误、格式符合[格式手册](format.md)的要求。

编辑框下方有两个填写框：

1. 第一个是 **commit 摘要**，请简要描述本次修改的内容；
2. 第二个（可选）是 **commit 正文**，用于详细说明修改的原因和内容。

关于 commit 信息的书写规范，请参见[贡献指南中的 Commit 信息格式规范](contribute.md#commit-信息格式规范)。

### 第三步：提交修改（Propose changes）

填写好 commit 信息后，点击页面下方的绿色按钮「**Propose changes**」。

GitHub 会自动为你创建一个分支，并把这次修改提交到该分支中。你无需手动 **Fork** 仓库——GitHub 已经帮我们完成了这一步。

### 第四步：创建 Pull Request

提交成功后，页面会跳转到你的分支仓库。此时页面上方会出现一个绿色的「**Create pull request**」按钮，点击它。

在打开的页面中：

1. 向下滚动，仔细检查「Files changed」标签页下你所作出的全部修改，确认没有错误或多余的改动；
2. 按照[贡献指南中的 Pull Request 信息格式规范](contribute.md#pull-request-信息格式规范)填写标题和内容；
3. 确认无误后，点击绿色的「**Create pull request**」按钮。

恭喜你，你的 Pull Request（PR）已经成功提交到仓库！

### 第五步：等待审核与合并

提交 PR 后，管理员会对其进行审核。如果你的修改符合要求、内容没有明显问题，PR 就会被 **Merge**（合并）到主仓库中。

!!! note
    在你的更改被合并之前，对 Starship 内容所作的修改**不会**出现在主站上，因此无需担心修改会破坏正在展示的内容。

合并后，你就是 **Starship** 的贡献者（contributor）了。你的修改会在网站重新部署后出现在页面上。

???+ tip "没有看到修改生效？"
    网站部署需要一定时间。如果合并后页面没有立即更新，可以稍等片刻，或强制刷新浏览器缓存（Windows 下按 `Ctrl + F5`，macOS 下按 `Cmd + Shift + R`）后再查看。

## Git 与 GitHub 的区别

很多新手会混淆 Git 和 GitHub，这里先简单说明一下两者的区别：

- **Git**：一款安装在你电脑上的**版本控制工具**，用于记录文件的每一次改动，方便你随时「存档」和「读档」。
- **GitHub**：一个基于 Git 的**代码托管与协作平台**，把项目放到云端，方便展示、分享以及与他人协作。

可以把它类比为：Git 是「存档 / 读档」的工具，而 GitHub 是存放、分享这些存档的「云盘 + 社区」。

!!! note
    在本站参与文档编辑，**只使用网页版 GitHub 就足够了**，不需要在本地安装 Git。如果你对命令行感兴趣，可以参考下一节的进阶内容。

## 给项目加星、关注与提问

### 加星（Star）与关注（Watch）

在 [Starship 项目主页](https://github.com/HowCam/howcam.github.io/) 的右上角，你可以看到 `Star` 和 `Watch` 两个按钮：

- 点击 `Star` 可以为项目「点赞」并收藏，之后可以在个人主页的 `Stars` 列表中随时查看；
- 点击 `Watch`，在下拉菜单中选择 `Customize` → `All Activity`，项目有任何更新时你都会第一时间收到通知。

### 提出问题（Issue）

如果你发现文档中有错误、有改进建议，或者在编辑过程中遇到了困难，都可以通过 [Issues](https://github.com/HowCam/howcam.github.io/issues) 向我们反馈。

为了让问题更快得到解决，提交 Issue 时请尽量包含以下内容：

1. **页面链接**：出问题的页面地址；
2. **问题描述**：哪里出了问题，你期望的效果是什么；
3. **截图或复现步骤**：如果涉及显示异常或操作问题，附上截图会更有帮助。

!!! tip
    提交前请先搜索一下已有的 Issue，避免重复提交。

## 本地 Git 基础（进阶选读）

如果你不满足于网页编辑，希望在本地用自己喜欢的文本编辑器（如 VS Code、Typora）撰写文档，可以学习一下 Git 的基本用法。

### 准备工作

1. 前往 [Git 官网](https://git-scm.com/) 下载并安装 Git；
2. 打开终端，配置你的用户名和邮箱（commit 记录会用到）：

   ```
   git config --global user.name "你的用户名"
   git config --global user.email "你的邮箱"
   ```

### 工作流程

1. 在 GitHub 网页上 **Fork** 本仓库，然后把自己账号下的仓库克隆到本地；
2. 创建一个新分支，并在本地修改文档；
3. 暂存并提交改动，确认无误后推送到自己账号下的远程仓库；
4. 最后在 GitHub 网页上发起 Pull Request，等待管理员审核。

??? note "展开命令示例"

    ```
    # 1. 克隆你 Fork 后的仓库（把 <你的用户名> 替换为你的 GitHub 用户名）
    git clone https://github.com/<你的用户名>/howcam.github.io.git
    cd howcam.github.io

    # 2. 创建一个新分支
    git checkout -b my-doc-change

    # 3. 用编辑器修改文档，然后查看改动
    git status
    git diff

    # 4. 暂存并提交改动
    git add docs/intro/how-to-use-GitHub.md
    git commit -m "feat(intro/how-to-use-GitHub): 补充使用说明"

    # 5. 推送到你的远程仓库
    git push -u origin my-doc-change
    ```

!!! warning
    提交时，commit 信息仍需遵守[贡献指南中的格式规范](contribute.md#commit-信息格式规范)。如果 `git push` 时遇到网络问题，可检查代理设置，或稍后重试。

## 常见问题排查

??? question "GitHub 打开很慢或加载不出来怎么办？"

    GitHub 属于境外网站，国内访问可能不稳定。请耐心等待，或尝试更换网络环境。如果页面始终无法加载，也可以先通过[其它贡献方式](contribute.md)提交内容。

??? question "页面被浏览器自动翻译后，文件名或内容异常怎么办？"

    请关闭浏览器的自动翻译功能，然后重新进入编辑页面。自动翻译有时会错误地改写文件名，从而破坏仓库的目录结构，提交前务必检查文件路径是否正确。

??? question "PR 已经合并，为什么主站上看不到修改？"

    首先确认 PR 是否真的已被合并。合并后网站的重新部署还需要一定时间，可以稍等片刻，并强制刷新浏览器缓存（Windows 按 `Ctrl + F5`，macOS 按 `Cmd + Shift + R`）后再查看。

??? question "PR 提示合并冲突（conflict）怎么办？"

    这通常说明你修改的内容与主仓库的最新版本有重叠。请不要使用强制推送覆盖，可在 PR 中留言说明情况，管理员会协助处理。

??? question "忘记 GitHub 账号密码怎么办？"

    可以在 [GitHub 登录页](https://github.com/login) 点击 `Forgot password?`，通过注册时使用的邮箱找回。

## 学习资源

- [GitHub Skills](https://skills.github.com/)：GitHub 官方提供的互动式入门教程，手把手带你完成第一次提交；
- [GitHub 文档（中文）](https://docs.github.com/zh)：最权威的参考手册；
- [Markdown 扫盲](Markdown.md)：学习本站文档使用的标记语言；
- [格式手册](format.md)：了解本站的排版与格式要求；
- [贡献指南](contribute.md)：了解贡献范围、质量标准和各种贡献方式。

## 小结

至此，你已经掌握了使用 GitHub 参与 Starship 文档编辑的完整流程：

1. 注册并登录 GitHub 账号；
2. 从「编辑此页」跳转到 GitHub 的文件编辑页面；
3. 修改文件并填写 commit 信息；
4. 提交修改（Propose changes）；
5. 创建 Pull Request；
6. 等待管理员审核并合并。

在实战之外，本文还介绍了 Git 与 GitHub 的区别、Star / Watch / Issue 等常用功能、本地 Git 命令行工作流，以及常见问题的排查方法。如果你是刚刚起步的新手，建议先从「网页编辑」入手，熟悉之后再尝试本地编辑。

如果你在操作中遇到任何问题，可以通过[Issues](https://github.com/HowCam/howcam.github.io/issues)提出，或加入我们的[QQ讨论群](https://qm.qq.com/q/q7zRPbRU0S)寻求帮助。

感谢你为 Starship 作出的每一份贡献！🎉

\- The End \-
