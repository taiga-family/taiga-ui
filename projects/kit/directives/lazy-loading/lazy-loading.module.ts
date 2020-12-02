import {NgModule} from '@angular/core';
import {TuiLazyLoadingDirective} from './lazy-loading.directive';

@NgModule({
    declarations: [TuiLazyLoadingDirective],
    exports: [TuiLazyLoadingDirective],
})
export class TuiLazyLoadingModule {}
