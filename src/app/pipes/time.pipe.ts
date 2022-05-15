import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number): string {
    if (value === undefined){
      value = 0;
    }
     // Calculations for time.
    const seconds = Math.ceil(value / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    // Determine the output.
    let output = '';
      output += `${hours}h `;

      output += `${minutes % 60}m `;

    output += `${seconds % 60}s`;

    return `${hours}:`+
    `${(minutes % 60).toString().padStart(2, '0')}:`+
    `${(seconds % 60).toString().padStart(2, '0')}`;
  }

}
