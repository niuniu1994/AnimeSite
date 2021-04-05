
const express = require('express');
const app = express();
app.use(express.static('./dist/MyAnime'));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/MyAnime'}
);
});
app.listen(process.env.PORT || 8080);
