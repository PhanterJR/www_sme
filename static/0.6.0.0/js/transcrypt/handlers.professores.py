import phanterpwa.frontend.gatehandler as gatehandler
import phanterpwa.frontend.decorators as decorators
import phanterpwa.frontend.validations as validations
import phanterpwa.frontend.helpers as helpers
import phanterpwa.frontend.components.left_bar as left_bar
import phanterpwa.frontend.preloaders as preloaders
import phanterpwa.frontend.components.modal as modal
import phanterpwa.frontend.components.widgets as widgets
import phanterpwa.frontend.forms as forms
import phanterpwa.frontend.components.snippets as snippets
import handlers.escolas as escolas
import handlers.anos_letivos as anos_letivos
from org.transcrypt.stubs.browser import __pragma__

__pragma__('alias', "jQuery", "$")
__pragma__('skip')
jQuery = sessionStorage = JSON = M = js_undefined = window =\
    __new__ = FormData = console = sessionStorage = sessionStorage = document = this = 0
__pragma__('noskip')

DIV = helpers.XmlConstructor.tagger("div")
I = helpers.XmlConstructor.tagger("i")
H2 = helpers.XmlConstructor.tagger("h2")
FORM = helpers.XmlConstructor.tagger("form")
SPAN = helpers.XmlConstructor.tagger("span")
STRONG = helpers.XmlConstructor.tagger("strong")
IMG = helpers.XmlConstructor.tagger("img", True)
UL = helpers.XmlConstructor.tagger("ul")
LI = helpers.XmlConstructor.tagger("li")
INPUT = helpers.XmlConstructor.tagger("input", True)
A = helpers.XmlConstructor.tagger("a")
P = helpers.XmlConstructor.tagger("p")
LABEL = helpers.XmlConstructor.tagger("label")
TABLE = helpers.XmlConstructor.tagger("table")
TD = helpers.XmlConstructor.tagger("td")
TH = helpers.XmlConstructor.tagger("th")
TR = helpers.XmlConstructor.tagger("tr")
I18N = helpers.I18N
CONCATENATE = helpers.CONCATENATE
PromoOption = snippets.PromoOption
OPTION = helpers.XmlConstructor.tagger("option")
SELECT = helpers.XmlConstructor.tagger("select")
XTABLE = widgets.Table
XML = helpers.XML
XTRD = widgets.TableData
XTRH = widgets.TableHead
XFOOTER = widgets.TableFooterPagination
XSECTION = helpers.XSECTION

__pragma__('kwargs')


