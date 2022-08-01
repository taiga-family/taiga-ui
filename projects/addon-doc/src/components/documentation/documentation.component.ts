import {animate, style, transition, trigger} from '@angular/animations';
import {
    AfterContentInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    Inject,
    Input,
    QueryList,
} from '@angular/core';
import {
    EMPTY_QUERY,
    itemsQueryListObservable,
    tuiIsNumber,
    tuiIsString,
    watch,
} from '@taiga-ui/cdk';
import {merge} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {TUI_DOC_DOCUMENTATION_TEXTS} from '../../tokens/i18n';
import {hexToRgb, rgbToHex} from '../../utils/color-conversion';
import {inspectAny} from '../../utils/inspect';
import {TuiDocDocumentationPropertyConnectorDirective} from './documentation-property-connector.directive';

// @bad TODO subscribe propertiesConnectors changes
// @bad TODO refactor to make more flexible
@Component({
    selector: `tui-doc-documentation`,
    templateUrl: `./documentation.template.html`,
    styleUrls: [`./documentation.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger(`emitEvent`, [
            transition(`:increment`, [style({opacity: 1}), animate(`500ms ease-in`)]),
        ]),
    ],
})
export class TuiDocDocumentationComponent implements AfterContentInit {
    @Input()
    heading = ``;

    @Input()
    showValues = true;

    @Input()
    isAPI = false;

    @ContentChildren(TuiDocDocumentationPropertyConnectorDirective)
    propertiesConnectors: QueryList<TuiDocDocumentationPropertyConnectorDirective<any>> =
        EMPTY_QUERY;

    activeItemIndex = 0;

    constructor(
        @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_DOC_DOCUMENTATION_TEXTS)
        readonly texts: [string, string, string, string, string],
    ) {}

    ngAfterContentInit(): void {
        itemsQueryListObservable(this.propertiesConnectors)
            .pipe(
                switchMap(items => merge(...items.map(({changed$}) => changed$))),
                watch(this.changeDetectorRef),
            )
            .subscribe();
    }

    get type(): string {
        return this.isAPI ? this.texts[0] : this.texts[1];
    }

    getColor(color: string): string {
        if (color.length === 4) {
            return color
                .split(``)
                .reduce<string[]>((result, current) => [...result, current, current], [])
                .join(``)
                .replace(`#`, ``);
        }

        if (color.startsWith(`#`)) {
            return color;
        }

        if (color === `transparent`) {
            return `#000000`;
        }

        const parsed = color
            .replace(`rgb(`, ``)
            .replace(`rgba(`, ``)
            .replace(`)`, ``)
            .replace(` `, ``)
            .split(`,`)
            .map(v => Number.parseInt(v, 10)) as [number, number, number];

        return rgbToHex(...parsed);
    }

    getOpacity(color: string): number {
        if (color.startsWith(`#`) || color.startsWith(`rgb(`)) {
            return 100;
        }

        if (color === `transparent`) {
            return 0;
        }

        const lastComma = color.lastIndexOf(`,`);
        const parsed = color
            .slice(lastComma)
            .replace(`)`, ``)
            .replace(` `, ``)
            .replace(`,`, ``);

        return Math.round(Number.parseFloat(parsed) * 100);
    }

    onColorChange(
        connector: TuiDocDocumentationPropertyConnectorDirective<string>,
        color: string,
    ): void {
        const opacity = this.getOpacity(connector.documentationPropertyValue || ``);

        if (opacity === 100) {
            connector.onValueChange(color);

            return;
        }

        const rgb = hexToRgb(color).join(`, `);
        const result = `rgba(${rgb}, ${opacity / 100})`;

        connector.onValueChange(result);
    }

    onOpacityChange(
        connector: TuiDocDocumentationPropertyConnectorDirective<string>,
        opacity: number,
    ): void {
        const hex = this.getColor(connector.documentationPropertyValue || ``);
        const rgb = hexToRgb(hex);
        const result = `rgba(${rgb}, ${opacity / 100})`;

        connector.onValueChange(result);
    }

    stripOptional(name: string): string {
        return name.replace(`?`, ``);
    }

    isOptional(name: string): boolean {
        return name.includes(`?`);
    }

    isPrimitivePolymorpheusContent(value: unknown): boolean {
        return tuiIsString(value) || tuiIsNumber(value);
    }

    showCleaner(type: string): boolean {
        return type.includes(`null`);
    }

    showContentTooltip(type: string): boolean {
        return type.includes(`PolymorpheusContent`);
    }

    inspectAny(data: unknown): string {
        return inspectAny(data, 2);
    }
}
