// 你可以在这里添加一些交互功能，例如：
// 平滑滚动效果
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 未来可以添加更多如：
// - 表单提交逻辑
// - 动态加载内容
// - 动画效果等