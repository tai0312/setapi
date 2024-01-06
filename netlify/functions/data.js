exports.handler = async () => {
  const headers = {
    "Access-Control-Allow-Origin" : "https://silly-cannoli-d41459.netlify.app",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "Content-Type"
  }

  const data = {
    dog : ["https://images.dog.ceo/breeds/dhole/n02115913_312.jpg",
        "https://images.dog.ceo/breeds/pomeranian/n02112018_4840.jpg",
        "https://images.dog.ceo/breeds/vizsla/n02100583_917.jpg",
        "https://images.dog.ceo/breeds/terrier-border/n02093754_1111.jpg",
        "https://images.dog.ceo/breeds/pekinese/n02086079_16268.jpg",
        "https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_909.jpg",
        "https://images.dog.ceo/breeds/vizsla/n02100583_1214.jpg",
        "https://images.dog.ceo/breeds/redbone/n02090379_3300.jpg",
        "https://images.dog.ceo/breeds/eskimo/n02109961_3902.jpg",
        "https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_9511.jpg",
        "https://images.dog.ceo/breeds/pyrenees/n02111500_8884.jpg",
        "https://images.dog.ceo/breeds/labradoodle/Cali.jpg"
        ],
        cat : ["https://cdn2.thecatapi.com/images/bi0.jpg",
        "https://cdn2.thecatapi.com/images/7kr.jpg",
        "https://cdn2.thecatapi.com/images/94h.png",
        "https://cdn2.thecatapi.com/images/snxE5_PPX.jpg",
        "https://cdn2.thecatapi.com/images/2eh.jpg",
        "https://cdn2.thecatapi.com/images/2g6.jpg",
        "https://cdn2.thecatapi.com/images/7au.jpg",
        "https://cdn2.thecatapi.com/images/gs.jpg",
        "https://cdn2.thecatapi.com/images/MTc4MzM4MQ.jpg",
        "https://cdn2.thecatapi.com/images/YnPrYEmfe.jpg",
        "https://cdn2.thecatapi.com/images/b11.jpg",
        "https://cdn2.thecatapi.com/images/MTUzNjQwNw.jpg"
        ]
  }
    return {
      statusCode: 200,
      headers: headers,
      body: JSON.stringify(data)
    };
  };
