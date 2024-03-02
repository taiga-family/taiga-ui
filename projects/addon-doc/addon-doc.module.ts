import {type ModuleWithProviders, NgModule, type Type} from '@angular/core';
import {RouterModule} from '@angular/router';
import {
    TuiDocCodeModule,
    TuiDocDemoModule,
    TuiDocDocumentationModule,
    TuiDocExampleModule,
    TuiDocPageModule,
    TuiDocTabModule,
} from '@taiga-ui/addon-doc/components';
import {tuiGenerateRoutes} from '@taiga-ui/addon-doc/utils';

@NgModule({
    exports: [
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
