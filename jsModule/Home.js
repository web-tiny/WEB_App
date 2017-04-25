import Ajax from "./Ajax.js";
import DetailPage from "./DetailPage.js";
const Home = {
	loadHeader() {
		$("#header").load("html/home.html #homeHeader");
	},
	loadList(data) {
		for (var item of data) {
			$("#detail").append(
				'<div  class="goodsID">' +
				'<div id="detailImg" >' + '<img src="' + item.goodsListImg + '" goodsID="' + item.goodsID + '" class="GoodsID">' + '</div>' +
				'<div id="title">' +
				'<h5>' + item.goodsName + '</h5>' +
				'<div id="goodsInf">' +
				'<div id="price">' +
				'<p><span class="nowPrice">￥' +
				item.price + '</span><span class="oldPrice">￥789</span></p>' +
				'<p>' + item.discount + "折" + '</p>' +
				'</div>' +
				'<div id="cart" goodsID="' + item.goodsID + '"><i class="iconfont icon-gouwuche"></i>' +
				'</div>' +
				'</div>' + '</div>'
			);
		}
	},

	loadDetail(data) {
		$("#detailPageContent").append(
			'<div id="times"><span>距离结束时间</span>' +
			'<span>XXX</span>' +
			'<span>天</span>' +
			'<span>XXX</span>' +
			'<span>时</span>' +
			'<span>XXX</span>' +
			'<span>分</span>' +
			'<span>XXX</span>' +
			'<span>秒</span></div>' +
			'<div id="img"><img src="' + data.goodsListImg + '"></div>' +
			'<div id="title"><span>￥' + data.price + '</span><span>' + data.goodsName + '</span></div>' +
			'<div id="price"><span>市场价：</span>' +
			'<span>￥' + data.price + '</span>' +
			'<span>' + data.discount + '折</span>' +
			'<span>123购买</span></div>'
		)
	},
	loadContent() {
		/*var that = this;*/
		$("#content").load("html/home.html #homeContent", () => {
			var mySwiper = new Swiper('.swiper-container', {
				//direction: 'vertical',
				loop: true,
				pagination: '.swiper-pagination',
				autoplay: 1000,
			});

			if (localStorage.getItem("proList")) {
				var data = localStorage.getItem("proList");
				this.loadList(JSON.parse(data));
			} else {
				var listUrl = "http://datainfo.duapp.com/shopdata/getGoods.php";
				Ajax.getData(listUrl, "GET", null, "JSONP", function(result) {
					console.log(result);
					var data = eval(result);
					localStorage.setItem("proList", JSON.stringify(data));
					this.loadList(data);
				});
			}
			$(".GoodsID").on("tap", () => {
				DetailPage.detailPageHeader();
				DetailPage.detailPageContent();
				DetailPage.detailPageFooter();
				this.loadDetail(data);
			})

		})
	}
}

export default Home;