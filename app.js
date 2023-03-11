AOS.init();

const burgerOpen = document.querySelector(".burger_open");
const nav = document.querySelector(".navigation");

let isOpen = true;

burgerOpen.addEventListener("click", () => {
  if (isOpen) {
    nav.style.transform = "translateX(0)";
  } else {
    nav.style.transform = "translateX(-120%)";
  }

  isOpen = !isOpen;
});

const obj = [
  {
    title: "Mobil ilova",
    img: "4",
  },
  {
    title: "Veb dizayn",
    img: "5",
  },
  {
    title: "SMM",
    img: "3",
  },
  {
    title: "Mobil ilova",
    img: "1",
  },
  {
    title: "Veb sayt",
    img: "6",
  },
  {
    title: "Veb dizayn",
    img: "2",
  },
  {
    title: "Mobil ilova",
    img: "2",
  },
  {
    title: "Veb sayt",
    img: "6",
  },
  {
    title: "SMM",
    img: "1",
  },
  {
    title: "Mobil ilova",
    img: "1",
  },
  {
    title: "Veb sayt",
    img: "2",
  },
  {
    title: "SMM",
    img: "6",
  },
];

const cards = document.querySelector(".cards__container");
obj.forEach((e) => {
  const card = document.createElement("div");
  card.setAttribute("data-aos", "zoom-in-down");
  card.innerHTML = `
    <div class="cards__card">
        <a href="" class="cards__card--link">${e.title}</a>
        <img src="./images/completed/${e.img}.png" alt="image cards" class="cards__img">
    </div>
    `;
  cards.appendChild(card);
});

const filterBtn = document.querySelectorAll(".filter__btn");
const btn = document.querySelector(".completed__filter");

btn.addEventListener("click", (e) => {
  cards.innerHTML = "";
  filterBtn.forEach((item) => {
    if (item.children[0].classList.contains("active__btn")) {
      item.children[0].classList.remove("active__btn");
    }
  });
  e.target.classList.add("active__btn");

  let res = String(e.target.innerText).trim();
  if (res == "Barchasi") {
    obj.forEach((e) => {
      const card = document.createElement("div");
      card.setAttribute("data-aos", "zoom-in-down");
      card.innerHTML = `
            <div class="cards__card">
                <a href="" class="cards__card--link">${e.title}</a>
                <img src="./images/completed/${e.img}.png" alt="image cards" class="cards__img">
            </div>
            `;
      cards.appendChild(card);
    });
  } else {
    let newArr = obj.filter((d) => {
      return d.title == `${String(e.target.innerText).trim()}`;
    });
    newArr.forEach((e) => {
      const card = document.createElement("div");
      card.setAttribute("data-aos", "zoom-in-down");
      card.innerHTML = `
            <div class="cards__card">
            <a href="" class="cards__card--link">${e.title}</a>
            <img src="./images/completed/${e.img}.png" alt="image cards" class="cards__img">
        </div>
        `;
      cards.appendChild(card);
    });
  }
});
