function contactBodyContent(){
    let parentSeletor = document.getElementById('Body');
    parentSeletor.innerHTML='';
    let parcel=document.createElement('p');
    parentSeletor.appendChild(parcel);
    parcel.textContent='+91xxxxxxxxxx'
}

export default contactBodyContent;