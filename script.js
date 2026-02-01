// .cert-a{
const certificate = document.querySelectorAll(".cert-a");
const overlay = document.querySelector(".cert-overlay");
// certificate.addEventListener('mouseover',function(){
//     overlay.style.opacity=1;
// })
// certificate.addEventListener('mouseout',function(){
//     overlay.style.opacity=0;
// });

// model
const model = document.querySelector(".certificate-model");
const btn_close_model = document.querySelector(".btn-close-model");
btn_close_model.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("btn click");
  model.classList.add("hidden");
});
const cert = document.querySelector(".cert-a");
cert.addEventListener("click", function () {
  model.classList.remove("hidden");
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !model.classList.contains("hidden")) {
    !model.classList.add("hidden");
  }
});
certificate.forEach((element) => {
  element.addEventListener("mouseover", function () {
    const a = element.getAttribute("data-slide");
    // Ensure the value is wrapped in double quotes
    const folder = document.querySelector(`[data-slide="${a}"]`);
    const parent = element.closest(".certificate"); // Find the closest parent with class 'certificate'
    const overlay = parent.querySelector(".cert-overlay"); // Select the cert-overlay within the parent
    overlay.style.opacity = 1;
  });
});
certificate.forEach((element) => {
  element.addEventListener("mouseout", function () {
    const a = element.getAttribute("data-slide");
    // Ensure the value is wrapped in double quotes
    const folder = document.querySelector(`[data-slide="${a}"]`);
    const parent = element.closest(".certificate"); // Find the closest parent with class 'certificate'
    const overlay = parent.querySelector(".cert-overlay"); // Select the cert-overlay within the parent
    overlay.style.opacity = 0;
  });
});

// const a = certificate[0].getAttribute('data-slide');
// console.log(a);
// certificate[a].addEventListener('mouseover',function(){
//     overlay.style.opacity=1;
// })
// certificate[a].addEventListener('mouseout',function(){
//     overlay.style.opacity=0;
// });
const cert_img = document.querySelector(".cert-img-model");

certificate.forEach((element) => {
  element.addEventListener("click", function () {
    const imgPath = element.getAttribute("data-img");
    cert_img.src = imgPath;
    model.classList.remove("hidden");
  });
});

// menu
const r_nav_link = document.querySelectorAll(".nav-item");
const r_nav_btn = document.querySelector(".nav");
r_nav_link.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    const sectionEl = document.querySelector(href);
    sectionEl.scrollIntoView({ behavior: "smooth" });
    r_nav_btn.classList.toggle("open");
  });
});

// video
// const video1 = document.querySelector('.proj-img');
// const h=document.querySelector('.demo-img-wrapper');

// video1.addEventListener('mouseover', function(){
//     video1.play();

// })
// h.addEventListener('mouseout', function(){
//     video1.pause();

// })

