// // khai báo biến
// function User(firstName, lastName, avarta) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avarta = avarta;

//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// var author = new User('Son', 'Dang', 'Avatar');
// var user = new User('Tran', 'Thanh', 'Avatar');

// // them thuoc tinh rieng cua no
// author.title = 'Chia se tai F8';
// user.comment = 'Lieu co ...'

// console.log(author.getName());
// console.log(user.getName());


// function Person (name, age ,addrest, sex){
//     this.name = name;
//     this.age = age;
//     this.addrest = addrest;
//     this.sex = sex;

//     this.Person = function() {
//         return `${this.age} &{this.}`
//     }
// }
// var Human = new Person('HuuThanh', 18, 'QN,VN', 'Nam');
// var woMan = new Person('Gai', 19,'HN,VN','Nu');
// // them thuoc tinh

// Human.bird = 'CO CHIM';
// woMan.buom = 'CO BUOM';
// console.log(Human);
// console.log(woMan);

// var date = new Date();

// var year = date.getFullYear();

// var month = date.getMonth() + 1;

// var day = date.getDate();

// console.log(`${day}/${month}/${year}`)

// var random = Math.floor(Math.random() * 4);
// var bouns = [ 
//     'lon',
//     'buom',
//     'chim',
//     'lon nc ngot',
// ]
// console.log(bouns[random]);

// var date = 2;
// if (date === 2 ){
//     console.log('Hom nay la thu 2');
// }
// else if (date == 3) {
//     console.log('Hom nay la thu 3');
// }
// else{
    
// }
// var date = '3';

// switch (date) {
//     case 2:
//         console.log('Hom nay la thu 2');
//         break;
//     case 3:
//         console.log('Hom nay la thu 7 e thich di vao bar')
//         break;
//     default:
//         console.log('Hom nay la chu nhat');    
// }

// var coure = {
//     name : 'Javscrip',
//     coin : 250,
// }

// if (coure.coin >0){
//     console.log(`${coure.coin} coin`);
// }
// else{
//     coure.log('Free');
// }

// var kq = coure.coin == 0 ? console.log(`${coure.coin} coin`) : console.log('free')


// var  a = 101;
// for (var i = 0 ; i < a; i++ ){
//     console.log(i);
// }

// var myArray = [
//     'Javascrip',
//     'PhP',
//     'Java',
//     'Dart',
//     'Ruby',
//     'Python',
// ]
// var arryLength = myArray.length;
// for (var i = 0 ;i<arryLength;i++)
// {
//     console.log(myArray[i])
// }

// var persson = {
//     name : 'Huu Thanh',
//     age : 18,
//     addres : 'Viet nam',
// }
// for (var key in persson){
//     console.log(persson[key]);
// }

// var langue = [
//     'java',
//     'c++',
//     'html',
// ]
// for (var key in langue){
//     console.log(langue[key]);
// }


// var Personnal = {
//     name:'HuuThanh',
//     age:18,
// }
// for (var value of Object.keys(Personnal)){
//     console.log(Personnal[value])
// }



// var myName = [
//     'C++',
//     'jAVA',
//     'php',
//     'javascrip',
// ]
// for (var i = 0 ;i<myName.length ;i++){
//     console.log(myName[i]);
// }

// for (var c = 100 ;c>0;c-=5){
//     console.log(c);
// }


// 1. Xac dinh duoc diem dung
// 2.Logic handle => Tao ra diem dung


// function GiaiThua(num) {
//     if(num > 0){
//         return num * GiaiThua(num - 1);
//     }
//     return 1;

// }
// console.log(GiaiThua(3))


// // giai bai toan 4+3+2+1+...n-1;
// function Bai1(num1) {
//     var outputs = 0;
//     for (var i = num1; i > 0; i--){
//         outputs = outputs + i;
//     }
//     return outputs;
// }
// console.log(Bai1(4));

// // giai bai toan 4-3-2-1...-n-1

// function Bai2(num2) {
//     var hieu = 0;
//     for (var i = num2 ; i > 0 ;i--){
//         hieu = hieu - i;
//     }
//     return hieu;
// }
// console.log(Bai2(4));

// // giai bai toan 6*5...*1

