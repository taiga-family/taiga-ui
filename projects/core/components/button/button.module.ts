import {NgModule} from '@angular/core';

import {TuiButtonDirective} from './button.directive';

@NgModule({
    imports: [TuiButtonDirective],
    exports: [TuiButtonDirective],
})
export class TuiButtonModule {}
