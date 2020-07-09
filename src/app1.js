import "./app1.css";
import $ from "jquery";

const $button1 = $("#add1");
const $button2 = $("#min1");
const $button3 = $("#mul2");
const $button4 = $("#div2");
const $number = $("#number");
$number.text(localStorage.getItem("text") || 100);

$button1.on("click", () => {
  const n = parseInt($number.text());
  $number.text(n + 1);
  localStorage.setItem("text", $number.text());
});

$button2.on("click", () => {
  const n = parseInt($number.text());
  $number.text(n - 1);
  localStorage.setItem("text", $number.text());
});

$button3.on("click", () => {
  const n = parseInt($number.text());
  $number.text(n * 2);
  localStorage.setItem("text", $number.text());
});

$button4.on("click", () => {
  const n = parseInt($number.text());
  $number.text(n / 2);
  localStorage.setItem("text", $number.text());
});
