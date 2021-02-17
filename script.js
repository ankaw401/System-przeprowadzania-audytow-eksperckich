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
function checkboxes1(nameKey)

{
  countAllFull = 0;
  countYesFull = 0;
 var inputElems = document.getElementsByTagName("input");
 var inputElemsNames = document.getElementsByClassName("yes");

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
  //zlicza yesy

  for (var i=0; i<inputElemsNames.length; i++) {       
     
      if(inputElemsNames[i].type == "radio" && inputElemsNames[i].checked == true){
        countYes++;
      }
  }
  countAllFull += count;
  countYesFull += countYes;
  resultYes+=countYesFull;
  resultAll+=countAllFull;

  //alert(countYesFull + "/"+ countAllFull +"..." + resultYes +".." +resultAll);
  //dodane
  //zapis wartosci yes i yes+no z każdej heurystyki - nadpisywane
  localStorage.setItem("resultYesSingle", countYesFull)
  localStorage.setItem("resultAllSingle", countAllFull)

  points = countYesFull/countAllFull*100;
  
  //dodane
  //wyciaganie wyniku yes i yes+no i dopisywanie kolejnych wartosci
  // tempAllStorage = localStorage.getItem("resultAllSingle");
  // tempYesStorage = localStorage.getItem("resultYesSingle");
  tempAllStorage = parseInt(tempAllStorage)
  tempYesStorage = parseInt(tempYesStorage) 

  //dodane
  //liczenie do całosci
  tempAllStorage = tempAllStorage + countAllFull
  tempYesStorage = tempYesStorage + countYesFull
  localStorage.setItem("yesStorage", tempYesStorage)
  localStorage.setItem("allStorage", tempAllStorage)



//zmienione result = ...
  var result = tempYesStorage/tempAllStorage;
  pointsProc=parseInt(result*100, 10)


  localStorage.setItem(nameKey, pointsProc);
  resultInt=parseInt(result*100, 10)


  localStorage.setItem("result%",  resultInt+"%");

}



