Mobile Browser Support
======================

Support for mobile browsers is provided via [appium](https://github.com/appium/appium).  If you
have used `webdriver-manager update --android` or `webdriver-manager update --ios`, when you run
`webdriver-manager start`, Appium will automatically start on the port specified by `--appium-port`.


Android SDK
-----------

`webdriver-manager` will not install the android SDK by default.  If you want to test on android,
run `webdriver-manager update --android`.  This will download the android SDK, Appium, and set up
some virtual android devices for you to run tests against.  By default, this will create only an
android device running version 24 on x86-64.  If you need a different device, you must use the
`--android-api-levels` and `--android-abis` flags.  So you might run a command like this:

```
webdriver-manager update --android --android-api-levels 24 --android-archs armeabi-v7a
```

Valid values for the `--android-api-levels` flag are: `24` and `25`.  You *can* specify a lower
API level, but the virtual device create will not have Chrome installed.

Valid values for the `--android-archs` flag are: 

* `x86`
* `x86_64`
* `armeabi-v7a` (or possibly some other 32-bit ARM architecture)
* `arm64-v8a` (or possibly some other 64-bit ARM architecture)
* `mips`

Note that we always use the `google_apis/*` ABIs, since only those versions comes with chrome.  So
if you specify `--android-archs x86_64`, this tool will use the ABI `google_apis/x86_64`.  If you
wish to use a different platform (i.e. `android-wear`, `android-tv` or `default`), you can do so
with the `--android-platforms` flag.  But only the `google_apis` version comes with Chrome.


As a practical matter, if you don't want to manually accept the license agreements, you can use
`--android-accept-licenses`, which will accept them on your behalf.

Once you have installed the Android SDK with the virtual devices you need, use
`webdriver-manager start --android` to boot up Appium and begin emulating your android device(s).
By default `webdriver-manager` will emulate all available android devices.  If you would rather
emulate a specific device, use `--avds`.  So you might use:

```
webdriver-manager start --android --avds android-23-default-x86_64
```

If you would prefer not to emulate any android virtual devices, use `--avds none`.

If you need to specify the ports used by the android virtual devices, use `--avd_port`.  The port
you specify will be used for the console of the first device, and the port one higher will be used
for its ADB.  The second device will use the next two ports, and so on.


### "Welcome to Chome" UI

Every time appium boots up chrome, a "Welcome to Chrome" dialog will pop up.  It won't interfere
with your tests, since the webpage still renders underneath the dialog, and those tests access the
webpage directly.  However, you won't be able to watch what's going on unless you manually click
"Accept & Continue".  Also, since webdriver boots up a fresh chrome instance every time, chrome
won't remember that you've clicked "Accept & Continue" between tests.  Any time you want to actually
watch the test as it's run, you'll need to click through the dialog again.  For now, there is no
good way around this sadly (https://github.com/appium/appium/issues/6618).

iOS
---------

When you run `webdriver-manager update --ios`, `webdriver-manager` will install Appium and check
your computer for iOS simulation capabilities.  `webdriver-manager` cannot download the xcode
commandline tools for you however, nor can it agree to Apple's user agreement.  The xcode
commandline tools come with several virtual devices pre-setup.  If you need more, run
`xcrun simctl` for help doing that.

Once you have installed Appium, `webdriver-manager` will launch it automatically when you run
`webdriver-manager start`.  Appium will automatically handle starting iOS device emulation as
needed.
