const db = require('../../config/database');

module.exports = app => {
  app.get('/', (req, resp) => {
    resp.send(`
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          <h1>Casa do Código</h1>
        </body>
      </html>
    `);
  });

  app.get('/livros', (req, resp) => {
    db.all('SELECT * FROM livros', (err, result) => {
      resp.marko(
        require('../views/livros/lista/lista.marko'),
        {
          livros: result
        }
      );
    });
  });
};