// menu interactionobserver
const sectionHeroEl = document.querySelector(".section-hero");
const r_nav = document.querySelector(".nav");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      r_nav.classList.remove("hidden");
    }

    if (ent.isIntersecting === true) {
      r_nav.classList.add("hidden");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// skill interactionobserver
const skill1 = document.querySelector(".range-html");

const obs2 = new IntersectionObserver(
  function (entries2) {
    const ent2 = entries2[0];
    console.log(ent2);

    // if (ent2.isIntersecting === false) {
    //   skill1.classList.remove("animation");
    // }

    if (ent2.isIntersecting === true) {
      skill1.classList.add("animation");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0.3,
    rootMargin: "0px",
  }
);
obs2.observe(skill1);
const skill2 = document.querySelector(".range-css");

const obs3 = new IntersectionObserver(
  function (entries2) {
    const ent2 = entries2[0];
    console.log(ent2);

    // if (ent2.isIntersecting === false) {
    //   skill2.classList.remove("animation");
    // }

    if (ent2.isIntersecting === true) {
      skill2.classList.add("animation");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0.3,
    rootMargin: "0px",
  }
);
obs3.observe(skill2);
const skill3 = document.querySelector(".range-js");

const obs4 = new IntersectionObserver(
  function (entries2) {
    const ent2 = entries2[0];
    console.log(ent2);

    // if (ent2.isIntersecting === false) {
    //   skill3.classList.remove("animation");
    // }

    if (ent2.isIntersecting === true) {
      skill3.classList.add("animation");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0.3,
    rootMargin: "0px",
  }
);
obs4.observe(skill3);

const skill4 = document.querySelector(".range-c");
const obs5 = new IntersectionObserver(
  function (entries2) {
    const ent2 = entries2[0];
    console.log(ent2);

    // if (ent2.isIntersecting === false) {
    //   skill4.classList.remove("animation");
    // }

    if (ent2.isIntersecting === true) {
      skill4.classList.add("animation");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0.3,
    rootMargin: "0px",
  }
);
obs5.observe(skill4);

const skill5 = document.querySelector(".range-java");
const obs6 = new IntersectionObserver(
  function (entries2) {
    const ent2 = entries2[0];
    console.log(ent2);

    // if (ent2.isIntersecting === false) {
    //   skill5.classList.remove("animation");
    // }

    if (ent2.isIntersecting === true) {
      skill5.classList.add("animation");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0.3,
    rootMargin: "0px",
  }
);
obs6.observe(skill5);

const skill6 = document.querySelector(".range-sql");
const obs7 = new IntersectionObserver(
  function (entries2) {
    const ent2 = entries2[0];
    console.log(ent2);

    // if (ent2.isIntersecting === false) {
    //   skill6.classList.remove("animation");
    // }

    if (ent2.isIntersecting === true) {
      skill6.classList.add("animation");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0.3,
    rootMargin: "0px",
  }
);
obs7.observe(skill6);
const skill7 = document.querySelector(".range-python");
const obs8 = new IntersectionObserver(
  function (entries2) {
    const ent2 = entries2[0];
    console.log(ent2);

    // if (ent2.isIntersecting === false) {
    //   skill7.classList.remove("animation");
    // }

    if (ent2.isIntersecting === true) {
      skill7.classList.add("animation");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0.3,
    rootMargin: "0px",
  }
);
obs8.observe(skill7);
const skill8 = document.querySelector(".range-firebase");
const obs9 = new IntersectionObserver(
  function (entries2) {
    const ent2 = entries2[0];
    console.log(ent2);

    // if (ent2.isIntersecting === false) {
    //   skill8.classList.remove("animation");
    // }

    if (ent2.isIntersecting === true) {
      skill8.classList.add("animation");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0.3,
    rootMargin: "0px",
  }
);
obs9.observe(skill8);

const skill9 = document.querySelector(".range-git");
const obs10 = new IntersectionObserver(
  function (entries2) {
    const ent2 = entries2[0];
    console.log(ent2);

    // if (ent2.isIntersecting === false) {
    //   skill9.classList.remove("animation");
    // }

    if (ent2.isIntersecting === true) {
      skill9.classList.add("animation");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0.3,
    rootMargin: "0px",
  }
);
obs10.observe(skill9);

// education observer
const edu_wrapper = document.querySelector(".wrapper");
const sec_1 = document.querySelector(".sec-1");
const sec_2 = document.querySelector(".sec-2");
const sec_3 = document.querySelector(".sec-3");
const line = document.querySelector(".center-line");
const obs11 = new IntersectionObserver(
  function (entries2) {
    const ent2 = entries2[0];
    console.log(ent2);

    // if (ent2.isIntersecting === false) {
    //   line.style.animation = "none";
    //   sec_1.style.animation = "none";
    //   sec_2.style.animation = "none";
    //   sec_3.style.animation = "none";
    //   line.style.opacity = 0;
    // }

    if (ent2.isIntersecting === true) {
      sec_1.style.animation = "movedown 1s linear forwards";
      sec_1.style.animationDelay = "0s";

      sec_2.style.animation = "movedown 1s linear forwards";
      sec_2.style.animationDelay = "1s";
      sec_3.style.animation = "movedown 1s linear forwards";
      sec_3.style.animationDelay = "3s";
      line.style.animation = "moveline 3s linear forwards";
      line.style.opacity = 1;
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "0px",
  }
);
obs11.observe(edu_wrapper);

// experience

const edu_wrapper_2 = document.querySelector(".wrapper-2");
const sec_1_exp = document.querySelector(".sec-1-exp");
const line_2 = document.querySelector(".center-line-2");
const obs12 = new IntersectionObserver(
  function (entries2) {
    const ent2 = entries2[0];
    console.log(ent2);

    // if (ent2.isIntersecting === false) {
    //   line_2.style.animation = "none";
    //   sec_1_exp.style.animation = "none";
    //   line_2.style.opacity = 0;
    // }

    if (ent2.isIntersecting === true) {
      sec_1_exp.style.animation = "movedown 1s linear forwards";
      sec_1_exp.style.animationDelay = "0s";

      line_2.style.animation = "moveline 3s linear forwards";
      line_2.style.opacity = 1;
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "0px",
  }
);
obs12.observe(edu_wrapper_2);
// splash screen
const splash_sc = document.querySelector(".splash");
const splash_h1 = document.querySelector(".splash-h1");
const splash_logo = document.querySelectorAll(".splash-logo");

window.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    splash_logo.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 400);
    });
    setTimeout(() => {
      splash_logo.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 2000);
    setTimeout(() => {
      splash_sc.style.top = "-100vh";
    }, 2300);
  });
});
// sticky nav

const main_nav = document.querySelector(".main-nav");
const splash = document.querySelector(".splash-icon");
const sectionHeroEle = document.querySelector(".section-hero");
const header = document.querySelector(".header");
const obs13 = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      main_nav.style.display = "none";
      header.classList.add("sticky");
      splash.style.color = "rgb(234 180 30 )";
    }

    if (ent.isIntersecting === true) {
      main_nav.style.display = "block";
      header.classList.remove("sticky");
      splash.style.color = "#ccc";
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs13.observe(sectionHeroEle);
//project-animation
const project = document.querySelector(".card-project");
const obs14 = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    // if (ent.isIntersecting === false) {
    //   project.style.opacity = 0;
    //   project.classList.remove("card-animation");
    // }

    if (ent.isIntersecting === true) {
      project.style.opacity = 1;
      project.classList.add("card-animation");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "50px",
  }
);
obs14.observe(project);
// scrolling image
// const img1 = document.querySelector(".proj2-img");
// const img2 = document.querySelector(".p2-img-2");
// const img_wrp = document.querySelector(".demo-img-wrapper-2");
// img_wrp.addEventListener("mouseover", function () {
//   img1.style.display = "none";
//   img2.style.display = "block";
// });
// img_wrp.addEventListener("mouseout", function () {
//   img2.style.display = "none";
//   img1.style.display = "block";
// });
const project_2 = document.querySelector(".c2");
const obs15 = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    // if (ent.isIntersecting === false) {
    //   project_2.style.opacity = 0;
    //   project_2.classList.remove("card-animation");
    // }

    if (ent.isIntersecting === true) {
      project_2.style.opacity = 1;
      project_2.classList.add("card-animation");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "50px",
  }
);
obs15.observe(project_2);
const p5img1 = document.querySelector(".proj5-img");
const p5img2 = document.querySelector(".p5-img-2");
const p5img_wrp = document.querySelector(".demo-img-wrapper-5");
p5img_wrp.addEventListener("mouseover", function () {
  p5img1.style.display = "none";
  p5img2.style.display = "block";
});
p5img_wrp.addEventListener("mouseout", function () {
  p5img2.style.display = "none";
  p5img1.style.display = "block";
});


const project3 = document.querySelector(".c3");
const obs16 = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    // if (ent.isIntersecting === false) {
    //   project3.style.opacity = 0;
    //   project3.classList.remove("card-animation");
    // }

    if (ent.isIntersecting === true) {
      project3.style.opacity = 1;
      project3.classList.add("card-animation");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "50px",
  }
);
obs16.observe(project3);

const project4 = document.querySelector(".c4");
const obs17 = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    // if (ent.isIntersecting === false) {
    //   project4.style.opacity = 0;
    //   project4.classList.remove("card-animation");
    // }

    if (ent.isIntersecting === true) {
      project4.style.opacity = 1;
      project4.classList.add("card-animation");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "50px",
  }
);
obs17.observe(project4);

const project5 = document.querySelector(".c5");
const obs18 = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    // if (ent.isIntersecting === false) {
    //   project5.style.opacity = 0;
    //   project5.classList.remove("card-animation");
    // }

    if (ent.isIntersecting === true) {
      project5.style.opacity = 1;
      project5.classList.add("card-animation");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "50px",
  }
);
obs18.observe(project5);

// profile
// const p_hover= document.querySelector('.box');
// const p_img= document.querySelector('.profile');
// const p_cnt=document.querySelector('.content');
// console.log(p_hover);
// console.log(p_img);
// console.log(p_cnt);

// p_hover.addEventListener('mouseover',function(){
//   p_img.style.zIndex =- 1;
//   p_cnt.style.zIndex=3;
//   p_cnt.style.background="linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);"
// })