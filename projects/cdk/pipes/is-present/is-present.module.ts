import {NgModule} from '@angular/core';

import {TuiIsPresentPipe} from './is-present.pipe';

@NgModule({
    declarations: [TuiIsPresentPipe],
    exports: [TuiIsPresentPipe],
})
export class TuiIsPresentPipeModule {}
