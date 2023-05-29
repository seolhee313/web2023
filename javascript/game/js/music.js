const allMusic = [
    {
        name: "Drunk Text",
        artist: "Henry Moodie",
        img: "music_view01",
        audio: "music_audio01",
    },
    {
        name: "you",
        artist: "LANY",
        img: "music_view02",
        audio: "music_audio02",
    },
    {
        name: "Still Sunset",
        artist: "NELL",
        img: "music_view03",
        audio: "music_audio03",
    },
    {
        name: "love someone",
        artist: "Lukas Graham",
        img: "music_view04",
        audio: "music_audio04",
    },
    {
        name: "Photograph",
        artist: "Ed Sheeran",
        img: "music_view05",
        audio: "music_audio05",
    },
    {
        name: "Never Not",
        artist: "Lauv",
        img: "music_view06",
        audio: "music_audio06",
    },
    {
        name: "summer",
        artist: "The Volunteers",
        img: "music_view07",
        audio: "music_audio07",
    },
    {
        name: "Wonder",
        artist: "Shawn Mendes",
        img: "music_view08",
        audio: "music_audio08",
    },
    {
        name: "Yesterday",
        artist: "박재범",
        img: "music_view09",
        audio: "music_audio09",
    },
    {
        name: "우리가 다투게 돼도 이것만 기억해 줄래",
        artist: "Grizzly",
        img: "music_view10",
        audio: "music_audio10",
    },
];

const musicWrap = document.querySelector(".music__wrap");
const musicClose = musicWrap.querySelector(".music__close");
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
const musicRepeat = musicWrap.querySelector("#control-repeat");
const musicListBtn = musicWrap.querySelector("#control-list");
const musicList = musicWrap.querySelector(".music__list");
const musicListUl = musicWrap.querySelector(".music__list ul");
const musicListClose = musicWrap.querySelector(".music__list h3 .close");
const soundOnOff = musicWrap.querySelector("#control-mute");
const soundUp = musicWrap.querySelector("#control-volumeUp");
const soundDown = musicWrap.querySelector("#control-volumeDown");

let musicIndex = 2; //현재 음악 인덱스

//음악 재생
const loadMusic = (num) => {
    musicName.innerText = allMusic[num - 1].name; //뮤직 이름
    musicArtist.innerText = allMusic[num - 1].artist; //뮤직 아티스트
    musicView.src = `img/${allMusic[num - 1].img}.png`; //뮤직 이미지
    musicView.alt = allMusic[num - 1].name; //뮤직 이미지 alt
    musicAudio.src = `audio/${allMusic[num - 1].audio}.mp3`; //뮤직 파일
};

//재생
const playMusic = () => {
    musicWrap.classList.add("paused");
    musicPlay.setAttribute("title", "정지");
    musicPlay.setAttribute("class", "stop");
    musicAudio.play();
};

//정지
const pauseMusic = () => {
    musicWrap.classList.remove("paused");
    musicPlay.setAttribute("title", "재생");
    musicPlay.setAttribute("class", "play");
    musicAudio.pause();
};

//이전 곡 듣기
const prevMusic = () => {
    // musicIndex--;
    // if(musicIndex == 0)musicIndex = allMusic.length;

    musicIndex == 1 ? (musicIndex = allMusic.length) : musicIndex--; //삼항연산자로 사용 가능

    loadMusic(musicIndex);
    playMusic();
    playListMusic();
};

//다음 곡 듣기
const nextMusic = () => {
    // musicIndex++;
    // if(musicIndex == allMusic.length+1)musicIndex = 1;

    musicIndex == allMusic.length ? (musicIndex = 1) : musicIndex++; //삼항연산자로 사용 가능

    loadMusic(musicIndex);
    playMusic();
    playListMusic();
};

