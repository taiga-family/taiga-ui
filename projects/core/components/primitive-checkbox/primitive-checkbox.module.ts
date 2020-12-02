import {NgModule} from '@angular/core';
import {TuiSvgModule} from '@taiga-ui/core/components/svg';
import {TuiWrapperModule} from '@taiga-ui/core/components/wrapper';

import {TuiPrimitiveCheckboxComponent} from './primitive-checkbox.component';

@NgModule({
    imports: [TuiSvgModule, TuiWrapperModule],
    declarations: [TuiPrimitiveCheckboxComponent],
    exports: [TuiPrimitiveCheckboxComponent],
})
export class TuiPrimitiveCheckboxModule {}
