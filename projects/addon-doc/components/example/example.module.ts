import {ClipboardModule} from '@angular/cdk/clipboard';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiMapperPipe} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiLoaderModule} from '@taiga-ui/core';
import {TuiTabsModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiDocCodeModule} from '../code/code.module';
import {TuiDocCopyModule} from '../copy/copy.module';
import {TuiDocExampleComponent} from './example.component';
import {TuiDocExampleGetTabsPipe} from './example-get-tabs.pipe';

@NgModule({
    imports: [
        CommonModule,
        ClipboardModule,
        TuiTabsModule,
        TuiButtonDirective,
        TuiDocCopyModule,
        TuiDocCodeModule,
        PolymorpheusModule,
        TuiMapperPipe,
        TuiLoaderModule,
        RouterModule,
    ],
    declarations: [TuiDocExampleComponent, TuiDocExampleGetTabsPipe],
    exports: [TuiDocExampleComponent, TuiDocExampleGetTabsPipe],
})
export class TuiDocExampleModule {}
