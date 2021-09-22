import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements AfterViewInit {
  @ViewChild('addFileInput') addFileInput: ElementRef

  public isLoaded: boolean = true;
  files: File[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngAfterViewInit(): void {
    this.addFileInput.nativeElement.value = this.data
  }

  messageInput(): void {
    if(this.addFileInput.nativeElement.scrollTop > 0){
      this.addFileInput.nativeElement.style.height = this.addFileInput.nativeElement.scrollHeight + "px";
    }
  }

  onSelect(event: any): void {
    this.isLoaded = !this.isLoaded
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any): void {
    this.isLoaded = !this.isLoaded
    this.files.splice(this.files.indexOf(event), 1);
  }

}
