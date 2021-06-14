const faq = () => {
	const accordeon = document.querySelector(".accordeon");
	const elements = accordeon.querySelectorAll(".element");
	const elementContent = accordeon.querySelectorAll(".element-content");
	const elementsHeaders = accordeon.querySelectorAll(".title");

	const toggleContent = (index) => {
		elements.forEach((item, tabIndex) => {
			if (index === tabIndex) {
				item.classList.add("active");
				elementContent[tabIndex].style.display = "block";
			} else {
				item.classList.remove("active");
				elementContent[tabIndex].style.display = "none";
			}
		});
	};

	accordeon.addEventListener("click", (event) => {
		const target = event.target;

		if (target.matches(".title")) {
			elementsHeaders.forEach((item, index) => {
				if (item === target) {
					toggleContent(index);
				}
			});
		}
	});
};

export default faq;
