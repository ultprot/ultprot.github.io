a, b, c = map(int, input().split(' '))
class Problem:
    def __init__(self, numbers, target):
        self.numbers = numbers
        self.target = target
        self.last = len(numbers)
        self.answer = 0
    
    def newRound(self, round, value):
        if round == self.last:
            if value == self.target:
                self.answer+=1
        else:
            current = self.numbers[round]
            plus = value+current
            minus = value-current
            round+=1
            self.newRound(round, plus)
            self.newRound(round, minus)
        return
    
    def getAnswer(self):
        self.newRound(0,0)
        return self.answer

problem = Problem(a, b, c)
print(problem.getAnswer(b))