// function Bai3(num3) {
//     var total = 1;
//     for (var g = num3; g > 0; g--){
//         total = total * g;
//     }
//     return total;
// }
// console.log(Bai3(6))

/**
 * Array methods:
 * forEach()
 * every()
 * find()
 * filter()
 * map()
 * reduce()
 */
// var dienVien = [
//     {
//         id:1,
//         name:'HuuThanh',
//         bird:18,
//     },
//     {
//         id:2,
//         name:'HuuThanh2',
//         bird:6,
//     },
//     {
//         id:3,
//         name:'HuuThanh3',
//         bird:8,
//     },
//     {
//         id:4,
//         name:'HuuThanh4',
//         bird:15,
//     },
//     {
//         id:5,
//         name:'HuuThanh5',
//         bird:12,
//     },
// ];

// function getAcctor(array){
//     var birdLong = dienVien.filter(function(array){
//         return array.bird > 10;
//     })
//     return birdLong;
// }
// console.log(getAcctor(dienVien));

// var Person = [
//     {
//         id:1,
//         name:'HuuThanh',
//         age:18,
//     },
//     {
//         id:2,
//         name:'HuuGiang',
//         age:24,
//     },
//     {
//         id:3,
//         name:'HuuTruong',
//         age:56,
//     },
//     {
//         id:4,
//         name:'HuuThanh4',
//         age:15,
//     },
//     {
//         id:5,
//         name:'HuuThanh5',
//         age:12,
//     },
// ];

// function getOldAge(oldagee) {
//     var nameOldAge = Person.filter(function(nameOldAge) {
//         return nameOldAge.age > 18;
//     })
//     return nameOldAge;
// }
// console.log(getOldAge(Person));


// var Human = [
//     {
//         id:1,
//         name:'HuuThanh',
//         age:18,
//     },
//     {
//         id:2,
//         name:'HuuGiang',
//         age:24,
//     },
//     {
//         id:3,
//         name:'HuuTruong',
//         age:56,
//     },
//     {
//         id:4,
//         name:'HuuQuan',
//         age:15,
//     },
//     {
//         id:5,
//         name:'HuuHaoNam',
//         age:12,
//     },
// ];



// var newHuman = Human.map(newHumanNew)
// console.log(newHuman);

// function newHumanNew(newHumanNames) {
//     return {
//         id:newHumanNames.id,
//         name:`Ho va ten : ${newHumanNames.name}`,
//         age:newHumanNames.age,
//         ageText:`age : ${newHumanNames.age} tuoi`,
//     }

// }
// var ageTotal = Human.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue.age;
// },0)
// console.log(ageTotal);



// var sports = [
//     {
//         name: 'Bơi lội',
//         gold: 11
//     },
//     {
//         name: 'Boxing',
//         gold: 3
//     },
//     {
//         name: 'Đạp xe',
//         gold: 4
//     },
//     {
//         name: 'Đấu kiếm',
//         gold: 5
//     },
// ]
// function getTotalGold(array) {
//     var totalGold = array.reduce(function(a,b){
//         return a + b.gold;
//     },0)
//     return totalGold;
// }
// // Expected results:
// console.log(getTotalGold(sports)) // Output: 23



// var num = [100, 200, 220, 200, 480]
// var totalcoin = num.reduce(function(total, number){
//     return total + number;
// })
// console.log(totalcoin);


// // lam phang mang vid1 
// var depthArry = [1,2,[3,4],5,6,[7,8,9]];
// var totalDep = depthArry.reduce(function(flatOutput, depitem){
//     return flatOutput.concat(depitem)
// },[]);
// console.log(totalDep);
// // lam phang mang vid2
// var nummArray = [[2,3,4],[1,2],[7,8,9],10,11,12,[13,14,15]]
// var totalNum = nummArray.reduce(function(a,b) {
//     return a.concat(b);
// },[])
// console.log(totalNum);

// // lay ra cac khoa hoc va dua vao mang moi
// var topic = [
//     {
//         topic : 'FrontEnd',
//         couses : [
//             {
//                 id : 1,
//                 title : 'HTML, CSS',
//             },
//             {
//                 id : 2,
//                 title : 'JavaScrip',
//             },

