var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var streamify = require('gulp-streamify');
var concat = require('gulp-concat');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var sass = require('gulp-ruby-sass');
var gulpFilter = require('gulp-filter');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var modernizr = require('gulp-modernizr');

var dependencies = [
  'react',
  'react-dom'
];
// 'underscore'

var vendorDependencies = [
  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/jquery-validation/dist/jquery.validate.min.js',
  'bower_components/rangeslider.js/dist/rangeslider.min.js',
  'bower_components/spectrum/dist/spectrum.js'
  // 'bower_components/bootstrap/dist/js/bootstrap.js',
  // 'bower_components/magnific-popup/dist/jquery.magnific-popup.js',
  // 'bower_components/toastr/toastr.js'
]

/*
 |--------------------------------------------------------------------------
 | Combine all JS libraries into a single file for fewer HTTP requests.
 |--------------------------------------------------------------------------
 */

gulp.task('browserify-vendor', function() {
  return browserify()
    .require(dependencies)
    .bundle()
    .pipe(source('dependencies.js'))
    .pipe(streamify(uglify({ mangle: false })))
    .pipe(gulp.dest('dist'));
});

gulp.task('vendor', ['browserify-vendor', 'modernizr'], function() {
  var files = vendorDependencies;
  files.push('dist/dependencies.js');
  files.push('dist/modernizr.js');

  return gulp.src(files)
    .pipe(concat('vendor.js'))
    .pipe(uglify({ mangle: false }))
    .pipe(gulp.dest('dist'));
});

gulp.task('delete-temporary-files', ['vendor'], function() {
  del('dist/dependencies.js');
  return del('dist/modernizr.js');
});

