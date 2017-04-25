import Home from "./Home.js";
import DetailPageInf from "./DetailPageInf.js";
import DetailPageImg from "./DetailPageImg.js";
import MainFooter from "./MainFooter.js";
const DetailPage = {
	detailPageHeader() {
		$("#header").load("html/detailPage.html #detailPageHeader", () => {
			$(".icon-shangyiye").on("tap", function() {
				Home.loadHeader();
				Home.loadContent();
				MainFooter.loadMainFooter();
			})
		});
	},
	detailPageContent() {
		$("#content").load("html/detailPage.html #detailPageContent", () => {

		});
	},
	detailPageFooter() {
		$("#footer").load("html/detailPage.html #detailPageFooter", () => {
			$("#detailPageFooter").find("div").on("tap", function() {
				$(this).addClass("active").siblings().removeClass("active");
			});
			$("#detailPageDis").on("tap", function() {
				DetailPage.detailPageHeader();
				DetailPage.detailPageContent();
				DetailPage.detailPageFooter();
			});
			$("#detailPageInf").on("tap", function() {
				DetailPageInf.detailPageInfHeader();
				DetailPageInf.detailPageInfContent();
			});
			$("#detailPageImg").on("tap", function() {
				DetailPageImg.detailPageImgHeader();
				DetailPageImg.detailPageImgContent();
			});

		});
	}
};
export default DetailPage;