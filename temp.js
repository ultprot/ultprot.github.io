class Problem{
    constructor(n, m){
        this.n = Number(n);
        this.m = Number(m);
        this.answer = new Array(m);
        for(let i = 0;i<this.answer.length;i++){
            this.answer[i] = 0;
        }
        this.used = new Array(n);
        for(let i = 0;i<this.used.length;i++){
            this.used[i] = false;
        }
    }

    printAnswer(){
        let answerNum = ''
        for(let i = 0;i<this.answer.length;i++){
            answerNum+=String(this.answer[i])
            answerNum+=' '
        }
        console.log(answerNum);
    }

    makeAnswer(index){
        if(index == this.answer.length){
            this.printAnswer();
            return;
        }

        for(let i=1;i<=this.n;i++){
            if(
                index == 0 || 
                (
                    !this.used[i-1] && 
                    this.answer[index - 1] < i
                )
            ){
                this.answer[index] = i;
                this.used[i-1] = true;
                this.makeAnswer(index+1);
                this.used[i-1] = false;
                this.answer[index] = 0;
            }
        }
        return;
    }

    printAnswers(){
        this.makeAnswer(0);
        return;
    }
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n, m;

rl.on("line", line=>{
    const inputs = line.split(' ');
    n = Number(inputs[0]);
    m = Number(inputs[1]);
}).on("close", ()=>{
    const problem = new Problem(n, m);
    problem.printAnswers();
})

