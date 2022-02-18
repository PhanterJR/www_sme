import phanterpwa.frontend.gatehandler as gatehandler
import phanterpwa.frontend.helpers as helpers
import phanterpwa.frontend.components.left_bar as left_bar
import phanterpwa.frontend.decorators as decorators
import handlers.views.funcionarios as funcionarios
import handlers.views.funcionario as funcionario

from org.transcrypt.stubs.browser import __pragma__

__pragma__('alias', "jQuery", "$")
__pragma__('skip')
jQuery = sessionStorage = JSON = M = js_undefined = Date = window =\
    this = __new__ = FormData = console = localStorage = QRCode = 0
__pragma__('noskip')

I = helpers.XmlConstructor.tagger("i")

__pragma__('kwargs')


class Index(gatehandler.Handler):
    @decorators.check_authorization(lambda: window.PhanterPWA.auth_user_has_role([
        "administrator",
        "root",
        "Administrador Master SME",
        "Administrador Master Escola",
        "Funcionário"
    ]))
    def initialize(self):
        arg0 = self.request.get_arg(0)
        arg1 = self.request.get_arg(1)
        if arg0 is not None:
            if arg0 == "meus-dados":
                self.Funcionario = funcionario.MeusDados(self)
                BackButton = left_bar.LeftBarButton(
                    "back_funcionario_meus_dados",
                    "Voltar",
                    I(_class="fas fa-arrow-circle-left"),
                    **{
                        "tag": "a",
                        "_href": window.PhanterPWA.XWAY("area-do-servidor"),
                        "position": "top",
                        "show_if": lambda: True if window.PhanterPWA.get_current_way() == "funcionarios/meus-dados" else False
                    }
                )
            else:
                self.Funcionario = funcionario.Funcionario(self, arg0, arg1)
                BackButton = left_bar.LeftBarButton(
                    "back_funcionario_edit",
                    "Voltar",
                    I(_class="fas fa-arrow-circle-left"),
                    **{
                        "tag": "a",
                        "_href": window.PhanterPWA.XWAY("funcionarios"),
                        "position": "top",
                        "show_if": lambda: True if window.PhanterPWA.get_current_way() == "funcionarios/{0}/editar".format(arg0) else False
                    }
                )
                BackButton = left_bar.LeftBarButton(
                    "back_funcionario_novo",
                    "Voltar",
                    I(_class="fas fa-arrow-circle-left"),
                    **{
                        "tag": "a",
                        "_href": window.PhanterPWA.XWAY("funcionarios"),
                        "position": "top",
                        "show_if": lambda: True if window.PhanterPWA.get_current_way() == "funcionarios/novo".format(arg0) else False
                    }
                )
        else:
            self.Funcionarios = funcionarios.Lista(self)
            BackButton = left_bar.LeftBarButton(
                "back_funcionario_lista_funcionarios",
                "Voltar",
                I(_class="fas fa-arrow-circle-left"),
                **{
                    "tag": "a",
                    "_href": window.PhanterPWA.XWAY("area-do-servidor"),
                    "position": "top",
                    "show_if": lambda: True if window.PhanterPWA.get_current_way() == "funcionarios" or window.PhanterPWA.get_current_way() == "funcionarios/" else False
                }
            )

        window.PhanterPWA.Components['left_bar'].add_button(BackButton)

__pragma__('nokwargs')
