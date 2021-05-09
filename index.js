const perguntas = [
    'pergunta um',
    'pergunta dois',
    'pergunta tres',
]

const ask = ( index = 0 ) => {
    process.stdout.write(perguntas[index] + "\n")
}

ask()

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if(answers.length < perguntas.length){
        
        ask(answers.length)
    }else{
        console.log(answers)
        process.exit()
    }
})