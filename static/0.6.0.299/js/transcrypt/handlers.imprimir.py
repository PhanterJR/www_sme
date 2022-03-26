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
TBODY = helpers.XmlConstructor.tagger("tbody")
THEAD = helpers.XmlConstructor.tagger("thead")
CANVAS = helpers.XmlConstructor.tagger("canvas")
H5 = helpers.XmlConstructor.tagger("h5")
HR = helpers.XmlConstructor.tagger("hr", True)
P = helpers.XmlConstructor.tagger("p")
LABEL = helpers.XmlConstructor.tagger("label")
IFRAME = helpers.XmlConstructor.tagger("iframe")
XSECTION = helpers.XSECTION
XTABLE = widgets.Table
XML = helpers.XML
BR = helpers.XmlConstructor.tagger("br", True)
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
        elif arg0 == "turma":
            self.Turma = Turma()
        elif arg0 == "declaracao-de-matricula":
            self.DeclaracaoDeMatricula = DeclaracaoDeMatricula()
        elif arg0 == "questionario-social":
            self.QuestionarioSocial = QuestionarioSocial()
        elif arg0 == "declaracao-de-transferencia":
            self.DeclaracaoDeTransferencia = DeclaracaoDeTransferencia()
        elif arg0 == "ficha-individual-do-aluno":
            self.FichaIndividualDoAluno = FichaIndividualDoAluno()
        elif arg0 == "ata-de-resultados-finais":
            self.AtaDeResultadosFinais = AtaDeResultadosFinais()
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
                ),

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
    @decorators.check_authorization(lambda: window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME", "Administrador Master Escola", "Coordenação SME"]))
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
            ),
            DIV(_id="botoes_de_comando_impressao")
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
        self.id_escola = json.data.id_escola
        self.ano_letivo = json.data.ano_letivo
        self.id_aluno = json.data.matricula.aluno

        now = __new__(Date().getTime())

        html_botoes = CONCATENATE(
            widgets.FloatMenu(
                "menu_impressao",
                I(_class="fas fa-ellipsis-v"),
                widgets.FloatButton(
                    I(
                        DIV(
                            DIV(
                                SPAN(I(_class="fas fa-user-graduate"), _class="icombine-container-first"),
                                SPAN(I(_class="fas fa-plus"), _class="icombine-container-last"),
                                _class="icombine-container"
                            ),
                            _class="phanterpwa-snippet-icombine"
                        ),
                    ),
                    _class="botao_matricular",
                    _title="Matricular outro aluno",
                    _href=window.PhanterPWA.XWAY(
                        "matricular",
                        self.id_escola,
                        self.ano_letivo
                    )
                ),
                widgets.FloatButton(
                    I(_class="fas fa-edit"),
                    _class="botao_editar_matricula",
                    _title="Editar Matrícula",
                    _href=window.PhanterPWA.XWAY(
                        "matricular",
                        self.id_escola,
                        self.ano_letivo,
                        "aluno-conferido",
                        self.id_aluno
                    )
                ),
                widgets.FloatButton(
                    I(_class="fas fa-comments"),
                    _class="botao_questionario",
                    _title="Questionário Social",
                    _href=window.PhanterPWA.XWAY(
                        "imprimir",
                        "questionario-social",
                        self.id_escola,
                        self.ano_letivo,
                        self.id_aluno,
                        _id_matricula=self.id_matricula
                    )
                ),
                widgets.FloatButton(
                    I(_class="fas fa-file-pdf"),
                    _class="botao_gerar_pdf",
                    _title="Gerar PDF",
                    _href="{0}/api/pdfs/matricula/{1}?nocache={2}".format(
                        window.PhanterPWA.ApiServer.remote_address,
                        self.id_matricula,
                        now
                    )
                ),
                widgets.FloatButton(
                    I(_class="fas fa-print"),
                    _title="Imprimir documento",
                    _class="botao_imprimir_diario_de_notas",
                    _onclick="print();"
                )
            )
        )
        html_botoes.html_to("#botoes_de_comando_impressao")
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
        data_de_nascimento_formatada = json.data.data_de_nascimento_formatada
        data_mat = json.data.matricula.data_mat
        data_de_nascimento = validations.format_iso_date_datetime(
            data_nasc, "dd/MM/yyyy", "date"
        )
        data_assinatura = json.data.data_matricula_formatada
        nome_do_aluno_h = "Nome do(a) Aluno(a)"
        P1 = " o(a) aluno(a) estudou "
        considerado = "considerado(a)"
        if sexo == "Masculino" or sexo == "1" or sexo == 1:
            nome_do_aluno_h = "Nome do Aluno"
            P1 = " o aluno estudou "
            considerado = "considerado"
            if resultado_anterior == "Aprovado(a)":
                resultado_anterior = "Aprovado"
            elif resultado_anterior == "Reprovado(a)":
                resultado_anterior = "Reprovado"
        elif sexo == "Feminino" or sexo == "2" or sexo == 2:
            nome_do_aluno_h = "Nome da Aluna"
            P1 = " a aluna estudou "
            considerado = "considerada"
            if resultado_anterior == "Aprovado(a)":
                resultado_anterior = "Aprovada"
            elif resultado_anterior == "Reprovado(a)":
                resultado_anterior = "Reprovada"
        if serie_subsequente.startswith('Creche') or "SÉRIE" in serie_subsequente.upper():
            P4 = " na "
        else:
            P4 = " no "  
        if serie_anterior is not None and  ano_letivo is not None and resultado_anterior is not None:
            if serie_anterior.startswith('Creche') or "SÉRIE" in serie_anterior.upper():
                P2 = " na "
            else:
                P2 = " no "  
            anunciado = CONCATENATE(
                DIV(
                    P("No ano letivo de ", STRONG(ano_anterior), P1, P2, STRONG(serie_anterior), " tendo sido ", considerado, " ",
                        STRONG(resultado_anterior), ", portanto tendo direito a matricular-se ", P4, STRONG(serie_subsequente),
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
                        P(
                            "Nova matrícula efetuada para o ano letivo de ", STRONG(ano_letivo), P4, STRONG(serie_subsequente),
                            ". Ficando sob a responsabilidade de ", STRONG(responsavel), "."
                        ),
                        _class="p-row"
                    )
                )
                titulo_resumo = H4("Nova Matrícula para o Ano Letivo de ", STRONG(ano_letivo))
            else:
                anunciado = CONCATENATE(
                    DIV(
                        P(
                            "Matrícula renovada para o ano letivo de ", STRONG(ano_letivo), P4, STRONG(serie_subsequente),
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
            "Venho requerer a V. Sª que se digne mandar matricular o aluno supracitado",
            P4, STRONG(serie_subsequente), " deste estabelecimento, ficando sob a responsabilidade de ", STRONG(responsavel),
            " declarando estar obrigado e de acordo com todas as exigências constantes no", STRONG(" Regimento Escolar"),
            " deste Estabelecimento e outras normas estabelecidas pelo diretor. Nestes termos pede deferimento."
        )
        logo = "{0}/api/escolas/{1}/image".format(
            window.PhanterPWA.ApiServer.remote_address,
            id_escola
        )
        if ajax_status == "success":
            codigo = "{0}-{1}-{2}-{3}".format(self.id_escola, self.ano_letivo, self.id_aluno, self.id_matricula)
            matricula_content = DIV(
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
                                                    TD(STRONG("Data de Nascimento: "), data_de_nascimento_formatada),
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
                                                    TD(STRONG("Data de Nascimento", ": "), data_de_nascimento_formatada),
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
                                _class="imprimir_matricula_wrapper imprimir_documentos_wrapper"
                            ),
                            _class="imprimir_matricula_container"
                        ),

                        DIV(
                            DIV(
                                DIV(XML("&#160;"), _style="height: 40px;"),
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
                                    # DIV(H5(dados_escola), _class="sme_cabecalho_sme_dados_escola"),
                                    DIV(H2("COMPROVANTE DE MATRÍCULA ", self.ano_letivo), _class="sme_cabecalho_titulo_documento"),
                                    DIV(H3(nome_do_aluno), _class="sme_cabecalho_sme_nome_escola"),
                                    DIV(
                                        DIV(
                                            XSECTION(
                                                LABEL(
                                                    "QRCODE"
                                                ),
                                                DIV(_id="qrcode_matricula"),
                                                BR(),
                                                DIV(STRONG("CÓDIGO DE ACESSO: "), codigo, _class="tudo_centralizado"),
                                            ),
                                            _class="p-row"
                                        ),
                                        DIV(
                                            P("Senhores pais ou responsáveis,"),
                                            P("Este documento possui várias informações sobre a matrícula do aluno.",
                                                " Quando vier pra escola pra tratar de assuntos relacionados ao aluno, ao trazê-lo,",
                                                " os funcionários da secretaria poderão",
                                                " identificar e localizar as informações do aluno mais facilmente.",
                                                " Outra vantagem é que ele facilitará o acesso ao sistema da ", STRONG("Secretaria Municipal de Educação",
                                                " de Fátima/BA.")
                                            ),
                                            P(
                                                "Para acessar o sistema basta ler o ", STRONG("QRCODE"), " ou acessar o endereço: "
                                            ),
                                            P(
                                                "https://smefatima.com.br/#_phanterpwa:/acesso-ao-aluno/{0}".format(codigo)
                                            ),
                                            _class="p-row"
                                        ),
                                        DIV(
                                            XSECTION(
                                                LABEL(
                                                    "INFORMAÇÕES DO ALUNO"
                                                ),

                                                TABLE(
                                                    TR(TD(STRONG(nome_do_aluno_h,": "), nome_do_aluno, _colspan=2)),
                                                    TR(TD(STRONG("Código da Matrícula: "), self.id_matricula, _colspan=2)),
                                                    TR(
                                                        TD(STRONG("Série: "), serie_subsequente),
                                                        TD(STRONG("Ano Letivo: "), ano_letivo)
                                                    ),
                                                    TR(
                                                        TD(STRONG("Data de Nascimento: "), data_de_nascimento_formatada),
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

                                            ),
                                            _class="p-row"
                                        ),
                                        _class="sme_documento_conteudo"
                                    ),
                                    _id="pagina_{0}_comprovante".format(self.id_matricula),
                                    _class="p-row"
                                ),
                                _class="imprimir_matricula_wrapper imprimir_documentos_wrapper"
                            ),
                            _class="imprimir_comprovante_social quebra-de-pagina-antes"
                        ),

                    ),

                    _class="media-print-visible"
                ),
                _class="folhas_para_imprimir phanterpwa-simple-media-print"
            )
            


        

            CONCATENATE(matricula_content).html_to("#documentos-content")

            url = "https://smefatima.com.br/#_phanterpwa:/acesso-ao-aluno/{0}".format(
                codigo
            )
            qrcode = __new__(QRCode(jQuery("#qrcode_matricula")[0], {
                "text": url,
                "width": 125,
                "height": 125,
                "colorDark": "#000000",
                "colorLight": "#ffffff",
                "correctLevel": QRCode.CorrectLevel.H
            }))

    def _get_data(self):
        window.PhanterPWA.GET(
            "api",
            "imprimir",
            "matricula",
            self.id_matricula,
            onComplete=self.after_get
        )


