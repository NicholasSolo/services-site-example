const showArrow = () => {
	const arrow = document.getElementById("totop");
	const servicesSection = document.querySelector(".services-section");

	arrow.style.display = "none";


	window.addEventListener("scroll", () => {
		const servicePosition = servicesSection.getBoundingClientRect();

		if (servicePosition.top <= 0) {
			arrow.style.display = "block";
		} else {
			arrow.style.display = "none";
		}
	});

};

export default showArrow;
