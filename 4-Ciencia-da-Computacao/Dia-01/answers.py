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
    total_liters = size_wall / 3
    final_price = 0
    if total_liters <= 18:
        final_price = 80,00
        return (1, final_price)
    else:
        total_tin = math.sqrt(18 * (total_liters ** 2) / )


print(list_of_names(["José","Lucas","Nádia","Fernanda","Cairo","Joana"]))