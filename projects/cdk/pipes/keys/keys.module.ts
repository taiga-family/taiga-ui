import {NgModule} from '@angular/core';

import {TuiKeysPipe} from './keys.pipe';

@NgModule({
    exports: [TuiKeysPipe],
    declarations: [TuiKeysPipe],
})
export class TuiKeysPipeModule {}
