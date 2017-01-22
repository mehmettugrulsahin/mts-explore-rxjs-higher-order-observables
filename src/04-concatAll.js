/* eslint no-console: 0 */
/* eslint prefer-template: 0 */
/* eslint no-unused-vars: 0 */
/* eslint capitalized-comments: 0 */

// Flatten a higher order observable with concatAll in RxJS
// flattening is done from higher order observable to first order observable
// Observable<Observable<number>> ---> Observable<number>

import Rx from 'rxjs';

export const concatAllSample = () => {
	const clickObservable = Rx.Observable.
		fromEvent(document, 'click');

	// equivalent of mergeAll(1)
	const clockObservable = clickObservable.
		map(click => 
			Rx.Observable.interval(1000).take(5)).
		concatAll();

	clockObservable.subscribe(
		x => console.log(x)
	);
};

concatAllSample();