const express = require('express');
const path = require('path');

require('./src/db/mongoose');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/', require('./src/routes/product'));

//serve static assets
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.use('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const port = process.env.PORT || 2000;
app.listen(port, () => {
    console.log('Application is up on port ' + port);
});
