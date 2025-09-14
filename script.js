// Typing Effect
const words = ["Freelancer", "Web Developer", "Coder"]; 
let i = 0; 
let j = 0; 
let currentWord = "";
let isDeleting = false;
const typedText = document.getElementById("typed-text");
const speed = 150; 

function type() {
  if (i >= words.length) i = 0; 
  currentWord = words[i];

  if (!isDeleting) {
    typedText.textContent = currentWord.slice(0, j + 1);
    j++;
    if (j === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1000); 
      return;
    }
  } else {
    typedText.textContent = currentWord.slice(0, j - 1);
    j--;
    if (j === 0) {
      isDeleting = false;
      i++;
    }
  }
  setTimeout(type, isDeleting ? speed / 2 : speed); 
}
type(); 

// Counter
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const speed = 100;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target + "+";
    }
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateCount();
        observer.unobserve(counter);
      }
    });
  }, { threshold: 1 });

  observer.observe(counter);
});

// Navbar active link on scroll + hide/show
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const navbar = document.getElementById("navbar");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 50) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });

  // Hide/show navbar
  if (window.scrollY > lastScrollY) {
    // Scrolling down
    navbar.style.top = "-70px"; // hide
  } else {
    // Scrolling up
    navbar.style.top = "0"; // show
  }
  lastScrollY = window.scrollY;
});

// 🎹 Keypress Shortcuts
document.addEventListener("keydown", function(event) {
  if (event.key === "n") {
    // Toggle navbar show/hide with "n"
    if (navbar.style.top === "0px" || navbar.style.top === "") {
      navbar.style.top = "-70px";
    } else {
      navbar.style.top = "0px";
    }
  }

  if (event.key === "h") {
    // Jump to Home
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  }

  if (event.key === "c") {
    // Jump to Contact
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }
});
