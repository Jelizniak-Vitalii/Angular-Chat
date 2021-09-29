import { NgModule } from "@angular/core";

import { TransformTime } from "./transformTime";
import { ChangeFileSize } from "./changeFileSize";

@NgModule({
  declarations: [
    TransformTime,
    ChangeFileSize
  ],
  exports: [
    TransformTime,
    ChangeFileSize
  ]
})
export class PipeModule { }
