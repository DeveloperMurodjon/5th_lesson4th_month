// 1. For + break/continue ga oid masalalar (4 ta):
//1. 1 dan 100 gacha bo‘lgan sonlarni ekranga chiqaring, lekin 50 ga yetganda tsiklni to‘xtating (break).
for (let i = 1; i <= 100; i++) {
  console.log(i);
  if (i == 50) {
    break;
  }
}
// 1 dan 20 gacha bo‘lgan sonlarni ekranga chiqaring, lekin 3 ga bo‘linadigan sonlarni tashlab o‘ting (continue).
for (let i = 1; i <= 20; i++) {
  if (i % 3 == 0) {
    continue;
  }
  console.log(i);
}
// 1 dan 30 gacha bo‘lgan sonlarni chiqarib, faqat 5 ta son chiqargandan keyin tsiklni to‘xtating (break).
let counter = 0;
for (let i = 1; i <= 30; i++) {
  console.log(i);
  counter++;
  if (counter == 5) {
    break;
  }
}
// 1 dan 50 gacha bo‘lgan sonlar orasida 7 ga bo‘linadigan birinchi 3 ta sonni ekranga chiqaring, so‘ngra tsiklni to‘xtating.
let counter1 = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 7 == 0) {
    counter1++;
    console.log(i);
    if (counter1 == 3) {
      break;
    }
  }
}
// 2. Switch-case ga oid masalalar (4 ta):
// Foydalanuvchi kiritgan haftaning raqamiga (1-7) mos ravishda haftaning kunini (dushanba-yakshanba) chiqarib bering.
let weekDay = +prompt("Haftaning raqamini kiriting (1-7):");
switch (weekDay) {
  case 1:
    console.log("Dushanba");
    break;
  case 2:
    console.log("Seshanba");
    break;
  case 3:
    console.log("Chorshanba");
    break;
  case 4:
    console.log("Payshanba");
    break;
  case 5:
    console.log("Juma");
    break;
  case 6:
    console.log("Shanba");
    break;
  case 7:
    console.log("Yakshanba");
    break;
  default:
    console.log(
      "Noto'g'ri raqam kiritildi. Iltimos, 1 dan 7 gacha bo‘lgan raqam kiriting."
    );
    break;
}

// Foydalanuvchi kiritgan oy raqamiga (1-12) mos ravishda faslni (qish, bahor, yoz, kuz) aniqlang.
let monthNumber = +prompt(`Oy tartib raqamini kiriting:`);
switch (monthNumber) {
  case 1:
  case 2:
  case 12:
    console.log(`Qish`);
    break;
  case 3:
  case 4:
  case 5:
    console.log(`Bahor`);
    break;
  case 6:
  case 7:
  case 8:
    console.log(`Yoz`);
    break;
  case 9:
  case 10:
  case 11:
    console.log(`Kuz`);
    break;
  default:
    console.log(
      `Noto'g'ri raqam kiritildi iltimos 1dan12gacha raqam kiriting!!!`
    );
    break;
}

// Foydalanuvchi kiritgan songa mos ravishda “juft son” yoki “toq son” ekanligini aniqlang.
let digit = +prompt("Musbat son kiriting:");
if (digit % 2 == 0) {
  console.log("Juft son");
} else if (digit % 2 == 1) {
  console.log("Toq son");
} else {
  console.log("Noto'g'ri qiymat. Iltimos, son kiriting!");
}

