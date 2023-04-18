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
    Self,
} from '@angular/core';
import {
    TUI_DOC_DOCUMENTATION_TEXTS,
    TUI_DOC_EXCLUDED_PROPERTIES,
} from '@taiga-ui/addon-doc/tokens';
import {
    EMPTY_QUERY,
    TuiDestroyService,
    tuiHexToRgb,
    TuiMatcher,
    tuiQueryListChanges,
    tuiWatch,
} from '@taiga-ui/cdk';
import {merge} from 'rxjs';
import {switchMap, takeUntil} from 'rxjs/operators';

import {TuiDocDocumentationPropertyConnectorDirective} from './documentation-property-connector.directive';
import {TuiGetOpacityPipe} from './pipes/opacity.pipe';
import {TuiGetColorPipe} from './pipes/сolor.pipe';

// @bad TODO subscribe propertiesConnectors changes
// @bad TODO refactor to make more flexible
@Component({
    selector: 'tui-doc-documentation',
    templateUrl: './documentation.template.html',
    styleUrls: ['./documentation.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('emitEvent', [
            transition(':increment', [style({opacity: 1}), animate('500ms ease-in')]),
        ]),
    ],
    providers: [TuiGetColorPipe, TuiGetOpacityPipe, TuiDestroyService],
})
export class TuiDocDocumentationComponent implements AfterContentInit {
    @Input()
    heading = '';

    @Input()
    showValues = true;

    @Input()
    isAPI = false;

    @ContentChildren(TuiDocDocumentationPropertyConnectorDirective)
    propertiesConnectors: QueryList<TuiDocDocumentationPropertyConnectorDirective<any>> =
        EMPTY_QUERY;

    activeItemIndex = 0;

    constructor(
        @Inject(ChangeDetectorRef) private readonly cdr: ChangeDetectorRef,
        @Inject(TUI_DOC_DOCUMENTATION_TEXTS)
        readonly texts: [string, string, string, string, string],
        @Inject(TUI_DOC_EXCLUDED_PROPERTIES)
        readonly excludedProperties: Set<string>,
        @Self()
        @Inject(TuiDestroyService)
        private readonly destroy$: TuiDestroyService,
        @Inject(TuiGetColorPipe)
        private readonly getColor: TuiGetColorPipe,
        @Inject(TuiGetOpacityPipe)
        private readonly getOpacity: TuiGetOpacityPipe,
    ) {}

    ngAfterContentInit(): void {
        tuiQueryListChanges(this.propertiesConnectors)
            .pipe(
                switchMap(items => merge(...items.map(({changed$}) => changed$))),
                tuiWatch(this.cdr),
                takeUntil(this.destroy$),
            )
            .subscribe();
    }

    get type(): string {
        return this.isAPI ? this.texts[0] : this.texts[1];
    }

    matcher: TuiMatcher<TuiDocDocumentationPropertyConnectorDirective<any>> = (
        item: TuiDocDocumentationPropertyConnectorDirective<any>,
        exclusions: Set<string>,
    ) => !exclusions.has(item.documentationPropertyName);

    onColorChange(
        connector: TuiDocDocumentationPropertyConnectorDirective<string>,
        color: string,
    ): void {
        const opacity = this.getOpacity.transform(
            connector.documentationPropertyValue || '',
        );

        if (opacity === 100) {
            connector.onValueChange(color);

            return;
        }

        const rgb = tuiHexToRgb(color).join(', ');
        const result = `rgba(${rgb}, ${opacity / 100})`;

        connector.onValueChange(result);
    }

    onOpacityChange(
        connector: TuiDocDocumentationPropertyConnectorDirective<string>,
        opacity: number,
    ): void {
        const hex = this.getColor.transform(connector.documentationPropertyValue || '');
        const rgb = tuiHexToRgb(hex);
        const result = `rgba(${rgb}, ${opacity / 100})`;

        connector.onValueChange(result);
    }
}
