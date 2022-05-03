
window.onload = function () {

	const form = document.getElementById('payment-form');

	if (form) {
		initStripe();
		addEventListener();
	}

};

async function initStripe() {

	const form = document.querySelector('#payment-form');

	const payment_intent_secret = form.dataset.secret;

	const key = await fetch('/get-publish')
		.then(response => response.json())
		.then((data) => {
			return data.key;
		});

	const stripe = Stripe(key);

	const options = {
		clientSecret: payment_intent_secret
	};

	const elements = stripe.elements();

	const style = {
		base: {
			color: '#32325d',
			lineHeight: '24px',
			fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
			fontSmoothing: 'antialiased',
			fontSize: '16px',
			'::placeholder': {
				color: '#aab7c4'
			}
		},
		invalid: {
			color: '#fa755a',
			iconColor: '#fa755a'
		}
	};

	const paymentElement = elements.create('card', { style: style});
	paymentElement.mount('#payment-element');

	form.addEventListener('submit', async (event) => {
		event.preventDefault();

		const {error} = await stripe.confirmPayment({
			elements,
			confirmParams: {
				return_url: 'http://finda-checkout.xaviete.com/success',
			},
		});

		if (error) {

			const messageContainer = document.querySelector('#error-message');

			const errorElement = document.createElement('div');
			errorElement.classList.add('stripe__error');
			errorElement.append(error.message);

			messageContainer.innerHTML = "";
			messageContainer.append(errorElement);
		}
	});

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
