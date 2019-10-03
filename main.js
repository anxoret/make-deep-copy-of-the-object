"use strict"

let obj = {
	"Рыбы": {
	  "форель": {},
	  "лосось": {}
	},
  
	"Деревья": {
	  "Огромные": {
		"секвойя": {},
		"дуб": [1, {"мыш":"пыш"}]
	  },
	  "Цветковые": {
		"яблоня": {},
		"магнолия": {
			"фыр-фыр": {
				"дрыг": {},
				"мыг": {}
			}
		}
	  }
	}
};


const isObject = object => Object.prototype.toString.call(object) == "[object Object]"
const isArray = object => Object.prototype.toString.call(object) == "[object Array]"

function copyObject(object) {
	let newObject = {};
	for (let property in object) {
		if (isObject(object[property])) {
			newObject[property] = copyObject(object[property]);
		} else if (isArray(object[property])) {
			newObject[property] = copyArray(object[property]);
		} else {
			newObject[property] = object[property];
		}
	}
	return newObject;
}

function copyArray(array) {
	let newObject = [];
	for (let elem of array) {
		if (isObject(elem)) {
			newObject.push(copyObject(elem));
		} else if (isArray(elem)) {
			newObject.push(copyArray(elem));
		} else {
			newObject.push(elem);
		}
	}
	return newObject;	
}


function deepCopy(objectToCopy) {
	if (isObject(objectToCopy)) {
		return copyObject(objectToCopy);
	} else if (isArray(objectToCopy)) {
		return copyArray(objectToCopy);
	} else {
		return objectToCopy;
	}
};

let copyOfObj = deepCopy(obj);
console.info(copyOfObj);