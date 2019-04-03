def dex2bin(num):
    answer = []
    
    while (num >= 1):
        answer.append(num % 2)
        num = num // 2
    return answer

print(dex2bin(10))
print(dex2bin(173))
