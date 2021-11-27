# Created automatically.
#
# In development it may be necessary to add static data
# to the client side application after compiling, use
# the CONFIGJS section of the application's app.ini
# file for this.
#

CONFIG = {
    "PROJECT": {
        "name": "SME",
        "title": "Secretaria Municipal de Educa\u00e7\u00e3o - F\u00e1tima/BA",
        "version": "0.6.0",
        "compilation": 171,
        "versioning": "0.6.0.171",
        "debug": False,
        "author": "PhanterJR<phanterjr@conexaodidata.com.br>"
    },
    "APP": {
        "build_folder": "/var/www/tornado/SME/frontapps/secretaria/www",
        "title": "PhanterPWA_Scaffold_App",
        "transcrypt_main_file": "application",
        "styles_main_file": "application",
        "timeout_to_resign": 600,
        "websocket_address": "wss://sme.conexaodidata.com.br/api/websocket",
        "http_address": "https://sme.conexaodidata.com.br",
        "name": "secretaria"
    },
    "I18N": {
        "default_lang": "pt-BR",
        "pt-BR": {
            " de ": " de ",
            " of ": " de ",
            "Active sessions": "Sess\u00f5es ativas",
            "Administrador Master Escola": "Administrador Master Escola",
            "Administrador Master SME": "Administrador Master SME",
            "April": "Abril",
            "August": "Agosto",
            "Change Password": "Alterar senha",
            "Current Password": "Senha atual",
            "Confirmation code": "C\u00f3digo de confirma\u00e7\u00e3o",
            "December": "Dezembro",
            "E-Mail": "E-Mail",
            "E-mail": "E-mail",
            "Empty": "Vazio",
            "Examples": "Exemplos",
            "February": "Fevereiro",
            "First Name": "Nome",
            "Fri": "Sex",
            "Friday": "Sexta",
            "Full-Stack Progressive Web Applications framework written and programmable with Python.": "Full-Stack Progressive Web Applications framework written and programmable with Python.",
            "Funcion\u00e1rio": "Funcion\u00e1rio",
            "January": "Janeiro",
            "July": "Julho",
            "June": "Junho",
            "Last Name": "Sobrenome",
            "Login": "Login",
            "March": "Mar\u00e7o",
            "May": "Maio",
            "Mon": "Seg",
            "Monday": "Segunda",
            "Multiple logins": "M\u00faltiplos logins",
            "New password": "Nova senha",
            "November": "Novembro",
            "October": "Outubro",
            "Page ": "P\u00e1gina ",
            "Password": "Senha",
            "Password Repeat": "Repetir Senha",
            "Repeat Password": "Repetir Senha",
            "START": "INICIAR",
            "Sat": "Sab",
            "Saturday": "S\u00e1bado",
            "September": "Setembro",
            "Submit": "Enviar",
            "Sun": "Dom",
            "Sunday": "Segunda",
            "The form has errors!": "O formul\u00e1rio cont\u00e9m erros!",
            "Thu": "Qui",
            "Thursday": "Quinta",
            "Tue": "Ter",
            "Tuesday": "Ter\u00e7a",
            "Two-step authentication": "Autentica\u00e7\u00e3o em duas etapas",
            "User": "Usu\u00e1rio",
            "Wed": "Qua",
            "Wednesday": "Quarta",
            "root": "root",
            "user": "usu\u00e1rio"
        }
    },
    "SOCIAL_LOGINS": {
        "google": {
            "remote_address": "https://www.googleapis.com/oauth2/v3/userinfo",
            "client_id": "859546536927-3bjq0gmurkd6n1s0ifcokh86gruguuqo.apps.googleusercontent.com"
        }
    },
    "SMS": {
        "prefix": 55,
        "mask": "+## (##) # ####-####"
    }
}
