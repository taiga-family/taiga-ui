import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {TuiLink} from '@taiga-ui/core/components/link';
import {TUI_BREAKPOINT} from '@taiga-ui/core/tokens';
import {TUI_INPUT_FILE_TEXTS} from '@taiga-ui/kit/tokens';
import {injectContext} from '@taiga-ui/polymorpheus';

import {TuiInputFiles} from './input-files.component';

@Component({
    imports: [TuiLink],
    template: `
        <a tuiLink>{{ context.$implicit ? '' : link() }}</a>
        @if (breakpoint() !== 'mobile') {
            {{ context.$implicit ? dragged() : label() }}
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiInputFilesContent {
    private readonly texts = inject(TUI_INPUT_FILE_TEXTS);
    private readonly component = inject(TuiInputFiles);

    protected readonly breakpoint = inject(TUI_BREAKPOINT);
    protected readonly context = injectContext<TuiContext<boolean>>();
    protected readonly link = computed(() =>
        this.component.input()?.el.multiple
            ? this.texts().defaultLinkMultiple
            : this.texts().defaultLinkSingle,
    );

    protected readonly label = computed(() =>
        this.component.input()?.el.multiple
            ? this.texts().defaultLabelMultiple
            : this.texts().defaultLabelSingle,
    );

    protected readonly dragged = computed(() =>
        this.component.input()?.el.multiple
            ? this.texts().dropMultiple
            : this.texts().drop,
    );
}
