import {NgModule} from '@angular/core';
import {
    TuiDocCodeModule,
    TuiDocDemoModule,
    TuiDocDocumentationModule,
    TuiDocExampleModule,
    TuiDocPageModule,
} from '@taiga-ui/addon-doc/components';

@NgModule({
    exports: [
        TuiDocCodeModule,
        TuiDocDemoModule,
        TuiDocDocumentationModule,
        TuiDocPageModule,
        TuiDocExampleModule,
    ],
})
export class TuiAddonDocModule {}
