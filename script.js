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