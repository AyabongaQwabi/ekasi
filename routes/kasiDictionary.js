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
			req.services(function(err,services){
				var words = services.wordService;
				words.addWord(data,function(err,results){
					if(err) next(err)
						res.redirect('/')
				})
			})
			
	}


	this.rateWord = function(req,res){
			//var data = req.body
			var rating = req.params.rating
			var word_id =req.params.word_id
			var data = {word_id:word_id,rating:rating}
			req.services(function(err,services){
				var words = services.wordService;
				words.rateWord(data,function(err,results){
					if(err) console.log(err)
					res.redirect('/')
				})
			})
			
	}
}