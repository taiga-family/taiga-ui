import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLoaderModule} from '@taiga-ui/core/components/loader';
import {TuiSvgModule} from '@taiga-ui/core/components/svg';
import {TuiWrapperModule} from '@taiga-ui/core/directives/wrapper';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiButtonComponent} from './button.component';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiWrapperModule,
        TuiSvgModule,
        TuiLoaderModule,
    ],
    declarations: [TuiButtonComponent],
    exports: [TuiButtonComponent],
})
export class TuiButtonModule {}
