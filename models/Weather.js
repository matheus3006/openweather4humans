const connect = require('../config/bd');

const selectWeather = async()=> {
    const cityWeather = await connect();
    const res = await cityWeather.query('SELECT * FROM cityWeather');
    cityWeather.release();
    return res.rows;
}

const insertWeather= async(city)=>{
    const cityWeather = await connect();
    const sql = 'INSERT INTO cityWeather(name,country,temperature,humidity,weather,description) VALUES ($1,$2,$3,$4,$5,$6)';
    const values = [city.name, city.country, city.temperature,city.humidity,city.weather,city.description];
    cityWeather.release();
    return await cityWeather.query(sql, values);
}

const topFive = async()=>{
    const cityWeather = await connect();
    const res = await cityWeather.query('SELECT name, COUNT(*) AS Was_checked FROM cityWeather GROUP BY name ORDER BY Was_checked DESC LIMIT 5');
    cityWeather.release();
    return res.rows;
}

const lastSearch = async()=>{
    const cityWeather = await connect();
    const res = await cityWeather.query('SELECT name AS Last_searched_cities,MAX(id) FROM cityWeather GROUP BY Last_searched_cities ORDER BY MAX(id) DESC LIMIT 5');

    cityWeather.release();
    return res.rows;
}

module.exports = {selectWeather,insertWeather,topFive,lastSearch}