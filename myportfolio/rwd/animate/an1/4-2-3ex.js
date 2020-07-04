(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.背景 = function() {
	this.initialize(img.背景);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.點陣圖2 = function() {
	this.initialize(img.點陣圖2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,172);


(lib.球 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖2();
	this.instance.parent = this;
	this.instance.setTransform(-86,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-86,172,172);


// stage content:
(lib._423ex = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 球
	this.instance = new lib.球("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(674.55,-15.6,0.1692,0.1692);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.2,regY:0.2,scaleX:0.2485,scaleY:0.2485,guide:{path:[674.5,-15.5,652.4,-0.9,622.2,23.7,594.4,46.2,562.8,74.9,553.3,83.7,543.7,92.6]}},13,cjs.Ease.get(-0.5)).to({regX:0.1,regY:0.3,scaleX:0.2892,scaleY:0.2122,guide:{path:[543.8,92.7,540.4,95.8,537,99]}},2).to({regX:0.2,regY:0.2,scaleX:0.2485,scaleY:0.2485,guide:{path:[536.9,99,536.9,99,536.9,99,534.2,96.2,531.5,93.3]}},2).to({regX:0.1,regY:0.4,scaleX:0.3069,scaleY:0.3069,guide:{path:[531.5,93.2,515.4,76.5,496.3,60.1,453.1,22.9,432.4,24]}},12,cjs.Ease.get(0.5)).to({regX:0.3,regY:0.5,scaleX:0.3528,scaleY:0.3528,guide:{path:[432.4,24,431.7,24.1,431,24.2,410.4,26.7,387.1,65.1,379.8,77.1,373.2,91.3,372.8,92.1,372.4,92.9]}},13,cjs.Ease.get(-0.5)).to({regY:0.6,scaleX:0.4034,scaleY:0.284,guide:{path:[372.5,92.9,369.7,98.9,368,103.1,368,103.1,368,103.1]}},2).to({regY:0.5,scaleX:0.3528,scaleY:0.3528,guide:{path:[368.1,103.1,364.8,98.4,361.3,93.7]}},2).to({regX:0.4,scaleX:0.4071,scaleY:0.4071,guide:{path:[361.2,93.7,349.7,78.2,335.4,63,301.9,27.3,279.8,25.2]}},12,cjs.Ease.get(0.5)).to({regX:0.5,regY:0.6,scaleX:0.4697,scaleY:0.4697,guide:{path:[279.8,25.2,277.3,24.9,275,25.1,251.9,27,222.6,79.7,212,98.7,203.8,117.6]}},12,cjs.Ease.get(-0.5)).to({regY:0.7,scaleX:0.5125,scaleY:0.3906,guide:{path:[203.9,117.7,200.8,124.9,198,132,198.1,131.9,198.2,131.8]}},2).to({regY:0.6,scaleX:0.4697,scaleY:0.4697,guide:{path:[198.2,131.8,201.9,125.3,206,119]}},2).to({scaleX:0.5156,scaleY:0.5156,guide:{path:[206,119,215.3,104.6,226.5,91.5,253.4,60.1,271.7,63.2]}},13,cjs.Ease.get(0.5)).to({scaleX:0.5824,scaleY:0.5824,guide:{path:[271.6,63.4,275.5,64,279,66.2,299,78.7,332,130.6,343.9,149.4,353.8,166.9]}},14,cjs.Ease.get(-0.5)).to({regX:0.6,regY:0.7,scaleX:0.641,scaleY:0.4681,guide:{path:[353.8,166.9,357.6,173.6,361,180,361,180,360.9,179.9]}},2).to({regX:0.5,regY:0.6,scaleX:0.5824,scaleY:0.5824,guide:{path:[360.9,179.9,355.3,173.2,349.2,167.1]}},2).to({regX:0.6,regY:0.7,scaleX:0.62,scaleY:0.62,guide:{path:[349.2,167.1,341.3,159.1,332.4,152.2,304.8,130.7,289.4,139.6]}},13,cjs.Ease.get(0.5)).to({regX:0.7,scaleX:0.6951,scaleY:0.6951,guide:{path:[289.4,139.8,287,141,285,143.1,269.4,158.7,251.1,231,244.6,256.7,239.7,280.9]}},14,cjs.Ease.get(-0.5)).to({regY:0.8,scaleX:0.746,scaleY:0.5354,guide:{path:[239.7,280.9,237.7,290.6,236,300.1,236,300.1,236,300]}},2).to({regY:0.7,scaleX:0.6951,scaleY:0.6951,guide:{path:[235.9,300,232.2,290.3,227.7,281.3]}},2).to({regY:0.8,scaleX:0.7369,scaleY:0.7369,guide:{path:[227.8,281.3,221.9,269.6,214.6,259,194.7,229.8,177.1,233.3]}},14,cjs.Ease.get(0.5)).to({scaleX:0.8371,scaleY:0.8371,guide:{path:[177.1,233.3,172,234.3,167,238.1,145.2,255,118.4,349.2,108.2,385,100.6,418.9]}},16,cjs.Ease.get(-0.5)).to({regX:0.8,scaleX:0.9088,scaleY:0.6308,guide:{path:[100.5,418.8,98.2,429.3,96.1,439.5]}},2).to({regX:0.7,scaleX:0.8371,scaleY:0.8371,guide:{path:[96.1,439.6,96.1,439.8,96,440,92.2,428.6,87.2,417.8]}},2).to({regX:0.8,scaleX:0.883,scaleY:0.883,guide:{path:[87.2,417.8,81.6,405.7,74.4,394.5,53.4,361.9,32.1,363.1]}},17,cjs.Ease.get(0.5)).to({regX:0,regY:0,scaleX:1,scaleY:1,guide:{path:[32,363.1,25.6,363.5,19,367,-9.1,382,-65.2,489.5,-90.8,538.4,-111.7,584.8]}},12,cjs.Ease.get(-0.5)).wait(1));

	// 背景
	this.instance_1 = new lib.背景();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(102.2,269.9,586.9,400.9);
// library properties:
lib.properties = {
	id: '1F8ECAA8B41D704695F9CBB042B824FB',
	width: 600,
	height: 600,
	fps: 50,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/背景_.jpg", id:"背景"},
		{src:"images/點陣圖2.png", id:"點陣圖2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1F8ECAA8B41D704695F9CBB042B824FB'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;