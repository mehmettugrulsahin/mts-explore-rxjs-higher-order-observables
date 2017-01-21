/* eslint no-console: 0 */
/* eslint prefer-template: 0 */
/* eslint no-unused-vars: 0 */
/* eslint capitalized-comments: 0 */

// Flatten a higher order observable with RxJS switch

import Rx from 'rxjs';

export const mergeAllSample = () => {
	const clickObservable = Rx.Observable.fromEvent(document, 'click');

	// flattening
	// Observable<Observable<number>> ---> Observable<number>

	// mergeAll(3) 
	// allows several inner observables
	// 3 is Number of inner observables
	const clockObservable = clickObservable.map(
		click => Rx.Observable.interval(1000)
	).mergeAll(3);

	clockObservable.subscribe(
		x => console.log(x)
	);
};