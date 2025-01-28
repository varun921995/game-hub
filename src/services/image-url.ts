import noImage from "../assets/image_placeholder.png";

const getCroppedImage = (url: string) => {
	try {
		if (!url) return noImage;
		const target = "media/";
		const index = url.indexOf(target) + target.length;
		return url.slice(0, index) + "crop/600/400/" + url.slice(index);
	} catch (exception) {
		console.log("image url not found");
		return;
	}
};

export default getCroppedImage;
