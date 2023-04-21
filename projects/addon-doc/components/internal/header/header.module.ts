import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiSidebarModule} from '@taiga-ui/addon-mobile';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {TuiButtonModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiDocNavigationModule} from '../../navigation/navigation.module';
import {TuiDocHeaderComponent} from './header.component';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiButtonModule,
        TuiSidebarModule,
        TuiActiveZoneModule,
        TuiDocNavigationModule,
    ],
    declarations: [TuiDocHeaderComponent],
    exports: [TuiDocHeaderComponent],
})
export class TuiDocHeaderModule {}
