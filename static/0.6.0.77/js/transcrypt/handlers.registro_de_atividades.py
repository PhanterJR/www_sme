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
TBODY = helpers.XmlConstructor.tagger('tbody')
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
        arg4 = window.PhanterPWA.Request.get_arg(4)

        if arg0 is None or arg0 is js_undefined:
            html = escolas.EscolherEscola(
                id_target="#content-registro_de_atividades",
                callback_link=lambda id_escola: "#_phanterpwa:/registro-de-atividades/{0}".format(id_escola)
            )
        elif str(arg0).isdigit() and (arg1 is None or arg1 is js_undefined):
            html = anos_letivos.EscolherAnoLetivo(
                id_target="#content-registro_de_atividades",
                callback_link=lambda ano: "#_phanterpwa:/registro-de-atividades/{0}/{1}".format(arg0, ano)
            )
        elif str(arg0).isdigit() and str(arg1).isdigit():
            self.RegistroDeAtividades = RegistroDeAtividades(self, arg0, arg1, arg2, arg3, arg4)
        if window.PhanterPWA.Request.get_param("retornar") is None:
            BackButton1 = left_bar.LeftBarButton(
                "back_registro_de_atividades",
                "Voltar",
                I(_class="fas fa-arrow-circle-left"),
                **{
                    "tag": "a",
                    "_href": window.PhanterPWA.XWAY("turmas", arg0, arg1),
                    "position": "top",
                    "show_if_way_match": r"^registro-de-atividades\/[0-9]{1,}\/[0-9]{1,}.*$"
                }
            )
        else:
            if window.PhanterPWA.Request.get_param("retornar") == "turma-simples":
                BackButton1 = left_bar.LeftBarButton(
                    "back_registro_de_atividades",
                    "Voltar",
                    I(_class="fas fa-arrow-circle-left"),
                    **{
                        "tag": "a",
                        "_href": window.PhanterPWA.XWAY("turmas", arg0, arg1),
                        "position": "top",
                        "show_if_way_match": r"^registro-de-atividades\/[0-9]{1,}\/[0-9]{1,}.*$"
                    }
                )
        window.PhanterPWA.Components['left_bar'].add_button(BackButton1)


