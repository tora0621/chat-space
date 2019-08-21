$(function(){
  function buildHTML(message){
var imagehtml = message.image == null ? "" : `<img src="${message.image}" class="message-text__image">`
var html = `<div class=message>
                <div class="message-upper">
                  <div class="message-upper__name">
                  ${message.user_name}
                  </div>
                  <div class="message-upper__date">
                  ${message.created_at}
                  </div>
                </div>
                <div class="message-text">
                  <p class="message-text__content">
                  ${message.content}
                  </p>
                  ${imagehtml}
                </div>
              </div> `
return html;
}


  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href
    $.ajax({
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      $('.form__submit').prop( "disabled", false );
      $('#new_message').get(0).reset();
    })
    .fail(function(){
      $('.form__submit').prop( "disabled", false );
      alert('error');
    })
  })
});