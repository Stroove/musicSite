// ibg
function ibg() {
  let ibg = document.querySelectorAll('.ibg');
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage =
        'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg();
// header
let burger = document.querySelector('.header__burger');
let header__menu = document.querySelector('.header__menu');
let header = document.querySelector('.header');
let firstTitle = document.querySelector('.first-main__title');
let secTitle = document.querySelector('.first-main__secTitle');
let musicOne = document.querySelector('.first-music__items');
burger.addEventListener('click', function () {
  burger.classList.toggle('active');
  header__menu.classList.toggle('active');
  document.body.classList.toggle('lock');
  header.classList.toggle('fixed');
  firstTitle.classList.toggle('active');
  secTitle.classList.toggle('active');
  musicOne.classList.toggle('active');
});
// Music 1
const MainControl = document.querySelector('.first-music__control'),
  MainProgressContainer = document.querySelector('.first-music__progress'),
  MainProgress = document.querySelector('.first-music__playing'),
  MainAudio = document.querySelector('.first-main__audio'),
  MainTime = document.querySelector('.first-music__time'),
  MainImg = document.querySelector('.first-music__button');

// Play and Pause
function mainPlay() {
  MainControl.classList.add('play');
  MainAudio.play();
  MainImg.src = 'img/PauseButton.png';
}
function mainPause() {
  MainControl.classList.remove('play');
  MainAudio.pause();
  MainImg.src = 'img/PlayButton.png';
}
MainControl.addEventListener('click', () => {
  const isPlaying = MainControl.classList.contains('play');
  if (isPlaying) {
    mainPause();
  } else {
    mainPlay();
  }
});

// progress bar
function mainUpdateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const ProgressPercent = (currentTime / duration) * 100;
  MainProgress.style.width = `${ProgressPercent}%`;
}
MainAudio.addEventListener('timeupdate', mainUpdateProgress);

// set progress
function mainSetProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = MainAudio.duration;
  MainAudio.currentTime = (clickX / width) * duration;
}
MainProgressContainer.addEventListener('click', mainSetProgress);

// time completed and remapping
function mainAudioTime(time) {
  //Рассчитываем время в секундах и минутах
  time = Math.floor(time);
  var minutes = Math.floor(time / 60);
  var seconds = Math.floor(time - minutes * 60);
  var minutesVal = minutes;
  var secondsVal = seconds;
  if (minutes < 10) {
    minutesVal = '0' + minutes;
  }
  if (seconds < 10) {
    secondsVal = '0' + seconds;
  }
  return minutesVal + ':' + secondsVal;
}
function AudioProgress() {
  let currTime = mainAudioTime(MainAudio.currentTime);
  let duration = mainAudioTime(MainAudio.duration);
  MainTime.innerHTML = `${currTime}/${duration}`;
}
MainAudio.addEventListener('timeupdate', AudioProgress);
// Start of  mainTime function is in "progress bar" part
// Music 1 END

// Music 2
const trAudio = document.querySelector('.tracks__audio'),
  trButton = document.querySelector('.tracks__button'),
  trProgressCont = document.querySelector('.tracks__progress'),
  trProgress = document.querySelector('.tracks__done'),
  trTime = document.querySelector('.tracks__time'),
  trImg = document.querySelector('.tracks__Img'),
  trListItem = document.querySelectorAll('.tracks__listItem'),
  trList = document.querySelector('.tracks__list'),
  tr_1 = document.querySelector('.tr_1'),
  tr_2 = document.querySelector('.tr_2'),
  tr_3 = document.querySelector('.tr_3'),
  tr_4 = document.querySelector('.tr_4'),
  tr_5 = document.querySelector('.tr_5'),
  tr_6 = document.querySelector('.tr_6');

// Play and pause
function trPlay() {
  trButton.classList.add('play');
  trAudio.play();
  trImg.src = 'img/PauseButton.png';
}
function trPause() {
  trButton.classList.remove('play');
  trAudio.pause();
  trImg.src = 'img/PlayButton.png';
}
trButton.addEventListener('click', () => {
  const isPlaying = trButton.classList.contains('play');
  if (isPlaying) {
    trPause();
  } else {
    trPlay();
  }
});
//

