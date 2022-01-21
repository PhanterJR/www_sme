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
CAPTION = helpers.XmlConstructor.tagger('caption')

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
        turma = window.PhanterPWA.Request.get_param("turma")
        tur = ""
        if turma is not None:
            tur = DIV(turma, _class="phanterpwa-breadcrumb")
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("REGISTRO DE AULAS", _class="phanterpwa-breadcrumb"),
                        tur,
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
                    _id="content-registro_de_aulas",
                    _class='p-row card e-padding_auto'
                ),
                DIV(_id="modal_cmp_curriculares_container"),
                _class="phanterpwa-container p-container extend"
            )
        )
        html.html_to("#main-container")
        arg0 = window.PhanterPWA.Request.get_arg(0)
        arg1 = window.PhanterPWA.Request.get_arg(1)
        arg2 = window.PhanterPWA.Request.get_arg(2)
        arg3 = window.PhanterPWA.Request.get_arg(3)
        arg4 = window.PhanterPWA.Request.get_arg(4)

        if arg0 is None or arg0 is js_undefined:
            html = escolas.EscolherEscola(
                id_target="#content-registro_de_aulas",
                callback_link=lambda id_escola: "#_phanterpwa:/registro-de-aulas/{0}".format(id_escola)
            )
        elif str(arg0).isdigit() and (arg1 is None or arg1 is js_undefined):
            html = anos_letivos.EscolherAnoLetivo(
                id_target="#content-registro_de_aulas",
                callback_link=lambda ano: "#_phanterpwa:/registro-de-aulas/{0}/{1}".format(arg0, ano)
            )
        elif str(arg0).isdigit() and str(arg1).isdigit():
            self.RegistroDeAulas = RegistroDeAulas(self, arg0, arg1, arg2, arg3, arg4)

        if window.PhanterPWA.Request.get_param("retornar") is None:
            BackButton1 = left_bar.LeftBarButton(
                "back_registro_de_aulas",
                "Voltar",
                I(_class="fas fa-arrow-circle-left"),
                **{
                    "tag": "a",
                    "_href": window.PhanterPWA.XWAY("professores", "turmas", arg0, arg1),
                    "position": "top",
                    "show_if_way_match": r"^registro-de-aulas-educacao-infantil\/[0-9]{1,}\/[0-9]{1,}.*$"
                }
            )

        else:

            BackButton1 = left_bar.LeftBarButton(
                "back_registro_de_aulas",
                "Voltar",
                I(_class="fas fa-arrow-circle-left"),
                **{
                    "tag": "a",
                    "_href": window.PhanterPWA.Request.get_param("retornar"),
                    "position": "top",
                    "show_if_way_match": r"^registro-de-aulas-educacao-infantil\/[0-9]{1,}\/[0-9]{1,}.*$"
                }
            )

        window.PhanterPWA.Components['left_bar'].add_button(BackButton1)


