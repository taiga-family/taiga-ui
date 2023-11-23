import {NgModule} from '@angular/core';

import {TuiKeysPipe} from './keys.pipe';

@NgModule({
    declarations: [TuiKeysPipe],
    exports: [TuiKeysPipe],
})
export class TuiKeysPipeModule {}
