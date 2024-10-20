document.addEventListener('DOMContentLoaded', function () {
    const volumeSlider = document.getElementById('volume-slider');
    const volumeValue = document.getElementById('volume-value');
    const audioPlayer1 = document.getElementById('audio-player-1');
    const audioPlayer2 = document.getElementById('audio-player-2');

    // 시작 볼륨을 0으로 설정
    audioPlayer1.volume = 0;
    audioPlayer2.volume = 0;

    // 슬라이더 값에 따라 두 오디오 음량을 조절
    volumeSlider.addEventListener('input', function () {
        const volume = volumeSlider.value;
        volumeValue.textContent = volume;
        audioPlayer1.volume = volume / 100;
        audioPlayer2.volume = volume / 100;
    });
});
