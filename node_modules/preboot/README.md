# preboot

The purpose of this library is to help manage the transition of state (i.e. events, focus, data) from a server-generated web view to a client-generated web view. This library works with any front end JavaScript framework (i.e. React, Vue, Ember, etc.), but does have a few extra convenience modules for Angular apps.

The key features of preboot include:

1. Record and play back events
1. Respond immediately to certain events in the server view
1. Maintain focus even page is re-rendered
1. Buffer client-side re-rendering for smoother transition
1. Freeze page until bootstrap complete for certain events (ex. form submission)

In essence, this library is all about managing the user experience from the time from when 
a server view is visible until the client view takes over control of the page.

## Installation

cd into your app root and run the following command:

```
npm i preboot --save
```

The following sections covers the three different configurations of preboot:

- Angular Configuration
- Non-Angular Server Configuration
- Non-Angular Browser Configuration

#### Angular Configuration

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PrebootModule } from 'preboot';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'foo' }),
    PrebootModule.withConfig({ appRoot: 'app-root' })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

The key part here for preboot is to include `PrebootModule.withConfig({ appRoot: 'app-root' })` where the `appRoot` is the selector(s) to find the root of your application. The options you can pass into `withConfig()` are in the [PrebootOptions](#PrebootOptions) section below. In most cases, however, you will only need to specify the `appRoot`.

#### Non-Angular Server Configuration

```ts
import { getInlineDefinition, getInlineInvocation } from 'preboot';

const prebootOptions = {};  // see PrebootRecordOptions section below
const inlineCodeDefinition = getInlineDefinition(prebootOptions);
const inlineCodeInvocation = getInlineInvocation();

// now insert `inlineCodeDefinition` into a `<script>` tag in `<head>` and 
// an `inlineCodeInvocation` copy just after the opening tag of each app root

```

```html
<html>
  <head>
    <script><%= inlineCodeDefinition %></script>
  </head>
  <body>
    <app1-root>
      <script><%= inlineCodeInvocation %></script>
      <h2>App1 header</h2>
      <div>content</div>
    </app1-root>
    <app2-root>
      <script><%= inlineCodeInvocation %></script>
      <h2>App2 header</h2>
      <span>content</span>
    </app2-root>
  </body>
</html>
```

#### Non-Angular Browser Configuration

```ts
import { EventReplayer } from 'preboot';

const replayer = new EventReplayer();

// once you are ready to replay events (usually after client app fully loaded)
replayer.replayAll();
```

#### PrebootOptions
 
* `appRoot` (**required**) - One or more selectors for apps in the page (i.e. so one string or an array of strings).
* `buffer` (default `true`) - If true, preboot will attempt to buffer client rendering to an extra hidden div. In most
cases you will want to leave the default (i.e. true) but may turn off if you are debugging an issue.
* `minify` (deprecated) - minification has been removed in v6. Minification should be handled by the end-user
* `disableOverlay` (default `true`) - If true, freeze overlay would not get injected in the DOM.
* `eventSelectors` (defaults below) - This is an array of objects which specify what events preboot should be listening for 
on the server view and how preboot should replay those events to the client view. 
See Event Selector section below for more details but note that in most cases, you can just rely on the defaults
and you don't need to explicitly set anything here.
* `replay` (default `true`) - The only reason why you would want to set this to `false` is if you want to
manually trigger the replay yourself. This contrasts with the event selector `replay`, because this option is global

This comes in handy for situations where you want to hold off
on the replay and buffer switch until AFTER some async events occur (i.e. route loading, http calls, etc.). By
default, replay occurs right after bootstrap is complete. In some apps, there are more events after bootstrap
however where the page continues to change in significant ways. Basically if you are making major changes to
the page after bootstrap then you will see some jank unless you set `replay` to `false` and then trigger replay
yourself once you know that all async events are complete.

To manually trigger replay, inject the EventReplayer like this:

```
import { Injectable } from '@angular/core';
import { EventReplayer } from 'preboot';

@Injectable()
class Foo {
  constructor(private replayer: EventReplayer) {}

  // you decide when to call this based on what your app is doing
  manualReplay() {
    this.replayer.replayAll();
  }
}
```

**Event Selectors**

This part of the options drives a lot of the core behavior of preboot. 
Each event selector has the following properties:

* `selector` - The selector to find nodes under the server root (ex. `input, .blah, #foo`)
* `events` - An array of event names to listen for (ex. `['focusin', 'keyup', 'click']`)
* `keyCodes` - Only do something IF event includes a key pressed that matches the given key codes.
Useful for doing something when user hits return in a input box or something similar.
* `preventDefault` - If `true`, `event.preventDefault()` will be called to prevent any further event propagation.
* `freeze` - If `true`, the UI will freeze which means displaying a translucent overlay which prevents
any further user action until preboot is complete.
* `action` - This is a function callback for any custom code you want to run when this event occurs 
in the server view.
* `replay` - If `false`, the event won't be recorded or replayed. Useful when you utilize one of the other options above.

Here are some examples of event selectors from the defaults:

```es6
var eventSelectors = [

  // for recording changes in form elements
  { selector: 'input,textarea', events: ['keypress', 'keyup', 'keydown', 'input', 'change'] },
  { selector: 'select,option', events: ['change'] },

  // when user hits return button in an input box
  { selector: 'input', events: ['keyup'], preventDefault: true, keyCodes: [13], freeze: true },
  
  // when user submit form (press enter, click on button/input[type="submit"])
  { selector: 'form', events: ['submit'], preventDefault: true, freeze: true },

  // for tracking focus (no need to replay)
  { selector: 'input,textarea', events: ['focusin', 'focusout', 'mousedown', 'mouseup'], replay: false },

  // user clicks on a button
  { selector: 'button', events: ['click'], preventDefault: true, freeze: true }
];
```

#### Using with manual bootstrap (e.g. with ngUpgrade)

Preboot registers its reply code at the `APP_BOOTSTRAP_LISTENER` token which is called by Angular for every component that is bootstrapped. If you don't have the `bootstrap` property defined in your `AppModule`'s `NgModule` but you instead use the `ngDoBootrap` method (which is done e.g. when using ngUpgrade) this code will not run at all.

To make Preboot work correctly in such a case you need to specify `replay: false` in the Preboot options and replay the events yourself. That is, import `PrebootModule` like this:

```typescript
PrebootModule.withConfig({
  appRoot: 'app-root',
  replay: false,
})
```

and replay events in `AppComponent` like this:

```typescript
import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, Inject, ApplicationRef } from '@angular/core';
import { Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { EventReplayer } from 'preboot';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: string,
    private appRef: ApplicationRef,
    private replayer: EventReplayer,
  ) {}

  ngOnInit() {
    this.router.initialNavigation();
    if (isPlatformBrowser(this.platformId)) {
      this.appRef.isStable
        .pipe(
          filter(stable => stable),
          take(1),
        ).subscribe(() => {
        this.replayer.replayAll();
      });
    }
  }
}
``` 

#### PrebootComplete

When you are manually replaying events, you often will want to know when Preboot
is done replaying events and switching the buffers. To do this, use the following
code in your app:

```
window.document.addEventListener('PrebootComplete', () => {
  // put your code here that you want to run once preboot is complete
});
```

#### Adding a nonce

If you're using a CSP, you'll need to add a `nonce` property to preboot's inline script.
Preboot allows you to configure this by exporting an optional `PREBOOT_NONCE` token.
Example usage is as follows (for an Express server):

```typescript
import {PREBOOT_NONCE} from 'preboot';
import * as express from 'express';
import {v4} from 'uuid';
import * as csp from 'helmet-csp';

const app = express();

app.use((req, res, next) => {
  res.locals.nonce = v4();
  next();
});

app.use(csp({
  directives: {
    scriptSrc: [`'self'`, (req, res) => `'nonce-${ res.locals.nonce }'`],
    ...
  }
});

... express boilerplate ...

/* when it comes time to render the request, we can inject our new token */

app.get('*', (req, res) => {
  res.render('index', {
    req,
    res,
    providers: [
      {
        provide: PREBOOT_NONCE,
        useValue: res.locals.nonce
      }
    ]
  });
});

... other express route handling (see Universal guide for details) ...
```

Please note that only the nonce tag will appear on the script,
**the value is not rendered in modern browsers**. If you want to make
sure your nonce is generating correctly, you can add a callback
onto your render method to examine the resultant HTML as follows:

```typescript
res.render('index', (req, res) => {
  ...
}, function(error, html) {
  console.log(html.substring(0, 50)); // we only care about the top part
  res.send(html);
});
```

#### Browser support

If you wish to support Internet Explorer 9-11, you will need to include a [Polyfill](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill) for `CustomEvent`.
