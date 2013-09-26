/*
>>
>>LightCMS Calendar Fix Script
>>
Used to fix the empty the calendars in LightCMS
Here is a snippet that adds the class “calendarOtherMonthWeek” to rows that only contain days from other months.
To use within LightCMS, either add it to the head section of the page's template or stick it into the HTML head section in the advance page settings on any page you want to add a calendar to.
>>
>>
>>
*/

function calendarFix(){
	$('div.eventsCalendar td.calendarOtherMonthDay').parent().data('otherMonth',true);
	$('tr').filter(function() { return $(this).data('otherMonth') == true }).each(function() {
		if($(this).children('.calendarOtherMonthDay').length==7){$(this).addClass('calendarOtherMonthWeek')}	
	});
	$('div.eventsCalendar tr').removeData('otherMonth');
}

$(function(){ 
	calendarFix();
	$(document).on('click', 'td.calendarNextPrevious a', function(){setTimeout(calendarFix, 150)})
});