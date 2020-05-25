const key= 'j72hltvgP1sS50G3DnEe4SN7MUMaGZ3y';

const getWeather = async(id) =>{
   const base ='https://dataservice.accuweather.com/currentconditions/v1/';
   const query = `${id}?apikey=${key}`;

   const weather = await fetch(base + query);
   const data = await weather.json();
   return data[0];

};


const getCity = async(city) => {
   const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
   const query = `?apikey=${key}&q=${city}`;

   const response= await fetch (base + query);
   const data= await response.json();

   return data[0];
}; 

