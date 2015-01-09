#Joseph Dykstra
#2014-11-04

#Number Of Divisors In A Range
#http://programmingpraxis.com/2014/10/28/number-of-divisors-in-a-range/

# The interview question was to find the number of integers between x and y
# that are divisible by n; you may assume that x, y and n are all positive and
# that x < y. I know the simple way to solve this is to loop over the range
# from x to y, like this:
#
#    for(int i=x;i<=y;i++) if(i%n ==0) counter++;
#
# but that is slow when the range is large, e.g. x = 0 and y = 3000000000.
#
# There must be some method that lets me reduce the number of iterations and
# optimize the code. Can someone please help me with that?
#
# Your task is to help the candidate get the job by proposing a better algorithm
# to solve the problem.


def numOfDivisors(low, high, n):
	return (high//n - low//n) + (low%n == 0)


print "should be 2:  " + str(numOfDivisors(0, 3, 3))
print "should be 1:  " + str(numOfDivisors(2, 3, 3))
print "should be 1:  " + str(numOfDivisors(0, 3, 5))
print "should be 0:  " + str(numOfDivisors(1, 3, 5))
print "should be 4:  " + str(numOfDivisors(0, 10, 3))
print "should be 10: " + str(numOfDivisors(0, 9, 1))
print "should be 2:  " + str(numOfDivisors(0, 3, 2))

