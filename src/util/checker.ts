export class Checker {
	static anyNull = (...args: any[]): Boolean => {
		return args.some((arg) => arg === null);
	};

	static anyUndefined = (...args: any[]): Boolean => {
		return args.some((arg) => arg === undefined);
	};
}
