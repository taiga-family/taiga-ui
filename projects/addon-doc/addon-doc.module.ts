import type {ModuleWithProviders, Type} from '@angular/core';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {
    TuiDocCodeModule,
    TuiDocCopyComponent,
    TuiDocDemoModule,
    TuiDocDocumentationModule,
    TuiDocExampleModule,
    TuiDocPageModule,
    TuiDocTabModule,
} from '@taiga-ui/addon-doc/components';
import {tuiGenerateRoutes} from '@taiga-ui/addon-doc/utils';

@NgModule({
    imports: [TuiDocCopyComponent],
    exports: [
        TuiDocCopyComponent,
        TuiDocCodeModule,
        TuiDocDemoModule,
        TuiDocDocumentationModule,
        TuiDocPageModule,
        TuiDocExampleModule,
        TuiDocTabModule,
    ],
})
export class TuiAddonDocModule {}

export function tuiGetDocModules(
    type: Type<unknown>,
): [Type<TuiAddonDocModule>, ModuleWithProviders<RouterModule>] {
    return [TuiAddonDocModule, RouterModule.forChild(tuiGenerateRoutes(type))];
}
