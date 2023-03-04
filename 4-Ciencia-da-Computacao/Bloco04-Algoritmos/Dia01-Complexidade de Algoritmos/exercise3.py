import random


def calculate_average(n):  # O (n^2) 
    sum = 0
    cont = 0
    while cont < n:  # O (n)
        new_number = random.randint(0, 9)  # O (n)
        sum += new_number
        cont += 1
    return sum / n


def generate_random_numbers(n):
    arr = []
    cont = 0
    while cont < 100:  # O(1)
        arr.append(calculate_average(n))
        cont += 1

    return arr


print(generate_random_numbers(2))
print(len(generate_random_numbers(2)))