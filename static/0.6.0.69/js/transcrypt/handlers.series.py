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
P = helpers.XmlConstructor.tagger("p")
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
    @decorators.check_authorization(lambda: window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME", "Administrador Master Escola"]))
    def initialize(self):
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("SÉRIES", _class="phanterpwa-breadcrumb"),
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
                    _id="content-series",
                    _class='p-row card e-padding_20'
                ),

                _class="phanterpwa-container p-container"
            ),
            DIV(_id="modal_series_case")
        )
        html.html_to("#main-container")
        arg0 = window.PhanterPWA.Request.get_arg(0)
        arg1 = window.PhanterPWA.Request.get_arg(1)


        if arg0 is None or arg0 is js_undefined:
            html = escolas.EscolherEscola(
                id_target="#content-series",
                callback_link=lambda id_escola: "#_phanterpwa:/series/{0}".format(id_escola)
            )
        elif str(arg0).isdigit() and (arg1 is None or arg1 is js_undefined):
            html = anos_letivos.EscolherAnoLetivo(
                id_target="#content-series",
                callback_link=lambda ano: "#_phanterpwa:/series/{0}/{1}".format(arg0, ano)
            )
        elif str(arg0).isdigit() and str(arg1).isdigit():
            self.Series = Series(self, arg0, arg1)
        BackButton1 = left_bar.LeftBarButton(
            "back_series",
            "Voltar",
            I(_class="fas fa-arrow-circle-left"),
            **{
                "tag": "a",
                "_href": "#_phanterpwa:/area-do-servidor",
                "position": "top",
                "show_if": lambda: True if window.PhanterPWA.get_current_way() == "series/{0}/{1}".format(arg0, arg1) else False
            }
        )
        BackButton2 = left_bar.LeftBarButton(
            "back_series_lista",
            "Voltar",
            I(_class="fas fa-arrow-circle-left"),
            **{
                "tag": "a",
                "_href": "#_phanterpwa:/series/{0}/{1}".format(arg0, arg1),
                "position": "top",
                "show_if": lambda: True if window.PhanterPWA.get_current_way() == "series/{0}/{1}/lista".format(arg0, arg1) else False
            }
        )
        window.PhanterPWA.Components['left_bar'].add_button(BackButton1)
        window.PhanterPWA.Components['left_bar'].add_button(BackButton2)


