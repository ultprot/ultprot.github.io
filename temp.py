class Problem():
    def __init__(self, n):
        self.n = n
        self.stars = [
            [' ' for _ in range(self.n)]
            for _ in range(self.n)
        ]
    
    def makeUnit(self, vert, hori):
        for i in range(vert, vert+3):
            for j in range(hori, hori+3):
                self.stars[i][j] = '*'
        self.stars[vert+1][hori+1] = ' '

    def makeStars(self, vert, hori, n):
        if n == 3:
            self.makeUnit(vert, hori)
        else:
            newN = n//3
            self.makeStars(vert, hori, newN)
            self.makeStars(vert, hori+newN, newN)
            self.makeStars(vert, hori+newN*2, newN)
            self.makeStars(vert+newN,hori, newN )
            self.makeStars(vert+newN, hori+newN*2, newN)
            self.makeStars(vert+newN*2, hori, newN)
            self.makeStars(vert+newN*2, hori+newN, newN)
            self.makeStars(vert+newN*2, hori+newN*2, newN)
    
    def drawStars(self):
        self.makeStars(0,0,self.n)
        for i in self.stars:
            for j in i:
                print(j, end='')
            print()

n = int(input())
problem = Problem(n)
problem.drawStars()
