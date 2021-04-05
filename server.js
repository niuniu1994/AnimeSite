
const express = require('express');
const app = express();
app.use(express.static('./dist/my-anime'));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/my-anime/'}
);
});
app.listen(process.env.PORT || 8080);
