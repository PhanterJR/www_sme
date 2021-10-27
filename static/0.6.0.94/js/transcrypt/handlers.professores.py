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
                "Disciplina",
                "Turma",
                TH("Turno", _style="text-align: center;"),
                TH("Quantidade de Alunos", _style="text-align: center;"),
                TH(_style="width: 40px;")
            )
        )
        cont_turmas = 0
        for x in data_turma:
            cont_turmas += 1
            lista_series = list([ids[1] for ids in x.series])
            if len(lista_series) > 1:
                ultimo = lista_series[len(lista_series) - 1]
                tittle = ", ".join(lista_series[0:-1])
                tittle = "{0} e {1}".format(tittle, ultimo)
            else:
                tittle = lista_series[0]
            multis = I(_class="fas fa-check-circle", _style="color:green;", _title=tittle) if x.multisseriado is True else I(_class="fas fa-times-circle", _style="color: red;", _title=tittle)

            table.append(
                XTRD(
                    "turma-table-data-{0}".format(cont_turmas),
                    x.disciplina,
                    x.turma,
                    TD(x.turno, _style="text-align: center;"),
                    TD(x.quant_alunos, _style="text-align: center;"),
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
                                "registro-de-aulas",
                                self.id_escola,
                                self.ano_letivo,
                                x.id,
                                x.id_disciplina,
                                **{
                                    "_retornar": window.PhanterPWA.XWAY("professores", "turmas", self.id_escola, self.ano_letivo)
                                }
                            )
                        }),
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


