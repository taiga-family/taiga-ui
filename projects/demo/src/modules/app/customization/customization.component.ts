import {AfterViewInit, Component, Inject, ViewChild} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {USER_AGENT} from '@ng-web-apis/common';
import {TuiDocDemoComponent} from '@taiga-ui/addon-doc';
import {isIE, TuiDestroyService, tuiPure} from '@taiga-ui/cdk';
import {TuiModeVariants} from '@taiga-ui/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {changeDetection} from '../../../change-detection-strategy';
import {
    TUI_DOC_CUSTOMIZATION_PROVIDERS,
    TUI_DOC_CUSTOMIZATION_VARS,
} from './customization.providers';

// @dynamic
@Component({
    selector: 'tui-customization',
    templateUrl: './customization.template.html',
    styleUrls: ['./customization.style.less'],
    changeDetection,
    providers: TUI_DOC_CUSTOMIZATION_PROVIDERS,
})
export class TuiCustomizationComponent implements AfterViewInit {
    readonly isIE = isIE(this.userAgent);

    readonly change$ = new Subject<void>();

    @ViewChild('demo')
    private readonly demo?: TuiDocDemoComponent;

    constructor(
        @Inject(TuiDestroyService) private readonly destroy$: TuiDestroyService,
        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
        @Inject(TUI_DOC_CUSTOMIZATION_VARS) private variables: Record<string, string>,
        @Inject(USER_AGENT) private readonly userAgent: string,
    ) {}

    get style(): SafeStyle {
        return this.getStyle(this.sanitizer, this.stringify(this.variables));
    }

    get keys(): ReadonlyArray<string> {
        return this.getKeys(this.variables);
    }

    get basic(): boolean {
        return !this.hasDark && !this.hasLight;
    }

    get hasLight(): boolean {
        return this.keys.some(this.isLight);
    }

    get hasDark(): boolean {
        return this.keys.some(this.isDark);
    }

    get mode(): TuiModeVariants | null {
        return (this.demo && this.demo.mode) || null;
    }

    ngAfterViewInit() {
        if (!this.demo) {
            return;
        }

        this.demo.change$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.change$.next();
        });
    }

    isLight(key: string): boolean {
        return key.includes('light');
    }

    isDark(key: string): boolean {
        return key.includes('dark');
    }

    onModelChange(variable: string, value: string | number) {
        this.variables = {
            ...this.variables,
            [variable]: typeof value === 'string' ? value : value + 'px',
        };
    }

    getType(key: string): 'number' | 'color' | 'string' {
        const variable = this.variables[key];

        if (key.includes('boxshadow')) {
            return 'string';
        }

        return variable.startsWith('#') || variable.startsWith('rgb')
            ? 'color'
            : 'number';
    }

    getVariable(key: string): string | number {
        const variable = this.variables[key];

        return variable.includes('px') ? Number.parseInt(variable, 10) : variable;
    }

    @tuiPure
    private getKeys(variables: Record<string, string>): ReadonlyArray<string> {
        return Object.keys(variables);
    }

    @tuiPure
    private getStyle(sanitizer: DomSanitizer, variables: string): SafeStyle {
        return sanitizer.bypassSecurityTrustStyle(variables);
    }

    @tuiPure
    private stringify(variables: Record<string, string>): string {
        return Object.keys(variables).reduce(
            (result, key) => `${key}: ${variables[key]}; ${result}`,
            '',
        );
    }
}
