class ShowcaseImage {
	public readonly fileName: string;
	public readonly description?: string;

	constructor(fileName: string, description?: string) {
		this.fileName = fileName;
		this.description = description;
	}
}

export const showcaseImages = [];
