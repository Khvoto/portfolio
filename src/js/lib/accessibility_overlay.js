export function accessibility() {
  const slider = document.getElementById("accessibility-slider");
  const target = Array.from(document.getElementsByClassName("accessibility"));

  slider.oninput = () => {
    target.forEach((element) => {
      element.style.backgroundColor =
        "rgba(39, 39, 39," + slider.value / 100 + ")";
    });
  };
}
