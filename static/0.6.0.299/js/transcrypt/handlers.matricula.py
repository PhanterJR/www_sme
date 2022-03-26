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
import handlers.alunos as alunos
import handlers.anos_letivos as anos_letivos
import handlers.views.matriculas as matriculas
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
P = helpers.XmlConstructor.tagger("p")
TD = helpers.XmlConstructor.tagger("td")
LI = helpers.XmlConstructor.tagger("li")
STRONG = helpers.XmlConstructor.tagger("strong")
IMG = helpers.XmlConstructor.tagger("img", True)
H2 = helpers.XmlConstructor.tagger("h2")
H3 = helpers.XmlConstructor.tagger("h3")
INPUT = helpers.XmlConstructor.tagger("input", True)
I18N = helpers.I18N
XTABLE = widgets.Table
XML = helpers.XML
XTRD = widgets.TableData
XTRH = widgets.TableHead
XFOOTER = widgets.TableFooterPagination
TABLE = helpers.XmlConstructor.tagger("table")
TD = helpers.XmlConstructor.tagger("td")
TR = helpers.XmlConstructor.tagger("tr")
XSECTION = helpers.XSECTION

__pragma__('kwargs')


class Index(gatehandler.Handler):
    @decorators.check_authorization(lambda: window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME", "Administrador Master Escola", "Coordenação SME"]))
    def initialize(self):
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("MATRICULAR", _class="phanterpwa-breadcrumb"),
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
                    _id="content-matricula",
                    _class='p-row card e-padding_20'
                ),

                _class="phanterpwa-container p-container"
            )
        )
        html.html_to("#main-container")
        arg0 = window.PhanterPWA.Request.get_arg(0)
        arg1 = window.PhanterPWA.Request.get_arg(1)
        arg2 = window.PhanterPWA.Request.get_arg(2)
        arg3 = window.PhanterPWA.Request.get_arg(3)
        arg4 = window.PhanterPWA.Request.get_arg(4)
        arg5 = window.PhanterPWA.Request.get_arg(5)
        if self.request.get_arg(0) is not None:
            self.Matricula = Matricula(self, arg0, arg1, arg2, arg3, arg4, arg5)
            BackButton = left_bar.LeftBarButton(
                "back_localizar_matriculas",
                "Voltar",
                I(_class="fas fa-arrow-circle-left"),
                **{"_phanterpwa-way": "matriculas",
                    "position": "top",
                    "ways": [lambda r: True if r.startswith("matriculas") or r.startswith("matriculas/") else False]}
            )
            window.PhanterPWA.Components['left_bar'].add_button(BackButton)
        else:
            window.PhanterPWA.open_way("matricular/")


