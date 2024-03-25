import {NgModule} from '@angular/core';

import {TuiAvatarOutlineComponent} from './avatar-outline.component';
import {TuiAvatarOutlineDirective} from './avatar-outline.directive';

@NgModule({
    declarations: [TuiAvatarOutlineComponent, TuiAvatarOutlineDirective],
    exports: [TuiAvatarOutlineDirective],
})
export class TuiAvatarOutlineModule {}
