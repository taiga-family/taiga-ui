import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLazyLoadingModule} from '@taiga-ui/kit/directives';
import {TuiAvatarComponent} from './avatar.component';

@NgModule({
    imports: [CommonModule, TuiLazyLoadingModule],
    declarations: [TuiAvatarComponent],
    exports: [TuiAvatarComponent],
})
export class TuiAvatarModule {}
