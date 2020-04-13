class Problem{
    constructor(distance, rocks, n){
        this.distance = distance;
        this.rocks = rocks;
        this.n = n;
        this.rocks.sort((a,b)=>{
            return a-b;
        });
    }

    isSatisfied(key){
        let prev = 0;
        let count = 0;
        for(let i = 0;i<this.rocks.length;i++){
            if(this.rocks[i] - prev < key){
                count++;
            }else{
                prev = this.rocks[i];
            }
        }
        if(this.distance - prev < key){
            count++;
        }
        if(count>this.n){
            return false;
        }else{
            return true;
        }
    }

    binarySearch(){
        let l = 0;
        let r = this.distance;
        let answer = 0;
        while(l<=r){
            let mid = parseInt((l+r)/2);
            if(this.isSatisfied(mid)){
                answer = mid;
                l = mid+1;
            }else{
                r = mid-1;
            }
        }
        return answer;
    }
}

function solution(distance, rocks, n){
    var answer = 0;
    const problem = new Problem(distance, rocks, n);
    answer = problem.binarySearch();
    return answer;
}