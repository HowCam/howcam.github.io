// GitHub API 获取贡献者数据
fetch('https://api.github.com/repos/howcam/howcam.github.io/contributors')
  .then(response => response.json())
  .then(contributors => {
    // 按贡献次数排序（从高到低）
    contributors.sort((a, b) => b.contributions - a.contributions);

    const container = document.getElementById("contributors");
    contributors.forEach(contributor => {
      const a = document.createElement("a");
      a.href = `https://github.com/${contributor.login}`;
      a.target = "_blank";  // 在新标签页打开

      const img = document.createElement("img");
      img.src = contributor.avatar_url;
      img.alt = contributor.login;
      img.style.width = "80px";
      img.style.height = "80px";
      img.style.borderRadius = "50%";
      img.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
      img.style.transition = "transform 0.3s";  // 平滑过渡
      img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.1)";  // 鼠标悬停时缩放
      });
      img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";  // 鼠标离开时恢复原始大小
      });

      // 显示贡献次数，并且将其链接到该贡献者的提交历史页面
      const contributionText = document.createElement("a");
      contributionText.href = `https://github.com/HowCam/howcam.github.io/commits?author=${contributor.login}`;
      contributionText.target = "_blank";  // 在新标签页打开
      contributionText.style.textAlign = "center";
      contributionText.style.marginTop = "5px";
      contributionText.textContent = `${contributor.contributions}次提交`;

      const wrapper = document.createElement("div");
      wrapper.style.display = "flex";
      wrapper.style.flexDirection = "column";
      wrapper.style.alignItems = "center";
      wrapper.appendChild(img);
      wrapper.appendChild(contributionText);

      a.appendChild(wrapper);
      container.appendChild(a);
    });
  })
  .catch(error => console.error('Error fetching contributors:', error));