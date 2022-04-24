// ==UserScript==
// @name         ProductionEnv
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://arla.service-now.com/*
// @icon         https://www.google.com/s2/favicons?domain=service-now.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if(document.title.includes("NOC")){

        setTimeout(function afterTwoSeconds() {
            //alert("test");

            try{
                let count_of_new = 0;
                let your_ID="MICRY";
                let count_of_your_INC=0;
                let audio = new Audio('http://www.sjap.nl/Take-off-warning.mp3');
                //let audio = new Audio('http://83.238.210.227/stonoga.mp3');


                let count_of_inc = document.getElementsByClassName("list2_body")[0].childElementCount;

                if(count_of_inc>0){
                    document.getElementsByClassName("list2_body")[0].children[0].childNodes[3].textContent
                    for(let i = 0; i < count_of_inc; i++){
                        if(document.getElementsByClassName("list2_body")[0].children[i].childNodes[3].textContent=="New"){
                            count_of_new++;
                            console.log(count_of_new + "NEW");
                        }if(document.getElementsByClassName("list2_body")[0].children[i].childNodes[6].textContent==your_ID){
                            count_of_your_INC++;
                            console.log(count_of_your_INC + "Assigned to you");
                        }
                    }
                    if(count_of_new>0 || count_of_your_INC>0){
                        audio.play();
                        if(count_of_new>0 && !(count_of_your_INC>0)){
 audio.play();
                            document.title = count_of_inc + " Incidents | " + count_of_new +" NEW";}
                        if(!(count_of_new>0) && (count_of_your_INC>0)){
 audio.play();
                            document.title = count_of_inc + " Incidents | " + count_of_your_INC +" Assigned";}else{
                            document.title = count_of_inc + " Incidents | " + count_of_your_INC +" Assigned | " + count_of_new +" NEW" ;
                            }

                    }else{
                        document.title = count_of_inc + " Incidents";
                        console.log(count_of_new + "NEW");
                    console.log(count_of_your_INC + " Assigned to you");}

                }
window.setTimeout(function () {
            window.location.reload();
        }, 30000);
            }catch{
                console.log("Error")
                document.title="No Incidents";
                window.setTimeout(function () {
                    window.location.reload();
                }, 30000);
            }

        }, 3000)


    }
})();

