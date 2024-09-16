export function backgroundSwapper() {
  const elements = document.querySelectorAll(
    ".byO-background-swapper-thumbnail",
  );
  const target = document.getElementById("ByO-background");
  const backgroundImages = [
    "/src/assets/abisko1.webp",
    "/src/assets/jotunheimen.webp",
    "/src/assets/peru-background.webp",
  ];
  elements.forEach((element, index) => {
    element.addEventListener("click", () => {
      const backgroundImage = backgroundImages[index] || backgroundImages[0];
      target.setAttribute("src", `${backgroundImage}`);
    });
  });
}
