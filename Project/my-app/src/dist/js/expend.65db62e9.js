(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["expend"],{1276:function(t,e,r){"use strict";var n=r("d784"),a=r("44e7"),i=r("825a"),o=r("1d80"),c=r("4840"),l=r("8aa5"),s=r("50c4"),u=r("14c3"),d=r("9263"),f=r("d039"),h=[].push,p=Math.min,v=4294967295,g=!f((function(){return!RegExp(v,"y")}));n("split",2,(function(t,e,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var n=String(o(this)),i=void 0===r?v:r>>>0;if(0===i)return[];if(void 0===t)return[n];if(!a(t))return e.call(n,t,i);var c,l,s,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,g=new RegExp(t.source,f+"g");while(c=d.call(g,n)){if(l=g.lastIndex,l>p&&(u.push(n.slice(p,c.index)),c.length>1&&c.index<n.length&&h.apply(u,c.slice(1)),s=c[0].length,p=l,u.length>=i))break;g.lastIndex===c.index&&g.lastIndex++}return p===n.length?!s&&g.test("")||u.push(""):u.push(n.slice(p)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var a=o(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,a,r):n.call(String(a),e,r)},function(t,a){var o=r(n,t,this,a,n!==e);if(o.done)return o.value;var d=i(t),f=String(this),h=c(d,RegExp),b=d.unicode,x=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),m=new h(g?d:"^(?:"+d.source+")",x),y=void 0===a?v:a>>>0;if(0===y)return[];if(0===f.length)return null===u(m,f)?[f]:[];var w=0,A=0,k=[];while(A<f.length){m.lastIndex=g?A:0;var S,_=u(m,g?f:f.slice(A));if(null===_||(S=p(s(m.lastIndex+(g?0:A)),f.length))===w)A=l(f,A,b);else{if(k.push(f.slice(w,A)),k.length===y)return k;for(var E=1;E<=_.length-1;E++)if(k.push(_[E]),k.length===y)return k;A=w=S}}return k.push(f.slice(w)),k}]}),!g)},"14c3":function(t,e,r){var n=r("c6b6"),a=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var i=r.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"26e9":function(t,e,r){"use strict";var n=r("23e7"),a=r("e8b5"),i=[].reverse,o=[1,2];n({target:"Array",proto:!0,forced:String(o)===String(o.reverse())},{reverse:function(){return a(this)&&(this.length=this.length),i.call(this)}})},"44e7":function(t,e,r){var n=r("861d"),a=r("c6b6"),i=r("b622"),o=i("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==a(t))}},"4de4":function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").filter,i=r("d039"),o=r("1dde"),c=o("filter"),l=c&&!i((function(){[].filter.call({length:-1,0:1},(function(t){throw t}))}));n({target:"Array",proto:!0,forced:!c||!l},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},5319:function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),i=r("7b0b"),o=r("50c4"),c=r("a691"),l=r("1d80"),s=r("8aa5"),u=r("14c3"),d=Math.max,f=Math.min,h=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r){return[function(r,n){var a=l(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,a,n):e.call(String(a),r,n)},function(t,i){var l=r(e,t,this,i);if(l.done)return l.value;var h=a(t),p=String(this),v="function"===typeof i;v||(i=String(i));var b=h.global;if(b){var x=h.unicode;h.lastIndex=0}var m=[];while(1){var y=u(h,p);if(null===y)break;if(m.push(y),!b)break;var w=String(y[0]);""===w&&(h.lastIndex=s(p,o(h.lastIndex),x))}for(var A="",k=0,S=0;S<m.length;S++){y=m[S];for(var _=String(y[0]),E=d(f(c(y.index),p.length),0),L=[],C=1;C<y.length;C++)L.push(g(y[C]));var O=y.groups;if(v){var P=[_].concat(L,E,p);void 0!==O&&P.push(O);var R=String(i.apply(void 0,P))}else R=n(_,p,E,L,O,i);E>=k&&(A+=p.slice(k,E)+R,k=E+_.length)}return A+p.slice(k)}];function n(t,r,n,a,o,c){var l=n+t.length,s=a.length,u=v;return void 0!==o&&(o=i(o),u=p),e.call(c,u,(function(e,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(l);case"<":c=o[i.slice(1,-1)];break;default:var u=+i;if(0===u)return e;if(u>s){var d=h(u/10);return 0===d?e:d<=s?void 0===a[d-1]?i.charAt(1):a[d-1]+i.charAt(1):e}c=a[u-1]}return void 0===c?"":c}))}}))},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),a=r("5899"),i="["+a+"]",o=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),l=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(o,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:l(1),end:l(2),trim:l(3)}},6547:function(t,e,r){var n=r("a691"),a=r("1d80"),i=function(t){return function(e,r){var i,o,c=String(a(e)),l=n(r),s=c.length;return l<0||l>=s?t?"":void 0:(i=c.charCodeAt(l),i<55296||i>56319||l+1===s||(o=c.charCodeAt(l+1))<56320||o>57343?t?c.charAt(l):i:t?c.slice(l,l+2):o-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"65f0":function(t,e,r){var n=r("861d"),a=r("e8b5"),i=r("b622"),o=i("species");t.exports=function(t,e){var r;return a(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?n(r)&&(r=r[o],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"6fe5":function(t,e,r){var n=r("da84"),a=r("58a8").trim,i=r("5899"),o=n.parseFloat,c=1/o(i+"-0")!==-1/0;t.exports=c?function(t){var e=a(String(t)),r=o(e);return 0===r&&"-"==e.charAt(0)?-0:r}:o},8418:function(t,e,r){"use strict";var n=r("c04e"),a=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var o=n(e);o in t?a.f(t,o,i(0,r)):t[o]=r}},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},9167:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"expend"},[r("div",{staticClass:"container",staticStyle:{margin:"25px"}},[r("h1",{staticClass:"display-4",staticStyle:{"font-size":"25px","font-weight":"bold"}},[t._v("Public healthcare expenditure")]),t._m(0),r("p"),r("div",{staticClass:"alert alert-info",staticStyle:{width:"82%"},attrs:{role:"alert"}},[t._v(" Hover over markers to see categorical spending for that year. ")]),r("div",[r("svg",{attrs:{id:"primary-area"}}),r("br"),r("br"),r("div",{staticClass:"alert alert-info",staticStyle:{width:"82%"},attrs:{role:"alert"}},[t._v(" Click on the areas above to see sources of spending on the following chart. Hover over bars to see percentages. ")]),r("svg",{attrs:{id:"secondary-area"}})]),t._m(1)]),r("br"),r("br"),r("br")])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("Assesing public healthcare spending patterns during 1960-2015, we find that the portion of spending by category has stayed consistent since at least 1990;"),r("br"),t._v(" except in the case of hospital expenditures where changes have not been as sharp, and in the case of expenditure on dental services which saw a steep decline in last 5 years of the period.")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container",staticStyle:{border:"1px solid black"}},[r("p",[r("u",[t._v("Important Information:")])]),r("ul",[r("li",[r("b",[t._v("Hospital expenditures")]),t._v(" include hospital-based nursing home and home health agency care.")]),r("li",[r("b",[t._v("Home health care expenditures")]),t._v(" include expenditures for care in freestanding facilities only. Additional services of this type are provided in hospital-based facilities and are considered hospital care.")]),r("li",[r("b",[t._v("Nursing care facilities and continuing care retirement communities expenditures")]),t._v(" include expenditures for care in freestanding nursing homes. Expenditures for care in hospital-based nursing homes are included with hospital care.")]),r("li",[r("b",[t._v("Other expenditures")]),t._v(" include expenditures for other professional services, other nondurable medical products, durable medical equipment, and other health, residential, and personal care, not shown separately.")]),r("li",[r("b",[t._v("Other sources of payment")]),t._v(" includes worksite health care, other private revenues, Indian Health Service, workers' compensation, general assistance, maternal and child health, vocational rehabilitation, other federal programs, Substance Abuse and Mental Health Services Administration, other state and local programs, and school health.")])]),r("p",[r("u",[t._v("References:")])]),r("ul",[r("li",[t._v("Source - "),r("a",{attrs:{href:"https://www.cdc.gov/nchs/data/hus/2017/095.pdf"}})]),r("li",[t._v("National Center for Health Statistics. 2018. Available from: "),r("a",{attrs:{href:"https://www.cdc.gov/nchs/products/nvsr.htm"}},[t._v("https://www.cdc.gov/nchs/products/nvsr.htm")])])])])}],i=(r("4de4"),r("d81d"),r("26e9"),r("fb6a"),r("d3b7"),r("acd8"),r("ac1f"),r("5319"),r("1276"),r("ddb0"),r("2bc8")),o={name:"expend",mounted:function(){var t=1100,e=600,r={top:60,right:200,bottom:60,left:150};function n(e,n,a){var i=20,o=10+i,c=12,l=e.append("g").attr("class","legend").attr("transform","translate("+(t-r.right)+","+r.top+")").selectAll("rect").data(n).enter();l.append("rect").attr("x",o).attr("y",(function(t,e){return o*e})).attr("width",i).attr("height",i).attr("fill",(function(t,e){return a(t)})).attr("id",(function(t){return u(t)})),l.append("text").attr("x",2*o).attr("y",(function(t,e){return o*e+i/2})).attr("text-anchor","start").attr("alignment-baseline","center").text((function(t){return t})).style("font-size",c)}var a,o,c,l,s,u=function(t){return t.replace(/ /g,"_").replace(/\//,"-")},d=function(t){return t.replace(/_/g," ").replace(/-/,"/")};i["g"]("area.csv").then((function(a){a=Object.assign(a,{y:"expend",x:"year"});var o=a.columns.slice(1),c=i["C"]().keys(a.columns.slice(1))(a),l=a.map((function(t){return+t.year})),s=i["b"]().x((function(t,e){return f(t.data[a.x])})).y0((function(t){return p(t[0])})).y1((function(t){return p(t[1])})),f=i["v"]().domain(i["i"](a,(function(t){return t.year}))).range([r.left,t-r.right]),p=i["v"]().domain([0,i["o"](c,(function(t){return i["o"](t,(function(t){return t[1]}))}))]).nice().range([e-r.bottom,r.top]),v=i["w"]().domain(a.columns.slice(1)).range(i["z"][9].slice(0,9).reverse()),g=function(n){return n.attr("transform","translate(0,".concat(e-r.bottom,")")).call(i["c"](f).ticks(t/80).tickSizeOuter(0).tickFormat(i["j"]("d"))).append("text").attr("dx",t/2).attr("dy",30).attr("fill","black").attr("font-weight","bold").text("Years")},b=function(t){return t.attr("transform","translate(".concat(r.left,",0)")).call(i["d"](p)).append("text").attr("dy",e/2).attr("dx",-50).attr("fill","black").attr("font-weight","bold").text("Expenditure ($ bn)")},x=i["A"]("body").select("#primary-area").attr("viewBox",[0,0,t,e]);x.append("rect").attr("x",r.left).attr("y",r.top).attr("width",t-r.left-r.right).attr("height",e-r.bottom-r.top).attr("fill","white").on("click",(function(){h("All")})),x.append("g").call(g),x.append("g").call(b),x.append("text").attr("x",t/2).attr("y",r.top-10).attr("fill","black").attr("font-weight","bold").attr("text-anchor","middle").text("Personal Health Care Expenditures, 1960–2016"),n(x,o,v);for(var m="white",y=(x.append("g").selectAll("path").data(c).enter().append("path").attr("id",(function(t){var e=t.key;return u(e)})).attr("fill",(function(t){var e=t.key;return v(e)})).attr("stroke","white").attr("stroke-width",0).attr("d",s).on("mouseenter",(function(){m=this.getAttribute("fill"),this.setAttribute("fill",i["t"](m).brighter(.3)),this.setAttribute("stroke-width",1),x.select("rect[id="+this.id+"]").attr("fill",i["t"](m).brighter(.3)),x.select("rect[id="+this.id+"]").attr("stroke-width",1)})).on("mouseout",(function(){this.setAttribute("fill",m),this.setAttribute("stroke-width",0),x.select("rect[id="+this.id+"]").attr("fill",m),x.select("rect[id="+this.id+"]").attr("stroke-width",0),m="white"})).on("click",(function(t){h(u(t.key))})),x.append("g").selectAll("g").data(c).enter()),w=0;w<l.length;w++)y.append("circle").attr("id",(function(t){return t[w].data.year+"__"+u(t.key)})).attr("cx",(function(t){return f(t[w].data.year)})).attr("cy",(function(t){return p(t[w][1])})).attr("r","5").attr("fill",(function(t){var e=t.key;return v(e)})).attr("stroke","white").attr("stroke-width",1).on("mouseenter",(function(t){var e=this.getAttribute("id"),r=10+parseFloat(this.getAttribute("cx")),n=10+parseFloat(this.getAttribute("cy")),o=e.split("__")[0],c=d(e.split("__")[1]),l=a.filter((function(t){return t.year==o}))[0][c],s=180,u=40;i["A"](this.parentElement).append("rect").attr("id","tooltip_r").attr("x",r).attr("y",n).attr("width",s).attr("height",u).attr("fill","#2c3e50").attr("stroke","white"),i["A"](this.parentElement).append("text").attr("id","tooltip_t1").attr("x",r+s/2).attr("y",n).attr("dy","+1em").attr("fill","white").attr("text-anchor","middle").attr("alignment-baseline","center").text(c+","),i["A"](this.parentElement).append("text").attr("id","tooltip_t2").attr("x",r+s/2).attr("y",n).attr("dy","+2.25em").attr("fill","white").attr("text-anchor","middle").attr("alignment-baseline","center").text(o+": $"+l+" bn")})).on("mouseout",(function(){i["A"]("#tooltip_r").remove(),i["A"]("#tooltip_t1").remove(),i["A"]("#tooltip_t2").remove()}));x.select(".legend").selectAll("rect").on("mouseenter",(function(){m=this.getAttribute("fill"),x.select("path[id="+this.id+"]").attr("fill",i["t"](m).brighter(.3)),x.select("path[id="+this.id+"]").attr("stroke-width",1),this.setAttribute("fill",i["t"](m).brighter(.3)),this.setAttribute("stroke-width",1)})).on("mouseout",(function(){x.select("path[id="+this.id+"]").attr("fill",m),x.select("path[id="+this.id+"]").attr("stroke-width",0),this.setAttribute("fill",m),this.setAttribute("stroke-width",0),m="white",i["A"]("#tooltip").remove()})).on("click",(function(){h(this.id)}))}));var f=function(u){i["g"](u+".csv",(function(t){return{year:+t["year"],"Out-of-pocket payments":+t["Out-of-pocket payments"],"Private health insurance":+t["Private health insurance"],"Public health insurance":+t["Public health insurance"],Other:+t["Other"]}})).then((function(f){f.map((function(t){return t["total"]=t["Out-of-pocket payments"]+t["Private health insurance"]+t["Public health insurance"]+t["Other"]}));var h=f.columns.slice(1),p=i["C"]().keys(h).offset(i["D"])(f);a=i["v"]().range([r.left,t-r.right]),o=i["u"]().domain(f.map((function(t){return t.year}))).range([r.top,e-r.bottom]).padding(.1),c=i["w"]().domain(p.map((function(t){return t.key}))).range(i["z"][4].reverse()).unknown("#ccc"),l=function(e){return e.attr("transform","translate(0,".concat(r.top,")")).call(i["f"](a).ticks(t/100,"%")).call((function(t){return t.selectAll(".domain").remove()}))},s=function(t){return t.attr("transform","translate(".concat(r.left,",0)")).call(i["d"](o).tickSizeOuter(0)).call((function(t){return t.selectAll(".domain").remove()}))};var v=i["A"]("body").select("#secondary-area").attr("viewBox",[0,0,t,e]).style("overflow","visible");v.append("g").attr("id","plot").selectAll("g").data(p).enter().append("g").attr("fill",(function(t){return c(t.key)})).selectAll("rect").data((function(t){return t})).enter().append("rect").attr("x",(function(t){return a(t[0])})).attr("y",(function(t,e){return o(t.data.year)+15})).attr("width",(function(t){return a(t[1])-a(t[0])})).attr("height",o.bandwidth()-30).append("title").text((function(t){return i["j"](",.1%")(t[1]-t[0])})),v.append("g").call(l),v.append("g").call(s),v.append("text").attr("id","title").attr("x",t/2).attr("y",r.top/2).attr("fill","black").attr("font-weight","bold").attr("text-anchor","middle").text("Sources of "+d(u)+" Expenditures, 1960–2016"),n(v,h,c)}))};f("All");var h=function(t){var e=i["A"]("#secondary-area");e.select("#plot").remove(),e.select("#title").text("Sources of "+d(t)+" Expenditures, 1960–2016"),i["g"](t+".csv",(function(t){return{year:+t["year"],"Out-of-pocket payments":+t["Out-of-pocket payments"],"Private health insurance":+t["Private health insurance"],"Public health insurance":+t["Public health insurance"],Other:+t["Other"]}})).then((function(t){t.map((function(t){return t["total"]=t["Out-of-pocket payments"]+t["Private health insurance"]+t["Public health insurance"]+t["Other"]}));var r=t.columns.slice(1),n=i["C"]().keys(r).offset(i["D"])(t);e.append("g").attr("id","plot").selectAll("g").data(n).enter().append("g").attr("fill",(function(t){return c(t.key)})).selectAll("rect").data((function(t){return t})).enter().append("rect").attr("x",(function(t){return a(t[0])})).attr("y",(function(t,e){return o(t.data.year)+15})).attr("width",(function(t){return a(t[1])-a(t[0])})).attr("height",o.bandwidth()-30).append("title").text((function(t){return i["j"](",.1%")(t[1]-t[0])}))}))}}},c=o,l=r("2877"),s=Object(l["a"])(c,n,a,!1,null,null,null);e["default"]=s.exports},9263:function(t,e,r){"use strict";var n=r("ad6d"),a=RegExp.prototype.exec,i=String.prototype.replace,o=a,c=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=void 0!==/()??/.exec("")[1],s=c||l;s&&(o=function(t){var e,r,o,s,u=this;return l&&(r=new RegExp("^"+u.source+"$(?!\\s)",n.call(u))),c&&(e=u.lastIndex),o=a.call(u,t),c&&o&&(u.lastIndex=u.global?o.index+o[0].length:e),l&&o&&o.length>1&&i.call(o[0],r,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(o[s]=void 0)})),o}),t.exports=o},ac1f:function(t,e,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},acd8:function(t,e,r){var n=r("23e7"),a=r("6fe5");n({global:!0,forced:parseFloat!=a},{parseFloat:a})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b727:function(t,e,r){var n=r("f8c2"),a=r("44ad"),i=r("7b0b"),o=r("50c4"),c=r("65f0"),l=[].push,s=function(t){var e=1==t,r=2==t,s=3==t,u=4==t,d=6==t,f=5==t||d;return function(h,p,v,g){for(var b,x,m=i(h),y=a(m),w=n(p,v,3),A=o(y.length),k=0,S=g||c,_=e?S(h,A):r?S(h,0):void 0;A>k;k++)if((f||k in y)&&(b=y[k],x=w(b,k,m),t))if(e)_[k]=x;else if(x)switch(t){case 3:return!0;case 5:return b;case 6:return k;case 2:l.call(_,b)}else if(u)return!1;return d?-1:s||u?u:_}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},d784:function(t,e,r){"use strict";var n=r("9112"),a=r("6eeb"),i=r("d039"),o=r("b622"),c=r("9263"),l=o("species"),s=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,d){var f=o(t),h=!i((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),p=h&&!i((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[l]=function(){return r},r.flags="",r[f]=/./[f]),r.exec=function(){return e=!0,null},r[f](""),!e}));if(!h||!p||"replace"===t&&!s||"split"===t&&!u){var v=/./[f],g=r(f,""[t],(function(t,e,r,n,a){return e.exec===c?h&&!a?{done:!0,value:v.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}})),b=g[0],x=g[1];a(String.prototype,t,b),a(RegExp.prototype,f,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)}),d&&n(RegExp.prototype[f],"sham",!0)}}},d81d:function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").map,i=r("d039"),o=r("1dde"),c=o("map"),l=c&&!i((function(){[].map.call({length:-1,0:1},(function(t){throw t}))}));n({target:"Array",proto:!0,forced:!c||!l},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},ddb0:function(t,e,r){var n=r("da84"),a=r("fdbc"),i=r("e260"),o=r("9112"),c=r("b622"),l=c("iterator"),s=c("toStringTag"),u=i.values;for(var d in a){var f=n[d],h=f&&f.prototype;if(h){if(h[l]!==u)try{o(h,l,u)}catch(v){h[l]=u}if(h[s]||o(h,s,d),a[d])for(var p in i)if(h[p]!==i[p])try{o(h,p,i[p])}catch(v){h[p]=i[p]}}}},fb6a:function(t,e,r){"use strict";var n=r("23e7"),a=r("861d"),i=r("e8b5"),o=r("23cb"),c=r("50c4"),l=r("fc6a"),s=r("8418"),u=r("1dde"),d=r("b622"),f=d("species"),h=[].slice,p=Math.max;n({target:"Array",proto:!0,forced:!u("slice")},{slice:function(t,e){var r,n,u,d=l(this),v=c(d.length),g=o(t,v),b=o(void 0===e?v:e,v);if(i(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?a(r)&&(r=r[f],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return h.call(d,g,b);for(n=new(void 0===r?Array:r)(p(b-g,0)),u=0;g<b;g++,u++)g in d&&s(n,u,d[g]);return n.length=u,n}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=expend.65db62e9.js.map