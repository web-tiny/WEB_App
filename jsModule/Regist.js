import myShow from "./myShow.js";
import Login from "./Login.js"
const Regist = {
	registHeader() {
		$("#header").load("html/regist.html #registHeader", () => {
			$(".icon-shangyiye").on("tap", function() {
				myShow.myShowHeader();
				myShow.myShowContent();
			});
			$(".loginRegist").on("tap", function() {
				Login.loginHeader();
				Login.loginContent();
			})
		})
	},
	registContent() {
		$("#content").load("html/regist.html #registContent")
	}
};

export default Regist;