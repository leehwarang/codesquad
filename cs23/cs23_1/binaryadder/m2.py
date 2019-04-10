import m1 

def bit8_Adder(byteA, byteB):
    
    answer = []
    carryIn = 0

    for bitA, bitB in zip(byteA, byteB):
        # print("======bitA:{}, bitB:{}, carryIn:{}===========".format(bitA, bitB, carryIn))
        result = m1.full_Adder(bitA, bitB, carryIn)
        answer.append(result[0])
        carryIn = result[1]
    answer.append(result[1])
    
    return answer

print(bit8_Adder([1, 1, 0, 1, 1, 0, 1, 0], [1, 0, 1, 1, 0, 0, 1, 1]))
print(bit8_Adder([1, 1, 0, 0, 1, 0, 1, 0], [1, 1, 0, 1, 1, 0, 0, 1]))