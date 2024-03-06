import {Location} from '@angular/common';
import type {OnInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ElementRef,
    forwardRef,
    HostBinding,
    HostListener,
    inject,
    Input,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import type {AbstractControl} from '@angular/forms';
import {FormGroup} from '@angular/forms';
import type {Params, UrlTree} from '@angular/router';
import {UrlSerializer} from '@angular/router';
import type {TuiDemoParams} from '@taiga-ui/addon-doc/interfaces';
import {TUI_DOC_DEMO_TEXTS, TUI_DOC_URL_STATE_HANDLER} from '@taiga-ui/addon-doc/tokens';
import {tuiCoerceValueIsTrue} from '@taiga-ui/addon-doc/utils';
import {
    TUI_IS_MOBILE,
    tuiClamp,
    tuiCleanObject,
    TuiDestroyService,
    tuiPure,
    tuiPx,
    TuiResizeableDirective,
    tuiToInteger,
} from '@taiga-ui/cdk';
import type {TuiBrightness} from '@taiga-ui/core';
import {TuiModeDirective} from '@taiga-ui/core';
import {TUI_ARROW_OPTIONS} from '@taiga-ui/kit';
import {Subject} from 'rxjs';

const MIN_WIDTH = 160;

@Component({
    selector: 'tui-doc-demo',
    templateUrl: './demo.template.html',
    styleUrls: ['./demo.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TuiDestroyService,
        {
            provide: TuiModeDirective,
            useExisting: forwardRef(() => TuiDocDemoComponent),
        },
    ],
})
export class TuiDocDemoComponent implements OnInit {
    @ViewChild(TuiResizeableDirective, {static: true})
    private readonly resizeable?: ElementRef<HTMLElement>;

    @ViewChild('content', {static: true})
    private readonly content?: ElementRef<HTMLElement>;

    @ViewChild('resizer', {static: true})
    private readonly resizer?: ElementRef<HTMLElement>;

    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private readonly locationRef = inject(Location);
    private readonly urlSerializer = inject(UrlSerializer);
    private readonly urlStateHandler = inject(TUI_DOC_URL_STATE_HANDLER);

    @Input()
    public control: AbstractControl | null = null;

    @Input()
    @HostBinding('class._sticky')
    public sticky = true;

    public mode: TuiBrightness | null = this.params.tuiMode || null;
    public readonly change$ = new Subject<void>();

    @ContentChild(TemplateRef)
    protected readonly template: TemplateRef<Record<string, unknown>> | null = null;

    protected testForm?: FormGroup;

    protected readonly updateOnVariants = ['change', 'blur', 'submit'] as const;

    protected updateOn: 'blur' | 'change' | 'submit' =
        this.params.updateOn || this.updateOnVariants[0];

    protected opaque = tuiCoerceValueIsTrue(this.params.sandboxOpaque ?? true);
    protected expanded = tuiCoerceValueIsTrue(this.params.sandboxExpanded ?? false);
    protected sandboxWidth = tuiToInteger(this.params.sandboxWidth);
    protected readonly items: readonly TuiBrightness[] = ['onLight', 'onDark'];
    protected readonly options = inject(TUI_ARROW_OPTIONS);
    protected readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly texts = inject(TUI_DOC_DEMO_TEXTS);

    public ngOnInit(): void {
        this.createForm();
        this.updateWidth(this.sandboxWidth + this.delta);
    }

    @HostListener('window:resize')
    protected onResize(): void {
        this.updateWidth();
        this.onMouseUp();
    }

    @HostListener('document:mouseup.silent')
    protected onMouseUp(): void {
        this.updateUrl({sandboxWidth: this.sandboxWidth});
    }

    protected onModeChange(mode: TuiBrightness | null): void {
        this.mode = mode;
        this.updateUrl({sandboxWidth: this.sandboxWidth});
        this.change$.next();
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
        if (!this.resizer || !this.resizeable || !this.content) {
            return;
        }

        const safe = width || this.resizeable.nativeElement.clientWidth;
        const total = this.el.clientWidth;
        const clamped = Math.round(tuiClamp(safe, MIN_WIDTH, total)) - this.delta;
        const validated = safe < total ? clamped : NaN;

        this.resizer.nativeElement.textContent = String(clamped || '-');
        this.resizeable.nativeElement.style.width = validated ? tuiPx(safe) : '';
        this.sandboxWidth = validated;
    }

    private get delta(): number {
        return this.resizeable && this.content
            ? this.resizeable.nativeElement.clientWidth -
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
        delete queryParams.tuiMode;

        tree.queryParams = {
            ...queryParams,
            ...tuiCleanObject({tuiMode: this.mode, ...params}),
        };

        this.locationRef.go(this.urlStateHandler(tree));
    }

    private createForm(): void {
        const {control, updateOn} = this;

        if (control) {
            this.testForm = new FormGroup({testValue: control}, {updateOn});
        }
    }

    private getUrlTree(): UrlTree {
        return this.urlSerializer.parse(this.locationRef.path());
    }
}
