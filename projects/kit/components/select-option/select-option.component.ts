import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    OnInit,
    TemplateRef,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    isPresent,
    TUI_DEFAULT_IDENTITY_MATCHER,
    TuiContextWithImplicit,
    TuiIdentityMatcher,
    tuiReplayedValueChangesFrom,
} from '@taiga-ui/cdk';
import {TUI_DATA_LIST_HOST, TuiDataListHost, TuiOptionComponent} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT, PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {map} from 'rxjs/operators';

@Component({
    selector: 'tui-select-option',
    templateUrl: './select-option.template.html',
    styleUrls: ['./select-option.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiSelectOptionComponent<T> implements OnInit {
    readonly selected$ = tuiReplayedValueChangesFrom<T>(this.control).pipe(
        map(
            value =>
                isPresent(this.option.value) &&
                isPresent(value) &&
                this.matcher(value, this.option.value),
        ),
    );

    constructor(
        @Inject(POLYMORPHEUS_CONTEXT)
        readonly context: TuiContextWithImplicit<TemplateRef<{}>>,
        @Inject(TUI_DATA_LIST_HOST)
        private readonly host: TuiDataListHost<T>,
        @Inject(TuiOptionComponent) protected readonly option: TuiOptionComponent<T>,
        @Inject(NgControl) protected readonly control: NgControl,
    ) {}

    get matcher(): TuiIdentityMatcher<T> {
        return this.host.identityMatcher || TUI_DEFAULT_IDENTITY_MATCHER;
    }

    ngOnInit() {
        if (isPresent(this.option.value) && this.host.checkOption) {
            this.host.checkOption(this.option.value);
        }
    }
}

export const TUI_SELECT_OPTION = new PolymorpheusComponent(TuiSelectOptionComponent);
