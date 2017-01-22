/* eslint no-console: 0 */
/* eslint prefer-template: 0 */
/* eslint no-unused-vars: 0 */
/* eslint capitalized-comments: 0 */

// Use RxJS mergeMap for fine-grain custom behavior

import Rx from 'rxjs';

export const mergeMapFineGrainSampleOne = () => {
	const sourceObservable = Rx.Observable.
		interval(500).take(5);

	const resultObservable = sourceObservable.
		map(x => x * 10);
		// or
		// mergeMap(x => Rx.Observable.of(10 * x));

		// to filter
		// .filter(x => x % 2 === 0)
		// or with mergeMap
		// 
		
	resultObservable.
		subscribe(x => 
			console.log(x));
};

mergeMapFineGrainSampleOne();