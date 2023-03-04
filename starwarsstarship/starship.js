let row = document.querySelector(".row");
let alert = document.querySelector(".alert");

let nameInfo = document.querySelector("#nameInfo");
let manufacturerInfo = document.querySelector("#manufacturerInfo");
let lengthInfo = document.querySelector("#lengthInfo");
let maxAtmospheringSpeedInfo = document.querySelector("#maxAtmospheringSpeedInfo");
let cargoCapacityInfo =document.querySelector("#cargoCapacityInfo");




let a = 0;
let AllName = [];
let Allmanufacturer = [];
let Alllength = [];
let AlltmaxAtmospheringSpeed= [];
let AllcargoCapacity= [];

//Info Close Button
function closeAlert(){
  alert.style.display="none";
}


//Api have 8 page 
 for(i=1;i<5;i++){

 fetch(`https://swapi.dev/api/starships/?page=${[i]}`)
 .then((response)=>response.json())
 .then((responseJson)=>{ 
    let person = (responseJson.results)


         person.forEach((element) => {
            //Needs Divs
          let openButton = document.createElement("div")
            openButton.setAttribute("class" ,"col-sm"  )
            let openButtonSecond = document.createElement("div")
            openButtonSecond.setAttribute("class" , "card");
            let openButtonThird = document.createElement("div")
            openButtonThird.setAttribute("class" , "card-body");


            //Object New Info
          element.id = a;
          a++;
 
            //Button Info
            let button = document.createElement("button")
            button.setAttribute("class" , "btn ");
            button.setAttribute("id" , `${element.id}` );
            button.setAttribute("onclick" ,  `OpenAlertBtn(this.id)` );
            button.innerHTML=`${element.name}`;
            
            

            
            //ApendChilds
            row.appendChild(openButton);
            openButton.appendChild(openButtonSecond);
            openButtonSecond.appendChild(openButtonThird);
            openButtonThird.appendChild(button);

         
        
            //Info Alert

          //Name in Array 
          (AllName.push(`${element.name}`));
          (Allmanufacturer.push(`${element.manufacturer}`));
          (Alllength.push(`${element.length}`));
          (AlltmaxAtmospheringSpeed.push(`${element.max_atmosphering_speed}`));
          (AllcargoCapacity.push(`${element.cargo_capacity}`));

      
            console.log(element.manufacturer);



          
        });
   


});
}




function OpenAlertBtn(c){

  document.querySelector(".alert").style.display = "flow-root";


  nameInfo.innerHTML = ` ${AllName[Number(c)]} `;
  manufacturerInfo.innerHTML = ` ${Allmanufacturer[Number(c)]} `;
  lengthInfo.innerHTML = ` ${Alllength[Number(c)]} `;
  maxAtmospheringSpeedInfo.innerHTML = ` ${AlltmaxAtmospheringSpeed[Number(c)]} `;
  cargoCapacityInfo.innerHTML = ` ${AllcargoCapacity[Number(c)]} `;


} 
