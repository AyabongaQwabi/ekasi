module.exports = function(){
	
	this.showWords = function(req,res){
			req.services(function(err,services){
				var words= services.wordService;
				console.log('SERVICE:\t'+JSON.stringify(words))
				words.getWords(function(err,results){
					if(err) next(err)
					res.render('words',{words:results})
				})
			})
			
	}
	this.addWord = function(req,res){
			var data = req.body
			words = req.services.wordService;
			words.add(data,function(err,results){
				if(err) next(err)
			})
	}
	this.rateWord = function(req,res){
			var data = req.body
			var word_id =req.params.word_id
			words = req.services.wordService;
			words.rate([id,data],function(err,results){
				if(err) next(err)
			})
	}
}