/* eslint no-console: 0 */
/* eslint prefer-template: 0 */
/* eslint no-unused-vars: 0 */
/* eslint capitalized-comments: 0 */

// flatten a higher order observable with RxJS switch
// flattening
// Observable<Observable<number>> ---> Observable<number>

import Rx from 'rxjs';

export const switchSample = () => {
	const clickObservable = Rx.Observable.fromEvent(document, 'click');

	// switch() 
	// allows only one inner observable
	// by unsubscribing from the current observable 
	// and subscribing to the next one
	const clockObservable = clickObservable.map(
		click => Rx.Observable.interval(1000)
	).switch();

	clockObservable.subscribe(
		x => console.log(x)
	);
};