//         ]
//     },
//     {
//         topic : 'Back-End',
//         couses : [
//             {
//                 id: 1,
//                 title : 'PHP',
//             },
//             {
//                 id : 2,
//                 title : 'Node.Js',
//             },
//         ] 
//     },
// ]

 
// var listCourses = topic.reduce(function(a,b) {
//     return a.concat(b.couses);
// },[])
// console.log(listCourses);
// // a: mang chung,
// // b: mang con

// var htmls = listCourses.map(function(a) {
//     return `

//     `
// })


// var watchList = [
//     {
//       "Title": "Inception",
//       "Year": "2010",
//       "Rated": "PG-13",
//       "Released": "16 Jul 2010",
//       "Runtime": "148 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Christopher Nolan",
//       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       "Language": "English, Japanese, French",
//       "Country": "USA, UK",
//       "imdbRating": "8.8",
//       "imdbVotes": "1,446,708",
//       "imdbID": "tt1375666",
//       "Type": "movie",
//     },
//     {
//       "Title": "Interstellar",
//       "Year": "2014",
//       "Rated": "PG-13",
//       "Released": "07 Nov 2014",
//       "Runtime": "169 min",
//       "Genre": "Adventure, Drama, Sci-Fi",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan, Christopher Nolan",
//       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       "Language": "English",
//       "Country": "USA, UK",
//       "imdbRating": "8.6",
//       "imdbVotes": "910,366",
//       "imdbID": "tt0816692",
//       "Type": "movie",
//     },
//     {
//       "Title": "The Dark Knight",
//       "Year": "2008",
//       "Rated": "PG-13",
//       "Released": "18 Jul 2008",
//       "Runtime": "152 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//       "Language": "English, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "9.0",
//       "imdbVotes": "1,652,832",
//       "imdbID": "tt0468569",
//       "Type": "movie",
//     },
//     {
//       "Title": "Batman Begins",
//       "Year": "2005",
//       "Rated": "PG-13",
//       "Released": "15 Jun 2005",
//       "Runtime": "140 min",
//       "Genre": "Action, Adventure",
//       "Director": "Christopher Nolan",
//       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//       "Language": "English, Urdu, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "8.3",
//       "imdbVotes": "972,584",
//       "imdbID": "tt0372784",
//       "Type": "movie",
//     },
//     {
//       "Title": "Avatar",
//       "Year": "2009",
//       "Rated": "PG-13",
//       "Released": "18 Dec 2009",
//       "Runtime": "162 min",
//       "Genre": "Action, Adventure, Fantasy",
//       "Director": "James Cameron",
//       "Writer": "James Cameron",
//       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//       "Language": "English, Spanish",
//       "Country": "USA, UK",
//       "imdbRating": "7.9",
//       "imdbVotes": "876,575",
//       "imdbID": "tt0499549",
//       "Type": "movie",
//     }
// ];
  
// function calculateRating (array) {
//     var getDirector = array.filter(function(driector) {
//         return driector.Director ==='Christopher Nolan';
//     })

//     var getImdb = ge.reduce(function(score,imdb) {
//         return score + parseFloat(imdb.imdbRating);
//     },0)
//     return getImdb / getDirector.length;
// }


// function calculateRating(arr) {
//     var getDirector  = arr.filter(function(daodien) {
//         return daodien.Director === 'Christopher Nolan';
//     })
//     var getImdb = getDirector.reduce(function(a,b) {
//         return a+parseFloat(b.imdbRating);
//     },0)

//     return getImdb/getDirector.length;
// }
// // Expected results
// console.log(calculateRating(watchList)); // Output: 8.675
  



