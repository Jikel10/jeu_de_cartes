const prompt = require ("prompt-sync")();

let carte =["eau","plante","feu"]
let yourPoint;
let IaPoint;
console.log("Bienvenue dans ce simulateur de jeu de cartes contre une intelligence artificielle.")
let nom= prompt ("Saisissez votre pseudo : ")

function choixDeMenu(){
    console.log("1-Jouer\n2-Règles du jeu\n3-Quitter")
    let choix = +prompt("Que voulez vous faire ? : ");
    return choix;
}

function acceuil(){
    
    console.log("-------------------------------------------------------");
    console.log("Voici les cartes en votre possession pour chaque manche")
    console.log("                  |  1-Eau   | ");
    console.log("                  | 2-Plante | ");
    console.log("                  |  3-Feu   | ");
    console.log(" ------------------------------------------------------ ");

}

function choixDeCartesIA(){

    console.log("Robot : Ma carte est la suivante : ");
    let hazardNumber = Math.floor(Math.random()*3);
    console.log("Carte "+ carte[hazardNumber]);
    return hazardNumber+1
}

let decisionFinal;

function base(){
    
    
    function action(){
        do{
            IaPoint=0;
            yourPoint=0;
            for (let i=1;i<=3;i++){
                acceuil();
                let carteJoueur = playerCard();
                let carteRobot = choixDeCartesIA();
                cardAnalyse(carteJoueur,carteRobot);
                
            } 
            if(IaPoint>yourPoint){
                console.log("Le robot a gagné "+IaPoint+" fois.");
            }
            else if(IaPoint<yourPoint){
                console.log(nom+" a gagné "+yourPoint+" fois.");
            }
            else{
                decisionFinal = prompt("Voulez vous retenter votre chance ? (oui/non) : ")
            }
            if(IaPoint!=yourPoint){
                break;
            }
        }while(decisionFinal=="oui");
    };
while(true){
    premierChoix =choixDeMenu();

    if(premierChoix==1){
        action();
        console.log("Merci d'avoir joué(e) "+nom+" !");
        break;
    }
    else if(premierChoix==2){
        console.log("Le jeu va se dérouler en 3 manches. \nA chaque manche, vous possedez 3 cartes :\nFeu, Eau et Plante\nL'eau bat le feu, le feu bat la plante et la plante bat l'eau. \nAprès 3 manches, s'il y a une égalité, vous pouvez rejouer.")
    }

    else{
        console.log("Merci d'avoir joué(e) "+nom+" !");
        break;
    }
} 
};
    

base()

function playerCard(){
    let choixDeCarteJoueur;
    while(true){
        choixDeCarteJoueur = +prompt("Entrez le numéro de la carte que vous voulez jouer : ");
        if((choixDeCarteJoueur>=1)&&(choixDeCarteJoueur<=3)){
            break;
        }
    }    
    console.log("Vous avez utilisé(e) la carte "+carte[choixDeCarteJoueur-1]);
    return choixDeCarteJoueur;
}

function win(winner){
    console.log(winner+" a gagné la manche.");
}
function draw(){
    console.log("Manche finie sur une égalité.")
}

function cardAnalyse(IA,Player){
    if(IA==Player){
        draw();
    }
    else {
        if(IA==1){
            if(Player ==2){
                win("Robot");
                IaPoint++;
                //points pour l'IA
            }
            else{
                win(nom);
                yourPoint++;
                //points pour l'utilisateur
            }
        }
        if(IA==2){
            if(Player ==3){
                win("Robot");
                IaPoint++;
                //points pour l'IA
            }
            else{
                win(nom);
                yourPoint++;
                //points pour l'utilisateur
            }
        }
        if(IA==3){
            if(Player ==1){
                win("Robot");
                IaPoint++;
                //points pour l'IA
            }
            else{
                win(nom);
                yourPoint++;
                //points pour l'utilisateur
            }
        }
    }
}
