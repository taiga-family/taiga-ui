import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiSvgModule} from '@taiga-ui/core';
import {TuiTextModule} from '@taiga-ui/experimental/components/text';
import {TuiFallbackSrcModule, TuiFallbackSrcPipe} from '@taiga-ui/experimental/pipes';
import {TuiLazyLoadingModule} from '@taiga-ui/kit';

import {TuiAvatarComponent} from './avatar.component';

@NgModule({
    imports: [
        CommonModule,
        TuiSvgModule,
        TuiLazyLoadingModule,
        TuiFallbackSrcModule,
        TuiTextModule,
    ],
    declarations: [TuiAvatarComponent],
    exports: [TuiAvatarComponent, TuiFallbackSrcPipe],
})
export class TuiAvatarModule {}
