const reducer = (state, action) => {
	switch (action.type) {
		case 'name':
			return {
				...state,
				name: action.payload,
			};
		case 'email':
			return {
				...state,
				email: action.payload,
			};
		case 'phone':
			return {
				...state,
				phone: action.payload,
			};
		case 'message':
			return {
				...state,
				message: action.payload,
			};
		case 'button':
			return {
				...state,
				buttonState: action.payload,
			};
		case 'alert':
			return {
				...state,
				alertMessage: action.payload,
			};
		case 'reset':
			return {
				...state,
				name: '',
				email: '',
				phone: '',
				message: '',
			};
		default:
			return state;
	}
};

export default reducer;
