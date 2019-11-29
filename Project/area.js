// TODO, add markers and tooltips

width = 1100;
height = 600;
margin = { top: 60, right: 200, bottom: 60, left: 150 }

function create_legend(this_svg,this_keys,this_color){
    var size = 20;
    var gap = 10+size;
    var font_size = 12
    var enter_select = this_svg.append("g")
        .attr("class","legend")
        .attr("transform", "translate(" + (width-margin.right) + "," +margin.top+ ")")
        .selectAll('rect')
        .data(this_keys)
        .enter();
    enter_select.append('rect')
        .attr('x',gap)
        .attr('y',function(d,i){return gap*i;})
        .attr('width',size)
        .attr('height',size)
        .attr('fill',function(d,i){return this_color(d);})
        .attr('id',d=>key2filename(d));
    enter_select.append('text')
        .attr('x',2*gap)
        .attr('y',function(d,i){return gap*i+size/2;})
        .attr('text-anchor','start')
        .attr('alignment-baseline','center')
        .text(function(d){return d})
        .style('font-size',font_size);
}

var key2filename = function(key){
    return key.replace(/ /g,'_').replace(/\//,'-');
}
var filename2key = function(filename){
    return filename.replace(/_/g,' ').replace(/-/,'/');
}

d3.csv("Data/area.csv").then(function(data)
{
    data = Object.assign(data, { y: "expend", x: "year" });

    keys = data.columns.slice(1);
    series = d3.stack().keys(data.columns.slice(1))(data)
    years = data.map(d=>+d.year);

    area = d3.area()
        .x(function(d, i) {
            return x(d.data[data.x]);
        })
        .y0(d => y(d[0]))
        .y1(d => y(d[1]));
 
    x = d3.scaleLinear()
        .domain(d3.extent(data, d => d.year))
        .range([margin.left, width - margin.right])
      
    y = d3.scaleLinear()
        .domain([0, d3.max(series, d => d3.max(d, d => d[1]))]).nice()
        .range([height - margin.bottom, margin.top])
    
    color = d3.scaleOrdinal()
        .domain(data.columns.slice(1))
        .range(d3.schemeYlOrRd[9].reverse()) 
        
    xAxis = g =>
        g.attr("transform", `translate(0,${height - margin.bottom})`)
        .call(
            d3.axisBottom(x)
                .ticks(width / 80)
                .tickSizeOuter(0)
                .tickFormat(d3.format("d"))
        ).append('text')
        .attr('dx',width/2)
        .attr('dy',30)
        .attr('fill','black')
        .attr("font-weight", "bold")
        .text('Years')

    yAxis = g => g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y))
        //.call(g => g.select(".domain").remove())
        .append('text')
        .attr('dy',height/2)
        .attr('dx',-50)
        .attr('fill','black')
        .attr("font-weight", "bold")
        .text('Expenditure ($ bn)')
    
    const svg = d3.select('body')
        .append('div')
        .attr('id','primary')
        .append("svg")
        .attr("viewBox", [0, 0, width, height])
        //.attr('width',width)
        //.attr('height',height)
    
    svg.append('rect')
        .attr('x',margin.left)
        .attr('y',margin.top)
        .attr('width',width-margin.left-margin.right)
        .attr('height',height-margin.bottom-margin.top)
        .attr('fill','white')
        .on("click",function(){
            updateSecondaryChart("All");
            })
        

    var tmp_fill='white';
    const path = svg
        .append("g")
        .selectAll("path")
        .data(series)
        .join("path")
        .attr('id',({key})=>key2filename(key))
        .attr("fill", ({ key }) => color(key))
        .attr('stroke','white')
        .attr('stroke-width',0)
        .attr("d", area)
        .on("mouseenter",function(){
            tmp_fill = this.getAttribute('fill');
            this.setAttribute('fill',d3.rgb(tmp_fill).brighter(0.3));
            this.setAttribute('stroke-width',1);

            svg.select('rect[id='+this.id+']').attr('fill',d3.rgb(tmp_fill).brighter(0.3));
            svg.select('rect[id='+this.id+']').attr('stroke-width',1);
        })
        .on("mouseout",function(){
            this.setAttribute('fill',tmp_fill);
            this.setAttribute('stroke-width',0);

            svg.select('rect[id='+this.id+']').attr('fill',tmp_fill);
            svg.select('rect[id='+this.id+']').attr('stroke-width',0);

            tmp_fill='white';
        })
        .on("click",function(d){
            updateSecondaryChart(key2filename(d.key));
            }
        )
        .append("title")
        .text(({ key }) => key);
    
    svg.append("g").call(xAxis);
    
    svg.append("g").call(yAxis);

    // TITLE
    svg.append('text')
        .attr('x',width/2)
        .attr('y',margin.top-10)
        .attr('fill','black')
        .attr("font-weight", "bold")
        .attr("text-anchor","middle")
        .text('Personal Health Care Expenditures, 1960–2016')
    

    create_legend(svg,keys,color);
    svg.select('.legend')
        .selectAll('rect')
        .on("mouseenter",function(){
            tmp_fill = this.getAttribute('fill');

            svg.select('path[id='+this.id+']').attr('fill',d3.rgb(tmp_fill).brighter(0.3));
            svg.select('path[id='+this.id+']').attr('stroke-width',1);

            this.setAttribute('fill',d3.rgb(tmp_fill).brighter(0.3));
            this.setAttribute('stroke-width',1);
        })
        .on("mouseout",function(){

            svg.select('path[id='+this.id+']').attr('fill',tmp_fill);
            svg.select('path[id='+this.id+']').attr('stroke-width',0);

            this.setAttribute('fill',tmp_fill);
            this.setAttribute('stroke-width',0);
            tmp_fill='white';
            d3.select('#tooltip').remove();
        })
        .on("click",function(){
            updateSecondaryChart(this.id);
            }
        )
      
});