// Foydalanuvchi kiritgan baho (1-5) bo‘yicha izoh chiqarib bering. Masalan: 5 – “A’lo”, 4 – “Yaxshi”, va hokazo.
let price = +prompt("Uy vazifani baholang");
switch (price) {
  case 1:
    console.log("Rasvo");
    break;
  case 2:
    console.log("Juda yomon");
    break;
  case 3:
    console.log("Yomon");
    break;
  case 4:
    console.log("Yaxshi");
    break;
  case 5:
    console.log("A'lo");
    break;
  default:
    console.log(
      "Noto'g'ri raqam kiritildi. Iltimos, 1 dan 5 gacha bo‘lgan raqam kiriting."
    );
    break;
}
// 3. While va do...while ga oid masalalar (15 ta):
// 1 dan 10 gacha bo‘lgan sonlarni ekranga chiqaring.
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// 10 dan 1 gacha bo‘lgan sonlarni ekranga chiqarib bering.
let num1 = 10;
while (num1 >= 1) {
  console.log(num1);
  num1--;
}

// Foydalanuvchi 0 kiritmaguncha tsiklni davom ettiring va kiritilgan sonlarning yig‘indisini hisoblang.
let num2;
let sum = 0;
do {
  num2 = +prompt("Sonni kiriting, to'xtatish uchun 0 kiriting:");
  sum += num2;
} while (num2 !== 0);

console.log(sum);

// Foydalanuvchi musbat son kiritmaguncha tsiklni davom ettiring va oxirgi kiritilgan sonni chiqarib bering.
let num3;
do {
  num3 = +prompt(`Manfiy sonni kiriting, to'xtatish uchun musbat kiriting:`);
} while (num3 <= 0);
{
}
console.log(num3);

// Foydalanuvchidan raqam kiritishni so‘rang va raqamning raqamlar yig‘indisini hisoblang.
let num4 = +prompt(`Sonni kiriting;`);
let sum2 = 0;
while (num4 !== 0) {
  sum2 += num4 % 10;
  num4 = Math.floor(num4 / 10);
}

console.log(sum2);

// Foydalanuvchi manfiy son kiritguncha tsiklni davom ettiring va kiritilgan juft sonlar sonini hisoblang.
let num5;
let sum3 = 0;
do {
  num5 = +prompt(`Sonni kiriting:`);
  if (num5 % 2 == 0 && num5 < 0) {
    sum3++;
  }
} while (num5 < 0);
{
}
console.log(num5);

// 1 dan 20 gacha bo‘lgan sonlarni ekranga chiqaring, lekin faqat toq sonlarni.
let num6 = 1;
while (num6 <= 20) {
  if (num6 % 2 == 1) {
    console.log(num6);
  }
  num6++;
}
// 1 dan 50 gacha bo‘lgan sonlardan 5 ga karrali sonlarni chiqaring.
let num7 = 1;
while (num7 <= 50) {
  if (num7 % 5 == 0) {
    console.log(num7);
  }
  num7++;
}
// Foydalanuvchidan butun son kiritishni so‘rang va bu sonni teskari ko‘rinishda chiqarib bering.
let num8 = +prompt(`Sonni kiriting:`);
let sum4 = 0;
while (num8 > 0) {
  sum4 = sum4 * 10 + (num8 % 10);
  num8 = Math.trunc(num8 / 10);
}
console.log(sum4);

// 100 dan 1 gacha bo‘lgan sonlarni, faqat 10 ga bo‘linadiganlarini chiqaring.
let num9 = 100;
while (num9 <= 1) {
  if (num9 % 10 == 0) {
    console.log(num9);
  }
  num9--;
}

// 1 dan 100 gacha bo‘lgan barcha sonlarning kvadratini chiqarib bering.
let num10 = 1;
while (num10 <= 100) {
  console.log(num10 ** 2);
  num10++;
}

// Foydalanuvchidan raqam kiritishni so‘rang. Agar kiritilgan son 5 ga bo‘linmasa, yana son kiritishni so‘rang.
let num11;
do {
  num11 = +prompt(`Sonni kiriting`);
} while (num11 % 5 !== 0);
{
}
// Foydalanuvchi 10 dan katta son kiritmaguncha davom eting. Oxirida kiritilgan sonni chiqaring.
let num12;
do {
  num12 = +prompt(`Sonni kiriting`);
} while (num12 < 10);

