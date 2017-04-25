export default {
	getData(url, type, data, dataType, callback) {
		var myUrl = url;
		if (myUrl == "JSONP") {
			myUrl += "?callback=";
		}
		$.ajax({
				url: myUrl,
				type: type,
				dataType: dataType,
				data: data,
			})
			.done(function(response) {
				callback(response);
			})
			.fail(function() {
				console.log("error");
			});

	}
}