document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading")
    const images = document.querySelectorAll("img")
    let loadedImages = 0
    images.forEach(img => {
        if (img.complete) {
            loadedImages++
        } else {
            img.addEventListener("load", () => {
                loadedImages++
                if (loadedImages === images.length) {
                    loadingScreen.classList.add("hidden")
                }
            })
            img.addEventListener("error", () => {
                loadedImages++
                if (loadedImages === images.length) {
                    loadingScreen.classList.add("hidden")
                }
            })
        }
    })
    if (loadedImages === images.length) {
        loadingScreen.classList.add("hidden")
    }
})