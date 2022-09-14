package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import db.DBConnectionMgr;

public class AdminDAO {
private DBConnectionMgr pool = null;
	
	private Connection con = null;
	private PreparedStatement pstmt = null;
	private ResultSet rs = null;
	private String sql = "";
	
	public AdminDAO() {
		try {
			pool = DBConnectionMgr.getInstance();
		} catch(Exception e) {
			System.out.println("DB 접속 오류");
			e.printStackTrace();
		}
	}
	
	public boolean login(String id, String password) {
		boolean result = false;
		
		sql = "select id from admin where id = ? and password = ?";
		
		try {
			con = pool.getConnection();
			pstmt = con.prepareStatement(sql);

			pstmt.setString(1, id);
			pstmt.setString(2, password);
			
			rs = pstmt.executeQuery();
			
			result = rs.next();
		} catch (Exception e) {
			System.out.println("Admin Login Method Error : ");
			e.printStackTrace();
		} finally { pool.freeConnection(con, pstmt, rs); }
		
		return result;
	}
}