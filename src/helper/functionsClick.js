import Toastify from 'toastify-js';

const tosty = () => {
	Toastify({
		text: 'Gracias por contactarnos, te responderemos lo mas pronto posible.',
		duration: 3000,
		newWindow: true,
		gravity: 'top',
		position: 'center',
		stopOnFocus: true,
		className: 'text-black rounded-md shadow-lg',
		style: {
			background: '#e6b300',
		},
		offset: {
			x: 0,
			y: 50,
		},
	}).showToast();
};

export default tosty;
