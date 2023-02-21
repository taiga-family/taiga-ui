import {NgModule} from '@angular/core';

import {TuiFlagPipe} from './flag.pipe';

@NgModule({
    declarations: [TuiFlagPipe],
    exports: [TuiFlagPipe],
})
export class TuiFlagPipeModule {}
