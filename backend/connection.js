const mysql = require("mysql2");
const pool = mysql.createPool({
    host: process.env.MYSQL_PORT,
    user: "root",
    password: "12345678",
    database: "icaseManagementSystem",
    port: "3306",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})
pool.getConnection(async (err, connection) => {
    if (err) {
        console.error('Database connection failed:', err);
        if (await connection) {
            // process.exit(1);
            connection.release();
        }
    } else {
        console.log('Connected to database successfully!');
        connection.release();
    }
});
pool.on('error', (err) => { console.error(err); })


module.exports = {
    getConnection: () => pool
};