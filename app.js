var express = require('express'),
    mysql = require('mysql'),
    exphbs  = require('express-handlebars'),
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    dictionary = require('./routes/kasiDictionary'),    
    wordService = require('./dataServices/wordService'),
    ConnectionProvider = require('./routes/connectionProvider');
    //session = require('express-session');


var app = express();

var dbOptions = {
     host: 'localhost',
      user: 'root',
      password: 'theaya5379',
      port: 3306,
      database: 'ekasi'
};

var serviceSetupCallback = function(connection){
	return {
		wordServ : new OrganiserDataService(connection)
    
	}
};

var myConnectionProvider = new ConnectionProvider(dbOptions, serviceSetupCallback);
app.use(myConnectionProvider.setupProvider);
app.use(myConnection(mysql, dbOptions, 'pool'));
app.use(cookieParser());
app.use(session({secret:'veryfunnysecret'}));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



var kasiDictionary = new dictionary();
app.get('/',kasiDictionary.showWords)