/// <reference types="../@types/@types/jquery"/>

//! aside menu

const body =$("body")
const aside = $("aside")
const close =$(".close")
const open =$(".open")


open.on("click", function () {
  body.animate({ marginLeft: "240px" }, 500);
  aside.animate({ width: "240px" }, 500);
});

close.on("click", function () {
  body.animate({ marginLeft: "0" }, 500);
  aside.animate({ width: "0" }, 500);
});

//! duration


$(".duration h2").on("click", function () {
  $(this).next().slideToggle(500);
  $(".inner").not($(this).next()).slideUp(500);
});

//! details

const days = $('.days')
const hours = $('.hours')
const mins = $('.mins')
const secs = $('.secs')

const targetDate = new Date("Oct 17 2024");

const updateCountDown = (targetDate) => {
  const currentDate = new Date();
  const timeLeft = targetDate - currentDate;

secs.text((Math.floor(timeLeft/1000)%60) + 's')
mins.text((Math.floor(timeLeft/1000/60)%60) + 'm')
hours.text((Math.floor(timeLeft/1000/60/60)%24) + 'h')
days.text((Math.floor(timeLeft/1000/60/60/24)) + 'D')

};

const countDown = (targetDate) => {
  setInterval(() => updateCountDown(targetDate), 1000);
};

countDown(targetDate)

//! contact

const letter_count = $('.letter-count')
const input = $(".contact textarea")


const maxLength = 100;
letter_count.text(maxLength - input.val().length);

input.on("input", function () {
  const count = maxLength - input.val().length;

  if (input.val().length <= maxLength) {
    letter_count.text(count);
  } else {
    letter_count.text("your available character finished");
  }
});
