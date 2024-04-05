import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiLinkDirective} from '@taiga-ui/core';

import {TuiDocSeeAlsoComponent} from './see-also.component';

@NgModule({
    imports: [CommonModule, RouterModule, TuiLinkDirective],
    declarations: [TuiDocSeeAlsoComponent],
    exports: [TuiDocSeeAlsoComponent],
})
export class TuiDocSeeAlsoModule {}
