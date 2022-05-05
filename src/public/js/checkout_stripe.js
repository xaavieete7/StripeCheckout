const formStripe = document.getElementById('payment-form');

if (formStripe) {
	addEventListener();
}

function addEventListener() {

	// Buttons
	const btn_1 = document.getElementById('btn_1');
	const btn_2 = document.getElementById('btn_2');

	btn_1.addEventListener('click', toStep2);
	btn_2.addEventListener('click', toStep3);

	// Headers
	const header_1 = document.getElementById('header_1');
	const header_2 = document.getElementById('header_2');
	const header_3 = document.getElementById('header_3');

	header_1.addEventListener('click', toStep1);
	header_2.addEventListener('click', toStep2);
	header_3.addEventListener('click', toStep3);

	// Key up validations
	onKeyupInputValidation();

}

function toStep1() {

	const step1 = document.getElementById('step__1');
	const step2 = document.getElementById('step__2');
	const step3 = document.getElementById('step__3');

	if (step1.classList.contains('d-none')) {
		step1.classList.remove('d-none');
	}

	if (!step2.classList.contains('d-none')) {
		step2.classList.add('d-none');
	}

	if (!step3.classList.contains('d-none')) {
		step3.classList.add('d-none');
	}

}

function toStep2() {

	if (!isValidContactForm()) {
		return;
	}

	const step1 = document.getElementById('step__1');
	const step2 = document.getElementById('step__2');
	const step3 = document.getElementById('step__3');

	if (!step1.classList.contains('d-none')) {
		step1.classList.add('d-none');
	}

	if (step2.classList.contains('d-none')) {
		step2.classList.remove('d-none');
	}

	if (!step3.classList.contains('d-none')) {
		step3.classList.add('d-none');
	}

}

function toStep3() {

	if (!isValidContactForm()) {
		return;
	}

	const step1 = document.getElementById('step__1');
	const step2 = document.getElementById('step__2');
	const step3 = document.getElementById('step__3');

	if (!step1.classList.contains('d-none')) {
		step1.classList.add('d-none');
	}

	if (!step2.classList.contains('d-none')) {
		step2.classList.add('d-none');
	}

	if (step3.classList.contains('d-none')) {
		step3.classList.remove('d-none');
	}

}

function isValidContactForm() {

	const inputs = document.getElementsByClassName('input__required');
	let valid = true;

	for (let i = 0; i < inputs.length; i++) {

		let input = inputs[i];
		let input_error_message = input.nextElementSibling;

		if (input.value === "") {

			valid = false;

			if (!input.classList.contains('input__error')) {
				input.classList.add('input__error');
			}

			if (input_error_message.classList.contains('d-none')) {
				input_error_message.classList.remove('d-none');
			}

		} else {

			if (input.classList.contains('input__error')) {
				input.classList.remove('input__error');
			}

			if (!input_error_message.classList.contains('d-none')) {
				input_error_message.classList.add('d-none');
			}

		}

	}

	// Auto scroll to the fist error
	if (!valid) {
		document.querySelector('.input__error').scrollIntoView({
			behavior: 'smooth'
		});
	}

	return valid;

}

function onKeyupInputValidation() {

	const inputs = document.getElementsByClassName('input__required');

	for (let i = 0; i < inputs.length; i++) {

		let input = inputs[i];
		let input_error_message = input.nextElementSibling;

		input.addEventListener("keyup", () => {

			if (input.value === "") {

				if (!input.classList.contains('input__error')) {
					input.classList.add('input__error');
				}

				if (input_error_message.classList.contains('d-none')) {
					input_error_message.classList.remove('d-none');
				}

			} else {

				if (input.classList.contains('input__error')) {
					input.classList.remove('input__error');
				}

				if (!input_error_message.classList.contains('d-none')) {
					input_error_message.classList.add('d-none');
				}

			}
		});

	}

}
