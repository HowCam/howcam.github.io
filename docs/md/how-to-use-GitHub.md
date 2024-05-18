# 如何使用GitHub

## 前言

首先，本页面是一篇「新手向」的扫盲指南，老鸟请绕道。

本页面将介绍 GitHub 平台的基本使用方法。将着重讲解如何使用 GitHub 向 **Starship** 提交更改。

## GitHub简介

GitHub 是一个面向开源及私有软件项目的托管平台，因为只支持 Git 作为唯一的版本库格式进行托管，故名 GitHub。

> [!note]由于GitHub属于「国外网站」，国内直接访问速度可能会很慢，需要足够的耐心等待。
>
> 有条件可以使用技术进行「科学上网」。

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

详细的方法请自行必应搜索。本文不多赘述。
