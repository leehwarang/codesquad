#반쪽덧셈(halfadder) : 입력을 두 개 받아서, 합(sum)과 자리올림(carry)를 배열로 리턴하는 함수
def half_Adder(bitA, bitB):

    sum = bitA ^ bitB #XOR연산: 두 값이 같으면 0, 같지 않으면 1 반환
    carryout = bitA & bitB
    
    return [sum, carryout]

print(half_Adder(0, 0))
print(half_Adder(0, 1))
print(half_Adder(1, 0))
print(half_Adder(1, 1))

#전체덧셈(fulladder) : 두 개의 입력과 자리올림 비트를 입력으로 받아서, 합(sum)과 자리올림(carry)를 배열로 리턴하는 함수
def full_Adder(bitA, bitB, carryIn):
    result1 = half_Adder(bitA, bitB)
    result2 = half_Adder(carryIn, result1[0])
    
    sum = result2[0]
    carryout = result2[1] | result1[1]

    return [sum, carryout]
    
print(full_Adder(0,0,0))
print(full_Adder(0,0,1))
print(full_Adder(0,1,0))
print(full_Adder(1,0,0))
print(full_Adder(0,1,1))
print(full_Adder(1,1,0))
print(full_Adder(1,0,1))
print(full_Adder(1,1,1))


        
    