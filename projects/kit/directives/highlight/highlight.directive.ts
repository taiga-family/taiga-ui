import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import type {OnChanges} from '@angular/core';
import {
    booleanAttribute,
    Directive,
    ElementRef,
    EnvironmentInjector,
    inject,
    Input,
    PLATFORM_ID,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {TuiArrayOrValue} from '@taiga-ui/cdk';
import {svgNodeFilter, tuiIsNumber, tuiToArray} from '@taiga-ui/cdk';
import {TuiToRegexpPipe} from '@taiga-ui/kit/pipes';
import {mergeAll, Subject, switchMap, tap} from 'rxjs';

import {TuiHighlight} from './highlight';
import type {TuiHighlightOccurrence} from './highlight-occurrence';

@Directive({
    standalone: true,
    selector: '[tuiHighlight]',
})
export class TuiHighlightDirective implements OnChanges {
    private patterns: readonly RegExp[] = [];
    private readonly highlight$ = new Subject<TuiHighlight>();
    private readonly resetHighlights$ = new Subject<void>();
    private readonly toRegexpPipe = inject(TuiToRegexpPipe);
    private readonly environmentInjector = inject(EnvironmentInjector);
    private readonly doc = inject(DOCUMENT);
    private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    private readonly treeWalker = this.doc.createTreeWalker(
        inject(ElementRef).nativeElement,
        NodeFilter.SHOW_TEXT,
        svgNodeFilter,
    );

    @Input({
        transform: booleanAttribute,
    })
    public tuiHighlightMultiOccurrences = false;

    constructor() {
        this.resetHighlights$
            .pipe(
                switchMap(() =>
                    this.highlight$.pipe(
                        mergeAll(),
                        tap(node => {
                            this.treeWalker.currentNode = node;
                        }),
                    ),
                ),
                takeUntilDestroyed(),
            )
            .subscribe();
    }

    @Input()
    public set tuiHighlight(value: TuiArrayOrValue<RegExp | string>) {
        this.patterns = tuiToArray(value).map(item => {
            if (item instanceof RegExp) {
                // Only global regexp's can be used in String.prototype.mathAll method
                if (!item.global) {
                    return new RegExp(item.source, `${item.flags}g`);
                }

                return item;
            }

            return this.toRegexpPipe.transform(item, 'gi');
        });
    }

    public get tuiHighlight(): readonly RegExp[] {
        return this.patterns;
    }

    public ngOnChanges(): void {
        if (!this.isBrowser) {
            return;
        }

        queueMicrotask(() => this.createHighlights());
    }

    private createHighlights(): void {
        this.resetHighlights$.next();

        for (const node of this.getNodes()) {
            const occurrence = this.getFirstOccurrence(node.nodeValue);

            if (occurrence) {
                this.highlight$.next(
                    new TuiHighlight(
                        this.environmentInjector,
                        this.createRange(node, occurrence),
                    ),
                );

                if (!this.tuiHighlightMultiOccurrences) {
                    return;
                }
            }
        }
    }

    private createRange(node: Node, {index, length}: TuiHighlightOccurrence): Range {
        const range = this.doc.createRange();

        range.setStart(node, index);
        range.setEnd(node, index + length);

        return range;
    }

    private getFirstOccurrence(source: string | null): TuiHighlightOccurrence | null {
        if (!source) {
            return null;
        }

        let lastApprovedOccurrence: TuiHighlightOccurrence | null = null;

        for (const item of this.tuiHighlight) {
            const [match] = source.matchAll(item);

            if (
                match &&
                tuiIsNumber(match.index) &&
                match[0].length &&
                (!lastApprovedOccurrence || lastApprovedOccurrence.index > match.index)
            ) {
                lastApprovedOccurrence = {
                    index: match.index,
                    length: match[0].length,
                };
            }
        }

        return lastApprovedOccurrence;
    }

    private *getNodes(): Generator<Node> {
        this.treeWalker.currentNode = this.treeWalker.root;

        while (this.treeWalker.nextNode()) {
            yield this.treeWalker.currentNode;
        }
    }
}
