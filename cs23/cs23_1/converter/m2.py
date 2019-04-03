def bin2dec(binary_arr):
    answer = 0
    for index, binary in enumerate(binary_arr):
        answer += (pow(2, index) * binary)
    return answer

print(bin2dec([0, 1, 1, 1]))
print(bin2dec([1,1,1,1,0,1,0,1]))