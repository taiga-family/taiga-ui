import {
    ChangeDetectionStrategy,
    Component,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import type {TuiPopover} from '@taiga-ui/cdk';
import {
    TUI_ANIMATIONS_SPEED,
    tuiFadeIn,
    tuiGetDuration,
    tuiSlideInTop,
} from '@taiga-ui/core';
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
export class TuiPreviewDialogComponent {
    protected readonly context = inject<TuiPopover<void, void>>(POLYMORPHEUS_CONTEXT);
    protected readonly animation = {
        value: '',
        params: {
            start: '100vh',
            duration: tuiGetDuration(inject(TUI_ANIMATIONS_SPEED)),
        },
    };
}
