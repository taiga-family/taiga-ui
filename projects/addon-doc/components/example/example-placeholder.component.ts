import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {tuiToKebab} from '@taiga-ui/addon-doc/utils';

@Component({
    selector: 'tui-doc-example-placeholder',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.id]': 'id()',
        '[style.display]': '"block"',
        '[style.min-block-size.rem]': 'minHeight()',
    },
})
export class TuiDocExamplePlaceholder {
    protected readonly id = computed(() => tuiToKebab(this.heading()));
    public readonly heading = input('');
    public readonly minHeight = input(21.875);
}
