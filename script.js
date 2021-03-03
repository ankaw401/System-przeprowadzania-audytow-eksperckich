function main_buttom() {
  const realFileBtn = document.getElementById("real-file");
  const customBtn = document.getElementById("custom-button");

  customBtn.addEventListener("click", function(){
    realFileBtn.click();
  });
}

function passvalue(x){
  if(x==1){
    var firstname=document.getElementById("txt").value;
    localStorage.setItem("textvalue", firstname);
    return false;
    }
  if (x==2){
    var firstname=document.getElementById("txt2").value;
    localStorage.setItem("textvalue2", firstname);
    return false;
    }
  if (x==3){
    var firstname=document.getElementById("txt3").value;
    localStorage.setItem("textvalue3", firstname);
    return false;
}
  else{
    var firstname=document.getElementById("txt4").value;
    localStorage.setItem("textvalue4", firstname);
    return false;
  }
}


var resultYes=0;
var resultAll=0;
tempAllStorage = 0
tempYesStorage = 0
function checkboxes1(nameKey){

  countAllFull = 0;
  countYesFull = 0;
  var inputElems = document.getElementsByTagName("input");
  count = 0;
  countYes = 0;
  countAllFull = 0;
  countYesFull = 0;

//zlicza wszystkie yes+no
  for (var i=0; i<inputElems.length; i++) {       
     if (inputElems[i].type == "radio" && inputElems[i].checked == true && inputElems[i].className != "x"){
        count++;
     }
  }


  for (var i=0; i<inputElems.length; i++) {       
    if (inputElems[i].type == "radio" && inputElems[i].checked == true && inputElems[i].className == "yes"){
       countYes++;}
  }

  countAllFull += count;
  countYesFull += countYes;
  resultYes+=countYesFull;
  resultAll+=countAllFull;


  //zapis wartosci yes i yes+no z każdej heurystyki - nadpisywane
  localStorage.setItem("resultYesSingle", countYesFull)
  localStorage.setItem("resultAllSingle", countAllFull)
  points = countYesFull/countAllFull*100;

  tempAllStorage = parseInt(tempAllStorage)
  tempYesStorage = parseInt(tempYesStorage) 

  //liczenie do całosci
  tempAllStorage = tempAllStorage + countAllFull
  tempYesStorage = tempYesStorage + countYesFull
  localStorage.setItem("yesStorage", tempYesStorage)
  localStorage.setItem("allStorage", tempAllStorage)


  var result = tempYesStorage/tempAllStorage;
  pointsProc= countYesFull/countAllFull
  pointsProc=parseInt(pointsProc*100, 10)

  localStorage.setItem(nameKey, pointsProc);
  resultInt=parseInt(result*100, 10)

  localStorage.setItem("result%",  resultInt+"%");


 for (var j=0; j<inputElems.length; j++){
    if (inputElems[j].type == "radio" && inputElems[j].checked == true && inputElems[j].className != "x"){
      inputElems[j].checked = false;}
 }

}



  


