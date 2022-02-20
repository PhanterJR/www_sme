import phanterpwa.frontend.gatehandler as gatehandler
import phanterpwa.frontend.helpers as helpers
import phanterpwa.frontend.validations as validations
import phanterpwa.frontend.components.widgets as widgets
import phanterpwa.frontend.components.left_bar as left_bar
import phanterpwa.frontend.forms as forms
import phanterpwa.frontend.components.modal as modal
import phanterpwa.frontend.preloaders as preloaders
import phanterpwa.frontend.decorators as decorators
from org.transcrypt.stubs.browser import __pragma__
import plugins.servidor_sme as servidor_sme
import handlers.anos_letivos as anos_letivos

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
HR = helpers.XmlConstructor.tagger("hr", True)
STRONG = helpers.XmlConstructor.tagger("strong")
IMG = helpers.XmlConstructor.tagger("img", True)
INPUT = helpers.XmlConstructor.tagger("input", True)
I18N = helpers.I18N
XTABLE = widgets.Table
XML = helpers.XML
XTRD = widgets.TableData
XTRH = widgets.TableHead
XFOOTER = widgets.TableFooterPagination
XSECTION = helpers.XSECTION
TD = helpers.XmlConstructor.tagger("td")
TR = helpers.XmlConstructor.tagger("tr")
TH = helpers.XmlConstructor.tagger("tH")


__pragma__('kwargs')


class Index(gatehandler.Handler):
    def initialize(self):
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("ESCOLAS", _class="phanterpwa-breadcrumb"),
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
                    _id="content-escolas",
                    _class='p-row card e-padding_20'
                ),

                _class="phanterpwa-container p-container"
            )
        )
        arg0 = self.request.get_arg(0)
        arg1 = self.request.get_arg(1)
        arg2 = self.request.get_arg(2)
        html.html_to("#main-container")
        if str(arg0).isdigit():
            if arg1 == "editar":
                self.Editar = Editar(self, arg0)
            else:
                self.Escola = Escola(self, arg0, arg1)
            BackButton = left_bar.LeftBarButton(
                "back_localizar_escolas",
                "Voltar",
                I(_class="fas fa-arrow-circle-left"),
                **{"_phanterpwa-way": "escolas",
                    "position": "top",
                    "ways": [lambda r: True if r.startswith("escolas") or r.startswith("escolas/") else False]}
            )
        else:
            self.Escolas = Escolas(self)
            BackButton = left_bar.LeftBarButton(
                "back_servidores_escolas",
                "Voltar",
                I(_class="fas fa-arrow-circle-left"),
                **{"_phanterpwa-way": "area-do-servidor",
                    "position": "top",
                    "show_if": lambda: True if window.PhanterPWA.get_current_way() == "escolas" else False
                }
            )
        window.PhanterPWA.Components['left_bar'].add_button(BackButton)


