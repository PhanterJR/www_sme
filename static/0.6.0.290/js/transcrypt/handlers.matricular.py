import phanterpwa.frontend.gatehandler as gatehandler
import phanterpwa.frontend.helpers as helpers
import phanterpwa.frontend.validations as validations
import phanterpwa.frontend.components.widgets as widgets
import phanterpwa.frontend.components.left_bar as left_bar
import phanterpwa.frontend.forms as forms
import phanterpwa.frontend.fmasks as fmasks
import phanterpwa.frontend.components.modal as modal
import phanterpwa.frontend.preloaders as preloaders
import phanterpwa.frontend.decorators as decorators
import handlers.escolas as escolas
import handlers.anos_letivos as anos_letivos
from org.transcrypt.stubs.browser import __pragma__
import handlers.alunos as alunos

__pragma__('alias', "jQuery", "$")
__pragma__('skip')
jQuery = sessionStorage = JSON = M = js_undefined = Date = window =\
    this = __new__ = FormData = console = localStorage = QRCode = setTimeout = 0
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
STRONG = helpers.XmlConstructor.tagger("strong")
IMG = helpers.XmlConstructor.tagger("img", True)
H2 = helpers.XmlConstructor.tagger("h2")
H3 = helpers.XmlConstructor.tagger("h3")
TABLE = helpers.XmlConstructor.tagger("table")
TH = helpers.XmlConstructor.tagger("th")
TD = helpers.XmlConstructor.tagger("td")
P = helpers.XmlConstructor.tagger("p")
TR = helpers.XmlConstructor.tagger("tr")
LABEL = helpers.XmlConstructor.tagger("label")
INPUT = helpers.XmlConstructor.tagger("input", True)
I18N = helpers.I18N
HR = helpers.XmlConstructor.tagger("hr", True)
XTABLE = widgets.Table
XML = helpers.XML
THEAD = helpers.XmlConstructor.tagger('thead')
TFOOT = helpers.XmlConstructor.tagger('tfoot')
XTRD = widgets.TableData
XTRH = widgets.TableHead
XFOOTER = widgets.TableFooterPagination


__pragma__('kwargs')


class Index(gatehandler.Handler):
    @decorators.check_authorization(lambda: window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME", "Administrador Master Escola"]))
    def initialize(self):
        arg0 = window.PhanterPWA.Request.get_arg(0)
        arg1 = window.PhanterPWA.Request.get_arg(1)
        arg2 = window.PhanterPWA.Request.get_arg(2)
        arg3 = window.PhanterPWA.Request.get_arg(3)
        arg4 = window.PhanterPWA.Request.get_arg(4)
        arg5 = window.PhanterPWA.Request.get_arg(5)
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("MATRICULAR ALUNO(A)", _class="phanterpwa-breadcrumb"),
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
                    _id="content-painel-matricular",
                    _class='p-row card e-padding_20'
                ),

                _class="phanterpwa-container p-container"
            )
        )
        html.html_to("#main-container")

        if arg0 is None or arg0 is js_undefined:
            html = escolas.EscolherEscola(
                id_target="#content-painel-matricular",
                callback_link=lambda id_escola: "#_phanterpwa:/matricular/{0}".format(id_escola)
            )
        elif str(arg0).isdigit() and (arg1 is None or arg1 is js_undefined):
            html = anos_letivos.EscolherAnoLetivo(
                id_target="#content-painel-matricular",
                callback_link=lambda ano: "#_phanterpwa:/matricular/{0}/{1}".format(arg0, ano)
            )
        elif str(arg0).isdigit() and str(arg1).isdigit():
            if str(arg2).isdigit():
                self.matricula = Matricula(self, arg0, arg1, arg2)
            elif arg2 == "aluno-conferido" and str(arg3).isdigit():
                self.matricula = Matricula(self, arg0, arg1, arg2, arg3)
            else:
                self.procurarAluno = ProcurarAluno(self, arg0, arg1)


