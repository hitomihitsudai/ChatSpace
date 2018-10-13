$(document).on('turbolinks:load', function() {
$(function(){
  function buildHTML(message){
    var MessageImage = ``
    if (message.image){
      MessageImage = `<img class="lower-message__image" src="${message.image}">`
    }
    var html = `<div class= message>
                  <div class= upper-message>
                    <div class= upper-message__user-name>
                      ${message.user_name}
                    </div>
                    <div class= upper-message__date>
                      ${message.created_at}
                    </div>
                  </div>
                  <div class= lower-message>
                    <div class= lower-message__content>
                      ${message.content}
                    </div>
                      ${MessageImage}
                  </div>
                </div>`
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href + ''

    $.ajax({
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
      timeout: 10000
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('.form__message').val('');
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, "first");
    })
    .fail(function(){
      alert('非同期通信に失敗しました');
      })
})
})
})