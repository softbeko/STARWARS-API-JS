let row = document.querySelector(".row");
let alert = document.querySelector(".alert");

let nameInfo = document.querySelector("#nameInfo");
let rotationPeriodInfo = document.querySelector("#rotationPeriodInfo");
let gravityInfo = document.querySelector("#gravityInfo");
let terrainInfo = document.querySelector("#terrainInfo");
let orbitalPeriodInfo =document.querySelector("#orbitalPeriodInfo");




let a = 0;
let AllName = [];
let AllrotationPeriod = [];
let Allgravity = [];
let Allterrain= [];
let AllorbitalPeriod= [];

//Info Close Button
function closeAlert(){
  alert.style.display="none";
}


//Api have 8 page 
 for(i=1;i<6;i++){

 fetch(`https://swapi.dev/api/planets/?page=${[i]}`)
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
          (AllrotationPeriod.push(`${element.rotation_period}`));
          (Allgravity.push(`${element.gravity}`));
          (Allterrain.push(`${element.terrain}`));
          (AllorbitalPeriod.push(`${element.orbital_period}`));


    




          
        });
   


});
}




function OpenAlertBtn(c){

  document.querySelector(".alert").style.display = "flow-root";


  nameInfo.innerHTML = ` ${AllName[Number(c)]} `;
  rotationPeriodInfo.innerHTML = ` ${AllrotationPeriod[Number(c)]} `;
  gravityInfo.innerHTML = ` ${Allgravity[Number(c)]} `;
  terrainInfo.innerHTML = ` ${Allterrain[Number(c)]} `;
  orbitalPeriodInfo.innerHTML = ` ${AllorbitalPeriod[Number(c)]} `;


} 
