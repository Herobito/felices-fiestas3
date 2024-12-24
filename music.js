const mutedButton = document.getElementById("muted")
const unmutedButton = document.getElementById("unmuted")
const audio = document.querySelector("audio")

mutedButton.addEventListener("click", () => {
    audio.play()
    mutedButton.classList.toggle("hidden")
    unmutedButton.classList.toggle("hidden")
});

unmutedButton.addEventListener("click", () => {
    audio.pause()
    mutedButton.classList.toggle("hidden")
    unmutedButton.classList.toggle("hidden")
});