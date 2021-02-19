import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {TuiWrapperComponent} from './wrapper.component';

@NgModule({
    declarations: [TuiWrapperComponent],
    exports: [TuiWrapperComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class TuiWrapperModule {}
