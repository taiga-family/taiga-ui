import {AfterViewInit, Component, inject, ViewChild} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocDemoComponent} from '@taiga-ui/addon-doc';
import {TuiDestroyService, tuiIsString, tuiPure, tuiPx} from '@taiga-ui/cdk';
import {TuiBrightness} from '@taiga-ui/core';
import {Subject, takeUntil} from 'rxjs';

import {
    TUI_DOC_CUSTOMIZATION_PROVIDERS,
    TUI_DOC_CUSTOMIZATION_VARS,
} from './customization.providers';

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

    private readonly destroy$ = inject(TuiDestroyService, {self: true});
    private readonly sanitizer = inject(DomSanitizer);
    private variables = inject(TUI_DOC_CUSTOMIZATION_VARS);

    protected readonly change$ = new Subject<void>();

    public get style(): SafeStyle {
        return this.getStyle(this.sanitizer, this.stringify(this.variables));
    }

    public get keys(): readonly string[] {
        return this.getKeys(this.variables);
    }

    public get basic(): boolean {
        return !this.hasDark && !this.hasLight;
    }

    public get hasLight(): boolean {
        return this.keys.some(this.isLight);
    }

    public get hasDark(): boolean {
        return this.keys.some(this.isDark);
    }

    public get mode(): TuiBrightness | null {
        return this.demo?.mode || null;
    }

    public ngAfterViewInit(): void {
        if (!this.demo) {
            return;
        }

        this.demo.change$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.change$.next();
        });
    }

    public isLight(key: string): boolean {
        return key.includes('onDark');
    }

    public isDark(key: string): boolean {
        return key.includes('onLight');
    }

    public onModelChange(variable: string, value: number | string): void {
        this.variables = {
            ...this.variables,
            [variable]: tuiIsString(value) ? value : tuiPx(value),
        };
    }

    public getType(key: string): 'color' | 'number' | 'string' {
        const variable = this.variables[key];

        if (key.includes('boxshadow')) {
            return 'string';
        }

        return variable.startsWith('#') || variable.startsWith('rgb')
            ? 'color'
            : 'number';
    }

    public getVariable(key: string): number | string {
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
