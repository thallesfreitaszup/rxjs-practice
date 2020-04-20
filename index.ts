import { of,Observable,throwError } from 'rxjs';
import { mergeMap,map, retryWhen, delayWhen,retry } from 'rxjs/operators';
const observable = new Observable(subscribe =>{
    subscribe.next(1)
    subscribe.next(2)
    subscribe.next(3)
    subscribe.next(4)
    subscribe.next(5)
    subscribe.next(6)
})
const values = observable.pipe(
    mergeMap( val=> {
        if(val>5 ){
            return throwError('error')
        }else{
            return of(val);
        }
    }),
    retry(1)
)
values.subscribe({
    next(x){
        console.log(x)
    },
    error(x){
        throw new Error('x')
    }
})
