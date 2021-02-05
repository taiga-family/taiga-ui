import {Inject, Injectable, Optional, Sanitizer, SecurityContext} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {tuiAssert} from '@taiga-ui/cdk';
import {TUI_ICONS, TUI_SANITIZER} from '@taiga-ui/core/tokens';
import {processIcon} from '@taiga-ui/core/utils/dom';
import {BehaviorSubject} from 'rxjs';

/**
 * Service for reusing SVGs without inlining each instance
 */
// @dynamic
@Injectable({
    providedIn: 'root',
})
export class TuiSvgService {
    readonly items$ = new BehaviorSubject<Map<string, SafeHtml>>(new Map());

    private originals: Record<string, string> = {};

    constructor(
        @Optional()
        @Inject(TUI_SANITIZER)
        private readonly tuiSanitizer: Sanitizer | null,
        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
        @Inject(TUI_ICONS) icons: Record<string, string>,
    ) {
        this.define(icons);
    }

    define(icons: Record<string, string>) {
        const {value} = this.items$;

        Object.keys(icons).forEach(key => {
            this.defineIcon(key, icons[key], value);
        });

        this.items$.next(value);
    }

    getOriginal(name: string): string | null {
        return this.originals[name] || null;
    }

    private defineIcon(name: string, src: string, map: Map<string, SafeHtml>) {
        if (map.has(name)) {
            return;
        }

        const parsed = this.parseSrc(name, src);

        if (!parsed) {
            tuiAssert.assert(false, 'Unable to parse given SVG src');

            return;
        }

        map.set(name, parsed);
        this.originals = {
            ...this.originals,
            [name]: src,
        };
    }

    private parseSrc(name: string, src: string): SafeHtml {
        return this.sanitize(processIcon(src, name));
    }

    private sanitize(src: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(
            (this.tuiSanitizer
                ? this.tuiSanitizer.sanitize(SecurityContext.HTML, src)
                : this.sanitizer.sanitize(SecurityContext.HTML, src)) || '',
        );
    }
}
