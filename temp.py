class Problem:
    def __init__(self, n, m):
        self.n = n
        self.m = m
        self.answer = [0 for _ in range(m)]
        self.used = [False for _ in range(n)]

    def printAnswer(self):
        for number in self.answer:
            print(number,end=' ')
        print()

    def makeAnswer(self, index):
        if index == len(self.answer):
            self.printAnswer()
            return
        for i in range(1, n+1):
            if index == 0 or (self.used[i-1] == False and self.answer[index-1]<i):
                self.answer[index] = i
                self.used[i-1] = True
                self.makeAnswer(index+1)
                self.used[i-1] = False
                self.answer[index] = 0
        return

    def printAnswers(self):
        self.makeAnswer(0)
        return


n, m = map(int, input().split())
problem = Problem(n, m)
problem.printAnswers()