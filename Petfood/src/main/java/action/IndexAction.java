package action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import dao.AdminDAO;

public class IndexAction implements CommandAction {

	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		// TODO Auto-generated method stub

		String admin_id = request.getParameter("admin_id");
		String admin_password = request.getParameter("admin_password");
		
		boolean isAdmin = new AdminDAO().login(admin_id, admin_password);
		
		if (isAdmin) {
			HttpSession session = request.getSession();
			session.setAttribute("id", admin_id);
			session.setAttribute("isLogin", isAdmin);
		}
		
		return "/index.jsp";
	}
}