import {NgModule} from '@angular/core';
import {TuiIconComponent} from '@taiga-ui/core';

import {TuiDocTabComponent} from './doc-tab.component';

@NgModule({
    imports: [TuiIconComponent],
    declarations: [TuiDocTabComponent],
    exports: [TuiDocTabComponent],
})
export class TuiDocTabModule {}
