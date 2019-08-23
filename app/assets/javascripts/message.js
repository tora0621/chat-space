$(function(){
  function buildHTML(message){
    image = (message.image) ? `<img class= "message-text__image" src=${message.image} >` : "";
    var html = `<div class="message" data-message-id="${message.id}">
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
                    ${image}
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
  var reloadMessages = function(){
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      var last_message_id = $('.message:last').data("message-id");
      $.ajax({
        url: "api/messages",
        type: 'get',
        dataType: 'json',
        data: {last_id: last_message_id}
      })
      .done(function(messages){
        var insertHTML = '';
        messages.forEach(function(message){
          insertHTML = buildHTML(message);
          $('.messages').append(insertHTML);
        })
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      })
      .fail(function(){
        alert('error');
      });
    }
  };
  setInterval(reloadMessages, 5000);
});