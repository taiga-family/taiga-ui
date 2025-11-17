import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiCell} from '@taiga-ui/core/components/cell';

@Component({
    template: '',
    styles: '@import "@taiga-ui/kit/styles/components/file-cell.less";',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-file-cell'},
})
class Styles {}

@Directive({
    selector: '[tuiFileCell]',
    hostDirectives: [
        {
            directive: TuiCell,
            inputs: ['tuiCell:tuiFileCell'],
        },
    ],
    host: {
        tuiFileCell: '',
        '[attr.data-disabled]': 'disabled()',
    },
})
export class TuiFileCell {
    protected readonly nothing = tuiWithStyles(Styles);

    public readonly disabled = input(false, {
        transform: (value: unknown) => (value === '' ? true : Boolean(value)),
    });
}
