// Countdown 

$(function () {
	var launchDay = new Date();
	launchDay = new Date(launchDay.getFullYear() + 0, 10 - 1, 04);
	$('#LaunchCountdown').countdown({until: launchDay});
	$('#year').text(launchDay.getFullYear());
});