class QuestionarioSocial():
    @decorators.check_authorization(lambda: window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME", "Administrador Master Escola", "Coordenação SME"]))
    def __init__(self):
        self.id_escola = window.PhanterPWA.Request.get_arg(1)
        self.ano_letivo = window.PhanterPWA.Request.get_arg(2)
        self.id_aluno = window.PhanterPWA.Request.get_arg(3)
        self.id_matricula = window.PhanterPWA.Request.get_param("id_matricula")
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("IMPRIMIR", _class="phanterpwa-breadcrumb"),
                        DIV("QUESTIONÁRIO SOCIAL", _class="phanterpwa-breadcrumb"),
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
            DIV(_id="botoes_de_comando_impressao")
        )
        html.html_to("#main-container")
        # BackButton = left_bar.LeftBarButton(
        #     "back_imprimir_matricula",
        #     "Voltar",
        #     I(_class="fas fa-arrow-circle-left"),
        #     **{"_phanterpwa-way": "area-do-servidor",
        #         "position": "top",
        #         "ways": [lambda r: True if r.startswith("documentos") or r.startswith("documentos/") else False]}
        # )
        # window.PhanterPWA.Components['left_bar'].add_button(BackButton)
        self._pegar_dados()

    def _pegar_dados(self):
        window.PhanterPWA.GET(
            "api",
            "imprimir",
            "questionario-social",
            self.id_escola,
            self.id_aluno,
            onComplete=self._depois_de_pegar_os_dados
        )

    def _depois_de_pegar_os_dados(self, data, ajax_status):
        json = data.responseJSON
        if ajax_status == "success":
            self.id_aluno = json.data.alunos
            _id = json.data.id
            responsavel = json.data.responsavel
            responsavel_legal = json.data.responsavel_legal
            sexo = json.data.sexo
            moradores_residencia = json.data.moradores_residencia
            acompanhamento_escolar = json.data.acompanhamento_escolar
            acompanhamento_escolar2 = json.data.acompanhamento_escolar2
            escolaridade_acompanhamento = json.data.escolaridade_acompanhamento
            escolaridade_acompanhamento2 = json.data.escolaridade_acompanhamento2
            morada_outro = json.data.morada_outro
            alergia = json.data.alergia
            alergia_sim = json.data.alergia_sim
            deficiencia = json.data.deficiencia
            deficiencia_sim = json.data.deficiencia_sim
            celular_aluno = json.data.celular_aluno
            celular_aluno2 = json.data.celular_aluno2
            transporte_escolar = json.data.transporte_escolar
            bolsa_familia = json.data.bolsa_familia
            possui_computador = json.data.possui_computador
            acesso_internet_movel = json.data.acesso_internet_movel
            acesso_internet_wifi = json.data.acesso_internet_wifi
            uso_imagem = json.data.uso_imagem
            telefone = json.data.telefone
            dono_telefone = json.data.dono_telefone
            tamanho_camisa = json.data.tamanho_camisa
            observacao_qs = json.data.observacao_qs
            nome_escola = json.data.escola
            aluno = json.data.aluno
            now = __new__(Date().getTime())
            array_botoes = []
            if self.id_escola is not None and self.ano_letivo is not None:
                array_botoes.append(
                    widgets.FloatButton(
                        I(_class="fas fa-edit"),
                        _class="botao_editar_matricula",
                        _title="Editar Matrícula",
                        _href=window.PhanterPWA.XWAY(
                            "matricular",
                            self.id_escola,
                            self.ano_letivo,
                            "aluno-conferido",
                            self.id_aluno
                        )
                    )
                )
            if self.id_matricula is not None:
                array_botoes.append(
                    widgets.FloatButton(
                        I(_class="fas fa-file-contract"),
                        _class="botao_imprimir_matricula",
                        _title="Documento de matrícula",
                        _href=window.PhanterPWA.XWAY(
                            "imprimir",
                            "matricula",
                            self.id_matricula
                        )
                    )
                )
            array_botoes.append(
                widgets.FloatButton(
                    I(
                        DIV(
                            DIV(
                                SPAN(I(_class="fas fa-user-graduate"), _class="icombine-container-first"),
                                SPAN(I(_class="fas fa-pen"), _class="icombine-container-last"),
                                _class="icombine-container"
                            ),
                            _class="phanterpwa-snippet-icombine"
                        ),
                    ),
                    _class="botao_editar_dados_aluno",
                    _title="Editar dados do aluno",
                    _href=window.PhanterPWA.XWAY(
                        "matricular",
                        self.id_escola,
                        self.ano_letivo,
                        self.id_aluno,
                        _retornar="imprimir/questionario-social/{0}/{1}/{2}".format(
                            self.id_escola,
                            self.ano_letivo,
                            self.id_aluno
                        )
                    )
                )
            )
            array_botoes.append(
                widgets.FloatButton(
                    I(_class="fas fa-file-pdf"),
                    _class="botao_gerar_pdf",
                    _title="Gerar PDF",
                    _href="{0}/api/pdfs/questionario-social/{1}/{2}/{3}?nocache={4}".format(
                        window.PhanterPWA.ApiServer.remote_address,
                        self.id_escola,
                        self.ano_letivo,
                        self.id_aluno,
                        now
                    )
                )
            )
            array_botoes.append(
                widgets.FloatButton(
                    I(_class="fas fa-print"),
                    _title="Imprimir documento",
                    _class="botao_imprimir_diario_de_notas",
                    _onclick="print();"
                )
            )

            html_botoes = widgets.FloatMenu(
                "menu_impressao",
                I(_class="fas fa-ellipsis-v"),
                *array_botoes
            )
            html_botoes.html_to("#botoes_de_comando_impressao")
            inis_acom = "O(A) aluno(a)"
            art_acom = "o(a)"
            meio_acom = "o(a) aluno(a)"
            if sexo == "Masculino" or sexo == "1" or sexo == 1:
                inis_acom = "O aluno"
                art_acom = "o"
                meio_acom = "o aluno"
            elif sexo == "Feminino" or sexo == "2" or sexo == 2:
                inis_acom = "A aluna"
                art_acom = "a"
                meio_acom = "a aluna"
            xml_acompanha = CONCATENATE(
                TABLE(
                    TR(
                        TH(inis_acom, " possui alguém que ", art_acom, " acompanhe ou ajude nas tarefas escolares?", _class="pergunta"),
                        TD(acompanhamento_escolar, _class="resposta")
                    ),
                    _class="quiz"
                )
            )
            if acompanhamento_escolar == "Sim":
                xml_acompanha.append(
                    TABLE(
                        TR(
                            TH("Quem acompanha/ajuda nas tarefas escolares?", _class="pergunta"),
                            TD(acompanhamento_escolar2, _class="resposta")
                        ),
                        _class="quiz"
                    )
                )
                xml_acompanha.append(
                    TABLE(
                        TR(
                            TH("Qual o nível de escolaridade de quem acompanha?", _class="pergunta"),
                            TD(escolaridade_acompanhamento, _class="resposta")
                        ),
                        _class="quiz"
                    )
                )

            if "incompleto" in escolaridade_acompanhamento:
                xml_acompanha.append(
                    TABLE(
                        TR(
                            TH("Qual nível de escolaridade atingiu?", _class="pergunta"),
                            TD(escolaridade_acompanhamento2, _class="resposta")
                        ),
                        _class="quiz"
                    )
                )

            xml_alergia = CONCATENATE(
                TABLE(
                    TR(
                        TH(inis_acom, " tem alergia?", _class="pergunta"),
                        TD(alergia, _class="resposta")
                    ),
                    _class="quiz"
                )
            )
            if alergia == "Sim":
                xml_alergia.append(
                    TABLE(
                        TR(
                            TH("Alergia de quê?", _class="pergunta"),
                            TD(alergia_sim, _class="resposta")
                        ),
                        _class="quiz"
                    )
                )

            xml_deficiencia = CONCATENATE(
                TABLE(
                    TR(
                        TH(inis_acom, " possui alguma deficiência?", _class="pergunta"),
                        TD(deficiencia, _class="resposta")
                    ),
                    _class="quiz"
                )
            )
            if deficiencia == "Sim":
                xml_deficiencia.append(
                    TABLE(
                        TR(
                            TH("Qual a deficiência?", _class="pergunta"),
                            TD(deficiencia_sim, _class="resposta")
                        ),
                        _class="quiz"
                    )
                )

            xml_celular_aluno = CONCATENATE(
                TABLE(
                    TR(
                        TH(inis_acom, " tem celular próprio?", _class="pergunta"),
                        TD(celular_aluno, _class="resposta")
                    ),
                    _class="quiz"
                )
            )
            if celular_aluno == "Sim":
                xml_celular_aluno.append(
                    TABLE(
                        TR(
                            TH("Qual o número do celular d", meio_acom, "?", _class="pergunta"),
                            TD(celular_aluno2, _class="resposta")
                        ),
                        _class="quiz"
                    )
                )

            logo = "{0}/api/escolas/{1}/image".format(
                window.PhanterPWA.ApiServer.remote_address,
                self.id_escola
            )

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
                                    # DIV(H5(dados_escola), _class="sme_cabecalho_sme_dados_escola"),
                                    DIV(H2("QUESTIONÁRIO SOCIAL"), _class="sme_cabecalho_titulo_documento"),
                                    DIV(H3(aluno), _class="sme_cabecalho_sme_nome_escola"),

                                    DIV(
                                        DIV(
                                            XSECTION(
                                                LABEL(
                                                    "SOBRE O ALUNO"
                                                ),
                                                TABLE(
                                                    TR(
                                                        TH("Quem é ou são os responsáveis legais?", _class="pergunta"),
                                                        TD(responsavel_legal, _class="resposta")
                                                    ),
                                                    _class="quiz"
                                                ),
                                                TABLE(
                                                    TR(
                                                        TH("Com quem ", meio_acom, " mora?", _class="pergunta"),
                                                        TD(morada_outro, _class="resposta")
                                                    ),
                                                    _class="quiz"
                                                ),
                                                TABLE(
                                                    TR(
                                                        TH("Quantas pessoas moram na residência, incluindo ", meio_acom, "?", _class="pergunta"),
                                                        TD(moradores_residencia, _class="resposta")
                                                    ),
                                                    _class="quiz"
                                                ),
                                                xml_acompanha,
                                                xml_alergia,
                                                xml_deficiencia,
                                                xml_celular_aluno,
                                                TABLE(
                                                    TR(
                                                        TH(inis_acom, " necessita de transporte escolar para vir à escola?", _class="pergunta"),
                                                        TD("Sim" if transporte_escolar is True else "Não", _class="resposta")
                                                    ),
                                                    _class="quiz"
                                                ),
                                                TABLE(
                                                    TR(
                                                        TH(inis_acom, " recebe o Bolsa Família?", _class="pergunta"),
                                                        TD("Sim" if bolsa_familia is True else "Não", _class="resposta")
                                                    ),
                                                    _class="quiz"
                                                ),
                                                TABLE(
                                                    TR(
                                                        TH(inis_acom, " possui computador ou notebook?", _class="pergunta"),
                                                        TD("Sim" if possui_computador is True else "Não", _class="resposta")
                                                    ),
                                                    _class="quiz"
                                                ),
                                                TABLE(
                                                    TR(
                                                        TH(inis_acom, " tem acesso a internet por rede móvel?", _class="pergunta"),
                                                        TD("Sim" if acesso_internet_movel is True else "Não", _class="resposta")
                                                    ),
                                                    _class="quiz"
                                                ),
                                                TABLE(
                                                    TR(
                                                        TH(inis_acom, " tem acesso a internet por wifi?", _class="pergunta"),
                                                        TD("Sim" if acesso_internet_wifi is True else "Não", _class="resposta")
                                                    ),
                                                    _class="quiz"
                                                ),
                                                TABLE(
                                                    TR(
                                                        TH("Qual o tamanho da farda d", meio_acom,"?", _class="pergunta"),
                                                        TD(tamanho_camisa, _class="resposta")
                                                    ),
                                                    _class="quiz"
                                                ),

                                            ),
                                            _class="p-row"
                                        ),
                                        DIV(
                                            XSECTION(
                                                LABEL(
                                                    "SOBRE OS RESPONSÁVEIS"
                                                ),
                                                TABLE(
                                                    TR(
                                                        TH("O responsável autoriza o uso de imagem d", meio_acom," em divulgações audiovisuais?", _class="pergunta"),
                                                        TD("Sim" if uso_imagem is True else "Não", _class="resposta")
                                                    ),
                                                    _class="quiz"
                                                ),
                                                TABLE(
                                                    TR(
                                                        TH("Número de Contato:", _class="pergunta"),
                                                        TD(telefone, _class="resposta"),
                                                        TH("Falar com:", _class="pergunta pra_direita"),
                                                        TD(dono_telefone, _class="resposta_direita")
                                                    ),
                                                    _class="quiz"
                                                ),
                                            ),
                                            _class="p-row"
                                        ),
                                        DIV(
                                            XSECTION(
                                                LABEL(
                                                    "OBSERVAÇÕES"
                                                ),
                                                TABLE(
                                                    TR(
                                                        TD(observacao_qs, _class="resposta")
                                                    ),
                                                    _class="quiz observacoes"
                                                ),
                                            ),
                                            _class="p-row"
                                        ),
                                        DIV(
                                            "____________________, _____ de __________________ de ", self.ano_letivo,
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
                                    _id="pagina_{0}_questionario".format(_id),
                                    _class="p-row"
                                ),
                                _class="imprimir_matricula_wrapper imprimir_documentos_wrapper"
                            ),
                            _class="imprimir_questionario_social"
                        ),
                    ),

                    _class="media-print-visible"
                ),
                _class="folhas_para_imprimir phanterpwa-simple-media-print"
            )
            folhas_content.html_to("#documentos-content")


