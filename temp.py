from sys import stdin

class Problem:
    def __init__(self):
        self.n = stdin.readline()
        self.given = stdin.readline().rstrip().split()
        self.m = stdin.readline()
        self.when = stdin.readline().rstrip().split()
        self.mp = {}
        for value in self.given:
            if value in self.mp:
                self.mp[value] = self.mp[value]+1
            else:
                self.mp[value] = 1
    
    def getAnswer(self, key):
        return self.mp[key]

    def printAnswers(self):
        answer = 0
        for value in self.when:
            if value in self.mp:
                answer = self.mp[value]
            else:
                answer = 0
            print(answer, end = ' ')

problem = Problem()
problem.printAnswers()
