/* eslint no-console: 0 */
/* eslint prefer-template: 0 */
/* eslint no-unused-vars: 0 */

// Flatten a higher order observable with RxJS switch

import Rx from 'rxjs';

export const switchSample = () => {
	const clickObservable = Rx.Observable.fromEvent(document, 'click');

	const clockObservable = clickObservable.map(
		click => Rx.Observable.interval(1000)
	).switch();

	// Flattening
	// Observable<Observable<number>> ---> Observable<number>

	clockObservable.subscribe(
		x => console.log(x)
	);
};