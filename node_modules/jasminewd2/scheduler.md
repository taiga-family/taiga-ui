# Schedulers

Many of the core features of jasminewd are centered around automatically synchronizing your tests
with the WebDriver control flow.  However, jasminewd can synchronize with any scheduler as long as
it implements the following interface:

```ts
interface Scheduler {
  execute<T>(fn: () => Promise<T>|T): Promise<T>;
}
```

Where `execute` is the function used to put something on the scheduler.  As long as your scheduler
implements this interface, you can pass it into `require('jasminewd2').init`.

## Custom Promise Implementation

Some schedulers need scheduled functions to use a specific implementation of the promise API.  For
instance, WebDriver has its `ManagedPromise` implementation, which it needs in order to track
tasks across `then()` blocks.  If your scheduler has its own promise implementation, you can
implement the following interface:

```ts
interface SchedulerWithCustomPromises {
  execute<T>(fn: () => CustomPromise<T>|T): CustomPromise<T>;
  promise<T>(resolver: (resolve: (T) => void, reject: (any) => void) => void): CustomPromise<T>;
}
```

If the `promise` function is specified, jasminewd will use that function to generate all of its
internal promises.  If `scheduler.promise` is not specified, jasminewd will try to use WebDriver's
`ManagedPromise`.  If `ManagedPromise` is not available (e.g. the control flow is disabled),
jasminewd will default to using native promises.

### Idle API

If your scheduler requires a custom promise implementation, it is highly recommended that you
implement the Idle API.  This will help to mitigate issues with users who sometimes use other
promise implementations (see https://github.com/angular/jasminewd/issues/68#issuecomment-262317167). 
To do this, implement the following interface: 

```ts
var EventEmitter = require('events');

interface SchedulerWithIdleAPI extends EventEmitter {
  execute<T>(fn: () => CustomPromise<T>|T): CustomPromise<T>;
  promise<T>(resolver: (resolve: (T) => void, reject: (any) => void) => void): CustomPromise<T>;
  isIdle(): boolean;
}
```

Your scheduler must emit `"idle"` when it becomes idle.


### Reset API

If you want your scheduler to be reset whenever a spec times out, implement the following interface:

```ts
interface SchedulerWithResetAPI {
  execute<T>(fn: () => CustomPromise<T>|T): CustomPromise<T>;
  reset(): void;
}
```

jasminewd will automatically look for a `reset` function and call it when specs time out.  This is
useful so that tasks from a timed out spec get cleared instead of continuing to tie up the scheduler
and potentially getting executed during future specs.
