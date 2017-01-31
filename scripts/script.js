// Author: Aurghyadip Kundu
// email: - adkundu@gmail.com
// Done as a part of testing the mojs
// library for creating web animations.
// P.S. - I am also a fan of Dan Brown

// The following section is for the main
// blade and the chalice and the circle
// containing it. More info in readme.

const blade = new mojs.Shape ({
	shape: 'polygon',
	fill: 'none',
	radius: 200,
	stroke: { 'white' : 'black' },
	strokeWidth: { 5: 0 },
	strokeDasharray: '100%',
	strokeDashoffset: { '-100%': '100%' },
	top: '60%',
	angle: 0,
	duration: 5000
})

const chalice = new mojs.Shape ({
	shape: 'polygon',
	fill: 'none',
	radius: 200,
	stroke: { 'white' : 'black' },
	strokeWidth: { 5: 0 },
	strokeDasharray: '100%',
	strokeDashoffset: { '-100%': '100%' },
	top: '60%',
	angle: 180,
	duration: 5000
})

const circ = new mojs.Shape ({
	shape: 'circle',
	fill: 'none',
	radius: 200,
	stroke: { 'white' : 'black' },
	strokeWidth: { 5: 0 },
	top: '60%',
	strokeDasharray: '100%',
	strokeDashoffset: { '-100%': '100%' },
	// angle: 180,
	duration: 5000
})

// The following section contains the
// three small blades and chalices.
// Notice the burst function.

const burst_blade1 = new mojs.Burst({
	radius: { 0 : 200 },
	count: 3,
	angle: 0,
	top: '60%',
	children: {
		shape: 'polygon',
		fill: 'none',
		radius: 50,
		stroke: { 'white' : 'black' },
		strokeWidth: { 3: 0 },
		strokeDasharray: '100%',
		strokeDashoffset: { '-100%': '100%' },
		angle: 180,
		duration: 5000
	}
})

const burst_chalice1 = new mojs.Burst({
	radius: { 0 : 200 },
	count: 3,
	angle: 0,
	top: '60%',
	children: {
		shape: 'polygon',
		fill: 'none',
		radius: 50,
		stroke: { 'white' : 'black' },
		strokeWidth: { 3: 0 },
		strokeDasharray: '100%',
		strokeDashoffset: { '-100%': '100%' },
		angle: 0,
		duration: 5000
	}
})

// The following section contains the
// other three small blades and chalices.
// Notice the burst function.

const burst_blade2 = new mojs.Burst({
	radius: { 0 : 200 },
	count: 3,
	angle: 180,
	top: '60%',
	children: {
		shape: 'polygon',
		fill: 'none',
		radius: 50,
		stroke: { 'white' : 'black' },
		strokeWidth: { 3: 0 },
		strokeDasharray: '100%',
		strokeDashoffset: { '-100%': '100%' },
		angle: 0,
		duration: 5000
	}
})

const burst_chalice2 = new mojs.Burst({
	radius: { 0 : 200 },
	count: 3,
	angle: 180,
	top: '60%',
	children: {
		shape: 'polygon',
		fill: 'none',
		radius: 50,
		stroke: { 'white' : 'black' },
		strokeWidth: { 3: 0 },
		strokeDasharray: '100%',
		strokeDashoffset: { '-100%': '100%' },
		angle: 180,
		duration: 5000
	}
})

// The six circles containing the
// small blades and the chalices.

const burst_circ = new mojs.Burst({
	radius: { 0 : 200 },
	count: 6,
	top: '60%',
	// angle: 180,
	children: {
		shape: 'circle',
		fill: 'none',
		radius: 50,
		stroke: { 'white' : 'black' },
		strokeWidth: { 3: 0 },
		strokeDasharray: '100%',
		strokeDashoffset: { '-100%': '100%' },
		// angle: 180,
		duration: 5000
	}
})

// The timeline with a 999 times repeat.

const timeline = new mojs.Timeline({
	repeat: 999
})

// Adding everything to the timeline (notice the dot)
.add(blade, chalice, circ, burst_blade1, burst_chalice1, burst_blade2, burst_chalice2, burst_circ)

// Playing, again notice the dot. This is like this "timeline.add().play();"
.play();
