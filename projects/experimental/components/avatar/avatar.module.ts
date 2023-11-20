import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiIconModule} from '@taiga-ui/experimental/components/icon';
import {TuiLazyLoadingModule} from '@taiga-ui/kit';

import {TuiAvatarComponent} from './avatar.component';

@NgModule({
    imports: [CommonModule, TuiIconModule, TuiLazyLoadingModule],
    declarations: [TuiAvatarComponent],
    exports: [TuiAvatarComponent],
})
export class TuiAvatarModule {}
