document.addEventListener('DOMContentLoaded', function () {
    const volumeSlider = document.getElementById('volume-slider');
    const volumeValue = document.getElementById('volume-value');
    const audioPlayer = document.getElementById('audio-player');

    // 슬라이더 값에 따라 오디오 음량을 조절
    volumeSlider.addEventListener('input', function () {
        const volume = volumeSlider.value;
        volumeValue.textContent = volume;
        audioPlayer.volume = volume / 100;
    });
});
