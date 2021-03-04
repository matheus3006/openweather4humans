const connect = async()=>{
    if (global.connection)
        return global.connection.connect();
 
    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: process.env.PG_URI
    });
 
    
    const cityWeather = await pool.connect();
    console.log("successful conection with  PostgreSQL!");
 
    const res = await cityWeather.query('SELECT NOW()');
    console.log(res.rows[0]);
    cityWeather.release();

    global.connection = pool;
    return pool.connect();
};


module.exports = connect;
