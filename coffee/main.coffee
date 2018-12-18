activePage = null

$('.preloader').removeClass 'hidden'

do ->
	addActive = ->
		if activePage
			activePage.removeClass 'active'
			$(activePage.attr('href')).addClass 'hidden'
		activePage = $(this)
		activePage.addClass 'active'
		$(activePage.attr('href')).removeClass 'hidden'
		$(document).prop 'title', activePage.text() + $(document.body).attr 'data-title'

	hash = window.location.hash || $(document.body).attr 'data-default-page'
	$('.js-buttom-page').each ->
		button = $(this)
		button.click addActive
		if hash == button.attr 'href'
			activePage = button
			addActive.call button

$(document).ready ->
	setTimeout (->
		$('.preloader').addClass 'done'
		$('.js-loader').removeClass 'hidden'
	), 1000