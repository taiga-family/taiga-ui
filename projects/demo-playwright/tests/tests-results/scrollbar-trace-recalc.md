# Trace-based layout/style recalculation study

Runs per variant: undefined

## Totals summary (all complex demos)

| Variant | LayoutCount | LayoutDuration (ms) |
|---|---:|---:|
| baseline-immediate-100-16 | 153 | 11.289 |
| optimized-microtask-50-10 | 151 | 10.745 |
| microtask-50-8 | 148 | 10.493 |
| microtask-50-12 | 153 | 11.154 |
| immediate-50-10 | 148 | 10.506 |
| raf-50-16 | 147 | 10.651 |
| idle-50-10 | 149 | 10.423 |
| microtask-30-8 | 148 | 10.438 |
| microtask-70-12 | 138 | 9.306 |
| microtask-50-10-audit | 127 | 8.790 |
| microtask-50-10-derived | 131 | 9.196 |
| microtask-50-10-transform | 4 | 0.574 |
| microtask-50-10-derived-transform | 4 | 0.817 |
| throttle-sweep-5ms | 4 | 0.490 |
| throttle-sweep-7ms | 4 | 0.684 |
| throttle-sweep-9ms | 4 | 0.545 |
| throttle-sweep-11ms | 4 | 0.532 |
| throttle-sweep-13ms | 4 | 0.553 |
| throttle-sweep-15ms | 4 | 0.637 |
| throttle-sweep-17ms | 4 | 0.530 |
| throttle-sweep-19ms | 4 | 0.484 |
| throttle-sweep-21ms | 4 | 0.504 |
| throttle-sweep-23ms | 3 | 0.350 |
| throttle-sweep-27ms | 4 | 0.568 |
| throttle-sweep-29ms | 4 | 0.494 |
| throttle-sweep-31ms | 4 | 0.555 |
| throttle-sweep-33ms | 4 | 0.498 |
| throttle-sweep-35ms | 4 | 0.623 |
| throttle-sweep-37ms | 4 | 0.538 |
| throttle-sweep-39ms | 4 | 0.523 |
| throttle-sweep-41ms | 4 | 0.560 |
| throttle-sweep-43ms | 4 | 0.517 |
| throttle-sweep-45ms | 4 | 0.504 |
| throttle-sweep-47ms | 4 | 0.624 |
| throttle-sweep-49ms | 4 | 0.502 |
| throttle-sweep-51ms | 4 | 0.536 |
| throttle-sweep-53ms | 4 | 0.522 |
| throttle-sweep-55ms | 4 | 0.529 |
| throttle-sweep-57ms | 4 | 0.517 |
| throttle-sweep-59ms | 4 | 0.521 |


## Deltas vs baseline (percent)

### optimized-microtask-50-10 vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -57.1% | -59.8% |
| 10 | 3.4% | 11.7% |
| 11 | 0.0% | 4.2% |
| 12 | 17.1% | 9.5% |
| 13 | -22.7% | -28.2% |
| 14 | -3.3% | -4.3% |

### microtask-50-8 vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -28.6% | -48.7% |
| 10 | 0.0% | 9.3% |
| 11 | -3.3% | 2.9% |
| 12 | 5.7% | 1.7% |
| 13 | -18.2% | -28.8% |
| 14 | 0.0% | -7.9% |

### microtask-50-12 vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | 14.3% | -13.5% |
| 10 | 0.0% | 5.9% |
| 11 | 0.0% | 6.6% |
| 12 | 8.6% | 6.5% |
| 13 | -18.2% | -20.4% |
| 14 | 0.0% | -6.5% |

### immediate-50-10 vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -28.6% | -49.6% |
| 10 | -3.4% | 3.3% |
| 11 | -3.3% | 0.5% |
| 12 | 14.3% | 11.1% |
| 13 | -22.7% | -29.7% |
| 14 | 0.0% | -10.5% |

### raf-50-16 vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | 0.0% | -15.5% |
| 10 | -10.3% | -2.8% |
| 11 | -6.7% | -6.9% |
| 12 | 17.1% | 15.7% |
| 13 | -22.7% | -32.5% |
| 14 | -6.7% | -9.4% |

### idle-50-10 vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -14.3% | -43.8% |
| 10 | -3.4% | 2.7% |
| 11 | -6.7% | -4.0% |
| 12 | 14.3% | 14.7% |
| 13 | -22.7% | -31.4% |
| 14 | -3.3% | -14.8% |

### microtask-30-8 vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -14.3% | -23.6% |
| 10 | -3.4% | 4.8% |
| 11 | -6.7% | -5.4% |
| 12 | 14.3% | 9.1% |
| 13 | -22.7% | -31.2% |
| 14 | -6.7% | -16.8% |

