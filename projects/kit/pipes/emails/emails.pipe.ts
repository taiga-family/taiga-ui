import type {PipeTransform} from '@angular/core';
import {inject, Pipe} from '@angular/core';

import {TUI_EMAIL_PIPE_OPTIONS} from './emails.options';

@Pipe({
    standalone: true,
    name: 'tuiEmails',
})
export class TuiEmailsPipe implements PipeTransform {
    private readonly options = inject(TUI_EMAIL_PIPE_OPTIONS);

    public transform(
        query: string,
        suggestions: readonly string[] = this.options,
    ): readonly string[] {
        return query.includes('@')
            ? suggestions
                  .map(
                      (item) =>
                          query.slice(0, Math.max(0, query.indexOf('@') + 1)) + item,
                  )
                  .filter((item) => item.startsWith(query))
            : [];
    }
}
