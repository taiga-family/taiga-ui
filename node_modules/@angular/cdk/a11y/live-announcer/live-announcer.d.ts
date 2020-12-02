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
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LiveAnnouncer, [{ optional: true; }, null, null, { optional: true; }]>;
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkAriaLive, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkAriaLive, "[cdkAriaLive]", ["cdkAriaLive"], { "politeness": "cdkAriaLive"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGl2ZS1hbm5vdW5jZXIuZC50cyIsInNvdXJjZXMiOlsibGl2ZS1hbm5vdW5jZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IENvbnRlbnRPYnNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vYnNlcnZlcnMnO1xuaW1wb3J0IHsgRWxlbWVudFJlZiwgTmdab25lLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFyaWFMaXZlUG9saXRlbmVzcywgTGl2ZUFubm91bmNlckRlZmF1bHRPcHRpb25zIH0gZnJvbSAnLi9saXZlLWFubm91bmNlci10b2tlbnMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTGl2ZUFubm91bmNlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBfbmdab25lO1xuICAgIHByaXZhdGUgX2RlZmF1bHRPcHRpb25zPztcbiAgICBwcml2YXRlIF9saXZlRWxlbWVudDtcbiAgICBwcml2YXRlIF9kb2N1bWVudDtcbiAgICBwcml2YXRlIF9wcmV2aW91c1RpbWVvdXQ/O1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRUb2tlbjogYW55LCBfbmdab25lOiBOZ1pvbmUsIF9kb2N1bWVudDogYW55LCBfZGVmYXVsdE9wdGlvbnM/OiBMaXZlQW5ub3VuY2VyRGVmYXVsdE9wdGlvbnMgfCB1bmRlZmluZWQpO1xuICAgIC8qKlxuICAgICAqIEFubm91bmNlcyBhIG1lc3NhZ2UgdG8gc2NyZWVucmVhZGVycy5cbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBNZXNzYWdlIHRvIGJlIGFubm91bmNlZCB0byB0aGUgc2NyZWVucmVhZGVyLlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCB3aWxsIGJlIHJlc29sdmVkIHdoZW4gdGhlIG1lc3NhZ2UgaXMgYWRkZWQgdG8gdGhlIERPTS5cbiAgICAgKi9cbiAgICBhbm5vdW5jZShtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuICAgIC8qKlxuICAgICAqIEFubm91bmNlcyBhIG1lc3NhZ2UgdG8gc2NyZWVucmVhZGVycy5cbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBNZXNzYWdlIHRvIGJlIGFubm91bmNlZCB0byB0aGUgc2NyZWVucmVhZGVyLlxuICAgICAqIEBwYXJhbSBwb2xpdGVuZXNzIFRoZSBwb2xpdGVuZXNzIG9mIHRoZSBhbm5vdW5jZXIgZWxlbWVudC5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgd2lsbCBiZSByZXNvbHZlZCB3aGVuIHRoZSBtZXNzYWdlIGlzIGFkZGVkIHRvIHRoZSBET00uXG4gICAgICovXG4gICAgYW5ub3VuY2UobWVzc2FnZTogc3RyaW5nLCBwb2xpdGVuZXNzPzogQXJpYUxpdmVQb2xpdGVuZXNzKTogUHJvbWlzZTx2b2lkPjtcbiAgICAvKipcbiAgICAgKiBBbm5vdW5jZXMgYSBtZXNzYWdlIHRvIHNjcmVlbnJlYWRlcnMuXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgTWVzc2FnZSB0byBiZSBhbm5vdW5jZWQgdG8gdGhlIHNjcmVlbnJlYWRlci5cbiAgICAgKiBAcGFyYW0gZHVyYXRpb24gVGltZSBpbiBtaWxsaXNlY29uZHMgYWZ0ZXIgd2hpY2ggdG8gY2xlYXIgb3V0IHRoZSBhbm5vdW5jZXIgZWxlbWVudC4gTm90ZVxuICAgICAqICAgdGhhdCB0aGlzIHRha2VzIGVmZmVjdCBhZnRlciB0aGUgbWVzc2FnZSBoYXMgYmVlbiBhZGRlZCB0byB0aGUgRE9NLCB3aGljaCBjYW4gYmUgdXAgdG9cbiAgICAgKiAgIDEwMG1zIGFmdGVyIGBhbm5vdW5jZWAgaGFzIGJlZW4gY2FsbGVkLlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCB3aWxsIGJlIHJlc29sdmVkIHdoZW4gdGhlIG1lc3NhZ2UgaXMgYWRkZWQgdG8gdGhlIERPTS5cbiAgICAgKi9cbiAgICBhbm5vdW5jZShtZXNzYWdlOiBzdHJpbmcsIGR1cmF0aW9uPzogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbiAgICAvKipcbiAgICAgKiBBbm5vdW5jZXMgYSBtZXNzYWdlIHRvIHNjcmVlbnJlYWRlcnMuXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgTWVzc2FnZSB0byBiZSBhbm5vdW5jZWQgdG8gdGhlIHNjcmVlbnJlYWRlci5cbiAgICAgKiBAcGFyYW0gcG9saXRlbmVzcyBUaGUgcG9saXRlbmVzcyBvZiB0aGUgYW5ub3VuY2VyIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIGR1cmF0aW9uIFRpbWUgaW4gbWlsbGlzZWNvbmRzIGFmdGVyIHdoaWNoIHRvIGNsZWFyIG91dCB0aGUgYW5ub3VuY2VyIGVsZW1lbnQuIE5vdGVcbiAgICAgKiAgIHRoYXQgdGhpcyB0YWtlcyBlZmZlY3QgYWZ0ZXIgdGhlIG1lc3NhZ2UgaGFzIGJlZW4gYWRkZWQgdG8gdGhlIERPTSwgd2hpY2ggY2FuIGJlIHVwIHRvXG4gICAgICogICAxMDBtcyBhZnRlciBgYW5ub3VuY2VgIGhhcyBiZWVuIGNhbGxlZC5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgd2lsbCBiZSByZXNvbHZlZCB3aGVuIHRoZSBtZXNzYWdlIGlzIGFkZGVkIHRvIHRoZSBET00uXG4gICAgICovXG4gICAgYW5ub3VuY2UobWVzc2FnZTogc3RyaW5nLCBwb2xpdGVuZXNzPzogQXJpYUxpdmVQb2xpdGVuZXNzLCBkdXJhdGlvbj86IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBjdXJyZW50IHRleHQgZnJvbSB0aGUgYW5ub3VuY2VyIGVsZW1lbnQuIENhbiBiZSB1c2VkIHRvIHByZXZlbnRcbiAgICAgKiBzY3JlZW4gcmVhZGVycyBmcm9tIHJlYWRpbmcgdGhlIHRleHQgb3V0IGFnYWluIHdoaWxlIHRoZSB1c2VyIGlzIGdvaW5nXG4gICAgICogdGhyb3VnaCB0aGUgcGFnZSBsYW5kbWFya3MuXG4gICAgICovXG4gICAgY2xlYXIoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIHByaXZhdGUgX2NyZWF0ZUxpdmVFbGVtZW50O1xufVxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IHdvcmtzIHNpbWlsYXJseSB0byBhcmlhLWxpdmUsIGJ1dCB1c2VzIHRoZSBMaXZlQW5ub3VuY2VyIHRvIGVuc3VyZSBjb21wYXRpYmlsaXR5XG4gKiB3aXRoIGEgd2lkZXIgcmFuZ2Ugb2YgYnJvd3NlcnMgYW5kIHNjcmVlbiByZWFkZXJzLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDZGtBcmlhTGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjtcbiAgICBwcml2YXRlIF9saXZlQW5ub3VuY2VyO1xuICAgIHByaXZhdGUgX2NvbnRlbnRPYnNlcnZlcjtcbiAgICBwcml2YXRlIF9uZ1pvbmU7XG4gICAgLyoqIFRoZSBhcmlhLWxpdmUgcG9saXRlbmVzcyBsZXZlbCB0byB1c2Ugd2hlbiBhbm5vdW5jaW5nIG1lc3NhZ2VzLiAqL1xuICAgIGdldCBwb2xpdGVuZXNzKCk6IEFyaWFMaXZlUG9saXRlbmVzcztcbiAgICBzZXQgcG9saXRlbmVzcyh2YWx1ZTogQXJpYUxpdmVQb2xpdGVuZXNzKTtcbiAgICBwcml2YXRlIF9wb2xpdGVuZXNzO1xuICAgIHByaXZhdGUgX3ByZXZpb3VzQW5ub3VuY2VkVGV4dD87XG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uO1xuICAgIGNvbnN0cnVjdG9yKF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBfbGl2ZUFubm91bmNlcjogTGl2ZUFubm91bmNlciwgX2NvbnRlbnRPYnNlcnZlcjogQ29udGVudE9ic2VydmVyLCBfbmdab25lOiBOZ1pvbmUpO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=