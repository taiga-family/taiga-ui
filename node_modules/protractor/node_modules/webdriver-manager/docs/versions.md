# update command: downloading specific binaries

The help command for update. The flags shown here are OS specific. If you are not on a Windows machine, the `--ie` flags are not shown.

```
webdriver-manager update help
```

Overview when you call `update`:

* The output directory is created if it does not exist (`out_dir`)
* If this is the first time downloading, it will make web requests to selenium-release.storage.googleapis.com, chromedriver.storage.googleapis.com, and api.github.com. The responses will be stored in the `out_dir` as a cache.
* If this is not the first time downloading, it will look at the cached files in `out_dir` and if the file is older than an hour, it will make a request for new files. Note: api.github.com is rate limited by the ip address making the request. This is an issue for common CI systems like Travis or Circle and have an issue opened for this.
* The response will then be parsed for the url to get the latest version if no version is provided via command line. The latest version will be based on what is available for your OS type and architecture.
* Next we download the file from the url. If the file already exists (based on content length), we cancel the download.
* We uncompress zip and tar files and for linux and mac, we set the permissions. Currently, we always uncompress the files even if the uncompressed files already exist.
* Finally we write the file locations to the `update-config.json` which is also located in the `out_dir`.

## Download defaults --chrome, --gecko, --standalone flags

Let's say you want to download just chromedriver...

```
webdriver-manager update --gecko false --standalone false
```

Why do we set `--gecko` and `--standalone` to false? By default chromedriver, geckodriver and selenium standalone server download with no flags set. Setting `--gecko` and `--standalone` to false will prevent them from downloading and will just download chromedriver.

## Download using --ie

When setting the `--ie` flag, this will download IEDriver 32 bit. Why 32-bit? We prefer using the 32-bit version because the 64-bit version has been previously reported to be very slow and flaky. 

## Download a specific version

Let's say there is an issue with the latest version of chromedriver and we need version 2.20:

```
webdriver-manager update --versions.chrome 2.20
```

So the only thing different here is that instead of parsing for the latest version, we are parsing for version 2.20. We could then verify that it was the last item downloaded by calling `webdriver-manager status`.

What about selenium standalone 2.53.1? This is similar but instead of the flag would be `--versions.standalone 2.53.1`. What if the selenium standalone server has a beta in the name? The idea is similar:

```
webdriver-manager update --versions.standalone 3.0.0-beta1
```

# start command: setting specific versions

The help command for start.

```
webdriver-manager start help
```

When starting selenium standalone server with `webdriver-manager start`, it will use the latest version that is found in the cache unless you specify the version. Why? The idea here is that if you run `webdriver-manager update` without flags, you are using the latest binary versions, so the start command would be similar `webdriver-manager start`.

## Starting a specific version

So let's say you downloaded chromedriver 2.20 and let's also say that the latest version is 2.29. If you have never downloaded 2.29, then chromedriver will not be associated with your selenium standalone server. In order for you to get 2.20 working:

```
webdriver-manager start --versions.chrome 2.20
```

What about chrome version 2.20, selenium standalone server 3.0.0-beta1, and not start with gecko driver?

```
webdriver-manager start --versions.chrome 2.20 --versions.standalone 3.0.0-beta1 --gecko false
```

## Starting with --ie

Since IEDriver is not set by default, you'll still need to pass this field if you would like to start the selenium standalone server with the IEDriver.

```
webdriver-manager start --ie
```

## Starting with --edge

We make the assumption that you already have the EdgeDriver downloaded and installed. To get this working pass the full path to the `--edge` flag

```
webdriver-manager start --edge "C:\Program Files (x86)\Microsoft Web Driver\MicrosoftWebDriver.exe"
```
