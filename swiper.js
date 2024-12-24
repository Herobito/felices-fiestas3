const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    parallax: true,
    loop: true,
    autoplay: false,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.animation-button-scroll',
    },
    on: {
        init: function () {
            const paragraphs = document.querySelectorAll(".spellsEffect")
            console.log(paragraphs)
            paragraphs.forEach((t) => {
                const text = t.textContent
                t.textContent = "";
                [...text].forEach((char,i) => {
                    const span = document.createElement("span");
                    span.textContent = char;
                    span.style.opacity = "0";
                    span.style.transition = "opacity 0.3s";
                    t.appendChild(span);
                });
            })
        },
        transitionEnd: function (swiper) {
            var texts = swiper.slides[swiper.realIndex]
            texts.querySelectorAll(".spellsEffect span").forEach((span, index) => setTimeout(() => {
                span.style.opacity = "1"
                // if (index > texts.dataset.startSpell && index < texts.dataset.endSpell) {
                //     span.style.color = "rgb(255,80,80)";
                    
                // }
            }, index * 20) )
        }
    },
})