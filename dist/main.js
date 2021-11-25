/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/commonFunctions.js":
/*!********************************!*\
  !*** ./src/commonFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction AMC(parent,Arr){\n    console.log(Arr);\n    for (let i=0;i<Arr.length;i++){\n        parent.appendChild(Arr[i])\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AMC);\n\n//# sourceURL=webpack://restaurantpage/./src/commonFunctions.js?");

/***/ }),

/***/ "./src/contactBodyContent.js":
/*!***********************************!*\
  !*** ./src/contactBodyContent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction AddStuff(iden,content){\n    let parentSeletor = document.getElementById('ContactHolder');\n    let Container=document.createElement('p');\n    parentSeletor.appendChild(Container);\n    Container.innerText=content;\n    Container.id=iden;\n}\nfunction contactBodyContent(){\n    let parentSeletor = document.getElementById('Body');\n    parentSeletor.innerHTML='';\n    parentSeletor.className='Contact';\n    let newDiv = document.createElement('div');\n    parentSeletor.appendChild(newDiv);\n    newDiv.id='ContactHolder';\n    newDiv.className='ContactHolder';\n    AddStuff('phoneNumber','Phone Number: +1 xxxxxxxxxxx');\n    AddStuff('email','Email Address: desta@gmail.com');\n    AddStuff('location','Location: 3180 Henry Ford Avenue , Brooklyn, New York');\n\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactBodyContent);\n\n\n//# sourceURL=webpack://restaurantpage/./src/contactBodyContent.js?");

/***/ }),

/***/ "./src/homeBodyContent.js":
/*!********************************!*\
  !*** ./src/homeBodyContent.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commonFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commonFunctions.js */ \"./src/commonFunctions.js\");\n\n\nfunction RestName(){\n    let parentSelector=document.getElementById('RestNameAbout');\n    let RestaurantName=document.createElement('h1');\n    parentSelector.appendChild(RestaurantName);\n    RestaurantName.textContent='Desi Station'\n}\nfunction RestAbout(){\n    let parentSelector=document.getElementById('RestAbout');\n    let aboutRestaurant1=document.createElement('p');\n    let aboutRestaurant2=document.createElement('img');\n    let aboutRestaurant3=document.createElement('p');\n    (0,_commonFunctions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parentSelector,[aboutRestaurant1,aboutRestaurant2,aboutRestaurant3]);\n    aboutRestaurant1.id='Intro'\n    aboutRestaurant2.id='ChefPic';\n    aboutRestaurant3.id='Founder';\n    aboutRestaurant2.src='./dist/GeneralPics/ChefPic.JPG';\n    aboutRestaurant1.textContent='Founded in 2021 at a lil corner in Brooklyn,New York, Desi Station (or De/Sta) is a restaurant to bring out the authentic flavors of india cusine'\n    aboutRestaurant3.textContent='Hardik Singh, the founde of De/Sta, started this venture to satisfying people\\'s craving for good and authentic desi cuisine'\n}\nfunction homeBodyContent(){\n    let parentSeletor = document.getElementById('Body');\n    parentSeletor.innerHTML='';\n    parentSeletor.className='HomePage'\n    let ContainerDiv = document.createElement('div');\n    parentSeletor.appendChild(ContainerDiv);\n    ContainerDiv.className='Contents';\n    ContainerDiv.id='Contents';\n    let nameOfRestaurant=document.createElement('div');\n    ContainerDiv.appendChild(nameOfRestaurant);\n    let aboutRestaurant=document.createElement('div');\n    ContainerDiv.appendChild(aboutRestaurant);\n    nameOfRestaurant.id='RestNameAbout';\n    aboutRestaurant.id='RestAbout';\n    RestName();\n    RestAbout()\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeBodyContent);\n\n//# sourceURL=webpack://restaurantpage/./src/homeBodyContent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menuBodyContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuBodyContent */ \"./src/menuBodyContent.js\");\n/* harmony import */ var _contactBodyContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactBodyContent */ \"./src/contactBodyContent.js\");\n/* harmony import */ var _homeBodyContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homeBodyContent */ \"./src/homeBodyContent.js\");\n/* harmony import */ var _commonFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commonFunctions */ \"./src/commonFunctions.js\");\n\n\n\n\n//later import the image\nclass ContentType{\n    constructor(){\n        this.number=0\n    }\n    checkToDisplay(){\n        if(this.number==0){\n            (0,_homeBodyContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n        }else if(this.number==1){\n            (0,_menuBodyContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n        }else if(this.number==2){\n            (0,_contactBodyContent__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n        }\n    }\n}\n\nfunction ClickToChangeContent(Arr){\n    for(let i=0;i<Arr.length;i++){\n        console.log('started')\n        Arr[i].addEventListener('click',()=>{\n            user.number=i;\n            user.checkToDisplay()\n        });\n    }\n}\n\nfunction subsection(){\n    let parentSelector = document.getElementById('Subsections');\n    let Home= document.createElement('li');\n    let Menu = document.createElement('li');\n    let Contact = document.createElement('li');\n    (0,_commonFunctions__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(parentSelector,[Home,Menu,Contact]);\n    Home.textContent=\"Home\";\n    Menu.textContent=\"Menu\";\n    Contact.textContent=\"Contact\"\n    ClickToChangeContent([Home,Menu,Contact])\n}\n\nfunction headerContent(){\n    let parentSelector = document.getElementById('Header');\n    let RestaurantName = document.createElement('h1');\n    let ListOfSub = document.createElement('ul');\n    (0,_commonFunctions__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(parentSelector,[RestaurantName,ListOfSub])\n    RestaurantName.id='RestName';\n    ListOfSub.id='Subsections';\n    subsection();\n    RestaurantName.textContent='De/Sta';\n    user.checkToDisplay();\n}\n\nfunction creatingBaseTemplate(){\n    let bodyDiv =document.getElementById('content');\n    let headerDiv= document.createElement('div');\n    let contentDiv = document.createElement('div');\n    (0,_commonFunctions__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(bodyDiv,[headerDiv,contentDiv])\n    headerDiv.id='Header';\n    headerDiv.className='Header';\n    contentDiv.id='Body';\n    contentDiv.className='Body'\n    headerContent()\n}\nlet user = new ContentType()\ncreatingBaseTemplate()\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_commonFunctions__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/menuBodyContent.js":
