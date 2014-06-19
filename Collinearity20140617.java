//Joseph Dykstra
//2014-06-18

//Collinearity
//http://programmingpraxis.com/2014/06/17/collinearity/

//Your task is to write a function that takes three points in the x,y plane and
//determines if they are collinear; be sure to handle vertical lines and
//horizontal lines properly.

public class Collinearity20140617 {
	public static int collinear(int x1, int y1, int x2, int y2, int x3, int y3) {
		if (x1 == x2 && x2 == x3)
			return 1;
		if (y1 == y2 && y2 == y3)
			return 1;
		int dx12 = (x1-x2),
			dy12 = (y1-y2),
			dx23 = (x2-x3),
			dy23 = (y2-y3);
		System.out.printf("dx1&2:%d, dy1&2:%d, dx2&3:%d, dy2&3:%d", dx12, dy12, dx23, dy23);
		System.out.printf("dx1&2-dy1&2:%d, dx2&3-dy2&3:%d", dx12-dy12, dx23-dy23);
	}
}

System.out.printf(collinear(0, 1, 1, 3, 3, 7)); //should be true
System.out.printf(collinear(0, 1, 1, 3, 3, 5)); //should be false
