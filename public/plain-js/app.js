setTimeout(() => {
    const element = document.querySelector(".loading-container");
    element.remove();
    const overflowBody = document.getElementById("getme-hidden")
    overflowBody.style.overflow = 'auto'
}, 5000)