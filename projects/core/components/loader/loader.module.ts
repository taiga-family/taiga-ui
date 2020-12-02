import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TuiLoaderComponent} from './loader.component';
import {TuiLoaderDirective} from './loader.directive';

@NgModule({
    imports: [CommonModule, PolymorpheusModule],
    declarations: [TuiLoaderComponent, TuiLoaderDirective],
    exports: [TuiLoaderComponent],
})
export class TuiLoaderModule {}
