import mysql from "mysql"
export const db = mysql.createConnection({
    host: "localhost",
    myuser: "root",
    password: ""

})