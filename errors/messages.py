login_incorreto ={
	"detail": "Usuário e/ou senha incorreto(s)"
}
unauthorized_token= {
	"detail": "Token is invalid or expired",
	"code": "token_not_valid"
}
forbbien_token_usercorp = {
	"detail": "Given token not valid for any token type",
	"code": "token_not_valid",
	"messages": [
		{
			"token_class": "AccessToken",
			"token_type": "access",
			"message": "Token is invalid or expired"
		}
	]
}
unauthorized_usercorp= {
	"detail": "You do not have permission to perform this action."
}

response_tree = {
    "detail": "You need to send revision and site parameters!"
}
bad_request_info = {
	"detail": "Site id is required!"
}
site_not_found_info = {
	"detail": "Site not found or no device linked in this site"
}
error_get_lubrificants = {
    "detail": "Authentication credentials were not provided."
}
