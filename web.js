const express = require('express');
const app = express();

const newBaseURL = process.env.NEW_BASE_URL || 'http://example.com';
const port = process.env.PORT || 5000;

app.get('*', function(request, response) {
    response.redirect(newBaseURL + request.url);
});

app.listen(port, function() {
    console.log('Listening on ' + port);
});
