import * as emailjs from "@emailjs/browser";

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
	// 	from_name: "Me",
	// 	to_name: "Jason",
	// 	message: "Good morning haha"
	// });

	// console.log(res);
};
