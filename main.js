let itemIndex;
//let negativeItemIndex;

let requiredGreeting;

//------------------
/*
let carName = "";
let carItems = [];
let carFuel = 100;
let carDriveable = true;
*/

let car = {name: 'BMW', driveable: true, fuelLeft: 100, items: [], coolness: function(){
    let coolnessSum = 0;
    for(let item of this.items){ 
        coolnessSum += item.coolness;
        //console.log(item.name);
    }
    //console.log("Her kjører anonym funksjon, og returnerer sum: " + coolnessSum);
    return coolnessSum;

}};

let items = [
    {name: 'Delvis brukt dieseltank', coolness: -15, fuel: 30},
    {name: 'Brukt kebab', coolness: -20},
    {name: 'Bulk i panser', coolness: -40},
    {name: 'Våte sokker', coolness: -25},
    {name: 'Grus', coolness: -15},
    {name: 'Ripe i lakken', coolness: -25},
    {name: 'Coca cola flaske', coolness: -5},
    {name: 'Big mac meny', coolness: -10},
    {name: 'Gullkjede', coolness: 15},
    {name: 'Rolex', coolness: 30},
    {name: 'Gavekort til diesel 500kr', coolness: -5, fuel: 50, image: 'images/gavekortHalv.png'},
    {name: 'Gavekort til diesel 1000kr', coolness: -5, fuel: 100, image: 'images/gavekortFull.png'},
    {name: 'Fartsstriper', coolness: 15},
    {name: 'Wunderbaum', coolness: 20},
    {name: 'Fete felger', coolness: 30}
    
    
];


/*
let items = [
    {name: 'Brukt Oljetank', coolness: -15, fuel: 50},
    {name: 'Brukt kebab', coolness: -20},
    {name: 'Bleier', coolness: -60},
    {name: 'Våte sokker', coolness: -25},
    {name: 'Grus', coolness: -15},
    {name: 'Bæsj', coolness: -99},
    {name: 'Coca cola flaske', coolness: 15},
    {name: 'Big mac meny', coolness: 35},
    {name: 'Gullkjede', coolness: 20},
    {name: 'Rolex', coolness: 70},
    {name: 'Gavekort til diesel', coolness: 15, fuel: 45}
    
    
];*/
/*
let positiveItems = [
    {name: 'Coca cola flaske', coolness: 15},
    {name: 'Big mac meny', coolness: 35},
    {name: 'Gullkjede', coolness: 20},
    {name: 'Rolex', coolness: 70},
    {name: 'Gavekort til diesel', coolness: 15, fuel: 45}
];*/

// Funksjoner for kompiser


let friends = ['Kompis1', 'Kompis2', 'Kompis3'];


/*
Noen ganger møter man også på en kompis langs veien - han må du hilse på før du kan kjøre vidre.
    Du har (minst) tre måter å hilse på - kompisen er bare fornøyd med én av måtene å bli hilst på.
 
    Dette er tilfeldig fra kompis til kompis og fra møte til møte hvilken hilsen som er riktig. 
    Du må hilse riktig før du kan kjøre videre.
    Har du høy kulhet på bilen får du en kul hilsen tilbake fra kompisen når du hilser riktig, 
    har du lav kulhet får du en lite kul hilsen tilbake.
*/


function getGreetingFromFriend(){
    if(car.coolness() < 30){
            document.getElementById('output').innerHTML = "Lite kul hilsen. Du kan nå kjøre";
            car.driveable = true;
            return "Lite kul hilsen";
    }
    else if(car.coolness() < 60){
            document.getElementById('output').innerHTML = "Litt kul hilsen. Du kan nå kjøre";
            car.driveable = true;
            return "Litt kul hilsen";
    }
    else{
            document.getElementById('output').innerHTML = "Skikkelig kul hilsen. Du kan nå kjøre";
            car.driveable = true;
            return "Skikkelig kul hilsen";
            
    }
 }
 


//brukes ikke
function greetFriend(greetNumber){
    requiredGreeting = getRandomNumber(0, 2);
    if(greetNumber == requiredGreeting){
        return true;
    }
    else return false;

}







function getRandomNumber(min, max){
    return min + Math.floor(Math.random() * (max - min + 1));

}



function getCoolnessFromCar(){
    return car.coolness();
}

//kan muligens slettes
function stopOrStartCar(){
    if(car.driveable == true)
        car.driveable == false;
}





function meetItemOrFriend(){
    let randomNumber = getRandomNumber(0, 9);
    if(randomNumber < 3){
        meetFriend();

    }
    else {//rett og slett bare slå sammen arrayene for positive og negative items??
        //if(randomNumber < 5) meetNegativeItem();
        //else meetPositiveItem();
        meetItem();

    }

}



//-------------------------------------------------------

function setRequiredGreeting(){
    requiredGreeting = getRandomNumber(0, 2);
}    

