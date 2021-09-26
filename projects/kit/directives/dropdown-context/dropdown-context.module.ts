import {NgModule} from '@angular/core';
import {TuiDropdownBoxModule} from '@taiga-ui/core';
import {TuiDropdownContextDirective} from './dropdown-context.directive';

@NgModule({
    imports: [TuiDropdownBoxModule],
    declarations: [TuiDropdownContextDirective],
    exports: [TuiDropdownContextDirective],
})
export class TuiDropdownContextModule {}
