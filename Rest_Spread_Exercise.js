const filterByType = (type, ...vals) => {
	return vals.filter((val) => typeof val === type);
};

// Refactored function using Rest & Arrow functions
const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);

// findMin
const findMin = (...args) => Math.min(...args);

// margeObjects
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map((vals) => vals * 2)];

// Slice and Dice!
const removeRandom = (items) => {
	let idx = Math.floor(Math.random() * items.length);
	return [...items.slice(0, indx), ...items.slice(indx + 1)];
};

const extend = (array1, array2) => [...array1, ...array2];

const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });

const removeKey = (obj, key) => {
	const newObj = { ...obj };
	delete newObj[key];
	return newObj;
};

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

const update = (obj, key, val) => ({ ...obj, [key]: val });
