import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Inject,
    Input,
    Output,
} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {TUI_EDITOR_COLOR_SELECTOR_MODE_NAMES} from '@taiga-ui/addon-editor/tokens';
import {TuiGradientDirection} from '@taiga-ui/addon-editor/types';
import {
    tuiGetGradientData,
    tuiParseColor,
    tuiParseGradient,
} from '@taiga-ui/addon-editor/utils';
import {tuiDefaultProp, tuiPure, tuiRequiredSetter} from '@taiga-ui/cdk';
import {TuiHostedDropdownComponent} from '@taiga-ui/core';
import {LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit/providers';

const EMPTY_STOP: [number, number, number, number] = [0, 0, 0, 0];
const DEFAULT_STEPS: ReadonlyArray<[number, [number, number, number, number]]> = [
    [0, [0, 0, 0, 1]],
    [1, [255, 255, 255, 1]],
];
const ICONS: Record<TuiGradientDirection, string> = {
    'to top right': `tuiIconArrowUpRight`,
    'to right': `tuiIconArrowRight`,
    'to bottom right': `tuiIconArrowDownRight`,
    'to bottom': `tuiIconArrowDown`,
    'to bottom left': `tuiIconArrowDownLeft`,
    'to left': `tuiIconArrowLeft`,
    'to top left': `tuiIconArrowUpLeft`,
    'to top': `tuiIconArrowUp`,
};

@Component({
    selector: `tui-color-selector`,
    templateUrl: `./color-selector.template.html`,
    styleUrls: [`./color-selector.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER],
})
export class TuiColorSelectorComponent {
    private stops = new Map(DEFAULT_STEPS);
    private currentStop = 0;
    private direction: TuiGradientDirection = `to bottom`;

    @Input()
    @tuiDefaultProp()
    colors: ReadonlyMap<string, string> = new Map<string, string>();

    @Input(`color`)
    @tuiRequiredSetter()
    set colorSetter(color: string) {
        this.parse(color);
    }

    @Output()
    readonly colorChange = new EventEmitter<string>();

    color: [number, number, number, number] = [0, 0, 0, 1];

    currentMode = this.modes[0];

    readonly buttons: readonly TuiGradientDirection[] = [
        `to top right`,
        `to right`,
        `to bottom right`,
        `to bottom`,
        `to bottom left`,
        `to left`,
        `to top left`,
        `to top`,
    ];

    constructor(
        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
        @Inject(TUI_EDITOR_COLOR_SELECTOR_MODE_NAMES) readonly modes: [string, string],
    ) {}

    get palette(): Map<string, string> {
        return this.filterPalette(this.colors, this.isGradient);
    }

    get stopsKeys(): number[] {
        return this.getStopsKeys(this.stops);
    }

    get currentColor(): [number, number, number, number] {
        return this.isGradient ? this.getStop(this.currentStop) : this.color;
    }

    get gradient(): SafeStyle {
        return this.sanitizer.bypassSecurityTrustStyle(this.getGradient(`to right`));
    }

    get isGradient(): boolean {
        return this.currentMode === this.modes[1];
    }

    getIcon(direction: TuiGradientDirection): string {
        return ICONS[direction];
    }

    isModeActive(mode: string): boolean {
        return this.currentMode === mode;
    }

    isDirectionActive(direction: TuiGradientDirection): boolean {
        return this.direction === direction;
    }

    onPalettePick(color: string): void {
        this.updateColor(color);
    }

    onDirectionChange(direction: TuiGradientDirection): void {
        this.direction = direction;
        this.updateColor(this.getGradient(direction));
    }

    onModeSelect(mode: string, dropdown: TuiHostedDropdownComponent): void {
        this.currentMode = mode;
        dropdown.open = false;
        this.updateColor(
            mode === this.modes[0]
                ? `rgba(${this.color.join(`, `)})`
                : this.getGradient(this.direction),
        );
    }

    onIndexChange(index: number): void {
        this.currentStop = this.stopsKeys[index];
    }

    onColorChange(color: [number, number, number, number]): void {
        if (!this.isGradient) {
            this.updateColor(`rgba(${color.join(`, `)})`);

            return;
        }

        this.stops.set(this.currentStop, color);
        this.updateColor(this.getGradient(this.direction));
    }

    onStopsChange(stopsKeys: readonly number[]): void {
        const removed = this.stopsKeys.find(item => !stopsKeys.includes(item));
        const added = stopsKeys.find(item => !this.stopsKeys.includes(item));

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
                (value.startsWith(`linear-gradient`) && !isGradient) ||
                (!value.startsWith(`linear-gradient`) && isGradient)
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
            .sort()
            .map(key => `rgba(${this.getStop(key).join(`, `)}) ${key * 100}%`)
            .join(`, `)})`;
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
            this.stopsKeys.map<[number, [number, number, number, number]]>(key =>
                key === removed ? [added, value] : [key, this.getStop(key)],
            ),
        );
    }

    private parse(color: string): void {
        if (color.startsWith(`linear-gradient`)) {
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