class ProcurarAluno():
    def __init__(self, index_instance, id_escola, ano_letivo):
        self.id_escola = id_escola
        self.ano_letivo = ano_letivo
        self.index_instance = index_instance


        logo = "{0}/api/escolas/{1}/image".format(
            window.PhanterPWA.ApiServer.remote_address,
            self.id_escola
        )

        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("LOCALIZAR O REGISTRO DO(A) ALUNO(A)", _class="phanterpwa-breadcrumb"),
                        _class="phanterpwa-breadcrumb-wrapper"
                    ),
                    _class="p-container"),
                _class='title_page_container card'
            ),
            DIV(
                DIV(
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
                                            P("Para matricular um aluno, é necessário tentar localizar o registro dele pra aproveitar esses dados e evitar duplicação.",
                                                " Você pode tentar localizar digitando parte do nome do aluno, porém aconselha-se a digitar o nome completo, pois se",
                                                " o aluno não tiver cadastro algum com o nome adicionado um novo registro poderá ser criado já com o nome digitado."),
                                            P("Para pesquisar, depois de digitar o nome é só clicar em ", I(_class="fab fa-sistrix"), "."),
                                            P("Caso o aluno procurado não seja localizado aparecerá a opção de criar um novo registro."),
                                            _class="p-col w1p100 w4p70",
                                            _id="u_informacao_series"
                                        ),
                                        _class="p-row"
                                    ),
                                    DIV(
                                        H2("DIGITE O NOME COMPLETO DO(A) ALUNO(A)"),
                                        DIV(
                                            widgets.Autocomplete(
                                                "search_matriculas",
                                                label="Nome do aluno completo",
                                                placeholder="Nome do aluno completo",
                                                ajax_data_set="api/aluno/autocomplete",
                                                icon=I(_class="fab fa-sistrix"),
                                                icon_on_click=lambda: self.search()
                                            ),
                                            _class="p-col w1p100",
                                        ),
                                        _class="p-row e-padding_20w"
                                    ),
                                    _class="phanterpwa-container-section"
                                ),
                                _id="search_matriculas",
                                _class="form-search_matriculas",
                            ),
                            _class="phanterpwa_tables_search_wrapper"
                        ),
                        DIV(_id='lista-matriculas-subtitle', _class="phanterpwa-subtitle"),
                        DIV(
                            # DIV(
                            #     DIV(preloaders.android, _style="width: 300px; height: 300px; overflow: hidden; margin: auto;"),
                            #     _style="text-align:center; padding: 50px 0;"
                            # ),
                            _id='lista-matriculas-container',
                            _class="phanterpwa_tables_container"
                        ),
                        _class='matriculas-container phanterpwa-card-container'
                    ),



                    _id="content-localizar_registro_aluno",
                    _class='p-row card e-padding_20'
                ),

                _class="phanterpwa-container p-container"
            )
        )
        html.html_to("#main-container")
        self.binds()

    def binds(self):
        jQuery(
            ".escolher_aluno"
        ).off(
            "click.linha_matricular_matricula"
        ).on(
            "click.linha_matricular_matricula",
            lambda: self._pre_clicagem(this)
        )

        jQuery(
            "#phanterpwa-widget-autocomplete-input-search_matriculas"
        ).off(
            "keyup.search_matricula_matricula"
        ).on(
            "keyup.search_matricula_matricula",
            self._onkeyup
        )
        jQuery("#phanterpwa-widget-search_matriculas").find(
            ".phanterpwa-widget-icon-wrapper"
        ).off(
            "click.search_matricula_matricula"
        ).on(
            "click.search_matricula_matricula",
            lambda: self.search()
        )

    def _pre_clicagem(self, el):
        window.PhanterPWA.open_way("matricula/{0}/{1}/{2}".format(
            jQuery(el).parent().data("id_aluno"),
            self.id_escola,
            self.ano_letivo
        ))

    def _onkeyup(self, event):
        key = event.which or event.keyCode
        if key == 13 or key == 9:
            value = jQuery(
                "#phanterpwa-widget-autocomplete-input-search_matriculas"
            ).val()
            if value is not "":
                self.search()

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            if json.matriculas is None:
                window.PhanterPWA.open_way("matriculas/novo")
            else:
                self.process_data(json)

    def _on_sort(self, table_head_instance):
        widgets = window.PhanterPWA.Request.widgets
        page = widgets["matriculas-table-footer"].page()
        search = widgets["search_matriculas"].value()
        #field = widgets["campos_matriculas"].value()
        sorted_field = widgets["matriculas-table-head"].sorted_field()
        self._get_data_search(search=search, field="aluno", orderby=sorted_field[0], sort=sorted_field[1], page=page)

    def _on_page(self, table_pagination_instance):
        widgets = window.PhanterPWA.Request.widgets
        page = widgets["matriculas-table-footer"].page()
        search = widgets["search_matriculas"].value()
        field = widgets["campos_matriculas"].value()
        sorted_field = widgets["matriculas-table-head"].sorted_field()
        self._get_data_search(search=search, field="aluno", orderby=sorted_field[0], sort=sorted_field[1], page=page)

    def process_data(self, json):
        if self.current_hash is not json.hash:
            self.current_hash = json.hash
            matriculas = json.alunos

            aluno_procurado = PhanterPWA.get_widget("search_matriculas").value()
            params = ""
            if aluno_procurado != "":
                __pragma__('jsiter')
                jsdict = {"aluno": aluno_procurado}
                __pragma__('nojsiter')
                params = "?{0}".format(jQuery.param(jsdict))
            jQuery("#lista-matriculas-subtitle").html(
                CONCATENATE(
                    P("FORAM LOCALIZADOS OS SEGUINTES REGISTROS ABAIXO, "
                        "SE O ALUNO A SER MATRICULADO NÃO É NENHUM DOS "
                        "REGISTROS ABAIXO ", A(BUTTON("CLIQUE AQUI",
                        _class='btn btn-autoresize btn-inline'), _href="#_phanterpwa:/alunos/novo/matricular/{0}/{1}{2}".format(self.id_escola, self.ano_letivo, params)),
                        " PARA FAZER UM NOVO REGISTRO. CASO ESTEJA LISTADO ABAIXO É SÓ",
                        " CLICAR SOBRE ELE."
                    )
                ).jquery()
            )

            table = XTABLE(
                "matriculas-table",
                XTRH(
                    "matriculas-table-head",
                    *matriculas.searcher.data_set,
                    ["matriculas", "Matrículas"],
                    sort_by=matriculas.searcher.sort_by,
                    sort_order=matriculas.searcher.sort_order,
                    sortable=matriculas.searcher.sortable,
                    on_click_sortable=self._on_sort,
                )
            )
            if matriculas.data is not js_undefined:
                for x in matriculas.data:
                    data_de_nascimento_formated = ""
                    if x.data_nasc is not None and x.data_nasc is not js_undefined:
                        data_de_nascimento_formated = validations.format_iso_date_datetime(
                            x.data_nasc, "dd/MM/yyyy", "date"
                        )
                    __pragma__("jsiter")
                    vars_matricula = {
                        "matricula": x.aluno,
                        "nome_da_mae": x.nome_da_mae,
                    }
                    __pragma__("nojsiter")
                    vars_serialized = jQuery.param(vars_matricula)

                    bot_menus = [
                    ]
                    for m in x.matriculas:
                        bot_menus.append(
                            widgets.MenuOption("{0} - {1}".format(m.ano_letivo, m.abreviacao), **{
                                "_class": "botao_matriculas_aluno wave_on_click",
                                "_title": m.nome_escola,
                                "_href": "#_phanterpwa:/matricula/{0}/{1}/{2}/editar/{3}".format(x.id, m.id_escola, m.ano_letivo, m.id)
                            })
                        )
                    html_menus = widgets.MenuBox(
                        "quant_matris_{0}".format(x.id),
                        I(x.total_matriculas, _class="phanterpwa-icon_numb"),
                        *bot_menus,
                        **{"_class": "borda_color_botao_icone"}
                    )

                    table.append(
                        XTRD(
                            "matriculas-table-data-{0}".format(x.id),
                            TD(x.id, _class="escolher_aluno"),
                            TD(x.aluno, _class="escolher_aluno"),
                            TD(data_de_nascimento_formated, _class="escolher_aluno"),
                            TD(x.nome_do_pai, _class="escolher_aluno"),
                            TD(x.nome_da_mae, _class="escolher_aluno"),
                            html_menus,
                            **{
                                "drag_and_drop": False,
                                "_class": "linha_matricular_matricula link",
                                "_data-id_aluno": x.id
                            }
                        )
                    )
                table.append(
                    XFOOTER(
                        "matriculas-table-footer",
                        page=matriculas.searcher.page,
                        total_pages=matriculas.searcher.total_pages,
                        on_click_page=self._on_page,
                    )
                )

            table.html_to("#lista-matriculas-container")
            self.binds()

    def _get_data_search(self, search="", field="matricula", orderby="matricula", sort="asc", page=1):
        window.PhanterPWA.ApiServer.GET(**{
            'url_args': ["api", "alunos"],
            'url_vars': {
                "search": search,
                "field": field,
                "orderby": orderby,
                "sort": sort,
                "page": page
            },
            'onComplete': self.after_get,
            'get_cache': self.process_data
        })

    def search(self):
        widgets = window.PhanterPWA.Request.widgets
        search = widgets["search_matriculas"].value()
        self._get_data_search(search=search, field="aluno", orderby="aluno", sort="asc", page=1)


