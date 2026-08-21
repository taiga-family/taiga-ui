import {
    ChangeDetectionStrategy,
    Component,
    contentChild,
    ElementRef,
    ViewEncapsulation,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiValue} from '@taiga-ui/cdk/utils/dom';

@Component({
    selector: 'tui-input-inline',
    templateUrl: './input-inline.template.html',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './input-inline.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'data-tui-version': TUI_VERSION},
})
export class TuiInputInline {
    protected readonly input = contentChild(NgControl, {
        read: ElementRef<HTMLInputElement>,
    });

    protected readonly value = tuiValue(this.input);
}
