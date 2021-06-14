const callback = () => {
	const callbackModal = document.querySelector("#callback");
	const callbackInputs = document.getElementById("form");

	//слушатель событий на документ, тк много элементов, открывающих попап
	document.addEventListener("click", (event) => {
		const target = event.target;

		if (target.matches(".fancyboxModal")) {
			callbackModal.style.display = "block";
			callbackModal.querySelector(".form-wrapper").classList.add("animate__animated");
			callbackModal.querySelector(".form-wrapper").classList.add("animate__fadeIn");
		}
	});

	callbackModal.addEventListener("click", (event) => {
		let target = event.target;

		if (target.matches(".modal-close > img")) {
			callbackModal.style.display = "";
			callbackInputs.reset();
		} else {
			target = target.closest(".form-wrapper");
			if (!target) {
				callbackModal.style.display = "";
				callbackInputs.reset();
			}
		}
	});
};

export default callback;
