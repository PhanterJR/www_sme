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
I = helpers.XmlConstructor.tagger("i")
A = helpers.XmlConstructor.tagger("a")
SPAN = helpers.XmlConstructor.tagger("span")
FORM = helpers.XmlConstructor.tagger("form")
UL = helpers.XmlConstructor.tagger("ul")
LI = helpers.XmlConstructor.tagger("li")
STRONG = helpers.XmlConstructor.tagger("strong")
IMG = helpers.XmlConstructor.tagger("img", True)
INPUT = helpers.XmlConstructor.tagger("input", True)
TABLE = helpers.XmlConstructor.tagger("table")
TR = helpers.XmlConstructor.tagger("tr")
TD = helpers.XmlConstructor.tagger("td")
TH = helpers.XmlConstructor.tagger("th")
H1 = helpers.XmlConstructor.tagger("h1")
H2 = helpers.XmlConstructor.tagger("h2")
H3 = helpers.XmlConstructor.tagger("h3")
H4 = helpers.XmlConstructor.tagger("h4")
H5 = helpers.XmlConstructor.tagger("h5")
HR = helpers.XmlConstructor.tagger("hr", True)
P = helpers.XmlConstructor.tagger("p")
LABEL = helpers.XmlConstructor.tagger("label")
XSECTION = helpers.XSECTION
XTABLE = widgets.Table
XML = helpers.XML
XTRD = widgets.TableData
XTRH = widgets.TableHead


__pragma__('kwargs')


