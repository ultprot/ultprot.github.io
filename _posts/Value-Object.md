---
title: "Value Object"
categories:
  - Language
---
## Value Object
vo가 무엇인지 간단하게 적어보았다.

### Reference Object와 Value Object 
객체의 동일성을 평가할 때의 기준으로 객체를 두가지로 나누어 볼 수 있다. 객체가 그 객체를 참조할 수 있는 정보를 기준으로 동일성을 평가 받는다면 Reference Object, 객체를 구성하는 값을 기준으로 동일성을 평가 받는다면 Value Object라고 할 수 있다.

가령 주문 번호, 주문 물품, 주문 수량, 주문자 정보를 갖는 주문 객체를 생각해 보면 이는 Reference객체의 성격을 갖는다고 할 수 있다.주문 물품이나 수량에 대한 정보가 달라지더라도 주문 번호가 같다면 같은 주문이라고 볼 수 있기 때문이다. 

하지만 x축 값과 y축 값을 갖는 2차원 좌표 객체를 생각해보면 이는 Value Object의 성격을 갖는다. x축의 값과 y축의 값이 같은 두 객체는 같다고 볼 수 있기 때문이다.

### Aliasing Bug
Value Object에서는 두 객체가 같은 reference를 갖고 있는지 아닌지가 중요하지 않다. 한 객체에 다른 객체를 대입하고 한쪽에서 값을 변경하면 다른쪽에서도 값이 변경되는 Aliasing Bug가 발생한다. 

따라서 value object는 immutable이어야 한다. 어떠한 Setter도 제공하지 않는 것으로 이를 달성할 수 있다. 또한 대입시 항상 복사하도록 해야 한다.
