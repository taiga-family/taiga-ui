import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiThumbnailCardModule} from '@taiga-ui/experimental';

import {TuiThumbnailCardExample1} from './examples/1';
import {TuiThumbnailCardExample2} from './examples/2';
import {TuiThumbnailCardExample3} from './examples/3';
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
    ],
    exports: [ExampleTuiThumbnailCardComponent],
})
export class ExampleTuiThumbnailCardModule {}
