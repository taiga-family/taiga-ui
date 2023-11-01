import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiFilterPipeModule} from '@taiga-ui/cdk';
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
    TuiInputNumberModule,
    TuiSelectModule,
    TuiToggleModule,
} from '@taiga-ui/kit';

import {TuiInputOpacityModule} from '../internal/input-opacity/input-opacity.module';
import {TuiBindDocumentationTemplatesDirective} from './directives/bind-documentation-templates.directive';
import {TuiDocumentationApiHostDirective} from './directives/documentation-api-host.directive';
import {TuiDocDocumentationPropertyConnectorDirective} from './directives/documentation-property-connector.directive';
import {TuiDocDocumentationTemplateConnectorDirective} from './directives/documentation-template-connector.directive';
import {TuiDocDocumentationComponent} from './documentation.component';
import {TuiShowCleanerPipe} from './pipes/cleaner.pipe';
import {TuiGetColorPipe} from './pipes/color.pipe';
import {TuiShowContentTooltip} from './pipes/content-tooltip.pipe';
import {TuiInspectPipe} from './pipes/inspect.pipe';
import {TuiGetOpacityPipe} from './pipes/opacity.pipe';
import {TuiIsOptionalPipe} from './pipes/optional.pipe';
import {TuiIsPrimitivePolymorpheusContentPipe} from './pipes/primitive-polymorpheus-content.pipe';
import {TuiStripOptionalPipe} from './pipes/strip-optional.pipe';

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
        TuiInputNumberModule,
        TuiModeModule,
        TuiGroupModule,
        TuiInputOpacityModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiDropdownModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiNotificationModule,
        TuiFilterPipeModule,
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
        TuiDocDocumentationTemplateConnectorDirective,
        TuiBindDocumentationTemplatesDirective,
        TuiDocumentationApiHostDirective,
    ],
    exports: [
        TuiDocDocumentationComponent,
        TuiDocDocumentationPropertyConnectorDirective,
        TuiDocDocumentationTemplateConnectorDirective,
        TuiBindDocumentationTemplatesDirective,
        TuiDocumentationApiHostDirective,
    ],
})
export class TuiDocDocumentationModule {}
