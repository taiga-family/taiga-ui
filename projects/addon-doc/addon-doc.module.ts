import {NgModule} from '@angular/core';
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
import {TuiTextCodeDirective} from '@taiga-ui/addon-doc/directives';

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
        TuiTextCodeDirective,
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
        TuiTextCodeDirective,
    ],
})
export class TuiAddonDoc {}
