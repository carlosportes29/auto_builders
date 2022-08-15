const { I } = inject();

module.exports = {

  fields:{
    numero_celular: '~insira o numero de celular',
    nome_completo: '~Insira o nome completo'
   
  },

  docadastro(numero_celular, nome_completo) {
    I.fillField(this.fields.numero_celular, '(21)999999999')
    I.fillField(this.fields.nome_completo, 'Teste Teste')
  }
}
 