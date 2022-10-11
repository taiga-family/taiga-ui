import {
    AfterViewInit,
    Component,
    forwardRef,
    Inject,
    Provider,
    ViewChild,
} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {WINDOW} from '@ng-web-apis/common';
import {TuiDocDemoComponent} from '@taiga-ui/addon-doc';
import {TuiDestroyService, tuiIsString, tuiPure, tuiPx} from '@taiga-ui/cdk';
import {TuiBrightness, TuiModeDirective} from '@taiga-ui/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {CSS_VARS} from '../../tokens/css-vars';
import {TUI_DOC_CUSTOMIZATION_VARS} from './customization-vars.token';

/**
 * @note: prevent circular dependencies
 * customization.provider.ts -> customization.component.ts -> customization.provider.ts
 */
export const TUI_DOC_CUSTOMIZATION_PROVIDERS: Provider[] = [
    TuiDestroyService,
    {
        provide: TuiModeDirective,
        useExisting: forwardRef(() => TuiCustomizationComponent),
    },
    {
        provide: TUI_DOC_CUSTOMIZATION_VARS,
        deps: [WINDOW, CSS_VARS],
        useFactory: (
            windowRef: Window,
            variables: readonly string[],
        ): Record<string, string> => {
            const styles = windowRef.getComputedStyle(windowRef.document.documentElement);

            return variables.reduce(
                (dictionary, variable) => ({
                    ...dictionary,
                    [variable]: styles.getPropertyValue(variable).trim(),
                }),
                {},
            );
        },
    },
];

@Component({
    selector: `tui-customization`,
    templateUrl: `./customization.template.html`,
    styleUrls: [`./customization.style.less`],
    changeDetection,
    providers: TUI_DOC_CUSTOMIZATION_PROVIDERS,
})
export class TuiCustomizationComponent implements AfterViewInit {
    @ViewChild(`demo`)
    private readonly demo?: TuiDocDemoComponent;

    readonly change$ = new Subject<void>();

    constructor(
        @Inject(TuiDestroyService) private readonly destroy$: TuiDestroyService,
        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
        @Inject(TUI_DOC_CUSTOMIZATION_VARS) private variables: Record<string, string>,
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
        return key.includes(`onDark`);
    }

    isDark(key: string): boolean {
        return key.includes(`onLight`);
    }

    onModelChange(variable: string, value: string | number): void {
        this.variables = {
            ...this.variables,
            [variable]: tuiIsString(value) ? value : tuiPx(value),
        };
    }

    getType(key: string): 'number' | 'color' | 'string' {
        const variable = this.variables[key];

        if (key.includes(`boxshadow`)) {
            return `string`;
        }

        return variable.startsWith(`#`) || variable.startsWith(`rgb`)
            ? `color`
            : `number`;
    }

    getVariable(key: string): string | number {
        const variable = this.variables[key];

        return variable.includes(`px`) ? Number.parseInt(variable, 10) : variable;
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
            ``,
        );
    }
}
