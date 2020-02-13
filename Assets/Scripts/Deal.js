#pragma strict
import System.Collections.Generic;
//@script ExecuteInEditMode()

var deck : List.<GameObject>;
var cards : List.<GameObject> = new List.<GameObject>();

var dpos1 : Transform;
var dpos2 : Transform;
var dpos3 : Transform;
var dpos4 : Transform;
var dpos5 : Transform;
var dpos6 : Transform;
var dpos7 : Transform;
var pPos1 : Transform;
var pPos2 : Transform;
var posHit1 : Transform;
var posHit2 : Transform;
var posHit3 : Transform;
var posHit4 : Transform;
var posHit5 : Transform;


var dealersHand : int;
var playersHand : int;
var waitTime : int = .5;
var howManyAces : int;
var dealerAces : int;
var placeBet : int = 0;
var cash : int = 1000;
var lastBet : int;

var dealerFirstCard : GameObject;
var dealer2Card : GameObject;
var dealer3Card : GameObject;
var dealer4Card : GameObject;
var dealer5Card : GameObject;
var dealer6Card : GameObject;
var dealer7Card : GameObject;
var blank : GameObject;
var blankCard : GameObject;
var playerFirstCard : GameObject;
var playerSecondCard : GameObject;
var playersHitCard1 : GameObject;
var playersHitCard2 : GameObject;
var playersHitCard3 : GameObject;
var playersHitCard4 : GameObject;
var playersHitCard5 : GameObject;
var bustedText : GameObject;
var bustedCube : GameObject;
var PBlackjackText : GameObject;
var WinnerText : GameObject;
var DBlackjackText : GameObject;
var TieText : GameObject;
var LostText : GameObject;
var doubleDown : GameObject;

var playerTextMesh : TextMesh;
var dealerTextMesh : TextMesh;
var cashText : TextMesh;
var yourBet : TextMesh;
var prefix = "";
var dPrefix = "";

var pokerSkin : GUISkin;

var playerHit1 : boolean = true;
var playerHit2 : boolean = false;
var playerHit3 : boolean = false;
var playerHit4 : boolean = false;
var playerHit5 : boolean = false;
var dh2 : boolean = true;
var dh3 : boolean = false;
var dh4 : boolean = false;
var dh5 : boolean = false;
var dh6 : boolean = false;
var dh7 : boolean = false;
var keepGoing : boolean = false;
var madeBet : boolean = true;

function Start() {
    ResetDeck();
}

function Update() {
    if(dealersHand >= 17) {
        keepGoing = false;
    } else {
        keepGoing = true;
    }
    yourBet.text = placeBet.ToString();
    cashText.text = cash.ToString();
}

