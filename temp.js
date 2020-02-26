class Problem{
    constructor(n){
        this.n = n;
        this.stars = new Array(n);
        for(let i = 0;i<n;i++){
            this.stars[i] = new Array(n);
            for(let j = 0;j<n;j++){
                this.stars[i][j] = ' ';
            }
        }
    }
    makeUnit(vert, hori){
        for(let i = 0;i<3;i++){
            for(let j = 0;j<3;j++){
                this.stars[vert+i][hori+j] = '*';
            }
        }
        this.stars[vert+1][hori+1] = ' ';
    }
    makeStars(n, vert, hori){
        if(n === 3){
            this.makeUnit(vert, hori);
        }else{
            const newN = parseInt(n/3);
            for(let i=0;i<3;i++){
                for(let j=0;j<3;j++ ){
                    if(i === 1 && j === 1){
                        continue;
                    }else{
                        this.makeStars(newN, 
                            vert+newN*i, 
                            hori+newN*j);
                    }
                }
            }
        }
    }
    printStars(){
        this.makeStars(this.n, 0, 0);
        for(let i = 0;i<this.n;i++){
            for(let j = 0;j<this.n;j++){
                process.stdout.write(this.stars[i][j]);
            }
            process.stdout.write('\n');
        }
    }
}

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let n;

rl.on("line", line=>{
    n = Number(line)
}).on("close", ()=>{
    const problem = new Problem(n);
    problem.printStars();
})