/*!********************************!*\
  !*** ./src/menuBodyContent.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commonFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commonFunctions.js */ \"./src/commonFunctions.js\");\n\nfunction ShowMenuItem(Food,Image,Description){\n    let parentSeletor = document.getElementById('Body');\n    let FoodCard= document.createElement('div');\n    parentSeletor.appendChild(FoodCard);\n    FoodCard.id=`${Food}`;\n    FoodCard.className='FoodCard'\n    let foodName= document.createElement('h2');\n    let foodPic=document.createElement('img');\n    let foodDesc=document.createElement('p');\n    (0,_commonFunctions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(FoodCard,[foodPic,foodName,foodDesc]);\n    foodName.innerText=`${Food}`;\n    foodPic.src=`./dist/FoodPics/${Image}.jpg`;\n    foodPic.className='foodPic';\n    foodDesc.textContent=`${Description}`;\n}\nfunction menuBodyContent(){\n    let parentSeletor = document.getElementById('Body');\n    parentSeletor.innerHTML='';\n    parentSeletor.className='MenuCard';\n    ShowMenuItem('Chicken Biriyani','ChickenBiriyani','Rich Indian Rice');\n    ShowMenuItem('Butter Chicken','ButterChicken','Rich Indian Chicken gravy with gracious ammount of Butter');\n    ShowMenuItem('Bread Basket','NaaNBasket','An Array of indian Bread');\n    ShowMenuItem('Chai','Chai','India\\'s Favorite drink.');\n    ShowMenuItem('Tandoori Prawns','TandooriPrawns','Grilled Prawns cooked in indian spices');\n    ShowMenuItem('Kala Jamun','KalaJamun','Fried Milk Based Sweet soaked in light sugar syrup with rose essence')\n\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuBodyContent);\n\n//# sourceURL=webpack://restaurantpage/./src/menuBodyContent.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;