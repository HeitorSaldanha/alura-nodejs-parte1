class LivroDao {

  constructor(db) {
    this._db = db;
  }

  adiciona(livro) {
    return new Promise((resolve, reject) => {
      this._db.run(`
      INSERT INTO livros (
        titulo,
        preco,
        descricao
      ) values (?,?,?)
      `,[
        livro.titulo,
        livro.preco,
        livro.descricao
      ], err => err ? reject('Não foi possível adicionar o livro') : resolve()
      )
    });
  }

  lista() {
    return new Promise((resolve, reject) => {
      this._db.all(
        'SELECT * FROM livros',
        (err, result) => err ?
                          reject('Não foi possível listar os livros') :
                          resolve(result)
      );
    });
  }
}

module.exports = LivroDao;