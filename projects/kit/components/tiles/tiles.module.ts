import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {TuiTileComponent} from './tile.component';
import {TuiTileHandleDirective} from './tile-handle.directive';
import {TuiTilesComponent} from './tiles.component';

@NgModule({
    imports: [CommonModule],
    declarations: [TuiTilesComponent, TuiTileComponent, TuiTileHandleDirective],
    exports: [TuiTilesComponent, TuiTileComponent, TuiTileHandleDirective],
})
export class TuiTilesModule {}
