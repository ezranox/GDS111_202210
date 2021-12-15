var pics = new Array()

pics[0] ="images/kitty.png"
pics[1] = "images/doggo.jpg"
pics[2] = "images/bunny.jpg"

var pics2 = new Array()

pics2 [0] = "images/kitty.png"
pics2 [1] = "images/doggo/jpg"
pics2 [2] = "images/bunny.jpg"

var btn = document.querySelectorAll("button")

console.log(btn)

btn [0] .addEventListener ("click", function (e) { play(0) })
btn [1] .addEventListener ("click", function (e) { play(1) })
btn [2] .addEventListener ("click", function (e) { play(2) })

var pId = new Array("rock_p", "paper_p", "scissors_p")

var cId = new Array("rock_c", "paper_c", "scissors_c")

function swap(id, image) {

    document.getElementById(id).src = image

}

function play(id) {

    swap (pId[0], pics[0])
    swap (pId[1], pics[1])
    swap (pId[2], pics[2])

    swap (cId[0], pics[0])
    swap (cId[1], pics[1])
    swap (cId[2], pics[2])

    var p_choice = id 
    var c_choice = Math.floor (Math.random() * 2.9)

    swap (pId [p_choice], pics2[p_choice])
    swap (cId [c_choice], pics2[c_choice])

    switch(p_choice) {

        case 0:
        if(c_choice == 0) {

            showResults ("Kitty", "Kitty", "Oh no, a cat fight! It's a draw")
        }
    else if (c_choice == 1) { //comp is paper

        showResults ("Kitty", "Doggo", "Woof Woof.. You Lose!")
    }
    else{ //comp is scissors

        showResults ("Kitty", "Bunny", "Why are you running? You Win!")
    }
    break

    case 1:
        if(c_choice == 1){

            showResults ("Doggo","Doggo", "Looks like your owners have had enough. It's a Draw!")
        }
        else if (c_choice == 2) {

            showResults("Doggo", "Bunny", "All bark. no bite.. You lose!")
        }
        else{

            showResults("Doggo","Kitty", "Run. Run Lil one..You win!")
        }

        break

        case 2:
            if(c_choice == 2) {
 
                   
                   
                showResults("Bunny", "Bunny", "Hippity-Hoppity, scurry off you two.. It's a Draw!")
   
            }
            else if (c_choice == 0) {
           
               
                showResults("Bunny", "Kitty", "You've been clawed..You lose!")
            }
            else{
           
               
                showResults("Bunny", "Doggo", "Looks like you were faster than you thought lil one! You win!")
            }

            break
    } //end switch statement

}//play() CLOSE

function showResults (pChoice, cChoice, results) {
    
    document.getElementById("pChoice").innerHTML = pChoice
    document.getElementById("cChoice").innerHTML = cChoice
    document.getElementById("results").innerHTML = results
}