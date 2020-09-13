d3.select("#theAirplaneShow")
    .on("click",function()
{
  d3.select("#planes")
  .classed("hidden",false);
})

d3.select("#plane1")
    .on("click",function()
{
   d3.select("#banner") 
    .text("This is the first plane.");
})

d3.select("#plane2")
    .on("click",function()
{
   d3.select("#banner")
    .text("This is the second plane.");
})

d3.select("#plane3")
    .on("click",function()
{
    d3.select("#banner")
        .text("This is the third plane.");
})

var setPlane4 = function(img)
{
     d3.select("#plane4")
        .attr("src",img);
}
d3.select("#plane4")
    .on("mouseenter",function()
{
    setPlane4("Pics/NASM-NASM2020-00141-000001.jpeg");
})
    .on("mouseleave",function()
    {
       setPlane4("Pics/NASM-A19600300000-NASM2018-10346-000001.jpeg");
    })
d3.select("#plane4")
    .on("clcik",function()
    {
        d3.select("#banner")
            .text("This is plane four and five.");
    })
