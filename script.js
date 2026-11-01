let radi;
let pie = 3.14159;
let cumfrence;
let cell ;
let que1;
let sde;
let que2;
let num;
let anwr;




function pie123(){

    radi = document.getElementById("pieans").value;

    radi = Number(radi);

    cumfrence = 2 * pie * radi;

    document.getElementById("pieui").textContent = (`The answer is ${cumfrence} `)

    
}

function pie1234(){

   cell = document.getElementById("ans1").value;
   cell = Number(cell)

    que1 = (cell * 9/5) + 32;
    que1 = Number(que1)
    document.getElementById("pieui1").textContent = (`The answer is ${que1}`)
    

}

function pie1245(){

    sde = Number(sde)
    sde = document.getElementById("ans2").value;
    que2 = Number(que2)
    que2 = sde * sde * sde
    document.getElementById("pieui2").textContent = (`The answer is ${que2}`)

}


function percentage(){

    num = document.getElementById("ans3").value;
    num = Number(num);
    anwr = Math.sqrt(num);
    document.getElementById("pieui3").textContent = (`The square root is ${anwr}`)


}


function opentab(){

    document.getElementById("pie").style.display = "block";

}

function opentabs(){

    document.getElementById("boarder1").style.display = "block";

}

function opentabss(){

    document.getElementById("boarder2").style.display = "block";

}

function opentabsss(){

    document.getElementById("boarder3").style.display = "block";

}






function closetab(){

    document.getElementById("pie").style.display = "none";

}

function closetabs(){

    document.getElementById("boarder1").style.display = "none";

}

function closetabss(){

    document.getElementById("boarder2").style.display = "none";

}
function closetabsss(){

    document.getElementById("boarder3").style.display = "none";

}