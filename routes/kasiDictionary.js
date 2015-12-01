module.exports = function(){
	
	this.showWords = function(req,res){
			words = req.service.wordService;
			words.getWords(function(err,results){
				if(err) next(err)
				res.render('words',{words:results})
			})
	}
	this.addWord = function(req,res){
			var data = req.body
			words = req.service.wordService;
			words.add(data,function(err,results){
				if(err) next(err)
			})
	}
	this.rateWord = function(req,res){
			var data = req.body
			var word_id =req.params.word_id
			words = req.service.wordService;
			words.rate([id,data],function(err,results){
				if(err) next(err)
			})
	}
}