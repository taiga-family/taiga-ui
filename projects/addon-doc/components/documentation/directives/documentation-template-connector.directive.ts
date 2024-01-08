import {Directive, Inject, Input, OnChanges, Optional, Self} from '@angular/core';
import {
    TuiApiHostTemplate,
    TuiDocumentationProperty,
} from '@taiga-ui/addon-doc/interfaces';
import {TuiApiHostService} from '@taiga-ui/addon-doc/services';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {BehaviorSubject, takeUntil} from 'rxjs';

import {TuiDocumentationApiHostDirective} from './documentation-api-host.directive';

@Directive({
    selector: '[documentationTemplateTagName]',
    providers: [TuiDestroyService],
})
export class TuiDocDocumentationTemplateConnectorDirective implements OnChanges {
    private readonly template$ = new BehaviorSubject<TuiApiHostTemplate>({
        tagName: '',
        baseProperties: {},
    });

    private readonly content$ = new BehaviorSubject<string>('');

    @Input('documentationTemplateTagName')
    tagName = '';

    @Input('documentationTemplateBaseProperties')
    baseProperties: Record<string, TuiDocumentationProperty> = {};

    @Input('documentationTemplateContent')
    content = '';

    @Input('documentationTemplateApiHost')
    apiHost: TuiDocumentationApiHostDirective | null = null;

    constructor(
        @Inject(TuiApiHostService)
        @Optional()
        readonly apiHostService: TuiApiHostService | null,
        @Inject(TuiDestroyService)
        @Self()
        private readonly destroyService: TuiDestroyService,
    ) {
        this.host
            .setContent(this.content$)
            .pipe(takeUntil(this.destroyService))
            .subscribe();
        this.host
            .setTemplate(this.template$)
            .pipe(takeUntil(this.destroyService))
            .subscribe();
    }

    get host(): TuiApiHostService {
        const host = this.apiHost?.apiHostService ?? this.apiHostService;

        if (!host) {
            throw new Error('TuiApiHost not provided');
        }

        return host;
    }

    ngOnChanges(): void {
        this.template$.next({
            tagName: this.tagName,
            baseProperties: this.baseProperties,
        });
        this.content$.next(this.content);
    }
}
