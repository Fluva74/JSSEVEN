const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const cards = document.querySelector(".carousel").children;
const totalCards = cards.length;
let index = 0;

prev.addEventListener("click", () => {
    nextCard("next");
});

next.addEventListener("click", () => {
    nextCard("prev");
});

function nextCard(direction) {
    if (direction === "next") {
        index++;
        if (index === totalCards) {
            index = 0;
        }
    } else {
        if (index === 0) {
            index = totalCards - 1;
        } else {
            index--;
        }
    }

    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove("main");
    }
    cards[index].classList.add("main");
}
