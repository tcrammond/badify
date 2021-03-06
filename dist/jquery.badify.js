/*
 *  jQuery Badify - v0.0.1
 *  A plugin to [Ba]dify your content.
 *  
 *
 *  Copyright Tyler Crammond 2014
 *  Under MIT License
 */

;(function($, window, document, undefined) {
	// the semi-colon before function invocation is a safety net against concatenated
	// scripts and/or other plugins which may not be closed properly.

	// undefined is used here as the undefined global variable in ECMAScript 3 is
	// mutable (ie. it can be changed by someone else). undefined isn't really being
	// passed in so we can ensure the value of it is truly undefined. In ES5, undefined
	// can no longer be modified.

	// window and document are passed through as local variable rather than global
	// as this (slightly) quickens the resolution process and can be more efficiently
	// minified (especially when both are regularly referenced in your plugin).

	var thePlugin,
		pluginName = "badify",
		defaults = {

		},
	elements = [
		{id: "1", symbol: "H", name: "Hydrogen"},
		{id: "2", symbol: "He", name: "Helium"},
		{id: "3", symbol: "Li", name: "Lithium"},
		{id: "4", symbol: "Be", name: "Beryllium"},
		{id: "5", symbol: "B", name: "Boron"},
		{id: "6", symbol: "C", name: "Carbon"},
		{id: "7", symbol: "N", name: "Nitrogen"},
		{id: "8", symbol: "O", name: "Oxygen"},
		{id: "9", symbol: "F", name: "Fluorine"},
		{id: "10", symbol: "Ne", name: "Neon"},
		{id: "11", symbol: "Na", name: "Sodium"},
		{id: "12", symbol: "Mg", name: "Magnesium"},
		{id: "13", symbol: "Al", name: "Aluminum,Aluminium"},
		{id: "14", symbol: "Si", name: "Silicon"},
		{id: "15", symbol: "P", name: "Phosphorus"},
		{id: "16", symbol: "S", name: "Sulfur"},
		{id: "17", symbol: "Cl", name: "Chlorine"},
		{id: "18", symbol: "Ar", name: "Argon"},
		{id: "19", symbol: "K", name: "Potassium"},
		{id: "20", symbol: "Ca", name: "Calcium"},
		{id: "21", symbol: "Sc", name: "Scandium"},
		{id: "22", symbol: "Ti", name: "Titanium"},
		{id: "23", symbol: "V", name: "Vanadium"},
		{id: "24", symbol: "Cr", name: "Chromium"},
		{id: "25", symbol: "Mn", name: "Manganese"},
		{id: "26", symbol: "Fe", name: "Iron"},
		{id: "27", symbol: "Co", name: "Cobalt"},
		{id: "28", symbol: "Ni", name: "Nickel"},
		{id: "29", symbol: "Cu", name: "Copper"},
		{id: "30", symbol: "Zn", name: "Zinc"},
		{id: "31", symbol: "Ga", name: "Gallium"},
		{id: "32", symbol: "Ge", name: "Germanium"},
		{id: "33", symbol: "As", name: "Arsenic"},
		{id: "34", symbol: "Se", name: "Selenium"},
		{id: "35", symbol: "Br", name: "Bromine"},
		{id: "36", symbol: "Kr", name: "Krypton"},
		{id: "37", symbol: "Rb", name: "Rubidium"},
		{id: "38", symbol: "Sr", name: "Strontium"},
		{id: "39", symbol: "Y", name: "Yttrium"},
		{id: "40", symbol: "Zr", name: "Zirconium"},
		{id: "41", symbol: "Nb", name: "Niobium"},
		{id: "42", symbol: "Mo", name: "Molybdenum"},
		{id: "43", symbol: "Tc", name: "Technetium"},
		{id: "44", symbol: "Ru", name: "Ruthenium"},
		{id: "45", symbol: "Rh", name: "Rhodium"},
		{id: "46", symbol: "Pd", name: "Palladium"},
		{id: "47", symbol: "Ag", name: "Silver"},
		{id: "48", symbol: "Cd", name: "Cadmium"},
		{id: "49", symbol: "In", name: "Indium"},
		{id: "50", symbol: "Sn", name: "Tin"},
		{id: "51", symbol: "Sb", name: "Antimony"},
		{id: "52", symbol: "Te", name: "Tellurium"},
		{id: "53", symbol: "I", name: "Iodine"},
		{id: "54", symbol: "Xe", name: "Xenon"},
		{id: "55", symbol: "Cs", name: "Cesium"},
		{id: "56", symbol: "Ba", name: "Barium"},
		{id: "57", symbol: "La", name: "Lanthanum"},
		{id: "58", symbol: "Ce", name: "Cerium"},
		{id: "59", symbol: "Pr", name: "Praseodymium"},
		{id: "60", symbol: "Nd", name: "Neodymium"},
		{id: "61", symbol: "Pm", name: "Promethium"},
		{id: "62", symbol: "Sm", name: "Samarium"},
		{id: "63", symbol: "Eu", name: "Europium"},
		{id: "64", symbol: "Gd", name: "Gadolinium"},
		{id: "65", symbol: "Tb", name: "Terbium"},
		{id: "66", symbol: "Dy", name: "Dysprosium"},
		{id: "67", symbol: "Ho", name: " Holmium"},
		{id: "68", symbol: "Er", name: "Erbium"},
		{id: "69", symbol: "Tm", name: "Thulium"},
		{id: "70", symbol: "Yb", name: "Ytterbium"},
		{id: "71", symbol: "Lu", name: "Lutetium"},
		{id: "72", symbol: "Hf", name: "Hafnium"},
		{id: "73", symbol: "Ta", name: "Tantalum"},
		{id: "74", symbol: "W", name: "Tungsten"},
		{id: "75", symbol: "Re", name: "Rhenium"},
		{id: "76", symbol: "Os", name: "Osmium"},
		{id: "77", symbol: "Ir", name: "Iridium"},
		{id: "78", symbol: "Pt", name: "Platinum"},
		{id: "79", symbol: "Au", name: "Gold"},
		{id: "80", symbol: "Hg", name: "Mercury"},
		{id: "81", symbol: "Tl", name: "Thallium"},
		{id: "82", symbol: "Pb", name: "Lead"},
		{id: "83", symbol: "Bi", name: "Bismuth"},
		{id: "84", symbol: "Po", name: "Polonium"},
		{id: "85", symbol: "At", name: "Astatine"},
		{id: "86", symbol: "Rn", name: "Radon"},
		{id: "87", symbol: "Fr", name: "Francium"},
		{id: "88", symbol: "Ra", name: "Radium"},
		{id: "89", symbol: "Ac", name: "Actinium"},
		{id: "90", symbol: "Th", name: "Thorium"},
		{id: "91", symbol: "Pa", name: "Protactinium"},
		{id: "92", symbol: "U", name: "Uranium"},
		{id: "93", symbol: "Np", name: "Neptunium"},
		{id: "94", symbol: "Pu", name: "Plutonium"},
		{id: "95", symbol: "Am", name: "Americium"},
		{id: "96", symbol: "Cm", name: "Curium"},
		{id: "97", symbol: "Bk", name: "Berkelium"},
		{id: "98", symbol: "Cf", name: " Californium"},
		{id: "99", symbol: "Es", name: "Einsteinium"},
		{id: "100", symbol: "Fm", name: "Fermium"},
		{id: "101", symbol: "Md", name: "Mendelevium"},
		{id: "102", symbol: "No", name: "Nobelium"},
		{id: "103", symbol: "Lr", name: "Lawrencium"},
		{id: "104", symbol: "Rf", name: "Rutherfordium"},
		{id: "105", symbol: "Db", name: "Dubnium"},
		{id: "106", symbol: "Sg", name: "Seaborgium"},
		{id: "107", symbol: "Bh", name: "Bohrium"},
		{id: "108", symbol: "Hs", name: "Hassium"},
		{id: "109", symbol: "Mt", name: "Meitnerium"},
		{id: "110", symbol: "Ds", name: "Darmstadtium"},
		{id: "111", symbol: "Rg", name: "Roentgenium"},
		{id: "112", symbol: "Cn", name: "Copernicium"},
		{id: "113", symbol: "Uut", name: "Ununtrium"},
		{id: "114", symbol: "Fl", name: "Flerovium"},
		{id: "115", symbol: "Uup", name: "Ununpentium"},
		{id: "116", symbol: "Lv", name: "Livermorium"},
		{id: "117", symbol: "Uus", name: "Ununseptium"},
		{id: "118", symbol: "Uuo", name: "Ununoctium"}
	];

	// The actual plugin constructor
	function Plugin(element, options) {
		this.element = element;

		this.options = $.extend({}, defaults, options);
		this.formFields = [];
		this._defaults = defaults;
		this._name = pluginName;
		this._elements = elements;
		this.init();
	}

	Plugin.prototype = {
		init: function() {
			$(this.element).trigger("badify.begin");

			var text = $(this.element).val(),
				userElements = [],
				symbol = {},
				i;

			//TODO: we only want to badify one element per word.

			for(i=0; i<this._elements.length; i++){

				// Let's not match single character elements.
				if(this._elements[i].symbol.length < 2) {
					continue;
				}

				// Does this element occur?
				symbol = this._elements[i].symbol,
				index = text.indexOf(symbol.toLowerCase());

				// Nope!
				if(index === -1) {
					continue;
				}

				// Yep!
				userElements.push(this._elements[i].name);
				text = this.badifyElement(text, symbol, index);
			}

			// use spans for highlighting the elements.
			text = text.replace(/\[/g, "<span>[").replace(/\]/g, "]</span>");

			// Output the badified text and the element names in designated location
			$(this.options.output).html("<h2>Badified: </h2>" + text + "<br><br><h2>Your elements:</h2>" + userElements.join("<br>"));

			$(this.element).trigger("badify.end");
		},

		badifyElement: function(text, symbol, index) {
			return text.slice(0, index) + "[" + symbol + "]" + text.slice(index + symbol.length, text.length);
		}
	};


	$.fn[pluginName] = function(options) {

		if(!options){
			console.error("badify: 'output' option is required.");
			return;
		}

		// Would normally prevent multiple instantiations of the plugin here, but as it's
		// just performing one task...
		return this.each(function() {
				thePlugin = $.data(this, "plugin_" + pluginName, new Plugin(this, options));
		});
	};

})(jQuery, window, document);