(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["diseasecate"],{"26e9":function(t,e,a){"use strict";var s=a("23e7"),i=a("e8b5"),r=[].reverse,n=[1,2];s({target:"Array",proto:!0,forced:String(n)===String(n.reverse())},{reverse:function(){return i(this)&&(this.length=this.length),r.call(this)}})},"27bb":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"diseasecate"},[t._m(0),t.dataLoaded?a("StackedBar",{attrs:{dataset:t.dataset1}}):t._e(),t._m(1),a("iframe",{attrs:{frameBorder:"0",width:"100%",height:"900px",src:"http://pdms.usc.edu/~seherkha/proj/sankey.html"}}),t._m(2),a("br"),a("br"),a("br")],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",staticStyle:{margin:"25px"}},[a("h1",{staticClass:"display-4",staticStyle:{"font-size":"25px","font-weight":"bold"}},[t._v(" Age-adjusted death rates for selected causes of death, by sex, race, and Hispanic origin ")]),a("p",{staticClass:"lead"},[t._v("Trends over the Years - United States, selected years 1950–2016.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",staticStyle:{margin:"25px"}},[a("p",[t._v("The data represents death rates in the United States for selected years 1950–2016. The chart helps us to understand the correlation between the Diseases and different Categories (Race, Origin and Gender). Hovering over a particular Disease, shows the breakdown of people who died from that disease in the selected year. Similarly, hovering over the Category, displays breakdown of various causes of deaths for the people in that category. ")]),a("div",{staticClass:"alert alert-info",attrs:{role:"alert"}},[t._v(" Click on the Button to select one-to-one relationship between Diseases and Category in particular year ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",staticStyle:{border:"1px solid black"}},[a("p",[a("u",[t._v("Important Information:")])]),a("ul",[a("li",[a("b",[t._v("Age-adjusted rates are calculated using the year 2000 standard population. Prior to 2001, age-adjusted rates were calculated using standard million proportions based on rounded population numbers.")]),t._v(" Starting with 2001 data, unrounded population numbers are used to calculate age-adjusted rates.")]),a("li",[a("b",[t._v("Starting with 1999 data, the rules for selecting CLRD and Pneumonia as the underlying cause of death changed")]),t._v(", resulting in an increase in the number of deaths for CLRD and a decrease in the number of deaths for Pneumonia. Therefore, trend data for these two causes of death should be interpreted with caution.")]),a("li",[a("b",[t._v("Starting with 2011 data, the rules for selecting Renal failure as the underlying cause of death were changed")]),t._v(", affecting the number of deaths in the Nephritis, nephrotic syndrome and nephrosis and Diabetes categories. The result is a decrease in the number of deaths for Nephritis, nephrotic syndrome and nephrosis and an increase in the number of deaths for Diabetes mellitus. Therefore, trend data for these two causes of death should be interpreted with caution.")]),a("li",[a("b",[t._v("Death rates for Hispanic, American Indian or Alaska Native, and Asian or Pacific Islander persons should be interpreted with caution")]),t._v(" because of inconsistencies in reporting Hispanic origin or race on the death certificate compared with population figures. The net effect of misclassification is an underestimation of deaths and death rates for races other than white and black. ")])]),a("p",[a("u",[t._v("References:")])]),a("ul",[a("li",[t._v("Source - "),a("a",{attrs:{href:"https://www.cdc.gov/nchs/data/hus/2017/017.pdf"}},[t._v("https://www.cdc.gov/nchs/data/hus/2017/017.pdf")])]),a("li",[t._v("National Center for Health Statistics. 2018. Available from: "),a("a",{attrs:{href:"https://www.cdc.gov/nchs/products/nvsr.htm"}},[t._v("https://www.cdc.gov/nchs/products/nvsr.htm")])])])])}],r=(a("d3b7"),a("3ca3"),a("ddb0"),a("2bc8")),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stackedbar"},[t._m(0),a("br"),a("br"),a("svg",{ref:"stackbar"}),a("div",{attrs:{id:"barchart"}}),a("br"),a("br"),a("br"),a("div",{attrs:{id:"tooltip"}})])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",staticStyle:{margin:"25px"}},[a("p",[t._v("In this visualization we've grouped our datapoints on the basis of Category (Gender, Origin, and Race). Selector buttons should be used to select a particular Category. Each group in the chart represents a particular disease, which helps to see the overall trend of these diseases over the years in context to a particular Category. ")]),a("div",{staticClass:"alert alert-info",attrs:{role:"alert"}},[t._v(" Click on the button to see individual trends for Diseases over the past decade ")]),a("hr",{staticClass:"my-5"}),a("button",{staticClass:"btn btn-outline-danger active",attrs:{type:"button","data-toggle":"button","aria-pressed":"true",id:"AP"}},[t._v("All Persons")]),a("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button","data-toggle":"button","aria-pressed":"false",id:"M"}},[t._v("Male")]),a("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button","data-toggle":"button","aria-pressed":"false",id:"F"}},[t._v("Female")]),a("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button","data-toggle":"button","aria-pressed":"false",id:"W"}},[t._v("White")]),a("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button","data-toggle":"button","aria-pressed":"false",id:"BAA"}},[t._v("Black or African American")]),a("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button","data-toggle":"button","aria-pressed":"false",id:"AIA"}},[t._v("American Indian or Alaska Native")]),a("br"),a("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button","data-toggle":"button","aria-pressed":"false",id:"API"}},[t._v("Asian or Pacific Islander")]),a("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button","data-toggle":"button","aria-pressed":"false",id:"HL"}},[t._v("Hispanic or Latino")]),a("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button","data-toggle":"button","aria-pressed":"false",id:"WHL"}},[t._v("White, not Hispanic or Latino")]),a("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button","data-toggle":"button","aria-pressed":"false",id:"BHL"}},[t._v("Black, not Hispanic or Latino")])])}],o=(a("d81d"),a("26e9"),a("fb6a"),{name:"StackedBar",props:{dataset:{type:Array}},mounted:function(){var t,e,a,s=1500,i=400,n={top:20,right:50,bottom:25,left:50},c=(r["A"](this.$refs["stackbar"]).attr("id","svg-bar").attr("viewBox",[0,0,s,i]).append("g").attr("transform","translate("+s+", "+i+")"),["1950","1960","1970","1980","1990","1995","2000","2005","2010","2014","2015","2016"]),o=r["w"]().range(["#98abc5","#8a89a6","#7b6888","#6b486b","#a8a29e","#a05d56","#d0743c","#ff8c00","#ebaf8a","#d4bfb2","#807c7a","#bababa"]),d=r["u"](),l=r["u"](),u=r["v"](),A=this.dataset;function v(t){var e=r["A"]("#svg-bar").selectAll(".legends").data(o.domain().slice().reverse()).enter().append("g").attr("class","legends").attr("transform","translate(".concat(s,",0)")).attr("text-anchor","end").attr("font-family","sans-serif").attr("font-size",10).attr("transform",(function(t,e){return"translate(".concat(s-35,",").concat(20*e,")")}));e.append("rect").attr("x",-19).attr("width",19).attr("height",19).attr("fill",o),e.append("text").attr("x",-24).attr("y",9.5).attr("dy","0.35em").text((function(t){return t}))}function f(t,e){return"<span>Year: "+t+"<br/>Spread: "+e+"</span>"}function p(){function e(t){r["A"]("#tooltip").transition().duration(200).style("opacity",.9),r["A"]("#tooltip").html(f(t.key,t.value)).style("left",r["h"].pageX+"px").style("top",r["h"].pageY-28+"px")}function a(){r["A"]("#tooltip").transition().duration(500).style("opacity",0)}r["B"]("rect").remove(),r["B"]("g").remove(),d.domain(t.map((function(t){return t["disease_id"]}))).rangeRound([n.left,s-n.right]).paddingInner(.2),l.domain(c).rangeRound([0,d.bandwidth()]).padding(.25),u.domain([0,r["o"](t,(function(t){return r["o"](c,(function(e){return t[e]}))}))]).nice().rangeRound([i-n.bottom,n.top]);var A=function(t){return t.attr("transform","translate(0,".concat(i-n.bottom,")")).call(r["c"](d).tickSizeOuter(0)).call((function(t){return t.select(".domain").remove()}))},p=function(e){return e.attr("transform","translate(".concat(n.left,",0)")).call(r["d"](u).ticks(null,"s")).call((function(t){return t.select(".domain").remove()})).call((function(e){return e.select(".tick:last-of-type text").clone().attr("x",3).attr("text-anchor","start").attr("font-weight","bold").text(t.y)}))},h=r["A"]("#svg-bar").selectAll(".inside").data(t),b=h.enter().append("g").attr("class",".inside").attr("transform",(function(t){return"translate(".concat(d(t["disease_id"]),",0)")})),g=b.selectAll("rect").data((function(t){return c.map((function(e){return{key:e,value:t[e]}}))}));g.enter().append("rect").attr("x",(function(t){return l(t.key)})).attr("y",(function(t){return u(t.value)})).attr("width",l.bandwidth()).attr("height",(function(t){return u(0)-u(t.value)})).attr("fill",(function(t){return o(t.key)})),b.selectAll("rect").on("mouseover",e).on("mouseout",a),g.exit().style("opacity",0).remove(),h.exit().style("opacity",0).remove(),r["A"]("#svg-bar").append("g").call(A),r["A"]("#svg-bar").append("g").call(p),r["A"]("#svg-bar").append("g").call(v)}t=A.slice(0,7),e="AP",a=A,p(),r["A"]("#AP").on("click",(function(){"AP"!=e&&(r["A"]("#AP").classed("active",!0).attr("aria-pressed","true"),r["A"]("#M").classed("active",!1),r["A"]("#F").classed("active",!1),r["A"]("#W").classed("active",!1),r["A"]("#BAA").classed("active",!1),r["A"]("#AIA").classed("active",!1),r["A"]("#API").classed("active",!1),r["A"]("#HL").classed("active",!1),r["A"]("#WHL").classed("active",!1),r["A"]("#BHL").classed("active",!1),t=a.slice(0,7),e="AP",p())})),r["A"]("#M").on("click",(function(){"M"!=e&&(r["A"]("#M").classed("active",!0).attr("aria-pressed","true"),r["A"]("#AP").classed("active",!1),r["A"]("#F").classed("active",!1),r["A"]("#W").classed("active",!1),r["A"]("#BAA").classed("active",!1),r["A"]("#AIA").classed("active",!1),r["A"]("#API").classed("active",!1),r["A"]("#HL").classed("active",!1),r["A"]("#WHL").classed("active",!1),r["A"]("#BHL").classed("active",!1),t=a.slice(7,14),e="M",p())})),r["A"]("#F").on("click",(function(){"F"!=e&&(r["A"]("#F").classed("active",!0).attr("aria-pressed","true"),r["A"]("#M").classed("active",!1),r["A"]("#AP").classed("active",!1),r["A"]("#W").classed("active",!1),r["A"]("#BAA").classed("active",!1),r["A"]("#AIA").classed("active",!1),r["A"]("#API").classed("active",!1),r["A"]("#HL").classed("active",!1),r["A"]("#WHL").classed("active",!1),r["A"]("#BHL").classed("active",!1),t=a.slice(14,21),e="F",p())})),r["A"]("#W").on("click",(function(){"W"!=e&&(r["A"]("#W").classed("active",!0).attr("aria-pressed","true"),r["A"]("#M").classed("active",!1),r["A"]("#F").classed("active",!1),r["A"]("#AP").classed("active",!1),r["A"]("#BAA").classed("active",!1),r["A"]("#AIA").classed("active",!1),r["A"]("#API").classed("active",!1),r["A"]("#HL").classed("active",!1),r["A"]("#WHL").classed("active",!1),r["A"]("#BHL").classed("active",!1),t=a.slice(21,28),e="W",p())})),r["A"]("#BAA").on("click",(function(){"BAA"!=e&&(r["A"]("#BAA").classed("active",!0).attr("aria-pressed","true"),r["A"]("#M").classed("active",!1),r["A"]("#F").classed("active",!1),r["A"]("#W").classed("active",!1),r["A"]("#AP").classed("active",!1),r["A"]("#AIA").classed("active",!1),r["A"]("#API").classed("active",!1),r["A"]("#HL").classed("active",!1),r["A"]("#WHL").classed("active",!1),r["A"]("#BHL").classed("active",!1),t=a.slice(28,35),e="BAA",p())})),r["A"]("#AIA").on("click",(function(){"AIA"!=e&&(r["A"]("#AIA").classed("active",!0).attr("aria-pressed","true"),r["A"]("#M").classed("active",!1),r["A"]("#F").classed("active",!1),r["A"]("#W").classed("active",!1),r["A"]("#BAA").classed("active",!1),r["A"]("#AP").classed("active",!1),r["A"]("#API").classed("active",!1),r["A"]("#HL").classed("active",!1),r["A"]("#WHL").classed("active",!1),r["A"]("#BHL").classed("active",!1),t=a.slice(35,42),e="AIA",p())})),r["A"]("#API").on("click",(function(){"API"!=e&&(r["A"]("#API").classed("active",!0).attr("aria-pressed","true"),r["A"]("#M").classed("active",!1),r["A"]("#F").classed("active",!1),r["A"]("#W").classed("active",!1),r["A"]("#BAA").classed("active",!1),r["A"]("#AIA").classed("active",!1),r["A"]("#AP").classed("active",!1),r["A"]("#HL").classed("active",!1),r["A"]("#WHL").classed("active",!1),r["A"]("#BHL").classed("active",!1),t=a.slice(42,49),e="API",p())})),r["A"]("#HL").on("click",(function(){"HL"!=e&&(r["A"]("#HL").classed("active",!0).attr("aria-pressed","true"),r["A"]("#M").classed("active",!1),r["A"]("#F").classed("active",!1),r["A"]("#W").classed("active",!1),r["A"]("#BAA").classed("active",!1),r["A"]("#AIA").classed("active",!1),r["A"]("#API").classed("active",!1),r["A"]("#AP").classed("active",!1),r["A"]("#WHL").classed("active",!1),r["A"]("#BHL").classed("active",!1),t=a.slice(49,56),e="HL",p())})),r["A"]("#WHL").on("click",(function(){"WHL"!=e&&(r["A"]("#WHL").classed("active",!0).attr("aria-pressed","true"),r["A"]("#M").classed("active",!1),r["A"]("#F").classed("active",!1),r["A"]("#W").classed("active",!1),r["A"]("#BAA").classed("active",!1),r["A"]("#AIA").classed("active",!1),r["A"]("#API").classed("active",!1),r["A"]("#HL").classed("active",!1),r["A"]("#AP").classed("active",!1),r["A"]("#BHL").classed("active",!1),t=a.slice(56,63),e="WHL",p())})),r["A"]("#BHL").on("click",(function(){"BHL"!=e&&(r["A"]("#BHL").classed("active",!0).attr("aria-pressed","true"),r["A"]("#M").classed("active",!1),r["A"]("#F").classed("active",!1),r["A"]("#W").classed("active",!1),r["A"]("#BAA").classed("active",!1),r["A"]("#AIA").classed("active",!1),r["A"]("#API").classed("active",!1),r["A"]("#HL").classed("active",!1),r["A"]("#WHL").classed("active",!1),r["A"]("#AP").classed("active",!1),t=a.slice(63,70),e="BHL",p())}))}}),d=o,l=(a("3ca2"),a("2877")),u=Object(l["a"])(d,n,c,!1,null,"541fb0c9",null),A=u.exports,v={name:"diseasecate",data:function(){return{dataLoaded:!1,dataset1:[]}},components:{StackedBar:A},mounted:function(){var t=[];t.push(r["n"]("stacked-bar-chart.json"));var e=this;Promise.all(t).then((function(t){e.dataset1=t[0],e.dataLoaded=!0}))}},f=v,p=Object(l["a"])(f,s,i,!1,null,null,null);e["default"]=p.exports},"3ca2":function(t,e,a){"use strict";var s=a("4324"),i=a.n(s);i.a},"3ca3":function(t,e,a){"use strict";var s=a("6547").charAt,i=a("69f3"),r=a("7dd0"),n="String Iterator",c=i.set,o=i.getterFor(n);r(String,"String",(function(t){c(this,{type:n,string:String(t),index:0})}),(function(){var t,e=o(this),a=e.string,i=e.index;return i>=a.length?{value:void 0,done:!0}:(t=s(a,i),e.index+=t.length,{value:t,done:!1})}))},4324:function(t,e,a){},6547:function(t,e,a){var s=a("a691"),i=a("1d80"),r=function(t){return function(e,a){var r,n,c=String(i(e)),o=s(a),d=c.length;return o<0||o>=d?t?"":void 0:(r=c.charCodeAt(o),r<55296||r>56319||o+1===d||(n=c.charCodeAt(o+1))<56320||n>57343?t?c.charAt(o):r:t?c.slice(o,o+2):n-56320+(r-55296<<10)+65536)}};t.exports={codeAt:r(!1),charAt:r(!0)}},"65f0":function(t,e,a){var s=a("861d"),i=a("e8b5"),r=a("b622"),n=r("species");t.exports=function(t,e){var a;return i(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!i(a.prototype)?s(a)&&(a=a[n],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===e?0:e)}},8418:function(t,e,a){"use strict";var s=a("c04e"),i=a("9bf2"),r=a("5c6c");t.exports=function(t,e,a){var n=s(e);n in t?i.f(t,n,r(0,a)):t[n]=a}},b727:function(t,e,a){var s=a("f8c2"),i=a("44ad"),r=a("7b0b"),n=a("50c4"),c=a("65f0"),o=[].push,d=function(t){var e=1==t,a=2==t,d=3==t,l=4==t,u=6==t,A=5==t||u;return function(v,f,p,h){for(var b,g,m=r(v),y=i(m),L=s(f,p,3),H=n(y.length),w=0,k=h||c,_=e?k(v,H):a?k(v,0):void 0;H>w;w++)if((A||w in y)&&(b=y[w],g=L(b,w,m),t))if(e)_[w]=g;else if(g)switch(t){case 3:return!0;case 5:return b;case 6:return w;case 2:o.call(_,b)}else if(l)return!1;return u?-1:d||l?l:_}};t.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6)}},d81d:function(t,e,a){"use strict";var s=a("23e7"),i=a("b727").map,r=a("d039"),n=a("1dde"),c=n("map"),o=c&&!r((function(){[].map.call({length:-1,0:1},(function(t){throw t}))}));s({target:"Array",proto:!0,forced:!c||!o},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},ddb0:function(t,e,a){var s=a("da84"),i=a("fdbc"),r=a("e260"),n=a("9112"),c=a("b622"),o=c("iterator"),d=c("toStringTag"),l=r.values;for(var u in i){var A=s[u],v=A&&A.prototype;if(v){if(v[o]!==l)try{n(v,o,l)}catch(p){v[o]=l}if(v[d]||n(v,d,u),i[u])for(var f in r)if(v[f]!==r[f])try{n(v,f,r[f])}catch(p){v[f]=r[f]}}}},fb6a:function(t,e,a){"use strict";var s=a("23e7"),i=a("861d"),r=a("e8b5"),n=a("23cb"),c=a("50c4"),o=a("fc6a"),d=a("8418"),l=a("1dde"),u=a("b622"),A=u("species"),v=[].slice,f=Math.max;s({target:"Array",proto:!0,forced:!l("slice")},{slice:function(t,e){var a,s,l,u=o(this),p=c(u.length),h=n(t,p),b=n(void 0===e?p:e,p);if(r(u)&&(a=u.constructor,"function"!=typeof a||a!==Array&&!r(a.prototype)?i(a)&&(a=a[A],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return v.call(u,h,b);for(s=new(void 0===a?Array:a)(f(b-h,0)),l=0;h<b;h++,l++)h in u&&d(s,l,u[h]);return s.length=l,s}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=diseasecate.64807b43.js.map