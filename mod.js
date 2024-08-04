// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;function e(r){return r!=r}var n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;function i(r){return r===n||r===t}var a="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var o=Object.prototype.toString;var c=Object.prototype.hasOwnProperty;var u="function"==typeof Symbol?Symbol:void 0,f="function"==typeof u?u.toStringTag:"";var s=a&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return o.call(r);n=r[f],a=f,e=null!=(i=r)&&c.call(i,a);try{r[f]=void 0}catch(e){return o.call(r)}return t=o.call(r),e?r[f]=n:delete r[f],t}:function(r){return o.call(r)},l="function"==typeof Uint32Array;var p="function"==typeof Uint32Array?Uint32Array:null;var v,g="function"==typeof Uint32Array?Uint32Array:void 0;v=function(){var r,e,n;if("function"!=typeof p)return!1;try{e=new p(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(l&&n instanceof Uint32Array||"[object Uint32Array]"===s(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?g:function(){throw new Error("not implemented")};var y=v,d="function"==typeof Float64Array;var h="function"==typeof Float64Array?Float64Array:null;var w,b="function"==typeof Float64Array?Float64Array:void 0;w=function(){var r,e,n;if("function"!=typeof h)return!1;try{e=new h([1,3.14,-3.14,NaN]),n=e,r=(d&&n instanceof Float64Array||"[object Float64Array]"===s(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?b:function(){throw new Error("not implemented")};var m=w,A="function"==typeof Uint8Array;var _="function"==typeof Uint8Array?Uint8Array:null;var E,U="function"==typeof Uint8Array?Uint8Array:void 0;E=function(){var r,e,n;if("function"!=typeof _)return!1;try{e=new _(e=[1,3.14,-3.14,256,257]),n=e,r=(A&&n instanceof Uint8Array||"[object Uint8Array]"===s(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?U:function(){throw new Error("not implemented")};var S=E,I="function"==typeof Uint16Array;var N="function"==typeof Uint16Array?Uint16Array:null;var k,x="function"==typeof Uint16Array?Uint16Array:void 0;k=function(){var r,e,n;if("function"!=typeof N)return!1;try{e=new N(e=[1,3.14,-3.14,65536,65537]),n=e,r=(I&&n instanceof Uint16Array||"[object Uint16Array]"===s(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?x:function(){throw new Error("not implemented")};var F,j={uint16:k,uint8:S};(F=new j.uint16(1))[0]=4660;var T=52===new j.uint8(F.buffer)[0],O=!0===T?1:0,V=new m(1),$=new y(V.buffer);function G(r){return V[0]=r,$[O]}function H(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var W=-.16666666666666632,C=.00833333333332249,L=-.0001984126982985795,P=27557313707070068e-22,R=-2.5050760253406863e-8,Z=1.58969099521155e-10;function M(r,e){var n,t,i;return n=C+(i=r*r)*(L+i*P)+i*(i*i)*(R+i*Z),t=i*r,0===e?r+t*(W+i*n):r-(i*(.5*e-t*n)-e-t*W)}var X,Y,z=2147483647,q=2146435072,B=1048575,D=!0===T?0:1,J=new m(1),K=new y(J.buffer);!0===T?(X=1,Y=0):(X=0,Y=1);var Q={HIGH:X,LOW:Y},rr=new m(1),er=new y(rr.buffer),nr=Q.HIGH,tr=Q.LOW;function ir(r,e){return er[nr]=r,er[tr]=e,rr[0]}var ar=1023,or=1023,cr=-1023,ur=-1074,fr=2147483648,sr="function"==typeof Object.defineProperty?Object.defineProperty:null;var lr=Object.defineProperty;function pr(r){return"number"==typeof r}function vr(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function gr(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+vr(i):vr(i)+r,t&&(r="-"+r)),r}var yr=String.prototype.toLowerCase,dr=String.prototype.toUpperCase;function hr(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!pr(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=gr(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=gr(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===dr.call(r.specifier)?dr.call(n):yr.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var wr=Math.abs,br=String.prototype.toLowerCase,mr=String.prototype.toUpperCase,Ar=String.prototype.replace,_r=/e\+(\d)$/,Er=/e-(\d)$/,Ur=/^(\d+)$/,Sr=/^(\d+)e/,Ir=/\.0$/,Nr=/\.0*e/,kr=/(\..*[^0])0*e/;function xr(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!pr(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":wr(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=Ar.call(n,kr,"$1e"),n=Ar.call(n,Nr,"e"),n=Ar.call(n,Ir,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=Ar.call(n,_r,"e+0$1"),n=Ar.call(n,Er,"e-0$1"),r.alternate&&(n=Ar.call(n,Ur,"$1."),n=Ar.call(n,Sr,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===mr.call(r.specifier)?mr.call(n):br.call(n)}function Fr(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var jr=String.fromCharCode,Tr=Array.isArray;function Or(r){return r!=r}function Vr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function $r(r){var e,n,t,i,a,o,c,u,f,s,l,p,v;if(!Tr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,u=0;u<r.length;u++)if(t=r[u],"string"==typeof t)o+=t;else{if(e=void 0!==t.precision,!(t=Vr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,Or(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,Or(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=hr(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!Or(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Or(a)?String(t.arg):jr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=xr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=gr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(s=t.arg,l=t.width,p=t.padRight,v=void 0,(v=l-s.length)<0?s:s=p?s+Fr(v):Fr(v)+s)),o+=t.arg||"",c+=1}return o}var Gr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Hr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Wr(r){var e,n,t,i;for(n=[],i=0,t=Gr.exec(r);t;)(e=r.slice(i,Gr.lastIndex-t[0].length)).length&&n.push(e),n.push(Hr(t)),i=Gr.lastIndex,t=Gr.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function Cr(r){var e,n;if("string"!=typeof r)throw new TypeError(Cr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Wr(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return $r.apply(null,e)}var Lr=Object.prototype,Pr=Lr.toString,Rr=Lr.__defineGetter__,Zr=Lr.__defineSetter__,Mr=Lr.__lookupGetter__,Xr=Lr.__lookupSetter__;var Yr,zr,qr=function(){try{return sr({},"x",{}),!0}catch(r){return!1}}()?lr:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Pr.call(r))throw new TypeError(Cr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Pr.call(n))throw new TypeError(Cr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Mr.call(r,e)||Xr.call(r,e)?(t=r.__proto__,r.__proto__=Lr,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Rr&&Rr.call(r,e,n.get),o&&Zr&&Zr.call(r,e,n.set),r};function Br(r,e,n){qr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===T?(Yr=1,zr=0):(Yr=0,zr=1);var Dr={HIGH:Yr,LOW:zr},Jr=new m(1),Kr=new y(Jr.buffer),Qr=Dr.HIGH,re=Dr.LOW;function ee(r,e,n,t){return Jr[0]=r,e[t]=Kr[Qr],e[t+n]=Kr[re],e}function ne(r){return ee(r,[0,0],1,0)}Br(ne,"assign",ee);var te=[0,0];function ie(r,e){var n,t;return ne.assign(r,te,1,0),n=te[0],n&=z,t=G(e),ir(n|=t&=fr,te[1])}var ae=22250738585072014e-324;function oe(r){return Math.abs(r)}var ce=4503599627370496;function ue(r,n,t,a){return e(r)||i(r)?(n[a]=r,n[a+t]=0,n):0!==r&&oe(r)<ae?(n[a]=r*ce,n[a+t]=-52,n):(n[a]=r,n[a+t]=0,n)}Br((function(r){return ue(r,[0,0],1,0)}),"assign",ue);var fe=2220446049250313e-31,se=2148532223,le=[0,0],pe=[0,0];function ve(r,a){var o,c;return 0===a||0===r||e(r)||i(r)?r:(ue(r,le,1,0),r=le[0],a+=le[1],a+=function(r){var e=G(r);return(e=(e&q)>>>20)-ar|0}(r),a<ur?ie(0,r):a>or?r<0?t:n:(a<=cr?(a+=52,c=fe):c=1,ne.assign(r,pe,1,0),o=pe[0],o&=se,c*ir(o|=a+ar<<20,pe[1])))}function ge(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var ye=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],de=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],he=16777216,we=5.960464477539063e-8,be=ge(20),me=ge(20),Ae=ge(20),_e=ge(20);function Ee(e,n,t,i,a,o,c,u,f){var s,l,p,v,g,y,d,h,w;for(v=o,w=i[t],h=t,g=0;h>0;g++)l=we*w|0,_e[g]=w-he*l|0,w=i[h-1]+l,h-=1;if(w=ve(w,a),w-=8*r(.125*w),w-=d=0|w,p=0,a>0?(d+=g=_e[t-1]>>24-a,_e[t-1]-=g<<24-a,p=_e[t-1]>>23-a):0===a?p=_e[t-1]>>23:w>=.5&&(p=2),p>0){for(d+=1,s=0,g=0;g<t;g++)h=_e[g],0===s?0!==h&&(s=1,_e[g]=16777216-h):_e[g]=16777215-h;if(a>0)switch(a){case 1:_e[t-1]&=8388607;break;case 2:_e[t-1]&=4194303}2===p&&(w=1-w,0!==s&&(w-=ve(1,a)))}if(0===w){for(h=0,g=t-1;g>=o;g--)h|=_e[g];if(0===h){for(y=1;0===_e[o-y];y++);for(g=t+1;g<=t+y;g++){for(f[u+g]=ye[c+g],l=0,h=0;h<=u;h++)l+=e[h]*f[u+(g-h)];i[g]=l}return Ee(e,n,t+=y,i,a,o,c,u,f)}}if(0===w)for(t-=1,a-=24;0===_e[t];)t-=1,a-=24;else(w=ve(w,-a))>=he?(l=we*w|0,_e[t]=w-he*l|0,a+=24,_e[t+=1]=l):_e[t]=0|w;for(l=ve(1,a),g=t;g>=0;g--)i[g]=l*_e[g],l*=we;for(g=t;g>=0;g--){for(l=0,y=0;y<=v&&y<=t-g;y++)l+=de[y]*i[g+y];Ae[t-g]=l}for(l=0,g=t;g>=0;g--)l+=Ae[g];for(n[0]=0===p?l:-l,l=Ae[0]-l,g=1;g<=t;g++)l+=Ae[g];return n[1]=0===p?l:-l,7&d}function Ue(r,e,n,t){var i,a,o,c,u,f,s;for(4,(a=(n-3)/24|0)<0&&(a=0),c=n-24*(a+1),f=a-(o=t-1),s=o+4,u=0;u<=s;u++)be[u]=f<0?0:ye[f],f+=1;for(u=0;u<=4;u++){for(i=0,f=0;f<=o;f++)i+=r[f]*be[o+(u-f)];me[u]=i}return 4,Ee(r,e,4,me,c,4,a,o,be)}var Se=Math.round,Ie=.6366197723675814,Ne=1.5707963267341256,ke=6077100506506192e-26,xe=6077100506303966e-26,Fe=20222662487959506e-37,je=20222662487111665e-37,Te=84784276603689e-45,Oe=2047;function Ve(r,e,n){var t,i,a,o,c;return a=r-(t=Se(r*Ie))*Ne,o=t*ke,c=e>>20|0,n[0]=a-o,c-(G(n[0])>>20&Oe)>16&&(o=t*Fe-((i=a)-(a=i-(o=t*xe))-o),n[0]=a-o,c-(G(n[0])>>20&Oe)>49&&(o=t*Te-((i=a)-(a=i-(o=t*je))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var $e=0,Ge=16777216,He=1.5707963267341256,We=6077100506506192e-26,Ce=2*We,Le=3*We,Pe=4*We,Re=598523,Ze=1072243195,Me=1073928572,Xe=1074752122,Ye=1074977148,ze=1075183036,qe=1075388923,Be=1075594811,De=1094263291,Je=[0,0,0],Ke=[0,0];function Qe(r,e){var n,t,i,a,o,c,u;if((i=G(r)&z|0)<=Ze)return e[0]=r,e[1]=0,0;if(i<=Xe)return(i&B)===Re?Ve(r,i,e):i<=Me?r>0?(u=r-He,e[0]=u-We,e[1]=u-e[0]-We,1):(u=r+He,e[0]=u+We,e[1]=u-e[0]+We,-1):r>0?(u=r-2*He,e[0]=u-Ce,e[1]=u-e[0]-Ce,2):(u=r+2*He,e[0]=u+Ce,e[1]=u-e[0]+Ce,-2);if(i<=Be)return i<=ze?i===Ye?Ve(r,i,e):r>0?(u=r-3*He,e[0]=u-Le,e[1]=u-e[0]-Le,3):(u=r+3*He,e[0]=u+Le,e[1]=u-e[0]+Le,-3):i===qe?Ve(r,i,e):r>0?(u=r-4*He,e[0]=u-Pe,e[1]=u-e[0]-Pe,4):(u=r+4*He,e[0]=u+Pe,e[1]=u-e[0]+Pe,-4);if(i<De)return Ve(r,i,e);if(i>=q)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return J[0]=r,K[D]}(r),u=ir(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)Je[o]=0|u,u=(u-Je[o])*Ge;for(Je[2]=u,a=3;Je[a-1]===$e;)a-=1;return c=Ue(Je,Ke,t,a),r<0?(e[0]=-Ke[0],e[1]=-Ke[1],-c):(e[0]=Ke[0],e[1]=Ke[1],c)}var rn=[0,0],en=2147483647,nn=1072243195,tn=1044381696,an=2146435072;function on(r){var e;if(e=G(r),(e&=en)<=nn)return e<tn?1:H(r,0);if(e>=an)return NaN;switch(3&Qe(r,rn)){case 0:return H(rn[0],rn[1]);case 1:return-M(rn[0],rn[1]);case 2:return-H(rn[0],rn[1]);default:return M(rn[0],rn[1])}}var cn=1072243195,un=1045430272,fn=[0,0];function sn(r){var e;if(e=G(r),(e&=z)<=cn)return e<un?r:M(r,0);if(e>=q)return NaN;switch(3&Qe(r,fn)){case 0:return M(fn[0],fn[1]);case 1:return H(fn[0],fn[1]);case 2:return-M(fn[0],fn[1]);default:return-H(fn[0],fn[1])}}var ln=3.141592653589793;function pn(n){var t,a;return t=0,n<=0?r(n)===n?NaN:(a=function(r){var n,t;return e(r)||i(r)?NaN:0===(n=oe(t=r%2))||1===n?ie(0,t):n<.25?sn(ln*t):n<.75?ie(on(ln*(n=.5-n)),t):n<1.25?(t=ie(1,t)-t,sn(ln*t)):n<1.75?-ie(on(ln*(n-=1.5)),t):(t-=ie(2,t),sn(ln*t))}(n),-pn(1-n)+9.869604401089358/(a*a)):(n<1&&(t=1/(n*n),n+=1),t+=n<=2?(2+function(r){var e,n;return 0===r?-.9999999999999991:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(2.4787778117864288+r*(2.0771415170245513+r*(.8588778991623601+r*(.20499222604410033+r*(.027210314034819473+.001576484902087695*r)))))-.4042133494563989)-5.746577466976647)-7.94125711970499)-4.712373111208652)-.9999999999999991,n=1+r*(4.712373111208634+r*(9.586191186553398+r*(11.094006726982938+r*(8.090754247493278+r*(3.877058901598914+r*(1.2275867870191448+r*(.249092040606385+r*(.02957504139006556+r*(.0015764849020049815+16126405034405948e-31*r)))))))))):(e=.001576484902087695+(r=1/r)*(.027210314034819473+r*(.20499222604410033+r*(.8588778991623601+r*(2.0771415170245513+r*(2.4787778117864288+r*(r*(r*(r*(-.9999999999999991*r-4.712373111208652)-7.94125711970499)-5.746577466976647)-.4042133494563989)))))),n=16126405034405948e-31+r*(.0015764849020049815+r*(.02957504139006556+r*(.249092040606385+r*(1.2275867870191448+r*(3.877058901598914+r*(8.090754247493278+r*(11.094006726982938+r*(9.586191186553398+r*(4.712373111208634+1*r)))))))))),e/n)}(n))/(n*n):n<=4?(3.5584373474121094+function(r){var e,n;return 0===r?-2.5584373473990794:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(r*(r*(.5154120525543513+r*(.1953783487860643+r*(.03347612826241743+r*(.0023736652059422065+0*r))))-.01914390334056497)-4.466544539286106)-14.797912276547878)-24.925643150482347)-23.9195022162768)-12.283020824054201)-2.5584373473990794,n=1+r*(4.800985584544199+r*(9.992207278431701+r*(11.889614616763133+r*(8.966132566838091+r*(4.4725413614962415+r*(1.4860098202819654+r*(.31957073576676426+r*(.040735834578768094+r*(.0023736652059327163+r*(23955488790352614e-32+-29474924474061867e-34*r))))))))))):(e=0+(r=1/r)*(.0023736652059422065+r*(.03347612826241743+r*(.1953783487860643+r*(.5154120525543513+r*(r*(r*(r*(r*(r*(-2.5584373473990794*r-12.283020824054201)-23.9195022162768)-24.925643150482347)-14.797912276547878)-4.466544539286106)-.01914390334056497))))),n=r*(23955488790352614e-32+r*(.0023736652059327163+r*(.040735834578768094+r*(.31957073576676426+r*(1.4860098202819654+r*(4.4725413614962415+r*(8.966132566838091+r*(11.889614616763133+r*(9.992207278431701+r*(4.800985584544199+1*r))))))))))-29474924474061867e-34),e/n)}(n))/(n*n):n<=8?(1+function(r){var e,n;return 0===r?16662611269702147e-33:((r<0?-r:r)<=1?(e=16662611269702147e-33+r*(.4999999999999977+r*(6.402709450190538+r*(41.38333741550006+r*(166.8033418545628+r*(453.39964786925367+r*(851.153712317697+r*(1097.7065756728507+r*(938.4312324784553+r*(487.26800160465194+119.95344524233573*r))))))))),n=1+r*(12.472085567047449+r*(78.60931297532986+r*(307.47024605031834+r*(805.1406861011516+r*(1439.1201976029215+r*(1735.6105285756048+r*(1348.3250071285634+r*(607.2259858605709+r*(119.95231785727705+.00014016591835503607*r)))))))))):(e=119.95344524233573+(r=1/r)*(487.26800160465194+r*(938.4312324784553+r*(1097.7065756728507+r*(851.153712317697+r*(453.39964786925367+r*(166.8033418545628+r*(41.38333741550006+r*(6.402709450190538+r*(.4999999999999977+16662611269702147e-33*r))))))))),n=.00014016591835503607+r*(119.95231785727705+r*(607.2259858605709+r*(1348.3250071285634+r*(1735.6105285756048+r*(1439.1201976029215+r*(805.1406861011516+r*(307.47024605031834+r*(78.60931297532986+r*(12.472085567047449+1*r)))))))))),e/n)}(1/n))/n:n<=16?(1+function(r){var e,n;return 0===r?-1.848283152741466e-20:((r<0?-r:r)<=1?(e=r*(.5+r*(3.0253386524731334+r*(13.599592751745737+r*(35.31322242830879+r*(67.16394245507142+r*(83.5767733658514+r*(71.07349121223571+r*(35.86215156147256+8.721522316399835*r))))))))-1.848283152741466e-20,n=1+r*(5.717343971612935+r*(25.29340417962044+r*(62.26197679674682+r*(113.955048909239+r*(130.80713832893898+r*(102.42314690233765+r*(44.04247728052452+r*(8.89898032477904+-.029662733687204*r))))))))):(e=8.721522316399835+(r=1/r)*(35.86215156147256+r*(71.07349121223571+r*(83.5767733658514+r*(67.16394245507142+r*(35.31322242830879+r*(13.599592751745737+r*(3.0253386524731334+r*(.5+-1.848283152741466e-20*r)))))))),n=r*(8.89898032477904+r*(44.04247728052452+r*(102.42314690233765+r*(130.80713832893898+r*(113.955048909239+r*(62.26197679674682+r*(25.29340417962044+r*(5.717343971612935+1*r))))))))-.029662733687204),e/n)}(1/n))/n:(1+function(r){var e,n;return 0===r?0:((r<0?-r:r)<=1?(e=0+r*(.5+r*(.34562566988545623+r*(9.628954993608422+r*(3.5936085382439025+r*(49.45959911843888+r*(7.775192373218939+r*(74.4536074488178+r*(2.7520934039706906+r*(23.92923597114717+0*r))))))))),n=1+r*(.3579180064375791+r*(19.138603985070986+r*(.8743490814641436+r*(98.65160974348555+r*(r*(154.31686021625373+r*(r*(60.167913667426475+r*(2.537956362006499*r-13.341484462225642))-40.2026880424379))-16.10519728333829)))))):(e=0+(r=1/r)*(23.92923597114717+r*(2.7520934039706906+r*(74.4536074488178+r*(7.775192373218939+r*(49.45959911843888+r*(3.5936085382439025+r*(9.628954993608422+r*(.34562566988545623+r*(.5+0*r))))))))),n=2.537956362006499+r*(r*(60.167913667426475+r*(r*(154.31686021625373+r*(r*(98.65160974348555+r*(.8743490814641436+r*(19.138603985070986+r*(.3579180064375791+1*r))))-16.10519728333829))-40.2026880424379))-13.341484462225642)),e/n)}(1/n))/n,t)}export{pn as default};
//# sourceMappingURL=mod.js.map