class Configuracoes(gatehandler.Handler):
    def initialize(self):
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("CONFIGURAÇÕES", _class="phanterpwa-breadcrumb"),
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
                    _id="content-configuracoes",
                    _class='p-row card e-padding_20'
                ),

                _class="phanterpwa-container p-container"
            )
        )
        html.html_to("#main-container")
        arg0 = self.request.get_arg(0)
        arg1 = self.request.get_arg(1)
        arg2 = self.request.get_arg(2)
        if arg0 is None or arg0 is js_undefined:
            html = EscolherEscola(
                id_target="#content-configuracoes",
                callback_link=lambda id_escola: "#_phanterpwa:/escola-configuracao/{0}".format(id_escola)
            )
        elif str(arg0).isdigit() and (arg1 is None or arg1 is js_undefined):
            html = anos_letivos.EscolherAnoLetivo(
                id_target="#content-configuracoes",
                callback_link=lambda ano: "#_phanterpwa:/escola-configuracao/{0}/{1}".format(arg0, ano)
            )        
        elif str(arg0).isdigit() and str(arg1).isdigit():
            self.id_escola = arg0
            self.ano_letivo = arg1
            self.get_form_configuracoes()
        # BackButton = left_bar.LeftBarButton(
        #     "back_servidores_escolas",
        #     "Voltar",
        #     I(_class="fas fa-arrow-circle-left"),
        #     **{"_phanterpwa-way": "area-do-servidor",
        #         "position": "top",
        #         "show_if": lambda: True if window.PhanterPWA.get_current_way() == "escolas" else False
        #     }
        # )
        # window.PhanterPWA.Components['left_bar'].add_button(BackButton)

    def get_form_configuracoes(self):
        window.PhanterPWA.GET(
            "api",
            "escola",
            "configuracao",
            self.id_escola,
            self.ano_letivo,
            onComplete=self.depois_de_pegar_o_form_de_config
        )

    def depois_de_pegar_o_form_de_config(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            self.edicao = True if str(json.data.id).isdigit() else False
            self.form = forms.Form(json.data)
            self.form.html_to("#content-configuracoes")
            self.binds()

    def binds(self):
        jQuery("#phanterpwa-widget-form-submit_button-config_escolas").off("click.submit_config_escola").on(
            "click.submit_config_escola",
            lambda: self.submit(this)
        )
    def submit(self, el):
        if jQuery(el)[0].hasAttribute("disabled"):
            window.PhanterPWA.flash(html="O formulário contém erros!")
        else:
            form_config = jQuery("#form-config_escolas")[0]
            form_config = __new__(FormData(form_config))
            window.PhanterPWA.POST(
                "api",
                "escola",
                "configuracao",
                self.id_escola,
                self.ano_letivo,
                form_data=form_config,
                onComplete=self.depois_de_enviar_configuracao
            )


class EscolaView():
    def __init__(self):
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("ESCOLAS", _class="phanterpwa-breadcrumb"),
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
                    _id="content-disciplinas",
                    _class='p-row card e-padding_20'
                ),

                _class="phanterpwa-container p-container"
            )
        )
        html.html_to("#main-container")


