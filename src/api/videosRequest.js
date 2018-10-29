import axios from "axios";

export const requestVideos = (term, code, pageToken) => {
  const regionCode = code ? "regionCode" : "";
  return axios
    .get(`https://www.googleapis.com/youtube/v3/search/`, {
      params: {
        key: "AIzaSyD9d25lAYVOHhUtkUV5sKfTEmu25YQCRzo",
        part: "snippet",
        type: "video",
        maxResults: 6,
        pageToken,
        q: term,
        [regionCode]: code
      }
    })
    .catch(err => {
      console.log(err);
    });
};
