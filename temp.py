class Problem:
    def __init__(self, array, commands):
        self.array = array
        self.commands = commands

    def getAnswer(self, command):
        start = command[0] - 1
        end = command[1]
        target = command[2] - 1
        newArray = self.array[start:end]
        newArray.sort()
        return newArray[target]

    def getAnswers(self):
        answers = [0 for _ in range(len(self.commands))]
        for i, command in enumerate(self.commands):
            answers[i] = self.getAnswer(command)
        return answers


def solution(array, commands):
    answer = []
    problem = Problem(array, commands)
    answer = problem.getAnswers()
    return answer