class Escolas(helpers.XmlConstructor):
    def __init__(self, index_instance):
        self.index_instance = index_instance
        html = DIV(
            DIV(
                DIV(
                    DIV(preloaders.android, _style="width: 300px; height: 300px; overflow: hidden; margin: auto;"),
                    _style="text-align:center; padding: 50px 0;"
                ),
                _id='lista-escolas-container',
                _class="phanterpwa_tables_container"
            ),
            _class='escolas-container phanterpwa-card-container'
        )
        helpers.XmlConstructor.__init__(self, "div", False, html, _class="lista_de_escolas")
        self.html_to("#content-escolas")
        self._get_data_search()

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            if json.escolas is None:
                window.PhanterPWA.open_way("escolas/novo")
            else:
                self.process_data(json)

    def process_data(self, json):

        if self.current_hash is not json.hash:
            self.current_hash = json.hash
            escolas = json.escolas
            escolas_content = DIV(_class="p-row")
            if escolas.data is not js_undefined:
                for x in escolas.data:
                    logo = "{0}/api/escolas/{1}/image".format(
                        window.PhanterPWA.ApiServer.remote_address,
                        x.id
                    )
                    html_menu = ""
                    if window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME"]):
                        html_menu = widgets.MenuBox(
                            "drop_{0}".format(x.id),
                            I(_class="fas fa-ellipsis-v"),
                            widgets.MenuOption("Editar", **{
                                "_class": "botao_editar_escola wave_on_click",
                                "_href": "#_phanterpwa:/escolas/{0}/editar".format(x.id)
                            }),
                            widgets.MenuOption("Configuração", **{
                                "_class": "botao_visualizar_socio wave_on_click",
                                "_href": "#_phanterpwa:/escola-configuracao/{0}/".format(x.id)
                            })
                        )
                    html_section = CONCATENATE(
                        DIV(
                            XSECTION(
                                DIV(
                                    "{0} - {1}".format(x.id, x.abreviacao),
                                    _class="escolas-container-abreviacao phanterpwa-xsection-title"
                                ),
                                DIV(
                                    DIV(
                                        IMG(_src=logo),
                                        _class="escolas-container-info-image",
                                        _style="width: 200px; height: 200px; margin: auto;"
                                    ),
                                    DIV(
                                        SPAN(x.nome),
                                        _class="e-tagger-wrapper p-col w1p100"
                                    ),
                                    _class="escolas-container-info"
                                ),
                                DIV(
                                    html_menu,
                                    _class="phanterpwa-xsection-menu_buttom"
                                ),
                                # HR(),

                                # html_votos,

                                _class="escolas-wrapper has_menu_button"
                            ),
                            _class="p-col w4p50 w1p100 e-padding_10"
                        )
                    )

                    escolas_content.append(html_section)


            # def editar_escola(el):
            #     id_escola = jQuery(el).attr("register_target")
            #     escolas_editar_novo.start(id_escola)
            escolas_content.html_to("#lista-escolas-container")

            # jQuery(
            #     ".botao_editar_escola"
            # ).off(
            #     "click.botao_editar_escola"
            # ).on(
            #     "click.botao_editar_escola",
            #     lambda: editar_escola(this)
            # )
            # jQuery(
            #     ".botao_visualizar_escola"
            # ).off(
            #     "click.botao_visualizar_escola"
            # ).on(
            #     "click.botao_visualizar_escola",
            #     lambda: visualizar_escola(this)
            # )

            # def change_attr_drop(el):
            #     targ = jQuery(el).attr("phanterpwa_dowpdown_target")
            #     jQuery(el).attr("data-target", targ)
            #     # jQuery(el).dropdown()

            # jQuery("[phanterpwa_dowpdown_target]").each(lambda: change_attr_drop(this))

    def _get_data_search(self, search="", field="id", orderby="id", sort="asc", page=1):
        window.PhanterPWA.ApiServer.GET(**{
            'url_args': ["api", "escolas"],
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


class Escola(helpers.XmlConstructor):

    def __init__(self, index_instance, id_escola, action):
        self.id_escola = id_escola
        self.action = action
        if action == "editar" or id_escola == "novo":
            self.get_form_escola(id_escola)
        elif action == "visualizar":
            self.visualizar(id_escola, index_instance.request.params)

    def visualizar(self, id_escola, params):
        console.log("Não implementado")



    def _on_click_add_dependentes(self, widget_instance):
        nome = jQuery("#phanterpwa-widget-input-input-dependentes-nome").val()
        data_de_nascimento = jQuery("#phanterpwa-widget-input-input-dependentes-data_de_nascimento").val()
        if nome is not "" and validations.check_datetime(data_de_nascimento, "dd/MM/yyyy", "date"):
            value = "{0} ({1})".format(
                nome,
                data_de_nascimento
            )
            widget_instance.add_new_value(value)
        self.modal_dependentes.close()

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


    @decorators.check_authorization(lambda: window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME", "Administrador Master Escola"]))
    def get_form_escola(self, id_escola):
        window.PhanterPWA.ApiServer.GET(**{
            'url_args': ["api", "escolas", id_escola],
            'onComplete': self.after_get,
            'get_cache': self.process_data
        })

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            self.process_data(json)

    def process_data(self, json):
        self.form = forms.Form(json.data.escolas)
        self.form.html_to("#content-escolas")
        self.binds()

    def binds(self):
        forms.SignForm("#form-escolas", after_sign=lambda: forms.ValidateForm("#form-escolas"))

        jQuery(
            "#phanterpwa-widget-form-submit_button-escolas"
        ).off(
            "click.submit_escolas_button"
        ).on(
            "click.submit_escolas_button",
            lambda: self.submit(this)
        )

    def submit(self, el):
        if jQuery(el)[0].hasAttribute("disabled"):
            window.PhanterPWA.flash(html=I18N("The form has errors!"))
        else:
            form_escola = jQuery("#form-escolas")[0]
            form_escola = __new__(FormData(form_escola))
            if self.id_escola == "novo":
                window.PhanterPWA.ApiServer.POST(**{
                    'url_args': ["api", "escolas", self.id_escola],
                    'form_data': form_escola,
                    'onComplete': self.after_submit
                })
            elif self.id_escola.isdigit():
                window.PhanterPWA.ApiServer.PUT(**{
                    'url_args': ["api", "escolas", self.id_escola],
                    'form_data': form_escola,
                    'onComplete': self.after_submit
                })

    def after_submit(self, data):
        forms.SignForm("#form-escolas")
        self.form.process_api_response(data)
        if data.status == 200 and self.id_escola == 'novo':
            window.PhanterPWA.open_way("escolas/novo")
        elif data.status == 200:
            window.PhanterPWA.open_way("escolas")


class Editar(helpers.XmlConstructor):

    def __init__(self, index_instance, id_escola):
        self.index_instance = index_instance
        self.id_escola = id_escola
        self.get_form_escola(id_escola)

    @decorators.check_authorization(lambda: window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME", "Administrador Master Escola"]))
    def get_form_escola(self, id_escola):
        window.PhanterPWA.ApiServer.GET(**{
            'url_args': ["api", "escolas", self.id_escola],
            'onComplete': self.after_get,
            'get_cache': self.process_data
        })

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            self.process_data(json)

    def process_data(self, json):
        self.form = forms.Form(json.data.escolas)
        self.form.html_to("#content-escolas")
        self.binds()

    def binds(self):
        forms.SignForm("#form-escolas", after_sign=lambda: forms.ValidateForm("#form-escolas"))

        jQuery(
            "#phanterpwa-widget-form-submit_button-escolas"
        ).off(
            "click.submit_escolas_button"
        ).on(
            "click.submit_escolas_button",
            lambda: self.submit(this)
        )

    def submit(self, el):
        if jQuery(el)[0].hasAttribute("disabled"):
            window.PhanterPWA.flash(html=I18N("The form has errors!"))
        else:
            form_escola = jQuery("#form-escolas")[0]
            form_escola = __new__(FormData(form_escola))
            if self.id_escola == "novo":
                window.PhanterPWA.ApiServer.POST(**{
                    'url_args': ["api", "escolas", self.id_escola],
                    'form_data': form_escola,
                    'onComplete': self.after_submit
                })
            elif self.id_escola.isdigit():
                window.PhanterPWA.ApiServer.PUT(**{
                    'url_args': ["api", "escolas", self.id_escola],
                    'form_data': form_escola,
                    'onComplete': self.after_submit
                })

    def after_submit(self, data):
        forms.SignForm("#form-escolas")
        self.form.process_api_response(data)
        if data.status == 200 and self.id_escola == 'novo':
            window.PhanterPWA.open_way("escolas/novo")
        elif data.status == 200:
            window.PhanterPWA.open_way("escolas")


class EscolherEscola(helpers.XmlConstructor):
    def __init__(self, id_target=None, callback_link=None):
        html = ""
        self.callback_link = callback_link
        if window.ServidorSME is not js_undefined:
            self.lista_de_escolas = window.ServidorSME.get_escolas()
            if window.ServidorSME.get_total_escolas() == 1:
                link = self.get_link(self.lista_de_escolas[0].id)
                window.location = link
            else:
                html = self.xml_escolas()
                if id_target is not None:
                    if jQuery(id_target).length == 1:
                        DIV(self.xml_escolas()).html_to(id_target)
                    else:
                        raise ValueError("O id \"{0}\"do destino não existe ou não é único.".format(id_target))
        else:
            servidor_sme.ServidorSME(
                on_success=lambda json: EscolherEscola(id_target=id_target, callback_link=callback_link)
            )
            # window.location = "/#_phanterpwa:/area-do-servidor"
        window.PhanterPWA.reload()
        helpers.XmlConstructor.__init__(self, "div", False, html)

    def get_link(self, id_escola):
        link = "#"
        if callable(self.callback_link):
            link = self.callback_link(id_escola)
        return link

    def xml_escolas(self):
        html = DIV(_class="p-row")
        for x in self.lista_de_escolas:
            logo = "{0}/api/escolas/{1}/image".format(
                window.PhanterPWA.ApiServer.remote_address,
                x.id
            )
            link = self.get_link(x.id)
            esc = DIV(
                DIV(
                    A(
                        XSECTION(
                            DIV(
                                "{0} - {1}".format(x.id, x.abreviacao),
                                _class="escolas-container-abreviacao phanterpwa-xsection-title"
                            ),
                            DIV(
                                DIV(
                                    IMG(_src=logo),
                                    _class="escolas-container-info-image"
                                ),
                                DIV(
                                    SPAN(x.nome),
                                    _class="e-tagger-wrapper p-col w1p100"
                                ),
                                _class="escolas-container-info"
                            ),
                            _class="escolas-wrapper"
                        ),
                        _href=link,
                        _style="text-decoration: none;"
                    ),
                    _class="e-padding_10"
                ),
                _class="p-col  w1p100 w3p50 w4p33"
            )
            html.append(esc)
        return DIV(
            DIV("ANTES DE CONTINUAR ESCOLHA A ESCOLA", _class="card-title"),
            html
        )

__pragma__('nokwargs')
