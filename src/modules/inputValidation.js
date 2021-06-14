const validate = () => {
	document.addEventListener("input", (event) => {
		const target = event.target;

		if (target.matches("input[name='tel']")) {
			target.value = target.value.replace(/[^\d+]/g, "");
			if (target.value.length > 12) {
				target.value = target.value.slice(0, 12);
			}
		}
		if (target.matches("input[name='fio']")) {
			target.value = target.value.replace(/[^а-яё\s]/gi, '').replace(/\s+/g, ' ').replace(/^\s/g, '');
		}
	});

	document.addEventListener("blur", (event) => {
		const target = event.target;
		if (target.matches("input[name='tel']")) {
			if (target.value.charAt(0) !== "+" && target.value.charAt(1) !== "7") {
				target.value = "+7" + target.value.slice(2);
			}
		}
		if (target.matches("input[name='fio']")) {
			if (target.value.trim() !== "") {
				const temp = target.value.split(/\s+/);
				if (temp.length) {
					const output = temp.map((item) => {
						if (item !== "") {
							item = item[0].toUpperCase() + item.slice(1).toLowerCase();
							return item;
						}
					});
					target.value = output.join(" ").replace(/\s$/g, '');
				}
			}
		}
	}, true);

};

export default validate;
