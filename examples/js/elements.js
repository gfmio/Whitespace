//
// Grid view elements
// 

var React = require('react');
var ReactDOM = require('react-dom');

// Main View

var MainView = React.createClass({
	render: function() {
    	var Container = whitespace.layout.Container;
    	var Grid = whitespace.layout.Grid;
    	var Item = whitespace.layout.Item;

    	var Input = whitespace.forms.Input;

		return (
			<Container cols="1">
				<h1>Whitespace components</h1>
				<p>
					This is a collection of all Whitespace components. For an overview of the grid layout, check out <a href="grid.html">grid.html</a>.
				</p>

				<h2>Generic styles</h2>
				<p>This is a collection of general styles, such as colors, fonts, paddings and margins.</p>

				<h3>Background colors</h3>
				<Grid cols="3">
					<Item width="1">
						<div className="square margin-top-xsmall margin-bottom-xsmall bg-blue">
							<div className="absolute" style={{top: 50 + "%", left: 50 + "%"}}>
								<div style={{marginTop: -0.5*1.618 + "em", marginLeft: -50 + "%"}}>.bg-blue</div>
							</div>
						</div>
					</Item>
					<Item width="1">
						<div className="square margin-top-xsmall margin-bottom-xsmall bg-red">
							<div className="absolute" style={{top: 50 + "%", left: 50 + "%"}}>
								<div style={{marginTop: -0.5*1.618 + "em", marginLeft: -50 + "%"}}>.bg-red</div>
							</div>
						</div>
					</Item>
					<Item width="1">
						<div className="square margin-top-xsmall margin-bottom-xsmall bg-yellow">
							<div className="absolute" style={{top: 50 + "%", left: 50 + "%"}}>
								<div style={{marginTop: -0.5*1.618 + "em", marginLeft: -50 + "%"}}>.bg-yellow</div>
							</div>
						</div>
					</Item>
					<Item width="1">
						<div className="square margin-top-xsmall margin-bottom-xsmall bg-green">
							<div className="absolute" style={{top: 50 + "%", left: 50 + "%"}}>
								<div style={{marginTop: -0.5*1.618 + "em", marginLeft: -50 + "%"}}>.bg-green</div>
							</div>
						</div>
					</Item>
					<Item width="1">
						<div className="square margin-top-xsmall margin-bottom-xsmall bg-black text-white">
							<div className="absolute" style={{top: 50 + "%", left: 50 + "%"}}>
								<div style={{marginTop: -0.5*1.618 + "em", marginLeft: -50 + "%"}}>.bg-black</div>
							</div>
						</div>
					</Item>
					<Item width="1">
						<div className="square margin-top-xsmall margin-bottom-xsmall bg-gray-dark text-white">
							<div className="absolute" style={{top: 50 + "%", left: 50 + "%"}}>
								<div style={{marginTop: -0.5*1.618 + "em", marginLeft: -50 + "%"}}>.bg-gray-dark</div>
							</div>
						</div>
					</Item>
					<Item width="1">
						<div className="square margin-top-xsmall margin-bottom-xsmall bg-gray text-white">
							<div className="absolute" style={{top: 50 + "%", left: 50 + "%"}}>
								<div style={{marginTop: -0.5*1.618 + "em", marginLeft: -50 + "%"}}>.bg-gray</div>
							</div>
						</div>
					</Item>
					<Item width="1">
						<div className="square margin-top-xsmall margin-bottom-xsmall bg-gray-light">
							<div className="absolute" style={{top: 50 + "%", left: 50 + "%"}}>
								<div style={{marginTop: -0.5*1.618 + "em", marginLeft: -50 + "%"}}>.bg-gray-light</div>
							</div>
						</div>
					</Item>
					<Item width="1">
						<div className="bg-black padding-xsmall margin-negative-left-xsmall margin-negative-right-xsmall margin-negative-bottom-xsmall">
							<div className="square bg-white">
								<div className="absolute" style={{top: 50 + "%", left: 50 + "%"}}>
									<div style={{marginTop: -0.5*1.618 + "em", marginLeft: -50 + "%"}}>.bg-white</div>
								</div>
							</div>
						</div>
					</Item>
				</Grid>
				<h3>Text colors</h3>
				<p className="text-blue">This is a line with class .text-blue.</p>
				<p className="text-red">This is a line with class .text-red.</p>
				<p className="text-yellow">This is a line with class .text-yellow.</p>
				<p className="text-green">This is a line with class .text-green.</p>
				<p className="text-black">This is a line with class .text-black.</p>
				<p className="text-gray-dark">This is a line with class .text-gray-dark.</p>
				<p className="text-gray">This is a line with class .text-gray.</p>
				<p className="text-gray-light">This is a line with class .text-gray-light.</p>
				<p className="padding-xsmall bg-black text-white">This is a line with class .text-white.</p>

				<h3>Fonts</h3>
				<h3>Font weights</h3>
				<p className="font-weight-100">This is a line with class .font-weight-100.</p>
				<p className="font-weight-200">This is a line with class .font-weight-200.</p>
				<p className="font-weight-300">This is a line with class .font-weight-300.</p>
				<p className="font-weight-400">This is a line with class .font-weight-400.</p>
				<p className="font-weight-500">This is a line with class .font-weight-500.</p>
				<p className="font-weight-600">This is a line with class .font-weight-600.</p>
				<p className="font-weight-700">This is a line with class .font-weight-700.</p>
				<p className="font-weight-800">This is a line with class .font-weight-800.</p>
				<p className="font-weight-900">This is a line with class .font-weight-900.</p>

				<h3>Paddings</h3>
				<div className="padding-none margin-xsmall bg-black text-white">.padding-none</div>
				<div className="padding-xsmall margin-xsmall bg-black text-white">.padding-xsmall</div>
				<div className="padding-small margin-xsmall bg-black text-white">.padding-small</div>
				<div className="padding-medium margin-xsmall bg-black text-white">.padding-medium</div>
				<div className="padding-large margin-xsmall bg-black text-white">.padding-large</div>
				<div className="padding-xlarge margin-xsmall bg-black text-white">.padding-xlarge</div>
				<div className="padding-xxlarge margin-xsmall bg-black text-white">.padding-xxlarge</div>

				<h3>Margins</h3>
				<div className="margin-none padding-xsmall bg-black text-white">.margin-none</div>
				<div className="margin-xsmall padding-xsmall bg-black text-white">.margin-xsmall</div>
				<div className="margin-small padding-xsmall bg-black text-white">.margin-small</div>
				<div className="margin-medium padding-xsmall bg-black text-white">.margin-medium</div>
				<div className="margin-large padding-xsmall bg-black text-white">.margin-large</div>
				<div className="margin-xlarge padding-xsmall bg-black text-white">.margin-xlarge</div>
				<div className="margin-xxlarge padding-xsmall bg-black text-white">.margin-xxlarge</div>

				<h3>Border and rule widths</h3>
				<Grid cols="2">
					<Item width="1">
						<p className="margin-small padding-xsmall border-none border-black text-right">
							Lorem ipsum
						</p>
						<p className="margin-small padding-xsmall border-xxthin border-black text-right">
							Lorem ipsum
						</p>
						<p className="margin-small padding-xsmall border-xthin border-black text-right">
							Lorem ipsum
						</p>
						<p className="margin-small padding-xsmall border-thin border-black text-right">
							Lorem ipsum
						</p>
						<p className="margin-small padding-xsmall border-medium border-black text-right">
							Lorem ipsum
						</p>
						<p className="margin-small padding-xsmall border-thick border-black text-right">
							Lorem ipsum
						</p>
						<p className="margin-small padding-xsmall border-xthick border-black text-right">
							Lorem ipsum
						</p>
						<p className="margin-small padding-xsmall border-xxthick border-black text-right">
							Lorem ipsum
						</p>
						<hr className="none" />
						<hr className="xxthin" />
						<hr className="xthin" />
						<hr className="thin" />
						<hr className="medium" />
						<hr className="thick" />
						<hr className="xthick" />
						<hr className="xxthick" />
					</Item>
					<Item width="1">
						<p className="margin-top-small padding-top-xsmall">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo non erat blandit auctor. Phasellus at mollis lorem. Ut et lorem vel libero cursus porttitor eu sed magna. Proin id libero non justo tincidunt aliquam. Proin sit amet sem quis libero semper posuere nec quis ex. Pellentesque nec sapien ac velit porttitor pretium. Vivamus sodales blandit magna a venenatis.
						</p>
						<p className="margin-top-small padding-top-xsmall">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo non erat blandit auctor. Phasellus at mollis lorem. Ut et lorem vel libero cursus porttitor eu sed magna. Proin id libero non justo tincidunt aliquam. Proin sit amet sem quis libero semper posuere nec quis ex. Pellentesque nec sapien ac velit porttitor pretium. Vivamus sodales blandit magna a venenatis.
						</p>
					</Item>
				</Grid>

				<h3>Container sizing</h3>
				// full-width
				// full-height
				// screen-width
				// screen-height
				// frame
				<h3>Display styles</h3>
				// block
				// inline-block
				// inline
				// flex
				<h3>Positioning</h3>
				// absolute
				// relative
				// fixed
				// sticky
				<h3>Horizontal alignment</h3>
				<div className="clearfix">
					<div className="bg-black text-white padding-xsmall margin-xsmall left">This is a container with class .left.</div>
				</div>
				<div className="clearfix">
					<div className="bg-black text-white padding-xsmall margin-xsmall right">This is a container with class .right.</div>
				</div>
				<div className="clearfix">
					<div className="bg-black text-white padding-xsmall margin-xsmall center" style={{ width: 61.8 + "%" }}>This is a container with class .center.</div>
				</div>

				<h3>Vertical alignment</h3>
				// top
				// middle
				// bottom
				<h3>Clearfix</h3>
				// clearfix

				<h3>Text alignment</h3>
				<p className="text-left">This is a line with class .text-left.</p>
				<p className="text-center">This is a line with class .text-center.</p>
				<p className="text-right">This is a line with class .text-right.</p>

				<h3>Content overflow</h3>
				<Grid cols="1">
					<Item width="1">
						<div className="overflow-visible margin-top-xsmall margin-bottom-xsmall bg-black text-white padding-small" style={{ height: 4 * 1.618 + "em" }}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo non erat blandit auctor. Phasellus at mollis lorem. Ut et lorem vel libero cursus porttitor eu sed magna. Proin id libero non justo tincidunt aliquam. Proin sit amet sem quis libero semper posuere nec quis ex. Pellentesque nec sapien ac velit porttitor pretium. Vivamus sodales blandit magna a venenatis.
							</p>
						</div>
					</Item>
					<Item width="1">
						<div className="overflow-visible-y overflow-hidden-x margin-top-xsmall margin-bottom-xsmall bg-black text-white padding-small" style={{ height: 4 * 1.618 + "em" }}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo non erat blandit auctor. Phasellus at mollis lorem. Ut et lorem vel libero cursus porttitor eu sed magna. Proin id libero non justo tincidunt aliquam. Proin sit amet sem quis libero semper posuere nec quis ex. Pellentesque nec sapien ac velit porttitor pretium. Vivamus sodales blandit magna a venenatis.
							</p>
						</div>
					</Item>
					<Item width="1">
						<div className="overflow-visible overflow-visible-x overflow-hidden-y margin-top-xsmall margin-bottom-xsmall bg-black text-white padding-small" style={{ height: 4 * 1.618 + "em" }}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo non erat blandit auctor. Phasellus at mollis lorem. Ut et lorem vel libero cursus porttitor eu sed magna. Proin id libero non justo tincidunt aliquam. Proin sit amet sem quis libero semper posuere nec quis ex. Pellentesque nec sapien ac velit porttitor pretium. Vivamus sodales blandit magna a venenatis.
							</p>
						</div>
					</Item>
					<Item width="1">
						<div className="overflow-scroll margin-top-xsmall margin-bottom-xsmall bg-black text-white padding-small" style={{ height: 4 * 1.618 + "em" }}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo non erat blandit auctor. Phasellus at mollis lorem. Ut et lorem vel libero cursus porttitor eu sed magna. Proin id libero non justo tincidunt aliquam. Proin sit amet sem quis libero semper posuere nec quis ex. Pellentesque nec sapien ac velit porttitor pretium. Vivamus sodales blandit magna a venenatis.
							</p>
						</div>
					</Item>
					<Item width="1">
						<div className="overflow-scroll-y overflow-hidden-x margin-top-xsmall margin-bottom-xsmall bg-black text-white padding-small" style={{ height: 4 * 1.618 + "em" }}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo non erat blandit auctor. Phasellus at mollis lorem. Ut et lorem vel libero cursus porttitor eu sed magna. Proin id libero non justo tincidunt aliquam. Proin sit amet sem quis libero semper posuere nec quis ex. Pellentesque nec sapien ac velit porttitor pretium. Vivamus sodales blandit magna a venenatis.
							</p>
						</div>
					</Item>
					<Item width="1">
						<div className="overflow-scroll-x overflow-hidden-y margin-top-xsmall margin-bottom-xsmall bg-black text-white padding-small" style={{ height: 4 * 1.618 + "em" }}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo non erat blandit auctor. Phasellus at mollis lorem. Ut et lorem vel libero cursus porttitor eu sed magna. Proin id libero non justo tincidunt aliquam. Proin sit amet sem quis libero semper posuere nec quis ex. Pellentesque nec sapien ac velit porttitor pretium. Vivamus sodales blandit magna a venenatis.
							</p>
						</div>
					</Item>
					<Item width="1">
						<div className="overflow-hidden margin-top-xsmall margin-bottom-xsmall bg-black text-white padding-small" style={{ height: 4 * 1.618 + "em" }}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo non erat blandit auctor. Phasellus at mollis lorem. Ut et lorem vel libero cursus porttitor eu sed magna. Proin id libero non justo tincidunt aliquam. Proin sit amet sem quis libero semper posuere nec quis ex. Pellentesque nec sapien ac velit porttitor pretium. Vivamus sodales blandit magna a venenatis.
							</p>
						</div>
					</Item>
					<Item width="1">
						<div className="overflow-hidden-y overflow-hidden-x margin-top-xsmall margin-bottom-xsmall bg-black text-white padding-small" style={{ height: 4 * 1.618 + "em" }}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo non erat blandit auctor. Phasellus at mollis lorem. Ut et lorem vel libero cursus porttitor eu sed magna. Proin id libero non justo tincidunt aliquam. Proin sit amet sem quis libero semper posuere nec quis ex. Pellentesque nec sapien ac velit porttitor pretium. Vivamus sodales blandit magna a venenatis.
							</p>
						</div>
					</Item>
					<Item width="1">
						<div className="overflow-hidden-x overflow-hidden-y margin-top-xsmall margin-bottom-xsmall bg-black text-white padding-small" style={{ height: 4 * 1.618 + "em" }}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo non erat blandit auctor. Phasellus at mollis lorem. Ut et lorem vel libero cursus porttitor eu sed magna. Proin id libero non justo tincidunt aliquam. Proin sit amet sem quis libero semper posuere nec quis ex. Pellentesque nec sapien ac velit porttitor pretium. Vivamus sodales blandit magna a venenatis.
							</p>
						</div>
					</Item>
				</Grid>
				
				<h2>Typography</h2>

				<h3>Paragraphs</h3>
				<p>
					Lorem <em>ipsum</em> <strong>dolor</strong> <small>sit amet</small>, <code>consectetur</code> <sup>adipiscing</sup> <sub>elit</sub>. <abbr>Curabitur</abbr> <del>luctus</del> <s>leo</s> <ins>non</ins> <u>erat</u> <mark>blandit</mark> <span className="text-lowercase">auctor</span>. <span className="text-capitalize">Phasellus</span> <span className="text-uppercase">at</span> mollis lorem. Ut et lorem vel libero cursus porttitor eu sed magna. Proin id libero non justo tincidunt aliquam. Proin sit amet sem quis libero semper posuere nec quis ex. Pellentesque nec sapien ac velit porttitor pretium. Vivamus sodales blandit magna a venenatis.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo non erat blandit auctor. Phasellus at mollis lorem. Ut et lorem vel libero cursus porttitor eu sed magna. Proin id libero non justo tincidunt aliquam. Proin sit amet sem quis libero semper posuere nec quis ex. Pellentesque nec sapien ac velit porttitor pretium. Vivamus sodales blandit magna a venenatis.
				</p>

				<h3>Heading styles</h3>

				<Grid cols="2">
					<Item width="1">
						<h1>h1 Heading <small>Smaller h1 heading</small></h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
						<h2>h2 Heading <small>Smaller h2 heading</small></h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
						<h3>h3 Heading <small>Smaller h3 heading</small></h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
						<h4>h4 Heading <small>Smaller h4 heading</small></h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
						<h5>h5 Heading <small>Smaller h5 heading</small></h5>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
						<h6>h6 Heading <small>Smaller h6 heading</small></h6>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</Item>
					<Item width="1">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo non erat blandit auctor. Phasellus at mollis lorem. Ut et lorem vel libero cursus porttitor eu sed magna. Proin id libero non justo tincidunt aliquam. Proin sit amet sem quis libero semper posuere nec quis ex. Pellentesque nec sapien ac velit porttitor pretium. Vivamus sodales blandit magna a venenatis.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo non erat blandit auctor. Phasellus at mollis lorem. Ut et lorem vel libero cursus porttitor eu sed magna. Proin id libero non justo tincidunt aliquam. Proin sit amet sem quis libero semper posuere nec quis ex. Pellentesque nec sapien ac velit porttitor pretium. Vivamus sodales blandit magna a venenatis.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</Item>
				</Grid>

				<h3>Font size styles</h3>

				<p className="font-size-xxhuge">
					.font-size-xxhuge
				</p>
				<p className="font-size-xhuge">
					.font-size-xhuge
				</p>
				<p className="font-size-huge">
					.font-size-huge
				</p>
				<p className="font-size-xxlarge">
					.font-size-xxlarge
				</p>
				<p className="font-size-xlarge">
					.font-size-xlarge
				</p>
				<p className="font-size-large">
					.font-size-large
				</p>
				<p className="font-size-normal">
					.font-size-normal
				</p>
				<p className="font-size-small">
					.font-size-small
				</p>
				<p className="font-size-xsmall">
					.font-size-xsmall
				</p>
				<p className="font-size-xxsmall">
					.font-size-xxsmall
				</p>

				<h3>Blockquotes</h3>

				<blockquote>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo non erat blandit auctor. Phasellus at mollis lorem. Ut et lorem vel libero cursus porttitor eu sed magna. Proin id libero non justo tincidunt aliquam. Proin sit amet sem quis libero semper posuere nec quis ex. Pellentesque nec sapien ac velit porttitor pretium. Vivamus sodales blandit magna a venenatis.
				</blockquote>

				<blockquote className="reverse">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo non erat blandit auctor. Phasellus at mollis lorem. Ut et lorem vel libero cursus porttitor eu sed magna. Proin id libero non justo tincidunt aliquam. Proin sit amet sem quis libero semper posuere nec quis ex. Pellentesque nec sapien ac velit porttitor pretium. Vivamus sodales blandit magna a venenatis.
					<footer>
						Lorem ipsum dolor sit amet
					</footer>
				</blockquote>

				<h3>Address</h3>

				<address>

				</address>

				<h3>Pre-formatted text</h3>

				<pre>

				</pre>

				<h3>Keyboard controls</h3>

				<p>
					Press <kbd>Ctrl + A</kbd> to select the entire text in the document. 
				</p>

				<h3>Variables</h3>

				<p>
					<var>
						y = mx + n
					</var>
				</p>

				<h3>Sample output</h3>

				<p>
					<samp>
						This is some sample output from an application.
					</samp>
				</p>

				<h3>Lists</h3>
				
				<h4>Unordered lists</h4>

				<ul>
					<li>Lorem ipsum dolor sit amet</li>
					<li>Lorem ipsum dolor sit amet</li>
					<li>Lorem ipsum dolor sit amet</li>
				</ul>

				<h4>Ordered lists</h4>

				<ol>
					<li>Lorem ipsum dolor sit amet</li>
					<li>Lorem ipsum dolor sit amet</li>
					<li>Lorem ipsum dolor sit amet</li>
				</ol>

				<h4>Unstyled lists</h4>

				<ul className="unstyled">
					<li>Lorem ipsum dolor sit amet</li>
					<li>Lorem ipsum dolor sit amet</li>
					<li>Lorem ipsum dolor sit amet</li>
				</ul>

				<h4>Inline lists</h4>

				<ul className="inline unstyled">
					<li>Lorem</li>
					<li>Ipsum</li>
					<li>Dolor</li>
				</ul>

				<h4>Definition lists</h4>

				<dl>
					<dt>Lorem Ipsum</dt>
					<dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo non erat blandit auctor.</dd>

					<dt>Lorem Ipsum</dt>
					<dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo non erat blandit auctor.</dd>

					<dt>Lorem Ipsum</dt>
					<dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo non erat blandit auctor.</dd>

					<dt>Lorem Ipsum</dt>
					<dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo non erat blandit auctor.</dd>
				</dl>
				
				<h2>Forms</h2>
				
				<form>
					<Input type="text" name="text" label="type=['text'] required" placeholder="Input" required={true} />
					<Input type="textarea" name="textarea" label="textarea" placeholder="Input" />
					<Input type="email" name="email" label="type=['email']" placeholder="Input" />
					<Input type="tel" name="tel" label="type=['tel']" placeholder="Input" />
					<Input type="url" name="url" label="type=['url']" placeholder="Input" />
					<Input type="search" name="search" label="type=['search']" placeholder="Input" />
					<Input type="number" name="number" label="type=['number']" placeholder="Input" />
					<Input type="range" name="range" label="type=['range']" placeholder="Input" />
					<Input type="checkbox" name="checkbox" label="type=['checkbox']" placeholder="Input" />
					<Input type="radio" name="radio" label="type=['radio']" placeholder="Input" />
					<Input type="select" name="select" label="select">
						<option>Option 1</option>
						<option>Option 2</option>
						<option>Option 3</option>
					</Input>
					<Input type="select" name="select_multiple" label="select[multiple]" multiple={true}>
						<option>Option 1</option>
						<option>Option 2</option>
						<option>Option 3</option>
					</Input>
					<Input type="date" name="date" label="type=['date']" placeholder="Input" />
					<Input type="time" name="time" label="type=['time']" placeholder="Input" />
					<Input type="datetime-local" name="datetime-local" label="type=['datetime-local']" placeholder="Input" />
					<Input type="month" name="month" label="type=['month']" placeholder="Input" />
					<Input type="week" name="week" label="type=['week']" placeholder="Input" />
					<Input type="color" name="color" label="type=['color']" placeholder="Input" />
					<Input type="file" name="file" label="type=['file']" placeholder="Input" />

					<Grid cols="2" className="input-group">
						<Item width="1">
							<input className="margin-top-xsmall margin-bottom-xsmall" type="submit" value="Submit" />
						</Item>
						<Item width="1">
							<input className="margin-top-xsmall margin-bottom-xsmall" type="reset" value="Reset" />
						</Item>
					</Grid>
				</form>

				<h2>Buttons</h2>
				<p>tbi</p>
				
				<h2>Icons</h2>
				<p>tbi</p>
				
				<h2>Media elements</h2>
				<p>tbi</p>
			</Container>
		);
	}
});
