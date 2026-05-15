import {NgTemplateOutlet} from '@angular/common';
import {
    booleanAttribute,
    ChangeDetectionStrategy,
    Component,
    computed,
    contentChildren,
    Directive,
    inject,
    input,
    model,
    output,
    TemplateRef,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiInjectElement} from '@taiga-ui/cdk/utils';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {filter, fromEvent, race, switchMap, take, timer} from 'rxjs';

import {TuiKeypadHostDirective} from './keypad-host.directive';

export type TuiKeypadAction = 'backspace' | 'clear' | 'enter';

// eslint-disable-next-line
export type TuiKeypadKey = TuiKeypadAction | (string & {});

export type TuiKeypadCell = TuiKeypadKey | null;

export const TUI_DEFAULT_KEYPAD: ReadonlyArray<readonly TuiKeypadCell[]> = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    [',', '0', 'backspace'],
] as const;

@Directive({selector: 'ng-template[tuiKeypadKey]'})
export class TuiKeypadKeyDirective {
    public readonly tuiKeypadKey = input.required<TuiKeypadKey>();
    public readonly template = inject<TemplateRef<unknown>>(TemplateRef);
}

@Component({
    selector: 'tui-keypad',
    imports: [NgTemplateOutlet, TuiIcon],
    templateUrl: './keypad.component.html',
    styleUrl: './keypad.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.data-open]': 'open()',
        '[attr.data-size]': 'size()',
        '[attr.disabled]': 'disabled() ? "" : null',
        '[style.--tui-pad-columns]': 'columns()',
        '[style.--tui-pad-rows]': 'rows()',
    },
})
export class TuiKeypadComponent {
    private readonly host = inject(TuiKeypadHostDirective, {optional: true});
    public readonly size = input<'fluid' | 'l' | 'm' | 's'>('m');

    public readonly keys =
        input<ReadonlyArray<readonly TuiKeypadCell[]>>(TUI_DEFAULT_KEYPAD);

    public readonly disabled = input(false, {transform: booleanAttribute});
    public readonly disabledKeys = input<readonly TuiKeypadKey[]>([]);
    public readonly activeKey = input<TuiKeypadKey | null>(null);
    public readonly value = model('');
    public readonly key = output<TuiKeypadKey>();
    public readonly open = computed(() => this.host?.focused() ?? true);
    protected readonly keyTemplates = contentChildren(TuiKeypadKeyDirective);

    protected readonly columns = computed(() =>
        Math.max(1, ...this.keys().map((row) => row.length)),
    );

    protected readonly rows = computed(() => this.keys().length);

    protected readonly templateMap = computed(
        () => new Map(this.keyTemplates().map((d) => [d.tuiKeypadKey(), d.template])),
    );

    constructor() {
        const el = tuiInjectElement();

        fromEvent<PointerEvent>(el, 'pointerdown')
            .pipe(
                filter(
                    ({target}) =>
                        (target as Element)?.closest('[data-key="backspace"]') !== null,
                ),
                switchMap(() =>
                    race(
                        timer(500),
                        fromEvent(el, 'pointerup').pipe(
                            take(1),
                            filter(() => false),
                        ),
                    ),
                ),
                takeUntilDestroyed(),
            )
            .subscribe(() => this.value.set(''));
    }

    protected isKeyDisabled(key: TuiKeypadKey): boolean {
        return this.disabled() || this.disabledKeys().includes(key);
    }

    protected onKeyClick(key: TuiKeypadKey): void {
        if (this.isKeyDisabled(key)) {
            return;
        }

        if (key === 'backspace') {
            this.value.update((v) => v.slice(0, -1));
        } else if (key === 'clear') {
            this.value.set('');
        } else if (key !== 'enter') {
            this.value.update((v) => v + key);
        }

        this.key.emit(key);
    }
}