class Index(gatehandler.Handler):

    def initialize(self):
        arg0 = window.PhanterPWA.Request.get_arg(0)
        arg1 = window.PhanterPWA.Request.get_arg(1)
        arg2 = window.PhanterPWA.Request.get_arg(2)
        arg3 = window.PhanterPWA.Request.get_arg(3)
        ano_ht = ""
        if arg2 is not None:
            ano_ht = DIV(arg2, _class="phanterpwa-breadcrumb")
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        ano_ht,
                        DIV("SUAS TURMAS", _class="phanterpwa-breadcrumb"),
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
                    _id="content-turmas",
                    _class='p-row card e-padding_auto'
                ),

                _class="phanterpwa-container p-container"
            )
        )
        html.html_to("#main-container")

        if arg0 == "turmas":
            if arg1 is None or arg1 is js_undefined:
                html = escolas.EscolherEscola(
                    id_target="#content-turmas",
                    callback_link=lambda id_escola: "#_phanterpwa:/professores/turmas/{0}".format(id_escola)
                )
            elif str(arg1).isdigit() and (arg2 is None or arg2 is js_undefined):
                html = anos_letivos.EscolherAnoLetivo(
                    id_target="#content-turmas",
                    callback_link=lambda ano: "#_phanterpwa:/professores/turmas/{0}/{1}".format(arg1, ano)
                )
            elif str(arg1).isdigit() and str(arg2).isdigit():
                if arg3 == "detalhado":
                    self.TurmasDetalhado = TurmasDetalhado(self, arg1, arg2)
                elif arg3 == "especifico" and str(arg3).isdigit():
                    self.TurmaEspecifica = TurmaEspecifica(self, arg1, arg2, arg4)
                else:
                    self.TurmasSimples = TurmasSimples(self, arg1, arg2)

            BackButton1 = left_bar.LeftBarButton(
                "botao_voltar_professor",
                "Voltar",
                I(_class="fas fa-arrow-circle-left"),
                **{
                    "tag": "a",
                    "_href": window.PhanterPWA.XWAY("area-do-servidor"),
                    "position": "top",
                    "show_if_way_match": r"^professores\/turmas\/[0-9]{1,}\/[0-9]{1,}\/?$"
                }
            )
            if arg2 == "detalhado":
                BackButton1 = left_bar.LeftBarButton(
                    "botao_voltar_professor",
                    "Voltar",
                    I(_class="fas fa-arrow-circle-left"),
                    **{
                        "tag": "a",
                        "_href": window.PhanterPWA.XWAY("professores", "turmas", arg0, arg1),
                        "position": "top",
                        "show_if_way_match": r"^professores\/turmas\/[0-9]{1,}\/[0-9]{1,}\/detalhado\/?$"
                    }
                )
            window.PhanterPWA.Components['left_bar'].add_button(BackButton1)
        elif arg0 == "alunos":
            if arg1 is None or arg1 is js_undefined:
                html = escolas.EscolherEscola(
                    id_target="#content-turmas",
                    callback_link=lambda id_escola: "#_phanterpwa:/professores/alunos/{0}".format(id_escola)
                )
            elif str(arg1).isdigit() and (arg2 is None or arg2 is js_undefined):
                html = anos_letivos.EscolherAnoLetivo(
                    id_target="#content-turmas",
                    callback_link=lambda ano: "#_phanterpwa:/professores/alunos/{0}/{1}".format(arg1, ano)
                )
            elif str(arg1).isdigit() and str(arg2).isdigit():
                self.alunos = Alunos(self, arg1, arg2)

            BackButton1 = left_bar.LeftBarButton(
                "botao_voltar_professor",
                "Voltar",
                I(_class="fas fa-arrow-circle-left"),
                **{
                    "tag": "a",
                    "_href": window.PhanterPWA.XWAY("area-do-servidor"),
                    "position": "top",
                    "show_if_way_match": r"^professores\/alunos\/[0-9]{1,}\/[0-9]{1,}\/?$"
                }
            )
            window.PhanterPWA.Components['left_bar'].add_button(BackButton1)