Array.prototype.reduce2 = function(callback, result) {
    let i = 1;
    if (this.length > 2){
        i = 1;
        result = this[0];
    }
    for (; i < this.length; i++)
    {
       result = callback(result, this[i], i, this);
    }
    return result;
// }

// var numberrr = [1,2,3,4,5];
// var totalNumber = numberrr.reduce2(function(a,b){
//     return a + b;
// });
// console.log(totalNumber);

// var title = 'Responsive web desigin';
// console.log(title.includes('Responsive web '));

// var coueses = ['PHP', 'Dart', 'Js',];
// console.log(coueses.includes('PHP', 1))

// function  myFunction(params) {
//     if(typeof params === 'function'){
//         params('Hoc lap trinh không khó yêu em mới khó');
//     }
//     else if (typeof params === 'number'){
//         params('Đây là số');
//     }
// }
// function myCallBackFun (x) {
//     console.log("x : ",x);
// }
// myFunction(myCallBackFun);


// map2
Array.prototype.map2 = function(callback) {
    for(var i = 0;i < this.length ;i++) {
        callback(this[i], i);
    }
}

var Languages = ['js','php','c++'];

Languages.map2(function(langue, index) {
    console.log(index, langue)
});


var languess = ['Js', 'PHP','c++'];
var htmls = languess.filter(function(){ 
    console.log(htmls);
})


// fliter 2 
var langueListLT = [
    'js',
    'c++',
    'html,css',
]
Array.prototype.filter2 = function(callback){
    var arr = [];
    for (var i = 0;i<this.length;i++){
        var total = callback(this[i], i);
        arr.push(total);
    }
    return arr;
}
var css= langueListLT.filter2(function(a,b){
    console.log(a,b);
})

var ngonNgu = [
    'js',
    'php'
]
console.log(ngonNgu);


// forEach2

Array.prototype.forEach2 = function(callback) {
    for (var i = 0; i < this.length; i++) {
        if( this.hasOwnProperty (i) ){
            callback(this[i], i);
        }
    }
}

var list = ['css,html', 'js', 'reactjs'];
list.push('c++', 'c','c#');
var nn = list.forEach2(function(list, index, listBasic) {
    console.log(list, index);
})

//filter 2
Array.prototype.filter2(function(callback){
    var outPut = [];

    for(var index in this){
        if(this.hasOwnProperty(index)) {
           var result =  callback(this[index], index ,this)
           if (result) {
            outPut.push(this[index])
           }
        }
    }

    return outPut;
})

var myLangues = [
    {
        name:'js',
        coin:250,
        isFinsh : true,
    },
    {
        name:'c++',
        coin:0,
        isFinsh : false,
    },
    {
        name:'php',
        coin:100,
        isFinsh : false,
    },
    {
        name:'c',
        coin:0,
        isFinsh : false,
    }
]

// var mySudtent = myLangues.filter2(function(a, b, c){
//     return a.coin > 100;
// })
// console.log(mySudtent);

Array.prototype.some2 = function(cb) {

    for (var i in this) {
        if (this.hasOwnProperty[i]){
            var relust = cb(this[i],i,this)
            if(cb(this[i],i,this)){
                return  true;
                break;
            };
        }
    }
    return false;
}

var reslut = myLangues.some2(function(a,b,c){
    return a.isFinsh;
});
console.log(reslut);


Array.prototype.every2 = function(cb) {
    var outPut = true;
    for (var index in this) {
        if(this.hasOwnProperty[index]){
            var result = cb(this[i],i,this)
            if(!reslut) {
                outPut = false;
                break;
            }
        }
    }
    return outPut
}




// HTML DOM 

// 1. Element: ID, class, tag name, css selector, HTML collection
// 2. Attrinute
// 3. Text
// var headingnote =  document.getElementById('heading');
// console.log(headingnote);
// var headingNotes = document.getElementsByClassName('headingclass');
// console.log(headingNotes);
// var headingNotess = document.getElementsByTagName('p')
// console.log(headingNotess);
// var headingNotesss = document.querySelectorAll('.box .heading2');
// console.log(headingNotesss);



// var getListStyle = document.querySelector('.box-1');
// console.log(getListStyle)
// console.log(getListStyle.querySelectorAll('li'))

// var getListStyle2 = document.querySelector('.box-2');
// console.log(getListStyle2)
// console.log(getListStyle2.querySelectorAll('li')); 

// var h1Element = document.querySelector('h1')
// console.log(h1Element)
// var h2Elemnt = document.querySelector('h2')
// console.log(h2Elemnt)
// var h3Elemnt = document.querySelector('h3')
// console.log(h3Elemnt)

// var hElement = document.getElementById('heading')
// console.log(hElement);
// var h2Element = document.getElementById('heading-2')
// console.log(h2Element);

// var headingElmnet = document.querySelector('.heading');
// headingElmnet.innerText = 'headingtext';
// console.log(headingElmnet.textContent);//=>> van giu nguyen nhu minh code o file html
// console.log(headingElmnet.innerText);//=>> giong nhu nhung gi minh nhin thay



// var GetAttributeH1 = document.querySelector('h1')
// GetAttributeH1.setAttribute('data-1', 'anhdepvcl');
// console.log(GetAttributeH1)
//  == >> element id querySelector
// == >> nodelist querySelectorAll
// == >> collection getNameClass, Tag Name
// --------------------

// Javascrip

var boxElemnet = document.querySelector('.box')

// boxElemnet.style.width= '100px';
// boxElemnet.style.height= '200px';
// boxElemnet.style.backgroundColor = 'red';

// Object.assign(boxElemnet.style, {
//     width :'200px',
//     height : '200px',
//     backgroundColor : '#333',
// });

// boxElemnet.classList.add('red', 'blue');
// boxElemnet.classList.remove('red');
// var h1s = document.querySelectorAll('h1');
// for (var i = 0; i<h1s.length; i++) {
//     h1s[i].onclick = function(e){
//         e.target.style.color = 
//     }
// }

// var boxElemntss = document.querySelector('.box')
// boxElemntss.onclick = function(e) {
//     e.target.style.backgroundColor = '#333';
// }

// var inputElment = document.querySelector('input[type="text"]')
// inputElment.onkeyup = function(e) {
//     console.log(e.which);

//     switch(e.which){
//         case 27:
//             console.log('Exit');
//             break;
//     }
// }

document.onkeyup = function(A) {
//     console.log(A.which)
//     switch(A.which){
//         case 27:
//             console.log('EXIT');
//             break;
//         case 13:
//             console.log('SEND CHAT');
//             break;
//     }
// }

// var aElemnts = document.querySelectorAll('a');
// for (var i = 0; i < aElemnts.length; i++){
//     aElemnts[i].onclick = function (e) {
//         console.log(e.target.href)

//         if (!e.target.href.startsWith('https://f8.edu.vn')){
//             e.preventDefault();
//         }
    }
}
// var ulElement = document.querySelector('ul');
// ulElement.onmousedown = function(e) {
//     e.preventDefault();
// }
// ulElement.onclick = function(e) {
//     console.log(e.target);
// }

