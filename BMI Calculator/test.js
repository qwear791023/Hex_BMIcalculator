// 指定DOM
let weight = document.getElementById("weight");
let height = document.getElementById("height");
let ckValue = document.querySelector(".checkValue");
let ckValue2 = document.querySelector(".checkValue2");
let calculator = document.querySelector(".btn-calculator");
let result = document.querySelector(".result");
let panel = document.querySelector(".btn");
// let restart = document.getElementById("restart");
let list = document.querySelector(".listBox");
let allDel = document.querySelector(".del-all")

// 資料轉換
let data = JSON.parse(localStorage.getItem('Data')) || [];

// 取得日期
let date = new Date()
let month = ['01','02','03','04','05','06','07','08','09','10','11','12'];
let dateStr = month[date.getMonth()]+'-'+date.getDate()+'-'+date.getFullYear();

// 監聽
calculator.addEventListener('click', addData);
list.addEventListener('click', deleteData);
allDel.addEventListener('click', allDelFun);
height.addEventListener('blur',CKfun);
weight.addEventListener('blur',CKfun2);
updateList(data);

// 檢查欄位
function CKfun(e) {
  let str = e.target.value;
  if (str == '') {
    ckValue.style.visibility = "visible";
    ckValue.innerHTML = "*不得為空值";
  } else if ( isNaN(str) ) {
    ckValue.style.visibility = "visible";
    ckValue.innerHTML = "*請輸入數值";
  } else {
    ckValue.style.visibility = "hidden";
  }
}
function CKfun2(e) {
  let str = e.target.value;
  if (str == '') {
    ckValue2.style.visibility = "visible";
    ckValue2.innerHTML = "*不得為空值";
  } else if ( isNaN(str) ) {
    ckValue2.style.visibility = "visible";
    ckValue2.innerHTML = "*請輸入數值";
  } else {
    ckValue2.style.visibility = "hidden";
  }
}

// 新增並同步更新網頁內容
function addData(e) {
  e.preventDefault();
  let heightTxt = height.value;
  let weightTxt = weight.value;
  if (isNaN(heightTxt) || isNaN(weightTxt)) {
    alert("請正確輸入身高體重");
  }
  calculator.style.display = "none";
  result.style.display = "flex";
  // allDel.style.display = "flex";
  // BMI-calculator
  let bmi = (weightTxt / ((heightTxt / 100) **2)).toFixed(2);
  let LV = '';
  // 更改div.result
  if (bmi < 18.5) {
    LV = 'level1';
    result.classList.add("level1");
    result.innerHTML = '<div class="BMI"><i class="BMI-number">'+ bmi +'</i><i class="BMI-text"></i><button class="BMI-bg" id="restart"><span class="material-icons-outlined">autorenew</span></button></div><div class="BMI-txt"></div>';
  } else if (18.5<= bmi & bmi < 25) {
    LV = 'level2';
    result.classList.add("level2");
    result.innerHTML = '<div class="BMI"><i class="BMI-number">'+ bmi +'</i><i class="BMI-text"></i><button class="BMI-bg" id="restart"><span class="material-icons-outlined">autorenew</span></button></div><div class="BMI-txt"></div>';
  } else if (25 <= bmi & bmi < 30) {
    LV = 'level3';
    result.classList.add("level3");
    result.innerHTML = '<div class="BMI"><i class="BMI-number">'+ bmi +'</i><i class="BMI-text"></i><button class="BMI-bg" id="restart"><span class="material-icons-outlined">autorenew</span></button></div><div class="BMI-txt"></div>';
  } else if (30 <= bmi & bmi <35) {
    LV = 'level4';
    result.classList.add("level4");
    result.innerHTML = '<div class="BMI"><i class="BMI-number">'+ bmi +'</i><i class="BMI-text"></i><button class="BMI-bg" id="restart"><span class="material-icons-outlined">autorenew</span></button></div><div class="BMI-txt"></div>';
  } else if (35 <= bmi & bmi <40) {
    LV = 'level5';
    result.classList.add("level5");
    result.innerHTML = '<div class="BMI"><i class="BMI-number">'+ bmi +'</i><i class="BMI-text"></i><button class="BMI-bg" id="restart"><span class="material-icons-outlined">autorenew</span></button></div><div class="BMI-txt"></div>';
  } else if (40 <= bmi) {
    LV = 'level6';
    result.classList.add("level6");
    result.innerHTML = '<div class="BMI"><i class="BMI-number">'+ bmi +'</i><i class="BMI-text"></i><button class="BMI-bg" id="restart"><span class="material-icons-outlined">autorenew</span></button></div><div class="BMI-txt"></div>';
  }
  let restart = document.getElementById("restart");
  restart.addEventListener('click', reset);
  // 新增至localStorage
  let todo = {
    height: heightTxt,
    weight: weightTxt,
    bmi: bmi,
    bmiLV : LV,
    date: dateStr,
  };
  data.push(todo);
  updateList(data);
  localStorage.setItem('Data', JSON.stringify(data));
}
// 更新列表(ul.listBox)
function updateList(items) {
  let str = '';
  for (let i = 0; i < items.length; i++) {
    str += '<li class="' +items[i].bmiLV+ '"><span class="BMI-bg"></span><div class="BMI-txt"></div><div class="BMI-num">' +items[i].bmi+ '</div><div class="weight">' +items[i].weight+ '</div><div class="height">' +items[i].height+ '</div><div class="date">' +items[i].date+ '</div><span data-index='+i+' class="del material-icons-outlined">delete</span></li>';
  }
  list.innerHTML = str;
  if (items.length > 0) {
    allDel.style.display = "flex";
  } else {
    allDel.style.display = "none";
  }
}
// 刪除清單
function deleteData(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'SPAN') {return};
  var index = e.target.dataset.index;
  data.splice(index, 1);
  localStorage.setItem('Data', JSON.stringify(data));
  updateList(data);
}
// 刪除所有清單
function allDelFun(e) {
  e.preventDefault();
  data.splice(0, data.length);
  localStorage.clear();
  updateList(data);
}
// 重新計算BMI(欄位清空、出現"看結果")
function reset(e) {
  e.preventDefault();
  result.classList.remove("level1", "level2", "level3", "level4", "level5", "level6");
  calculator.style.display = "block";
  result.style.display = "none";
  height.value = '';
  weight.value = '';
}
