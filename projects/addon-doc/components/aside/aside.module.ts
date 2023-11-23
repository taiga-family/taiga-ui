import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiTabsModule} from '@taiga-ui/kit';

import {TuiDocAsideComponent} from './aside.component';

@NgModule({
    imports: [TuiTabsModule, CommonModule],
    declarations: [TuiDocAsideComponent],
    exports: [TuiDocAsideComponent],
})
export class TuiDocAsideModule {}
