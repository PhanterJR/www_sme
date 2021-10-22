import phanterpwa.frontend.gatehandler as gatehandler
import phanterpwa.frontend.helpers as helpers
import phanterpwa.frontend.validations as validations
import phanterpwa.frontend.components.widgets as widgets
import phanterpwa.frontend.components.left_bar as left_bar
import phanterpwa.frontend.forms as forms
import phanterpwa.frontend.components.modal as modal
import phanterpwa.frontend.preloaders as preloaders
import phanterpwa.frontend.decorators as decorators
import handlers.escolas as escolas
import handlers.alunos as alunos
import handlers.anos_letivos as anos_letivos
from org.transcrypt.stubs.browser import __pragma__

__pragma__('alias', "jQuery", "$")
__pragma__('skip')
jQuery = sessionStorage = JSON = M = js_undefined = Date = window =\
    this = __new__ = FormData = console = localStorage = QRCode = 0
__pragma__('noskip')

CONCATENATE = helpers.CONCATENATE
OPTION = helpers.XmlConstructor.tagger("option")
SELECT = helpers.XmlConstructor.tagger("select")
DIV = helpers.XmlConstructor.tagger("div")
BUTTON = helpers.XmlConstructor.tagger("button")
I = helpers.XmlConstructor.tagger("i")
A = helpers.XmlConstructor.tagger("a")
SPAN = helpers.XmlConstructor.tagger("span")
FORM = helpers.XmlConstructor.tagger("form")
UL = helpers.XmlConstructor.tagger("ul")
LI = helpers.XmlConstructor.tagger("li")
STRONG = helpers.XmlConstructor.tagger("strong")
IMG = helpers.XmlConstructor.tagger("img", True)
H2 = helpers.XmlConstructor.tagger("h2")
H3 = helpers.XmlConstructor.tagger("h3")
TH = helpers.XmlConstructor.tagger("th")
TD = helpers.XmlConstructor.tagger("td")
TR = helpers.XmlConstructor.tagger("tr")
LABEL = helpers.XmlConstructor.tagger("label")
INPUT = helpers.XmlConstructor.tagger("input", True)
I18N = helpers.I18N
HR = helpers.XmlConstructor.tagger("hr", True)
XTABLE = widgets.Table
XML = helpers.XML
XTRD = widgets.TableData
XTRH = widgets.TableHead
XFOOTER = widgets.TableFooterPagination


__pragma__('kwargs')


class Index(gatehandler.Handler):
    @decorators.check_authorization(lambda: window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME", "Administrador Master Escola"]))
    def initialize(self):
        arg0 = window.PhanterPWA.Request.get_arg(0)
        arg1 = window.PhanterPWA.Request.get_arg(1)
        arg2 = window.PhanterPWA.Request.get_arg(2)
        arg3 = window.PhanterPWA.Request.get_arg(3)
        arg4 = window.PhanterPWA.Request.get_arg(4)
        arg5 = window.PhanterPWA.Request.get_arg(5)
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("MATRICULAS", _class="phanterpwa-breadcrumb"),
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
                    _id="content-painel-matriculas",
                    _class='p-row card e-padding_20'
                ),

                _class="phanterpwa-container p-container"
            )
        )
        html.html_to("#main-container")

        if window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME"]):
            if arg0 == "escola":
                if arg1 is None or arg1 is js_undefined:
                    html = escolas.EscolherEscola(
                        id_target="#content-painel-matriculas",
                        callback_link=lambda id_escola: "#_phanterpwa:/matriculas/escola/{0}".format(id_escola)
                    )
                else:
                    self.painel = PainelAdministradorMasterEscola(self, arg0, arg1, arg2, arg3, arg4, arg5)
                BackButton = left_bar.LeftBarButton(
                    "back_matriculas_sme",
                    "Voltar",
                    I(_class="fas fa-arrow-circle-left"),
                    **{
                        "tag": "a",
                        "_href": "#_phanterpwa:/matriculas",
                        "position": "top",
                        "show_if_way_match": r"^matriculas\/escola\/[0-9]{1,}\/?$"
                    }
                )
            else:
                self.painel = PainelAdministradorMasterSME(self, arg0, arg1, arg2, arg3, arg4, arg5)
                BackButton = left_bar.LeftBarButton(
                    "back_matriculas_sme_escola",
                    "Voltar",
                    I(_class="fas fa-arrow-circle-left"),
                    **{
                        "tag": "a",
                        "_href": "#_phanterpwa:/area-do-servidor",
                        "position": "top",
                        "show_if_way_match": r"^matriculas\/?$"
                    }
                )
        else:
            if arg0 == "escola" and (arg1 is None or arg1 is js_undefined):
                html = escolas.EscolherEscola(
                    id_target="#content-painel-matriculas",
                    callback_link=lambda id_escola: "#_phanterpwa:/matriculas/escola/{0}".format(id_escola)
                )
            else:
                BackButton = left_bar.LeftBarButton(
                    "back_matriculas_paineis_escolas",
                    "Voltar",
                    I(_class="fas fa-arrow-circle-left"),
                    **{
                        "tag": "a",
                        "_href": "#_phanterpwa:/area-do-servidor",
                        "position": "top",
                        "show_if_way_match": r"^matriculas\/escola\/[0-9]{1,}\/?$"
                    }
                )
                self.painel = PainelAdministradorMasterEscola(self, arg0, arg1, arg2, arg3, arg4, arg5)


        window.PhanterPWA.Components['left_bar'].add_button(BackButton)


