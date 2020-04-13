class Problem:
    def __init__(self, distance, rocks, n):
        self.distance = distance
        self.rocks = rocks
        self.rocks.sort()
        self.n = n

    def isSatisfied(self, key):
        prev = 0
        count = 0
        for rock in self.rocks:
            if rock - prev < key:
                count+=1
            else:
                prev = rock
        if self.distance - prev < key:
            count+=1
        if count > self.n:
            return False
        else:
            return True

    def binarySearch(self):
        l = 0
        r = self.distance
        answer = 0
        while l<=r:
            mid = (l+r)//2
            if self.isSatisfied(mid):
                answer = mid
                l = mid+1
            else:
                r = mid-1
        return answer
        
def solution(distance, rocks, n):
    answer = 0
    problem = Problem(distance, rocks, n)
    answer = problem.binarySearch()
    return answer