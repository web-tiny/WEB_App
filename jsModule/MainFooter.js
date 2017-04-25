import Class from "./Class.js";
import Cart from "./Cart.js";
import myShow from "./myShow.js";
import More from "./More.js";
import Home from "./Home.js";


const MainFooter = {
	loadMainFooter() {
		$("#footer").load("html/mainFooter.html", () => {
			$("#footer").find("i").on("tap", function() {
				$(this).addClass("active").siblings().removeClass("active");
				var index = $(this).index();
				switch (index) {
					case 0:
						Home.loadHeader();
						Home.loadContent();
						break;

					case 1:
						Class.classHeader();
						Class.classContent();
						break;

					case 2:
						Cart.cartHeader();
						Cart.cartContent();
						break;
					case 3:
						myShow.myShowHeader();
						myShow.myShowContent();
						break;
					case 4:
						More.moreHeader();
						More.moreContent();
						break;
				}
			});

		});
	}
};
export default MainFooter;