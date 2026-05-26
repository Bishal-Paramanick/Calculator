const display=document.getElementById("result");
let curdisplay="";
if(display.value===""){
    display.value=0;
}
function appendToDisplay(input){
    if(display.value==='0'){
        display.value=input;
        curdisplay=input;
    }
else {display.value+=input;
    curdisplay+=input;
}
}
function clearTheDisplay(){
    let str=String(display.value);
    display.value=str.slice(0,-1);
    if(display.value==""){
        display.value=0;
    }
}
function CompleteClearDisplay(){
    display.value=0;
}
function totalValue(){
    try{
        let result=eval(curdisplay);
    display.value=result;
    curdisplay=result.toString();
    }
    catch{
        display.value="ERROR";
        curdisplay="";
        setTimeout(()=>{display.value=0;
            curdisplay="0";
        },3000);
    }
}
function toNegative(){
    let char=String(display.value);
    if(char.charAt(0)==="-"){
        char=char.slice(1);
    }
    else char='-'+char;
    display.value=char;
}
function reciprocal(){
    try{
        let curr=eval(display.value);
        if(curr===0){
            display.value="ERROR";
            setTimeout(()=>display.value=0,3000);
        }
        else{
            display.value=1/curr;
        }
    }
    catch{
        display.value="ERROR";
        setTimeout(()=>display.value=0,3000);
    }
}
function appendSquare(){
    if(display.value!=="0"){
        curdisplay+="**2";
        display.value+="²";
    }
}
function appendPower(){
    if(display.value!=="0"&& display.value!==""){
        curdisplay+="**";
        display.value+="^";
    }
}
function appendPercentage(){
    display.value+="%";
    curdisplay+="/100";
}
function root(){
if(display.value!=="0"&& display.value!==""){
        curdisplay+="**0.5";
        display.value="√(" + display.value + ")";
    }
}
window.addEventListener("keydown",function(event){
const key=event.key;
if(key>=0&&key<=9){
    appendToDisplay(key);
}
if(key==="/"||key==="*"||key==="-"||key==="+"||key==="."){
    appendToDisplay(key);
}
if(key==="Enter"||key==="="){ event.preventDefault();
    totalValue();}
if(key==="%"){
    appendPercentage();
}
if(key==="Backspace")clearTheDisplay();
if(key==="Delete")CompleteClearDisplay();
if(key.toLowerCase()==="r")root();
if(key.toLowerCase()==="s")appendSquare();
if(key==="^")appendPower();
if(key.toLowerCase==="n")toNegative();
if(key.toLowerCase==="o")reciprocal();
});