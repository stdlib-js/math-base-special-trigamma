// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r=Math.floor;function e(r){return r!=r}var t=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;function i(r){return r===t||r===n}var a,o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),c=Object.prototype.toString,u=Object.prototype.hasOwnProperty,f="function"==typeof Symbol?Symbol:void 0,s="function"==typeof f?f.toStringTag:"",l=o&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return c.call(r);t=r[s],a=s,e=null!=(i=r)&&u.call(i,a);try{r[s]=void 0}catch(e){return c.call(r)}return n=c.call(r),e?r[s]=t:delete r[s],n}:function(r){return c.call(r)},p="function"==typeof Uint32Array,y="function"==typeof Uint32Array?Uint32Array:null,d="function"==typeof Uint32Array?Uint32Array:void 0;a=function(){var r,e,t;if("function"!=typeof y)return!1;try{e=new y(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(p&&t instanceof Uint32Array||"[object Uint32Array]"===l(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?d:function(){throw new Error("not implemented")};var g,v=a,h="function"==typeof Float64Array,w="function"==typeof Float64Array?Float64Array:null,b="function"==typeof Float64Array?Float64Array:void 0;g=function(){var r,e,t;if("function"!=typeof w)return!1;try{e=new w([1,3.14,-3.14,NaN]),t=e,r=(h&&t instanceof Float64Array||"[object Float64Array]"===l(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?b:function(){throw new Error("not implemented")};var m,A=g,_="function"==typeof Uint8Array,E="function"==typeof Uint8Array?Uint8Array:null,N="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var r,e,t;if("function"!=typeof E)return!1;try{e=new E(e=[1,3.14,-3.14,256,257]),t=e,r=(_&&t instanceof Uint8Array||"[object Uint8Array]"===l(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?N:function(){throw new Error("not implemented")};var U,I=m,S="function"==typeof Uint16Array,k="function"==typeof Uint16Array?Uint16Array:null,x="function"==typeof Uint16Array?Uint16Array:void 0;U=function(){var r,e,t;if("function"!=typeof k)return!1;try{e=new k(e=[1,3.14,-3.14,65536,65537]),t=e,r=(S&&t instanceof Uint16Array||"[object Uint16Array]"===l(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?x:function(){throw new Error("not implemented")};var F,j={uint16:U,uint8:I};(F=new j.uint16(1))[0]=4660;var T=52===new j.uint8(F.buffer)[0],O=!0===T?1:0,V=new A(1),$=new v(V.buffer);function G(r){return V[0]=r,$[O]}function H(r,e){var t,n,i,a;return i=(a=r*r)*a,n=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),n+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(t=.5*a))+(1-i-t+(a*n-r*e))}var W=-.16666666666666632,C=.00833333333332249,L=-.0001984126982985795,P=27557313707070068e-22,R=-2.5050760253406863e-8,Z=1.58969099521155e-10;function M(r,e){var t,n,i;return t=C+(i=r*r)*(L+i*P)+i*(i*i)*(R+i*Z),n=i*r,0===e?r+n*(W+i*t):r-(i*(.5*e-n*t)-e-n*W)}var X,Y,z=2147483647,q=2146435072,B=1048575,D=!0===T?0:1,J=new A(1),K=new v(J.buffer);!0===T?(X=1,Y=0):(X=0,Y=1);var Q={HIGH:X,LOW:Y},rr=new A(1),er=new v(rr.buffer),tr=Q.HIGH,nr=Q.LOW;function ir(r,e){return er[tr]=r,er[nr]=e,rr[0]}var ar=1023,or=1023,cr=-1023,ur=-1074,fr=2147483648,sr="function"==typeof Object.defineProperty?Object.defineProperty:null,lr=Object.defineProperty;function pr(r){return"number"==typeof r}function yr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function dr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+yr(i):yr(i)+r,n&&(r="-"+r)),r}var gr=String.prototype.toLowerCase,vr=String.prototype.toUpperCase;function hr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!pr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=dr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=dr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===vr.call(r.specifier)?vr.call(t):gr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var wr=Math.abs,br=String.prototype.toLowerCase,mr=String.prototype.toUpperCase,Ar=String.prototype.replace,_r=/e\+(\d)$/,Er=/e-(\d)$/,Nr=/^(\d+)$/,Ur=/^(\d+)e/,Ir=/\.0$/,Sr=/\.0*e/,kr=/(\..*[^0])0*e/;function xr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!pr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":wr(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Ar.call(t,kr,"$1e"),t=Ar.call(t,Sr,"e"),t=Ar.call(t,Ir,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Ar.call(t,_r,"e+0$1"),t=Ar.call(t,Er,"e-0$1"),r.alternate&&(t=Ar.call(t,Nr,"$1."),t=Ar.call(t,Ur,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===mr.call(r.specifier)?mr.call(t):br.call(t)}function Fr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var jr=String.fromCharCode,Tr=isNaN,Or=Array.isArray;function Vr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function $r(r){var e,t,n,i,a,o,c,u,f,s,l,p,y;if(!Or(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,u=0;u<r.length;u++)if("string"==typeof(n=r[u]))o+=n;else{if(e=void 0!==n.precision,!(n=Vr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Tr(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Tr(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=hr(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Tr(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Tr(a)?String(n.arg):jr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=xr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=dr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,l=n.width,p=n.padRight,y=void 0,(y=l-s.length)<0?s:s=p?s+Fr(y):Fr(y)+s)),o+=n.arg||"",c+=1}return o}var Gr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Hr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Wr(r){var e,t,n,i;for(t=[],i=0,n=Gr.exec(r);n;)(e=r.slice(i,Gr.lastIndex-n[0].length)).length&&t.push(e),t.push(Hr(n)),i=Gr.lastIndex,n=Gr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Cr(r){var e,t;if("string"!=typeof r)throw new TypeError(Cr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Wr(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return $r.apply(null,e)}var Lr,Pr,Rr=Object.prototype,Zr=Rr.toString,Mr=Rr.__defineGetter__,Xr=Rr.__defineSetter__,Yr=Rr.__lookupGetter__,zr=Rr.__lookupSetter__,qr=function(){try{return sr({},"x",{}),!0}catch(r){return!1}}()?lr:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Zr.call(r))throw new TypeError(Cr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Zr.call(t))throw new TypeError(Cr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Yr.call(r,e)||zr.call(r,e)?(n=r.__proto__,r.__proto__=Rr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Mr&&Mr.call(r,e,t.get),o&&Xr&&Xr.call(r,e,t.set),r};function Br(r,e,t){qr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===T?(Lr=1,Pr=0):(Lr=0,Pr=1);var Dr={HIGH:Lr,LOW:Pr},Jr=new A(1),Kr=new v(Jr.buffer),Qr=Dr.HIGH,re=Dr.LOW;function ee(r,e,t,n){return Jr[0]=r,e[n]=Kr[Qr],e[n+t]=Kr[re],e}function te(r){return ee(r,[0,0],1,0)}Br(te,"assign",ee);var ne=[0,0];function ie(r,e){var t,n;return te.assign(r,ne,1,0),t=ne[0],t&=z,n=G(e),ir(t|=n&=fr,ne[1])}var ae=22250738585072014e-324;function oe(r){return Math.abs(r)}var ce=4503599627370496;function ue(r,t,n,a){return e(r)||i(r)?(t[a]=r,t[a+n]=0,t):0!==r&&oe(r)<ae?(t[a]=r*ce,t[a+n]=-52,t):(t[a]=r,t[a+n]=0,t)}Br((function(r){return ue(r,[0,0],1,0)}),"assign",ue);var fe=2220446049250313e-31,se=2148532223,le=[0,0],pe=[0,0];function ye(r,a){var o,c;return 0===a||0===r||e(r)||i(r)?r:(ue(r,le,1,0),r=le[0],a+=le[1],a+=function(r){var e=G(r);return(e=(e&q)>>>20)-ar|0}(r),a<ur?ie(0,r):a>or?r<0?n:t:(a<=cr?(a+=52,c=fe):c=1,te.assign(r,pe,1,0),o=pe[0],o&=se,c*ir(o|=a+ar<<20,pe[1])))}function de(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var ge=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ve=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],he=16777216,we=5.960464477539063e-8,be=de(20),me=de(20),Ae=de(20),_e=de(20);function Ee(e,t,n,i,a,o,c,u,f){var s,l,p,y,d,g,v,h,w;for(y=o,w=i[n],h=n,d=0;h>0;d++)l=we*w|0,_e[d]=w-he*l|0,w=i[h-1]+l,h-=1;if(w=ye(w,a),w-=8*r(.125*w),w-=v=0|w,p=0,a>0?(v+=d=_e[n-1]>>24-a,_e[n-1]-=d<<24-a,p=_e[n-1]>>23-a):0===a?p=_e[n-1]>>23:w>=.5&&(p=2),p>0){for(v+=1,s=0,d=0;d<n;d++)h=_e[d],0===s?0!==h&&(s=1,_e[d]=16777216-h):_e[d]=16777215-h;if(a>0)switch(a){case 1:_e[n-1]&=8388607;break;case 2:_e[n-1]&=4194303}2===p&&(w=1-w,0!==s&&(w-=ye(1,a)))}if(0===w){for(h=0,d=n-1;d>=o;d--)h|=_e[d];if(0===h){for(g=1;0===_e[o-g];g++);for(d=n+1;d<=n+g;d++){for(f[u+d]=ge[c+d],l=0,h=0;h<=u;h++)l+=e[h]*f[u+(d-h)];i[d]=l}return Ee(e,t,n+=g,i,a,o,c,u,f)}}if(0===w)for(n-=1,a-=24;0===_e[n];)n-=1,a-=24;else(w=ye(w,-a))>=he?(l=we*w|0,_e[n]=w-he*l|0,a+=24,_e[n+=1]=l):_e[n]=0|w;for(l=ye(1,a),d=n;d>=0;d--)i[d]=l*_e[d],l*=we;for(d=n;d>=0;d--){for(l=0,g=0;g<=y&&g<=n-d;g++)l+=ve[g]*i[d+g];Ae[n-d]=l}for(l=0,d=n;d>=0;d--)l+=Ae[d];for(t[0]=0===p?l:-l,l=Ae[0]-l,d=1;d<=n;d++)l+=Ae[d];return t[1]=0===p?l:-l,7&v}function Ne(r,e,t,n){var i,a,o,c,u,f,s;for((a=(t-3)/24|0)<0&&(a=0),c=t-24*(a+1),f=a-(o=n-1),s=o+4,u=0;u<=s;u++)be[u]=f<0?0:ge[f],f+=1;for(u=0;u<=4;u++){for(i=0,f=0;f<=o;f++)i+=r[f]*be[o+(u-f)];me[u]=i}return Ee(r,e,4,me,c,4,a,o,be)}var Ue=Math.round,Ie=.6366197723675814,Se=1.5707963267341256,ke=6077100506506192e-26,xe=6077100506303966e-26,Fe=20222662487959506e-37,je=20222662487111665e-37,Te=84784276603689e-45,Oe=2047;function Ve(r,e,t){var n,i,a,o,c;return a=r-(n=Ue(r*Ie))*Se,o=n*ke,c=e>>20|0,t[0]=a-o,c-(G(t[0])>>20&Oe)>16&&(o=n*Fe-((i=a)-(a=i-(o=n*xe))-o),t[0]=a-o,c-(G(t[0])>>20&Oe)>49&&(o=n*Te-((i=a)-(a=i-(o=n*je))-o),t[0]=a-o)),t[1]=a-t[0]-o,n}var $e=0,Ge=16777216,He=1.5707963267341256,We=6077100506506192e-26,Ce=2*We,Le=3*We,Pe=4*We,Re=598523,Ze=1072243195,Me=1073928572,Xe=1074752122,Ye=1074977148,ze=1075183036,qe=1075388923,Be=1075594811,De=1094263291,Je=[0,0,0],Ke=[0,0];function Qe(r,e){var t,n,i,a,o,c,u;if((i=G(r)&z|0)<=Ze)return e[0]=r,e[1]=0,0;if(i<=Xe)return(i&B)===Re?Ve(r,i,e):i<=Me?r>0?(u=r-He,e[0]=u-We,e[1]=u-e[0]-We,1):(u=r+He,e[0]=u+We,e[1]=u-e[0]+We,-1):r>0?(u=r-2*He,e[0]=u-Ce,e[1]=u-e[0]-Ce,2):(u=r+2*He,e[0]=u+Ce,e[1]=u-e[0]+Ce,-2);if(i<=Be)return i<=ze?i===Ye?Ve(r,i,e):r>0?(u=r-3*He,e[0]=u-Le,e[1]=u-e[0]-Le,3):(u=r+3*He,e[0]=u+Le,e[1]=u-e[0]+Le,-3):i===qe?Ve(r,i,e):r>0?(u=r-4*He,e[0]=u-Pe,e[1]=u-e[0]-Pe,4):(u=r+4*He,e[0]=u+Pe,e[1]=u-e[0]+Pe,-4);if(i<De)return Ve(r,i,e);if(i>=q)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return J[0]=r,K[D]}(r),u=ir(i-((n=(i>>20)-1046)<<20|0),t),o=0;o<2;o++)Je[o]=0|u,u=(u-Je[o])*Ge;for(Je[2]=u,a=3;Je[a-1]===$e;)a-=1;return c=Ne(Je,Ke,n,a),r<0?(e[0]=-Ke[0],e[1]=-Ke[1],-c):(e[0]=Ke[0],e[1]=Ke[1],c)}var rt=[0,0],et=2147483647,tt=1072243195,nt=1044381696,it=2146435072;function at(r){var e;if(e=G(r),(e&=et)<=tt)return e<nt?1:H(r,0);if(e>=it)return NaN;switch(3&Qe(r,rt)){case 0:return H(rt[0],rt[1]);case 1:return-M(rt[0],rt[1]);case 2:return-H(rt[0],rt[1]);default:return M(rt[0],rt[1])}}var ot=1072243195,ct=1045430272,ut=[0,0];function ft(r){var e;if(e=G(r),(e&=z)<=ot)return e<ct?r:M(r,0);if(e>=q)return NaN;switch(3&Qe(r,ut)){case 0:return M(ut[0],ut[1]);case 1:return H(ut[0],ut[1]);case 2:return-M(ut[0],ut[1]);default:return-H(ut[0],ut[1])}}var st=3.141592653589793;return function t(n){var a,o;return a=0,n<=0?r(n)===n?NaN:(o=function(r){var t,n;return e(r)||i(r)?NaN:0===(t=oe(n=r%2))||1===t?ie(0,n):t<.25?ft(st*n):t<.75?ie(at(st*(t=.5-t)),n):t<1.25?(n=ie(1,n)-n,ft(st*n)):t<1.75?-ie(at(st*(t-=1.5)),n):(n-=ie(2,n),ft(st*n))}(n),-t(1-n)+9.869604401089358/(o*o)):(n<1&&(a=1/(n*n),n+=1),a+=n<=2?(2+function(r){var e,t;return 0===r?-.9999999999999991:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(2.4787778117864288+r*(2.0771415170245513+r*(.8588778991623601+r*(.20499222604410033+r*(.027210314034819473+.001576484902087695*r)))))-.4042133494563989)-5.746577466976647)-7.94125711970499)-4.712373111208652)-.9999999999999991,t=1+r*(4.712373111208634+r*(9.586191186553398+r*(11.094006726982938+r*(8.090754247493278+r*(3.877058901598914+r*(1.2275867870191448+r*(.249092040606385+r*(.02957504139006556+r*(.0015764849020049815+16126405034405948e-31*r)))))))))):(e=.001576484902087695+(r=1/r)*(.027210314034819473+r*(.20499222604410033+r*(.8588778991623601+r*(2.0771415170245513+r*(2.4787778117864288+r*(r*(r*(r*(-.9999999999999991*r-4.712373111208652)-7.94125711970499)-5.746577466976647)-.4042133494563989)))))),t=16126405034405948e-31+r*(.0015764849020049815+r*(.02957504139006556+r*(.249092040606385+r*(1.2275867870191448+r*(3.877058901598914+r*(8.090754247493278+r*(11.094006726982938+r*(9.586191186553398+r*(4.712373111208634+1*r)))))))))),e/t)}(n))/(n*n):n<=4?(3.5584373474121094+function(r){var e,t;return 0===r?-2.5584373473990794:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(r*(r*(.5154120525543513+r*(.1953783487860643+r*(.03347612826241743+r*(.0023736652059422065+0*r))))-.01914390334056497)-4.466544539286106)-14.797912276547878)-24.925643150482347)-23.9195022162768)-12.283020824054201)-2.5584373473990794,t=1+r*(4.800985584544199+r*(9.992207278431701+r*(11.889614616763133+r*(8.966132566838091+r*(4.4725413614962415+r*(1.4860098202819654+r*(.31957073576676426+r*(.040735834578768094+r*(.0023736652059327163+r*(23955488790352614e-32+-29474924474061867e-34*r))))))))))):(e=0+(r=1/r)*(.0023736652059422065+r*(.03347612826241743+r*(.1953783487860643+r*(.5154120525543513+r*(r*(r*(r*(r*(r*(-2.5584373473990794*r-12.283020824054201)-23.9195022162768)-24.925643150482347)-14.797912276547878)-4.466544539286106)-.01914390334056497))))),t=r*(23955488790352614e-32+r*(.0023736652059327163+r*(.040735834578768094+r*(.31957073576676426+r*(1.4860098202819654+r*(4.4725413614962415+r*(8.966132566838091+r*(11.889614616763133+r*(9.992207278431701+r*(4.800985584544199+1*r))))))))))-29474924474061867e-34),e/t)}(n))/(n*n):n<=8?(1+function(r){var e,t;return 0===r?16662611269702147e-33:((r<0?-r:r)<=1?(e=16662611269702147e-33+r*(.4999999999999977+r*(6.402709450190538+r*(41.38333741550006+r*(166.8033418545628+r*(453.39964786925367+r*(851.153712317697+r*(1097.7065756728507+r*(938.4312324784553+r*(487.26800160465194+119.95344524233573*r))))))))),t=1+r*(12.472085567047449+r*(78.60931297532986+r*(307.47024605031834+r*(805.1406861011516+r*(1439.1201976029215+r*(1735.6105285756048+r*(1348.3250071285634+r*(607.2259858605709+r*(119.95231785727705+.00014016591835503607*r)))))))))):(e=119.95344524233573+(r=1/r)*(487.26800160465194+r*(938.4312324784553+r*(1097.7065756728507+r*(851.153712317697+r*(453.39964786925367+r*(166.8033418545628+r*(41.38333741550006+r*(6.402709450190538+r*(.4999999999999977+16662611269702147e-33*r))))))))),t=.00014016591835503607+r*(119.95231785727705+r*(607.2259858605709+r*(1348.3250071285634+r*(1735.6105285756048+r*(1439.1201976029215+r*(805.1406861011516+r*(307.47024605031834+r*(78.60931297532986+r*(12.472085567047449+1*r)))))))))),e/t)}(1/n))/n:n<=16?(1+function(r){var e,t;return 0===r?-1.848283152741466e-20:((r<0?-r:r)<=1?(e=r*(.5+r*(3.0253386524731334+r*(13.599592751745737+r*(35.31322242830879+r*(67.16394245507142+r*(83.5767733658514+r*(71.07349121223571+r*(35.86215156147256+8.721522316399835*r))))))))-1.848283152741466e-20,t=1+r*(5.717343971612935+r*(25.29340417962044+r*(62.26197679674682+r*(113.955048909239+r*(130.80713832893898+r*(102.42314690233765+r*(44.04247728052452+r*(8.89898032477904+-.029662733687204*r))))))))):(e=8.721522316399835+(r=1/r)*(35.86215156147256+r*(71.07349121223571+r*(83.5767733658514+r*(67.16394245507142+r*(35.31322242830879+r*(13.599592751745737+r*(3.0253386524731334+r*(.5+-1.848283152741466e-20*r)))))))),t=r*(8.89898032477904+r*(44.04247728052452+r*(102.42314690233765+r*(130.80713832893898+r*(113.955048909239+r*(62.26197679674682+r*(25.29340417962044+r*(5.717343971612935+1*r))))))))-.029662733687204),e/t)}(1/n))/n:(1+function(r){var e,t;return 0===r?0:((r<0?-r:r)<=1?(e=0+r*(.5+r*(.34562566988545623+r*(9.628954993608422+r*(3.5936085382439025+r*(49.45959911843888+r*(7.775192373218939+r*(74.4536074488178+r*(2.7520934039706906+r*(23.92923597114717+0*r))))))))),t=1+r*(.3579180064375791+r*(19.138603985070986+r*(.8743490814641436+r*(98.65160974348555+r*(r*(154.31686021625373+r*(r*(60.167913667426475+r*(2.537956362006499*r-13.341484462225642))-40.2026880424379))-16.10519728333829)))))):(e=0+(r=1/r)*(23.92923597114717+r*(2.7520934039706906+r*(74.4536074488178+r*(7.775192373218939+r*(49.45959911843888+r*(3.5936085382439025+r*(9.628954993608422+r*(.34562566988545623+r*(.5+0*r))))))))),t=2.537956362006499+r*(r*(60.167913667426475+r*(r*(154.31686021625373+r*(r*(98.65160974348555+r*(.8743490814641436+r*(19.138603985070986+r*(.3579180064375791+1*r))))-16.10519728333829))-40.2026880424379))-13.341484462225642)),e/t)}(1/n))/n)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).trigamma=e();
//# sourceMappingURL=index.js.map
