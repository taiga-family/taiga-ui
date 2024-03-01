import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
// eslint-disable-next-line @taiga-ui/experience/no-deep-imports
import {TuiFadeModule} from '@taiga-ui/experimental/directives/fade';

import {TuiAvatarLabeledComponent} from './avatar-labeled.component';

@NgModule({
    imports: [CommonModule, TuiFadeModule],
    declarations: [TuiAvatarLabeledComponent],
    exports: [TuiAvatarLabeledComponent],
})
export class TuiAvatarLabeledModule {}
