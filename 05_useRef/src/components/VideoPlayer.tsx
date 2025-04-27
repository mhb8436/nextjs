import React, { useRef, useState } from 'react';

const VideoPlayer: React.FC = () => {
  // 비디오 요소를 참조하기 위한 ref
  const videoRef = useRef<HTMLVideoElement>(null);
  // 재생 상태를 관리하기 위한 state
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      if (progressRef.current) {
        progressRef.current.style.width = `${progress}%`;
      }
    }
  };

  // 진행 막대를 표시하기 위한 ref
  const progressRef = useRef<HTMLDivElement>(null);

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const progressBar = e.currentTarget;
      const clickPosition = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth;
      videoRef.current.currentTime = clickPosition * videoRef.current.duration;
    }
  };

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
        onClick={handlePlayPause}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
          type="video/webm"
        />
        브라우저가 비디오를 지원하지 않습니다.
      </video>

      <div className="controls">
        <button onClick={handlePlayPause}>
          {isPlaying ? '일시정지' : '재생'}
        </button>

        <div className="progress-bar" onClick={handleSeek}>
          <div ref={progressRef} className="progress"></div>
        </div>
      </div>

      <p className="help-text">
        비디오를 클릭하거나 버튼을 눌러 재생/일시정지를 전환할 수 있습니다.
        진행 막대를 클릭하면 해당 위치로 이동합니다.
      </p>
    </div>
  );
};

export default VideoPlayer;
