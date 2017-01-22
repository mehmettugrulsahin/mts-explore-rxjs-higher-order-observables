/* eslint no-console: 0 */
/* eslint prefer-template: 0 */
/* eslint no-unused-vars: 0 */
/* eslint capitalized-comments: 0 */

// Use RxJS mergeMap to map and merge high order observables

import Rx from 'rxjs';

const performRequest = () =>
	fetch('https://jsonplaceholder.typicode.com/users/1').
		then(res => res.json());

export const mergeMapSample = () => {
	const clickObservable = Rx.Observable.
		fromEvent(document, 'click');

	// mergeMap is shortcut for map and mergeAll
	// same as doing map and then mergeAll
	// map(click => 
	// 	performRequest().
	// mergeAll()
	// outer observable -> click, inner observable -> res
	// there is an alternative name for mergeMap which is flatMap
	const emailObservable = clickObservable.
		mergeMap(click => 
			performRequest(), 
				(click, res) => 
					res.email, 3
		);

	emailObservable.
		subscribe(email => 
			console.log(email)
	);
};

mergeMapSample();