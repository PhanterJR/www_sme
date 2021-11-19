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
import plugins.highcharts as highcharts
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
BR = helpers.XmlConstructor.tagger("br", True)
THEAD = helpers.XmlConstructor.tagger('thead')
TFOOT = helpers.XmlConstructor.tagger('tfoot')
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
                "back_estatistica_controle_de_atividades",
                "Voltar",
                I(_class="fas fa-arrow-circle-left"),
                **{
                    "tag": "a",
                    "_href": window.PhanterPWA.XWAY(
                        "controle-de-atividades",
                        arg0,
                        arg1,
                        arg2,
                        arg4,
                    ),
                    "position": "top",
                    "show_if_way_match": r"^estatistica-controle-de-atividades\/[0-9]{1,}\/[0-9]{1,}\/[0-9]{1,}\/[0-9]{1,}.*$"
                }
            )

        else:

            BackButton1 = left_bar.LeftBarButton(
                "back_estatistica_controle_de_atividades",
                "Voltar",
                I(_class="fas fa-arrow-circle-left"),
                **{
                    "tag": "a",
                    "_href": window.PhanterPWA.Request.get_param("retornar"),
                    "position": "top",
                    "show_if_way_match": r"^estatistica-controle-de-atividades\/[0-9]{1,}\/[0-9]{1,}\/[0-9]{1,}\/[0-9]{1,}.*$"
                }
            )
        window.PhanterPWA.Components['left_bar'].add_button(BackButton1)


