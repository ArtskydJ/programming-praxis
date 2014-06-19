//Joseph Dykstra
//2014-05-20

//Crossing Hands
//http://programmingpraxis.com/2014/02/25/crossing-hands/

// Write a progam that determines how many times the hands cross in one
// twelve-hour period, and compute a list of those times.

public class CrossingHands20140225 {
	public static void main(String[] args) {
		//float hrs, lastHrs, min, lastMin, sec, lastSec;
		int hrs, lastHrs, min, lastMin, sec, lastSec;
		for (int time = 0; time < (12*60*60); time++) {
			hrs = time/(60*60);
			min = time/60%60;
			sec = time%60;
			if (sec==min && min==hrs*5)
				//System.out.printf("%2.0f:%02.0f:%02.0f\n", hrs, min, sec);
				System.out.printf("%2d:%02d:%02d\n", hrs, min, sec);
			lastHrs = hrs;
			lastMin = min;
			lastSec = sec;
		}
	}
}
