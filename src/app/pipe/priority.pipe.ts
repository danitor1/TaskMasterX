import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priority',
})
export class PriorityPipe implements PipeTransform {
  transform(value: string, ...args: number[]): any {
    switch (value) {
      case 'Urgent':
        return '#b30000';
      case 'Important':
        return '#004691';
      case 'Not important':
        return '#4b4b4b';
      default:
        return 'inherit';
    }
  }
}
