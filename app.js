let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".front-page",
        start: "0%",
        end: "100%",
        scrub: true,
        pin: true,

        // markers:true
    }
});

tl.fromTo(".front-page", {clipPath: "circle(5%)"}, {clipPath: "circle(75%)", duration: 3});

tl.fromTo(".music-note", {scale: 0.5, opacity: 1}, {scale: 0, opacity: 0, duration: 3}, "-=3")
tl.fromTo(".title", {opacity: 0}, {opacity:1, duration: 3})
tl.fromTo(".sub-title", {opacity: 0}, {opacity:1, duration: 3})
