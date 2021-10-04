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


__pragma__('kwargs')


class Funcionario(helpers.XmlConstructor):
    def __init__(self, index_instance, id_funcionario, action):
        self.id_funcionario = id_funcionario
        self.action = action
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("FUNCIONÁRIOS", _class="phanterpwa-breadcrumb"),
                        DIV("FUNCIONÁRIO", _class="phanterpwa-breadcrumb"),
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
                    _id="content-funcionarios",
                    _class='p-row card e-padding_20'
                ),

                _class="phanterpwa-container p-container"
            )
        )
        html.html_to("#main-container")
        if action == "editar" or id_funcionario == "novo":
            self.get_form_funcionario(id_funcionario)
        if id_funcionario == "meus-dados":
            self.get_form_funcionario(id_funcionario)
        elif action == "visualizar":
            self.visualizar(id_funcionario, index_instance.request.params)

    def visualizar(self, id_funcionario, params):
        url_image = "{0}/api/funcionarios/{1}/image".format(
            window.PhanterPWA.get_api_address(),
            id_funcionario
        )
        funcionario = params["funcionario"]
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
                                                funcionario,
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
                    _class="visualizar_funcionario_container a4"
                ),
                _class="phanterpwa-media-print"
            ),
            _class="phanterpwa-media-print-container"
        )

        self._carteira.html_to("#content-funcionarios")
        window.PhanterPWA.LOAD(**{
            "args": ["loads", "svg_logo.html"],
            "onComplete": lambda data: jQuery("#content-funcionarios").find(".carteira-logo").html(data),
        })
        url = "{0}/api/associado/{1}".format(
            window.PhanterPWA.ApiServer.remote_address,
            qrcode
        )
        qrcode = __new__(QRCode(jQuery("#content-funcionarios").find(".carteira-qrcode")[0], {
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
            self.process_data(json)

    def after_get_meus_dados(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            html = CONCATENATE(
                DIV(
                    DIV(
                        DIV(
                            DIV("ÁREA DO SERVIDOR", _class="phanterpwa-breadcrumb"),
                            DIV("MEUS DADOS", _class="phanterpwa-breadcrumb"),
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
                        _id="content-funcionarios",
                        _class='p-row card e-padding_20'
                    ),

                    _class="phanterpwa-container p-container"
                )
            )
            html.html_to("#main-container")
            self.form_meus_dados = forms.Form(json.data.funcionarios)
            self.form_meus_dados.html_to("#content-funcionarios")

    def process_data(self, json):
        self.form = forms.Form(json.data.funcionarios)
        self.form.html_to("#content-funcionarios")
        self.binds()

    def modal_add_naturalidade(self, widget_instance):
        data_set = [
            [1, 'AC'],
            [2, 'AL'],
            [3, 'AM'],
            [4, 'AP'],
            [5, 'BA'],
            [6, 'CE'],
            [7, 'DF'],
            [8, 'ES'],
            [9, 'GO'],
            [10, 'MA'],
            [11, 'MG'],
            [12, 'MS'],
            [13, 'MT'],
            [14, 'PA'],
            [15, 'PB'],
            [16, 'PE'],
            [17, 'PI'],
            [18, 'PR'],
            [19, 'RJ'],
            [20, 'RN'],
            [21, 'RO'],
            [22, 'RR'],
            [23, 'RS'],
            [24, 'SC'],
            [25, 'SE'],
            [26, 'SP'],
            [27, 'TO']
        ]
        content = DIV(

            forms.FormWidget(
                "naturalidade",
                "cidade",
                **{
                    "value": "",
                    "label": "Cidade",
                    "type": "string",
                    "form": "naturalidade",
                    "_placeholder": "Nome da cidade",
                    "_class": "p-col w1p100 w3p50 w4p75"
                }
            ),
            forms.FormWidget(
                "naturalidade",
                "uf",
                **{
                    "value": "",
                    "label": "UF",
                    "type": "select",
                    "form": "naturalidade",
                    "data_set": data_set,
                    "_class": "p-col w1p100 w3p50 w4p25"
                }
            ),
            _class="p-row"
        )
        footer = DIV(
            forms.SubmitButton(
                "adicionar_naturalidade",
                "Adicionar",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ),
            _class='phanterpwa-form-buttons-container'
        )
        self.modal_naturalidade = modal.Modal(
            widget_instance.target_selector,
            **{
                "title": "Adicionar Naturalidade",
                "content": content,
                "footer": footer,
                "form": "naturalidade"
            }
        )
        self.modal_naturalidade.open()
        jQuery("#phanterpwa-widget-form-submit_button-adicionar_naturalidade").off(
            "click.adicionar_naturalidade"
        ).on(
            "click.adicionar_naturalidade",
            lambda: self._on_click_add_naturalidade(widget_instance)
        )

    def _on_click_add_naturalidade(self, widget_instance):
        cidade = jQuery("#phanterpwa-widget-input-input-naturalidade-cidade").val()
        uf = jQuery("#phanterpwa-widget-select-input-naturalidade-uf").val()
        if cidade is not "" and uf is not "":
            value = "{0}/{1}".format(
                str(cidade).strip(),
                str(uf).strip()
            )
            widget_instance.add_new_value(value)
        self.modal_naturalidade.close()

    def modal_add_cidade(self, widget_instance):
        data_set = [
            [1, 'AC'],
            [2, 'AL'],
            [3, 'AM'],
            [4, 'AP'],
            [5, 'BA'],
            [6, 'CE'],
            [7, 'DF'],
            [8, 'ES'],
            [9, 'GO'],
            [10, 'MA'],
            [11, 'MG'],
            [12, 'MS'],
            [13, 'MT'],
            [14, 'PA'],
            [15, 'PB'],
            [16, 'PE'],
            [17, 'PI'],
            [18, 'PR'],
            [19, 'RJ'],
            [20, 'RN'],
            [21, 'RO'],
            [22, 'RR'],
            [23, 'RS'],
            [24, 'SC'],
            [25, 'SE'],
            [26, 'SP'],
            [27, 'TO']
        ]
        content = DIV(

            forms.FormWidget(
                "cidade",
                "cidade",
                **{
                    "value": "",
                    "label": "Cidade",
                    "type": "string",
                    "form": "cidade",
                    "_placeholder": "Nome da cidade",
                    "_class": "p-col w1p100 w3p50 w4p75"
                }
            ),
            forms.FormWidget(
                "cidade",
                "uf",
                **{
                    "value": "",
                    "label": "UF",
                    "type": "select",
                    "form": "cidade",
                    "data_set": data_set,
                    "_class": "p-col w1p100 w3p50 w4p25"
                }
            ),
            _class="p-row"
        )
        footer = DIV(
            forms.SubmitButton(
                "adicionar",
                "Adicionar",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ),
            _class='phanterpwa-form-buttons-container'
        )
        self.modal_cidade = modal.Modal(
            widget_instance.target_selector,
            **{
                "title": "Adicionar Cidade",
                "content": content,
                "footer": footer,
                "form": "cidade"
            }
        )
        self.modal_cidade.open()
        jQuery("#phanterpwa-widget-form-submit_button-adicionar").off(
            "click.adicionar_cidade"
        ).on(
            "click.adicionar_cidade",
            lambda: self._on_click_add_cidade(widget_instance)
        )

    def _on_click_add_cidade(self, widget_instance):
        cidade = jQuery("#phanterpwa-widget-input-input-cidade-cidade").val()
        uf = jQuery("#phanterpwa-widget-select-input-cidade-uf").val()
        if cidade is not "" and uf is not "":
            value = "{0}/{1}".format(
                str(cidade).strip(),
                str(uf).strip()
            )
            widget_instance.add_new_value(value)
        self.modal_cidade.close()

    def binds(self):
        forms.SignForm("#form-funcionarios", after_sign=lambda: forms.ValidateForm("#form-funcionarios"))
        
        jQuery(
            "#phanterpwa-widget-form-submit_button-funcionarios"
        ).off(
            "click.submit_funcionarios_button"
        ).on(
            "click.submit_funcionarios_button",
            lambda: self.submit(this)
        )
        window.PhanterPWA.Request.widgets["funcionarios-naturalidades"].set_on_click_new_button(self.modal_add_naturalidade)
        window.PhanterPWA.Request.widgets["funcionarios-cidades"].set_on_click_new_button(self.modal_add_cidade)

    def get_form_funcionario(self, id_funcionario):
        if id_funcionario == "meus-dados":
            window.PhanterPWA.GET(
                "api",
                "funcionario",
                "meus-dados",
                onComplete=self.after_get_meus_dados
            )
        else:
            window.PhanterPWA.ApiServer.GET(**{
                'url_args': ["api", "funcionario", id_funcionario],
                'onComplete': self.after_get,
                'get_cache': self.process_data
            })

    def submit(self, el):
        if jQuery(el)[0].hasAttribute("disabled"):
            window.PhanterPWA.flash(html=I18N("The form has errors!"))
        else:
            form_funcionario = jQuery("#form-funcionarios")[0]
            form_funcionario = __new__(FormData(form_funcionario))
            if self.id_funcionario == "novo":
                window.PhanterPWA.ApiServer.POST(**{
                    'url_args': ["api", "funcionario", self.id_funcionario],
                    'form_data': form_funcionario,
                    'onComplete': self.after_submit
                })
            elif self.id_funcionario.isdigit():
                window.PhanterPWA.ApiServer.PUT(**{
                    'url_args': ["api", "funcionario", self.id_funcionario],
                    'form_data': form_funcionario,
                    'onComplete': self.after_submit
                })

    def after_submit(self, data):
        forms.SignForm("#form-funcionarios")
        self.form.process_api_response(data)
        if data.status == 200 and self.id_funcionario == 'novo':
            window.PhanterPWA.open_way("funcionarios/novo")
        elif data.status == 200:
            window.PhanterPWA.open_way("funcionarios")


class MeusDados(helpers.XmlConstructor):
    def __init__(self, index_instance, id_funcionario, action):
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("ÁREA DO SERVIDOR", _class="phanterpwa-breadcrumb"),
                        DIV("MEUS DADOS", _class="phanterpwa-breadcrumb"),
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
                    _id="content-meus-dados",
                    _class='p-row card e-padding_20'
                ),

                _class="phanterpwa-container p-container"
            )
        )
        html.html_to("#main-container")
        self.get_form_funcionario()


    def after_get_meus_dados(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON

            self.form_meus_dados = forms.Form(json.data.funcionarios)
            self.form_meus_dados.html_to("#content-meus-dados")


    def get_form_funcionario(self):
        window.PhanterPWA.GET(
            "api",
            "funcionario",
            "meus-dados",
            onComplete=self.after_get_meus_dados
        )


__pragma__('nokwargs')