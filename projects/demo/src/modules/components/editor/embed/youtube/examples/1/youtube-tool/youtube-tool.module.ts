import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDropdownModule,
    TuiHostedDropdownModule,
} from '@taiga-ui/core';
import {TuiInputInlineModule} from '@taiga-ui/kit';

import {ExampleTuiYoutubeToolComponent} from './youtube-tool.component';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiHostedDropdownModule,
        TuiActiveZoneModule,
        TuiDropdownModule,
        TuiInputInlineModule,
        FormsModule,
    ],
    declarations: [ExampleTuiYoutubeToolComponent],
    exports: [ExampleTuiYoutubeToolComponent],
})
export class ExampleTuiYoutubeToolModule {}
