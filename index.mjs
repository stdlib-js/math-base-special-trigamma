// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sinpi@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi-squared@v0.2.1-esm/index.mjs";function r(s){var i,a;return i=0,s<=0?e(s)===s?NaN:(a=t(s),-r(1-s)+n/(a*a)):(s<1&&(i=1/(s*s),s+=1),i+=s<=2?(2+function(e){var t,n;return 0===e?-.9999999999999991:((e<0?-e:e)<=1?(t=e*(e*(e*(e*(e*(2.4787778117864288+e*(2.0771415170245513+e*(.8588778991623601+e*(.20499222604410033+e*(.027210314034819473+.001576484902087695*e)))))-.4042133494563989)-5.746577466976647)-7.94125711970499)-4.712373111208652)-.9999999999999991,n=1+e*(4.712373111208634+e*(9.586191186553398+e*(11.094006726982938+e*(8.090754247493278+e*(3.877058901598914+e*(1.2275867870191448+e*(.249092040606385+e*(.02957504139006556+e*(.0015764849020049815+16126405034405948e-31*e)))))))))):(t=.001576484902087695+(e=1/e)*(.027210314034819473+e*(.20499222604410033+e*(.8588778991623601+e*(2.0771415170245513+e*(2.4787778117864288+e*(e*(e*(e*(-.9999999999999991*e-4.712373111208652)-7.94125711970499)-5.746577466976647)-.4042133494563989)))))),n=16126405034405948e-31+e*(.0015764849020049815+e*(.02957504139006556+e*(.249092040606385+e*(1.2275867870191448+e*(3.877058901598914+e*(8.090754247493278+e*(11.094006726982938+e*(9.586191186553398+e*(4.712373111208634+1*e)))))))))),t/n)}(s))/(s*s):s<=4?(3.5584373474121094+function(e){var t,n;return 0===e?-2.5584373473990794:((e<0?-e:e)<=1?(t=e*(e*(e*(e*(e*(e*(e*(.5154120525543513+e*(.1953783487860643+e*(.03347612826241743+e*(.0023736652059422065+0*e))))-.01914390334056497)-4.466544539286106)-14.797912276547878)-24.925643150482347)-23.9195022162768)-12.283020824054201)-2.5584373473990794,n=1+e*(4.800985584544199+e*(9.992207278431701+e*(11.889614616763133+e*(8.966132566838091+e*(4.4725413614962415+e*(1.4860098202819654+e*(.31957073576676426+e*(.040735834578768094+e*(.0023736652059327163+e*(23955488790352614e-32+-29474924474061867e-34*e))))))))))):(t=0+(e=1/e)*(.0023736652059422065+e*(.03347612826241743+e*(.1953783487860643+e*(.5154120525543513+e*(e*(e*(e*(e*(e*(-2.5584373473990794*e-12.283020824054201)-23.9195022162768)-24.925643150482347)-14.797912276547878)-4.466544539286106)-.01914390334056497))))),n=e*(23955488790352614e-32+e*(.0023736652059327163+e*(.040735834578768094+e*(.31957073576676426+e*(1.4860098202819654+e*(4.4725413614962415+e*(8.966132566838091+e*(11.889614616763133+e*(9.992207278431701+e*(4.800985584544199+1*e))))))))))-29474924474061867e-34),t/n)}(s))/(s*s):s<=8?(1+function(e){var t,n;return 0===e?16662611269702147e-33:((e<0?-e:e)<=1?(t=16662611269702147e-33+e*(.4999999999999977+e*(6.402709450190538+e*(41.38333741550006+e*(166.8033418545628+e*(453.39964786925367+e*(851.153712317697+e*(1097.7065756728507+e*(938.4312324784553+e*(487.26800160465194+119.95344524233573*e))))))))),n=1+e*(12.472085567047449+e*(78.60931297532986+e*(307.47024605031834+e*(805.1406861011516+e*(1439.1201976029215+e*(1735.6105285756048+e*(1348.3250071285634+e*(607.2259858605709+e*(119.95231785727705+.00014016591835503607*e)))))))))):(t=119.95344524233573+(e=1/e)*(487.26800160465194+e*(938.4312324784553+e*(1097.7065756728507+e*(851.153712317697+e*(453.39964786925367+e*(166.8033418545628+e*(41.38333741550006+e*(6.402709450190538+e*(.4999999999999977+16662611269702147e-33*e))))))))),n=.00014016591835503607+e*(119.95231785727705+e*(607.2259858605709+e*(1348.3250071285634+e*(1735.6105285756048+e*(1439.1201976029215+e*(805.1406861011516+e*(307.47024605031834+e*(78.60931297532986+e*(12.472085567047449+1*e)))))))))),t/n)}(1/s))/s:s<=16?(1+function(e){var t,n;return 0===e?-1.848283152741466e-20:((e<0?-e:e)<=1?(t=e*(.5+e*(3.0253386524731334+e*(13.599592751745737+e*(35.31322242830879+e*(67.16394245507142+e*(83.5767733658514+e*(71.07349121223571+e*(35.86215156147256+8.721522316399835*e))))))))-1.848283152741466e-20,n=1+e*(5.717343971612935+e*(25.29340417962044+e*(62.26197679674682+e*(113.955048909239+e*(130.80713832893898+e*(102.42314690233765+e*(44.04247728052452+e*(8.89898032477904+-.029662733687204*e))))))))):(t=8.721522316399835+(e=1/e)*(35.86215156147256+e*(71.07349121223571+e*(83.5767733658514+e*(67.16394245507142+e*(35.31322242830879+e*(13.599592751745737+e*(3.0253386524731334+e*(.5+-1.848283152741466e-20*e)))))))),n=e*(8.89898032477904+e*(44.04247728052452+e*(102.42314690233765+e*(130.80713832893898+e*(113.955048909239+e*(62.26197679674682+e*(25.29340417962044+e*(5.717343971612935+1*e))))))))-.029662733687204),t/n)}(1/s))/s:(1+function(e){var t,n;return 0===e?0:((e<0?-e:e)<=1?(t=0+e*(.5+e*(.34562566988545623+e*(9.628954993608422+e*(3.5936085382439025+e*(49.45959911843888+e*(7.775192373218939+e*(74.4536074488178+e*(2.7520934039706906+e*(23.92923597114717+0*e))))))))),n=1+e*(.3579180064375791+e*(19.138603985070986+e*(.8743490814641436+e*(98.65160974348555+e*(e*(154.31686021625373+e*(e*(60.167913667426475+e*(2.537956362006499*e-13.341484462225642))-40.2026880424379))-16.10519728333829)))))):(t=0+(e=1/e)*(23.92923597114717+e*(2.7520934039706906+e*(74.4536074488178+e*(7.775192373218939+e*(49.45959911843888+e*(3.5936085382439025+e*(9.628954993608422+e*(.34562566988545623+e*(.5+0*e))))))))),n=2.537956362006499+e*(e*(60.167913667426475+e*(e*(154.31686021625373+e*(e*(98.65160974348555+e*(.8743490814641436+e*(19.138603985070986+e*(.3579180064375791+1*e))))-16.10519728333829))-40.2026880424379))-13.341484462225642)),t/n)}(1/s))/s,i)}export{r as default};
//# sourceMappingURL=index.mjs.map
