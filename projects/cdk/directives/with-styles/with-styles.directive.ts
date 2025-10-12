import {
    createComponent,
    Directive,
    EnvironmentInjector,
    inject,
    InjectionToken,
    type OnDestroy,
    type Type,
    type ValueProvider,
} from '@angular/core';

const TUI_STYLES = new InjectionToken<ReadonlyArray<Type<unknown>>>(
    ngDevMode ? 'TUI_STYLES' : '',
);

export function provideStyles(useValue: Type<unknown>): ValueProvider {
    return {provide: TUI_STYLES, multi: true, useValue};
}

// Use it after this is fixed: https://github.com/angular/angular/issues/57846
@Directive()
export class TuiWithStyles implements OnDestroy {
    private readonly injector = inject(EnvironmentInjector);
    private readonly refs = inject(TUI_STYLES, {self: true}).map((component) =>
        createComponent(component, {environmentInjector: this.injector}),
    );

    public ngOnDestroy(): void {
        this.refs.forEach((ref) => ref.destroy());
    }
}
