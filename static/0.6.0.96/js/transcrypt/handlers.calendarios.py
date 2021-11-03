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
H5 = helpers.XmlConstructor.tagger("h5")
P = helpers.XmlConstructor.tagger("p")
TH = helpers.XmlConstructor.tagger("th")
TD = helpers.XmlConstructor.tagger("td")
TR = helpers.XmlConstructor.tagger("tr")
TABLE = helpers.XmlConstructor.tagger("table")
LABEL = helpers.XmlConstructor.tagger("label")
INPUT = helpers.XmlConstructor.tagger("input", True)
I18N = helpers.I18N
XTABLE = widgets.Table
XML = helpers.XML
XTRD = widgets.TableData
XTRH = widgets.TableHead
XFOOTER = widgets.TableFooterPagination
XSECTION = helpers.XSECTION

__pragma__('kwargs')


class Index(gatehandler.Handler):
    @decorators.check_authorization(lambda: window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME", "Administrador Master Escola", "Professor(a)"]))
    def initialize(self):
        arg0 = window.PhanterPWA.Request.get_arg(0)
        arg1 = window.PhanterPWA.Request.get_arg(1)
        arg2 = window.PhanterPWA.Request.get_arg(2)
        arg3 = window.PhanterPWA.Request.get_arg(3)
        ano_ht = ""
        if arg1 is not None:
            ano_ht = DIV(arg1, _class="phanterpwa-breadcrumb")
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("CALENDÁRIO", _class="phanterpwa-breadcrumb"),
                        ano_ht,
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
                    _id="content-calendario",
                    _class='p-row card e-padding_20'
                ),

                _class="phanterpwa-container p-container"
            )
        )
        html.html_to("#main-container")
        if arg0 == "calendario-base":
            if (arg1 is None or arg1 is js_undefined):
                BackButton1 = left_bar.LeftBarButton(
                    "back_calendario",
                    "Voltar",
                    I(_class="fas fa-arrow-circle-left"),
                    **{
                        "tag": "a",
                        "_href": window.PhanterPWA.XWAY("area-do-servidor"),
                        "position": "top",
                        "show_if_way_match": r"^calendarios\/calendario-base\/?(\?.*)?$"
                    }
                )
                window.PhanterPWA.Components['left_bar'].add_button(BackButton1)
                html = anos_letivos.EscolherAnoLetivo(
                    id_target="#content-calendario",
                    callback_link=lambda ano: "#_phanterpwa:/calendarios/calendario-base/{0}".format(ano)
                )
            elif str(arg1).isdigit():
                if arg2 == "editar":
                    self.EditarCalendario = EditarCalendario(self, arg1, None)
                    BackButton1 = left_bar.LeftBarButton(
                        "back_calendario",
                        "Voltar",
                        I(_class="fas fa-arrow-circle-left"),
                        **{
                            "tag": "a",
                            "_href": window.PhanterPWA.XWAY("calendarios", arg0, arg1),
                            "position": "top",
                            "show_if_way_match": r"^calendarios\/calendario-base\/[0-9]{1,}\/[0-9]{4}\/editar\/?(\?.*)?$"
                        }
                    )
                    window.PhanterPWA.Components['left_bar'].add_button(BackButton1)
                else:
                    self.Calendario = Calendario(self, arg1, None)
                    BackButton1 = left_bar.LeftBarButton(
                        "back_calendario",
                        "Voltar",
                        I(_class="fas fa-arrow-circle-left"),
                        **{
                            "tag": "a",
                            "_href": window.PhanterPWA.XWAY("calendarios", "calendario-base"),
                            "position": "top",
                            "show_if_way_match": r"^calendarios\/calendario-base\/[0-9]{1,}\/?(\?.*)?$"
                        }
                    )
                    window.PhanterPWA.Components['left_bar'].add_button(BackButton1)
        else:
            if arg0 is None or arg0 is js_undefined:
                html = escolas.EscolherEscola(
                    id_target="#content-calendario",
                    callback_link=lambda id_escola: "#_phanterpwa:/calendarios/{0}".format(id_escola)
                )
            elif str(arg0).isdigit() and (arg1 is None or arg1 is js_undefined):
                html = anos_letivos.EscolherAnoLetivo(
                    id_target="#content-calendario",
                    callback_link=lambda ano: "#_phanterpwa:/calendarios/{0}/{1}".format(arg0, ano)
                )
            elif str(arg0).isdigit() and str(arg1).isdigit():
                if arg2 == "editar" and window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME", "Administrador Master Escola"]):
                    self.EditarCalendario = EditarCalendario(self, arg1, arg0)
                    BackButton1 = left_bar.LeftBarButton(
                        "back_calendario",
                        "Voltar",
                        I(_class="fas fa-arrow-circle-left"),
                        **{
                            "tag": "a",
                            "_href": window.PhanterPWA.XWAY("calendarios", arg0, arg1),
                            "position": "top",
                            "show_if_way_match": r"^calendarios\/[0-9]{1,}\/[0-9]{4}\/editar\/?(\?.*)?$"
                        }
                    )
                    window.PhanterPWA.Components['left_bar'].add_button(BackButton1)
                else:
                    self.Calendario = Calendario(self, arg1, arg0)
                    BackButton1 = left_bar.LeftBarButton(
                        "back_calendario",
                        "Voltar",
                        I(_class="fas fa-arrow-circle-left"),
                        **{
                            "tag": "a",
                            "_href": window.PhanterPWA.XWAY("area-do-servidor"),
                            "position": "top",
                            "show_if_way_match": r"^calendarios\/[0-9]{1,}\/[0-9]{4}\/?(\?.*)?$"
                        }
                    )
                    window.PhanterPWA.Components['left_bar'].add_button(BackButton1)


