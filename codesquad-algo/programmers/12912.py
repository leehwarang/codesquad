def solution(a, b):
    if a == b:
        return a
    elif a < b:
        sum = 0
        for i in range(a, b+1):
            sum += i
        return sum
    else:
        sum = 0
        for i in range(b, a+1):
            sum += i
        return sum 
            
print(solution(3, 5))
print(solution(3, 3))
print(solution(5, 3))

