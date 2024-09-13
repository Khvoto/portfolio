export function caseFunctions() {
  caseImageShifter();
}

function caseImageShifter() {
  const cases = Array.from(document.getElementsByClassName("wl-case"));
  cases.forEach((caseElement, index) => {
    const left = caseElement.querySelector("span#left");
    const right = caseElement.querySelector("span#right");
    const images = caseElement.querySelectorAll(".case-img");
    let shown = 0;

    console.log("shown:", shown);
    console.log("img:", images);

    left.addEventListener("click", () => {
      // Add code to slide left
      shown--;
      images.forEach((img) => (img.style.display = "none"));
      images[shown].style.display = "block";

      if (shown < images.length - 1) {
        right.style.display = "block";
      }
      if (shown === 0) {
        left.style.display = "none";
      }

      console.log("shown:", shown);
    });

    right.addEventListener("click", () => {
      // Add code to slide right
      shown++;
      images.forEach((img) => (img.style.display = "none"));
      images[shown].style.display = "block";

      if (shown === images.length - 1) {
        right.style.display = "none";
      }
      if (shown > 0) {
        left.style.display = "block";
      }

      console.log("shown:", shown);
    });
  });
}
