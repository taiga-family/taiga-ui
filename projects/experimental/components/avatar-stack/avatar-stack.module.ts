import {NgModule} from '@angular/core';
import {
    TuiAvatarComponent,
    TuiAvatarModule,
} from '@taiga-ui/experimental/components/avatar';

import {TuiAvatarStackComponent} from './avatar-stack.component';

@NgModule({
    imports: [TuiAvatarModule],
    declarations: [TuiAvatarStackComponent],
    exports: [TuiAvatarStackComponent, TuiAvatarComponent],
})
export class TuiAvatarStackModule {}
