import { Platform } from '@angular/cdk/platform';
/** A utility for calling matchMedia queries. */
import * as ɵngcc0 from '@angular/core';
export declare class MediaMatcher {
    private _platform;
    /** The internal matchMedia method to return back a MediaQueryList like object. */
    private _matchMedia;
    constructor(_platform: Platform);
    /**
     * Evaluates the given media query and returns the native MediaQueryList from which results
     * can be retrieved.
     * Confirms the layout engine will trigger for the selector query provided and returns the
     * MediaQueryList for the query provided.
     */
    matchMedia(query: string): MediaQueryList;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MediaMatcher, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEtbWF0Y2hlci5kLnRzIiwic291cmNlcyI6WyJtZWRpYS1tYXRjaGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG4vKiogQSB1dGlsaXR5IGZvciBjYWxsaW5nIG1hdGNoTWVkaWEgcXVlcmllcy4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE1lZGlhTWF0Y2hlciB7XG4gICAgcHJpdmF0ZSBfcGxhdGZvcm07XG4gICAgLyoqIFRoZSBpbnRlcm5hbCBtYXRjaE1lZGlhIG1ldGhvZCB0byByZXR1cm4gYmFjayBhIE1lZGlhUXVlcnlMaXN0IGxpa2Ugb2JqZWN0LiAqL1xuICAgIHByaXZhdGUgX21hdGNoTWVkaWE7XG4gICAgY29uc3RydWN0b3IoX3BsYXRmb3JtOiBQbGF0Zm9ybSk7XG4gICAgLyoqXG4gICAgICogRXZhbHVhdGVzIHRoZSBnaXZlbiBtZWRpYSBxdWVyeSBhbmQgcmV0dXJucyB0aGUgbmF0aXZlIE1lZGlhUXVlcnlMaXN0IGZyb20gd2hpY2ggcmVzdWx0c1xuICAgICAqIGNhbiBiZSByZXRyaWV2ZWQuXG4gICAgICogQ29uZmlybXMgdGhlIGxheW91dCBlbmdpbmUgd2lsbCB0cmlnZ2VyIGZvciB0aGUgc2VsZWN0b3IgcXVlcnkgcHJvdmlkZWQgYW5kIHJldHVybnMgdGhlXG4gICAgICogTWVkaWFRdWVyeUxpc3QgZm9yIHRoZSBxdWVyeSBwcm92aWRlZC5cbiAgICAgKi9cbiAgICBtYXRjaE1lZGlhKHF1ZXJ5OiBzdHJpbmcpOiBNZWRpYVF1ZXJ5TGlzdDtcbn1cbiJdfQ==