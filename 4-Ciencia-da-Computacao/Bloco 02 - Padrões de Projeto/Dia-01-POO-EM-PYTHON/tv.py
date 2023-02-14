class TV ():
    def __init__(self, tamanho):
        self.volume = 50
        self.canal = 1
        self.tamanho = tamanho
        self.ligada = False
    
    def aumentar_volume(self):
        if self.volume == 99:
            self.volume = 99
        else:
            self.volume += 1
    
    def diminuir_volume(self):
        if self.volume == 0:
            self.volume = 0
        else:
            self.volume -= 1
    
    def modificar_canal(self, new_canal):
        if self.canal < 0:
            raise ValueError("Valor fora dos limites")
        else:
            self.canal = new_canal
    
    def ligar_desligar(self):
        if self.ligada:
            self.ligada = False
        else:
            self.ligada = True


tv1 = TV('39 polegadas')

tv1.aumentar_volume()
tv1.ligar_desligar()
print(tv1.volume)
print(tv1.ligada)
tv1.ligar_desligar()

print(tv1.ligada)
