import type {ModuleWithProviders, Type} from '@angular/core';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {
    TuiDocCodeComponent,
    TuiDocCopyComponent,
    TuiDocDemoComponent,
    TuiDocDocumentationComponent,
    TuiDocDocumentationPropertyConnectorDirective,
    TuiDocExampleComponent,
    TuiDocExampleGetTabsPipe,
    TuiDocMainComponent,
    TuiDocNavigationComponent,
    TuiDocPageComponent,
    TuiDocPageTabConnectorDirective,
    TuiDocTabComponent,
    TuiDocTypeReferencePipe,
} from '@taiga-ui/addon-doc/components';
import {tuiGenerateRoutes} from '@taiga-ui/addon-doc/utils';

@NgModule({
    imports: [
        TuiDocCopyComponent,
        TuiDocTabComponent,
        TuiDocDemoComponent,
        TuiDocCodeComponent,
        TuiDocExampleComponent,
        TuiDocExampleGetTabsPipe,
        TuiDocTypeReferencePipe,
        TuiDocDocumentationComponent,
        TuiDocDocumentationPropertyConnectorDirective,
        TuiDocPageComponent,
        TuiDocPageTabConnectorDirective,
        TuiDocNavigationComponent,
        TuiDocMainComponent,
    ],
    exports: [
        TuiDocCopyComponent,
        TuiDocCodeComponent,
        TuiDocDemoComponent,
        TuiDocTypeReferencePipe,
        TuiDocDocumentationComponent,
        TuiDocDocumentationPropertyConnectorDirective,
        TuiDocExampleComponent,
        TuiDocExampleGetTabsPipe,
        TuiDocTabComponent,
        TuiDocPageComponent,
        TuiDocPageTabConnectorDirective,
        TuiDocNavigationComponent,
        TuiDocMainComponent,
    ],
})
export class TuiAddonDoc {}

// TODO: drop in v4.0
export function tuiGetDocModules(
    type: Type<unknown>,
): [Type<TuiAddonDoc>, ModuleWithProviders<RouterModule>] {
    return [TuiAddonDoc, RouterModule.forChild(tuiGenerateRoutes(type))];
}
