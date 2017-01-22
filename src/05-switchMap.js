/* eslint no-console: 0 */
/* eslint prefer-template: 0 */
/* eslint no-unused-vars: 0 */
/* eslint capitalized-comments: 0 */

// Use RxJS switchMap to map and flatten higher order observables
// most commonly used instead of manually mapping to a higher order observable 
// and then switching to flatten
// most commonly used for requests and responses to the server
// Observable<Event> ---> Observable<number>

import Rx from 'rxjs';

const performRequest = () =>
	fetch('https://jsonplaceholder.typicode.com/users/1').
		then(res => res.json());

export const switchMapSample = () => {
	const clickObservable = Rx.Observable.
		fromEvent(document, 'click');

	// switch map does map and then switch
	// Observable<Even> -> Observable<Response>
	// not an observable of promise but an observable of response
	const responseObservable = clickObservable.
		switchMap(click => 
			Rx.Observable.fromPromise(performRequest())

		// switchMap converts promises to observables 
		// allowing the following
		// switchMap(click => 
		// 	performRequest()
	);

	responseObservable.
		subscribe(x => 
			console.log(x.email)
	);
};

switchMapSample();