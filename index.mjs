import { TresRaya } from './tresRaya.mjs';

let tresRaya = new TresRaya();

console.log(tresRaya.jugada(3));
console.log(tresRaya.jugada(0));
console.log(tresRaya.jugada(6));
console.log(tresRaya.jugada(4));
console.log(tresRaya.jugada(5));
console.log(tresRaya.jugada(8));
// console.log(tresRaya.jugada(6));
// console.log(tresRaya.jugada(7));
// console.log(tresRaya.jugada(8));
console.log(tresRaya.hayGanador());
console.log(tresRaya.estado());