// document.querySelector('div').onclick = function(e) {
//     console.log('DIV')
// }
// document.querySelector('button').onclick = function(e) {
//     e.stopPropagation();
//     console.log('CLICK ME!')
//}

// var btn = document.getElementById('btn');
// function viec1() {
//     console.log('viec1');
// }

// btn.addEventListener('click',viec1);

// setTimeout(function () {
//     btn.removeEventListener('click',viec1);
// },3000)
// // setInterval (() => {
//     boxElemnet.classList.toggle('red');
// }, 1000);
// boxElemnet.classList.add

// DOM event 
// 1. Atribute events
// 2. Assign event using the elment mode


// ClasList property
// add : thêm class vào element
// contains : kiểm tra xem một class có nằm trong một cái elemnet này hay 0
// remove : để xóa bỏ 1 class ở elment
// toggle : nếu đang có 1 class ở element thì sẽ xóa bỏ class ấy còn không thì sẽ thêm class ấy vào element
/**
 * forEach ,filter,find, some,every
 * deu co co cac tham so de callback la mang, gia tri tt trong mang, mang goc
 */
// var htmls =  Languages.map2(function(langueList){
//    return`<h2>${langueList}<h2>`
// })
// console.log(htmls.join(''));


// thuoc tinh newSet bo di nhung thu dc lap lai trong array
// var langues = ['javascrip', 'PHP', 'C++', 'Dart'];
// 1.To String: bien mang thanh chuoi
// 2.Join: them mot cai gi do vao array Vd .join(', ')=> Them dau phay o mot thu tu trong mang
// 3.Pop:Xoa di phan tu o cuoi mang va tra ve ki tu vua moi xoa
// 4.Push: Them phan tu o trong mang o vi tri cuoi' mang
// 5.Shift: Xoa di mot o phan o dau mang va tra ve phan tu vua moi xoa
// 6.Unshift:Them mot phan tu o vao vi tri o dau mang
// 7.Splicing: Cut phan tu tuy theo vi tri trong mang muon cat
// 8.Concat:Noi them mot mang nua bang dau +
//9.slicing: 
// function getFirstElement(mang) {
//     return mang[mang.length-3];
// }
//   // Ví dụ sử dụng
//   var animals = ['Monkey', 'Tiger', 'Elephant'];
//   var result = getFirstElement(animals);
//   console.log(result); // Expected: "Monkey"
//   console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