//뮤직 진행바
musicAudio.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime; //현재 재생되는 시간
    const duration = e.target.duration; //오디오의 총 길이
    let progressWidth = (currentTime / duration) * 100; //전체길이에서 현재 진행되는 시간을 백분위 단위로 나누는

    musicProgressBar.style.width = `${progressWidth}%`;

    //전체 시간
    musicAudio.addEventListener("loadeddata", () => {
        let audioDuration = musicAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if (totalSec < 10) totalSec = `0${totalSec}`;
        musicProgressBarDuration.innerText = `${totalMin}:${totalSec}`;
    });

    //진행 시간
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) currentSec = `0${currentSec}`;
    musicProgressBarCurrent.innerText = `${currentMin}:${currentSec}`;
});

//진행 버튼 클릭
musicProgress.addEventListener("click", (e) => {
    let progressWidth = musicProgress.clientWidth; //진행바 전체 길이
    let clickOffsetX = e.offsetX; //진행바를 기준으로 측정되는 X좌표 값
    let songDuration = musicAudio.duration; //오디오 전체 길이

    //백분위로 나눈 숫자에 다시 전체 길이를 곱해서 현재 재생값으로 바꿈
    musicAudio.currentTime = (clickOffsetX / progressWidth) * songDuration;
});

//반복 버튼 클릭
musicRepeat.addEventListener("click", () => {
    let getAttr = musicRepeat.getAttribute("class");

    switch (getAttr) {
        case "repeat":
            musicRepeat.setAttribute("class", "repeat_one");
            musicRepeat.setAttribute("title", "한곡 반복");
            break;
        case "repeat_one":
            musicRepeat.setAttribute("class", "shuffle");
            musicRepeat.setAttribute("title", "랜덤 반복");
            break;
        case "shuffle":
            musicRepeat.setAttribute("class", "repeat");
            musicRepeat.setAttribute("title", "전체 반복");
            break;
    }
});

//오디오가 끝나면
musicAudio.addEventListener("ended", () => {
    let getAttr = musicRepeat.getAttribute("class");

    switch (getAttr) {
        case "repeat":
            nextMusic();
            break;
        case "repeat_one":
            playMusic();
            break;
        case "shuffle":
            let randomIndex = Math.floor(Math.random() * allMusic.length + 1); //랜덤 인덱스 생성

            do {
                randomIndex = Math.floor(Math.random() * allMusic.length + 1);
            } while (musicIndex == randomIndex);

            musicIndex = randomIndex; //현재 인덱스를 랜덤 인덱스로 변경

            loadMusic(musicIndex);
            playMusic();
            break;
    }
    playListMusic();
});

