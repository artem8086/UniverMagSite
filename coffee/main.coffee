$('.preloader').removeClass 'hidden'

load = ->
	do stateChange = ->
		hash = window.location.hash || $(document.body).attr 'data-default-page'
		jump = false
		$('.js-buttom-page').each ->
			button = $(this)
			elem = $ button.attr 'href'
			if hash == button.attr 'href'
				button.addClass 'active'
				elem.removeClass 'hidden'
				$(document).prop 'title', button.text() + $(document.body).attr 'data-title'
				jump = true
			else
				button.removeClass 'active'
				elem.addClass 'hidden'
		#
		if not jump
			elem = $ hash
			container = elem.closest '.container'
			id = '#' + container.attr 'id'
			$('.js-buttom-page').each ->
				button = $(this)
				if id == button.attr 'href'
					button.addClass 'active'
					container.removeClass 'hidden'
					$(document).prop 'title', button.text() + $(document.body).attr 'data-title'
			top = elem.offset().top
			$('body,html').animate scrollTop: top, 1000

	$window = $ window
	$window.on 'popstate', stateChange

	# fixed menu
	main_menu = $ '.main-menu'
	head_height = main_menu.offset().top
	onScroll = ->
		top = $window.scrollTop()
		if top < head_height
			main_menu.removeClass 'fixed'
		else
			main_menu.addClass 'fixed'

	do onResize = ->
		head_height = main_menu.offset().top
		if $window.width() <= 768
			$window.unbind 'scroll', onScroll
			main_menu.removeClass 'fixed'
		else
			$window.scroll onScroll
			do onScroll

	$window.resize onResize

	nav_menu = $ '.nav-menu'
	closeMenu = ->
		$('body, html').removeClass 'overlay'
		nav_menu.removeClass 'active'

	$('.nav-link').click closeMenu

	$('.nav-button').click ->
		if nav_menu.hasClass 'active'
			do closeMenu
		else
			nav_menu.addClass 'active'
			$('body, html').addClass 'overlay'

$(document).ready ->
	setTimeout (->
		$('.preloader').addClass 'done'
		$('.js-loader').removeClass 'hidden'
		do load
	), 1000