// Foydalanuvchi “stop” so‘zini yozmaguncha davom eting. Oxirida nechta son kiritganini hisoblang.
let num13;
let counter2 = 0;
do {
  num13 = prompt(
    "Sonni kiriting, Agar to'xtatmoqchi bo'lsangiz 'STOP' so'zini kiriting:"
  );
  if (num13 !== "STOP") {
    counter2++;
  }
} while (num13 !== "STOP");

console.log(`Nechta son kiritildi: ${counter2}`);

// Foydalanuvchi kiritgan sonlarning o‘rtacha qiymatini hisoblang (nol kiritilganda tsikl to‘xtaydi).
let num14;
let sum5 = 0;
let counter3 = 0;
do {
  num14 = +prompt("Sonni kiriting (nol kiritilganda to'xtatish):");
  if (num14 !== 0) {
    sum5 += num14;
    counter3++;
  }
} while (num14 !== 0);
if (counter3 > 0) {
  console.log(`${sum5 / counter3} sonlarning o'rtacha qiymati`);
} else {
  console.log("Hech qanday son kiritilmadi.");
}

// 4. Ternary operator ga oid masalalar (5 ta):
// Foydalanuvchi kiritgan son musbat yoki manfiy ekanligini aniqlang.
let num15 = +prompt("Sonni kiriting:");
console.log(
  num15 > 0 ? "Bu musbat son." : num15 < 0 ? "Bu manfiy son." : "Bu nol."
);

// Foydalanuvchi kiritgan son juft yoki toq ekanligini aniqlang.
let num16 = +prompt(`Sonni kiriting`);
console.log(num16 % 2 == 0 ? `Bu juft son` : `Bu toq son`);
// Foydalanuvchi kiritgan son 100 dan katta yoki kichik ekanligini aniqlang.
let num17 = +prompt(`Sonni kiriting`);
console.log(
  num17 > 100
    ? `Yuzdan katta son`
    : num17 < 100
    ? `Yuzdan kichik son`
    : `Bu yuzga teng`
);
// Foydalanuvchidan ikkita son so‘rang va ularning kattasini aniqlang.
let num18 = +prompt(`Son1ni kiriting:`);
let num19 = +prompt(`Son2ni kiriting:`);
console.log(
  num18 > num19
    ? `Birinchi son katta`
    : num18 < num19
    ? `ikkinchi son katta`
    : `ikkala son teng`
);
// Foydalanuvchi kiritgan son 3 ga va 5 ga bo‘linadigan yoki bo‘linmaydiganligini tekshiring.
let num20 = +prompt(`Sonni kiriting;`);
console.log(
  num20 % 3 == 0 && num20 % 5 == 0
    ? `Son 3va 5ga bo'linadi`
    : `Son 3ga va 5ga qoldiqli bo'linadi`
);
// 5. Math methods ga oid masalalar (4 ta):
// 0 dan 100 gacha tasodifiy son hosil qiling (Math.random) va uni ekranga chiqarib bering.
let num21 = Math.floor(Math.random() * 101);
console.log(num21);

// Foydalanuvchidan haqiqiy son kiritishni so‘rang va uning faqat butun qismini chiqarib bering (Math.trunc).
let num22 = +prompt("Haqiqiy sonni kiriting:");
let num23 = Math.trunc(num22);
console.log(`Butun qismi: ${num23}`);

// Foydalanuvchidan haqiqiy son kiritishni so‘rang va uni yuqoriga qarab yaxlitlang (Math.ceil).
let num24 = +prompt("Haqiqiy sonni kiriting:");
let num25 = Math.ceil(num24);
console.log(`Yuqoriga qarab yaxlitlangan son: ${num25}`);

// Foydalanuvchidan son kiritishni so‘rang va uning modulini toping (Math.abs).
let num26 = +prompt("Sonni kiriting:");
let num27 = Math.abs(num25);
console.log(`Kiritilgan sonning moduli: ${num27}`);

