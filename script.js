function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO]: Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            gênero = 'Homem'
            
            if(idade >=0 && idade < 10){
                img.setAttribute('src', '/imagens/criancaMasculina.png')
            }else if(idade < 21){
                img.setAttribute('src', '/imagens/jovemMasculino.png')
            }else if (idade < 50){
                img.setAttribute('src', '/imagens/adultoMasculino.png')
            }else{
                img.setAttribute('src', '/imagens/idosoMasculino.png')
            }

        }else if(fsex[1].checked){
            gênero = 'Mulher'

            if(idade >=0 && idade < 10){
                img.setAttribute('src', '/imagens/criancaFeminina.png')
            }else if(idade < 21){
                img.setAttribute('src', '/imagens/jovemFeminina.png')
            }else if (idade < 50){
                img.setAttribute('src', '/imagens/adultoFeminino.png')
            }else{
                img.setAttribute('src', '/imagens/idosaFeminina.png')
            }

        }
        
    }

   res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
   res.appendChild(img)

}