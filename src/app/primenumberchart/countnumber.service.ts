import { DecimalPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountnumberService {

  constructor(private decimalPipe: DecimalPipe) { }
  /* Core Logic for counting primes from range */
  countPrimeNumber(rangeNumber: number): any {
    /* Add observables for synchronous execution */
    return new Observable((observer) => {
      let totalCount = 0;
      /* Taking start time for time difference */
      var startTime = performance.now();
      /* Looping from 2 to range number */
      for (let i = 2; i <= rangeNumber; i++) {
        /* checking current number is prime or not */
        if (this.isPrime(i)) {
          totalCount++;
        }
      }
      /* Taking end time for time difference */
      var endTime = performance.now();
      var timeDifferance: any = endTime - startTime;
      /*  Count Milli seconds or seconds */
      var totalTime = this.millisToSeconds(timeDifferance);
      /*  Setting observables value */
      observer.next({ 'totalCount': totalCount, 'timeDifferance': totalTime });
      observer.complete();
    });
  }
  /* Function for counting prime numbers */
  isPrime(currentNumber: number): boolean {
    /* Starting from 2 */
    let i = 2;
    /* Looping from 2 to sqrt(currentNumber) */
    while (i * i <= currentNumber) {
      /* Check if currentNumber is devided by looping value*/
      if (currentNumber % i == 0) {
        /* CurrentNumber has a factor in between 2 and sqrt(currentNumber) */
        /* So it is not a prime number */
        return false;
      }
      i++;
    }
   /* Number is prime */
    return true;
  }

  /* Function for counting milliseconds and seconds */
  millisToSeconds(milliSeconds: any): any {
    /* Converting to Milli Seconds */
    var seconds: any = ((milliSeconds % 60000) / 1000).toFixed(0);
    if (((seconds < 10 ? '0' : '') + seconds) == '00') {
      return this.pad(milliSeconds) + ' mS';
    }
    /** Converting to Seconds */
    else {
      seconds = ((milliSeconds % 60000) / 1000).toFixed(2);
      return (seconds < 10 ? '0' : '') + seconds + ' S';
    }
  }
  /* Function for trimming digits after precision */
  pad(milliSeconds: any): any {
    return this.decimalPipe.transform(milliSeconds, '.2-2');
  }
}
