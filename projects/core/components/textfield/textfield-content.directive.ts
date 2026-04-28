import {
    computed,
    Directive,
    type DoCheck,
    inject,
    InjectionToken,
    INJECTOR,
    type OnDestroy,
    TemplateRef,
    type Type,
    type ValueProvider,
} from '@angular/core';

import {TuiTextfieldComponent} from './textfield.component';

export const TUI_TEXTFIELD_CONTENT = new InjectionToken<Type<any>>(
    ngDevMode ? 'TUI_TEXTFIELD_CONTENT' : '',
);

export function tuiAsTextfieldContent(useValue: Type<any>): ValueProvider {
    return {provide: TUI_TEXTFIELD_CONTENT, useValue};
}

@Directive({selector: 'ng-template[tuiTextfieldContent]'})
export class TuiTextfieldContent implements DoCheck, OnDestroy {
    private readonly vcr = inject(TuiTextfieldComponent).vcr;
    private readonly options = {injector: inject(INJECTOR)};

    private readonly content =
        inject(TUI_TEXTFIELD_CONTENT, {optional: true}) || inject(TemplateRef);

    private readonly ref = computed(() =>
        this.content instanceof TemplateRef
            ? this.vcr()?.createEmbeddedView(this.content)
            : this.vcr()?.createComponent(this.content, this.options).hostView,
    );

    public ngDoCheck(): void {
        this.ref()?.detectChanges();
    }

    public ngOnDestroy(): void {
        this.ref()?.destroy();
    }
}
