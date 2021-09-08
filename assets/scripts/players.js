const mainPlayes = [
  {
    id: 1,
    name: "Player One",
    url: "./assets/images/players/",
  },
  {
    id: 2,
    name: "Player Two",
    url: "./assets/images/players/",
  },
];

const enemys = [
  {
    id: 1,
    name: "Enemy One",
    // url is being read from html, so start the url from index.html
    url: "./assets/images/enemys/",
  },
  {
    id: 2,
    name: "Enemy Two",
    url: "./assets/images/enemys/",
  },
  {
    id: 3,
    name: "Enemy Three",
    url: "./assets/images/enemys/",
  },
];

const elements = [
  {
    id: 1,
    name: "sky",
    haveAnimation: false,
    url: "./assets/images/elements/sky.png",
  },
  {
    id: 1,
    name: "explosion",
    haveAnimation: true,
    animation: {
      frame1: './assets/images/elements/explosionAnimation/frame1.png',
      frame2: './assets/images/elements/explosionAnimation/frame2.png',
      frame3: './assets/images/elements/explosionAnimation/frame3.png',
      frame4: './assets/images/elements/explosionAnimation/frame4.png',
      frame5: './assets/images/elements/explosionAnimation/frame5.png',
      frame6: './assets/images/elements/explosionAnimation/frame6.png',
      frame7: './assets/images/elements/explosionAnimation/frame7.png',
      frame8: './assets/images/elements/explosionAnimation/frame8.png',
    },
    // frame: "./assets/images/elements/explosion.png",
  },
];