class PainelAdministradorMasterSME():
    def __init__(self, index_instance, arg0, arg1, arg2, arg3, arg4, arg5):
        self.index_instance = index_instance
        self.arg0 = arg0
        self.arg1 = arg1
        self.arg2 = arg2
        self.arg3 = arg3
        self.arg4 = arg4
        self.arg5 = arg5
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("MATRICULAS", _class="phanterpwa-breadcrumb"),
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
                    _id="content-painel-matriculas",
                    _class='p-row card e-padding_20'
                ),

                _class="phanterpwa-container p-container"
            )
        )
        html.html_to("#main-container")
        self.obter_dados_sme()

    def obter_dados_sme(self):
        window.PhanterPWA.GET(
            "api",
            "matriculas",
            "sme",
            onComplete=self.depois_de_obter_dados_sme
        )

    def depois_de_obter_dados_sme(sef, data, ajax_status):
        if ajax_status == "success":
            logo_principal = "{0}/api/escolas/12/image".format(
                window.PhanterPWA.ApiServer.remote_address
            )
            json = data.responseJSON
            table = XTABLE(
                "tabela_dados_quant_matriculas_sme",
                XTRH(
                    "tabela_dados_quant_matriculas_sme_tr",
                    "Logo",
                    "Escola",
                    TH("Matrículas", _style="text-align: center;"),
                    TH("Sem turma", _style="text-align: center;"),
                    TH(_style="width: 40px")
                )
            )
            anos = []
            for x in json.dados:
                logo = "{0}/api/escolas/{1}/image".format(
                    window.PhanterPWA.ApiServer.remote_address,
                    x.id_escola
                )
                if x.ano_letivo not in anos:
                    anos.append(x.ano_letivo)
                    table.append(
                        TR(TD(x.ano_letivo, _colspan=5, _style="text-align: center; background-color: #d5d5d5;"))
                    )
                table.append(
                    XTRD(
                        "tabela_dados_quant_matriculas_sme_td_{0}_ano_{1}".format(x.id_escola, x.ano_letivo),
                        TD(IMG(_src=logo, _style="width: 40px; heigth: 40px; border-radius: 100%"), _style="width: 40px"),
                        x.escola,
                        TD(x.quantidade, _style="text-align: center;"),
                        TD(x.sem_turma, _style="text-align: center;"),
                        DIV(
                            widgets.MenuBox(
                                "matriculas_escolas_por_ano_{0}_{1}".format(x.id_escola, x.ano_letivo),
                                I(_class="fas fa-ellipsis-v"),
                                widgets.MenuOption("Detalhe", **{
                                    "_class": "wave_on_click",
                                    "_href": window.PhanterPWA.XWAY("matriculas", "escola", x.id_escola)
                                }),
                                widgets.MenuOption("Turmas", **{
                                    "_class": "wave_on_click",
                                    "_href": window.PhanterPWA.XWAY("turmas", x.id_escola, x.ano_letivo)
                                }),
                                widgets.MenuOption("Matricular", **{
                                    "_class": "wave_on_click",
                                    "_href": window.PhanterPWA.XWAY("matriculas", "matricular", x.id_escola, x.ano_letivo)
                                }),
                            ),
                            _class="phanterpwa-xsection-menu_buttom"
                        ),
                        **{
                            "drag_and_drop": False
                        }
                    )
                )
            card = CONCATENATE(
                DIV(
                    DIV(
                        DIV(
                            IMG(_src=logo_principal),
                            _class="escolas-container-info-image",
                            _style="text-align: center;"
                        ),
                        _class="p-col w1p100 w4p30"
                    ),
                    DIV(
                        H2("QUANTIDADE DE MATRÍCULAS DISTRIBUÍDAS POR ESCOLA SEPARADAS POR ANO."),
                        # H3("Tenha em mente que a personalização do nome da série irá afetar"
                        #     " como a série será representada nos documentos. Para personalizar"
                        #     " basta clicar em ", DIV(I(_class="fas fa-ellipsis-v"), _style ="display: inline-block; width: 30px; text-align:center;"), "."),
                        # H3("Para mudar a ordem basta arrastar à ordem desejada."),
                        _class="p-col w1p100 w4p70",
                        _id="u_informacao_series"
                    ),
                    _class="p-row"
                ),
                table,
                DIV(_id="modal_quantidade_matriculas_case")
            )
            card.html_to("#content-painel-matriculas")


