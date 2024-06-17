import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiAppearance, TuiIcon, TuiTooltip} from '@taiga-ui/core';
import {TuiWrapperModule} from '@taiga-ui/legacy/directives/wrapper';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiPrimitiveTextfieldComponent} from './primitive-textfield.component';
import {TuiPrimitiveTextfieldDirective} from './primitive-textfield.directive';
import {TuiTextfieldComponent} from './textfield/textfield.component';
import {TuiValueDecorationComponent} from './value-decoration/value-decoration.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiWrapperModule,
        TuiTooltip,
        TuiIcon,
        TuiAppearance,
    ],
    declarations: [
        TuiPrimitiveTextfieldComponent,
        TuiPrimitiveTextfieldDirective,
        TuiTextfieldComponent,
        TuiValueDecorationComponent,
    ],
    exports: [
        TuiPrimitiveTextfieldComponent,
        TuiPrimitiveTextfieldDirective,
        TuiTextfieldComponent,
    ],
})
export class TuiPrimitiveTextfieldModule {}
