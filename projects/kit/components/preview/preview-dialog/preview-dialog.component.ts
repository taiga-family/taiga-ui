import {
    ChangeDetectionStrategy,
    Component,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import type {TuiPopover} from '@taiga-ui/cdk/services';
import {tuiFadeIn, tuiSlideInTop} from '@taiga-ui/core/animations';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';
import {tuiGetDuration} from '@taiga-ui/core/utils/miscellaneous';
import {
    POLYMORPHEUS_CONTEXT,
    PolymorpheusOutlet,
    PolymorpheusTemplate,
} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    selector: 'tui-preview-dialog',
    imports: [PolymorpheusOutlet, PolymorpheusTemplate],
    template: `
        <ng-container *polymorpheusOutlet="context.content as text; context: context">
            {{ text }}
        </ng-container>
    `,
    styleUrls: ['./preview-dialog.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideInTop, tuiFadeIn],
    host: {
        '(document:keydown.esc)': 'context.$implicit.complete()',
        '[@tuiSlideInTop]': 'animation',
        '[@tuiFadeIn]': 'animation',
    },
})
export class TuiPreviewDialog {
    protected readonly context = inject<TuiPopover<void, void>>(POLYMORPHEUS_CONTEXT);
    protected readonly animation = {
        value: '',
        params: {
            start: '100vh',
            duration: tuiGetDuration(inject(TUI_ANIMATIONS_SPEED)),
        },
    };
}