function greet(greetNumber){
    if(greetNumber == requiredGreeting){
        document.getElementById('output').innerHTML = 'Your greeting was correct!: ';
        setTimeout(getGreetingFromFriend, 2000);
        
    }
    else{
        document.getElementById('output').innerHTML = 'Your have to greet again! <br />';
        document.getElementById('output').innerHTML += 'Du mister bensin mens bilen går på tomgang';
        car.fuelLeft -= 5;
        updateFuelBar();
        checkIfHasWonOrNoFuelLeft();
    }


}

function meetFriend(){
    let friendNr = getRandomNumber(0, 2);

    document.getElementById('output').innerHTML = 'You have encountered a friend: ' + friends[friendNr];
    setRequiredGreeting();
    car.driveable = false;
    

}



function meetItem(){
    itemIndex = getRandomNumber(0, (items.length-1));
    document.getElementById('output').innerHTML = 'You have encountered an item: ' +
                                                    items[itemIndex].name;
    setImage();                                                 



}

function setImage(){
    if(items[itemIndex].image){
        document.getElementById('itemImage').src = items[itemIndex].image;
    }   

}

function removeImage(){
    document.getElementById('itemImage').src = '';

}
/*
function meetNegativeItem(){
    negativeItemIndex = getRandomNumber(0, (negativeItems.length-1));
    document.getElementById('output').innerHTML = 'You have encountered an item: ' +
                                                    negativeItems[negativeItemIndex].name;
}*/

function equip(){
    if(itemIndex == undefined)return;
    addItemToCar(itemIndex);

    itemIndex = undefined;


    updateFuelBar();
    updateCoolnessBar();
    updateCoolnessDiv();
    showCarList();
    car.driveable = true;
    checkIfHasWonOrNoFuelLeft();
    removeImage();

}

function ignore(){

    car.driveable = true;
    itemIndex = undefined;
    removeImage();

}



function drive(){
    if(car.driveable == false) return;
    meetItemOrFriend();
    //meetPositiveItem();
   
    console.log(car.items);

    car.fuelLeft -= 5;
    updateFuelBar();

    car.driveable = false;

    updateCoolnessDiv();
    showCarList();

}

function updateCoolnessDiv(){
    document.getElementById('coolness').innerHTML = `Coolness: ${getCoolnessFromCar()}`;
}

function showCarList(){
    html = '<ul>';
    for (item of car.items){
        html += '<li>' + item.name + '</li>';

    }
    html += '</ul>';
    document.getElementById('carList').innerHTML = html;

}

function addItemToCar(index){
    car.items.push(items[index]);
    if(items[index].fuel){
        car.fuelLeft += items[index].fuel;
        if(car.fuelLeft > 100) car.fuelLeft = 100;
    }


}

function checkIfHasWonOrNoFuelLeft(){
    if(getCoolnessFromCar() >= 100){
        car.driveable = false;
        document.getElementById('output').innerHTML = "You have reached a coolness of 100!";
        // kan legge til win screen her
    }
    if(car.fuelLeft <= 0){
        car.driveable = false;
        document.getElementById('output').innerHTML = "You have run out of fuel!";
        // kan legge til lose screen her
    }

}


function updateCoolnessBar(){
    let innerBarDiv = document.getElementById("inner-coolness-bar");
    let width = getCoolnessFromCar();
    if(width > 100){
        width = 100;
    }
    if(width < 0){
        width = 0;

    }
    innerBarDiv.style.width = width + '%';
    innerBarDiv.innerHTML = width + '%';

}

function updateFuelBar(){
    let innerBarDiv = document.getElementById("inner-fuel-bar");
    let width = car.fuelLeft;
    if(width > 100){
        width = 100;
    }
    if(width < 0){
        width = 0;

    }
    innerBarDiv.style.width = width + '%';
    innerBarDiv.innerHTML = width + '%';

}



// Generelle kommentarer:

//bug: man kan equippe forrige element hvis man hilser på kompis - fikset!
//lage progress-bar OK
//bug: ting kan finnes på nytt!eller er det bug??

//Bytte navn og verdi på items f eks
//Lage "Kul hilsen
//checkIfHasWonOrNoFuelLeft() bør kjøres hver gang bensin minker
//Drivstoff bør minkes når man hilser feil
//Gavekort på drivstoff bør gi full tank

//programmet bør kanskje ikke la samme items bli funnet flere ganger
//inneholde forskjelige gavekort til drivstoff
//Kul hilsen...

// Legge til en beskjed når man ignorerer ting. feks "du ignorerte gavekort halv tank"



/* 
Forslag til nye item-navn:
--------------------------

- Sprayboks, coolness: + 25

- Ripe i lakken, coolness: - 20

- Gavekort diesel full tank, coolness: + 20, fuel: 100

- Gavekort diesel halv tank, coolness: + 10, fuel: 50

- 

*/