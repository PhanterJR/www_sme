import phanterpwa.frontend.helpers as helpers
import phanterpwa.frontend.components.widgets as widgets
import phanterpwa.frontend.forms as forms
import phanterpwa.frontend.components.modal as modal
import phanterpwa.frontend.preloaders as preloaders
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
H3 = helpers.XmlConstructor.tagger("h3")
P = helpers.XmlConstructor.tagger("p")
LI = helpers.XmlConstructor.tagger("li")
STRONG = helpers.XmlConstructor.tagger("strong")
IMG = helpers.XmlConstructor.tagger("img", True)
INPUT = helpers.XmlConstructor.tagger("input", True)
I18N = helpers.I18N
XTABLE = widgets.Table
XML = helpers.XML
XTRD = widgets.TableData
XTRH = widgets.TableHead
XFOOTER = widgets.TableFooterPagination
LABEL = helpers.XmlConstructor.tagger("label")
XSECTION = helpers.XSECTION
TD = helpers.XmlConstructor.tagger("td")
TR = helpers.XmlConstructor.tagger("tr")
BR = helpers.XmlConstructor.tagger("br", True)

__pragma__('kwargs')


class Visualizar(helpers.XmlConstructor):
    def __init__(
            self,
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
            turma,
        ):

        logo = "{0}/api/escolas/{1}/image".format(
            window.PhanterPWA.ApiServer.remote_address,
            id_escola
        )

        if data_de_nascimento is not None:
            ano, mes, dia = data_de_nascimento.split("-")
            data_de_nascimento = "{0}/{1}/{2}".format(dia, mes, ano)
        else:
            data_de_nascimento = STRONG("Não definido!", _style="color: red;")

        if nome_do_responsavel is None:
            nome_do_responsavel = STRONG("Não definido!", _style="color: red;")

        if data_mat is not None:
            ano, mes, dia = data_mat.split("-")
            data_mat = "{0}/{1}/{2}".format(dia, mes, ano)
        else:
            data_mat = STRONG("Não definido!", _style="color: red;")

        if sexo == "1" or sexo == 1:
            l_o_aluno = "O aluno"
            label_nome_do_aluno = "Nome do aluno: "
            l_dados_do_aluno = "Dados do Aluno"
            novato = "novato"
            admitido = "admitido"

        elif sexo == "2" or sexo == 2:
            l_o_aluno = "A aluna"
            label_nome_do_aluno = "Nome da aluna: "
            l_dados_do_aluno = "Dados da Aluna"
            novato = "novata"
            admitido = "admitida"

        else:
            l_o_aluno = "O(A) aluno(a)"
            label_nome_do_aluno = "Nome do(a) aluno(a): "
            l_dados_do_aluno = "Dados do(a) Aluno(a)"
            novato = "novato(a)"
            admitido = "admitido(a)"

        xml_endereco = TR(
            TD(
                DIV(
                    STRONG("Endereço: ", _class="rotulo"),
                    SPAN(STRONG("Não definido!", _style="color: red;"), _class="dado"),
                    _class="label_e_campo"
                ),
                _colspan=2,
                _class="label_e_campo_wrapper"
            )
        )
        if endereco is not None and endereco != "":
            xml_endereco = TR(
                TD(
                    DIV(
                        STRONG("Endereço: ", _class="rotulo"),
                        SPAN(endereco, _class="dado"),
                        _class="label_e_campo"
                    ),
                    _colspan=2,
                    _class="label_e_campo_wrapper"
                )
            )

        xml_naturalidade = TD(
            DIV(
                STRONG("Naturalidade: ", _class="rotulo"),
                SPAN(STRONG("Não definido!", _style="color: red;"), _class="dado"),
                _class="label_e_campo"
            ),
            _class="label_e_campo_wrapper"
        )

        xml_turma_atual = TR(
            TD(
                DIV(
                    STRONG(l_o_aluno, " não está em uma turma ainda!", _style="color: red;"),
                    _class="label_e_campo"
                ),
                _colspan=2,
                _class="label_e_campo_wrapper"
            )
        )
        if turma is not None:
            if str(numero_aluno).isdigit():
                xml_turma_atual = TR(
                    TD(
                        DIV(
                            STRONG("Turma: "), turma,
                            _class="label_e_campo"
                        ),
                        _colspan=2,
                        _class="label_e_campo_wrapper"
                    ),
                    TD(
                        DIV(
                            STRONG("Número: "), numero_aluno,
                            _class="label_e_campo"
                        ),
                        _colspan=2,
                        _class="label_e_campo_wrapper"
                    )
                )
            else:
                xml_turma_atual = TR(
                    TD(
                        DIV(
                            STRONG("Turma : "), turma,
                            _class="label_e_campo"
                        ),
                        _colspan=3,
                        _class="label_e_campo_wrapper"
                    )
                )

        xml_ano_anterior = ""
        if serie_ant is not None:
            if ano_anterior is None:
                ano_anterior = STRONG("Não definido!", _style="color: red;")
            if resultado_anterior is None:
                resultado_anterior = STRONG("Não definido!", _style="color: red;")
            xml_ano_anterior = XSECTION(
                LABEL("Sobre o resultado anterior"),
                DIV(
                    XTABLE(
                        "tabela_turma_aluno_{0}".format(id_matricula),
                        TR(
                            TD(
                                DIV(
                                    STRONG("Ano Letivo: ", _class="rotulo"),
                                    SPAN(ano_anterior, _class="dado"),
                                    _class="label_e_campo"
                                ),
                                _class="label_e_campo_wrapper"
                            ),
                            TD(
                                DIV(
                                    STRONG("Serie anterior: ", _class="rotulo"),
                                    SPAN(serie_ant, _class="dado"),
                                    _class="label_e_campo"
                                ),
                                _class="label_e_campo_wrapper"
                            ),
                            TD(
                                DIV(
                                    STRONG("Resultado Final: ", _class="rotulo"),
                                    SPAN(resultado_anterior, _class="dado"),
                                    _class="label_e_campo"
                                ),
                                _class="label_e_campo_wrapper"
                            ),
                            _class="phanterpwa-widget-table-data phanterpwa-widget"
                        ),
                    ),
                    _class="modal_dados_dos_aluno_matricula e-padding_20"
                )
            )
        if naturalidade is not None:
            xml_naturalidade = TD(
                DIV(
                    STRONG("Naturalidade: ", _class="rotulo"),
                    SPAN(naturalidade, _class="dado"),
                    _class="label_e_campo"
                ),
                _class="label_e_campo_wrapper"
            )
        xml_nome_do_pai = ""

        if nome_do_pai is not None and nome_do_pai != "":
            xml_nome_do_pai = TR(
                TD(
                    DIV(
                        STRONG("Nome do Pai: ", _class="rotulo"),
                        SPAN(nome_do_pai, _class="dado"),
                        _class="label_e_campo"
                    ),
                    _class="label_e_campo_wrapper",
                    _colspan=2
                )
            )

            if prof_pai is not None:
                xml_nome_do_pai = TR(
                    TD(
                        DIV(
                            STRONG("Nome do Pai: ", _class="rotulo"),
                            SPAN(nome_do_pai, _class="dado"),
                            _class="label_e_campo"
                        ),
                        _class="label_e_campo_wrapper"
                    ),
                    TD(
                        DIV(
                            STRONG("Profissão: ", _class="rotulo"),
                            SPAN(prof_pai, _class="dado"),
                            _class="label_e_campo"
                        ),
                        _class="label_e_campo_wrapper"
                    )
                )

        xml_nome_da_mae = TR(
            TD(
                DIV(
                    STRONG("Nome da Mãe: ", _class="rotulo"),
                    SPAN(STRONG("Não definido!", _style="color: red;"), _class="dado"),
                    _class="label_e_campo"
                ),
                _class="label_e_campo_wrapper",
                _colspan=2
            ),
            _class="p-row"
        )
        if nome_da_mae is not None and nome_da_mae != "":
            xml_nome_da_mae = TR(
                TD(
                    DIV(
                        STRONG("Nome da Mãe: ", _class="rotulo"),
                        SPAN(nome_da_mae, _class="dado"),
                        _class="label_e_campo"
                    ),
                    _class="label_e_campo_wrapper",
                    _colspan=2
                )
            )

            if prof_mae is not None:
                xml_nome_da_mae = TR(
                    TD(
                        DIV(
                            STRONG("Nome da Mãe: ", _class="rotulo"),
                            SPAN(nome_da_mae, _class="dado"),
                            _class="label_e_campo"
                        ),
                        _class="label_e_campo_wrapper"
                    ),
                    TD(
                        DIV(
                            STRONG("Profissão: ", _class="rotulo"),
                            SPAN(prof_mae, _class="dado"),
                            _class="label_e_campo"
                        ),
                        _class="label_e_campo_wrapper"
                    )
                )
        xml_novato_admitido = ""
        admi_no = [
            "Unidade I Completada",
            "Unidade II Completada",
            "Unidade III Completada",
            "Unidade IV Completada"
        ]
        admi_com = "Início do Ano"

        if admitido is True and novato is True:
            xml_admi = SPAN(", porém ", STRONG("não foi possível determinar quando.", _style="red"))
            if unidade_admitido == admi_com:
                xml_admi = SPAN(" no ", STRONG("início do ano"), ".")
            elif unidade_admitido in admi_no:
                xml_admi = SPAN(" com a ", STRONG(unidade_admitido, _style="text-transform: lowercase;"), ".")

            xml_novato_admitido = TR(
                TD(
                    DIV(
                        l_o_aluno, " é ", STRONG(novato), " e foi ", admitido, xml_admi,
                        _class="label_e_campo"
                    ),
                    _class="label_e_campo_wrapper",
                    _style="text-align: center; color: orange;",
                    _colspan=3
                )
            )
        elif novato is True:
            xml_novato_admitido = TR(
                TD(
                    DIV(
                        l_o_aluno, " é ", STRONG(novato), ".",
                        _class="label_e_campo"
                    ),
                    _class="label_e_campo_wrapper",
                    _style="text-align: center; color: orange;",
                    _colspan=3
                )
            )

        elif admitido is True:
            xml_admi = SPAN(", porém ", STRONG("não foi possível determinar quando.", _style="red"))
            if unidade_admitido == admi_com:
                xml_admi = SPAN(" no ", STRONG("início do ano"), ".")
            elif unidade_admitido in admi_no:
                xml_admi = SPAN(" com a ", STRONG(unidade_admitido, _style="text-transform: lowercase;"), ".")

            xml_novato_admitido = TR(
                TD(
                    DIV(
                        l_o_aluno, " foi ", admitido, xml_admi,
                        _class="label_e_campo"
                    ),
                    _class="label_e_campo_wrapper",
                    _style="text-align: center; color: orange;",
                    _colspan=3
                )
            )

        card = DIV(
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
                            XSECTION(
                                LABEL(l_dados_do_aluno),
                                DIV(
                                    XTABLE(
                                        "tabela_dados_aluno_{0}".format(id_matricula),
                                        TR(
                                            TD(
                                                DIV(
                                                    STRONG(label_nome_do_aluno, _class="rotulo"),
                                                    SPAN(nome_do_aluno, _class="dado"),
                                                    _class="label_e_campo"
                                                ),
                                                _colspan="2",
                                                _class="label_e_campo_wrapper"
                                            ),
                                            _class="phanterpwa-widget-table-data phanterpwa-widget"
                                        ),
                                        TR(
                                            TD(
                                                DIV(
                                                    STRONG("Data de nascimento: ", _class="rotulo"),
                                                    SPAN(data_de_nascimento, _class="dado"),
                                                    _class="label_e_campo"
                                                ),
                                                _class="label_e_campo_wrapper"
                                            ),
                                            xml_naturalidade,
                                            _class="phanterpwa-widget-table-data phanterpwa-widget"
                                        ),
                                        xml_nome_do_pai,
                                        xml_nome_da_mae,
                                        xml_endereco,
                                    ),
                                    _class="modal_dados_dos_aluno_matricula e-padding_20"
                                )
                            ),
                            BR(),

                            _class="p-col w1p100 w4p70",
                        ),
                        DIV(
                            XSECTION(
                                LABEL("Sobre a Matrícula"),
                                DIV(
                                    XTABLE(
                                        "tabela_dados_matricula_{0}".format(id_matricula),
                                        TR(
                                            TD(
                                                DIV(
                                                    STRONG("ID matrícula: ", _class="rotulo"),
                                                    SPAN(id_matricula, _class="dado"),
                                                    _class="label_e_campo"
                                                ),
                                                _class="label_e_campo_wrapper"
                                            ),
                                            TD(
                                                DIV(
                                                    STRONG("Ano Letivo: ", _class="rotulo"),
                                                    SPAN(ano_letivo, _class="dado"),
                                                    _class="label_e_campo"
                                                ),
                                                _class="label_e_campo_wrapper"
                                            ),
                                            TD(
                                                DIV(
                                                    STRONG("Data de matrícula: ", _class="rotulo"),
                                                    SPAN(data_mat, _class="dado"),
                                                    _class="label_e_campo"
                                                ),
                                                _class="label_e_campo_wrapper"
                                            ),
                                            _class="phanterpwa-widget-table-data phanterpwa-widget"
                                        ),
                                        TR(
                                            TD(
                                                DIV(
                                                    STRONG("Série: ", _class="rotulo"),
                                                    SPAN(serie, _class="dado"),
                                                    _class="label_e_campo"
                                                ),
                                                _class="label_e_campo_wrapper",
                                                _colspan=3
                                            ),
                                            _class="phanterpwa-widget-table-data phanterpwa-widget"
                                        ),
                                        TR(
                                            TD(
                                                DIV(
                                                    STRONG("Nome do Responsável: ", _class="rotulo"),
                                                    SPAN(nome_do_responsavel, _class="dado"),
                                                    _class="label_e_campo"
                                                ),
                                                _class="label_e_campo_wrapper",
                                                _colspan=3
                                            ),
                                            _class="phanterpwa-widget-table-data phanterpwa-widget"
                                        ),
                                        xml_novato_admitido,
                                        xml_turma_atual
                                    ),
                                    _class="modal_dados_dos_aluno_matricula e-padding_20"
                                )
                            ),
                            _class="p-col w1p100"
                        ),
                        xml_ano_anterior,
                        _class="p-row"
                    ),
                    _class="p-row e-padding_20w"
                ),
                _class="card-de-matricula",
            ),
        )
        helpers.XmlConstructor.__init__(self, "div", False, card, _class="painel-visualizar-matricula")


