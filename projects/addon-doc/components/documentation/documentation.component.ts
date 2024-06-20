import {animate, style, transition, trigger} from '@angular/animations';
import {
    AsyncPipe,
    NgForOf,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgTemplateOutlet,
} from '@angular/common';
import type {AfterContentInit, QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    DestroyRef,
    inject,
    Input,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormsModule} from '@angular/forms';
import {
    TUI_DOC_DOCUMENTATION_TEXTS,
    TUI_DOC_EXCLUDED_PROPERTIES,
} from '@taiga-ui/addon-doc/tokens';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {tuiQueryListChanges, tuiWatch} from '@taiga-ui/cdk/observables';
import {TuiFilterPipe} from '@taiga-ui/cdk/pipes/filter';
import {TuiToArrayPipe} from '@taiga-ui/cdk/pipes/to-array';
import type {TuiMatcher} from '@taiga-ui/cdk/types';
import {tuiHexToRgb} from '@taiga-ui/cdk/utils/color';
import {TuiGroupDirective} from '@taiga-ui/core/components/group';
import {TuiNotification} from '@taiga-ui/core/components/notification';
import {TuiTextfield} from '@taiga-ui/core/components/textfield';
import {TuiDropdown} from '@taiga-ui/core/directives/dropdown';
import {TuiBadge} from '@taiga-ui/kit/components/badge';
import {TuiDataListWrapper} from '@taiga-ui/kit/components/data-list-wrapper';
import {TuiSwitch} from '@taiga-ui/kit/components/switch';
import {TuiInputNumberModule} from '@taiga-ui/legacy/components/input-number';
import {TuiSelectModule} from '@taiga-ui/legacy/components/select';
import {TuiTextfieldControllerModule} from '@taiga-ui/legacy/directives/textfield-controller';
import {merge, switchMap} from 'rxjs';

import {TuiDocDocumentationPropertyConnector} from './documentation-property-connector.directive';
import {TuiShowCleanerPipe} from './pipes/cleaner.pipe';
import {TuiGetColorPipe} from './pipes/color.pipe';
import {TuiInspectPipe} from './pipes/inspect.pipe';
import {TuiGetOpacityPipe} from './pipes/opacity.pipe';
import {TuiIsOptionalPipe} from './pipes/optional.pipe';
import {TuiIsPrimitivePolymorpheusContentPipe} from './pipes/primitive-polymorpheus-content.pipe';
import {TuiStripOptionalPipe} from './pipes/strip-optional.pipe';
import {TuiDocTypeReferencePipe} from './pipes/type-reference.pipe';

// @bad TODO subscribe propertiesConnectors changes
// @bad TODO refactor to make more flexible
@Component({
    standalone: true,
    selector: 'tui-doc-documentation',
    imports: [
        NgIf,
        TuiFilterPipe,
        NgForOf,
        TuiStripOptionalPipe,
        TuiIsOptionalPipe,
        TuiBadge,
        NgTemplateOutlet,
        TuiDocTypeReferencePipe,
        TuiSelectModule,
        FormsModule,
        TuiDropdown,
        TuiShowCleanerPipe,
        TuiDataListWrapper,
        TuiInspectPipe,
        NgSwitch,
        NgSwitchCase,
        TuiSwitch,
        TuiTextfield,
        TuiGroupDirective,
        TuiGetOpacityPipe,
        TuiGetColorPipe,
        TuiInputNumberModule,
        TuiIsPrimitivePolymorpheusContentPipe,
        TuiNotification,
        AsyncPipe,
        TuiToArrayPipe,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './documentation.template.html',
    styleUrls: ['./documentation.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiGetColorPipe, TuiGetOpacityPipe],
    animations: [
        trigger('emitEvent', [
            transition(':increment', [style({opacity: 1}), animate('500ms ease-in')]),
        ]),
    ],
})
export class TuiDocDocumentation implements AfterContentInit {
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly destroyRef = inject(DestroyRef);
    private readonly getColor = inject(TuiGetColorPipe);
    private readonly getOpacity = inject(TuiGetOpacityPipe);

    @ContentChildren(TuiDocDocumentationPropertyConnector)
    protected propertiesConnectors: QueryList<TuiDocDocumentationPropertyConnector<any>> =
        EMPTY_QUERY;

    protected readonly texts = inject(TUI_DOC_DOCUMENTATION_TEXTS);
    protected readonly excludedProperties = inject(TUI_DOC_EXCLUDED_PROPERTIES);
    protected activeItemIndex = 0;

    @Input()
    public heading = '';

    @Input()
    public showValues = true;

    @Input()
    public isAPI = false;

    public ngAfterContentInit(): void {
        tuiQueryListChanges(this.propertiesConnectors)
            .pipe(
                switchMap(items => merge(...items.map(({changed$}) => changed$))),
                tuiWatch(this.cdr),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe();
    }

    protected get type(): string {
        return this.isAPI ? this.texts[0] : this.texts[1];
    }

    protected matcher: TuiMatcher<
        [TuiDocDocumentationPropertyConnector<any>, Set<string>]
    > = (item, exclusions) => !exclusions.has(item.documentationPropertyName);

    protected onColorChange(
        connector: TuiDocDocumentationPropertyConnector<string>,
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

    protected onOpacityChange(
        connector: TuiDocDocumentationPropertyConnector<string>,
        opacity: number | null,
    ): void {
        const hex = this.getColor.transform(connector.documentationPropertyValue || '');
        const rgb = tuiHexToRgb(hex);
        const result = `rgba(${rgb}, ${(opacity || 0) / 100})`;

        connector.onValueChange(result);
    }
}
