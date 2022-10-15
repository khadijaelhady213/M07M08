document.getElementById('catlan').addEventListener("click", func_cat);
document.getElementById('english').addEventListener("click", func_eng);

const dias_cat = ["Diumenge","Dilluns", "Dimarts","Dimecres","Dijous","Divendres","Dissabte"]
const meses_cat = ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"];
const days = ["Saturday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
let dates=[];
let rad_day;

function getRandom(){ //función que devuelve una data random del 2022
  console.log("ha entrado a random");
  rad_day = Math.floor(Math.random() * 30) + 1;
  let rad_month = Math.floor(Math.random() * 12) + 1;
  let dt = new Date(rad_month+' '+rad_day+', '+2022);
  return dt;
}

function showDates(){
  //obtener 5 datas random del 2022
    let data1 = getRandom();
    let data2 = getRandom();
    let data3 = getRandom();
    let data4 = getRandom();
    let data5 = getRandom();
    dates.push(data1); dates.push(data2); dates.push(data3); dates.push(data4); dates.push(data5);  //añadir las datas al array

    let output= " ";
    let box;
    for(let i=0; i < dates.length; i++){ //recorre la lista de datas y ordenarla

          for(let j=0; j < dates.length; j++){

            if(dates[i] < dates[j]){ //se comparan las data y se ordenan
              box = dates[i];
              dates[i] = dates[j];
              dates[j] = box;
            }
          }
    }
}

function func_cat() { //función ue le da formato al array de datas en catán
  
    dates=[]; //vaciar el array antes de llenarlo
    showDates(); //invocar la función que rellena el array de dates con 5 random datas
    var cont = 1;
    let output=""; //vaiable con las 5 datas formateadas un solo string
    for(let i=0; i < dates.length; i++){

      if (meses_cat[dates[i].getMonth()].charAt(0)=='a' || meses_cat[dates[i].getMonth()].charAt(0)=='o'){
          output = output +"Data "+cont+":  "+dias_cat[dates[i].getDay()]+" "+rad_day+" d'"+meses_cat[dates[i].getMonth()]+" 2022 </br>";
      }else{
          output = output +"Data "+cont+":  "+dias_cat[dates[i].getDay()]+" "+rad_day+"  de "+meses_cat[dates[i].getMonth()]+" 2022 </br>";
      }
      cont ++;
    }
    document.querySelector("#output").innerHTML= output;
}

function func_eng() {//función ue le da formato al array de datas en castellano
    dates=[]; //vaciar el array antes de llenarlo
    showDates() //invocar la función que rellena el array de dates con 5 random datas
    var cont = 1;
    let output=""; //vaiable con las 5 datas formateadas un solo string
    for(let i=0; i < dates.length; i++){
      output = output +"Date "+cont+":  "+days[dates[i].getDay()]+" "+rad_day+" "+monthNames[dates[i].getMonth()]+" 2022 </br>";
      cont ++;
    }
    document.querySelector("#output").innerHTML= output;
}
