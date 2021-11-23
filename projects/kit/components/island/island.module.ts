import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {TuiIslandComponent} from './island.component';

@NgModule({
    imports: [CommonModule],
    declarations: [TuiIslandComponent],
    exports: [TuiIslandComponent],
})
export class TuiIslandModule {}
