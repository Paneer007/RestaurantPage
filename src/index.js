import menuBodyContent from './menuBodyContent';
import contactBodyContent from './contactBodyContent';
import homeBodyContent from './homeBodyContent';
import AMC from './commonFunctions';
//later import the image
class ContentType{
    constructor(){
        this.number=0
    }
    checkToDisplay(){
        if(this.number==0){
            homeBodyContent()
        }else if(this.number==1){
            menuBodyContent()
        }else if(this.number==2){
            contactBodyContent()
        }
    }
}

function ClickToChangeContent(Arr){
    for(let i=0;i<Arr.length;i++){
        console.log('started')
        Arr[i].addEventListener('click',()=>{
            user.number=i;
            user.checkToDisplay()
        });
    }
}

function subsection(){
    let parentSelector = document.getElementById('Subsections');
    let Home= document.createElement('li');
    let Menu = document.createElement('li');
    let Contact = document.createElement('li');
    AMC(parentSelector,[Home,Menu,Contact]);
    Home.textContent="Home";
    Menu.textContent="Menu";
    Contact.textContent="Contact"
    ClickToChangeContent([Home,Menu,Contact])
}

function headerContent(){
    let parentSelector = document.getElementById('Header');
    let RestaurantName = document.createElement('h1');
    let ListOfSub = document.createElement('ul');
    AMC(parentSelector,[RestaurantName,ListOfSub])
    RestaurantName.id='RestName';
    ListOfSub.id='Subsections';
    subsection();
    RestaurantName.textContent='De/Sta';
    user.checkToDisplay();
}

function creatingBaseTemplate(){
    let bodyDiv =document.getElementById('content');
    let headerDiv= document.createElement('div');
    let contentDiv = document.createElement('div');
    AMC(bodyDiv,[headerDiv,contentDiv])
    headerDiv.id='Header';
    headerDiv.className='Header';
    contentDiv.id='Body';
    contentDiv.className='Body'
    headerContent()
}
let user = new ContentType()
creatingBaseTemplate()

export default AMC
