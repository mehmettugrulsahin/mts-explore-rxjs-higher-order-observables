/* eslint no-console: 0 */
/* eslint prefer-template: 0 */
/* eslint no-unused-vars: 0 */
/* eslint capitalized-comments: 0 */

// flatten a higher order observable with mergeAll in RxJS
// flattening is done from higher order observable to first order observable
// Observable<Observable<number>> ---> Observable<number>

import Rx from 'rxjs';

export const mergeAllSample = () => {
	const clickObservable = Rx.Observable.fromEvent(document, 'click');

	// mergeAll(3) 
	// allows several concurrent inner observables
	// 3 is maximum mumber of concurrent inner observables
	const clockObservable = clickObservable.map(
		click => Rx.Observable.interval(1000)
	).mergeAll(3);

	clockObservable.subscribe(
		x => console.log(x)
	);
};

mergeAllSample();