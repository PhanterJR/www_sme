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
H5 = helpers.XmlConstructor.tagger("h5")
LABEL = helpers.XmlConstructor.tagger("label")
P = helpers.XmlConstructor.tagger("p")
TH = helpers.XmlConstructor.tagger("th")
TD = helpers.XmlConstructor.tagger("td")
INPUT = helpers.XmlConstructor.tagger("input", True)
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
                        DIV("DISCIPLINAS", _class="phanterpwa-breadcrumb"),
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
        arg0 = window.PhanterPWA.Request.get_arg(0)
        arg1 = window.PhanterPWA.Request.get_arg(1)


        if arg0 is None or arg0 is js_undefined:
            html = escolas.EscolherEscola(
                id_target="#content-disciplinas",
                callback_link=lambda id_escola: "#_phanterpwa:/disciplinas/{0}".format(id_escola)
            )
        elif str(arg0).isdigit() and (arg1 is None or arg1 is js_undefined):
            html = anos_letivos.EscolherAnoLetivo(
                id_target="#content-disciplinas",
                callback_link=lambda ano: "#_phanterpwa:/disciplinas/{0}/{1}".format(arg0, ano)
            )
        elif str(arg0).isdigit() and str(arg1).isdigit():
            self.Disciplinas = Disciplinas(self, arg0, arg1)
        BackButton1 = left_bar.LeftBarButton(
            "back_disciplinas",
            "Voltar",
            I(_class="fas fa-arrow-circle-left"),
            **{
                "tag": "a",
                "_href": "#_phanterpwa:/area-do-servidor",
                "position": "top",
                "show_if": lambda: True if window.PhanterPWA.get_current_way() == "disciplinas/{0}/{1}".format(arg0, arg1) else False
            }
        )
        BackButton2 = left_bar.LeftBarButton(
            "back_disciplinas_lista",
            "Voltar",
            I(_class="fas fa-arrow-circle-left"),
            **{
                "tag": "a",
                "_href": "#_phanterpwa:/disciplinas/{0}/{1}".format(arg0, arg1),
                "position": "top",
                "show_if": lambda: True if window.PhanterPWA.get_current_way() == "disciplinas/{0}/{1}/lista".format(arg0, arg1) else False
            }
        )
        window.PhanterPWA.Components['left_bar'].add_button(BackButton1)
        window.PhanterPWA.Components['left_bar'].add_button(BackButton2)


