function RestName(){
    let parentSelector=document.getElementById('RestName');
    let RestaurantName=document.createElement('h1');
    parentSelector.appendChild(RestName);
    RestaurantName.textContent='Dosa Station'
}
function homeBodyContent(){
    let parentSeletor = document.getElementById('Body');
    parentSeletor.innerHTML='';
    let nameOfRestaurant=document.createElement('div');
    parentSeletor.appendChild(nameOfRestaurant);
    let aboutRestaurant=document.createElement('div');
    parentSeletor.appendChild(aboutRestaurant);
    nameOfRestaurant.id='RestName';
    aboutRestaurant.id='RestAbout';
    RestName();
    RestAbout()
}
export default homeBodyContent;