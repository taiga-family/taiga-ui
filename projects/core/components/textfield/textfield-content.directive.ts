import {
    computed,
    Directive,
    type DoCheck,
    type FactoryProvider,
    inject,
    InjectionToken,
    INJECTOR,
    type OnDestroy,
    TemplateRef,
    type Type,
} from '@angular/core';

import {TuiTextfieldComponent} from './textfield.component';

export const TUI_TEXTFIELD_CONTENT = new InjectionToken<Type<unknown>>(
    ngDevMode ? 'TUI_TEXTFIELD_CONTENT' : '',
);

export function tuiAsTextfieldContent(content: () => Type<unknown>): FactoryProvider {
    return {provide: TUI_TEXTFIELD_CONTENT, useFactory: content};
}

@Directive({selector: 'ng-template[tuiTextfieldContent]'})
export class TuiTextfieldContent implements DoCheck, OnDestroy {
    private readonly vcr = inject(TuiTextfieldComponent).vcr;
    private readonly options = {injector: inject(INJECTOR)};

    private readonly content =
        inject(TUI_TEXTFIELD_CONTENT, {optional: true}) || inject(TemplateRef);

    private readonly ref = computed(() => {
        const vcr = this.vcr();

        return this.content instanceof TemplateRef
            ? vcr?.createEmbeddedView(this.content)
            : vcr?.createComponent(this.content, this.options).hostView;
    });

    public ngDoCheck(): void {
        this.ref()?.detectChanges();
    }

    public ngOnDestroy(): void {
        this.ref()?.destroy();
    }
}