class ControleDeAtividades(gatehandler.Handler):
    @decorators.check_authorization(lambda: window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME", "Administrador Master Escola", "Professor(a)"]))
    def initialize(self):
        arg0 = window.PhanterPWA.Request.get_arg(0)
        arg1 = window.PhanterPWA.Request.get_arg(1)
        arg2 = window.PhanterPWA.Request.get_arg(2)
        arg3 = window.PhanterPWA.Request.get_arg(3)
        arg4 = window.PhanterPWA.Request.get_arg(4)
        self.id_escola = arg0
        self.ano_letivo = arg1
        self.id_turma = arg2
        self.unidade = arg3
        self.id_disciplina = arg4
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
            self._get_estatistica_controle_de_atividades()
        if window.PhanterPWA.Request.get_param("retornar") is None:
            BackButton1 = left_bar.LeftBarButton(
                "back_estatistica_controle_de_atividades",
                "Voltar",
                I(_class="fas fa-arrow-circle-left"),
                **{
                    "tag": "a",
                    "_href": window.PhanterPWA.XWAY(
                        "controle-de-atividades",
                        arg0,
                        arg1,
                        arg2,
                        arg4,
                    ),
                    "position": "top",
                    "show_if_way_match": r"^estatistica-controle-de-atividades\/[0-9]{1,}\/[0-9]{1,}\/[0-9]{1,}\/[0-9]{1,}.*$"
                }
            )

        else:

            BackButton1 = left_bar.LeftBarButton(
                "back_estatistica_controle_de_atividades",
                "Voltar",
                I(_class="fas fa-arrow-circle-left"),
                **{
                    "tag": "a",
                    "_href": window.PhanterPWA.Request.get_param("retornar"),
                    "position": "top",
                    "show_if_way_match": r"^estatistica-controle-de-atividades\/[0-9]{1,}\/[0-9]{1,}\/[0-9]{1,}\/[0-9]{1,}.*$"
                }
            )
        window.PhanterPWA.Components['left_bar'].add_button(BackButton1)

    def _get_estatistica_controle_de_atividades(self):

        if self.id_disciplina is not None and self.id_disciplina is not js_undefined:
            window.PhanterPWA.GET(
                "api",
                "estatisticas",
                "controle-de-atividades",
                self.id_escola,
                self.ano_letivo,
                self.id_turma,
                self.unidade,
                self.id_disciplina,
                onComplete=self.after_get
            )
        else:
            window.PhanterPWA.GET(
                "api",
                "estatisticas",
                "controle-de-atividades",
                self.id_escola,
                self.ano_letivo,
                self.id_turma,
                self.unidade,
                onComplete=self.after_get
            )

    def iso_br(self, data_iso):
        ano, mes, dia = data_iso.split("-")
        return "{0}/{1}/{2}".format(dia, mes, ano)

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            self.estatistica_por_aluno = json.data
            self.unidade = json.unidade
            self.data_inicial = json.data_inicial
            self.data_final = json.data_final
            self.eh_multisseriado = json.eh_multisseriado
            self.turma = json.turma
            self.disciplina = json.disciplina
            self.estatistica_da_turma = json.totais_turma
            self.criar_estatisticas()

    def porcentagem(self, valor, total):
        if str(valor).isdigit() and str(total).isdigit():
            valor = int(valor)
            total = int(total)
            if valor == 0:
                return " (0%)"
            else:
                return " ({0}%)".format(((valor / total) * 100).toFixed(2))
        return ""

    def criar_estatisticas(self):
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("ESTATÍSTICAS", _class="phanterpwa-breadcrumb"),
                        DIV("CONTROLE DE ATIVIDADES", _class="phanterpwa-breadcrumb"),
                        DIV(self.romanos[str(self.unidade)], _class="phanterpwa-breadcrumb"),
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
                _class="phanterpwa-container p-container extend"
            )
        )
        html.html_to("#main-container")
        titulo_painel = "{0} - Período de {1} à {2}".format(
            self.romanos[str(self.unidade)],
            self.iso_br(self.data_inicial),
            self.iso_br(self.data_final)
        )
        if self.disciplina is not None and self.disciplina is not js_undefined:
            html = DIV(
                H2("Estatísticas do Controle de atividades da disciplina de ", self.disciplina, " da turma ", self.turma),
                H2(titulo_painel),
                _class="controle_de_atividades_container"
            )
        else:
            html = DIV(
                H2("Estatísticas do Controle de atividades da turma ", self.turma),
                H2(titulo_painel),
                _class="controle_de_atividades_container"
            )
        tabela_geral = TABLE(
            TR(
                TH("NOME", _class="phanterpwa-widget-table-head-th"), 
                TH("FEZ (%)", _class="phanterpwa-widget-table-head-th centralizado"), 
                TH("FEZ PARCIALMENTE (%)", _class="phanterpwa-widget-table-head-th centralizado"), 
                TH("NÃO FEZ (%)", _class="phanterpwa-widget-table-head-th centralizado"), 
                TH("TOTAL (100%)", _class="phanterpwa-widget-table-head-th centralizado"),
                _class="phanterpwa-widget-table-head phanterpwa-widget"
            ),
            _class="phanterpwa-widget-table p-row"
        )
        tabela_tur = TABLE(
            TR(TH("FEZ"), TH("FEZ PARCIALMENTE"), TH("NÃO FEZ"), TH("TOTAL")),
            TR(
                TD(self.estatistica_da_turma["F"]),
                TD(self.estatistica_da_turma["FP"]),
                TD(self.estatistica_da_turma["NF"]),
                TD(self.estatistica_da_turma["T"])
            )
        )
        chart_turma = highcharts.Pie(
            "grafico_turma",
            title=self.turma
        )
        chart_turma.add_serie(
            "Fez", self.estatistica_da_turma["F"], color="green"
        )
        chart_turma.add_serie(
            "Fez Parcialmente", self.estatistica_da_turma["FP"], color="#d28a06"
        )
        chart_turma.add_serie(
            "Não Fez", self.estatistica_da_turma["NF"], color="red"
        )
        chats_alunos = CONCATENATE()
        painel_turma = DIV(
            LABEL("Gráfico da Turma"),
            DIV(
                DIV(
                    DIV(
                        DIV(
                            DIV(
                                DIV(
                                    chart_turma,
                                    tabela_tur,
                                    _class="estatisticas-turma-container"
                                ),
                                _class="estatisticas-turma-wrapper"
                            ),
                            _class="p-row e-padding_auto",
                        ),
                        _class="phanterpwa-card-panel-control-content"
                    ),
                    DIV(
                        _class="phanterpwa-card-panel-control-buttons"
                    ),
                    _class="phanterpwa-card-panel-control-wrapper"
                ),
                _class="phanterpwa-card-panel-control-container"
            ),
            _class="phanterpwa-card-panel-control"
        )
        painel_alunos = DIV(
            LABEL("Gráficos dos Alunos"),
            DIV(
                DIV(
                    DIV(
                        DIV(
                            chats_alunos,
                            _class="p-row e-padding_auto",
                        ),
                        _class="phanterpwa-card-panel-control-content"
                    ),
                    DIV(
                        _class="phanterpwa-card-panel-control-buttons"
                    ),
                    _class="phanterpwa-card-panel-control-wrapper"
                ),
                _class="phanterpwa-card-panel-control-container"
            ),
            _class="phanterpwa-card-panel-control"
        )
        painel_geral = DIV(
            LABEL("Resumo"),
            DIV(
                DIV(
                    DIV(
                        DIV(
                            DIV(
                                DIV(
                                    tabela_geral,
                                    _class="estatisticas-geral-container phanterpwa-widget-table-container phanterpwa-widget"
                                ),
                                _class="estatisticas-geral-wrapper"
                            ),
                            _class="p-row e-padding_auto",
                        ),
                        _class="phanterpwa-card-panel-control-content"
                    ),
                    DIV(
                        _class="phanterpwa-card-panel-control-buttons"
                    ),
                    _class="phanterpwa-card-panel-control-wrapper"
                ),
                _class="phanterpwa-card-panel-control-container"
            ),
            _class="phanterpwa-card-panel-control"
        )
        html_estatisticas = CONCATENATE(
            painel_geral,
            painel_turma,
            painel_alunos
        )

        for aln in self.estatistica_por_aluno:
            tabela_geral.append(
                TR(
                    TD(STRONG(aln.nome), _class="phanterpwa-widget-table-data-td"),
                    TD(aln["atividades"]["F"], self.porcentagem(aln["atividades"]["F"], aln["atividades"]["T"]), _class="phanterpwa-widget-table-data-td centralizado"),
                    TD(aln["atividades"]["FP"], self.porcentagem(aln["atividades"]["FP"], aln["atividades"]["T"]), _class="phanterpwa-widget-table-data-td centralizado"),
                    TD(aln["atividades"]["NF"], self.porcentagem(aln["atividades"]["NF"], aln["atividades"]["T"]), _class="phanterpwa-widget-table-data-td centralizado"),
                    TD(aln["atividades"]["T"],_class="phanterpwa-widget-table-data-td centralizado"),
                    _class="phanterpwa-widget-table-data phanterpwa-widget"
                )
            )
            tabela_aln = TABLE(
                TR(TH("FEZ"), TH("FEZ PARCIALMENTE"), TH("NÃO FEZ"), TH("TOTAL")),
                TR(
                    TD(aln["atividades"]["F"]),
                    TD(aln["atividades"]["FP"]),
                    TD(aln["atividades"]["NF"]),
                    TD(aln["atividades"]["T"])
                )
            )

            chart_aluno = highcharts.Pie(
                "grafico_aluno_{0}".format(aln.id),
                title=aln.nome
            )
            chart_aluno.add_serie(
                "Fez", aln["atividades"]["F"], color="green"
            )
            chart_aluno.add_serie(
                "Fez Parcialmente", aln["atividades"]["FP"], color="#d28a06"
            )
            chart_aluno.add_serie(
                "Não Fez", aln["atividades"]["NF"], color="red"
            )
            html_chart_aluno = DIV(
                DIV(
                    chart_aluno,
                    tabela_aln,
                    _class="estatisticas-alunos-container"
                ),
                _class="estatisticas-alunos-wrapper p-col w1p100  w5p50  w7p33  w8p25"
            )

            chats_alunos.append(html_chart_aluno)
        tabela_geral.append(
            TR(
                TD(STRONG("TOTAL TURMA"), _class="phanterpwa-widget-table-data-td"),
                TD(STRONG(self.estatistica_da_turma["F"], self.porcentagem(self.estatistica_da_turma["F"], self.estatistica_da_turma["T"])), _class="phanterpwa-widget-table-data-td centralizado"),
                TD(STRONG(self.estatistica_da_turma["FP"], self.porcentagem(self.estatistica_da_turma["FP"], self.estatistica_da_turma["T"])), _class="phanterpwa-widget-table-data-td centralizado"),
                TD(STRONG(self.estatistica_da_turma["NF"], self.porcentagem(self.estatistica_da_turma["NF"], self.estatistica_da_turma["T"])), _class="phanterpwa-widget-table-data-td centralizado"),
                TD(STRONG(self.estatistica_da_turma["T"]), _class="phanterpwa-widget-table-data-td centralizado"),
                _class="phanterpwa-widget-table-data"
            )
        )

        html.append(html_estatisticas)
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


