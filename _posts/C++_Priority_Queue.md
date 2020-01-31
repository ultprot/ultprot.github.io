# C++ priority_queue
```cpp
#include <iostream>
#include <queue>
#include <string>
#include <queue>
using namespace std;

class Person {
private:
	string name;
	int age;
public:
	Person() {

	}
	Person(string name, int age) {
		this->name = name;
		this->age = age;
	}
	string getName() const {
		return this->name;
	}
	int getAge() const {
		return this->age;
	}
	void setName(string name) {
		this->name = name;
	}
	void setAge(int age) {
		this->age = age;
	}
};
class ComparePerson {
public:
	bool operator()(const Person& a, const Person& b) const {
		return a.getName() < b.getName();
	}
};

int main(void) {
	//priority_queue
	priority_queue<Person, vector<Person>, ComparePerson> pq;
	//or priority_queue<int> pq;

	//push(element)
	pq.push(Person("a", 10));
	pq.push(Person("b", 20));
	pq.push(Person("c", 5));
	pq.push(Person("d", 6));
	pq.push(Person("e", 15));
	pq.push(Person("f", 17));

	//pop()
	pq.pop();
	pq.pop();

	//top()
	cout << "pq top: " << pq.top().getName()<<", "<<pq.top().getAge() << "\n";

	//empty(), size()
	if (!pq.empty()) cout << "pq size: " << pq.size() << "\n";

	//pop all
	while (!pq.empty()) {
		cout << pq.top().getName() << ", "<<pq.top().getAge()<<" ";
		pq.pop();
	}

	cout << "\n";

	return 0;
}
```