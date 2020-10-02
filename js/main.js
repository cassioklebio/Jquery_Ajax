function consultaCep() {
    var cep = document.getElementById("cep").value;
    var APiurl = "https://viacep.com.br/ws/" + cep + "/json/";

    $.ajax({
        url: APiurl, //"https://viacep.com.br/ws/14800390/json/",
        type: "GET",
        success: function (response) {
            console.log(response);
            $("#logradouro").html(response.logradouro);
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;

        }
    })
}
