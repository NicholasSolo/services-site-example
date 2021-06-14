const sendForm = () => {
	const form = document.querySelector("#form");
	const callbackPopup = document.getElementById("callback");
	const resultPopup = document.getElementById("result");
	const errorPopup = document.getElementById("error");
	const preloader = document.querySelector(".preloader");


	resultPopup.addEventListener("click", (event) => {
		let target = event.target;

		if (
			target.matches(".close-result-popup > img") ||
      target.matches(".result-close")
		) {
			resultPopup.style.display = "";
		} else {
			target = target.closest(".form-wrapper");
			if (!target) {
				resultPopup.style.display = "";
			}
		}
	});
	errorPopup.addEventListener("click", (event) => {
		let target = event.target;

		if (
			target.matches(".close-error-popup > img") ||
      target.matches(".error-close")
		) {
			errorPopup.style.display = "";
		} else {
			target = target.closest(".form-wrapper");
			if (!target) {
				errorPopup.style.display = "";
			}
		}
	});

	const postData = (body) =>
		fetch("/server.php", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body),
		});

	const postHandler = (form, event) => {
		event.preventDefault();

		if (
			form.querySelector("[name='tel']").value.length < 6 ||
      form.querySelector("[name='fio']").value.length < 2
		) {
			return;
		}

		form.append(preloader);
		preloader.style.display = "block";

		const formData = new FormData(form);
		const body = {};
		for (const value of formData.entries()) {
			body[value[0]] = value[1];
		}
		postData(body)
			.then((response) => {
				if (response.status !== 200) {
					throw new Error("network failed");
				}

				preloader.style.display = "";
				callbackPopup.style.display = '';
				resultPopup.style.display = 'block';

				setTimeout(() => {
					resultPopup.style.display = '';
				}, 5000);
			})
			.catch((error) => {

				console.error(error);

				preloader.style.display = "";
				callbackPopup.style.display = '';
				errorPopup.style.display = 'block';

				setTimeout(() => {
					errorPopup.style.display = '';
				}, 5000);
			});

		form.reset();
	};


	form.addEventListener("submit", (event) => {
		postHandler(form, event);
	});
};

export default sendForm;