function OnGUI () {
    GUI.skin = pokerSkin; //adds ability for buttons to be used with iTween
    //GUI.Label (Rect (375,50,75,75), "", "blankchip");

    GUI.Label (Rect (860,100,100,100), "", "chip5label");
    GUI.Label (Rect (915,200,100,100), "", "chip25label");
    GUI.Label (Rect (925,310,100,100), "", "chip50label");
    GUI.Label (Rect (905,420,100,100), "", "chip100label");
    GUI.Label (Rect (825,500,100,100), "", "chip500label");

    GUI.Label (Rect (30,420,100,100), "", "rebetlabel");
    GUI.Label (Rect (5,210,100,100), "", "standlabel");
    GUI.Label (Rect (5,320,100,100), "", "doublelabel");
    GUI.Label (Rect (100,505,100,100), "", "deallabel");
    GUI.Label (Rect (30,100,100,100), "", "hitlabel");

    if(playerHit1) {
        if(GUI.Button (Rect (30,100,100,100), "", "hit")){
            var hitCard1 : GameObject = DealCard();
            hitCard1.transform.position = posHit1.transform.position;
            hitCard1.name = "hit1";
            playersHitCard1 = GameObject.Find("hit1");
            var hit1 = playersHitCard1.GetComponent(WhatCard).cardNumber;
            if(hit1 == 11) { 
                howManyAces += 1; 
                playersHand += 11; //adds to players hand
            }else{
                playersHand += hit1; //adds other numbers to players hand
            }
            CheckSum();
            playerHit1 = false;
            playerHit2 = true;
        }
    }
    if(playerHit2) {
        if(GUI.Button (Rect (30,100,100,100), "", "hit")){
            var hitCard2 : GameObject = DealCard();
            hitCard2.transform.position = posHit2.transform.position;
            hitCard2.name = "hit2";
            playersHitCard2 = GameObject.Find("hit2");
            var hit2 = playersHitCard2.GetComponent(WhatCard).cardNumber;
            if(hit2 == 11) {
                howManyAces += 1;
                playersHand += 11;
            }else{
                playersHand += hit2;
            }
            CheckSum();
            playerHit2 = false;
            playerHit3 = true;
        }
    }
    if(playerHit3) {
        if(GUI.Button (Rect (30,100,100,100), "", "hit")){
            var hitCard3 : GameObject = DealCard();
            hitCard3.transform.position = posHit3.transform.position;
            hitCard3.name = "hit3";
            playersHitCard3 = GameObject.Find("hit3");
            var hit3 = playersHitCard3.GetComponent(WhatCard).cardNumber;
            if(hit3 == 11) {
                howManyAces += 1;
                playersHand += 11;
            }else{
                playersHand += hit3;
            }
            CheckSum();
            playerHit3 = false;
            playerHit4 = true;
        }
    }
    if(playerHit4) {
        if(GUI.Button (Rect (30,100,100,100), "", "hit")){
            var hitCard4 : GameObject = DealCard();
            hitCard4.transform.position = posHit4.transform.position;
            hitCard4.name = "hit4";
            playersHitCard4 = GameObject.Find("hit4");
            var hit4 = playersHitCard4.GetComponent(WhatCard).cardNumber;
            if(hit4 == 11) {
                howManyAces += 1;
                playersHand += 11;
            }else{
                playersHand += hit4;
            }
            CheckSum();
            playerHit4 = false;
            playerHit5 = true;
        }
    }
    if(playerHit5) {
        if(GUI.Button (Rect (30,100,100,100), "", "hit")){
            var hitCard5 : GameObject = DealCard();
            hitCard5.transform.position = posHit5.transform.position;
            hitCard5.name = "hit5";
            playersHitCard5 = GameObject.Find("hit5");
            var hit5 = playersHitCard5.GetComponent(WhatCard).cardNumber;
            if(hit5 == 11) {
                howManyAces += 1;
                playersHand += 11;
            }else{
                playersHand += hit5;
            }
            CheckSum();
            playerHit5 = false;   
            playerHit1 = true;
            GUI.Button (Rect (30,100,100,100), "", "hitlabel");
        }
    }
    if(GUI.Button (Rect (5,210,100,100), "", "stand")){
        FinishDealersHand();
    }
    if(cash >= lastBet) {
        if(GUI.Button (Rect (5,320,100,100), "", "double")){
            var doubleCard : GameObject = DealCard();
            doubleCard.transform.position = posHit1.transform.position;
            doubleCard.name = "double";
            doubleDown = GameObject.Find("double");
            var double1 = doubleDown.GetComponent(WhatCard).cardNumber;
            placeBet += lastBet;
            cash -= lastBet;
            if(double1 == 11){
                howManyAces += 1;
                playersHand += 11;
            }else{
                playersHand += double1;
            }
            CheckSum();
			
            if(playersHand < 21){
                FinishDealersHand();
            }
        }
    }
    //if(placeBet > 0) {
        if(GUI.Button (Rect (100,505,100,100), "", "deal")){ 
            StartDealing();
            madeBet = true;
            lastBet = placeBet;
        }
    //}

    if(cash >= 5)
    {
        if (GUI.Button(Rect(860,100,100,100),"", "chip5" ))
        {
            yourBet.gameObject.active = true;
            placeBet += 5;
            cash -= 5;
        }
    }
    if(cash >= 25)
    {
        if (GUI.Button(Rect(915,200,100,100),"", "chip25" ))
        {
            yourBet.gameObject.active = true;
            placeBet += 25;
            cash -= 25;
        }
    }
    if(cash >= 50)
    {
        if (GUI.Button(Rect(925,310,100,100),"", "chip50" ))
        {
            yourBet.gameObject.active = true;
            placeBet += 50;
            cash -= 50;
        }
    }
    if(cash >= 100)
    {
        if (GUI.Button(Rect(905,420,100,100),"", "chip100" ))
        {
            yourBet.gameObject.active = true;
            placeBet += 100;
            cash -= 100;
        }
    }
    if(cash >= 500)
    {
        if (GUI.Button(Rect(825,500,100,100),"", "chip500" ))
        {
            yourBet.gameObject.active = true;
            placeBet += 500;
            cash -= 500;
        }
    }

    if(cash > 0 && cash >= lastBet) {
        if(GUI.Button(Rect(30,420,100,100), "", "rebet")) {
            DestroyAll();
            StartDealing();
            madeBet = true;
            //playersHand = 0;
            //dealersHand = 0;
            if(placeBet == 0) {
                placeBet = lastBet;
                cash -= lastBet; //takes cash for the last bet to be rebet
            }
        }
    }
}

