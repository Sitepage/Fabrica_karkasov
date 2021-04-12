$(document).ready(function () {
  
//POPUP CONTACTS 
  let burg = $('#popup1,#popup2');
  let close = $('.btn-close');
  let over = $('.popup-contacts_overlay')
  let popup = $('.popup-contacts_wrap')

  burg.on('click', function () {
    popup.css({ right: '0' })
    over.show(300)

  })
  close.on('click', function () {
    popup.css({ right: '-700px' })
    over.hide(300)
  })
  $('body').on('click', '.popup-contacts_overlay', function (event) {
    event.preventDefault();
    over.hide(300);
    popup.css({ right: '-700px' })
    
    });
});
