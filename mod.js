// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;function e(r){return r!=r}var n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;function i(r){return r===n||r===t}var a="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var o=Object.prototype.toString;var c=Object.prototype.hasOwnProperty;var u="function"==typeof Symbol?Symbol:void 0,f="function"==typeof u?u.toStringTag:"";var s=a&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return o.call(r);n=r[f],a=f,e=null!=(i=r)&&c.call(i,a);try{r[f]=void 0}catch(e){return o.call(r)}return t=o.call(r),e?r[f]=n:delete r[f],t}:function(r){return o.call(r)},l="function"==typeof Uint32Array;var p="function"==typeof Uint32Array?Uint32Array:null;var v,y="function"==typeof Uint32Array?Uint32Array:void 0;v=function(){var r,e,n;if("function"!=typeof p)return!1;try{e=new p(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(l&&n instanceof Uint32Array||"[object Uint32Array]"===s(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?y:function(){throw new Error("not implemented")};var g=v,d="function"==typeof Float64Array;var h="function"==typeof Float64Array?Float64Array:null;var w,b="function"==typeof Float64Array?Float64Array:void 0;w=function(){var r,e,n;if("function"!=typeof h)return!1;try{e=new h([1,3.14,-3.14,NaN]),n=e,r=(d&&n instanceof Float64Array||"[object Float64Array]"===s(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?b:function(){throw new Error("not implemented")};var m=w,A="function"==typeof Uint8Array;var _="function"==typeof Uint8Array?Uint8Array:null;var E,N="function"==typeof Uint8Array?Uint8Array:void 0;E=function(){var r,e,n;if("function"!=typeof _)return!1;try{e=new _(e=[1,3.14,-3.14,256,257]),n=e,r=(A&&n instanceof Uint8Array||"[object Uint8Array]"===s(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?N:function(){throw new Error("not implemented")};var U=E,I="function"==typeof Uint16Array;var S="function"==typeof Uint16Array?Uint16Array:null;var k,x="function"==typeof Uint16Array?Uint16Array:void 0;k=function(){var r,e,n;if("function"!=typeof S)return!1;try{e=new S(e=[1,3.14,-3.14,65536,65537]),n=e,r=(I&&n instanceof Uint16Array||"[object Uint16Array]"===s(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?x:function(){throw new Error("not implemented")};var F,j={uint16:k,uint8:U};(F=new j.uint16(1))[0]=4660;var T=52===new j.uint8(F.buffer)[0],O=!0===T?1:0,V=new m(1),$=new g(V.buffer);function G(r){return V[0]=r,$[O]}function H(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var W=-.16666666666666632;function C(r,e){var n,t,i;return n=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===e?r+t*(W+i*n):r-(i*(.5*e-t*n)-e-t*W)}var L,P,R=!0===T?0:1,Z=new m(1),M=new g(Z.buffer);!0===T?(L=1,P=0):(L=0,P=1);var X={HIGH:L,LOW:P},Y=new m(1),z=new g(Y.buffer),q=X.HIGH,B=X.LOW;function D(r,e){return z[q]=r,z[B]=e,Y[0]}var J="function"==typeof Object.defineProperty?Object.defineProperty:null;var K=Object.defineProperty;function Q(r){return"number"==typeof r}function rr(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function er(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+rr(i):rr(i)+r,t&&(r="-"+r)),r}var nr=String.prototype.toLowerCase,tr=String.prototype.toUpperCase;function ir(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!Q(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=er(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=er(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===tr.call(r.specifier)?tr.call(n):nr.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function ar(r){return"string"==typeof r}var or=Math.abs,cr=String.prototype.toLowerCase,ur=String.prototype.toUpperCase,fr=String.prototype.replace,sr=/e\+(\d)$/,lr=/e-(\d)$/,pr=/^(\d+)$/,vr=/^(\d+)e/,yr=/\.0$/,gr=/\.0*e/,dr=/(\..*[^0])0*e/;function hr(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!Q(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":or(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=fr.call(n,dr,"$1e"),n=fr.call(n,gr,"e"),n=fr.call(n,yr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=fr.call(n,sr,"e+0$1"),n=fr.call(n,lr,"e-0$1"),r.alternate&&(n=fr.call(n,pr,"$1."),n=fr.call(n,vr,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===ur.call(r.specifier)?ur.call(n):cr.call(n)}function wr(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function br(r,e,n){var t=e-r.length;return t<0?r:r=n?r+wr(t):wr(t)+r}var mr=String.fromCharCode,Ar=isNaN,_r=Array.isArray;function Er(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Nr(r){var e,n,t,i,a,o,c,u,f;if(!_r(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,u=0;u<r.length;u++)if(ar(t=r[u]))o+=t;else{if(e=void 0!==t.precision,!(t=Er(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,Ar(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,Ar(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=ir(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!Ar(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Ar(a)?String(t.arg):mr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=hr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=er(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=br(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var Ur=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ir(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Sr(r){var e,n,t,i;for(n=[],i=0,t=Ur.exec(r);t;)(e=r.slice(i,Ur.lastIndex-t[0].length)).length&&n.push(e),n.push(Ir(t)),i=Ur.lastIndex,t=Ur.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function kr(r){return"string"==typeof r}function xr(r){var e,n,t;if(!kr(r))throw new TypeError(xr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Sr(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return Nr.apply(null,n)}var Fr=Object.prototype,jr=Fr.toString,Tr=Fr.__defineGetter__,Or=Fr.__defineSetter__,Vr=Fr.__lookupGetter__,$r=Fr.__lookupSetter__;var Gr,Hr,Wr=function(){try{return J({},"x",{}),!0}catch(r){return!1}}()?K:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===jr.call(r))throw new TypeError(xr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===jr.call(n))throw new TypeError(xr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Vr.call(r,e)||$r.call(r,e)?(t=r.__proto__,r.__proto__=Fr,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Tr&&Tr.call(r,e,n.get),o&&Or&&Or.call(r,e,n.set),r};function Cr(r,e,n){Wr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===T?(Gr=1,Hr=0):(Gr=0,Hr=1);var Lr={HIGH:Gr,LOW:Hr},Pr=new m(1),Rr=new g(Pr.buffer),Zr=Lr.HIGH,Mr=Lr.LOW;function Xr(r,e,n,t){return Pr[0]=r,e[t]=Rr[Zr],e[t+n]=Rr[Mr],e}function Yr(r){return Xr(r,[0,0],1,0)}Cr(Yr,"assign",Xr);var zr=[0,0];function qr(r,e){var n,t;return Yr.assign(r,zr,1,0),n=zr[0],n&=2147483647,t=G(e),D(n|=t&=2147483648,zr[1])}function Br(r){return Math.abs(r)}function Dr(r,n,t,a){return e(r)||i(r)?(n[a]=r,n[a+t]=0,n):0!==r&&Br(r)<22250738585072014e-324?(n[a]=4503599627370496*r,n[a+t]=-52,n):(n[a]=r,n[a+t]=0,n)}Cr((function(r){return Dr(r,[0,0],1,0)}),"assign",Dr);var Jr=[0,0],Kr=[0,0];function Qr(r,a){var o,c;return 0===a||0===r||e(r)||i(r)?r:(Dr(r,Jr,1,0),a+=Jr[1],a+=function(r){var e=G(r);return(e=(2146435072&e)>>>20)-1023|0}(r=Jr[0]),a<-1074?qr(0,r):a>1023?r<0?t:n:(a<=-1023?(a+=52,c=2220446049250313e-31):c=1,Yr.assign(r,Kr,1,0),o=Kr[0],o&=2148532223,c*D(o|=a+1023<<20,Kr[1])))}function re(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var ee=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ne=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],te=5.960464477539063e-8,ie=re(20),ae=re(20),oe=re(20),ce=re(20);function ue(e,n,t,i,a,o,c,u,f){var s,l,p,v,y,g,d,h,w;for(v=o,w=i[t],h=t,y=0;h>0;y++)l=te*w|0,ce[y]=w-16777216*l|0,w=i[h-1]+l,h-=1;if(w=Qr(w,a),w-=8*r(.125*w),w-=d=0|w,p=0,a>0?(d+=y=ce[t-1]>>24-a,ce[t-1]-=y<<24-a,p=ce[t-1]>>23-a):0===a?p=ce[t-1]>>23:w>=.5&&(p=2),p>0){for(d+=1,s=0,y=0;y<t;y++)h=ce[y],0===s?0!==h&&(s=1,ce[y]=16777216-h):ce[y]=16777215-h;if(a>0)switch(a){case 1:ce[t-1]&=8388607;break;case 2:ce[t-1]&=4194303}2===p&&(w=1-w,0!==s&&(w-=Qr(1,a)))}if(0===w){for(h=0,y=t-1;y>=o;y--)h|=ce[y];if(0===h){for(g=1;0===ce[o-g];g++);for(y=t+1;y<=t+g;y++){for(f[u+y]=ee[c+y],l=0,h=0;h<=u;h++)l+=e[h]*f[u+(y-h)];i[y]=l}return ue(e,n,t+=g,i,a,o,c,u,f)}}if(0===w)for(t-=1,a-=24;0===ce[t];)t-=1,a-=24;else(w=Qr(w,-a))>=16777216?(l=te*w|0,ce[t]=w-16777216*l|0,a+=24,ce[t+=1]=l):ce[t]=0|w;for(l=Qr(1,a),y=t;y>=0;y--)i[y]=l*ce[y],l*=te;for(y=t;y>=0;y--){for(l=0,g=0;g<=v&&g<=t-y;g++)l+=ne[g]*i[y+g];oe[t-y]=l}for(l=0,y=t;y>=0;y--)l+=oe[y];for(n[0]=0===p?l:-l,l=oe[0]-l,y=1;y<=t;y++)l+=oe[y];return n[1]=0===p?l:-l,7&d}function fe(r,e,n,t){var i,a,o,c,u,f,s;for(4,(a=(n-3)/24|0)<0&&(a=0),c=n-24*(a+1),f=a-(o=t-1),s=o+4,u=0;u<=s;u++)ie[u]=f<0?0:ee[f],f+=1;for(u=0;u<=4;u++){for(i=0,f=0;f<=o;f++)i+=r[f]*ie[o+(u-f)];ae[u]=i}return 4,ue(r,e,4,ae,c,4,a,o,ie)}var se=Math.round;function le(r,e,n){var t,i,a,o,c;return a=r-1.5707963267341256*(t=se(.6366197723675814*r)),o=6077100506506192e-26*t,c=e>>20|0,n[0]=a-o,c-(G(n[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),n[0]=a-o,c-(G(n[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var pe=1.5707963267341256,ve=6077100506506192e-26,ye=2*ve,ge=4*ve,de=[0,0,0],he=[0,0];function we(r,e){var n,t,i,a,o,c,u;if((i=2147483647&G(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?le(r,i,e):i<=1073928572?r>0?(u=r-pe,e[0]=u-ve,e[1]=u-e[0]-ve,1):(u=r+pe,e[0]=u+ve,e[1]=u-e[0]+ve,-1):r>0?(u=r-2*pe,e[0]=u-ye,e[1]=u-e[0]-ye,2):(u=r+2*pe,e[0]=u+ye,e[1]=u-e[0]+ye,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?le(r,i,e):r>0?(u=r-3*pe,e[0]=u-1.8231301519518578e-10,e[1]=u-e[0]-1.8231301519518578e-10,3):(u=r+3*pe,e[0]=u+1.8231301519518578e-10,e[1]=u-e[0]+1.8231301519518578e-10,-3):1075388923===i?le(r,i,e):r>0?(u=r-4*pe,e[0]=u-ge,e[1]=u-e[0]-ge,4):(u=r+4*pe,e[0]=u+ge,e[1]=u-e[0]+ge,-4);if(i<1094263291)return le(r,i,e);if(i>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return Z[0]=r,M[R]}(r),u=D(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)de[o]=0|u,u=16777216*(u-de[o]);for(de[2]=u,a=3;0===de[a-1];)a-=1;return c=fe(de,he,t,a),r<0?(e[0]=-he[0],e[1]=-he[1],-c):(e[0]=he[0],e[1]=he[1],c)}var be=[0,0];function me(r){var e;if(e=G(r),(e&=2147483647)<=1072243195)return e<1044381696?1:H(r,0);if(e>=2146435072)return NaN;switch(3&we(r,be)){case 0:return H(be[0],be[1]);case 1:return-C(be[0],be[1]);case 2:return-H(be[0],be[1]);default:return C(be[0],be[1])}}var Ae=[0,0];function _e(r){var e;if(e=G(r),(e&=2147483647)<=1072243195)return e<1045430272?r:C(r,0);if(e>=2146435072)return NaN;switch(3&we(r,Ae)){case 0:return C(Ae[0],Ae[1]);case 1:return H(Ae[0],Ae[1]);case 2:return-C(Ae[0],Ae[1]);default:return-H(Ae[0],Ae[1])}}var Ee=3.141592653589793;function Ne(n){var t,a;return t=0,n<=0?r(n)===n?NaN:(a=function(r){var n,t;return e(r)||i(r)?NaN:0===(n=Br(t=r%2))||1===n?qr(0,t):n<.25?_e(Ee*t):n<.75?qr(me(Ee*(n=.5-n)),t):n<1.25?(t=qr(1,t)-t,_e(Ee*t)):n<1.75?-qr(me(Ee*(n-=1.5)),t):(t-=qr(2,t),_e(Ee*t))}(n),-Ne(1-n)+9.869604401089358/(a*a)):(n<1&&(t=1/(n*n),n+=1),t+=n<=2?(2+function(r){var e,n;return 0===r?-.9999999999999991:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(2.4787778117864288+r*(2.0771415170245513+r*(.8588778991623601+r*(.20499222604410033+r*(.027210314034819473+.001576484902087695*r)))))-.4042133494563989)-5.746577466976647)-7.94125711970499)-4.712373111208652)-.9999999999999991,n=1+r*(4.712373111208634+r*(9.586191186553398+r*(11.094006726982938+r*(8.090754247493278+r*(3.877058901598914+r*(1.2275867870191448+r*(.249092040606385+r*(.02957504139006556+r*(.0015764849020049815+16126405034405948e-31*r)))))))))):(e=.001576484902087695+(r=1/r)*(.027210314034819473+r*(.20499222604410033+r*(.8588778991623601+r*(2.0771415170245513+r*(2.4787778117864288+r*(r*(r*(r*(-.9999999999999991*r-4.712373111208652)-7.94125711970499)-5.746577466976647)-.4042133494563989)))))),n=16126405034405948e-31+r*(.0015764849020049815+r*(.02957504139006556+r*(.249092040606385+r*(1.2275867870191448+r*(3.877058901598914+r*(8.090754247493278+r*(11.094006726982938+r*(9.586191186553398+r*(4.712373111208634+1*r)))))))))),e/n)}(n))/(n*n):n<=4?(3.5584373474121094+function(r){var e,n;return 0===r?-2.5584373473990794:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(r*(r*(.5154120525543513+r*(.1953783487860643+r*(.03347612826241743+r*(.0023736652059422065+0*r))))-.01914390334056497)-4.466544539286106)-14.797912276547878)-24.925643150482347)-23.9195022162768)-12.283020824054201)-2.5584373473990794,n=1+r*(4.800985584544199+r*(9.992207278431701+r*(11.889614616763133+r*(8.966132566838091+r*(4.4725413614962415+r*(1.4860098202819654+r*(.31957073576676426+r*(.040735834578768094+r*(.0023736652059327163+r*(23955488790352614e-32+-29474924474061867e-34*r))))))))))):(e=0+(r=1/r)*(.0023736652059422065+r*(.03347612826241743+r*(.1953783487860643+r*(.5154120525543513+r*(r*(r*(r*(r*(r*(-2.5584373473990794*r-12.283020824054201)-23.9195022162768)-24.925643150482347)-14.797912276547878)-4.466544539286106)-.01914390334056497))))),n=r*(23955488790352614e-32+r*(.0023736652059327163+r*(.040735834578768094+r*(.31957073576676426+r*(1.4860098202819654+r*(4.4725413614962415+r*(8.966132566838091+r*(11.889614616763133+r*(9.992207278431701+r*(4.800985584544199+1*r))))))))))-29474924474061867e-34),e/n)}(n))/(n*n):n<=8?(1+function(r){var e,n;return 0===r?16662611269702147e-33:((r<0?-r:r)<=1?(e=16662611269702147e-33+r*(.4999999999999977+r*(6.402709450190538+r*(41.38333741550006+r*(166.8033418545628+r*(453.39964786925367+r*(851.153712317697+r*(1097.7065756728507+r*(938.4312324784553+r*(487.26800160465194+119.95344524233573*r))))))))),n=1+r*(12.472085567047449+r*(78.60931297532986+r*(307.47024605031834+r*(805.1406861011516+r*(1439.1201976029215+r*(1735.6105285756048+r*(1348.3250071285634+r*(607.2259858605709+r*(119.95231785727705+.00014016591835503607*r)))))))))):(e=119.95344524233573+(r=1/r)*(487.26800160465194+r*(938.4312324784553+r*(1097.7065756728507+r*(851.153712317697+r*(453.39964786925367+r*(166.8033418545628+r*(41.38333741550006+r*(6.402709450190538+r*(.4999999999999977+16662611269702147e-33*r))))))))),n=.00014016591835503607+r*(119.95231785727705+r*(607.2259858605709+r*(1348.3250071285634+r*(1735.6105285756048+r*(1439.1201976029215+r*(805.1406861011516+r*(307.47024605031834+r*(78.60931297532986+r*(12.472085567047449+1*r)))))))))),e/n)}(1/n))/n:n<=16?(1+function(r){var e,n;return 0===r?-1.848283152741466e-20:((r<0?-r:r)<=1?(e=r*(.5+r*(3.0253386524731334+r*(13.599592751745737+r*(35.31322242830879+r*(67.16394245507142+r*(83.5767733658514+r*(71.07349121223571+r*(35.86215156147256+8.721522316399835*r))))))))-1.848283152741466e-20,n=1+r*(5.717343971612935+r*(25.29340417962044+r*(62.26197679674682+r*(113.955048909239+r*(130.80713832893898+r*(102.42314690233765+r*(44.04247728052452+r*(8.89898032477904+-.029662733687204*r))))))))):(e=8.721522316399835+(r=1/r)*(35.86215156147256+r*(71.07349121223571+r*(83.5767733658514+r*(67.16394245507142+r*(35.31322242830879+r*(13.599592751745737+r*(3.0253386524731334+r*(.5+-1.848283152741466e-20*r)))))))),n=r*(8.89898032477904+r*(44.04247728052452+r*(102.42314690233765+r*(130.80713832893898+r*(113.955048909239+r*(62.26197679674682+r*(25.29340417962044+r*(5.717343971612935+1*r))))))))-.029662733687204),e/n)}(1/n))/n:(1+function(r){var e,n;return 0===r?0:((r<0?-r:r)<=1?(e=0+r*(.5+r*(.34562566988545623+r*(9.628954993608422+r*(3.5936085382439025+r*(49.45959911843888+r*(7.775192373218939+r*(74.4536074488178+r*(2.7520934039706906+r*(23.92923597114717+0*r))))))))),n=1+r*(.3579180064375791+r*(19.138603985070986+r*(.8743490814641436+r*(98.65160974348555+r*(r*(154.31686021625373+r*(r*(60.167913667426475+r*(2.537956362006499*r-13.341484462225642))-40.2026880424379))-16.10519728333829)))))):(e=0+(r=1/r)*(23.92923597114717+r*(2.7520934039706906+r*(74.4536074488178+r*(7.775192373218939+r*(49.45959911843888+r*(3.5936085382439025+r*(9.628954993608422+r*(.34562566988545623+r*(.5+0*r))))))))),n=2.537956362006499+r*(r*(60.167913667426475+r*(r*(154.31686021625373+r*(r*(98.65160974348555+r*(.8743490814641436+r*(19.138603985070986+r*(.3579180064375791+1*r))))-16.10519728333829))-40.2026880424379))-13.341484462225642)),e/n)}(1/n))/n,t)}export{Ne as default};
//# sourceMappingURL=mod.js.map