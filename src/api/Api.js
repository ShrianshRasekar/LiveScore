//const API_KEY= "6fbea5ec66f84c5c8427ad6119176069";
const API_KEY= "PD4NUeLxTFdjCTkQDgbLn24jAhx2";

export const getMatches=()=>{
    //const url= ' https://api.themoviedb.org/3/movie/550?apikey=${API_KEY} ';
    const url= 'https://cricapi.com/api/matches?apikey=PD4NUeLxTFdjCTkQDgbLn24jAhx2';
    return fetch(url).then((response)=>response.json()).catch((error)=>console.log("Error!: ",error));
}

export const getMatchDetail = (id) => {
    const url = `https://cricapi.com/api/cricketScore?unique_id=${id}&apikey=${API_KEY}`;
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };