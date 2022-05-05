const navMenu = document.getElementById("menu");
const navToggle = document.querySelector(".menu__toggle");

navToggle.addEventListener("click", () => {
	const isVisible = navMenu.getAttribute("data-visible") === "true";

	if (isVisible) {
		navToggle.setAttribute("aria-expanded", false);
		navMenu.setAttribute("data-visible", false);
	} else {
		navToggle.setAttribute("aria-expanded", true);
		navMenu.setAttribute("data-visible", true);
	}
});
