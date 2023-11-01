import {Directive, Inject, Input, OnChanges, OnDestroy, Optional} from '@angular/core';
import {TuiDocumentationProperty} from '@taiga-ui/addon-doc/interfaces';
import {TuiApiHostService} from '@taiga-ui/addon-doc/services';

import {TuiDocumentationApiHostDirective} from './documentation-api-host.directive';

@Directive({
    selector: '[documentationTemplateTagName]',
})
export class TuiDocDocumentationTemplateConnectorDirective
    implements OnChanges, OnDestroy
{
    @Input()
    documentationTemplateTagName = '';

    @Input()
    documentationTemplateBaseProperties: Record<string, TuiDocumentationProperty> = {};

    @Input()
    documentationTemplateContent = '';

    @Input()
    documentationTemplateApiHost: TuiDocumentationApiHostDirective | null =
        this.apiHostDirective;

    #contentIndex?: number;

    constructor(
        @Inject(TuiDocumentationApiHostDirective)
        @Optional()
        readonly apiHostDirective: TuiDocumentationApiHostDirective | null,
    ) {}

    get apiHostService(): TuiApiHostService {
        const host = this.documentationTemplateApiHost;

        if (!host) {
            throw new Error('TuiApiHost not provided');
        }

        return host.apiHostService;
    }

    ngOnChanges(): void {
        this.apiHostService.setTemplate(
            this.documentationTemplateTagName,
            this.documentationTemplateBaseProperties,
        );
        this.#contentIndex = this.apiHostService.setContent(
            this.documentationTemplateContent,
            this.#contentIndex,
        );
    }

    ngOnDestroy(): void {
        this.apiHostService.setTemplate('', {});

        if (this.#contentIndex !== undefined) {
            this.apiHostService.deleteContent(this.#contentIndex);
        }
    }
}
