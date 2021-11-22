import './style.css';
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

function homeBodyContent(){
    let parentSeletor = document.getElementById('Body');
    parentSeletor.innerHTML='';
    let nameOfRestaurant=document.createElement('h1');
    parentSeletor.appendChild(nameOfRestaurant);
    nameOfRestaurant.textContent='Saravana Bhavan';
}

function AMC(parent,Arr){
    console.log(Arr)
    for (let i=0;i<Arr.length;i++){
        parent.appendChild(Arr[i])
    }
}

function subsection(){
    let parentSelector = document.getElementById('Subsections');
    let Home= document.createElement('li');
    let Menu = document.createElement('li');
    let Contact = document.createElement('li');
    AMC(parentSelector,[Home,Menu,Contact]);
}

function headerContent(){
    let parentSelector = document.getElementById('Header');
    let RestaurantName = document.createElement('h1');
    let ListOfSub = document.createElement('ul');
    AMC(parentSelector,[RestaurantName,ListOfSub])
    RestaurantName.id='RestName';
    ListOfSub.id='Subsections';
    subsection()

}

function creatingBaseTemplate(){
    let bodyDiv =document.getElementById('content');
    let headerDiv= document.createElement('div');
    let contentDiv = document.createElement('div');
    AMC(bodyDiv,[headerDiv,contentDiv])
    headerDiv.id='Header';
    contentDiv.id='Body';
    headerContent()
    //user.checkToDisplay
}
let user = new ContentType
creatingBaseTemplate()
