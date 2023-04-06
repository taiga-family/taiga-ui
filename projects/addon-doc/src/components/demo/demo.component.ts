import {Location} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ElementRef,
    forwardRef,
    HostListener,
    Inject,
    Input,
    OnInit,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {UrlSerializer, UrlTree} from '@angular/router';
import {
    TUI_IS_MOBILE,
    tuiClamp,
    TuiDestroyService,
    tuiPure,
    tuiPx,
    TuiResizeableDirective,
    TuiStringHandler,
} from '@taiga-ui/cdk';
import {TuiBrightness, TuiModeDirective} from '@taiga-ui/core';
import {Subject} from 'rxjs';

import {TUI_DOC_DEMO_TEXTS} from '../../tokens/i18n';
import {TUI_DOC_URL_STATE_HANDLER} from '../../tokens/url-state-handler';

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

    @Input()
    control: AbstractControl | null = null;

    @ContentChild(TemplateRef)
    readonly template: TemplateRef<Record<string, unknown>> | null = null;

    testForm?: FormGroup;
    readonly updateOnVariants = ['change', 'blur', 'submit'] as const;
    updateOn: 'blur' | 'change' | 'submit' = this.updateOnVariants[0];
    expanded = false;
    opaque = true;
    mode: TuiBrightness | null = this.getUrlTree().queryParams.tuiMode || null;
    sandboxWidth = parseInt(this.getUrlTree().queryParams.sandboxWidth, 10);

    readonly change$ = new Subject<void>();
    readonly items: readonly TuiBrightness[] = ['onLight', 'onDark'];

    constructor(
        @Inject(TUI_IS_MOBILE) readonly isMobile: boolean,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(Location) private readonly locationRef: Location,
        @Inject(UrlSerializer) private readonly urlSerializer: UrlSerializer,
        @Inject(TUI_DOC_DEMO_TEXTS) readonly texts: [string, string, string],
        @Inject(TUI_DOC_URL_STATE_HANDLER)
        private readonly urlStateHandler: TuiStringHandler<UrlTree>,
    ) {}

    @HostListener('window:resize')
    onResize(): void {
        this.updateWidth();
        this.onMouseUp();
    }

    @HostListener('document:mouseup.silent')
    onMouseUp(): void {
        this.updateUrl(this.mode, this.sandboxWidth);
    }

    ngOnInit(): void {
        this.createForm();
        this.updateWidth(this.sandboxWidth + this.delta);
    }

    onModeChange(mode: TuiBrightness | null): void {
        this.updateUrl(mode, this.sandboxWidth);
        this.mode = mode;
        this.change$.next();
    }

    toggleDetails(): void {
        this.expanded = !this.expanded;
    }

    updateOnChange(updateOn: 'blur' | 'change' | 'submit'): void {
        this.updateOn = updateOn;
        this.createForm();
    }

    updateWidth(width: number = NaN): void {
        if (!this.resizer || !this.resizeable || !this.content) {
            return;
        }

        const safe = width || this.resizeable.nativeElement.clientWidth;
        const total = this.elementRef.nativeElement.clientWidth;
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

    @tuiPure
    private updateUrl(tuiMode: TuiBrightness | null, sandboxWidth: number): void {
        const tree = this.getUrlTree();
        const {queryParams} = tree;
        const modeParam = tuiMode ? {tuiMode} : {};
        const resizeParam = !Number.isNaN(sandboxWidth) ? {sandboxWidth} : {};

        delete queryParams.sandboxWidth;
        delete queryParams.tuiMode;

        tree.queryParams = {
            ...queryParams,
            ...modeParam,
            ...resizeParam,
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
