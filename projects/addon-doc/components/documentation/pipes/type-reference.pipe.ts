import {Inject, Pipe, PipeTransform} from '@angular/core';
import {
    TUI_DOC_TYPE_REFERENCE_HANDLER,
    TUI_DOC_TYPE_REFERENCE_PARSER,
} from '@taiga-ui/addon-doc/tokens';
import type {TuiDocTypeReferenceParsed} from '@taiga-ui/addon-doc/utils';
import {TuiHandler, TuiStringHandler} from '@taiga-ui/cdk';

@Pipe({name: `tuiDocTypeReference`})
export class TuiDocTypeReferencePipe implements PipeTransform {
    constructor(
        @Inject(TUI_DOC_TYPE_REFERENCE_PARSER)
        private readonly parser: TuiHandler<string, TuiDocTypeReferenceParsed>,
        @Inject(TUI_DOC_TYPE_REFERENCE_HANDLER)
        private readonly linkHandler?: TuiStringHandler<string | null> | null,
    ) {}

    transform(original: string): ReadonlyArray<{
        type: string;
        extracted: string;
        reference: string | null;
    }> {
        return this.parser(original)
            .map(({type, extracted}) => ({
                type,
                extracted,
                reference: this.linkHandler?.(extracted) ?? null,
            }))
            .sort((a, b) => b.reference?.localeCompare(a.reference ?? ``) ?? -1);
    }
}
