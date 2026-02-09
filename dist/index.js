"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=t(function(z,n){
var y=require('@stdlib/strided-base-smap/dist'),j=require('@stdlib/math-base-special-ceilf/dist');function x(e,r,i,a,s){return y(e,r,i,a,s,j)}n.exports=x
});var q=t(function(A,c){
var R=require('@stdlib/strided-base-smap/dist').ndarray,_=require('@stdlib/math-base-special-ceilf/dist');function E(e,r,i,a,s,d,m){return R(e,r,i,a,s,d,m,_)}c.exports=E
});var l=t(function(B,p){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=v(),b=q();O(o,"ndarray",b);p.exports=o
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=l(),u,f=h(g(__dirname,"./native.js"));f instanceof Error?u=k:u=f;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
