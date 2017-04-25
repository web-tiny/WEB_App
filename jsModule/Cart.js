const Cart = {
	cartHeader() {
		$("#header").load("html/cart.html #cartHeader");
	},
	cartContent() {
		$("#content").load("html/cart.html #cartContent");
	}
};

export default Cart;