import {ClipboardModule} from '@angular/cdk/clipboard';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule, TuiDocCopyModule} from '@taiga-ui/addon-doc';
import {ColorsComponent} from './colors.component';
import {TableComponent} from './table/table.component';

@NgModule({
    imports: [
        CommonModule,
        ClipboardModule,
        TuiDocCopyModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ColorsComponent)),
    ],
    declarations: [ColorsComponent, TableComponent],
    exports: [ColorsComponent],
})
export class ColorsModule {}
