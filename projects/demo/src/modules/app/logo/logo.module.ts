import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiLinkDirective} from '@taiga-ui/core';

import {LogoComponent} from './logo.component';

@NgModule({
    imports: [TuiLinkDirective, RouterModule],
    declarations: [LogoComponent],
    exports: [LogoComponent],
})
export class LogoModule {}
