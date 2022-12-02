import {isPlatformBrowser, Location} from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ElementRef,
    forwardRef,
    HostListener,
    Inject,
    Input,
    OnInit,
    PLATFORM_ID,
    Renderer2,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {UrlSerializer, UrlTree} from '@angular/router';
import {TUI_IS_MOBILE, tuiDebounce, TuiDestroyService, tuiPx} from '@taiga-ui/cdk';
import {TuiBrightness, TuiModeDirective} from '@taiga-ui/core';
import {Subject} from 'rxjs';
import {startWith, takeUntil} from 'rxjs/operators';

import {TUI_DOC_DEMO_TEXTS} from '../../tokens/i18n';

const MIN_COMPONENT_WIDTH = 104;

@Component({
    selector: `tui-doc-demo`,
    templateUrl: `./demo.template.html`,
    styleUrls: [`./demo.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TuiDestroyService,
        {
            provide: TuiModeDirective,
            useExisting: forwardRef(() => TuiDocDemoComponent),
        },
    ],
})
export class TuiDocDemoComponent implements OnInit, AfterViewInit {
    @ViewChild(`content`)
    private readonly content?: ElementRef<HTMLElement>;

    @ViewChild(`wrapper`)
    private readonly wrapper?: ElementRef<HTMLElement>;

    @ViewChild(`resizerText`)
    private readonly resizerText?: ElementRef<HTMLElement>;

    private readonly isBrowser: boolean;
    private initialX = 0;
    private wrapperWidth = 0;

    @Input()
    control: AbstractControl | null = null;

    @ContentChild(TemplateRef)
    readonly template: TemplateRef<Record<string, unknown>> | null = null;

    testForm?: FormGroup;
    updateOnVariants = [`change`, `blur`, `submit`];
    updateOn: 'change' | 'blur' | 'submit' = `change`;
    expanded = false;
    opaque = true;
    modeControl = new FormControl();
    mode: TuiBrightness | null = null;
    readonly change$ = new Subject<void>();
    readonly items: readonly TuiBrightness[] = [`onLight`, `onDark`];

    constructor(
        @Inject(TUI_IS_MOBILE) readonly isMobile: boolean,
        @Inject(TuiDestroyService) private readonly destroy$: TuiDestroyService,
        @Inject(Renderer2) private readonly renderer: Renderer2,
        @Inject(PLATFORM_ID) platformId: Record<string, unknown>,
        @Inject(Location) private readonly locationRef: Location,
        @Inject(UrlSerializer) private readonly urlSerializer: UrlSerializer,
        @Inject(TUI_DOC_DEMO_TEXTS) readonly texts: [string, string, string],
    ) {
        this.isBrowser = isPlatformBrowser(platformId);

        const parsedMode = locationRef.path().match(/tuiMode=(onDark|onLight)/);

        if (parsedMode !== null && parsedMode.length > 0) {
            this.modeControl.setValue(parsedMode[1]);
        }
    }

    @tuiDebounce(200)
    @HostListener(`window:resize`)
    onResize(): void {
        this.setResizerTextContent();
    }

    ngOnInit(): void {
        this.createForm();
    }

    ngAfterViewInit(): void {
        this.modeControl.valueChanges
            .pipe(startWith(this.modeControl.value), takeUntil(this.destroy$))
            .subscribe(mode => {
                this.updateUrl(mode);

                const wrapperWidth =
                    parseInt(this.getUrlTree().queryParams.sandboxWidth, 10) +
                    this.getPaddingOfWrapper() +
                    this.getResizeButtonWidth();

                if (!Number.isNaN(wrapperWidth)) {
                    this.wrapperWidth = wrapperWidth;
                    this.setWidthWrapper(tuiPx(wrapperWidth));
                }

                this.setResizerTextContent();

                this.mode = mode;
                this.change$.next();
            });
    }

    setResizerTextContent(): void {
        if (!this.content || !this.resizerText) {
            return;
        }

        this.resizerText.nativeElement.textContent = (
            this.content.nativeElement.offsetWidth - this.getPaddingOfWrapper()
        ).toString();
    }

    onDragStart(event: MouseEvent): void {
        event.preventDefault();
        this.initialX = event.clientX;
        this.wrapperWidth = this.wrapper ? this.wrapper.nativeElement.offsetWidth : 0;
    }

    onDragContinues(event: MouseEvent): void {
        const deltaX = this.initialX - event.clientX;

        this.resizeContent(deltaX);
        this.setResizerTextContent();
    }

    onDragEnd(): void {
        this.wrapperWidth = this.wrapper ? this.wrapper.nativeElement.offsetWidth : 0;
        this.updateSandboxWidth();
    }

    toggleDetails(): void {
        this.expanded = !this.expanded;
    }

    updateOnChange(updateOn: 'change' | 'blur' | 'submit'): void {
        this.updateOn = updateOn;
        this.createForm();
    }

    private createForm(): void {
        const {control, updateOn} = this;

        if (!control) {
            return;
        }

        this.testForm = new FormGroup({testValue: control}, {updateOn});
    }

    private resizeContent(delta: number): void {
        this.setWidthWrapper(
            tuiPx(Math.max(this.wrapperWidth - delta, MIN_COMPONENT_WIDTH)),
        );
    }

    private setWidthWrapper(width: number | string): void {
        if (!this.wrapper) {
            return;
        }

        this.renderer.setStyle(this.wrapper.nativeElement, `width`, width);
    }

    private updateUrl(mode: string): void {
        const urlTree = this.getUrlTree();
        const modeParam = mode ?? urlTree.queryParams.tuiMode ? {tuiMode: mode} : {};
        const sandboxWidth = parseInt(urlTree.queryParams.sandboxWidth, 10);
        const resizeParam =
            !Number.isNaN(sandboxWidth) && MIN_COMPONENT_WIDTH > sandboxWidth
                ? {sandboxWidth}
                : {};

        urlTree.queryParams = {
            ...urlTree.queryParams,
            ...modeParam,
            ...resizeParam,
        };

        this.locationRef.go(String(urlTree));
    }

    private getUrlTree(): UrlTree {
        return this.urlSerializer.parse(this.locationRef.path());
    }

    private getPaddingOfWrapper(): number {
        const paddingLeft =
            this.isBrowser && this.content
                ? getComputedStyle(this.content.nativeElement).paddingLeft
                : `0`;

        return parseInt(paddingLeft || `0`, 10) * 2;
    }

    private getResizeButtonWidth(): number {
        return this.resizerText?.nativeElement.parentElement?.offsetWidth ?? 0;
    }

    private updateSandboxWidth(): void {
        const urlTree = this.getUrlTree();

        urlTree.queryParams.sandboxWidth = parseInt(
            this.resizerText?.nativeElement.textContent ?? `0`,
            10,
        );

        this.locationRef.go(String(urlTree));
    }
}
