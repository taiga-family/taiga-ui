import {NgModule} from '@angular/core';

import {TuiInitialsPipe} from './initials.pipe';

@NgModule({
    declarations: [TuiInitialsPipe],
    exports: [TuiInitialsPipe],
})
export class TuiInitialsModule {}
