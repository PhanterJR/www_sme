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
                id_target="#content-controle_de_atividades",
                callback_link=lambda id_escola: "#_phanterpwa:/controle-de-atividades/{0}".format(id_escola)
            )
        elif str(arg0).isdigit() and (arg1 is None or arg1 is js_undefined):
            html = anos_letivos.EscolherAnoLetivo(
                id_target="#content-controle_de_atividades",
                callback_link=lambda ano: "#_phanterpwa:/controle-de-atividades/{0}/{1}".format(arg0, ano)
            )
        elif str(arg0).isdigit() and str(arg1).isdigit():
            self.ControleDeAtividades = ControleDeAtividades(self, arg0, arg1, arg2, arg3, arg4)
        if window.PhanterPWA.Request.get_param("retornar") is None:
            BackButton1 = left_bar.LeftBarButton(
                "back_controle_de_atividades",
                "Voltar",
                I(_class="fas fa-arrow-circle-left"),
                **{
                    "tag": "a",
                    "_href": window.PhanterPWA.XWAY("professores", "turmas", arg0, arg1),
                    "position": "top",
                    "show_if_way_match": r"^controle-de-atividades\/[0-9]{1,}\/[0-9]{1,}.*$"
                }
            )

        else:

            BackButton1 = left_bar.LeftBarButton(
                "back_controle_de_atividades",
                "Voltar",
                I(_class="fas fa-arrow-circle-left"),
                **{
                    "tag": "a",
                    "_href": window.PhanterPWA.Request.get_param("retornar"),
                    "position": "top",
                    "show_if_way_match": r"^controle-de-atividades\/[0-9]{1,}\/[0-9]{1,}.*$"
                }
            )
        window.PhanterPWA.Components['left_bar'].add_button(BackButton1)