class DeclaracaoDeMatricula():
    @decorators.check_authorization(lambda: window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME", "Administrador Master Escola", "Coordenação SME"]))
    def __init__(self):
        self.id_matricula = window.PhanterPWA.Request.get_arg(1)
        
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("IMPRIMIR", _class="phanterpwa-breadcrumb"),
                        DIV("DECLARAÇÃO DE MATRÍCULA", _class="phanterpwa-breadcrumb"),
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
            DIV(_id="botoes_de_comando_impressao")
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
        self.id_escola = json.data.id_escola
        self.ano_letivo = json.data.ano_letivo
        self.id_aluno = json.data.matricula.aluno
        meses = [
            "janeiro",
            "fevereiro",
            "março",
            "abril",
            "maio",
            "junho",
            "julho",
            "agosto",
            "setembro",
            "outubro",
            "novembro",
            "dezembro"
        ]
        now = __new__(Date().getTime())
        dia = __new__(Date().getDate())
        mes_int = __new__(Date().getMonth())
        ano = __new__(Date().getFullYear())
        mes = meses[int(mes_int)]
        data_assinatura = "{0} de {1} de {2}".format(dia, mes, ano)

        html_botoes = CONCATENATE(
            widgets.FloatMenu(
                "menu_impressao",
                I(_class="fas fa-ellipsis-v"),
                widgets.FloatButton(
                    I(_class="fas fa-edit"),
                    _class="botao_editar_matricula",
                    _title="Editar Matrícula",
                    _href=window.PhanterPWA.XWAY(
                        "matricular",
                        self.id_escola,
                        self.ano_letivo,
                        "aluno-conferido",
                        self.id_aluno
                    )
                ),
                widgets.FloatButton(
                    I(_class="fas fa-comments"),
                    _class="botao_questionario",
                    _title="Questionário Social",
                    _href=window.PhanterPWA.XWAY(
                        "imprimir",
                        "questionario-social",
                        self.id_escola,
                        self.ano_letivo,
                        self.id_aluno,
                        _id_matricula=self.id_matricula
                    )
                ),
                widgets.FloatButton(
                    I(_class="fas fa-file-pdf"),
                    _class="botao_gerar_pdf",
                    _title="Gerar PDF",
                    _href="{0}/api/pdfs/declaracao-de-matricula/{1}?nocache={2}".format(
                        window.PhanterPWA.ApiServer.remote_address,
                        self.id_matricula,
                        now
                    )
                ),
                widgets.FloatButton(
                    I(_class="fas fa-print"),
                    _title="Imprimir documento",
                    _class="botao_imprimir_diario_de_notas",
                    _onclick="print();"
                )
            )
        )
        html_botoes.html_to("#botoes_de_comando_impressao")
        id_escola = json.data.id_escola

        nome_escola = json.data.nome_escola
        dados_escola = json.data.dados_escola
        ano_letivo = json.data.ano_letivo
        nome_do_aluno = json.data.matricula.nome_do_aluno
        naturalidade = json.data.naturalidade
        nome_do_pai = json.data.matricula.nome_do_pai
        nome_da_mae = json.data.matricula.nome_da_mae
        cidade = json.data.cidade
        serie_subsequente = json.data.serie_subsequente
        sexo = json.data.sexo
        nome_autoridade = json.data.nome_autoridade
        cargo_autoridade = json.data.cargo_autoridade
        data_nasc = json.data.data_nasc
        ano2, mes2, dia2 = data_nasc.split("-")
        data_nasc_extenso = "{0} de {1} de {2}".format(dia2, meses[int(mes2) - 1], ano2)
        oa_alunoa = "o(a) aluno(a)"
        filho = "filho(a)"
        nasc = "nascido(a)"
        filiacao = CONCATENATE(STRONG(nome_do_pai), " e ", STRONG(nome_da_mae))
        mats = "matriculado(a)"
        if nome_do_pai is None or nome_do_pai == "":
            filiacao = STRONG(nome_da_mae)
        if sexo == "Masculino" or sexo == "1" or sexo == 1:
            nasc = "nascido"
            filho = "filho"
            oa_alunoa = "o aluno"
            mats = "matriculado"

        elif sexo == "Feminino" or sexo == "2" or sexo == 2:
            nasc = "nascida"
            filho = "filha"
            oa_alunoa = "a aluna"
            mats = "matriculada"

        declaracao = CONCATENATE(
            P(
                "A direção da ", nome_escola, ", declara para os devidos",
                " fins que ", oa_alunoa, " ", STRONG(nome_do_aluno), ", ", nasc, " em ", STRONG(data_nasc_extenso), ", ",
                filho, " de ", filiacao, ", natural de ",
                STRONG(naturalidade), ", foi ", mats, " junto a(o) ", STRONG(serie_subsequente), ", nesta unidade",
                " de ensino no ano letivo de ", STRONG(ano_letivo), "."
            ),
            P(
                "Esta declaração somente será válida sem emendas ou rasuras."
            )
        )

        logo = "{0}/api/escolas/{1}/image".format(
            window.PhanterPWA.ApiServer.remote_address,
            id_escola
        )
        if ajax_status == "success":
            declaracao_matricula_content = DIV(
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
                                    BR(),
                                    BR(),
                                    BR(),
                                    BR(),
                                    BR(),
                                    BR(),
                                    DIV(H2("DECLARAÇÃO"), _class="sme_cabecalho_titulo_documento"),
                                    BR(),
                                    BR(),
                                    BR(),
                                    BR(),
                                    BR(),
                                    DIV(
                                        DIV(
                                            declaracao,
                                            _class="p-row"
                                        ),
                                        BR(),
                                        BR(),
                                        BR(),
                                        BR(),
                                        DIV(
                                            cidade, ", ", data_assinatura,
                                            _class="p-row  tudo_centralizado cidade_e_data"
                                        ),
                                        BR(),
                                        BR(),
                                        BR(),
                                        BR(),
                                        BR(),
                                        BR(),
                                        DIV(
                                            TABLE(
                                                TR(
                                                    TD("___________________________________________"),
                                                ),
                                                TR(
                                                    TD(nome_autoridade),
                                                ),
                                                TR(
                                                    TD(cargo_autoridade, _class="miudinho"),
                                                ),
                                                _class="tudo_centralizado"
                                            ),
                                            _class="p-row"
                                        ),
                                        _class="sme_documento_conteudo conteudo_declaracao"
                                    ),
                                    _id="pagina_{0}_declaracao".format(self.id_matricula),
                                    _class="p-row"
                                ),
                                _class="imprimir_matricula_wrapper imprimir_documentos_wrapper"
                            ),
                            _class="imprimir_matricula_container"
                        ),
                    ),

                    _class="media-print-visible"
                ),
                _class="folhas_para_imprimir phanterpwa-simple-media-print"
            )
            CONCATENATE(declaracao_matricula_content).html_to("#documentos-content")


    def _get_data(self):
        window.PhanterPWA.GET(
            "api",
            "imprimir",
            "matricula",
            self.id_matricula,
            onComplete=self.after_get
        )


