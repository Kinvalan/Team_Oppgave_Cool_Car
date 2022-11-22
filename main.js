



let car = {name: 'BMW', driveable: true, fuelLeft: 100, items: [], coolness: function(){
    let coolnessSum = 0;
    for(item in this.items){
        coolnessSum += item.coolness;
    }
    return coolnessSum;

}};



let negativeItems = [
    {name: 'Brukt Oljetank', coolness: -15, fuel: +50},
    {name: 'Brukt kebab', coolness: -20},
    {name: 'Bleier', coolness: -60},
    {name: 'Våte sokker', coolness: -25},
    {name: 'Grus', coolness: -15},
    {name: 'Bæsj', coolness: -99}
    
    
];

let positiveItems = [
    {name: 'Coca cola flaske', coolness: +15},
    {name: 'Big mac meny', coolness: +35},
    {name: 'Gullkjede', coolness:+ 20},
    {name: 'Rolex', coolness:+ 70},
    {name: 'Gavekort til diesel', coolness:+ 15, fuel: +45}
]

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
            return "Lite kul hilsen";
    }
    else if(car.coolness() < 60){
            return "Litt kul hilsen";
    }
    else{
            return "Skikkelig kul hilsen";
    }
 }
 



function greetFriend(greetNumber){
    const requiredGreeting = getRandomNumber(0, 2);
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


function stopOrStartCar(){
    if(car.driveable == true)
        car.driveable == false;
}





function meetItemOrFriend(){
    let randomNumber = getRandomNumber(1, 10);
    if(randomNumber < 30){
        //meetFriend
    }
    else {
        //meetItem
    }

}

function meetFriend(){
    



}