class Matricula(helpers.XmlConstructor):
    def __init__(self, index_instance, arg0, arg1, arg2, arg3, arg4, arg5):
        self.index_instance = index_instance
        self.arg0 = arg0
        self.arg1 = arg1
        self.arg2 = arg2
        self.arg3 = arg3
        self.arg4 = arg4
        self.arg5 = arg5
        if self.arg0 == "novo":
            window.PhanterPWA.open_way("alunos/novo/matricula")

        elif str(arg0).isdigit() and (arg1 is None or arg1 is js_undefined):
            html = escolas.EscolherEscola(
                id_target="#content-matricula",
                callback_link=lambda id_escola: "#_phanterpwa:/matricula/{0}/{1}".format(self.arg0, id_escola)
            )
        elif str(arg0).isdigit() and str(arg1).isdigit() and (arg2 is None or arg2 is js_undefined):
            html = anos_letivos.EscolherAnoLetivo(
                id_target="#content-matricula",
                callback_link=lambda ano: "#_phanterpwa:/matricula/{0}/{1}/{2}".format(self.arg0, self.arg1, ano)
            )
        elif str(arg0).isdigit() and str(arg1).isdigit() and str(arg2).isdigit():
            self.xml_editar_aluno()
            # self.get_form_matricula(arg0, arg1, arg2)

    def xml_editar_aluno(self):
        logo = "{0}/api/escolas/{1}/image".format(
            window.PhanterPWA.ApiServer.remote_address,
            self.arg1
        )
        arg3 = window.PhanterPWA.Request.get_arg(3)
        arg4 = window.PhanterPWA.Request.get_arg(4)
        if arg3 == "editar" and str(arg4).isdigit():
            self.get_form_matricula(self.arg4)
        elif arg3 == "conferido":
            self.get_form_matricula()
        else:
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
                                        P("ANTES DE PROSSEGUIR COM A MATRÍCULA DO ALUNO NESTA UNIDADE ESCOLAR ",
                                            "É IMPORTANTE VERIFICAR SE ESTÁ TUDO EM ORDEM COM SEU CADASTRO."),
                                        P("VOCÊ ESTÁ MATRICULANDO NO ANO LETIVO DE ", STRONG(self.arg2, _style="text-style:bold"), ", CASO ESTE NÃO",
                                            " SEJA O ANO CORRETO ", A("CLIQUE AQUI.", _href=window.PhanterPWA.XWAY(
                                                "matricula", self.arg0, self.arg1), _class="btn btn-inline btn-inline")),
                                        # H3("Tenha em mente que a personalização do nome da série irá afetar"
                                        #     " como a série será representada nos documentos. Para personalizar"
                                        #     " basta clicar em ", DIV(I(_class="fas fa-ellipsis-v"), _style ="display: inline-block; width: 30px; text-align:center;"), "."),
                                        # H3("Para mudar a ordem basta arrastar à ordem desejada."),
                                        _class="p-col w1p100 w4p70",
                                        _id="u_informacao_series"
                                    ),
                                    _class="p-row"
                                ),
                                DIV(
                                    DIV(
                                        DIV(
                                            DIV(preloaders.android, _style="width: 300px; height: 300px; overflow: hidden; margin: auto;"),
                                            _style="text-align:center; padding: 50px 0;"
                                        ),
                                        _id="formulario_editar_aluno"),
                                    _class="p-col w1p100",
                                ),
                                _class="p-row e-padding_20w"
                            ),
                            _class="phanterpwa-container-section"
                        ),
                        **{
                            "_id": "matricula-editar-aluno",
                            "_class": "p-row"
                        }
                    ),
                    _class="phanterpwa_tables_search_wrapper"
                ),
                _class='series-container phanterpwa-card-container'
            )
            html.html_to("#content-matricula")
            self.alunos = alunos.Aluno(self, self.arg0, "editar", "#formulario_editar_aluno", lambda: self.process_data_put())

    def visualizar(self, id_matricula, params):
        url_image = "{0}/api/matriculas/{1}/image".format(
            window.PhanterPWA.get_api_address(),
            id_matricula
        )
        matricula = params["matricula"]
        nome_da_mae = params["nome_da_mae"]
        matricula = params["matricula"]
        cpf = params["cpf"]
        qrcode = params["qrcode"]
        rg_string = params["rg_string"]
        data_de_nascimento = params["data_de_nascimento"]
        self._carteira = DIV(
            DIV(
                DIV(
                    DIV(
                        DIV(
                            DIV(
                                DIV(
                                    IMG(
                                        _src=url_image
                                    ),
                                    _class="carteira-image"
                                ),
                                DIV(
                                    DIV(
                                        DIV(
                                            DIV(
                                                "NOME",
                                                _class="carteira-data-field"
                                            ),
                                            DIV(
                                                matricula,
                                                _class="carteira-data-nome carteira-data-value"
                                            ),
                                            _class="carteira-data-col"
                                        ),
                                        _class="p-col w1p100"
                                    ),
                                    DIV(
                                        DIV(
                                            DIV(
                                                "NOME DA MÃE",
                                                _class="carteira-data-field"
                                            ),
                                            DIV(
                                                nome_da_mae,
                                                _class="carteira-data-nome_da_mae carteira-data-value"
                                            ),
                                            _class="carteira-data-col"
                                        ),
                                        _class="p-col w1p100"
                                    ),
                                    DIV(
                                        DIV(
                                            DIV(
                                                'MATRÍCULA',
                                                _class="carteira-data-field"
                                            ),
                                            DIV(
                                                matricula,
                                                _class="carteira-data-matricula carteira-data-value"
                                            ),
                                            _class="carteira-data-col"
                                        ),
                                        _class="p-col w1p40"
                                    ),
                                    DIV(
                                        DIV(
                                            DIV(
                                                "CPF",
                                                _class="carteira-data-field"
                                            ),
                                            DIV(cpf,
                                                _class="carteira-data-cpf carteira-data-value"),
                                            _class="carteira-data-col"
                                        ),
                                        _class="p-col w1p60"
                                    ),
                                    DIV(
                                        DIV(
                                            DIV(
                                                "DATA DE NASCIMENTO",
                                                _class="carteira-data-field"
                                            ),
                                            DIV(data_de_nascimento,
                                                _class="carteira-data-data_de_nascimento carteira-data-value"),
                                            _class="carteira-data-col"
                                        ),
                                        _class="p-col w1p40"
                                    ),
                                    DIV(
                                        DIV(
                                            DIV(
                                                "RG",
                                                _class="carteira-data-field"
                                            ),
                                            DIV(rg_string,
                                                _class="carteira-data-rg_string carteira-data-value"),
                                            _class="carteira-data-col"
                                        ),
                                        _class="p-col w1p60"
                                    ),
                                    _class="carteira-data-container p-row"
                                ),
                                _class="p-col w1p30"
                            ),
                            DIV(
                                DIV(
                                    _class="carteira-logo"
                                ),
                                DIV(_class="carteira-qrcode"),
                                _class="p-col w1p70"
                            ),
                            _class="p-row"
                        ),
                        _class="carteira_containar"
                    ),
                    _class="visualizar_matricula_container a4"
                ),
                _class="phanterpwa-media-print"
            ),
            _class="phanterpwa-media-print-container"
        )

        self._carteira.html_to("#content-matricula")
        window.PhanterPWA.LOAD(**{
            "args": ["loads", "svg_logo.html"],
            "onComplete": lambda data: jQuery("#content-matricula").find(".carteira-logo").html(data),
        })
        url = "{0}/api/associado/{1}".format(
            window.PhanterPWA.ApiServer.remote_address,
            qrcode
        )
        qrcode = __new__(QRCode(jQuery("#content-matricula").find(".carteira-qrcode")[0], {
            "text": url,
            "width": 125,
            "height": 125,
            "colorDark": "#000000",
            "colorLight": "#ffffff",
            "correctLevel": QRCode.CorrectLevel.H
        }))

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            if data.status == 202:
                if json.razoes == "faltam_series":
                    window.PhanterPWA.open_way("series/{0}/{1}/matricula/{2}".format(self.arg1, self.arg2, self.arg0))
                elif json.razoes == "matricula_existe":
                    window.PhanterPWA.flash(json.message)
                    id_matricula = json.data.id
                    id_escola = json.data.id_escola
                    ano_letivo = json.data.ano_letivo
                    prof_pai = json.data.prof_pai
                    prof_mae = json.data.prof_mae
                    id_aluno = json.data.id_aluno
                    sexo = json.data.sexo
                    nome_do_aluno = json.data.nome_do_aluno
                    data_de_nascimento = json.data.data_de_nascimento
                    nome_do_pai = json.data.nome_do_pai
                    nome_da_mae = json.data.nome_da_mae
                    naturalidade = json.data.naturalidade
                    endereco = json.data.endereco
                    serie = json.data.serie
                    nome_do_responsavel = json.data.nome_do_responsavel
                    data_mat = json.data.data_mat
                    novato = json.data.novato
                    admitido = json.data.admitido
                    unidade_admitido = json.data.unidade_admitido
                    ano_anterior = json.data.ano_anterior
                    serie_ant = json.data.serie_ant
                    resultado_final = json.data.resultado_final
                    resultado_anterior = json.data.resultado_anterior
                    numero_aluno = json.data.numero_aluno
                    turma = json.data.turma

                    card = matriculas.Visualizar(
                        id_matricula,
                        id_escola,
                        ano_letivo,
                        prof_pai,
                        prof_mae,
                        id_aluno,
                        nome_do_aluno,
                        sexo,
                        data_de_nascimento,
                        nome_do_pai,
                        nome_da_mae,
                        naturalidade,
                        endereco,
                        serie,
                        nome_do_responsavel,
                        data_mat,
                        novato,
                        admitido,
                        unidade_admitido,
                        ano_anterior,
                        serie_ant,
                        resultado_final,
                        resultado_anterior,
                        numero_aluno,
                        turma
                    )
                    card.html_to("#content-matricula")
            else:
                json = data.responseJSON
                self.process_data(json)

    def process_data_put(self, data):
        arg0 = window.PhanterPWA.Request.get_arg(0)
        arg1 = window.PhanterPWA.Request.get_arg(1)
        arg2 = window.PhanterPWA.Request.get_arg(2)
        window.PhanterPWA.open_xway("matricula", arg0, arg1, arg2, "conferido")

    def process_data(self, json):
        self.nova_matricula = True

        if json.data.matricula.id is not js_undefined and json.data.matricula.id is not None:
            self.nova_matricula = False
        sexo = json.data.aluno.sexo
        data_de_nascimento = json.data.aluno.data_de_nascimento
        if data_de_nascimento is not None:
            adn, mdn, ddn = data_de_nascimento.split("-")

        data_da_matricula = json.data.data_da_matricula
        aad, mmd, ddd = data_da_matricula.split("-")
        nome_aluno = json.data.aluno.nome

        logo = "{0}/api/escolas/{1}/image".format(
            window.PhanterPWA.ApiServer.remote_address,
            self.arg1
        )
        ano_letivo = self.arg2
        P1 = "O(A) ALUNO(A) "
        RETIRALO = "RETIRÁ-LO(A)"
        if sexo == "1" or sexo == 1 or sexo == "Masculino":
            RETIRALO = "RETIRÁ-LO"
            P1 = "O ALUNO "
        elif sexo == "2" or sexo == 2 or sexo == "Feminino":
            RETIRALO = "RETIRÁ-LA"
            P1 = "A ALUNA "
        turma = json.data.turma
        aa, mm, dd = json.data.aluno.data_base.split("-")
        str_aluno = ""
        if json.data.aluno.idade_aluno is not None or json.data.aluno.idade_aluno_pela_data_base is not None:
            str_aluno = CONCATENATE()
        if json.data.aluno.idade_aluno is not None:
            str_aluno.append(SPAN(" NA DATA DESTA MATRÍCULA (", STRONG(ddd, "/", mmd, "/", aad), ") A IDADE D", P1, " É DE ", STRONG(json.data.aluno.idade_aluno, " ANOS.")))
        if json.data.aluno.idade_aluno_pela_data_base is not None:
            str_aluno.append(SPAN(" NA DATA BASE PARA O CÁLCULO DA SÉRIE (", STRONG(dd, "/", mm, "/", aa), ") A IDADE D", P1, " É DE ", STRONG(json.data.aluno.idade_aluno_pela_data_base, " ANOS.")))
        multisseriado = json.data.multisseriado
        arg3 = window.PhanterPWA.Request.get_arg(3)
        arg4 = window.PhanterPWA.Request.get_arg(4)
        if arg3 == "editar" and str(arg4).isdigit():
            compl = SPAN(
                "PODEMOS EDITAR A MATRÍCULA D",
                P1,
                " NO ANO LETIVO ESPECIFICADO (",
                STRONG(ano_letivo),
                ")"
            )
        else:
            compl = SPAN(
                P1,
                "JÁ POSSUI UMA MATRÍCULA NO ANO LETIVO DE ",
                STRONG(ano_letivo)
            )

        if turma is not None and turma is not js_undefined:
            if multisseriado is True:
                texto = CONCATENATE(
                    P(
                        "MATRÍCULA DE ",
                        STRONG(nome_aluno, _style="color: orange; text-transform: uppercase;"),
                        " (DATA DE NASCIMENTO:", STRONG(ddn, "/", mdn, "/", adn), ")."
                    ),
                    P(str_aluno),
                    P(
                        compl,
                        ", PORÉM AS SÉRIES SERÃO LIMITADAS ÀS SÉRIES DA TURMA MULTISSERIADA A QUAL ", P1, " SE ENCONTRA (",
                        STRONG(turma, _style="text-transform: uppercase;"),
                        "). PARA UMA OFERTA PLENA DE SÉRIES É NECESSÁRIO ",
                        RETIRALO,
                        " DA TURMA."
                    ),
                    P(
                        "OBSERVE QUE É POSSÍVEL EDITAR CAMPOS QUE ANTES NÃO ERAM POSSÍVEIS, COMO O NOME DO ALUNO, PORÉM",
                        " ESTA ALTERAÇÃO SÓ TERÁ EFEITO NA MATRÍCULA (ATAS, DIÁRIOS) DESTE ANO LETIVO, OU SEJA, NÃO IRÁ ALTERAR"
                        " OS DADOS DOS ALUNOS."
                    )
                )
            else:
                texto = CONCATENATE(
                    P(
                        "MATRÍCULA DE ",
                        STRONG(nome_aluno, _style="color: orange; text-transform: uppercase;"),
                        " (DATA DE NASCIMENTO:", STRONG(ddn, "/", mdn, "/", adn), ")."
                    ),
                    P(str_aluno),
                    P(
                        compl,
                        ", PORÉM NÃO É POSSÍVEL EDITAR A SÉRIE, POIS ",
                        P1,
                        " SE ENCONTRA NA TURMA ",
                        STRONG(turma, _style="text-transform: uppercase;"),
                        ". PARA PODER EDITAR A SÉRIE É NECESSÁRIO ",
                        RETIRALO,
                        " DA TURMA."
                    ),
                    P(
                        "OBSERVE QUE É POSSÍVEL EDITAR CAMPOS QUE ANTES NÃO ERAM POSSÍVEIS, COMO O NOME DO ALUNO, PORÉM",
                        " ESTA ALTERAÇÃO SÓ TERÁ EFEITO NA MATRÍCULA (ATAS, DIÁRIOS) DESTE ANO LETIVO, OU SEJA, NÃO IRÁ ALTERAR"
                        " OS DADOS DOS ALUNOS."
                    )
                )
        elif self.nova_matricula:

            if json.data.sugestao_serie is not None:
                str_aluno.append(" DE ACORDO COM A SUA IDADE, ")
                if len(json.data.sugestao_serie) == 1:
                    str_aluno.append("A SÉRIE IDEAL É ")
                    str_aluno.append(STRONG(json.data.sugestao_serie[0]))
                    str_aluno.append(".")
                elif len(json.data.sugestao_serie) == 2:
                    str_aluno.append("AS SUGESTÕES DE SÉRIES SÃO: ")
                    str_aluno.append(STRONG(json.data.sugestao_serie[0]))
                    str_aluno.append(" E ")
                    str_aluno.append(STRONG(json.data.sugestao_serie[1]))
                    str_aluno.append(".")
                elif len(json.data.sugestao_serie) > 2:
                    str_aluno.append("AS SUGESTÕES DE SÉRIES SÃO: ")
                    q_su = len(json.data.sugestao_serie)
                    cont_su = 1
                    for x in json.data.sugestao_serie:
                        if cont_su == 1:
                            str_aluno.append(STRONG(x))
                        elif cont_su == q_su:
                            str_aluno.append(" E ")
                            str_aluno.append(STRONG(x))
                        else:
                            str_aluno.append(", ")
                            str_aluno.append(STRONG(x))
                        cont_su += 1
                    str_aluno.append(".")

            texto = CONCATENATE(
                P(
                    "MATRÍCULA DE ", STRONG(nome_aluno, _style="color: orange; text-transform: uppercase;"),
                    " (DATA DE NASCIMENTO:", STRONG(ddn, "/", mdn, "/", adn), ")."
                ),
                P("AGORA VAMOS CRIAR UMA NOVA MATRÍCULA PARA ", P1, "NO ANO LETIVO DE ", STRONG(ano_letivo), "."),
                P(str_aluno),
                P("OBSERVE QUE ALGUNS DADOS NÃO PODEM SER ALTERADOS (COMO NOME DO ALUNO POR EXEMPLO), PARA ALTERAR ",
                    "VOCÊ PODE EDITAR A MATRÍCULA POSTERIORMENTE OU VOLTAR A TELA ANTERIOR."
                )
            )
        else:

            texto = CONCATENATE(
                P(
                    "MATRÍCULA DE ", STRONG(nome_aluno, _style="color: orange; text-transform: uppercase;"),
                    " (DATA DE NASCIMENTO:", STRONG(ddn, "/", mdn, "/", adn), ")."
                ),
                P(P1, "JÁ POSSUI UMA MATRÍCULA NO ANO LETIVO DE ", STRONG(ano_letivo), ", PORTANTO É POSSÍVEL EDITÁ-LA."),
                P("OBSERVE QUE É POSSÍVEL EDITAR CAMPOS QUE ANTES NÃO ERAM POSSÍVEIS, COMO O NOME DO ALUNO, PORÉM",
                    " ESTA ALTERAÇÃO SÓ TERÁ EFEITO NA MATRÍCULA (ATAS, DIÁRIOS) DESTE ANO LETIVO, OU SEJA, NÃO IRÁ ALTERAR"
                    " OS DADOS DOS ALUNOS."
                )
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
                                    texto,
                                    # H3("Tenha em mente que a personalização do nome da série irá afetar"
                                    #     " como a série será representada nos documentos. Para personalizar"
                                    #     " basta clicar em ", DIV(I(_class="fas fa-ellipsis-v"), _style ="display: inline-block; width: 30px; text-align:center;"), "."),
                                    # H3("Para mudar a ordem basta arrastar à ordem desejada."),
                                    _class="p-col w1p100 w4p70",
                                    _id="u_informacao_series"
                                ),
                                _class="p-row"
                            ),
                            DIV(
                                DIV(
                                    DIV(
                                        DIV(preloaders.android, _style="width: 300px; height: 300px; overflow: hidden; margin: auto;"),
                                        _style="text-align:center; padding: 50px 0;"
                                    ),
                                    _id="formulario_matricula_aluno"),
                                _class="p-col w1p100",
                            ),
                            _class="p-row e-padding_20w"
                        ),
                        _class="phanterpwa-container-section"
                    ),
                    **{
                        "_id": "matricula-editar-aluno",
                        "_class": "p-row"
                    }
                ),
                _class="phanterpwa_tables_search_wrapper"
            ),
            _class='series-container phanterpwa-card-container'
        )
        html.html_to("#content-matricula")

        self.form = forms.Form(json.data.matricula)
        self.form.html_to("#formulario_matricula_aluno")
        self.binds()

    def binds(self):
        forms.SignForm("#form-matriculas", after_sign=lambda: forms.ValidateForm("#form-matriculas"))
        jQuery(
            "#phanterpwa-widget-form-submit_button-matriculas"
        ).off(
            "click.submit_matriculas_button"
        ).on(
            "click.submit_matriculas_button",
            lambda: self.submit(this)
        )

    def get_form_matricula(self, nome_aluno=None):
        arg0 = window.PhanterPWA.Request.get_arg(0)
        arg1 = window.PhanterPWA.Request.get_arg(1)
        arg2 = window.PhanterPWA.Request.get_arg(2)
        arg3 = window.PhanterPWA.Request.get_arg(3)
        arg4 = window.PhanterPWA.Request.get_arg(4)
        id_aluno = arg0
        id_escola = arg1
        ano_letivo = arg2
        id_matricula = arg4
        if arg3 == "editar" and str(arg4).isdigit():
            window.PhanterPWA.GET(
                "api",
                "matricular",
                id_escola,
                ano_letivo,
                id_aluno,
                id_matricula,
                onComplete=self.after_get
            )

        else:
            window.PhanterPWA.GET(
                "api",
                "matricular",
                id_escola,
                ano_letivo,
                id_aluno,
                onComplete=self.after_get
            )

    def submit(self, el):
        if jQuery(el)[0].hasAttribute("disabled"):
            window.PhanterPWA.flash(html=I18N("The form has errors!"))
        else:
            form_matricula = jQuery("#form-matriculas")[0]
            form_matricula = __new__(FormData(form_matricula))
            id_aluno = self.arg0
            id_escola = self.arg1
            ano_letivo = self.arg2
            if self.arg1 == "aluno-conferido":
                id_escola = self.arg2
                ano_letivo = self.arg3
            if self.nova_matricula:
                window.PhanterPWA.ApiServer.POST(**{
                    'url_args': ["api", "matricula", id_aluno, id_escola, ano_letivo],
                    'form_data': form_matricula,
                    'onComplete': self.after_submit
                })
            else:
                window.PhanterPWA.ApiServer.PUT(**{
                    'url_args': ["api", "matricula", id_aluno, id_escola, ano_letivo],
                    'form_data': form_matricula,
                    'onComplete': self.after_submit
                })

    def after_submit(self, data, ajax_status):

        self.form.process_api_response(data)
        retornar = window.PhanterPWA.Request.get_param("retornar")
        json = data.responseJSON
        if data.status == 200 and retornar is not None:
            window.PhanterPWA.open_way(retornar)
        elif data.status == 200 and self.nova_matricula:
            window.PhanterPWA.open_way("imprimir/matricula/{0}".format(json.id_matricula))
        elif data.status == 200:
            window.PhanterPWA.open_way("imprimir/matricula/{0}".format(json.id_matricula))
        elif data.status == 400:
            forms.SignForm("#form-matriculas")


__pragma__('nokwargs')
