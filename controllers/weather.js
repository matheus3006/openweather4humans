const asyncHandler = require('../middleware/async');
// const Weather = require('../models/Weather');
const weather = require("openweather-apis")
const {insertWeather,topFive,lastSearch,selectWeather} = require('../models/Weather');

exports.saveWeather = asyncHandler(async(req,res,next)=>{
    weather.setLang('pt_br');
    weather.setAPPID(process.env.API_KEY);
    const city = req.params.city;
    weather.setCity(city);
    try {
        weather.getAllWeather(async(err, weatherData)=>{
            if(err){
                console.log(err);
                return res.status(404).json({success:false, msg:'Cidade não encontrada'});
            }               
                // Filtra os dados da API                 
                const data = {
                    temperature: weatherData.main.temp,
                    humidity: weatherData.main.humidity,
                    weather: weatherData.weather[0].main,
                    description:weatherData.weather[0].description,
                    country: weatherData.sys.country,
                    name:weatherData.name
                };
                console.log('Valor de Data',data)
                if(data !== null){                   
             
                // Salva os dados 
                const weatherSaved = await insertWeather({
                    name:data.name,
                    country:data.country,
                    temperature:data.temperature,
                    humidity:data.humidity,
                    weather:data.weather,
                    description:data.description,               
                });
                
                res.status(200).json({success:true, data:data});            
                }           
                           
        });
   
    } catch (err) {
        console.error('Erro:',err);
        return res.status(404).json({msg:'Cidade não encontrada'})
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

