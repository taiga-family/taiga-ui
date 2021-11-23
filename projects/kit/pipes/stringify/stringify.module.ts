import {NgModule} from '@angular/core';

import {TuiStringifyPipe} from './stringify.pipe';

@NgModule({
    declarations: [TuiStringifyPipe],
    exports: [TuiStringifyPipe],
})
export class TuiStringifyPipeModule {}
