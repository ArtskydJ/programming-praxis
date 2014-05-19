# Joseph Dykstra
# 2013-02-28

# An Odd Way To Square
# http://programmingpraxis.com/2013/02/26/an-odd-way-to-square/

def square(n):
    b=0
    for i in range(n):
        b+=n
    return b

print(square(201))
