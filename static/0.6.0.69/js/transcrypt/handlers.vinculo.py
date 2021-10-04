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
STRONG = helpers.XmlConstructor.tagger("strong")
IMG = helpers.XmlConstructor.tagger("img", True)
H2 = helpers.XmlConstructor.tagger("h2")
H3 = helpers.XmlConstructor.tagger("h3")
H4 = helpers.XmlConstructor.tagger("h4")
H5 = helpers.XmlConstructor.tagger("h5")
INPUT = helpers.XmlConstructor.tagger("input", True)
I18N = helpers.I18N
XTABLE = widgets.Table
XML = helpers.XML
XTRD = widgets.TableData
XTRH = widgets.TableHead
XFOOTER = widgets.TableFooterPagination


__pragma__('kwargs')


class Index(gatehandler.Handler):
    @decorators.check_authorization(lambda: window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME", "Administrador Master Escola"]))
    def initialize(self):
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("VINCULAR", _class="phanterpwa-breadcrumb"),
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
                    _id="content-vinculo",
                    _class='p-row card e-padding_20'
                ),

                _class="phanterpwa-container p-container"
            )
        )
        html.html_to("#main-container")
        arg0 = window.PhanterPWA.Request.get_arg(0)
        arg1 = window.PhanterPWA.Request.get_arg(1)
        arg2 = window.PhanterPWA.Request.get_arg(2)
        if self.request.get_arg(0) is not None:
            self.Vinculo = Vinculo(self, arg0, arg1, arg2)
            BackButton = left_bar.LeftBarButton(
                "back_localizar_vinculos",
                "Voltar",
                I(_class="fas fa-arrow-circle-left"),
                **{"_phanterpwa-way": "vinculos",
                    "position": "top",
                    "ways": [lambda r: True if r.startswith("vinculos") or r.startswith("vinculos/") else False]}
            )
        else:
            self.ProcurarAluno = ProcurarAluno(self)
            self.ProcurarAluno.html_to("#content-vinculo")
            self.ProcurarAluno.binds()
            BackButton = left_bar.LeftBarButton(
                "back_localizar_vinculos",
                "Voltar",
                I(_class="fas fa-arrow-circle-left"),
                **{"_phanterpwa-way": "restrito",
                    "position": "top",
                    "ways": [lambda r: True if r.startswith("vinculos") or r.startswith("vinculos/") else False]}
            )

        window.PhanterPWA.Components['left_bar'].add_button(BackButton)




class Vinculo(helpers.XmlConstructor):
    def __init__(self, index_instance, arg0, arg1, arg2):
        self.index_instance = index_instance
        self.arg0 = arg0
        self.arg1 = arg1
        self.arg2 = arg2
        vars_serialized = ""
        if self.index_instance.request.js_params is not None and self.index_instance.request.js_params is not js_undefined:
            vars_serialized = "?{0}".format(jQuery.param(self.index_instance.request.js_params))

        if arg1 == "editar" or arg0 == "novo":
            self.get_form_vinculo(arg0)
        elif arg1 == "visualizar":
            self.visualizar(id_vinculo, index_instance.request.params)
        elif str(arg0).isdigit() and (arg1 is None or arg1 is js_undefined):
            html = escolas.EscolherEscola(
                callback_link=lambda id_escola: "#_phanterpwa:/vinculo/{0}/{1}{2}".format(self.arg0, id_escola,
                    vars_serialized)
            )
            html.html_to("#content-vinculo")
        elif str(arg0).isdigit() and str(arg1).isdigit() and (arg2 is None or arg2 is js_undefined):
            html = anos_letivos.EscolherAnoLetivo(
                callback_link=lambda ano: "#_phanterpwa:/vinculo/{0}/{1}/{2}?{3}".format(self.arg0, self.arg1, ano,
                    vars_serialized)
            )
            html.html_to("#content-vinculo")
        elif str(arg0).isdigit() and str(arg1).isdigit() and str(arg2).isdigit():
            self.get_form_vinculo(arg0, arg1, arg2)

    def lista_de_vinculos(self, json):
        console.log(json)
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
#                                    aviso,
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
        self.form = forms.Form(json.data.vinculo)

        logo = "{0}/api/escolas/{1}/image".format(
            window.PhanterPWA.ApiServer.remote_address,
            self.arg1
        )
        aviso = ""
        if json.aviso is not None and json.aviso is not js_undefined:
            aviso = H5(json.aviso, _style="color:red;")

        titulo = H3("CRIANDO UM NOVO VÍNCULO DO FUNCIONÁRIO NESTA UNIDADE DE ENSINO.")
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
                                    H5("OBSERVE QUE O VÍNCULO ESTÁ SENDO EFETUADO NO ANO LETIVO DE ", STRONG(self.arg2, _style="text-style:bold"), ", CASO ESTE NÃO",
                                        " SEJA O ANO CORRETO ", A("CLIQUE AQUI.", _href=window.PhanterPWA.XWAY(
                                            "vinculo", self.arg0, self.arg1), _class="btn btn-inline")),
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
        forms.SignForm("#form-vinculos_funcionarios")
        forms.ValidateForm("#form-vinculos_funcionarios")
        jQuery(
            "#phanterpwa-widget-form-submit_button-vinculos_funcionarios"
        ).off(
            "click.submit_vinculos_button"
        ).on(
            "click.submit_vinculos_button",
            lambda: self.submit(this)
        )


    def get_form_vinculo(self, id_aluno, id_escola, ano_letivo):
        window.PhanterPWA.ApiServer.GET(**{
            'url_args': ["api", "vinculos", id_aluno, id_escola, ano_letivo],
            'onComplete': self.after_get,
            'get_cache': self.process_data
        })


    def submit(self, el):
        if jQuery(el)[0].hasAttribute("disabled"):
            window.PhanterPWA.flash(html=I18N("The form has errors!"))
        else:
            form_vinculo = jQuery("#form-vinculos_funcionarios")[0]
            form_vinculo = __new__(FormData(form_vinculo))
            if self.id_vinculo is not None:
                window.PhanterPWA.ApiServer.PUT(**{
                    'url_args': ["api", "vinculos", self.arg0, self.arg1, self.arg2],
                    'form_data': form_vinculo,
                    'onComplete': self.after_submit
                })
            elif self.arg0.isdigit():
                window.PhanterPWA.ApiServer.POST(**{
                    'url_args': ["api", "vinculos", self.arg0, self.arg1, self.arg2],
                    'form_data': form_vinculo,
                    'onComplete': self.after_submit
                })

    def after_submit(self, data):
        forms.SignForm("#form-vinculos_funcionarios")
        self.form.process_api_response(data)
        if data.status == 200:
            window.PhanterPWA.open_way("funcionarios/")


__pragma__('nokwargs')
