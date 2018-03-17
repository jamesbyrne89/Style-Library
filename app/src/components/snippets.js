import React from 'react';

const customVideoPlayer = () => {

    function initCustomVideoPlayer() {
        /* Find all players with the 'wh-player' class */
        const players = document.querySelectorAll(".wh-player");

        /* If there are multiple players present on the page, initialise each */
        if (players.length) {
            players.forEach(function (player) {
                const video = player.querySelector("video");
                const toggle = player.querySelector(".toggle");
                const sliders = player.querySelectorAll(".wh-player__slider");
                const volumeSlider = player.querySelector(".wh-player__volume");
                const progress = player.querySelector(".progress");
                const progressBar = player.querySelector(".progress__filled");
                const volume = player.querySelector(".wh-player__volume-controls");
                const volumeToggle = player.querySelector(".volume");
                const overlayButton = player.querySelector(".overlay-btn");
                const fullScreen = player.querySelector(".fullscreen");

                function togglePlay() {
                    video.paused ? video.play() : video.pause();
                }

                function updateButton() {
                    const icon = this.paused ? "\u25B6" : "\u23f8";
                    toggle.textContent = icon;
                    overlayButton.classList.toggle("hidden")
                }

                function handleSliderUpdate() {
                    video[this.name] = this.value;
                    if (this.name === "volume") {
                        if (this.value > 0.75) {
                            volumeToggle.innerHTML = '<i class="fa fa-volume-up"></i>';
                        }
                        if (this.value < 0.75 && this.value > 0.1) {
                            volumeToggle.innerHTML = '<i class="fa fa-volume-down"></i>';
                        } else if (this.value < 0.1) {
                            volumeToggle.innerHTML = '<i class="fa fa-volume-off"></i>';
                        } else {
                            volumeToggle.innerHTML = '<i class="fa fa-volume-up"></i>';
                        }
                    }
                }

                function handleRangeUpdate() {
                    video[this.name] = this.value;
                }

                function handleProgress() {
                    const percent = video.currentTime / video.duration * 100;
                    progressBar.style.flexBasis = percent + "%";
                }
                function handleShowButtons() {
                    if (video.currentTime === video.duration) {
                        alert('Finished!');
                    }
                }

                function scrub(e) {
                    const scrubTime = e.offsetX / progress.offsetWidth * video.duration;
                    video.currentTime = scrubTime;
                }

                let prevVolume;
                function toggleMute() {
                    prevVolume = video["volume"];
                    console.log(prevVolume);
                    if (volumeSlider.value > 0) {
                        volumeSlider.value = 0;
                        video["volume"] = 0;
                        volumeToggle.innerHTML = '<i class="fa fa-volume-off"></i>';
                    } else {
                        volumeSlider.value = 1;
                        video["volume"] = 1;
                        volumeToggle.innerHTML = '<i class="fa fa-volume-up"></i>';
                    }
                    return volumeSlider.value;
                }

                let isFullscreen = false;
                function fullScreenMode() {
                    if (!isFullscreen) {
                        if (video.requestFullscreen) {
                            video.requestFullscreen();
                        } else if (video.mozRequestFullScreen) {
                            video.mozRequestFullScreen();
                        } else if (video.webkitRequestFullscreen) {
                            video.webkitRequestFullscreen();
                        }
                        isFullscreen = true;
                    } else {
                        if (document.cancelFullScreen) {
                            document.cancelFullScreen();
                        } else if (document.mozCancelFullScreen) {
                            document.mozCancelFullScreen();
                        } else if (document.webkitCancelFullScreen) {
                            document.webkitCancelFullScreen();
                        }
                        isFullscreen = false;
                    }
                }

                video.addEventListener("click", togglePlay);
                video.addEventListener("play", updateButton);
                video.addEventListener("pause", updateButton);
                toggle.addEventListener("click", togglePlay);
                volumeToggle.addEventListener("click", toggleMute);
                overlayButton.addEventListener("click", togglePlay);
                let mousedown = false;
                progress.addEventListener("click", scrub);
                progress.addEventListener("mousemove", e => mousedown && scrub(e));
                progress.addEventListener("mousedown", () => (mousedown = true));
                progress.addEventListener("mouseup", () => (mousedown = false));
                video.addEventListener("timeupdate", handleProgress);
                video.addEventListener("timeupdate", handleShowButtons);
                fullScreen.addEventListener("click", fullScreenMode);

                sliders.forEach(function (slider) {
                    slider.addEventListener("change", handleSliderUpdate);
                });
                sliders.forEach(function (slider) {
                    slider.addEventListener("mousemove", handleSliderUpdate);
                });
            });
        }
        else {
            console.error('Failed to initialize video player')
        }
    }

    initCustomVideoPlayer();
    return (
                                    <div class="wh-player">
                                            <script defer src="https://use.fontawesome.com/releases/v5.0.4/js/all.js"></script>
                                        <video class="wh-player__video viewer" src="https://player.vimeo.com/external/194837908.sd.mp4?s=c350076905b78c67f74d7ee39fdb4fef01d12420&profile_id=164"></video>
                                        <button class="overlay-btn">{'\u25B6'}</button>
                                        <div class="wh-player__controls">

                                            <button class="wh-player__button toggle" title="Toggle Play">{'\u25B6'}</button>
                                            <div class="progress">
                                                <div class="progress__filled"></div>
                                            </div>
                                            <button class="wh-player__button restart">{'&#x21ba'}</button>
                                            <div class="wh-player__volume-controls">
                                                <button class="wh-player__button volume" title="Toggle Volume"><i class="fa fa-volume-up"></i></button>
                                                <input type="range" name="volume" class="wh-player__slider wh-player__volume" min="0" max="1" step="0.05" value="1" />
                                            </div>
                                            <button class="wh-player__button fullscreen"><i class="fa fa-expand"></i></button>
                                        </div>
                                    </div>
    )
}

export default customVideoPlayer;
