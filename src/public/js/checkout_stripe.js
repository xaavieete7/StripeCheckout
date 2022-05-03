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
		step1.classList.add('d-none');
	}

}

function toStep3() {

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
