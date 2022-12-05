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
    Self,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {UrlSerializer} from '@angular/router';
import {TUI_IS_MOBILE, TuiDestroyService, tuiPx} from '@taiga-ui/cdk';
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
    updateOn: 'blur' | 'change' | 'submit' = `change`;
    expanded = false;
    opaque = true;
    modeControl = new FormControl();
    mode: TuiBrightness | null = null;
    readonly change$ = new Subject<void>();
    readonly items: readonly TuiBrightness[] = [`onLight`, `onDark`];

    constructor(
        @Inject(TUI_IS_MOBILE) readonly isMobile: boolean,
        @Self() @Inject(TuiDestroyService) private readonly destroy$: TuiDestroyService,
        @Inject(Renderer2) private readonly renderer: Renderer2,
        @Inject(PLATFORM_ID) platformId: Record<string, unknown>,
        @Inject(Location) locationRef: Location,
        @Inject(UrlSerializer) urlSerializer: UrlSerializer,
        @Inject(TUI_DOC_DEMO_TEXTS) readonly texts: [string, string, string],
    ) {
        this.isBrowser = isPlatformBrowser(platformId);

        const parsedMode = locationRef.path().match(/tuiMode=(onDark|onLight)/);

        if (parsedMode !== null && parsedMode.length > 0) {
            this.modeControl.setValue(parsedMode[1]);
        }

        this.modeControl.valueChanges
            .pipe(startWith(this.modeControl.value), takeUntil(this.destroy$))
            .subscribe(mode => {
                const urlTree = urlSerializer.parse(locationRef.path());

                urlTree.queryParams = {
                    ...urlTree.queryParams,
                    tuiMode: mode,
                };

                locationRef.go(String(urlTree));

                this.mode = mode;
                this.change$.next();
            });
    }

    @HostListener(`window:resize`)
    onResize(): void {
        this.setResizerTextContent();
    }

    ngOnInit(): void {
        this.createForm();
    }

    ngAfterViewInit(): void {
        this.setResizerTextContent();
    }

    setResizerTextContent(): void {
        if (!this.content || !this.resizerText) {
            return;
        }

        const paddingLeft = this.isBrowser
            ? getComputedStyle(this.content.nativeElement).paddingLeft
            : `0`;
        const {offsetWidth} = this.content.nativeElement;

        this.resizerText.nativeElement.textContent = String(
            offsetWidth - parseInt(paddingLeft || `0`, 10) * 2,
        );
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
    }

    toggleDetails(): void {
        this.expanded = !this.expanded;
    }

    updateOnChange(updateOn: 'blur' | 'change' | 'submit'): void {
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
        if (!this.wrapper) {
            return;
        }

        this.renderer.setStyle(
            this.wrapper.nativeElement,
            `width`,
            tuiPx(Math.max(this.wrapperWidth - delta, MIN_COMPONENT_WIDTH)),
        );
    }
}
