let row = document.querySelector(".row");
let alert = document.querySelector(".alert");
let nameInfo = document.querySelector("#nameInfo");
let heightInfo = document.querySelector("#heightInfo");
let massInfo = document.querySelector("#massInfo");
let eyeColorInfo = document.querySelector("#eyeColorInfo");
let genderInfo =document.querySelector("#genderInfo");




let a = 0;
let AllName = [];
let AllHeight = [];
let AllMass = [];
let AllEyeColor= [];
let AllGender= [];

//Info Close Button
function closeAlert(){
  alert.style.display="none";
}


//Api have 8 page 
 for(i=1;i<10;i++){

 fetch(`https://swapi.dev/api/people/?page=${[i]}`)
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
          (AllHeight.push(`${element.height}`));
          (AllMass.push(`${element.mass}`));
          (AllEyeColor.push(`${element.eye_color}`));
          (AllGender.push(`${element.gender}`));




          
        });
   


});
}




function OpenAlertBtn(c){
  document.querySelector(".alert").style.display = "flow-root";


  nameInfo.innerHTML = ` ${AllName[Number(c)]} `;
  massInfo.innerHTML = ` ${AllMass[Number(c)]} `;
  genderInfo.innerHTML = ` ${AllGender[Number(c)]} `;
  heightInfo.innerHTML = ` ${AllHeight[Number(c)]} `;
  eyeColorInfo.innerHTML = ` ${AllEyeColor[Number(c)]} `;


} 
