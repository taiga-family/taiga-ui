import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';

import {TuiComponentPipe} from './component.pipe';
import {TuiExamplePipe} from './example.pipe';
import {TuiKebabPipe} from './kebab.pipe';
import {TuiSetup} from './setup.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDoc,
        TuiComponentPipe,
        TuiExamplePipe,
        TuiKebabPipe,
        TuiSetup,
    ],
    exports: [
        CommonModule,
        TuiAddonDoc,
        TuiComponentPipe,
        TuiExamplePipe,
        TuiKebabPipe,
        TuiSetup,
    ],
})
export class TuiDemo {}
