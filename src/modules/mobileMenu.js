const mobileMenu = () => {
	const mobileMenu = document.querySelector(".mobile-menu");
	const mobileOverlay = document.querySelector(".mobile-overlay");

	document.addEventListener("click", (event) => {
		const target = event.target;

		if (target.closest(".mob-menu-btn")) {
			mobileMenu.style.right = "0px";
			mobileOverlay.style.display = "block";
		}

		if (target.matches(".mobile-overlay") || target.matches(".mobile-menu-close") || target.matches(".mobile-menu > ul a")
		) {
			mobileMenu.style.right = "";
			mobileOverlay.style.display = "";
		}
	});
};

export default mobileMenu;
