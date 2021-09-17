import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: 'TransformTime'
})

export class TransformTime implements PipeTransform {
  lastOnlineTime: string  = '';
  transform(value: number, ...args: any[]): any {
    const time = Math.floor(((Date.now() - value) / 1000 / 60));
    if(time < 60) {
      this.lastOnlineTime = `${time} minute ago`
    }
    if(time < 1440) {
      this.lastOnlineTime = `${Math.floor((time / 60))} hours ago`
    } else {
      this.lastOnlineTime = `${Math.floor((time / 60) / 24)} days ago`
    }
    return this.lastOnlineTime
  }

}
