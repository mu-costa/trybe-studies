# Escreva um algoritmo recursivo para encontrar o máximo divisor 
# comum (mdc) de dois inteiros.

def max_mdc(num1, num2, mdc=1, cont=1):
    biggest = num1 if num1 > num2 else num2
    if cont <= biggest:
        if num1 % cont == 0 and num2 % cont == 0:
            mdc = cont
            cont += 1
            return max_mdc(num1, num2, mdc, cont)
        else:
            cont += 1
            return max_mdc(num1, num2, mdc, cont)
    
    if cont > biggest:
        return mdc
    

print(max_mdc(20, 24))
         