# Scrollbar Optimization Experiments: Detailed Results

This document presents a detailed breakdown of performance metrics from our scrollbar optimization experiments. All
metrics were captured via the Chrome DevTools Protocol (CDP) by tracing layout and style recalculation events during
automated scrolling of complex, reflow-heavy examples.

## Overall Performance Summary

| Variant                               | LayoutCount | Δ% vs baseline | RecalcStyleCount | Δ% vs baseline | LayoutDuration (ms) | Δ% vs baseline | RecalcStyleDuration (ms) | Δ% vs baseline |
| ------------------------------------- | ----------: | -------------: | ---------------: | -------------: | ------------------: | -------------: | -----------------------: | -------------: |
| **baseline-immediate-100-16**         |         153 |           0.0% |                0 |           0.0% |              11.289 |           0.0% |                    0.000 |           0.0% |
| **optimized-microtask-50-10**         |         151 |          -1.3% |                0 |           0.0% |              10.745 |          -4.8% |                    0.000 |           0.0% |
| **microtask-50-8**                    |         148 |          -3.3% |                0 |           0.0% |              10.493 |          -7.1% |                    0.000 |           0.0% |
| **microtask-50-12**                   |         153 |           0.0% |                0 |           0.0% |              11.154 |          -1.2% |                    0.000 |           0.0% |
| **immediate-50-10**                   |         148 |          -3.3% |                0 |           0.0% |              10.506 |          -6.9% |                    0.000 |           0.0% |
| **raf-50-16**                         |         147 |          -3.9% |                0 |           0.0% |              10.651 |          -5.7% |                    0.000 |           0.0% |
| **idle-50-10**                        |         149 |          -2.6% |                0 |           0.0% |              10.423 |          -7.7% |                    0.000 |           0.0% |
| **microtask-30-8**                    |         148 |          -3.3% |                0 |           0.0% |              10.438 |          -7.5% |                    0.000 |           0.0% |
| **microtask-70-12**                   |         138 |          -9.8% |                0 |           0.0% |               9.306 |         -17.6% |                    0.000 |           0.0% |
| **microtask-50-10-audit**             |         127 |         -17.0% |                0 |           0.0% |               8.790 |         -22.1% |                    0.000 |           0.0% |
| **microtask-50-10-derived**           |         131 |         -14.4% |                0 |           0.0% |               9.196 |         -18.5% |                    0.000 |           0.0% |
| **microtask-50-10-transform**         |           4 |         -97.4% |                0 |           0.0% |               0.574 |         -94.9% |                    0.000 |           0.0% |
| **microtask-50-10-derived-transform** |           4 |         -97.4% |                0 |           0.0% |               0.817 |         -92.8% |                    0.000 |           0.0% |
| **throttle-sweep-5ms**                |           4 |         -97.4% |                0 |           0.0% |               0.490 |         -95.7% |                    0.000 |           0.0% |
| **throttle-sweep-7ms**                |           4 |         -97.4% |                0 |           0.0% |               0.684 |         -93.9% |                    0.000 |           0.0% |
| **throttle-sweep-9ms**                |           4 |         -97.4% |                0 |           0.0% |               0.545 |         -95.2% |                    0.000 |           0.0% |
| **throttle-sweep-11ms**               |           4 |         -97.4% |                0 |           0.0% |               0.532 |         -95.3% |                    0.000 |           0.0% |
| **throttle-sweep-13ms**               |           4 |         -97.4% |                0 |           0.0% |               0.553 |         -95.1% |                    0.000 |           0.0% |
| **throttle-sweep-15ms**               |           4 |         -97.4% |                0 |           0.0% |               0.637 |         -94.4% |                    0.000 |           0.0% |
| **throttle-sweep-17ms**               |           4 |         -97.4% |                0 |           0.0% |               0.530 |         -95.3% |                    0.000 |           0.0% |
| **throttle-sweep-19ms**               |           4 |         -97.4% |                0 |           0.0% |               0.484 |         -95.7% |                    0.000 |           0.0% |
| **throttle-sweep-21ms**               |           4 |         -97.4% |                0 |           0.0% |               0.504 |         -95.5% |                    0.000 |           0.0% |
| **throttle-sweep-23ms**               |           3 |         -98.0% |                0 |           0.0% |               0.350 |         -96.9% |                    0.000 |           0.0% |
| **throttle-sweep-27ms**               |           4 |         -97.4% |                0 |           0.0% |               0.568 |         -95.0% |                    0.000 |           0.0% |
| **throttle-sweep-29ms**               |           4 |         -97.4% |                0 |           0.0% |               0.494 |         -95.6% |                    0.000 |           0.0% |
| **throttle-sweep-31ms**               |           4 |         -97.4% |                0 |           0.0% |               0.555 |         -95.1% |                    0.000 |           0.0% |
| **throttle-sweep-33ms**               |           4 |         -97.4% |                0 |           0.0% |               0.498 |         -95.6% |                    0.000 |           0.0% |
| **throttle-sweep-35ms**               |           4 |         -97.4% |                0 |           0.0% |               0.623 |         -94.5% |                    0.000 |           0.0% |
| **throttle-sweep-37ms**               |           4 |         -97.4% |                0 |           0.0% |               0.538 |         -95.2% |                    0.000 |           0.0% |
| **throttle-sweep-39ms**               |           4 |         -97.4% |                0 |           0.0% |               0.523 |         -95.4% |                    0.000 |           0.0% |
| **throttle-sweep-41ms**               |           4 |         -97.4% |                0 |           0.0% |               0.560 |         -95.0% |                    0.000 |           0.0% |
| **throttle-sweep-43ms**               |           4 |         -97.4% |                0 |           0.0% |               0.517 |         -95.4% |                    0.000 |           0.0% |
| **throttle-sweep-45ms**               |           4 |         -97.4% |                0 |           0.0% |               0.504 |         -95.5% |                    0.000 |           0.0% |
| **throttle-sweep-47ms**               |           4 |         -97.4% |                0 |           0.0% |               0.624 |         -94.5% |                    0.000 |           0.0% |
| **throttle-sweep-49ms**               |           4 |         -97.4% |                0 |           0.0% |               0.502 |         -95.6% |                    0.000 |           0.0% |
| **throttle-sweep-51ms**               |           4 |         -97.4% |                0 |           0.0% |               0.536 |         -95.3% |                    0.000 |           0.0% |
| **throttle-sweep-53ms**               |           4 |         -97.4% |                0 |           0.0% |               0.522 |         -95.4% |                    0.000 |           0.0% |
| **throttle-sweep-55ms**               |           4 |         -97.4% |                0 |           0.0% |               0.529 |         -95.3% |                    0.000 |           0.0% |
| **throttle-sweep-57ms**               |           4 |         -97.4% |                0 |           0.0% |               0.517 |         -95.4% |                    0.000 |           0.0% |
| **throttle-sweep-59ms**               |           4 |         -97.4% |                0 |           0.0% |               0.521 |         -95.4% |                    0.000 |           0.0% |
