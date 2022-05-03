const navMenu = document.getElementById("nav-menu");
const navToggle = document.querySelector(".mobile-nav-toggle");

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
