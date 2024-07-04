/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import {inject, Injectable, SecurityContext} from '@angular/core';
import type {SafeHtml} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {TUI_ICON_STARTS, TUI_SANITIZER} from '@taiga-ui/legacy/tokens';
import {tuiProcessIcon} from '@taiga-ui/legacy/utils';
import {BehaviorSubject} from 'rxjs';

/**
 * @deprecated: drop in v5.0
 * Service for reusing SVGs without inlining each instance
 */
@Injectable({
    providedIn: 'root',
})
export class TuiSvgService {
    private readonly tuiSanitizer = inject(TUI_SANITIZER, {optional: true});
    private readonly sanitizer = inject(DomSanitizer);
    private originals: Record<string, string> = {};

    public readonly items$ = new BehaviorSubject<Map<string, SafeHtml>>(new Map());

    constructor() {
        this.define(inject(TUI_ICON_STARTS));
    }

    public define(icons: Record<string, string>): void {
        const {value} = this.items$;

        Object.keys(icons).forEach((key) => {
            this.defineIcon(key, icons[key], value);
        });

        this.items$.next(value);
    }

    public getOriginal(name: string): string | null {
        return this.originals[name] || null;
    }

    private defineIcon(name: string, src: string, map: Map<string, SafeHtml>): void {
        if (map.has(name)) {
            return;
        }

        const parsed = this.parseSrc(name, src);

        if (!parsed) {
            ngDevMode && console.assert(false, 'Unable to parse given SVG src');

            return;
        }

        map.set(name, parsed);
        this.originals = {
            ...this.originals,
            [name]: src,
        };
    }

    private parseSrc(name: string, src: string): SafeHtml {
        return this.sanitize(tuiProcessIcon(src, name));
    }

    private sanitize(src: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(
            (this.tuiSanitizer
                ? this.tuiSanitizer.sanitize(SecurityContext.HTML, src)
                : this.sanitizer.sanitize(SecurityContext.HTML, src)) || '',
        );
    }
}
