import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primenumberchart',
  templateUrl: './primenumberchart.component.html',
  styleUrls: ['./primenumberchart.component.scss']
})
export class PrimenumberchartComponent implements OnInit {
  rangeNumber: number = 1;
  totalCount: number = 0;
  totalTime: string = '';
  isCounting: boolean = false;
  countLabel: string = 'Count Prime Numbers';
  countingLabel = 'Prime Numbers are counting...'

  constructor(private decimalPipe: DecimalPipe) { }

  ngOnInit(): void {
  }

  countPrimeNumber(): void {
    let count = 0;
    this.isCounting = true;
    var startTime = performance.now();
    for (let i = 1; i < this.rangeNumber; i++) {
      if (this.isPrime(i)) {
        count++;
        console.log(count);
      }
    }
    this.totalCount = count;
    var endTime = performance.now();
    var timeDifferance: any = endTime - startTime;

    this.totalTime = this.millisToSeconds(timeDifferance);
    this.isCounting = false;


  }

  isPrime(currentNumber: number): boolean {
    for (let i = 2; i < currentNumber; i++)
      if (currentNumber % i === 0) return false;
    return currentNumber > 1;
  }

  millisToSeconds(milliSeconds: any): any {

    var seconds: any = ((milliSeconds % 60000) / 1000).toFixed(2);
    if (((seconds < 10 ? '0' : '') + seconds) == '00') {
      return this.pad(milliSeconds) + ' mS';
    } else {
      return (seconds < 10 ? '0' : '') + seconds + ' S';
    }
  }
  pad(milliSeconds: any): any {
    return this.decimalPipe.transform(milliSeconds, '.2-2');
  }

  rangeNumberChanged(event: any) {
    this.totalCount = 0;
  }


}
