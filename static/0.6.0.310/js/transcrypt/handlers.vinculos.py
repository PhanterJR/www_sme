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
TR = helpers.XmlConstructor.tagger("tr")
TH = helpers.XmlConstructor.tagger("th")
TD = helpers.XmlConstructor.tagger("td")
P = helpers.XmlConstructor.tagger("p")
LABEL = helpers.XmlConstructor.tagger("label")
STRONG = helpers.XmlConstructor.tagger("strong")
IMG = helpers.XmlConstructor.tagger("img", True)
H2 = helpers.XmlConstructor.tagger("h2")
H3 = helpers.XmlConstructor.tagger("h3")
H4 = helpers.XmlConstructor.tagger("h4")
H5 = helpers.XmlConstructor.tagger("h5")
INPUT = helpers.XmlConstructor.tagger("input", True)
BR = helpers.XmlConstructor.tagger("br", True)
I18N = helpers.I18N
XTABLE = widgets.Table
XML = helpers.XML
XTRD = widgets.TableData
XTRH = widgets.TableHead
XFOOTER = widgets.TableFooterPagination


__pragma__('kwargs')


class Index(gatehandler.Handler):
    @decorators.check_authorization(lambda: window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME", "Administrador Master Escola", "Coordenação SME"]))
    def initialize(self):
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("VINCULAR", _class="phanterpwa-breadcrumb"),
                        _class="phanterpwa-breadcrumb-wrapper"
                    ),
                    _class="p-container expand"),
                _class='title_page_container card'
            ),
            DIV(
                DIV(
                    DIV(
                        DIV(preloaders.android, _style="width: 300px; height: 300px; overflow: hidden; margin: auto;"),
                        _style="text-align:center; padding: 50px 0;"
                    ),
                    _id="content-vinculo",
                    _class='p-row card e-padding_20'
                ),

                _class="phanterpwa-container p-container expand"
            )
        )
        html.html_to("#main-container")
        arg0 = window.PhanterPWA.Request.get_arg(0)
        arg1 = window.PhanterPWA.Request.get_arg(1)
        arg2 = window.PhanterPWA.Request.get_arg(2)
        arg3 = window.PhanterPWA.Request.get_arg(3)

        BackButton = left_bar.LeftBarButton(
            "back_localizar_vinculos",
            "Voltar",
            I(_class="fas fa-arrow-circle-left"),
            **{"_phanterpwa-way": "area-do-servidor",
                "position": "top",
                "ways": [lambda r: True if r.startswith("vinculos") or r.startswith("vinculos/") else False]}
        )
        if arg0 == "editar" or arg0 == "novo":
            if window.PhanterPWA.Request.get_param("retornar") is not None:
                BackButton = left_bar.LeftBarButton(
                    "back_localizar_vinculos",
                    "Voltar",
                    I(_class="fas fa-arrow-circle-left"),
                    **{"_phanterpwa-way": window.PhanterPWA.Request.get_param("retornar"),
                        "position": "top",
                        "ways": [lambda r: True if r.startswith("vinculos") or r.startswith("vinculos/") else False]}
                )
            else:
                BackButton = left_bar.LeftBarButton(
                    "back_localizar_vinculos",
                    "Voltar",
                    I(_class="fas fa-arrow-circle-left"),
                    **{"_phanterpwa-way": "vinculos",
                        "position": "top",
                        "ways": [lambda r: True if r.startswith("vinculos") or r.startswith("vinculos/") else False]}
                )
            self.Vinculo = Vinculo(self, arg0, arg1, arg2, arg3)
        elif arg0 == "escola":
            if arg1 is None or arg1 is js_undefined:
                html = escolas.EscolherEscola(
                    id_target="#content-vinculo",
                    callback_link=lambda id_escola: "#_phanterpwa:/vinculos/escola/{0}".format(id_escola)
                )
            elif str(arg1).isdigit() and (arg2 is None or arg2 is js_undefined):
                html = anos_letivos.EscolherAnoLetivo(
                    id_target="#content-vinculo",
                    callback_link=lambda ano: "#_phanterpwa:/vinculos/escola/{0}/{1}".format(arg1, ano)
                )
            elif str(arg1).isdigit() and str(arg2).isdigit():
                self.VinculosEscola = VinculosEscola(self, arg0, arg1, arg2, arg3)
                if window.PhanterPWA.Request.get_param("vinculos-funcionarios") is not None:
                    BackButton = left_bar.LeftBarButton(
                        "back_localizar_vinculos",
                        "Voltar",
                        I(_class="fas fa-arrow-circle-left"),
                        **{"_phanterpwa-way": window.PhanterPWA.Request.get_param("vinculos-funcionarios"),
                            "position": "top",
                            "ways": [lambda r: True if r.startswith("vinculos") or r.startswith("vinculos/") else False]}
                    )
                else:
                    BackButton = left_bar.LeftBarButton(
                        "back_localizar_vinculos",
                        "Voltar",
                        I(_class="fas fa-arrow-circle-left"),
                        **{"_phanterpwa-way": "vinculos",
                            "position": "top",
                            "ways": [lambda r: True if r.startswith("vinculos") or r.startswith("vinculos/") else False]}
                    )
        elif window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME"]):
            if arg0 is None:
                html = anos_letivos.EscolherAnoLetivo(
                    id_target="#content-vinculo",
                    callback_link=lambda ano: "#_phanterpwa:/vinculos/escolas/{0}".format(ano)
                )

            elif arg0 == "escolas" and str(arg1).isdigit():
                self.VinculosUsuarioSME = VinculosUsuarioSME(self, arg0, arg1, arg2, arg3)
                BackButton = left_bar.LeftBarButton(
                    "back_localizar_vinculos",
                    "Voltar",
                    I(_class="fas fa-arrow-circle-left"),
                    **{"_phanterpwa-way": "vinculos",
                        "position": "top",
                        "ways": [lambda r: True if r.startswith("vinculos") or r.startswith("vinculos/") else False]}
                )

        window.PhanterPWA.Components['left_bar'].add_button(BackButton)


