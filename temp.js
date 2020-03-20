class Problem{
    constructor(numbers){
        this.numbers = numbers;
        this.numbers.sort((a,b) => {
            return a - b;
        });
    }

    find(target){
        let l = 0;
        let r = this.numbers.length - 1
        while(l<=r){
            let m = parseInt((l+r)/2)
            if(target === this.numbers[m]){
                return true;
            }else if(target<this.numbers[m]){
                r = m - 1
            }else{
                l = m + 1
            }
        }
        return false;
    }
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const lines = [];

rl.on("line", line=>{
    lines.push(line);
}).on("close", ()=>{
    const numbers = lines[1].split(' ').map(x => Number(x));
    const targets = lines[3].split(' ').map(x => Number(x));

    const problem = new Problem(numbers);

    targets.map(x=>{
        if(problem.find(x) === true){
            console.log(1);
        }else{
            console.log(0);
        }
    })
});