class PainelAdministradorMasterEscola():
    def __init__(self, index_instance, arg0, arg1, arg2, arg3, arg4, arg5):
        self.index_instance = index_instance
        self.arg0 = arg0
        self.arg1 = arg1
        self.arg2 = arg2
        self.arg3 = arg3
        self.arg4 = arg4
        self.arg5 = arg5
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("MATRICULAS", _class="phanterpwa-breadcrumb"),
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
                    _id="content-painel-matriculas",
                    _class='p-row card e-padding_20'
                ),

                _class="phanterpwa-container p-container"
            )
        )
        html.html_to("#main-container")
        self.obter_dados_escola(arg1)

    def obter_dados_escola(self, id_escola):
        window.PhanterPWA.GET(
            "api",
            "matriculas",
            "escola",
            id_escola,
            onComplete=self.depois_de_obter_dados_escola
        )

    def depois_de_obter_dados_escola(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            logo_principal = "{0}/api/escolas/{1}/image".format(
                window.PhanterPWA.ApiServer.remote_address,
                self.arg1
            )
            table = XTABLE(
                "tabela_dados_quant_matriculas_sme",
                XTRH(
                    "tabela_dados_quant_matriculas_sme_tr",
                    # "Logo",
                    "Ano Letivo",
                    TH("Matrículas", _style="text-align: center;"),
                    TH("Sem turma", _style="text-align: center;"),
                    TH(_style="width: 40px")
                )
            )
            # anos = []
            for x in json.dados:
                # logo = "{0}/api/escolas/{1}/image".format(
                #     window.PhanterPWA.ApiServer.remote_address,
                #     x.id_escola
                # )
                # if x.ano_letivo not in anos:
                #     anos.append(x.ano_letivo)
                #     table.append(
                #         TR(TD(x.ano_letivo, _colspan=5, _style="text-align: center; background-color: #d5d5d5;"))
                #     )
                table.append(
                    XTRD(
                        "tabela_dados_quant_matriculas_sme_td_{0}".format(x.id_escola),
                        # TD(IMG(_src=logo, _style="width: 40px; heigth: 40px; border-radius: 100%"), _style="width: 40px"),
                        x.ano_letivo,
                        TD(x.quantidade, _style="text-align: center;"),
                        TD(x.sem_turma, _style="text-align: center;"),
                        DIV(
                            widgets.MenuBox(
                                "matriculas_escolas_por_ano_detalhado_{0}_{1}".format(x.id_escola, x.ano_letivo),
                                I(_class="fas fa-ellipsis-v"),
                                widgets.MenuOption("Matriculados", **{
                                    "_class": "wave_on_click",
                                    "_href": window.PhanterPWA.XWAY("matriculas", "lista", x.id_escola, x.ano_letivo)
                                }),
                                widgets.MenuOption("Matricular", **{
                                    "_class": "wave_on_click",
                                    "_href": window.PhanterPWA.XWAY("matriculas", "matricular", x.id_escola, x.ano_letivo)
                                }),
                                HR(),
                                widgets.MenuOption("Turmas", **{
                                    "_class": "wave_on_click",
                                    "_href": window.PhanterPWA.XWAY("turmas", x.id_escola, x.ano_letivo)
                                }),
                            ),
                            _class="phanterpwa-xsection-menu_buttom"
                        ),
                        **{
                            "drag_and_drop": False
                        }
                    )
                )
            card = CONCATENATE(
                DIV(
                    DIV(
                        DIV(
                            IMG(_src=logo_principal),
                            _class="escolas-container-info-image",
                            _style="text-align: center;"
                        ),
                        _class="p-col w1p100 w4p30"
                    ),
                    DIV(
                        H2("QUANTIDADE DE MATRÍCULAS DA ESCOLA DISTRIBUÍDAS POR ANO."),
                        # H3("Tenha em mente que a personalização do nome da série irá afetar"
                        #     " como a série será representada nos documentos. Para personalizar"
                        #     " basta clicar em ", DIV(I(_class="fas fa-ellipsis-v"), _style ="display: inline-block; width: 30px; text-align:center;"), "."),
                        # H3("Para mudar a ordem basta arrastar à ordem desejada."),
                        _class="p-col w1p100 w4p70",
                        _id="u_informacao_series"
                    ),
                    _class="p-row"
                ),
                table,
                DIV(_id="modal_quantidade_matriculas_case")
            )
            card.html_to("#content-painel-matriculas")


__pragma__('nokwargs')
