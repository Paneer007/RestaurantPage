function RestName(){
    let parentSelector=document.getElementById('RestNameAbout');
    let RestaurantName=document.createElement('h1');
    parentSelector.appendChild(RestaurantName);
    RestaurantName.textContent='Dosa Station'
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
    //RestAbout()
}
export default homeBodyContent;