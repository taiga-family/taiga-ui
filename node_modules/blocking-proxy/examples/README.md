This is an example test that makes use of Blocking Proxy.

## Running the example

The example requires python 2.7 and the python selenium module. Assuming you
have pip and python, you can run the example like so:

```
pip install selenium
./run_example.sh 
```

## What it does

The example test is a simple WebDriver test of angularjs.io. It starts a 
selenium server (using [WebDriver Manager](https://github.com/angular/webdriver-manager),
starts a Blocking Proxy instance, then runs the test.

Blocking Proxy is set to use a 3 second highlight delay, so you'll see elements
highlighted before they're interacted with. It will also generate a log of WebDriver
commands in the current directory, with the file like `webdriver_log_xxxxxxxx.txt`.

