import {AfterViewInit, Component, Inject, ViewChild} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {USER_AGENT} from '@ng-web-apis/common';
import {TuiDocDemoComponent} from '@taiga-ui/addon-doc';
import {TuiDestroyService, tuiIsIE, tuiIsString, tuiPure, tuiPx} from '@taiga-ui/cdk';
import {TuiBrightness} from '@taiga-ui/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

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
    @ViewChild('demo')
    private readonly demo?: TuiDocDemoComponent;

    readonly isIE = tuiIsIE(this.userAgent);

    readonly change$ = new Subject<void>();

    constructor(
        @Inject(TuiDestroyService) private readonly destroy$: TuiDestroyService,
        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
        @Inject(TUI_DOC_CUSTOMIZATION_VARS) private variables: Record<string, string>,
        @Inject(USER_AGENT) private readonly userAgent: string,
    ) {}

    get style(): SafeStyle {
        return this.getStyle(this.sanitizer, this.stringify(this.variables));
    }

    get keys(): readonly string[] {
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

    get mode(): TuiBrightness | null {
        return this.demo?.mode || null;
    }

    ngAfterViewInit(): void {
        if (!this.demo) {
            return;
        }

        this.demo.change$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.change$.next();
        });
    }

    isLight(key: string): boolean {
        return key.includes('onDark');
    }

    isDark(key: string): boolean {
        return key.includes('onLight');
    }

    onModelChange(variable: string, value: string | number): void {
        this.variables = {
            ...this.variables,
            [variable]: tuiIsString(value) ? value : tuiPx(value),
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
    private getKeys(variables: Record<string, string>): readonly string[] {
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
