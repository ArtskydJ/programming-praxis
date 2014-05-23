#Joseph Dykstra
#2013-06-04

#Egyption Fractions
#http://programmingpraxis.com/2013/06/04/egyptian-fractions/

# An Egyptian fraction was written as a sum of unit fractions, meaning the
# numerator is always 1; further, no two denominators can be the same. As easy
# way to create an Egyptian fraction is to repeatedly take the largest unit
# fraction that will fit, subtract to find what remains, and repeat until the
# remainder is a unit fraction. For instance, 7 divided by 15 is less than 1/2
# but more than 1/3, so the first unit fraction is 1/3 and the first remainder
# is 2/15. Then 2/15 is less than 1/7 but more than 1/8, so the second unit
# fraction is 1/8 and the second remainder is 1/120. That’s in unit form, so we
# are finished: 7 ÷ 15 = 1/3 + 1/8 + 1/120. There are other algorithms for
# finding Egyptian fractions, but there is no algorithm that guarantees a
# maximum number of terms or a minimum largest denominator; for instance, the
# greedy algorithm leads to 5 ÷ 121 = 1/25 + 1/757 + 1/763309 + 1/873960180913
# + 1/1527612795642093418846225, but a simpler rendering of the same number is
# 1/33 + 1/121 + 1/363.

#constants
tries=5
num = 7
den = 12
NOanswersAllowed = 10


frac = num/den #float
answer = bytearray([NOanswersAllowed,tries]) #int array

num = 7  #int(input('Numerator: '))
den = 15 #int(input('Denominator : '))
looped1=0
looped2=0
looped1.int = 0 #int
looped2.int = 0 #int
while looped1<NOanswersAllowed:
	while looped2<tries:
		answer[looped1,looped2]=0
		looped2+=1
	looped1+=1
	looped2=0

while looped1<tries:
	while frac>0 and looped2<NOanswersAllowed:
		exit=false #bool
		n=1 #int
		while exit==false:
			if (1/n+1)>frac:
				exit=true
			else:
				n+=1
		answer[looped2,looped1]=n
		frac=frac-(1/n)
		looped2+=1
	looped1+=1
	looped2=0

looped1=0 #reset
looped2=0 #reset
while looped1<NOanswersAllowed:
	while looped2<tries:
		print('1/',answer[looped1,looped2])
		looped2+=1
	print()
	looped1+=1
	looped2=0
