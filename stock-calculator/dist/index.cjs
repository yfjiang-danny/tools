"use strict";var o=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var d=Object.prototype.hasOwnProperty;var E=(n,e)=>{for(var b in e)o(n,b,{get:e[b],enumerable:!0})},P=(n,e,b,p)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of c(e))!d.call(n,t)&&t!==b&&o(n,t,{get:()=>e[t],enumerable:!(p=f(e,t))||p.enumerable});return n};var A=n=>P(o({},"__esModule",{value:!0}),n);var G={};E(G,{StockCalculator:()=>x});module.exports=A(G);var x;(t=>{function n(r,u,m){return r/u/(m*100)}t.PEG=n;function e(r,u,m){return r/(u+u*m)}t.nextPE=e;function b(r,u,m){return(m*100*u-r)/r}t.amplitude=b;function p(r,u,m,i){return i*b(r,u,m)}t.priceAmplitude=p})(x||(x={}));
