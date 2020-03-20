from queue import PriorityQueue
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    

person1 = Person("a", 10)
person2 = Person("b", 20)
person3 = Person("c", 30)
person4 = Person("d", 40)
person5 = Person("e", 50)

pq = PriorityQueue()

pq.put((5, person1))
pq.put((3, person3))
pq.put((1, person5))
pq.put((4, person2))
pq.put((2, person4))

while not pq.empty():
    print(pq.get()[1].name)
