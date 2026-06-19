
let btnEl=document.getElementById("btn1")
let par1El = document.getElementById("par")
let count = 0
function bn1(){ 
                  count= count+1
                  par1El.innerText = count
                  console.log(count)

}

function bn2(){ count= count+2
                par1El.innerText = count
                console.log(count)
}

function bn3(){ count = count +3
                par1El.innerText = count 
                console.log(count)
}
let par2El = document.getElementById("par2")
let counter = 0
function bn4(){ 
                  counter = counter +1
                  par2El.innerText = counter
                  console.log(counter)

}

function bn5(){ counter= counter +2
                par2El.innerText = counter
                console.log(counter)
}

function bn6(){ counter= counter +3
                par2El.innerText = counter
                console.log(counter)
            }

            let saveEl =document.getElementById("par")
            let prevEl = document.getElementById("presc1")
            function save1()
            { 
              let  dis1 = saveEl.innerText
              let resultz1 = "Total Scores: " +  dis1
              prevEl.innerText = resultz1
                console.log(resultz1)
            }

            let save1El =document.getElementById("par2")
            let prev1El = document.getElementById("presc2")
            function save2(){ 
              let  dis2 = save1El.innerText
              let resultz2 = "Total Scores: " +  dis2
              prev1El.innerText = resultz2
                console.log(resultz2)}