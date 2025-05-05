const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');


const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');

const videoList = [video1, video2, video3];

videoList.forEach(function(video){
  video.addEventListener('mouseover', () => {
    video.play()
  });
  video.addEventListener('mouseout', () => {
    video.pause();
    hoverSign.classList.remove("active")
  });
});


menu.addEventListener("click", () => {
  sideBar.classList.remove("close-sidebar")
  sideBar.classList.add("open-sidebar");
});

close.addEventListener("click", () =>{
  sideBar.classList.remove("open-sidebar")
  sideBar.classList.add("close-sidebar");
});



// Hide loader when page loads
window.onload = function() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
};


