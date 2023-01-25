import {NgModule} from '@angular/core';

import {TuiElasticContainerComponent} from './elastic-container.component';
import {TuiElasticContainerDirective} from './elastic-container.directive';

@NgModule({
    declarations: [TuiElasticContainerComponent, TuiElasticContainerDirective],
    exports: [TuiElasticContainerComponent],
})
export class TuiElasticContainerModule {}
