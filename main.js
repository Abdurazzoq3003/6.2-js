let haftakunlari = +prompt(
  "hafta kunlari raqamda ifodalansin Masalan:1-Dushanba"
);

// if (haftakunlari == 1) {
//   console.log("Dushanba");
// } else if (haftakunlari == 2) {
//   console.log("Seshanba");
// } else if (haftakunlari == 3) {
//   console.log("Chorshanba");
// } else if (haftakunlari == 4) {
//   console.log("Payshanba");
// } else if (haftakunlari == 5) {
//   console.log("Juma");
// } else if (haftakunlari == 6) {
//   console.log("Shanba");
// } else if (haftakunlari == 7) {
//   console.log("Yakshanba");
// } else {
//   console.log("Iltimos 1-7 raqam kiriting");
// }

switch (haftakunlari) {
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
  default:
    console.log("Iltimos 1-7 raqam kiriting");
}
