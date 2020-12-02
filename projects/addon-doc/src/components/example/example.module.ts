import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiTabsModule} from '@taiga-ui/kit';
import {TuiDocCodeModule} from '../code/code.module';
import {TuiDocCopyModule} from '../copy/copy.module';
import {TuiDocExampleComponent} from './example.component';

@NgModule({
    imports: [
        CommonModule,
        TuiTabsModule,
        TuiButtonModule,
        TuiDocCopyModule,
        TuiDocCodeModule,
    ],
    declarations: [TuiDocExampleComponent],
    exports: [TuiDocExampleComponent],
})
export class TuiDocExampleModule {}
