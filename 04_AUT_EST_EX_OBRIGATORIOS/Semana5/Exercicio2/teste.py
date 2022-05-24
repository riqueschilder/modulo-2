v = input('Escolha um numero')
l = 0
cem = 0
cinquenta = 0
vinte = 0
dez = 0
cinco = 0
dois = 0
um = 0
lista = [100, 50, 20, 10, 5, 2, 1]
while True:
    if v >= lista[l]:
        v - lista[l]
        if l == 0:
            cem += 1
        if l == 1:
            cinquenta += 1
        if l == 2:
            vinte += 1
        if l == 3:
            dez += 1
        if l == 4:
            cinco += 1
        if l == 5:
            dois += 1
        if l == 6:
            um += 1
    else:
        l += 1 
    if v == 0:
        break
    break 
print("Você vai usar:" + cem +"notas de 100," + cinquenta + "notas de 50, " + vinte + "notas de 20," + dez + "notas de 10," + cinco + "notas de 5" + dois + +"notas de 2," + um + +"notas de 1" )