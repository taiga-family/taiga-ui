import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiSvgModule} from '@taiga-ui/core';
import {TuiLazyLoadingModule} from '@taiga-ui/kit/directives';

import {TuiAvatarComponent} from './avatar.component';

@NgModule({
    imports: [CommonModule, TuiLazyLoadingModule, TuiSvgModule],
    declarations: [TuiAvatarComponent],
    exports: [TuiAvatarComponent],
})
export class TuiAvatarModule {}