class TurmaEspecifica():
    def __init__(self, parent, id_escola, ano_letivo, id_turma):
        self.parent = parent
        self.id_escola = id_escola
        self.ano_letivo = ano_letivo
        self.id_turma = id_turma
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV(self.ano_letivo, _class="phanterpwa-breadcrumb"),
                        DIV("TURMAS", _class="phanterpwa-breadcrumb"),
                        DIV("TURMA ESPECÍFICA", _class="phanterpwa-breadcrumb"),
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
        self.get_dados_turma(self)


    def get_dados_turma(self):
        window.PhanterPWA.GET(
            "api",
            "turma",
            self.id_escola,
            self.ano_letivo,
            "especifica",
            self.id_turma,
            onComplete=self.depois_de_obter_turma
        )

    def depois_de_obter_turma(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            self.lista_de_turmas = json.data.turmas
            self.data_set_turmas = json.data.data_set_turmas
            self.tem_alunos = True
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
                        H2("AQUI É POSSÍVEL VISUALIZAR MAIS DETALHES SOBRE A TURMA, COMO POR EXEMPLO OS ALUNOS."),
                        P("Para adicionar um aluno que foi matriculado em uma turma, basta clicar em ",
                            I(_class="fas fa-user-graduate"), "."),
                        P("Além de visualizar a lista de alunos, pode-se ver as disciplinas e os respectivos",
                            " professores em ", I(_class="fas fa-chalkboard-teacher"), ". Observe que é possível",
                            "ordenar os alunos arrastando-os."),
                        P("Já as outras opções são atalhos para o Horário, Diário de Notas, Ficha Avaliativa ",
                            "e o Diário de Faltas."),
                        _class="p-col w1p100 w4p70",
                        _id="u_informacao_series"
                    ),
                    _class="p-row"
                ),
                DIV(_id="modal_turma_case"),
                self.xml_card(json.data.turma),
                _class='turmas-turmas-container'
            )
            html.append(DIV(_id="modal_remover_matricula_da_turma_detalhe_container"))
            html.append(DIV(_id="modal_deletar_matricula_detalhe_container"))
            html.html_to("#content-turmas")
            self.binds_painel_da_turma()

    def xml_card(self, data_turma):
        table = XTABLE(
            "alunos-table-{0}".format(data_turma.id),
            XTRH(
                "alunos-table-head-{0}".format(data_turma.id),
                "Foto",
                "Nº",
                "Nome",
                "Data de Nascimento",
                "Endereço"
                # " "
            )
        )
        linha_serie = []
        cont_alunos = 0
        for x in data_turma.alunos:
            cont_alunos += 1
            if data_turma.multisseriado:
                if x.series.serie not in linha_serie:

                    serie_th = TR(
                        TH(x.series.serie, _colspan="6", _style="text-align: center; background-color: #d5d5d5;")
                    )
                    table.append(serie_th)
                    linha_serie.append(x.series.serie)

            data_de_nascimento_formated = ""
            if x.alunos.data_nasc is not None and x.alunos.data_nasc is not js_undefined:
                data_de_nascimento_formated = validations.format_iso_date_datetime(
                    x.alunos.data_nasc, "dd/MM/yyyy", "date"
                )
            endereco_imagem_aluno = "/static/{0}/images/user.png".format(
                window.PhanterPWA.VERSIONING
            )
            if x.alunos.foto3x4 is not None and x.alunos.foto3x4 is not js_undefined:
                endereco_imagem_aluno = "{0}/api/alunos/{1}/image".format(
                    window.PhanterPWA.ApiServer.remote_address,
                    x.alunos.foto3x4
                )
            table.append(
                XTRD(
                    "turma-table-data-{0}".format(x.alunos.id),
                    DIV(IMG(_src=endereco_imagem_aluno, _style="width:25px; height:25px; border-radius: 100%;")),
                    validations.zfill(cont_alunos, 2),
                    x.alunos.aluno,
                    data_de_nascimento_formated,
                    x.alunos.endereco,
                    widgets.MenuBox(
                        "menu_alunos_{0}".format(x.alunos.id),
                        I(_class="fas fa-ellipsis-v"),
                        widgets.MenuOption("Editar Aluno", **{
                            "_class": "botao_editar_aluno wave_on_click",
                            "_href": window.PhanterPWA.XWAY(
                                "alunos",
                                x.alunos.id,
                                "editar",
                                **{
                                    "_turmas-detalhadas": "/turmas/{0}/{1}/detalhado/".format(self.id_escola, self.ano_letivo)
                                }
                            )
                        }),
                        widgets.MenuOption("Editar Matrícula", **{
                            "_class": "botao_editar_aluno wave_on_click",
                            "_href": window.PhanterPWA.XWAY(
                                "matricula",
                                x.alunos.id,
                                "aluno-conferido",
                                self.id_escola,
                                self.ano_letivo,
                                **{
                                    "_turmas-detalhadas": "/turmas/{0}/{1}/detalhado/".format(self.id_escola, self.ano_letivo)
                                }
                            )
                        }),
                        widgets.MenuOption("Deletar Matrícula", **{
                            "_class": "botao_deletar_matricula wave_on_click",
                            "_data-id_matricula": x.matriculas.id
                        }),
                        widgets.MenuOption("Remover de Turma", **{
                            "_class": "botao_remover_matricula_da_turma wave_on_click",
                            "_data-id_matricula": x.matriculas.id
                        }),
                        **{
                            "onOpen": lambda: self.binds_menu_aluno()
                        }
                    ),
                    **{
                        "drag_and_drop": True,
                        "after_drop": self.after_drop,
                        "drop_if": lambda ori, tar: True if str(jQuery(ori).data("id_serie")) == str(jQuery(tar).data("id_serie")) and jQuery(ori).data("id_turma") == str(jQuery(tar).data("id_turma")) else False,
                        "_class": "linha_turma_turma",
                        "_data-id_escola": self.id_escola,
                        "_data-id_ano_letivo": self.ano_letivo,
                        "_data-id_turma": data_turma.id,
                        "_data-id_aluno": x.alunos.id,
                        "_data-id_serie": x.series.id,
                        "_data-id_matricula": x.matriculas.id
                    }
                )
            )
        disabled = None
        if cont_alunos == 0:
            disabled = "disabled"
            self.tem_turma = False
            table = DIV("NÃO HÁ ALUNOS NESTA TURMA", _style="color: red; padding: 100px 0; text-align: center;")

        card = DIV(
            LABEL(data_turma.turma, " (", data_turma.quant_alunos, " Alunos)", _for="phanterpwa-card-panel-control-{0}".format(data_turma.id)),
            DIV(
                DIV(
                    DIV(
                        DIV(
                            table,
                            _class="p-row"
                        ),
                        _class="phanterpwa-card-panel-control-content"
                    ),
                    DIV(
                        DIV(
                            I(_class="fas fa-user-graduate"),
                            **{
                                "_class": "botao_alunos icon_button actived",
                                "_title": "Adicione alunos à turma",
                                "_data-id_escola": self.id_escola,
                                "_data-id_ano_letivo": self.ano_letivo,
                                "_data-id_turma": data_turma.id
                            }
                        ),
                        A(
                            I(_class="fas fa-table"),
                            **{
                                "_class": "botao_diario_notas icon_button",
                                "_title": "Diário de Notas da Turma",
                                "_data-id_escola": self.id_escola,
                                "_data-id_ano_letivo": self.ano_letivo,
                                "_data-id_turma": data_turma.id,
                                "_disabled": disabled,
                                "_href": window.PhanterPWA.XWAY("diario-de-notas", self.id_escola, self.ano_letivo, data_turma.id, **{"_retornar": "turma-especifica"})
                            }
                        ),
                        A(
                            I(_class="fas fa-clipboard-list"),
                            **{
                                "_class": "botao_ficha_avaliativa icon_button",
                                "_title": "Ficha Avaliativa",
                                "_data-id_escola": self.id_escola,
                                "_data-id_ano_letivo": self.ano_letivo,
                                "_data-id_turma": data_turma.id,
                                "_disabled": disabled,
                                "_href": window.PhanterPWA.XWAY("ficha-avaliativa", self.id_escola, self.ano_letivo, data_turma.id, **{"_retornar": "turma-especifica"})

                            }
                        ),
                        DIV(
                            I(_class="fas fa-calendar-check"),
                            **{
                                "_class": "botao_faltas icon_button",
                                "_title": "Registro de Presença",
                                "_data-id_escola": self.id_escola,
                                "_data-id_ano_letivo": self.ano_letivo,
                                "_data-id_turma": data_turma.id,
                                "_disabled": disabled
                            }
                        ),
                        DIV(
                            I(_class="fas fa-chalkboard-teacher"),
                            **{
                                "_class": "botao_professores icon_button",
                                "_title": "Disciplinas e seus respectivos professores",
                                "_data-id_escola": self.id_escola,
                                "_data-id_ano_letivo": self.ano_letivo,
                                "_data-id_turma": data_turma.id,
                                "_disabled": "disabled"
                            }
                        ),
                        DIV(
                            I(_class="fas fa-clock"),
                            **{
                                "_class": "botao_horario icon_button",
                                "_title": "Horário da Turma",
                                "_data-id_escola": self.id_escola,
                                "_data-id_ano_letivo": self.ano_letivo,
                                "_data-id_turma": data_turma.id,
                                "_disabled": "disabled"
                            }
                        ),
                        _class="phanterpwa-card-panel-control-buttons"
                    ),
                    _class="phanterpwa-card-panel-control-wrapper has_buttons"
                ),
                _class="phanterpwa-card-panel-control-container"
            ),
            _id="phanterpwa-card-panel-control-{0}".format(data_turma.id),
            _class="phanterpwa-card-panel-control"
        )
        return card

    def binds_menu_aluno(self):

        jQuery(
            ".botao_remover_matricula_da_turma"
        ).off(
            "click.botao_remover_matricula"
        ).on(
            "click.botao_remover_matricula",
            lambda: self.modal_confirmar_remover_matricula_da_turma(this)
        )
        jQuery(
            ".botao_deletar_matricula"
        ).off(
            "click.botao_revogar_matricula"
        ).on(
            "click.botao_revogar_matricula",
            lambda: self.modal_confirmar_deletar_matricula(this)
        )

    def binds_painel_da_turma(self):
        jQuery(
            ".botao_alunos"
        ).off(
            "click.add_alunos"
        ).on(
            "click.add_alunos",
            lambda: self.get_alunos_remanejar(this)
        )

    def deletar_turma(self, widget_instance):
        id_turma = jQuery(widget_instance).data("id_turma")
        id_turma = jQuery(widget_instance).data("id_turma")
        window.PhanterPWA.ApiServer.DELETE(**{
            'url_args': ["api", "turma", self.id_escola, self.ano_letivo, "turma", id_turma],
            'onComplete': lambda data, ajax_status: self.update_turma(data, ajax_status, id_turma)
        })

    def after_drop(self, ev, el):
        t_ordem = list()
        id_turma = jQuery(el).data("id_turma")
        id_matricula = jQuery(el).data("id_matricula")
        jQuery(
            "#phanterpwa-card-panel-control-{0}".format(id_turma)
        ).find(
            ".phanterpwa-widget-table-data"
        ).each(lambda: t_ordem.append(
            jQuery(this).data("id_matricula")
        ))
        lista_ordem = []
        for li in t_ordem:
            if li not in lista_ordem:
                lista_ordem.append(li)
        window.PhanterPWA.GET(
            "api",
            "signforms",
            "phanterpwa-form-turma",
            onComplete=lambda data, ajax_status: self.depois_de_assinar_ordenacao_aluno(
                data, ajax_status, id_turma, id_matricula, lista_ordem)
        )

    def update_turma(self, data, ajax_status, id_turma, json):
        json = data.responseJSON
        if ajax_status == "success":

            for x in json.data.turmas:
                card = self.xml_card(x, x.id)
                card.html_to("#turma_e_turmas_{0}".format(x.id))
            self.binds_painel_da_turma()

    def depois_de_assinar_ordenacao_aluno(self, data, ajax_status, id_turma, id_matricula, lista_de_matriculas):
        json = data.responseJSON
        if ajax_status == "success":
            formdata = __new__(FormData())
            formdata.append(
                "csrf_token",
                json.csrf
            )
            formdata.append(
                "matriculas",
                JSON.stringify(lista_de_matriculas)
            )
            window.PhanterPWA.ApiServer.PUT(**{
                'url_args': ["api", "turma", self.id_escola, self.ano_letivo, "ordenar", id_turma, id_matricula],
                'form_data': formdata,
                'onComplete': lambda data, ajax_status: self.update_turma(data, ajax_status, id_turma)
            })

    def get_alunos_remanejar(self, widget_instance):
        id_turma = jQuery(widget_instance).data("id_turma")
        window.PhanterPWA.GET(
            "api",
            "turma",
            self.id_escola,
            self.ano_letivo,
            "remanejar",
            id_turma,
            onComplete=lambda data, ajax_status: self.modal_add_alunos(data, ajax_status, id_turma)
        )

    def modal_add_alunos(self, data, ajax_status, id_turma):
        json = data.responseJSON
        if ajax_status == "success":
            data_turma = json.data
            table = XTABLE(
                "remanejar-table-{0}".format(data_turma.id_turma),
                XTRH(
                    "remanejar-table-head-{0}".format(data_turma.id_turma),
                    "Foto",
                    "Nome",
                    "Data de Nascimento",
                    "Turma Atual",
                    "Endereço"
                )
            )
            cont_alunos = 0
            titulo_adc = False
            for x in data_turma.alunos_sem_turmas:
                cont_alunos += 1
                data_de_nascimento_formated = ""
                if x.alunos.data_nasc is not None and x.alunos.data_nasc is not js_undefined:
                    data_de_nascimento_formated = validations.format_iso_date_datetime(
                        x.alunos.data_nasc, "dd/MM/yyyy", "date"
                    )
                endereco_imagem_aluno = "/static/{0}/images/user.png".format(
                    window.PhanterPWA.VERSIONING
                )
                if x.alunos.foto3x4 is not None and x.alunos.foto3x4 is not js_undefined:
                    endereco_imagem_aluno = "{0}/api/alunos/{1}/image".format(
                        window.PhanterPWA.ApiServer.remote_address,
                        x.alunos.foto3x4
                    )
                if not titulo_adc:
                    table.append(TR(TD("ALUNOS SEM TURMA", _colspan=5, _style="text-align: center; background-color: #d5d5d5;")))
                    titulo_adc = True
                table.append(
                    XTRD(
                        "turma-table-data-remaneja-sem_turma-{0}".format(x.alunos.id),
                        TD(
                            DIV(IMG(_src=endereco_imagem_aluno, _style="width:25px; height:25px; border-radius: 100%;")),
                        ),
                        TD(
                            x.alunos.aluno,
                        ),
                        TD(
                            data_de_nascimento_formated,
                        ),
                        I(_class="fas fa-times-circle", _style="color: red;"),
                        TD(
                            x.alunos.endereco,
                        ),
                        **{
                            "drag_and_drop": False,
                            "_class": "linha_add_aluno_remanejar link",
                            "_data-id_escola": self.id_escola,
                            "_data-id_ano_letivo": self.ano_letivo,
                            "_data-id_turma": data_turma.id_turma,
                            "_data-id_aluno": x.alunos.id,
                            "_data-id_serie": x.series.id,
                            "_data-id_matricula": x.matriculas.id
                        }
                    )
                )
            titulo_alun = False
            for x in data_turma.alunos_outras_turmas:
                cont_alunos += 1
                data_de_nascimento_formated = ""
                if x.alunos.data_nasc is not None and x.alunos.data_nasc is not js_undefined:
                    data_de_nascimento_formated = validations.format_iso_date_datetime(
                        x.alunos.data_nasc, "dd/MM/yyyy", "date"
                    )
                endereco_imagem_aluno = "/static/{0}/images/user.png".format(
                    window.PhanterPWA.VERSIONING
                )
                if x.alunos.foto3x4 is not None and x.alunos.foto3x4 is not js_undefined:
                    endereco_imagem_aluno = "{0}/api/alunos/{1}/image".format(
                        window.PhanterPWA.ApiServer.remote_address,
                        x.alunos.foto3x4
                    )
                if not titulo_alun:
                    table.append(TR(TD("ALUNOS EM OUTRA TURMA", _colspan=5, _style="text-align: center; background-color: #d5d5d5;")))
                    titulo_alun = True
                table.append(
                    XTRD(
                        "turma-table-data-remanejar-tem_turma-{0}".format(x.alunos.id),
                        TD(
                            DIV(IMG(_src=endereco_imagem_aluno, _style="width:25px; height:25px; border-radius: 100%;")),
                        ),
                        TD(
                            x.alunos.aluno,
                        ),
                        TD(
                            data_de_nascimento_formated,
                        ),
                        TD(
                            x.turmas.turma
                        ),
                        TD(
                            x.alunos.endereco,
                        ),
                        **{
                            "drag_and_drop": False,
                            "_class": "linha_add_aluno_remanejar link",
                            "_data-id_escola": self.id_escola,
                            "_data-id_ano_letivo": self.ano_letivo,
                            "_data-id_turma": data_turma.id_turma,
                            "_data-id_aluno": x.alunos.id,
                            "_data-id_serie": x.series.id,
                            "_data-id_matricula": x.matriculas.id
                        }
                    )
                )

            if cont_alunos > 0:
                content = DIV(
                    table,
                    forms.FormWidget(
                        "turma",
                        "id_turma",
                        **{
                            "value": data_turma.id_turma,
                            "type": "hidden",
                            "form": "turma",
                        }
                    ),
                    _class="p-row"
                )
                self.modal_remanejar = modal.Modal(
                    "#modal_turma_case",
                    **{
                        "title": CONCATENATE(
                            DIV("REMANEJAR ALUNOS PARA A TURMA ", STRONG(str(data_turma.turma).upper())),
                            DIV("Basta clicar sobre o(a) aluno(a) para ele(a) ser remanejado(a)",
                                _style="color: red; font-size: 0.7em;"),
                        ),
                        "content": content,
                        "form": "turma"
                    }
                )
                self.modal_remanejar.open()
                jQuery(".linha_add_aluno_remanejar").off(
                    "click.adicionar_aluno_na_turma"
                ).on(
                    "click.adicionar_aluno_na_turma",
                    lambda: self._on_click_add_aluno_turma(this)
                )
                forms.SignForm("#form-turma", after_sign=lambda: forms.ValidateForm("#form-turma"))
                
            else:
                window.PhanterPWA.flash("Não há alunos matriculados para a série da turma")

    def _on_click_add_aluno_turma(self, widget_instance):
        id_matricula = jQuery(widget_instance).data("id_matricula")
        id_turma = jQuery(widget_instance).data("id_turma")
        jQuery(widget_instance).fadeOut()
        form_remanejar = jQuery("#form-turma")[0]
        form_remanejar = __new__(FormData(form_remanejar))
        window.PhanterPWA.ApiServer.PUT(**{
            'url_args': ["api", "turma", self.id_escola, self.ano_letivo, "remanejar", id_turma, id_matricula],
            'form_data': form_remanejar,
            'onComplete': lambda data, ajax_status:
                self.update_turma(data, ajax_status, id_turma)
        })
    def modal_confirmar_remover_matricula_da_turma(self, el):
        id_matricula = jQuery(el).data("id_matricula")
        content = DIV(
            P("Atenção, o(a) aluno(a) sairá da turma permanentemente."
                " Se ele possuir notas, faltas, pareceres, etc. Ou seja, ",
                "informações dele vinculados a esta turma, tudo será perdido."),
            P("Tem certeza que deseja remover esta matrícula?"),
            _class="p-row"
        )
        footer = DIV(
            forms.FormButton(
                "remover_matricula_da_turma_sim",
                "Sim",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ),
            forms.FormButton(
                "remover_matricula_da_turma_nao",
                "Não",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ),
            _class='phanterpwa-form-buttons-container'
        )
        self.modal_remover_matricula_da_turma = modal.Modal(
            "#modal_remover_matricula_da_turma_detalhe_container",
            **{
                "title": "Retirar aluno da turma",
                "content": content,
                "footer": footer,
                "form": "remover_matricula_da_turma"
            }
        )
        self.modal_remover_matricula_da_turma.open()
        jQuery("#phanterpwa-widget-form-form_button-remover_matricula_da_turma_sim").off(
            "click.adicionar_remover_matricula_da_turma_sim"
        ).on(
            "click.adicionar_remover_matricula_da_turma_sim",
            lambda: self._on_click_remover_matricula_da_turma(id_matricula)
        )
        jQuery("#phanterpwa-widget-form-form_button-remover_matricula_da_turma_nao").off(
            "click.adicionar_remover_matricula_da_turma_nao"
        ).on(
            "click.adicionar_remover_matricula_da_turma_nao",
            lambda: self.modal_remover_matricula_da_turma.close()
        )

    def _on_click_remover_matricula_da_turma(self, id_matricula):
        window.PhanterPWA.PUT(
            "api",
            "matricula",
            "remover-da-turma",
            self.id_escola,
            self.ano_letivo,
            id_matricula,
            onComplete=self.depois_de_deletar_ou_retirar
        )
        self.modal_remover_matricula_da_turma.close()

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
            "#modal_deletar_matricula_detalhe_container",
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
            self.get_dados_turma()


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




__pragma__('nokwargs')
