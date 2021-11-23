import Biriyani from './FoodPics/ChickenBiriyani.jpg';
import Gravy from './FoodPics/ButterChicken.jpg';
import Bread from './FoodPics/NaaNBasket.jpg';
import Drink from './FoodPics/Chai.jpg';
import Starter from './FoodPics/TandooriPrawns.jpg';
import Desert from './FoodPics/KalaJamun.jpg';
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
    foodPic.src=`${Image}`;
    foodDesc.textContent=`${Description}`;
}
function menuBodyContent(){
    let parentSeletor = document.getElementById('Body');
    parentSeletor.innerHTML='';
    let restaurantContent=document.createElement('p');
    parentSeletor.appendChild(restaurantContent);
    restaurantContent.textContent='Paneer Pasta';
    ShowMenuItem('Biriyani',Biriyani,'Rich Indian Rice');
    ShowMenuItem('ButterChicken',Gravy,'Rich Indian Chicken gravy with gracious ammount of Butter');
    ShowMenuItem('Bread Basket',Bread,'An Array of indian Bread');
    ShowMenuItem('Chai',Drink,'India\'s Favorite drink');
    ShowMenuItem('Tandoori Prawns',Starter,'Grilled PRawns');
    ShowMenuItem('Kala Jamun',Desert,'Fried Sweet')

};
export default menuBodyContent;