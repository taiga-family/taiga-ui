import {
    ChangeDetectionStrategy,
    Component,
    computed,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {TuiFade} from '@taiga-ui/kit/directives/fade';

@Component({
    selector: 'tui-avatar-labeled',
    imports: [TuiFade],
    template: `
        <ng-content />
        @if (label().length) {
            @for (word of words(); track $index) {
                <span tuiFade>{{ word }}</span>
            }
        }
    `,
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './avatar-labeled.styles.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAvatarLabeled {
    public readonly label = input('');

    protected readonly words = computed(() => this.label().split(' '));
}