### microtask-70-12 vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | 28.6% | -33.0% |
| 10 | -10.3% | -10.5% |
| 11 | -10.0% | -5.7% |
| 12 | -14.3% | -17.9% |
| 13 | -13.6% | -35.9% |
| 14 | -6.7% | -16.3% |

### microtask-50-10-audit vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | 42.9% | -16.7% |
| 10 | -20.7% | -15.7% |
| 11 | -20.0% | -20.5% |
| 12 | -17.1% | -22.3% |
| 13 | -22.7% | -32.3% |
| 14 | -20.0% | -24.4% |

### microtask-50-10-derived vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -57.1% | -67.7% |
| 10 | -13.8% | -7.7% |
| 11 | -13.3% | -7.3% |
| 12 | -2.9% | -6.0% |
| 13 | -13.6% | -31.2% |
| 14 | -20.0% | -24.6% |

### microtask-50-10-transform vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -100.0% | -100.0% |
| 10 | -100.0% | -100.0% |
| 11 | -100.0% | -100.0% |
| 12 | -88.6% | -78.1% |
| 13 | -100.0% | -100.0% |
| 14 | -100.0% | -100.0% |

### microtask-50-10-derived-transform vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -100.0% | -100.0% |
| 10 | -100.0% | -100.0% |
| 11 | -100.0% | -100.0% |
| 12 | -88.6% | -68.9% |
| 13 | -100.0% | -100.0% |
| 14 | -100.0% | -100.0% |

### throttle-sweep-5ms vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -100.0% | -100.0% |
| 10 | -100.0% | -100.0% |
| 11 | -100.0% | -100.0% |
| 12 | -88.6% | -81.3% |
| 13 | -100.0% | -100.0% |
| 14 | -100.0% | -100.0% |

### throttle-sweep-7ms vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -100.0% | -100.0% |
| 10 | -100.0% | -100.0% |
| 11 | -100.0% | -100.0% |
| 12 | -88.6% | -73.9% |
| 13 | -100.0% | -100.0% |
| 14 | -100.0% | -100.0% |

### throttle-sweep-9ms vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -100.0% | -100.0% |
| 10 | -100.0% | -100.0% |
| 11 | -100.0% | -100.0% |
| 12 | -88.6% | -79.2% |
| 13 | -100.0% | -100.0% |
| 14 | -100.0% | -100.0% |

### throttle-sweep-11ms vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -100.0% | -100.0% |
| 10 | -100.0% | -100.0% |
| 11 | -100.0% | -100.0% |
| 12 | -88.6% | -79.7% |
| 13 | -100.0% | -100.0% |
| 14 | -100.0% | -100.0% |

### throttle-sweep-13ms vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -100.0% | -100.0% |
| 10 | -100.0% | -100.0% |
| 11 | -100.0% | -100.0% |
| 12 | -88.6% | -78.9% |
| 13 | -100.0% | -100.0% |
| 14 | -100.0% | -100.0% |

### throttle-sweep-15ms vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -100.0% | -100.0% |
| 10 | -100.0% | -100.0% |
| 11 | -100.0% | -100.0% |
| 12 | -88.6% | -75.7% |
| 13 | -100.0% | -100.0% |
| 14 | -100.0% | -100.0% |

### throttle-sweep-17ms vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -100.0% | -100.0% |
| 10 | -100.0% | -100.0% |
| 11 | -100.0% | -100.0% |
| 12 | -88.6% | -79.8% |
| 13 | -100.0% | -100.0% |
| 14 | -100.0% | -100.0% |

### throttle-sweep-19ms vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -100.0% | -100.0% |
| 10 | -100.0% | -100.0% |
| 11 | -100.0% | -100.0% |
| 12 | -88.6% | -81.5% |
| 13 | -100.0% | -100.0% |
| 14 | -100.0% | -100.0% |

### throttle-sweep-21ms vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -100.0% | -100.0% |
| 10 | -100.0% | -100.0% |
| 11 | -100.0% | -100.0% |
| 12 | -88.6% | -80.8% |
| 13 | -100.0% | -100.0% |
| 14 | -100.0% | -100.0% |

### throttle-sweep-23ms vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -100.0% | -100.0% |
| 10 | -100.0% | -100.0% |
| 11 | -100.0% | -100.0% |
| 12 | -91.4% | -86.7% |
| 13 | -100.0% | -100.0% |
| 14 | -100.0% | -100.0% |

### throttle-sweep-27ms vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -100.0% | -100.0% |
| 10 | -100.0% | -100.0% |
| 11 | -100.0% | -100.0% |
| 12 | -88.6% | -78.4% |
| 13 | -100.0% | -100.0% |
| 14 | -100.0% | -100.0% |

