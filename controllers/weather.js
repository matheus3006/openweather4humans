const asyncHandler = require('../middleware/async');
// const Weather = require('../models/Weather');
const weather = require("openweather-apis")
const {insertWeather,topFive,lastSearch,selectWeather} = require('../models/Weather');

exports.saveWeather = asyncHandler(async(req,res,next)=>{
    weather.setLang('pt_br');
    weather.setAPPID(process.env.API_KEY);
    const city = req.params.city;
    // console.log(city);
    weather.setCity(city);
    try {
        weather.getAllWeather(async(err, weatherData)=>{                 
            if(!err){              
                // Filtra os dados da API
                const data = [{
                    temperature: weatherData.main.temp,
                    humidity: weatherData.main.humidity,
                    weather: weatherData.weather[0].main,
                    description:weatherData.weather[0].description,
                    country: weatherData.sys.country,
                    name:weatherData.name
                }];
                
                // Salva os dados 
                const weatherSaved = await insertWeather({
                    name:data[0].name,
                    country:data[0].country,
                    temperature:data[0].temperature,
                    humidity:data[0].humidity,
                    weather:data[0].weather,
                    description:data[0].description,               
                });
                
                res.status(200).json({success:true, data:data});
            }else{
                res.status(404);
            }
                
        });
   
    } catch (err) {
        console.error(err);
    }
    
});

exports.getTopFive= asyncHandler(async(req,res,next)=>{
    const fiveMostSearched = await topFive();
    
    res.status(200).json({success:true, data: fiveMostSearched})

});

exports.getLastSearched = asyncHandler(async(req,res,next)=>{
    const fiveLastSearch = await lastSearch();
    

    res.status(200).json({success: true, data: fiveLastSearch})
});

exports.getData = asyncHandler(asyncHandler(async(req,res,next)=>{
    const data = await selectWeather();
    let count = 0
    data.forEach((data)=> count ++);
    

    res.status(200).json({success: true,total:count,data})
}));