class VinculosUsuarioSME(helpers.XmlConstructor):
    def __init__(self, index_instance, arg0, arg1, arg2=None, arg3=None):
        self.index_instance = index_instance
        self.arg0 = arg0
        self.arg1 = arg1
        self.arg2 = arg2
        self.arg3 = arg3
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("VINCULOS", _class="phanterpwa-breadcrumb"),
                        _class="phanterpwa-breadcrumb-wrapper"
                    ),
                    _class="p-container expand"),
                _class='title_page_container card'
            ),
            DIV(
                DIV(
                    DIV(
                        DIV(preloaders.android, _style="width: 300px; height: 300px; overflow: hidden; margin: auto;"),
                        _style="text-align:center; padding: 50px 0;"
                    ),
                    _id="content-vinculo",
                    _class='p-row card e-padding_20'
                ),

                _class="phanterpwa-container p-container expand"
            )
        )
        html.html_to("#main-container")
        self.obter_vinculos()

    def obter_vinculos(self):
        window.PhanterPWA.GET(
            "api",
            "vinculos",
            "sme",
            self.arg1,
            onComplete=self.depois_de_obter
        )

    def depois_de_obter(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            dados = json.dados

            escolas = []
            grupo = []
            xmls = CONCATENATE()
            for x in dados:
                endereco_imagem_funcionario = "/static/{0}/images/user.png".format(
                    window.PhanterPWA.VERSIONING
                )
                endereco_imagem_escola = "{0}/api/escolas/{1}/image".format(
                    window.PhanterPWA.ApiServer.remote_address,
                    x[0]
                )
                if x[0] not in escolas:
                    escolas.append(x[0])
                    equipe_diretiva = ""
                    corpo_docente = ""
                    equipe_de_apoio = ""

                    equipe_diretiva = XTABLE(
                        "funcionarios-vinculos-equipe_diretiva-{0}".format(x[0]),
                        TR(TH("EQUIPE DIRETIVA", _colspan="6", _style="text-align: center;")),
                        XTRH(
                            "funcionarios-vinculos-equipe_diretiva-rotulos-{0}".format(x[0]),
                            "Foto",
                            "Nome Completo",
                            "Atribuição",
                            "Email de Acesso",
                            "Nível de Acesso"
                        )
                    )
                    corpo_docente = XTABLE(
                        "funcionarios-vinculos-corpo_docente-{0}".format(x[0]),
                        TR(TH("CORPO DOCENTE", _colspan="7", _style="text-align: center;")),
                        XTRH(
                            "funcionarios-vinculos-corpo_docente-rotulos-{0}".format(x[0]),
                            "Foto",
                            "Nome Completo",
                            "Atribuição",
                            "Email de Acesso",
                            "Nível de Acesso",
                            TH("T&D", _title="Turmas e Disciplinas"),
                        )
                    )
                    equipe_de_apoio = XTABLE(
                        "funcionarios-vinculos-equipe_de_apoio-{0}".format(x[0]),
                        TR(TH("EQUIPE DE APOIO", _colspan="6", _style="text-align: center;")),
                        XTRH(
                            "funcionarios-vinculos-equipe_de_apoio-rotulos-{0}".format(x[0]),
                            "Foto",
                            "Nome Completo",
                            "Atribuição",
                            "Email de Acesso",
                            "Nível de Acesso"
                        )
                    )
                    bool_equipe_diretiva = False
                    bool_corpo_docente = False
                    bool_equipe_de_apoio = False
                    for ed in x[2]:
                        wg_renovar = []
                        if str(json.ultimo_ano).isdigit() and ed.tem_vinculo_ultimo_ano is False:
                            wg_renovar.append(widgets.MenuOption("Renovar Vínculo para {0}".format(json.ultimo_ano), **{
                                "_class": "botao_vinculo_ultimo_ano wave_on_click",
                                "_href": "#_phanterpwa:/vinculos/novo/{0}/{1}/{2}/{3}?retornar={4}{5}".format(
                                    ed.id_funcionario,
                                    ed.id_escola,
                                    json.ultimo_ano,
                                    ed.id_atribuicao,
                                    window.PhanterPWA._get_way_from_url_hash(),
                                    "&autorizacao={0}".format(ed.autorizacao_especial) if ed.autorizacao_especial != "" else ""
                                )
                            }))
                        bool_equipe_diretiva = True
                        if ed.id_funcionario is not None:
                            endereco_imagem_funcionario = "{0}/api/funcionarios/{1}/image".format(
                                window.PhanterPWA.ApiServer.remote_address,
                                ed.id_funcionario
                            )
                        equipe_diretiva.append(
                            XTRD(
                                "funcionarios-vinculos-tabela-dados-{0}-{1}".format(ed.id_escola, ed.id_funcionario),
                                DIV(IMG(_src=endereco_imagem_funcionario, _style="width:25px; height:25px; border-radius: 100%;")),
                                ed.nome_funcionario,
                                ed.atribuicoes,
                                TD(ed.email_de_acesso, _class="email_de_acesso_funcionario_{0}".format(ed.id_funcionario)),
                                TD(ed.autorizacao_especial, _class="papel_funcionario_{0}".format(ed.id_funcionario)),
                                widgets.MenuBox(
                                    "menu_funcionario_vinculado_{0}".format(ed.id),
                                    I(_class="fas fa-ellipsis-v"),
                                    widgets.MenuOption("Visualizar", **{
                                        "_class": "botao_visualizar_funcionario wave_on_click",
                                        "_data-id_funcionario": ed.id_funcionario,
                                    }),
                                    widgets.MenuOption("Editar Funcionário", **{
                                        "_class": "botao_editar_vinculo wave_on_click",
                                        "_href": "#_phanterpwa:/funcionarios/{0}/editar/?origem={1}".format(ed.id_funcionario, window.PhanterPWA.get_current_way())
                                    }),
                                    widgets.MenuOption("Editar Vínculo", **{
                                        "_class": "botao_editar_vinculo wave_on_click",
                                        "_href": "#_phanterpwa:/vinculos/editar/{0}/?retornar={1}".format(ed.id, window.PhanterPWA._get_way_from_url_hash())
                                    }),
                                    widgets.MenuOption("Revogar Vínculo", **{
                                        "_class": "botao_revogar_vinculo wave_on_click",
                                        "_data-id_vinculo": ed.id
                                    }),
                                    widgets.MenuOption("Conta de Acesso", **{
                                        "_class": "botao_prover_acesso_vinculo wave_on_click",
                                        "_data-id_funcionario": ed.id_funcionario
                                    }),
                                    *wg_renovar,
                                    onOpen=self.bind_menu_option
                                ),
                                **{"drag_and_drop": False}
                            )
                        )

                    for cd in x[3]:
                        wg_renovar = []
                        if str(json.ultimo_ano).isdigit() and cd.tem_vinculo_ultimo_ano is False:
                            wg_renovar.append(widgets.MenuOption("Renovar Vínculo para {0}".format(json.ultimo_ano), **{
                                "_class": "botao_vinculo_ultimo_ano wave_on_click",
                                "_href": "#_phanterpwa:/vinculos/novo/{0}/{1}/{2}/{3}?retornar={4}{5}".format(
                                    cd.id_funcionario,
                                    cd.id_escola,
                                    json.ultimo_ano,
                                    cd.id_atribuicao,
                                    window.PhanterPWA._get_way_from_url_hash(),
                                    "&autorizacao={0}".format(cd.autorizacao_especial) if cd.autorizacao_especial != "" else ""
                                )
                            }))
                        bool_corpo_docente = True
                        if cd.id_funcionario is not None:
                            endereco_imagem_funcionario = "{0}/api/funcionarios/{1}/image".format(
                                window.PhanterPWA.ApiServer.remote_address,
                                cd.id_funcionario
                            )
                        corpo_docente.append(
                            XTRD(
                                "funcionarios-vinculos-tabela-dados-{0}-{1}".format(cd.id_escola, cd.id_funcionario),
                                DIV(IMG(_src=endereco_imagem_funcionario, _style="width:25px; height:25px; border-radius: 100%;")),
                                cd.nome_funcionario,
                                cd.atribuicoes,
                                TD(cd.email_de_acesso, _class="email_de_acesso_funcionario_{0}".format(cd.id_funcionario)),
                                TD(cd.autorizacao_especial, _class="papel_funcionario_{0}".format(cd.id_funcionario)),
                                widgets.MenuBox(
                                    "menu_funcionario_turmas_{0}".format(cd.id),
                                    I(cd.disciplinas_turmas.length, _class="phanterpwa-icon_numb"),
                                    *[widgets.MenuOption(t_e_d[0], _href=window.PhanterPWA.XWAY("turmas", t_e_d[1], t_e_d[2], "especifico", t_e_d[3])) for t_e_d in cd.disciplinas_turmas],
                                ),
                                widgets.MenuBox(
                                    "menu_funcionario_vinculado_{0}".format(cd.id),
                                    I(_class="fas fa-ellipsis-v"),
                                    widgets.MenuOption("Visualizar", **{
                                        "_class": "botao_visualizar_funcionario wave_on_click",
                                        "_data-id_funcionario": cd.id_funcionario,
                                    }),
                                    widgets.MenuOption("Editar Funcionário", **{
                                        "_class": "botao_editar_vinculo wave_on_click",
                                        "_href": "#_phanterpwa:/funcionarios/{0}/editar/?origem={1}".format(cd.id_funcionario, window.PhanterPWA.get_current_way())
                                    }),
                                    widgets.MenuOption("Editar Vínculo", **{
                                        "_class": "botao_editar_vinculo wave_on_click",
                                        "_href": "#_phanterpwa:/vinculos/editar/{0}/?retornar={1}".format(cd.id, window.PhanterPWA._get_way_from_url_hash())
                                    }),
                                    widgets.MenuOption("Revogar Vínculo", **{
                                        "_class": "botao_revogar_vinculo wave_on_click",
                                        "_data-id_vinculo": cd.id
                                    }),
                                    widgets.MenuOption("Conta de Acesso", **{
                                        "_class": "botao_prover_acesso_vinculo wave_on_click",
                                        "_data-id_funcionario": cd.id_funcionario
                                    }),
                                    *wg_renovar,
                                    onOpen=self.bind_menu_option
                                ),
                                **{"drag_and_drop": False}
                            )
                        )

                    for eda in x[4]:
                        bool_equipe_de_apoio = True
                        wg_renovar = []
                        if str(json.ultimo_ano).isdigit() and eda.tem_vinculo_ultimo_ano is False:
                            wg_renovar.append(widgets.MenuOption("Renovar Vínculo para {0}".format(json.ultimo_ano), **{
                                "_class": "botao_vinculo_ultimo_ano wave_on_click",
                                "_href": "#_phanterpwa:/vinculos/novo/{0}/{1}/{2}/{3}?retornar={4}{5}".format(
                                    eda.id_funcionario,
                                    eda.id_escola,
                                    json.ultimo_ano,
                                    eda.id_atribuicao,
                                    window.PhanterPWA._get_way_from_url_hash(),
                                    "&autorizacao={0}".format(eda.autorizacao_especial) if eda.autorizacao_especial != "" else ""
                                )
                            }))
                        if eda.id_funcionario is not None:
                            endereco_imagem_funcionario = "{0}/api/funcionarios/{1}/image".format(
                                window.PhanterPWA.ApiServer.remote_address,
                                eda.id_funcionario
                            )
                        equipe_de_apoio.append(
                            XTRD(
                                "funcionarios-vinculos-tabela-dados-{0}-{1}".format(eda.id_escola, eda.id_funcionario),
                                DIV(IMG(_src=endereco_imagem_funcionario, _style="width:25px; height:25px; border-radius: 100%;")),
                                eda.nome_funcionario,
                                eda.atribuicoes,
                                TD(eda.email_de_acesso, _class="email_de_acesso_funcionario_{0}".format(eda.id_funcionario)),
                                TD(eda.autorizacao_especial, _class="papel_funcionario_{0}".format(eda.id_funcionario)),
                                widgets.MenuBox(
                                    "menu_funcionario_vinculado_{0}".format(eda.id),
                                    I(_class="fas fa-ellipsis-v"),
                                    widgets.MenuOption("Visualizar", **{
                                        "_class": "botao_visualizar_funcionario wave_on_click",
                                        "_data-id_funcionario": eda.id_funcionario,
                                    }),
                                    widgets.MenuOption("Editar Funcionário", **{
                                        "_class": "botao_editar_vinculo wave_on_click",
                                        "_href": "#_phanterpwa:/funcionarios/{0}/editar/?origem={1}".format(eda.id_funcionario, window.PhanterPWA.get_current_way())
                                    }),
                                    widgets.MenuOption("Editar Vínculo", **{
                                        "_class": "botao_editar_vinculo wave_on_click",
                                        "_href": "#_phanterpwa:/vinculos/editar/{0}/?retornar={1}".format(eda.id, window.PhanterPWA._get_way_from_url_hash())
                                    }),
                                    widgets.MenuOption("Revogar Vínculo", **{
                                        "_class": "botao_revogar_vinculo wave_on_click",
                                        "_data-id_vinculo": eda.id
                                    }),
                                    widgets.MenuOption("Conta de Acesso", **{
                                        "_class": "botao_prover_acesso_vinculo wave_on_click",
                                        "_data-id_funcionario": eda.id_funcionario
                                    }),
                                    *wg_renovar,
                                    onOpen=self.bind_menu_option
                                ),
                                **{"drag_and_drop": False}
                            )
                        )

                    card = DIV(
                        LABEL(
                            DIV(
                                IMG(_src=endereco_imagem_escola, _style="width:25px; height:25px; border-radius: 100%;position: absolute;top: 6px;"),
                                _style="display: inline-block;margin-right: 10px;height: 25px;width: 25px;position: relative;"
                            ),
                            x[1], _for="phanterpwa-card-panel-control-{0}".format(x[0])
                        ),
                        DIV(
                            DIV(
                                DIV(
                                    DIV(
                                        equipe_diretiva if bool_equipe_diretiva else "",
                                        BR() if bool_equipe_diretiva and bool_corpo_docente else "",
                                        corpo_docente if bool_corpo_docente else "",
                                        BR() if bool_equipe_diretiva and bool_equipe_de_apoio else "",
                                        equipe_de_apoio if bool_equipe_de_apoio else "",
                                        _class="p-row"
                                    ),
                                    _class="phanterpwa-card-panel-control-content"
                                ),
                                DIV(
                                    A(
                                        I(_class="fas fa-puzzle-piece"),
                                        **{
                                            "_class": "botao_separar_unidade_escolar icon_button",
                                            "_title": "Separar esta unidade escolar",
                                            "_href": window.PhanterPWA.XWAY(
                                                "vinculos",
                                                "escola",
                                                x[0],
                                                self.arg1,
                                                **{"_vinculos-funcionarios": "vinculos/escolas/{0}/".format(self.arg1)}
                                            )
                                        }
                                    ),
                                    # DIV(
                                    #     I(_class="fas fa-user-graduate"),
                                    #     **{
                                    #         "_class": "botao_alunos icon_button actived",
                                    #         "_title": "Adicione alunos à turma",
                                    #         "_data-id_escola": self.id_escola,
                                    #         "_data-id_ano_letivo": self.ano_letivo,
                                    #         "_data-id_turma": data_turma.id
                                    #     }
                                    # ),
                                    # A(
                                    #     I(_class="fas fa-table"),
                                    #     **{
                                    #         "_class": "botao_diario_notas icon_button",
                                    #         "_title": "Diário de Notas da Turma",
                                    #         "_data-id_escola": self.id_escola,
                                    #         "_data-id_ano_letivo": self.ano_letivo,
                                    #         "_data-id_turma": data_turma.id,
                                    #         "_disabled": disabled,
                                    #         "_href": window.PhanterPWA.XWAY("diario-de-notas", self.id_escola, self.ano_letivo, data_turma.id, **{"_turma": data_turma.turma})
                                    #     }
                                    # ),
                                    # A(
                                    #     I(_class="fas fa-clipboard-list"),
                                    #     **{
                                    #         "_class": "botao_ficha_avaliativa icon_button",
                                    #         "_title": "Ficha Avaliativa",
                                    #         "_data-id_escola": self.id_escola,
                                    #         "_data-id_ano_letivo": self.ano_letivo,
                                    #         "_data-id_turma": data_turma.id,
                                    #         "_disabled": disabled,
                                    #         "_href": window.PhanterPWA.XWAY("ficha-avaliativa", self.id_escola, self.ano_letivo, data_turma.id, **{"_retornar": "turmas-detalhadas"})

                                    #     }
                                    # ),
                                    # DIV(
                                    #     I(_class="fas fa-calendar-check"),
                                    #     **{
                                    #         "_class": "botao_faltas icon_button",
                                    #         "_title": "Registro de Presença",
                                    #         "_data-id_escola": self.id_escola,
                                    #         "_data-id_ano_letivo": self.ano_letivo,
                                    #         "_data-id_turma": data_turma.id,
                                    #         "_disabled": disabled
                                    #     }
                                    # ),
                                    # DIV(
                                    #     I(_class="fas fa-chalkboard-teacher"),
                                    #     **{
                                    #         "_class": "botao_professores icon_button",
                                    #         "_title": "Disciplinas e seus respectivos professores",
                                    #         "_data-id_escola": self.id_escola,
                                    #         "_data-id_ano_letivo": self.ano_letivo,
                                    #         "_data-id_turma": data_turma.id,
                                    #         "_disabled": "disabled"
                                    #     }
                                    # ),
                                    # DIV(
                                    #     I(_class="fas fa-clock"),
                                    #     **{
                                    #         "_class": "botao_horario icon_button",
                                    #         "_title": "Horário da Turma",
                                    #         "_data-id_escola": self.id_escola,
                                    #         "_data-id_ano_letivo": self.ano_letivo,
                                    #         "_data-id_turma": data_turma.id,
                                    #         "_disabled": "disabled"
                                    #     }
                                    # ),
                                    _class="phanterpwa-card-panel-control-buttons"
                                ),
                                _class="phanterpwa-card-panel-control-wrapper has_buttons"
                            ),
                            _class="phanterpwa-card-panel-control-container"
                        ),
                        _id="phanterpwa-card-panel-control-{0}".format(x.id_escola),
                        _class="phanterpwa-card-panel-control"
                    )
                    xmls.append(card)
            xmls.append(DIV(_id="modal_prover_acesso_container"))
            xmls.append(DIV(_id="modal_deletar_acesso_container"))
            xmls.append(DIV(_id="modal_visualizar_funcionario"))
            xmls.html_to("#content-vinculo")

    def bind_menu_option(self):
        jQuery(
            ".botao_prover_acesso_vinculo"
        ).off(
            "click.botao_prover_acesso"
        ).on(
            "click.botao_prover_acesso",
            lambda: self.obter_lista_de_contas_disponiveis(this)
        )
        jQuery(
            ".botao_revogar_vinculo"
        ).off(
            "click.botao_revogar_acesso"
        ).on(
            "click.botao_revogar_acesso",
            lambda: self.modal_confirmar_deletar_vinculo(this)
        )
        jQuery(
            ".botao_visualizar_funcionario"
        ).off(
            "click.botao_visualizar_funcionario"
        ).on(
            "click.botao_visualizar_funcionario",
            lambda: self.get_visualizar_funcionario(this)
        )

    def obter_lista_de_contas_disponiveis(self, el):
        valor = jQuery(el).data("id_funcionario")
        window.PhanterPWA.GET(
            "api",
            "funcionarios",
            "contas-disponiveis",
            onComplete=lambda data, ajax_status: self.abrir_modal_prover_acesso(valor, data, ajax_status)
        )

    def abrir_modal_prover_acesso(self, id_funcionario, data, ajax_status):
        if ajax_status == "success":
            data_set = data.responseJSON.contas
            content = DIV(
                forms.FormWidget(
                    "prover_acesso",
                    "contas_disponiveis",
                    **{
                        "value": "",
                        "label": "Contas disponíveis",
                        "type": "select",
                        "form": "prover_acesso",
                        "data_set": data_set,
                        "_class": "p-col w1p100"
                    }
                ),
                _class="p-row"
            )
            footer = DIV(
                forms.SubmitButton(
                    "adicionar_prover_acesso",
                    "Usar a conta selecionada",
                    _class="btn-autoresize wave_on_click waves-phanterpwa"
                ),
                _class='phanterpwa-form-buttons-container'
            )
            self.modal_prover_acesso = modal.Modal(
                "#modal_prover_acesso_container",
                **{
                    "title": "Definir a conta do funcionário que será usada no acesso",
                    "content": content,
                    "footer": footer,
                    "form": "prover_acesso"
                }
            )
            self.modal_prover_acesso.open()
            jQuery("#phanterpwa-widget-form-submit_button-adicionar_prover_acesso").off(
                "click.adicionar_prover_acesso"
            ).on(
                "click.adicionar_prover_acesso",
                lambda: self.sing_form_modal_funcionario(id_funcionario)
            )

    def sing_form_modal_funcionario(self, id_funcionario):
        window.PhanterPWA.GET(
            "api",
            "signforms",
            "phanterpwa-form-funcionarios",
            onComplete=lambda data, ajax_status: self.depois_de_assinar_modal_funcionario(
                data, ajax_status, id_funcionario)
        )

    def depois_de_assinar_modal_funcionario(self, data, ajax_status, id_funcionario):
        json = data.responseJSON
        id_auth_user = jQuery(".phanterpwa-widget-select-select[name='contas_disponiveis']").val()
        formdata = __new__(FormData())
        formdata.append(
            "csrf_token",
            json.csrf
        )
        formdata.append(
            "auth_user",
            id_auth_user
        )
        window.PhanterPWA.PUT(
            "api",
            "funcionario",
            "definir-conta",
            id_funcionario,
            form_data=formdata,
            onComplete=self.depois_de_definir_o_email_do_funcionario
        )

    def depois_de_definir_o_email_do_funcionario(self, data, ajax_status):
        if ajax_status == "success":
            self.modal_prover_acesso.close()
            dados = data.responseJSON.dados
            jQuery(".email_de_acesso_funcionario_{0}".format(dados.id_funcionario)).text(dados.email_de_acesso)
            jQuery(".papel_funcionario_{0}".format(dados.id_funcionario)).text(dados.papel)

    def modal_confirmar_deletar_vinculo(self, el):
        id_vinculo = jQuery(el).data("id_vinculo")
        content = DIV(
            P("Atenção, o vínculo do funcionário será deletado permanentemente, se ",
                "o mesmo possuir acesso especial ao sistema, este será revogado. Por exemplo,"
                " em caso de ", STRONG("professores"), ", ele não terá mais acesso às suas ", 
                "disciplinas e suas turmas"),
            P("Tem certeza que deseja deletar este vínculo?"),
            _class="p-row"
        )
        footer = DIV(
            forms.FormButton(
                "deletar_vinculo_sim",
                "Sim",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ),
            forms.FormButton(
                "deletar_vinculo_nao",
                "Não",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ),
            _class='phanterpwa-form-buttons-container'
        )
        self.modal_deletar_vinculo = modal.Modal(
            "#modal_deletar_acesso_container",
            **{
                "title": "Deletar vínculo",
                "content": content,
                "footer": footer,
                "form": "deletar_vinculo"
            }
        )
        self.modal_deletar_vinculo.open()
        jQuery("#phanterpwa-widget-form-form_button-deletar_vinculo_sim").off(
            "click.adicionar_deletar_vinculo_sim"
        ).on(
            "click.adicionar_deletar_vinculo_sim",
            lambda: self._on_click_deletar_vinculo(id_vinculo)
        )
        jQuery("#phanterpwa-widget-form-form_button-deletar_vinculo_nao").off(
            "click.adicionar_deletar_vinculo_nao"
        ).on(
            "click.adicionar_deletar_vinculo_nao",
            lambda: self.modal_deletar_vinculo.close()
        )

    def _on_click_deletar_vinculo(self, id_vinculo):
        window.PhanterPWA.DELETE(
            "api",
            "vinculo",
            "deletar",
            id_vinculo,
            onComplete=self.depois_de_deletar_vinculo
        )
        self.modal_deletar_vinculo.close()

    def depois_de_deletar_vinculo(self, data, ajax_status):
        if ajax_status == "success":
            self.obter_vinculos()

    def get_visualizar_funcionario(self, widget_instance):
        id_funcionario = jQuery(widget_instance).data("id_funcionario")
        window.PhanterPWA.GET(
            "api",
            "funcionario",
            "visualizar",
            id_funcionario,
            onComplete=lambda data, ajax_status: self.modal_add_funcinario_visualizar(data, ajax_status)
        )

    def modal_add_funcinario_visualizar(self, data, ajax_status):
        json = data.responseJSON
        if ajax_status == "success":
            html_vinculos = DIV(
                DIV("VÍNCULOS DO FUNCIONÁRIO", _class="p-col w1p100 phanterpwa-widget-form-separator"),
                P("O Funcionário não possui vínculos"),
                _class="vinculos-conteudo"
            )
            if json.data.vinculos is not None and json.data.vinculos is not js_undefined:
                html_vinculos = DIV(
                    DIV("VÍNCULOS DO FUNCIONÁRIO", _class="p-col w1p100 phanterpwa-widget-form-separator"),
                    _class="vinculos-conteudo"
                )
                tabela = XTABLE(
                    "tabela_ficha_individual",
                    XTRH(
                        "tabela_ficha_individual_head",
                        "Ano Letivo",
                        "Escola",
                        "Atribuições",
                        "Data Limite",
                        "Autorização"
                    ),

                )
                for x in json.data.vinculos:
                    data_limite = "31/12/{0}".format(x.anos_letivo.ano)
                    if x.vinculos_funcionarios.data_limite is not None and x.vinculos_funcionarios.data_limite is not js_undefined:
                        data_limite = validations.format_iso_date_datetime(
                            x.vinculos_funcionarios.data_limite, "dd/MM/yyyy", "date"
                        )

                    tabela.append(
                        XTRD(
                            "tabela_ficha_individual_linhas_{0}".format(x.vinculos_funcionarios.id),
                            x.anos_letivo.ano,
                            x.escolas.nome,
                            x.profissoes.profissao,
                            data_limite,
                            x.vinculos_funcionarios.autorizacao,
                            **{"drag_and_drop": False}
                        )
                    )
                html_vinculos.append(tabela)
            content = DIV(
                forms.Form(json.data.funcionario),
                html_vinculos,
                _class="p-row"
            )
            self.modal_visualizar_funcionario = modal.Modal(
                "#modal_visualizar_funcionario",
                **{
                    "title": CONCATENATE(DIV("Visualizar dados do funcionário"),
                        DIV(STRONG(json.data.nome))),
                    "content": content
                }
            )
            self.modal_visualizar_funcionario.open()

        else:
            window.PhanterPWA.flash("Não há alunos_visualizar matriculados para a série da turma")


class VinculosEscola(helpers.XmlConstructor):
    def __init__(self, index_instance, arg0, arg1, arg2=None, arg3=None):
        self.index_instance = index_instance
        self.arg0 = arg0
        self.arg1 = arg1
        self.arg2 = arg2
        self.arg3 = arg3
        logo = "{0}/api/escolas/{1}/image".format(
            window.PhanterPWA.ApiServer.remote_address,
            arg1
        )
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("VINCULOS", _class="phanterpwa-breadcrumb"),
                        DIV("ESCOLA", _class="phanterpwa-breadcrumb"),
                        _class="phanterpwa-breadcrumb-wrapper"
                    ),
                    _class="p-container expand"),
                _class='title_page_container card'
            ),
            DIV(
                DIV(
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
                            H2("LISTA DE FUNCIONÁRIOS VINCULADOS À ESTA UNIDADE DE ENSINO NO ANO DE ", arg2, "."),
                            P("O funcionário sem ", STRONG("Email de Acesso"), "indica que o funcionário vinculado",
                                " não possui uma conta de usuário ou a conta não está devidamente ligada ao cadastro",
                                " do funcionário."),
                            P("É possível vincular um novo funcionário clicando em ", I(_class="fas fa-plus"), "."),
                            P("Para acessar opções individuais de cada funcionário basta clicar em ", I(_class="fas fa-ellipsis-v"), "."),
                            _class="p-col w1p100 w4p70",
                            _id="u_informacao_series"
                        ),
                        _class="p-row"
                    ),
                    DIV(
                        DIV(
                            DIV(preloaders.android, _style="width: 300px; height: 300px; overflow: hidden; margin: auto;"),
                            _style="text-align:center; padding: 50px 0;"
                        ),
                        _id="content-vinculo-escola",
                        _class="p-row"
                    ),
                    _class='card e-padding_20'
                ),
                _class="phanterpwa-container p-container expand"
            )
        )
        html.html_to("#main-container")
        self.obter_vinculos()

    def obter_vinculos(self):
        window.PhanterPWA.GET(
            "api",
            "vinculos",
            "escola",
            self.arg1,
            self.arg2,
            onComplete=self.depois_de_obter
        )

    def depois_de_obter(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            dados = json.dados

            escolas = []
            grupo = []
            xmls = CONCATENATE()
            for x in dados:
                endereco_imagem_funcionario = "/static/{0}/images/user.png".format(
                    window.PhanterPWA.VERSIONING
                )
                endereco_imagem_escola = "{0}/api/escolas/{1}/image".format(
                    window.PhanterPWA.ApiServer.remote_address,
                    x[0]
                )

                if x[0] not in escolas:
                    escolas.append(x[0])
                    equipe_diretiva = ""
                    corpo_docente = ""
                    equipe_de_apoio = ""



                    equipe_diretiva = XTABLE(
                        "funcionarios-vinculos-equipe_diretiva-{0}".format(x[0]),
                        TR(TH("EQUIPE DIRETIVA", _colspan="6", _style="text-align: center;")),
                        XTRH(
                            "funcionarios-vinculos-equipe_diretiva-rotulos-{0}".format(x[0]),
                            "Foto",
                            "Nome Completo",
                            "Atribuição",
                            "Email de Acesso",
                            "Nível de Acesso"
                        )
                    )
                    corpo_docente = XTABLE(
                        "funcionarios-vinculos-corpo_docente-{0}".format(x[0]),
                        TR(TH("CORPO DOCENTE", _colspan="7", _style="text-align: center;")),
                        XTRH(
                            "funcionarios-vinculos-corpo_docente-rotulos-{0}".format(x[0]),
                            "Foto",
                            "Nome Completo",
                            "Atribuição",
                            "Email de Acesso",
                            "Nível de Acesso",
                            TH("T&D", _title="Turmas e Disciplinas"),
                        )
                    )
                    equipe_de_apoio = XTABLE(
                        "funcionarios-vinculos-equipe_de_apoio-{0}".format(x[0]),
                        TR(TH("EQUIPE DE APOIO", _colspan="6", _style="text-align: center;")),
                        XTRH(
                            "funcionarios-vinculos-equipe_de_apoio-rotulos-{0}".format(x[0]),
                            "Foto",
                            "Nome Completo",
                            "Atribuição",
                            "Email de Acesso",
                            "Nível de Acesso"
                        )
                    )
                    bool_equipe_diretiva = False
                    bool_corpo_docente = False
                    bool_equipe_de_apoio = False
                    for ed in x[2]:
                        bool_equipe_diretiva = True
                        if ed.id_funcionario is not None:
                            endereco_imagem_funcionario = "{0}/api/funcionarios/{1}/image".format(
                                window.PhanterPWA.ApiServer.remote_address,
                                ed.id_funcionario
                            )
                        equipe_diretiva.append(
                            XTRD(
                                "funcionarios-vinculos-tabela-dados-{0}-{1}".format(ed.id_escola, ed.id_funcionario),
                                DIV(IMG(_src=endereco_imagem_funcionario, _style="width:25px; height:25px; border-radius: 100%;")),
                                ed.nome_funcionario,
                                ed.atribuicoes,
                                TD(ed.email_de_acesso, _class="email_de_acesso_funcionario_{0}".format(ed.id_funcionario)),
                                TD(ed.autorizacao_especial, _class="papel_funcionario_{0}".format(ed.id_funcionario)),
                                widgets.MenuBox(
                                    "menu_funcionario_vinculado_{0}".format(ed.id),
                                    I(_class="fas fa-ellipsis-v"),
                                    widgets.MenuOption("Visualizar", **{
                                        "_class": "botao_visualizar_funcionario wave_on_click",
                                        "_data-id_funcionario": ed.id_funcionario,
                                    }),
                                    widgets.MenuOption("Editar Funcionário", **{
                                        "_class": "botao_editar_vinculo wave_on_click",
                                        "_href": "#_phanterpwa:/funcionarios/{0}/editar/?origem={1}".format(ed.id_funcionario, window.PhanterPWA.get_current_way())
                                    }),
                                    widgets.MenuOption("Editar Vínculo", **{
                                        "_class": "botao_editar_vinculo wave_on_click",
                                        "_href": "#_phanterpwa:/vinculos/editar/{0}/?retornar={1}".format(ed.id, window.PhanterPWA._get_way_from_url_hash())
                                    }),
                                    widgets.MenuOption("Revogar Vínculo", **{
                                        "_class": "botao_revogar_vinculo wave_on_click",
                                        "_data-id_vinculo": ed.id
                                    }),
                                    widgets.MenuOption("Conta de Acesso", **{
                                        "_class": "botao_prover_acesso_vinculo wave_on_click",
                                        "_data-id_funcionario": ed.id_funcionario
                                    }),
                                    onOpen=self.bind_menu_option
                                ),
                                **{"drag_and_drop": False}
                            )
                        )

                    for cd in x[3]:
                        console.log(json.ultimo_ano, cd.tem_vinculo_ultimo_ano)
                        bool_corpo_docente = True
                        wg_renovar = []
                        if str(json.ultimo_ano).isdigit() and cd.tem_vinculo_ultimo_ano is False:
                            wg_renovar.append(widgets.MenuOption("Renovar Vínculo para {0}".format(json.ultimo_ano), **{
                                "_class": "botao_vinculo_ultimo_ano wave_on_click",
                                "_href": "#_phanterpwa:/vinculos/novo/{0}/{1}/{2}/{3}?retornar={4}{5}".format(
                                    cd.id_funcionario,
                                    cd.id_escola,
                                    json.ultimo_ano,
                                    cd.id_atribuicao,
                                    window.PhanterPWA._get_way_from_url_hash(),
                                    "&autorizacao={0}".format(cd.autorizacao_especial) if cd.autorizacao_especial != "" else ""
                                )
                            }))
                        if cd.id_funcionario is not None:
                            endereco_imagem_funcionario = "{0}/api/funcionarios/{1}/image".format(
                                window.PhanterPWA.ApiServer.remote_address,
                                cd.id_funcionario
                            )
                        corpo_docente.append(
                            XTRD(
                                "funcionarios-vinculos-tabela-dados-{0}-{1}".format(cd.id_escola, cd.id_funcionario),
                                DIV(IMG(_src=endereco_imagem_funcionario, _style="width:25px; height:25px; border-radius: 100%;")),
                                cd.nome_funcionario,
                                cd.atribuicoes,
                                TD(cd.email_de_acesso, _class="email_de_acesso_funcionario_{0}".format(cd.id_funcionario)),
                                TD(cd.autorizacao_especial, _class="papel_funcionario_{0}".format(cd.id_funcionario)),
                                widgets.MenuBox(
                                    "menu_funcionario_turmas_{0}".format(cd.id),
                                    I(cd.disciplinas_turmas.length, _class="phanterpwa-icon_numb"),
                                    *[widgets.MenuOption(t_e_d[0], _href=window.PhanterPWA.XWAY("turmas", t_e_d[1], t_e_d[2], "especifico", t_e_d[3])) for t_e_d in cd.disciplinas_turmas],
                                ),
                                widgets.MenuBox(
                                    "menu_funcionario_vinculado_{0}".format(cd.id),
                                    I(_class="fas fa-ellipsis-v"),
                                    widgets.MenuOption("Visualizar", **{
                                        "_class": "botao_visualizar_funcionario wave_on_click",
                                        "_data-id_funcionario": cd.id_funcionario,
                                    }),
                                    widgets.MenuOption("Editar Funcionário", **{
                                        "_class": "botao_editar_vinculo wave_on_click",
                                        "_href": "#_phanterpwa:/funcionarios/{0}/editar/?origem={1}".format(cd.id_funcionario, window.PhanterPWA.get_current_way())
                                    }),
                                    widgets.MenuOption("Editar Vínculo", **{
                                        "_class": "botao_editar_vinculo wave_on_click",
                                        "_href": "#_phanterpwa:/vinculos/editar/{0}/?retornar={1}".format(cd.id, window.PhanterPWA._get_way_from_url_hash())
                                    }),
                                    widgets.MenuOption("Revogar Vínculo", **{
                                        "_class": "botao_revogar_vinculo wave_on_click",
                                        "_data-id_vinculo": cd.id
                                    }),
                                    widgets.MenuOption("Conta de Acesso", **{
                                        "_class": "botao_prover_acesso_vinculo wave_on_click",
                                        "_data-id_funcionario": cd.id_funcionario
                                    }),
                                    *wg_renovar,
                                    onOpen=self.bind_menu_option
                                ),
                                **{"drag_and_drop": False}
                            )
                        )

                    for eda in x[4]:
                        bool_equipe_de_apoio = True
                        wg_renovar = []
                        if str(json.ultimo_ano).isdigit() and eda.tem_vinculo_ultimo_ano is False:
                            wg_renovar.append(widgets.MenuOption("Renovar Vínculo para {0}".format(json.ultimo_ano), **{
                                "_class": "botao_vinculo_ultimo_ano wave_on_click",
                                "_href": "#_phanterpwa:/vinculos/novo/{0}/{1}/{2}/{3}?retornar={4}{5}".format(
                                    eda.id_funcionario,
                                    eda.id_escola,
                                    json.ultimo_ano,
                                    eda.id_atribuicao,
                                    window.PhanterPWA._get_way_from_url_hash(),
                                    "&autorizacao={0}".format(eda.autorizacao_especial) if eda.autorizacao_especial != "" else ""
                                )
                            }))
                        if eda.id_funcionario is not None:
                            endereco_imagem_funcionario = "{0}/api/funcionarios/{1}/image".format(
                                window.PhanterPWA.ApiServer.remote_address,
                                eda.id_funcionario
                            )
                        equipe_de_apoio.append(
                            XTRD(
                                "funcionarios-vinculos-tabela-dados-{0}-{1}".format(eda.id_escola, eda.id_funcionario),
                                DIV(IMG(_src=endereco_imagem_funcionario, _style="width:25px; height:25px; border-radius: 100%;")),
                                eda.nome_funcionario,
                                eda.atribuicoes,
                                TD(eda.email_de_acesso, _class="email_de_acesso_funcionario_{0}".format(eda.id_funcionario)),
                                TD(eda.autorizacao_especial, _class="papel_funcionario_{0}".format(eda.id_funcionario)),
                                widgets.MenuBox(
                                    "menu_funcionario_vinculado_{0}".format(eda.id),
                                    I(_class="fas fa-ellipsis-v"),
                                    widgets.MenuOption("Visualizar", **{
                                        "_class": "botao_visualizar_funcionario wave_on_click",
                                        "_data-id_funcionario": eda.id_funcionario,
                                    }),
                                    widgets.MenuOption("Editar Funcionário", **{
                                        "_class": "botao_editar_vinculo wave_on_click",
                                        "_href": "#_phanterpwa:/funcionarios/{0}/editar/?origem={1}".format(eda.id_funcionario, window.PhanterPWA.get_current_way())
                                    }),
                                    widgets.MenuOption("Editar Vínculo", **{
                                        "_class": "botao_editar_vinculo wave_on_click",
                                        "_href": "#_phanterpwa:/vinculos/editar/{0}/?retornar={1}".format(eda.id, window.PhanterPWA._get_way_from_url_hash())
                                    }),
                                    widgets.MenuOption("Revogar Vínculo", **{
                                        "_class": "botao_revogar_vinculo wave_on_click",
                                        "_data-id_vinculo": eda.id
                                    }),
                                    widgets.MenuOption("Conta de Acesso", **{
                                        "_class": "botao_prover_acesso_vinculo wave_on_click",
                                        "_data-id_funcionario": eda.id_funcionario
                                    }),
                                    *wg_renovar,
                                    onOpen=self.bind_menu_option
                                ),
                                **{"drag_and_drop": False}
                            )
                        )

                    card = DIV(
                        LABEL(
                            DIV(
                                IMG(_src=endereco_imagem_escola, _style="width:25px; height:25px; border-radius: 100%;position: absolute;top: 6px;"),
                                _style="display: inline-block;margin-right: 10px;height: 25px;width: 25px;position: relative;"
                            ),
                            x[1], _for="phanterpwa-card-panel-control-{0}".format(x[0])
                        ),
                        DIV(
                            DIV(
                                DIV(
                                    DIV(
                                        equipe_diretiva if bool_equipe_diretiva else "",
                                        BR() if bool_equipe_diretiva and bool_corpo_docente else "",
                                        corpo_docente if bool_corpo_docente else "",
                                        BR() if bool_equipe_diretiva and bool_equipe_de_apoio else "",
                                        equipe_de_apoio if bool_equipe_de_apoio else "",
                                        _class="p-row"
                                    ),
                                    _class="phanterpwa-card-panel-control-content"
                                ),
                                DIV(
                                    A(
                                        I(_class="fas fa-print"),
                                        **{
                                            "_class": "botao_imprimir_lista_alunos_turma icon_button",
                                            "_title": "Imprimir lista de alunos",
                                            "_href": window.PhanterPWA.XWAY("imprimir", "vinculos", self.arg1, self.arg2)
                                        }
                                    ),
                                    # DIV(
                                    #     I(_class="fas fa-user-graduate"),
                                    #     **{
                                    #         "_class": "botao_alunos icon_button actived",
                                    #         "_title": "Adicione alunos à turma",
                                    #         "_data-id_escola": self.id_escola,
                                    #         "_data-id_ano_letivo": self.ano_letivo,
                                    #         "_data-id_turma": data_turma.id
                                    #     }
                                    # ),
                                    # A(
                                    #     I(_class="fas fa-table"),
                                    #     **{
                                    #         "_class": "botao_diario_notas icon_button",
                                    #         "_title": "Diário de Notas da Turma",
                                    #         "_data-id_escola": self.id_escola,
                                    #         "_data-id_ano_letivo": self.ano_letivo,
                                    #         "_data-id_turma": data_turma.id,
                                    #         "_disabled": disabled,
                                    #         "_href": window.PhanterPWA.XWAY("diario-de-notas", self.id_escola, self.ano_letivo, data_turma.id, **{"_turma": data_turma.turma})
                                    #     }
                                    # ),
                                    # A(
                                    #     I(_class="fas fa-clipboard-list"),
                                    #     **{
                                    #         "_class": "botao_ficha_avaliativa icon_button",
                                    #         "_title": "Ficha Avaliativa",
                                    #         "_data-id_escola": self.id_escola,
                                    #         "_data-id_ano_letivo": self.ano_letivo,
                                    #         "_data-id_turma": data_turma.id,
                                    #         "_disabled": disabled,
                                    #         "_href": window.PhanterPWA.XWAY("ficha-avaliativa", self.id_escola, self.ano_letivo, data_turma.id, **{"_retornar": "turmas-detalhadas"})

                                    #     }
                                    # ),
                                    # DIV(
                                    #     I(_class="fas fa-calendar-check"),
                                    #     **{
                                    #         "_class": "botao_faltas icon_button",
                                    #         "_title": "Registro de Presença",
                                    #         "_data-id_escola": self.id_escola,
                                    #         "_data-id_ano_letivo": self.ano_letivo,
                                    #         "_data-id_turma": data_turma.id,
                                    #         "_disabled": disabled
                                    #     }
                                    # ),
                                    # DIV(
                                    #     I(_class="fas fa-chalkboard-teacher"),
                                    #     **{
                                    #         "_class": "botao_professores icon_button",
                                    #         "_title": "Disciplinas e seus respectivos professores",
                                    #         "_data-id_escola": self.id_escola,
                                    #         "_data-id_ano_letivo": self.ano_letivo,
                                    #         "_data-id_turma": data_turma.id,
                                    #         "_disabled": "disabled"
                                    #     }
                                    # ),
                                    # DIV(
                                    #     I(_class="fas fa-clock"),
                                    #     **{
                                    #         "_class": "botao_horario icon_button",
                                    #         "_title": "Horário da Turma",
                                    #         "_data-id_escola": self.id_escola,
                                    #         "_data-id_ano_letivo": self.ano_letivo,
                                    #         "_data-id_turma": data_turma.id,
                                    #         "_disabled": "disabled"
                                    #     }
                                    # ),
                                    _class="phanterpwa-card-panel-control-buttons"
                                ),
                                _class="phanterpwa-card-panel-control-wrapper has_buttons"
                            ),
                            _class="phanterpwa-card-panel-control-container"
                        ),
                        _id="phanterpwa-card-panel-control-{0}".format(x.id_escola),
                        _class="phanterpwa-card-panel-control"
                    )
                    xmls.append(card)
            xmls.append(DIV(_id="modal_prover_acesso_escola_container"))
            xmls.append(DIV(_id="modal_deletar_acesso_escola_container"))
            xmls.append(DIV(_id="modal_visualizar_escola_funcionario"))
            xmls.html_to("#content-vinculo-escola")

    def bind_menu_option(self):
        jQuery(
            ".botao_prover_acesso_vinculo"
        ).off(
            "click.botao_prover_acesso"
        ).on(
            "click.botao_prover_acesso",
            lambda: self.obter_lista_de_contas_disponiveis(this)
        )
        jQuery(
            ".botao_revogar_vinculo"
        ).off(
            "click.botao_revogar_acesso"
        ).on(
            "click.botao_revogar_acesso",
            lambda: self.modal_confirmar_deletar_vinculo(this)
        )
        jQuery(
            ".botao_visualizar_funcionario"
        ).off(
            "click.botao_visualizar_funcionario"
        ).on(
            "click.botao_visualizar_funcionario",
            lambda: self.get_visualizar_funcionario(this)
        )

    def obter_lista_de_contas_disponiveis(self, el):
        valor = jQuery(el).data("id_funcionario")
        window.PhanterPWA.GET(
            "api",
            "funcionarios",
            "contas-disponiveis",
            onComplete=lambda data, ajax_status: self.abrir_modal_prover_acesso(valor, data, ajax_status)
        )

    def abrir_modal_prover_acesso(self, id_funcionario, data, ajax_status):
        if ajax_status == "success":
            data_set = data.responseJSON.contas
            content = DIV(
                forms.FormWidget(
                    "prover_acesso",
                    "contas_disponiveis",
                    **{
                        "value": "",
                        "label": "Contas disponíveis",
                        "type": "select",
                        "form": "prover_acesso",
                        "data_set": data_set,
                        "_class": "p-col w1p100"
                    }
                ),
                _class="p-row"
            )
            footer = DIV(
                forms.SubmitButton(
                    "adicionar_prover_acesso",
                    "Usar a conta selecionada",
                    _class="btn-autoresize wave_on_click waves-phanterpwa"
                ),
                _class='phanterpwa-form-buttons-container'
            )
            self.modal_prover_acesso = modal.Modal(
                "#modal_prover_acesso_escola_container",
                **{
                    "title": "Definir a conta do funcionário que será usada no acesso",
                    "content": content,
                    "footer": footer,
                    "form": "prover_acesso"
                }
            )
            self.modal_prover_acesso.open()
            jQuery("#phanterpwa-widget-form-submit_button-adicionar_prover_acesso").off(
                "click.adicionar_prover_acesso"
            ).on(
                "click.adicionar_prover_acesso",
                lambda: self.sing_form_modal_funcionario(id_funcionario)
            )

    def sing_form_modal_funcionario(self, id_funcionario):
        window.PhanterPWA.GET(
            "api",
            "signforms",
            "phanterpwa-form-funcionarios",
            onComplete=lambda data, ajax_status: self.depois_de_assinar_modal_funcionario(
                data, ajax_status, id_funcionario)
        )

    def depois_de_assinar_modal_funcionario(self, data, ajax_status, id_funcionario):
        json = data.responseJSON
        id_auth_user = jQuery(".phanterpwa-widget-select-select[name='contas_disponiveis']").val()
        formdata = __new__(FormData())
        formdata.append(
            "csrf_token",
            json.csrf
        )
        formdata.append(
            "auth_user",
            id_auth_user
        )
        window.PhanterPWA.PUT(
            "api",
            "funcionario",
            "definir-conta",
            id_funcionario,
            form_data=formdata,
            onComplete=self.depois_de_definir_o_email_do_funcionario
        )

    def depois_de_definir_o_email_do_funcionario(self, data, ajax_status):
        if ajax_status == "success":
            self.modal_prover_acesso.close()
            dados = data.responseJSON.dados
            jQuery(".email_de_acesso_funcionario_{0}".format(dados.id_funcionario)).text(dados.email_de_acesso)
            jQuery(".papel_funcionario_{0}".format(dados.id_funcionario)).text(dados.papel)

    def modal_confirmar_deletar_vinculo(self, el):
        id_vinculo = jQuery(el).data("id_vinculo")

        content = DIV(
            P("Atenção, o vínculo do funcionário será deletado permanentemente, se ",
                "o mesmo possuir acesso especial ao sistema, este será revogado. Por exemplo,"
                " em caso de ", STRONG("professores"), ", ele não terá mais acesso às suas ", 
                "disciplinas e suas turmas"),
            P("Tem certeza que deseja deletar este vínculo?"),
            _class="p-row"
        )
        footer = DIV(
            forms.FormButton(
                "deletar_vinculo_sim",
                "Sim",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ),
            forms.FormButton(
                "deletar_vinculo_nao",
                "Não",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ),
            _class='phanterpwa-form-buttons-container'
        )
        self.modal_deletar_vinculo = modal.Modal(
            "#modal_deletar_acesso_escola_container",
            **{
                "title": "Deletar vínculo",
                "content": content,
                "footer": footer,
                "form": "deletar_vinculo"
            }
        )
        self.modal_deletar_vinculo.open()
        jQuery("#phanterpwa-widget-form-form_button-deletar_vinculo_sim").off(
            "click.adicionar_deletar_vinculo_sim"
        ).on(
            "click.adicionar_deletar_vinculo_sim",
            lambda: self._on_click_deletar_vinculo(id_vinculo)
        )
        jQuery("#phanterpwa-widget-form-form_button-deletar_vinculo_nao").off(
            "click.adicionar_deletar_vinculo_nao"
        ).on(
            "click.adicionar_deletar_vinculo_nao",
            lambda: self.modal_deletar_vinculo.close()
        )

    def _on_click_deletar_vinculo(self, id_vinculo):
        window.PhanterPWA.DELETE(
            "api",
            "vinculo",
            "deletar",
            id_vinculo,
            onComplete=self.depois_de_deletar_vinculo
        )
        self.modal_deletar_vinculo.close()

    def depois_de_deletar_vinculo(self, data, ajax_status):
        if ajax_status == "success":
            self.obter_vinculos()

    def get_visualizar_funcionario(self, widget_instance):
        id_funcionario = jQuery(widget_instance).data("id_funcionario")
        window.PhanterPWA.GET(
            "api",
            "funcionario",
            "visualizar",
            id_funcionario,
            onComplete=lambda data, ajax_status: self.modal_add_funcinario_visualizar(data, ajax_status)
        )

    def modal_add_funcinario_visualizar(self, data, ajax_status):
        json = data.responseJSON
        if ajax_status == "success":
            html_vinculos =  DIV(
                    DIV("VÍNCULOS DO FUNCIONÁRIO", _class="p-col w1p100 phanterpwa-widget-form-separator"),
                    P("O Funcionário não possui vínculos"),
                    _class="vinculos-conteudo"
                )
            if json.data.vinculos is not None and json.data.vinculos is not js_undefined:
                html_vinculos = DIV(
                    DIV("VÍNCULOS DO FUNCIONÁRIO", _class="p-col w1p100 phanterpwa-widget-form-separator"),
                    _class="vinculos-conteudo"
                )
                tabela = XTABLE(
                    "tabela_ficha_individual",
                    XTRH(
                        "tabela_ficha_individual_head",
                        "Ano Letivo",
                        "Escola",
                        "Atribuições",
                        "Data Limite",
                        "Autorização"
                    ),

                )
                for x in json.data.vinculos:
                    data_limite = "31/12/{0}".format(x.anos_letivo.ano)
                    if x.vinculos_funcionarios.data_limite is not None and x.vinculos_funcionarios.data_limite is not js_undefined:
                        data_limite = validations.format_iso_date_datetime(
                            x.vinculos_funcionarios.data_limite, "dd/MM/yyyy", "date"
                        )

                    tabela.append(
                        XTRD(
                            "tabela_ficha_individual_linhas_{0}".format(x.vinculos_funcionarios.id),
                            x.anos_letivo.ano,
                            x.escolas.nome,
                            x.profissoes.profissao,
                            data_limite,
                            x.vinculos_funcionarios.autorizacao,
                            **{"drag_and_drop": False}
                        )
                    )
                html_vinculos.append(tabela)
            content = DIV(
                forms.Form(json.data.funcionario),
                html_vinculos,
                _class="p-row"
            )
            self.modal_visualizar_funcionario = modal.Modal(
                "#modal_visualizar_escola_funcionario",
                **{
                    "title": CONCATENATE(DIV("Visualizar dados do funcionário"),
                        DIV(STRONG(json.data.nome))),
                    "content": content
                }
            )
            self.modal_visualizar_funcionario.open()

        else:
            window.PhanterPWA.flash("Não há alunos_visualizar matriculados para a série da turma")


class Vinculo(helpers.XmlConstructor):
    def __init__(self, index_instance, arg0, arg1, arg2, arg3):
        self.index_instance = index_instance
        self.arg0 = arg0
        self.arg1 = arg1
        self.arg2 = arg2
        self.arg3 = arg3
        vars_serialized = ""
        if self.index_instance.request.js_params is not None and self.index_instance.request.js_params is not js_undefined:
            vars_serialized = "?{0}".format(jQuery.param(self.index_instance.request.js_params))

        if arg0 == "editar":
            self.get_form_vinculo()
        elif arg0 == "visualizar":
            self.visualizar(id_vinculo, index_instance.request.params)
        elif arg0 == "novo" and str(arg1).isdigit() and (arg2 is None or arg2 is js_undefined):
            html = escolas.EscolherEscola(
                id_target="#content-vinculo",
                callback_link=lambda id_escola: "#_phanterpwa:/vinculos/novo/{0}/{1}{2}".format(self.arg1, id_escola,
                    vars_serialized)
            )
        elif arg0 == "novo" and str(arg1).isdigit() and str(arg2).isdigit() and (arg3 is None or arg3 is js_undefined):
            html = anos_letivos.EscolherAnoLetivo(
                id_target="#content-vinculo",
                callback_link=lambda ano: "#_phanterpwa:/vinculos/novo/{0}/{1}/{2}{3}".format(self.arg1, self.arg2, ano,
                    vars_serialized)
            )
        elif arg0 == "novo" and str(arg1).isdigit() and str(arg2).isdigit() and str(arg3).isdigit():
            self.id_funcionario = arg1
            self.id_escola = arg2
            self.ano_letivo = arg3
            self.id_atribuicao = window.PhanterPWA.Request.get_arg(4)
            self.autorizacao_especial = window.PhanterPWA.Request.get_param("autorizacao")
            self.get_form_vinculo(arg0, arg1, arg2)

    def lista_de_vinculos(self, json):
        logo = "{0}/api/escolas/{1}/image".format(
            window.PhanterPWA.ApiServer.remote_address,
            self.arg1
        )
        aviso = ""
        if json.aviso is not None and json.aviso is not js_undefined:
            aviso = H5(json.aviso, _style="color:red;")
        table = XTABLE(
            "lista_de_vinculos-table",
            XTRH(
                "lista_de_vinculos-table-head",
                *["Nome completo", "Vinculo Escolar", "Atribuição"],
                DIV(
                    I(_class="fas fa-plus"),
                    **{
                        "_class": "icon_button wave_on_click novo_vinculo",
                        "_data-id_funcionario": self.arg0,
                        "_data-id_escola": self.arg1,
                        "_data-ano_letivo": self.arg2
                    }
                )
            )
        )
        if json.data.vinculos is not js_undefined:
            cont_vinculos = 0
            cont_escola = 0
            for x in json.data.vinculos:
                cont_vinculos += 1
                botao_acao = DIV(
                    I(_class="fas fa-exclamation-circle"),
                    **{
                        "_href": "#",
                        "_class": "icon_button wave_on_click",
                        "_disabled": "disabled"
                    }
                )
                if x.autorizado:
                    cont_escola += 1
                    botao_acao = DIV(
                        I(_class="fas fa-edit"),
                        **{
                            "_class": "icon_button wave_on_click editar_vinculo_especifico",
                            "_data-id_vinculo": x.id,
                            "_data-id_funcionario": self.arg0,
                            "_data-id_escola": self.arg1,
                            "_data-ano_letivo": self.arg2
                        }
                    )
                table.append(
                    XTRD(
                        "lista_de_vinculos-table-data-{0}".format(x.id),
                        x.nome_completo,
                        x.nome_da_escola,
                        x.nome_atribuicao,
                        botao_acao,
                        **{"drag_and_drop": False}
                    )
                )

        if cont_vinculos == 1 and cont_escola == 1:
            titulo = H3("O FUNCIONÁRIO JÁ POSSUI UM VÍNCULO NESTA UNIDADE DE ENSINO NO ANO LETIVO ESPECIFICADO.")
        elif cont_vinculos == 1:
            titulo = H3(
                "O FUNCIONÁRIO POSSUI UM VÍNCULO EM OUTRA UNIDADE DE ENSINO ANO LETIVO ESPECIFICADO.",
                " VOCÊ NÃO TEM AUTORIZAÇÃO DE EDITÁ-LO, PORÉM PODE ADICIONAR UM NOVO VINCULO EM SUA ESCOLA."
            )
        else:
            titulo = H3(
                "O FUNCIONÁRIO POSSUI OUTROS VÍNCULOS EM OUTRA UNIDADE DE ENSINO NO ANO LETIVO ESPECIFICADO.",
                " VOCÊ NÃO TEM AUTORIZAÇÃO DE EDITÁ-LOS, PORÉM PODE ADICIONAR UM NOVO VINCULO EM SUA ESCOLA."
            )
            if cont_escola > 0:
                titulo = H3(
                    "O FUNCIONÁRIO POSSUI OUTROS VÍNCULOS EM OUTRA UNIDADE DE ENSINO NO ANO LETIVO ESPECIFICADO.",
                    " VOCÊ NÃO TEM AUTORIZAÇÃO DE EDITÁ-LOS, PORÉM PODE EDITAR OS VÍNCULOS EXISTENTES DE SUA UNIDADE",
                    " DE ENSINO OU ADICIONAR UM NOVO VINCULO EM SUA ESCOLA."
                )
                if cont_escola == cont_vinculos:
                    titulo = H3(
                        "O FUNCIONÁRIO JÁ POSSUI OUTROS VÍNCULOS EM SUA UNIDADE DE ENSINO NO ANO LETIVO ESPECIFICADO.",
                        " VOCÊ PODE EDITAR OS VÍNCULOS EXISTENTES OU ADICIONAR UM NOVO VINCULO."
                    )


        html = DIV(
            DIV(
                DIV(
                    DIV(
                        DIV(
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
                                    titulo,
                                    # aviso,
                                    _class="p-col w1p100 w4p70"
                                ),
                                _class="p-row"
                            ),
                            DIV(
                                DIV(
                                    DIV(
                                        DIV(preloaders.android, _style="width: 300px; height: 300px; overflow: hidden; margin: auto;"),
                                        _style="text-align:center; padding: 50px 0;"
                                    ),
                                    _id="lista_de_vinculos"),
                                _class="p-col w1p100",
                            ),
                            _class="p-row e-padding_20w"
                        ),
                        _class="phanterpwa-container-section"
                    ),
                    **{
                        "_id": "vinculo-funcionario-escola",
                        "_class": "p-row"
                    }
                ),
                _class="phanterpwa_tables_search_wrapper"
            ),
            _class='series-container phanterpwa-card-container'
        )
        html.html_to("#content-vinculo")


        table.html_to("#lista_de_vinculos")
        #self.binds()

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            if data.status == 202:
                self.lista_de_vinculos(json)
            else:
                self.process_data(json)

    def process_data(self, json):
        self.nome_funcionario = json.data.funcionario.nome_completo
        self.form = forms.Form(json.data.vinculo)

        logo = "{0}/api/escolas/{1}/image".format(
            window.PhanterPWA.ApiServer.remote_address,
            json.data.id_escola
        )
        aviso = ""
        if json.aviso is not None and json.aviso is not js_undefined:
            aviso = H5(json.aviso, _style="color:red;")

        titulo = P("CRIANDO UM NOVO VÍNCULO DO(A) FUNCIONÁRIO(A) ", STRONG(self.nome_funcionario), " NESTA UNIDADE DE ENSINO.")
        self.id_vinculo = None
        if json.id_vinculo is not None and json.id_vinculo is not js_undefined:
            self.id_vinculo = json.id_vinculo
            titulo = H3("O FUNCIONÁRIO JÁ POSSUI UM VÍNCULO NESTA UNIDADE DE ENSINO NO ANO LETIVO ESPECIFICADO.")

        html = DIV(
            DIV(
                DIV(
                    DIV(
                        DIV(
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
                                    titulo,
                                    P("OBSERVE QUE O VÍNCULO ESTÁ SENDO EFETUADO NO ANO LETIVO DE ", STRONG(self.ano_letivo, _style="text-style:bold"), ", CASO ESTE NÃO",
                                        " SEJA O ANO CORRETO ", A("CLIQUE AQUI.", _href=window.PhanterPWA.XWAY(
                                            "vinculo", self.arg0, self.arg1, self.arg2), _class="btn btn-inline")),
                                    aviso,
                                    _class="p-col w1p100 w4p70"
                                ),
                                _class="p-row"
                            ),
                            DIV(
                                DIV(
                                    DIV(
                                        DIV(preloaders.android, _style="width: 300px; height: 300px; overflow: hidden; margin: auto;"),
                                        _style="text-align:center; padding: 50px 0;"
                                    ),
                                    _id="formulario_vinculo_funcionario"),
                                _class="p-col w1p100",
                            ),
                            _class="p-row e-padding_20w"
                        ),
                        _class="phanterpwa-container-section"
                    ),
                    **{
                        "_id": "vinculo-funcionario-escola",
                        "_class": "p-row"
                    }
                ),
                _class="phanterpwa_tables_search_wrapper"
            ),
            _class='series-container phanterpwa-card-container'
        )
        html.html_to("#content-vinculo")


        self.form.html_to("#formulario_vinculo_funcionario")
        self.binds()

    def binds(self):
        forms.SignForm("#form-vinculos_funcionarios", after_sign=lambda: forms.ValidateForm("#form-vinculos_funcionarios"))
        
        jQuery(
            "#phanterpwa-widget-form-submit_button-vinculos_funcionarios"
        ).off(
            "click.submit_vinculos_button"
        ).on(
            "click.submit_vinculos_button",
            lambda: self.submit(this)
        )

    def get_form_vinculo(self):
        if self.arg0 == "novo" and str(self.arg1).isdigit() and str(self.arg2).isdigit() and str(self.arg3).isdigit():
            paramentros = dict(onComplete=self.after_get)
            if self.id_atribuicao is not None:
                paramentros['_atribuicao'] = self.id_atribuicao
            if self.autorizacao_especial is not None:
                paramentros['_autorizacao_especial'] = self.autorizacao_especial
            window.PhanterPWA.GET(
                "api",
                "vinculo",
                self.arg0,
                self.arg1,
                self.arg2,
                self.arg3,
                **paramentros
            )
        else:
            window.PhanterPWA.ApiServer.GET(**{
                'url_args': ["api", "vinculo", self.arg0, self.arg1],
                'onComplete': self.after_get,
                'get_cache': self.process_data
            })


    def submit(self, el):
        if jQuery(el)[0].hasAttribute("disabled"):
            window.PhanterPWA.flash(html=I18N("The form has errors!"))
        else:
            form_vinculo = jQuery("#form-vinculos_funcionarios")[0]
            form_vinculo = __new__(FormData(form_vinculo))
            if self.arg0 == "novo" and str(self.arg1).isdigit() and str(self.arg2).isdigit() and str(self.arg3).isdigit():
                window.PhanterPWA.ApiServer.POST(**{
                    'url_args': ["api", "vinculo", self.arg0, self.arg1, self.arg2, self.arg3],
                    'form_data': form_vinculo,
                    'onComplete': self.after_submit
                })
            elif self.arg0 == "editar" and str(self.arg1).isdigit():
                window.PhanterPWA.ApiServer.PUT(**{
                    'url_args': ["api", "vinculo", self.arg0, self.arg1],
                    'form_data': form_vinculo,
                    'onComplete': self.after_submit
                })


    def after_submit(self, data):
        forms.SignForm("#form-vinculos_funcionarios")
        self.form.process_api_response(data)
        if data.status == 200:
            if window.PhanterPWA.Request.get_param("retornar") is not None:
                window.PhanterPWA.open_way(window.PhanterPWA.Request.get_param("retornar"))
            else:
                window.PhanterPWA.open_way("funcionarios/")


__pragma__('nokwargs')
