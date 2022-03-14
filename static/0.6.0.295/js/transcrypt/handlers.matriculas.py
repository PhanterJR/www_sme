import phanterpwa.frontend.gatehandler as gatehandler
import phanterpwa.frontend.helpers as helpers
import phanterpwa.frontend.validations as validations
import phanterpwa.frontend.components.widgets as widgets
import phanterpwa.frontend.components.left_bar as left_bar
import phanterpwa.frontend.forms as forms
import phanterpwa.frontend.fmasks as fmasks
import phanterpwa.frontend.components.modal as modal
import phanterpwa.frontend.preloaders as preloaders
import phanterpwa.frontend.decorators as decorators
import handlers.escolas as escolas
import handlers.anos_letivos as anos_letivos
import handlers.views.matriculas as matriculas
from org.transcrypt.stubs.browser import __pragma__

__pragma__('alias', "jQuery", "$")
__pragma__('skip')
jQuery = sessionStorage = JSON = M = js_undefined = Date = window =\
    this = __new__ = FormData = console = localStorage = QRCode = setTimeout = 0
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
TABLE = helpers.XmlConstructor.tagger("table")
TH = helpers.XmlConstructor.tagger("th")
TD = helpers.XmlConstructor.tagger("td")
P = helpers.XmlConstructor.tagger("p")
TR = helpers.XmlConstructor.tagger("tr")
LABEL = helpers.XmlConstructor.tagger("label")
INPUT = helpers.XmlConstructor.tagger("input", True)
I18N = helpers.I18N
HR = helpers.XmlConstructor.tagger("hr", True)
XTABLE = widgets.Table
XML = helpers.XML
THEAD = helpers.XmlConstructor.tagger('thead')
TFOOT = helpers.XmlConstructor.tagger('tfoot')
XTRD = widgets.TableData
XTRH = widgets.TableHead
XFOOTER = widgets.TableFooterPagination


__pragma__('kwargs')


