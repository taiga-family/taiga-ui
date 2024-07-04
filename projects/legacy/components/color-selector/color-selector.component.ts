import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    InjectionToken,
    Input,
    Output,
} from '@angular/core';
import type {SafeStyle} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import type {TuiGradientDirection} from '@taiga-ui/cdk/utils/color';
import {
    tuiGetGradientData,
    tuiParseColor,
    tuiParseGradient,
} from '@taiga-ui/cdk/utils/color';
import {tuiDefaultSort, tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';

/**
 * @deprecated: drop in v5.0
 */
export const TUI_COLOR_SELECTOR_MODE_NAMES = new InjectionToken<[string, string]>(
    '[TUI_COLOR_SELECTOR_MODE_NAMES]',
    {
        factory: () => ['Solid color', 'Gradient'],
    },
);

/**
 * @deprecated: drop in v5.0
 */
export const TUI_DEFAULT_INPUT_COLORS = new Map([
    ['color-black-100', '#909090'],
    ['color-black-200', '#666666'],
    ['color-black-300', '#333333'],
    ['color-blue-100', '#1771e6'],
    ['color-blue-200', '#1464cc'],
    ['color-blue-300', '#0953b3'],
    ['color-gray-100', '#f5f5f6'],
    ['color-gray-200', '#e7e8ea'],
    ['color-gray-300', '#cbcfd3'],
    ['color-gray-400', '#959ba4'],
    ['color-gray-500', '#79818c'],
    ['color-gray-600', '#616871'],
    ['color-green-100', '#39b54a'],
    ['color-green-200', '#2ca53a'],
    ['color-green-300', '#168a21'],
    ['color-light-blue-100', '#ecf1f7'],
    ['color-light-blue-200', '#e4ebf3'],
    ['color-light-blue-300', '#dde4ed'],
    ['color-red-100', '#e01f19'],
    ['color-red-200', '#d3120e'],
    ['color-red-300', '#c40b08'],
    ['color-yellow-100', '#FFDD2C'],
    ['color-yellow-200', '#FCC521'],
    ['color-yellow-300', '#FAB618'],
    ['transparent', 'transparent'],
]);

const EMPTY_STOP: [number, number, number, number] = [0, 0, 0, 0];

const DEFAULT_STEPS: ReadonlyArray<[number, [number, number, number, number]]> = [
    [0, [0, 0, 0, 1]],
    [1, [255, 255, 255, 1]],
];

const ICONS: Record<TuiGradientDirection, string> = {
    'to top right': 'tuiIconArrowUpRight',
    'to right': 'tuiIconArrowRight',
    'to bottom right': 'tuiIconArrowDownRight',
    'to bottom': 'tuiIconArrowDown',
    'to bottom left': 'tuiIconArrowDownLeft',
    'to left': 'tuiIconArrowLeft',
    'to top left': 'tuiIconArrowUpLeft',
    'to top': 'tuiIconArrowUp',
};

/**
 * @deprecated: drop in v5.0
 */
@Component({
    selector: 'tui-color-selector',
    templateUrl: './color-selector.template.html',
    styleUrls: ['./color-selector.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiColorSelectorComponent {
    private stops = new Map(DEFAULT_STEPS);
    private currentStop = 0;
    private direction: TuiGradientDirection = 'to bottom';
    private readonly sanitizer = inject(DomSanitizer);

    @Input()
    public colors: ReadonlyMap<string, string> = new Map<string, string>();

    @Output()
    public readonly colorChange = new EventEmitter<string>();

    public color: [number, number, number, number] = [0, 0, 0, 1];

    public readonly modes = inject(TUI_COLOR_SELECTOR_MODE_NAMES);

    public currentMode = this.modes[0];

    public readonly buttons: readonly TuiGradientDirection[] = [
        'to top right',
        'to right',
        'to bottom right',
        'to bottom',
        'to bottom left',
        'to left',
        'to top left',
        'to top',
    ];

    @Input('color')
    public set colorSetter(color: string) {
        this.parse(color);
    }

    public get palette(): Map<string, string> {
        return this.filterPalette(this.colors, this.isGradient);
    }

    public get stopsKeys(): number[] {
        return this.getStopsKeys(this.stops);
    }

    public get currentColor(): [number, number, number, number] {
        return this.isGradient ? this.getStop(this.currentStop) : this.color;
    }

    public get gradient(): SafeStyle {
        return this.sanitizer.bypassSecurityTrustStyle(this.getGradient('to right'));
    }

    public get isGradient(): boolean {
        return this.currentMode === this.modes[1];
    }

    public getIcon(direction: TuiGradientDirection): string {
        return ICONS[direction];
    }

    public isModeActive(mode: string): boolean {
        return this.currentMode === mode;
    }

    public isDirectionActive(direction: TuiGradientDirection): boolean {
        return this.direction === direction;
    }

    public onPalettePick(color: string): void {
        this.updateColor(color);
    }

    public onDirectionChange(direction: TuiGradientDirection): void {
        this.direction = direction;
        this.updateColor(this.getGradient(direction));
    }

    public onModeSelect(mode: string): void {
        this.currentMode = mode;

        this.updateColor(
            mode === this.modes[0]
                ? `rgba(${this.color.join(', ')})`
                : this.getGradient(this.direction),
        );
    }

    public onIndexChange(index: number): void {
        this.currentStop = this.stopsKeys[index];
    }

    public onColorChange(color: [number, number, number, number]): void {
        if (!this.isGradient) {
            this.updateColor(`rgba(${color.join(', ')})`);

            return;
        }

        this.stops.set(this.currentStop, color);
        this.updateColor(this.getGradient(this.direction));
    }

    public onStopsChange(stopsKeys: readonly number[]): void {
        const removed = this.stopsKeys.find((item) => !stopsKeys.includes(item));
        const added = stopsKeys.find((item) => !this.stopsKeys.includes(item));

        if (removed === undefined && added !== undefined) {
            this.addStop(added);
        }

        if (removed !== undefined && added === undefined) {
            this.removeStop(removed);
        }

        if (removed !== undefined && added !== undefined) {
            this.replaceStop(removed, added);
        }

        this.updateColor(this.getGradient(this.direction));
    }

    @tuiPure
    private getStopsKeys(stops: Map<number, unknown>): number[] {
        return Array.from(stops.keys());
    }

    @tuiPure
    private filterPalette(
        colors: ReadonlyMap<string, string>,
        isGradient: boolean,
    ): Map<string, string> {
        const map = new Map(colors);

        map.forEach((value, key) => {
            if (
                (value.startsWith('linear-gradient') && !isGradient) ||
                (!value.startsWith('linear-gradient') && isGradient)
            ) {
                map.delete(key);
            }
        });

        return map;
    }

    private updateColor(color: string): void {
        this.colorChange.emit(color);
    }

    private getGradient(direction: TuiGradientDirection): string {
        return `linear-gradient(${direction}, ${[...this.stopsKeys]
            .sort(tuiDefaultSort)
            .map((key) => `rgba(${this.getStop(key).join(', ')}) ${key * 100}%`)
            .join(', ')})`;
    }

    private getStop(stop: number): [number, number, number, number] {
        return this.stops.get(stop) || EMPTY_STOP;
    }

    private addStop(stop: number): void {
        const closest = this.stopsKeys.reduce(
            (prev, curr) => (Math.abs(curr - stop) < Math.abs(prev - stop) ? curr : prev),
            this.stopsKeys[0],
        );

        this.stops.set(stop, this.getStop(closest));
        this.stops = new Map(this.stops);
        this.currentStop = stop;
    }

    private removeStop(stop: number): void {
        this.stops.delete(stop);
        this.stops = new Map(this.stops);
        this.currentStop = this.stopsKeys[0];
    }

    private replaceStop(removed: number, added: number): void {
        const value = this.getStop(removed);

        this.currentStop = added;
        this.stops = new Map(
            this.stopsKeys.map<[number, [number, number, number, number]]>((key) =>
                key === removed ? [added, value] : [key, this.getStop(key)],
            ),
        );
    }

    private parse(color: string): void {
        if (color.startsWith('linear-gradient')) {
            this.parseGradient(color);
        } else {
            this.parseColor(color);
        }
    }

    private parseGradient(color: string): void {
        if (color === this.getGradient(this.direction)) {
            return;
        }

        const gradient = tuiParseGradient(tuiGetGradientData(color));

        this.currentMode = this.modes[1];
        this.direction = gradient.side;
        this.currentStop = 0;
        this.stops = new Map(
            gradient.stops.length
                ? gradient.stops.map<[number, [number, number, number, number]]>(
                      ({color, position}) => [
                          parseFloat(position) / 100,
                          tuiParseColor(color),
                      ],
                  )
                : DEFAULT_STEPS,
        );
    }

    private parseColor(color: string): void {
        this.currentMode = this.modes[0];
        this.currentStop = 0;
        this.color = tuiParseColor(color);
    }
}
