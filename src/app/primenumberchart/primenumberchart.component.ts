import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CountnumberService } from './countnumber.service';

@Component({
  selector: 'app-primenumberchart',
  templateUrl: './primenumberchart.component.html',
  styleUrls: ['./primenumberchart.component.scss']
})

/*  Count Prime number from 1 to N **/

export class PrimenumberchartComponent implements OnInit {
  rangeNumber: number = 1;
  totalCount: number = 0;
  totalTime: string = '';
  isCounting: boolean = false;
  isOne: boolean = false;
  countLabel: string = 'Count Prime Numbers';
  countingLabel = 'Processing...';
  projectLable: string = 'Prime Numbers Count';
  rangleLable: string = 'Enter  Number';
  oneLabel: string = 'Enter number greaterthan 1.';
  checkPrimeNumberLable: string = 'Checking Primes from 1 to ';
  primeCountLable: string = 'Prime Count';
  runTimeLable: string = 'Run Time';
  // countDigits: number = 0;
  /* Inject services */
  constructor(private countnumberService: CountnumberService) { }

  ngOnInit(): void {
  }

  /* Count Prime Numbers from 1 To N */
  countPrimeNumber(): void {
    /* Checking if number is 1 or 0 */
    if (this.rangeNumber == 1 || this.rangeNumber == 0) {
      this.isOne = true;
    }
    /* Counting primes  */
    else {
      /* Enables falgs */
      let oldLabel = this.countLabel;
      this.isCounting = true;
      this.countLabel = this.countingLabel;
      /* Call service for count prime numbers */
      this.countnumberService.countPrimeNumber(this.rangeNumber)
        .subscribe({
          next: (response: any) => {
            /* Setting response to component variables */
            this.totalCount = response.totalCount;
            this.totalTime = response.timeDifferance;
            this.isCounting = false;
            this.isOne = false;
            this.countLabel = oldLabel;
            // this.countDigits = 0;
          },
          /* Checking errors */
          error: (error: any) => {
            this.isCounting = false;
            console.log(error);
          }
        });
    }
  }
  /*  On model change cheacking if number is changed or not */
  rangeNumberChanged(event: any) {
    this.totalCount = 0;
  }
  /* Checking Number are >= 1*/
  isNumberKey(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // if (charCode == 48 && this.countDigits == 0)
    //   return false;
    // else {
    //   this.countDigits++;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
    // }
  }

}
