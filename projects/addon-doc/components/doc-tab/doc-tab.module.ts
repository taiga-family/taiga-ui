import {NgModule} from '@angular/core';
import {TuiSvgModule} from '@taiga-ui/core';

import {TuiDocTabComponent} from './doc-tab.component';

@NgModule({
    imports: [TuiSvgModule],
    declarations: [TuiDocTabComponent],
    exports: [TuiDocTabComponent],
})
export class TuiDocTabModule {}
