const handlePhone = (event) => {
  let input = event.target
  input.value = phoneMask(input.value)
}

function loading() {
  $('#newsletter').prop('checked', true)
}

const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{2})(\d)/,"($1) $2")
  value = value.replace(/(\d)(\d{4})$/,"$1-$2")
  return value
}

function enviarForm(){
  var myURL = "https://docs.google.com/forms/d/e/1FAIpQLSe_YqJoCJi1YRXM0lt2KmHmWq3RgzskxDQKodw31yID-gAQlQ/formResponse?usp=pp_url";
  var formName = "&entry.1519300356=";
  var formEmail = "&entry.1866237547=";
  var formTel = "&entry.1072990755=";
  var formMessage = "&entry.1419308416=";
  var formContact = "&entry.1594901940=";
  var formHora = "&entry.1569716263="
  var formNewsletter = "&entry.1730461247="

  var completeName = document.getElementById('nomesobrenome').value;

  const palavras = completeName.split(" ");

  for (let i = 0; i < palavras.length; i++) {
      palavras[i] = palavras[i][0].toUpperCase() + palavras[i].slice(1).toLowerCase();
  }

var respostaName = encodeURI(palavras.join(" "));

  var respostaEmail = encodeURI(document.getElementById('email').value);
  var respostaTel = encodeURI(document.getElementById('telefone').value);
  var respostaMessage = encodeURI(document.getElementById('mensagem').value[0].toUpperCase() + document.getElementById('mensagem').value.slice(1).toLowerCase());
  var respostaContact = $('input[type=radio]:checked')[0].value;
  var respostaHora = encodeURI($('#horario').val());
  var capitalize = ""

  if( $('#newsletter').is(':checked') ){
    capitalize = "sim"
    
  } else{
    capitalize = "não"
  }
  
  const respostaNewsletter = encodeURI(capitalize[0].toUpperCase() + capitalize.slice(1).toLowerCase());

  var myURLCompleta = myURL+formName+respostaName+formEmail+respostaEmail+formTel+respostaTel+
  formMessage+respostaMessage+formContact+respostaContact+formHora+respostaHora+formNewsletter+respostaNewsletter;

  const url = new URL(myURLCompleta);
    document.getElementById('formularios').action = myURLCompleta;
}