class Series(helpers.XmlConstructor):
    def __init__(self, index_instance, escola, ano_letivo, prosseguir=None):
        self.prosseguir = prosseguir
        self.id_escola = escola
        self.ano_letivo = ano_letivo
        self.index_instance = index_instance
        helpers.XmlConstructor.__init__(self, "div", False, self.initial_xml(), _class="lista_de_series")
        self._get_series()

    def initial_xml(self):
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("SÉRIES", _class="phanterpwa-breadcrumb"),
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
                    _id="content-series",
                    _class='p-row card e-padding_20'
                ),

                _class="phanterpwa-container p-container"
            ),
            DIV(_id="modal_series_case")
        )
        html.html_to("#main-container")

        return html


    def lista_xml(self, json):
        logo = "{0}/api/escolas/{1}/image".format(
            window.PhanterPWA.ApiServer.remote_address,
            self.id_escola
        )
        html = DIV(
            DIV(
                FORM(
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
                                    H3("NESTE PAINEL É POSSÍVEL MUDAR A ORDEM DE CADA SÉRIE E PERSONALIZAR",
                                        " O NOME DA SÉRIE."),
                                    P("Tenha em mente que a personalização do nome da série irá afetar"
                                        " como a série será representada nos documentos. Para personalizar"
                                        " basta clicar em ", DIV(I(_class="fas fa-ellipsis-v"), _style ="display: inline-block; width: 30px; text-align:center;"), "."),
                                    P("Para mudar a ordem basta arrastar à ordem desejada."),
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
                                    _id="lista_de_series_para_ordenar"),
                                _class="p-col w1p100",
                            ),
                            _class="p-row e-padding_20w"
                        ),
                        _class="phanterpwa-container-section"
                    ),
                    DIV(
                        DIV(
                            forms.SubmitButton(
                                "ordenar-series",
                                "Confirmar",
                                _class="btn-autoresize wave_on_click waves-phanterpwa"
                            ),
                            _class='phanterpwa-form-buttons-container'
                        ),
                        _class="input-field p-col w1p100"
                    ),
                    **{
                        "_phanterpwa-form": "ordenar-series",
                        "_id": "sme-ordenar-series",
                        "_class": "p-row",
                        "_autocomplete": "off"
                    }
                ),
                _class="phanterpwa_tables_search_wrapper"
            ),
            _class='series-container phanterpwa-card-container'
        )
        html.html_to("#content-series")

        table = XTABLE(
            "series-table",
            XTRH(
                "series-table-head",
                "Ordem",
                "Série Personalizada",
                "Série Base",
                "Idade Base"
                # sort_by=series.searcher.sort_by,
                # sort_order=series.searcher.sort_order,
                # sortable=series.searcher.sortable,
                # on_click_sortable=self._on_sort,
            )
        )
        if json.data.db is not js_undefined:
            cont = 0
            for x in json.data.db:
                cont += 1
                serie_base = ""
                if x.equivalencia is not None and x.equivalencia is not js_undefined:
                    serie_base = x.equivalencia[4:]
                # __pragma__("jsiter")
                # vars_aluno = {
                #     "aluno": x.aluno,
                #     "data_de_nascimento": data_de_nascimento_formated,
                #     "nome_do_pai": x.nome_do_pai,
                #     "nome_da_mae": x.nome_da_mae,
                # }
                # __pragma__("nojsiter")
                # vars_serialized = jQuery.param(vars_aluno)
                # ano_letivo = ""
                # id_escola = ""

                # if self.ano_letivo is not None:
                #     ano_letivo = "/{0}".format(self.ano_letivo)

                # if self.escola is not None:
                #     id_escola = "/{0}".format(self.escola["id"])

                table.append(
                    XTRD(
                        "series-table-data-{0}".format(x.id),
                        TD(cont, _style="text-align: center;"),
                        TD(x.serie, **{"_id": "serie_personalizada_{0}".format(x.id)}),
                        TD(serie_base, **{"_id": "serie_base_{0}".format(x.id)}),
                        TD(x.idade_base, _style="text-align: center;"),
                        widgets.MenuBox(
                            "drop_{0}".format(x.id),
                            I(_class="fas fa-ellipsis-v"),
                            widgets.MenuOption("Personalizar Série", **{
                                "_class": "botao_editar_serie wave_on_click",
                                "_data-id_serie": "{0}".format(x.id),
                                "_data-serie_base": serie_base
                            }),
                            onOpen=lambda: self.binds_personalizar_serie()
                        ),
                        **{
                            "drag_and_drop": True,
                            "after_drop": self.after_drop,
                            "_data-id_serie": x.id,
                            "_data-serie": x.serie
                        }
                    )
                )
        table.html_to("#lista_de_series_para_ordenar")
        self.binds_lista()

    def binds_personalizar_serie(self):
        el = jQuery(".botao_editar_serie")
        serie = el.data("id_serie")
        console.log(serie)

        self.open_modal_personalizar_serie(serie)

    def open_modal_personalizar_serie(self, serie):
        serie_personalizada = jQuery("#serie_personalizada_{0}".format(serie)).text()
        serie_base = jQuery("#serie_base_{0}".format(serie)).text()
        content = DIV(
            P("A série base é ", STRONG(serie_base), ", porem é possível personalizar como esta série base ",
                "será exibida, mesmo assim, internamente, esta série será indentificada pela ", STRONG("série base"),".", _style="color: red;"),
            forms.FormWidget(
                "series",
                "serie",
                **{
                    "value": serie_personalizada,
                    "label": "Personalizar",
                    "type": "string",
                    "_placeholder": "Disciplina abreviada",
                    "_class": "p-col w1p100"
                }
            ),
            _class="p-row"
        )
        footer = DIV(
            forms.SubmitButton(
                "series",
                "Confirmar",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ),
            _class='phanterpwa-form-buttons-container'
        )
        self.modal_personalizar_serie = modal.Modal(
            "#modal_series_case",
            **{
                "title": "Personalizar nome da série",
                "content": content,
                "footer": footer,
                "form": "disciplina"
            }
        )
        self.modal_personalizar_serie.open()
        jQuery("#phanterpwa-widget-form-submit_button-series").off(
            "click.adicionar_series"
        ).on(
            "click.adicionar_series",
            lambda: self._on_click_personalizar_serie(serie)
        )

    def _on_click_personalizar_serie(self, serie):
        serie_atual = jQuery("#phanterpwa-widget-input-input-series-serie").val()
        if serie_atual != "":
            jQuery("#serie_personalizada_{0}".format(serie)).text(serie_atual)
            self.modal_personalizar_serie.close()
        else:
            serie_personalizada = jQuery("#serie_personalizada_{0}".format(serie)).text()
            if serie_personalizada == "":
                serie_base = jQuery("#serie_base_{0}".format(serie)).text()
                jQuery("#phanterpwa-widget-input-input-series-serie").val(serie_base)
            else:
                jQuery("#phanterpwa-widget-input-input-series-serie").val(serie_personalizada)
            jQuery("#phanterpwa-widget-input-input-series-serie").focus()
    def binds_lista(self):
        forms.SignForm("#sme-ordenar-series")
        jQuery(
            "#phanterpwa-widget-form-submit_button-ordenar-series"
        ).off(
            "click.confirmar_ordenar_series"
        ).on(
            "click.confirmar_ordenar_series",
            lambda: self.submit_ordenar()
        )

    def escolha_de_series_xml(self, json):
        series = json.data.series
        lista_de_series = json.data.lista_de_series
        fixed = json.data.series_fixas
        logo = "{0}/api/escolas/{1}/image".format(
            window.PhanterPWA.ApiServer.remote_address,
            self.id_escola
        )
        titulo =  H2("ESCOLHA AS SÉRIES/ANOS QUE SÃO OFERTADAS PELA SUA UNIDADE ESCOLHAR",
            " NO ANO LETIVO DE ", STRONG(self.ano_letivo))
        if window.PhanterPWA.Request.get_arg(2) == "matricula":
            titulo =  H2(STRONG("A MATRÍCULA TEVE QUE SER INTERROMPIDA TEMPORARIAMENTE.", _style="color: red;"),
                " É NECESSÁRIO ADICIONAR SÉRIES ÀS QUAIS OS ALUNOS IRÃO SE MATRICULAR.")
        html = DIV(
            DIV(
                FORM(
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
                                    H3("As seleções em laranja (se houver) não podem ser modificadas, pois possivelmente",
                                        " já há turmas ou matrículas com estes valores, sua exclusão",
                                        " acarretaria na exclusão das turmas ou matrículas também. Caso sua"
                                        " exclusão seja realmente necessária, fale com o suporte."),
                                    _class="p-col w1p100 w4p70",
                                    _id="u_informacao_series"
                                ),
                                _class="p-row"
                            ),
                            DIV(
                                widgets.ListString(
                                    "lista_de_series_escola_ano",
                                    label="Seleção de Séries/Anos",
                                    placeholder="Escolha uma série/ano abaixo.",
                                    value=series,
                                    data_set=lista_de_series,
                                    editable=False,
                                    fixed=fixed
                                ),
                                _class="p-col w1p100",
                            ),
                            _class="p-row e-padding_20w"
                        ),
                        _class="phanterpwa-container-section"
                    ),
                    DIV(
                        DIV(
                            forms.SubmitButton(
                                "series",
                                "Confirmar",
                                _class="btn-autoresize wave_on_click waves-phanterpwa"
                            ),
                            _class='phanterpwa-form-buttons-container'
                        ),
                        _class="input-field p-col w1p100"
                    ),
                    **{
                        "_phanterpwa-form": "series",
                        "_id": "sme-series",
                        "_class": "p-row",
                        "_autocomplete": "off"
                    }
                ),
                _class="phanterpwa_tables_search_wrapper"
            ),
            DIV(_id='lista-series-subtitle', _class="phanterpwa-subtitle"),
            DIV(
                # DIV(
                #     DIV(preloaders.android, _style="width: 300px; height: 300px; overflow: hidden; margin: auto;"),
                #     _style="text-align:center; padding: 50px 0;"
                # ),
                _id='lista-series-container',
                _class="phanterpwa_tables_container"
            ),
            _class='series-container phanterpwa-card-container'
        )
        html.html_to("#content-series")
        self.binds_escolha_de_series()

    def binds_escolha_de_series(self):
        forms.SignForm("#sme-series")
        jQuery(
            "#phanterpwa-widget-form-submit_button-series"
        ).off(
            "click.confirmar_series"
        ).on(
            "click.confirmar_series",
            lambda: self.submit()
        )

    def after_post(self, data, ajax_status):
        json = data.responseJSON
        if ajax_status == "success":
            if window.PhanterPWA.Request.get_arg(2) == "matricula":
                window.PhanterPWA.set_push_way("series/{0}/{1}/lista/matricula/{2}".format(
                    window.PhanterPWA.Request.get_arg(0),
                    window.PhanterPWA.Request.get_arg(1),
                    window.PhanterPWA.Request.get_arg(3)
                ))
            else:
                window.PhanterPWA.set_push_way("{0}/lista".format(
                    window.PhanterPWA.get_current_way()
                ))
            self.lista_xml(json)

    def after_drop(self, ev, el):
        self.lista_ordem = list()
        jQuery(
            "#lista_de_series_para_ordenar"
        ).find(
            ".phanterpwa-widget-table-data"
        ).each(lambda: self.lista_ordem.append(
            [jQuery(this).data("id_serie"), jQuery("#serie_personalizada_{0}".format(jQuery(this).data("id_serie"))).text()]
        ))
        console.log(self.lista_ordem)
        # console.log(el)

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            if window.PhanterPWA.Request.get_arg(2) == "lista":
                self.lista_xml(json)
            else:
                self.escolha_de_series_xml(json)



    def after_ordenar(self, data, ajax_status):
        if ajax_status == "success":

            if callable(self.prosseguir):
                self.prosseguir(data)
            elif isinstance(self.prosseguir, str) and self.prosseguir.startswith("#_phanterpwa:"):
                window.location = self.prosseguir
            elif window.PhanterPWA.Request.get_arg(3) == "matricula":
                window.PhanterPWA.open_way("matricula/{0}/{1}/{2}".format(
                    window.PhanterPWA.Request.get_arg(4),
                    window.PhanterPWA.Request.get_arg(0),
                    window.PhanterPWA.Request.get_arg(1)
                ))
            else:
                window.location = "#_phanterpwa:/area-do-servidor"

    def _get_series(self):
        window.PhanterPWA.ApiServer.GET(
            "api",
            "series",
            self.id_escola,
            self.ano_letivo,
            onComplete=self.after_get
        )

    def submit(self):
        formdata = __new__(FormData())
        csrf_token = jQuery("#phanterpwa-widget-input-input-series-csrf_token").val()
        formdata.append(
            "csrf_token",
            csrf_token
        )
        formdata.append(
            "series",
            JSON.stringify(window.PhanterPWA.Request.widgets['lista_de_series_escola_ano'].value())
        )
        window.PhanterPWA.ApiServer.POST(**{
            'url_args': ["api", "series", self.id_escola, self.ano_letivo],
            'form_data': formdata,
            'onComplete': self.after_post
        })

    def submit_ordenar(self):
        self.after_drop()
        formdata = __new__(FormData())
        csrf_token = jQuery("#phanterpwa-widget-input-input-ordenar-series-csrf_token").val()
        formdata.append(
            "csrf_token",
            csrf_token
        )
        formdata.append(
            "ordem",
            JSON.stringify(self.lista_ordem)
        )
        window.PhanterPWA.ApiServer.PUT(**{
            'url_args': ["api", "series", self.id_escola, self.ano_letivo],
            'form_data': formdata,
            'onComplete': self.after_ordenar
        })



__pragma__('nokwargs')
