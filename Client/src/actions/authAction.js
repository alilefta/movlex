export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";
// Action creators
export const loginSuccess = (token, user) => ({
	type: LOGIN_SUCCESS,
	payload: { token, user, isAuthenticated: true },
});

export const loginFailure = (error) => ({
	type: LOGIN_FAILURE,
	payload: { error },
});

export const logout = () => ({
	type: LOGOUT,
});
