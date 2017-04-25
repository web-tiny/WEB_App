import myShow from "./myShow.js";
import Regist from "./Regist.js";
const Login = {
	loginHeader() {
		$("#header").load("html/login.html #loginHeader", () => {
			$(".icon-shangyiye").on("tap", function() {
				myShow.myShowHeader();
				myShow.myShowContent();
			});
			$("#loginRegist").on("tap", function() {
				Regist.registHeader();
				Regist.registContent();
			})
		})
	},
	loginContent() {
		$("#content").load("html/login.html #loginContent")
	}
};

export default Login;