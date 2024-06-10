let resposta = document.getElementById("resposta")

function cal_vol_cilindro(){
    let altura = Number (document.getElementById('altura').value)
    let raio = Number (document.getElementById('raio').value)

    console.log("alt = " + altura + "raio = " + raio)

    let vol = (Math.PI) * raio * raio * altura

    console.log("O volume do cilindro é = " + vol + "m3")

    resposta.innerHTML = "O volume do cilindro é = " + vol.toFixed(2) + "m3"
    resposta.style.fontSize = "1.25rem"
    resposta.style.fontWeight = "bold"
    }
    