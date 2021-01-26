// let b=10;
// let a=5;
// let c=2;
// d= ((b**2)-(4*a*c))/(2*a);
// console.log(d)
// m= `${b} squared minus 4 times ${a} times ${c} divided by 2 times ${a}`;
// console.log(m)


// let dubem=[]
// dubem=["Ephraim",2,3,'Dubem', true, ['Silas','lucky']]
// // console.log(dubem.length)
// for(let i=1;i>=0; i--){

//     console.log(dubem[dubem.length-1][i])
// }

// let dubem={
//     heigth:"6ft",
//     age:25,
//     education:"HND",
//     color:"chocolate",
//     speak: function(){
//         console.log(`i am ${this.age} years old`);
//     }
// }
// dubem.speak();

// function add() {
    // return 7+3;

// }
// console.log(add());
// (
//     function(){
// //         console.log('IIFE')
// //     }
// )();
// function sub(x,y){
    // return x-y;
// }
// console.log(sub(24,64))

// function add(x,y){
//   console.log(` answer to add operation is ${x+y}`);
// }
// function sub(x,y){
//   console.log(` answer to subtract operation is ${x-y}`);
// }
// function mul(x,y){
//   console.log(` answer to multiply operation is ${x*y}`);
// }
// function div(x,y){
//   console.log(` answer to divide operation is ${x/y}`);
// }
// function mod(x,y){
//   console.log(` answer to modulus operation is ${x%y}`);
// }

// //   //     Sub(x,y);{
// // //     return x-y;
// // // }
// // //     mul(x,y);{
// // //     return x*y;
// // // }
// // //     div(x,y);{
// // //     return x/y;
// // // }

// // console.log(`the answer to add operation is ${add(20,10)}`)
// // console.log(`the answer to sub operation is ${sub(20,10)}`)
// // console.log(`the answer to mul operation is ${mul(20,10)}`)
// // console.log(`the answer to div operation is ${div(20,10)}`)

// function alloperations(x,y)
// {
//   add(x,y);
//   sub(x,y);
//   mul(x,y);
//   div(x,y);
//   mod(x,y);

// }

// alloperations(4,5);


// let x=5;

// function addx(){
//   let x=7;
//     function maniX(){
//       let x=9;
//       console.log(x);
//       x+=5;
//       console.log(x);
//     }
//     maniX();
//   console.log(x);
// }



// console.log(x);
// addx();
// console.log(x);

// let dubem = [ [],['silas','ephraim']];
// for(let i= 0;i<dubem.length;i++){
//   console.log (dubem[1][i]);
// }

// let y = [
//   'dubem',
//   'jkfvhhjgg',
//   'hjkhhjk',
//   'dubem',
//   'jkfvhhjgg',
//   'hjkhhjk',
//   'dubem',
//   'jkfvhhjgg',
//   'hjkhhjk',
//   'dubem',
//   'jkfvhhjgg',
//   'hjkhhjk',
//   'dubem',
//   'jkfvhhjgg',
//   'hjkhhjk',
//   'dubem',
//   'jkfvhhjgg',
//   'hjkhhjk',
//   'dubem',
//   'jkfvhhjgg',
//   'hjkhhjk',
//   'dubem',
//   'jkfvhhjgg',
//   'hjkhhjk',
//   'dubem',
//   'jkfvhhjgg',
//   'hjkhhjk',
// ]
// // console.log(`the answer to add operation is ${add()}`)
// // console.log(`the answer to sub operation is ${sub()}`)
// // console.log(`the answer to mul operation is ${mul()}`)
// // console.log(`the answer to div operation is ${div()}`)

// let boss= document.getElementsByTagName('li');
// for(let i=0; i<boss.length; i++){
//     boss[i].innerHTML = y[i];
// }
// let names=['Dubem','Ephraim']
// let features=['height', 'age', 'sex', 'position']
// for(let i= 0; i<names.length;i++){
//   console.log(names[i]);
//   for(let j=0; j<features.length;j++)
//   {
//     console.log(features[j])
//   }
// };

// let x=8; //if and if else statement
// if(x===7){
//   console.log(x);
// }
// else{
//   console.log(`x is not equal to 7 but equal to  ${x}`)
// }

// let x=8; //tenary operator
// x===7? console.log(x) : console.log(`x is not equal to 7 but equal to  ${x}`);

// let x=5,  y=8;
// x>=7 && x<=10? console.log(`they are equal`): console.log(`x = ${x}, y = ${y}, so the are not equal `)


// // javascript events
// let btn = document.getElementById('submit-button');
// let email = document.getElementById('email-field');
// let names= document.getElementById('name-field');

// console.log(btn);
// console.log(email);
// console.log(names);