// console.log(result); // Expected: "Elephant"
// console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']
// console.log(langues.join(', '));//them mot cai gi day vao array
// 4. Tao ham dau tien
// var StringMy = '   Hoc lap trinh JS co ban  ';
// console.log(StringMy.length);
// console.log(StringMy.replace(/JS/g, 'javascrip'));
// console.log(StringMy.toLocaleUpperCase());
// console.log(StringMy.toLowerCase());
// console.log(StringMy.trim());
// var langue = 'JavaScrip, PHP, Ruby';
// console.log(langue.split(''))
// const myString2 = 'Son Dang';
// console.log(myString2.charAt(2));
// function getUpperCaseName (name){
//     return name.toLocaleUpperCase();
// }
// // Expected results:
// console.log(getUpperCaseName("Nguyen van a")) // "NGUYEN VAN A"
// console.log(getUpperCaseName("nGuyen vAn C")) // "NGUYEN VAN C"

// var kq = 0 && null && 'B' && 'C';
// console.log(kq)

// var myFunction = function() {
//     alert('Hi. Xin chao cac ban!');
// }
// myFunction();
// var myObject = {
//     name: 'Son Dang',
//     age: 18,
//     Hometown: 'Ha Noi',
//     myFunction: function (){

//     }
// }
// // console.log('myObject : ', myObject);
// // var myArray = [10];
// // for (var i = 0 ; i <=myArray;i++)
// // {
// //     console.log('Anh yeu em ', i)
// // } 

// var myArray = [
//     'Javascrip',
//     'PHP',
//     'ruby'
// ] ;
// console.log(myArray)
// hiện thỉ biến trên cửa sổ web
// alert(fullName);
// alert(age);
// console.log('Day la 1 dong log')
// confirm('Xac nhan ban du tuoi')
// prompt('Xac nhan ban du tuoi')
// setTimeout(function() {
//     alert('Thong bao')
// }, 1000)
// setInterval(function() {
//     alert('Thong bao')
// }, 1000)


/*
Gioi thieu mot so ham built - in
    1. Alert:hien thi o cua so thong bao
    2. Console:hien thi o man hinh console
    3. Confirm:Xac nhan va thong bao hien thi o cua so thong bao
    4. Prompt:Thong bao va co them mot  input o cua so thong bao
    5. Set timeout:De chay thong bao sau 1 thoi gian dc an dinh
    6. Set interval: Giong cai thu 5 nhung no chay lien tiep trong khoang  thoi gian dc setup
 */

// JSON 
// 1. la mot dinh dang du lieu (chuoi)
// 2. JavaScrip Object Notation
// 3. JSON: Number, Boolean, Null, Array, Obejct 
// Mã hóa / Giải mã
// Encode / decode
// Stringify : Từ javascirp types -> JSON
// Parse : Từ JSON -> javascrip types

// var json = '["Javascrip","PHP"]';
// var json = '{"name" : " Huu Thanh","age":18}';
// var a = '"abc"';
// console.log(JSON.parse(a));

// PROMISE (SYNC, ASYNC)

// setTimeOut, setInterval, fetch
// XMLHttpRequset, file reading
// requset animaton fontVariantNumeric: 


// pain
// callback hell
// Pyramid of doom
// setTimeout(function() {
//     console.log(1)// việc 1
//     setTimeout(function() {
//         console.log(2)// việc 2
//         setTimeout(function() {
//             console.log(3)// việc 3
//             setTimeout(function() {
//                 console.log(4)// việc 4
//                 setTimeout(function() {
//                     console.log(5)// việc 5
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)

// Lý thuyết, cách hoạt động : Promise
// 1.New Promise
// 2.Excutor

