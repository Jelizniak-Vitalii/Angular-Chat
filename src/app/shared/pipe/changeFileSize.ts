import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: 'ChangeFileSize'
})

export class ChangeFileSize implements PipeTransform {
  fileSize: string  = '';
  transform(value: number, ...args: any[]): any {
    const sizeValue = Math.floor(value / 1000);
    if(sizeValue < 1000 ) {
      return this.fileSize = `${sizeValue} kb`;
    }
    if(sizeValue > 1000) {
      return this.fileSize = `${sizeValue} mb`;
    }
    return this.fileSize
  }

}