### throttle-sweep-29ms vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -100.0% | -100.0% |
| 10 | -100.0% | -100.0% |
| 11 | -100.0% | -100.0% |
| 12 | -88.6% | -81.2% |
| 13 | -100.0% | -100.0% |
| 14 | -100.0% | -100.0% |

### throttle-sweep-31ms vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -100.0% | -100.0% |
| 10 | -100.0% | -100.0% |
| 11 | -100.0% | -100.0% |
| 12 | -88.6% | -78.9% |
| 13 | -100.0% | -100.0% |
| 14 | -100.0% | -100.0% |

### throttle-sweep-33ms vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -100.0% | -100.0% |
| 10 | -100.0% | -100.0% |
| 11 | -100.0% | -100.0% |
| 12 | -88.6% | -81.0% |
| 13 | -100.0% | -100.0% |
| 14 | -100.0% | -100.0% |

### throttle-sweep-35ms vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -100.0% | -100.0% |
| 10 | -100.0% | -100.0% |
| 11 | -100.0% | -100.0% |
| 12 | -88.6% | -76.3% |
| 13 | -100.0% | -100.0% |
| 14 | -100.0% | -100.0% |

### throttle-sweep-37ms vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -100.0% | -100.0% |
| 10 | -100.0% | -100.0% |
| 11 | -100.0% | -100.0% |
| 12 | -88.6% | -79.5% |
| 13 | -100.0% | -100.0% |
| 14 | -100.0% | -100.0% |

### throttle-sweep-39ms vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -100.0% | -100.0% |
| 10 | -100.0% | -100.0% |
| 11 | -100.0% | -100.0% |
| 12 | -88.6% | -80.1% |
| 13 | -100.0% | -100.0% |
| 14 | -100.0% | -100.0% |

### throttle-sweep-41ms vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -100.0% | -100.0% |
| 10 | -100.0% | -100.0% |
| 11 | -100.0% | -100.0% |
| 12 | -88.6% | -78.7% |
| 13 | -100.0% | -100.0% |
| 14 | -100.0% | -100.0% |

### throttle-sweep-43ms vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -100.0% | -100.0% |
| 10 | -100.0% | -100.0% |
| 11 | -100.0% | -100.0% |
| 12 | -88.6% | -80.3% |
| 13 | -100.0% | -100.0% |
| 14 | -100.0% | -100.0% |

### throttle-sweep-45ms vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -100.0% | -100.0% |
| 10 | -100.0% | -100.0% |
| 11 | -100.0% | -100.0% |
| 12 | -88.6% | -80.8% |
| 13 | -100.0% | -100.0% |
| 14 | -100.0% | -100.0% |

### throttle-sweep-47ms vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -100.0% | -100.0% |
| 10 | -100.0% | -100.0% |
| 11 | -100.0% | -100.0% |
| 12 | -88.6% | -76.2% |
| 13 | -100.0% | -100.0% |
| 14 | -100.0% | -100.0% |

### throttle-sweep-49ms vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -100.0% | -100.0% |
| 10 | -100.0% | -100.0% |
| 11 | -100.0% | -100.0% |
| 12 | -88.6% | -80.9% |
| 13 | -100.0% | -100.0% |
| 14 | -100.0% | -100.0% |

### throttle-sweep-51ms vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -100.0% | -100.0% |
| 10 | -100.0% | -100.0% |
| 11 | -100.0% | -100.0% |
| 12 | -88.6% | -79.6% |
| 13 | -100.0% | -100.0% |
| 14 | -100.0% | -100.0% |

### throttle-sweep-53ms vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -100.0% | -100.0% |
| 10 | -100.0% | -100.0% |
| 11 | -100.0% | -100.0% |
| 12 | -88.6% | -80.1% |
| 13 | -100.0% | -100.0% |
| 14 | -100.0% | -100.0% |

### throttle-sweep-55ms vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -100.0% | -100.0% |
| 10 | -100.0% | -100.0% |
| 11 | -100.0% | -100.0% |
| 12 | -88.6% | -79.9% |
| 13 | -100.0% | -100.0% |
| 14 | -100.0% | -100.0% |

### throttle-sweep-57ms vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -100.0% | -100.0% |
| 10 | -100.0% | -100.0% |
| 11 | -100.0% | -100.0% |
| 12 | -88.6% | -80.3% |
| 13 | -100.0% | -100.0% |
| 14 | -100.0% | -100.0% |

### throttle-sweep-59ms vs baseline-immediate-100-16

| Example | LayoutCount Δ% | LayoutDuration Δ% |
|---:|---:|---:|
| 9 | -100.0% | -100.0% |
| 10 | -100.0% | -100.0% |
| 11 | -100.0% | -100.0% |
| 12 | -88.6% | -80.1% |
| 13 | -100.0% | -100.0% |
| 14 | -100.0% | -100.0% |
