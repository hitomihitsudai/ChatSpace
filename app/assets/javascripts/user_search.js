$(function(){
  function appendUser(user){

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
				appendUser(user);
			var html = appendUser(user);
			$('#user-search-result').append(html)
			$("#user-search-result").on("click","a",function(){
			})
			
			});
		 }
	    })







	    .fail(function() {
    		alert('ユーザー検索に失敗しました');
    	})
})
})