class DeclaracaoDeTransferencia():
    @decorators.check_authorization(lambda: window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME", "Administrador Master Escola", "Coordenação SME"]))
    def __init__(self):
        self.id_matricula = window.PhanterPWA.Request.get_arg(1)
        
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("IMPRIMIR", _class="phanterpwa-breadcrumb"),
                        DIV("DECLARAÇÃO DE TRANFERÊNCIA", _class="phanterpwa-breadcrumb"),
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
            DIV(_id="botoes_de_comando_impressao")
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
        self.id_escola = json.data.id_escola
        self.ano_letivo = json.data.ano_letivo
        self.id_aluno = json.data.matricula.aluno
        meses = [
            "janeiro",
            "fevereiro",
            "março",
            "abril",
            "maio",
            "junho",
            "julho",
            "agosto",
            "setembro",
            "outubro",
            "novembro",
            "dezembro"
        ]
        now = __new__(Date().getTime())
        dia = __new__(Date().getDate())
        mes_int = __new__(Date().getMonth())
        ano = __new__(Date().getFullYear())
        mes = meses[int(mes_int)]
        data_assinatura = "{0} de {1} de {2}".format(dia, mes, ano)

        html_botoes = CONCATENATE(
            widgets.FloatMenu(
                "menu_impressao",
                I(_class="fas fa-ellipsis-v"),
                widgets.FloatButton(
                    I(_class="fas fa-file-pdf"),
                    _class="botao_gerar_pdf",
                    _title="Gerar PDF",
                    _href="{0}/api/pdfs/declaracao-de-transferencia/{1}?nocache={2}".format(
                        window.PhanterPWA.ApiServer.remote_address,
                        self.id_matricula,
                        now
                    )
                ),
                widgets.FloatButton(
                    I(_class="fas fa-print"),
                    _title="Imprimir documento",
                    _class="botao_imprimir_diario_de_notas",
                    _onclick="print();"
                )
            )
        )
        html_botoes.html_to("#botoes_de_comando_impressao")
        id_escola = json.data.id_escola

        nome_escola = json.data.nome_escola
        dados_escola = json.data.dados_escola
        ano_letivo = json.data.ano_letivo
        nome_do_aluno = json.data.matricula.nome_do_aluno
        naturalidade = json.data.naturalidade
        nome_do_pai = json.data.matricula.nome_do_pai
        nome_da_mae = json.data.matricula.nome_da_mae
        cidade = json.data.cidade
        serie_subsequente = json.data.serie_subsequente
        serie_proximo_ano = json.data.serie_proximo_ano
        resultado_final = json.data.resultado_final
        sexo = json.data.sexo
        nome_autoridade = json.data.nome_autoridade
        cargo_autoridade = json.data.cargo_autoridade
        data_nasc = json.data.data_nasc
        ano2, mes2, dia2 = data_nasc.split("-")
        data_nasc_extenso = "{0} de {1} de {2}".format(dia2, meses[int(mes2) - 1], ano2)
        oa_alunoa = "o(a) aluno(a)"
        filho = "filho(a)"
        nasc = "nascido(a)"
        filiacao = CONCATENATE(STRONG(nome_do_pai), " e ", STRONG(nome_da_mae))
        mats = "matriculado(a)"
        considerado = "considerado(a)"
        if nome_do_pai is None or nome_do_pai == "":
            filiacao = STRONG(nome_da_mae)
        if sexo == "Masculino" or sexo == "1" or sexo == 1:
            nasc = "nascido"
            filho = "filho"
            oa_alunoa = "o aluno"
            mats = "matriculado"
            considerado = "considerado"
            if resultado_final == "Aprovado(a)":
                resultado_final = "Aprovado"
            elif resultado_final == "Reprovado(a)":
                resultado_final = "Reprovado"

        elif sexo == "Feminino" or sexo == "2" or sexo == 2:
            nasc = "nascida"
            filho = "filha"
            oa_alunoa = "a aluna"
            mats = "matriculada"
            considerado = "considerada"
            if resultado_final == "Aprovado(a)":
                resultado_final = "Aprovada"
            elif resultado_final == "Reprovado(a)":
                resultado_final = "Reprovada"

        declaracao = CONCATENATE(
            P(
                "A direção da ", nome_escola, ", declara para os devidos",
                " fins que ", oa_alunoa, " ", STRONG(nome_do_aluno), ", ", nasc, " em ", STRONG(data_nasc_extenso), ", ",
                filho, " de ", filiacao, ", natural de ",
                STRONG(naturalidade), ", foi ", mats, " junto a(o) ", STRONG(serie_subsequente), ", nesta unidade",
                " de ensino no ano letivo de ", STRONG(ano_letivo), ", tendo sido ", considerado, " ",
                STRONG(resultado_final), ", portanto tendo direito a matricular-se no(a) ", STRONG(serie_proximo_ano), "."
            ),
            P(
                "Esta declaração somente será válida sem emendas ou rasuras."
            )
        )

        logo = "{0}/api/escolas/{1}/image".format(
            window.PhanterPWA.ApiServer.remote_address,
            id_escola
        )
        if ajax_status == "success":
            declaracao_matricula_content = DIV(
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
                                    BR(),
                                    BR(),
                                    BR(),
                                    BR(),
                                    BR(),
                                    BR(),
                                    DIV(H2("DECLARAÇÃO"), _class="sme_cabecalho_titulo_documento"),
                                    BR(),
                                    BR(),
                                    BR(),
                                    BR(),
                                    BR(),
                                    DIV(
                                        DIV(
                                            declaracao,
                                            _class="p-row"
                                        ),
                                        BR(),
                                        BR(),
                                        BR(),
                                        BR(),
                                        DIV(
                                            cidade, ", ", data_assinatura,
                                            _class="p-row  tudo_centralizado cidade_e_data"
                                        ),
                                        BR(),
                                        BR(),
                                        BR(),
                                        BR(),
                                        BR(),
                                        BR(),
                                        DIV(
                                            TABLE(
                                                TR(
                                                    TD("___________________________________________"),
                                                ),
                                                TR(
                                                    TD(nome_autoridade),
                                                ),
                                                TR(
                                                    TD(cargo_autoridade, _class="miudinho"),
                                                ),
                                                _class="tudo_centralizado"
                                            ),
                                            _class="p-row"
                                        ),
                                        _class="sme_documento_conteudo conteudo_declaracao"
                                    ),
                                    _id="pagina_{0}_declaracao".format(self.id_matricula),
                                    _class="p-row"
                                ),
                                _class="imprimir_matricula_wrapper imprimir_documentos_wrapper"
                            ),
                            _class="imprimir_matricula_container"
                        ),
                    ),

                    _class="media-print-visible"
                ),
                _class="folhas_para_imprimir phanterpwa-simple-media-print"
            )
            CONCATENATE(declaracao_matricula_content).html_to("#documentos-content")


    def _get_data(self):
        window.PhanterPWA.GET(
            "api",
            "imprimir",
            "matricula",
            self.id_matricula,
            onComplete=self.after_get
        )


