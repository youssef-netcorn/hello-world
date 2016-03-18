var dictionary = {
	"data":[
		{"id":"0","name":"ABC"},
		{"id":"1","name":"DEF"}
	],
	"images": [
		{"id":"0","name":"PQR"},
		{"id":"1","name":"xyz"}
	]
};

var data = dictionary.data;
var images = dictionary.images;

for(var i in data)
{
	 var id = data[i].id;
	 var name = data[i].name;
}

for (var i in images) {
	var id = images[i].id;
	var name = images[i].name;
}

console.log(data);
console.log(data);
