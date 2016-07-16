exports.app = function(){
	return {
		http_server:{
			port:9090,
			host:'0.0.0.0'
		},
		db_server:{
			port:27017,
			host:'localhost',
			db:'coco'
		}
	};
}();