class FichaIndividualDoAluno():
    @decorators.check_authorization(lambda: window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME", "Administrador Master Escola", "Coordenação SME"]))
    def __init__(self):
        self.id_matricula = window.PhanterPWA.Request.get_arg(1)
        
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("IMPRIMIR", _class="phanterpwa-breadcrumb"),
                        DIV("FICHA INDIVIDUAL DO ALUNO", _class="phanterpwa-breadcrumb"),
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
            DIV(_id="botoes_de_comando_impressao")
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
        self.id_escola = json.data.id_escola
        self.ano_letivo = json.data.ano_letivo
        self.id_aluno = json.data.id_aluno
        meses = [
            "janeiro",
            "fevereiro",
            "março",
            "abril",
            "maio",
            "junho",
            "julho",
            "agosto",
            "setembro",
            "outubro",
            "novembro",
            "dezembro"
        ]
        now = __new__(Date().getTime())
        dia = __new__(Date().getDate())
        mes_int = __new__(Date().getMonth())
        ano = __new__(Date().getFullYear())
        mes = meses[int(mes_int)]
        data_assinatura = "{0} de {1} de {2}".format(dia, mes, ano)

        html_botoes = CONCATENATE(
            widgets.FloatMenu(
                "menu_impressao",
                I(_class="fas fa-ellipsis-v"),
                widgets.FloatButton(
                    I(_class="fas fa-file-pdf"),
                    _class="botao_gerar_pdf",
                    _title="Gerar PDF",
                    _href="{0}/api/pdfs/declaracao-de-transferencia/{1}?nocache={2}".format(
                        window.PhanterPWA.ApiServer.remote_address,
                        self.id_matricula,
                        now
                    )
                ),
                widgets.FloatButton(
                    I(_class="fas fa-print"),
                    _title="Imprimir documento",
                    _class="botao_imprimir_diario_de_notas",
                    _onclick="print();"
                )
            )
        )
        html_botoes.html_to("#botoes_de_comando_impressao")
        id_escola = json.data.id_escola

        nome_escola = json.data.nome_escola
        dados_escola = json.data.dados_escola
        ano_letivo = json.data.ano_letivo
        nome_do_aluno = json.data.nome_do_aluno
        naturalidade = json.data.naturalidade
        nome_do_pai = json.data.nome_do_pai
        nome_da_mae = json.data.nome_da_mae
        sexo = json.data.sexo
        data_de_nascimento_formatada = json.data.data_de_nascimento_formatada
        nome_autoridade = json.data.nome_autoridade
        cargo_autoridade = json.data.cargo_autoridade
        turma = json.data.turma
        turno = json.data.turno
        serie_e_ensino = json.data.serie_e_ensino
        resultado_final = json.data.resultado_final
        oa_alunoa = "o(a) aluno(a)"
        filho = "filho(a)"
        nasc = "nascido(a)"
        mats = "matriculado(a)"
        considerado = "considerado(a)"
        if nome_do_pai is None or nome_do_pai == "":
            nome_do_pai = ""
        DO_AL = "DO(A) ALUNO(A)"
        nome_do_aluno_h = "Nome do(a) aluno(a)"
        if sexo == "Masculino" or sexo == "1" or sexo == 1:
            DO_AL = "DO ALUNO"
            nome_do_aluno_h = "Nome do aluno"
            nasc = "nascido"
            filho = "filho"
            oa_alunoa = "o aluno"
            mats = "matriculado"
            considerado = "considerado"
            if resultado_final == "Aprovado(a)":
                resultado_final = "Aprovado"
            elif resultado_final == "Reprovado(a)":
                resultado_final = "Reprovado"

        elif sexo == "Feminino" or sexo == "2" or sexo == 2:
            DO_AL = "DA ALUNA"
            nome_do_aluno_h = "Nome da aluna"
            nasc = "nascida"
            filho = "filha"
            oa_alunoa = "a aluna"
            mats = "matriculada"
            considerado = "considerada"
            if resultado_final == "Aprovado(a)":
                resultado_final = "Aprovada"
            elif resultado_final == "Reprovado(a)":
                resultado_final = "Reprovada"

        dados_aluno = DIV(
            DIV(
                DIV(
                    LABEL("Dados do Aluno"),
                    TABLE(
                        TR(TD(STRONG(nome_do_aluno_h, ": "), nome_do_aluno, _colspan=1)),
                        TR(
                            TD(STRONG("Data de Nascimento", ": "), data_de_nascimento_formatada),
                            TD(STRONG("Naturalidade", ": "), naturalidade)
                        ),
                        TR(
                            TD(STRONG("Nome do pai", ": "), nome_do_pai, _colspan="1"),
                        ),
                        TR(
                            TD(STRONG("Nome da mãe", ": "), nome_da_mae, _colspan="1"),
                        ),
                    ),
                    _class="phanterpwa-xsection"
                ),
                _class="phanterpwa-xsection-container"
            ),
            _class="p-row"
        )
        dados_serie = DIV(
            DIV(
                DIV(
                    LABEL("Dados da Turma"),
                    TABLE(
                        TR(
                            TD(STRONG("Turma", ": "), turma),
                            TD(STRONG("Turno", ": "), turno)
                        ),
                        TR(
                            TD(STRONG("Série", ": "), serie_e_ensino, _colspan="2"),
                        ),
                    ),
                    _class="phanterpwa-xsection"
                ),
                _class="phanterpwa-xsection-container"
            ),
            _class="p-row"
        )
        tabela = TABLE(
            _class="tabela_ficha_individual"
        )
        for y in json.data.ficha_individual:
            linha = TR()
            for c in y:
                if c[1]["tipo"] == "cabecalho":
                    linha.append(TH(c[0], **dict(c[1])))
                elif c[1]["tipo"] == "cabecalho_rotate":
                    linha.append(TH(DIV(c[0], _class="rotate"), **dict(c[1])))
                else:
                    linha.append(TD(c[0], **dict(c[1])))
            tabela.append(linha)

        logo = "{0}/api/escolas/{1}/image".format(
            window.PhanterPWA.ApiServer.remote_address,
            id_escola
        )
        if ajax_status == "success":
            declaracao_matricula_content = DIV(
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
                                    DIV(H2("FICHA INDIVIDUAL ", DO_AL, " ", ano_letivo), _class="sme_cabecalho_titulo_documento"),
                                    BR(),
                                    DIV(
                                        dados_aluno,
                                        BR(),
                                        dados_serie,
                                        BR(),
                                        H3("RESULTADOS OBTIDOS", _class="tudo_centralizado"),
                                        tabela,
                                        BR(),
                                        BR(),
                                        BR(),
                                        BR(),
                                        BR(),
                                        DIV(
                                            TABLE(
                                                TR(
                                                    TD("___________________________________________"),
                                                ),
                                                TR(
                                                    TD(nome_autoridade),
                                                ),
                                                TR(
                                                    TD(cargo_autoridade, _class="miudinho"),
                                                ),
                                                _class="tudo_centralizado"
                                            ),
                                            _class="p-row"
                                        ),
                                        _class="sme_documento_conteudo"
                                    ),
                                    _id="pagina_{0}_declaracao".format(self.id_matricula),
                                    _class="p-row"
                                ),
                                _class="imprimir_matricula_wrapper imprimir_documentos_wrapper"
                            ),
                            _class="imprimir_matricula_container"
                        ),
                    ),

                    _class="media-print-visible"
                ),
                _class="folhas_para_imprimir phanterpwa-simple-media-print"
            )
            CONCATENATE(declaracao_matricula_content).html_to("#documentos-content")

    def _get_data(self):
        window.PhanterPWA.GET(
            "api",
            "imprimir",
            "ficha-individual",
            self.id_matricula,
            onComplete=self.after_get
        )