class Matricula():
    def __init__(self, index_instance, id_escola, ano_letivo, id_aluno_ou_action, id_aluno=None, arg4=None, arg5=None):
        self.index_instance = index_instance
        self.id_escola = id_escola
        self.ano_letivo = ano_letivo
        self.id_aluno_ou_action = id_aluno_ou_action
        self.id_aluno = id_aluno
        self.arg4 = arg4
        self.arg5 = arg5
        if self.id_aluno_ou_action == "editar" or self.id_aluno_ou_action == "novo":
            window.PhanterPWA.open_way("alunos/novo/matricula")
        elif self.id_aluno_ou_action == "aluno-conferido":
            self.get_form_matricula()

        elif self.id_aluno_ou_action == "visualizar":
            self.visualizar(id_matricula, index_instance.request.params)
        elif str(self.id_aluno_ou_action).isdigit() and str(self.id_escola).isdigit() and str(self.ano_letivo).isdigit():
            self.id_aluno = self.id_aluno_ou_action
            self.xml_editar_aluno()
            # self.get_form_matricula(arg0, arg1, arg2)

    def xml_editar_aluno(self):
        logo = "{0}/api/escolas/{1}/image".format(
            window.PhanterPWA.ApiServer.remote_address,
            self.id_escola
        )
        if self.arg1 == "aluno-conferido":
            self.get_form_matricula(self.arg4)
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
                                            ", É IMPORTANTE VERIFICAR SE ESTÁ TUDO EM ORDEM COM SEU CADASTRO."),
                                        P("É IMPORTANTE QUE ESTES DADOS SEJAM ATUALIZADOS, MUITOS DELES SÃO USADOS NA CONFECÇÃO DA DOCUMENTAÇÃO DO ALUNO.",
                                            " JÁ OUTROS SERÃO USADOS EM LEVANTAMENTOS ESTATÍSTICOS."),
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
            html.html_to("#content-painel-matricular")
            self.alunos = alunos.Aluno(self, self.id_aluno, "editar", "#formulario_editar_aluno", self.process_data_put)

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

        self._carteira.html_to("#content-painel-matricular")
        window.PhanterPWA.LOAD(**{
            "args": ["loads", "svg_logo.html"],
            "onComplete": lambda data: jQuery("#content-painel-matricular").find(".carteira-logo").html(data),
        })
        url = "{0}/api/associado/{1}".format(
            window.PhanterPWA.ApiServer.remote_address,
            qrcode
        )
        qrcode = __new__(QRCode(jQuery("#content-painel-matricular").find(".carteira-qrcode")[0], {
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
                    window.PhanterPWA.flash(html=I18N("ATENÇÃO! SUA ESCOLA AINDA NÃO TEM SÉRIES DEFINIDAS"))
                    window.PhanterPWA.open_way("series/{0}/{1}/matricula/{2}".format(self.id_escola, self.ano_letivo, self.id_aluno))
            else:
                json = data.responseJSON
                self.process_data(json)

    def process_data_put(self, data):
        retornar = window.PhanterPWA.Request.get_param("retornar")
        if retornar is not None:
            window.PhanterPWA.open_way(retornar)
        else:
            window.PhanterPWA.open_xway("matricular", self.id_escola, self.ano_letivo, "aluno-conferido", self.id_aluno)

    def process_data(self, json):
        self.nova_matricula = True
        if json.data.matricula.id is not js_undefined and json.data.matricula.id is not None:
            self.nova_matricula = False
        sexo = json.data.aluno.sexo
        nome_aluno = json.data.aluno.nome
        logo = "{0}/api/escolas/{1}/image".format(
            window.PhanterPWA.ApiServer.remote_address,
            self.id_escola
        )
        ano_letivo = self.ano_letivo

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
        html.html_to("#content-painel-matricular")

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

    def get_form_matricula(self):
        id_aluno = self.id_aluno
        id_escola = self.id_escola
        ano_letivo = self.ano_letivo
        window.PhanterPWA.GET(
            "api",
            "matricula",
            id_aluno,
            id_escola,
            ano_letivo,
            onComplete=self.after_get
        )

    def submit(self, el):
        if jQuery(el)[0].hasAttribute("disabled"):
            window.PhanterPWA.flash(html=I18N("The form has errors!"))
        else:
            form_matricula = jQuery("#form-matriculas")[0]
            form_matricula = __new__(FormData(form_matricula))
            id_aluno = self.id_aluno
            id_escola = self.id_escola
            ano_letivo = self.ano_letivo
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
        json = data.responseJSON
        if data.status == 200 and self.nova_matricula:
            window.PhanterPWA.open_way("imprimir/matricula/{0}".format(json.id_matricula))
        elif data.status == 200:
            window.PhanterPWA.open_way("imprimir/matricula/{0}".format(json.id_matricula))
        elif data.status == 400:
            forms.SignForm("#form-matriculas")


__pragma__('nokwargs')
