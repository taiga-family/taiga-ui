import {AnimationOptions} from '@angular/animations';
import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {tuiDefaultProp, tuiIsString, TuiValidationError} from '@taiga-ui/cdk';
import {MODE_PROVIDER} from '@taiga-ui/core/providers';
import {
    TUI_ANIMATION_OPTIONS,
    TUI_DEFAULT_ERROR_MESSAGE,
    TUI_MODE,
} from '@taiga-ui/core/tokens';
import {TuiBrightness} from '@taiga-ui/core/types';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {delay, map, switchMap} from 'rxjs/operators';

@Component({
    selector: 'tui-error',
    templateUrl: './error.template.html',
    styleUrls: ['./error.style.less'],
    providers: [MODE_PROVIDER],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiErrorComponent {
    private readonly error$$ = new BehaviorSubject<TuiValidationError | null>(null);

    @Input('error')
    @tuiDefaultProp()
    set errorSetter(error: TuiValidationError | string | null) {
        this.error$$.next(tuiIsString(error) ? new TuiValidationError(error) : error);
    }

    error$ = this.error$$.pipe(
        switchMap(error =>
            error
                ? of(error)
                : of(error).pipe(delay(this.options.params?.duration ?? 300)),
        ),
    );

    expanded$ = this.error$$.pipe(map(Boolean));

    readonly animation = {value: '', ...this.options} as const;

    constructor(
        @Inject(TUI_ANIMATION_OPTIONS) private readonly options: AnimationOptions,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
        @Inject(TUI_DEFAULT_ERROR_MESSAGE)
        readonly defaultErrorMessage$: Observable<string>,
    ) {}
}
