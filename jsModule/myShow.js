import Login from "./Login.js";
import Regist from "./Regist.js";
import Home from "./Home.js";
const myShow = {
	myShowHeader() {
		$("#header").load("html/myShow.html #myShowHeader", () => {
			$(".icon-shangyiye").on("tap", function() {
				Home.loadHeader();
				Home.loadContent();
			})
		});
	},
	myShowContent() {
		$("#content").load("html/myShow.html #myShowContent", () => {
			$("#Login").on("tap", function() {
				Login.loginHeader();
				Login.loginContent();
			});
			$("#Regist").on("tap", function() {
				Regist.registHeader();
				Regist.registContent();
			})
		});
	}
};
export default myShow;