import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiAvatarComponent} from './avatar.component';

@NgModule({
    imports: [CommonModule],
    declarations: [TuiAvatarComponent],
    exports: [TuiAvatarComponent],
})
export class TuiAvatarModule {}
