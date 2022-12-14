const mysql = require('mysql2/promise');
const db = {connection: null};

(async () => {
  // create the connection to database
  db.connection = await mysql.createConnection({
    host: 'db-cloud-ptudw.czomp6y0wfdy.ap-southeast-1.rds.amazonaws.com',
    // host: 'localhost',
    user: 'hkdarealest',
    password: 'Nguyenhuukhai2805',
    // password: 'huuloc123',
    database: 'ktpm1-ptudw-project'

    // Test
    // host: 'localhost',
    // user: 'root',
    // password: 'huuloc123',
    // database: 'ktpm1-ptudw-project'
  });
  console.log('Database connected!');
})();


module.exports = db;