// Promise : là khái niệm sinh ra để giúp chúng ta giải quyết các vấn đề thao tác về bất đông độ

// 1.Pendding
// 2.Fullied
// 3.Reajact

// //
// function sleep (ms) {
//     return new Promise (function(resolve) {
//         setTimeout(resolve, ms);
//     });
// }
// sleep(1000)
//    .then(function () {
//     console.log(1);
//     return sleep(1000);
//    })
//    .then(function() {
//     console.log(2)
//     return sleep(1000);
//    })
//    .then(function() {
//     console.log(3)
//     return sleep(1000);
//    })
//    .then(function() {
//     console.log(4)
//     return sleep(1000);
//    })



// var promise = new Promise(
//     // Executor
//     function(resolve, reject) {
//         // logic 
//         // Thành công: resolve()
//         // Thất bại: reject()

//         // Fake call API
//         resolve()
//     }
// );

// promise
//    .then(function() {
//     return new Promise (function(resolve) {
//         setTimeout(function() {
//             resolve([1,2,3,4]);
//         },3000);
//     });
//    })
//    .then(function(data) {
//     console.log(data);
//     return 2;
//    })
//    .catch(function(error) {
//     console.log(error);
//    })
//    .finally(function() {
//     console.log('Done');
//    })

// 1. Promise.reoslve
// 2. Promise.reject
// 3. Promise.all: 
// var promise = Promise.reject('Error!');
// promise
//    .then(function(reslut){
//     console.log('result : ', reslut);
//    })
//    .catch(function(err){
//     console.log('err : ',err);
//    })


// var promise1 =new Promise((resolve, reject) => {
//    setTimeout(function() {
//     resolve([1]); 
//   },2000) 
// })
// var promise2 =new Promise((resolve, reject) => {
//     setTimeout(function() {
//      resolve([2,3]); 
//    },5000) 
//  })


// Promise.all([promise1,promise2])
//   .then(function(result) {
//     var reslut1 = reslut
//   });

var user = [
    {
        id: 1,
        name: 'Kien Dam',
    },
    {
        id:2,
        name:'Son Dang',
    },
    {
        id:3,
        name:'Hung Dam',
    },
]

var comment = [
    {
        id:1,
        user__id:1,
        content:'Anh Son chua ra video :((',
    },
    {
        id:2,
        user__id:2,
        content:'Vua ra xong em oi'
    },
    {
        id:3,
        user__id:1,
        content:'Cam on anh'
    }
]
// 1.Lay commnets
// 2.Tu comments lay ra user_id,
// tu user_id lay ra user tuong ung
// Fake API 
function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comment);
        },1000);
    })
}
function  getUserByIds(userIds) {
    return new Promise(function(resolve) {
        var reslut = user.filter(function(user) {
            return userIds.includes(user.id);
        })
        setTimeout(function() {
            resolve(reslut);
        },1000)
    },1000)
}
getComments()
   .then(function(comments) {
        var userIds = comments.map(function(comments) {
        return comments.user__id;
    });
    
        return getUserByIds(userIds)
        .then(function(users) {
        return {
            users : users,
            comments:comments
        }
        });
    })
    .then(function(data) {
        var comentBlock = document.getElementById('commetns-box')
        var html = '';
        data.comments.forEach(function(comment) {
            var user = data.users.find(function(user){
                return user.id === comment.user__id
            }) 
            html += `<li>${user.name}: ${comment.content}</li>`
        })
            comentBlock.innerHTML = html;
    })

// Back-end: Xây dựng logic xử lí 
// + Cơ sở dữ liệu

//API (URL) -> Application progarming interface 

// Cổng giao tiếp giữa các PM

// Back-end -> API(URL) -> Fetch -> JSON/XMLHttpRequset
// -> JSON.parse -> Js types
// Render ra giao diện với API

var postApi = 'https://jsonplaceholder.typicode.com/posts'

fetch(postApi)
   .then(function(response) {
    return response.json();
    // JSON.parse:JSON -> javascrip types
   })
   .then(function(post) {
    console.log(post)
   })
   .catch(function(err) {
    console.log('Waring');
   })


var caiDitConMeCuocDoi = '네 아버지는 씁쓸했지';
console.log(caiDitConMeCuocDoi);

