import {NgModule} from '@angular/core';

import {TuiIconComponent} from './icon.component';
import {TuiIconPipe} from './icon.pipe';

@NgModule({
    declarations: [TuiIconComponent, TuiIconPipe],
    exports: [TuiIconComponent, TuiIconPipe],
})
export class TuiIconModule {}
