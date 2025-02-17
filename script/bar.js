window.addEventListener("scroll", function () {
    const progressBar = document.getElementById("progress-bar");
    const contentHeight = document.querySelector("main").offsetHeight;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const headerHeight = document.querySelector("header").offsetHeight;
    const scrolled = Math.max(0, (window.pageYOffset - headerHeight) / (maxScroll - headerHeight) * 100); 
    progressBar.style.width = scrolled + "%";
});

