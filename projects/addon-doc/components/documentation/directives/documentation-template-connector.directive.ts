import {
    Directive,
    ElementRef,
    Inject,
    inject,
    Input,
    OnChanges,
    OnDestroy,
    Optional,
} from '@angular/core';
import {TuiDocumentationProperty} from '@taiga-ui/addon-doc/interfaces';
import {TuiApiHostService} from '@taiga-ui/addon-doc/services';

import {TuiDocumentationApiHostDirective} from './documentation-api-host.directive';

@Directive({
    selector: '[documentationTemplate],[documentationTemplateTagName]',
})
export class TuiDocDocumentationTemplateConnectorDirective
    implements OnChanges, OnDestroy
{
    private readonly defaultTagName =
        inject(ElementRef<HTMLElement>)?.nativeElement.tagName.toLowerCase() ?? '';

    private readonly index = this.host.setContent('');

    @Input('documentationTemplateBaseProperties')
    baseProperties: Record<string, TuiDocumentationProperty> = {};

    @Input('documentationTemplateContent')
    content = '';

    @Input('documentationTemplateApiHost')
    apiHost: TuiDocumentationApiHostDirective | null = null;

    @Input('documentationTemplateTagName')
    tagName = this.defaultTagName;

    constructor(
        @Inject(TuiApiHostService)
        @Optional()
        readonly apiHostService: TuiApiHostService | null,
    ) {}

    get host(): TuiApiHostService {
        const host = this.apiHost?.apiHostService ?? this.apiHostService;

        if (!host) {
            throw new Error('TuiApiHost not provided');
        }

        return host;
    }

    ngOnChanges(): void {
        this.host.setTemplate(this.tagName, this.baseProperties);
        this.host.setContent(this.content, this.index);
    }

    ngOnDestroy(): void {
        this.host.setTemplate('', {});
        this.host.deleteContent(this.index);
    }
}
