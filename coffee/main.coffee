$('.preloader').removeClass 'hidden'

load = ->
	addActive = ->
		$('.js-buttom-page').each ->
			button = $(this)
			button.removeClass 'active'
			$(button.attr 'href').addClass 'hidden'
		#
		$this = $(this)
		$this.addClass 'active'
		$($this.attr('href')).removeClass 'hidden'
		$(document).prop 'title', $this.text() + $(document.body).attr 'data-title'

	do stateChange = ->
		hash = window.location.hash || $(document.body).attr 'data-default-page'
		jump = false
		$('.js-buttom-page').each ->
			button = $(this)
			button.click addActive
			if hash == button.attr 'href'
				addActive.call button
				jump = true
		if not jump
			elem = $ hash
			container = elem.closest '.container'
			id = '#' + container.attr 'id'
			$('.js-buttom-page').each ->
				button = $(this)
				if id == button.attr 'href'
					addActive.call button
			top = elem.offset().top
			$('body,html').animate scrollTop: top, 1000

	$(window).on 'popstate', stateChange

	# fixed menu
	elem = $ '.main-menu'
	head_height = elem.offset().top
	head_mrg = 0
	$(window).scroll ->
		top = $(this).scrollTop()
		if top < head_height
			elem.removeClass 'fixed'
		else
			elem.addClass 'fixed'


$(document).ready ->
	setTimeout (->
		$('.preloader').addClass 'done'
		$('.js-loader').removeClass 'hidden'
		do load
	), 1000