class RegistroDeAulas():
    def __init__(self, index_instance, escola, ano_letivo, turma, id_disciplina, rotulo_mes_ano):
        self.id_escola = escola
        self.ano_letivo = ano_letivo
        self.id_turma = turma
        self.rotulo_mes_ano = rotulo_mes_ano
        self.id_disciplina = id_disciplina
        self.index_instance = index_instance
        self._get_registro_de_aulas()
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

    def _get_registro_de_aulas(self):

        if self.id_disciplina is not None and self.id_disciplina is not js_undefined:
            if self.rotulo_mes_ano is not None and self.rotulo_mes_ano is not js_undefined:
                window.PhanterPWA.GET(
                    "api",
                    "registro-de-aulas",
                    self.id_escola,
                    self.ano_letivo,
                    self.id_turma,
                    self.id_disciplina,
                    self.rotulo_mes_ano,
                    onComplete=self.after_get
                )
            else:
                window.PhanterPWA.GET(
                    "api",
                    "registro-de-aulas",
                    self.id_escola,
                    self.ano_letivo,
                    self.id_turma,
                    self.id_disciplina,
                    onComplete=self.after_get
                )
        else:
            window.PhanterPWA.GET(
                "api",
                "registro-de-aulas",
                self.id_escola,
                self.ano_letivo,
                self.id_turma,
                onComplete=self.after_get
            )

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            registro_de_aulas = json.form_registros_educacao_infantil
            self.anterior = json.anterior
            self.proximo = json.proximo
            self.rotulo_mes_ano = json.rotulo_mes_ano
            self.carga_horaria = json.carga_horaria
            self.carga_horaria_dada = json.carga_horaria_dada
            self.disciplinas = json.disciplinas
            self.disciplina = json.disciplina
            self.turma = json.turma
            self.meses_referencia = json.meses_referencia
            self.eh_educacao_infantil = json.eh_educacao_infantil
            self.eh_multisseriado = json.eh_multisseriado
            self.processar_registro_de_aulas(registro_de_aulas)

    def calc_dias_dados(self):
        if self.eh_multisseriado:
            return ""
        elif self.eh_educacao_infantil == "True" or self.eh_educacao_infantil is True:
            return ""
        ch = ""
        if str(self.carga_horaria).isdigit() and str(self.carga_horaria_dada).isdigit():
            if self.carga_horaria > self.carga_horaria_dada:
                falta = self.carga_horaria - self.carga_horaria_dada
                pluf = ["m", "s"]
                pluchd = "s"
                if falta == 1:
                    pluf = ["", ""]
                if self.carga_horaria_dada == 1:
                    pluchd = ""
                ch = " - {0} aula{1} de {2}. Falta{3} {4} aula{5}".format(
                    self.carga_horaria_dada,
                    pluchd,
                    self.carga_horaria,
                    pluf[0],
                    falta,
                    pluf[1]
                )
            elif self.carga_horaria == self.carga_horaria_dada:
                ch = " Todas as {0} aulas foram dadas".format(self.carga_horaria)
            elif self.carga_horaria < self.carga_horaria_dada:
                extra = self.carga_horaria_dada - self.carga_horaria
                ch = " Você deu {0} aulas extras. {1} de {2}.".format(
                    extra,
                    self.carga_horaria_dada,
                    self.carga_horaria
                )
        return ch

    def processar_registro_de_aulas(self, registro_de_aulas):
        xway_meses_referencia = []
        for x in self.meses_referencia:
            xway = [
                "registro-de-aulas-educacao-infantil",
                self.id_escola,
                self.ano_letivo,
                self.id_turma,
                self.id_disciplina,
                x
            ]

            op = widgets.MenuOption(x, **{
                "_class": "botao_meses_referencia wave_on_click",
                "_href": window.PhanterPWA.XWAY(*xway),
            })
            xway_meses_referencia.append(op)
        html = DIV(
            H2("Registro de aulas da turma ", self.turma),
            _class="registro_de_aulas_container"
        )
        tabela = TABLE(
            TR(TH("DIA"), TH("QUANT."), TH("COMPONENTES CURRICULARES TRABALHADOS"), TH("CONTEÚDO TRABALHADO E ESTRATÉGIAS APLICADAS")),
            _class='tabela_registro_de_aulas'
        )

        for x in registro_de_aulas:
            data = x[0][0]
            ano, mes, dia = data.split("-")
            mes_ext = self.meses[mes]
            data_ext = "{0} de {1} de {2}".format(dia, mes_ext, ano)
            linha = TR(_title=data_ext)
            for y in x:
                if y[1]['tipo'] == "cabecalho":
                    celula = TH(
                        DIV("{0}".format(y[0][8:]), _class="registro_de_aulas_rotulo_dia"),
                        **y[1]
                    )
                elif y[1]['tipo'] == "cabecalho-serie":
                    celula = TH(
                        DIV(y[0], _class="registro_de_aulas_rotulo_dia"),
                        **y[1]
                    )
                elif y[1]['tipo'] == "select":
                    ht_sele = SELECT(OPTION(_selected="selected"))
                    for z in y[1]["data_set"]:
                        if str(z) == str(y[0]):
                            ht_op = OPTION(z, _value=z, _selected="selected")
                        else:
                            ht_op = OPTION(z, _value=z)
                        ht_sele.append(ht_op)
                    serie = None
                    if self.eh_multisseriado:
                        serie = y[1]["_data-id_serie"]
                    celula = TD(
                        DIV(
                            ht_sele,
                            **{
                                "_class": "registro_de_aulas_select",
                                "_data-data": y[1]["_data-data"],
                                "_data-campo": "quantidade",
                                "_data-id_serie": serie
                            }
                        ),
                        DIV(I(_class="fas fa-cloud-upload-alt"), _class="botao_enviar_registro"),
                        **y[1]
                    )
                elif y[1]['tipo'] == "texto":
                    serie = None
                    if self.eh_multisseriado:
                        serie = y[1]["_data-id_serie"]
                    celula = TD(
                        DIV(
                            TEXTAREA(y[0]),
                            **{
                                "_class": "registro_de_aulas_textarea",
                                "_data-data": y[1]["_data-data"],
                                "_data-campo": "conteudo",
                                "_data-id_serie": serie
                            }
                        ),
                        DIV(I(_class="fas fa-cloud-upload-alt"), _class="botao_enviar_registro"),
                        **y[1]
                    )
                elif y[1]['tipo'] == "multselect":
                    celula = TD(
                        DIV(
                            XML(y[0]),
                            **{
                                "_class": "registro_de_aulas_cmp_curriculares",
                                "_data-data": x[0][0],
                                "_data-campo": "conteudo"
                            }
                        ),
                        DIV(I(_class="fas fa-cloud-upload-alt"), _class="botao_enviar_registro"),
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
            "registro-de-aulas-educacao-infantil",
            self.id_escola,
            self.ano_letivo,
            self.id_turma,
            self.id_disciplina
        ]
        if self.anterior is not None and self.anterior is not js_undefined:
            nway = list(way)
            nway.append(
                self.anterior
            )

            botao_mes_anterior = A(
                I(_class="fas fa-angle-double-left"),
                **{
                    "_class": "botao_mes_anterior icon_button",
                    "_title": "Mês anterior",
                    "_href": window.PhanterPWA.XWAY(
                        *nway
                    )
                }
            )
        if self.proximo is not None and self.proximo is not js_undefined:
            way.append(
                self.proximo
            )
            botao_proximo_mes = A(
                I(_class="fas fa-angle-double-right"),
                **{
                    "_class": "botao_proximo_mes icon_button",
                    "_title": "Próximo mês",
                    "_href": window.PhanterPWA.XWAY(
                        *way
                    )
                }
            )
        ch = ""
        if str(self.carga_horaria).isdigit() and str(self.carga_horaria_dada).isdigit():
            if self.carga_horaria > self.carga_horaria_dada:
                falta = self.carga_horaria - self.carga_horaria_dada
                pluf = ["m", "s"]
                pluchd = "s"
                if falta == 1:
                    pluf = ["", ""]
                if self.carga_horaria_dada == 1:
                    pluchd = ""
                ch = " - {0} aula{1} de {2}. Falta{3} {4} aula{5}".format(
                    self.carga_horaria_dada,
                    pluchd,
                    self.carga_horaria,
                    pluf[0],
                    falta,
                    pluf[1]
                )
            elif self.carga_horaria == self.carga_horaria_dada:
                ch = "Todas as {0} aulas foram dadas".format(self.carga_horaria)
            elif self.carga_horaria < self.carga_horaria_dada:
                extra = self.carga_horaria_dada - self.carga_horaria
                ch = "Você deu {0} aulas extras. {1} de {2}.".format(extra, self.carga_horaria_dada, self.carga_horaria)
        painel = DIV(
            LABEL(self.rotulo_mes_ano, SPAN(self.calc_dias_dados(), _id="total_aulas")),
            DIV(
                DIV(
                    DIV(
                        DIV(
                            DIV(
                                DIV(
                                    tabela,
                                    _class="diario-registro_de_aulas-container"
                                ),
                                _class="diario-registro_de_aulas-wrapper"
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
        html.html_to("#content-registro_de_aulas")
        self.diario_binds()

    def diario_binds(self):
        jQuery(
            ".registro_de_aulas_select"
        ).find("select").off(
            "change.registro_de_aulas_select"
        ).on(
            "change.registro_de_aulas_select",
            lambda: self._enviar_registro(jQuery(this).parent())
        )
        jQuery(
            ".texto_reg_aula"
        ).find("textarea").off(
            "change.nota_diario"
        ).on(
            "change.nota_diario",
            lambda: self._enviar_registro(jQuery(this).parent())
        )
        jQuery(
            ".botao_enviar_registro"
        ).off(
            "click.enviar_registro"
        ).on(
            "click.enviar_registro",
            lambda: self._enviar_registro(jQuery(this).parent())
        )
        jQuery(
            ".celula_cmp_curriculares"
        ).off(
            "click.celula_cmp_curriculares"
        ).on(
            "click.celula_cmp_curriculares",
            lambda: self.modal_componentes_curriculares(this)
        )

    def abrir_diario(self, url):
        window.location = url

    def _enviar_registro(self, el):

        elemento = jQuery(el)
        elemento.parent().find(".botao_enviar_registro").fadeIn()
        campo = elemento.data("campo")

        data = elemento.data("data")
        formdata = __new__(FormData())
        if campo == "conteudo":
            valor = elemento.find('textarea').val()
            formdata.append(
                "texto",
                valor
            )

        elif campo == "quantidade":
            valor = elemento.find('select').val()
            formdata.append(
                "quantidade_de_aulas",
                valor
            )
        formdata.append(
            "data",
            data
        )
        window.PhanterPWA.PUT(
            "api",
            "registro-de-aulas",
            self.id_escola,
            self.ano_letivo,
            self.id_turma,
            form_data=formdata,
            onComplete=lambda data, ajax_status: self.depois_de_enviar_registro(data, ajax_status, elemento)
        )


    def depois_de_enviar_registro(self, data, ajax_status, elemento):
        if ajax_status == "success":
            json = data.responseJSON
            if data.status == 202:
                window.PhanterPWA.flash(json.message)
            else:
                elemento.parent().find(".botao_enviar_registro").fadeOut()
            self.carga_horaria = json.carga_horaria
            self.carga_horaria_dada = json.carga_horaria_dada
            calc_dias = self.calc_dias_dados()
            if calc_dias != "":
                window.PhanterPWA.flash(calc_dias[3:])
            jQuery("#total_aulas").text(calc_dias)
            self.diario_binds()

    def modal_componentes_curriculares(self, el):
        value = jQuery(el).attr("data-value")
        value = JSON.parse(value)
        data = jQuery(el).attr("data-data")
        ano, mes, dia = data.split("-")
        mes_ext = self.meses[mes]
        data_ext = "{0} de {1} de {2}".format(dia, mes_ext, ano)
        content = DIV(
            P(
                "Acesse o combox abaixo em ", I(_class="fas fa-angle-down"),
                " e escolha os compenentes curriculares trabalhados e depois confirme.",
                " Para retirar algum componente basta clicar no ", I(_class="fas fa-times"), " no final do",
                " nome do componente."
            ),
            DIV(
                widgets.MultSelect(
                    "quanti_cmp",
                    value=value,
                    data_set=[
                        [x, x] for x in self.disciplinas
                    ]
                ),
                _style="margin:auto; width: 90%;"
            ),
            _class="p-row"
        )

        footer = DIV(
            forms.FormButton(
                "confirmar",
                "Confirmar",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ),
            forms.FormButton(
                "cancelar",
                "Cancelar",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ),
            _class='phanterpwa-form-buttons-container'
        )
        self.modal_cmp_curriculares = modal.Modal(
            "#modal_cmp_curriculares_container",
            **{
                "title": "Componentes Curriculares do dia {0}".format(data_ext),
                "content": content,
                "footer": footer,
                "form": "cmp_curriculares"
            }
        )
        self.modal_cmp_curriculares.open()
        jQuery("#phanterpwa-widget-form-form_button-confirmar").off(
            "click.adicionar_cmp_curriculares"
        ).on(
            "click.adicionar_cmp_curriculares",
            lambda: self._on_click_add_cmp_curriculares(el, data)
        )
        jQuery("#phanterpwa-widget-form-form_button-cancelar").off(
            "click.cancelar_falta"
        ).on(
            "click.cancelar_falta",
            lambda: self.modal_cmp_curriculares.close()
        )

    def _on_click_add_cmp_curriculares(self, elemento, data):
        componentes = jQuery("#phanterpwa-widget-multselect-input-quanti_cmp").val()
        formdata = __new__(FormData())
        formdata.append(
            "componentes_curriculares",
            componentes
        )
        formdata.append(
            "data",
            data
        )
        if self.id_disciplina is not None and self.id_disciplina is not js_undefined:
            window.PhanterPWA.PUT(
                "api",
                "registro-de-aulas",
                self.id_escola,
                self.ano_letivo,
                self.id_turma,
                self.id_disciplina,
                form_data=formdata,
                onComplete=lambda data, ajax_status: self.depois_de_enviar_componentes_curriculares(data, ajax_status, elemento)
            )
        else:
            window.PhanterPWA.PUT(
                "api",
                "registro-de-aulas",
                self.id_escola,
                self.ano_letivo,
                self.id_turma,
                form_data=formdata,
                onComplete=lambda data, ajax_status: self.depois_de_enviar_componentes_curriculares(data, ajax_status, elemento)
            )

    def depois_de_enviar_componentes_curriculares(self, data, ajax_status, elemento):
        if ajax_status == "success":
            self.modal_cmp_curriculares.close()
            json = data.responseJSON
            jQuery(elemento).find(".registro_de_aulas_cmp_curriculares").html(json.valor_extenso)
            self.diario_binds()


__pragma__('nokwargs')
