// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r=Math.floor;function n(r){return r!=r}var t=Number.POSITIVE_INFINITY,e=Number.NEGATIVE_INFINITY;function o(r){return r===t||r===e}var u,i="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),a=Object.prototype.toString,f=Object.prototype.hasOwnProperty,c="function"==typeof Symbol?Symbol.toStringTag:"",l=i&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return a.call(r);t=r[c],u=c,n=null!=(o=r)&&f.call(o,u);try{r[c]=void 0}catch(n){return a.call(r)}return e=a.call(r),n?r[c]=t:delete r[c],e}:function(r){return a.call(r)},y="function"==typeof Uint32Array,v="function"==typeof Uint32Array?Uint32Array:null,p="function"==typeof Uint32Array?Uint32Array:void 0;u=function(){var r,n,t;if("function"!=typeof v)return!1;try{n=new v(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(y&&t instanceof Uint32Array||"[object Uint32Array]"===l(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?p:function(){throw new Error("not implemented")};var s,b=u,d="function"==typeof Float64Array,w="function"==typeof Float64Array?Float64Array:null,A="function"==typeof Float64Array?Float64Array:void 0;s=function(){var r,n,t;if("function"!=typeof w)return!1;try{n=new w([1,3.14,-3.14,NaN]),t=n,r=(d&&t instanceof Float64Array||"[object Float64Array]"===l(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?A:function(){throw new Error("not implemented")};var m,_=s,h="function"==typeof Uint8Array,N="function"==typeof Uint8Array?Uint8Array:null,U="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var r,n,t;if("function"!=typeof N)return!1;try{n=new N(n=[1,3.14,-3.14,256,257]),t=n,r=(h&&t instanceof Uint8Array||"[object Uint8Array]"===l(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?U:function(){throw new Error("not implemented")};var g,j=m,I="function"==typeof Uint16Array,O="function"==typeof Uint16Array?Uint16Array:null,S="function"==typeof Uint16Array?Uint16Array:void 0;g=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O(n=[1,3.14,-3.14,65536,65537]),t=n,r=(I&&t instanceof Uint16Array||"[object Uint16Array]"===l(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E,F={uint16:g,uint8:j};(E=new F.uint16(1))[0]=4660;var T=52===new F.uint8(E.buffer)[0],H=!0===T?1:0,G=new _(1),P=new b(G.buffer);function L(r){return G[0]=r,P[H]}function V(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))}var W=-.16666666666666632;function k(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(W+o*t):r-(o*(.5*n-e*t)-n-e*W)}var x,M,Y=!0===T?0:1,C=new _(1),q=new b(C.buffer);!0===T?(x=1,M=0):(x=0,M=1);var z={HIGH:x,LOW:M},B=new _(1),D=new b(B.buffer),J=z.HIGH,K=z.LOW;function Q(r,n){return D[J]=r,D[K]=n,B[0]}var R,X,Z="function"==typeof Object.defineProperty?Object.defineProperty:null,$=Object.defineProperty,rr=Object.prototype,nr=rr.toString,tr=rr.__defineGetter__,er=rr.__defineSetter__,or=rr.__lookupGetter__,ur=rr.__lookupSetter__,ir=function(){try{return Z({},"x",{}),!0}catch(r){return!1}}()?$:function(r,n,t){var e,o,u,i;if("object"!=typeof r||null===r||"[object Array]"===nr.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===nr.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(or.call(r,n)||ur.call(r,n)?(e=r.__proto__,r.__proto__=rr,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),u="get"in t,i="set"in t,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&tr&&tr.call(r,n,t.get),i&&er&&er.call(r,n,t.set),r};function ar(r,n,t){ir(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===T?(R=1,X=0):(R=0,X=1);var fr={HIGH:R,LOW:X},cr=new _(1),lr=new b(cr.buffer),yr=fr.HIGH,vr=fr.LOW;function pr(r,n,t,e){return cr[0]=r,n[e]=lr[yr],n[e+t]=lr[vr],n}function sr(r){return pr(r,[0,0],1,0)}ar(sr,"assign",pr);var br=[0,0];function dr(r,n){var t,e;return sr.assign(r,br,1,0),t=br[0],t&=2147483647,e=L(n),Q(t|=e&=2147483648,br[1])}function wr(r){return Math.abs(r)}function Ar(r,t,e,u){return n(r)||o(r)?(t[u]=r,t[u+e]=0,t):0!==r&&wr(r)<22250738585072014e-324?(t[u]=4503599627370496*r,t[u+e]=-52,t):(t[u]=r,t[u+e]=0,t)}ar((function(r){return Ar(r,[0,0],1,0)}),"assign",Ar);var mr=[0,0],_r=[0,0];function hr(r,u){var i,a;return 0===u||0===r||n(r)||o(r)?r:(Ar(r,mr,1,0),u+=mr[1],u+=function(r){var n=L(r);return(n=(2146435072&n)>>>20)-1023|0}(r=mr[0]),u<-1074?dr(0,r):u>1023?r<0?e:t:(u<=-1023?(u+=52,a=2220446049250313e-31):a=1,sr.assign(r,_r,1,0),i=_r[0],i&=2148532223,a*Q(i|=u+1023<<20,_r[1])))}function Nr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Ur=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],gr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],jr=16777216,Ir=5.960464477539063e-8,Or=Nr(20),Sr=Nr(20),Er=Nr(20),Fr=Nr(20);function Tr(n,t,e,o,u,i,a,f,c){var l,y,v,p,s,b,d,w,A;for(p=i,A=o[e],w=e,s=0;w>0;s++)y=Ir*A|0,Fr[s]=A-jr*y|0,A=o[w-1]+y,w-=1;if(A=hr(A,u),A-=8*r(.125*A),A-=d=0|A,v=0,u>0?(d+=s=Fr[e-1]>>24-u,Fr[e-1]-=s<<24-u,v=Fr[e-1]>>23-u):0===u?v=Fr[e-1]>>23:A>=.5&&(v=2),v>0){for(d+=1,l=0,s=0;s<e;s++)w=Fr[s],0===l?0!==w&&(l=1,Fr[s]=16777216-w):Fr[s]=16777215-w;if(u>0)switch(u){case 1:Fr[e-1]&=8388607;break;case 2:Fr[e-1]&=4194303}2===v&&(A=1-A,0!==l&&(A-=hr(1,u)))}if(0===A){for(w=0,s=e-1;s>=i;s--)w|=Fr[s];if(0===w){for(b=1;0===Fr[i-b];b++);for(s=e+1;s<=e+b;s++){for(c[f+s]=Ur[a+s],y=0,w=0;w<=f;w++)y+=n[w]*c[f+(s-w)];o[s]=y}return Tr(n,t,e+=b,o,u,i,a,f,c)}}if(0===A)for(e-=1,u-=24;0===Fr[e];)e-=1,u-=24;else(A=hr(A,-u))>=jr?(y=Ir*A|0,Fr[e]=A-jr*y|0,u+=24,Fr[e+=1]=y):Fr[e]=0|A;for(y=hr(1,u),s=e;s>=0;s--)o[s]=y*Fr[s],y*=Ir;for(s=e;s>=0;s--){for(y=0,b=0;b<=p&&b<=e-s;b++)y+=gr[b]*o[s+b];Er[e-s]=y}for(y=0,s=e;s>=0;s--)y+=Er[s];for(t[0]=0===v?y:-y,y=Er[0]-y,s=1;s<=e;s++)y+=Er[s];return t[1]=0===v?y:-y,7&d}function Hr(r,n,t,e){var o,u,i,a,f,c,l;for((u=(t-3)/24|0)<0&&(u=0),a=t-24*(u+1),c=u-(i=e-1),l=i+4,f=0;f<=l;f++)Or[f]=c<0?0:Ur[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=i;c++)o+=r[c]*Or[i+(f-c)];Sr[f]=o}return Tr(r,n,4,Sr,a,4,u,i,Or)}var Gr=Math.round;function Pr(r,n,t){var e,o,u,i,a;return u=r-1.5707963267341256*(e=Gr(.6366197723675814*r)),i=6077100506506192e-26*e,a=n>>20|0,t[0]=u-i,a-(L(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),t[0]=u-i,a-(L(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),t[0]=u-i)),t[1]=u-t[0]-i,e}var Lr=1.5707963267341256,Vr=6077100506506192e-26,Wr=2*Vr,kr=3*Vr,xr=4*Vr,Mr=[0,0,0],Yr=[0,0];function Cr(r,n){var t,e,o,u,i,a,f;if((o=2147483647&L(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Pr(r,o,n):o<=1073928572?r>0?(f=r-Lr,n[0]=f-Vr,n[1]=f-n[0]-Vr,1):(f=r+Lr,n[0]=f+Vr,n[1]=f-n[0]+Vr,-1):r>0?(f=r-2*Lr,n[0]=f-Wr,n[1]=f-n[0]-Wr,2):(f=r+2*Lr,n[0]=f+Wr,n[1]=f-n[0]+Wr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Pr(r,o,n):r>0?(f=r-3*Lr,n[0]=f-kr,n[1]=f-n[0]-kr,3):(f=r+3*Lr,n[0]=f+kr,n[1]=f-n[0]+kr,-3):1075388923===o?Pr(r,o,n):r>0?(f=r-4*Lr,n[0]=f-xr,n[1]=f-n[0]-xr,4):(f=r+4*Lr,n[0]=f+xr,n[1]=f-n[0]+xr,-4);if(o<1094263291)return Pr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return C[0]=r,q[Y]}(r),f=Q(o-((e=(o>>20)-1046)<<20|0),t),i=0;i<2;i++)Mr[i]=0|f,f=16777216*(f-Mr[i]);for(Mr[2]=f,u=3;0===Mr[u-1];)u-=1;return a=Hr(Mr,Yr,e,u),r<0?(n[0]=-Yr[0],n[1]=-Yr[1],-a):(n[0]=Yr[0],n[1]=Yr[1],a)}var qr=[0,0];function zr(r){var n;if(n=L(r),(n&=2147483647)<=1072243195)return n<1044381696?1:V(r,0);if(n>=2146435072)return NaN;switch(3&Cr(r,qr)){case 0:return V(qr[0],qr[1]);case 1:return-k(qr[0],qr[1]);case 2:return-V(qr[0],qr[1]);default:return k(qr[0],qr[1])}}var Br=[0,0];function Dr(r){var n;if(n=L(r),(n&=2147483647)<=1072243195)return n<1045430272?r:k(r,0);if(n>=2146435072)return NaN;switch(3&Cr(r,Br)){case 0:return k(Br[0],Br[1]);case 1:return V(Br[0],Br[1]);case 2:return-k(Br[0],Br[1]);default:return-V(Br[0],Br[1])}}var Jr=3.141592653589793;return function t(e){var u,i;return u=0,e<=0?r(e)===e?NaN:(i=function(r){var t,e;return n(r)||o(r)?NaN:0===(t=wr(e=r%2))||1===t?dr(0,e):t<.25?Dr(Jr*e):t<.75?dr(zr(Jr*(t=.5-t)),e):t<1.25?(e=dr(1,e)-e,Dr(Jr*e)):t<1.75?-dr(zr(Jr*(t-=1.5)),e):(e-=dr(2,e),Dr(Jr*e))}(e),-t(1-e)+9.869604401089358/(i*i)):(e<1&&(u=1/(e*e),e+=1),u+=e<=2?(2+function(r){var n,t;return 0===r?-.9999999999999991:((r<0?-r:r)<=1?(n=r*(r*(r*(r*(r*(2.4787778117864288+r*(2.0771415170245513+r*(.8588778991623601+r*(.20499222604410033+r*(.027210314034819473+.001576484902087695*r)))))-.4042133494563989)-5.746577466976647)-7.94125711970499)-4.712373111208652)-.9999999999999991,t=1+r*(4.712373111208634+r*(9.586191186553398+r*(11.094006726982938+r*(8.090754247493278+r*(3.877058901598914+r*(1.2275867870191448+r*(.249092040606385+r*(.02957504139006556+r*(.0015764849020049815+16126405034405948e-31*r)))))))))):(n=.001576484902087695+(r=1/r)*(.027210314034819473+r*(.20499222604410033+r*(.8588778991623601+r*(2.0771415170245513+r*(2.4787778117864288+r*(r*(r*(r*(-.9999999999999991*r-4.712373111208652)-7.94125711970499)-5.746577466976647)-.4042133494563989)))))),t=16126405034405948e-31+r*(.0015764849020049815+r*(.02957504139006556+r*(.249092040606385+r*(1.2275867870191448+r*(3.877058901598914+r*(8.090754247493278+r*(11.094006726982938+r*(9.586191186553398+r*(4.712373111208634+1*r)))))))))),n/t)}(e))/(e*e):e<=4?(3.5584373474121094+function(r){var n,t;return 0===r?-2.5584373473990794:((r<0?-r:r)<=1?(n=r*(r*(r*(r*(r*(r*(r*(.5154120525543513+r*(.1953783487860643+r*(.03347612826241743+r*(.0023736652059422065+0*r))))-.01914390334056497)-4.466544539286106)-14.797912276547878)-24.925643150482347)-23.9195022162768)-12.283020824054201)-2.5584373473990794,t=1+r*(4.800985584544199+r*(9.992207278431701+r*(11.889614616763133+r*(8.966132566838091+r*(4.4725413614962415+r*(1.4860098202819654+r*(.31957073576676426+r*(.040735834578768094+r*(.0023736652059327163+r*(23955488790352614e-32+-29474924474061867e-34*r))))))))))):(n=0+(r=1/r)*(.0023736652059422065+r*(.03347612826241743+r*(.1953783487860643+r*(.5154120525543513+r*(r*(r*(r*(r*(r*(-2.5584373473990794*r-12.283020824054201)-23.9195022162768)-24.925643150482347)-14.797912276547878)-4.466544539286106)-.01914390334056497))))),t=r*(23955488790352614e-32+r*(.0023736652059327163+r*(.040735834578768094+r*(.31957073576676426+r*(1.4860098202819654+r*(4.4725413614962415+r*(8.966132566838091+r*(11.889614616763133+r*(9.992207278431701+r*(4.800985584544199+1*r))))))))))-29474924474061867e-34),n/t)}(e))/(e*e):e<=8?(1+function(r){var n,t;return 0===r?16662611269702147e-33:((r<0?-r:r)<=1?(n=16662611269702147e-33+r*(.4999999999999977+r*(6.402709450190538+r*(41.38333741550006+r*(166.8033418545628+r*(453.39964786925367+r*(851.153712317697+r*(1097.7065756728507+r*(938.4312324784553+r*(487.26800160465194+119.95344524233573*r))))))))),t=1+r*(12.472085567047449+r*(78.60931297532986+r*(307.47024605031834+r*(805.1406861011516+r*(1439.1201976029215+r*(1735.6105285756048+r*(1348.3250071285634+r*(607.2259858605709+r*(119.95231785727705+.00014016591835503607*r)))))))))):(n=119.95344524233573+(r=1/r)*(487.26800160465194+r*(938.4312324784553+r*(1097.7065756728507+r*(851.153712317697+r*(453.39964786925367+r*(166.8033418545628+r*(41.38333741550006+r*(6.402709450190538+r*(.4999999999999977+16662611269702147e-33*r))))))))),t=.00014016591835503607+r*(119.95231785727705+r*(607.2259858605709+r*(1348.3250071285634+r*(1735.6105285756048+r*(1439.1201976029215+r*(805.1406861011516+r*(307.47024605031834+r*(78.60931297532986+r*(12.472085567047449+1*r)))))))))),n/t)}(1/e))/e:e<=16?(1+function(r){var n,t;return 0===r?-1.848283152741466e-20:((r<0?-r:r)<=1?(n=r*(.5+r*(3.0253386524731334+r*(13.599592751745737+r*(35.31322242830879+r*(67.16394245507142+r*(83.5767733658514+r*(71.07349121223571+r*(35.86215156147256+8.721522316399835*r))))))))-1.848283152741466e-20,t=1+r*(5.717343971612935+r*(25.29340417962044+r*(62.26197679674682+r*(113.955048909239+r*(130.80713832893898+r*(102.42314690233765+r*(44.04247728052452+r*(8.89898032477904+-.029662733687204*r))))))))):(n=8.721522316399835+(r=1/r)*(35.86215156147256+r*(71.07349121223571+r*(83.5767733658514+r*(67.16394245507142+r*(35.31322242830879+r*(13.599592751745737+r*(3.0253386524731334+r*(.5+-1.848283152741466e-20*r)))))))),t=r*(8.89898032477904+r*(44.04247728052452+r*(102.42314690233765+r*(130.80713832893898+r*(113.955048909239+r*(62.26197679674682+r*(25.29340417962044+r*(5.717343971612935+1*r))))))))-.029662733687204),n/t)}(1/e))/e:(1+function(r){var n,t;return 0===r?0:((r<0?-r:r)<=1?(n=0+r*(.5+r*(.34562566988545623+r*(9.628954993608422+r*(3.5936085382439025+r*(49.45959911843888+r*(7.775192373218939+r*(74.4536074488178+r*(2.7520934039706906+r*(23.92923597114717+0*r))))))))),t=1+r*(.3579180064375791+r*(19.138603985070986+r*(.8743490814641436+r*(98.65160974348555+r*(r*(154.31686021625373+r*(r*(60.167913667426475+r*(2.537956362006499*r-13.341484462225642))-40.2026880424379))-16.10519728333829)))))):(n=0+(r=1/r)*(23.92923597114717+r*(2.7520934039706906+r*(74.4536074488178+r*(7.775192373218939+r*(49.45959911843888+r*(3.5936085382439025+r*(9.628954993608422+r*(.34562566988545623+r*(.5+0*r))))))))),t=2.537956362006499+r*(r*(60.167913667426475+r*(r*(154.31686021625373+r*(r*(98.65160974348555+r*(.8743490814641436+r*(19.138603985070986+r*(.3579180064375791+1*r))))-16.10519728333829))-40.2026880424379))-13.341484462225642)),n/t)}(1/e))/e,u)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).trigamma=n();
//# sourceMappingURL=browser.js.map
