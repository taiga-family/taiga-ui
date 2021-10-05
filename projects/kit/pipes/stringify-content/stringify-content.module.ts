import {NgModule} from '@angular/core';
import {TuiStringifyContentPipe} from './stringify-content.pipe';

@NgModule({
    declarations: [TuiStringifyContentPipe],
    exports: [TuiStringifyContentPipe],
})
export class TuiStringifyContentPipeModule {}
