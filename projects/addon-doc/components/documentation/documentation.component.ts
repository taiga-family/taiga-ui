import {animate, style, transition, trigger} from '@angular/animations';
import {NgTemplateOutlet} from '@angular/common';
import {
    type AfterContentInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    DestroyRef,
    inject,
    input,
    type QueryList,
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
import {type TuiMatcher} from '@taiga-ui/cdk/types';
import {TuiNotification} from '@taiga-ui/core/components/notification';
import {tuiScrollbarOptionsProvider} from '@taiga-ui/core/components/scrollbar';
import {TuiTextfield} from '@taiga-ui/core/components/textfield';
import {TuiDropdown} from '@taiga-ui/core/directives/dropdown';
import {TuiBadge} from '@taiga-ui/kit/components/badge';
import {TuiDataListWrapper} from '@taiga-ui/kit/components/data-list-wrapper';
import {TuiInputNumber} from '@taiga-ui/kit/components/input-number';
import {TuiSwitch} from '@taiga-ui/kit/components/switch';
import {TuiSelectModule} from '@taiga-ui/legacy/components/select';
import {TuiTextfieldControllerModule} from '@taiga-ui/legacy/directives/textfield-controller';
import {merge, switchMap} from 'rxjs';

import {TuiDocDocumentationPropertyConnector} from './documentation-property-connector.directive';
import {TuiShowCleanerPipe} from './pipes/cleaner.pipe';
import {TuiInspectPipe} from './pipes/inspect.pipe';
import {TuiIsOptionalPipe} from './pipes/optional.pipe';
import {TuiStripOptionalPipe} from './pipes/strip-optional.pipe';
import {TuiDocTypeReferencePipe} from './pipes/type-reference.pipe';

// @bad TODO subscribe propertiesConnectors changes
// @bad TODO refactor to make more flexible
@Component({
    selector: 'tui-doc-documentation',
    imports: [
        FormsModule,
        NgTemplateOutlet,
        TuiBadge,
        TuiDataListWrapper,
        TuiDocTypeReferencePipe,
        TuiDropdown,
        TuiFilterPipe,
        TuiInputNumber,
        TuiInspectPipe,
        TuiIsOptionalPipe,
        TuiNotification,
        TuiSelectModule,
        TuiShowCleanerPipe,
        TuiStripOptionalPipe,
        TuiSwitch,
        TuiTextfield,
        TuiTextfieldControllerModule,
        TuiToArrayPipe,
    ],
    templateUrl: './documentation.template.html',
    styleUrl: './documentation.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiScrollbarOptionsProvider({mode: 'hover'})],
    animations: [
        trigger('emitEvent', [
            transition(':increment', [style({opacity: 1}), animate('500ms ease-in')]),
        ]),
    ],
})
export class TuiDocDocumentation implements AfterContentInit {
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly destroyRef = inject(DestroyRef);

    @ContentChildren(TuiDocDocumentationPropertyConnector)
    protected propertiesConnectors: QueryList<
        TuiDocDocumentationPropertyConnector<unknown>
    > = EMPTY_QUERY;

    protected readonly texts = inject(TUI_DOC_DOCUMENTATION_TEXTS);
    protected readonly excludedProperties = inject(TUI_DOC_EXCLUDED_PROPERTIES);
    protected activeItemIndex = 0;

    public readonly heading = input('');

    public readonly showValues = input(true);

    public readonly isAPI = input(false);

    public ngAfterContentInit(): void {
        tuiQueryListChanges(this.propertiesConnectors)
            .pipe(
                switchMap((items) => merge(...items.map(({changed$}) => changed$))),
                tuiWatch(this.cdr),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe();
    }

    protected get type(): string {
        return this.isAPI() ? this.texts[0] : this.texts[1];
    }

    protected matcher: TuiMatcher<
        [TuiDocDocumentationPropertyConnector<unknown>, Set<string>]
    > = (item, exclusions) => !exclusions.has(item.documentationPropertyName());
}
