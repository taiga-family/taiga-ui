import {inject, Pipe, type PipeTransform} from '@angular/core';
import {
    TUI_EXAMPLE_PRIMARY_FILE_NAME,
    TuiDocPage,
    type TuiRawLoaderContent,
    tuiToKebab,
} from '@taiga-ui/addon-doc';

const EMPTY = {default: ''};

@Pipe({name: 'tuiExample'})
export class TuiExamplePipe implements PipeTransform {
    private readonly page = inject(TuiDocPage);

    public transform(
        index: number,
        formats: 'html,css' | 'html,ts,css' | 'html,ts' | 'html' | 'ts' = 'html,ts,css',
        additionalFiles?: Record<string, TuiRawLoaderContent>,
    ): Record<string, TuiRawLoaderContent> {
        const directory = `${this.page.type()}/${tuiToKebab(this.page.header())}/examples/${index}`;
        const {TS, HTML, CSS, LESS} = TUI_EXAMPLE_PRIMARY_FILE_NAME;

        return Object.fromEntries(
            formats
                .split(',')
                .flatMap((format): Array<[string, TuiRawLoaderContent]> => {
                    if (format === 'ts') {
                        const ts = import(`../pages/${directory}/index.ts`, {
                            with: {loader: 'text'},
                        }).catch(() => EMPTY);

                        return [[TS, ts]];
                    }

                    if (format === 'html') {
                        return [[HTML, load(`${directory}/index.html`)]];
                    }

                    const css = load(`${directory}/index.css`);
                    const less = css.then(async (file) =>
                        typeof file.default === 'string' && file.default
                            ? EMPTY
                            : load(`${directory}/index.less`),
                    );

                    return [
                        [CSS, css],
                        [LESS, less],
                    ];
                })
                .concat(additionalFiles ? Object.entries(additionalFiles) : [])
                // TODO(v6): remove `.map(...)` after update Angular to >= 20.0.0
                .map(([name, content]) => [
                    name,
                    content && typeof content !== 'string'
                        ? // During server side rendering it ignores import attributes for `.ts` files and loads its class instead of file content
                          content.then((x) => (typeof x.default === 'string' ? x : EMPTY))
                        : content,
                ]),
        );
    }
}

async function load(path: string): Promise<{default: string}> {
    try {
        return await import(/* @vite-ignore */ `../pages/${path}`);
    } catch {
        return EMPTY;
    }
}
