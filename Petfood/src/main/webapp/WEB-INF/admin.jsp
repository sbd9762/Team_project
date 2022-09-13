<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="shortcut icon" href="#">
		<title>Admin Login</title>
		<%@ include file="../common-css.jsp"%>
		<link rel="stylesheet" type="text/css" 
			href="${pageContext.request.contextPath}/css/admin.css">
	</head>
<body class="body">
	<div class="form-wrapper">
		<form class="admin-form" method="post" 
			action="${pageContext.request.contextPath}/adminLogin.do">
			<label>
				<span class="admin-label">아이디</span>
				<input type="text" class="admin-input" 
					name="admin_id" mexlength="13">
			</label><br/>
			<label>
				<span class="admin-label">비밀번호</span>
				<input type="password" class="admin-input" 
					name="admin_password" mexlength="20">
			</label>
			<div class="button-wrapper">
				<button type="submit" class="btn">로그인</button>
			</div>
		</form>
	</div>
</body>
</html>