class RegistroDeAtividadesTurma(gatehandler.Handler):
    @decorators.check_authorization(lambda: window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME", "Administrador Master Escola", "Professor(a)"]))
    def initialize(self):
        arg0 = window.PhanterPWA.Request.get_arg(0)
        arg1 = window.PhanterPWA.Request.get_arg(1)
        arg2 = window.PhanterPWA.Request.get_arg(2)
        arg3 = window.PhanterPWA.Request.get_arg(3)
        arg4 = window.PhanterPWA.Request.get_arg(4)
        self.id_escola = arg0
        self.ano_letivo = arg1
        self.id_turma = arg2
        self.unidade = arg3
        self.id_disciplina = arg4
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
        if str(arg0).isdigit() and str(arg1).isdigit():
            self._get_estatistica_registro_de_atividades()

        BackButton1 = left_bar.LeftBarButton(
            "back_estatistica_registro_de_atividades_turma",
            "Voltar",
            I(_class="fas fa-arrow-circle-left"),
            **{
                "tag": "a",
                "_href": window.PhanterPWA.XWAY(
                    "registro-de-atividades",
                    arg0,
                    arg1,
                    arg2
                ),
                "position": "top",
                "show_if_way_match": r"^estatistica-registro-de-atividades-turma\/[0-9]{1,}\/[0-9]{1,}\/[0-9]{1,}\/[0-9]{1,}.*$"
            }
        )

        window.PhanterPWA.Components['left_bar'].add_button(BackButton1)

    def _get_estatistica_registro_de_atividades(self):

        if self.id_disciplina is not None and self.id_disciplina is not js_undefined:
            window.PhanterPWA.GET(
                "api",
                "estatisticas",
                "registro-de-atividades",
                self.id_escola,
                self.ano_letivo,
                self.id_turma,
                self.unidade,
                self.id_disciplina,
                onComplete=self.after_get
            )
        else:
            window.PhanterPWA.GET(
                "api",
                "estatisticas",
                "registro-de-atividades",
                self.id_escola,
                self.ano_letivo,
                self.id_turma,
                self.unidade,
                onComplete=self.after_get
            )

    def iso_br(self, data_iso):
        ano, mes, dia = data_iso.split("-")
        return "{0}/{1}/{2}".format(dia, mes, ano)

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            self.estatistica_por_aluno = json.data
            self.unidade = json.unidade
            self.data_inicial = json.data_inicial
            self.data_final = json.data_final
            self.eh_multisseriado = json.eh_multisseriado
            self.turma = json.turma
            self.disciplina = json.disciplina
            self.estatistica_da_turma = json.totais_turma
            self.data_disciplinas = json.data_disciplinas
            self.criar_estatisticas()

    def porcentagem(self, valor, total):
        if str(valor).isdigit() and str(total).isdigit():
            valor = int(valor)
            total = int(total)
            if valor == 0:
                return " (0%)"
            else:
                return " ({0}%)".format(((valor / total) * 100).toFixed(2))
        return ""

    def criar_estatisticas(self):
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("ESTATÍSTICAS", _class="phanterpwa-breadcrumb"),
                        DIV("CONTROLE DE ATIVIDADES", _class="phanterpwa-breadcrumb"),
                        DIV(self.romanos[str(self.unidade)], _class="phanterpwa-breadcrumb"),
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
                DIV(_id="modal_dia_registro_de_atividades_container"),
                _class="phanterpwa-container p-container extend"
            )
        )
        html.html_to("#main-container")
        titulo_painel = "{0} - Período de {1} à {2}".format(
            self.romanos[str(self.unidade)],
            self.iso_br(self.data_inicial),
            self.iso_br(self.data_final)
        )
        if self.disciplina is not None and self.disciplina is not js_undefined:
            html = DIV(
                H2("Estatísticas do Controle de atividades da disciplina de ", self.disciplina, " da turma ", self.turma),
                H2(titulo_painel),
                _class="registro_de_atividades_container"
            )
        else:
            html = DIV(
                H2("Estatísticas do Controle de atividades da turma ", self.turma),
                H2(titulo_painel),
                _class="registro_de_atividades_container"
            )
        tabela_geral = TABLE(
            TR(
                TH("NOME", _class="phanterpwa-widget-table-head-th"),
                TH("FEZ (%)", _class="phanterpwa-widget-table-head-th centralizado"),
                TH("FEZ PARCIALMENTE (%)", _class="phanterpwa-widget-table-head-th centralizado"),
                TH("NÃO FEZ (%)", _class="phanterpwa-widget-table-head-th centralizado"),
                TH("TOTAL (100%)", _class="phanterpwa-widget-table-head-th centralizado"),
                _class="phanterpwa-widget-table-head phanterpwa-widget"
            ),
            _class="phanterpwa-widget-table p-row"
        )
        tabela_disciplinas = TABLE(
            TR(
                TH("NOME", _class="phanterpwa-widget-table-head-th centralizado"),
                TH("DISCIPLINAS", _class="phanterpwa-widget-table-head-th centralizado"),
                TH("FEZ (%)", _class="phanterpwa-widget-table-head-th centralizado"),
                TH("FEZ PARCIALMENTE (%)", _class="phanterpwa-widget-table-head-th centralizado"),
                TH("NÃO FEZ (%)", _class="phanterpwa-widget-table-head-th centralizado"),
                TH("TOTAL (100%)", _class="phanterpwa-widget-table-head-th centralizado"),
                _class="phanterpwa-widget-table-head phanterpwa-widget"
            ),
            _class="phanterpwa-widget-table p-row"
        )
        tabela_tur = TABLE(
            TR(TH("FEZ"), TH("FEZ PARCIALMENTE"), TH("NÃO FEZ"), TH("TOTAL")),
            TR(
                TD(self.estatistica_da_turma["F"]),
                TD(self.estatistica_da_turma["FP"]),
                TD(self.estatistica_da_turma["NF"]),
                TD(self.estatistica_da_turma["T"])
            )
        )
        chart_turma = highcharts.Pie(
            "grafico_turma",
            title=self.turma
        )
        chart_turma.add_serie(
            "Fez", self.estatistica_da_turma["F"], color="green"
        )
        chart_turma.add_serie(
            "Fez Parcialmente", self.estatistica_da_turma["FP"], color="#d28a06"
        )
        chart_turma.add_serie(
            "Não Fez", self.estatistica_da_turma["NF"], color="red"
        )
        chats_alunos = CONCATENATE()
        chats_disciplinas_turma = CONCATENATE()
        painel_turma = DIV(
            LABEL("Gráfico da Turma"),
            DIV(
                DIV(
                    DIV(
                        DIV(
                            DIV(
                                DIV(
                                    chart_turma,
                                    tabela_tur,
                                    chats_disciplinas_turma,
                                    _class="estatisticas-turma-container"
                                ),
                                _class="estatisticas-turma-wrapper"
                            ),
                            _class="p-row e-padding_auto",
                        ),
                        _class="phanterpwa-card-panel-control-content"
                    ),
                    DIV(
                        _class="phanterpwa-card-panel-control-buttons"
                    ),
                    _class="phanterpwa-card-panel-control-wrapper"
                ),
                _class="phanterpwa-card-panel-control-container"
            ),
            _class="phanterpwa-card-panel-control"
        )
        painel_alunos = DIV(
            LABEL("Gráficos dos Alunos"),
            DIV(
                DIV(
                    DIV(
                        DIV(
                            chats_alunos,
                            _class="p-row e-padding_auto",
                        ),
                        _class="phanterpwa-card-panel-control-content"
                    ),
                    DIV(
                        _class="phanterpwa-card-panel-control-buttons"
                    ),
                    _class="phanterpwa-card-panel-control-wrapper"
                ),
                _class="phanterpwa-card-panel-control-container"
            ),
            _class="phanterpwa-card-panel-control"
        )
        painel_geral = DIV(
            LABEL("Resumo"),
            DIV(
                DIV(
                    DIV(
                        DIV(
                            DIV(
                                DIV(
                                    tabela_geral,
                                    _class="estatisticas-geral-container phanterpwa-widget-table-container phanterpwa-widget"
                                ),
                                _class="estatisticas-geral-wrapper"
                            ),
                            _class="p-row e-padding_auto",
                        ),
                        _class="phanterpwa-card-panel-control-content"
                    ),
                    DIV(
                        _class="phanterpwa-card-panel-control-buttons"
                    ),
                    _class="phanterpwa-card-panel-control-wrapper"
                ),
                _class="phanterpwa-card-panel-control-container"
            ),
            _class="phanterpwa-card-panel-control"
        )
        painel_disciplinas = DIV(
            LABEL("Dados distribuídos pelas disciplinas"),
            DIV(
                DIV(
                    DIV(
                        DIV(
                            DIV(
                                DIV(
                                    tabela_disciplinas,
                                    _class="estatisticas-geral-container phanterpwa-widget-table-container phanterpwa-widget"
                                ),
                                _class="estatisticas-geral-wrapper"
                            ),
                            _class="p-row e-padding_auto",
                        ),
                        _class="phanterpwa-card-panel-control-content"
                    ),
                    DIV(
                        _class="phanterpwa-card-panel-control-buttons"
                    ),
                    _class="phanterpwa-card-panel-control-wrapper"
                ),
                _class="phanterpwa-card-panel-control-container"
            ),
            _class="phanterpwa-card-panel-control"
        )
        html_estatisticas = CONCATENATE(
            painel_geral,
            painel_disciplinas,
            painel_turma,
            painel_alunos
        )
        disciplinas_ordem = []
        disciplinas_data = dict()

        for aln in self.estatistica_por_aluno:
            tabela_geral.append(
                TR(
                    TD(STRONG(aln.nome), _class="phanterpwa-widget-table-data-td "),
                    TD(aln["atividades"]["F"], self.porcentagem(aln["atividades"]["F"], aln["atividades"]["T"]), _class="phanterpwa-widget-table-data-td centralizado"),
                    TD(aln["atividades"]["FP"], self.porcentagem(aln["atividades"]["FP"], aln["atividades"]["T"]), _class="phanterpwa-widget-table-data-td centralizado"),
                    TD(aln["atividades"]["NF"], self.porcentagem(aln["atividades"]["NF"], aln["atividades"]["T"]), _class="phanterpwa-widget-table-data-td centralizado"),
                    TD(aln["atividades"]["T"], _class="phanterpwa-widget-table-data-td centralizado"),
                    _class="phanterpwa-widget-table-data phanterpwa-widget"
                )
            )
            tbody = TBODY(_style="border: 2px solid #d2d2d2 !important;")
            cont_dis = 0

            chart_disciplinas = highcharts.BarStacked(
                "grafico_disciplinas_aluno_{0}".format(aln.id),
                title="Distribuido pelas disciplinas",
                *[self.data_disciplinas[ndis[0]] for ndis in aln["disciplinas"]]
            )
            cf = []
            cfp = []
            cnf = []

            for dis in aln["disciplinas"]:
                if self.data_disciplinas[dis[0]] not in disciplinas_ordem:
                    disciplinas_ordem.append(self.data_disciplinas[dis[0]])
                if self.data_disciplinas[dis[0]] in disciplinas_data:
                    disciplinas_data[self.data_disciplinas[dis[0]]]["T"] += dis[1]["T"]
                    disciplinas_data[self.data_disciplinas[dis[0]]]["F"] += dis[1]["F"]
                    disciplinas_data[self.data_disciplinas[dis[0]]]["FP"] += dis[1]["FP"]
                    disciplinas_data[self.data_disciplinas[dis[0]]]["NF"] += dis[1]["NF"]
                else:
                    disciplinas_data[self.data_disciplinas[dis[0]]] = {
                        "T": dis[1]["T"],
                        "F": dis[1]["F"],
                        "FP": dis[1]["FP"],
                        "NF": dis[1]["NF"],
                    }
                cont_dis += 1
                cf.append(dis[1]["F"])
                cfp.append(dis[1]["FP"])
                cnf.append(dis[1]["NF"])
                if cont_dis == 1:
                    tr_disciplinas = TR(
                        TD(STRONG(aln.nome), _rowspan=len(aln["disciplinas"]), _class="phanterpwa-widget-table-data-td", _style="border: 1px solid #C1C1C1;text-align: center;"),
                        TD(self.data_disciplinas[dis[0]], _class="phanterpwa-widget-table-data-td centralizado"),
                        TD(dis[1]["F"], self.porcentagem(dis[1]["F"], dis[1]["T"]), _class="phanterpwa-widget-table-data-td centralizado"),
                        TD(dis[1]["FP"], self.porcentagem(dis[1]["FP"], dis[1]["T"]), _class="phanterpwa-widget-table-data-td centralizado"),
                        TD(dis[1]["NF"], self.porcentagem(dis[1]["NF"], dis[1]["T"]), _class="phanterpwa-widget-table-data-td centralizado"),
                        TD(dis[1]["T"], _class="phanterpwa-widget-table-data-td centralizado"),
                        _class="phanterpwa-widget-table-data phanterpwa-widget"
                    )
                else:
                    tr_disciplinas = TR(
                        TD(self.data_disciplinas[dis[0]], _class="phanterpwa-widget-table-data-td centralizado"),
                        TD(dis[1]["F"], self.porcentagem(dis[1]["F"], dis[1]["T"]), _class="phanterpwa-widget-table-data-td centralizado"),
                        TD(dis[1]["FP"], self.porcentagem(dis[1]["FP"], dis[1]["T"]), _class="phanterpwa-widget-table-data-td centralizado"),
                        TD(dis[1]["NF"], self.porcentagem(dis[1]["NF"], dis[1]["T"]), _class="phanterpwa-widget-table-data-td centralizado"),
                        TD(dis[1]["T"], _class="phanterpwa-widget-table-data-td centralizado"),
                        _class="phanterpwa-widget-table-data phanterpwa-widget"
                    )
                tbody.append(tr_disciplinas)


            chart_disciplinas.add_serie("Fez", *cf, color="green")
            chart_disciplinas.add_serie("Fez Parcialmente", *cfp, color="#d28a06")
            chart_disciplinas.add_serie("Não Fez", *cnf, color="red")
            tabela_disciplinas.append(
                tbody
            )

            tabela_aln = TABLE(
                TR(TH("FEZ"), TH("FEZ PARCIALMENTE"), TH("NÃO FEZ"), TH("TOTAL")),
                TR(
                    TD(aln["atividades"]["F"]),
                    TD(aln["atividades"]["FP"]),
                    TD(aln["atividades"]["NF"]),
                    TD(aln["atividades"]["T"])
                )
            )
            chart_aluno = highcharts.Pie(
                "grafico_aluno_{0}".format(aln.id),
                title=aln.nome
            )
            chart_aluno.add_serie(
                "Fez", aln["atividades"]["F"], color="green"
            )
            chart_aluno.add_serie(
                "Fez Parcialmente", aln["atividades"]["FP"], color="#d28a06"
            )
            chart_aluno.add_serie(
                "Não Fez", aln["atividades"]["NF"], color="red"
            )
            html_chart_aluno = DIV(
                DIV(
                    chart_aluno,
                    chart_disciplinas,
                    tabela_aln,
                    _class="estatisticas-alunos-container",
                    _style="background-color: white !important;"
                ),
                _class="estatisticas-alunos-wrapper p-col w1p100  w5p50  w7p33  w8p25"
            )

            chats_alunos.append(html_chart_aluno)
        chart_disciplinas_turma = highcharts.BarStacked(
            "grafico_disciplinas_turma_{0}".format(self.id_turma),
            title="Distribuido pelas disciplinas",
            *disciplinas_ordem
        )
        chart_disciplinas_turma.add_serie("Fez", *[disciplinas_data[x]["F"] for x in disciplinas_ordem], color="green")
        chart_disciplinas_turma.add_serie("Fez Parcialmente", *[disciplinas_data[x]["FP"] for x in disciplinas_ordem], color="#d28a06")
        chart_disciplinas_turma.add_serie("Não Fez", *[disciplinas_data[x]["NF"] for x in disciplinas_ordem], color="red")
        chats_disciplinas_turma.append(chart_disciplinas_turma)
        tabela_geral.append(
            TR(
                TD(STRONG("TOTAL TURMA"), _class="phanterpwa-widget-table-data-td"),
                TD(STRONG(self.estatistica_da_turma["F"], self.porcentagem(self.estatistica_da_turma["F"], self.estatistica_da_turma["T"])), _class="phanterpwa-widget-table-data-td centralizado"),
                TD(STRONG(self.estatistica_da_turma["FP"], self.porcentagem(self.estatistica_da_turma["FP"], self.estatistica_da_turma["T"])), _class="phanterpwa-widget-table-data-td centralizado"),
                TD(STRONG(self.estatistica_da_turma["NF"], self.porcentagem(self.estatistica_da_turma["NF"], self.estatistica_da_turma["T"])), _class="phanterpwa-widget-table-data-td centralizado"),
                TD(STRONG(self.estatistica_da_turma["T"]), _class="phanterpwa-widget-table-data-td centralizado"),
                _class="phanterpwa-widget-table-data"
            )
        )

        html.append(html_estatisticas)
        html.html_to("#content-registro_de_atividades")


