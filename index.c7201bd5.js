var t=Array.from(document.querySelectorAll("span.population")),e=t.reduce(function(t,e){return t+parseInt(e.textContent.split(",").join(""))},0),n=e/t.length,o=document.querySelector("span.total-population"),r=document.querySelector("span.average-population");o.textContent=e.toLocaleString("en-US"),r.textContent=n.toLocaleString("en-US");
//# sourceMappingURL=index.c7201bd5.js.map