gulp.task('modernizr', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(modernizr({
  "minify": true,
  "options": [
    "domPrefixes",
    "prefixes",
    "addTest",
    "atRule",
    "hasEvent",
    "mq",
    "prefixed",
    "prefixedCSS",
    "prefixedCSSValue",
    "testAllProps",
    "testProp",
    "testStyles",
    "html5printshiv",
    "html5shiv",
    "setClasses"
  ],
  "feature-detects": [
    "test/ambientlight",
    "test/applicationcache",
    "test/audio",
    "test/battery",
    "test/blob",
    "test/canvas",
    "test/canvastext",
    "test/contenteditable",
    "test/contextmenu",
    "test/cookies",
    "test/cors",
    "test/crypto",
    "test/custom-protocol-handler",
    "test/customevent",
    "test/dart",
    "test/dataview-api",
    "test/emoji",
    "test/eventlistener",
    "test/exif-orientation",
    "test/flash",
    "test/forcetouch",
    "test/fullscreen-api",
    "test/gamepad",
    "test/geolocation",
    "test/hashchange",
    "test/hiddenscroll",
    "test/history",
    "test/htmlimports",
    "test/ie8compat",
    "test/indexeddb",
    "test/indexeddbblob",
    "test/input",
    "test/inputsearchevent",
    "test/inputtypes",
    "test/intl",
    "test/json",
    "test/ligatures",
    "test/lists-reversed",
    "test/mathml",
    "test/notification",
    "test/pagevisibility-api",
    "test/performance",
    "test/pointerevents",
    "test/pointerlock-api",
    "test/postmessage",
    "test/proximity",
    "test/queryselector",
    "test/quota-management-api",
    "test/requestanimationframe",
    "test/serviceworker",
    "test/svg",
    "test/templatestrings",
    "test/touchevents",
    "test/typed-arrays",
    "test/unicode-range",
    "test/unicode",
    "test/userdata",
    "test/vibration",
    "test/video",
    "test/vml",
    "test/web-intents",
    "test/webanimations",
    "test/webgl",
    "test/websockets",
    "test/xdomainrequest",
    "test/a/download",
    "test/audio/loop",
    "test/audio/preload",
    "test/audio/webaudio",
    "test/battery/lowbattery",
    "test/canvas/blending",
    "test/canvas/todataurl",
    "test/canvas/winding",
    "test/crypto/getrandomvalues",
    "test/css/all",
    "test/css/animations",
    "test/css/appearance",
    "test/css/backdropfilter",
    "test/css/backgroundblendmode",
    "test/css/backgroundcliptext",
    "test/css/backgroundposition-shorthand",
    "test/css/backgroundposition-xy",
    "test/css/backgroundrepeat",
    "test/css/backgroundsize",
    "test/css/backgroundsizecover",
    "test/css/borderimage",
    "test/css/borderradius",
    "test/css/boxshadow",
    "test/css/boxsizing",
    "test/css/calc",
    "test/css/checked",
    "test/css/chunit",
    "test/css/columns",
    "test/css/cubicbezierrange",
    "test/css/displayrunin",
    "test/css/displaytable",
    "test/css/ellipsis",
    "test/css/escape",
    "test/css/exunit",
    "test/css/filters",
    "test/css/flexbox",
    "test/css/flexboxlegacy",
    "test/css/flexboxtweener",
    "test/css/flexwrap",
    "test/css/fontface",
    "test/css/generatedcontent",
    "test/css/gradients",
    "test/css/hairline",
    "test/css/hsla",
    "test/css/hyphens",
    "test/css/invalid",
    "test/css/lastchild",
    "test/css/mask",
    "test/css/mediaqueries",
    "test/css/multiplebgs",
    "test/css/nthchild",
    "test/css/objectfit",
    "test/css/opacity",
    "test/css/overflow-scrolling",
    "test/css/pointerevents",
    "test/css/positionsticky",
    "test/css/pseudoanimations",
    "test/css/pseudotransitions",
    "test/css/reflections",
    "test/css/regions",
    "test/css/remunit",
    "test/css/resize",
    "test/css/rgba",
    "test/css/scrollbars",
    "test/css/scrollsnappoints",
    "test/css/shapes",
    "test/css/siblinggeneral",
    "test/css/subpixelfont",
    "test/css/supports",
    "test/css/target",
    "test/css/textalignlast",
    "test/css/textshadow",
    "test/css/transforms",
    "test/css/transforms3d",
    "test/css/transformstylepreserve3d",
    "test/css/transitions",
    "test/css/userselect",
    "test/css/valid",
    "test/css/vhunit",
    "test/css/vmaxunit",
    "test/css/vminunit",
    "test/css/vwunit",
    "test/css/will-change",
    "test/css/wrapflow",
    "test/dom/classlist",
    "test/dom/createElement-attrs",
    "test/dom/dataset",
    "test/dom/documentfragment",
    "test/dom/hidden",
    "test/dom/microdata",
    "test/dom/mutationObserver",
    "test/elem/bdi",
    "test/elem/datalist",
    "test/elem/details",
    "test/elem/output",
    "test/elem/picture",
    "test/elem/progress-meter",
    "test/elem/ruby",
    "test/elem/template",
    "test/elem/time",
    "test/elem/track",
    "test/elem/unknown",
    "test/es5/array",
    "test/es5/date",
    "test/es5/function",
    "test/es5/object",
    "test/es5/specification",
    "test/es5/strictmode",
    "test/es5/string",
    "test/es5/syntax",
    "test/es5/undefined",
    "test/es6/array",
    "test/es6/collections",
    "test/es6/contains",
    "test/es6/generators",
    "test/es6/math",
    "test/es6/number",
    "test/es6/object",
    "test/es6/promises",
    "test/es6/string",
    "test/event/deviceorientation-motion",
    "test/event/oninput",
    "test/file/api",
    "test/file/filesystem",
    "test/forms/capture",
    "test/forms/fileinput",
    "test/forms/fileinputdirectory",
    "test/forms/formattribute",
    "test/forms/inputnumber-l10n",
    "test/forms/placeholder",
    "test/forms/requestautocomplete",
    "test/forms/validation",
    "test/iframe/sandbox",
    "test/iframe/seamless",
    "test/iframe/srcdoc",
    "test/img/apng",
    "test/img/crossorigin",
    "test/img/jpeg2000",
    "test/img/jpegxr",
    "test/img/sizes",
    "test/img/srcset",
    "test/img/webp-alpha",
    "test/img/webp-animation",
    "test/img/webp-lossless",
    "test/img/webp",
    "test/input/formaction",
    "test/input/formenctype",
    "test/input/formmethod",
    "test/input/formtarget",
    "test/network/beacon",
    "test/network/connection",
    "test/network/eventsource",
    "test/network/fetch",
    "test/network/xhr-responsetype-arraybuffer",
    "test/network/xhr-responsetype-blob",
    "test/network/xhr-responsetype-document",
    "test/network/xhr-responsetype-json",
    "test/network/xhr-responsetype-text",
    "test/network/xhr-responsetype",
    "test/network/xhr2",
    "test/script/async",
    "test/script/defer",
    "test/speech/speech-recognition",
    "test/speech/speech-synthesis",
    "test/storage/localstorage",
    "test/storage/sessionstorage",
    "test/storage/websqldatabase",
    "test/style/scoped",
    "test/svg/asimg",
    "test/svg/clippaths",
    "test/svg/filters",
    "test/svg/foreignobject",
    "test/svg/inline",
    "test/svg/smil",
    "test/textarea/maxlength",
    "test/url/bloburls",
    "test/url/data-uri",
    "test/url/parser",
    "test/video/autoplay",
    "test/video/loop",
    "test/video/preload",
    "test/webgl/extensions",
    "test/webrtc/datachannel",
    "test/webrtc/getusermedia",
    "test/webrtc/peerconnection",
    "test/websockets/binary",
    "test/window/atob-btoa",
    "test/window/framed",
    "test/window/matchmedia",
    "test/workers/blobworkers",
    "test/workers/dataworkers",
    "test/workers/sharedworkers",
    "test/workers/transferables",
    "test/workers/webworkers"
  ]
}))
    .pipe(gulp.dest("dist/"))
});

