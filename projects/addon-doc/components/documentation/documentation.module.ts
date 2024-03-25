import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiFilterPipeModule} from '@taiga-ui/cdk';
import {
    TuiDataListModule,
    TuiDropdownModule,
    TuiGroupDirective,
    TuiLinkModule,
    TuiModeModule,
    TuiNotificationModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiBadgeDirective,
    TuiDataListWrapperModule,
    TuiInputNumberModule,
    TuiSelectModule,
    TuiSwitchComponent,
} from '@taiga-ui/kit';

import {TuiInputOpacityModule} from '../internal/input-opacity/input-opacity.module';
import {TuiDocDocumentationComponent} from './documentation.component';
import {TuiDocDocumentationPropertyConnectorDirective} from './documentation-property-connector.directive';
import {TuiShowCleanerPipe} from './pipes/cleaner.pipe';
import {TuiGetColorPipe} from './pipes/color.pipe';
import {TuiInspectPipe} from './pipes/inspect.pipe';
import {TuiGetOpacityPipe} from './pipes/opacity.pipe';
import {TuiIsOptionalPipe} from './pipes/optional.pipe';
import {TuiIsPrimitivePolymorpheusContentPipe} from './pipes/primitive-polymorpheus-content.pipe';
import {TuiStripOptionalPipe} from './pipes/strip-optional.pipe';
import {TuiDocTypeReferencePipe} from './pipes/type-reference.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        TuiBadgeDirective,
        TuiSelectModule,
        TuiSwitchComponent,
        TuiLinkModule,
        TuiInputNumberModule,
        TuiModeModule,
        TuiGroupDirective,
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
        TuiDocTypeReferencePipe,
        TuiDocDocumentationComponent,
        TuiIsPrimitivePolymorpheusContentPipe,
        TuiDocDocumentationPropertyConnectorDirective,
    ],
    exports: [
        TuiDocTypeReferencePipe,
        TuiDocDocumentationComponent,
        TuiDocDocumentationPropertyConnectorDirective,
    ],
})
export class TuiDocDocumentationModule {}
