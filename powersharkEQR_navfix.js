var page_url = window.document.location.pathname.replace(/%20/g, ' ');
$('a[href='+page_url+']').attr('id', 'current_page')

//var str = "'a [href=\""+current_page+"\"]'"

while ( $('div.jspHorizontalBar') )
{
var guys = [ $('.jspContainer'), $('jspPane'), $('#documentationNav')]
$.each( guys, function() { $(this).width( $(this).width()+5) });

}


var width = $('#documentationNav').data('jsp').getContentWidth();
$('#documentationNav').width(width)
.data('jsp').reinitialise();





/* ----
Fixing the width overflow problem within the nav tree sidebar 
 ---- */

// line 91
function setNavWidth() {
	var width = nav.data('jsp').getContentWidth()
	var containers = [ $('.jspContainer'), $('jspPane'), $('#documentationNav')]
	//$.each( containers, function() { $(this).width( $(this).width()+5) }); <---this is probably the solution
nav.width(width)
.data('jsp').reinitialise();


