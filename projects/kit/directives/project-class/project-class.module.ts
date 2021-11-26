import {NgModule} from '@angular/core';

import {TuiProjectClassDirective} from './project-class.directive';

@NgModule({
    declarations: [TuiProjectClassDirective],
    exports: [TuiProjectClassDirective],
})
export class TuiProjectClassModule {}