class Calendario():
    def __init__(self, index_instance, ano_letivo, escola=None):
        self.id_escola = escola
        self.ano_letivo = ano_letivo
        self.index_instance = index_instance
        self.initial_xml()
        self._get_calendario()

    def initial_xml(self):
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("CALENDARIO", _class="phanterpwa-breadcrumb"),
                        DIV(self.ano_letivo, _class="phanterpwa-breadcrumb"),
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
                    _id="content-calendario",
                    _class='p-row card e-padding_20'
                ),

                _class="phanterpwa-container p-container"
            ),
            DIV(_id="modais_calendario")
        )
        html.html_to("#main-container")
        return html

    def _get_calendario(self):
        if self.id_escola is None or self.id_escola is js_undefined:
            window.PhanterPWA.GET(
                "api",
                "calendario",
                self.ano_letivo,
                onComplete=self.after_get
            )
        else:
            window.PhanterPWA.GET(
                "api",
                "calendario",
                self.ano_letivo,
                self.id_escola,
                onComplete=self.after_get
            )

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            dias_letivos = json.total_dias_letivos
            window.PhanterPWA.flash("{0} Dias Letivos".format(dias_letivos))
            if self.id_escola is None or self.id_escola is js_undefined:
                logo_principal = "{0}/api/escolas/12/image".format(
                    window.PhanterPWA.ApiServer.remote_address
                )
                botao_editar = A(
                    I(_class="fas fa-edit"),
                    **{
                        "_class": "botao_editar_calendario icon_button",
                        "_title": "Editar Calendario",
                        "_href": window.PhanterPWA.XWAY(
                            "calendarios",
                            "calendario-base",
                            self.ano_letivo,
                            "editar"
                        )

                    }
                )
                botao_calendario_escola = A(
                    I(_class="fas fa-calendar-plus"),
                    **{
                        "_class": "botao_celendario_escola icon_button",
                        "_title": "Calendários das escolas",
                        "_href": window.PhanterPWA.XWAY("calendarios")

                    }
                )
                titulo = CONCATENATE(
                    H2("CALENDÁRIO BASE ", self.ano_letivo),
                    P("O seguinte calendário será usado como base para cada escolar",
                        " desenvolver seu próprio calendário."),
                    P("Para editá-lo acesse o botão ", I(_class="fas fa-edit"),
                        ". Para visualizar os calendários escolares acesse o botão ", I(_class="fas fa-calendar-plus"),".")
                )
            else:
                logo_principal = "{0}/api/escolas/{1}/image".format(
                    window.PhanterPWA.ApiServer.remote_address,
                    self.id_escola
                )
                botao_calendario_escola = ""
                botao_editar = A(
                    I(_class="fas fa-edit"),
                    **{
                        "_class": "botao_editar_calendario icon_button",
                        "_title": "Editar Calendario",
                        "_href": window.PhanterPWA.XWAY(
                            "calendarios",
                            self.id_escola,
                            self.ano_letivo,
                            "editar"
                        )

                    }
                )
                if window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME", "Administrador Master Escola"]):
                    titulo = CONCATENATE(
                        H2("CALENDÁRIO ESCOLAR ", self.ano_letivo),
                        P("O seguinte calendário irá definir os dias letivos que serão ",
                            "utilizados no registro de aulas ou faltas."),
                        P("Para editá-lo acesse o botão ", I(_class="fas fa-edit"),
                            ".")
                    )
                else:
                    titulo = CONCATENATE(
                        H2("CALENDÁRIO ESCOLAR ", self.ano_letivo),
                        P("O calendário abaixo é usado em seu registro de aulas e faltas dos alunos.",
                            "Aparecerão apenas os dias letivos nesses registros. É importante ",
                            "consultar a diretoria para ter certeza de que este é o calendário definitivo."),
                    )
            html = DIV(
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
                        titulo,
                        _class="p-col w1p100 w4p70",
                        _id="u_informacao_series"
                    ),
                    _class="p-row"
                ),
                _id="logo_e_calendario"
            )
            html_content = DIV(
                _class="calendario_content p-row"
            )
            for m in json.calendario:
                html_mes = TABLE(
                )
                for lin in m:
                    html_lin = TR()
                    for col in lin:
                        if col[1]["tipo"] == "cabecalho":
                            html_lin.append(TH(DIV(col[0]), **col[1]))
                        else:
                            html_lin.append(TD(DIV(col[0]), **col[1]))
                    html_mes.append(html_lin)
                html_content.append(
                    DIV(
                        DIV(html_mes, _class="calendario_mes_content"),
                        _class="p-col w1p100  w5p50  w7p33  w8p25"
                    )
                )
            if window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME", "Administrador Master Escola"]):
                add_class = " has_buttons"
            else:
                add_class = ""
                botao_editar = ""
                botao_calendario_escola = ""
            html_legenda = DIV(_class="calendario_legenda p-row")
            for x in json.legenda:
                html_legenda.append(
                    DIV(
                        DIV(
                            DIV(DIV("#", _class="hashtag_legenda"), SPAN(x[0]), **x[1]),
                            _class="linha_legenda"
                        ),
                        _class="p-col w1p100 w5p50"
                    )
                )
            html.append(
                DIV(
                    LABEL("Calendário Escolar - {0} Dias Letivos".format(dias_letivos)),
                    DIV(
                        DIV(
                            DIV(
                                DIV(
                                    DIV(
                                        DIV(
                                            DIV(
                                                html_content,
                                                _class="calendario_wrapper"
                                            ),
                                            _class="diario-ficha_avaliativa-container"
                                        ),
                                        _class="diario-ficha_avaliativa-wrapper"
                                    ),
                                    _class="p-row e-padding_auto",
                                ),
                                _class="phanterpwa-card-panel-control-content"
                            ),
                            DIV(
                                botao_editar,
                                botao_calendario_escola,
                                _class="phanterpwa-card-panel-control-buttons"
                            ),
                            _class="phanterpwa-card-panel-control-wrapper{0}".format(add_class)
                        ),
                        _class="phanterpwa-card-panel-control-container"
                    ),
                    DIV(
                        DIV("LEGENDA", _class="titulo_legenda"),
                        html_legenda,
                        _class="legenda_container"
                    ),
                    _class="phanterpwa-card-panel-control"
                )
            )

            html.html_to("#content-calendario")


