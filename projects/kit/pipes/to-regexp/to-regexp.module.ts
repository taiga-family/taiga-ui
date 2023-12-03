import {NgModule} from '@angular/core';

import {TuiToRegexpPipe} from './to-regexp.pipe';

@NgModule({
    declarations: [TuiToRegexpPipe],
    exports: [TuiToRegexpPipe],
})
export class TuiToRegexpModule {}
