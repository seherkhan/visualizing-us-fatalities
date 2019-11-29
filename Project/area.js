// TODO, clicking on chart shows chart beneath for sources
// TODO, add markers
d3.csv("Data/area.csv").then(function(data)
{
    data = Object.assign(data, { y: "expend", x: "year" });

    keys = data.columns.slice(1);
    series = d3.stack().keys(data.columns.slice(1))(data)

    area = d3
        .area()
        .x(function(d, i) {
            return x(d.data[data.x]);
        })
        .y0(d => y(d[0]))
        .y1(d => y(d[1]));

    width = 1100;
    height = 600;
    margin = { top: 20, right: 200, bottom: 60, left: 150 }
    
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
        .append("svg")
        .attr('width',width)
        .attr('height',height)
        //.attr("viewBox", [0, 0, width, height]);


    const path = svg
        .append("g")
        .selectAll("path")
        .data(series)
        .join("path")
        .attr("fill", ({ key }) => color(key))
        .attr("d", area)
        .append("title")
        .text(({ key }) => key);
    
    svg.append("g").call(xAxis);
    
    svg.append("g").call(yAxis);

    svg.append('text')
        .attr('x',width/2)
        .attr('y',margin.top)
        .attr('fill','black')
        .attr("font-weight", "bold")
        .attr("text-anchor","middle")
        .text('Personal Health Care Expenditures, 1960–2016')
    
    function create_legend(){
        var size = 20;
        var gap = 10+size;
        var font_size = 12
        var enter_select = svg.append("g")
            .attr("class","legend")
            .attr("transform", "translate(" + (width-margin.right) + "," + 0+ ")")
            .selectAll('rect')
            .data(keys)
            .enter();
        enter_select.append('rect')
            .attr('x',gap)
            .attr('y',function(d,i){return gap*i;})
            .attr('width',size)
            .attr('height',size)
            .attr('fill',function(d,i){return color(d);});
        enter_select.append('text')
            .attr('x',2*gap)
            .attr('y',function(d,i){return gap*i+size/2;})
            .attr('text-anchor','start')
            .attr('alignment-baseline','center')
            .text(function(d){return d})
            .style('font-size',font_size);
    }
    create_legend();

      
});
