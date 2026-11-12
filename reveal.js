const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const introItems = ["#intro h1", "#intro p", "#intro img"];
const swipeLeftItems = ["h2", "#about p","#contact > p" ];
const swipeRightItems = ["#projects h3", "#projects p", "#projects img", "address"];

function startReveal() {
    const sr = ScrollReveal({
        duration: 700,
        easing: "ease-out"
    })};

for (let i = 0; i < introItems.length; i++) {
    sr.reveal(introItems[i], { origin: "bottom", distance: "24px", delay: i * 150 });
}

for (let i = 0; i < swipeLeftItems.length; i++) {
    sr.reveal(swipeLeftItems[i], { origin: "left", distance: "60px", interval: 120 });
}
 
for (let i = 0; i < swipeRightItems.length; i++) {
    sr.reveal(swipeRightItems[i], { origin: "right", distance: "60px", interval: 120 });
}

 