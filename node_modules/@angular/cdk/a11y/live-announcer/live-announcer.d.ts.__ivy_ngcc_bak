/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ContentObserver } from '@angular/cdk/observers';
import { ElementRef, NgZone, OnDestroy } from '@angular/core';
import { AriaLivePoliteness, LiveAnnouncerDefaultOptions } from './live-announcer-tokens';
export declare class LiveAnnouncer implements OnDestroy {
    private _ngZone;
    private _defaultOptions?;
    private _liveElement;
    private _document;
    private _previousTimeout?;
    constructor(elementToken: any, _ngZone: NgZone, _document: any, _defaultOptions?: LiveAnnouncerDefaultOptions | undefined);
    /**
     * Announces a message to screenreaders.
     * @param message Message to be announced to the screenreader.
     * @returns Promise that will be resolved when the message is added to the DOM.
     */
    announce(message: string): Promise<void>;
    /**
     * Announces a message to screenreaders.
     * @param message Message to be announced to the screenreader.
     * @param politeness The politeness of the announcer element.
     * @returns Promise that will be resolved when the message is added to the DOM.
     */
    announce(message: string, politeness?: AriaLivePoliteness): Promise<void>;
    /**
     * Announces a message to screenreaders.
     * @param message Message to be announced to the screenreader.
     * @param duration Time in milliseconds after which to clear out the announcer element. Note
     *   that this takes effect after the message has been added to the DOM, which can be up to
     *   100ms after `announce` has been called.
     * @returns Promise that will be resolved when the message is added to the DOM.
     */
    announce(message: string, duration?: number): Promise<void>;
    /**
     * Announces a message to screenreaders.
     * @param message Message to be announced to the screenreader.
     * @param politeness The politeness of the announcer element.
     * @param duration Time in milliseconds after which to clear out the announcer element. Note
     *   that this takes effect after the message has been added to the DOM, which can be up to
     *   100ms after `announce` has been called.
     * @returns Promise that will be resolved when the message is added to the DOM.
     */
    announce(message: string, politeness?: AriaLivePoliteness, duration?: number): Promise<void>;
    /**
     * Clears the current text from the announcer element. Can be used to prevent
     * screen readers from reading the text out again while the user is going
     * through the page landmarks.
     */
    clear(): void;
    ngOnDestroy(): void;
    private _createLiveElement;
}
/**
 * A directive that works similarly to aria-live, but uses the LiveAnnouncer to ensure compatibility
 * with a wider range of browsers and screen readers.
 */
export declare class CdkAriaLive implements OnDestroy {
    private _elementRef;
    private _liveAnnouncer;
    private _contentObserver;
    private _ngZone;
    /** The aria-live politeness level to use when announcing messages. */
    get politeness(): AriaLivePoliteness;
    set politeness(value: AriaLivePoliteness);
    private _politeness;
    private _previousAnnouncedText?;
    private _subscription;
    constructor(_elementRef: ElementRef, _liveAnnouncer: LiveAnnouncer, _contentObserver: ContentObserver, _ngZone: NgZone);
    ngOnDestroy(): void;
}
