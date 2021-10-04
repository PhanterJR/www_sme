from org.transcrypt.stubs.browser import __pragma__

import phanterpwa.frontend.gatehandler as gatehandler
import phanterpwa.frontend.helpers as helpers
import phanterpwa.frontend.validations as validations
import phanterpwa.frontend.components.widgets as widgets
import phanterpwa.frontend.components.left_bar as left_bar
import phanterpwa.frontend.decorators as decorators
import phanterpwa.frontend.forms as forms
import phanterpwa.frontend.components.modal as modal
import phanterpwa.frontend.preloaders as preloaders

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
SPAN = helpers.XmlConstructor.tagger("span")
P = helpers.XmlConstructor.tagger("p")
H2 = helpers.XmlConstructor.tagger("h2")
H3 = helpers.XmlConstructor.tagger("h3")
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


class Index(gatehandler.Handler):
    @decorators.check_authorization(lambda: window.PhanterPWA.logged())
    def initialize(self):
        self.requires_login = True
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("ACESSO EXCEPCIONAL", _class="phanterpwa-breadcrumb"),
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
                    _id="content-excepcional",
                    _class='p-row card e-padding_20'
                ),

                _class="phanterpwa-container p-container"
            )
        )
        html.html_to("#main-container")
        self.arg0 = self.request.get_arg(0)
        self.arg1 = self.request.get_arg(1)
        self.arg2 = self.request.get_arg(2)
        if str(self.arg0).isdigit() and str(self.arg1).isdigit() and window.PhanterPWA.logged():
            self.checar_conta()

    def checar_conta(self):
        window.PhanterPWA.GET(
            "api",
            "excepcional",
            "checagem-inicial",
            onComplete=self.depois_da_checagem_inicial
        )

    def depois_da_checagem_inicial(self, data, ajax_status):
        if ajax_status == "success":
            if data.status == 202:
                window.PhanterPWA.update_auth_user()
        logo_principal = "{0}/api/escolas/{1}/image".format(
            window.PhanterPWA.ApiServer.remote_address,
            self.arg0
        )
        self.form_excepcional = forms.Form(data.responseJSON.funcionarios)
        html = DIV(
            DIV(
                DIV(
                    DIV(
                        IMG(_src=logo_principal),
                        _class="escolas-container-info-image",
                        _style="text-align: center;"
                    ),
                    _class="p-col w1p100 w4p30"
                ),
                DIV(
                    H2("LINK DE VINCULAÇÃO EXCEPCIONAL DE PROFESSORES"),
                    P("Senhor(a) professor(a), este link irá tentar vincular esta sua conta", STRONG(" (",
                        window.PhanterPWA.get_auth_user().email, ")"),"  com o cadastro de funcionários, então é de suma importância",
                        " seu preenchimento com as devidas informações solicitadas."),
                    P("O preenchimento de alguns campos são obrigatórios, se o campo apresentar a indicação ", I(_class="fas fa-check"),
                        " na cor verde, significa que o presente dado é válido, mesmo estando vazio, se estiver na cor cinza",
                        " significa que é necessário preencher com um dado válido."),
                    _class="p-col w1p100 w4p70",
                    _id="u_informacao_excepcional"
                ),
                _class="p-row"
            ),
            self.form_excepcional,
            _class="p-row"
        )
        html.html_to("#content-excepcional")
        forms.SignForm("#form-funcionarios", after_sign=lambda: forms.ValidateForm("#form-funcionarios"))
        botao = jQuery("#phanterpwa-widget-form-submit_button-funcionarios")
        botao.off(
            "click.enviar_pre_excepcional"
        ).on(
            "click.enviar_pre_excepcional",
            lambda: self.submit_nome_e_cpf(this)
        )
        window.PhanterPWA.Request.widgets["funcionarios-naturalidades"].set_on_click_new_button(self.modal_add_naturalidade)


    def submit_nome_e_cpf(self, el):
        if not jQuery(el)[0].hasAttribute("disabled"):
            form_funcionario = jQuery("#form-funcionarios")[0]
            form_funcionario = __new__(FormData(form_funcionario))
            window.PhanterPWA.POST(
                "api",
                "excepcional",
                "formulario",
                self.arg0,
                self.arg1,
                form_data=form_funcionario,
                onComplete=self.depois_de_enviar_nome_e_cpf,
            )

    def depois_de_enviar_nome_e_cpf(self, data, ajax_status):
        if ajax_status == "success":
            self.id_funcionario = "novo"
            if str(data.responseJSON.data.funcionarios.id).isdigit():
                self.id_funcionario = data.responseJSON.data.funcionarios.id
            self.form_meus_dados = forms.Form(data.responseJSON.data.funcionarios, label_submit="Atualizar dados")
            self.form_meus_dados.extra_button(
                "deixar_pra_depois",
                "Deixar pra depois"
            )
            logo_principal = "{0}/api/escolas/{1}/image".format(
                window.PhanterPWA.ApiServer.remote_address,
                self.arg0
            )
            html = DIV(
                DIV(
                    DIV(
                        DIV(
                            IMG(_src=logo_principal),
                            _class="escolas-container-info-image",
                            _style="text-align: center;"
                        ),
                        _class="p-col w1p100 w4p30"
                    ),
                    DIV(
                        H2("ATUALIZAÇÃO/COMPLEMENTAÇÃO DO DADOS"),
                        P("Senhor(a) professor(a), estes dados serão adicionadas em sua ficha funcional, porém se desejar",
                            " deixar seu preenchimento para depois é só clicar lá na parte inferior em ", STRONG("Deixar pra depois")),
                        _class="p-col w1p100 w4p70",
                        _id="u_informacao_excepcional"
                    ),
                    _class="p-row"
                ),
                self.form_meus_dados,
                _class="p-row"
            )
            html.html_to("#content-excepcional")
            forms.SignForm("#form-funcionarios", after_sign=lambda: forms.ValidateForm("#form-funcionarios"))
            self.binds()
        else:
            if data.status == 400:
                if data.responseJSON.errors is not js_undefined:
                    console.log(data.responseJSON.errors)
                    errors = dict(data.responseJSON.errors)
                    for x in errors.keys():
                        target = jQuery("#phanterpwa-widget-nome_e_cpf-{0}".format(x))
                        target.find(".phanterpwa-widget-message_error").text(data.responseJSON.errors[x])
                        target.find(".phanterpwa-widget-wrapper").addClass("has_error")

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
        jQuery(
            "#phanterpwa-widget-form-form_button-deixar_pra_depois"
        ).off(
            "click.deixar_pra_depois_funcionarios_"
        ).on(
            "click.deixar_pra_depois_funcionarios_",
            lambda: window.PhanterPWA.open_way("area-do-servidor")
        )
        window.PhanterPWA.Request.widgets["funcionarios-naturalidades"].set_on_click_new_button(self.modal_add_naturalidade)
        window.PhanterPWA.Request.widgets["funcionarios-cidades"].set_on_click_new_button(self.modal_add_cidade)

    def submit(self, el):
        if jQuery(el)[0].hasAttribute("disabled"):
            window.PhanterPWA.flash(html=I18N("The form has errors!"))
        else:
            form_funcionario = jQuery("#form-funcionarios")[0]
            form_funcionario = __new__(FormData(form_funcionario))
            if self.id_funcionario == "novo":
                window.PhanterPWA.ApiServer.POST(**{
                    'url_args': ["api", "excepcional", self.arg0, self.arg1],
                    'form_data': form_funcionario,
                    'onComplete': self.after_submit
                })
            elif str(self.id_funcionario).isdigit():
                window.PhanterPWA.ApiServer.PUT(**{
                    'url_args': ["api", "excepcional", self.arg0, self.arg1, self.id_funcionario],
                    'form_data': form_funcionario,
                    'onComplete': self.after_submit
                })

    def after_submit(self, data, ajax_status):
        self.form_meus_dados.process_api_response(data)
        if ajax_status == "success":
            window.PhanterPWA.open_way("area-do-servidor")
        else:
            forms.SignForm("#form-funcionarios")

__pragma__('nokwargs')