class Index(gatehandler.Handler):
    @decorators.check_authorization(lambda: window.PhanterPWA.logged())
    def initialize(self):
        arg0 = window.PhanterPWA.Request.get_arg(0)
        arg1 = window.PhanterPWA.Request.get_arg(1)
        arg2 = window.PhanterPWA.Request.get_arg(2)
        if arg0 == "matricula":
            self.Matriculas = Matricula()
            self.Matriculas.initialize()
        elif arg0 == "total-de-matriculados":
            if window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME"]):
                if arg1 is None or arg1 is js_undefined:
                    arg1 = "todos"
                if arg2 is None or arg2 is js_undefined:
                    html = anos_letivos.EscolherAnoLetivo(
                        id_target="#content-diario_de_notas",
                        callback_link=lambda ano: "#_phanterpwa:/imprimir/total-de-matriculados/{0}/{1}".format(arg1, ano)
                    )
                else:
                    self.TotalDeMatriculados = TotalDeMatriculados(self, arg1, arg2)
            else:
                if arg0 is None or arg0 is js_undefined:
                    html = escolas.EscolherEscola(
                        id_target="#content-diario_de_notas",
                        callback_link=lambda id_escola: "#_phanterpwa:/imprimir/total-de-matriculados/{0}".format(id_escola)
                    )
                elif str(arg0).isdigit() and (arg1 is None or arg1 is js_undefined):
                    html = anos_letivos.EscolherAnoLetivo(
                        id_target="#content-diario_de_notas",
                        callback_link=lambda ano: "#_phanterpwa:/imprimir/total-de-matriculados/{0}/{1}".format(arg1, ano)
                    )
                else:
                    self.TotalDeMatriculados = TotalDeMatriculados(self, arg1, arg2)
        elif arg0 == "lista-transporte-alunos":
            if window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME"]):
                if arg1 is None or arg1 is js_undefined:
                    arg1 = "todos"
                if arg2 is None or arg2 is js_undefined:
                    html = anos_letivos.EscolherAnoLetivo(
                        id_target="#content-diario_de_notas",
                        callback_link=lambda ano: "#_phanterpwa:/imprimir/lista-transporte-alunos/{0}/{1}".format(arg1, ano)
                    )
                else:
                    self.AlunosTransporte = AlunosTransporte(self, arg1, arg2)
            else:
                if arg0 is None or arg0 is js_undefined:
                    html = escolas.EscolherEscola(
                        id_target="#content-diario_de_notas",
                        callback_link=lambda id_escola: "#_phanterpwa:/imprimir/lista-transporte-alunos/{0}".format(id_escola)
                    )
                elif str(arg0).isdigit() and (arg1 is None or arg1 is js_undefined):
                    html = anos_letivos.EscolherAnoLetivo(
                        id_target="#content-diario_de_notas",
                        callback_link=lambda ano: "#_phanterpwa:/imprimir/lista-transporte-alunos/{0}/{1}".format(arg1, ano)
                    )
                else:
                    self.AlunosTransporte = AlunosTransporte(self, arg1, arg2)
        elif arg0 == "lista-de-novatos":
            self.ListaDeNovatos = ListaDeNovatos(self, arg1)
        else:
            html = CONCATENATE(
                DIV(
                    DIV(
                        DIV(
                            DIV("CENTRAL DE IMPRESSÃO", _class="phanterpwa-breadcrumb"),
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
                        _id="content-matriculas-imprimir",
                        _class='p-row card e-padding_20'
                    ),

                    _class="phanterpwa-container p-container"
                )
            )
            html.html_to("#main-container")
            BackButton = left_bar.LeftBarButton(
                "back_localizar_socios",
                "Voltar",
                I(_class="fas fa-arrow-circle-left"),
                **{"_phanterpwa-way": "restrito",
                    "position": "top",
                    "ways": [lambda r: True if r.startswith("socios") or r.startswith("socios/") else False]}
            )

            window.PhanterPWA.Components['left_bar'].add_button(BackButton)


class Matricula():
    @decorators.check_authorization(lambda: window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME", "Administrador Master Escola"]))
    def initialize(self):
        self.id_matricula = window.PhanterPWA.Request.get_arg(1)
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("IMPRIMIR", _class="phanterpwa-breadcrumb"),
                        DIV("MATRÍCULA", _class="phanterpwa-breadcrumb"),
                        _class="phanterpwa-breadcrumb-wrapper"
                    ),
                    _class="p-container"),
                _class='title_page_container card'
            ),
            DIV(
                DIV(
                    DIV(
                        DIV(
                            DIV(preloaders.android, _style="width: 300px; height: 300px; overflow: hidden; margin: auto;"),
                            _style="text-align:center; padding: 50px 0;"
                        ),
                        _id="content-matriculas-imprimir",
                        _class='p-row card e-padding_20'
                    ),
                    _class="phanterpwa-container p-container"
                ),
                _id="documentos-content",
            )
        )
        html.html_to("#main-container")
        BackButton = left_bar.LeftBarButton(
            "back_imprimir_matricula",
            "Voltar",
            I(_class="fas fa-arrow-circle-left"),
            **{"_phanterpwa-way": "area-do-servidor",
                "position": "top",
                "ways": [lambda r: True if r.startswith("documentos") or r.startswith("documentos/") else False]}
        )
        window.PhanterPWA.Components['left_bar'].add_button(BackButton)
        self._get_data()

    def after_get(self, data, ajax_status):
        json = data.responseJSON
        id_escola = json.data.id_escola
        nome_escola = json.data.nome_escola
        dados_escola = json.data.dados_escola
        novato = json.data.matricula.novato
        ano_letivo = json.data.ano_letivo
        nome_do_aluno = json.data.matricula.nome_do_aluno
        ano_anterior = json.data.ano_anterior
        naturalidade = json.data.naturalidade
        nome_do_pai = json.data.matricula.nome_do_pai
        prof_pai = json.data.matricula.prof_pai
        nome_da_mae = json.data.matricula.nome_da_mae
        prof_mae = json.data.matricula.prof_mae
        endereco = json.data.endereco
        cidade = json.data.cidade
        serie_anterior = json.data.serie_anterior
        serie_subsequente = json.data.serie_subsequente
        data_assinatura = json.data.data_assinatura
        responsavel = json.data.responsavel
        resultado = json.data.resultado
        resultado_anterior = json.data.matricula.resultado_anterior
        sexo = json.data.sexo
        nome_autoridade = json.data.nome_autoridade
        cargo_autoridade = json.data.cargo_autoridade
        data_nasc = json.data.data_nasc
        data_mat = json.data.matricula.data_mat
        data_de_nascimento = validations.format_iso_date_datetime(
            data_nasc, "dd/MM/yyyy", "date"
        )
        data_assinatura = json.data.data_matricula_formatada
        nome_do_aluno_h = "Nome do(a) Aluno(a)"
        P1 = " o(a) aluno(a) estudou "
        if sexo == "Masculino" or sexo == "1" or sexo == 1:
            nome_do_aluno_h = "Nome do Aluno"
            P1 = " o aluno estudou "
        elif sexo == "Feminino" or sexo == "2" or sexo == 2:
            nome_do_aluno_h = "Nome da Aluna"
            P1 = " a aluna estudou "
        if serie_subsequente.startswith('Creche') or "SÉRIE" in serie_subsequente.upper():
            P4 = " na "
        else:
            P4 = " no "  
        if serie_anterior is not None and  ano_letivo is not None and resultado is not None:
            if serie_anterior.startswith('Creche') or "SÉRIE" in serie_anterior.upper():
                P2 = " na "
            else:
                P2 = " no "  
            anunciado = CONCATENATE(
                DIV(
                    P("No ano letivo de ", STRONG(ano_anterior), P1, P2, STRONG(serie_anterior), " e foi considerado ",
                        STRONG(resultado_anterior), " portanto tendo direito a matricular-se ", P4, STRONG(serie_subsequente),
                        ". Ficando sob a responsabilidade de ", STRONG(responsavel), "."
                    ),
                    _class="p-row"
                )
            )
            if novato:
                titulo_resumo = H4("Nova Matrícula para o Ano Letivo de ", ano_letivo)
            else:
                titulo_resumo = H4("Matrícula renovada para o Ano Letivo de ", ano_letivo)
            resumo = XSECTION(
                LABEL(
                    "RESUMO"
                ),
                titulo_resumo,
                TABLE(
                    TR(
                        TD(STRONG("Série Anterior: "), serie_anterior),
                        TD(STRONG("Série Atual: "), serie_subsequente)
                    ),
                    _class="tudo_centralizado"
                )
            )
        else:
            if novato:
                anunciado = CONCATENATE(
                    DIV(
                        P("Nova matrícula efetuada para o ano letivo de ", STRONG(ano_letivo), P4, STRONG(serie_subsequente),
                            ". Ficando sob a responsabilidade de ", STRONG(responsavel), "."
                        ),
                        _class="p-row"
                    )
                )
                titulo_resumo = H4("Nova Matrícula para o Ano Letivo de ", STRONG(ano_letivo))
            else:
                anunciado = CONCATENATE(
                    DIV(
                        P("Matrícula renovada para o ano letivo de ", STRONG(ano_letivo), P4, STRONG(serie_subsequente),
                            ". Ficando sob a responsabilidade de ", STRONG(responsavel), "."
                        ),
                        _class="p-row"
                    )
                )
                titulo_resumo = H4("Matrícula renovada para o Ano Letivo de ", STRONG(ano_letivo))
            resumo = XSECTION(
                LABEL(
                    "RESUMO"
                ),
                titulo_resumo,
                TABLE(
                    TR(
                        TD(STRONG("Série Anterior: "), "-"),
                        TD(STRONG("Série Atual: "), serie_subsequente)
                    ),
                    _class="tudo_centralizado"
                )
            )


        requerimento = P(
            "Venho requerer a V. Sª que se digne mandar matricular o aluno supracitado ",
            P4, STRONG(serie_subsequente), " deste estabelecimento, ficando sob a responsabilidade de ", STRONG(responsavel),
            " declarando estar obrigado e de acordo com todas as exigências constantes no", STRONG(" Regimento Escolar"),
            " deste Estabelecimento e outras normas estabelecidas pelo diretor. Nestes termos pede deferimento."
        )
        logo = "{0}/api/escolas/{1}/image".format(
            window.PhanterPWA.ApiServer.remote_address,
            id_escola
        )
        if ajax_status == "success":
            folhas_content = DIV(
                DIV(
                    DIV(
                        DIV(
                            DIV(
                                DIV(
                                    DIV(
                                        DIV(
                                            IMG(_src="/static/{0}/images/cabecalho_background.jpg".format(
                                                window.PhanterPWA.VERSIONING)),
                                            _class="back",
                                        ),
                                        DIV(
                                            IMG(_src=logo, _style="width: 120px; height: 120px;"),
                                            _class="front",
                                        ),
                                        _class="sme_cabecalho_sme"
                                    ),
                                    DIV(H3(nome_escola), _class="sme_cabecalho_sme_nome_escola"),
                                    DIV(H5(dados_escola), _class="sme_cabecalho_sme_dados_escola"),
                                    DIV(H2("FICHA DE MATRÍCULA"), _class="sme_cabecalho_titulo_documento"),
                                    DIV(
                                        DIV(
                                            TABLE(
                                                TR(TD(STRONG(nome_do_aluno_h,": "), nome_do_aluno, _colspan=1)),
                                                TR(
                                                    TD(STRONG("Data de Nascimento: "), data_de_nascimento),
                                                    TD(STRONG("Naturalidade", ": "), naturalidade)
                                                ),
                                                TR(
                                                    TD(STRONG("Nome do pai: "), nome_do_pai, _colspan=None if prof_pai else 1),
                                                    TD(STRONG("Profissão: "), prof_pai) if prof_pai else ""
                                                ),
                                                TR(
                                                    TD(STRONG("Nome da mãe: "), nome_da_mae, _colspan=None if prof_mae else 1),
                                                    TD(STRONG("Profissão: "), prof_mae) if prof_mae else ""
                                                ),
                                                TR(TD(STRONG("Endereço: "), endereco, _colspan=1))
                                            ),
                                            _class="p-row"
                                        ),
                                        DIV(
                                            anunciado,
                                            _class="p-row"
                                        ),
                                        DIV(
                                            resumo,
                                            _class="p-row"
                                        ),
                                        DIV(
                                            cidade, ", ", data_assinatura,
                                            _class="p-row  tudo_centralizado cidade_e_data"
                                        ),
                                        DIV(
                                            TABLE(
                                                TR(
                                                    TD("___________________________________________"),
                                                    TD("___________________________________________")
                                                ),
                                                TR(
                                                    TD(nome_autoridade),
                                                    TD(responsavel)
                                                ),
                                                TR(
                                                    TD(cargo_autoridade, _class="miudinho"),
                                                    TD("Responsável", _class="miudinho")
                                                ),
                                                _class="tudo_centralizado"
                                            ),
                                            _class="p-row"
                                        ),
                                        _class="sme_documento_conteudo"
                                    ),
                                    DIV(
                                        DIV(
                                            IMG(_src="/static/{0}/images/cabecalho_background.jpg".format(
                                                window.PhanterPWA.VERSIONING)),
                                            _class="back",
                                        ),
                                        DIV(
                                            IMG(_src=logo, _style="width: 120px; height: 120px;"),
                                            _class="front",
                                        ),
                                        _class="sme_cabecalho_sme"
                                    ),
                                    DIV(H3(nome_escola), _class="sme_cabecalho_sme_nome_escola"),
                                    DIV(H5(dados_escola), _class="sme_cabecalho_sme_dados_escola"),
                                    DIV(H2("FICHA DE REQUERIMENTO"), _class="sme_cabecalho_titulo_documento"),
                                    DIV(
                                        DIV(
                                            TABLE(
                                                TR(TD(STRONG(nome_do_aluno_h, ": "), nome_do_aluno, _colspan=1)),
                                                TR(
                                                    TD(STRONG("Data de Nascimento", ": "), data_de_nascimento),
                                                    TD(STRONG("Naturalidade", ": "), naturalidade)
                                                ),
                                                TR(
                                                    TD(STRONG("Nome do pai", ": "), nome_do_pai, _colspan=None if prof_pai else 1),
                                                    TD(STRONG("Profissão", ": "), prof_pai) if prof_pai else ""
                                                ),
                                                TR(
                                                    TD(STRONG("Nome da mãe", ": "), nome_da_mae, _colspan=None if prof_mae else 1),
                                                    TD(STRONG("Profissão", ": "), prof_mae) if prof_mae else ""
                                                ),
                                                TR(TD(STRONG("Endereço", ": "), endereco, _colspan=1))
                                            ),
                                            _class="p-row"
                                        ),
                                        DIV(
                                            requerimento,
                                            _class="p-row"
                                        ),
                                        DIV(
                                            cidade, ", ", data_assinatura,
                                            _class="p-row tudo_centralizado cidade_e_data"
                                        ),
                                        DIV(
                                            TABLE(
                                                TR(
                                                    TD("___________________________________________")
                                                ),
                                                TR(
                                                    TD(responsavel)
                                                ),
                                                TR(
                                                    TD("Responsável", _class="miudinho")
                                                ),
                                                _class="tudo_centralizado"
                                            ),
                                            _class="p-row"
                                        ),
                                        _class="sme_documento_conteudo"
                                    ),
                                    _id="pagina_{0}_matricula".format(self.id_matricula),
                                    _class="p-row"
                                ),
                                _class="a4"
                            ),
                            _class="phanterpwa-media-print"
                        ),
                    ),

                    _class="phanterpwa-paper-a4"
                ),
                _class="folhas_para_imprimir phanterpwa-media-print-container"
            )
            folhas_content.html_to("#documentos-content")

    def _get_data(self):
        window.PhanterPWA.GET(
            "api",
            "imprimir",
            "matricula",
            self.id_matricula,
            onComplete=self.after_get
        )


