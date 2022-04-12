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
OPTION = helpers.XmlConstructor.tagger("option")
SELECT = helpers.XmlConstructor.tagger("select")
UL = helpers.XmlConstructor.tagger("ul")
LI = helpers.XmlConstructor.tagger("li")
STRONG = helpers.XmlConstructor.tagger("strong")
IMG = helpers.XmlConstructor.tagger("img", True)
H2 = helpers.XmlConstructor.tagger("h2")
H3 = helpers.XmlConstructor.tagger("h3")
H5 = helpers.XmlConstructor.tagger("h5")
TR = helpers.XmlConstructor.tagger("tr")
P = helpers.XmlConstructor.tagger("p")
TH = helpers.XmlConstructor.tagger("th")
TD = helpers.XmlConstructor.tagger("td")
LABEL = helpers.XmlConstructor.tagger("label")
TEXTAREA = helpers.XmlConstructor.tagger("textarea")
INPUT = helpers.XmlConstructor.tagger("input", True)
TABLE = helpers.XmlConstructor.tagger('table')
TR = helpers.XmlConstructor.tagger('tr')
TH = helpers.XmlConstructor.tagger('th')
TD = helpers.XmlConstructor.tagger('td')

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
        arg4 = window.PhanterPWA.Request.get_param("mes")

        if arg0 is None or arg0 is js_undefined:
            html = escolas.EscolherEscola(
                id_target="#content-registro_de_faltas",
                callback_link=lambda id_escola: "#_phanterpwa:/registro-de-faltas/{0}".format(id_escola)
            )
        elif str(arg0).isdigit() and (arg1 is None or arg1 is js_undefined):
            html = anos_letivos.EscolherAnoLetivo(
                id_target="#content-registro_de_faltas",
                callback_link=lambda ano: "#_phanterpwa:/registro-de-faltas/{0}/{1}".format(arg0, ano)
            )
        elif str(arg0).isdigit() and str(arg1).isdigit():
            self.RegistroDeFaltas = RegistroDeFaltas(self, arg0, arg1, arg2, arg3, arg4)


