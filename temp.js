class Problem{
    constructor(a, b, c){
        this.a = BigInt(a);
        this.b = Number(b);
        this.c = BigInt(c);
    }

    getAnswer(cb){
        let temp = BigInt(0);
        if(cb == 1){
            temp = this.a;
        }else{
            temp = this.getAnswer(parseInt(cb/2));
            temp *= temp;
            temp %= this.c;
            if(cb%2 !== 0){
                temp *= (this.a % this.c);
            }
        }
        return temp % this.c;
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