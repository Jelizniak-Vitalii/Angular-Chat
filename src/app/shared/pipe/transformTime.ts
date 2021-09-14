import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: 'TransformTime'
})

export class TransformTime implements PipeTransform {
  currentTime: string = '';
  transform(value: number, ...args: any[]): any {
    const time = new Date(value).
  }

}
