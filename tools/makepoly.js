function poly(r, n, a) {
	var pts = []
	var da = (2 * Math.PI) / n
	for (var i = 0; i < n; ++i) {
		var x = Math.sin(a) * r + r + 4
		var y = Math.cos(a) * r + r + 4
		pts.push([x,y].join(","))
		a += da
	}
	console.log(`<svg xmlns="http://www.w3.org/2000/svg" width="${r*2+8}" height="${r*2+8}">
<polygon points="${pts.join(" ")}" fill="none" stroke="white" stroke-width="4"/>
</svg>`)
}

//poly(42, 6, (2*Math.PI) * 1/12)
poly(40, 5, (2*Math.PI) * 1/10)
