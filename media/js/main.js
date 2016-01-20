/**
 *
 * MAIN JAVASCRIPT MODULES: Sono i moduli principali.
 *
 * @author   Andrea Dell'Orco <ado@netnext.it>
 * @version  v 1.0
 */

//IUBENDA MAPPA CALL BACK (se presente)
if ( typeof _iub != "undefined")
	_iub.csConfiguration.callback = {
		onConsentGiven : function() {
			$(document).ready(function() {
				_iubendaCallback();
			});
		}
	};

var _iubendaCallback = function() {
	//qui vanno le funzioni abilitate dopo l'ok di ibenda, come mappe o altro.
};


//inizializzazione moduli
$(document).ready(function() {
	
	example_module.init();
	
});


/**
 * Modulo d'esempio
 * @author	Andrea Dell'Orco
 *
 */
var example_module = (function() {
	
	var privateVar;
	
	/**
	 * Inizializza il modulo
	 * @access	Public
	 */
	var init = function() {
		
		return;
	};
	
	return {
		init:init
	};

	
})();
