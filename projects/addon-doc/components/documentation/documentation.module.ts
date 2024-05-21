import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiFilterPipe, TuiToArrayPipe} from '@taiga-ui/cdk';
import {
    TuiDataList,
    TuiDropdownModule,
    TuiGroupDirective,
    TuiLinkDirective,
    TuiNotificationComponent,
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
        TuiLinkDirective,
        TuiInputNumberModule,
        TuiGroupDirective,
        TuiInputOpacityModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiDropdownModule,
        TuiDataList,
        TuiDataListWrapperModule,
        TuiNotificationComponent,
        TuiFilterPipe,
        TuiToArrayPipe,
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
