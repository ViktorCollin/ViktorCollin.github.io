var countdown = {

	init: function(selector){
		var elem = document.querySelector(selector);
		countdown.endtime = Date.parse(elem.dataset.date);
		countdown.days = elem.querySelector('.days');
		countdown.hours = elem.querySelector('.hours');
		countdown.minutes = elem.querySelector('.minutes');
		countdown.seconds = elem.querySelector('.seconds');
		countdown.updateTimeRemaning();
		countdown.interval = setInterval(countdown.updateTimeRemaning, 500);
	},

	getTimeRemaining: function(){
		var t = countdown.endtime - Date.parse(new Date());
		var seconds = Math.floor( (t/1000) % 60 );
		var minutes = Math.floor( (t/1000/60) % 60 );
		var hours = Math.floor( (t/(1000*60*60)) % 24 );
		var days = Math.floor( t/(1000*60*60*24) );
		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	},

	updateTimeRemaning: function(){
		var t = countdown.getTimeRemaining();
		countdown.days.innerHTML    = (t.total < 0 ? '-' : '')+('00' + Math.abs(t.days)).slice(-3);
		countdown.hours.innerHTML   = ( '0' + Math.abs(t.hours)).slice(-2);
		countdown.minutes.innerHTML = ( '0' + Math.abs(t.minutes)).slice(-2);
		countdown.seconds.innerHTML = ( '0' + Math.abs(t.seconds)).slice(-2);
	}
};

(function(){
	countdown.init('.countdown');
})();