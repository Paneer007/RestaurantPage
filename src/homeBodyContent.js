function homeBodyContent(){
    let parentSeletor = document.getElementById('Body');
    parentSeletor.innerHTML='';
    let nameOfRestaurant=document.createElement('h1');
    parentSeletor.appendChild(nameOfRestaurant);
    nameOfRestaurant.textContent='Paneer Station';
}
export default homeBodyContent;