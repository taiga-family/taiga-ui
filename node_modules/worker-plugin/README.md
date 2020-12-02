<p align="center">
  <img src="https://i.imgur.com/MlrAQjl.jpg" width="1000" alt="worker-plugin">
</p>
<h1 align="center">👩‍🏭 worker-plugin</h1>
<p align="center">Automatically bundle & compile Web Workers within Webpack.</p>


### Features

Automatically compiles modules loaded in Web Workers:

```js
const worker = new Worker('./foo.js', { type: 'module' });
                          ^^^^^^^^^^
                          gets bundled using webpack
```

The best part? That worker constructor works just fine without bundling turned on, but when bundled the result is **supported in all browsers** that support Web Workers - all the way back to IE 10!

Workers with fully dynamic URLs, Blob URLs, data URLs or with no `{ type:'module' }` option are left unchanged.

## Installation

```sh
npm install -D worker-plugin
```

Then drop it into your **webpack.config.js:**

```diff
+ const WorkerPlugin = require('worker-plugin');

module.exports = {
  <...>
  plugins: [
+    new WorkerPlugin()
  ]
  <...>
}
```

## Usage

**worker.js**: _(our worker module)_

```js
// This is a module worker, so we can use imports (in the browser too!)
import { calculatePi } from './some-other-module';

addEventListener('message', event => {
  postMessage(calculatePi(event.data));
});
```

**main.js**: _(our demo, on the main thread)_

```js
const piWorker = new Worker('./worker.js', { type: 'module' });
piWorker.onmessage = event => {
  console.log('pi: ' + event.data);
};
piWorker.postMessage(42);
```

> **Note:** in order to ensure WorkerPlugin bundles your worker, make sure you're passing a **string** URL/filename to the Worker constructor. WorkerPlugin cannot bundle workers with dynamic/variable filenames, Blob or data URLs - it will leave them unmodified and print a warning during your build.

## Options

In most cases, no options are necessary to use WorkerPlugin.

### `globalObject` _(string | false)_

WorkerPlugin will print a warning if your Webpack configuration has `output.globalObject` set to `window`, since doing so breaks Hot Module Replacement in web workers.

If you're not using HMR and want to disable this warning, pass `globalObject:false`:

```js
new WorkerPlugin({
  // disable warnings about "window" breaking HMR:
  globalObject: false
})
```

To configure the value of `output.globalObject` for WorkerPlugin's internal Webpack Compiler, set `globalObject` to any String:

```js
new WorkerPlugin({
  // use "self" as the global object when receiving hot updates.
  globalObject: 'self' // <-- this is the default value
})
```

### `plugins` _(array)_

By default, WorkerPlugin doesn't run any of your configured Webpack plugins when bundling worker code - this avoids running things like `html-webpack-plugin` twice. For cases where it's necessary to apply a plugin to Worker code, use the `plugins` option.

Here you can specify the names of plugins to "copy" from your existing Webpack configuration, or provide specific plugins to apply only to worker code:

```js
module.exports = {
  <...>
  plugins: [
    // an example of a plugin already being used:
    new SomeExistingPlugin({ <...> }),

    new WorkerPlugin({
      plugins: [
        // A string here will copy the named plugin from your configuration:
        'SomeExistingPlugin',
        
        // Or you can specify a plugin directly, only applied to Worker code:
        new SomePluginToApplyOnlyToWorkers({ <...> })
      ]
    })
  ]
  <...>
}
```

### `sharedWorker` _(boolean)_

If set to `true`, this option enables the bundling of [SharedWorker](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker):

```js
const shared = new SharedWorker('./my-shared-worker.js', { type: 'module' });
```

### `worker` _(boolean)_

If set to `false`, this option disables the bundling of [Worker]. Intended to be used with `{ sharedWorker: true }` to allow bundling of [SharedWorker] only without also bundling [Worker].

### `preserveTypeModule` _(boolean)_
### `workerType` _(string)_

Normally, WorkerPlugin will transform `new Worker('./a.js', { type: 'module' })` to completely remove the `type` option, outputting something like `new Worker('a.worker.js')`. This allows the plugin to compile Module Workers to Classic Workers, which are supported in all browsers.

To instead retain `{type:'module'}` in bundled output, set the `preserveTypeModule` option to `true`:

```js
  plugins: [
    new WorkerPlugin({
      preserveTypeModule: true
    })
  ]
```

Similarly, if you need to have WorkerPlugin output a specific `type` value, use the `workerType` option to spefify it:

```js
  plugins: [
    new WorkerPlugin({
      workerType: 'foo'  // note: this isn't a thing!
    })
  ]
```

## Loader

At its core, worker-plugin provides two features: parsing and handling of `new Worker()`, and standalone bundling of modules for use in a different JavaScript context.

If all you want is to compile separate bundles for a module, `worker-plugin/loader` provides the bundling functionality of worker-plugin as a standalone Webpack loader. This is useful for generating bundles for use in iframes, Service Workers or Worklets. Applying `worker-plugin/loader` to an import will bundle that module and return its URL:

```js
import workerUrl from 'worker-plugin/loader!./my-worker';

console.log(workerUrl); // "/0.worker.js"

CSS.paintWorklet.addModule(workerUrl);
```

Two options are available:

| Option | Type | Description
|---|---|:--|
| `name` | _string_ | Controls the name of the generated chunk.<br>The name is used to generate a URL according to  `output.chunkFilename`.
| `esModule` | _boolean_ | Export the URL from an ES Module (`export default url`).<br>The default is CommonJS (`module.exports = url`).

Options can be supplied inline:

```js
import url from 'worker-plugin/loader?name=foo&esModule!./foo';
```

... or by setting up a loader alias:

```js
// webpack.config.js to enable this:
// import url from 'worker!./foo';
{
  resolveLoader: {
    alias: {
      worker: 'worker-plugin/loader?esModule'
    }
  }
}
```


## License

Apache-2.0
