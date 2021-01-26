import {ClipboardModule} from '@angular/cdk/clipboard';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {
    generateRoutes,
    TUI_DOC_PAGE_MODULES,
    TuiDocCopyModule,
} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {TuiCheckboxLabeledModule, TuiInputModule, TuiIslandModule} from '@taiga-ui/kit';
import {TuiVariablesExample1} from './examples/1';
import {VariablesComponent} from './variables.component';

@NgModule({
    imports: [
        CommonModule,
        ClipboardModule,
        TuiIslandModule,
        TuiLinkModule,
        TuiDocCopyModule,
        TuiInputModule,
        TuiCheckboxLabeledModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(VariablesComponent)),
        FormsModule,
    ],
    declarations: [VariablesComponent, TuiVariablesExample1],
    exports: [VariablesComponent],
})
export class VariablesModule {}
