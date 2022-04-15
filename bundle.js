// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).trigamma=n()}(this,(function(){"use strict";var r=Math.floor;var n=function(r){return r!=r},t=Number.POSITIVE_INFINITY,e=Number.NEGATIVE_INFINITY,o=t,u=e;var f=function(r){return r===o||r===u};var a=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var i=function(){return a&&"symbol"==typeof Symbol.toStringTag},c=Object.prototype.toString,v=c;var y=function(r){return v.call(r)},l=Object.prototype.hasOwnProperty;var p=function(r,n){return null!=r&&l.call(r,n)},s="function"==typeof Symbol?Symbol.toStringTag:"",A=p,w=s,b=c;var d=y,h=function(r){var n,t,e;if(null==r)return b.call(r);t=r[w],n=A(r,w);try{r[w]=void 0}catch(n){return b.call(r)}return e=b.call(r),n?r[w]=t:delete r[w],e},m=i()?h:d,N=m,U="function"==typeof Uint32Array;var I="function"==typeof Uint32Array?Uint32Array:null,g=function(r){return U&&r instanceof Uint32Array||"[object Uint32Array]"===N(r)},F=I;var S=function(){var r,n;if("function"!=typeof F)return!1;try{n=new F(n=[1,3.14,-3.14,4294967296,4294967297]),r=g(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var H="function"==typeof Uint32Array?Uint32Array:void 0,O=function(){throw new Error("not implemented")},T=S()?H:O,j=m,E="function"==typeof Float64Array;var G="function"==typeof Float64Array?Float64Array:null,L=function(r){return E&&r instanceof Float64Array||"[object Float64Array]"===j(r)},W=G;var M=function(){var r,n;if("function"!=typeof W)return!1;try{n=new W([1,3.14,-3.14,NaN]),r=L(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var x="function"==typeof Float64Array?Float64Array:void 0,P=function(){throw new Error("not implemented")},V=M()?x:P,Y=m,_="function"==typeof Uint8Array;var k="function"==typeof Uint8Array?Uint8Array:null,q=function(r){return _&&r instanceof Uint8Array||"[object Uint8Array]"===Y(r)},z=k;var B=function(){var r,n;if("function"!=typeof z)return!1;try{n=new z(n=[1,3.14,-3.14,256,257]),r=q(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var C="function"==typeof Uint8Array?Uint8Array:void 0,D=function(){throw new Error("not implemented")},J=B()?C:D,K=m,Q="function"==typeof Uint16Array;var R="function"==typeof Uint16Array?Uint16Array:null,X=function(r){return Q&&r instanceof Uint16Array||"[object Uint16Array]"===K(r)},Z=R;var $=function(){var r,n;if("function"!=typeof Z)return!1;try{n=new Z(n=[1,3.14,-3.14,65536,65537]),r=X(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var rr,nr="function"==typeof Uint16Array?Uint16Array:void 0,tr=function(){throw new Error("not implemented")},er={uint16:$()?nr:tr,uint8:J};(rr=new er.uint16(1))[0]=4660;var or=52===new er.uint8(rr.buffer)[0],ur=T,fr=!0===or?1:0,ar=new V(1),ir=new ur(ar.buffer);var cr=function(r){return ar[0]=r,ir[fr]};var vr=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},yr=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var lr=function(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*vr(u),e+=o*o*yr(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))},pr=-.16666666666666632;var sr=function(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(pr+o*t):r-(o*(.5*n-e*t)-n-e*pr)},Ar=T,wr=!0===or?0:1,br=new V(1),dr=new Ar(br.buffer);var hr,mr,Nr=function(r){return br[0]=r,dr[wr]};!0===or?(hr=1,mr=0):(hr=0,mr=1);var Ur=T,Ir={HIGH:hr,LOW:mr},gr=new V(1),Fr=new Ur(gr.buffer),Sr=Ir.HIGH,Hr=Ir.LOW;var Or,Tr,jr=function(r,n){return Fr[Sr]=r,Fr[Hr]=n,gr[0]},Er=jr;!0===or?(Or=1,Tr=0):(Or=0,Tr=1);var Gr=T,Lr={HIGH:Or,LOW:Tr},Wr=new V(1),Mr=new Gr(Wr.buffer),xr=Lr.HIGH,Pr=Lr.LOW;var Vr=function(r,n){return Wr[0]=n,r[0]=Mr[xr],r[1]=Mr[Pr],r};var Yr=function(r,n){return 1===arguments.length?Vr([0,0],r):Vr(r,n)},_r=Yr,kr=cr,qr=Er,zr=[0,0];var Br=function(r,n){var t,e;return _r(zr,r),t=zr[0],t&=2147483647,e=kr(n),qr(t|=e&=2147483648,zr[1])};var Cr=function(r){return Math.abs(r)},Dr=f,Jr=n,Kr=Cr;var Qr=function(r,n){return Jr(n)||Dr(n)?(r[0]=n,r[1]=0,r):0!==n&&Kr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var Rr=function(r,n){return 1===arguments.length?Qr([0,0],r):Qr(r,n)},Xr=cr;var Zr=function(r){var n=Xr(r);return(n=(2146435072&n)>>>20)-1023|0},$r=t,rn=e,nn=n,tn=f,en=Br,on=Rr,un=Zr,fn=Yr,an=Er,cn=[0,0],vn=[0,0];var yn=function(r,n){var t,e;return 0===n||0===r||nn(r)||tn(r)?r:(on(cn,r),n+=cn[1],(n+=un(r=cn[0]))<-1074?en(0,r):n>1023?r<0?rn:$r:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,fn(vn,r),t=vn[0],t&=2148532223,e*an(t|=n+1023<<20,vn[1])))};var ln=function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t};var pn=r,sn=yn,An=function(r){return ln(0,r)},wn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],bn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],dn=16777216,hn=5.960464477539063e-8,mn=An(20),Nn=An(20),Un=An(20),In=An(20);function gn(r,n,t,e,o,u,f,a,i){var c,v,y,l,p,s,A,w,b;for(l=u,b=e[t],w=t,p=0;w>0;p++)v=hn*b|0,In[p]=b-dn*v|0,b=e[w-1]+v,w-=1;if(b=sn(b,o),b-=8*pn(.125*b),b-=A=0|b,y=0,o>0?(A+=p=In[t-1]>>24-o,In[t-1]-=p<<24-o,y=In[t-1]>>23-o):0===o?y=In[t-1]>>23:b>=.5&&(y=2),y>0){for(A+=1,c=0,p=0;p<t;p++)w=In[p],0===c?0!==w&&(c=1,In[p]=16777216-w):In[p]=16777215-w;if(o>0)switch(o){case 1:In[t-1]&=8388607;break;case 2:In[t-1]&=4194303}2===y&&(b=1-b,0!==c&&(b-=sn(1,o)))}if(0===b){for(w=0,p=t-1;p>=u;p--)w|=In[p];if(0===w){for(s=1;0===In[u-s];s++);for(p=t+1;p<=t+s;p++){for(i[a+p]=wn[f+p],v=0,w=0;w<=a;w++)v+=r[w]*i[a+(p-w)];e[p]=v}return gn(r,n,t+=s,e,o,u,f,a,i)}}if(0===b)for(t-=1,o-=24;0===In[t];)t-=1,o-=24;else(b=sn(b,-o))>=dn?(v=hn*b|0,In[t]=b-dn*v|0,o+=24,In[t+=1]=v):In[t]=0|b;for(v=sn(1,o),p=t;p>=0;p--)e[p]=v*In[p],v*=hn;for(p=t;p>=0;p--){for(v=0,s=0;s<=l&&s<=t-p;s++)v+=bn[s]*e[p+s];Un[t-p]=v}for(v=0,p=t;p>=0;p--)v+=Un[p];for(n[0]=0===y?v:-v,v=Un[0]-v,p=1;p<=t;p++)v+=Un[p];return n[1]=0===y?v:-v,7&A}var Fn=function(r,n,t,e){var o,u,f,a,i,c,v;for(4,(u=(t-3)/24|0)<0&&(u=0),a=t-24*(u+1),c=u-(f=e-1),v=f+4,i=0;i<=v;i++)mn[i]=c<0?0:wn[c],c+=1;for(i=0;i<=4;i++){for(o=0,c=0;c<=f;c++)o+=r[c]*mn[f+(i-c)];Nn[i]=o}return 4,gn(r,n,4,Nn,a,4,u,f,mn)},Sn=Math.round,Hn=cr;var On=cr,Tn=Nr,jn=Er,En=Fn,Gn=function(r,n,t){var e,o,u,f,a;return u=r-1.5707963267341256*(e=Sn(.6366197723675814*r)),f=6077100506506192e-26*e,a=n>>20|0,t[0]=u-f,a-(Hn(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((o=u)-(u=o-(f=6077100506303966e-26*e))-f),t[0]=u-f,a-(Hn(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((o=u)-(u=o-(f=20222662487111665e-37*e))-f),t[0]=u-f)),t[1]=u-t[0]-f,e},Ln=1.5707963267341256,Wn=6077100506506192e-26,Mn=2*Wn,xn=3*Wn,Pn=4*Wn,Vn=[0,0,0],Yn=[0,0];var _n=function(r,n){var t,e,o,u,f,a,i;if((o=2147483647&On(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Gn(r,o,n):o<=1073928572?r>0?(i=r-Ln,n[0]=i-Wn,n[1]=i-n[0]-Wn,1):(i=r+Ln,n[0]=i+Wn,n[1]=i-n[0]+Wn,-1):r>0?(i=r-2*Ln,n[0]=i-Mn,n[1]=i-n[0]-Mn,2):(i=r+2*Ln,n[0]=i+Mn,n[1]=i-n[0]+Mn,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Gn(r,o,n):r>0?(i=r-3*Ln,n[0]=i-xn,n[1]=i-n[0]-xn,3):(i=r+3*Ln,n[0]=i+xn,n[1]=i-n[0]+xn,-3):1075388923===o?Gn(r,o,n):r>0?(i=r-4*Ln,n[0]=i-Pn,n[1]=i-n[0]-Pn,4):(i=r+4*Ln,n[0]=i+Pn,n[1]=i-n[0]+Pn,-4);if(o<1094263291)return Gn(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=Tn(r),i=jn(o-((e=(o>>20)-1046)<<20|0),t),f=0;f<2;f++)Vn[f]=0|i,i=16777216*(i-Vn[f]);for(Vn[2]=i,u=3;0===Vn[u-1];)u-=1;return a=En(Vn,Yn,e,u),r<0?(n[0]=-Yn[0],n[1]=-Yn[1],-a):(n[0]=Yn[0],n[1]=Yn[1],a)},kn=cr,qn=lr,zn=sr,Bn=_n,Cn=[0,0];var Dn=cr,Jn=lr,Kn=sr,Qn=_n,Rn=[0,0];var Xn=n,Zn=f,$n=function(r){var n;if(n=kn(r),(n&=2147483647)<=1072243195)return n<1044381696?1:qn(r,0);if(n>=2146435072)return NaN;switch(3&Bn(r,Cn)){case 0:return qn(Cn[0],Cn[1]);case 1:return-zn(Cn[0],Cn[1]);case 2:return-qn(Cn[0],Cn[1]);default:return zn(Cn[0],Cn[1])}},rt=function(r){var n;if(n=Dn(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Kn(r,0);if(n>=2146435072)return NaN;switch(3&Qn(r,Rn)){case 0:return Kn(Rn[0],Rn[1]);case 1:return Jn(Rn[0],Rn[1]);case 2:return-Kn(Rn[0],Rn[1]);default:return-Jn(Rn[0],Rn[1])}},nt=Cr,tt=Br,et=3.141592653589793;var ot=r,ut=function(r){var n,t;return Xn(r)||Zn(r)?NaN:0===(n=nt(t=r%2))||1===n?tt(0,t):n<.25?rt(et*t):n<.75?tt($n(et*(n=.5-n)),t):n<1.25?(t=tt(1,t)-t,rt(et*t)):n<1.75?-tt($n(et*(n-=1.5)),t):(t-=tt(2,t),rt(et*t))},ft=function(r){var n,t;return 0===r?-.9999999999999991:((r<0?-r:r)<=1?(n=r*(r*(r*(r*(r*(2.4787778117864288+r*(2.0771415170245513+r*(.8588778991623601+r*(.20499222604410033+r*(.027210314034819473+.001576484902087695*r)))))-.4042133494563989)-5.746577466976647)-7.94125711970499)-4.712373111208652)-.9999999999999991,t=1+r*(4.712373111208634+r*(9.586191186553398+r*(11.094006726982938+r*(8.090754247493278+r*(3.877058901598914+r*(1.2275867870191448+r*(.249092040606385+r*(.02957504139006556+r*(.0015764849020049815+16126405034405948e-31*r)))))))))):(n=.001576484902087695+(r=1/r)*(.027210314034819473+r*(.20499222604410033+r*(.8588778991623601+r*(2.0771415170245513+r*(2.4787778117864288+r*(r*(r*(r*(-.9999999999999991*r-4.712373111208652)-7.94125711970499)-5.746577466976647)-.4042133494563989)))))),t=16126405034405948e-31+r*(.0015764849020049815+r*(.02957504139006556+r*(.249092040606385+r*(1.2275867870191448+r*(3.877058901598914+r*(8.090754247493278+r*(11.094006726982938+r*(9.586191186553398+r*(4.712373111208634+1*r)))))))))),n/t)},at=function(r){var n,t;return 0===r?-2.5584373473990794:((r<0?-r:r)<=1?(n=r*(r*(r*(r*(r*(r*(r*(.5154120525543513+r*(.1953783487860643+r*(.03347612826241743+r*(.0023736652059422065+0*r))))-.01914390334056497)-4.466544539286106)-14.797912276547878)-24.925643150482347)-23.9195022162768)-12.283020824054201)-2.5584373473990794,t=1+r*(4.800985584544199+r*(9.992207278431701+r*(11.889614616763133+r*(8.966132566838091+r*(4.4725413614962415+r*(1.4860098202819654+r*(.31957073576676426+r*(.040735834578768094+r*(.0023736652059327163+r*(23955488790352614e-32+-29474924474061867e-34*r))))))))))):(n=0+(r=1/r)*(.0023736652059422065+r*(.03347612826241743+r*(.1953783487860643+r*(.5154120525543513+r*(r*(r*(r*(r*(r*(-2.5584373473990794*r-12.283020824054201)-23.9195022162768)-24.925643150482347)-14.797912276547878)-4.466544539286106)-.01914390334056497))))),t=r*(23955488790352614e-32+r*(.0023736652059327163+r*(.040735834578768094+r*(.31957073576676426+r*(1.4860098202819654+r*(4.4725413614962415+r*(8.966132566838091+r*(11.889614616763133+r*(9.992207278431701+r*(4.800985584544199+1*r))))))))))-29474924474061867e-34),n/t)},it=function(r){var n,t;return 0===r?16662611269702147e-33:((r<0?-r:r)<=1?(n=16662611269702147e-33+r*(.4999999999999977+r*(6.402709450190538+r*(41.38333741550006+r*(166.8033418545628+r*(453.39964786925367+r*(851.153712317697+r*(1097.7065756728507+r*(938.4312324784553+r*(487.26800160465194+119.95344524233573*r))))))))),t=1+r*(12.472085567047449+r*(78.60931297532986+r*(307.47024605031834+r*(805.1406861011516+r*(1439.1201976029215+r*(1735.6105285756048+r*(1348.3250071285634+r*(607.2259858605709+r*(119.95231785727705+.00014016591835503607*r)))))))))):(n=119.95344524233573+(r=1/r)*(487.26800160465194+r*(938.4312324784553+r*(1097.7065756728507+r*(851.153712317697+r*(453.39964786925367+r*(166.8033418545628+r*(41.38333741550006+r*(6.402709450190538+r*(.4999999999999977+16662611269702147e-33*r))))))))),t=.00014016591835503607+r*(119.95231785727705+r*(607.2259858605709+r*(1348.3250071285634+r*(1735.6105285756048+r*(1439.1201976029215+r*(805.1406861011516+r*(307.47024605031834+r*(78.60931297532986+r*(12.472085567047449+1*r)))))))))),n/t)},ct=function(r){var n,t;return 0===r?-1.848283152741466e-20:((r<0?-r:r)<=1?(n=r*(.5+r*(3.0253386524731334+r*(13.599592751745737+r*(35.31322242830879+r*(67.16394245507142+r*(83.5767733658514+r*(71.07349121223571+r*(35.86215156147256+8.721522316399835*r))))))))-1.848283152741466e-20,t=1+r*(5.717343971612935+r*(25.29340417962044+r*(62.26197679674682+r*(113.955048909239+r*(130.80713832893898+r*(102.42314690233765+r*(44.04247728052452+r*(8.89898032477904+-.029662733687204*r))))))))):(n=8.721522316399835+(r=1/r)*(35.86215156147256+r*(71.07349121223571+r*(83.5767733658514+r*(67.16394245507142+r*(35.31322242830879+r*(13.599592751745737+r*(3.0253386524731334+r*(.5+-1.848283152741466e-20*r)))))))),t=r*(8.89898032477904+r*(44.04247728052452+r*(102.42314690233765+r*(130.80713832893898+r*(113.955048909239+r*(62.26197679674682+r*(25.29340417962044+r*(5.717343971612935+1*r))))))))-.029662733687204),n/t)},vt=function(r){var n,t;return 0===r?0:((r<0?-r:r)<=1?(n=0+r*(.5+r*(.34562566988545623+r*(9.628954993608422+r*(3.5936085382439025+r*(49.45959911843888+r*(7.775192373218939+r*(74.4536074488178+r*(2.7520934039706906+r*(23.92923597114717+0*r))))))))),t=1+r*(.3579180064375791+r*(19.138603985070986+r*(.8743490814641436+r*(98.65160974348555+r*(r*(154.31686021625373+r*(r*(60.167913667426475+r*(2.537956362006499*r-13.341484462225642))-40.2026880424379))-16.10519728333829)))))):(n=0+(r=1/r)*(23.92923597114717+r*(2.7520934039706906+r*(74.4536074488178+r*(7.775192373218939+r*(49.45959911843888+r*(3.5936085382439025+r*(9.628954993608422+r*(.34562566988545623+r*(.5+0*r))))))))),t=2.537956362006499+r*(r*(60.167913667426475+r*(r*(154.31686021625373+r*(r*(98.65160974348555+r*(.8743490814641436+r*(19.138603985070986+r*(.3579180064375791+1*r))))-16.10519728333829))-40.2026880424379))-13.341484462225642)),n/t)};var yt=function r(n){var t,e;return t=0,n<=0?ot(n)===n?NaN:(e=ut(n),-r(1-n)+9.869604401089358/(e*e)):(n<1&&(t=1/(n*n),n+=1),t+=n<=2?(2+ft(n))/(n*n):n<=4?(3.5584373474121094+at(n))/(n*n):n<=8?(1+it(1/n))/n:n<=16?(1+ct(1/n))/n:(1+vt(1/n))/n)};return yt}));
//# sourceMappingURL=bundle.js.map