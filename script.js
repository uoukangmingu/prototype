document.addEventListener('DOMContentLoaded', function () {
    const volumeSlider = document.getElementById('volume-slider');
    const volumeValue = document.getElementById('volume-value');
    const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');
    const songSelector = document.getElementById('song-selector');
    const playButton = document.getElementById('play-button');

    // 슬라이더 값에 따라 오디오 음량을 조절
    volumeSlider.addEventListener('input', function () {
        const volume = volumeSlider.value;
        volumeValue.textContent = volume;
        audioPlayer.volume = volume / 100;
    });

    // 두 곡의 플레이리스트
    const playlist = ['sample-audio.mp3', 'sample-audio2.mp3'];

    // 선택된 곡을 재생하는 이벤트
    playButton.addEventListener('click', function () {
        const selectedSongIndex = songSelector.value; // 선택된 곡의 인덱스
        audioSource.src = playlist[selectedSongIndex]; // 선택된 곡의 URL 설정
        audioPlayer.load();  // 새로운 곡을 로드
        audioPlayer.play();  // 자동으로 재생
    });
});
