import {NgModule} from '@angular/core';

import {TuiTile} from './tile.component';
import {TuiTileHandle} from './tile-handle.directive';
import {TuiTilesComponent} from './tiles.component';

@NgModule({
    declarations: [TuiTilesComponent, TuiTile, TuiTileHandle],
    exports: [TuiTilesComponent, TuiTile, TuiTileHandle],
})
export class TuiTiles {}
