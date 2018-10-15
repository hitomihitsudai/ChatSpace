$(document).on('turbolinks:load', function() {
$(function(){

  // 画面上の最新ID
  var latest_id = 0;

  function buildHTML(message){
    var MessageImage = ``
    if (message.image){
      MessageImage = `<img class="lower-message__image" src="${message.image}">`
    }
    var html = ` <div class= "message" "data-message-id"=${message.id}>
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

  function reload() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)) {
      $.ajax({
        url: location.href,
        type: "GET",
        dataType: 'json',
      })

      .done(function(new_messages){

        // 画面初期表示時のみ実行
        if (latest_id == 0) {
          latest_id = $('.message').last().data('messageId');
        }
        var chatHTML = '';
        new_messages.forEach(function(message){
          if (message.id > latest_id){
            chatHTML += buildHTML(message);
          $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, "first");

          // 画面上の最新IDを更新
          latest_id = message.id;
          }
        });
      $('.messages').append(chatHTML);
      })
      .fail(function(new_messages){
        alert('メッセージ取得に失敗しました');
      });
    }
    else {
      clearInterval(intarval);
    }
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href + ''
    $('.form__submit').removeAttr('data-disable-with');

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
      $('.messages').append(html);
      $('.form__message').val('');
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, "first");
      // 画面上の最新IDを更新
      latest_id = data.id;
    })
    .fail(function(){
      alert('非同期通信に失敗しました');
    });
  })

  var intarval = setInterval(function(){
    reload();
  }, 5000 );
  })
})