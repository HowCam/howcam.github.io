发现错误？想一起完善？<a id="btn-startedit" style="padding: 0.75em 1.25em; display: inline-block; line-height: 1; text-decoration: none; white-space: nowrap; cursor: pointer; border: 1px solid #6190e8; border-radius: 5px; background-color: #6190e8; color: #fff; outline: none; font-size: 0.75em;" href="#" onclick="updateButtonHref()">编辑此页</a>

<script>
  function getQueryVariable(dft) {
    var reg = new RegExp('^#(.*)', 'i');
    var r = window.location.hash.match(reg);
    if (r && r[1] != '/') {
      return r[1] + '.md';
    }
    return dft;
  }

  function updateButtonHref() {
    var btn = document.getElementById("btn-startedit");
    btn.href = "https://github.com/HowCam/howcam.github.io/edit/master/docs" + getQueryVariable("/README.md");
  }

  updateButtonHref();
</script>

本页面的全部内容在 [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/legalcode.zh-hans) 协议之条款下提供，附加条款亦可能应用