document.querySelector('.cardnumber-input').oninput = ()=>{
    document.querySelector('.card-number').innerText= document.querySelector('.cardnumber-input').value;
   }


   document.querySelector('.cardholder-input').oninput=()=>{
    document.querySelector('.holdersname').innerText= document.querySelector('.cardholder-input').value;
   }
   
   document.querySelector('.month-inputt').oninput=()=>{
    document.querySelector('.frontmonth').innerText= document.querySelector('.month-inputt').value;
   }
   
   document.querySelector('.year-input').oninput=()=>{
    document.querySelector('.frontyear').innerText= document.querySelector('.year-input').value;
   }
  
   
   document.querySelector('.cvv-inputtt').oninput = ()=>{
    document.querySelector('.back-cvv').innerText= document.querySelector('.cvv-inputtt').value;
   }

document.querySelector('.cvv-inputtt').onmouseover = ()=>{
  document.querySelector('.backcontainer').style.display="block";
  
}
  document.querySelector('.cvv-inputtt').onmouseleave = ()=>{
  document.querySelector('.backcontainer').style.display="none";
  
}