const renderSongList = () => {
  // console.log('hi im in rendersong')
  axios
    .get("/api/songs")
    .then(({ data }) => {
      // acc the total final of reduce
      // song each ITEM within LIST sequentially
      document.getElementById("songsList").innerHTML = `${data.reduce(
        (acc, song) => {
          // console.log(song);
          return (acc += `
        <li>
        title: ${song.title}
        duration: ${song.duration}
        artist: ${song.artist}
        </li>
        `);
          // second parameter is starting value
        },
        ""
      )}`;
      // console.log(songList)
    })

    .catch((err) => {
      console.log(err);
    });
};

document.getElementById("addSong").addEventListener("submit", (event) => {
  event.preventDefault();
  axios
    .post("/api/songs", {
      title: event.target.title.value,
      duration: event.target.duration.value,
      artist: event.target.artist.value,
    })
    .then(() => {
      console.log("successfully added song");

      event.target.title.value = "";
      event.target.duration.value = "";
      event.target.artist.value = "";
      document.getElementById("title").focus();
      renderSongList();
    })
    .catch((err) => {
      console.log(err);
    });
});

renderSongList();
