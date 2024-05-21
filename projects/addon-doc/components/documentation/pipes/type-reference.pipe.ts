import type {PipeTransform} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import {
    TUI_DOC_TYPE_REFERENCE_HANDLER,
    TUI_DOC_TYPE_REFERENCE_PARSER,
} from '@taiga-ui/addon-doc/tokens';

@Pipe({
    standalone: true,
    name: 'tuiDocTypeReference',
})
export class TuiDocTypeReferencePipe implements PipeTransform {
    private readonly parser = inject(TUI_DOC_TYPE_REFERENCE_PARSER);
    private readonly linkHandler = inject(TUI_DOC_TYPE_REFERENCE_HANDLER);

    public transform(original: string): ReadonlyArray<{
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
            .sort((a, b) => b.reference?.localeCompare(a.reference ?? '') ?? -1);
    }
}