/*
 |--------------------------------------------------------------------------
 | Compile only project files, excluding all third-party dependencies.
 |--------------------------------------------------------------------------
 */
gulp.task('browserify', ['browserify-vendor'], function() {
  return browserify('src/js/whitespace.js')
    .external(dependencies)
    .transform(babelify, { presets: ['es2015', 'react'] })
    .bundle()
    .pipe(source('whitespace.js'))
    // .pipe(streamify(uglify({ mangle: false })))
    .pipe(gulp.dest('dist'));
});

/*
 |--------------------------------------------------------------------------
 | Compile Sass stylesheets.
 |--------------------------------------------------------------------------
 */
gulp.task('styles', function() {
  // Don’t write sourcemaps of sourcemaps
  var filter = gulpFilter([
    '*.css',
    '!*.css.map',
    '!*.map'
  ]);

  var autoprefixerConfig = {
    browsers: [
      'last 2 versions',
      'safari 5',
      'ie 8',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
    ],
    cascade: true
  };
  var sassDevelopmentConfig =  {
    src: 'src/scss/**/*.{sass,scss}',
    dest: 'dist',
    options: {
      noCache: true,
      compass: false,
      bundleExec: true,
      "sourcemap=auto": true,
      "style=expanded": true,
      'require=./src/scss/helpers/sass-math.rb': true,
      sourcemapPath: '../src/scss',
    }
  };
  var sassProductionConfig = {
    src: 'src/scss/**/*.{sass,scss}',
    dest: 'dist',
    options: {
      noCache: true,
      compass: false,
      bundleExec: true,
      "sourcemap=none": true,
      "style=compressed": true,
      'require=./src/scss/helpers/sass-math.rb': true
    }
  };

  gulp.src(sassProductionConfig.src)
    .pipe(plumber())
    .pipe(sass(sassProductionConfig.options))
    .pipe(autoprefixer(autoprefixerConfig))
    .pipe(rename('whitespace.min.css'))
    .pipe(gulp.dest(sassProductionConfig.dest));

  return gulp.src(sassDevelopmentConfig.src)
    .pipe(plumber())
    .pipe(sass(sassDevelopmentConfig.options))
    .pipe(sourcemaps.init())
    .pipe(filter) // Don’t write sourcemaps of sourcemaps
    .pipe(autoprefixer(autoprefixerConfig))
    // .pipe(sourcemaps.write('.', {includeContent: false}))
    .pipe(filter.restore()) // Restore original files
    .pipe(gulp.dest(sassDevelopmentConfig.dest));
});

gulp.task('build', ['styles', 'browserify', 'modernizr', 'vendor', 'delete-temporary-files']);
// gulp.task('build', ['vendor', 'browserify']);
// gulp.task('build', ['browserify']);
gulp.task('default', ['build']);
