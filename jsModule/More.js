const More = {
	moreHeader() {
		$("#header").load("html/more.html #moreHeader");
	},
	moreContent() {
		$("#content").load("html/more.html #moreContent");
	}
};

export default More;