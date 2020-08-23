document.querySelector("#dark").addEventListener("click", () => {
  document.documentElement.style.setProperty("--background", "black");
  document.documentElement.style.setProperty("--text", "white");
});

document.querySelector("#light").addEventListener("click", () => {
  document.documentElement.style.setProperty("--background", "white");
  document.documentElement.style.setProperty("--text", "black");
});