class ControleDeAtividades():
    def __init__(self, index_instance, escola, ano_letivo, id_turma, id_disciplina, mes_referencia):
        self.id_escola = escola
        self.ano_letivo = ano_letivo
        self.id_turma = id_turma
        self.id_disciplina = id_disciplina
        self.mes_referencia = mes_referencia
        self.index_instance = index_instance
        self._get_controle_de_atividades()
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
        self.romanos = {
            "0": "Ano inteiro",
            "1": "Unidade I",
            "2": "Unidade II",
            "3": "Unidade III",
            "4": "Unidade IV",
            "5": "Unidade V",
            "6": "Unidade VI",
            "7": "Unidade VII",
            "8": "Unidade VIII"
        }
    def _get_controle_de_atividades(self):

        if self.id_disciplina is not None and self.id_disciplina is not js_undefined:
            if self.mes_referencia is not None and self.mes_referencia is not js_undefined:
                window.PhanterPWA.GET(
                    "api",
                    "controle-de-atividades",
                    self.id_escola,
                    self.ano_letivo,
                    self.id_turma,
                    self.id_disciplina,
                    self.mes_referencia,
                    onComplete=self.after_get
                )
            else:
                window.PhanterPWA.GET(
                    "api",
                    "controle-de-atividades",
                    self.id_escola,
                    self.ano_letivo,
                    self.id_turma,
                    self.id_disciplina,
                    onComplete=self.after_get
                )
        else:
            window.PhanterPWA.GET(
                "api",
                "controle-de-atividades",
                self.id_escola,
                self.ano_letivo,
                self.id_turma,
                onComplete=self.after_get
            )

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            controle_de_atividades = json.data
            self.disciplinas = json.data_disciplinas
            self.anterior = json.anterior
            self.quant_dias = json.quant_dias
            self.proximo = json.proximo
            self.mes_referencia = json.mes_referencia
            self.periodo_unidades = json.periodo_unidades
            self.disciplina = json.disciplina
            self.meses_referencia = json.meses_referencia
            self.dias_letivos = json.dias_letivos
            self.total_de_dias = json.total_de_dias
            self.turma = json.turma
            self.eh_multisseriado = json.eh_multisseriado
            self.meses_calendario = json.meses_calendario

            self.processar_controle_de_atividades(controle_de_atividades)

    def processar_controle_de_atividades(self, controle_de_atividades):
        xway_meses_referencia = []
        for x in self.meses_referencia:
            xway = [
                "controle-de-atividades",
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
                    _id="content-controle_de_atividades",
                    _class='p-row card e-padding_auto'
                ),
                DIV(_id="modal_controle_de_atividades_container"),
                DIV(_id="modal_dia_controle_de_atividades_container"),
                DIV(_id="modal_estatisticas_unidades_controle_de_atividades"),
                _class="phanterpwa-container p-container extend"
            )
        )
        html.html_to("#main-container")
        if self.disciplina is not None and self.disciplina is not js_undefined:
            html = DIV(
                H2("Controle de atividades da disciplina de ", self.disciplina, " da turma ", self.turma),
                _class="controle_de_atividades_container"
            )
        else:
            html = DIV(
                H2("Controle de atividades da turma ", self.turma),
                _class="controle_de_atividades_container"
            )
        tabela = TABLE(
            TR(TH("Nº", _class="rotulo", _rowspan=2), TH("NOME ALUNO(A)", _class="rotulo cabecalho_aluno", _rowspan=2), TH("DIAS LETIVOS", _colspan=self.total_de_dias, _class="rotulo")),
            TR(*[TH(DIV(dat[-2:], _class="modal_dia_control"), _class="rotulo tabela_coluna_modal", **{"_data-dia_mes_e_ano": dat}) for dat in self.dias_letivos]),
            _class='tabela_controle_de_atividades'
        )
        self.data_controle_de_atividades_keys = []
        self.data_controle_de_atividades = {}
        l_series = []
        for x in controle_de_atividades:
            if self.eh_multisseriado and x.serie not in l_series:
                l_series.append(x.serie)
                tabela.append(TBODY(TR(TH(x.serie, _colspan=2 + len(self.dias_letivos))), _style="background-color: #dfbf84"))
            linha = TR(TH(x.numero, _rowspan=x.tot_disciplinas, _class="rotulo"), TH(x.nome, _rowspan=x.tot_disciplinas, _class="rotulo"))
            body = TBODY(linha, _class="tbody_controle_de_atividades")
            proximas_linhas = []
            cont = 0
            self.data_controle_de_atividades[x.id] = x
            self.data_controle_de_atividades_keys.append(x.id)
            for y in x.disciplinas:

                cont += 1
                if cont == 1:
                    # linha.append(TH(self.disciplinas[y[0]]))
                    for dia in self.dias_letivos:
                        if dia in y[1]:
                            if y[1][dia] == "NF":
                                linha.append(TD(
                                    I(_class="fas fa-check-circle", _style="color:red;"),
                                    _class="controle_de_atividades celula_controle_de_atividades semana_par",
                                    _id="{0}-{1}".format(str(dia).replace("-", "_"), x.id),
                                    **{"_data-id_matricula": x.id, "_data-dia": dia}
                                ))
                            elif y[1][dia] == "F":
                                linha.append(TD(
                                    I(_class="fas fa-check-circle", _style="color:green;"),
                                    _class="controle_de_atividades celula_controle_de_atividades semana_par",
                                    _id="{0}-{1}".format(str(dia).replace("-", "_"), x.id),
                                    **{"_data-id_matricula": x.id, "_data-dia": dia}
                                ))
                            elif y[1][dia] == "FP":
                                linha.append(TD(
                                    I(_class="fas fa-check-circle", _style="color:#d28a06;"),
                                    _class="controle_de_atividades celula_controle_de_atividades semana_par",
                                    _id="{0}-{1}".format(str(dia).replace("-", "_"), x.id),
                                    **{"_data-id_matricula": x.id, "_data-dia": dia}
                                ))
                        else:
                            linha.append(TD(
                                DIV(dia[-2:], _class="apagadinho"),
                                _class="controle_de_atividades celula_controle_de_atividades semana_par",
                                _id="{0}-{1}".format(str(dia).replace("-", "_"), x.id),
                                **{"_data-id_matricula": x.id, "_data-dia": dia}
                            ))
                else:
                    ld = TR()
                    for dia in self.dias_letivos:
                        if dia in y[1]:
                            if y[1][dia] == "NF":
                                ld.append(TD(
                                    I(_class="fas fa-check-circle", _style="color:red;"),
                                    _class="controle_de_atividades celula_controle_de_atividades semana_par",
                                    _id="{0}-{1}".format(str(dia).replace("-", "_"), x.id),
                                    **{"_data-id_matricula": x.id, "_data-dia": dia}
                                ))
                            elif y[1][dia] == "F":
                                ld.append(TD(
                                    I(_class="fas fa-check-circle", _style="color:green;"),
                                    _class="controle_de_atividades celula_controle_de_atividades semana_par",
                                    _id="{0}-{1}".format(str(dia).replace("-", "_"), x.id),
                                    **{"_data-id_matricula": x.id, "_data-dia": dia}
                                ))
                            elif y[1][dia] == "FP":
                                ld.append(TD(
                                    I(_class="fas fa-check-circle", _style="color:#d28a06;"),
                                    _class="controle_de_atividades celula_controle_de_atividades semana_par",
                                    _id="{0}-{1}".format(str(dia).replace("-", "_"), x.id),
                                    **{"_data-id_matricula": x.id, "_data-dia": dia}
                                ))
                        else:
                            ld.append(TD(
                                DIV(dia[-2:], _class="apagadinho"),
                                _class="controle_de_atividades celula_controle_de_atividades semana_par",
                                _id="{0}-{1}".format(str(dia).replace("-", "_"), x.id),
                                **{"_data-id_matricula": x.id, "_data-dia": dia}
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
            "controle-de-atividades",
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
        botao_estatistica = A(
            I(_class="fas fa-chart-pie"),
            **{
                "_class": "botao_estatistica icon_button",
                "_title": "Estastíticas"
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
                                    _class="diario-controle_de_atividades-container"
                                ),
                                _class="diario-controle_de_atividades-wrapper"
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
                        botao_estatistica,
                        _class="phanterpwa-card-panel-control-buttons"
                    ),
                    _class="phanterpwa-card-panel-control-wrapper has_buttons"
                ),
                _class="phanterpwa-card-panel-control-container"
            ),
            _class="phanterpwa-card-panel-control"
        )

        html.append(painel)
        html.html_to("#content-controle_de_atividades")
        self.diario_binds()

    def diario_binds(self):
        jQuery(
            ".controle_de_atividades.celula_controle_de_atividades"
        ).off(
            "click.enviar_controle_de_atividades"
        ).on(
            "click.enviar_controle_de_atividades",
            lambda: self.modal_confirmar_controle_de_atividades(jQuery(this))
        )
        jQuery(".tabela_coluna_modal").off(
            "click.tabela_coluna_modal"
        ).on(
            "click.tabela_coluna_modal",
            lambda: self.modal_controle_de_atividades_por_dia(this)
        )
        jQuery(".botao_estatistica").off(
            "click.botao_estatistica"
        ).on(
            "click.botao_estatistica",
            lambda: self.modal_estatisticas_unidades()
        )

    def abrir_diario(self, url):
        window.location = url

    def modal_confirmar_controle_de_atividades(self, el):
        id_matricula = jQuery(el).data("id_matricula")
        data = jQuery(el).data("dia")
        ano, mes, dia = data.split("-")
        mes_ext = self.meses[mes]
        data_ext = "{0} de {1} de {2}".format(dia, mes_ext, ano)
        id_disciplina = self.id_disciplina
        if id_disciplina is None or id_disciplina is js_undefined:
            id_disciplina = None

        atividade = False
        nome_aluno = self.data_controle_de_atividades[int(id_matricula)]["nome"]
        status = self.data_controle_de_atividades[int(id_matricula)]["atividades"][data]


        if status == "NF":
            complement = " Atividade"
            atividade = True
            content = DIV(
                P(STRONG("O(A) presente aluno(a) fez a atividade proposta?")),
                P("No registro consta que o(a) aluno(a) não fez a atividade em ", STRONG(data_ext), ". Se o(a) aluno(a) fez completamente ou de forma satisfatória, ",
                    " mude para ", STRONG("FEZ", _style="color: green"),
                    ". Caso tenha feito a atividade parcialmente, você pode mudar para ", STRONG("FEZ PARCIALMENTE", _style="color: #d28a06"),
                    "."),
                _class="p-row"
            )
        elif status == "F":
            complement = " remoção da Atividade"
            atividade = True
            content = DIV(
                P(STRONG("O(A) presente aluno(a) fez a atividade proposta?")),
                P("Pode-se observar que o(a) aluno(a) fez a atividade em ", STRONG(data_ext), " completamente ou de forma satisfatória.",
                    " Se ele fez a atividade parcialmente, você pode mudar para ", STRONG("FEZ PARCIALMENTE", _style="color: #d28a06"),
                    ". Caso o(a) aluno(a) não tenha feito, é só mudar para ", STRONG("NÃO FEZ", _style="color: red"), "."),
                P("Você também pode apagar qualquer registro, é có acessar a opção ", STRONG("NÃO FEZ", _style="color: blue"), "."),
                _class="p-row"
            )
        elif status == "FP":
            complement = " remoção da Atividade"
            atividade = True
            content = DIV(
                P(STRONG("O(A) presente aluno(a) fez a atividade proposta?")),
                P("Pode-se observar que o(a) aluno(a) fez a atividade em ", STRONG(data_ext), ", porém ", STRONG("parcialmente"),
                    ", se ele fez completamente ou de forma satisfatória, você pode mudar para ", STRONG("FEZ", _style="color: green"),
                    ". Caso o(a) aluno(a) não tenha feito, é só mudar para ", STRONG("NÃO FEZ", _style="color: red"), "."),
                P("Você também pode apagar qualquer registro, é có acessar a opção ", STRONG("NÃO FEZ", _style="color: blue"), "."),
                _class="p-row"
            )
        else:

            content = DIV(
                P(STRONG("O(A) presente aluno(a) fez a atividade proposta?")),
                P("Ainda não foi definido o status da atividade no dia ", STRONG(data_ext),
                    ". Se ele fez completamente ou de forma satisfatória, você acessa a opção ", STRONG("FEZ", _style="color: green"),
                    ", se ele fez parcialmente, é só acessar a opção ", STRONG("FEZ PARCIALMENTE", _style="color: #d28a06"),
                    ". Caso o(a) aluno(a) não tenha feito, é só mudar para ", STRONG("NÃO FEZ", _style="color: red"), "."),
                P("Você também pode apagar qualquer registro, é có acessar a opção ", STRONG("NÃO FEZ", _style="color: blue"), "."),
                _class="p-row"
            )

        footer = DIV(
            forms.FormButton(
                "confirmar_atividade_fez",
                "Fez",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ) if status != "F" else "",
            forms.FormButton(
                "confirmar_atividade_fez_parcialmente",
                "Fez parcialmente",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ) if status != "FP" else "",
            forms.FormButton(
                "confirmar_atividade_nao_fez",
                "Não fez",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ) if status != "NF" else "",
            forms.FormButton(
                "apagar",
                "Apagar",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ) if atividade else "",
            forms.FormButton(
                "cancelar",
                "Cancelar",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ),
            _class='phanterpwa-form-buttons-container'
        )
        self.modal_controle_de_atividades = modal.Modal(
            "#modal_controle_de_atividades_container",
            **{
                "title": nome_aluno,
                "content": content,
                "footer": footer,
                "form": "controle_de_atividades"
            }
        )
        self.modal_controle_de_atividades.open()
        jQuery("#phanterpwa-widget-form-form_button-confirmar_atividade_nao_fez").off(
            "click.adicionar_controle_de_atividades_fez_parcialmente"
        ).on(
            "click.adicionar_controle_de_atividades_fez_parcialmente",
            lambda: self._on_click_controle_de_atividades(id_matricula, id_disciplina, "Não fez a atividade", data)
        )
        jQuery("#phanterpwa-widget-form-form_button-confirmar_atividade_fez").off(
            "click.adicionar_controle_de_atividades_fez"
        ).on(
            "click.adicionar_controle_de_atividades_fez",
            lambda: self._on_click_controle_de_atividades(id_matricula, id_disciplina, "Fez toda a atividade", data)
        )
        jQuery("#phanterpwa-widget-form-form_button-confirmar_atividade_fez_parcialmente").off(
            "click.adicionar_controle_de_atividades_nao_fez"
        ).on(
            "click.adicionar_controle_de_atividades_nao_fez",
            lambda: self._on_click_controle_de_atividades(id_matricula, id_disciplina, "Fez parcialmente a atividade", data)
        )
        jQuery("#phanterpwa-widget-form-form_button-apagar").off(
            "click.adicionar_controle_de_atividades_nao"
        ).on(
            "click.adicionar_controle_de_atividades_nao",
            lambda: self._on_click_controle_de_atividades(id_matricula, id_disciplina, "Apagar", data)
        )
        jQuery("#phanterpwa-widget-form-form_button-cancelar").off(
            "click.adicionar_controle_de_atividades_nao"
        ).on(
            "click.adicionar_controle_de_atividades_nao",
            lambda: self.modal_controle_de_atividades.close()
        )

    def _on_click_controle_de_atividades(self, id_matricula, id_disciplina, novo_status, data):
        formdata = __new__(FormData())
        formdata.append(
            "data",
            data
        )

        formdata.append(
            "status",
            novo_status
        )
        if self.id_disciplina is not None and self.id_disciplina is not js_undefined:
            window.PhanterPWA.PUT(
                "api",
                "controle-de-atividades",
                self.id_escola,
                self.ano_letivo,
                id_matricula,
                id_disciplina,
                form_data=formdata,
                onComplete=lambda data, ajax_status: self.depois_de_enviar_registro(data, ajax_status)
            )
        else:
            window.PhanterPWA.PUT(
                "api",
                "controle-de-atividades",
                self.id_escola,
                self.ano_letivo,
                id_matricula,
                form_data=formdata,
                onComplete=lambda data, ajax_status: self.depois_de_enviar_registro(data, ajax_status)
            )
        self.modal_controle_de_atividades.close()

    def depois_de_enviar_registro(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            up = json.celula_update
            if up is not None and up is not js_undefined:
                data, id_matricula = up[0].split("-")

                if up[1] == "Fez parcialmente a atividade":
                    jQuery("#{0}".format(up[0])).html(I(_class="fas fa-check-circle", _style="color:#d28a06;").jquery())
                    self.data_controle_de_atividades[int(id_matricula)]["atividades"][str(data).replace("_", "-")] = "FP"
                elif up[1] == "Não fez a atividade":
                    jQuery("#{0}".format(up[0])).html(I(_class="fas fa-check-circle", _style="color:red;").jquery())
                    self.data_controle_de_atividades[int(id_matricula)]["atividades"][str(data).replace("_", "-")] = "NF"
                elif up[1] == "Fez toda a atividade":
                    jQuery("#{0}".format(up[0])).html(I(_class="fas fa-check-circle", _style="color:green;").jquery())
                    self.data_controle_de_atividades[int(id_matricula)]["atividades"][str(data).replace("_", "-")] = "F"
                else:
                    jQuery("#{0}".format(up[0])).html(DIV(up[2], _class="apagadinho").jquery())
                    del self.data_controle_de_atividades[int(id_matricula)]["atividades"][str(data).replace("_", "-")]

            self.diario_binds()

    def modal_controle_de_atividades_por_dia(self, el):
        dia_mes_e_ano = jQuery(el).data("dia_mes_e_ano")
        ano, mes, _dia = dia_mes_e_ano.split("-")
        mes_ext = self.meses[mes]
        data_ext = "{0} de {1} de {2}".format(_dia, mes_ext, ano)

        tabela = TABLE(
            TR(
                TH("Nº", _class="rotulo", _rowspan=2),
                TH("NOME ALUNO(A)", _class="rotulo cabecalho_aluno", _rowspan=2),
                TH("OPÇÕES", _class="rotulo", _colspan=3),
                TH("A", _title="Apagar", _class="rotulo", _rowspan=2)
            ),
            TR(
                TH("F", _title="Fez", _class="rotulo"),
                TH("FP", _title="Fez Parcialmente", _class="rotulo"),
                TH("NF", _title="Não Fez", _class="rotulo"),
            ),
            _class='tabela_modal_controle_de_atividades'
        )
        self.data_temp = {}
        for v in self.data_controle_de_atividades_keys:
            x = self.data_controle_de_atividades[v]
            self.data_temp[v] = [v, dia_mes_e_ano]
            linha = TR(TH(x.numero, _rowspan=x.tot_disciplinas), TH(x.nome, _rowspan=x.tot_disciplinas))
            body = TBODY(linha, _class="tbody_controle_de_atividades")
            proximas_linhas = []
            cont = 0
            _class_f = ""
            _class_fp = ""
            _class_nf = ""
            _class_a = ""
            if dia_mes_e_ano in dict(x.atividades).keys():
                if x.atividades[dia_mes_e_ano] == "F":
                    _class_f = " ativado"
                    self.data_temp[v].append("F")
                elif x.atividades[dia_mes_e_ano] == "FP":
                    _class_fp = " ativado"
                    self.data_temp[v].append("FP")
                elif x.atividades[dia_mes_e_ano] == "NF":
                    _class_nf = " ativado"
                    self.data_temp[v].append("NF")
                else:
                    _class_a = " ativado"
            else:
                _class_a = " ativado"
                self.data_temp[v].append("")

            linha.append(TD(
                I(_class="fas fa-check-circle"),
                _class="modal_controle_de_atividades modal_controle_de_atividades{0} modal_controle_de_atividades{1} valorf".format(x.id, _class_f),
                _id="{0}-{1}-f".format(str(dia_mes_e_ano).replace("-", "_"), x.id),
                **{"_data-id_matricula": x.id, "_data-dia_mes_e_ano": dia_mes_e_ano, "_data-valor": "F"}
            ))
            linha.append(TD(
                I(_class="fas fa-check-circle"),
                _class="modal_controle_de_atividades modal_controle_de_atividades{0} modal_controle_de_atividades{1} valorfp".format(x.id, _class_fp),
                _id="{0}-{1}-fp".format(str(dia_mes_e_ano).replace("-", "_"), x.id),
                **{"_data-id_matricula": x.id, "_data-dia_mes_e_ano": dia_mes_e_ano, "_data-valor": "FP"}
            ))
            linha.append(TD(
                I(_class="fas fa-check-circle"),
                _class="modal_controle_de_atividades modal_controle_de_atividades{0} modal_controle_de_atividades{1} valornf".format(x.id, _class_nf),
                _id="{0}-{1}-nf".format(str(dia_mes_e_ano).replace("-", "_"), x.id),
                **{"_data-id_matricula": x.id, "_data-dia_mes_e_ano": dia_mes_e_ano, "_data-valor": "NF"}
            ))
            linha.append(TD(
                I(_class="fas fa-eraser"),
                _class="modal_controle_de_atividades modal_controle_de_atividades{0} modal_controle_de_atividades{1} valora".format(x.id, _class_a),
                _id="{0}-{1}-nf".format(str(dia_mes_e_ano).replace("-", "_"), x.id),
                **{"_data-id_matricula": x.id, "_data-dia_mes_e_ano": dia_mes_e_ano, "_data-valor": "A"}
            ))
            tabela.append(
                body
            )

        titulo_modal = "Atividades do dia {0}".format(data_ext)
        footer = DIV(
            forms.FormButton(
                "confirmar_atividades",
                "Salvar Alterações",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ),
            _class='phanterpwa-form-buttons-container'
        )
        self.modal_dia_controle_de_atividades = modal.Modal(
            "#modal_dia_controle_de_atividades_container",
            **{
                "title": titulo_modal,
                "content": tabela,
                "footer": footer
            }
        )
        self.modal_dia_controle_de_atividades.open()
        self.diario_modal_binds()

    def diario_modal_binds(self):
        jQuery(".modal_controle_de_atividades").off("click.mod_contr").on(
            "click.mod_contr",
            lambda: self.add_opcoes(this)
        )
        jQuery("#phanterpwa-widget-form-form_button-confirmar_atividades").off("click.mod_contr_conf").on(
            "click.mod_contr_conf",
            lambda: self.confirmar_modal_atividades()
        )

    def add_opcoes(self, el):
        element = jQuery(el)
        id_matricula = int(element.data("id_matricula"))
        dia_mes_e_ano = element.data("dia_mes_e_ano")
        valor = element.data("valor")
        if element.hasClass("ativado"):
            if not element.hasClass("valora"):
                element.removeClass("ativado")
                if id_matricula in self.data_temp.keys():
                    self.data_temp[id_matricula][2] = ""
                else:
                    self.data_temp[id_matricula] = [id_matricula, dia_mes_e_ano, ""]
                jQuery(".modal_controle_de_atividades{0}.valora".format(id_matricula)).addClass("ativado")
        else:
            if valor == "A":
                valor = ""
            jQuery(".modal_controle_de_atividades{0}".format(id_matricula)).removeClass("ativado")
            element.addClass("ativado")
            if id_matricula in self.data_temp.keys():
                self.data_temp[id_matricula][2] = valor
            else:
                self.data_temp[id_matricula] = [id_matricula, dia_mes_e_ano, valor]

    def confirmar_modal_atividades(self):
        formdata = __new__(FormData())
        formdata.append(
            "atividades",
            JSON.stringify([self.data_temp[x] for x in self.data_temp.keys()])
        )

        if self.id_disciplina is not None and self.id_disciplina is not js_undefined:
            window.PhanterPWA.PUT(
                "api",
                "controle-de-atividades",
                self.id_escola,
                self.ano_letivo,
                self.id_turma,
                "atividades",
                self.id_disciplina,
                form_data=formdata,
                onComplete=lambda data, ajax_status: self.depois_de_enviar_registro_modal(data, ajax_status)
            )
        else:
            window.PhanterPWA.PUT(
                "api",
                "controle-de-atividades",
                self.id_escola,
                self.ano_letivo,
                "atividades",
                form_data=formdata,
                onComplete=lambda data, ajax_status: self.depois_de_enviar_registro_modal(data, ajax_status)
            )
        self.modal_dia_controle_de_atividades.close()

    def depois_de_enviar_registro_modal(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            atividades = json.atividades

            if atividades is not None and atividades is not js_undefined:
                for up in atividades:
                    id_matricula = up[0]
                    data = up[1]
                    element_id = "{0}-{1}".format(str(data).replace("-", "_"), id_matricula)

                    if up[2] == "FP":
                        jQuery("#{0}".format(element_id)).html(I(_class="fas fa-check-circle", _style="color:#d28a06;").jquery())
                        self.data_controle_de_atividades[int(id_matricula)]["atividades"][str(data)] = "FP"
                    elif up[2] == "NF":
                        jQuery("#{0}".format(element_id)).html(I(_class="fas fa-check-circle", _style="color:red;").jquery())
                        self.data_controle_de_atividades[int(id_matricula)]["atividades"][str(data)] = "NF"
                    elif up[2] == "F":
                        jQuery("#{0}".format(element_id)).html(I(_class="fas fa-check-circle", _style="color:green;").jquery())
                        self.data_controle_de_atividades[int(id_matricula)]["atividades"][str(data)] = "F"
                    else:
                        jQuery("#{0}".format(element_id)).html(DIV(str(data)[-2:], _class="apagadinho").jquery())
                        del self.data_controle_de_atividades[int(id_matricula)]["atividades"][str(data)]
                self.diario_binds()

    def iso_br(self, data_iso):
        ano, mes, dia = data_iso.split("-")
        return "{0}/{1}/{2}".format(dia, mes, ano)

    def modal_estatisticas_unidades(self):
        self.periodo_unidades
        unidades_disponiveis = DIV(_class="unidades_disponiveis")
        for x in self.periodo_unidades:
            unidades_disponiveis.append(
                DIV(
                    A(
                        "{0} - {1} à {2}".format(
                            self.romanos[str(x[0])],
                            self.iso_br(x[1]),
                            self.iso_br(x[2])
                        ),
                        _href=window.PhanterPWA.XWAY(
                            "estatistica-controle-de-atividades",
                            self.id_escola,
                            self.ano_letivo,
                            self.id_turma,
                            str(x[0]),
                            self.id_disciplina
                        ),
                        _class="btn e-link"
                    ),
                    _class="botao_estatistica_unidades",
                )
            )
        unidades_disponiveis.append(
            DIV(
                A(
                    "Todas as unidades",
                    _href=window.PhanterPWA.XWAY(
                        "estatistica-controle-de-atividades",
                        self.id_escola,
                        self.ano_letivo,
                        self.id_turma,
                        "0",
                        self.id_disciplina
                    ),
                    _class="btn e-link"
                ), 
                _class="botao_estatistica_unidades",
            )
        )
        self.modal_estatisticas = modal.Modal(
            "#modal_estatisticas_unidades_controle_de_atividades",
            **{
                "title": "Escolha a Unidade",
                "content": unidades_disponiveis
            }
        )
        self.modal_estatisticas.open()
        jQuery(".botao_estatistica_unidades").off("click.ests").on(
            "click.ests",
            lambda: self.modal_estatisticas.close()
        )


__pragma__('nokwargs')