// 6. For ga oid masalalar (15 ta):
// 1 dan 50 gacha bo‘lgan sonlarni ekranga chiqaring.
for (let i = 1; i <= 50; i++) {
  console.log(i);
}

// 10 dan 1 gacha bo‘lgan sonlarni ekranga chiqaring.
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 1 dan 100 gacha bo‘lgan faqat toq sonlarni chiqarib bering.
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 1 dan 50 gacha bo‘lgan faqat juft sonlarni chiqarib bering.
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 1 dan 100 gacha bo‘lgan barcha sonlarning yig‘indisini hisoblang.
let sum6 = 0;
for (let i = 1; i <= 100; i++) {
  sum6 += i;
}
console.log(`Yig'indi: ${sum6}`);

// Foydalanuvchidan son kiritishni so‘rang va 1 dan shu songacha bo‘lgan barcha sonlarning ko‘paytmasini hisoblang.
let num28 = +prompt("Sonni kiriting:");
let sum7 = 1;
for (let i = 1; i <= num28; i++) {
  sum7 *= i;
}
console.log(`Ko'paytma: ${sum7}`);

// 1 dan 20 gacha bo‘lgan sonlarning kvadratini chiqarib bering.
for (let i = 1; i <= 20; i++) {
  console.log(i ** 2);
}

// Foydalanuvchi kiritgan sonning faktorialini hisoblang.
let num29 = +prompt("Sonni kiriting:");
let sum8 = 1;
for (let i = 1; i <= num29; i++) {
  sum8 *= i;
}
console.log(`Faktorial: ${sum8}`);

// 1 dan 100 gacha bo‘lgan barcha 5 ga karrali sonlarni chiqarib bering.
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

// Foydalanuvchidan musbat son kiritishni so‘rang va 1 dan shu songacha bo‘lgan sonlarning kubini chiqarib bering.
let num30 = +prompt("Musbat sonni kiriting:");
for (let i = 1; i <= num30; i++) {
  console.log(i ** 3);
}

// 1 dan 100 gacha bo‘lgan barcha juft sonlarning yig‘indisini hisoblang.
let sum9 = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sum9 += i;
  }
}
console.log(`Juft sonlarning yig‘indisi: ${sum9}`);

// 1 dan 50 gacha bo‘lgan sonlar orasida 3 ga bo‘linadigan birinchi 10 ta sonni ekranga chiqaring.
let count = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log(i);
    count++;
  }
  if (count === 10) break;
}

// Foydalanuvchidan musbat butun son kiritishni so‘rang va shu songacha bo‘lgan sonlar yig‘indisini toping.
let num31 = +prompt("Musbat butun sonni kiriting:");
let sum10 = 0;
for (let i = 1; i <= num31; i++) {
  sum10 += i;
}
console.log(`Yig'indi: ${sum10}`);

// 1 dan 10 gacha bo‘lgan barcha sonlarning kvadratlar yig‘indisini toping.
let sum32 = 0;
for (let i = 1; i <= 10; i++) {
  sum11 += i ** 2;
}
console.log(`Kvadratlar yig‘indisi: ${sum11}`);

// Foydalanuvchi kiritgan musbat butun sonning barcha bo‘luvchilarini chiqarib bering.
let num32 = +prompt("Musbat butun sonni kiriting:");
console.log(`Barcha bo'luvchilar:`);
for (let i = 1; i <= num32; i++) {
  if (num32 % i === 0) {
    console.log(i);
  }
}

// 7. Barcha mavzularni qamrab oluvchi masalalar (10 ta):
// Foydalanuvchidan son kiritishni so‘rang va bu son 3 ga bo‘linadiganmi yoki yo‘qligini ternary operator yordamida aniqlang. Keyin 1 dan shu songacha bo‘lgan barcha sonlarni chiqarib bering.
let num33 = +prompt("Son kiriting:");
let result =
  num33 % 3 == 0 ? "Bu son 3 ga bo'linadi" : "Bu son 3 ga bo'linmaydi";
