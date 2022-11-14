/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var quizJSON = {
    "info": {
        "name": "Test Your Knowledge!!",
        "main": "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<p>Learn More.</p>",
        "level1": "Jeopardy Ready",
        "level2": "Jeopardy Contender",
        "level3": "Jeopardy Amateur",
        "level4": "Jeopardy Newb",
        "level5": "Stay in school, kid..." // no comma here
    },
    "questions": [
        {// Question 1 - Multiple Choice, Single True Answer
            "q": "Predict how all component voltages and currents in this circuit will be affected as a result of the following fault.<br/><p style=\"text-align:center\"><img src=\"image/diodeq1.png\" style=\"width:350px;height:200px\"></p> ",
            "a": [
                {"option": "No current in circuit, no voltage across R1, full source voltage across D1. ", "correct": true},
                {"option": " Increased current in circuit, full source voltage across R1, little voltage across D1. ", "correct": false},
                {"option": " No current in circuit, no voltage across D1, full source voltage across R1.", "correct": false},
                {"option": "Large current in circuit, no voltage across R1, full source voltage across D1, D1 will most likely overheat and fail. ", "correct":false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Predict how all component voltages and currents in this circuit will be affected as a result of the following fault.<br/><p style=\"text-align:center\"><img src=\"image/diodeq2.png \" style=\"width:350px;height:200px\"></p>  ",
            "a": [
                {"option": "No current in circuit, no voltage across R1, full source voltage across D1. ", "correct":false},
                {"option": " Increased current in circuit, full source voltage across R1, little voltage across D1. ", "correct": false},
                {"option": "No current in circuit, no voltage across D1, full source voltage across R1. ", "correct": true},
                {"option": " Large current in circuit, no voltage across R1, full source voltage across D1, D1 will most likely overheat and fail.", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 3 - Multiple Choice, Single True Answer
            "q": "Predict how all component voltages and currents in this circuit will be affected as a result of the following fault. <br/><p style=\"text-align:center\"><img src=\"image/diodeq3.png \" style=\"width:350px;height:200px\"></p>",
            "a": [
                {"option": "No current in circuit, no voltage across R1, full source voltage across D1.", "correct": false},
                {"option": "Increased current in circuit, full source voltage across R1, little voltage across D1. ", "correct": true},
                {"option": "  No current in circuit, no voltage across D1, full source voltage across R1.", "correct": false},
                {"option": " Large current in circuit, no voltage across R1, full source voltage across D1, D1 will most likely overheat and fail.", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 4 - Multiple Choice, Single True Answer
            "q": "Can a diode act as a Switch?",
            "a": [
                {"option": "Yes", "correct": true},
                {"option": "No", "correct":false},
                {"option": "May Be", "correct": false},
               // {"option": " It increases by a factor of five", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 5 - Multiple Choice, Single True Answer
            "q": "The V-I characteristics curve is almost a straight line above the knee point. ",
            "a": [
                {"option": "Yes", "correct": true},
                {"option": "No", "correct": false},
               // {"option": "175 W", "correct": false},
               // {"option": " 35 W", "correct": true} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
         {// Question 6 - Multiple Choice, Single True Answer
            "q": "Reverse current in diode is a linear function of the Reverse voltage. ",
            "a": [
                {"option": "Yes", "correct":false},
                {"option": "No", "correct": true},
              //  {"option": "10 mA", "correct": false},
             //   {"option": " 90 mA", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
    {// Question 7 - Multiple Choice, Single True Answer
            "q":    " An ideal Si and an ideal Ge diode are connected in parallel with their anodes joined together and connected to a +5V supply and the cathodes joined together and connected to the other side of the supply voltage through a 1 K? resistor. If the current through the Si diode = I<sub>S</sub> and the current through the Ge diode = I<sub>G</sub> then select the correct answers from the options below."  ,	
 "a": [
                {"option": "I<sub>S</sub> = 4.3 mA & I<sub>G</sub> = 0 mA", "correct": false},
                {"option": " I<sub>S</sub> = I<sub>G</sub>= 2.15 mA", "correct": false},
                {"option": " I<sub>S</sub> = 0 mA & I<sub>G</sub> = 4.7 mA", "correct": true},
                {"option": " I<sub>S</sub> = I<sub>G</sub> = 2.35 mA", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 8 - Multiple Choice, Single True Answer
            "q":  " A diode conducts when it is forward-biased, and the anode is connected to the ________ through a limiting resistor."  ,	
 "a": [
                {"option": "positive supply", "correct": true},
                {"option": " negative supply", "correct": false},
                {"option": " cathode", "correct": false},
                {"option": " anode", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 9 - Multiple Choice, Single True Answer
            "q":  " A silicon diode measures a low value of resistance with the meter leads in both positions. The trouble, if any, is"  ,	
 "a": [
                {"option": "the diode is open.", "correct":false},
                {"option": " the diode is shorted to ground.", "correct": false},
                {"option": " the diode is internally shorted.	", "correct": true},
                {"option": " the diode is working correctly.", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
         {// Question 10 - Multiple Choice, Single True Answer
            "q":  " In a silicon diode reverse current is usually:"  ,	
 "a": [
                {"option": "very small", "correct":true},
                {"option": " very large", "correct": false},
                {"option": " zero", "correct": false},
                {"option": " in the breakdown region", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 11 - Multiple Choice, Single True Answer
            "q":  " Which is the most widely used semiconductor?"  ,	
 "a": [
                {"option": "Copper", "correct":false},
                {"option": " Germanium", "correct": false},
                {"option": " Silicon", "correct": true},
                {"option": " None of the above", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 12 - Multiple Choice, Single True Answer
            "q":  " What is the barrier potential of a Silicon diode and Germanium Diode at room temperature?"  ,	
 "a": [
                {"option": "Si=0.3,Ge=0.7", "correct":false},
                {"option": " Si=0.7,Ge=1", "correct": false},
                {"option": "Si=1,Ge=0.3 ", "correct": false},
                {"option": "Si=0.7,Ge=0.3", "correct": true} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        }
    ]
};
