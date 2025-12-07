// make beveled border hexagon tile image

// diameter = 504
// inner radius = 252
// outer radius = 252+(2*8)
// central radius = 260
// final = 504 + 2 * 3 * 8 = 504 + 48

const oklab = require("rally-the-troops/tools/oklab")
const fs = require("fs")

const d30 = Math.PI / 180 * 30

function poly(xc, yc, r, n, sides, a) {
	var pts = []
	var da = (2 * Math.PI) / sides
	for (var i = 0; i < n; ++i) {
		var x = Math.sin(a) * r + xc
		var y = Math.cos(a) * r + yc
		pts.push([x,y].join(","))
		a += da
	}
	return pts.join(" ")
}

function make_hex_outline(output, img_w, img_h, color) {
	var r = img_w / 2
	var w = 48 + r * 2 + 64
	var h = 48 + Math.ceil((r/8) * 2 * Math.cos(d30)) * 8 + 64
	var xc = w / 2
	var yc = h / 2

	var svg = []
	svg.push(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${w}" height="${h}">`)
	svg.push(`<path fill="${color}" d="M${poly(xc,yc,r+24+32,6,6,d30)}z" />`)
	svg.push(`</svg>`)

	fs.writeFileSync(output, svg.join("\n") + "\n")
}

function hex(color, file) {
	make_hex_outline(file, 504, 440, color)
}

function hex_sm(color, file) {
	make_hex_outline(file, 416, 360, color)
}

hex("#ffffff", "images/hex-white.svg")
hex("#ffff00", "images/hex-yellow.svg")
hex("#00ffff", "images/hex-cyan.svg")
hex_sm("#ffffff", "images/hex-sm-white.svg")
hex_sm("#ffff00", "images/hex-sm-yellow.svg")
hex_sm("#00ffff", "images/hex-sm-cyan.svg")
