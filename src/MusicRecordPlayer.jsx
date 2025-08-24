import React, { useMemo, useRef, useState } from "react";
import YouTube from "react-youtube";
import VinylRecord from "./VinylRecord";
import "./App.css";

const TRACKS = [
  { title: "CEREMONY", artist: "Stray Kids", youtubeId: "P7vBoGWoReg", img: "/assets/vinyl1.png" },
  { title: "Count To Love", artist: "BOYNEXTDOOR", youtubeId: "17mqKMHUxXY", img: "/assets/vinyl2.png" },
  { title: "DANCING ALONE", artist: "KiiiKiii", youtubeId: "HoVQi1cnkh4", img: "/assets/vinyl3.png" },
  { title: "Surf", artist: "NCT WISH", youtubeId: "tGc_cYtHsWo", img: "/assets/vinyl4.png" },
  { title: "야경", artist: "TOUCHED", youtubeId: "YD1QkZcqygY", img: "/assets/vinyl5.png" }
];

export default function MusicRecordPlayer() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const playerRef = useRef(null);

  const currentId = useMemo(() => TRACKS[current].youtubeId, [current]);

  const onReady = (e) => {
    playerRef.current = e.target;
    if (playing) e.target.playVideo();
  };

  const togglePlay = () => {
    if (!playerRef.current) return;
    if (playing) playerRef.current.pauseVideo();
    else playerRef.current.playVideo();
    setPlaying((v) => !v);
  };

  const selectTrack = (idx) => {
    setCurrent(idx);
    setPlaying(true);
    if (playerRef.current) {
      playerRef.current.loadVideoById(TRACKS[idx].youtubeId);
      playerRef.current.playVideo();
    }
  };

  return (
    <div className="mrp">
      {/* ✅ 현재 곡의 레코드 이미지 보여줌 */}
      <VinylRecord
        src={TRACKS[current].img}
        size={220}
        speed={6}
        playing={playing}
        onToggle={togglePlay}
      />

      {/* ✅ 곡 제목 */}
      <p className="track-label">{TRACKS[current].title}</p>

      {/* ✅ 아티스트 이름 */}
      <p className="track-artist">{TRACKS[current].artist}</p>

      {/* ✅ 곡 선택 버튼 */}
      <div className="mrp-controls">
        <button
          className="glass-btn"
          onClick={() =>
            selectTrack((current + TRACKS.length - 1) % TRACKS.length)
          }
        >
          ◀
        </button>
        <button className="glass-btn primary" onClick={togglePlay}>
          {playing ? "||" : "▶"}
        </button>
        <button
          className="glass-btn"
          onClick={() => selectTrack((current + 1) % TRACKS.length)}
        >
          ▶
        </button>
      </div>

      {/* ✅ 유튜브 소리만 재생 */}
      <div className="yt-hidden">
        <YouTube
          videoId={currentId}
          onReady={onReady}
          opts={{
            width: "0",
            height: "0",
            playerVars: { autoplay: 1, rel: 0, modestbranding: 1 }
          }}
        />
      </div>
    </div>
  );
}
