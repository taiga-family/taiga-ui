import {JsonPipe, Location, NgIf, NgTemplateOutlet} from '@angular/common';
import type {ElementRef, OnInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    HostBinding,
    HostListener,
    inject,
    Input,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import type {AbstractControl} from '@angular/forms';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import type {Params, UrlTree} from '@angular/router';
import {UrlSerializer} from '@angular/router';
import {TuiThemeDarkService} from '@taiga-ui/addon-doc/services';
import {TUI_DOC_DEMO_TEXTS, TUI_DOC_URL_STATE_HANDLER} from '@taiga-ui/addon-doc/tokens';
import type {TuiDemoParams} from '@taiga-ui/addon-doc/types';
import {tuiCleanObject, tuiCoerceValueIsTrue} from '@taiga-ui/addon-doc/utils';
import {TuiResizeable, TuiResizer} from '@taiga-ui/cdk/directives/resizer';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp, tuiToInteger} from '@taiga-ui/cdk/utils/math';
import {tuiPure, tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiExpand} from '@taiga-ui/core/components/expand';
import {TuiGroupDirective} from '@taiga-ui/core/components/group';
import {TuiDataListWrapper} from '@taiga-ui/kit/components/data-list-wrapper';
import {TuiSwitch} from '@taiga-ui/kit/components/switch';
import {TuiChevron} from '@taiga-ui/kit/directives/chevron';
import {TuiSelectModule} from '@taiga-ui/legacy/components/select';
import {TuiTextfieldControllerModule} from '@taiga-ui/legacy/directives/textfield-controller';

const MIN_WIDTH = 160;

@Component({
    standalone: true,
    selector: 'tui-doc-demo',
    imports: [
        TuiResizer,
        FormsModule,
        TuiSwitch,
        TuiResizeable,
        NgIf,
        ReactiveFormsModule,
        NgTemplateOutlet,
        TuiButton,
        TuiChevron,
        TuiExpand,
        JsonPipe,
        TuiSelectModule,
        TuiGroupDirective,
        TuiTextfieldControllerModule,
        TuiDataListWrapper,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocDemo implements OnInit {
    @ViewChild(TuiResizeable, {static: true})
    private readonly resizeable?: ElementRef<HTMLElement>;

    @ViewChild('content', {static: true})
    private readonly content?: ElementRef<HTMLElement>;

    @ViewChild('resizer', {static: true})
    private readonly resizer?: ElementRef<HTMLElement>;

    private readonly el = tuiInjectElement();
    private readonly locationRef = inject(Location);
    private readonly urlSerializer = inject(UrlSerializer);
    private readonly urlStateHandler = inject(TUI_DOC_URL_STATE_HANDLER);

    @ContentChild(TemplateRef)
    protected readonly template: TemplateRef<Record<string, unknown>> | null = null;

    protected dark = tuiCoerceValueIsTrue(
        this.params.darkMode ?? inject(TuiThemeDarkService).value,
    );

    protected testForm?: FormGroup;

    protected readonly updateOnVariants = ['change', 'blur', 'submit'] as const;

    protected updateOn: 'blur' | 'change' | 'submit' =
        this.params.updateOn || this.updateOnVariants[0];

    protected opaque = tuiCoerceValueIsTrue(this.params.sandboxOpaque ?? true);
    protected expanded = tuiCoerceValueIsTrue(this.params.sandboxExpanded ?? false);
    protected sandboxWidth = tuiToInteger(this.params.sandboxWidth);
    protected readonly texts = inject(TUI_DOC_DEMO_TEXTS);

    @Input()
    public control: AbstractControl | null = null;

    @Input()
    @HostBinding('class._sticky')
    public sticky = true;

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

    protected onModeChange(dark: boolean): void {
        this.dark = dark;
        this.updateUrl({sandboxWidth: this.sandboxWidth, darkMode: this.dark});
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

        tree.queryParams = {
            ...queryParams,
            ...tuiCleanObject({...params}),
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
