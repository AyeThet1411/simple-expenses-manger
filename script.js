'use strict';

const item_name=document.querySelector('input[name="item-name"]');
const amount=document.querySelector('input[name="amount"]');
const type=document.querySelector('select[name="type"]');
const date=document.querySelector('input[name="date"]');

const button=document.getElementById('button');

const formatDate=function(d){
    let date=d.split('-');
    let dt=new Date(date[0],date[1],date[2]);

    let formattedDate='';
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    formattedDate+=months[dt.getMonth()];
    console.log(formattedDate)
    let formattedDay;

    switch( date[2].substring(1) ) {
        //We can use the string of the day (dd format) to access the last number, which determines what we append...
        case '1':
          formattedDay = parseInt(date[2]) + "st"; //1st, 21st, etc
          break;        
        case '2':
          formattedDay = parseInt(date[2]) + "nd"; //2nd
          break;        
        case '3':
          formattedDay = parseInt(date[2]) + "rd"; //etc…
          break;  
        default:
          formattedDay = parseInt(date[2]) + "th";
      }
    formattedDate+= ' '+formattedDay;
    return formattedDate;
}
button.addEventListener('click',function(){
  if(item_name.value !== '' && amount.value !== ''){
    
    let type_icon;
    if(type.value === 'card'){
        type_icon='<i class="far fa-credit-card"></i>';
    }else if(type.value === 'cash'){
        type_icon='<i class="fas fa-money-check"></i>';
    }else if(type.value === 'cryptocoin'){
        type_icon='<i class="fab fa-bitcoin"></i>';
    }else if(type.value === 'other'){
        type_icon='<i class="far fa-question-circle"></i>;'
    }
    let form_validated=true;

    if(form_validated){
        let table=document.querySelector('table');
        let row=table.insertRow(1);
        let cell1=row.insertCell(0);
        let cell2=row.insertCell(1);
        let cell3=row.insertCell(2);
        let cell4=row.insertCell(3);
        cell1.innerHTML=`${type_icon}`;
        cell2.innerHTML=`${item_name.value}`;
        cell3.innerHTML=`${formatDate(date.value)}`;
        cell4.innerHTML=`$${amount.value}`;
        date.value='';
        amount.value='';
        item_name.value='';
        document.querySelector('tr[class="if-empty"').remove();
        
    }
  }else{
    const modal=document.querySelector('#modal');
    const btn=document.querySelector('button');
    const overlay=document.querySelector('#overlay');
    modal.style.display="block";
    overlay.style.display='block';

    btn.addEventListener('click',function(){
      modal.style.display='none';
      overlay.style.display='none';
    })

    overlay.addEventListener('click',function(){
      modal.style.display='none';
      overlay.style.display='none';
    })
  }
    
})






