import {
    ChangeDetectionStrategy,
    Component,
    computed,
    input,
    ViewEncapsulation,
} from '@angular/core';
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
    styleUrl: './avatar-labeled.styles.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAvatarLabeled {
    public readonly label = input('');

    protected readonly words = computed(() => this.label().split(' '));
}
