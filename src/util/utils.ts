export const isEmpty = (string: string) => {
	return string.trim().length === 0;
};

export const anyNull = (...args: any[]): Boolean => {
	return args.some((arg) => arg === null);
};

export const anyUndefined = (...args: any[]): Boolean => {
	return args.some((arg) => arg === undefined);
};

export const validEmail = (email: string): boolean => {
	return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email.toLowerCase()
	);
};

export const validPhoneNumber = (phoneNumber: string) => {
	return phoneNumber.length === 10;
};