class EditarCalendario():
    def __init__(self, index_instance, ano_letivo, escola=None):
        self.id_escola = escola
        self.ano_letivo = ano_letivo
        self.index_instance = index_instance
        self.initial_xml()
        self._get_calendario()

    def initial_xml(self):
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("CALENDARIO", _class="phanterpwa-breadcrumb"),
                        DIV(self.ano_letivo, _class="phanterpwa-breadcrumb"),
                        DIV("Editar", _class="phanterpwa-breadcrumb"),
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
                    _id="content-calendario",
                    _class='p-row card e-padding_20'
                ),

                _class="phanterpwa-container p-container"
            ),
            DIV(_id="modais_calendario")
        )
        html.html_to("#main-container")
        return html

    def _get_calendario(self):
        if self.id_escola is None or self.id_escola is js_undefined:
            window.PhanterPWA.GET(
                "api",
                "calendario",
                self.ano_letivo,
                onComplete=self.after_get
            )
        else:
            window.PhanterPWA.GET(
                "api",
                "calendario",
                self.ano_letivo,
                self.id_escola,
                onComplete=self.after_get
            )

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            dias_letivos = json.total_dias_letivos
            window.PhanterPWA.flash("{0} Dias Letivos".format(dias_letivos))
            self.data_inicial = json.data_inicial
            self.data_final = json.data_final
            self.periodo_unidades = json.periodo_unidades
            self.quant_unidades = json.quant_unidades
            if self.id_escola is None or self.id_escola is js_undefined:
                logo_principal = "{0}/api/escolas/12/image".format(
                    window.PhanterPWA.ApiServer.remote_address
                )
                titulo = CONCATENATE(
                    H2("EDITAR CALENDÁRIO BASE ", self.ano_letivo),
                    P("O seguinte calendário será usado como base para cada escola",
                        " desenvolver seu próprio calendário."),
                    P("É necessário definir a data inicial e a data final nos respectivos botões: ", 
                        I(_class="fas fa-calendar")," e ", I(_class="fas fa-calendar-alt"),
                        ". Para outros eventos, como definir se o dia é letivo ou não letivo é só acessar os dias.")
                )
            else:
                logo_principal = "{0}/api/escolas/{1}/image".format(
                    window.PhanterPWA.ApiServer.remote_address,
                    self.id_escola
                )
                titulo = CONCATENATE(
                    H2("EDITAR CALENDÁRIO DA ESCOLA ", self.ano_letivo),
                    P("Editando o calendário irá definir os dias letivos ou não que serão ",
                        "utilizados no registro de aulas e no registro de faltas."),
                    P("É necessário definir a data inicial e a data final nos respectivos botões: ", 
                        I(_class="fas fa-calendar")," e ", I(_class="fas fa-calendar-alt"),
                        ". Para outros eventos, como definir se o dia é letivo ou não letivo é só acessar os dias.")
                )

            html = DIV(
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
                        titulo,
                        _class="p-col w1p100 w4p70",
                        _id="u_informacao_series"
                    ),
                    _class="p-row"
                ),
                _id="logo_e_calendario"
            )
            html_content = DIV(
                _class="calendario_content p-row"
            )
            for m in json.calendario:
                html_mes = TABLE(
                )
                for lin in m:
                    html_lin = TR()
                    for col in lin:
                        if col[1]["tipo"] == "cabecalho":
                            html_lin.append(TH(DIV(col[0]), **col[1]))
                        else:
                            html_lin.append(TD(DIV(col[0]), **col[1]))
                    html_mes.append(html_lin)
                html_content.append(
                    DIV(
                        DIV(html_mes, _class="calendario_mes_content editar"),
                        _class="p-col w1p100  w5p50  w7p33  w8p25"
                    )
                )

            botao_data_inicial = DIV(
                I(_class="fas fa-calendar"),
                **{
                    "_class": "definir_data_inicial icon_button",
                    "_title": "Definir data inicial das aulas",
                }
            )
            botao_data_final = DIV(
                I(_class="fas fa-calendar-alt"),
                **{
                    "_class": "definir_data_final icon_button",
                    "_title": "Definir data final das aulas",
                }
            )
            botao_data_unidades = DIV(
                I(_class="fab fa-delicious"),
                **{
                    "_class": "definir_datas_unidades icon_button",
                    "_title": "Definir inícios das unidades das aulas",
                }
            )
            html_legenda = DIV(_class="calendario_legenda p-row")
            for x in json.legenda:
                html_legenda.append(
                    DIV(
                        DIV(
                            DIV(DIV("#", _class="hashtag_legenda"), SPAN(x[0]), **x[1]),
                            _class="linha_legenda"
                        ),
                        _class="p-col w1p100 w5p50"
                    )
                )
            html.append(
                DIV(
                    LABEL("Calendário Escolar - {0} Dias Letivos".format(dias_letivos)),
                    DIV(
                        DIV(
                            DIV(
                                DIV(
                                    DIV(
                                        DIV(
                                            DIV(
                                                html_content,
                                                _class="calendario_wrapper editar"
                                            ),
                                            _class="diario-ficha_avaliativa-container"
                                        ),
                                        _class="diario-ficha_avaliativa-wrapper"
                                    ),
                                    _class="p-row e-padding_auto",
                                ),
                                _class="phanterpwa-card-panel-control-content"
                            ),
                            DIV(
                                botao_data_inicial,
                                botao_data_final,
                                botao_data_unidades,
                                _class="phanterpwa-card-panel-control-buttons"
                            ),
                            _class="phanterpwa-card-panel-control-wrapper has_buttons"
                        ),
                        _class="phanterpwa-card-panel-control-container"
                    ),
                    DIV(
                        DIV("LEGENDA", _class="titulo_legenda"),
                        html_legenda,
                        _class="legenda_container"
                    ),
                    _class="phanterpwa-card-panel-control"
                )
            )

            html.html_to("#content-calendario")
            self.binds()

    def binds(self):
        jQuery(
            '.definir_data_inicial'
        ).off(
            'click.definir_data_inicial'
        ).on(
            'click.definir_data_inicial',
            lambda: self.modal_data_inicial_e_final("data_inicial")
        )
        jQuery(
            '.definir_data_final'
        ).off(
            'click.definir_data_final'
        ).on(
            'click.definir_data_final',
            lambda: self.modal_data_inicial_e_final("data_final")
        )
        jQuery(
            '.definir_datas_unidades'
        ).off(
            'click.definir_datas_unidades'
        ).on(
            'click.definir_datas_unidades',
            lambda: self.modal_data_unidades()
        )
        jQuery(
            '.celula_dias'
        ).off(
            'click.celula_dias'
        ).on(
            'click.celula_dias',
            lambda: self.modal_data_eventos(this)
        )

    def modal_data_inicial_e_final(self, tipo_de_data):
        if tipo_de_data == "data_inicial":
            value = self.data_inicial
            label = "Data Inicial"
        elif tipo_de_data == "data_final":
            value = self.data_final
            label = "Data Final"
        content = DIV(

            forms.FormWidget(
                "calendario",
                tipo_de_data,
                **{
                    "value": value,
                    "label": label,
                    "type": "date",
                    "validators": ["IS_EMPTY_OR", "IS_DATE:dd/MM/yyyy"],
                    "validator_format": "%d/%m/%Y",
                    "mask": "dd/MM/yyyy",
                    "format": "dd/MM/yyyy",
                    "_placeholder": label,
                    "_class": "p-col w1p100"
                }
            ),
            _class="p-row"
        )
        footer = DIV(
            forms.SubmitButton(
                "adicionar_{0}".format(tipo_de_data),
                "Definir {0}".format(label),
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ),
            _class='phanterpwa-form-buttons-container'
        )
        self.modal_inicial_e_final = modal.Modal(
            "#modais_calendario",
            **{
                "title": "Definir {0}".format(label),
                "content": content,
                "footer": footer,
                "form": "calendario"
            }
        )
        self.modal_inicial_e_final.open()
        jQuery("#phanterpwa-widget-form-submit_button-adicionar_{0}".format(tipo_de_data)).off(
            "click.adicionar_{0}".format(tipo_de_data)
        ).on(
            "click.adicionar_{0}".format(tipo_de_data),
            lambda: self._definir_data(tipo_de_data)
        )

    def _definir_data(self, tipo_de_data):
        t_data = jQuery("#phanterpwa-widget-input-input-calendario-{0}".format(tipo_de_data)).val()
        formdata = __new__(FormData())
        formdata.append(
            tipo_de_data,
            t_data
        )
        if self.id_escola is None or self.id_escola is js_undefined:
            window.PhanterPWA.PUT(
                "api",
                "calendario",
                self.ano_letivo,
                form_data=formdata,
                onComplete=self.after_get
            )
        else:
            window.PhanterPWA.PUT(
                "api",
                "calendario",
                self.ano_letivo,
                self.id_escola,
                form_data=formdata,
                onComplete=self.after_get
            )
        self.modal_inicial_e_final.close()

    def modal_data_eventos(self, el):
        element = jQuery(el)
        eventos = element.data('eventos')
        data = element.data('data')
        descricao = element.data('descricao')
        ano, mes, dia = data.split("-")
        resposta = element.data('resposta')
        campos = []
        meses = {
            "01": "Janeiro",
            "02": "Fevereiro",
            "03": "Março",
            "04": "Abril",
            "05": "Maio",
            "06": "Junho",
            "07": "Julho",
            "08": "Agosto",
            "09": "Setembro",
            "10": "Outubro",
            "11": "Novembro",
            "12": "Dezembro"
        }
        data_ext = "{0} de {1} de {2}".format(dia, meses[mes], ano)
        id_data = "data_{0}_{1}_{2}".format(dia, mes, ano)
        labels = {
            "feriado": "Feriado",
            "atividade_complementar": "Atividade Complementar",
            "jornada_pedagogica": "Jornada Pedagógica",
            "jornada_dirigentes": "Jornada de Dirigentes",
            "recuperacao_final": "Recuperação Final",
            "recesso": "Recesso",
            "dia_letivo": "Dia Letivo",
            "dia_nao_letivo": "Dia Não Letivo"
        }
        data_set = []
        for x in eventos:
            data_set.append([x, labels[x]])
        value = ""
        if resposta in eventos:
            value = resposta
        campos.append(forms.FormWidget(
            "calendario",
            "evento",
            **{
                "value": value,
                "label": "Evento",
                "type": "select",
                "data_set": data_set,
                "can_empty": True,
                "_class": "p-col w1p100"
            }
        ))

        campos.append(forms.FormWidget(
            "calendario",
            "descricao",
            **{
                "value": descricao,
                "label": "Descricao",
                "type": "string",
                "_class": "p-col w1p100"
            }
        ))
        campos.append(forms.FormWidget(
            "calendario",
            "data",
            **{
                "value": data,
                "label": "Data",
                "type": "string",
                "_class": "e-display_hidden"
            }
        ))

        content = DIV(

            *campos,
            _class="p-row"
        )
        footer = DIV(
            forms.SubmitButton(
                "adicionar_{0}".format(id_data),
                "Definir Evento",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ),
            _class='phanterpwa-form-buttons-container'
        )
        self.modal_eventos = modal.Modal(
            "#modais_calendario",
            **{
                "title": "Eventos de {0}".format(data_ext),
                "content": content,
                "footer": footer,
                "form": "calendario"
            }
        )
        self.modal_eventos.open()
        jQuery("#phanterpwa-widget-form-submit_button-adicionar_{0}".format(id_data)).off(
            "click.adicionar_{0}".format(id_data)
        ).on(
            "click.adicionar_{0}".format(id_data),
            lambda: self._definir_evento(eventos)
        )

    def _definir_evento(self, eventos):
        formdata = __new__(FormData())

        t_evento = jQuery("#phanterpwa-widget-select-input-calendario-evento").val()
        formdata.append(
            "evento",
            t_evento
        )

        t_descricao = jQuery("#phanterpwa-widget-input-input-calendario-descricao").val()
        formdata.append(
            "descricao",
            t_descricao
        )
        t_data = jQuery("#phanterpwa-widget-input-input-calendario-data").val()
        formdata.append(
            "data",
            t_data
        )
        if self.id_escola is None or self.id_escola is js_undefined:
            window.PhanterPWA.PUT(
                "api",
                "calendario",
                self.ano_letivo,
                form_data=formdata,
                onComplete=self.after_get
            )
        else:
            window.PhanterPWA.PUT(
                "api",
                "calendario",
                self.ano_letivo,
                self.id_escola,
                form_data=formdata,
                onComplete=self.after_get
            )
        self.modal_eventos.close()

    def iso_br(self, data_iso):
        ano, mes, dia = data_iso.split("-")
        return "{0}/{1}/{2}".format(dia, mes, ano)

    def xml_modal_unidade(self):
        tabela = TABLE(
            TR(TH("Unidade"), TH("Data Inicial"), TH("Data Final (auto)")),
            _style="margin: auto;"
        )
        romanos = [
            "I",
            "II",
            "III",
            "IV",
            "V",
            "VI",
            "VII",
            "VIII"
        ]
        dict_periodo_unidades = {x[0]: x for x in self.periodo_unidades}
        proximo_key = 2
        for x in range(self.quant_unidades):
            key = x + 1
            console.log(key, dict_periodo_unidades.keys(), key in dict_periodo_unidades.keys())
            
            if str(key) in dict_periodo_unidades.keys():
                if x == 0:
                    input_data = widgets.Inert("df_unidade_{0}".format(x + 1), **{
                        "value": self.iso_br(dict_periodo_unidades[x + 1][1])
                    })
                else:
                    proximo_key = x + 2
                    input_data = forms.FormWidget(
                        "calendario_unidade",
                        "unidade_{0}".format(x + 1),
                        **{
                            "value": dict_periodo_unidades[x + 1][1],
                            "label": "Data Inicial",
                            "type": "date",
                            "validators": ["IS_EMPTY_OR", "IS_DATE:dd/MM/yyyy"],
                            "validator_format": "%d/%m/%Y",
                            "mask": "dd/MM/yyyy",
                            "format": "dd/MM/yyyy",
                            "_placeholder": "Data Inicial",
                            "_class": "p-col w1p100 input_data_unidade",
                            "_data-unidade": x + 1
                        }
                    )

                linha = TR(
                    TH("Unidade {0}".format(romanos[x])),
                    TD(
                        input_data
                    ),
                    TD(widgets.Inert("df_unidade_{0}".format(x + 1), **{
                        "value": self.iso_br(dict_periodo_unidades[x + 1][2])
                    }))
                )
            else:
                if x == 0:
                    input_data = widgets.Inert("df_unidade_{0}".format(x + 1), **{
                        "value": ""
                    })
                elif proximo_key == x + 1:
                    input_data = forms.FormWidget(
                        "calendario_unidade",
                        "unidade_{0}".format(x + 1),
                        **{
                            "value": "",
                            "label": "Data Inicial",
                            "type": "date",
                            "validators": ["IS_EMPTY_OR", "IS_DATE:dd/MM/yyyy"],
                            "validator_format": "%d/%m/%Y",
                            "mask": "dd/MM/yyyy",
                            "format": "dd/MM/yyyy",
                            "_placeholder": "Data Inicial",
                            "_class": "p-col w1p100 input_data_unidade",
                            "_data-unidade": x + 1
                        }
                    )
                else:
                    input_data = widgets.Inert("df_unidade_{0}".format(x + 1), **{
                        "value": ""
                    })
                linha = TR(
                    TH("Unidade {0}".format(romanos[x])),
                    TD(
                        input_data
                    ),
                    TD(widgets.Inert("df_unidade_{0}".format(x + 1), **{
                        "value": ""
                    }))
                )
            tabela.append(linha)
        tabela.html_to("#content_modal_unidades")
        jQuery(".input_data_unidade").find("input").off(
            "change.input_data_unidade"
        ).on(
            "change.input_data_unidade",
            lambda: (self._definir_unidade(this), console.log(this))
        )

    def modal_data_unidades(self):
        footer = DIV(
            forms.SubmitButton(
                "fechar",
                "Fechar",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ),
            _class='phanterpwa-form-buttons-container'
        )
        self.modal_periodo_unidades = modal.Modal(
            "#modais_calendario",
            **{
                "title": "Periodo das Unidades",
                "content": DIV(_id="content_modal_unidades"),
                "form": "calendario_unidade",
                'footer': footer
            }
        )
        self.modal_periodo_unidades.open()
        self.xml_modal_unidade()
        jQuery("#phanterpwa-widget-form-submit_button-fechar").off("click.fechar_modal_unidades").on(
            "click.fechar_modal_unidades",
            lambda: self.modal_periodo_unidades.close()
        )

    def _definir_unidade(self, el):
        element = jQuery(el)
        unidade = element.parent().parent().parent().data("unidade")
        nova_data = element.val()
        formdata = __new__(FormData())
        formdata.append(
            "data_inicial",
            nova_data
        )

        formdata.append(
            "unidade",
            unidade
        )
        if self.id_escola is None or self.id_escola is js_undefined:
            window.PhanterPWA.PUT(
                "api",
                "calendario",
                "unidade",
                self.ano_letivo,
                form_data=formdata,
                onComplete=self.after_get_definir_unidade
            )
        else:
            window.PhanterPWA.PUT(
                "api",
                "calendario",
                "unidade",
                self.ano_letivo,
                self.id_escola,
                form_data=formdata,
                onComplete=self.after_get_definir_unidade
            )

    def after_get_definir_unidade(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            self.periodo_unidades = json.periodo_unidades
            self.xml_modal_unidade()

__pragma__('nokwargs')
