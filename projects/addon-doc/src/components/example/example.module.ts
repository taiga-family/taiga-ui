import {ClipboardModule} from '@angular/cdk/clipboard';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiMapperPipeModule} from '@taiga-ui/cdk';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiTabsModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiDocCodeModule} from '../code/code.module';
import {TuiDocCopyModule} from '../copy/copy.module';
import {TuiDocExampleComponent} from './example.component';
import {TuiDocExampleCapitalizePipe} from './example-capitalize.pipe';
import {TuiDocExampleGetTabsPipe} from './example-get-tabs.pipe';

@NgModule({
    imports: [
        CommonModule,
        ClipboardModule,
        TuiTabsModule,
        TuiButtonModule,
        TuiDocCopyModule,
        TuiDocCodeModule,
        PolymorpheusModule,
        TuiMapperPipeModule,
    ],
    declarations: [
        TuiDocExampleComponent,
        TuiDocExampleGetTabsPipe,
        TuiDocExampleCapitalizePipe,
    ],
    exports: [
        TuiDocExampleComponent,
        TuiDocExampleGetTabsPipe,
        TuiDocExampleCapitalizePipe,
    ],
})
export class TuiDocExampleModule {}