///////////////////////////////////////////////////////
// Secondary Chart
var makeSecondaryChart = function(keyfilename){
    d3.csv('Data/area/'+keyfilename+'.csv',
        function(d){
            return {
                "year":+d["year"],
                "Out-of-pocket payments":+d["Out-of-pocket payments"],
                "Private health insurance":+d["Private health insurance"],
                "Public health insurance":+d["Public health insurance"],
                "Other":+d["Other"]
            };
        })
        .then(function(data){
            data.map(rec => rec['total']=rec["Out-of-pocket payments"]+rec["Private health insurance"]+rec["Public health insurance"]+rec["Other"])
            console.log(data);
        
        keys = data.columns.slice(1);

        series = d3.stack()
            .keys(keys)
            .offset(d3.stackOffsetExpand)
            (data)
       
        x = d3.scaleLinear()
            .range([margin.left, width - margin.right]);
        
        y = d3.scaleBand()
            .domain(data.map(d => d.year))
            .range([margin.top, height - margin.bottom])
            .padding(0.1);

        color = d3.scaleOrdinal()
            .domain(series.map(d => d.key))
            //.range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), series.length).reverse())
            .range(d3.schemeOrRd[4].reverse())
            .unknown("#ccc");

        xAxis = g => g
            .attr("transform", `translate(0,${margin.top})`)
            .call(d3.axisTop(x).ticks(width / 100, "%"))
            .call(g => g.selectAll(".domain").remove());
        yAxis = g => g
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y).tickSizeOuter(0))
            .call(g => g.selectAll(".domain").remove());

        const svg = d3.select('body')
            .append("div")
            .attr('id','secondary')
            .append("svg")
            .attr("viewBox", [0, 0, width, height])
            .style("overflow", "visible");

        svg.append("g")
            .attr('id','plot')
            .selectAll("g")
            .data(series)
            .enter().append("g")
            .attr("fill", d => color(d.key))
            .selectAll("rect")
            .data(d => d)
            .join("rect")
            .attr("x", d => x(d[0]))
            .attr("y", (d, i) => y(d.data.year))
            .attr("width", d => x(d[1]) - x(d[0]))
            .attr("height", y.bandwidth());

        svg.append("g")
            .call(xAxis);

        svg.append("g")
            .call(yAxis);
        
        // TITLE
        svg.append('text')
            .attr('id','title')
            .attr('x',width/2)
            .attr('y',margin.top/2)
            .attr('fill','black')
            .attr("font-weight", "bold")
            .attr("text-anchor","middle")
            .text('Sources of '+filename2key(keyfilename)+' Expenditures, 1960–2016');
        
        create_legend(svg,keys,color);

});
}

makeSecondaryChart('All')
var updateSecondaryChart = function(keyfilename){
    svg = d3.select('#secondary').select('svg');
    svg.select('#plot').remove();
    svg.select('#title')
        .text('Sources of '+filename2key(keyfilename)+' Expenditures, 1960–2016');

    d3.csv('Data/area/'+keyfilename+'.csv',
        function(d){
            return {
                "year":+d["year"],
                "Out-of-pocket payments":+d["Out-of-pocket payments"],
                "Private health insurance":+d["Private health insurance"],
                "Public health insurance":+d["Public health insurance"],
                "Other":+d["Other"]
            };
        })
        .then(function(data){
            data.map(rec => rec['total']=rec["Out-of-pocket payments"]+rec["Private health insurance"]+rec["Public health insurance"]+rec["Other"])
            console.log(data);
        
        keys = data.columns.slice(1);

        series = d3.stack()
            .keys(keys)
            .offset(d3.stackOffsetExpand)
            (data);

        svg.append("g")
            .attr('id','plot')
            .selectAll("g")
            .data(series)
            .enter().append("g")
            .attr("fill", d => color(d.key))
            .selectAll("rect")
            .data(d => d)
            .join("rect")
            .attr("x", d => x(d[0]))
            .attr("y", (d, i) => y(d.data.year))
            .attr("width", d => x(d[1]) - x(d[0]))
            .attr("height", y.bandwidth());

});
}
