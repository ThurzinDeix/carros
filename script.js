let sv = document.querySelector('#sv')
let sf = document.querySelector('#sf')
let img = document.querySelector('#img')
let cont = 1
let resp = document.querySelector("#resp")
let nome = document.querySelector("#nome")
let ni =  document.querySelector("#ni")
let nf = document.querySelector("#nf")
let bot = document.querySelector('#botao')
let res = document.querySelector('#res')

sv.addEventListener("click", voltar)

function voltar(){
    if (cont == 1){
        cont = 6
        img.src = `img/${cont}.png`
    } else {
        cont --
        img.src = `img/${cont}.png`
    }

    ccp()
    nc()
}

sf.addEventListener("click", ir)

function ir(){
    if (cont == 6){
        cont = 1
        img.src = `img/${cont}.png`
    } else {
        cont ++
        img.src = `img/${cont}.png`
    }

    ccp()
    nc()
}

function ccp(){
    if (cont == 1 || cont == 3){
        resp.innerHTML = " 7"
    } else if (cont == 2 || cont == 5){
        resp.innerHTML = " 3"
    } else if (cont == 4){
        resp.innerHTML = " 2"
    } else{
        resp.innerHTML = " 1"
    }
}

function nc(){
    if (cont == 1){
        nome.innerHTML = "McQueen"
    } else if (cont == 2){
        nome.innerHTML = "Doc Hudsom"
    } else if (cont == 3){
        nome.innerHTML = "Strip Weathers"
    } else if (cont == 4){
        nome.innerHTML = "Jackson Storm"
    } else if (cont == 5){
        nome.innerHTML = "Cruz Ramirez"
    } else {
        nome.innerHTML = "Chick Hicks"
    }
}

bot.addEventListener("click", contar)

function contar(){
    let i = Number(ni.value)
    let f = Number(nf.value)

    res.innerHTML = ''

    if (i > f){
        for (let cont2 = i; cont2 >= f; cont2--){
            res.innerHTML += `${cont2} `
        }
    } else {
        for (let cont2 = i; cont2 <= f; cont2++){
            res.innerHTML += `${cont2} `
        }
    }
}