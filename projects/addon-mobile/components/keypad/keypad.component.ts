import {NgTemplateOutlet} from '@angular/common';
import {
    booleanAttribute,
    ChangeDetectionStrategy,
    Component,
    computed,
    contentChildren,
    inject,
    input,
    model,
    output,
} from '@angular/core';
import {TuiIcon} from '@taiga-ui/core/components/icon';

import {TUI_KEYPAD_OPTIONS, type TuiKeypadKey} from './keypad.options';
import {TuiKeypadKeyDirective} from './keypad-key.directive';

@Component({
    selector: 'tui-keypad',
    imports: [NgTemplateOutlet, TuiIcon],
    templateUrl: './keypad.component.html',
    styleUrl: './keypad.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.disabled]': 'disabled() ? "" : null',
        '[style.--t-columns]': 'columns()',
        '[style.--t-rows]': 'rows()',
    },
})
export class TuiKeypadComponent {
    protected readonly options = inject(TUI_KEYPAD_OPTIONS);

    public readonly keys = input(this.options.keys);
    public readonly disabled = input(false, {transform: booleanAttribute});
    public readonly disabledKeys = input<readonly TuiKeypadKey[]>([]);
    public readonly activeKey = input<TuiKeypadKey | null>(null);
    public readonly ariaLabels = input<Record<string, string>>({});
    public readonly value = model('');
    public readonly key = output<TuiKeypadKey>();

    protected readonly keyTemplates = contentChildren(TuiKeypadKeyDirective);

    protected readonly columns = computed(() =>
        Math.max(1, ...this.keys().map((row) => row.length)),
    );

    protected readonly rows = computed(() => this.keys().length);

    protected readonly templateMap = computed(
        () => new Map(this.keyTemplates().map((d) => [d.tuiKeypadKey(), d.template])),
    );

    protected isKeyDisabled(key: TuiKeypadKey): boolean {
        return this.disabled() || this.disabledKeys().includes(key);
    }

    protected content(key: TuiKeypadKey): string {
        const icons = this.options.icons as Record<string, string | undefined>;

        return icons[key] ?? key;
    }

    protected ariaLabel(key: TuiKeypadKey): string | null {
        const needsFallback =
            !this.templateMap().has(key) && this.content(key).startsWith('@tui.');

        return this.ariaLabels()?.[key] || (needsFallback ? key : null);
    }

    protected onKeyClick(key: TuiKeypadKey): void {
        if (this.isKeyDisabled(key)) {
            return;
        }

        if (key === 'backspace') {
            this.value.update((value) => (value || '').slice(0, -1));
        } else if (key === 'clear') {
            this.value.set('');
        } else if (key !== 'enter') {
            this.value.update((value) => (value || '') + key);
        }

        this.key.emit(key);
    }

    protected onLongTap(key: TuiKeypadKey): void {
        if (key === 'backspace' && !this.isKeyDisabled(key)) {
            this.value.set('');
        }
    }
}
