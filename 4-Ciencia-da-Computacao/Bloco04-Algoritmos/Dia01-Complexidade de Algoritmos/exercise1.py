def contains_duplicate(numbers):
    numbers.sort()  # O (n . log n)
    previous_number = 'not a number'
    for number in numbers: # O (n)
        if (previous_number == number):
            return True
        previous_number = number

    return False

# A ordem de complexidade deste algoritmo é de O(n . log n)
# pior caso: O(n)
# medio caso e melhor caso : O(n . log n)

