import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {
    TuiDataListModule,
    TuiDropdownModule,
    TuiGroupModule,
    TuiLinkModule,
    TuiModeModule,
    TuiNotificationModule,
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
import {TuiDocDocumentationComponent} from './documentation.component';
import {TuiDocDocumentationPropertyConnectorDirective} from './documentation-property-connector.directive';
import {TuiShowCleanerPipe} from './pipes/cleaner.pipe';
import {TuiShowContentTooltip} from './pipes/content-tooltip.pipe';
import {TuiInspectPipe} from './pipes/inspect.pipe';
import {TuiGetOpacityPipe} from './pipes/opacity.pipe';
import {TuiIsOptionalPipe} from './pipes/optional.pipe';
import {TuiIsPrimitivePolymorpheusContentPipe} from './pipes/primitive-polymorpheus-content.pipe';
import {TuiStripOptionalPipe} from './pipes/strip-optional.pipe';
import {TuiGetColorPipe} from './pipes/сolor.pipe';

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
        TuiDropdownModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiNotificationModule,
    ],
    declarations: [
        TuiInspectPipe,
        TuiGetColorPipe,
        TuiGetOpacityPipe,
        TuiIsOptionalPipe,
        TuiShowCleanerPipe,
        TuiStripOptionalPipe,
        TuiShowContentTooltip,
        TuiDocDocumentationComponent,
        TuiIsPrimitivePolymorpheusContentPipe,
        TuiDocDocumentationPropertyConnectorDirective,
    ],
    exports: [
        TuiDocDocumentationComponent,
        TuiDocDocumentationPropertyConnectorDirective,
    ],
})
export class TuiDocDocumentationModule {}
