import {animate, style, transition, trigger} from '@angular/animations';
import {
    AfterContentInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    inject,
    Input,
    QueryList,
} from '@angular/core';
import {
    TUI_DOC_DOCUMENTATION_TEXTS,
    TUI_DOC_EXCLUDED_PROPERTIES,
} from '@taiga-ui/addon-doc/tokens';
import {
    EMPTY_QUERY,
    TuiDestroyService,
    tuiHexToRgb,
    tuiQueryListChanges,
    TuiTypedMatcher,
    tuiWatch,
} from '@taiga-ui/cdk';
import {merge, switchMap, takeUntil} from 'rxjs';

import {TuiDocDocumentationPropertyConnectorDirective} from './documentation-property-connector.directive';
import {TuiGetColorPipe} from './pipes/color.pipe';
import {TuiGetOpacityPipe} from './pipes/opacity.pipe';

// @bad TODO subscribe propertiesConnectors changes
// @bad TODO refactor to make more flexible
@Component({
    selector: 'tui-doc-documentation',
    templateUrl: './documentation.template.html',
    styleUrls: ['./documentation.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiGetColorPipe, TuiGetOpacityPipe, TuiDestroyService],
    animations: [
        trigger('emitEvent', [
            transition(':increment', [style({opacity: 1}), animate('500ms ease-in')]),
        ]),
    ],
})
export class TuiDocDocumentationComponent implements AfterContentInit {
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly destroy$ = inject(TuiDestroyService, {self: true});
    private readonly getColor = inject(TuiGetColorPipe);
    private readonly getOpacity = inject(TuiGetOpacityPipe);
    protected readonly texts = inject(TUI_DOC_DOCUMENTATION_TEXTS);
    protected readonly excludedProperties = inject(TUI_DOC_EXCLUDED_PROPERTIES);

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

    matcher: TuiTypedMatcher<
        [TuiDocDocumentationPropertyConnectorDirective<any>, Set<string>]
    > = (item, exclusions) => !exclusions.has(item.documentationPropertyName);

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
        opacity: number | null,
    ): void {
        const hex = this.getColor.transform(connector.documentationPropertyValue || '');
        const rgb = tuiHexToRgb(hex);
        const result = `rgba(${rgb}, ${(opacity || 0) / 100})`;

        connector.onValueChange(result);
    }
}
