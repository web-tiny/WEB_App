import Home from "./Home.js";
const Class = {
	classHeader() {
		$("#header").load("html/class.html #classHeader", () => {
			$(".icon-shangyiye").on("tap", function() {
				Home.loadHeader();
				Home.loadContent();
			})
		});
	},
	classContent() {
		$("#content").load("html/class.html #classContent");
	}
};

export default Class;