class AtaDeResultadosFinais():
    @decorators.check_authorization(lambda: window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME", "Administrador Master Escola", "Coordenação SME"]))
    def __init__(self):
        window.addEventListener('DOMContentLoaded', lambda: self.ajustar_iframe())
        self.id_escola = window.PhanterPWA.Request.get_arg(1)
        self.ano_letivo = window.PhanterPWA.Request.get_arg(2)
        self.id_turma = window.PhanterPWA.Request.get_arg(3)
        self.diretor = ""
        self.assinante = ""
        self.data_ata = ""
        self.json_ata = None
        now = __new__(Date().getTime())
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("IMPRIMIR", _class="phanterpwa-breadcrumb"),
                        DIV("ATAS DE RESULTADOS FINAIS", _class="phanterpwa-breadcrumb"),
                        _class="phanterpwa-breadcrumb-wrapper"
                    ),
                    _class="p-container"),
                _class='title_page_container card'
            ),
            DIV(
                DIV(
                    DIV(preloaders.android, _style="width: 300px; height: 300px; overflow: hidden; margin: auto;"),
                    _style="text-align:center; padding: 50px 0;"
                ),
                _id="documentos-content",
            ),
            DIV(
                widgets.FloatMenu(
                    "menu_impressao",
                    I(_class="fas fa-ellipsis-v"),
                    widgets.FloatButton(
                        I(_class="fas fa-cog"),
                        _class="botao_abrir_modal_configuracoes",
                        _title="Configurar Documento",
                    ),
                    widgets.FloatButton(
                        I(_class="fas fa-file-pdf"),
                        _class="botao_gerar_pdf",
                        _title="Gerar PDF",
                        _href="{0}/api/pdfs/ata-de-resultados-finais/{1}/{2}/{3}?nocache={4}".format(
                            window.PhanterPWA.ApiServer.remote_address,
                            self.id_escola,
                            self.ano_letivo,
                            self.id_turma,
                            now
                        ),
                        _target="_blank"
                    ),
                    widgets.FloatButton(
                        I(_class="fas fa-print"),
                        _title="Imprimir documento",
                        _class="botao_imprimir_diario_de_notas",
                        _href="{0}/api/pdfs/ata-de-resultados-finais/{1}/{2}/{3}?nocache={4}&show_html=true&print=true".format(
                            window.PhanterPWA.ApiServer.remote_address,
                            self.id_escola,
                            self.ano_letivo,
                            self.id_turma,
                            now
                        ),
                        _target="iframe_ata_turma"
                    )
                ),
                _id="botoes_menu_impressao_ata"
            ),
            DIV(_id="container_modal_configuracoes")
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
        self.iframe()
        


    def resize_frame(self):
        h = jQuery(window).height();
        jQuery("#iframe_ata_turma").height(h - 64 - 58 - 66)

    def binds(self):
        jQuery(".botao_abrir_modal_configuracoes").off("click.modal_cfg").on(
            "click.modal_cfg",
            lambda: self.get_informacao_turma()
        )

    def get_informacao_turma(self):
        if self.json_ata is None:
            window.PhanterPWA.GET(
                "api",
                "escola",
                "informacoes",
                self.id_escola,
                self.ano_letivo,
                onComplete=self._after_get_info
            )
        else:
            self.abrir_modal_configuracoes()

    def _after_get_info(self, data, ajax_status):
        if ajax_status == "success":
            self.json_ata = data.responseJSON
            self.abrir_modal_configuracoes()

    def iframe(self):
        now = __new__(Date().getTime())
        add = ""
        if self.data_ata != "":
            dia, mes, ano = self.data_ata.split("/")
            add += "&data={0}-{1}-{2}".format(ano, mes, dia)
        if self.assinante != "":
            add += "&assinante={0}".format(self.assinante)
        if self.diretor != "":
            add += "&diretor={0}".format(self.diretor)
        ifr = IFRAME(
            _id="iframe_ata_turma",
            _name="iframe_ata_turma",
            _src="{0}/api/pdfs/ata-de-resultados-finais/{1}/{2}/{3}?nocache={4}&show_html=true{5}".format(
                window.PhanterPWA.ApiServer.remote_address,
                self.id_escola,
                self.ano_letivo,
                self.id_turma,
                now,
                add
            ),
            _class="iframe_impressao"
        )
        ifr.html_to("#documentos-content")
        self.resize_frame()
        
        jQuery(window).resize(
            lambda: self.resize_frame()
        )
        widgets.FloatMenu(
            "menu_impressao",
            I(_class="fas fa-ellipsis-v"),
            widgets.FloatButton(
                I(_class="fas fa-cog"),
                _class="botao_abrir_modal_configuracoes",
                _title="Configurar Documento",
            ),
            widgets.FloatButton(
                I(_class="fas fa-file-pdf"),
                _class="botao_gerar_pdf",
                _title="Gerar PDF",
                _href="{0}/api/pdfs/ata-de-resultados-finais/{1}/{2}/{3}?nocache={4}{5}".format(
                    window.PhanterPWA.ApiServer.remote_address,
                    self.id_escola,
                    self.ano_letivo,
                    self.id_turma,
                    now,
                    add
                ),
                _target="_blank"
            ),
            widgets.FloatButton(
                I(_class="fas fa-print"),
                _title="Imprimir documento",
                _class="botao_imprimir_diario_de_notas",
                _href="{0}/api/pdfs/ata-de-resultados-finais/{1}/{2}/{3}?nocache={4}&show_html=true&print=true{5}".format(
                window.PhanterPWA.ApiServer.remote_address,
                    self.id_escola,
                    self.ano_letivo,
                    self.id_turma,
                    now,
                    add
                ),
                _target="iframe_ata_turma"
            )
        ).html_to("#botoes_menu_impressao_ata")
        self.binds()

    def abrir_modal_configuracoes(self):
        diretor = self.diretor
        secretario = self.assinante
        data_set_diretor = []
        data_set_secretario = []
        for x in self.json_ata.equipe_diretiva:
            if x.atribuicoes in ["Diretor", "Diretor(a)", "Diretora", "Vice-Diretor", "Vice-Diretora", "Vice-Diretor(a)"]:
                if diretor == "":
                    diretor = "{0}-{1}".format(x.nome_funcionario, x.atribuicoes)
                data_set_diretor.append("{0}-{1}".format(x.nome_funcionario, x.atribuicoes))
            if x.atribuicoes in ["Secretaria", "Secretario", "Secretario(a)"]:
                if secretario == "":
                    secretario = "{0}-{1}".format(x.nome_funcionario, x.atribuicoes)
            data_set_secretario.append("{0}-{1}".format(x.nome_funcionario, x.atribuicoes))
        if diretor != "" and diretor not in data_set_diretor:
            data_set_diretor.append(diretor)
        if secretario != "" and secretario not in data_set_secretario:
            data_set_secretario.append(secretario)
        dia = __new__(Date().getDate())
        mes_int = __new__(Date().getMonth())
        mes = validations.zfill(mes_int + 1, 2)
        ano = __new__(Date().getFullYear())
        if self.data_ata == "":
            self.data_ata = "{0}/{1}/{2}".format(dia, mes, ano)

        content = DIV(
            widgets.Select(
                "diretores",
                label="Escolha o diretor/vice-diretor da escola",
                value=diretor,
                can_empty=True,
                editable=True,
                data_set=data_set_diretor,
                placeholder="Diretor/Vice-diretor"
            ),
            widgets.Select(
                "assinante",
                label="Escolha o funcionário que lavrou a ata",
                value=secretario,
                can_empty=True,
                editable=True,
                data_set=data_set_secretario,
                placeholder="Funcionário-Cargo"
            ),
            widgets.Input(
                "data_lavrado",
                label="Escolha a data que a ata foi lavrada",
                value=self.data_ata,
                format="dd/MM/yyyy",
                kind="date",
                mask="##/##/####",
                icon=I(_class="fas fa-calendar-alt")
            )
        )
        footer = DIV(
            forms.FormButton(
                "botao_salvar_config",
                "Aplicar mudanças",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ),
            _class='phanterpwa-form-buttons-container'
        )
        self.modal_conf_atas = modal.Modal(
            "#container_modal_configuracoes",
            **{
                "title": "O que deseja modificar?",
                "content": content,
                "footer": footer
            }
        )
        self.modal_conf_atas.open()
        jQuery("#phanterpwa-widget-form-form_button-botao_salvar_config").off(
            "click.salvar_config"
        ).on(
            "click.salvar_config",
            lambda: self._on_click_salvar_config()
        )

    def _on_click_salvar_config(self):
        self.diretor = window.PhanterPWA.get_widget("diretores").value()
        self.data_ata = window.PhanterPWA.get_widget("data_lavrado").value()
        self.assinante = window.PhanterPWA.get_widget("assinante").value()
        self.iframe()
        self.modal_conf_atas.close()


