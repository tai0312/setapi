async function fetchDogData(){
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
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "Content-Type"
  }

  const data = {
    dog : [], cat : []
  }
  const promises = [];
  for(let i = 0; i < 12; i++){
    promises.push(fetchDogData());
    promises.push(fetchCatData());
  }

  const results = await Promise.all(promises);

  for(let i = 0; i < 12; i++){
    data.dog[i] = results[i * 2];
    data.cat[i] = results[i * 2 + 1];
  }
    return {
      statusCode: 200,
      headers: headers,
      body: JSON.stringify(data)
    };
  };
