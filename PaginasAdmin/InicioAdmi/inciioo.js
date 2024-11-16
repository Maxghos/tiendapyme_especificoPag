function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll(".bar");
    bars.forEach(bar => {
        const value = bar.getAttribute("data-value");
        bar.style.width = `${value}%`;
    });
});