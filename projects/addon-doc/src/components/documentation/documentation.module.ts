import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {
    TuiDataListModule,
    TuiDropdownControllerModule,
    TuiGroupModule,
    TuiHintControllerModule,
    TuiLinkModule,
    TuiModeModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
    TuiTooltipModule,
} from '@taiga-ui/core';
import {
    TuiBadgeModule,
    TuiDataListWrapperModule,
    TuiInputCountModule,
    TuiSelectModule,
    TuiToggleModule,
} from '@taiga-ui/kit';
import {TuiInputOpacityModule} from '../../internal/input-opacity/input-opacity.module';
import {TuiDocDocumentationPropertyConnectorDirective} from './documentation-property-connector.directive';
import {TuiDocDocumentationComponent} from './documentation.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        TuiBadgeModule,
        TuiSelectModule,
        TuiToggleModule,
        TuiTooltipModule,
        TuiLinkModule,
        TuiInputCountModule,
        TuiModeModule,
        TuiGroupModule,
        TuiInputOpacityModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiHintControllerModule,
        TuiDropdownControllerModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
    ],
    declarations: [
        TuiDocDocumentationComponent,
        TuiDocDocumentationPropertyConnectorDirective,
    ],
    exports: [
        TuiDocDocumentationComponent,
        TuiDocDocumentationPropertyConnectorDirective,
    ],
})
export class TuiDocDocumentationModule {}