// btn.addEventListener('click', function(event){
//   let visitorName = names.value;
//   let visitorEmail = email.value;

  
//   console.log(visitorEmail);
//   console.log(visitorName);
//   event.preventDefault();
// })


// let btn= document.getElementById('submit-button');
// btn.addEventListener('click',(event)=>{
//     console.log('button clicked');
//     event.preventDefault();
// });

// for (let i=0;i<=15;i++);{
//   console.log(column);
  
//   for (let j=0;j<=15;j++);{
//       console.log(row);
  

// }
// }


// let btn= document.getElementById('clicck');
// let column= document.getElementById('table-column');
// let color= document.getElementById('submit');
// let row= document.getElementById('table-row');

// btn.addEventListener('click',(event) =>{

    // let rowss=rows.value;
    // let columnss=columns.value;
    // let colorss=colors.value;
    // let roww= document.getElementById('table-row')
//     for(i=1;i<=rowss; i++){
//         console.log(`row ${i}`);
//         for(j=1;j<= columnss; j++){
//             console.log(`column ${j}`)
//         }
        
//     }
   

//     event.preventDefault();
// })

// let columns= column.value
// let rows= row.value 
// let colors= color.value 

// console.log(columns)
// console.log(rows)
// console.log(colors)

// const dudu= document.createElement("li");
// dudu.innerText = "johnleonard";
// console.log(dudu);
// document.getElementById("para").appendChild(dudu);

// const test = document.getElementById('para').lastElementChild;
// console.log(test);
// let sup= document.getElementsByTagName('ol')

// for(w=0; w< sup.length; w++){
//     sup[w].appendChild(test);
// }

const tb = document.getElementById('table');
const btn = document.getElementById('clicck');
let columns= document.getElementById('table-column');
let colors= document.getElementById('submit');
let rows= document.getElementById('table-row');
let colorr = colors.value;
let cells = tb;

let col = columns.value;
let row = rows.value;
console.log(row);

let retrievecol = localStorage.getItem('colvalue')
let retrieverow = localStorage.getItem('rowvalue')
console.log(retrieverow)
console.log(retrievecol)
  if( retrievecol===null ){
    columns.value=0;
  }
  else{
    columns.value= retrievecol;
  }

  if( retrieverow===null ){
    rows.value=0;
  }

  else{
    rows.value= retrieverow;
  }
// if(retrieverow.value= ''){
//   rows.innerText.value = 0;
// }
// else{
//   rows.innerText.value = retrieverow.value;
// };
// if(retrievecol.value= ''){
//   columns.innerText.value = 0
// }
// else{
//   columns.innerText.value = retrievecol.value
// }

// localStorage.setItem('name','dubem');
// document.querySelector('.row').value ='name'
// let ele= document.createElement('h1');

// let boy= localStorage.getItem('name');
// console.log(boy)
// ele.innerText = boy;
// document.body.appendChild(ele);
// localStorage.setItem('name',bros);


 btn.addEventListener('click', (event) =>{
   
  col = columns.value;
  row = rows.value;

  // console.log(row);

  // if(!localStorage.getItem('retaincol'))
  // 
  // function colupload(){
  //   let columns= localStorage.getItem('retaincol')
  //   localStorage.setItem('retaincol', retaincol)
  //   console.log(retaincol)


  // if (!localStorage.getItem('retainrow')) {
  //   localStorage.setItem('roretainrow',0)
  //   function rowupload(){
  //     let columns= localStorage.getItem('retainrow')
  //     localStorage.setItem('retainrow', retainrow)
  //     console.log(retainrow)
    
  //   }
  // }
  // }

     
      
      tb.innerHTML = '';

      for(i=0;i<row;i++){
        console.log(row);
        const neww = document.createElement('tr');

          for(j=0;j<col;j++){
              const coll = document.createElement('td');
              neww.appendChild(coll);
              tb.appendChild(neww);
          };   
      };

      cells=document.querySelectorAll('td');



      for(let i=0; i<cells.length; i++){
        let count = 0;
        cells[i].addEventListener('click', (event) =>{

          //removeCellBg(cells);
          setcellColor(cells[i]);

          count++;
          
          if(count >2){
            removeCellBg(cells[i]);
            count = 0;
          }
        console.log(count);
        event.preventDefault();
        
        });}

        localStorage.setItem("colvalue",col)
        localStorage.setItem('rowvalue',row)
       

      event.preventDefault();
});

 



function removeCellsBg(allTds){
  for(let i=0; i<allTds.length; i++ ){
    allTds[i].style.backgroundColor='#fff';
  }
};

function removeCellBg(oneTd){
    oneTd.style.backgroundColor='#fff';
};

function setcellColor(thisCell){
  colorr = colors.value;
  thisCell.style.backgroundColor = colorr;
 };
