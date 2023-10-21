import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiThumbnailCardModule} from '@taiga-ui/addon-commerce';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';

import {TuiThumbnailCardExample1} from './examples/1';
import {TuiThumbnailCardExample2} from './examples/2';
import {TuiThumbnailCardExample3} from './examples/3';
import {TuiThumbnailCardExample4} from './examples/4';
import {ExampleTuiThumbnailCardComponent} from './thumbnail-card.component';

@NgModule({
    imports: [
        CommonModule,
        TuiThumbnailCardModule,
        tuiGetDocModules(ExampleTuiThumbnailCardComponent),
    ],
    declarations: [
        ExampleTuiThumbnailCardComponent,
        TuiThumbnailCardExample1,
        TuiThumbnailCardExample2,
        TuiThumbnailCardExample3,
        TuiThumbnailCardExample4,
    ],
    exports: [ExampleTuiThumbnailCardComponent],
})
export class ExampleTuiThumbnailCardModule {}
