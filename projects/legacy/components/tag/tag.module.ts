import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiLoader} from '@taiga-ui/core/components/loader';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiTagComponent} from './tag.component';

/**
 * @deprecated: drop in v5.0
 */
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiIcon,
        TuiLoader,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
    ],
    declarations: [TuiTagComponent],
    exports: [TuiTagComponent],
})
export class TuiTagModule {}
