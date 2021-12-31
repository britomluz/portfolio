//NAV ANIMATION
let menu = document.getElementById('navbar')

    window.addEventListener('scroll', function () {
        // navbar.style.background = 'black'
        menu.classList.toggle('fondoBlack', window.scrollY > 600)
    })
// SCROLL SECTIONS ACTIVE LINK 

const navMenu = document.getElementById("nav-menu");      
// get all sections that have an id defined
const sections = document.querySelectorAll("section[id]");

// add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter()
{
  // get current scroll position
  let scrollY = window.pageYOffset;
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100,
    sectionId = current.getAttribute("id");
    /* - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector */
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
    {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add("active")
    }
    else
    {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove("active")
    }
  })
}

//HERO ANIMATION

let section = document.querySelector('.sectionHeader')
        let text =document.querySelector('.text')
        let innerText =document.querySelector('.innerText')
        window.addEventListener('scroll', function(){
            let value = window.scrollY

            section.style.clipPath = "circle("+value+"px at center center)";
            text.style.left = 100-value / 5 + '%'
            innerText.style.left = 100-value / 5 + '%'
        })

//MUSIC PLAYER
const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

// Song titles
const songs = ['crazy', 'knockin', 'supergirl', 'undercover', 'wonderwall'];

// Keep track of song
let songIndex = 2;
let ruta1 = './'
let ruta2 = '../'
// Initially load song details into DOM
loadSong(songs[songIndex]);
//loadSong(ruta2, songs[songIndex]);

// Update song details
function loadSong(song) {
   title.innerText = song;
   audio.src = `./music/${song}.mp3`;
   cover.src = `./assets/${song}.jpg`;  


  // audio.src = `${ruta}music/${song}.mp3`;
  // cover.src = `${ruta}assets/${song}.jpg`;  

//   if(window.location.href == 'es/index.html'){
//        audio.src = `../music/${song}.mp3`;
//        cover.src = `../assets/${song}.jpg`; 
// } else {
//       audio.src = `./music/${song}.mp3`;
//       cover.src = `./assets/${song}.jpg`; 
// }
   
}

// Play song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.bi').classList.remove('bi-play-circle-fill');
  playBtn.querySelector('i.bi').classList.add('bi-pause-circle-fill');

  audio.play();
 
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.bi').classList.add('bi-play-circle-fill');
  playBtn.querySelector('i.bi').classList.remove('bi-pause-circle-fill');

  audio.pause();
 
}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}


// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);


// TYPING ANIMATION ENGLISH

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Fullstack Java Developer", "Graphic Designer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});


// TYPING ANIMATION SPANISH

const typedTextSpan2 = document.querySelector(".typed-text-es");
const cursorSpan2 = document.querySelector(".cursor-es");

const textArray2 = ["Desarrolladora Fullstack Java", "Diseñadora Gráfica"];
const typingDelay2 = 200;
const erasingDelay2 = 100;
const newTextDelay2 = 2000; // Delay between current and next text
let textArray2Index = 0;
let charIndex2 = 0;

function type2() {
  if (charIndex2 < textArray2[textArray2Index].length) {
    if(!cursorSpan2.classList.contains("typing")) cursorSpan2.classList.add("typing");
    typedTextSpan2.textContent += textArray2[textArray2Index].charAt(charIndex2);
    charIndex2++;
    setTimeout(type2, typingDelay2);
  } 
  else {
    cursorSpan2.classList.remove("typing");
  	setTimeout(erase2, newTextDelay2);
  }
}

function erase2() {
	if (charIndex2 > 0) {
    if(!cursorSpan2.classList.contains("typing")) cursorSpan2.classList.add("typing");
    typedTextSpan2.textContent = textArray2[textArray2Index].substring(0, charIndex2-1);
    charIndex2--;
    setTimeout(erase2, erasingDelay2);
  } 
  else {
    cursorSpan2.classList.remove("typing");
    textArray2Index++;
    if(textArray2Index>=textArray2.length) textArray2Index=0;
    setTimeout(type2, typingDelay2 + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray2.length) setTimeout(type2, newTextDelay2 + 250);
});



/*=============== THEME/DISPLAY CUSTOMIZATION ===============*/
const theme = document.querySelector("#theme-button");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPalette = document.querySelectorAll(".choose-color span");
var root = document.querySelector(":root");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

// open modal
const openThemeModal = () => {
  themeModal.style.display = 'grid';
}
// close modal
const closeThemeModal = (e) => {
  if(e.target.classList.contains('customize-theme'))
  {
    themeModal.style.display = 'none';
  }
}
theme.addEventListener("click", openThemeModal);
themeModal.addEventListener("click", closeThemeModal);


/*===== FONTS =====*/

//remove active class from spans or font size selectors
const removeSizeSelector = () => {
  fontSizes.forEach(size => {
    size.classList.remove("active");
  })
}
fontSizes.forEach(size => {
  size.addEventListener('click', () => {

    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');
    if(size.classList.contains('font-size-1'))
    {
      fontSize = '12px';
    }
    else if(size.classList.contains('font-size-2'))
    {
      fontSize = '14px';
    }
    else if(size.classList.contains('font-size-3'))
    {
      fontSize = '16px';
    }
    else if(size.classList.contains('font-size-4'))
    {
      fontSize = '18px';
    }
    // change font size of the root html element 
    document.querySelector('html').style.fontSize = fontSize;

  })
})

/*===== PRIMARY COLORS =====*/

// remove active class from colors
const changeActiveColorClass = () => {
  colorPalette.forEach(colorPicker => {
    colorPicker.classList.remove('active');
  })
}
colorPalette.forEach(color => {
  color.addEventListener('click', () => {
    let primaryHue;
    changeActiveColorClass();

    if(color.classList.contains('color-1'))
    {
      primaryHue = 44;
    }
    else if(color.classList.contains('color-2'))
    {
      primaryHue = 152;
    }
    else if(color.classList.contains('color-3'))
    {
      primaryHue = 336;
    }
    else if(color.classList.contains('color-4'))
    {
      primaryHue = 268;
    }
    else if(color.classList.contains('color-5'))
    {
      primaryHue = 10;
    }
    color.classList.add("active");
    root.style.setProperty('--primary-color-hue', primaryHue);
  })
// })

// /*===== THEME BACKGROUNDS =====*/
let lightColorLightness;
let darkColorLightness;

// change background color
const changeBG = () => {
  root.style.setProperty('--light-color-lightness', lightColorLightness);  
  root.style.setProperty('--dark-color-lightness', darkColorLightness);
}
Bg1.addEventListener('click', () => {  
  darkColorLightness = '11%';  
  lightColorLightness = '95%';
  // add active class
  Bg1.classList.add('active');
  // remove active class from the others  
  Bg3.classList.remove('active');
  // remove customized changes from local storage
 // window.location.reload();
 changeBG();
})

Bg3.addEventListener('click', () => {
   darkColorLightness = '95%';  
   lightColorLightness = '11%';

  // add active class
  Bg3.classList.add('active');
  // remove active class from the others  
  Bg1.classList.remove('active');
  changeBG();
  
 })

})

