const handlePhone = (event) => {
  let input = event.target
  input.value = phoneMask(input.value)
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
  var formNewsletter = "&entry.1730461247="

  var respostaName = encodeURI(document.getElementById('nomesobrenome').value);
  var respostaEmail = encodeURI(document.getElementById('email').value);
  var respostaTel = encodeURI(document.getElementById('telefone').value);
  var respostaMessage = encodeURI(document.getElementById('mensagem').value);
  var capitalized = $('input[type=radio]:checked')[0].value
  var capitalizeNewsletter = ""

  if( $('#newsletter').is(':checked') ){
    capitalizeNewsletter = "sim"
    
  } else{
    capitalizeNewsletter = "não"
  }
  
  const respostaNewsletter = encodeURI(capitalizeNewsletter[0].toUpperCase() + capitalizeNewsletter.substr(1));

  const respostaContact = capitalized[0].toUpperCase() + capitalized.substr(1);

  var myURLCompleta = myURL+formName+respostaName+formEmail+respostaEmail+formTel+respostaTel+
  formMessage+respostaMessage+formContact+respostaContact+formNewsletter+respostaNewsletter;

  const url = new URL(myURLCompleta);
    document.getElementById('formularios').action = myURLCompleta;
}

