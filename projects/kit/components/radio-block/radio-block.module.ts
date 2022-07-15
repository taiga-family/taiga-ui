import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiWrapperModule} from '@taiga-ui/core';
import {TuiRadioModule} from '@taiga-ui/kit/components/radio';

import {TuiRadioBlockComponent} from './radio-block.component';

@NgModule({
    imports: [FormsModule, TuiRadioModule, TuiWrapperModule],
    declarations: [TuiRadioBlockComponent],
    exports: [TuiRadioBlockComponent],
})
export class TuiRadioBlockModule {}
