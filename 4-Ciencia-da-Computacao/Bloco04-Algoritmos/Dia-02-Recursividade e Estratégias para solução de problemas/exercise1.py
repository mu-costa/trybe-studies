def how_many_even_recursion(n, list=[]):
    if n == 1:
        return list
    if n % 2 == 0:
        list.append(n)
    return how_many_even_recursion(n - 1, list)


# def how_many_even(n):
#    evens = [num for num in range(1, n + 1) if num % 2 == 0]
#    return len(evens)

print(how_many_even_recursion(10))