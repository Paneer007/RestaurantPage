function AddStuff(iden,content){
    let Container=document.createElement('p');
    parentSeletor.appendChild(Container);
    Container.textContent=content;
    Container.id=iden;
}
function contactBodyContent(){
    let parentSeletor = document.getElementById('Body');
    parentSeletor.innerHTML='';
    parentSeletor.className='Contact';
    AddStuff('phoneNumber','Phone Number: +1 xxxxxxxxxxx');
    AddStuff('email','Email Address:desta@gmail.com')

}
export default contactBodyContent;
