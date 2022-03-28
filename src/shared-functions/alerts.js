/* eslint-disable complexity */
/* eslint-disable react-func/max-lines-per-function */

import swal from 'sweetalert';

function alerts(alertName) {
  switch (alertName) {
  case 'userNotRegistered':
    swal('Usuário não cadastrado...', 'Faça parte, '
    + 'agora mesmo!', 'info');
    break;
  case 'incorrectPassword':
    swal('Senha incorreta', '', 'error');
    break;
  case 'existentEmail':
    swal('Senha incorreta', '', 'error');
    break;
  case 'expiredSession':
    swal('Sessão expirada :(', 'Por favor, realize um novo login.', 'info');
    break;
  case 'autoFillCpf':
    swal('CPF', 'Por favor, digite o CPF você mesmo, '
    + 'sem utilizar o preenchimento automático. '
    + 'exemplo: 18055917701', 'info');
    break;
  case 'autoFillCellphone':
    swal('Celular', 'Por favor, digite o número de celular você mesmo, '
    + 'sem utilizar o preenchimento automático. '
    + 'Exemplo: 21912345678', 'info');
    break;
  case 'cepBtnNotPressed':
    swal('CEP', 'Por favor, pressione o botão de pesquisar CEP, '
        + 'para que as informações de endereço sejam preenchidas.', 'info');
    break;
  case 'passwordOutsideFormat':
    swal('Senha', 'A senha está fora dos padrões requeridos, favor revisá-la.', 'info');
    break;
  case 'cpfOutsideFormat':
    swal('CPF', 'O CPF deve apresentar exatamente 11 dígitos, '
    + 'sem a presença de pontos e/ou hífen. Favor revisá-lo.', 'info');
    break;
  case 'cellphoneOutsideFormat':
    swal('Celular', 'O número deve incluir o DDD, porém '
    + 'sem hífen e/ou parênteses. Favor revisá-lo.', 'info');
    break;
  case 'cepOutsideFormat':
    swal('CEP', 'O código postal deve apresentar exatamente 8 dígitos, '
        + 'sem a presença de hífen. Favor revisá-lo.', 'info');
    break;
  case 'imgTooBig':
    swal('Tamanho de imagem', 'Por favor, opte por uma imagem de, até, '
      + '1,5 MB.', 'info');
    break;
  case 'productTitle':
    swal('Título', 'Por favor, forneça um para seu anúncio.', 'info');
    break;
  case 'productDescription':
    swal('Descrição', 'Por favor, forneça uma com, pelo menos, 30 caracteres.', 'info');
    break;
  case 'topCategorySelection':
    swal('Categoria', 'Por favor, selecione uma para o produto.', 'info');
    break;
  case 'lineOfProductSelection':
    swal('Linha', 'Por favor, selecione uma para o produto.', 'info');
    break;
  case 'typeOfProductSelection':
    swal('Tipo', 'Por favor, selecione um para o produto.', 'info');
    break;
  case 'productConditionSelection':
    swal('Estado', 'Por favor, selecione um para o produto.', 'info');
    break;
  case 'productPrice':
    swal('Preço', 'Por favor, selecione um pelo qual deseja vender o produto.', 'info');
    break;
  case 'productPictures':
    swal('Fotos', 'Por favor, forneça pelo menos uma foto do produto. '
    + 'Fotos originais chamam mais atenção dos compradores!', 'info');
    break;
  default:
    swal('Desculpe o transtorno, algo deu errado...', 'Faremos o possível para voltar à '
    + 'normalidade o quanto antes. Obrigado pela compreensão!', 'info');
  }
}

export default alerts;
