const menuHamburger = document.querySelector(".fa-bars");
const navLinks = document.querySelector(".nav-links");
const secText = document.querySelector('.sec-text');
const firsttext = document.querySelector('.first-text');

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
  secText.classList.toggle('open');
  firsttext.classList.toggle('open');
});



const text = document.querySelector(".sec-text");
const phrases = ["Front-End Developer", "Learning Enthusiastic"];
let currentPhraseIndex = 0;

const textLoad = () => {
  let phrase = phrases[currentPhraseIndex];
  let currentCharacterIndex = 0;

  const typingInterval = setInterval(() => {
    text.textContent += phrase[currentCharacterIndex];
    currentCharacterIndex++;

    if (currentCharacterIndex === phrase.length) {
      clearInterval(typingInterval);
      setTimeout(() => {
        deleteText();
      }, 2000);
    }
  }, 100);

  const deleteText = () => {
    const deletingInterval = setInterval(() => {
      text.textContent = text.textContent.slice(0, -1);
      currentCharacterIndex--;

      if (currentCharacterIndex === 0) {
        clearInterval(deletingInterval);
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(() => {
          textLoad();
        }, 1000);
      }
    }, 50);
  };
};

textLoad();



