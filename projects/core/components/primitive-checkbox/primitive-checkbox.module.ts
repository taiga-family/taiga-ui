import {NgModule} from '@angular/core';
import {TuiSvgModule} from '@taiga-ui/core/components/svg';
import {TuiWrapperModule} from '@taiga-ui/core/components/wrapper';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiPrimitiveCheckboxComponent} from './primitive-checkbox.component';

@NgModule({
    imports: [TuiSvgModule, TuiWrapperModule, PolymorpheusModule],
    declarations: [TuiPrimitiveCheckboxComponent],
    exports: [TuiPrimitiveCheckboxComponent],
})
export class TuiPrimitiveCheckboxModule {}