class RegistroDeAtividades():
    def __init__(self, index_instance, escola, ano_letivo, turma, rotulo_mes_ano):
        self.id_escola = escola
        self.ano_letivo = ano_letivo
        self.id_turma = turma
        self.rotulo_mes_ano = rotulo_mes_ano
        self.index_instance = index_instance
        self._get_registro_de_atividades()
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

    def _get_registro_de_atividades(self):
        if self.rotulo_mes_ano is not None and self.rotulo_mes_ano is not js_undefined:
            window.PhanterPWA.GET(
                "api",
                "registro-de-atividades",
                self.id_escola,
                self.ano_letivo,
                self.id_turma,
                self.rotulo_mes_ano,
                onComplete=self.after_get
            )
        else:
            window.PhanterPWA.GET(
                "api",
                "registro-de-atividades",
                self.id_escola,
                self.ano_letivo,
                self.id_turma,
                onComplete=self.after_get
            )


    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            registro_de_atividades = json.data
            self.disciplinas = json.data_disciplinas
            self.anterior = json.anterior
            self.proximo = json.proximo
            self.mes_referencia = json.mes_referencia
            self.meses_referencia = json.meses_referencia
            self.dias_letivos = json.dias_letivos
            self.total_de_dias = json.total_de_dias
            self.turma = json.turma
            self.processar_registro_de_atividades(registro_de_atividades)

    def processar_registro_de_atividades(self, registro_de_atividades):
        xway_meses_referencia = []
        for x in self.meses_referencia:
            xway = [
                "registro-de-atividades",
                self.id_escola,
                self.ano_letivo,
                self.id_turma,
                x
            ]

            op = widgets.MenuOption(x, **{
                "_class": "botao_meses_referencia wave_on_click",
                "_href": window.PhanterPWA.XWAY(*xway),
            })
            xway_meses_referencia.append(op)


        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("CONTROLE DE ATIVIDADES", _class="phanterpwa-breadcrumb"),
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
                    _id="content-registro_de_atividades",
                    _class='p-row card e-padding_auto'
                ),
                DIV(_id="modal_registro_de_atividades_container"),
                _class="phanterpwa-container p-container extend"
            )
        )
        html.html_to("#main-container")
        if self.disciplina is not None and self.disciplina is not js_undefined:
            html = DIV(
                H2("Controle de atividades da disciplina de ", self.disciplina, " da turma ", self.turma),
                _class="registro_de_atividades_container"
            )
        else:
            html = DIV(
                H2("Controle de atividades da turma ", self.turma),
                _class="registro_de_atividades_container"
            )
        tabela = TABLE(
            TR(TH("Nº", _class="rotulo", _rowspan=2), TH("NOME ALUNO(A)", _class="rotulo cabecalho_aluno", _rowspan=2), TH("DISCIPLINAS", _class="rotulo", _rowspan=2), TH("DIAS LETIVOS", _colspan=self.total_de_dias, _class="rotulo")),
            TR(*[TH(dat[-2:], _class="rotulo") for dat in self.dias_letivos]),
            _class='tabela_registro_de_atividades'
        )
        console.log(registro_de_atividades)
        for x in registro_de_atividades:
            linha = TR(TH(x.numero, _rowspan=x.tot_disciplinas), TH(x.nome, _rowspan=x.tot_disciplinas))
            body = TBODY(linha, _class="tbody_regitro_de_atividades")
            proximas_linhas = []
            cont = 0
            for y in x.disciplinas:
                cont += 1
                if cont == 1:
                    linha.append(TH(self.disciplinas[y[0]]))
                    for dia in self.dias_letivos:
                        if dia in y[1]:
                            if y[1][dia] == "NF":
                                linha.append(TD(
                                    I(_class="fas fa-check-circle", _style="color:red;"),
                                    _class="registro_de_atividades semana_par"
                                ))
                            elif y[1][dia] == "F":
                                linha.append(TD(
                                    I(_class="fas fa-check-circle", _style="color:green;"),
                                    _class="registro_de_atividades semana_par"
                                ))
                            elif y[1][dia] == "FP":
                                linha.append(TD(
                                    I(_class="fas fa-check-circle", _style="color:#d28a06;"),
                                    _class="registro_de_atividades semana_par"
                                ))
                        else:
                            linha.append(TD(
                                DIV(dia[-2:], _class="apagadinho"),
                                _class="registro_de_atividades semana_par"
                            ))
                else:
                    ld = TR(TH(self.disciplinas[y[0]]))
                    for dia in self.dias_letivos:
                        if dia in y[1]:
                            if y[1][dia] == "NF":
                                ld.append(TD(
                                    I(_class="fas fa-check-circle", _style="color:red;"),
                                    _class="registro_de_atividades semana_par"
                                ))
                            elif y[1][dia] == "F":
                                ld.append(TD(
                                    I(_class="fas fa-check-circle", _style="color:green;"),
                                    _class="registro_de_atividades semana_par"
                                ))
                            elif y[1][dia] == "FP":
                                ld.append(TD(
                                    I(_class="fas fa-check-circle", _style="color:#d28a06;"),
                                    _class="registro_de_atividades semana_par"
                                ))
                        else:
                            ld.append(TD(
                                DIV(dia[-2:], _class="apagadinho"),
                                _class="registro_de_atividades semana_par"
                            ))
                    body.append(
                        ld
                    )
            tabela.append(
                body
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
            "registro-de-atividades",
            self.id_escola,
            self.ano_letivo,
            self.id_turma
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
        painel = DIV(
            LABEL(self.mes_referencia),
            DIV(
                DIV(
                    DIV(
                        DIV(
                            DIV(
                                DIV(
                                    tabela,
                                    _class="diario-registro_de_atividades-container"
                                ),
                                _class="diario-registro_de_atividades-wrapper"
                            ),
                            _class="p-row e-padding_auto",
                        ),
                        _class="phanterpwa-card-panel-control-content"
                    ),
                    DIV(
                        botao_mes_anterior,
                        botao_proximo_mes,
                        widgets.MenuBox(
                            "drop_{0}".format(x.id),
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
        html.html_to("#content-registro_de_atividades")
        self.diario_binds()

    def diario_binds(self):
        jQuery(
            ".registro_de_atividades.celula_registro_de_atividades"
        ).off(
            "click.enviar_registro_de_atividades"
        ).on(
            "click.enviar_registro_de_atividades",
            lambda: self.modal_confirmar_registro_de_atividades(jQuery(this))
        )

    def abrir_diario(self, url):
        window.location = url

__pragma__('nokwargs')
