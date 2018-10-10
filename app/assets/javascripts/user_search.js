$(function(){
  function searchUser(user){

    var html = `<div class="chat-group-user clearfix">
					<p class="chat-group-user__name">${user.user_name}</p>
						<a class="user-search-add
						 chat-group-user__btn
						 chat-group-user__btn--add"
						 data-user-id= ${user.user_id}
						 data-user-name=${user.user_name}>追加</a>
				</div>`
    return (html);
  }

	$("#user-search-field").on("keyup", function() {
	    var input = $("#user-search-field").val();
	    var href = window.location.href + ''
	    $.ajax({
	      url: '/users',
	      type: "GET",
	      data: { keyword: input },
	      dataType: 'json',
	    })
		.done(function(users) {
			$('#user-search-result').empty();
				if (users.length !== 0) {
					users.forEach(function(user){
					searchUser(user);
					var html = searchUser(user);
					$('#user-search-result').append(html)
				});
			 }
	    })
	    .fail(function() {
    		alert('ユーザー検索に失敗しました');
    	})
})
})
$(function(){
  function appendUser(user_id, user_name){
    var html = `<div class='chat-group-user clearfix' id='chat-group-user-${user_id}'>
					<input name='group[user_ids][]' type='hidden' value= ${user_id}>
						<p class='chat-group-user__name'>${user_name}</p>
							<a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
				</div>`
    return (html);
  }


	$("#user-search-result").on("click",".chat-group-user__btn--add" ,function(){
		var user_id = $(this).attr("data-user-id");
		console.log(user_id)
		var user_name = $(this).attr("data-user-name");
		var html = appendUser(user_id, user_name);
		$('#chat-group-users').append(html)
	})
})
