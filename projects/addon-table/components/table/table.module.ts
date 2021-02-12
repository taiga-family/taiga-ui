import {CommonModule} from '@angular/common';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {TuiResizableColumnModule} from '@taiga-ui/addon-table/components/resizable-column';
import {TuiLetModule, TuiMapperPipeModule} from '@taiga-ui/cdk';
import {TuiSvgModule} from '@taiga-ui/core';
import {TuiCellDirective} from './cell.directive';
import {TuiFindDirectivePipe} from './find-directive.pipe';
import {TuiHeadDirective} from './head.directive';
import {TuiTableComponent} from './table.component';
import {TuiTheadDirective} from './thead.directive';

@NgModule({
    imports: [
        CommonModule,
        TuiLetModule,
        TuiMapperPipeModule,
        TuiSvgModule,
        TuiResizableColumnModule,
    ],
    declarations: [
        TuiTableComponent,
        TuiTheadDirective,
        TuiCellDirective,
        TuiHeadDirective,
        TuiFindDirectivePipe,
    ],
    exports: [TuiTableComponent, TuiCellDirective, TuiHeadDirective],
    schemas: [NO_ERRORS_SCHEMA],
})
export class TuiTableModule {}