class Matricula(helpers.XmlConstructor):
    def __init__(self, index_instance, target, ano_letivo, id_escola, id_aluno, id_matricula=None):
        self.index_instance = index_instance
        self.ano_letivo = ano_letivo
        self.id_escola = id_escola
        self.id_aluno = id_aluno
        self.id_matricula = id_matricula
        self.id_ = window.PhanterPWA.get_id()
        html = DIV(
            DIV(
                DIV(
                    DIV(preloaders.android, _style="width: 300px; height: 300px; overflow: hidden; margin: auto;"),
                    _style="text-align:center; padding: 50px 0;"
                ),
                _class="p-col w1p100",
            ),
            _id=self.id_,
        )
        html.html_to(target)
        self.get_form_matricula()

    def get_form_matricula(self):
        window.PhanterPWA.GET(
            "api",
            "matricular",
            self.ano_letivo,
            self.id_escola,
            self.id_aluno,
            self.id_matricula,
            onComplete=self.after_get
        )

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            if data.status == 202:
                if json.razoes == "faltam_series":
                    window.PhanterPWA.open_way("series/{0}/{1}/matricula/{2}".format(self.arg1, self.arg2, self.arg0))
            else:
                json = data.responseJSON
                self.process_data(json)

    def process_data(self, json):
        self.nova_matricula = True
        if json.data.matricula.id is not js_undefined and json.data.matricula.id is not None:
            self.nova_matricula = False
        sexo = json.data.aluno.sexo
        nome_aluno = json.data.aluno.nome
        if self.arg1 == "aluno-conferido":
            logo = "{0}/api/escolas/{1}/image".format(
                window.PhanterPWA.ApiServer.remote_address,
                self.arg2
            )
            ano_letivo = self.arg3
        else:
            logo = "{0}/api/escolas/{1}/image".format(
                window.PhanterPWA.ApiServer.remote_address,
                self.arg1
            )
            ano_letivo = self.arg2
        P1 = "O(A) ALUNO(A) "
        if sexo == "1" or sexo == 1 or sexo == "Masculino":
            P1 = "O ALUNO "
        elif sexo == "2" or sexo == 2 or sexo == "Feminino":
            P1 = "A ALUNA "
        if self.nova_matricula:
            texto = CONCATENATE(
                H3("Matricula de: ", STRONG(nome_aluno, _style="color: orange;")),
                P("AGORA VAMOS CRIAR UMA NOVA MATRÍCULA PARA ", P1, "NO ANO LETIVO DE ", STRONG(ano_letivo),"."),
                P("OBSERVE QUE ALGUNS DADOS NÃO PODEM SER ALTERADOS (COMO NOME DO ALUNO POR EXEMPLO), PARA ALTERAR ",
                    "VOCÊ PODE EDITAR A MATRÍCULA POSTERIORMENTE OU VOLTAR A TELA ANTERIOR."
                )
            )
        else:
            texto =  CONCATENATE(
                H3("Matricula de: ", STRONG(nome_aluno, _style="color: orange;")),
                P(P1, "POSSUI UMA MATRÍCULA NO ANO LETIVO DE ", STRONG(ano_letivo), ", PORTANTO É POSSÍVEL EDITÁ-LA."),
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
        html.html_to("#{0}".format(self.id_))

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