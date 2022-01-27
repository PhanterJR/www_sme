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


class Matriculas():
    def __init__(self, index_instance, id_escola, ano_letivo):
        self.index_instance = index_instance
        self.id_escola = id_escola
        self.ano_letivo = ano_letivo
        html = DIV(
            DIV(
                FORM(
                    DIV(
                        DIV(
                            DIV(
                                widgets.Input(
                                    "search_matriculas",
                                    label="Localizar Aluno(a)",
                                    placeholder="Nome ou parte do nome do aluno",
                                    icon=I(_class="fab fa-sistrix"),
                                    icon_on_click=lambda: self.search()
                                ),
                                _id="search_matriculas_container",
                                _class="p-col w1p100 w3p50 w4p75",
                            ),
                            DIV(
                                widgets.Select(
                                    "campos_matriculas",
                                    label="Campos à pesquisar",
                                    placeholder="Escolha o Campo",
                                    value="aluno",
                                    data_set=[
                                        ["id", "ID"],
                                        ["aluno", "Nome do(a) Aluno(a)"],
                                        ["data_nasc", "Data de Nascimento"],
                                        ["nome_do_pai", "Nome do Pai"],
                                        ["nome_da_mae", "Nome da Mãe"],
                                    ]
                                ),
                                _id="phanterpwa-input-search_field-matriculas",
                                _class="p-col w1p100 w3p50 w4p25"
                            ),
                            _class="p-row e-padding_20w"
                        ),
                        _class="phanterpwa-container-section"
                    ),
                    _action="#",
                    _id="search_matriculas",
                    _class="form-search_matriculas",
                    _enctype="multipart/form-data",
                    _method="post",
                    _autocomplete="off"
                ),
                _class="phanterpwa_tables_search_wrapper"
            ),
            DIV(_id='lista-matriculas-subtitle', _class="phanterpwa-subtitle"),
            DIV(
                DIV(
                    DIV(preloaders.android, _style="width: 300px; height: 300px; overflow: hidden; margin: auto;"),
                    _style="text-align:center; padding: 50px 0;"
                ),
                _id='lista-matriculas-container',
                _class="phanterpwa_tables_container"
            ),
            DIV(_id="modal_visualizar_aluno"),
            DIV(_id="modal_matricula_aluno"),
            DIV(_id="modal_desistencia_aluno"),
            DIV(_id="modal_transferencia_aluno"),
            DIV(_id="modal_deletar_matricula_container"),
            DIV(_id="modal_documentos"),
            DIV(
                I(_class="fas fa-print"),
                _class="imprimir fixed_button",
                _title="Imprimir lista de alunos matriculados por turma"
            ),
            _class='matriculas-container phanterpwa-card-container'
        )
        html.html_to("#content-painel-matriculas")
        self.search()

    def binds(self):
        jQuery(
            "#phanterpwa-widget-input-input-search_matriculas"
        ).off(
            "keydown.search_aluno_matricula"
        ).on(
            "keydown.search_aluno_matricula",
            self._onkeydown
        )

        jQuery(
            "#phanterpwa-widget-input-input-search_matriculas"
        ).off(
            "keyup.search_aluno_matricula"
        ).on(
            "keyup.search_aluno_matricula",
            self._onkeyup
        )

        jQuery(
            "#phanterpwa-widget-input-input-search_matriculas"
        ).off(
            "keypress.search_aluno_matricula"
        ).on(
            "keypress.search_aluno_matricula",
            self._onkeypress
        )

        jQuery(
            "#phanterpwa-widget-select-input-campos_matriculas"
        ).off(
            "change.search_field-matriculas"
        ).on(
            "change.search_field-matriculas",
            lambda: self.mudar_input_search(this)
        )
        jQuery(
            ".imprimir.fixed_button"
        ).off(
            "click.imprimir_matriculas"
        ).on(
            "click.simprimir_matriculas",
            lambda: setTimeout(window.print(), 500)
        )


    def mudar_input_search(self, el):
        element = jQuery(el)
        campo = element.val()
        jQuery("#phanterpwa-widget-input-input-search_matriculas").val("")
        if campo == "Nome do(a) Aluno(a)":
            jQuery("#search_matriculas_container").find("label").text("Localizar Aluno(a)")
            jQuery("#phanterpwa-widget-input-input-search_matriculas").attr("placeholder", "Nome ou parte do nome do aluno")
        elif campo == "Nome do Pai":
            jQuery("#search_matriculas_container").find("label").text("Localizar Pai")
            jQuery("#phanterpwa-widget-input-input-search_matriculas").attr("placeholder", "Nome ou parte do nome do pai")
        elif campo == "Nome da Mãe":
            jQuery("#search_matriculas_container").find("label").text("Localizar Mãe")
            jQuery("#phanterpwa-widget-input-input-search_matriculas").attr("placeholder", "Nome ou parte do nome da mãe")
        elif campo == "ID":
            jQuery("#search_matriculas_container").find("label").text("Localizar pelo ID")
            jQuery("#phanterpwa-widget-input-input-search_matriculas").attr("placeholder", "Digite o id do(a) aluno(a)")
        elif campo == "Data de Nascimento":
            jQuery("#search_matriculas_container").find("label").text("Filtrar pela Data de Nascimento")
            jQuery("#phanterpwa-widget-input-input-search_matriculas").attr("placeholder", "Digite a data de nascimento")

    def _onkeydown(self, event):
        element = jQuery(
            "#phanterpwa-widget-input-input-search_matriculas"
        )
        self.valor_atual = ""
        valores = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        if str(event.key) in valores:
            value = element.val()
            nvalue = fmasks.stringFilter(value)

    def _onkeypress(self, event):
        element = jQuery(
            "#phanterpwa-widget-input-input-search_matriculas"
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
            "#phanterpwa-widget-input-input-search_matriculas"
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
            if json.matriculas is None:
                window.PhanterPWA.open_way("matricula/novo")
            else:
                self.process_data(json)

    def _on_sort(self, table_head_instance):
        widgets = window.PhanterPWA.Request.widgets
        page = widgets["matriculas-table-footer"].page()
        search = widgets["search_matriculas"].value()
        field = widgets["campos_matriculas"].value()
        sorted_field = widgets["matriculas-table-head"].sorted_field()
        self._get_data_search(search=search, field=field, orderby=sorted_field[0], sort=sorted_field[1], page=page)

    def _on_page(self, table_pagination_instance):
        widgets = window.PhanterPWA.Request.widgets
        page = widgets["matriculas-table-footer"].page()
        search = widgets["search_matriculas"].value()
        field = widgets["campos_matriculas"].value()
        sorted_field = widgets["matriculas-table-head"].sorted_field()
        self._get_data_search(search=search, field=field, orderby=sorted_field[0], sort=sorted_field[1], page=page)

    def _class_resultados(self, resultados):
        _class = ""
        resultados_permitidos = [
            "Início do Ano"
        ]
        corres_romanos = ["I", "II", "III", "IV", "V", "VI"]
        for x in range(self.quant_unidades):
            resultados_permitidos.append(
                "Unidade {0} Completada".format(corres_romanos[x])
            )
        if resultados is not None and resultados is not js_undefined:
            if resultados.desistente is True:
                _class = " eh_desistente"
            elif resultados.transferido is True and resultados.unidade_trans in resultados_permitidos:
                _class = " eh_transferido"
        return "linha_matriculado{0}".format(_class)

    def process_data(self, json):
        self.matriculas = {}
        if self.current_hash is not json.hash:
            self.current_hash = json.hash
            self.quant_unidades = json.quant_unidades
            matriculas = json.dados_matriculas
            matriculas_sem_turma = json.dados_matriculas_sem_turma
            jQuery("#lista-matriculas-subtitle").text(json.message)
            html_tabelas = CONCATENATE()
            nao_eh_pesquisa = True
            tem_aluno_sem_turma = False
            if matriculas_sem_turma is not js_undefined:
                cont_sem_turma = 0
                for x in matriculas_sem_turma:
                    cont_sem_turma += 1
                    tem_aluno_sem_turma = True
                    lista_de_serie = []
                    ordem = 0
                    if cont_sem_turma == 1:
                        table = XTABLE(
                            "matriculas-table-sem_turma",
                            THEAD(TR(TH(XML("&#160;"), _colspan=8, _style="border-top: hidden; border-left: hidden; border-right: hidden;"))),
                            TFOOT(TR(TH(XML("&#160;"), _colspan=8, _style="border-bottom: hidden; border-left: hidden; border-right: hidden;"))),
                            TR(TH("ALUNOS MATRICULADOS SEM TURMA", _colspan=8, _style="text-align: center; color: white; background-color: red;")),
                            XTRH(
                                "matriculas-table-head-sem_turma",
                                "Aluno(a)",
                                "Data Nascimento",
                                "Nome do Pai",
                                "Nome da Mãe",
                                "Série da Matrícula",
                                TH(DIV(
                                    I(_class="fas fa-plus"),
                                    **{
                                        "_phanterpwa-way": "matricular/{0}/{1}".format(self.id_escola, self.ano_letivo),
                                        "_class": "icon_button wave_on_click"
                                    }
                                ), _class="nao_imprimir"),
                            ),
                        )

                        html_tabelas.append(table)

                    data_de_nascimento_formated = ""
                    if x.data_nasc is not None and x.data_nasc is not js_undefined:
                        data_de_nascimento_formated = validations.format_iso_date_datetime(
                            x.data_nasc, "dd/MM/yyyy", "date"
                        )

                    vars_aluno = {
                        "aluno": x.aluno,
                        "data_de_nascimento": data_de_nascimento_formated,
                        "nome_do_pai": x.nome_do_pai,
                        "nome_da_mae": x.nome_da_mae,
                    }

                    self.matriculas[x.id] = x

                    vars_serialized = jQuery.param(vars_aluno)
                    ano_letivo = ""
                    id_escola = ""

                    if self.ano_letivo is not None and self.ano_letivo is not js_undefined:
                        ano_letivo = "/{0}".format(self.ano_letivo)

                    if self.escola is not None and self.escola is not js_undefined:
                        id_escola = "/{0}".format(self.escola["id"])

                    ordem += 1
                    x['numero_aluno'] = ordem
                    resultado = "Em aberto"
                    if x.resultados is not None:
                        if x.resultados.resultado_final is not None:
                            resultado = x.resultados.resultado_final
                    table.append(
                        XTRD(
                            "matriculas-table-data-{0}".format(x.id),
                            x.aluno,
                            data_de_nascimento_formated,
                            x.nome_do_pai,
                            x.nome_da_mae,
                            x.serie,
                            TD(
                                widgets.MenuBox(
                                    "drop_{0}".format(x.id),
                                    I(_class="fas fa-ellipsis-v"),
                                    widgets.MenuOption("Dados do Aluno", **{
                                        "_class": "botao_visualizar_aluno wave_on_click",
                                        "_data-id_aluno": x.id_aluno,
                                    }),
                                    widgets.MenuOption("Documentos", **{
                                        "_class": "botao_documentos wave_on_click",
                                        "_data-id_matricula": x.id,
                                        "_data-id_aluno": x.id_aluno,
                                        "_data-nome_aluno": x.aluno,
                                    }),
                                    widgets.MenuOption("Editar Matrícula", **{
                                        "_class": "botao_editar_aluno wave_on_click",
                                        "_href": window.PhanterPWA.XWAY(
                                            "matricula",
                                            x.id_aluno,
                                            "aluno-conferido",
                                            self.id_escola,
                                            self.ano_letivo,
                                            **{
                                                "_retornar": window.PhanterPWA.get_current_way()
                                            }
                                        )
                                    }),
                                    widgets.MenuOption("Cancelar Matrícula", **{
                                        "_class": "botao_deletar_matricula wave_on_click",
                                        "_data-id_matricula": x.id
                                    }),
                                    widgets.MenuOption("Adicionar na Turma", **{
                                        "_class": "botao_aluno_enturmar wave_on_click",
                                        "_data-id_matricula": x.id
                                    }),
                                    onOpen=lambda: self.binds_menu_aluno_sem_turma()
                                ),
                                _class="nao_imprimir"
                            ),
                            **{
                                "drag_and_drop": False,
                                "_data-id_matricula": x.id
                            }
                        )
                    )
            if tem_aluno_sem_turma and nao_eh_pesquisa:
                html_tabelas.append(HR())
                html_tabelas.append(H3("Lista de Alunos por Turma"))
            if matriculas is not js_undefined:
                lista_de_turma = []
                lista_de_serie = []
                ordem = 0
                for x in matriculas:
                    if x.turma not in lista_de_turma:
                        lista_de_turma.append(x.turma)
                        lista_de_serie = []
                        ordem = 0
                        table = XTABLE(
                            "matriculas-table-{0}".format(x.id_turma),
                            THEAD(TR(TH(XML("&#160;"), _colspan=8, _style="border-top: hidden; border-left: hidden; border-right: hidden;"))),
                            TFOOT(TR(TH(XML("&#160;"), _colspan=8, _style="border-bottom: hidden; border-left: hidden; border-right: hidden;"))),
                            TR(TH(x.turma, _colspan=8, _style="text-align: center; color: white; background-color: grey;")),
                            XTRH(
                                "matriculas-table-head-{0}".format(x.id_turma),
                                "Nº",
                                "Aluno(a)",
                                "Data Nascimento",
                                "Nome do Pai",
                                "Nome da Mãe",
                                "Endereço",
                                "Resultado",
                                TH(DIV(
                                    I(_class="fas fa-plus"),
                                    **{
                                        "_phanterpwa-way": "matricula/novo",
                                        "_class": "icon_button wave_on_click"
                                    }
                                ), _class="nao_imprimir"),
                            ),
                        )

                        html_tabelas.append(table)

                    if x.eh_multisseriado:
                        if x.serie not in lista_de_serie:
                            lista_de_serie.append(x.serie)
                            table.append(
                                TR(TH(x.serie, _colspan=8, _style="text-align: center; color: orange;"), _style="background-color: #f7f7f7;border-top: solid 1px rgba(51, 51, 51, 0.12);")
                            )

                    data_de_nascimento_formated = ""
                    if x.data_nasc is not None and x.data_nasc is not js_undefined:
                        data_de_nascimento_formated = validations.format_iso_date_datetime(
                            x.data_nasc, "dd/MM/yyyy", "date"
                        )

                    vars_aluno = {
                        "aluno": x.aluno,
                        "data_de_nascimento": data_de_nascimento_formated,
                        "nome_do_pai": x.nome_do_pai,
                        "nome_da_mae": x.nome_da_mae,
                    }

                    self.matriculas[x.id] = x

                    vars_serialized = jQuery.param(vars_aluno)
                    ano_letivo = ""
                    id_escola = ""

                    if self.ano_letivo is not None and self.ano_letivo is not js_undefined:
                        ano_letivo = "/{0}".format(self.ano_letivo)

                    if self.escola is not None and self.escola is not js_undefined:
                        id_escola = "/{0}".format(self.escola["id"])

                    ordem += 1
                    x['numero_aluno'] = ordem
                    resultado = "Em aberto"
                    if x.resultados is not None:
                        if x.resultados.resultado_final is not None:
                            resultado = x.resultados.resultado_final
                    table.append(
                        XTRD(
                            "matriculas-table-data-{0}".format(x.id),
                            ordem,
                            x.aluno,
                            data_de_nascimento_formated,
                            x.nome_do_pai,
                            x.nome_da_mae,
                            x.endereco,
                            resultado,
                            TD(
                                widgets.MenuBox(
                                    "drop_{0}".format(x.id),
                                    I(_class="fas fa-ellipsis-v"),
                                    widgets.MenuOption("Dados do Aluno", **{
                                        "_class": "botao_visualizar_aluno wave_on_click",
                                        "_data-id_aluno": x.id_aluno,
                                    }),
                                    widgets.MenuOption("Documentos", **{
                                        "_class": "botao_documentos wave_on_click",
                                        "_data-id_matricula": x.id,
                                        "_data-id_aluno": x.id_aluno,
                                        "_data-nome_aluno": x.aluno,
                                        "_data-resultado": resultado
                                    }),
                                    widgets.MenuOption("Visualizar Matrícula", **{
                                        "_class": "botao_visualizar_matricula wave_on_click",
                                        "_data-id_matricula": x.id
                                    }),
                                    widgets.MenuOption("Desistência", **{
                                        "_class": "botao_aluno_desistente wave_on_click",
                                        "_data-id_matricula": x.id
                                    }),
                                    widgets.MenuOption("Transferência", **{
                                        "_class": "botao_transferir_aluno wave_on_click",
                                        "_data-id_matricula": x.id
                                    }),
                                    onOpen=lambda: self.binds_menu_aluno()
                                ),
                                _class="nao_imprimir"
                            ),
                            **{
                                "drag_and_drop": False,
                                "_class": self._class_resultados(x.resultados),
                                "_data-id_matricula": x.id
                            }
                        )
                    )

            html_turmas = DIV(
                DIV(
                    html_tabelas,
                    _class='p-row card e-padding_auto continuos'
                ),
                _class="phanterpwa-media-print-container"
            )

            html_turmas.html_to("#lista-matriculas-container")
            self.binds()
            def change_attr_drop(el):
                targ = jQuery(el).attr("phanterpwa_dowpdown_target")
                jQuery(el).attr("data-target", targ)
                # jQuery(el).dropdown()
            jQuery("[phanterpwa_dowpdown_target]").each(lambda: change_attr_drop(this))


    def binds_menu_aluno_sem_turma(self):
        jQuery(
            ".botao_deletar_matricula"
        ).off(
            "click.botao_revogar_matricula"
        ).on(
            "click.botao_revogar_matricula",
            lambda: self.modal_confirmar_deletar_matricula(this)
        )
        jQuery(
            ".botao_visualizar_aluno"
        ).off(
            "click.botao_visualizar_aluno"
        ).on(
            "click.botao_visualizar_aluno",
            lambda: self.get_visualizar_aluno(this)
        )
        jQuery(
            ".botao_documentos"
        ).off(
            "click.botao_documentos"
        ).on(
            "click.botao_documentos",
            lambda: self.abrir_modal_documentos(this)
        )


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
            ".botao_aluno_desistente"
        ).off(
            "click.botao_aluno_desistente"
        ).on(
            "click.botao_aluno_desistente",
            lambda: self.abrir_modal_desistencia(this)
        )
        jQuery(
            ".botao_transferir_aluno"
        ).off(
            "click.botao_transferir_aluno"
        ).on(
            "click.botao_transferir_aluno",
            lambda: self.abrir_modal_transferencia(this)
        )
        jQuery(
            ".botao_documentos"
        ).off(
            "click.botao_documentos"
        ).on(
            "click.botao_documentos",
            lambda: self.abrir_modal_documentos(this)
        )

    def _get_data_search(self, search="", field="aluno", orderby="turma", sort="asc", page=1):
        self._search = search
        self._field = field
        self._orderby = orderby
        self._sort = sort
        self._page = page
        window.PhanterPWA.ApiServer.GET(**{
            'url_args': ["api", "matriculas", "lista", self.id_escola, self.ano_letivo],
            'url_vars': {
                "search": search,
                "field": field,
                "orderby": orderby,
                "sort": sort,
                "page": page
            },
            'onComplete': self.after_get,
            'get_cache': self.process_data
        })

    def search(self):
        widgets = window.PhanterPWA.Request.widgets
        search = widgets["search_matriculas"].value()
        field = widgets["campos_matriculas"].value()
        self._get_data_search(search=search, field=field, orderby=field, sort="asc", page=1)

    def get_visualizar_aluno(self, widget_instance):
        id_aluno = jQuery(widget_instance).data("id_aluno")
        window.PhanterPWA.GET(
            "api",
            "aluno",
            id_aluno,
            "visualizar",
            onComplete=lambda data, ajax_status: self.modal_add_matriculas_visualizar(data, ajax_status)
        )

    # def get_deletar_aluno(self, widget_instance):
    #     id_aluno = jQuery(widget_instance).data("id_aluno")
    #     window.PhanterPWA.DELETE(
    #         "api",
    #         "aluno",
    #         id_aluno,
    #         onComplete=self.depois_de_deletar
    #     )

    # def depois_de_deletar(self, data, ajax_status):
    #     if ajax_status == "success":
    #         json = data.responseJSON
    #         if data.code == 202:
    #             window.PhanterPWA.flash(json.message)
    #         else:
    #             window.PhanterPWA.flash(json.message)
    #         window.PhanterPWA.GET(**{
    #             'url_args': ["api", "matriculas"],
    #             'url_vars': {
    #                 "search": self._search,
    #                 "field": self._field,
    #                 "orderby": self._orderby,
    #                 "sort": self._sort,
    #                 "page": self._page
    #             },
    #             'onComplete': self.after_get,
    #             'get_cache': self.process_data
    #         })
    #     else:
    #         window.PhanterPWA.flash(json.message)

    def modal_add_matriculas_visualizar(self, data, ajax_status):
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
            window.PhanterPWA.flash("Não há matriculas_visualizar matriculados para a série da turma")

    def abrir_modal_desistencia(self, el):
        id_matricula = jQuery(el).data("id_matricula")
        nome_aluno = self.matriculas[int(id_matricula)].aluno
        des_data = self.matriculas[int(id_matricula)].resultados.unidade_des or ""
        sexo = self.matriculas[int(id_matricula)].sexo
        texto1 = P("Informa abaixo quando o(a) aluno(a) ", STRONG(nome_aluno), " desistiu, ",
            "com esta informação poderemos fazer o levantamento do indicador de desempenho.")
        texto2 = P("Se o(a) aluno(a) não desistiu, ",
            "escolha a opção vazia.", _style="color: red;")

        if sexo == 1:
            texto1 = P("Informa abaixo quando o aluno ", STRONG(nome_aluno), " desistiu, ",
                "com esta informação poderemos fazer o levantamento do indicador de desempenho.")
            texto2 = P("Se o aluno não desistiu, ",
                "escolha a opção vazia.", _style="color: red;")
        elif sexo == 2:
            texto1 = P("Informa abaixo quando a aluna ", STRONG(nome_aluno), " desistiu, ",
                "com esta informação poderemos fazer o levantamento do indicador de desempenho.")
            texto2 = P("Se a aluna não desistiu, ",
                "escolha a opção vazia.", _style="color: red;")
        data_set = [
            "Início do Ano"
        ]
        corres_romanos = ["I", "II", "III", "IV", "V", "VI"]
        for x in range(self.quant_unidades):
            data_set.append(
                "Unidade {0} Completada".format(corres_romanos[x])
            )
        data_set.append("Fim de Curso")


        content = CONCATENATE(
            texto1,
            texto2,
            DIV(
                widgets.Select(
                    "unidade_des",
                    label="Quando desistiu?",
                    value=des_data,
                    can_empty=True,
                    data_set=data_set
                ),
                _id="phanterpwa-input-search_field-matriculas",
                _class="p-col w1p100"
            ),
        )
        footer = DIV(
            forms.FormButton(
                "confirmar_desistencia",
                "Confirmar",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ),
            _class='phanterpwa-form-buttons-container'
        )
        self.modal_desistencia = modal.Modal(
            "#modal_desistencia_aluno",
            **{
                "title": "Desistência de {0}".format(nome_aluno),
                "content": content,
                "footer": footer,
            }
        )
        self.modal_desistencia.open()
        jQuery("#phanterpwa-widget-form-form_button-confirmar_desistencia").off(
            "click.confirmar_desistencia"
        ).on(
            "click.confirmar_desistencia",
            lambda: self._on_click_confirmar_desistencia(id_matricula)
        )

    def _on_click_confirmar_desistencia(self, id_matricula):

        formdata = __new__(FormData())
        formdata.append(
            "quando_desistiu",
            jQuery("#phanterpwa-widget-select-input-unidade_des").val()
        )
        
        window.PhanterPWA.PUT(
            "api",
            "matricula",
            "desistencia",
            self.id_escola,
            self.ano_letivo,
            id_matricula,
            form_data=formdata,
            onComplete=lambda data, ajax_status: self.depois_de_confirmar_desistencia(data, ajax_status)
        )

    def depois_de_confirmar_desistencia(self, data, ajax_status):
        if ajax_status == "success":
            self.modal_desistencia.close()
            json = data.responseJSON
            data_de_nascimento_formated = ""
            numero_aluno = self.matriculas[json.data_matricula.id]['numero_aluno']
            self.matriculas[json.data_matricula.id] = json.data_matricula
            if json.data_matricula.data_nasc is not None and json.data_matricula.data_nasc is not js_undefined:
                data_de_nascimento_formated = validations.format_iso_date_datetime(
                    json.data_matricula.data_nasc, "dd/MM/yyyy", "date"
                )
            resultado = "Em aberto"
            if json.data_matricula.resultados is not None:
                if json.data_matricula.resultados.resultado_final is not None:
                    resultado = json.data_matricula.resultados.resultado_final
            html_xd = XTRD(
                "matriculas-table-data-{0}".format(json.data_matricula.id),
                numero_aluno,
                json.data_matricula.aluno,
                data_de_nascimento_formated,
                json.data_matricula.nome_do_pai,
                json.data_matricula.nome_da_mae,
                json.data_matricula.endereco,
                resultado,
                TD(
                    widgets.MenuBox(
                        "drop_{0}".format(json.data_matricula.id),
                        I(_class="fas fa-ellipsis-v"),
                        widgets.MenuOption("Dados do Aluno", **{
                            "_class": "botao_visualizar_aluno wave_on_click",
                            "_data-id_aluno": json.data_matricula.id_aluno,
                        }),
                        widgets.MenuOption("Visualizar Matrícula", **{
                            "_class": "botao_visualizar_matricula wave_on_click",
                            "_data-id_matricula": json.data_matricula.id
                        }),
                        widgets.MenuOption("Desistência", **{
                            "_class": "botao_aluno_desistente wave_on_click",
                            "_data-id_matricula": json.data_matricula.id
                        }),
                        widgets.MenuOption("Transferência", **{
                            "_class": "botao_transferir_aluno wave_on_click",
                            "_data-id_matricula": json.data_matricula.id
                        }),
                        onOpen=lambda: self.binds_menu_aluno()
                    ),
                    _class="nao_imprimir"
                ),
                **{
                    "drag_and_drop": False,
                    "_class": self._class_resultados(json.data_matricula.resultados),
                    "_data-id_matricula": json.data_matricula.id
                }
            )
            jQuery("#phanterpwa-widget-matriculas-table-data-{0}".format(json.data_matricula.id)).replaceWith(
                html_xd.jquery()
            )
            self.binds()

    def abrir_modal_transferencia(self, el):
        id_matricula = jQuery(el).data("id_matricula")
        trans_data = self.matriculas[int(id_matricula)].resultados.unidade_trans or ""
        nome_aluno = self.matriculas[int(id_matricula)].aluno
        sexo = self.matriculas[int(id_matricula)].sexo
        texto1 = P("Informa abaixo quando o(a) aluno(a) ", STRONG(nome_aluno), " foi transferido(a), ",
            "com esta informação poderemos fazer o levantamento do indicador de desempenho.",
            " Caso a transferencia seja no final do curso não haverá indicativo visual de que ",
            " foi transferido(a)."
        )
        texto2 = P("Se o(a) aluno(a) não foi transferido(a), ",
            "escolha a opção vazia.", _style="color: red;")

        if sexo == 1:
            texto1 = P("Informa abaixo quando o aluno ", STRONG(nome_aluno), " foi transferido, ",
                "com esta informação poderemos fazer o levantamento do indicador de desempenho.",
                " Caso a transferencia seja no final do curso não haverá indicativo visual de que ",
                " foi transferido."
            )
            texto2 = P("Se o aluno não foi transferido, ",
                "escolha a opção vazia.", _style="color: red;")
        elif sexo == 2:
            texto1 = P("Informa abaixo quando a aluna ", STRONG(nome_aluno), " foi transferida, ",
                "com esta informação poderemos fazer o levantamento do indicador de desempenho.",
                " Caso a transferencia seja no final do curso não haverá indicativo visual de que ",
                " foi transferida."
            )
            texto2 = P("Se a aluna não foi transferida, ",
                "escolha a opção vazia.", _style="color: red;")
        data_set = [
            "Início do Ano"
        ]
        corres_romanos = ["I", "II", "III", "IV", "V", "VI"]
        for x in range(self.quant_unidades):
            data_set.append(
                "Unidade {0} Completada".format(corres_romanos[x])
            )
        data_set.append("Fim de Curso")


        content = CONCATENATE(
            texto1,
            texto2,
            DIV(
                widgets.Select(
                    "unidade_trams",
                    label="Quando foi a Transferência?",
                    value=trans_data,
                    can_empty=True,
                    data_set=data_set
                ),
                _id="phanterpwa-input-search_field-matriculas",
                _class="p-col w1p100"
            ),
        )
        footer = DIV(
            forms.FormButton(
                "confirmar_transferencia",
                "Confirmar",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ),
            _class='phanterpwa-form-buttons-container'
        )
        self.modal_transferencia = modal.Modal(
            "#modal_transferencia_aluno",
            **{
                "title": "Transferência de {0}".format(nome_aluno),
                "content": content,
                "footer": footer,
            }
        )
        self.modal_transferencia.open()
        jQuery("#phanterpwa-widget-form-form_button-confirmar_transferencia").off(
            "click.confirmar_transferencia"
        ).on(
            "click.confirmar_transferencia",
            lambda: self._on_click_confirmar_transferencia(id_matricula)
        )

    def _on_click_confirmar_transferencia(self, id_matricula):

        formdata = __new__(FormData())
        formdata.append(
            "quando_transferiu",
            jQuery("#phanterpwa-widget-select-input-unidade_trams").val()
        )
        
        window.PhanterPWA.PUT(
            "api",
            "matricula",
            "transferencia",
            self.id_escola,
            self.ano_letivo,
            id_matricula,
            form_data=formdata,
            onComplete=lambda data, ajax_status: self.depois_de_confirmar_transferencia(data, ajax_status)
        )

    def depois_de_confirmar_transferencia(self, data, ajax_status):
        if ajax_status == "success":
            self.modal_transferencia.close()
            json = data.responseJSON
            data_de_nascimento_formated = ""
            numero_aluno = self.matriculas[json.data_matricula.id]['numero_aluno']
            self.matriculas[json.data_matricula.id] = json.data_matricula
            if json.data_matricula.data_nasc is not None and json.data_matricula.data_nasc is not js_undefined:
                data_de_nascimento_formated = validations.format_iso_date_datetime(
                    json.data_matricula.data_nasc, "dd/MM/yyyy", "date"
                )
            resultado = "Em aberto"
            if json.data_matricula.resultados is not None:
                if json.data_matricula.resultados.resultado_final is not None:
                    resultado = json.data_matricula.resultados.resultado_final
            html_xd = XTRD(
                "matriculas-table-data-{0}".format(json.data_matricula.id),
                numero_aluno,
                json.data_matricula.aluno,
                data_de_nascimento_formated,
                json.data_matricula.nome_do_pai,
                json.data_matricula.nome_da_mae,
                json.data_matricula.endereco,
                resultado,
                TD(
                    widgets.MenuBox(
                        "drop_{0}".format(json.data_matricula.id),
                        I(_class="fas fa-ellipsis-v"),
                        widgets.MenuOption("Dados do Aluno", **{
                            "_class": "botao_visualizar_aluno wave_on_click",
                            "_data-id_aluno": json.data_matricula.id_aluno,
                        }),
                        widgets.MenuOption("Visualizar Matrícula", **{
                            "_class": "botao_visualizar_matricula wave_on_click",
                            "_data-id_matricula": json.data_matricula.id
                        }),
                        widgets.MenuOption("Desistência", **{
                            "_class": "botao_aluno_desistente wave_on_click",
                            "_data-id_matricula": json.data_matricula.id
                        }),
                        widgets.MenuOption("Transferência", **{
                            "_class": "botao_transferir_aluno wave_on_click",
                            "_data-id_matricula": json.data_matricula.id
                        }),
                        onOpen=lambda: self.binds_menu_aluno()
                    ),
                    _class="nao_imprimir"
                ),
                **{
                    "drag_and_drop": False,
                    "_class": self._class_resultados(json.data_matricula.resultados),
                    "_data-id_matricula": json.data_matricula.id
                }
            )
            jQuery("#phanterpwa-widget-matriculas-table-data-{0}".format(json.data_matricula.id)).replaceWith(
                html_xd.jquery()
            )
            self.binds()

    def modal_confirmar_deletar_matricula(self, el):
        id_matricula = jQuery(el).data("id_matricula")
        content = DIV(
            P("Atenção, a matrícula do  aluno será deletada permanentemente, se ",
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
            "#modal_deletar_matricula_container",
            **{
                "title": "Deletar Matrícula do(a) aluno(a)",
                "content": content,
                "footer": footer,
                "form": "deletar_matricula"
            }
        )
        self.modal_deletar_matricula.open()
        jQuery("#phanterpwa-widget-form-form_button-deletar_matricula_sim").off(
            "click.adicionar_deletar_matricula_sim"
        ).on(
            "click.adicionar_deletar_matricula_sim",
            lambda: self._on_click_deletar_matricula(id_matricula)
        )
        jQuery("#phanterpwa-widget-form-form_button-deletar_matricula_nao").off(
            "click.adicionar_deletar_matricula_nao"
        ).on(
            "click.adicionar_deletar_matricula_nao",
            lambda: self.modal_deletar_matricula.close()
        )

    def _on_click_deletar_matricula(self, id_matricula):
        window.PhanterPWA.DELETE(
            "api",
            "matricula",
            "deletar",
            self.id_escola,
            self.ano_letivo,
            id_matricula,
            onComplete=self.depois_de_deletar_ou_retirar
        )
        self.modal_deletar_matricula.close()

    def depois_de_deletar_ou_retirar(self, data, ajax_status):
        if ajax_status == "success":
            self.search()

    def abrir_modal_documentos(self, el):
        id_matricula = jQuery(el).data("id_matricula")
        id_aluno = jQuery(el).data("id_aluno")
        nome_aluno = jQuery(el).data("nome_aluno")
        resultado = jQuery(el).data("resultado")
        lista_de_resultados_validos = ['Aprovado(a)', 'Reprovado(a)', 'Reprovado(a) - Falta a Recuperação', 'Aprovado(a) no Conselho', 'Reprovado(a) no Conselho', 'Desistente']
        html_botao_declaracao_de_transferencia = ""
        if resultado in lista_de_resultados_validos:
            html_botao_declaracao_de_transferencia = DIV(
                DIV(
                    I(_class="fas fa-file-alt"),
                    _class="icon_documentos_button"
                ),
                DIV(
                    "Declaração de Transferência",
                    _class="descricao_documentos_button"
                ),
                _class="p-col w4p33 w1p50 link",
                **{"_phanterpwa-way": "imprimir/declaracao-de-transferencia/{0}?_retornar=matriculas/lista/{1}/{2}/".format(id_matricula, self.id_escola, self.ano_letivo)}
            )


        html_documentos = DIV(
            DIV(
                DIV(
                    I(_class="fas fa-file-alt"),
                    _class="icon_documentos_button"
                ),
                DIV(
                    "Matrícula",
                    _class="descricao_documentos_button"
                ),
                _class="p-col w4p33 w1p50 link",
                **{"_phanterpwa-way": "imprimir/matricula/{0}?_retornar=matriculas/lista/{1}/{2}/".format(id_matricula, self.id_escola, self.ano_letivo)}
            ),
            DIV(
                DIV(
                    I(_class="fas fa-file-alt"),
                    _class="icon_documentos_button"
                ),
                DIV(
                    "Questionário Social",
                    _class="descricao_documentos_button"
                ),
                _class="p-col w4p34 w1p50 link",
                **{"_phanterpwa-way": "imprimir/questionario-social/{0}/{1}/{2}?_retornar=matriculas/lista/{0}/{1}/".format(self.id_escola, self.ano_letivo, id_aluno)}
            ),
            DIV(
                DIV(
                    I(_class="fas fa-file-alt"),
                    _class="icon_documentos_button"
                ),
                DIV(
                    "Declaração de Matrícula",
                    _class="descricao_documentos_button"
                ),
                _class="p-col w4p33 w1p50 link",
                **{"_phanterpwa-way": "imprimir/declaracao-de-matricula/{0}?_retornar=matriculas/lista/{1}/{2}/".format(id_matricula, self.id_escola, self.ano_letivo)}
            ),
            html_botao_declaracao_de_transferencia,
            _class="p-row documentos_buttons_container"
        )

        self.modal_documentos = modal.Modal(
            "#modal_documentos",
            **{
                "title": "Documentos do(a) aluno(a) {0}".format(nome_aluno),
                "content": html_documentos,
            }
        )
        self.modal_documentos.open()



__pragma__('nokwargs')
