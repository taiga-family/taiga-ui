import {
    ChangeDetectionStrategy,
    Component,
    type ElementRef,
    inject,
    viewChild,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {TuiScrollControls} from '@taiga-ui/core/components/scrollbar';
import {TuiTextfieldComponent} from '@taiga-ui/core/components/textfield';
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
    protected readonly textfield = inject(TuiTextfieldComponent);

    public scrollTo(top: number): void {
        requestAnimationFrame(() => {
            this.textRef()?.nativeElement.scrollTo({top});
        });
    }
}
