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
    let aboutRestaurant2=document.createElement('p');
    let aboutRestaurant3=document.createElement('p');
    AMC(parentSelector,[aboutRestaurant1,aboutRestaurant2,aboutRestaurant3])
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