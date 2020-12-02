/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BooleanInput } from '@angular/cdk/coercion';
import { AfterContentInit, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
/**
 * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
 * @docs-private
 */
export declare class MutationObserverFactory {
    create(callback: MutationCallback): MutationObserver | null;
}
/** An injectable service that allows watching elements for changes to their content. */
export declare class ContentObserver implements OnDestroy {
    private _mutationObserverFactory;
    /** Keeps track of the existing MutationObservers so they can be reused. */
    private _observedElements;
    constructor(_mutationObserverFactory: MutationObserverFactory);
    ngOnDestroy(): void;
    /**
     * Observe content changes on an element.
     * @param element The element to observe for content changes.
     */
    observe(element: Element): Observable<MutationRecord[]>;
    /**
     * Observe content changes on an element.
     * @param element The element to observe for content changes.
     */
    observe(element: ElementRef<Element>): Observable<MutationRecord[]>;
    /**
     * Observes the given element by using the existing MutationObserver if available, or creating a
     * new one if not.
     */
    private _observeElement;
    /**
     * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
     * observing this element.
     */
    private _unobserveElement;
    /** Clean up the underlying MutationObserver for the specified element. */
    private _cleanupObserver;
}
/**
 * Directive that triggers a callback whenever the content of
 * its associated element has changed.
 */
export declare class CdkObserveContent implements AfterContentInit, OnDestroy {
    private _contentObserver;
    private _elementRef;
    private _ngZone;
    /** Event emitted for each change in the element's content. */
    event: EventEmitter<MutationRecord[]>;
    /**
     * Whether observing content is disabled. This option can be used
     * to disconnect the underlying MutationObserver until it is needed.
     */
    get disabled(): any;
    set disabled(value: any);
    private _disabled;
    /** Debounce interval for emitting the changes. */
    get debounce(): number;
    set debounce(value: number);
    private _debounce;
    private _currentSubscription;
    constructor(_contentObserver: ContentObserver, _elementRef: ElementRef<HTMLElement>, _ngZone: NgZone);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    private _subscribe;
    private _unsubscribe;
    static ngAcceptInputType_disabled: BooleanInput;
    static ngAcceptInputType_debounce: BooleanInput;
}
export declare class ObserversModule {
}
