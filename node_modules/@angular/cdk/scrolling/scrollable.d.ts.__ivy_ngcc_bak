/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directionality } from '@angular/cdk/bidi';
import { ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScrollDispatcher } from './scroll-dispatcher';
export declare type _Without<T> = {
    [P in keyof T]?: never;
};
export declare type _XOR<T, U> = (_Without<T> & U) | (_Without<U> & T);
export declare type _Top = {
    top?: number;
};
export declare type _Bottom = {
    bottom?: number;
};
export declare type _Left = {
    left?: number;
};
export declare type _Right = {
    right?: number;
};
export declare type _Start = {
    start?: number;
};
export declare type _End = {
    end?: number;
};
export declare type _XAxis = _XOR<_XOR<_Left, _Right>, _XOR<_Start, _End>>;
export declare type _YAxis = _XOR<_Top, _Bottom>;
/**
 * An extended version of ScrollToOptions that allows expressing scroll offsets relative to the
 * top, bottom, left, right, start, or end of the viewport rather than just the top and left.
 * Please note: the top and bottom properties are mutually exclusive, as are the left, right,
 * start, and end properties.
 */
export declare type ExtendedScrollToOptions = _XAxis & _YAxis & ScrollOptions;
/**
 * Sends an event when the directive's element is scrolled. Registers itself with the
 * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
 * can be listened to through the service.
 */
export declare class CdkScrollable implements OnInit, OnDestroy {
    protected elementRef: ElementRef<HTMLElement>;
    protected scrollDispatcher: ScrollDispatcher;
    protected ngZone: NgZone;
    protected dir?: Directionality | undefined;
    private _destroyed;
    private _elementScrolled;
    constructor(elementRef: ElementRef<HTMLElement>, scrollDispatcher: ScrollDispatcher, ngZone: NgZone, dir?: Directionality | undefined);
    ngOnInit(): void;
    ngOnDestroy(): void;
    /** Returns observable that emits when a scroll event is fired on the host element. */
    elementScrolled(): Observable<Event>;
    /** Gets the ElementRef for the viewport. */
    getElementRef(): ElementRef<HTMLElement>;
    /**
     * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
     * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param options specified the offsets to scroll to.
     */
    scrollTo(options: ExtendedScrollToOptions): void;
    private _applyScrollToOptions;
    /**
     * Measures the scroll offset relative to the specified edge of the viewport. This method can be
     * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
     * about what scrollLeft means in RTL. The values returned by this method are normalized such that
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param from The edge to measure from.
     */
    measureScrollOffset(from: 'top' | 'left' | 'right' | 'bottom' | 'start' | 'end'): number;
}
