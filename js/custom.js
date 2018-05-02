 // Activate animated progress bar
    $('.bs-docs-activate-animated-progressbar').on('click', function () {
      $(this).siblings('.progress').find('.progress-bar-striped').toggleClass('active')
    })

  $('#loading-example-btn').on('click', function () {
    var $btn = $(this).button('loading')
    // business logic...
    $btn.button('reset')
  })
  
  $('.slider').slider()

