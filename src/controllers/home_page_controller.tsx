import * as emailjs from "@emailjs/browser";
import { Checker } from "../util/checker";

export const handleContactUsButton = async () => {
	const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
	const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
	const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

	if (publicKey === undefined || serviceId === undefined || templateId === undefined) {
		alert("Something went wrong.");
		return;
	}

	// emailjs.init(publicKey);

	// const res = await emailjs.send(serviceId, templateId, {
	// 	from_name: "Anonymous",
	// 	to_name: "Jason",
	// 	message: "Someone pressed the contact us button on the home page!"
	// });

	// console.log(res);

	alert("Example email sent successfully");
};
