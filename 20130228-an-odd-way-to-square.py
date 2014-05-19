# Joseph Dykstra
# 2013-02-28

# An Odd Way To Square
# http://programmingpraxis.com/2013/02/26/an-odd-way-to-square/

# Write a function that takes a positive integer n and returns n-squared. You
# may use addition and subtraction but not multiplication or exponentiation.

def square(n):
    b=0
    for i in range(n):
        b+=n
    return b

print(square(201))
