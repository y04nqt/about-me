import { Frame, TitleBar } from "@react95/core";

const MusicPlayer = () => (
  <Frame
    className="mt-12"
  >
    {/* Add some cool flashing animation text or something funky here */}
    <TitleBar
      title="DJ Landrace - Song of the Week"
    />
    <iframe
      title="music"
      width="100%"
      height="166"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1213121518&color=%23b0c0e0&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true">
    </iframe>
    <div
      className="text-center text-lg text-white text-ellipsis overflow-hidden whitespace-nowrap"
    >
      <a
        href="https://soundcloud.com/mag_landrace"
        title="Landrace"
        target="_blank"
        className="no-decoration"
        rel="noreferrer">
        Landrace
      </a> · <a
        href="https://soundcloud.com/mag_landrace/any-lamps-4-sale"
        title="any lamps 4 sale?"
        target="_blank"
        className="no-decoration"
        rel="noreferrer">
        any lamps 4 sale?
      </a>
    </div>
    <Frame
      boxShadow="out"
    >
      <p id="me" className="text-green-400 p-4">
        This song I made in a couple of days.
        It was inspired by Lil Wayne's music and some other pump up jams.
        I find making trap beats is a lot of fun and easy. I hope you enjoy :)
      </p>
    </Frame>
  </Frame>
);
export default MusicPlayer;