#!/bin/bash
trap "kill -- -$$" EXIT

cd ..
npm install

# Start Selenium Server
./node_modules/.bin/webdriver-manager update
./node_modules/.bin/webdriver-manager start &> /dev/null &

# Start Blocking Proxy
node ./built/lib/bin.js \
    --seleniumAddress http://localhost:4444/wd/hub \
    --port 8001 \
    --highlightDelay 3000 \
    --logDir examples/ &> /dev/null &

# Wait a bit for things to come up
sleep 2

# Run the test
python examples/e2e_test.py