class TotalDeMatriculados():
    def __init__(self, parent, id_escola, ano_letivo):
        self.parent = parent
        self.id_escola = id_escola
        self.ano_letivo = ano_letivo
        self.initialize()

    @decorators.check_authorization(lambda: window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME"]))    
    def initialize(self):
        self.id_matricula = window.PhanterPWA.Request.get_arg(1)
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("IMPRIMIR", _class="phanterpwa-breadcrumb"),
                        DIV("TOTAL DE MATRÍCULAS", _class="phanterpwa-breadcrumb"),
                        _class="phanterpwa-breadcrumb-wrapper"
                    ),
                    _class="p-container"),
                _class='title_page_container card'
            ),
            DIV(
                DIV(
                    DIV(
                        DIV(
                            DIV(preloaders.android, _style="width: 300px; height: 300px; overflow: hidden; margin: auto;"),
                            _style="text-align:center; padding: 50px 0;"
                        ),
                        _id="content-matriculas-imprimir",
                        _class='p-row card e-padding_20'
                    ),
                    _class="phanterpwa-container p-container"
                ),
                _id="documentos-content",
            ),
            DIV(_id="documento-lista-alunos"),
            DIV(_id="documento-lista-desistentes"),
            DIV(_id="documento-lista-transferidos"),
            DIV(_id="documento-lista-novatos"),
        )
        html.html_to("#main-container")
        BackButton = left_bar.LeftBarButton(
            "back_imprimir_matricula",
            "Voltar",
            I(_class="fas fa-arrow-circle-left"),
            **{"_phanterpwa-way": "area-do-servidor",
                "position": "top",
                "ways": [lambda r: True if r.startswith("documentos") or r.startswith("documentos/") else False]}
        )
        window.PhanterPWA.Components['left_bar'].add_button(BackButton)
        self._get_data()

    def after_get(self, data, ajax_status):
        json = data.responseJSON
        total_geral = json.data.total_geral
        desistentes = json.data.conta_alunos_desistentes
        transferidos = json.data.conta_alunos_transferidos
        novatos = json.data.total_novatos

        # data_assinatura = json.data.data_matricula_formatada

        logo = "{0}/api/escolas/{1}/image".format(
            window.PhanterPWA.ApiServer.remote_address,
            12
        )
        html_escolas = DIV(
            _class="p-row"
        )

        for y in dict(json.data.total_alunos_por_escola).keys():
            x = json.data.total_alunos_por_escola[y]
            html_escolas.append(
                CONCATENATE(
                    DIV(
                        H4(x.nome_escola),
                        DIV(
                            DIV(
                                DIV(STRONG("EFETIVADOS: "), x.total_alunos, " (", STRONG(x.total_novatos), " novatos)",
                                    _class="p-col w1p100 w3p100"
                                )
                            ),
                            DIV(STRONG("DESISTENTES: "), x.total_desistetes, _class="p-col w1p100 w3p50"),
                            DIV(STRONG("TRANSFERIDOS: "), x.total_transferidos, _class="p-col w1p100 w3p50"),
                            _class="p-row"
                        ),
                        _style="padding: 5px; border-radius: 5px; border: 1px solid grey;"
                    ),
                    HR()
                )
            )
        if ajax_status == "success":
            folhas_content = DIV(
                DIV(
                    DIV(
                        DIV(
                            DIV(
                                DIV(
                                    DIV(
                                        DIV(
                                            IMG(_src="/static/{0}/images/cabecalho_background.jpg".format(
                                                window.PhanterPWA.VERSIONING)),
                                            _class="back",
                                        ),
                                        DIV(
                                            IMG(_src=logo),
                                            _class="front",
                                        ),
                                        _class="sme_cabecalho_sme"
                                    ),
                                    DIV(H2("RESUMO DAS MATRÍCULAS EFETIVADAS"), _class="sme_cabecalho_titulo_documento"),
                                    DIV(
                                        XSECTION(
                                            LABEL("Total de Alunos matriculados"),
                                            DIV(
                                                DIV(
                                                    DIV(
                                                        DIV(STRONG("EFETIVADOS: "), total_geral, _class="p-col w1p100 w3p100"),
                                                        P("As matrículas efetivadas acima são descontanto os desistentes e transferidos.",
                                                            " Das mastrículas efetivadas, ", STRONG(novatos), " matrículas são de novatos."
                                                        )
                                                    ),
                                                    DIV(STRONG("DESISTENTES: "), desistentes, _class="p-col w1p100 w3p50"),
                                                    DIV(STRONG("TRANSFERIDOS: "), transferidos, _class="p-col w1p100 w3p50"),

                                                    _class="p-row"
                                                ),
                                                _class="e-padding_10"
                                            )
                                        ),
                                        XSECTION(
                                            LABEL("Matrículas distribuidas por escola"),
                                            DIV(
                                                html_escolas,
                                                _class="e-padding_10"
                                            )
                                        ),
                                        _class="sme_documento_conteudo"
                                    ),
                                    _id="pagina_1_matricula",
                                    _class="p-row"
                                ),
                                _class="a4"
                            ),
                            _class="phanterpwa-media-print"
                        ),
                    ),

                    _class="phanterpwa-paper-a4"
                ),
                _class="folhas_para_imprimir phanterpwa-media-print-container"
            )
            folhas_content.html_to("#documentos-content")
            lista_escola = []
            dict_escola = {}
            html_lista_novatos = DIV(
                _class="p-row"
            )
            for a in json.data.alunos_novatos:
                data_de_nascimento = validations.format_iso_date_datetime(
                    a.data_de_nascimento, "dd/MM/yyyy", "date"
                )
                if not a.escola in lista_escola:
                    lista_escola.append(a.escola)
                    html_lista_novatos.append(
                        H3(a.escola)
                    )
                    table = XTABLE(
                        "tabela_escola_{0}".format(a.id_escola),
                        XTRH(
                            "tabela_th_escola_{0}".format(a.id_escola),
                            "Nome",
                            "Data de Nascimento",
                            "Nome da Mãe",
                            "Endereço",
                        ),
                        TR(
                            TH(a.serie, _colspan=4, _style="background-color: grey; color: white;")
                        )
                    )
                    html_lista_novatos.append(table)
                    html_lista_novatos.append(HR())
                    dict_escola[a.id_escola] = {"serie": [a.serie]}
                else:
                    if not a.serie in dict_escola[a.id_escola]["serie"]:
                        dict_escola[a.id_escola]["serie"].append(a.serie)
                        table.append(
                            TR(
                                TH(a.serie, _colspan=4, _style="background-color: grey; color: white;")
                            )
                        )
                table.append(
                    XTRH(
                        "tabela_aluno_escola_{0}".format(a.matricula),
                        a.nome,
                        data_de_nascimento,
                        a.nome_da_mae,
                        a.endereco
                    )
                )                    


            folha2_content = DIV(
                DIV(
                    DIV(
                        DIV(
                            DIV(
                                DIV(
                                    DIV(
                                        DIV(
                                            IMG(_src="/static/{0}/images/cabecalho_background.jpg".format(
                                                window.PhanterPWA.VERSIONING)),
                                            _class="back",
                                        ),
                                        DIV(
                                            IMG(_src=logo),
                                            _class="front",
                                        ),
                                        _class="sme_cabecalho_sme"
                                    ),
                                    DIV(H2("LISTA DE ALUNOS NOVATOS POR ESCOLA E SÉRIE"), _class="sme_cabecalho_titulo_documento"),
                                    DIV(
                                        html_lista_novatos,
                                        _class="sme_documento_conteudo"
                                    ),
                                    _class="p-row"
                                ),
                                _class="a4"
                            ),
                            _class="phanterpwa-media-print"
                        ),
                    ),

                    _class="phanterpwa-paper-a4"
                ),
                _class="folhas_para_imprimir phanterpwa-media-print-container"
            )
            folha2_content.html_to("#documento-lista-novatos")

    def _get_data(self):
        window.PhanterPWA.GET(
            "api",
            "estatisticas",
            "matriculas",
            self.id_escola,
            self.ano_letivo,
            onComplete=self.after_get
        )


