import phanterpwa.frontend.gatehandler as gatehandler
import phanterpwa.frontend.decorators as decorators
import phanterpwa.frontend.helpers as helpers
import phanterpwa.frontend.components.left_bar as left_bar
import phanterpwa.frontend.preloaders as preloaders
import phanterpwa.frontend.components.widgets as widgets
import phanterpwa.frontend.forms as forms
import phanterpwa.frontend.components.snippets as snippets
import plugins.servidor_sme as servidor_sme
from org.transcrypt.stubs.browser import __pragma__

__pragma__('alias', "jQuery", "$")
__pragma__('skip')
jQuery = sessionStorage = JSON = M = js_undefined = window =\
    __new__ = FormData = console = sessionStorage = sessionStorage = document = this = 0
__pragma__('noskip')

DIV = helpers.XmlConstructor.tagger("div")
I = helpers.XmlConstructor.tagger("i")
H2 = helpers.XmlConstructor.tagger("h2")
FORM = helpers.XmlConstructor.tagger("form")
SPAN = helpers.XmlConstructor.tagger("span")
STRONG = helpers.XmlConstructor.tagger("strong")
IMG = helpers.XmlConstructor.tagger("img", True)
UL = helpers.XmlConstructor.tagger("ul")
LI = helpers.XmlConstructor.tagger("li")
INPUT = helpers.XmlConstructor.tagger("input", True)
A = helpers.XmlConstructor.tagger("A")
I18N = helpers.I18N
CONCATENATE = helpers.CONCATENATE
PromoOption = snippets.PromoOption
OPTION = helpers.XmlConstructor.tagger("option")
SELECT = helpers.XmlConstructor.tagger("select")
XTABLE = widgets.Table
XML = helpers.XML
XTRD = widgets.TableData
XTRH = widgets.TableHead
XFOOTER = widgets.TableFooterPagination

__pragma__('kwargs')


def identificar_servidor(code, rq, rp):
    if str(code) == "403":
        dados_localstorage = localStorage.removeItem("identificar-servidor")
        window.location = "#_phanterpwa:/identificar-servidor"
    else:
        window.PhanterPWA.open_code_way(code, rq, rp)

class Index(gatehandler.Handler):

    def initialize(self):
        sessionStorage.removeItem("servidor_sme")
        sessionStorage.removeItem("ano_letivo")
        sessionStorage.removeItem("id_escola")
        self.arg0 = window.PhanterPWA.Request.get_arg(0)
        servidor_sme.ServidorSME(
            on_success=lambda json: AreaDoServidor(self, json),
            especifico=self.arg0
        )
        # self.checar_funcionario()


    # def checar_funcionario(self):
    #     window.PhanterPWA.GET(
    #         "api", "funcionario",
    #         onComplete=self.depois_de_checar_funcionario
    #     )

    # def depois_de_checar_funcionario(self, data, ajax_status):
    #     if ajax_status == "success":
    #         json = data.responseJSON
    #         sessionStorage.setItem("servidor_sme", JSON.stringify(json.servidor_sme))
    #         self.Funcionario = Funcionario(self, json)
    #     else:
    #         window.location = "#_phanterpwa:/identificar-servidor"


class AreaDoServidor(gatehandler.Handler):
    @decorators.check_authorization(lambda: window.PhanterPWA.auth_user_has_role([
        "administrator",
        "root",
        "Administrador Master SME",
        "Funcionário",
    ]))
    def initialize(self):
        self.arg0 = window.PhanterPWA.Request.get_arg(0)
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("ÁREA DO SERVIDOR", _class="phanterpwa-breadcrumb"),
                        _class="phanterpwa-breadcrumb-wrapper"
                    ),
                    _class="p-container"),
                _class='title_page_container card'
            ),
            DIV(
                DIV(
                    DIV(
                        DIV(preloaders.android, _style="width: 300px; height: 300px; overflow: hidden; margin: auto;"),
                        _style="text-align:center; padding: 50px 0;"
                    ),
                    _id="area-do-servidor-opcoes",
                    _class='p-row card e-padding_20'
                ),

                _class="phanterpwa-container p-container"
            )
        )
        html.html_to("#main-container")
        self.get_options()

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            opcoes = DIV(_class='opcoes-disponiveis-do-servidor')
            json = json.servidor_sme

            if json.opcoes is not None and json.opcoes is not js_undefined:
                if json.opcoes.multiplas_funcoes is not js_undefined and json.opcoes.multiplas_funcoes is not None:
                    for x in list(json.opcoes.multiplas_funcoes):
                        x[0][1] = XML(x[0][1])
                        opcoes.append(
                            PromoOption(
                                *x[0],
                                **x[1]
                            )
                        )
                else:
                    if json.opcoes.funcionario is not js_undefined:
                        for x in list(json.opcoes.funcionario):
                            x[0][1] = XML(x[0][1])
                            opcoes.append(
                                PromoOption(
                                    *x[0],
                                    **x[1]
                                )
                            )
                    if json.opcoes.master_sme is not js_undefined and json.opcoes.master_sme is not None:
                        for x in list(json.opcoes.master_sme):
                            x[0][1] = XML(x[0][1])
                            opcoes.append(
                                PromoOption(
                                    *x[0],
                                    **x[1]
                                )
                            )
                    elif json.opcoes.master_escola is not js_undefined:
                        for x in list(json.opcoes.master_escola):
                            x[0][1] = XML(x[0][1])
                            opcoes.append(
                                PromoOption(
                                    *x[0],
                                    **x[1]
                                )
                            )

                    if json.opcoes.professor is not js_undefined and json.opcoes.professor is not None:
                        for x in list(json.opcoes.professor):
                            x[0][1] = XML(x[0][1])
                            opcoes.append(
                                PromoOption(
                                    *x[0],
                                    **x[1]
                                )
                            )
            opcoes.html_to("#area-do-servidor-opcoes")


    def get_servidor(self, especifico=None):
        if especifico is None:
            window.PhanterPWA.ApiServer.GET(**{
                'url_args': ["api", "area-do-servidor"],
                'onComplete': self.after_get
            })
        else:
            window.PhanterPWA.ApiServer.GET(**{
                'url_args': ["api", "area-do-servidor", especifico],
                'onComplete': self.after_get
            })

    def get_options(self):
        opcoes = DIV(_class='opcoes-disponiveis-do-servidor')
        json = window.ServidorSME.get_servidor_sme()

        if json.opcoes is not None and json.opcoes is not js_undefined:
            if json.opcoes.multiplas_funcoes is not js_undefined and json.opcoes.multiplas_funcoes is not None:
                for x in list(json.opcoes.multiplas_funcoes):
                    x[0][1] = XML(x[0][1])
                    opcoes.append(
                        PromoOption(
                            *x[0],
                            **x[1]
                        )
                    )
            else:
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
                        x[0][1] = XML(x[0][1])
                        opcoes.append(
                            PromoOption(
                                *x[0],
                                **x[1]
                            )
                        )
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
                        x[0][1] = XML(x[0][1])
                        opcoes.append(
                            PromoOption(
                                *x[0],
                                **x[1]
                            )
                        )

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
                        x[0][1] = XML(x[0][1])
                        opcoes.append(
                            PromoOption(
                                *x[0],
                                **x[1]
                            )
                        )
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
                        x[0][1] = XML(x[0][1])
                        opcoes.append(
                            PromoOption(
                                *x[0],
                                **x[1]
                            )
                        )
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
        opcoes.html_to("#area-do-servidor-opcoes")


__pragma__('nokwargs')




__pragma__('nokwargs')
