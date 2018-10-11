import axios from 'axios';


export const  requestVideos=term=>(
    axios.get(`https://www.googleapis.com/youtube/v3/search/`,{
        params:{
        key: 'AIzaSyD9d25lAYVOHhUtkUV5sKfTEmu25YQCRzo',
        part: 'snippet',
        type: 'video',
        q:  term,
        }
    })
)