console.log(result);
for (let i = 1; i <= num33; i++) {
  console.log(i);
}

// Foydalanuvchi kiritgan oy raqamiga mos faslni (switch-case) aniqlang va 1 dan shu oy raqamigacha bo‘lgan sonlarni (for) ekranga chiqaring.
let num34 = +prompt("Oy raqamini kiriting (1-12):");
let season;
switch (num34) {
  case 12:
  case 1:
  case 2:
    season = "Qish";
    break;
  case 3:
  case 4:
  case 5:
    season = "Bahor";
    break;
  case 6:
  case 7:
  case 8:
    season = "Yoz";
    break;
  case 9:
  case 10:
  case 11:
    season = "Kuz";
    break;
  default:
    season = "Xato oy raqami";
}
console.log("Fasl:", season);

for (let i = 1; i <= num34; i++) {
  console.log(i);
}

// Tasodifiy son hosil qiling va bu son juft yoki toq ekanligini aniqlang. Agar son juft bo‘lsa, 1 dan 20 gacha bo‘lgan juft sonlarni chiqarib bering (for).
let num35 = Math.floor(Math.random() * 100);
let result35 = num35 % 2 === 0 ? "Juft" : "Toq";
console.log(result35);

if (num35 % 2 === 0) {
  for (let i = 2; i <= 20; i += 2) {
    console.log(i);
  }
}

// Foydalanuvchidan musbat son kiritishni so‘rang va uning faktorialini hisoblang (while). Keyin sonning modul qiymatini toping (Math.abs).
let num36 = +prompt("Musbat son kiriting:");
let sum12 = 1;
let num37 = num36;
while (num37 > 1) {
  sum12 *= num37;
  num37--;
}
console.log("Faktorial:", sum12);
let abs36 = Math.abs(num36);
console.log("Modul qiymati:", abs36);

// Foydalanuvchidan hafta kuni raqamini kiritishni so‘rang (switch-case) va unga mos kun nomini chiqaring. Agar kun raqami juft bo‘lsa, qo‘shimcha ravishda 1 dan 10 gacha bo‘lgan sonlarni chiqarib bering (for).
let num38 = +prompt("Hafta kuni raqamini kiriting (1-7):");
let day38;
switch (num38) {
  case 1:
    day38 = "Dushanba";
    break;
  case 2:
    day38 = "Seshanba";
    break;
  case 3:
    day38 = "Chorshanba";
    break;
  case 4:
    day38 = "Payshanba";
    break;
  case 5:
    day38 = "Juma";
    break;
  case 6:
    day38 = "Shanba";
    break;
  case 7:
    day38 = "Yakshanba";
    break;
  default:
    day38 = "Xato kun raqami";
}
console.log("Kun:", day38);
if (num38 % 2 === 0) {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// Tasodifiy son hosil qilib, uni butun qismiga keltiring (Math.trunc) va bu songacha bo‘lgan barcha sonlarning yig‘indisini hisoblang (while).
let num39 = Math.random() * 100;
let tr39 = Math.trunc(num39);
let sum39 = 0;
let count39 = 1;
while (count39 <= tr39) {
  sum39 += count39;
  count39++;
}
console.log("Yig'indi:", sum39);

// Foydalanuvchi manfiy son kiritmaguncha sonlarni kiritishni davom ettiring (do...while). Yakunida barcha kiritilgan sonlarning o‘rtacha qiymatini hisoblang.
let sum13 = 0;
let count13 = 0;
let num40;
do {
  num40 = +prompt("Son kiriting (manfiy son kiritilsa to'xtaydi):");
  if (num40 >= 0) {
    sum12 += num40;
    count13++;
  }
} while (num40 >= 0);
let average12 = sum12 / count13;
console.log("O'rtacha qiymat:", average12);
