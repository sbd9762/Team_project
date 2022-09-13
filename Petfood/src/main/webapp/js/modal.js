$('.register-modal').on('show.bs.modal', function () {
    setTimeout(() => $(".body").addClass('modal-open'), 400);
});

$('.login-modal').on('show.bs.modal', function () {
    setTimeout(() => $(".body").addClass('modal-open'), 400);
});

$('.logout-button').on('click', (e) => {
	$.post(ctx + '/logout.do', (data) => {
		alert(data);
		$('.modal').modal("hide");

		const $sidebar = $('.sidebar');

		$sidebar.addClass('hide-bar');

		setTimeout(() => {
			$.post(ctx + '/btn/loginButton.jsp', async (data) => {
				await new Promise((res) => {
					if ($('.login-btn').length < 1) {
						$('.logout-btn')[0].insertAdjacentHTML('afterend', data);
						res();
					} else {
						('.login-btn').css('display', '');
					}
				});

				$('.logout-btn').css('display', 'none');

				$sidebar.removeClass('hide-bar');
			});

			$.post(ctx + '/modal/loginModal.jsp', async (data) => {
				await new Promise((res) => {
					if ($('.login-modal').length < 1) {
						$('.logout-modal')[0].insertAdjacentHTML('afterend', data);
						res();
					}
				});
			})
		}, 300);
	});
});