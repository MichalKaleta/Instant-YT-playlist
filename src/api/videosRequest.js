import axios from "axios";

export const requestVideos = (term, code, pageToken) => {
  const regionCode = code ? "regionCode" : "";
  return axios
    .get(`https://www.googleapis.com/youtube/v3/search/`, {
      params: {
        key:  "your you yube api key here",
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
