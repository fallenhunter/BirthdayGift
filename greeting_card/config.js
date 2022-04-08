var config = {
	/** document title */
	documentTitle : "Greeting Card",
	/** stage width */
	stageW : 800,
	/** stage height */
	stageH : 480,
	/** the number of grid columns */ 
	col : 40,
	/** the number of grid rows */ 
	row : 24,
	/** the number of particles to emit at a time */
	emitterNum : 10,

	/** preface */
	preface : [
		"一直敲击屏幕哦~",
	],
	prefaceFontSize : 20,

	/** particles' colors */
	colorList : [
		"#990000",
		"#FF0000",
		"#CC3300",
		"#CC6600",
		"#CC0033",
		"#FFFF00",
		"#33FF00",
		"#33CC00",
		"#0066FF",
		"#00FF99",
		"#770099"
	],

	/** matrix of the pattern */
	// Happy Chinese Valentine's Day
	matrix : [[false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false],[false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false],[false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false],[true,false,false,false,false,false,true,false,true,false,false,false,false,false,false,false,false,false,false,false,true,false,false,true,false,false,false,false,true,true,true,true,false,false,false,false,false,false,false,true],[true,false,false,false,false,false,true,false,true,false,false,false,false,true,true,true,true,false,false,false,true,false,true,true,true,false,false,false,false,false,true,false,false,false,false,false,false,false,false,true],[true,false,false,false,false,false,true,true,true,true,true,false,false,true,false,false,true,false,false,false,true,false,false,true,true,false,false,false,true,false,true,false,false,false,false,false,false,false,false,true],[true,false,false,false,false,true,false,false,true,false,false,false,false,true,false,false,true,false,false,true,true,true,true,true,true,true,false,false,true,true,true,true,true,false,false,false,false,false,false,true],[true,false,false,false,false,false,false,true,true,true,false,false,false,true,true,true,true,false,false,false,true,true,false,true,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,true],[true,false,false,false,false,false,false,false,true,false,false,false,false,true,false,false,true,false,false,false,true,false,false,true,true,false,false,false,true,false,true,false,true,false,false,false,false,false,false,true],[true,false,false,false,false,false,true,true,true,true,true,false,false,true,true,true,true,false,false,false,true,false,true,true,false,true,false,false,false,true,true,false,false,false,false,false,false,false,false,true],[true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true],[true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true],[true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true],[true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true],[true,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,true],[true,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,true,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true],[true,false,false,false,false,false,false,false,false,false,false,false,true,false,true,false,false,false,false,false,false,false,true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true],[true,false,false,false,false,false,false,false,false,false,false,true,false,false,true,false,true,false,false,false,false,false,false,true,false,false,false,false,false,false,true,false,false,false,true,false,false,false,false,true],[true,false,false,false,false,false,false,false,false,false,false,false,true,false,true,false,false,true,false,false,false,true,true,true,true,true,false,false,false,true,false,true,false,true,false,false,false,false,false,true],[true,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,true],[true,false,false,false,false,false,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true],[false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false],[false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false],[false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false]]
	
	/** more matrices */
	// Happ New Year
	// matrix : [[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,true,false,false,false,true,false,false,false,false,false,true,false,false,false,false,false,true,true,true,true,true,false,true,true,true,true,true,false,true,true,false,false,false,true,false,false,false,false],[false,false,true,false,false,false,true,false,false,false,false,true,false,true,false,false,false,false,true,false,false,false,true,false,true,false,false,false,true,false,false,true,false,false,false,true,false,false,false,false],[false,false,true,false,false,false,true,false,false,false,true,false,false,false,true,false,false,false,true,false,false,false,true,false,true,false,false,false,true,false,false,true,false,false,false,true,false,false,false,false],[false,false,true,true,true,true,true,false,false,false,true,false,false,false,true,false,false,false,true,false,false,false,true,false,true,false,false,false,true,false,false,true,false,false,false,true,false,false,false,false],[false,false,true,false,false,false,true,false,false,true,true,true,true,true,true,true,false,false,true,true,true,true,true,false,true,true,true,true,true,false,false,true,true,true,true,true,false,false,false,false],[false,false,true,false,false,false,true,false,false,true,false,false,false,false,false,true,false,false,true,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false],[false,false,true,false,false,false,true,false,true,true,false,false,false,false,false,true,true,false,true,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,true,false,false,false,false,false,false,true,false,false,false,true,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,true,false,false,false,false,false,false,true,true,true,true,true,false,false,false,false],[false,false,false,false,true,false,false,false,false,true,false,true,true,true,true,false,true,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,true,false,true,false,false,false,true,false,true,false,false,false,false,true,false,false,false,false,false,true,false,false,false,false,false,true,true,true,true,false,false,false,false,false,false,false,false],[false,false,false,true,false,true,false,false,true,false,false,true,true,true,true,false,false,true,false,true,false,true,false,false,false,false,false,false,true,true,true,true,false,false,false,false,false,false,false,false],[false,false,true,false,false,false,true,false,true,false,false,true,false,false,false,false,false,true,false,true,false,true,false,false,false,false,false,false,true,true,true,true,false,false,false,false,false,false,false,false],[false,false,true,false,false,false,false,true,false,false,false,true,true,true,true,false,false,false,true,false,true,false,false,false,false,false,false,false,true,true,true,true,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,true,true,false,false,false,false,false,false,false,false],[false,false,true,false,false,true,false,true,true,true,true,false,false,false,false,true,false,false,false,false,true,true,true,true,false,false,false,false,true,true,true,true,false,false,false,false,false,false,false,false],[false,false,true,false,false,true,false,true,false,false,false,false,false,false,true,false,true,false,false,false,true,false,false,true,false,false,false,false,true,true,true,true,false,false,false,false,false,false,false,false],[false,false,true,true,true,true,false,true,true,true,true,false,false,true,false,false,false,true,false,false,true,true,true,true,false,false,false,false,false,true,true,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,true,false,true,false,false,false,false,false,true,true,true,true,true,false,false,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,true,true,true,true,false,true,true,true,true,false,true,true,false,false,false,true,true,false,true,false,true,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,true,true,false,false,false,false,false,true,true,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]]

	// Batman
	// matrix : [[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,true,false,false,false,true,false,false,false,true,false,false,false,false,false,false],[false,true,true,true,true,true,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,true,false,false,false,true,false,false,false,true,false,false,false,false,false,false],[false,true,false,true,false,true,false,false,false,false,false,false,false,true,true,true,false,false,false,false,false,false,false,true,true,true,false,false,false,true,true,true,true,true,false,false,false,false,false,false],[false,true,false,true,false,true,false,false,false,false,false,false,false,true,false,true,false,false,false,false,false,false,false,true,false,true,false,false,false,true,true,true,true,true,true,false,false,false,false,false],[false,true,false,true,false,true,false,false,false,false,false,false,false,true,false,false,true,true,true,true,true,true,true,false,false,true,false,false,false,true,false,false,false,false,true,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,true,false,false,false,false,true,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,true,true,false,false,false,true,true,false,false,true,false,false,false,true,false,false,false,false,true,false,false,false,false,false],[false,true,true,true,true,false,false,false,false,false,false,false,false,true,false,false,true,true,false,false,false,true,true,false,false,true,false,false,false,true,true,true,true,true,true,false,false,false,false,false],[false,true,false,false,true,false,false,false,false,false,false,false,false,true,true,true,false,false,false,false,false,false,false,true,true,true,false,false,false,false,false,false,false,false,false,false,false,true,false,false],[false,true,false,false,true,false,false,false,false,false,false,false,false,true,false,false,true,true,false,false,false,true,true,false,false,true,false,false,false,true,true,true,true,false,false,false,false,true,false,false],[false,true,true,true,true,true,false,false,false,false,false,false,false,true,false,false,false,false,true,true,true,false,false,false,false,true,false,false,false,true,false,false,true,false,false,true,true,true,true,true],[false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,true,false,false,true,false,false,false,false,true,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,true,false,false,false,false,true,true,true,true,true,false,false,false,true,true,true],[false,true,false,false,false,false,false,false,false,false,false,false,false,false,true,true,false,false,true,true,true,false,false,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,true,true,true,true,true,false,false,false,false,false,false,false,false,true,false,true,false,false,false,false,false,true,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,true,false,false,false,true,false,false,false,false,false,false,false,false,true,false,false,true,true,true,true,true,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,true,false,false,false,true,false,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false],[false,true,false,false,false,true,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false],[false,true,false,false,false,true,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,true,false,false,false,true,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,true,true,true,true,true,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false]]

	// Bulb & Rocket & Airplane
	// matrix : [[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,true,false,false,false,true,false,false,false,true,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,true,false,false,true,false,false,true,false,false,false,true,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,true,false,true,false,true,false,false,false,true,false,false,false,false,true,true,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,true,true,true,true,true,true,true,true,false,false,true,false,false,false,true,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,true,true,false,false,true,true,false,false,false,true,false,false,true,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,true,false,false,true,false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,true,false,false,true,false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,true,false,false,true,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,true,false,true,false,false,false,false,false],[false,true,true,true,false,false,false,false,true,true,true,false,false,false,true,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false,true,false,false,false,false],[false,false,true,false,false,false,false,false,false,true,false,false,false,false,false,true,false,false,false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,false,true,false,false,false],[false,false,false,true,false,false,false,false,true,false,false,false,false,false,false,true,false,false,false,false,false,false,true,false,false,false,false,false,false,false,true,false,true,true,true,false,true,false,false,false],[false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false,true,false,false,false,false,false,false,false,true,false,true,false,true,false,true,false,false,false],[false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,false,true,false,false,false,false,true,false,false,false,false,false,false,false,false,true,false,true,true,true,false,true,false,false,false],[false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,false,false,true,true,true,true,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,true,false,false,false],[false,false,false,false,false,true,true,false,false,false,false,false,false,false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,true,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,true,true,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,true,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,true,true,true,false,true,true,true,false,true,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,true,false,false,true,false,false,false,false,false,false,true,false,true,false,true,false,true,false,true,false,true,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,true,false,false,false,true,false,false,false,false,false,true,true,false,false,true,true,true,false,false,true,true,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,true,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]]

	// Happy Birthday
	// matrix : [[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,true,false,true,false,true,false,true,false,true,false,false,false,true,true,true,true,true,true,false,false,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,true,false,true,false,true,false,true,false,true,false,false,true,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,true,true,true,true,false,false,false],[false,false,true,false,false,false,true,false,false,false,true,false,false,true,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,true,false,false],[false,false,true,false,false,false,true,false,false,false,true,false,false,true,true,true,true,true,true,false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,true,false,false,false,true,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,true,false,false,false,false,true,false,false,false,false,false,false,false,true,false,true,false,false,false,false,true,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,true,false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false,true,false],[false,false,false,false,false,false,true,true,false,false,false,false,false,true,true,true,true,true,true,false,false,false,false,true,false,false,false,false,false,false,false,false,true,false,false,false,false,true,false,false],[false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,true,true,false,false,false,false,false,true,true,false,false,false,false,false,false,false,false,false,true,false,false,true,false,false,false],[false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,true,true,false,false,false,false,false,true,true,false,false,false,false,false,false,false,false,false,false,true,true,false,false,false,false],[false,false,true,true,true,true,true,false,false,false,false,false,false,false,false,true,true,false,false,false,false,false,true,true,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false],[false,true,true,true,true,true,false,true,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,true,false,false,false,false],[false,true,true,true,false,false,false,true,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,true,false,false,false],[false,true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,true,false,false,false],[false,false,true,true,true,true,true,false,false,true,false,true,true,true,false,true,true,false,false,true,true,false,false,true,true,false,true,true,true,false,false,false,false,false,false,true,false,false,false,false],[false,false,false,true,true,true,false,false,false,true,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,true,false,false,false,false,false],[false,false,false,true,false,false,false,false,false,true,false,true,false,false,true,false,true,false,true,false,true,false,true,false,true,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,true,true,false,true,false,true,true,false,true,false,false,false,true,false,true,false,true,false,true,false,true,false,true,false,false,true,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,true,false,false,true,false,false,true,true,true,false],[false,false,false,true,true,true,true,true,true,true,false,true,false,true,false,false,true,false,true,false,true,false,true,false,true,false,true,false,true,false,true,false,false,true,false,false,true,false,true,false],[false,false,false,true,true,true,true,true,true,true,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,true,true,true,true,false,false,true,true,true,true],[false,false,false,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,true,false,false,true,false,false,true,false,false,true],[false,false,false,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,true,true,false,true,true,true,true],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]]

};