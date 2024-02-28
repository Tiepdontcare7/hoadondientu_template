import img1 from "../assets/random-img-1.png";
import img2 from "../assets/random-img-2.png";
import img3 from "../assets/random-img-3.png";
import img4 from "../assets/random-img-4.png";

const captchas = [
  {
    src: img1,
    text: "text1",
  },
  {
    src: img2,
    text: "text2",
  },
  {
    src: img3,
    text: "text3",
  },
  {
    src: img4,
    text: "text4",
  },
];

export function generateCaptcha() {
  return captchas[Math.floor(Math.random() * captchas.length)];
}