class Turma():
    @decorators.check_authorization(lambda: window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME", "Administrador Master Escola", "Coordenação SME"]))
    def __init__(self):
        self.id_escola = window.PhanterPWA.Request.get_arg(1)
        self.ano_letivo = window.PhanterPWA.Request.get_arg(2)
        self.id_turma = window.PhanterPWA.Request.get_arg(3)
        self._fields_permitidos = [
            "numero",
            "aluno",
            "sexo",
            "data_nasc",
            "nome_do_pai",
            "nome_da_mae",
            "responsavel",
            "endereco",
            "ponto_de_referencia",
            "resultado",
            "contatos",
        ]
        self._fields_names = {
            "aluno": "Nome do(a) Aluno(a)",
            "numero": "Nº",
            "data_nasc": "Data de Nascimento",
            "endereco": "Endereco",
            "ponto_de_referencia": "Ponto de Refêrencia",
            "contatos": "Contatos",
            "nome_do_pai": "Nome do Pai",
            "nome_da_mae": "Nome da Mãe",
            "responsavel": "Responsável",
            "sexo": "Sexo",
            "resultado": "Resultado Final"
        }
        self._get_fields()

        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("IMPRIMIR", _class="phanterpwa-breadcrumb"),
                        DIV("TURMA", _class="phanterpwa-breadcrumb"),
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
                        _id="content-turma-imprimir",
                        _class='p-row card e-padding_20'
                    ),
                    _class="phanterpwa-container p-container"
                ),
                _id="documentos-content",
            ),
            DIV(_id="botoes_de_comando_impressao"),
            DIV(_id="escolha_de_campo_div")
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

    def _get_data(self):
        window.PhanterPWA.GET(
            "api",
            "imprimir",
            "turma",
            self.id_escola,
            self.ano_letivo,
            self.id_turma,
            _campos=self.str_fields,
            onComplete=self.after_get
        )

    def after_get(self, data, ajax_status):
        json = data.responseJSON
        now = __new__(Date().getTime())
        html_botoes = CONCATENATE(
            widgets.FloatMenu(
                "menu_impressao",
                I(_class="fas fa-ellipsis-v"),
                widgets.FloatButton(
                    I(_class="fas fa-tasks"),
                    _class="botao_escolher_campos",
                    _title="Escolher Campos",
                ),
                # widgets.FloatButton(
                #     I(_class="fas fa-file-pdf"),
                #     _class="botao_gerar_pdf",
                #     _title="Gerar PDF",
                #     _href="{0}/api/pdfs/turma/{1}/{2}/{3}/?nocache={4}&campos={5}".format(
                #         window.PhanterPWA.ApiServer.remote_address,
                #         self.id_escola,
                #         self.ano_letivo,
                #         self.id_matricula,
                #         now,
                #         self.str_fields,
                #     )
                # ),
                widgets.FloatButton(
                    I(_class="fas fa-print"),
                    _title="Imprimir documento",
                    _class="botao_imprimir_diario_de_notas",
                    _onclick="print();"
                ),
                onOpen=lambda: jQuery(".botao_escolher_campos").off("click.botao_escolher_campos").on("click", lambda: self.abrir_modal_escolher_campos())
            )
        )
        html_botoes.html_to("#botoes_de_comando_impressao")

        series_multi = []

        tabela_dinamica = TABLE(
            _class="tabela_dinamica_turma",
        )
        eh_multi = json.eh_multi
        cont = 0
        turma = json.turma
        nome_escola = json.nome_escola
        cabecalho_escola = json.cabecalho
        for lin in json.data:
            cont += 1
            tbody = TBODY(_class="tabela_dinamica_turma-tbody")
            if cont == 1:
                tbody.append(TR(
                    TH("Nº", _class="tabela_dinamica_turma-campo_cabecalho campo_numero"),
                    TH("Nome do(a) aluno(a)", _class="tabela_dinamica_turma-campo_cabecalho campo_aluno"),
                    *[TH(self._fields_names[cam], _class="tabela_dinamica_turma-campo_cabecalho campo_{0}".format(cam)) for cam in self.fields],
                ))
            if eh_multi and lin[2] not in series_multi:
                series_multi.append(lin[2])
                tbody.append(TR(
                    TH(lin[2], _class="tabela_dinamica_turma-nome_da_serie", _colspan=len(self.fields) + 2),
                    
                ))
            numero_aluno = lin[0]
            nome_aluno = lin[1]
            tbody.append(TR(
                TD(numero_aluno, _class="campos_turma campo_numero"),
                TD(nome_aluno, _class="campos_turma campo_aluno"),
                *[TD(lin[3][cam], _class="campos_turma campo_{0}".format(cam)) for cam in self.fields]
            ))
            tabela_dinamica.append(tbody)


        logo = "{0}/api/escolas/{1}/image".format(
            window.PhanterPWA.ApiServer.remote_address,
            self.id_escola
        )
        if ajax_status == "success":
            html_turma_content = DIV(
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
                                    DIV(H5(cabecalho_escola), _class="sme_cabecalho_sme_dados_escola"),
                                    DIV(DIV("LISTA DE ALUNOS DA TURMA ", STRONG(turma, _style="text-transform: uppercase;"), _class="tudo_centralizado titulo_tabela_dinamica"), _class="sme_cabecalho_titulo_documento"),
                                    DIV(
                                        tabela_dinamica if cont > 0 else "NÃO HÁ ALUNOS NA TURMA",
                                        _class="sme_documento_conteudo"
                                    ),
                                    _id="pagina_{0}_declaracao".format(self.id_matricula),
                                    _class="p-row"
                                ),
                                _class="imprimir_matricula_wrapper imprimir_documentos_wrapper"
                            ),
                            _class="imprimir_alunos_da_turma"
                        ),
                    ),

                    _class="media-print-visible"
                ),
                _class="folhas_para_imprimir phanterpwa-simple-media-print"
            )
            html_turma_content.html_to("#documentos-content")


    def _get_fields(self):
        fields = window.PhanterPWA.Request.get_param("campos")
        self.fields = ["data_nasc", "endereco", "contatos"]
        self.str_fields = "data_nasc,endereco,contatos"
        if fields is not None:
            console.log(fields)
            fsplit = fields.split(",")
            console.log(fsplit)
            lis_split = []
            for x in fsplit:
                console.log(x)
                if x in self._fields_permitidos:

                    lis_split.append(x)
            console.log(lis_split)
            if len(lis_split) > 0:
                self.fields = lis_split
                self.str_fields = ",".join(lis_split)


    def abrir_modal_escolher_campos(self):
        series = self.fields
        fixo = ["Nº", "Nome do(a) Aluno(a)"]
        lista_de_series = [["numero", "Nº"], ["aluno", "Nome do(a) Aluno(a)"]]
        data_set = []
        for x in self._fields_permitidos:
            data_set.append([x, self._fields_names[x]])
        for x in self.fields:
            lista_de_series.append([x, self._fields_names[x]])
        wg = widgets.ListString(
            "lista_de_series_escola_ano",
            label="Seleção de Séries/Anos",
            placeholder="Escolha uma série/ano abaixo.",
            value=lista_de_series,
            data_set=data_set,
            editable=False,
            fixed=fixo
        )
        content = DIV(
            H3("ESCOLHA OS CAMPOS QUE DESEJA ADICIONAR"),
            DIV(
               wg
            ),
            _class="p-row"
        )
        footer = DIV(
            forms.FormButton(
                "confirmar_escolha_de_campos",
                "Confirmar",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ),
            _class='phanterpwa-form-buttons-container'
        )
        self.modal_escolher_campos = modal.Modal(
            "#escolha_de_campo_div",
            **{
                "title": "Escolha os campos do documento",
                "content": content,
                "footer": footer
            }
        )
        self.modal_escolher_campos.open()
        jQuery("#phanterpwa-widget-form-form_button-confirmar_escolha_de_campos").off(
            "click.confirmar_escolha_de_campos"
        ).on(
            "click.confirmar_escolha_de_campos",
            lambda: self._on_confirmar_escolha_de_campos(wg)
        )

    def _on_confirmar_escolha_de_campos(self, wg):
        wg.value()
        li = []
        for x in wg.value():
            if x[0] not in ["aluno", "numero"]:
                li.append(x[0])

        self.fields = li
        self.str_fields = ",".join(li)

        window.PhanterPWA.set_push_way(
            window.PhanterPWA.relative_way(
                "imprimir",
                "turma",
                self.id_escola,
                self.ano_letivo,
                self.id_turma,
                _campos=self.str_fields
            )
        )
        self._get_data()
        self.modal_escolher_campos.close()


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
                        _id="content-turma-imprimir",
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

    @decorators.check_authorization(lambda: window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME", "Administrador Master Escola", "Coordenação SME"]))    
    def initialize(self):
        self.id_matricula = window.PhanterPWA.Request.get_arg(1)
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("IMPRIMIR", _class="phanterpwa-breadcrumb"),
                        DIV("ZONAS DE TRANSPORTE", _class="phanterpwa-breadcrumb"),
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
                        _id="content-alunos-transporte",
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



    def _get_data(self):
        window.PhanterPWA.GET(
            "api",
            "estatisticas",
            "transporte",
            self.id_escola,
            self.ano_letivo,
            onComplete=self.after_get
        )

    def after_get(self, data, ajax_status):
        json = data.responseJSON
        self.localidades = dict(json.data.localidades)
        self.escola = json.data.escola

        # data_assinatura = json.data.data_matricula_formatada

        logo = "{0}/api/escolas/{1}/image".format(
            window.PhanterPWA.ApiServer.remote_address,
            self.id_escola
        )

        if ajax_status == "success":

            html_lista_novatos = DIV(
                _class="p-row"
            )
            table = XTABLE(
                "tabela_escola_{0}".format(self.id_escola),
                XTRH(
                    "tabela_th_escola_{0}".format(self.id_escola),
                    "Nome",
                    "Data de Nascimento",
                    "Série",
                    "Turno",
                    "Endereço",
                    " "
                )
            )
            self.conta_localidades = dict()
            for loc_ in self.localidades.keys():
                self.conta_localidades[loc_] = 0
                table.append(TR(TH(loc_, _colspan="6", _style="text-align: center; background-color: grey;")))
                for aln in self.localidades[loc_]:
                    self.conta_localidades[loc_] += 1
                    data_de_nascimento = validations.format_iso_date_datetime(
                        aln.data_de_nascimento, "dd/MM/yyyy", "date"
                    )
                    table.append(XTRD(
                        "tabela_th_aluno_{0}".format(aln.id_aluno),
                        aln.aluno,
                        data_de_nascimento,
                        aln.serie,
                        aln.turno,
                        aln.endereco,
                        TD(
                            A(
                                I(_class="fas fa-list-alt"),
                                **{
                                    "_class": "botao_turma_detalhada icon_button",
                                    "_title": "Turmas detalhadas",
                                    "_href": window.PhanterPWA.XWAY("alunos", aln.id_aluno, "editar"),
                                    "_target": "_blank"
                                }
                            )
                        )
                    ))
            tabela_resu = XTABLE(
                "tabela_resumo_localidade_{0}".format(self.id_escola),
                XTRH(
                    "tabela_th_resumo_localidade_{0}".format(self.id_escola),
                    "Zona de Transporte",
                    "Quantidade de Alunos",
                )
            )
            id_total_locs = 0
            for conts in self.conta_localidades.keys():
                id_total_locs += 1
                tabela_resu.append(
                    XTRD(
                        "tabela_resumo_localidade_dados_{0}".format(id_total_locs),
                        conts,
                        self.conta_localidades[conts]
                    )
                )


            folha2_content = DIV(
                DIV(
                    DIV(
                        DIV(
                            DIV(
                                DIV(
                                    DIV(H2("ZONAS DE TRANSPORTE E SUAS RESPECTIVAS QUANTIDADE DE ALUNOS"), _class="sme_cabecalho_titulo_documento"),
                                    DIV(
                                        tabela_resu,
                                        _class="sme_documento_conteudo"
                                    ),
                                    _class="p-row"
                                ),
                                DIV(
                                    DIV(H2("LISTA DE ALUNOS POR ZONA DE TRANSPORTE"), _class="sme_cabecalho_titulo_documento"),
                                    DIV(
                                        table,
                                        _class="sme_documento_conteudo"
                                    ),
                                    _class="p-row"
                                ),
                                _class="p-container extend"
                            ),
                        ),
                    ),
                    _class="media-print-visible"
                ),
                _class="folhas_para_imprimir phanterpwa-simple-media-print"
            )
            folha2_content.html_to("#content-alunos-transporte")


__pragma__('nokwargs')
