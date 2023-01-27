import math

def greater_than_two (num1, num2):
    if num1 > num2:
        return num1
    else:
        return num2

def average_value_of_a_list(list):
    sum = 0
    length = len(list)
    print(length)
    for value in list:
        sum = sum + value
    print(sum / length)
    return sum / length

def square_of_asterisks(n):
    for row in range(n):
        print(n * '*')


def list_of_names(names):
    bigger = 0
    for name in names:
        if len(name) > len(names[bigger]):
            bigger = names.index(name)
    return names[bigger]

def coverage_of_ink(size_wall):
    # primeiro calcular a quantidade de litros
    total_of_liters = round(size_wall / 3, 2)
    tin = 18
    if total_of_liters <= tin:
        return ('1 lata', '80 reais')
    else:
        total_of_tins = math.ceil(total_of_liters / tin)
        return (f"Total de latas: {total_of_tins}", f"Valor final {total_of_tins * 80} reais")

def types_of_triangles(x,y,z):
    if x + y + z != 180:
        return "não é triangulo"
    elif x == y and x == z and y == z:
        return "triangulo equilatero"
    elif x == y or x == z or y == z:
        return "triangulo isósceles"
    else:
        return "triangulo escaleno"
