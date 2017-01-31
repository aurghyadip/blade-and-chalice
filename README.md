# The Blade and The Chalice
> **"The Blade and The Chalice watch o'er her gates..."**

> Robert Langdon, *The Da Vinci Code*

This is a simple project of a JavaScript animation library called mo.js. It's a beautiful and small library for adding small but powerful UI enhancements to your website. I however, used it to create an animation of something I am a fan of.

Here's the explanation of the code.

```
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
```

The above code is a shape. If you look into the mojs documentation, you'll see that the standard syntax for creating a shape is `new mojs.Shape()`. A shape is the baseline of everything. Notice how the attributes are passed as objects. Like `stroke:{ 'white' : 'black' }`, This is telling mojs to create a color changing transition from white to black.

The next part is a burst
```
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
```

If you look closely, you'll see a few different attributes from the shape function.

First one being `count`. `count` is the count of how many elements will be there in the burst. The default is 5.

Next is the `children`, a `children` object is the elements that are bursting out. A `children` is basically a shape.

```
const timeline = new mojs.Timeline({
	repeat: 999
})
```

This above part is the timeline, a timeline is quite similar to a video editor's timeline. Here I have set it to `repeat` for `999` times.

`.add()` is the add function, you are basically adding objects to the timeline by using this function. The objects you want to add are passed as arguments to the function, you can add as many arguments you want.

`.play()` method is telling the browser to play the timeline.

Refer to the mojs documentation for more detailed explanations of the functions and objects.

- [Mo.js documentation](http://mojs.io/tutorials/)


# License
MIT License

Copyright (c) 2017 Aurghyadip Kundu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
