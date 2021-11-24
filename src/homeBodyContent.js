import AMC from './commonFunctions.js';

function RestName(){
    let parentSelector=document.getElementById('RestNameAbout');
    let RestaurantName=document.createElement('h1');
    parentSelector.appendChild(RestaurantName);
    RestaurantName.textContent='Desi Station'
}
function RestAbout(){
    let parentSelector=document.getElementById('RestAbout');
    let aboutRestaurant1=document.createElement('p');
    let aboutRestaurant2=document.createElement('img');
    let aboutRestaurant3=document.createElement('p');
    AMC(parentSelector,[aboutRestaurant1,aboutRestaurant2,aboutRestaurant3]);
    aboutRestaurant1.id='Intro'
    aboutRestaurant2.id='ChefPic';
    aboutRestaurant3.id='Founder';
    aboutRestaurant2.src='/home/sanjai/SanjaiCoding/Odin Project/HTML-Projects/restaurantPage/dist/GeneralPics/ChefPic.jpg';
    aboutRestaurant1.textContent='Founded in 2021 at a lil corner in Brooklyn,New York, Desi Station (or De/Sta) is a restaurant to bring out the authentic flavors of india cusine'
    aboutRestaurant3.textContent='Hardik Singh, the founde of De/Sta, started this venture to satisfying people\'s craving for good and authentic desi cuisine'
}
function homeBodyContent(){
    let parentSeletor = document.getElementById('Body');
    parentSeletor.innerHTML='';
    let nameOfRestaurant=document.createElement('div');
    parentSeletor.appendChild(nameOfRestaurant);
    let aboutRestaurant=document.createElement('div');
    parentSeletor.appendChild(aboutRestaurant);
    nameOfRestaurant.id='RestNameAbout';
    aboutRestaurant.id='RestAbout';
    RestName();
    RestAbout()
}
export default homeBodyContent;