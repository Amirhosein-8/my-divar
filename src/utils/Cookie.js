const SetCookie = (Tokens) => {
	document.cookie = `accessToken=${Tokens.accessToken}`;
	document.cookie = `refreshToken=${Tokens.refreshToken}`;
};

const GetCookie = (nameCookie) => {
	return document.cookie
		?.split(';')
		?.find((cookie) => cookie.split('=')[0] === nameCookie)
		?.split('=')[1];
};

export { SetCookie, GetCookie };
