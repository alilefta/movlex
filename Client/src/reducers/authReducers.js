import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions/authAction";

const initialState = {
	token: localStorage.getItem("token") || null,
	user: null,
	error: null,
	isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				token: action.payload.token,
				user: action.payload.user,
				error: null,
				isAuthenticated: true,
			};
		case LOGIN_FAILURE:
			return {
				...state,
				token: null,
				user: null,
				error: action.payload.error,
				isAuthenticated: false,
			};
		case LOGOUT:
			localStorage.removeItem("token"); // Remove token from local storage
			return {
				...state,
				token: null,
				user: null,
				error: null,
				isAuthenticated: false,
			};
		default:
			return state;
	}
};

export default authReducer;
