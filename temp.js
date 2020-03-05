class Problem{
    constructor(numbers, target){
        this.numbers = numbers;
        this.target = target;
        this.last = numbers.length;
        this.answer = 0;
    }

    newRound(round, value){
        if(round === this.last){
            if(value === this.target){
                this.answer++;
            }
        }else{
            const current = this.numbers[round];
            const plus = value+current;
            const minus = value-current;
            round++;
            this.newRound(round, plus);
            this.newRound(round, minus);
        }
    }

    getAnswer(){
        this.newRound(0,0);
        return this.answer;
    }
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let a, b, c;

rl.on("line", line=>{
    const inputs = line.split(' ');
    a = BigInt(inputs[0]);
    b = Number(inputs[1]);
    c = BigInt(inputs[2]);
}).on("close", ()=>{
    const problem = new Problem(a, b, c);
    console.log(problem.getAnswer(b).toString(10));
});