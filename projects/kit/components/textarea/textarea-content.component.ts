import {
    ChangeDetectionStrategy,
    Component,
    effect,
    type ElementRef,
    inject,
    ViewEncapsulation,
    viewChild,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {TuiScrollControls} from '@taiga-ui/core/components/scrollbar';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiTextareaComponent} from './textarea.component';

@Component({
    selector: 'tui-textarea-content',
    imports: [PolymorpheusOutlet, TuiScrollControls],
    templateUrl: './textarea-content.template.html',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './textarea.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'data-tui-version': TUI_VERSION},
})
export class TuiTextareaContent {
    private readonly textRef = viewChild<ElementRef<HTMLSpanElement>>('text');

    protected readonly host = inject(TuiTextareaComponent);
    protected readonly ef = effect(() => this.host.text.set(this.textRef()));
}
