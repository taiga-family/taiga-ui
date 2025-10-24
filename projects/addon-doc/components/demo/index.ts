import {JsonPipe, Location, NgTemplateOutlet} from '@angular/common';
import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    computed,
    ContentChild,
    type ElementRef,
    inject,
    input,
    signal,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {takeUntilDestroyed, toObservable} from '@angular/core/rxjs-interop';
import {
    type AbstractControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import {type Params, UrlSerializer, type UrlTree} from '@angular/router';
import {TUI_DOC_DEMO_TEXTS, TUI_DOC_URL_STATE_HANDLER} from '@taiga-ui/addon-doc/tokens';
import {type TuiDemoParams} from '@taiga-ui/addon-doc/types';
import {tuiCleanObject, tuiCoerceValueIsTrue} from '@taiga-ui/addon-doc/utils';
import {TuiItem} from '@taiga-ui/cdk/directives/item';
import {TuiResizable, TuiResizer} from '@taiga-ui/cdk/directives/resizer';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp, tuiToInteger} from '@taiga-ui/cdk/utils/math';
import {tuiPure, tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiExpand} from '@taiga-ui/core/components/expand';
import {TuiTextfield} from '@taiga-ui/core/components/textfield';
import {TuiGroup} from '@taiga-ui/core/directives/group';
import {TUI_DARK_MODE} from '@taiga-ui/core/tokens';
import {TuiDataListWrapper} from '@taiga-ui/kit/components/data-list-wrapper';
import {TuiSelect} from '@taiga-ui/kit/components/select';
import {TuiSwitch} from '@taiga-ui/kit/components/switch';
import {TuiChevron} from '@taiga-ui/kit/directives/chevron';
import {TuiTextfieldControllerModule} from '@taiga-ui/legacy/directives/textfield-controller';
import {skip} from 'rxjs';

const MIN_WIDTH = 160;

@Component({
    selector: 'tui-doc-demo',
    imports: [
        FormsModule,
        JsonPipe,
        NgTemplateOutlet,
        ReactiveFormsModule,
        TuiButton,
        TuiChevron,
        TuiDataListWrapper,
        TuiExpand,
        TuiGroup,
        TuiItem,
        TuiResizable,
        TuiResizer,
        TuiSelect,
        TuiSwitch,
        TuiTextfield,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._sticky]': 'sticky()',
        '(window:resize)': 'onResize()',
        '(document:mouseup.zoneless)': 'onMouseUp()',
    },
})
export class TuiDocDemo implements AfterViewInit {
    @ViewChild(TuiResizable, {static: true})
    private readonly resizable?: ElementRef<HTMLElement>;

    @ViewChild('content', {static: true})
    private readonly content?: ElementRef<HTMLElement>;

    @ViewChild('resizer', {static: true})
    private readonly resizer?: ElementRef<HTMLElement>;

    private readonly el = tuiInjectElement();
    private readonly locationRef = inject(Location);
    private readonly urlSerializer = inject(UrlSerializer);
    private readonly urlStateHandler = inject(TUI_DOC_URL_STATE_HANDLER);
    private readonly darkMode = inject(TUI_DARK_MODE);

    @ContentChild(TemplateRef)
    protected readonly template: TemplateRef<Record<string, unknown>> | null = null;

    protected readonly rendered = signal(false);

    protected theme = computed(() => (this.dark() ? 'dark' : 'light'));

    protected dark = signal(
        tuiCoerceValueIsTrue(this.params.darkMode ?? this.darkMode()),
    );

    protected readonly $ = toObservable(this.darkMode)
        .pipe(skip(1), takeUntilDestroyed())
        .subscribe((mode) => this.onModeChange(mode));

    protected testForm?: FormGroup;

    protected readonly updateOnVariants = ['change', 'blur', 'submit'] as const;

    protected updateOn: 'blur' | 'change' | 'submit' =
        this.params.updateOn || this.updateOnVariants[0];

    protected opaque = tuiCoerceValueIsTrue(this.params.sandboxOpaque ?? true);
    protected expanded = tuiCoerceValueIsTrue(this.params.sandboxExpanded ?? false);
    protected sandboxWidth = tuiToInteger(this.params.sandboxWidth);
    protected readonly texts = inject(TUI_DOC_DEMO_TEXTS);

    public readonly control = input<AbstractControl | null>(null);

    public readonly sticky = input(true);

    public ngAfterViewInit(): void {
        this.createForm();
        this.updateWidth(this.sandboxWidth + this.delta);
        this.rendered.set(true);
    }

    protected onResize(): void {
        this.updateWidth();
        this.onMouseUp();
    }

    protected onMouseUp(): void {
        this.updateUrl({sandboxWidth: this.sandboxWidth});
    }

    protected onModeChange(darkMode: boolean): void {
        this.dark.set(darkMode);
        this.updateUrl({sandboxWidth: this.sandboxWidth, darkMode});
    }

    protected toggleDetails(): void {
        this.expanded = !this.expanded;
        this.updateUrl({sandboxExpanded: this.expanded});
    }

    protected changeOpaque(opaque: boolean): void {
        this.opaque = opaque;
        this.updateUrl({sandboxOpaque: this.opaque});
    }

    protected updateOnChange(updateOn: 'blur' | 'change' | 'submit'): void {
        this.updateOn = updateOn;
        this.updateUrl({updateOn});
        this.createForm();
    }

    protected updateWidth(width = NaN): void {
        if (!this.resizer || !this.resizable || !this.content) {
            return;
        }

        const safe = width || this.resizable.nativeElement.clientWidth;
        const total = this.el.clientWidth;
        const clamped = Math.round(tuiClamp(safe, MIN_WIDTH, total)) - this.delta;
        const validated = safe < total ? clamped : NaN;

        this.resizer.nativeElement.textContent = String(clamped || '-');
        this.resizable.nativeElement.style.width = validated ? tuiPx(safe) : '';
        this.sandboxWidth = validated;
    }

    private get delta(): number {
        return this.resizable && this.content
            ? this.resizable.nativeElement.clientWidth -
                  this.content.nativeElement.clientWidth
            : 0;
    }

    private get params(): Params | TuiDemoParams {
        return this.getUrlTree().queryParams;
    }

    @tuiPure
    private updateUrl(params: TuiDemoParams): void {
        const tree = this.getUrlTree();
        const {queryParams} = tree;

        delete queryParams.sandboxWidth;

        tree.queryParams = {
            ...queryParams,
            ...tuiCleanObject({...params}),
        };

        this.locationRef.go(this.urlStateHandler(tree));
    }

    private createForm(): void {
        const {control: controlInput, updateOn} = this;
        const control = controlInput();

        if (control) {
            this.testForm = new FormGroup({testValue: control}, {updateOn});
        }
    }

    private getUrlTree(): UrlTree {
        return this.urlSerializer.parse(this.locationRef.path());
    }
}
