def half_Adder(bitA, bitB):

    sum = bitA ^ bitB #XOR연산: 두 값이 같으면 0, 같지 않으면 1 반환
    carryout = bitA & bitB
    
    return [sum, carryout]

#전체덧셈(fulladder) : 입력을 두 개와 자리올림 비트를 입력으로 받아서, 합(sum)과 자리올림(carry)를 배열로 리턴하는 함수
def full_Adder(bitA, bitB, carryIn):
    result1 = half_Adder(bitA, bitB)
    result2 = half_Adder(carryIn, result1[0])
    
    sum = result2[0]
    carryout = result2[1] | result1[1]

    return [sum, carryout]

def bit8_Adder(byteA, byteB):
    
    answer = []
    carryIn = 0

    for bitA, bitB in zip(byteA, byteB):
        # print("======bitA:{}, bitB:{}, carryIn:{}===========".format(bitA, bitB, carryIn))
        result = full_Adder(bitA, bitB, carryIn)
        answer.append(result[0])
        carryIn = result[1]
    answer.append(result[1])
    
    return answer


bit8_Adder([1, 1, 0, 1, 1, 0, 1, 0], [1, 0, 1, 1, 0, 0, 1, 1])
bit8_Adder([1, 1, 0, 0, 1, 0, 1, 0], [1, 1, 0, 1, 1, 0, 0, 1])