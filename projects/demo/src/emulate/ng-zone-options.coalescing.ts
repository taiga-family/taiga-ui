export const NgZoneOptionsCoalescing = {
    ngZone: `zone.js` as const,
    /**
     * Optionally specify coalescing event change detections or not.
     * Consider the following case.
     *
     * <div (click)="doSomething()">
     *   <button (click)="doSomethingElse()"></button>
     * </div>
     *
     * When button is clicked, because of the event bubbling, both
     * event handlers will be called and 2 change detections will be
     * triggered. We can colesce such kind of events to only trigger
     * change detection only once.
     *
     * By default, this option will be false. So the events will not be
     * coalesced and the change detection will be triggered multiple times.
     * And if this option be set to true, the change detection will be
     * triggered async by scheduling a animation frame. So in the case above,
     * the change detection will only be triggered once.
     */
    ngZoneEventCoalescing: true,

    /**
     * Optionally specify if `NgZone#run()` method invocations should be coalesced
     * into a single change detection.
     *
     * Consider the following case.
     *
     * for (let i = 0; i < 10; i ++) {
     *   ngZone.run(() => {
     *     // do something
     *   });
     * }
     *
     * This case triggers the change detection multiple times.
     * With ngZoneRunCoalescing options, all change detections in an event loop trigger only once.
     * In addition, the change detection executes in requestAnimation.
     *
     */
    ngZoneRunCoalescing: true,
};
