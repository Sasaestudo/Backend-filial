const Contato = require('./modelo')

class Controlador {
    constructor(nome, email, telefone) {
      this.nome = nome;
      this.email = email;
      this.telefone = telefone;
    } 
}

  
  module.export = Contato;