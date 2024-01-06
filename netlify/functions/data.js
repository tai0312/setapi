async function fetchDagData(){
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const image = await response.json();
  return image.message;
}

async function fetchCatData(){
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  const image = await response.json();
  return image[0].url;
}

exports.handler = async () => {
  const headers = {
    "Access-Control-Allow-Origin" : "https://silly-cannoli-d41459.netlify.app",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "Content-Type"
  }

  const data = {
    dog : [], cat : []
  }
  for(let i = 0;i < 12;i++){
     data.dog[i] = await fetchDagData();
     data.cat[i] = await fetchCatData();
  }
    return {
      statusCode: 200,
      headers: headers,
      body: JSON.stringify(data)
    };
  };