// Progress bar percent
function trUpdateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const ProgressPercent = (currentTime / duration) * 100;
  trProgress.style.width = `${ProgressPercent}%`;
}
trAudio.addEventListener('timeupdate', trUpdateProgress);
//

// Set Progress

function trSetProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = trAudio.duration;
  trAudio.currentTime = (clickX / width) * duration;
}
trProgressCont.addEventListener('click', trSetProgress);

// time
function trAudioTime(time) {
  //Рассчитываем время в секундах и минутах
  time = Math.floor(time);
  var minutes = Math.floor(time / 60);
  var seconds = Math.floor(time - minutes * 60);
  var minutesVal = minutes;
  var secondsVal = seconds;
  if (minutes < 10) {
    minutesVal = '0' + minutes;
  }
  if (seconds < 10) {
    secondsVal = '0' + seconds;
  }
  return minutesVal + ':' + secondsVal;
}
function trAudioProgress() {
  let currTime = trAudioTime(trAudio.currentTime);
  var duration = trAudioTime(trAudio.duration);
  trTime.innerHTML = `${currTime}-${duration}`;
}
trAudio.addEventListener('timeupdate', trAudioProgress);

// Change Music

function trPlayOne(e) {
  const listItem = e;
  listItem.classList.add('choose');
  trAudio.src = `audio/${listItem.lastElementChild.textContent}.mp3`;
  trButton.classList.remove('play');

  const isPlaying = trButton.classList.contains('play');
  if (isPlaying) {
    trPause();
  } else {
    trPlay();
  }
}

function trRemoveClass() {
  const tr1 = tr_1.classList.contains('choose');
  const tr2 = tr_2.classList.contains('choose');
  const tr3 = tr_3.classList.contains('choose');
  const tr4 = tr_4.classList.contains('choose');
  const tr5 = tr_5.classList.contains('choose');
  const tr6 = tr_6.classList.contains('choose');
  if (tr1 || tr2 || tr3 || tr4 || tr5 || tr6) {
    tr_1.classList.remove('choose');
    tr_2.classList.remove('choose');
    tr_3.classList.remove('choose');
    tr_4.classList.remove('choose');
    tr_5.classList.remove('choose');
    tr_6.classList.remove('choose');
  }
}
function changeMusic(e) {
  const trTarget = e.target.closest('.tracks__listItem');
  if (trTarget == null) {
    return;
  }
  const isChoose = trTarget.classList.contains('choose');
  if (!e.target.closest('.tracks__listItem')) {
    return;
  }
  if (e.target.closest('.tracks__listItem') && !isChoose) {
    trRemoveClass();
    trPlayOne(e.target.closest('.tracks__listItem'));
  }
}
trList.addEventListener('click', changeMusic);

// Slider
if (screen.width > 900) {
  $('.slider').slick({
    slidesToShow: 3,
  });
} else if (screen.width < 900 && screen.width > 642) {
  $('.slider').slick({
    slidesToShow: 2,
  });
} else {
  $('.slider').slick({
    slidesToShow: 1,
  });
}

// scroll to element

let about = document.querySelector('.about');
let news = document.querySelector('.news');
let music = document.querySelector('.music');
let media = document.querySelector('.media');
let tours = document.querySelector('.tours');
let contacts = document.querySelector('.contacts');

let scrollAbout = document.querySelector('.blAbout__title');
let scrollNews = document.querySelector('.quote');
let scrollMusic = document.querySelector('.tracks__title');
let scrollMedia = document.querySelector('.collage');
let scrollTours = document.querySelector('.slider');
let scrollContacts = document.querySelector('.footer__items');

about.addEventListener('click', () => {
  scrollAbout.scrollIntoView({ behavior: 'smooth' });
});
news.addEventListener('click', () => {
  scrollNews.scrollIntoView({ behavior: 'smooth' });
});
music.addEventListener('click', () => {
  scrollMusic.scrollIntoView({ behavior: 'smooth' });
});
media.addEventListener('click', () => {
  scrollMedia.scrollIntoView({ behavior: 'smooth' });
});
tours.addEventListener('click', () => {
  scrollTours.scrollIntoView({ behavior: 'smooth' });
});
contacts.addEventListener('click', () => {
  scrollContacts.scrollIntoView({ behavior: 'smooth' });
});
