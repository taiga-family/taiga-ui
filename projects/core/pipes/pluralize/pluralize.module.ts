import {NgModule} from '@angular/core';
import {TuiPluralizePipe} from './pluralize.pipe';

@NgModule({
    exports: [TuiPluralizePipe],
    declarations: [TuiPluralizePipe],
})
export class TuiPluralizePipeModule {}