class RegistroDeFaltas():
    def __init__(self, index_instance, escola, ano_letivo, turma, id_disciplina=None, rotulo_mes_ano=None):
        self.id_escola = escola
        self.ano_letivo = ano_letivo
        self.id_turma = turma
        self.rotulo_mes_ano = rotulo_mes_ano
        self.id_disciplina = id_disciplina
        self.index_instance = index_instance
        self._get_registro_de_faltas()
        self.meses = {
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

    def _get_registro_de_faltas(self):
        args = [
            "api",
            "registro-de-faltas",
            self.id_escola,
            self.ano_letivo,
            self.id_turma
        ]
        params = {
            "onComplete": self.after_get
        }
        if self.id_disciplina is not None and self.id_disciplina is not js_undefined:
            args.append(self.id_disciplina)
        if self.rotulo_mes_ano is not None and self.rotulo_mes_ano is not js_undefined:
            params["_mes"] = self.rotulo_mes_ano

        window.PhanterPWA.GET(
            *args,
            **params
        )

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            registro_de_faltas = json.form_registros
            self.anterior = json.anterior
            self.quant_dias = json.quant_dias
            self.proximo = json.proximo
            self.rotulo_mes_ano = json.rotulo_mes_ano
            self.disciplina = json.disciplina
            self.turma = json.turma
            self.meses_referencia = json.meses_referencia
            self.processar_registro_de_faltas(registro_de_faltas)

    def processar_registro_de_faltas(self, registro_de_faltas):
        xway_meses_referencia = []
        for x in self.meses_referencia:
            xway = [
                "registro-de-faltas",
                self.id_escola,
                self.ano_letivo,
                self.id_turma
            ]
            if self.id_disciplina is not None:
                xway.append(self.id_disciplina)

            dict_way = {
                "_mes": x.split(" - ")[1]
            }

            op = widgets.MenuOption(x, **{
                "_class": "botao_meses_referencia wave_on_click",
                "_href": window.PhanterPWA.XWAY(*xway, **dict_way),
            })
            xway_meses_referencia.append(op)
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("REGISTRO DE FALTAS", _class="phanterpwa-breadcrumb"),
                        _class="phanterpwa-breadcrumb-wrapper"
                    ),
                    _class="p-container extend"),
                _class='title_page_container card'
            ),
            DIV(
                DIV(
                    DIV(
                        DIV(preloaders.android, _style="width: 300px; height: 300px; overflow: hidden; margin: auto;"),
                        _style="text-align:center; padding: 50px 0;"
                    ),
                    _id="content-registro_de_faltas",
                    _class='p-row card e-padding_auto'
                ),
                DIV(_id="modal_faltas_container"),
                DIV(_id="modal_justificar_container"),
                _class="phanterpwa-container p-container extend"
            )
        )
        html.html_to("#main-container")
        if self.disciplina is not None and self.disciplina is not js_undefined:
            html = DIV(
                H2("Registro de faltas da disciplina de ", self.disciplina, " da turma ", self.turma),
                _class="registro_de_faltas_container"
            )
        else:
            html = DIV(
                H2("Registro de faltas da turma ", self.turma),
                _class="registro_de_faltas_container"
            )
        tabela = TABLE(
            TR(TH("Nº", _class="rotulo", _rowspan=2), TH("NOME ALUNO(A)", _class="rotulo", _rowspan=2), TH("DIAS LETIVOS", _colspan=self.quant_dias, _class="rotulo")),
            _class='tabela_registro_de_faltas'
        )
        self.mapa_justificativas = {}
        for x in registro_de_faltas:
            # data = x[0][0]
            # ano, mes, dia = data.split("-")
            # mes_ext = self.meses[mes]
            # data_ext = "{0} de {1} de {2}".format(dia, mes_ext, ano)
            linha = TR(_class="linha_registro_de_faltas")
            for y in x:
                if y[1]['tipo'] == "cabecalho":
                    celula = TH(
                        DIV(y[0], _class="registro_de_faltas_rotulo_dia"),
                        **y[1]
                    )
                elif y[1]['tipo'] == "botao":
                    fal = y[0]
                    if fal == "false" or fal == False:
                        bas_nas = DIV(y[1]["_data-data_falta"][-2:], _class="apagadinho")
                    elif fal == "J":
                        key_mapa_jus = y[1]["_id"]
                        self.mapa_justificativas[key_mapa_jus] = y[1]["just"]
                        bas_nas = I(y[0], _class="faltas_justificadas")
                    else:
                        bas_nas = I(y[0], _class="numero_de_faltas")

                    celula = TD(
                        bas_nas,
                        **y[1]
                    )
                else:
                    celula = TD(
                        y[0],
                        **y[1]
                    )
                linha.append(celula)
            tabela.append(
                linha
            )
        botao_mes_anterior = DIV(
            I(_class="fas fa-angle-double-left"),
            **{
                "_class": "botao_mes_anterior icon_button",
                "_title": "Diário do Aluno Anterior",
                "_disabled": "disabled"
            }
        )
        botao_proximo_mes = DIV(
            I(_class="fas fa-angle-double-right"),
            **{
                "_class": "botao_proximo_mes icon_button",
                "_title": "Diário do Próximo Aluno turma",
                "_disabled": "disabled"
            }
        )

        way = [
            "registro-de-faltas",
            self.id_escola,
            self.ano_letivo,
            self.id_turma
        ]
        if self.id_disciplina is not None:
            way.append(self.id_disciplina)
        if self.anterior is not None and self.anterior is not js_undefined:
            dict_mes_ant = {
                "_mes": self.anterior.split(" - ")[1]
            }
            nway = list(way)
            # nway.append(
            #     self.anterior
            # )

            botao_mes_anterior = A(
                I(_class="fas fa-angle-double-left"),
                **{
                    "_class": "botao_mes_anterior icon_button",
                    "_title": "Mês anterior",
                    "_href": window.PhanterPWA.XWAY(
                        *nway,
                        **dict_mes_ant
                    )
                }
            )
        if self.proximo is not None and self.proximo is not js_undefined:
            dict_mes_pro = {
                "_mes": self.proximo.split(" - ")[1]
            }
            # way.append(
            #     self.proximo
            # )
            botao_proximo_mes = A(
                I(_class="fas fa-angle-double-right"),
                **{
                    "_class": "botao_proximo_mes icon_button",
                    "_title": "Próximo mês",
                    "_href": window.PhanterPWA.XWAY(
                        *way,
                        **dict_mes_pro

                    )
                }
            )
        painel = DIV(
            LABEL(self.rotulo_mes_ano),
            DIV(
                DIV(
                    DIV(
                        DIV(
                            DIV(
                                DIV(
                                    tabela,
                                    _class="diario-registro_de_faltas-container"
                                ),
                                _class="diario-registro_de_faltas-wrapper"
                            ),
                            _class="p-row e-padding_auto",
                        ),
                        _class="phanterpwa-card-panel-control-content"
                    ),
                    DIV(
                        botao_mes_anterior,
                        botao_proximo_mes,
                        widgets.MenuBox(
                            "drop_{0}_{0}".format(self.id_turma, self.id_disciplina),
                            I(_class="fas fa-calendar-week"),
                            *xway_meses_referencia
                            # onOpen=lambda: self.binds_menu_aluno()
                        ),
                        _class="phanterpwa-card-panel-control-buttons"
                    ),
                    _class="phanterpwa-card-panel-control-wrapper has_buttons"
                ),
                _class="phanterpwa-card-panel-control-container"
            ),
            _class="phanterpwa-card-panel-control"
        )

        html.append(painel)
        html.html_to("#content-registro_de_faltas")
        self.diario_binds()

    def diario_binds(self):
        jQuery(
            ".faltas.celula_registro_faltas"
        ).off(
            "click.enviar_faltas"
        ).on(
            "click.enviar_faltas",
            lambda: self.modal_confirmar_faltas(jQuery(this))
        )

        jQuery(
            ".faltas.celula_registro_justificadas"
        ).off(
            "click.enviar_faltas_rg_jus"
        ).on(
            "click.enviar_faltas_rg_jus",
            lambda: self.abrir_modal_justificar(jQuery(this), self.mapa_justificativas.get(jQuery(this).attr("id"), ""))
        )

    def abrir_diario(self, url):
        window.location = url

    def modal_confirmar_faltas(self, el):
        id_matricula = jQuery(el).data("id_matricula")
        tem_falta = jQuery(el).attr("data-tem_falta")
        nome_aluno = jQuery(el).data("nome_aluno")
        eh_educacao_infantil = jQuery(el).data("eh_educacao_infantil")
        data = jQuery(el).data("data_falta")
        ano, mes, dia = data.split("-")
        mes_ext = self.meses[mes]
        data_ext = "{0} de {1} de {2}".format(dia, mes_ext, ano)
        id_disciplina = jQuery(el).data("id_disciplina")
        if id_disciplina is None or id_disciplina is js_undefined:
            id_disciplina = None
        if tem_falta is False or tem_falta == "false":
            complement = " Falta"
            falta = True
            if eh_educacao_infantil is True or eh_educacao_infantil == "true":
                content = DIV(
                    P("Confirme a inserção de ", STRONG("FALTA", _style="color: red;"),
                        " no presente aluno no dia de ", STRONG(data_ext),"."
                    ),
                    DIV(
                        widgets.Input(
                            "quanti_faltas",
                            value="1"
                        ),
                        _style="margin:auto; width: 100px; display: none;"
                    ),
                    _class="p-row"
                )
            else:
                content = DIV(
                    P("Confirme a inserção de ", STRONG("FALTA", _style="color: red;"),
                        " no presente aluno no dia de ", STRONG(data_ext),"."
                    ),
                    P("Escolha a quantidade de faltas abaixo"),
                    DIV(
                        widgets.Select(
                            "quanti_faltas",
                            value="1",
                            data_set=[
                                ["1", "1"],
                                ["2", "2"],
                                ["3", "3"],
                                ["4", "4"],
                                ["5", "5"],
                                ["6", "6"],
                                ["7", "7"],
                                ["8", "8"],
                                ["9", "9"],
                                ["10", "10"],
                            ]
                        ),
                        _style="margin:auto; width: 100px;"
                    ),
                    _class="p-row"
                )
            footer = DIV(
                forms.FormButton(
                    "confirmar_falta",
                    "Confirmar{0}".format(complement),
                    _class="btn-autoresize wave_on_click waves-phanterpwa"
                ),
                forms.FormButton(
                    "confirmar_falta_e_justificar",
                    "Confirmar falta e Justificar".format(complement),
                    _class="btn-autoresize wave_on_click waves-phanterpwa"
                ),                
                forms.FormButton(
                    "cancelar",
                    "Cancelar",
                    _class="btn-autoresize wave_on_click waves-phanterpwa"
                ),
                _class='phanterpwa-form-buttons-container'
            )
        else:
            complement = " remoção da Falta"
            falta = False
            content = DIV(
                P(
                    "O(A) aluno(a) possui ",
                    STRONG(tem_falta, " FALTA" if str(tem_falta) == "1" else " FALTAS", _style="color: orange"),
                    " em ",
                    STRONG(data_ext),
                    ". Você pode Justificar ou Remover estas faltas."
                ),
                _class="p-row"
            )
            footer = DIV(
                forms.FormButton(
                    "justificar_falta",
                    "Justificar",
                    _class="btn-autoresize wave_on_click waves-phanterpwa"
                ),
                forms.FormButton(
                    "confirmar_falta",
                    "Remover Falta(s)",
                    _class="btn-autoresize wave_on_click waves-phanterpwa"
                ),
                forms.FormButton(
                    "cancelar",
                    "Cancelar",
                    _class="btn-autoresize wave_on_click waves-phanterpwa"
                ),
                _class='phanterpwa-form-buttons-container'
            )
        self.modal_faltas = modal.Modal(
            "#modal_faltas_container",
            **{
                "title": nome_aluno,
                "content": content,
                "footer": footer,
                "form": "faltas"
            }
        )
        self.modal_faltas.open()
        jQuery("#phanterpwa-widget-form-form_button-justificar_falta").off(
            "click.adicionar_justificar"
        ).on(
            "click.adicionar_justificar",
            lambda: self.abrir_modal_justificar(el)
        )
        jQuery("#phanterpwa-widget-form-form_button-confirmar_falta").off(
            "click.adicionar_faltas_sim"
        ).on(
            "click.adicionar_faltas_sim",
            lambda: self._on_click_faltas(id_matricula, id_disciplina, falta, data)
        )
        jQuery("#phanterpwa-widget-form-form_button-confirmar_falta_e_justificar").off(
            "click.adicionar_faltas_e_just"
        ).on(
            "click.adicionar_faltas_e_just",
            lambda: self._on_click_faltas(id_matricula, id_disciplina, falta, data, justificar=True)
        )
        jQuery("#phanterpwa-widget-form-form_button-cancelar").off(
            "click.cancelar_falta"
        ).on(
            "click.cancelar_falta",
            lambda: self.modal_faltas.close()
        )

    def _on_click_faltas(self, id_matricula, id_disciplina, falta, data, justificar=False):
        formdata = __new__(FormData())
        formdata.append(
            "falta",
            falta
        )
        if window.PhanterPWA.get_widget("quanti_faltas") is None:
            quantidade = ""
        else:
            quantidade = window.PhanterPWA.get_widget("quanti_faltas").value()

        formdata.append(
            "quantidade_de_faltas",
            quantidade
        )
        formdata.append(
            "data",
            data
        )
        if self.id_disciplina is not None and self.id_disciplina is not js_undefined:
            window.PhanterPWA.PUT(
                "api",
                "registro-de-faltas",
                self.id_escola,
                self.ano_letivo,
                id_matricula,
                id_disciplina,
                form_data=formdata,
                onComplete=lambda data, ajax_status: self.depois_de_enviar_registro(data, ajax_status, justificar)
            )
        else:
            window.PhanterPWA.PUT(
                "api",
                "registro-de-faltas",
                self.id_escola,
                self.ano_letivo,
                id_matricula,
                form_data=formdata,
                onComplete=lambda data, ajax_status: self.depois_de_enviar_registro(data, ajax_status, justificar)
            )
        self.modal_faltas.close()

    def depois_de_enviar_registro(self, data, ajax_status, justificar=False):
        if ajax_status == "success":
            json = data.responseJSON
            json.celula_update
            if json.celula_update is not None and json.celula_update is not js_undefined:
                if json.celula_update[1] is False or json.celula_update[1] == "false":
                    jQuery("#{0}".format(json.celula_update[0])).html("")
                    jQuery("#{0}".format(json.celula_update[0])).attr("data-tem_falta", "false")
                else:
                    valor = json.celula_update[2]
                    bas_nas = I(valor, _class="numero_de_faltas").jquery()
                    jQuery("#{0}".format(json.celula_update[0])).html(bas_nas)
                    jQuery("#{0}".format(json.celula_update[0])).attr("data-tem_falta", str(valor))
            self.diario_binds()
            if justificar is True:
                self.abrir_modal_justificar(jQuery("#{0}".format(json.celula_update[0])))

    def abrir_modal_justificar(self, el, justificativa=""):
        if self.modal_faltas is not js_undefined:
            self.modal_faltas.close()
        id_matricula = jQuery(el).data("id_matricula")
        tem_falta = jQuery(el).attr("data-tem_falta")
        nome_aluno = jQuery(el).data("nome_aluno")
        eh_educacao_infantil = jQuery(el).data("eh_educacao_infantil")
        data = jQuery(el).data("data_falta")
        ano, mes, dia = data.split("-")
        mes_ext = self.meses[mes]
        data_ext = "{0} de {1} de {2}".format(dia, mes_ext, ano)
        id_disciplina = jQuery(el).data("id_disciplina")
        if id_disciplina is None or id_disciplina is js_undefined:
            id_disciplina = None

        falta = False
        content = DIV(
            P(
                "O(A) aluno(a) possui ",
                STRONG(tem_falta, " FALTA" if str(tem_falta) == "1" else " FALTAS", _style="color: orange"),
                " em ",
                STRONG(data_ext),
                ". Adicione abaixo a justificativa desta(s) falta(s)."
            ),
            DIV(
                DIV(
                    widgets.Textarea(
                        "justificativa",
                        value=justificativa,
                    )
                ),
                _class="p-col w1p100"
            ),
            _class="p-row"
        )
        footer = DIV(
            forms.FormButton(
                "submit_justificar_falta",
                "Justificar",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ),
            forms.FormButton(
                "cancelar_just",
                "Cancelar",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ),
            _class='phanterpwa-form-buttons-container'
        )
        self.modal_justificar = modal.Modal(
            "#modal_justificar_container",
            **{
                "title": nome_aluno,
                "content": content,
                "footer": footer,
                "form": "justificar"
            }
        )
        self.modal_justificar.open()
        jQuery("#phanterpwa-widget-form-form_button-submit_justificar_falta").off(
            "click.adicionar_justificar"
        ).on(
            "click.adicionar_justificar",
            lambda: self._on_click_justificar(id_matricula, id_disciplina, data)
        )
        jQuery("#phanterpwa-widget-form-form_button-cancelar_just").off(
            "click.cancelar_just"
        ).on(
            "click.cancelar_just",
            lambda: self.modal_justificar.close()
        )

    def _on_click_justificar(self, id_matricula, id_disciplina, data):
        justificativa = jQuery("#phanterpwa-widget-textarea-textarea-justificativa").val()
        formdata = __new__(FormData())

        formdata.append(
            "justificativa",
            justificativa
        )
        formdata.append(
            "data",
            data
        )
        if self.id_disciplina is not None and self.id_disciplina is not js_undefined:
            window.PhanterPWA.PUT(
                "api",
                "justificar-faltas",
                self.id_escola,
                self.ano_letivo,
                id_matricula,
                id_disciplina,
                form_data=formdata,
                onComplete=lambda data, ajax_status: self.depois_de_enviar_justificativa(data, ajax_status)
            )
        else:
            window.PhanterPWA.PUT(
                "api",
                "justificar-faltas",
                self.id_escola,
                self.ano_letivo,
                id_matricula,
                form_data=formdata,
                onComplete=lambda data, ajax_status: self.depois_de_enviar_justificativa(data, ajax_status)
            )

    def depois_de_enviar_justificativa(self, data, ajax_status):
        if ajax_status == "success":
            self.modal_justificar.close()
            json = data.responseJSON
            json.celula_update
            if json.celula_update is not None and json.celula_update is not js_undefined:
                if json.celula_update[1] == "J":
                    bas_nas = I("J", _class="faltas_justificadas").jquery()
                    jQuery("#{0}".format(json.celula_update[0])).html(bas_nas).removeClass("celula_registro_faltas").addClass("celula_registro_justificadas")
                    jQuery("#{0}".format(json.celula_update[0])).attr("data-tem_falta", "J")
                    self.mapa_justificativas[json.celula_update[0]] = json.celula_update[3]
                else:
                    valor = json.celula_update[2]
                    bas_nas = I(valor, _class="numero_de_faltas").jquery()
                    jQuery("#{0}".format(json.celula_update[0])).html(bas_nas).addClass("celula_registro_faltas").removeClass("celula_registro_justificadas")
                    jQuery("#{0}".format(json.celula_update[0])).attr("data-tem_falta", str(valor))
            self.diario_binds()


__pragma__('nokwargs')
