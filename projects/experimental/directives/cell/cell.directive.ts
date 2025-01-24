import {Directive, Inject, Input} from '@angular/core';
import {TuiDirectiveStylesService} from '@taiga-ui/cdk';
import {
    tuiAvatarOptionsProvider,
    tuiButtonOptionsProvider,
} from '@taiga-ui/experimental/components';

import {TuiCellComponent} from './cell.component';
import {TUI_CELL_OPTIONS, TuiCellOptions} from './cell.options';

@Directive({
    selector: '[tuiCell]:not(ng-template)',
    providers: [
        tuiAvatarOptionsProvider({size: 's'}),
        tuiButtonOptionsProvider({size: 's'}),
    ],
    host: {
        tuiCell: '',
        '[attr.data-size]': 'size || options.size',
        '[attr.data-height]': 'height',
    },
})
export class TuiCellDirective {
    @Input('tuiCell')
    size: TuiCellOptions['size'] | '' = this.options.size;

    @Input('tuiCellHeight')
    height: TuiCellOptions['height'] = this.options.height;

    constructor(
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
        @Inject(TUI_CELL_OPTIONS) readonly options: TuiCellOptions,
    ) {
        directiveStyles.addComponent(TuiCellComponent);
    }
}
