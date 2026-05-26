// 初始化 Mermaid
document.addEventListener("DOMContentLoaded", function() {
    mermaid.initialize({
        startOnLoad: true,
        theme: 'forest',
        securityLevel: 'loose',
        flowchart: {
            useMaxWidth: true,
            htmlLabels: true
        }
    });
});