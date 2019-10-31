
const verifica = () => {
    let nome = document.getElementById('nome')
    let cpf = document.getElementById('cpf')
    let rg = document.getElementById('rg')
    let email = document.getElementById('email')
    let telefone = document.getElementById('telefone')
    let dataNasc = document.getElementById('dataNasc')
    let rua = document.getElementById('rua')
    let numero = document.getElementById('numero')
    let bairro = document.getElementById('bairro')
    let cidade = document.getElementById('cidade')
    let cep = document.getElementById('cep')
    let estado = document.getElementById('estado')
    let senha = document.getElementById('senha')

let confSenha = document.getElementById('confSenha')
    let msg = ''
    if(nome.value.lenght < 4){
        msg += 'O nome deve conter mais de 4 caracteres \n'
    }
    if(cpf.value.lenght !== 11){
        msg += 'O cpf deve conter 11 dígitos \n'
    }
    if(rg.value.lenght < 8 && rg.value.lenght > 11){
        msg += 'O rg deve conter mais de 8 digitos e menos que 11 \n'
    }
    if(email.value.lenght < 5){
        msg += 'O e-mail deve conter mais de 5 caracteres \n'
    }
    if(telefone.value.lenght < 10 && telefone.value.lenght > 11){
        msg += 'O telefone deve ter no mínimo 10 dígitos e '
    }
}