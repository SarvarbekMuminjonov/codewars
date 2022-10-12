//1-misol
let str=`1 ta mushuk
2 ta mushuk
3 ta MushuK
`

//agar raqam kerak bo'lsa 
// console.log(str.match(/[0-9]/))
//agar barchasini topish kerak bo'lsa g va m flaglaridan foydalanish kerak g->global-> 
// qidirilayotgan belgilarni barchsini topib massiv qilib qaytaradi
console.log(str.match(/^\d/g))//bu yerda raqam bilan boshlangan satrlarni qidirish m flagisiz ->[ '1' ]
// m-multiline barcha satrlarni tekshirish uchun kerak
console.log(str.match(/^\d/gm))//m flagi bilan [ '1', '2', '3' ]
//so'zlarni topish
console.log(str.match(/mushuk/g))//i flagisiz [ 'mushuk', 'mushuk' ]
//i- qidirilayotgan belgini katta yoki kichik harfligini farqi yo'qligini bildiradi
console.log(str.match(/mushuk/gi))// i flagi bilan [ 'mushuk', 'mushuk', 'MushuK' ]