class RegistroDeAtividades(gatehandler.Handler):
    @decorators.check_authorization(lambda: window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME", "Administrador Master Escola", "Professor(a)"]))
    def initialize(self):
        arg0 = window.PhanterPWA.Request.get_arg(0)
        arg1 = window.PhanterPWA.Request.get_arg(1)
        arg2 = window.PhanterPWA.Request.get_arg(2)
        self.totF = 0
        self.totFP = 0
        self.totNF = 0
        self.totT = 0
        self.totalTurmas = 0

        self.id_escola = arg0
        self.ano_letivo = arg1
        self.unidade = arg2

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

        if str(arg0).isdigit() and str(arg1).isdigit():
            self._get_turmas()

        BackButton1 = left_bar.LeftBarButton(
            "back_estatistica_registro_de_atividades",
            "Voltar",
            I(_class="fas fa-arrow-circle-left"),
            **{
                "tag": "a",
                "_href": window.PhanterPWA.XWAY(
                    "turmas",
                    arg0,
                    arg1,
                ),
                "position": "top",
                "show_if_way_match": r"^estatistica-registro-de-atividades\/[0-9]{1,}\/[0-9]{1,}\/[0-9]{1,}.*$"
            }
        )


        window.PhanterPWA.Components['left_bar'].add_button(BackButton1)

    def porcentagem(self, valor, total):
        if str(valor).isdigit() and str(total).isdigit():
            valor = int(valor)
            total = int(total)
            if valor == 0:
                return " (0%)"
            else:
                return " ({0}%)".format(((valor / total) * 100).toFixed(2))
        return ""

    def _get_turmas(self):

        window.PhanterPWA.GET(
            "api",
            "turmas",
            self.id_escola,
            self.ano_letivo,
            onComplete=self.after_get_turma
        )

    def after_get_turma(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            self.turmas = json.data.turmas
            self.unidades = json.unidades
            self.processar_turmas()

    def processar_turmas(self):

        tr_inicial = TBODY(
            TR(
                TH("TURMA"),
                TH("FEZ (%)", _class="centralizado"),
                TH("FEZ PARCIALMENTE (%)", _class="centralizado"),
                TH("NÃO FEZ (%)", _class="centralizado"),
                TH("TOTAL (100%)", _class="centralizado"),
                _class="rotulo_estat_registro_de_atividades phanterpwa-widget-table-head phanterpwa-widget"
            ),
            _class="tbody-estat_registro_de_atividades-container"
        )

        self.html_tabela = TABLE(
            THEAD(TR(TD(BR(), _class="thead_estat_registro_de_atividades"))),
            TFOOT(TR(TD(BR(), _class="tfoot_estat_registro_de_atividades"))),
            tr_inicial,
            _class="tabela_estat_registro_de_atividades_container1 phanterpwa-widget-table p-row"
        )

        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("ESTATÍSTICAS", _class="phanterpwa-breadcrumb"),
                        DIV("CONTROLE DE ATIVIDADES", _class="phanterpwa-breadcrumb"),
                        DIV(self.romanos[str(self.unidade)], _class="phanterpwa-breadcrumb"),
                        _class="phanterpwa-breadcrumb-wrapper"
                    ),
                    _class="p-container extend"),
                _class='title_page_container card'
            ),
            DIV(
                DIV(
                    DIV(
                        DIV(
                            DIV(_id="titulo_periodo"),
                            DIV(self.html_tabela, _class="phanterpwa-widget-table-container phanterpwa-widget"),
                            _id="content-estat_registro_de_atividades",
                            _class='p-row e-padding_auto continuos'
                        ),
                        _class="phanterpwa-media-print-container"
                    ),
                    _class="card"
                ),
                DIV(_id="modal_cmp_curriculares_container"),
                _class="phanterpwa-container p-container extend"
            )
        )

        for x in self.turmas:
            self.totalTurmas += 1
            self.html_tabela.append(
                TBODY(
                    TR(
                        TD(STRONG(x.turma), _class="phanterpwa-widget-table-data-td"),
                        TD(
                            DIV(
                                preloaders.run_points
                            ),
                            _colspan=4,
                            _style="text-align: center;",
                            _class="phanterpwa-widget-table-data-td"
                        ),
                        _class="phanterpwa-widget-table-data"
                    ),
                    _id="tbody_est_tur_{0}".format(x.id),
                    _class="tbody-indicador-container"
                )
            )
        self.html_tabela.append(
                TBODY(
                    TR(
                        TD(STRONG("TOTAL FINAL"), _class="phanterpwa-widget-table-data-td"),
                        TD(
                            DIV(
                                preloaders.run_points
                            ),
                            _class="phanterpwa-widget-table-data-td",
                            _colspan=4,
                            _style="text-align: center;"
                        ),
                        _class="phanterpwa-widget-table-data"
                    ),
                    _id="tbody_est_total_final",
                    _class="tbody-indicador-container"
                )
            )

        html.html_to("#main-container")
        for x in self.turmas:
            self._get_estatistica_registro_de_atividades(x.id)

    def _get_estatistica_registro_de_atividades(self, id_turma):

        window.PhanterPWA.GET(
            "api",
            "estatisticas",
            "registro-de-atividades",
            self.id_escola,
            self.ano_letivo,
            id_turma,
            self.unidade,
            "turmas",
            onComplete=lambda data, ajax_status: self.criar_estatisticas(id_turma, data, ajax_status)
        )

    def iso_br(self, data_iso):
        ano, mes, dia = data_iso.split("-")
        return "{0}/{1}/{2}".format(dia, mes, ano)

    def criar_estatisticas(self, id_turma, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            titulo_painel = "{0} - Período de {1} à {2}".format(
                self.romanos[str(json.unidade)],
                self.iso_br(json.data_inicial),
                self.iso_br(json.data_final)
            )

            html_titulo = DIV(
                H2("Estatísticas do Controle de Atividades da Escola"),
                H2(titulo_painel),
                _class="registro_de_atividades_container"
            )
            html_titulo.html_to("#titulo_periodo")
            self.totF += json.totais_turma["F"]
            self.totFP += json.totais_turma["FP"]
            self.totNF += json.totais_turma["NF"]
            self.totT += json.totais_turma["T"]

            html_linha_turma = TR(
                TD(STRONG(json.turma), _class="phanterpwa-widget-table-data-td"),
                TD("{0} {1}".format(json.totais_turma["F"], self.porcentagem(json.totais_turma["F"], json.totais_turma["T"])), _class="phanterpwa-widget-table-data-td centralizado"),
                TD("{0} {1}".format(json.totais_turma["FP"], self.porcentagem(json.totais_turma["FP"], json.totais_turma["T"])), _class="phanterpwa-widget-table-data-td centralizado"),
                TD("{0} {1}".format(json.totais_turma["NF"], self.porcentagem(json.totais_turma["NF"], json.totais_turma["T"])), _class="phanterpwa-widget-table-data-td centralizado"),
                TD(json.totais_turma["T"], _class="phanterpwa-widget-table-data-td centralizado"),
                _class="phanterpwa-widget-table-data phanterpwa-widget"
            )
            html_linha_turma.html_to("#tbody_est_tur_{0}".format(id_turma))
            self.totalTurmas -= 1
            if self.totalTurmas == 0:
                TR(
                    TD(STRONG("TOTAL FINAL"), _class="phanterpwa-widget-table-data-td"),
                    TD("{0} {1}".format(self.totF, self.porcentagem(self.totF, self.totT)), _class="phanterpwa-widget-table-data-td centralizado"),
                    TD("{0} {1}".format(self.totFP, self.porcentagem(self.totFP, self.totT)), _class="phanterpwa-widget-table-data-td centralizado"),
                    TD("{0} {1}".format(self.totNF, self.porcentagem(self.totNF, self.totT)), _class="phanterpwa-widget-table-data-td centralizado"),
                    TD(self.totT, _class="phanterpwa-widget-table-data-td centralizado"),
                    _class="phanterpwa-widget-table-data"
                ).html_to("#tbody_est_total_final")

__pragma__('nokwargs')
