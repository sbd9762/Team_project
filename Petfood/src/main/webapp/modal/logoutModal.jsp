<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div class="modal fade logout-modal" tabindex="-1" role="dialog">
	<div class="modal-dialog small-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<h4 class="modal-title" id="myModalLabel">로그아웃</h4>
			</div>
			<div class="modal-body logout-body">
				<div class="logout-question">정말로 로그아웃 하시겠습니까?</div>
				<div class="button-area">
					<button class="btn btn-default logout-button">예</button>
					<button class="btn btn-default refuse-button" data-dismiss="modal">아니오</button>
				</div>
			</div>
		</div>
	</div>
</div>