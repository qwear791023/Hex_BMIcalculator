let height = document.getElementById('height');
let weight = document.getElementById('weight');
let list = document.querySelector('.list');
let send = document.querySelector('.send');
let data = JSON.parse(localStorage.getItem('Data')) || [];
let send2 = document.querySelector('.send2');
let outline = document.querySelector('.send-outline');
let loop = document.querySelector('.loop');
let sendText = document.querySelector('.sendText');
let allDel = document.querySelector('.allDel');
let checkValue = document.querySelector('.checkValue');
let checkValue2 = document.querySelector('.checkValue2');

// send.addEventListener('click', addData);
// list.addEventListener('click', deleteData);
// loop.addEventListener('click', reset);
// allDel.addEventListener('click', allDelFun);

// updateList(data);


height.addEventListener('blur',checkFun);
weight.addEventListener('blur',checkFun2);
function checkFun(e) {
  let str = e.target.value;
  if (str == '') {
    checkValue.style.visibility = 'visible';
  }else{
    checkValue.style.visibility = 'hidden';
  }
}
function checkFun2(e) {
  let str = e.target.value;
  if (str == '') {
    checkValue2.style.visibility = 'visible';
  }else{
    checkValue2.style.visibility = 'hidden';
  }
}

// let date = new Date()
// let month = ['01','02','03','04','05','06','07','08','09','10','11','12'];
// let dateStr = month[date.getMonth()]+'-'+date.getDate()+'-'+date.getFullYear();

// function addData(e) {
//   let tallText = tall.value;
//   let weightText = weight.value;
//   e.preventDefault();  
//   if (tallText == '' && weightText==''){
//     checkValue.style.visibility = 'visible'; 
//     checkValue2.style.visibility = 'visible';
//     return;
//   }else if(tallText == ''){
//     checkValue.style.visibility = 'visible';
//     return;
//   }else if(weightText==''){
//     checkValue2.style.visibility = 'visible';
//     return;
//   }
//   send.style.display='none';
//   send2.style.display='flex';
//   sendText.style.opacity='1';
  
//   let bmi = (weightText / ((tallText / 100) ** 2)).toFixed(2);
//   let bmiClass='';
//   let bmiColor='';
//   if(bmi<18.5){
//     bmiClass = '過輕';
//     bmiColor = 'border-light';
//     outline.style.border='6px solid #31BAF9';
//     loop.style.background='#31BAF9';
//     outline.innerHTML = '<span class="send-outline-text light">'+bmi+'</span><small class="light">BMI</small>';
//     sendText.innerHTML ='<span class="send-outline-text light">過輕</span>'
//   }else if(bmi >= 18.5 && bmi <=23.9){
//     bmiClass = '正常';
//     bmiColor = 'border-normal';
//     outline.style.border='6px solid #86D73F';
//     loop.style.background='#86D73F';
//     outline.innerHTML = '<span class="send-outline-text normal">'+bmi+'</span><small class="normal">BMI</small>';
//     sendText.innerHTML ='<span class="send-outline-text normal">正常</span>'
//   }else if(bmi >= 24 && bmi <=27.9){
//     bmiClass = '過重';
//     bmiColor = 'border-heavy';
//     outline.style.border='6px solid #FF982D';
//     loop.style.background='#FF982D';
//     outline.innerHTML = '<span class="send-outline-text heavy">'+bmi+'</span><small class="heavy">BMI</small>';
//     sendText.innerHTML ='<span class="send-outline-text heavy">過重</span>'
//   }else if(bmi >= 28){
//     bmiClass = '肥胖';
//     bmiColor = 'border-fat';
//     outline.style.border='6px solid #FF1200';
//     loop.style.background='#FF1200';
//     outline.innerHTML = '<span class="send-outline-text fat">'+bmi+'</span><small class="fat">BMI</small>';
//     sendText.innerHTML ='<span class="send-outline-text fat">肥胖</span>'
//   }

//   let todo = {
//     tall: tallText,
//     weight: weightText,
//     bmi: bmi,
//     date: dateStr,
//     class:bmiClass,
//     color:bmiColor
//   };
//   data.push(todo);
//   updateList(data);
//   localStorage.setItem('Data', JSON.stringify(data));
// }

// function updateList(items) {
//   let str = '';
//   for (let i = 0; i < items.length; i++) {
//     str += '<li class="'+items[i].color+'"><h4>'+items[i].class+'</h4><small>BMI</small>' + items[i].bmi + '<small>weight</small>' + items[i].weight + 'kg' + '<small> tall</small>' + items[i].tall + 'cm'+'<span>'+items[i].date+ '</span>'+'<a href="#" data-index='+i+'>刪除</a></li>';
//   }  
//   list.innerHTML = str;
// }

// function deleteData(e) {
//   e.preventDefault();
//   if (e.target.nodeName !== 'A') { return };
//   let index = e.target.dataset.index;
//   data.splice(index, 1);
//   localStorage.setItem('Data', JSON.stringify(data));
//   updateList(data);
// }

// function reset(e){
//   e.preventDefault();
//   send.style.display='flex';
//   send2.style.display='none';
//   sendText.style.opacity='0';
//   tall.value='';
//   weight.value='';
// }

// function allDelFun(e){
//   if (e.target.nodeName !== 'A') { return };
//   data.splice(0, data.length);  
//   localStorage.clear();
//   updateList(data);
// }