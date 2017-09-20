var ids = [5, 8, 6, 8, 1, 5];
(function sendRequest() {
	var id = ids.shift();
	if(id) {
		console.log(id);
		sendRequest();
	}else {
		console.log('finished')
	}
})();