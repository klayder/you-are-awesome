// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propName) => {return propName};
const createNotEnumerableProperty = (propName) => {
	Object.defineProperty(Object.prototype,propName,{
		get: function() { return oldValue; },
  		set: function(newValue) { oldValue = newValue; },
  		enumerable: false
	});
	return propName;
};

const createProtoMagicObject = () => {
	
};
var cont=0;
const incrementor =function(){
	cont++;
	incrementor.valueOf=function(){
		return cont;
	}
	return incrementor;

};
const asyncIncrementor = () => {

};
const createIncrementer = () => {

};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (item) => {
	let promise= new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(item)
		},1001);
	})

	return promise;	
};
;
const getDeepPropertiesCount = (obj) => {
	let deepCount=0

	goDeep(obj);
	function goDeep(obj){
		for(let key in obj){
			//console.log(obj[key]);
			goDeep(obj[key]);
			deepCount++;
		}
	}
	return deepCount;

	 


};
const createSerializedObject = () => {

};

const sortByProto = (arr) => {
	var tempObj={};
	arr.forEach((item,index)=>{
		var tempArr=[];
		tempArr[index]=0;
		//console.log(index);
		checkProto(item,index,tempArr);
		tempObj[tempArr[index]]=item;
		
	});
	arr=[];
	for(let key in tempObj){
		arr.push(tempObj[key]);
	}
	//console.log(tempObj);
	return arr;
	function checkProto(obj,index,arr){
		if(obj.__proto__){
			arr[index]++;
			let tempProto=obj.__proto__;
			//console.log(arr[index]+"deep");
			checkProto(tempProto,index,arr);

		}
		 
	}
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;