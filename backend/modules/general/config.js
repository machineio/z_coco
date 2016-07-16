exports.app = function(){
	return {
		http_server:{
			port:8080,
			host:'0.0.0.0'
		},
		db_server:{
			port:27017,
			host:'localhost',
			db:'coco'
		}
	};
}();