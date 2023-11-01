import {Directive, Inject, Input, OnChanges, OnInit, Optional, Self} from '@angular/core';
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
export class TuiDocDocumentationTemplateConnectorDirective implements OnInit, OnChanges {
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
    apiHost: TuiDocumentationApiHostDirective | null = this.apiHostDirective;

    constructor(
        @Inject(TuiDocumentationApiHostDirective)
        @Optional()
        readonly apiHostDirective: TuiDocumentationApiHostDirective | null,
        @Inject(TuiDestroyService)
        @Self()
        private readonly destroyService: TuiDestroyService,
    ) {}

    get apiHostService(): TuiApiHostService {
        const host = this.apiHost;

        if (!host) {
            throw new Error('TuiApiHost not provided');
        }

        return host.apiHostService;
    }

    ngOnInit(): void {
        this.apiHostService
            .setContent(this.content$)
            .pipe(takeUntil(this.destroyService))
            .subscribe();
        this.apiHostService
            .setTemplate(this.template$)
            .pipe(takeUntil(this.destroyService))
            .subscribe();
    }

    ngOnChanges(): void {
        this.template$.next({
            tagName: this.tagName,
            baseProperties: this.baseProperties,
        });
        this.content$.next(this.content);
    }
}