function DealCard() {
    if(cards.Count==0) {
        ResetDeck();
    }
    var card : int = Random.Range(0, cards.Count);
    var go : GameObject = GameObject.Instantiate(cards[card]) as GameObject;
    cards.RemoveAt(card);
    return go;
}

function ResetDeck() {
    cards.Clear();
    cards.AddRange(deck);
}

function StartDealing() {
    yield WaitForSeconds(waitTime);
    //Players First Card
    var newCard3 : GameObject = DealCard();
    newCard3.transform.position = pPos1.transform.position;
    newCard3.name = "playerFirst";
    playerFirstCard = GameObject.Find("playerFirst");
    var card1Value = playerFirstCard.GetComponent(WhatCard).cardNumber;
    yield WaitForSeconds(waitTime);
    playersHand += card1Value; //Adds the players score

    //Dealers First Card
    var newCard1 : GameObject = DealCard();
    newCard1.transform.position = dpos1.transform.position;
    newCard1.name = "dealerFirst"; 
    dealerFirstCard = GameObject.Find("dealerFirst");
    var dCard1 = dealerFirstCard.GetComponent(WhatCard).cardNumber;
    yield WaitForSeconds(waitTime);
    dealersHand += dCard1; //Adds the dealers score

    //Players Second Card
    var newCard4 : GameObject = DealCard();
    newCard4.transform.position = pPos2.transform.position;
    newCard4.name = "playerSecond";
    playerSecondCard = GameObject.Find("playerSecond");
    var card2Value = playerSecondCard.GetComponent(WhatCard).cardNumber;
    yield WaitForSeconds(waitTime);
    playersHand += card2Value;

    Blank();
    CheckSum();
    CheckDealerSum();
    playerTextMesh.text = prefix + playersHand; //Shows the amount in the players hand
    playerTextMesh.gameObject.active = true; //enables the players score
    dealerTextMesh.text = dPrefix + dealersHand;
    dealerTextMesh.gameObject.active = true;
}

function Blank() {
    blankCard = Instantiate(blank, dpos2.transform.position, dpos2.transform.rotation); //transforms to position and rotation
    blankCard.name = "blank"; //given an name for later access
}

