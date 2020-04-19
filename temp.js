class Problem{
    constructor(given, when){
        this.given = given;
        this.when = when;
        this.mp = {};
        for(const value of this.given){
            if(this.mp.hasOwnProperty(value)){
                this.mp[value]++;
            }else{
                this.mp[value] = 1;
            }
        }
    }

    getAnswer(key){
        if(this.mp.hasOwnProperty(key)){
            return String(this.mp[key]);
        }else{
            return '0';
        }
    }

    getAnswers(){
        let answer = '';
        for(const value of this.when){
            answer+=this.getAnswer(value);
            answer+=' ';
        }
        return answer;
    }
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputs = []

rl.on("line", line=>{
    inputs.push(line);
}).on("close", ()=>{
    const given = inputs[1].split(' ')
    const when = inputs[3].split(' ')
    
    const problem = new Problem(given, when);
    console.log(problem.getAnswers());
});
