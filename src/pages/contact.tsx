import { Stack, TextField } from "@mui/material";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useWindowSize } from "../hooks/useWindowSize";
import { PageContainer } from "../layouts/page_container";
import { SCREEN_WIDTH_BREAKPOINTS_NUMS } from "../util/constants";
import React, { useEffect, useState } from "react";
import router from "next/router";
import { isEmpty, validEmail, validPhoneNumber } from "../util/utils";
import * as emailjs from "@emailjs/browser";
import { EmailUsDirectly, FormContainer, SubmitButton, Title } from "../components/Contact/styles";

export interface FormDetails {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	message: string;
}

export interface FormErrors {
	firstName: boolean;
	lastName: boolean;
	email: boolean;
	phoneNumber: boolean;
	message: boolean;
}

const Contact = () => {
	const inputGap = 3;
	const size = useWindowSize();
	const requiredText = "This field is required";
	const enterValidEmailText = "Enter a valid email";
	const enterValidPhoneNumberText = "Enter a valid phone number";
	const [submitted, setSubmitted] = useState<boolean>(false);
	const [showErrors, setShowErrors] = useState<boolean>(false);
	const [formDetails, setFormDetails] = useState<FormDetails>({
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
		message: ""
	});
	const formErrors: FormErrors = {
		firstName: isEmpty(formDetails.firstName),
		lastName: isEmpty(formDetails.lastName),
		email: !validEmail(formDetails.email),
		phoneNumber: !validPhoneNumber(formDetails.phoneNumber),
		message: isEmpty(formDetails.message)
	};
	const unsavedChanges = Object.values(formDetails).some((val) => !isEmpty(val));
	const errorExists = Object.values(formErrors).some((err) => err === true);

	const clearFields = () => {
		setFormDetails({
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			message: ""
		});
	};

	const handleOnChange = (name: string, value: string) => {
		setFormDetails((prev) => ({
			...prev,
			[name]: value
		}));
	};

	const toRawPhoneNumber = (formattedPhoneNumber: string): string => {
		return formattedPhoneNumber.replace(/\D/g, "");
	};

	const toFormattedPhoneNumber = (rawPhoneNumber: string): string => {
		if (rawPhoneNumber.length !== 10) {
			return rawPhoneNumber;
		}

		return (
			"(" +
			rawPhoneNumber.substring(0, 3) +
			")" +
			" " +
			rawPhoneNumber.substring(3, 6) +
			"-" +
			rawPhoneNumber.substring(6)
		);
	};

	const handlePhoneNumberOnChange = (newFormattedPhoneNumber: string) => {
		const newRawPhoneNumber = toRawPhoneNumber(newFormattedPhoneNumber);

		if (newRawPhoneNumber.length > 10) {
			return;
		}

		setFormDetails((prev) => ({
			...prev,
			phoneNumber: newRawPhoneNumber
		}));
	};

	const handleSubmitButton = async () => {
		if (errorExists) {
			setShowErrors(true);
			return;
		}

		const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
		const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
		const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

		if (publicKey === undefined || serviceId === undefined || templateId === undefined) {
			alert("Something went wrong");
			return;
		}

		setSubmitted(true);

		emailjs.init(publicKey);

		const res = await emailjs.send(serviceId, templateId, {
			first_name: formDetails.firstName,
			last_name: formDetails.lastName,
			to_name: "George",
			email: formDetails.email,
			phone_number: toFormattedPhoneNumber(formDetails.phoneNumber),
			message: formDetails.message
		});

		if (res.status === 200) {
			alert("Email sent");
			clearFields();
		} else {
			alert("Something went wrong");
		}

		setShowErrors(false);
		setSubmitted(false);
	};

	// prompt the user if they try and leave with unsaved changes
	useEffect(() => {
		const warningText = "You have unsaved changes - are you sure you wish to leave this page?";

		const handleWindowClose = (e: BeforeUnloadEvent) => {
			if (!unsavedChanges) return;
			e.preventDefault();
			return (e.returnValue = warningText);
		};

		const handleBrowseAway = () => {
			if (!unsavedChanges) return;
			if (window.confirm(warningText)) return;
			router.events.emit("routeChangeError");
			throw "routeChange aborted.";
		};

		window.addEventListener("beforeunload", handleWindowClose);

		router.events.on("routeChangeStart", handleBrowseAway);

		return () => {
			window.removeEventListener("beforeunload", handleWindowClose);
			router.events.off("routeChangeStart", handleBrowseAway);
		};
	}, [unsavedChanges]);

	return (
		<>
			<Head>
				<title>Decor Finishes | Contact</title>
				<meta name='description' content='Decor Finishes' />
				<link rel='icon' href='/dflogo.svg' />
			</Head>

			{/* Navbar */}
			<Navbar />

			<PageContainer
				style={{
					alignItems: "center"
				}}
			>
				<Title align='center'>Contact Us</Title>
				<FormContainer variant='outlined'>
					<Stack direction='column' gap={inputGap}>
						<Stack
							direction={size.width > SCREEN_WIDTH_BREAKPOINTS_NUMS.MOBILE ? "row" : "column"}
							gap={inputGap}
						>
							{/* First Name */}
							<TextField
								error={showErrors && formErrors.firstName}
								helperText={showErrors && formErrors.firstName ? requiredText : ""}
								variant='outlined'
								label='First Name'
								value={formDetails.firstName}
								onChange={(e) => handleOnChange("firstName", e.target.value)}
								required
								fullWidth
							/>

							{/* Last Name */}
							<TextField
								error={showErrors && formErrors.lastName}
								helperText={showErrors && formErrors.lastName ? requiredText : ""}
								variant='outlined'
								label='Last Name'
								value={formDetails.lastName}
								onChange={(e) => handleOnChange("lastName", e.target.value)}
								required
								fullWidth
							/>
						</Stack>
						<Stack direction='column' gap={inputGap}>
							{/* Email */}
							<TextField
								error={showErrors && formErrors.email}
								helperText={showErrors && formErrors.email ? enterValidEmailText : ""}
								variant='outlined'
								label='Your Email'
								type='email'
								inputMode='email'
								value={formDetails.email}
								onChange={(e) => handleOnChange("email", e.target.value)}
								required
							/>

							{/* Phone Number */}
							<TextField
								error={showErrors && formErrors.phoneNumber}
								helperText={showErrors && formErrors.phoneNumber ? enterValidPhoneNumberText : ""}
								variant='outlined'
								label='Phone Number'
								type='tel'
								inputMode='numeric'
								value={toFormattedPhoneNumber(formDetails.phoneNumber)}
								onChange={(e) => handlePhoneNumberOnChange(e.target.value)}
								required
							/>

							{/* Message */}
							<TextField
								error={showErrors && formErrors.message}
								helperText={showErrors && formErrors.message ? requiredText : ""}
								variant='outlined'
								placeholder='Your Message'
								label='Your Message'
								value={formDetails.message}
								onChange={(e) => handleOnChange("message", e.target.value)}
								required
								multiline
								minRows={10}
							/>

							<Stack direction='row' justifyContent='end'>
								{/* Submit button */}
								<SubmitButton onClick={() => (submitted ? null : handleSubmitButton())}>
									Send
								</SubmitButton>
							</Stack>
						</Stack>
					</Stack>
				</FormContainer>
				<br />
				<br />
				<EmailUsDirectly href='mailto:kostalasg@aol.com'>Email us directly!</EmailUsDirectly>
			</PageContainer>

			{/* Footer */}
			<Footer />
		</>
	);
};

export default Contact;
