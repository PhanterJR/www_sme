from org.transcrypt.stubs.browser import __pragma__
import phanterpwa.frontend.helpers as helpers
import phanterpwa.frontend.components.left_bar as left_bar

__pragma__('alias', "jQuery", "$")
__pragma__('skip')
jQuery = sessionStorage = JSON = M = js_undefined = window =\
    __new__ = FormData = console = localStorage = document = this = CodeMirror = 0
__pragma__('noskip')

__pragma__('kwargs')

XML = helpers.XML

class ServidorSME():
    def __init__(self, on_success=None, on_error=None, especifico=None):
        window.ServidorSME = self
        self.on_error = on_error
        self.on_success = on_success
        self.especifico = especifico
        self.reload()

    def _servidor_sme(self):
        if self.especifico is None or self.especifico is js_undefined:
            window.PhanterPWA.GET(
                "api", "area-do-servidor",
                onComplete=self._on_complete
            )
        else:
            window.PhanterPWA.GET(
                "api", "area-do-servidor", self.especifico,
                onComplete=self._on_complete
            )

    def _on_complete(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            self.set_servidor_sme(json.servidor_sme)
            
            if callable(self.on_success):
                self.on_success(json)
            # self.Funcionario = Funcionario(self, json)
        else:
            if data.status == 403:
                window.location = "#_phanterpwa:/identificar-servidor"

    def reload(self):
        self._servidor_sme()

    @staticmethod
    def get_servidor_sme():
        servidor_sme = sessionStorage.getItem("servidor_sme")
        if servidor_sme is None or servidor_sme is js_undefined:
            return None
        else:
            servidor_sme =  JSON.parse(servidor_sme)
            return servidor_sme

    @staticmethod
    def get_left_bar_buttons():
        json = ServidorSME.get_servidor_sme()
        if json is not None:
            if json.opcoes.funcionario is not js_undefined:
                gates = [
                    'home',
                    'admin',
                    'profile',
                    'two_factor',
                    'lock',
                    'area-do-servidor',
                    'professores'
                ]
                for x in list(json.opcoes.funcionario):
                    BackButton1 = left_bar.LeftBarButton(
                        "menu_{0}".format(x[0][0]),
                        x[1]["_title"],
                        XML(x[0][1]),
                        **{
                            "tag": "a",
                            "_href": x[1]["_href"],
                            "_title": x[1]["_title"],
                            "position": "bottom",
                            "show_if": lambda: True if window.PhanterPWA.get_current_gate() not in gates else False
                        }
                    )
                    window.PhanterPWA.Components['left_bar'].add_button(BackButton1)
            if json.opcoes.master_sme is not js_undefined and json.opcoes.master_sme is not None:
                gates = [
                    'home',
                    'admin',
                    'profile',
                    'two_factor',
                    'lock',
                    'area-do-servidor',
                    'professores'
                ]
                for x in list(json.opcoes.master_sme):
                    BackButton1 = left_bar.LeftBarButton(
                        "menu_{0}".format(x[0][0]),
                        x[1]["_title"],
                        XML(x[0][1]),
                        **{
                            "tag": "a",
                            "_href": x[1]["_href"],
                            "_title": x[1]["_title"],
                            "position": "bottom",
                            "show_if": lambda: True if window.PhanterPWA.get_current_gate() not in gates else False
                        }
                    )
                    window.PhanterPWA.Components['left_bar'].add_button(BackButton1)
            elif json.opcoes.master_escola is not js_undefined:
                gates = [
                    'home',
                    'admin',
                    'profile',
                    'two_factor',
                    'lock',
                    'area-do-servidor',
                    'professores'
                ]
                for x in list(json.opcoes.master_escola):
                    BackButton1 = left_bar.LeftBarButton(
                        "menu_{0}".format(x[0][0]),
                        x[1]["_title"],
                        XML(x[0][1]),
                        **{
                            "tag": "a",
                            "_href": x[1]["_href"],
                            "_title": x[1]["_title"],
                            "position": "bottom",
                            "show_if": lambda: True if window.PhanterPWA.get_current_gate() not in gates else False
                        }
                    )
                    window.PhanterPWA.Components['left_bar'].add_button(BackButton1)
            if json.opcoes.professor is not js_undefined and json.opcoes.professor is not None:
                gates = [
                    'home',
                    'admin',
                    'profile',
                    'two_factor',
                    'lock',
                    'area-do-servidor'
                ]
                for x in list(json.opcoes.professor):
                    BackButton1 = left_bar.LeftBarButton(
                        "menu_{0}".format(x[0][0]),
                        x[1]["_title"],
                        XML(x[0][1]),
                        **{
                            "tag": "a",
                            "_href": x[1]["_href"],
                            "_title": x[1]["_title"],
                            "position": "bottom",
                            "show_if": lambda: True if window.PhanterPWA.get_current_gate() not in gates else False
                        }
                    )
                    window.PhanterPWA.Components['left_bar'].add_button(BackButton1)

    def get_ano_letivo(self):
        servidor_sme = self.get_servidor_sme()
        if servidor_sme is not None:
            ano_letivo = servidor_sme.ano_letivo
            if ano_letivo is js_undefined:
                return None
            return ano_letivo
        return None

    def get_anos_letivos(self):
        servidor_sme = self.get_servidor_sme()
        if servidor_sme is not None:
            anos_letivos = list(servidor_sme.anos_letivos)
            return anos_letivos
        return list()

    def get_escola(self):
        escolas = self.get_escolas()
        if isinstance(escolas, list) and len(escolas) == 1:
            return escolas[0]
        servidor_sme = self.get_servidor_sme()
        if servidor_sme is not None:
            escola = servidor_sme.escola
            if escola is js_undefined or escola is None:
                return None
            return escola
        return None

    def get_total_escolas(self):
        servidor_sme = self.get_servidor_sme()
        if servidor_sme is not None:
            total_escolas = servidor_sme.total_escolas
            return total_escolas
        return 0

    def get_escolas(self):
        servidor_sme = self.get_servidor_sme()
        if servidor_sme is not None:
            escolas = list(servidor_sme.escolas)
            return escolas
        return list()

    def set_servidor_sme(self, value):
        if value is not None and value is not js_undefined:
            sessionStorage.setItem(
                "servidor_sme", JSON.stringify(value))

    def set_escola(self, value):
        escolas = self.get_escolas()
        servidor_sme = self.get_servidor_sme()
        if escolas is not None:
            escolha = None
            for x in escolas:
                if int(value) == x.id:
                    escolha = x
        if escolha is not None and servidor_sme is not None:
            servidor_sme.escola = escolha
            self.set_servidor_sme(servidor_sme)

    def set_ano_letivo(self, value):
        anos_letivos = self.get_anos_letivos()
        servidor_sme = self.get_servidor_sme()
        if anos_letivos is not None:
            escolha = None
            for x in anos_letivos:
                if int(value) == x.ano:
                    escolha = x.ano
        if escolha is not None and servidor_sme is not None:
            servidor_sme.ano_letivo = escolha
            self.set_servidor_sme(servidor_sme)


__pragma__('nokwargs')