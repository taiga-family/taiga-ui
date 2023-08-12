import {NgModule} from '@angular/core';

import {TuiFallbackSrcPipe} from './fallback-src.pipe';

@NgModule({
    declarations: [TuiFallbackSrcPipe],
    exports: [TuiFallbackSrcPipe],
})
export class TuiFallbackSrcModule {}
