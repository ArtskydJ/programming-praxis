#Joseph Dykstra
#2013-04-25

#Integer Roots
#http://programmingpraxis.com/2013/04/19/integer-roots/

# The integer root function, iroot(k, n) returns the largest integer x such that
# x^k does not exceed n, assuming k and n are both positive integers. For
# example, iroot(3, 125) equals 5, because 5^3 equals 125; likewise,
# iroot(3, 126) equals 5, but iroot(3, 124) is 4, because 5^3 is greater than
# 124.

def iroot(root,num):
    stay=1
	a=1
    while (stay==1):
        if ((a**root)>num): stay=0
        else: a+=1
    return a-1


print (iroot(3,124)) #should be 4
print (iroot(3,125)) #should be 5
print (iroot(3,126)) #should be 5
print("")
print (iroot(4,13))  #should be 1
print (iroot(4,16))  #should be 2
print (iroot(4,19))  #should be 2
print("")
print (iroot(2,1000))#should be 31
print (iroot(3,90))  #should be 4
print("")
print (iroot(4,80))  #should be 2
print (iroot(4,81))  #should be 3
print (iroot(4,82))  #should be 3