class Disciplinas(helpers.XmlConstructor):
    def __init__(self, index_instance, escola, ano_letivo, prosseguir=None):
        self.prosseguir = prosseguir
        self.id_escola = escola
        self.ano_letivo = ano_letivo
        self.index_instance = index_instance
        helpers.XmlConstructor.__init__(self, "div", False, self.initial_xml(), _class="lista_de_disciplinas")
        self._get_disciplinas()

    def initial_xml(self):
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("DISCIPLINAS", _class="phanterpwa-breadcrumb"),
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

        return html

    def escolha_de_disciplinas_xml(self):
        logo = "{0}/api/escolas/{1}/image".format(
            window.PhanterPWA.ApiServer.remote_address,
            self.id_escola
        )


        html = DIV(
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
                    H2("ADICIONE EM CADA SÉRIE AS DISCIPLINAS OFERTADAS PELA SUA UNIDADE DE ENSINO",
                        " NO ANO LETIVO DE ", STRONG(self.ano_letivo)),
                    P("Para adicionar uma nova disciplina, basta clicar no botão ", I(_class="fas fa-plus"),"."
                        " Para mudar a ordem basta arrastar a disciplina na posição desejada."),
                    P("Muitas séries possuem disciplinas idênticas, você pode copiar e colar todas as disciplinas",
                        " utilizando os botões ", I(_class="fas fa-copy"), " (para copiar) e ", I(_class="fas fa-paste"), " (para colar)."),
                    _class="p-col w1p100 w4p70",
                    _id="u_informacao_disciplinas"
                ),
                _class="p-row"
            ),
            _class='series-disciplinas-container'
        )
        if self.lista_de_series is not js_undefined:
            for s in self.lista_de_series:
                html.append(DIV(self.xml_card(s), _id="serie_e_disciplinas_{0}".format(s.id)))

            html.html_to("#content-disciplinas")
            self.binds_escolha_de_disciplinas()

    def xml_card(self, data_serie):
        table = XTABLE(
            "disciplinas-table",
            XTRH(
                "disciplinas-table-head",
                "Disciplina",
                TH("Abreviação", _style="text-align: center;"),
                TH("Carga Horária", _style="text-align: center;"),
                TH("Diário de Notas?", _style="text-align: center;"),
                TH("Base Nacional Comum?", _style="text-align: center;"),
                TH(_style="width: 40px;")
            )
        )
        cont_disc = 0
        for x in data_serie.disciplinas:
            cont_disc += 1
            bas_nas = I(_class="fas fa-check-circle", _style="color:green;") if x.base_nacional is True else I(_class="fas fa-times-circle", _style="color: red;")
            diario_de_notas = I(_class="fas fa-check-circle", _style="color:green;") if x.diario_de_notas is True else I(_class="fas fa-times-circle", _style="color: red;")
            table.append(
                XTRD(
                    "disciplina-table-data-{0}".format(x.id),
                    x.disciplina,
                    TD(x.abreviacao, _style="text-align: center;"),
                    TD(x.cargahoraria, _style="text-align: center;"),
                    TD(diario_de_notas, _style="text-align: center;"),
                    TD(bas_nas, _style="text-align: center;"),
                    widgets.MenuBox(
                        "drop_{0}".format(x.id),
                        I(_class="fas fa-ellipsis-v"),
                        
                        widgets.MenuOption("Editar", **{
                            "_class": "botao_editar_disciplina wave_on_click",
                            "_data-id_disciplina": x.id,
                            "_data-disciplina": x.disciplina,
                            "_data-abreviacao": x.abreviacao,
                            "_data-cargahoraria": x.cargahoraria,
                            "_data-diariodenotas": x.diario_de_notas,
                            "_data-basenacionalcomum": x.base_nacional,
                            "_data-id_serie": data_serie.id
                        }),
                        widgets.MenuOption("Deletar", **{
                            "_class": "botao_deletar_disciplina wave_on_click",
                            "_data-id_disciplina": x.id,
                            "_data-id_serie": data_serie.id
                        }),
                        **{
                            "onOpen": lambda: self.binds_escolha_de_disciplinas()
                        }
                    ),
                    **{
                        "drag_and_drop": True,
                        "after_drop": self.after_drop,
                        "_class": "linha_serie_disciplina",
                        "_data-id_escola": self.id_escola,
                        "_data-id_ano_letivo": self.ano_letivo,
                        "_data-id_serie": x.series,
                        "_data-id_disciplina": x.id
                    }
                )
            )
        disciplinas_copiadas = sessionStorage.getItem("disciplinas_copiadas")
        disabled = "disabled"
        if disciplinas_copiadas is not js_undefined and disciplinas_copiadas is not None:
            disabled = None
        if cont_disc == 0:
            table = DIV("NÃO HÁ DISCIPLINAS CADASTRADAS NESTA TURMA",_style="color: red; padding: 50px 0; text-align: center;")
        card = DIV(
            LABEL(data_serie.serie, _for="phanterpwa-card-panel-control-{0}".format(data_serie.id)),
            DIV(
                DIV(
                    DIV(
                        DIV(
                            table,
                            _class="p-row"
                        ),
                        _class="phanterpwa-card-panel-control-content"
                    ),
                    DIV(
                        DIV(
                            I(_class="fas fa-plus"),
                            **{
                                "_class": "botao_nova_serie icon_button",
                                "_title": "Adicione uma nova disciplina",
                                "_data-id_escola": self.id_escola,
                                "_data-id_ano_letivo": self.ano_letivo,
                                "_data-id_serie": data_serie.id,
                            }
                        ),
                        DIV(
                            I(_class="fas fa-copy"),
                            **{
                                "_class": "botao_copiar icon_button",
                                "_title": "Copie as disciplinas",
                                "_data-id_escola": self.id_escola,
                                "_data-id_ano_letivo": self.ano_letivo,
                                "_data-id_serie": data_serie.id,
                            }
                        ),
                        DIV(
                            I(_class="fas fa-paste"),
                            **{
                                "_class": "botao_colar icon_button",
                                "_title": "Cole as disciplinas copiadas",
                                "_data-id_escola": self.id_escola,
                                "_data-id_ano_letivo": self.ano_letivo,
                                "_data-id_serie": data_serie.id,
                                "_disabled": disabled
                            }
                        ),
                        _class="phanterpwa-card-panel-control-buttons"
                    ),
                    _class="phanterpwa-card-panel-control-wrapper has_buttons"
                ),
                _class="phanterpwa-card-panel-control-container"
            ),
            DIV(_id="modal_disciplina_case"),
            _id="phanterpwa-card-panel-control-{0}".format(data_serie.id),
            _class="phanterpwa-card-panel-control"
        )
        return card

    def binds_escolha_de_disciplinas(self):
        jQuery(
            ".botao_nova_serie"
        ).off(
            "click.nova_disciplinas"
        ).on(
            "click.nova_disciplinas",
            lambda: self.modal_add_disciplina(this, "novo")
        )
        jQuery(
            ".botao_editar_disciplina"
        ).off(
            "click.editar_disciplinas"
        ).on(
            "click.editar_disciplinas",
            lambda: self.modal_add_disciplina(this, "editar")
        )
        jQuery(
            ".botao_deletar_disciplina"
        ).off(
            "click.deletar_disciplinas"
        ).on(
            "click.deletar_disciplinas",
            lambda: self.deletar_disciplina(this)
        )
        jQuery(".linha_serie_disciplina")
        jQuery(
            ".botao_copiar"
        ).off(
            "click.copiar_disciplinas"
        ).on(
            "click.copiar_disciplinas",
            lambda: self.copiar_dados(this)
        )
        jQuery(
            ".botao_colar"
        ).off(
            "click.colar_disciplinas"
        ).on(
            "click.colar_disciplinas",
            lambda: self.colar_dados(this)
        )

    def deletar_disciplina(self, widget_instance):
        id_serie = jQuery(widget_instance).data("id_serie")
        id_disciplina = jQuery(widget_instance).data("id_disciplina")
        window.PhanterPWA.ApiServer.DELETE(**{
            'url_args': ["api", "disciplinas", self.id_escola, self.ano_letivo, "disciplina", id_disciplina],
            'onComplete': lambda data, ajax_status: self.update_serie(data, ajax_status, id_serie)
        })

    def modal_add_disciplina(self, widget_instance, action):
        id_serie = jQuery(widget_instance).data("id_serie")
        data_set = self.data_set_disciplinas
        extra_field = ""
        disciplina_field = forms.FormWidget(
            "disciplina",
            "nome_disciplina",
            **{
                "value": disciplina,
                "default": disciplina,
                "label": "Disciplina",
                "type": "select",
                "validators": ["IS_NOT_EMPTY"],
                "editable": True,
                "form": "disciplina",
                "data_set": data_set,
                "_class": "p-col w1p100"
            }
        )
        disciplina = ""
        abreviacao = ""
        cargahoraria = ""
        basenacionalcomum = False
        label_sub = "Adicionar"
        titulo_mod = "Adicionar Nova Disciplina"
        if action == "editar":
            label_sub = "Salvar Alteração"
            id_disciplina = jQuery(widget_instance).data("id_disciplina")
            disciplina = jQuery(widget_instance).data("disciplina")
            abreviacao = jQuery(widget_instance).data("abreviacao")
            cargahoraria = jQuery(widget_instance).data("cargahoraria")
            diariodenotas = jQuery(widget_instance).data("diariodenotas")
            basenacionalcomum = jQuery(widget_instance).data("basenacionalcomum")
            titulo_mod = 'Editar Disciplina "{0}"'.format(disciplina)
            if basenacionalcomum == "true" or basenacionalcomum is True:
                basenacionalcomum = True
            else:
                basenacionalcomum = False
            if diariodenotas == "true" or diariodenotas is True:
                diariodenotas = True
            else:
                diariodenotas = False
            extra_field = forms.FormWidget(
                "disciplina",
                "id",
                **{
                    "value": id_disciplina,
                    "label": "id",
                    "type": "string",
                    "kind": "hidden",
                    "form": "disciplina",
                    "_placeholder": "id",
                    "_class": "p-col w1p100 w3p50 e-display_hidden"
                }
            )
            disciplina_field = forms.FormWidget(
                "disciplina",
                "nome_disciplina",
                **{
                    "value": disciplina,
                    "default": disciplina,
                    "label": "Disciplina",
                    "type": "string",
                    "validators": ["IS_NOT_EMPTY"],
                    "form": "disciplina",
                    "_class": "p-col w1p100"
                }
            )
        content = DIV(
            extra_field,
            disciplina_field,
            forms.FormWidget(
                "disciplina",
                "abreviacao",
                **{
                    "value": abreviacao,
                    "label": "Abreviação",
                    "type": "string",
                    "form": "disciplina",
                    "_placeholder": "Disciplina abreviada",
                    "_class": "p-col w1p100 w3p50"
                }
            ),
            forms.FormWidget(
                "disciplina",
                "carga_horaria",
                **{
                    "value": cargahoraria,
                    "label": "Carga Horária",
                    "type": "string",
                    "form": "disciplina",
                    "_placeholder": "Carga Horária",
                    "_class": "p-col w1p100 w3p50"
                }
            ),
            forms.FormWidget(
                "disciplina",
                "diario_de_notas",
                **{
                    "label": "Faz parte do diário de notas?",
                    "type": "boolean",
                    "value": diariodenotas,
                    "form": "disciplina",
                    "_class": "p-col w1p100 w3p50"
                }
            ),
            forms.FormWidget(
                "disciplina",
                "base_nacional_comum",
                **{
                    "label": "Base Nascional Comum?",
                    "type": "boolean",
                    "value": basenacionalcomum,
                    "form": "disciplina",
                    "_class": "p-col w1p100 w3p50"
                }
            ),
            _class="p-row"
        )
        footer = DIV(
            forms.SubmitButton(
                "disciplina",
                label_sub,
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ),
            _class='phanterpwa-form-buttons-container'
        )
        self.modal_disciplina = modal.Modal(
            "#modal_disciplina_case",
            **{
                "title": titulo_mod,
                "content": content,
                "footer": footer,
                "form": "disciplina"
            }
        )
        self.modal_disciplina.open()
        jQuery("#phanterpwa-widget-form-submit_button-disciplina").off(
            "click.adicionar_disciplina"
        ).on(
            "click.adicionar_disciplina",
            lambda: self._on_click_add_disciplina(widget_instance, action)
        )
        forms.SignForm("#form-disciplina", after_sign=lambda: forms.ValidateForm("#form-disciplina"))
        

    def _on_click_add_disciplina(self, widget_instance, action):
        id_serie = jQuery(widget_instance).data("id_serie")
        form_disciplina = jQuery("#form-disciplina")[0]
        form_disciplina = __new__(FormData(form_disciplina))
        if action == "editar":
            window.PhanterPWA.ApiServer.PUT(**{
                'url_args': ["api", "disciplinas", self.id_escola, self.ano_letivo, "editar", id_serie],
                'form_data': form_disciplina,
                'onComplete': lambda data, ajax_status: self.update_serie(data, ajax_status, id_serie)
            })
        else:
            window.PhanterPWA.ApiServer.POST(**{
                'url_args': ["api", "disciplinas", self.id_escola, self.ano_letivo, "novo", id_serie],
                'form_data': form_disciplina,
                'onComplete': lambda data, ajax_status: self.update_serie(data, ajax_status, id_serie)
            })
        self.modal_disciplina.close()


    def after_drop(self, ev, el):
        lista_ordem = list()
        id_serie = jQuery(el).data("id_serie")
        jQuery(
            "#serie_e_disciplinas_{0}".format(id_serie)
        ).find(
            ".phanterpwa-widget-table-data"
        ).each(lambda: lista_ordem.append(
            jQuery(this).data("id_disciplina")
        ))
        window.PhanterPWA.GET(
            "api",
            "signforms",
            "phanterpwa-form-disciplina",
            onComplete=lambda data, ajax_status: self.depois_de_assinar_ordenacao(
                data, ajax_status, id_serie, lista_ordem)
        )

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            if window.PhanterPWA.Request.get_arg(2) == "lista":
                self.lista_xml(json)
            else:
                self.lista_de_series = json.data.lista_de_series
                self.data_set_disciplinas = json.data.data_set_disciplinas
                self.escolha_de_disciplinas_xml()

    def _get_disciplinas(self):
        window.PhanterPWA.ApiServer.GET(
            "api",
            "disciplinas",
            self.id_escola,
            self.ano_letivo,
            onComplete=self.after_get
        )

    def submit(self):
        formdata = __new__(FormData())
        csrf_token = jQuery("#phanterpwa-widget-input-input-disciplinas-csrf_token").val()
        formdata.append(
            "csrf_token",
            csrf_token
        )
        formdata.append(
            "disciplinas",
            JSON.stringify(window.PhanterPWA.Request.widgets['lista_de_disciplinas_escola_ano'].value())
        )
        window.PhanterPWA.ApiServer.POST(**{
            'url_args': ["api", "disciplinas", self.id_escola, self.ano_letivo],
            'form_data': formdata,
            'onComplete': self.after_post
        })

    def copiar_dados(self, el):
        id_serie = jQuery(el).data("id_serie")
        dados = []
        linhas = jQuery("tr[data-id_serie='{0}']".format(id_serie)).each(
            lambda: dados.append(jQuery(this).data("id_disciplina")))
        jQuery(".botao_colar").removeAttr("disabled")
        sessionStorage.setItem("disciplinas_copiadas", JSON.stringify(dados))
        window.PhanterPWA.flash(html=STRONG("Disciplinas copiadas!"))

    def colar_dados(self, el):
        id_serie = jQuery(el).data("id_serie")
        if not jQuery(el)[0].hasAttribute("disabled"):
            disciplinas_copiadas = sessionStorage.getItem("disciplinas_copiadas")
            if disciplinas_copiadas is not js_undefined and disciplinas_copiadas is not None:
                window.PhanterPWA.GET(
                    "api",
                    "signforms",
                    "phanterpwa-form-disciplina",
                    onComplete=lambda data, ajax_status: self.depois_de_assinar(
                        data, ajax_status, id_serie, disciplinas_copiadas)
                )

    def update_serie(self, data, ajax_status, id_serie, json):
        json = data.responseJSON
        if ajax_status == "success":
            card = self.xml_card(json.data_serie)
            card.html_to("#serie_e_disciplinas_{0}".format(id_serie))
            self.binds_escolha_de_disciplinas()

    def depois_de_assinar(self, data, ajax_status, id_serie, disciplinas_copiadas):
        json = data.responseJSON
        if ajax_status == "success":
            formdata = __new__(FormData())
            formdata.append(
                "csrf_token",
                json.csrf
            )
            formdata.append(
                "disciplinas",
                JSON.stringify(disciplinas_copiadas)
            )
            window.PhanterPWA.ApiServer.POST(**{
                'url_args': ["api", "disciplinas", self.id_escola, self.ano_letivo, "colar", id_serie],
                'form_data': formdata,
                'onComplete': lambda data, ajax_status: self.update_serie(data, ajax_status, id_serie)
            })

    def depois_de_assinar_ordenacao(self, data, ajax_status, id_serie, disciplinas_copiadas):
        json = data.responseJSON
        if ajax_status == "success":
            formdata = __new__(FormData())
            formdata.append(
                "csrf_token",
                json.csrf
            )
            formdata.append(
                "disciplinas",
                JSON.stringify(disciplinas_copiadas)
            )
            window.PhanterPWA.ApiServer.PUT(**{
                'url_args': ["api", "disciplinas", self.id_escola, self.ano_letivo, "ordenar", id_serie],
                'form_data': formdata,
                'onComplete': lambda data, ajax_status: self.update_serie(data, ajax_status, id_serie)
            })

__pragma__('nokwargs')
