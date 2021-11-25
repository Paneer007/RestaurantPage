import AMC from './commonFunctions.js';
function ShowMenuItem(Food,Image,Description){
    let parentSeletor = document.getElementById('Body');
    let FoodCard= document.createElement('div');
    parentSeletor.appendChild(FoodCard);
    FoodCard.id=`${Food}`;
    FoodCard.className='FoodCard'
    let foodName= document.createElement('h2');
    let foodPic=document.createElement('img');
    let foodDesc=document.createElement('p');
    AMC(FoodCard,[foodPic,foodName,foodDesc]);
    foodName.innerText=`${Food}`;
    foodPic.src=`../dist/FoodPics/${Image}.jpg`;
    foodPic.className='foodPic';
    foodDesc.textContent=`${Description}`;
}
function menuBodyContent(){
    let parentSeletor = document.getElementById('Body');
    parentSeletor.innerHTML='';
    parentSeletor.className='MenuCard';
    ShowMenuItem('Chicken Biriyani','ChickenBiriyani','Rich Indian Rice');
    ShowMenuItem('Butter Chicken','ButterChicken','Rich Indian Chicken gravy with gracious ammount of Butter');
    ShowMenuItem('Bread Basket','NaaNBasket','An Array of indian Bread');
    ShowMenuItem('Chai','Chai','India\'s Favorite drink.');
    ShowMenuItem('Tandoori Prawns','TandooriPrawns','Grilled Prawns cooked in indian spices');
    ShowMenuItem('Kala Jamun','KalaJamun','Fried Milk Based Sweet soaked in light sugar syrup with rose essence')

};
export default menuBodyContent;