function FinishDealersHand() {
    Destroy(blankCard);
    if(dh2 == true && keepGoing == true) {
        if(dh2 == true) {
            //dealer 2nd card
            var dealer2 : GameObject = DealCard();
            dealer2.transform.position = dpos2.transform.position;
            dealer2.name = "dealerSecond";
            dealer2Card = GameObject.Find("dealerSecond");
            var dCard2 = dealer2Card.GetComponent(WhatCard).cardNumber;
            yield WaitForSeconds(waitTime);
            if(dCard2 == 11) {
                dealerAces += 1;
                dealersHand += 11;
            }else{
                dealersHand += dCard2;
            }

            CheckDealerSum();
            dh3 = true;
        }
    }
    if(dh3 == true && keepGoing == true) {
        if(dh3 == true) {
            //dealer 3rd card
            var dealer3 : GameObject = DealCard();
            dealer3.transform.position = dpos3.transform.position;
            dealer3.name = "dealer3";
            dealer3Card = GameObject.Find("dealer3");
            var dCard3 = dealer3Card.GetComponent(WhatCard).cardNumber;
            yield WaitForSeconds(waitTime);
            if(dCard3 == 11) {
                dealerAces += 1;
                dealersHand += 11;
            }else{
                dealersHand += dCard3;
            }
            CheckDealerSum();
            dh4 = true;
        }
    }
    if(dh4 == true && keepGoing == true) {
        if(dh4 == true) {
            //dealer 4th card
            var dealer4 : GameObject = DealCard();
            dealer4.transform.position = dpos4.transform.position;
            dealer4.name = "dealer4";
            dealer4Card = GameObject.Find("dealer4");
            var dCard4 = dealer4Card.GetComponent(WhatCard).cardNumber;
            yield WaitForSeconds(waitTime);
            if(dCard4 == 11) {
                dealerAces += 1;
                dealersHand += 11;
            }else{
                dealersHand += dCard4;
            }
            CheckDealerSum();
            dh5 = true;
        }
    }
    if(dh5 == true && keepGoing == true) {
        if(dh5 == true) {
            //dealer 5th card
            var dealer5 : GameObject = DealCard();
            dealer5.transform.position = dpos5.transform.position;
            dealer5.name = "dealer5";
            dealer5Card = GameObject.Find("dealer5");
            var dCard5 = dealer5Card.GetComponent(WhatCard).cardNumber;
            yield WaitForSeconds(waitTime);
            if(dCard5 == 11) {
                dealerAces += 1;
                dealersHand += 11;
            }else{
                dealersHand += dCard5;
            }
            CheckDealerSum();
            dh6 = true;
        }
    }
    if(dh6 == true && keepGoing == true) {
        if(dh6 == true) {
            //dealer 6th card
            var dealer6 : GameObject = DealCard();
            dealer6.transform.position = dpos6.transform.position;
            dealer6.name = "dealer6";
            dealer6Card = GameObject.Find("dealer6");
            var dCard6 = dealer5Card.GetComponent(WhatCard).cardNumber;
            yield WaitForSeconds(waitTime);
            if(dCard6 == 11) {
                dealerAces += 1;
                dealersHand += 11;
            }else{
                dealersHand += dCard6;
            }
            CheckDealerSum();
            dh7 = true;
        }
    }
    if(dh7 == true && keepGoing == true) {
        if(dh7 == true) {
            //dealer 7th card
            var dealer7 : GameObject = DealCard();
            dealer7.transform.position = dpos7.transform.position;
            dealer7.name = "dealer7";
            dealer7Card = GameObject.Find("dealer7");
            var dCard7 = dealer7Card.GetComponent(WhatCard).cardNumber;
            if(dCard7 == 11) {
                dealerAces += 1;
                dealersHand += 11;
            }else{
                dealersHand += dCard7;
            }
        }
        CheckDealerSum();
    }
    GetTotals();
}

function CheckSum() { //checking the sum of the cards
    while(playersHand > 21 && howManyAces > 0) { //gives the 2 values to the aces
        howManyAces--;
        playersHand -= 10;
    }
    playerTextMesh.text = prefix + playersHand;
    if(playersHand > 21) {
        Bust();
    }
    if(playersHand == 21) {
        PlayerBlackJack();
    }
}

