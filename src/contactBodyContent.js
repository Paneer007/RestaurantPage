function AddStuff(iden,content){
    let parentSeletor = document.getElementById('ContactHolder');
    let Container=document.createElement('p');
    parentSeletor.appendChild(Container);
    Container.innerText=content;
    Container.id=iden;
}
function contactBodyContent(){
    let parentSeletor = document.getElementById('Body');
    parentSeletor.innerHTML='';
    parentSeletor.className='Contact';
    let newDiv = document.createElement('div');
    parentSeletor.appendChild(newDiv);
    newDiv.id='ContactHolder';
    newDiv.className='ContactHolder';
    AddStuff('phoneNumber','Phone Number: +1 xxxxxxxxxxx');
    AddStuff('email','Email Address: desta@gmail.com');
    AddStuff('location','Location: 3180 Henry Ford Avenue , Brooklyn, New York');


}
export default contactBodyContent;
