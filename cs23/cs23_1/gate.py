def nandGate(paramA, paramB):
    if paramA == 1 and paramB == 1:
        return 0
    else: 
        return 1

def norGate(paramA, paramB):
    if paramA == 1 or paramB == 1:
        return 0
    else:
        return 1

def xorGate(paramA, paramB): #XOR연산: 두 값이 같으면 0, 같지 않으면 1 반환 
    if paramA == paramB:
        return 0
    else:
        return 1