function CheckDealerSum() {
    while(dealersHand > 21 && dealerAces > 0) {
        dealerAces--;
        dealersHand -= 10;
    }
    dealerTextMesh.text = dPrefix + dealersHand;
    if(dealersHand > 21) {
        Win();
    }
    if(dealersHand == 21) {
        DealerBlackJack();
    }
}

function Bust() {
    print("Bust");
    bustedText.active = true;
    bustedCube.active = true;
    placeBet = 0;
    madeBet = false;
}

function PlayerBlackJack() {
    print("Blackjack!");
    PBlackjackText.active = true;
    bustedCube.active = true;
    var jackpot = placeBet * 2.5;
    cash += jackpot;
    placeBet = 0;
    madeBet = false;
}

function Win() {
    print("Winner!");
    WinnerText.active = true;
    bustedCube.active = true;
    var winner = placeBet * 2;
    cash += winner;
    placeBet = 0;
	madeBet = false;
}

function Tie() {
    print("It's a Tie");
    TieText.active = true;
    bustedCube.active = true;
    placeBet = 0;
    cash += lastBet;
    madeBet = false;
}

function DealerBlackJack() {
    print("Dealers Blackjack");
    DBlackjackText.active = true;
    bustedCube.active = true;
    placeBet = 0;
    madeBet = false;
}

function Lose() {
    print("Lost");
    LostText.active = true;
    bustedCube.active = true;
    var jackpot = placeBet * 2.5;
    cash += jackpot;
    placeBet = 0;
    madeBet = false;
}

function GetTotals()
{
    if(dealersHand == playersHand)
    {
        Tie();
    }
    if(dealersHand > playersHand && dealersHand < 21)
    {
        Lose();	
    }
    if(dealersHand < playersHand && dealersHand < 21)
    {
        Win();	
    }
}

function DestroyAll()
{
    if(playerFirstCard != null)
    {
        Destroy(playerFirstCard);	
    }
    if(playerSecondCard != null)
    {
        Destroy(playerSecondCard);	
    }
    if(playersHitCard1 != null)
    {
        Destroy(playersHitCard1);	
    }
    if(playersHitCard2 != null)
    {
        Destroy(playersHitCard2);	
    }
    if(playersHitCard3 != null)
    {
        Destroy(playersHitCard3);	
    }
    if(playersHitCard4 != null)
    {
        Destroy(playersHitCard4);	
    }
    if(playersHitCard5 != null)
    {
        Destroy(playersHitCard5);	
    }
    if(dealerFirstCard != null)
    {
        Destroy(dealerFirstCard);	
    }
    if(dealer2Card != null)
    {
        Destroy(dealer2Card);	
    }
    if(dealer3Card != null)
    {
        Destroy(dealer3Card);	
    }
    if(dealer4Card != null)
    {
        Destroy(dealer4Card);	
    }
    if(dealer5Card != null)
    {
        Destroy(dealer5Card);	
    }
    if(dealer6Card != null)
    {
        Destroy(dealer6Card);	
    }
    if(dealer7Card != null)
    {
        Destroy(dealer7Card);	
    }
    if(blankCard != null)
    {
        Destroy(blankCard);	
    }
    if(doubleDown != null)
    {
        Destroy(doubleDown);	
    }

    bustedText.active = false;
    bustedCube.active = false;
    PBlackjackText.active = false;
    WinnerText.active = false;
    TieText.active = false;
    DBlackjackText.active = false;
    LostText.active = false;

    playerHit2 = true;
    playerHit3 = false;
    playerHit4 = false;
    playerHit5 = false;
	
    dh3 = false;
    dh4 = false;
    dh5 = false;
    dh6 = false;
    dh7 = false;
	
    //starting over reset aces
    howManyAces = 0;
    dealerAces = 0;
		
    //reset hand score
    playersHand = 0;
    dealersHand = 0;
}