// RxJS v6+
import { interval } from 'rxjs';
import { take, ignoreElements } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/ignoreelements
// Example 1: Ignore all elements from source

//emit value every 100ms
const srcInterval$ = interval(100);
//ignore everything but complete
const example = srcInterval$.pipe(take(5), ignoreElements());
const subscribe = example.subscribe(
  (val) => console.log(`NEXT: ${val}`),
  (val) => console.log(`ERROR: ${val}`),
  () => console.log('COMPLETE!')
);
//output: "COMPLETE!"
