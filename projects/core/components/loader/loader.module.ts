import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiLoaderComponent} from './loader.component';

@NgModule({
    imports: [CommonModule, PolymorpheusModule],
    declarations: [TuiLoaderComponent],
    exports: [TuiLoaderComponent],
})
export class TuiLoaderModule {}
