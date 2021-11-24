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
    foodPic.src=`dist/FoodPics/${Image}.jpg`;
    foodDesc.textContent=`${Description}`;
}
function menuBodyContent(){
    let parentSeletor = document.getElementById('Body');
    parentSeletor.innerHTML='';
    let restaurantContent=document.createElement('p');
    parentSeletor.appendChild(restaurantContent);
    restaurantContent.textContent='Paneer Pasta';
    ShowMenuItem('Chicken Biriyani','ChickenBiriyani','Rich Indian Rice');
    ShowMenuItem('Butter Chicken','ButterChicken','Rich Indian Chicken gravy with gracious ammount of Butter');
    ShowMenuItem('Bread Basket','NaaNBasket','An Array of indian Bread');
    ShowMenuItem('Chai','Chai','India\'s Favorite drink');
    ShowMenuItem('Tandoori Prawns','TandooriPrawns','Grilled PRawns');
    ShowMenuItem('Kala Jamun','KalaJamun','Fried Sweet')

};
export default menuBodyContent;