class TurmasSimples(helpers.XmlConstructor):
    def __init__(self, index_instance, escola, ano_letivo, prosseguir=None):
        self.prosseguir = prosseguir
        self.id_escola = escola
        self.tem_turma = True
        self.ano_letivo = ano_letivo
        self.index_instance = index_instance
        helpers.XmlConstructor.__init__(self, "div", False, self.initial_xml(), _class="lista_de_turmas_simples")
        self._get_turmas()

    def initial_xml(self):
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV(self.ano_letivo, _class="phanterpwa-breadcrumb"),
                        DIV("TURMAS", _class="phanterpwa-breadcrumb"),
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
                    _id="content-turmas",
                    _class='p-row card e-padding_auto'
                ),

                _class="phanterpwa-container p-container"
            )
        )
        html.html_to("#main-container")

        return html

    def turmas_disponiveis(self):
        self.tem_turma = True
        logo = "{0}/api/escolas/{1}/image".format(
            window.PhanterPWA.ApiServer.remote_address,
            self.id_escola
        )
        html = DIV(
            DIV(
                DIV(
                    DIV(
                        IMG(_src=logo),
                        _class="escolas-container-info-image",
                        _style="text-align: center;"
                    ),
                    _class="p-col w1p100 w4p30"
                ),
                DIV(
                    H2("NESTE PAINEL É POSSÍVEL VISUALIZAR TODAS AS TURMAS ÀS QUAIS ENSINA."),
                    P("Acessando o botão ", I(_class="fas fa-ellipsis-v")," é possível acessar opções",
                        " relacionadas à referente turma, como: ", STRONG("Diário de Notas, Ficha Avaliativa,",
                            " Registro de Faltas, Registro de Aulas, etc.")),
                    # P("É possível adicionar uma nova turma clicando em ", I(_class="fas fa-plus"),"."),
                    P("Se estiver faltando alguma turma ou disciplina, informe a direção de sua escola."),
                    _class="p-col w1p100 w4p70",
                    _id="u_informacao_series"
                ),
                _class="p-row"
            ),
            DIV(
                self.xml_tabela_turmas(),
                DIV(_id="modal_turma_case"),
                _class="p-row"
            ),

            _class='turmas-turmas-container'
        )

        html.html_to("#content-turmas")
        if not self.tem_turma:
            jQuery("#phanterpwa-card-panel-control-lista_de_turmas_simples").find(".botao_turma_detalhada").fadeOut()
        self.binds_escolha_de_turmas()

    def xml_tabela_turmas(self):
        data_turma = self.lista_de_turmas
        table = XTABLE(
            "turmas-table",
            XTRH(
                "turmas-table-head",
                "Turma",
                TH("Turno", _style="text-align: center;"),
                TH("Quantidade de Alunos", _style="text-align: center;"),
                "Disciplina",
                TH(_style="width: 40px;")
            )
        )
        cont_turmas = 0
        l_turmas = []
        for x in data_turma:
            cont_turmas += 1
            lista_series = list([ids[1] for ids in x.series])
            if len(lista_series) > 1:
                ultimo = lista_series[len(lista_series) - 1]
                tittle = ", ".join(lista_series[0:-1])
                tittle = "{0} e {1}".format(tittle, ultimo)
            else:
                tittle = lista_series[0]
            if x.eh_educacao_infantil:
                menus_options = [
                    widgets.MenuOption("Registrar pareceres", **{
                        "_class": "botao_diario_de_notas_turma wave_on_click",
                        "_href": window.PhanterPWA.XWAY(
                            "diario-de-notas",
                            "professor",
                            self.id_escola,
                            self.ano_letivo,
                            x.id,
                            **{
                                "_retornar": window.PhanterPWA.XWAY("professores", "turmas", self.id_escola, self.ano_letivo)
                            }
                        )
                    }),
                    widgets.MenuOption("Lista de pareceres", **{
                        "_class": "botao_ficha_avaliativa_turma wave_on_click",
                        "_href": window.PhanterPWA.XWAY(
                            "ficha-avaliativa",
                            "professor",
                            self.id_escola,
                            self.ano_letivo,
                            x.id,
                            "parecer",
                            **{
                                "_retornar": window.PhanterPWA.XWAY("professores", "turmas", self.id_escola, self.ano_letivo)
                            }
                        )
                    }),
                    widgets.MenuOption("Registro de Faltas", **{
                        "_class": "botao_registro_de_faltas_turma wave_on_click",
                        "_href": window.PhanterPWA.XWAY(
                            "registro-de-faltas",
                            self.id_escola,
                            self.ano_letivo,
                            x.id,
                            **{
                                "_retornar": window.PhanterPWA.XWAY("professores", "turmas", self.id_escola, self.ano_letivo)
                            }
                        )
                    }),
                    widgets.MenuOption("Controle de Atividades", **{
                        "_class": "botao_controle_de_atividades_turma wave_on_click",
                        "_href": window.PhanterPWA.XWAY(
                            "controle-de-atividades",
                            self.id_escola,
                            self.ano_letivo,
                            x.id,
                            x.id_disciplina,
                            **{
                                "_retornar": window.PhanterPWA.XWAY("professores", "turmas", self.id_escola, self.ano_letivo)
                            }
                        )
                    }),
                    widgets.MenuOption("Registro de Aulas", **{
                        "_class": "botao_registro_de_aulas_turma wave_on_click",
                        "_href": window.PhanterPWA.XWAY(
                            "registro-de-aulas-educacao-infantil",
                            self.id_escola,
                            self.ano_letivo,
                            x.id,
                            x.id_disciplina,
                            **{
                                "_retornar": window.PhanterPWA.XWAY("professores", "turmas", self.id_escola, self.ano_letivo)
                            }
                        )
                    }),
                ]
            else:
                menus_options = [
                    widgets.MenuOption("Ficha Avaliativa", **{
                        "_class": "botao_diario_de_notas_turma wave_on_click",
                        "_href": window.PhanterPWA.XWAY(
                            "ficha-avaliativa",
                            "professor",
                            self.id_escola,
                            self.ano_letivo,
                            x.id,
                            x.id_disciplina,
                            **{
                                "_retornar": window.PhanterPWA.XWAY("professores", "turmas", self.id_escola, self.ano_letivo)
                            }
                        )
                    }),
                    widgets.MenuOption("Diário de notas", **{
                        "_class": "botao_diario_de_notas_turma wave_on_click",
                        "_href": window.PhanterPWA.XWAY(
                            "diario-de-notas",
                            "professor",
                            self.id_escola,
                            self.ano_letivo,
                            x.id,
                            **{
                                "_retornar": window.PhanterPWA.XWAY("professores", "turmas", self.id_escola, self.ano_letivo)
                            }
                        )
                    }),
                    widgets.MenuOption("Registro de Faltas", **{
                        "_class": "botao_registro_de_faltas_turma wave_on_click",
                        "_href": window.PhanterPWA.XWAY(
                            "registro-de-faltas",
                            self.id_escola,
                            self.ano_letivo,
                            x.id,
                            x.id_disciplina,
                            **{
                                "_retornar": window.PhanterPWA.XWAY("professores", "turmas", self.id_escola, self.ano_letivo)
                            }
                        )
                    }),
                    widgets.MenuOption("Controle de Atividades", **{
                        "_class": "botao_controle_de_atividades_turma wave_on_click",
                        "_href": window.PhanterPWA.XWAY(
                            "controle-de-atividades",
                            self.id_escola,
                            self.ano_letivo,
                            x.id,
                            x.id_disciplina,
                            **{
                                "_retornar": window.PhanterPWA.XWAY("professores", "turmas", self.id_escola, self.ano_letivo)
                            }
                        )
                    }),
                    widgets.MenuOption("Registro de Aulas", **{
                        "_class": "botao_registro_de_aulas_turma wave_on_click",
                        "_href": window.PhanterPWA.XWAY(
                            "registro-de-aulas{0}".format("-educacao-infantil" if x.eh_educacao_infantil else ""),
                            self.id_escola,
                            self.ano_letivo,
                            x.id,
                            x.id_disciplina,
                            **{
                                "_retornar": window.PhanterPWA.XWAY("professores", "turmas", self.id_escola, self.ano_letivo)
                            }
                        )
                    }),
                ]
            if x.turma not in l_turmas:
                l_turmas.append(x.turma)
                table.append(
                    XTRD(
                        "turma-table-data-{0}".format(cont_turmas),
                        TD(x.turma, _rowspan=self.total_disciplinas_por_turma[int(x.id)]),
                        TD(x.turno, _rowspan=self.total_disciplinas_por_turma[int(x.id)], _style="text-align: center;"),
                        TD(x.quant_alunos, _rowspan=self.total_disciplinas_por_turma[int(x.id)], _style="text-align: center;"),
                        x.disciplina,
                        widgets.MenuBox(
                            "drop_diarios_{0}".format(cont_turmas),
                            I(_class="fas fa-ellipsis-v"),
                            *menus_options,
                            **{
                                "onOpen": lambda: self.binds_escolha_de_turmas()
                            }
                        ),
                        **{
                            "drag_and_drop": False,
                            "_class": "linha_turma_turma",
                            "_data-id_escola": self.id_escola,
                            "_data-id_ano_letivo": self.ano_letivo,
                            "_data-id_turma": x.turmas,
                            "_data-id_turma": x.id
                        }
                    )
                )
            else:
                table.append(
                    XTRD(
                        "turma-table-data-{0}".format(cont_turmas),
                        x.disciplina,
                        widgets.MenuBox(
                            "drop_diarios_{0}".format(cont_turmas),
                            I(_class="fas fa-ellipsis-v"),
                            # widgets.MenuOption("Editar", **{
                            #     "_class": "botao_editar_turma wave_on_click",
                            #     "_data-id_turma": x.id,
                            #     "_data-turma": x.turma,
                            #     "_data-series": JSON.stringify([ids[0] for ids in x.series]),
                            #     "_data-ids_series": [ids[0] for ids in x.series],
                            #     "_data-turno": x.turno,
                            #     "_data-quant_aluno": x.quant_alunos
                            # }),
                            # widgets.MenuOption("Deletar", **{
                            #     "_class": "botao_deletar_turma wave_on_click",
                            #     "_data-id_turma": x.id
                            # }),
                            *menus_options,
                            **{
                                "onOpen": lambda: self.binds_escolha_de_turmas()
                            }
                        ),
                        **{
                            "drag_and_drop": False,
                            "_class": "linha_turma_turma",
                            "_data-id_escola": self.id_escola,
                            "_data-id_ano_letivo": self.ano_letivo,
                            "_data-id_turma": x.turmas,
                            "_data-id_turma": x.id
                        }
                    )
                )
        if cont_turmas == 0:
            self.tem_turma = False
            table = DIV("AS SUAS DISCIPLINAS, ATÉ O MOMENTO, NÃO DEVEM TER SIDO ATRIBUÍDAS A ESTA SUA CONTA.",
                _style="color: red; padding: 50px 0; text-align: center;")
        return table

    def binds_escolha_de_turmas(self):
        jQuery(
            ".botao_nova_turma"
        ).off(
            "click.nova_turmas"
        ).on(
            "click.nova_turmas",
            lambda: self.modal_add_turma(this, "novo")
        )
        jQuery(
            ".botao_editar_turma"
        ).off(
            "click.editar_turmas"
        ).on(
            "click.editar_turmas",
            lambda: self.modal_add_turma(this, "editar")
        )
        jQuery(
            ".botao_deletar_turma"
        ).off(
            "click.deletar_turmas"
        ).on(
            "click.deletar_turmas",
            lambda: self.deletar_turma(this)
        )
        jQuery(".linha_turma_turma")
        jQuery(
            ".botao_copiar"
        ).off(
            "click.copiar_turmas"
        ).on(
            "click.copiar_turmas",
            lambda: self.copiar_dados(this)
        )
        jQuery(
            ".botao_colar"
        ).off(
            "click.colar_turmas"
        ).on(
            "click.colar_turmas",
            lambda: self.colar_dados(this)
        )

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            self.lista_de_turmas = json.data.turmas
            self.data_set_series = json.data.series
            self.total_disciplinas_por_turma = json.data.total_disciplinas_por_turma
            self.tem_multisseriado = json.data.tem_multisseriado
            self.turmas_disponiveis()

    def _get_turmas(self):
        window.PhanterPWA.ApiServer.GET(
            "api",
            "turmas",
            self.id_escola,
            self.ano_letivo,
            "professor",
            onComplete=self.after_get
        )

    def update_turma(self, data, ajax_status):
        json = data.responseJSON
        if ajax_status == "success":
            self.lista_de_turmas = json.data.turmas
            self.data_set_series = json.data.series
            self.turmas_disponiveis()

    def depois_de_assinar_ordenacao_turma(self, data, ajax_status, id_turma, turmas_ordenadas):
        json = data.responseJSON
        if ajax_status == "success":
            formdata = __new__(FormData())
            formdata.append(
                "csrf_token",
                json.csrf
            )
            formdata.append(
                "turmas",
                JSON.stringify(turmas_ordenadas)
            )
            window.PhanterPWA.ApiServer.PUT(**{
                'url_args': ["api", "turmas", self.id_escola, self.ano_letivo, "ordenar", id_turma],
                'form_data': formdata,
                'onComplete': lambda data, ajax_status: self.update_turma(data, ajax_status)
            })