class Index(gatehandler.Handler):
    @decorators.check_authorization(lambda: window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME", "Administrador Master Escola", "Coordenação SME"]))
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
            elif arg0 == "lista":
                if arg1 is None or arg1 is js_undefined:
                    html = escolas.EscolherEscola(
                        id_target="#content-painel-matriculas",
                        callback_link=lambda id_escola: "#_phanterpwa:/matriculas/lista/{0}".format(id_escola)
                    )
                elif str(arg1).isdigit() and (arg2 is None or arg2 is js_undefined):
                    html = anos_letivos.EscolherAnoLetivo(
                        id_target="#content-diario_de_notas",
                        callback_link=lambda ano: "#_phanterpwa:/matriculas/lista/{0}/{1}".format(arg1, ano)
                    )
                elif str(arg1).isdigit() and str(arg2).isdigit():
                    self.Matriculas = Matriculas(self, arg1, arg2)

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
            elif arg0 == "lista":
                if arg1 is None or arg1 is js_undefined:
                    html = escolas.EscolherEscola(
                        id_target="#content-painel-matriculas",
                        callback_link=lambda id_escola: "#_phanterpwa:/matriculas/lista/{0}".format(id_escola)
                    )
                elif str(arg1).isdigit() and (arg2 is None or arg2 is js_undefined):
                    html = anos_letivos.EscolherAnoLetivo(
                        id_target="#content-diario_de_notas",
                        callback_link=lambda ano: "#_phanterpwa:/matriculas/lista/{0}/{1}".format(arg1, ano)
                    )
                elif str(arg1).isdigit() and str(arg2).isdigit():
                    self.Matriculas = Matriculas(self, arg1, arg2)
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
            xmls = []
            table = XTABLE(
                "tabela_dados_quant_matriculas_sme",
            )
            anos = []
            for x in json.dados:
                logo = "{0}/api/escolas/{1}/image".format(
                    window.PhanterPWA.ApiServer.remote_address,
                    x.id_escola
                )
                if x.ano_letivo not in anos:
                    anos.append(x.ano_letivo)
                    table = XTABLE(
                        "tabela_dados_quant_matriculas_sme_{0}".format(x.anos_letivo),
                        TR(TD(x.ano_letivo, _colspan=8, _style="text-align: center; background-color: #d5d5d5;")),
                        XTRH(
                            "tabela_dados_quant_matriculas_sme_tr_{0}_ano_{1}".format(x.id_escola, x.ano_letivo),
                            "Logo",
                            "Escola",
                            TH("Matrículas efetuadas", _style="text-align: center;"),
                            TH("Transferidos", _style="text-align: center;"),
                            TH("Desistentes", _style="text-align: center;"),
                            TH("Sem turma", _style="text-align: center;"),
                            TH("Matrículas efetivas", _style="text-align: center;"),
                            TH(_style="width: 40px")
                        ),
                    )
                    xmls.append(table)
                table.append(
                    XTRD(
                        "tabela_dados_quant_matriculas_sme_td_{0}_ano_{1}".format(x.id_escola, x.ano_letivo),
                        TD(IMG(_src=logo, _style="width: 40px; heigth: 40px; border-radius: 100%"), _style="width: 40px"),
                        x.escola,
                        TD(x.quantidade_inicial, _style="text-align: center;"),
                        TD(x.transferidos, _style="text-align: center; color: orange;"),
                        TD(x.desistentes, _style="text-align: center; color: red;"),
                        TD(x.sem_turma, _style="text-align: center; color: blue;"),
                        TD(STRONG(x.quantidade_final), _style="text-align: center; color: green;"),
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
                *xmls,
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
                    TH("Matrículas efetuadas", _style="text-align: center;"),
                    TH("Transferidos", _style="text-align: center;"),
                    TH("Desistentes", _style="text-align: center;"),
                    TH("Sem turma", _style="text-align: center;"),
                    TH("Matrículas efetivas", _style="text-align: center;"),
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
                        TD(x.quantidade_inicial, _style="text-align: center;"),
                        TD(x.transferidos, _style="text-align: center; color: orange;"),
                        TD(x.desistentes, _style="text-align: center; color: red;"),
                        TD(x.sem_turma, _style="text-align: center; color: blue;"),
                        TD(STRONG(x.quantidade_final), _style="text-align: center; color: green;"),
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


class Matriculas(helpers.XmlConstructor):
    def __init__(self, index_instance, id_escola, ano_letivo):
        self.index_instance = index_instance
        self.id_escola = id_escola
        self.ano_letivo = ano_letivo
        helpers.XmlConstructor.__init__(self, "div", False, self.initial_xml(), _class="lista_de_alunos")
        self.html_to("#content-painel-matriculas")

        campos = [
            "id",
            "aluno",
            "data_nasc",
            "nome_do_pai",
            "nome_da_mae",
        ]

        parametro_valor = window.PhanterPWA.Request.get_param("valor", "")
        parametro_campo = window.PhanterPWA.Request.get_param("campo", "aluno")
        if parametro_campo not in campos:
            parametro_campo = "aluno"
        parametro_pagina = window.PhanterPWA.Request.get_param("pagina", 1)
        if not str(parametro_pagina).isdigit():
            parametro_pagina = 1

        parametro_ordernar = window.PhanterPWA.Request.get_param("ordernar", "turma")
        if parametro_ordernar not in campos:
            parametro_ordernar = "turma"


        parametro_sentido = window.PhanterPWA.Request.get_param("sentido", "asc")
        if parametro_sentido not in ["asc", "desc"]:
            parametro_sentido = "asc"
        self._get_data_search(
            search=str(parametro_valor),
            field=parametro_campo,
            orderby=parametro_ordernar,
            sort=parametro_sentido,
            page=parametro_pagina
        )

    def initial_xml(self):
        campos = [
            "id",
            "aluno",
            "data_nasc",
            "nome_do_pai",
            "nome_da_mae",
        ]
        parametro_valor = window.PhanterPWA.Request.get_param("valor", "")
        parametro_campo = window.PhanterPWA.Request.get_param("campo", "aluno")
        if parametro_campo not in campos:
            parametro_campo = "aluno"
        if parametro_campo == "aluno":
            label = "Localizar Aluno(a)"
            placeholder = "Nome ou parte do nome do aluno"
        elif parametro_campo == "nome_do_pai":
            label = "Localizar Pai"
            placeholder = "Nome ou parte do nome do pai"
        elif parametro_campo == "nome_da_mae":
            label = "Localizar Mãe"
            placeholder = "Nome ou parte do nome da mãe"
        elif parametro_campo == "id":
            label = "Localizar pelo ID"
            placeholder = "Digite o id do(a) aluno(a)"
        elif parametro_campo == "data_nasc":
            label = "Filtrar pela Data de Nascimento"
            placeholder = "Digite a data de nascimento"
        html = DIV(
            DIV(
                FORM(
                    DIV(
                        DIV(
                            DIV(
                                widgets.Input(
                                    "search_alunos",
                                    label=label,
                                    value=str(parametro_valor),
                                    placeholder=placeholder,
                                    icon=I(_class="fab fa-sistrix"),
                                    icon_on_click=lambda: self.search()
                                ),
                                _id="search_alunos_container",
                                _class="p-col w1p100 w3p50 w4p75",
                            ),
                            DIV(
                                widgets.Select(
                                    "campos_alunos",
                                    label="Campos à pesquisar",
                                    placeholder="Escolha o Campo",
                                    value=parametro_campo,
                                    data_set=[
                                        ["id", "ID"],
                                        ["aluno", "Nome do(a) Aluno(a)"],
                                        ["data_nasc", "Data de Nascimento"],
                                        ["nome_do_pai", "Nome do Pai"],
                                        ["nome_da_mae", "Nome da Mãe"],
                                    ]
                                ),
                                _id="phanterpwa-input-search_field-alunos",
                                _class="p-col w1p100 w3p50 w4p25"
                            ),
                            _class="p-row e-padding_20w"
                        ),
                        _class="phanterpwa-container-section"
                    ),
                    _action="#",
                    _id="search_alunos",
                    _class="form-search_alunos",
                    _enctype="multipart/form-data",
                    _method="post",
                    _autocomplete="off"
                ),
                _class="phanterpwa_tables_search_wrapper"
            ),
            DIV(_id='lista-alunos-subtitle', _class="phanterpwa-subtitle"),
            DIV(
                DIV(
                    DIV(preloaders.android, _style="width: 300px; height: 300px; overflow: hidden; margin: auto;"),
                    _style="text-align:center; padding: 50px 0;"
                ),
                _id='lista-alunos-container',
                _class="phanterpwa_tables_container"
            ),
            DIV(_id="modal_visualizar_aluno"),
            DIV(_id="modal_visualizar_matricula"),
            DIV(_id="modal_documentos"),
            DIV(_id="modal_adicionar_aluno_turma"),
            DIV(_id="modal_deletar_matricula_detalhe_container"),
            _class='alunos-container phanterpwa-card-container'
        )
        return html

    def binds(self):
        jQuery(
            "#phanterpwa-widget-input-input-search_alunos"
        ).off(
            "keydown.search_aluno_matricula"
        ).on(
            "keydown.search_aluno_matricula",
            self._onkeydown
        )

        jQuery(
            "#phanterpwa-widget-input-input-search_alunos"
        ).off(
            "keyup.search_aluno_matricula"
        ).on(
            "keyup.search_aluno_matricula",
            self._onkeyup
        )

        jQuery(
            "#phanterpwa-widget-input-input-search_alunos"
        ).off(
            "keypress.search_aluno_matricula"
        ).on(
            "keypress.search_aluno_matricula",
            self._onkeypress
        )

        jQuery(
            "#phanterpwa-widget-select-input-campos_alunos"
        ).off(
            "change.search_field-alunos"
        ).on(
            "change.search_field-alunos",
            lambda: self.mudar_input_search(this)
        )

    def mudar_input_search(self, el):
        element = jQuery(el)
        campo = element.val()
        jQuery("#phanterpwa-widget-input-input-search_alunos").val("")
        if campo == "Nome do(a) Aluno(a)":
            jQuery("#search_alunos_container").find("label").text("Localizar Aluno(a)")
            jQuery("#phanterpwa-widget-input-input-search_alunos").attr("placeholder", "Nome ou parte do nome do aluno")
        elif campo == "Nome do Pai":
            jQuery("#search_alunos_container").find("label").text("Localizar Pai")
            jQuery("#phanterpwa-widget-input-input-search_alunos").attr("placeholder", "Nome ou parte do nome do pai")
        elif campo == "Nome da Mãe":
            jQuery("#search_alunos_container").find("label").text("Localizar Mãe")
            jQuery("#phanterpwa-widget-input-input-search_alunos").attr("placeholder", "Nome ou parte do nome da mãe")
        elif campo == "ID":
            jQuery("#search_alunos_container").find("label").text("Localizar pelo ID")
            jQuery("#phanterpwa-widget-input-input-search_alunos").attr("placeholder", "Digite o id do(a) aluno(a)")
        elif campo == "Data de Nascimento":
            jQuery("#search_alunos_container").find("label").text("Filtrar pela Data de Nascimento")
            jQuery("#phanterpwa-widget-input-input-search_alunos").attr("placeholder", "Digite a data de nascimento")

    def _onkeydown(self, event):
        element = jQuery(
            "#phanterpwa-widget-input-input-search_alunos"
        )
        self.valor_atual = ""
        valores = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        if str(event.key) in valores:
            value = element.val()
            nvalue = fmasks.stringFilter(value)

    def _onkeypress(self, event):
        element = jQuery(
            "#phanterpwa-widget-input-input-search_alunos"
        )
        label = element.parent().find("label").text()
        self.valor_atual = ""
        valores = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        if label == "Filtrar pela Data de Nascimento":
            event.preventDefault()
            if str(event.key) in valores:
                value = str(element.val())
                value += event.key
                nvalue = fmasks.stringFilter(value)
                nvalue, pos = fmasks.maskDate(nvalue)
                con = 0
                element.val(nvalue)
                for x in str(nvalue):
                    con += 1
                    if str(x).isdigit():
                        pos = con
                element[0].selectionStart = pos
                element[0].selectionEnd = pos
        elif label == "Localizar pelo ID":
            event.preventDefault()
            if str(event.key) in valores:
                value = element.val()
                value += event.key
                nvalue = fmasks.stringFilter(value)
                element.val(nvalue)

    def _onkeyup(self, event):
        key = event.which or event.keyCode
        element = jQuery(
            "#phanterpwa-widget-input-input-search_alunos"
        )
        label = element.parent().find("label").text()
        if key == 13:
            value = element.val()
            if value is not "":
                self.search()
        else:
            if label == "Filtrar pela Data de Nascimento":
                value = element.val()
                nvalue = fmasks.stringFilter(value)
                nvalue, pos = fmasks.maskDate(nvalue)
                con = 0
                element.val(nvalue)
                for x in str(nvalue):
                    con += 1
                    if str(x).isdigit():
                        pos = con
                element[0].selectionStart = pos
                element[0].selectionEnd = pos
            elif label == "Localizar pelo ID":
                value = element.val()
                nvalue = fmasks.stringFilter(value)
                element.val(nvalue)

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            if json.alunos is None:
                window.PhanterPWA.open_way("alunos/novo")
            else:
                self.process_data(json)

    def _on_sort(self, table_head_instance):
        widgets = window.PhanterPWA.Request.widgets
        page = widgets["alunos-matricula-table-footer"].page()
        search = widgets["search_alunos"].value()
        field = widgets["campos_alunos"].value()
        sorted_field = widgets["alunos-matricula-table-head"].sorted_field()
        self._get_data_search(search=search, field=field, orderby=sorted_field[0], sort=sorted_field[1], page=page)

    def _on_page(self, table_pagination_instance):
        widgets = window.PhanterPWA.Request.widgets
        page = widgets["alunos-matricula-table-footer"].page()
        search = widgets["search_alunos"].value()
        field = widgets["campos_alunos"].value()
        sorted_field = widgets["alunos-matricula-table-head"].sorted_field()
        self._get_data_search(search=search, field=field, orderby=sorted_field[0], sort=sorted_field[1], page=page)

    def process_data(self, json):
        if self.current_hash is not json.hash:
            self.current_hash = json.hash
            alunos = json.alunos
            jQuery("#lista-alunos-subtitle").text(json.message)
            new_select_widget = widgets.Select(
                "campos_alunos",
                label=alunos.search_fields.label,
                placeholder="Escolha o Campo",
                value=alunos.search_fields.value,
                data_set=alunos.search_fields.data_set
            )
            new_select_widget.html_to("#phanterpwa-input-search_field-alunos")
            new_select_widget.reload()
            table = XTABLE(
                "alunos-matricula-table",
                XTRH(
                    "alunos-matricula-table-head",
                    *alunos.searcher.data_set,
                    ["serie", "Serie"],
                    ["turma", "Turma"],
                    " ",
                    sort_by=alunos.searcher.sort_by,
                    sort_order=alunos.searcher.sort_order,
                    sortable=alunos.searcher.sortable,
                    on_click_sortable=self._on_sort,
                )
            )
            if alunos.data is not js_undefined:
                for x in alunos.data:
                    data_de_nascimento_formated = ""
                    if x.alunos.data_nasc is not None and x.alunos.data_nasc is not js_undefined:
                        data_de_nascimento_formated = validations.format_iso_date_datetime(
                            x.alunos.data_nasc, "dd/MM/yyyy", "date"
                        )

                    table.append(
                        XTRD(
                            "alunos-matricula-table-data-{0}".format(x.matriculas.id),
                            x.matriculas.id,
                            x.matriculas.nome_do_aluno,
                            data_de_nascimento_formated,
                            x.matriculas.nome_do_pai,
                            x.matriculas.nome_da_mae,
                            x.series.serie,
                            x.turmas.turma if x.turmas.turma is not None else TD("Sem Turma", _style="color: red;"),
                            widgets.MenuBox(
                                "drop_{0}".format(x.matriculas.id),
                                I(_class="fas fa-ellipsis-v"),
                                widgets.MenuOption("Detalhes da Matrícula", **{
                                    "_class": "botao_visualizar_matricula wave_on_click",
                                    "_title": "Visualizar matrícula do aluno",
                                    "_data-id_matricula": x.matriculas.id
                                }),
                                widgets.MenuOption("Visualizar dados do aluno", **{
                                    "_class": "botao_visualizar_aluno wave_on_click",
                                    "_data-id_aluno": x.alunos.id,
                                }),
                                onOpen=lambda: self.binds_menu_aluno()
                            ),
                            **{"drag_and_drop": False}
                        )
                    )
                table.append(
                    XFOOTER(
                        "alunos-matricula-table-footer",
                        page=alunos.searcher.page,
                        total_pages=alunos.searcher.total_pages,
                        on_click_page=self._on_page,
                    )
                )
            table.html_to("#lista-alunos-container")
            self.binds()
            def change_attr_drop(el):
                targ = jQuery(el).attr("phanterpwa_dowpdown_target")
                jQuery(el).attr("data-target", targ)
                # jQuery(el).dropdown()
            jQuery("[phanterpwa_dowpdown_target]").each(lambda: change_attr_drop(this))

    def binds_menu_aluno(self):
        jQuery(
            ".botao_visualizar_aluno"
        ).off(
            "click.botao_visualizar_aluno"
        ).on(
            "click.botao_visualizar_aluno",
            lambda: self.get_visualizar_aluno(this)
        )
        jQuery(
            ".botao_visualizar_matricula"
        ).off(
            "click.botao_visualizar_matricula"
        ).on(
            "click.botao_visualizar_matricula",
            lambda: self.get_visualizar_matricula(this)
        )

    def binds_menu_matriculas(self):
        jQuery(
            ".botao_visualizar_matricula"
        ).off(
            "click.botao_visualizar_matricula"
        ).on(
            "click.botao_visualizar_matricula",
            lambda: self.get_visualizar_matricula(this)
        )

    def _get_data_search(self, search="", field="aluno", orderby="turma", sort="desc", page=1):
        window.PhanterPWA.set_push_way(window.PhanterPWA._xway(
            "matriculas",
            "lista",
            self.id_escola,
            self.ano_letivo,
            _valor=search,
            _campo=field,
            _pagina=page,
            _ordernar=orderby,
            _sentido=sort
        ))
        self._search = search
        self._field = field
        self._orderby = orderby
        self._sort = sort
        self._page = page
        window.PhanterPWA.ApiServer.GET(**{
            'url_args': ["api", "matriculas", "pesquisar", self.id_escola, self.ano_letivo],
            'url_vars': {
                "search": search,
                "field": field,
                "orderby": orderby,
                "sort": sort,
                "page": page
            },
            'onComplete': self.after_get
        })

    def search(self):
        widgets = window.PhanterPWA.Request.widgets
        search = widgets["search_alunos"].value()
        field = widgets["campos_alunos"].value()
        self._get_data_search(search=search, field=field, orderby=field, sort="asc", page=1)

    def get_visualizar_aluno(self, widget_instance):
        id_aluno = jQuery(widget_instance).data("id_aluno")
        window.PhanterPWA.GET(
            "api",
            "aluno",
            id_aluno,
            "visualizar",
            onComplete=lambda data, ajax_status: self.modal_add_alunos_visualizar(data, ajax_status)
        )

    def modal_add_alunos_visualizar(self, data, ajax_status):
        json = data.responseJSON
        if ajax_status == "success":
            html_historico = DIV(
                DIV("HISTÓRICO ESCOLAR", _class="p-col w1p100 phanterpwa-widget-form-separator"),
                _class="historicos-conteudo"
            )
            if json.data.historico is not None and json.data.historico is not js_undefined:
                for x in json.data.historico:
                    html_ficha = P(
                        "Não há ficha individual no ano de ",
                        STRONG(x.ano_letivo), " da serie ", STRONG(x.serie), " na escola ",
                        STRONG(x.escola), "."
                    )

                    if x.ficha_individual is not None and x.ficha_individual is not js_undefined:
                        tabela = TABLE(
                            _class="tabela_ficha_individual"
                        )
                        for y in x.ficha_individual:
                            linha = TR()
                            for c in y:
                                if c[1]["tipo"] == "cabecalho":
                                    linha.append(TH(c[0], **dict(c[1])))
                                elif c[1]["tipo"] == "cabecalho_rotate":
                                    linha.append(TH(DIV(c[0], _class="rotate"), **dict(c[1])))
                                else:
                                    linha.append(TD(c[0], **dict(c[1])))
                            tabela.append(linha)
                        html_ficha = DIV(
                            LABEL(x.ano_letivo, " - ", x.serie, " - ", x.escola),
                            DIV(
                                DIV(
                                    DIV(
                                        DIV(
                                            tabela,
                                            _class="p-row"
                                        ),
                                        _class="phanterpwa-card-panel-control-content"
                                    ),
                                    _class="phanterpwa-card-panel-control-wrapper"
                                ),
                                _class="phanterpwa-card-panel-control-container"
                            ),
                            _class="phanterpwa-card-panel-control p-col w1p100"
                        )
                    html_historico.append(html_ficha)

            content = CONCATENATE(
                forms.Form(json.data.aluno),
                DIV(html_historico, _class="p-row")
            )
            self.modal_visualizar = modal.Modal(
                "#modal_visualizar_aluno",
                **{
                    "title": CONCATENATE(DIV("Visualizar dados do aluno"),
                        DIV(STRONG(json.data.nome))),
                    "content": content
                }
            )
            self.modal_visualizar.open()

            
        else:
            window.PhanterPWA.flash("Não há alunos_visualizar matriculados para a série da turma")

    def get_visualizar_matricula(self, el):
        id_matricula = jQuery(el).data("id_matricula")
        window.PhanterPWA.GET(
            "api",
            "matricula",
            "visualizar",
            id_matricula,
            onComplete=self.abrir_modal_visualizar
        )

    def abrir_modal_visualizar(self, data, ajax_status):
        json = data.responseJSON
        if ajax_status == "success":
            id_matricula = json.data.id
            id_escola = json.data.id_escola
            ano_letivo = json.data.ano_letivo
            prof_pai = json.data.prof_pai
            prof_mae = json.data.prof_mae
            id_aluno = json.data.id_aluno
            sexo = json.data.sexo
            nome_do_aluno = json.data.nome_do_aluno
            data_de_nascimento = json.data.data_de_nascimento
            nome_do_pai = json.data.nome_do_pai
            nome_da_mae = json.data.nome_da_mae
            naturalidade = json.data.naturalidade
            endereco = json.data.endereco
            serie = json.data.serie
            nome_do_responsavel = json.data.nome_do_responsavel
            data_mat = json.data.data_mat
            novato = json.data.novato
            admitido = json.data.admitido
            unidade_admitido = json.data.unidade_admitido
            ano_anterior = json.data.ano_anterior
            serie_ant = json.data.serie_ant
            resultado_final = json.data.resultado_final
            resultado_anterior = json.data.resultado_anterior
            numero_aluno = json.data.numero_aluno
            turma = json.data.turma
            id_turma = json.data.id_turma
            turmas_disponiveis = json.data.turmas_disponiveis
            now = __new__(Date().getTime())
            card = DIV(
                matriculas.Visualizar(
                    id_matricula,
                    id_escola,
                    ano_letivo,
                    prof_pai,
                    prof_mae,
                    id_aluno,
                    nome_do_aluno,
                    sexo,
                    data_de_nascimento,
                    nome_do_pai,
                    nome_da_mae,
                    naturalidade,
                    endereco,
                    serie,
                    nome_do_responsavel,
                    data_mat,
                    novato,
                    admitido,
                    unidade_admitido,
                    ano_anterior,
                    serie_ant,
                    resultado_final,
                    resultado_anterior,
                    numero_aluno,
                    turma
                )
            )
            xml_btn_turma_aluno = ""
            if str(id_turma).isdigit():
                xml_btn_turma_aluno = A(
                    I(_class="fas fa-chalkboard"),
                    _class="icon_button botao_turma_matriculado",
                    _title="Turma do aluno",
                    _href=window.PhanterPWA.XWAY(
                        "turmas",
                        id_escola,
                        ano_letivo,
                        "especifico",
                        id_turma
                    )
                )
            xml_btn_turma_rema_aluno = ""
            if turmas_disponiveis is not None:
                tl_btn = "Alterar turma do aluno"
                if id_turma is None:
                    tl_btn = "Adicionar o aluno numa turma"
                xml_btn_turma_rema_aluno = DIV(
                    I(
                        DIV(
                            DIV(
                                SPAN(I(_class="fas fa-user-graduate"), _class="icombine-container-first"),
                                SPAN(I(_class="fas fa-chalkboard"), _class="icombine-container-last"),
                                _class="icombine-container"
                            ),
                            _class="phanterpwa-snippet-icombine"
                        ),
                    ),
                    _class="icon_button add_aluno_turma",
                    _title=tl_btn,
                )

            self.modal_visualizar_matricula = modal.Modal(
                "#modal_visualizar_matricula",
                **{
                    "title": CONCATENATE(DIV("Visualizar Matrícula ", STRONG(ano_letivo)),
                        DIV(STRONG(json.data.nome_do_aluno))),
                    "content": card,
                    "buttons_panel": DIV(
                        A(
                            I(
                                DIV(
                                    DIV(
                                        SPAN(I(_class="fas fa-user-graduate"), _class="icombine-container-first"),
                                        SPAN(I(_class="fas fa-plus"), _class="icombine-container-last"),
                                        _class="icombine-container"
                                    ),
                                    _class="phanterpwa-snippet-icombine"
                                ),
                            ),
                            _class="icon_button botao_matricular",
                            _title="Nova matrícula",
                            _href=window.PhanterPWA.XWAY(
                                "matricula",
                                id_aluno
                            )
                        ),
                        A(
                            I(_class="fas fa-edit"),
                            _class="icon_button botao_editar_matricula",
                            _title="Editar Matrícula",
                            _href=window.PhanterPWA.XWAY(
                                "matricula",
                                id_aluno,
                                id_escola,
                                ano_letivo,
                                "editar",
                                id_matricula
                            )
                        ),
                        DIV(
                            I(
                                DIV(
                                    DIV(
                                        SPAN(I(_class="fas fa-user-graduate"), _class="icombine-container-first"),
                                        SPAN(I(_class="fas fa-eraser"), _class="icombine-container-last"),
                                        _class="icombine-container"
                                    ),
                                    _class="phanterpwa-snippet-icombine"
                                ),
                            ),
                            _title="Cancelar matrícula",
                            _class="icon_button botao_deletar_matricula"
                        ),
                        xml_btn_turma_aluno,
                        xml_btn_turma_rema_aluno,
                        DIV(
                            I(_class="fas fa-print"),
                            _title="Imprimir documentos",
                            _class="icon_button botao_lista_de_documentos_disponiveis"
                        ),
                    )
                }
            )
            self.modal_visualizar_matricula.open()
            self.binds_menu_flutuante(
                id_escola,
                ano_letivo,
                id_turma,
                id_matricula,
                id_aluno,
                nome_do_aluno,
                resultado_final,
                turmas_disponiveis
            )
        else:
            window.PhanterPWA.flash("Não há alunos_visualizar matriculados para a série da turma")

    def binds_menu_flutuante(
            self,
            id_escola,
            ano_letivo,
            id_turma,
            id_matricula,
            id_aluno,
            nome_do_aluno,
            resultado_final,
            turmas_disponiveis
        ):

        jQuery(".botao_lista_de_documentos_disponiveis").off(
            "click.botao_lista_de_documentos_disponiveis"
        ).on(
            "click.botao_lista_de_documentos_disponiveis",
            lambda: self.abrir_modal_documentos(
                id_escola,
                ano_letivo,
                id_turma,
                id_matricula,
                id_aluno,
                nome_do_aluno,
                resultado_final
            )
        )
        jQuery(".add_aluno_turma").off(
            "click.add_aluno_turma"
        ).on(
            "click.add_aluno_turma",
            lambda: self.abrir_modal_add_aluno_turma(
                id_escola,
                ano_letivo,
                id_turma,
                id_matricula,
                nome_do_aluno,
                turmas_disponiveis,
                id_turma
            )
        )
        jQuery(
            ".botao_deletar_matricula"
        ).off(
            "click.botao_deletar_matricula"
        ).on(
            "click.botao_deletar_matricula",
            lambda: self.modal_confirmar_deletar_matricula(id_escola, ano_letivo, id_matricula, nome_do_aluno)
        )

    def modal_confirmar_deletar_matricula(self, id_escola, ano_letivo, id_matricula, nome_do_aluno):
        self.modal_visualizar_matricula.close()
        content = DIV(
            P("Atenção, a matrícula do aluno será deletada permanentemente, se ",
                "o mesmo possuir notas, faltas, ficha individual, boletim, etc."
                " Tudo isto será perdido, inclusive o mesmo sairá da turma permanentemente."),
            P("Tem certeza que deseja deletar esta matrícula?"),
            _class="p-row"
        )
        footer = DIV(
            forms.FormButton(
                "deletar_matricula_sim",
                "Sim",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ),
            forms.FormButton(
                "deletar_matricula_nao",
                "Não",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ),
            _class='phanterpwa-form-buttons-container'
        )
        self.modal_deletar_matricula = modal.Modal(
            "#modal_deletar_matricula_detalhe_container",
            **{
                "title": "Deletar Matrícula do(a) aluno(a) {0}".format(nome_do_aluno),
                "content": content,
                "footer": footer,
                "footer_height": 65,
                "form": "deletar_matricula"
            }
        )
        self.modal_deletar_matricula.open()
        jQuery("#phanterpwa-widget-form-form_button-deletar_matricula_sim").off(
            "click.adicionar_deletar_matricula_sim"
        ).on(
            "click.adicionar_deletar_matricula_sim",
            lambda: self._on_click_deletar_matricula(id_escola, ano_letivo, id_matricula)
        )
        jQuery("#phanterpwa-widget-form-form_button-deletar_matricula_nao").off(
            "click.adicionar_deletar_matricula_nao"
        ).on(
            "click.adicionar_deletar_matricula_nao",
            lambda: self.modal_deletar_matricula.close()
        )

    def _on_click_deletar_matricula(self, id_escola, ano_letivo, id_matricula):
        window.PhanterPWA.DELETE(
            "api",
            "matricula",
            "deletar",
            id_escola,
            ano_letivo,
            id_matricula,
            onComplete=self.depois_de_revogar_matricula
        )
        self.modal_deletar_matricula.close()

    def depois_de_revogar_matricula(self, data, ajax_status):
        if ajax_status == "success":
            self.modal_deletar_matricula.close()
            window.PhanterPWA.flash("Matrícula cancelada com sucesso!")
            window.location.reload()

    def abrir_modal_documentos(self, id_escola, ano_letivo, id_turma, id_matricula, id_aluno, nome_do_aluno, resultado_final):
        self.modal_visualizar_matricula.close()
        lista_de_resultados_validos = ['Aprovado(a)', 'Reprovado(a)', 'Reprovado(a) - Falta a Recuperação', 'Aprovado(a) no Conselho', 'Reprovado(a) no Conselho', 'Desistente']
        html_botao_declaracao_de_transferencia = ""
        if resultado_final in lista_de_resultados_validos:
            html_botao_declaracao_de_transferencia = A(
                DIV(
                    I(_class="fas fa-file-alt"),
                    _class="icon_documentos_button"
                ),
                DIV(
                    "Declaração de Transferência",
                    _class="descricao_documentos_button"
                ),
                _class="p-col w4p33 w1p50 link",
                **{"_href": "/#_phanterpwa:/imprimir/declaracao-de-transferencia/{0}?_retornar=turmas/{1}/{2}/especifico/{3}".format(id_matricula, id_escola, ano_letivo, id_turma)}
            )

        html_documentos = DIV(
            A(
                DIV(
                    I(_class="fas fa-file-alt"),
                    _class="icon_documentos_button"
                ),
                DIV(
                    "Matrícula",
                    _class="descricao_documentos_button"
                ),
                _class="p-col w4p33 w1p50 link",
                **{"_href": "/#_phanterpwa:/imprimir/matricula/{0}?_retornar=turmas/{1}/{2}/especifico/{3}".format(id_matricula, id_escola, ano_letivo, id_turma)}
            ),
            A(
                DIV(
                    I(_class="fas fa-file-alt"),
                    _class="icon_documentos_button"
                ),
                DIV(
                    "Questionário Social",
                    _class="descricao_documentos_button"
                ),
                _class="p-col w4p34 w1p50 link",
                **{"_href": "/#_phanterpwa:/imprimir/questionario-social/{0}/{1}/{2}?_retornar=turmas/{0}/{1}/especifico/{3}".format(id_escola, ano_letivo, id_turma, id_aluno, id_turma)}
            ),
            A(
                DIV(
                    I(_class="fas fa-file-alt"),
                    _class="icon_documentos_button"
                ),
                DIV(
                    "Declaração de Matrícula",
                    _class="descricao_documentos_button"
                ),
                _class="p-col w4p33 w1p50 link",
                **{"_href": "/#_phanterpwa:/imprimir/declaracao-de-matricula/{0}?_retornar=turmas/{1}/{2}/especifico/{3}".format(id_matricula, id_escola, ano_letivo, id_turma)}
            ),
            html_botao_declaracao_de_transferencia,
            A(
                DIV(
                    I(_class="fas fa-file-alt"),
                    _class="icon_documentos_button"
                ),
                DIV(
                    "Ficha Individual",
                    _class="descricao_documentos_button"
                ),
                _class="p-col w4p33 w1p50 link",
                **{"_href": "/#_phanterpwa:/imprimir/ficha-individual-do-aluno/{0}?_retornar=turmas/{1}/{2}/detalhado".format(id_matricula, id_escola, ano_letivo)}
            ),
            _class="p-row documentos_buttons_container"
        )

        self.modal_documentos = modal.Modal(
            "#modal_documentos",
            **{
                "title": "Documentos do(a) aluno(a) {0}".format(nome_do_aluno),
                "content": html_documentos,
            }
        )
        self.modal_documentos.open()

    def abrir_modal_add_aluno_turma(self, id_escola, ano_letivo, id_turma, id_matricula, nome_do_aluno, turmas_disponiveis, id_turma_atual=None):
        self.modal_visualizar_matricula.close()

        html_turmas_disponiveis = XTABLE(
            "tabela_turmas_disponiveis_aluno",
            TR(
                TH(
                    "Escolha a turma a qual o aluno irá ingressar",
                    _style="text-align: center;"
                )
            )
        )
        aluno_na_turma = False
        for x in turmas_disponiveis:
            _class_tur = ""
            console.log(x[0], id_turma_atual)
            if id_turma_atual == x[0]:
                aluno_na_turma = True
                _class_tur = " turma_atual_do_aluno"
            html_turmas_disponiveis.append(
                TR(
                    TD(x[1], _style="text-align: center;"),
                    **{
                        "_data-id_matricula": id_matricula,
                        "_data-id_escola": id_escola,
                        "_data-ano_letivo": ano_letivo,
                        "_data-id_turma": x[0],
                        "_class": "link turma_disponiveis_para_o_aluno{0}".format(_class_tur)
                    }
                )
            )
        if aluno_na_turma:
            html_turmas_disponiveis.append(
                TR(
                    TD("Retirar o(a) aluno(a) da turma", _style="text-align: center; color: red;"),
                    **{
                        "_data-id_matricula": id_matricula,
                        "_data-id_escola": id_escola,
                        "_data-ano_letivo": ano_letivo,
                        "_data-id_turma": x[0],
                        "_class": "link retirar_aluno_da_turma"
                    }
                )
            )
        titu = "Adicionar o(a) aluno(a) {0} em uma turma.".format(nome_do_aluno)
        if aluno_na_turma:
            titu = "Alterar turma do(a) aluno(a) {0}".format(nome_do_aluno)
        self.modal_adicionar_aluno_turma = modal.Modal(
            "#modal_adicionar_aluno_turma",
            **{
                "title": titu,
                "content": html_turmas_disponiveis,
            }
        )
        self.modal_adicionar_aluno_turma.open()
        jQuery(".turma_disponiveis_para_o_aluno").off("click.turma_disponiveis_para_o_aluno").on(
            "click.turma_disponiveis_para_o_aluno",
            lambda: self._adicionar_aluno_na_turma(this)
        )
        jQuery(".retirar_aluno_da_turma").off("click.retirar_aluno_da_turma").on(
            "click.retirar_aluno_da_turma",
            lambda: self._remover_aluno_na_turma(this)
        )

    def _adicionar_aluno_na_turma(self, el):
        id_matricula = jQuery(el).data("id_matricula")
        id_escola = jQuery(el).data("id_escola")
        ano_letivo = jQuery(el).data("ano_letivo")
        id_turma = jQuery(el).data("id_turma")
        formdata = __new__(FormData())
        formdata.append(
            "id_matricula",
            id_matricula
        )
        formdata.append(
            "id_turma",
            id_turma
        )
        window.PhanterPWA.PUT(
            "api",
            "turma",
            id_escola,
            ano_letivo,
            "remanejar",
            id_turma,
            id_matricula,
            onComplete=self._depois_de_adicionar_a_turma,
            form_data=formdata,
        )

    def _depois_de_adicionar_a_turma(self, data, ajax_status):
        if ajax_status == "success":
            self.modal_adicionar_aluno_turma.close()
            window.PhanterPWA.flash("Edição da turma do(a) aluno(a) realizada com sucesso!")
            window.location.reload()

    def _remover_aluno_na_turma(self, el):
        id_matricula = jQuery(el).data("id_matricula")
        id_escola = jQuery(el).data("id_escola")
        ano_letivo = jQuery(el).data("ano_letivo")
        id_turma = jQuery(el).data("id_turma")
        formdata = __new__(FormData())
        formdata.append(
            "id_matricula",
            id_matricula
        )
        formdata.append(
            "id_turma",
            id_turma
        )
        window.PhanterPWA.PUT(
            "api",
            "matricula",
            "remover-da-turma",
            id_escola,
            ano_letivo,
            id_matricula,
            onComplete=self._depois_de_remover_da_turma,
        )

    def _depois_de_remover_da_turma(self, data, ajax_status):
        if ajax_status == "success":
            self.modal_adicionar_aluno_turma.close()
            window.PhanterPWA.flash("Aluno(a) retirado(a) da turma")
            window.location.reload()


__pragma__('nokwargs')
