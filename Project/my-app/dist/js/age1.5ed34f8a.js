(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["age1"],{"3b72":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"age1"},[a("div",{staticClass:"container",staticStyle:{margin:"25px"}},[a("h1",{staticClass:"display-4",staticStyle:{"font-size":"25px","font-weight":"bold"}},[t._v("Leading causes of death and numbers of deaths, by age: United States, 1980 and 2016")]),a("br"),a("div",{staticClass:"alert alert-info",staticStyle:{width:"82%"},attrs:{role:"alert"}},[t._v(" Click on the buttons with the age-range to compare the Causes of Deaths in 1980 and 2016. ")]),a("hr",{staticClass:"my-3"}),a("button",{staticClass:"btn btn-outline-dark active",attrs:{type:"button","data-toggle":"button","aria-pressed":"true",id:"under1"}},[t._v("Under 1 year")]),a("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button","data-toggle":"button","aria-pressed":"false",id:"b1to4"}},[t._v("1 - 4 years")]),a("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button","data-toggle":"button","aria-pressed":"false",id:"b5to14"}},[t._v("5 - 14 years")]),a("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button","data-toggle":"button","aria-pressed":"false",id:"b15to24"}},[t._v("15 - 24 years")]),a("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button","data-toggle":"button","aria-pressed":"false",id:"b25to44"}},[t._v("25 - 44 years")]),a("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button","data-toggle":"button","aria-pressed":"false",id:"b45to64"}},[t._v("45 - 64 years")]),a("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button","data-toggle":"button","aria-pressed":"false",id:"b64over"}},[t._v("65 years and over")]),a("br"),a("br"),a("table",{staticClass:"table",attrs:{id:"piee"}},[a("tr",[a("th",[t._v("Pie Chart for Year 1980")]),a("th",[t._v("Pie Chart for Year 2016")])]),a("tr",[a("td",[a("div",{attrs:{id:"pie1980"}})]),a("td",[a("div",{attrs:{id:"pie2016"}})])])]),a("br"),a("br")]),a("table",{staticClass:"table",attrs:{id:"infotab"}}),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"container"},[a("p",[a("u",[t._v("Important Information:")])]),a("li",[t._v("Starting with 1999 data, the rules for selecting "),a("b",[t._v("Chronic lower respiratory diseases (CLRD) and Pneumonia")]),t._v(" as the underlying cause of death changed, resulting in an increase in the number of deaths for CLRD and a decrease in the number of deaths for Pneumonia. "),a("b",[t._v("Therefore, trend data for these two causes of death should be interpreted with caution.")])]),a("li",[t._v("Between 1998 and 1999, the cause of death title for "),a("b",[t._v("Chronic obstructive pulmonary diseases (COPD) was renamed to Chronic lower respiratory diseases (CLRD).")])]),a("li",[a("b",[t._v("Starting with 2011 data, the rules for selecting Renal failure as the underlying cause of death were changed")]),t._v(", affecting the number of deaths in the Nephritis, nephrotic syndrome and nephrosis and Diabetes categories. Therefore, trend data for these two causes of death should be interpreted with caution.")]),a("br"),a("p",[a("u",[t._v("References:")])]),a("ul",[a("li",[t._v("Source - "),a("a",{attrs:{href:"https://www.cdc.gov/nchs/data/hus/2017/020.pdf"}},[t._v("https://www.cdc.gov/nchs/data/hus/2017/020.pdf")])]),a("li",[t._v('Technical Notes in "Deaths: Final Data for 2011," available from: '),a("a",{attrs:{href:"https://www.cdc.gov/nchs/data/nvsr/nvsr63/nvsr63_03.pdf"}},[t._v("https://www.cdc.gov/nchs/data/nvsr/nvsr63/nvsr63_03.pdf")])]),a("li",[t._v("National Center for Health Statistics; vol 67. 2018. Available from: "),a("a",{attrs:{href:"https://www.cdc.gov/nchs/products/nvsr.htm"}},[t._v("https://www.cdc.gov/nchs/products/nvsr.htm")])])])])])}],r=(a("fb6a"),a("4e82"),a("5698")),i={name:"age1",mounted:function(){var t,e,a,n=600,s=500,i=0,o=Math.min(n,s)/2-i,c=r["C"]("#pie1980").append("svg").attr("viewBox",[0,0,n,s]).append("g").attr("transform","translate("+n/2+","+s/2+")"),d=r["C"]("#pie2016").append("svg").attr("viewBox",[0,0,n,s]).append("g").attr("transform","translate("+n/2+","+s/2+")"),l=r["w"]().domain([1,2,3,4,5,6,7,8,9,10]).range(r["A"]);function u(){var e=r["r"]().value((function(t){return+t["Deaths_1980"]})).sort(null),a=e(t),n=c.selectAll("path").data(a);n.enter().append("path").merge(n).transition().duration(800).attr("d",r["a"]().innerRadius(0).outerRadius(o-70)).attr("fill",(function(t){return l(t.data["Rank"])})).attr("stroke","white").style("stroke-width","1px").style("opacity",1);var s=r["r"]().value((function(t){return+t["Deaths_2016"]})).sort(null),i=s(t),u=d.selectAll("path").data(i);u.enter().append("path").merge(u).transition().duration(1e3).attr("d",r["a"]().innerRadius(0).outerRadius(o-70)).attr("fill",(function(t){return l(t.data["Rank"])})).attr("stroke","white").style("stroke-width","1px").style("opacity",1),u.exit().remove()}function b(){var e=r["C"]("body").select("#infotab"),a=e.append("tr"),n=e.selectAll("tr.data").data(t).enter().append("tr");a.append("th").text("Category"),a.append("th").text("Rank"),a.append("th").text("Color"),a.append("th").text("Causes of Death in 1980"),a.append("th").text("No. of Deaths in 1980"),a.append("th").text("Causes of Deaths in 2016"),a.append("th").text("No. of Deaths in 2016"),n.append("td").attr("class","category").text((function(t){return t["index"]%10==1?t["Category"]:t["Rank"]})).attr("rowspan",(function(t){if(t["index"]%10==1)return 10})),n.append("td").attr("class","rank").text((function(t){return t["index"]%10==1?t["Rank"]:""})).style("background-color",(function(t){return t["index"]%10==1?"white":t["Color"]})),n.append("td").attr("class","color").text((function(t){return t["index"]%10==1?"":t["Cause_1980"]})).style("background-color",(function(t){return t["index"]%10==1?t["Color"]:"white"})),n.append("td").attr("class","cause1980").text((function(t){return t["index"]%10==1?t["Cause_1980"]:t["Deaths_1980"]})),n.append("td").attr("class","deaths1980").text((function(t){return t["index"]%10==1?t["Deaths_1980"]:t["Cause_2016"]})),n.append("td").attr("class","cause2016").text((function(t){return t["index"]%10==1?t["Cause_2016"]:t["Deaths_2016"]})),n.append("td").attr("class","deaths2016").text((function(t){if(t["index"]%10==1)return t["Deaths_2016"]})).style("padding",(function(t){if(t["index"]%10!=1)return 0}))}function v(){r["D"](".category").data(t).transition().duration(1e3).text((function(t){return t["index"]%10==1?t["Category"]:t["Rank"]})).attr("rowspan",(function(t){if(t["index"]%10==1)return 10})),r["D"](".rank").data(t).transition().duration(1e3).text((function(t){return t["index"]%10==1?t["Rank"]:""})).style("background-color",(function(t){return t["index"]%10==1?"white":t["Color"]})),r["D"](".color").data(t).transition().duration(1e3).text((function(t){return t["index"]%10==1?"":t["Cause_1980"]})).style("background-color",(function(t){return t["index"]%10==1?t["Color"]:"white"})),r["D"](".cause1980").data(t).transition().duration(1e3).text((function(t){return t["index"]%10==1?t["Cause_1980"]:t["Deaths_1980"]})),r["D"](".deaths1980").data(t).transition().duration(1e3).text((function(t){return t["index"]%10==1?t["Deaths_1980"]:t["Cause_2016"]})),r["D"](".cause2016").data(t).transition().duration(1e3).text((function(t){return t["index"]%10==1?t["Cause_2016"]:t["Deaths_2016"]})),r["D"](".deaths2016").data(t).transition().duration(1e3).text((function(t){if(t["index"]%10==1)return t["Deaths_2016"]})).style("padding",(function(t){if(t["index"]%10!=1)return 0}))}r["n"]("tabledata.json").then((function(n){t=n.slice(0,10),e=n,a="under1",b(),u()})),r["C"]("#under1").on("click",(function(){"under1"!=a&&(r["C"]("#under1").classed("active",!0).attr("aria-pressed","true"),r["C"]("#b1to4").classed("active",!1),r["C"]("#b5to14").classed("active",!1),r["C"]("#b15to24").classed("active",!1),r["C"]("#b25to44").classed("active",!1),r["C"]("#b45to64").classed("active",!1),r["C"]("#b64over").classed("active",!1),t=e.slice(0,10),a="under1",v(),u())})),r["C"]("#b1to4").on("click",(function(){"b1to4"!=a&&(r["C"]("#b1to4").classed("active",!0).attr("aria-pressed","true"),r["C"]("#under1").classed("active",!1),r["C"]("#b5to14").classed("active",!1),r["C"]("#b15to24").classed("active",!1),r["C"]("#b25to44").classed("active",!1),r["C"]("#b45to64").classed("active",!1),r["C"]("#b64over").classed("active",!1),t=e.slice(10,20),a="b1to4",v(),u())})),r["C"]("#b5to14").on("click",(function(){"b5to14"!=a&&(r["C"]("#b5to14").classed("active",!0).attr("aria-pressed","true"),r["C"]("#b1to4").classed("active",!1),r["C"]("#under1").classed("active",!1),r["C"]("#b15to24").classed("active",!1),r["C"]("#b25to44").classed("active",!1),r["C"]("#b45to64").classed("active",!1),r["C"]("#b64over").classed("active",!1),t=e.slice(20,30),a="b5to14",v(),u())})),r["C"]("#b15to24").on("click",(function(){"b15to24"!=a&&(r["C"]("#b15to24").classed("active",!0).attr("aria-pressed","true"),r["C"]("#b1to4").classed("active",!1),r["C"]("#b5to14").classed("active",!1),r["C"]("#under1").classed("active",!1),r["C"]("#b25to44").classed("active",!1),r["C"]("#b45to64").classed("active",!1),r["C"]("#b64over").classed("active",!1),t=e.slice(30,40),a="b15to24",v(),u())})),r["C"]("#b25to44").on("click",(function(){"b25to44"!=a&&(r["C"]("#b25to44").classed("active",!0).attr("aria-pressed","true"),r["C"]("#b1to4").classed("active",!1),r["C"]("#b5to14").classed("active",!1),r["C"]("#b15to24").classed("active",!1),r["C"]("#under1").classed("active",!1),r["C"]("#b45to64").classed("active",!1),r["C"]("#b64over").classed("active",!1),t=e.slice(40,50),a="b25to44",v(),u())})),r["C"]("#b45to64").on("click",(function(){"b45to64"!=a&&(r["C"]("#b45to64").classed("active",!0).attr("aria-pressed","true"),r["C"]("#b1to4").classed("active",!1),r["C"]("#b5to14").classed("active",!1),r["C"]("#b15to24").classed("active",!1),r["C"]("#b25to44").classed("active",!1),r["C"]("#under1").classed("active",!1),r["C"]("#b64over").classed("active",!1),t=e.slice(50,60),a="b45to64",v(),u())})),r["C"]("#b64over").on("click",(function(){"b64over"!=a&&(r["C"]("#b64over").classed("active",!0).attr("aria-pressed","true"),r["C"]("#b1to4").classed("active",!1),r["C"]("#b5to14").classed("active",!1),r["C"]("#b15to24").classed("active",!1),r["C"]("#b25to44").classed("active",!1),r["C"]("#b45to64").classed("active",!1),r["C"]("#under1").classed("active",!1),t=e.slice(60,70),a="b64over",v(),u())}))}},o=i,c=(a("de24"),a("2877")),d=Object(c["a"])(o,n,s,!1,null,null,null);e["default"]=d.exports},"4e82":function(t,e,a){"use strict";var n=a("23e7"),s=a("1c0b"),r=a("7b0b"),i=a("d039"),o=a("b301"),c=[],d=c.sort,l=i((function(){c.sort(void 0)})),u=i((function(){c.sort(null)})),b=o("sort"),v=l||!u||b;n({target:"Array",proto:!0,forced:v},{sort:function(t){return void 0===t?d.call(r(this)):d.call(r(this),s(t))}})},5101:function(t,e,a){},8418:function(t,e,a){"use strict";var n=a("c04e"),s=a("9bf2"),r=a("5c6c");t.exports=function(t,e,a){var i=n(e);i in t?s.f(t,i,r(0,a)):t[i]=a}},b301:function(t,e,a){"use strict";var n=a("d039");t.exports=function(t,e){var a=[][t];return!a||!n((function(){a.call(null,e||function(){throw 1},1)}))}},de24:function(t,e,a){"use strict";var n=a("5101"),s=a.n(n);s.a},fb6a:function(t,e,a){"use strict";var n=a("23e7"),s=a("861d"),r=a("e8b5"),i=a("23cb"),o=a("50c4"),c=a("fc6a"),d=a("8418"),l=a("1dde"),u=a("b622"),b=u("species"),v=[].slice,f=Math.max;n({target:"Array",proto:!0,forced:!l("slice")},{slice:function(t,e){var a,n,l,u=c(this),p=o(u.length),h=i(t,p),C=i(void 0===e?p:e,p);if(r(u)&&(a=u.constructor,"function"!=typeof a||a!==Array&&!r(a.prototype)?s(a)&&(a=a[b],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return v.call(u,h,C);for(n=new(void 0===a?Array:a)(f(C-h,0)),l=0;h<C;h++,l++)h in u&&d(n,l,u[h]);return n.length=l,n}})}}]);
//# sourceMappingURL=age1.5ed34f8a.js.map