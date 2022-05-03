
const checkout = document.getElementById('payment-form');

if (checkout) {
	initStripe();
}

async function initStripe() {

	const form = document.querySelector('#payment-form');
	const payment_intent_secret = form.dataset.secret;

	const stripe = Stripe("pk_test_51KrKcCElQJSth86c6HHrQCBw332zfDjTXR0A252an3NK8Xcs6ORNGziddUpgjTIF3ZLAwiQD9uz32VPedrRmLskN00T9hFnJ3R");

	const options = {
		clientSecret: payment_intent_secret
	};

	const elements = stripe.elements(options);

	const paymentElement = elements.create("payment");
	paymentElement.mount("#payment-element");

	form.addEventListener('submit', async (event) => {
		event.preventDefault();

		const {error} = await stripe.confirmPayment({
			elements,
			confirmParams: {
				return_url: 'https://finda-checkout.xaviete.com/success',
			}
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
