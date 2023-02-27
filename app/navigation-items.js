/********************************************************/
/* Configuration of items that are used for navigation. */
/********************************************************/
/* lKey (Language Translation Key) is an unique identifier (defined in file "en.json").
 	The label shown to the user is defined by"lKey" or "text attribute.	
									
 	Each item MUST belong to a group defined in element array[0]. 				  				
 	Each item MUST contain "lKey" or "text" that will be used as a label (and used toidentify the icon).	     		   		
 	Each item MUST contain "path" (route when clicked), or "sub" (parent for a subgroup). 				
	Each item CAN define icon alias (see icons.js), as "icon" (after label) or "preIcon" (before label) 	  	 		
	Each item can defined a "width" as number of pixels, defining the min width of the item.
     		  		
 	Examples: 
 	["user", { lKey: "nav.register", path: "/register", preIcon: "$account" }]
 	["top-nav", { lKey: "nav.about", path: "/about" }]
	["top-nav", { lKey: "nav.about", icon: "$menu", sub: "more" }]
 	["more", { lKey: "more.contact", path: "/contact", width: "350" }]	
	["more", { lKey: "more.text1", text: "item #1", path: "/contact" }]
	["more", { lKey: "more.text2", text: "item #2", preIcon: "$user", sub: "dummy2" }] */

export default [
	["user", { lKey: "nav.admin", path: "/admin" }],
	["user", { lKey: "nav.signin", path: "/login", icon: "$user" }],
	["user", { lKey: "nav.lang", path: "/languages", icon: "$unfold" }],
	["user", { lKey: "nav.register", path: "/register", icon: "$user" }],

	["top-nav", { lKey: "nav.home", sub: "home" }],
	["top-nav", { lKey: "nav.about", path: "/about" }],
	["top-nav", { lKey: "nav.tests", sub: "tests" }],
	["top-nav", { lKey: "nav.more", sub: "more", icon: "$menu" }],

	["more", { lKey: "nav.locations", sub: "locations", width: "350" }],
	["more", { lKey: "nav.locations", text: "on map", sub: "xxx", width: "400" }],
	["more", { lKey: "nav.blog", sub: "dummy" }],
	["more", { lKey: "nav.contact", path: "/contact" }],

	["home", { lKey: "nav.home", text: "#1", path: "/" }],
	["home", { lKey: "nav.home", text: "#2", path: "/home-2" }],
	["home", { lKey: "nav.home", text: "#3", path: "/home-3" }],

	["locations", { text: "Stockholm", path: "/locations/stockholm" }],
	["locations", { text: "Paris", path: "/locations/paris" }],
	["locations", { text: "London", path: "/locations/london" }],

	["tests", { text: "Submenu", sub: "submenu", width: "350" }],
	["tests", { lKey: "test.layouts", path: "/test-layouts" }],
	["tests", { lKey: "test.boxes", path: "/test-boxes" }],
	["tests", { lKey: "test.typography", path: "/test-typography" }],
	["tests", { lKey: "test.components", path: "/test-components" }],
	["tests", { lKey: "test.vuetify", path: "/vuetify" }],

	["submenu", { text: "Text #1", path: "/dummy1", preIcon: "$user" }],
	["submenu", { lKey: "temp.text", text: "#2", icon: "$user", path: "/dummy1" }],
	["submenu", { lKey: "temp.text", text: "#3", icon: "$user", sub: "submenu2" }],

	["submenu2", { lKey: "temp.text", text: "A", path: "/contact" }],
	["submenu2", { lKey: "non.existing", sub: "non-existing" }],
	["submenu2", { lKey: "temp.text", text: "C", path: "/contact" }],
];
