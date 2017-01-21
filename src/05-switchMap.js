/* eslint no-console: 0 */
/* eslint prefer-template: 0 */
/* eslint no-unused-vars: 0 */
/* eslint capitalized-comments: 0 */

// use RxJS switchMap to map and flatten higher order observables
// most commonly used instead of manually mapping to a higher order observable 
// and then switching to flatten
// most commonly used for requests and responses to the server
// Observable<Event> ---> Observable<number>

import Rx from 'rxjs';

export const switchMapSample = () => {
	const clickObservable = Rx.Observable.fromEvent(document, 'click');

	// switch map does map and then switch
	const clockObservable = clickObservable.switchMap(
		click => Rx.Observable.interval(1000).take(5)
	);

	clockObservable.subscribe(
		x => console.log(x)
	);
};

switchMapSample();