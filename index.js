/**
 * Created by pujasvi on 22/7/16.
 */
/**
 * Created by pujasvi on 24/7/16.
 */
//const mysql=require('mysql');
const express=require('express');
const app=express();

let connection=null;
function createConnection(){
    connection=mysql.createConnection({
        host     : 'localhost',
        user     : 'pujasvi',
        // password : 'secret',
        database : 'game'
    });

}
/*function showtodos(cb){
 createConnection();
 connection.connect();

 const queryString='select * from tabl';
 connection.query(queryString,function(err,rows,fields){
 //  if (err) throw err;
 cb(rows);
 })
 connection.end();


 }
 */
app.listen(2900,function(){
    console.log("server running on port 2900");
})
app.use('/gh',express.static( './public_html'));

app.get('/h',function(req,res){
    res.send("hlo");
})



