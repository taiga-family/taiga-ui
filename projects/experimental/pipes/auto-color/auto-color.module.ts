import {NgModule} from '@angular/core';

import {TuiAutoColorPipe} from './auto-color.pipe';

@NgModule({
    declarations: [TuiAutoColorPipe],
    exports: [TuiAutoColorPipe],
})
export class TuiAutoColorModule {}
