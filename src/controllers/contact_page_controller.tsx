interface FormInputs {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	message: string;
}

export const handleSubmitButton = (inputs: FormInputs) => {
	alert(inputs.firstName);
};
