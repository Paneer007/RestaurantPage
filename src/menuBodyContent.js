function menuBodyContent(){
    let parentSeletor = document.getElementById('Body');
    parentSeletor.innerHTML='';
    let restaurantContent=document.createElement('p');
    parentSeletor.appendChild(restaurantContent);
    restaurantContent.textContent='Paneer Pasta';
    
};
export default menuBodyContent;