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
    def __init__(self, index_instance, escola, ano_letivo, turma, id_disciplina, rotulo_mes_ano):
        self.id_escola = escola
        self.ano_letivo = ano_letivo
        self.id_turma = turma
        self.rotulo_mes_ano = rotulo_mes_ano
        self.id_disciplina = id_disciplina
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

    def _get_controle_de_atividades(self):

        if self.id_disciplina is not None and self.id_disciplina is not js_undefined:
            if self.rotulo_mes_ano is not None and self.rotulo_mes_ano is not js_undefined:
                window.PhanterPWA.GET(
                    "api",
                    "controle-de-atividades",
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
            controle_de_atividades = json.form_registros
            self.anterior = json.anterior
            self.quant_dias = json.quant_dias
            self.proximo = json.proximo
            self.rotulo_mes_ano = json.rotulo_mes_ano
            self.disciplina = json.disciplina
            self.meses_referencia = json.meses_referencia
            self.turma = json.turma
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
            TR(TH("Nº", _class="rotulo", _rowspan=2), TH("NOME ALUNO(A)", _class="rotulo", _rowspan=2), TH("DIAS LETIVOS", _colspan=self.quant_dias, _class="rotulo")),
            _class='tabela_controle_de_atividades'
        )

        for x in controle_de_atividades:
            # data = x[0][0]
            # ano, mes, dia = data.split("-")
            # mes_ext = self.meses[mes]
            # data_ext = "{0} de {1} de {2}".format(dia, mes_ext, ano)
            linha = TR()
            for y in x:
                if y[1]['tipo'] == "cabecalho":
                    celula = TH(
                        DIV(y[0], _class="controle_de_atividades_rotulo_dia"),
                        **y[1]
                    )
                elif y[1]['tipo'] == "botao":

                    if y[1]['_data-status'] == "Não fez a atividade":
                        bas_nas = I(_class="fas fa-check-circle", _style="color:red;")
                    elif y[1]['_data-status'] == "Fez toda a atividade":
                        bas_nas = I(_class="fas fa-check-circle", _style="color:green;")
                    elif y[1]['_data-status'] == "Fez parcialmente a atividade":
                        bas_nas = I(_class="fas fa-check-circle", _style="color:#d28a06;") if y[0] is True or y[0] == "true" else ""
                    else:
                        bas_nas = DIV(y[1]['_placeholder'], _class="apagadinho")
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
            LABEL(self.rotulo_mes_ano),
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
        console.log("eitcha")
        jQuery(
            ".controle_de_atividades.celula_controle_de_atividades"
        ).off(
            "click.enviar_controle_de_atividades"
        ).on(
            "click.enviar_controle_de_atividades",
            lambda: self.modal_confirmar_controle_de_atividades(jQuery(this))
        )

    def abrir_diario(self, url):
        window.location = url

    def modal_confirmar_controle_de_atividades(self, el):
        id_matricula = jQuery(el).data("id_matricula")
        status = jQuery(el).attr("data-status")
        tem_atividade = jQuery(el).attr("data-tem_atividade")
        foi_parcial = jQuery(el).attr("data-foi_parcial")
        nome_aluno = jQuery(el).data("nome_aluno")
        data = jQuery(el).data("data_atividade")
        ano, mes, dia = data.split("-")
        mes_ext = self.meses[mes]
        data_ext = "{0} de {1} de {2}".format(dia, mes_ext, ano)
        id_disciplina = jQuery(el).data("id_disciplina")
        console.log(tem_atividade, foi_parcial)
        if id_disciplina is None or id_disciplina is js_undefined:
            id_disciplina = None
        # if tem_atividade is True or tem_atividade == "true":
        #     if foi_parcial is True or foi_parcial == "true":
        #         complement = " remoção da Atividade"
        #         atividade = False
        #         content = DIV(
        #             P(STRONG("O(A) presente aluno(a) fez a atividade proposta?")),
        #             P("Pode-se observar que o(a) aluno(a) fez a atividade em ", STRONG(data_ext), ", porém ", STRONG("parcialmente"),
        #                 ", se ele fez completamente ou de forma satisfatória, você pode mudar para ", STRONG("FEZ", _style="color: green"),
        #                 ". Caso o(a) aluno(a) não tenha feito, é só mudar para ", STRONG("NÃO FEZ", _style="color: red"), "."),
        #             _class="p-row"
        #         )
        #     else:
        #         complement = " remoção da Atividade"
        #         atividade = False
        #         content = DIV(
        #             P(STRONG("O(A) presente aluno(a) fez a atividade proposta?")),
        #             P("Pode-se observar que o(a) aluno(a) fez a atividade em ", STRONG(data_ext), " completamente ou de forma satisfatória.",
        #                 " Se ele fez a atividade parcialmente, você pode mudar para ", STRONG("FEZ PARCIALMENTE", _style="color: #d28a06"),
        #                 ". Caso o(a) aluno(a) não tenha feito, é só mudar para ", STRONG("NÃO FEZ", _style="color: red"), "."),
        #             _class="p-row"
        #         )
        # else:
        #     complement = " Atividade"
        #     atividade = True
        #     content = DIV(
        #         P(STRONG("O(A) presente aluno(a) fez a atividade proposta?")),
        #         P("No registro consta que o(a) aluno(a) não fez a atividade em ", STRONG(data_ext), ". Se o(a) aluno(a) fez completamente ou de forma satisfatória, ",
        #             " mude para ", STRONG("FEZ", _style="color: green"),
        #             ". Caso tenha feito a atividade parcialmente, você pode mudar para ", STRONG("FEZ PARCIALMENTE", _style="color: #d28a06"),
        #             "."),
        #         _class="p-row"
        #     )
        atividade = False
        if status == "Não fez a atividade":
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
        elif status == "Fez toda a atividade":
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
        elif status == "Fez parcialmente a atividade":
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
            # complement = " remoção da Atividade"
            # atividade = False
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
            ) if status != "Fez toda a atividade" else "",
            forms.FormButton(
                "confirmar_atividade_fez_parcialmente",
                "Fez parcialmente",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ) if status != "" else "Fez parcialmente a atividade",
            forms.FormButton(
                "confirmar_atividade_nao_fez",
                "Não fez",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ) if status != "Não fez a atividade" else "",
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
                if up[1] == "Fez parcialmente a atividade":
                    jQuery("#{0}".format(up[0])).html(I(_class="fas fa-check-circle", _style="color:#d28a06;").jquery())
                    jQuery("#{0}".format(up[0])).attr("data-status", up[1])
                elif up[1] == "Não fez a atividade":
                    jQuery("#{0}".format(up[0])).html(I(_class="fas fa-check-circle", _style="color:red;").jquery())
                    jQuery("#{0}".format(up[0])).attr("data-status", up[1])
                elif up[1] == "Fez toda a atividade":
                    jQuery("#{0}".format(up[0])).html(I(_class="fas fa-check-circle", _style="color:green;").jquery())
                    jQuery("#{0}".format(up[0])).attr("data-status", up[1])
                else:
                    jQuery("#{0}".format(up[0])).html(DIV(up[2], _class="apagadinho").jquery())
                    jQuery("#{0}".format(up[0])).attr("data-status", "Não definido")
            self.diario_binds()


__pragma__('nokwargs')
