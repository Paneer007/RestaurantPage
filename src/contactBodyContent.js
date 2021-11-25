function AddStuff(iden,content){
    let parentSeletor = document.getElementById('Body');
    let Container=document.createElement('p');
    parentSeletor.appendChild(Container);
    Container.innerText=content;
    Container.id=iden;
}
function contactBodyContent(){
    let parentSeletor = document.getElementById('Body');
    parentSeletor.innerHTML='';
    parentSeletor.className='Contact';
    AddStuff('phoneNumber','Phone Number: +1 xxxxxxxxxxx');
    AddStuff('email','Email Address: desta@gmail.com');
    AddStuff('location','Location: 3180 Henry Ford Avenue , Brooklyn, New York');


}
export default contactBodyContent;
