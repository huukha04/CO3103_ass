const tab2d = document.getElementById("tab-2d");
const tab3d = document.getElementById("tab-3d");
const underline = document.getElementById("underline");
const container = document.getElementById("tabContainer");
const priceImage = document.getElementById("price-image");

function updateUnderline(element) {
  const containerRect = container.getBoundingClientRect();
  const elemRect = element.getBoundingClientRect();
  const offsetLeft = elemRect.left - containerRect.left;
  underline.style.transform = `translateX(${offsetLeft}px)`;
  underline.style.width = `${elemRect.width}px`;
}

function setActiveTab(activeTab, inactiveTab) {
  activeTab.classList.add("text-darkred");
  activeTab.classList.remove("text-white");
  inactiveTab.classList.add("text-white");
  inactiveTab.classList.remove("text-darkred");
}

function fadeOutIn(newSrc, newAlt) {
  priceImage.style.opacity = 0;
  setTimeout(() => {
    priceImage.src = newSrc;
    priceImage.alt = newAlt;
    priceImage.style.opacity = 1;
  }, 300);
}

tab2d.addEventListener("click", () => {
  if (!tab2d.classList.contains("text-darkred")) {
    setActiveTab(tab2d, tab3d);
    updateUnderline(tab2d);
    fadeOutIn("../imgs/prices2D.png", "Ticket prices 2D");
  }
});

tab3d.addEventListener("click", () => {
  if (!tab3d.classList.contains("text-darkred")) {
    setActiveTab(tab3d, tab2d);
    updateUnderline(tab3d);
    fadeOutIn("../imgs/prices3D.png", "Ticket prices 3D");
  }
});

window.onload = () => {
  setActiveTab(tab2d, tab3d);
  updateUnderline(tab2d);
};
window.onresize = () => {
  const activeTab = document.querySelector("#tabContainer .text-darkred");
  if (activeTab) updateUnderline(activeTab);
};
