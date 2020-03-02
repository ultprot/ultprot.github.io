a, b, c = map(int, input().split(' '))
class Problem:
    def __init__(self, a, b, c):
        self.a = a
        self.b = b
        self.c = c
    def getAnswer(self, cb):
        temp = 0
        if(cb == 1):
            temp = self.a
        else:
            temp = self.getAnswer(cb//2)
            temp *= temp
            temp %= self.c
            if cb % 2 != 0:
                temp *= (self.a % self.c)
        return temp % self.c

problem = Problem(a, b, c)
print(problem.getAnswer(b))