const allMusic = [
    {
        name : "1. Drunk Text",
        artist : "Henry Moodie",
        img : "music_view01",
        audio: "drunk text - Henry Moodie"
    },{
        name : "2. iceland",
        artist : "PL",
        img : "music_view02",
        audio: "iceland-PL"
    },{
        name : "3. 심야영화",
        artist : "하현상",
        img : "music_view03",
        audio: "late_Night_Movie-Ha_HyunSang"
    },{
        name : "4. love someone",
        artist : "Lukas Graham",
        img : "music_view04",
        audio: "love someone-Lukas Graham"
    },{
        name : "5. Nerdy Love",
        artist : "pH-1",
        img : "music_view05",
        audio: "Nerdy_Love-pH-1"
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
        artist : "Shawn_Mendes",
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

let musicIndex = 6;     //현재 음악 인덱스

//음악 재생
const loadMusic = (num) => {
    musicName.innerText = allMusic[num-1].name;             //뮤직 이름
    musicArtist.innerText = allMusic[num-1].artist;         //뮤직 아티스트
    musicView.src = `img/${allMusic[num-1].img}.png`;       //뮤직 이미지
    musicView.alt = allMusic[num-1].name;                   //뮤직 이미지 alt
    musicAudio.src =`audio/${allMusic[num-1].audio}.mp3`;   //뮤직 파일
}

//플레이 버튼 클릭
musicPlay.addEventListener("click", () => {
    
});

window.addEventListener("load", () => {
    loadMusic(musicIndex);

    musicAudio.play();
});