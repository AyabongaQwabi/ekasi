module.exports = function(connection){

 var executeQuery = function(query, data, cb){
      connection.query(query, data, cb);
 };

  
 this.getWord = function(word_id,cb){
 	executeQuery('select * from word where id = ?',word_id,cb)
 }

 this.addWord = function(word_data,cb){
 	executeQuery('insert into word set ?',word_data,cb)
 }

 this.getWords = function(cb){
 	executeQuery('select * from word',cb)
 }

 this.rateWord = function(word_data ,cb){
 	executeQuery('insert into rating where word_id = ? set ?',word_data,cb)
 }

}
