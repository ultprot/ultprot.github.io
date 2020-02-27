import enum
class Color(enum.Enum):
    WHITE = 0
    RED = 1
    BLACK = 2

color = Color.WHITE
if color == Color.WHITE:
    print("WHITE")
elif color == Color.RED:
    print("RED")
elif color == Color.BLACK:
    print("BLACK")