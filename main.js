// Tool Tip Animation
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});


// Loader

const loader = document.getElementById("loader");
window.addEventListener("load",()=>{
    setTimeout(()=>{
        loader.style.display = "none";
    },2500)
})
