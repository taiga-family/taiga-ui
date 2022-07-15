import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiCheckboxModule} from '@taiga-ui/kit/components/checkbox';

import {TuiCheckboxLabeledComponent} from './checkbox-labeled.component';

@NgModule({
    imports: [CommonModule, FormsModule, TuiCheckboxModule],
    declarations: [TuiCheckboxLabeledComponent],
    exports: [TuiCheckboxLabeledComponent],
})
export class TuiCheckboxLabeledModule {}