class AlunosTransporte():
    def __init__(self, parent, id_escola, ano_letivo):
        self.parent = parent
        self.id_escola = id_escola
        self.ano_letivo = ano_letivo
        self.initialize()

    @decorators.check_authorization(lambda: window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME"]))    
    def initialize(self):
        self.id_matricula = window.PhanterPWA.Request.get_arg(1)
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("IMPRIMIR", _class="phanterpwa-breadcrumb"),
                        DIV("LISTA DE ALUNOS TRANSPORTE", _class="phanterpwa-breadcrumb"),
                        _class="phanterpwa-breadcrumb-wrapper"
                    ),
                    _class="p-container"),
                _class='title_page_container card'
            ),
            DIV(
                DIV(
                    DIV(
                        DIV(
                            DIV(preloaders.android, _style="width: 300px; height: 300px; overflow: hidden; margin: auto;"),
                            _style="text-align:center; padding: 50px 0;"
                        ),
                        _id="content-matriculas-imprimir",
                        _class='p-row card e-padding_20'
                    ),
                    _class="phanterpwa-container p-container"
                ),
                _id="documentos-content",
            ),
            DIV(_id="documento-lista-alunos"),
            DIV(_id="documento-lista-desistentes"),
            DIV(_id="documento-lista-transferidos"),
            DIV(_id="documento-lista-novatos"),
        )
        html.html_to("#main-container")
        BackButton = left_bar.LeftBarButton(
            "back_imprimir_matricula",
            "Voltar",
            I(_class="fas fa-arrow-circle-left"),
            **{"_phanterpwa-way": "area-do-servidor",
                "position": "top",
                "ways": [lambda r: True if r.startswith("documentos") or r.startswith("documentos/") else False]}
        )
        window.PhanterPWA.Components['left_bar'].add_button(BackButton)
        self._get_data()

    def after_get(self, data, ajax_status):
        json = data.responseJSON

        # data_assinatura = json.data.data_matricula_formatada

        logo = "{0}/api/escolas/{1}/image".format(
            window.PhanterPWA.ApiServer.remote_address,
            12
        )

        if ajax_status == "success":

            lista_escola = []
            dict_escola = {}
            html_lista_novatos = DIV(
                _class="p-row"
            )
            for a in json.data.alunos:
                data_de_nascimento = validations.format_iso_date_datetime(
                    a.data_de_nascimento, "dd/MM/yyyy", "date"
                )
                if not a.escola in lista_escola:
                    lista_escola.append(a.escola)
                    html_lista_novatos.append(
                        H3(a.escola)
                    )
                    table = XTABLE(
                        "tabela_escola_{0}".format(a.id_escola),
                        XTRH(
                            "tabela_th_escola_{0}".format(a.id_escola),
                            "Nome",
                            "Data de Nascimento",
                            "Sexo",
                            "Cor/Raça",
                            "Localização",
                            "Ensino",
                            "Turno",
                            "CPF",
                            "Responsável",
                            "Grau de Parentesto",
                            "Endereço",
                            "Latitude",
                            "Longitude"
                        )
                        # TR(
                        #     TH(a.serie, _colspan=4, _style="background-color: grey; color: white;")
                        # )
                    )
                    html_lista_novatos.append(table)
                    html_lista_novatos.append(HR())
                    dict_escola[a.id_escola] = {"serie": [a.serie]}
                else:
                    if not a.serie in dict_escola[a.id_escola]["serie"]:
                        dict_escola[a.id_escola]["serie"].append(a.serie)
                        # table.append(
                        #     TR(
                        #         TH(a.serie, _colspan=4, _style="background-color: grey; color: white;")
                        #     )
                        # )
                table.append(
                    XTRD(
                        "tabela_aluno_escola_{0}".format(a.matricula),
                        a.aluno,
                        data_de_nascimento,
                        a.sexo,
                        a.raca,
                        a.localizacao,
                        a.ensino,
                        a.turno,
                        a.cpf,
                        a.nome_do_responsavel,
                        a.grau_parentesto,
                        a.endereco,
                        "",
                        ""
                    )
                )                    

            folha2_content = DIV(
                DIV(
                    DIV(
                        DIV(
                            DIV(
                                DIV(
                                    DIV(H2("LISTA DE ALUNOS TRANSPORTE POR ESCOLA"), _class="sme_cabecalho_titulo_documento"),
                                    DIV(
                                        html_lista_novatos,
                                        _class="sme_documento_conteudo"
                                    ),
                                    _class="p-row"
                                ),
                                _class="p-container extend"
                            ),
                        ),
                    ),
                ),
                _class="folhas_para_imprimir phanterpwa-media-print-container"
            )
            folha2_content.html_to("#content-matriculas-imprimir")

    def _get_data(self):
        window.PhanterPWA.GET(
            "api",
            "estatisticas",
            "transporte",
            self.id_escola,
            self.ano_letivo,
            onComplete=self.after_get
        )

__pragma__('nokwargs')