//플레이 버튼 클릭
musicPlay.addEventListener("click", () => {
    const isMusicPaused = musicWrap.classList.contains("paused"); //음악 재생중
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

//뮤직 리스트 버튼
musicListBtn.addEventListener("click", () => {
    musicList.classList.add("show");
});

//뮤직 리스트 닫기 버튼
musicListClose.addEventListener("click", () => {
    musicList.classList.remove("show");
});

//뮤직 리스트 구현하기
for (let i = 0; i < allMusic.length; i++) {
    let li = `
        <li data-index="${i + 1}">
            <span class="img">
                <img class="img" src="img/${allMusic[i].img}.png" alt="${
        allMusic[i].name
    }">
            </span>
            <span class="title">
                <strong>${allMusic[i].name}</strong>
                <em>${allMusic[i].artist}</em>
                <audio class="${allMusic[i].audio}" src="audio/${
        allMusic[i].audio
    }.mp3"></audio>
            </span>
            <span class="audio-duration" id="${allMusic[i].audio}">3:40</span>
        </li>
    `;

    // musicListUl.innerHTML += li;
    musicListUl.insertAdjacentHTML("beforeend", li);

    //리스트에 음악 시간 불러오기
    let liAudioDuration = musicListUl.querySelector(`#${allMusic[i].audio}`); //리스트에서 시간을 표시할 선택자
    let liAudio = musicListUl.querySelector(`.${allMusic[i].audio}`); //리스트에서 오디오 파일 선택
    liAudio.addEventListener("loadeddata", () => {
        let audioDuration = liAudio.duration;
        // console.log(audioDuration)
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if (totalSec < 10) totalSec = `0${totalSec}`;
        liAudioDuration.innerText = `${totalMin}:${totalSec}`;
        liAudioDuration.setAttribute(
            "data-duration",
            `${totalMin}:${totalSec}`
        );
    });
}

//뮤직리스트를 클릭하면 재생
function playListMusic() {
    const musicListAll = musicListUl.querySelectorAll("li"); //뮤직 리스트 목록

    for (let i = 0; i < musicListAll.length; i++) {
        let audioTag = musicListAll[i].querySelector(".audio-duration");

        musicListAll[i].setAttribute("onclick", "clicked(this)");

        if (musicListAll[i].classList.contains("playing")) {
            musicListAll[i].classList.remove("playing");
            let dataAudioDuration = audioTag.getAttribute("data-duration");
            audioTag.innerText = dataAudioDuration;
        }

        if (musicListAll[i].getAttribute("data-index") == musicIndex) {
            musicListAll[i].classList.add("playing");
            audioTag.innerText = "재생중";
        }
    }
}
playListMusic();

//뮤직 리스트를 클릭하면
function clicked(el) {
    let getIndex = el.getAttribute("data-index");
    // alert(getIndex);
    musicIndex = getIndex;
    loadMusic(musicIndex);
    playMusic();
    playListMusic();
}

window.addEventListener("load", () => {
    loadMusic(musicIndex);
    playListMusic();
});

function muteOrsound() {
    const myAudio = document.getElementById("main-audio");
    if (soundOnOff.classList.contains("mute")) {
        soundOnOff.setAttribute("title", "음소거 해제");
        soundOnOff.setAttribute("class", "sound");
        soundCotrol(0);
        myAudio.volume = 0;
    } else {
        soundOnOff.setAttribute("title", "음소거");
        soundOnOff.setAttribute("class", "mute");
        soundCotrol(0.3);
        myAudio.volume = 0.1;
    }
}

// 음소거 시키기
soundOnOff.addEventListener("click", muteOrsound);
// 볼륨 컨트롤 바
function soundCotrol(control) {
    document.querySelector("#control-volume").value = control * 10;
}

document.querySelector("#control-volume").addEventListener("input", (e) => {
    let volume = e.target.value * 0.1;
    let volume2 = volume.toFixed(1);
    const myAudio = document.getElementById("main-audio");
    myAudio.volume = volume2;
    soundCotrol(volume2);
    if (volume2 == 0) {
        if (soundOnOff.classList.contains("mute")) {
            soundOnOff.setAttribute("title", "음소거 해제");
            soundOnOff.setAttribute("class", "sound");
        }
    } else {
        soundOnOff.setAttribute("title", "음소거");
        soundOnOff.setAttribute("class", "mute");
    }
});

soundUp.addEventListener("click", () => {
    let soundUpCurrent = document.querySelector("#control-volume").value;
    if (soundUpCurrent == 0) {
        muteOrsound();
    }
    soundUpCurrent++;
    if (soundUpCurrent >= 11) return;
    document.querySelector("#control-volume").value = soundUpCurrent;
    const myAudio = document.getElementById("main-audio");
    myAudio.volume = (soundUpCurrent * 0.1).toFixed(1);
    soundCotrol(soundUpCurrent / 10);
});
soundDown.addEventListener("click", () => {
    let soundDownCurrent = document.querySelector("#control-volume").value;
    soundDownCurrent--;
    if (soundDownCurrent == 0) {
        muteOrsound();
        soundDownCurrent = -1;
    }
    if (soundDownCurrent <= -1) return;
    document.querySelector("#control-volume").value = soundDownCurrent;
    const myAudio = document.getElementById("main-audio");
    myAudio.volume = (soundDownCurrent * 0.1).toFixed(1);
    console.log((soundDownCurrent * 0.1).toFixed(1));
    console.log(soundDownCurrent);
});

// 플레이어 닫기
musicClose.addEventListener("click", () => {
    pauseMusic();
    musicIndex = 1;
    loadMusic(1);
    playListMusic();
    musicProgressBar.style.width = `0%`;
    musicWrap.style.display = "none";
});