class Alunos(helpers.XmlConstructor):
    def __init__(self, index_instance, escola, ano_letivo, prosseguir=None):
        self.prosseguir = prosseguir
        self.id_escola = escola
        self.tem_turma = True
        self.ano_letivo = ano_letivo
        self.index_instance = index_instance
        helpers.XmlConstructor.__init__(self, "div", False, self.initial_xml(), _class="lista_de_turmas_simples")
        self._get_alunos()

    def initial_xml(self):
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV(self.ano_letivo, _class="phanterpwa-breadcrumb"),
                        DIV("MEUS ALUNOS", _class="phanterpwa-breadcrumb"),
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
                    _id="content-alunos",
                    _class='p-row card e-padding_auto'
                ),

                _class="phanterpwa-container p-container"
            )
        )
        html.html_to("#main-container")

    def criar_lista_de_alunos(self):
        self.tem_turma = True
        logo = "{0}/api/escolas/{1}/image".format(
            window.PhanterPWA.ApiServer.remote_address,
            self.id_escola
        )
        html = DIV(
            DIV(
                DIV(
                    DIV(
                        IMG(_src=logo),
                        _class="escolas-container-info-image",
                        _style="text-align: center;"
                    ),
                    _class="p-col w1p100 w4p30"
                ),
                DIV(
                    H2("NESTE PAINEL É POSSÍVEL VISUALIZAR TODOS SEUS ALUNOS POR TURMA."),
                    P("Acessando o botão ", I(_class="fas fa-ellipsis-v")," é possível acessar opções",
                        " relacionados ao aluno"),
                    # P("É possível adicionar uma nova turma clicando em ", I(_class="fas fa-plus"),"."),
                    _class="p-col w1p100 w4p70",
                    _id="u_informacao_series"
                ),
                _class="p-row"
            ),
            DIV(
                self.xml_tabela_alunos(),
                DIV(_id="modal_visualizar_aluno"),
                _class="p-row"
            ),

            _class='alunos-alunos-container'
        )

        html.html_to("#content-alunos")
        if not self.tem_turma:
            jQuery("#phanterpwa-card-panel-control-lista_de_alunos_simples").find(".botao_turma_detalhada").fadeOut()
        self.binds_escolha_de_alunos()

    def xml_tabela_alunos(self):
        cont_alunos = 0
        table = XTABLE(
            "alunos-table",
            XTRH(
                "alunos-table-head",
                "ID",
                "Nome",
                "Data de Nascimento",
                "Endereço",
            )
        )
        lista_turmas = []
        lista_serie = []
        if self.alunos is not js_undefined:
            for x in self.alunos:
                data_de_nascimento_formated = ""
                if x.alunos.data_nasc is not None and x.alunos.data_nasc is not js_undefined:
                    data_de_nascimento_formated = validations.format_iso_date_datetime(
                        x.alunos.data_nasc, "dd/MM/yyyy", "date"
                    )
                ano_letivo = ""
                id_escola = ""
                if x.turmas.id not in lista_turmas:
                    lista_serie = []
                    lista_turmas.append(x.turmas.id)
                    table.append(
                        TR(TH(x.turmas.turma, _colspan=5, _style='color:white; background-color:grey; text-align:center;'))
                    )
                if x.eh_multisseriado:
                    if x.series.serie not in lista_serie:
                        lista_serie.append(x.series.serie)
                        table.append(
                            TR(TH(x.series.serie, _colspan=5, _style='color:orange; text-align:center;'))
                        )

                table.append(
                    XTRD(
                        "alunos-table-data-{0}".format(x.alunos.id),
                        x.matriculas.id,
                        x.alunos.aluno,
                        data_de_nascimento_formated,
                        x.alunos.endereco,
                        widgets.MenuBox(
                            "drop_{0}".format(x.alunos.id),
                            I(_class="fas fa-ellipsis-v"),
                            widgets.MenuOption("Visualizar", **{
                                "_class": "botao_visualizar_aluno wave_on_click",
                                "_data-id_aluno": x.alunos.id,
                            }),
                            onOpen=lambda: self.binds_menu_aluno()
                        ),
                        **{"drag_and_drop": False}
                    )
                )

            return table

    def binds_menu_aluno(self):
            jQuery(
                ".botao_visualizar_aluno"
            ).off(
                "click.botao_visualizar_aluno"
            ).on(
                "click.botao_visualizar_aluno",
                lambda: self.get_visualizar_aluno(this)
            )
    def binds_escolha_de_alunos(self):
        jQuery(
            ".botao_nova_turma"
        ).off(
            "click.nova_turmas"
        ).on(
            "click.nova_turmas",
            lambda: self.modal_add_turma(this, "novo")
        )
        jQuery(
            ".botao_editar_turma"
        ).off(
            "click.editar_turmas"
        ).on(
            "click.editar_turmas",
            lambda: self.modal_add_turma(this, "editar")
        )
        jQuery(
            ".botao_deletar_turma"
        ).off(
            "click.deletar_turmas"
        ).on(
            "click.deletar_turmas",
            lambda: self.deletar_turma(this)
        )
        jQuery(".linha_turma_turma")
        jQuery(
            ".botao_copiar"
        ).off(
            "click.copiar_turmas"
        ).on(
            "click.copiar_turmas",
            lambda: self.copiar_dados(this)
        )
        jQuery(
            ".botao_colar"
        ).off(
            "click.colar_turmas"
        ).on(
            "click.colar_turmas",
            lambda: self.colar_dados(this)
        )

    def get_visualizar_aluno(self, widget_instance):
        id_aluno = jQuery(widget_instance).data("id_aluno")
        window.PhanterPWA.GET(
            "api",
            "aluno",
            id_aluno,
            "visualizar",
            onComplete=lambda data, ajax_status: self.modal_add_alunos_visualizar(data, ajax_status)
        )

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            self.alunos = json.alunos
            self.criar_lista_de_alunos()

    def _get_alunos(self):
        window.PhanterPWA.ApiServer.GET(
            "api",
            "alunos",
            self.id_escola,
            self.ano_letivo,
            "professor",
            onComplete=self.after_get
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

__pragma__('nokwargs')

