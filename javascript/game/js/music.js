const allMusic = [
    {
        name : "1. Drunk Text",
        artist : "Henry Moodie",
        img : "music_view01",
        audio: "drunk text - Henry Moodie"
    },{
        name : "2. you",
        artist : "LANY",
        img : "music_view02",
        audio: "you-LANY"
    },{
        name : "3. Still Sunset",
        artist : "NELL",
        img : "music_view03",
        audio: "NELL_-_Still_Sunset"
    },{
        name : "4. love someone",
        artist : "Lukas Graham",
        img : "music_view04",
        audio: "love someone-Lukas Graham"
    },{
        name : "5. Photograph",
        artist : "Ed Sheeran",
        img : "music_view05",
        audio: "OST_Ed_Sheeran_-_Photograph"
    },{
        name : "6. Never Not",
        artist : "Lauv",
        img : "music_view06",
        audio: "Never_Not-Lauv"
    },{
        name : "7. summer",
        artist : "The Volunteers",
        img : "music_view07",
        audio: "summer-The Volunteers"
    },{
        name : "8. Wonder",
        artist : "Shawn Mendes",
        img : "music_view08",
        audio: "Wonder-Shawn_Mendes"
    },{
        name : "9. Yesterday",
        artist : "박재범",
        img : "music_view09",
        audio: "Yesterday - 박재범"
    },{
        name : "10. 우리가 다투게 돼도 이것만 기억해 줄래",
        artist : "Grizzly",
        img : "music_view10",
        audio: "우리가 다투게 돼도 이것만 기억해 줄래 - Grizzly"
    }
];

const musicWrap = document.querySelector(".music__wrap");
const musicName = musicWrap.querySelector(".music__control .title h3");
const musicArtist = musicWrap.querySelector(".music__control .title p");
const musicView = musicWrap.querySelector(".music__view .image img");
const musicAudio = musicWrap.querySelector("#main-audio");
const musicPlay = musicWrap.querySelector("#control-play");
const musicPrevBtn = musicWrap.querySelector("#control-prev");
const musicNextBtn = musicWrap.querySelector("#control-next");
const musicProgress = musicWrap.querySelector(".progress");
const musicProgressBar = musicWrap.querySelector(".progress .bar");
const musicProgressBarCurrent = musicWrap.querySelector(".progress .timer .current");
const musicProgressBarDuration = musicWrap.querySelector(".progress .timer .duration");


let musicIndex = 2     //현재 음악 인덱스


//음악 재생
const loadMusic = (num) => {
    musicName.innerText = allMusic[num-1].name;             //뮤직 이름
    musicArtist.innerText = allMusic[num-1].artist;         //뮤직 아티스트
    musicView.src = `img/${allMusic[num-1].img}.png`;       //뮤직 이미지
    musicView.alt = allMusic[num-1].name;                   //뮤직 이미지 alt
    musicAudio.src =`audio/${allMusic[num-1].audio}.mp3`;   //뮤직 파일
}

//재생
const playMusic = () => {
    musicWrap.classList.add("paused");
    musicPlay.setAttribute("title", "정지");
    musicPlay.setAttribute("class", "stop");
    musicAudio.play();
}

//정지
const pauseMusic = () => {
    musicWrap.classList.remove("paused");
    musicPlay.setAttribute("title", "재생");
    musicPlay.setAttribute("class", "play");
    musicAudio.pause();
}

//이전 곡 듣기
const prevMusic = () => {
    // musicIndex--;
    // if(musicIndex == 0)musicIndex = allMusic.length;

    musicIndex == 1 ? musicIndex = allMusic.length : musicIndex--;  //삼항연산자로 사용 가능

    loadMusic(musicIndex);
    playMusic();
}

//다음 곡 듣기
const nextMusic = () => {
    // musicIndex++;
    // if(musicIndex == allMusic.length+1)musicIndex = 1;
    
    musicIndex == allMusic.length ? musicIndex = 1 : musicIndex++;  //삼항연산자로 사용 가능

    loadMusic(musicIndex);
    playMusic();
}

//뮤직 진행바
musicAudio.addEventListener("timeupdate", e => {
    console.log(e);
    const currentTime = e.target.currentTime;                       //현재 재생되는 시간
    const duration = e.target.duration;                             //오디오의 총 길이
    let progressWidth = (currentTime/duration) * 100;                        //전체길이에서 현재 진행되는 시간을 백분위 단위로 나누는    

    musicProgressBar.style.width = `${progressWidth}%`;

    //전체 시간
    musicAudio.addEventListener("loadeddata", () => {
        let audioDuration = musicAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if(totalSec < 10) totalSec = `0${totalSec}`;
        musicProgressBarDuration.innerText = `${totalMin}:${totalSec}`;
    });

    //진행 시간
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if(currentSec < 10) currentSec = `0${currentSec}`;
    musicProgressBarCurrent.innerText = `${currentMin}:${currentSec}`;
});

//진행 버튼 클릭
musicProgress.addEventListener("click", (e) =>{
    let progressWidth = musicProgress.clientWidth;  //진행바 전체 길이
    let clickOffsetX = e.offsetX;                   //진행바를 기준으로 측정되는 X좌표 값
    let songDuration = musicAudio.duration;         //오디오 전체 길이

    //백분위로 나눈 숫자에 다시 전체 길이를 곱해서 현재 재생값으로 바꿈
    musicAudio.currentTime = (clickOffsetX/progressWidth) * songDuration;
});

//플레이 버튼 클릭
musicPlay.addEventListener("click", () => {
    const isMusicPaused = musicWrap.classList.contains("paused");   //음악 재생중
    isMusicPaused ? pauseMusic() : playMusic();
});

//이전곡 버튼 클릭
musicPrevBtn.addEventListener("click", () => {
    prevMusic();
});


//다음곡 버튼 클릭
musicNextBtn.addEventListener("click", () => {
    nextMusic();
});




window.addEventListener("load", () => {
    loadMusic(musicIndex);
    console.log(musicIndex);
});