const validarCampos = () => {
    let campos = []
    campos ['nome'] = document.getElementById('nome').value
    campos ['cpf'] = document.getElementById('cpf').value
    campos ['rg'] = document.getElementById('rg').value
    campos ['email'] = document.getElementById('email').value
    campos ['telefone'] = document.getElementById('telefone').value
    campos ['dataNasc'] = document.getElementById('dataNasc').value
    campos ['rua'] = document.getElementById('rua').value
    campos ['numero'] = document.getElementById('numero').value
    campos ['bairro'] = document.getElementById('bairro').value
    campos ['cidade'] = document.getElementById('cidade').value
    campos ['cep'] = document.getElementById('cep').value
    campos ['estado'] = document.getElementById('estado').value
    campos ['senha'] = document.getElementById('senha').value
    campos ['confSenha'] = document.getElementById('confSenha').value

    let msg = ''

    if(campos['nome'].length <= 4){
        msg += 'O nome deve conter mais de 3 caracteres. <br/>'
    }
    if(campos['cpf'].length != 11){
        msg += 'O cpf deve conter 11 dígitos. <br/>'
    }
    if(campos['rg'].length < 8 && campos['rg'].length > 11){
        msg += 'O rg deve conter mais de 8 digitos e menos que 11. <br/>'
    }
    if(campos['email'].length <= 5){
        msg += 'O e-mail deve conter mais de 5 caracteres. <br/>'
    }
    if(campos['telefone'].length < 10 && telefone.length > 11){
        msg += 'O telefone deve ter no mínimo 10 dígitos e no máximo 11.<br/>'
    }
    if(campos['dataNasc'].length != 8){
        msg += 'Atenção com a data de nascimento. <br/>'
    }
    if(campos['rua'].length < 3){
        msg += 'A rua deve ter no mínimo 5 dígitos. <br/>'
    }
    if(campos['numero'].length < 3){
        msg += 'O número deve ter no mínimo 3 dígitos. <br/>'
    }
    if(campos['bairro'].length < 3){
        msg += 'O bairro deve ter no mínimo 5 caracteres. <br/>'
    }
    if(campos['cidade'].length < 3){
        msg += 'A cidade deve ter no mínimo 3 caracteres. <br/>'
    }
    if(campos['cep'].length < 3){
        msg += 'O CEP deve ter no mínimo 8 dígitos. <br/>'
    }
    if(campos['estado'] === 'Selecione'){
        msg += 'Selecione o estado. <br/>'
    }
    if(campos['senha'].length < 4 && campos['senha'].length > 15){
        msg += 'A senha deve ter entre 4 e 15 caracteres. <br/>'
    }
    if(campos['senha'].length != campos['confSenha'].length){
        msg += 'Erro de confirmação de senhas, verifique se colocou as mesmas. <br/>'
    }
    return msg
}

const mostrarModal = (msgErro) => {
        document.getElementById('modal_titulo').innerHTML = 'Erro no cadastro!'
        document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
        document.getElementById('modal_conteudo').innerHTML = 'Verifique se todos os campos foram preenchidos corretamente: <br/>' + msgErro	
        document.getElementById('modal_btn').innerHTML = 'Voltar e corrigir'
        document.getElementById('modal_btn').className = 'btn btn-danger'
        $('#modalCadastro').modal('show')
        alert('modal fail')
}

function validaSubmit() {
    let msgErro = validarCampos()
    if(msgErro == ''){
        document.getElementById('nome').value = ''
        document.getElementById('cpf').value = ''
        document.getElementById('rg').value = ''
        document.getElementById('email').value = ''
        document.getElementById('telefone').value = ''
        document.getElementById('dataNasc').value = ''
        document.getElementById('rua').value = ''
        document.getElementById('numero').value = ''
        document.getElementById('bairro').value = ''
        document.getElementById('cidade').value = ''
        document.getElementById('cep').value = ''
        document.getElementById('estado').value = ''
        document.getElementById('senha').value = ''
        document.getElementById('confSenha').value = ''
        return true
    }else{
        mostrarModal(msgErro)
        return false
    }
}

function cadastrar(){
    if(validaSubmit() === true){
        getElementById('frmCadastro').submit()
    }
}
