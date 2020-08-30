class LivroDao {

  constructor(db) {
    this._db = db;
  }

  lista(callback) {
    this._db.all(
      'SELECT * FROM livros',
      (err, result) => callback(err, result)
    );
  }
}

module.exports = LivroDao;