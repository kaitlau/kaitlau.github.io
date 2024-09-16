let x = 0,
  y = 0,
  dirX = 1,
  dirY = 1;
let speed = 2;
let pallete = ["#ff8800", "#e124ff", "#6a19ff", "#ff2188"];
let dvd = document.getElementById("dvd");
dvd.style.backgroundColor = pallete[0];
let prevColorChoiceIndex = 0;
let black = document.getElementById("black");
let dvdWidth = dvd.clientWidth;
let dvdHeight = dvd.clientHeight;

function getNewRandomColor() {
  let currentPallete = [...pallete]
  currentPallete.splice(prevColorChoiceIndex,1)
  let colorChoiceIndex = Math.floor(Math.random() * currentPallete.length);
  prevColorChoiceIndex = colorChoiceIndex<prevColorChoiceIndex?colorChoiceIndex:colorChoiceIndex+1;
  let colorChoice = currentPallete[colorChoiceIndex];
  return colorChoice;
}
function animate() {
  let screenHeight = document.body.clientHeight;
  let screenWidth = document.body.clientWidth;

  if (y + dvdHeight >= screenHeight || y < 0) {
    dirY *= -1;
    dvd.style.backgroundColor = getNewRandomColor();
  }
  if (x + dvdWidth >= screenWidth || x < 0) {
    dirX *= -1;

    dvd.style.backgroundColor = getNewRandomColor();
  }
  x += dirX * speed;
  y += dirY * speed;
  dvd.style.left = x + "px";
  dvd.style.top = y + "px";
  window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);


function getTimeBasedVideo() {
    let currentTime = new Date().getHours();
    let videoId = '';
    
    if (currentTime >= 0 && currentTime < 1) {
        videoId = 'dQw4w9WgXcQ';
    } else if (currentTime >= 1 && currentTime < 2) {
        videoId = 'flVkp4S8CMc';
    } else if (currentTime >= 2 && currentTime < 3) {
        videoId = '9njAvx-2y4c';
    } else if (currentTime >= 3 && currentTime < 4) {
        videoId = 'C-Naa1HXeDQ';
    } else if (currentTime >= 4 && currentTime < 5) {
        videoId = '_sOKkON_UnQ';
    } else if (currentTime >= 5 && currentTime < 6) {
        videoId = 'kHLcPAs70p0';
    } else if (currentTime >= 6 && currentTime < 7) {
        videoId = 'AQFTC6YKh-U';
    } else if (currentTime >= 7 && currentTime < 8) {
        videoId = 'toyaz8OgKlA';
    } else if (currentTime >= 8 && currentTime < 9) {
        videoId = 'jWIBEyT70-E';
    } else if (currentTime >= 9 && currentTime < 10) {
        videoId = 'wuoJTTOQWuE';
    } else if (currentTime >= 10 && currentTime < 11) {
        videoId = 'hA-WGRHdK_M';
    } else if (currentTime >= 11 && currentTime < 12) {
        videoId = 'RqNFa70GTN4';
    } else if (currentTime >= 12 && currentTime < 13) {
        videoId = '-avq9UWTZdg';
    } else if (currentTime >= 13 && currentTime < 14) {
        videoId = 'dAABrbS8QeA';
    } else if (currentTime >= 14 && currentTime < 15) {
        videoId = 'u2pFB1dCSo4';
    } else if (currentTime >= 15 && currentTime < 16) {
        videoId = 'hjdMYyjnmks';
    } else if (currentTime >= 16 && currentTime < 17) {
        videoId = 'pSYS7cPc3nE';
    } else if (currentTime >= 17 && currentTime < 18) {
        videoId = 'JV5C2-NXhe4';
    } else if (currentTime >= 18 && currentTime < 19) {
        videoId = 'CXc6fPvhbrU';
    } else if (currentTime >= 19 && currentTime < 20) {
        videoId = 'xYNjxk6iIL0';
    } else if (currentTime >= 20 && currentTime < 21) {
        videoId = 'jo1ikmeLUVE';
    } else if (currentTime >= 21 && currentTime < 22) {
        videoId = '5A9OIIapSko';
    } else if (currentTime >= 22 && currentTime < 23) {
        videoId = 'gPR9bIl3VZw';
    } else if (currentTime >= 23 && currentTime < 24) {
        videoId = 'IBaSizQyC5g';
    }
    
    let iframe = document.createElement('iframe');
    iframe.style.width = 50 + "vw";
    iframe.style.height = 400 + "px"
    iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId + '?autoplay=1');
    iframe.setAttribute('title', 'YouTube video player');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    iframe.setAttribute('allowfullscreen', '');
    document.getElementById('video-container').appendChild(iframe);
}

window.onload = getTimeBasedVideo;


