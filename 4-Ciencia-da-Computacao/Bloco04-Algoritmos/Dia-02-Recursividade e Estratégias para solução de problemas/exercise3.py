def find_the_bigger_integer(list, bigger=0, cont=0):
    max = len(list) - 1
    if cont < max:
        cont += 1
        if list[cont] > bigger:
            bigger = list[cont]
        return find_the_bigger_integer(list, bigger, cont)
    if cont == max:
        return bigger


print(find_the_bigger_integer([1,24,3,1011,900]))