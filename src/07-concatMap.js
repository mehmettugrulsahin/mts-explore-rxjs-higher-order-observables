/* eslint no-console: 0 */
/* eslint prefer-template: 0 */
/* eslint no-unused-vars: 0 */
/* eslint capitalized-comments: 0 */

// Use RxJS concatMap to map and concat high order observables

// how to deal with concurrecy
// use concatMap to have nothing concurrent, but not to cancel anythin
// use mergeMap to have concurrency
// use switchMap to have nothing concurrent, but to cancel previous things

import Rx from 'rxjs';

const performRequest = () =>
	fetch('https://jsonplaceholder.typicode.com/users/1').
		then(res => res.json());

export const concatMapSample = () => {
	const clickObservable = Rx.Observable.
		fromEvent(document, 'click');

	// concatMap is shortcut for map and concatAll
	// same as doing map and then concatAll

	const emailObservable = clickObservable.
		concatMap(click => 
			performRequest(), 
				(click, res) => 
					res.email

		// same as 
		// mergeMap(click => 
		// 	performRequest(), 
		// 		(click, res) => 
		// 			res.email, 1
		);

	emailObservable.
		subscribe(email => 
			console.log(email)
	);
};

concatMapSample();