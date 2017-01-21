/* eslint no-console: 0 */
/* eslint prefer-template: 0 */
/* eslint no-unused-vars: 0 */

import Rx from 'rxjs';

export const numObservableSample = () => {		
	const numObservable = Rx.Observable.interval(1000).take(4);

	numObservable.subscribe(x => console.log(x));
};

export const stringObservableSample = () => {		
	const numObservable = Rx.Observable.interval(1000).take(4);

	const stringObservable = numObservable.map(
		x => 'hello' + x
	);

	stringObservable.subscribe(
		x => console.log(x)
	);
};

export const higherOrderObservableSample = () => {
	const numObservable = Rx.Observable.interval(1000).take(4);
	
	const higherOrderObservable = numObservable.map(
		x => Rx.Observable.of(1, 2)
	);

	higherOrderObservable.subscribe(obs => obs.subscribe(x => console.log(x)));
};

export const clickObservableSample = () => {
	const clickObservable = Rx.Observable.fromEvent(document, 'click');

	const clockObservable = clickObservable.map(
		click => Rx.Observable.interval(1000)
	);

	clockObservable.subscribe(clock => clock.subscribe(x => console.log(x)));
};