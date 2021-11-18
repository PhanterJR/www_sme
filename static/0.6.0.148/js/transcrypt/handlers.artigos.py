import phanterpwa.frontend.gatehandler as gatehandler
import phanterpwa.frontend.helpers as helpers
import phanterpwa.frontend.components.widgets as widgets
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

class Index(gatehandler.Handler):

    def initialize(self):
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("ARTIGOS", _class="phanterpwa-breadcrumb"),
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
                    _id="content-artigos",
                    _class='p-row card e-padding_20'
                ),

                _class="phanterpwa-container p-container"
            )
        )
        html.html_to("#main-container")


class Artigos(helpers.XmlConstructor):
    def __init__(self, index_instance):
        self.index_instance = index_instance
        html = DIV(
            DIV(
                FORM(
                    DIV(
                        DIV(
                            DIV(
                                widgets.Input(
                                    "search_artigos",
                                    label="Localizar artigo",
                                    placeholder="Nome ou parte do nome do artigo",
                                    icon=I(_class="fab fa-sistrix"),
                                    icon_on_click=lambda: self.search()
                                ),
                                _class="p-col w1p100 w3p50 w4p75",
                            ),
                            DIV(
                                widgets.Select(
                                    "campos_artigos",
                                    label="Campos à pesquisar",
                                    placeholder="Escolha o Campo",
                                    value="id",
                                    data_set=[
                                        ["id", "ID"],
                                        ["artigo", "Artigo"]
                                    ]
                                ),
                                _id="phanterpwa-input-search_field",
                                _class="p-col w1p100 w3p50 w4p25"
                            ),
                            _class="p-row e-padding_20w"
                        ),
                        _class="phanterpwa-container-section"
                    ),
                    _action="#",
                    _id="search_artigos",
                    _class="form-search_artigos",
                    _enctype="multipart/form-data",
                    _method="post",
                    _autocomplete="off"
                ),
                _class="phanterpwa_tables_search_wrapper"
            ),
            DIV(_id='lista-artigos-subtitle', _class="phanterpwa-subtitle"),
            DIV(
                DIV(
                    DIV(preloaders.android, _style="width: 300px; height: 300px; overflow: hidden; margin: auto;"),
                    _style="text-align:center; padding: 50px 0;"
                ),
                _id='lista-artigos-container',
                _class="phanterpwa_tables_container"
            ),
            _class='artigos-container phanterpwa-card-container'
        )
        helpers.XmlConstructor.__init__(self, "div", False, html, _class="lista_de_artigos")
        self.html_to("#content-artigos")
        self._get_data_search()

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            if json.artigos is None:
                window.PhanterPWA.open_way("artigos/novo")
            else:
                self.process_data(json)

    def _on_sort(self, table_head_instance):
        widgets = window.PhanterPWA.Request.widgets
        page = widgets["artigos-table-footer"].page()
        search = widgets["search_artigos"].value()
        field = widgets["campos_artigos"].value()
        sorted_field = widgets["artigos-table-head"].sorted_field()
        self._get_data_search(search=search, field=field, orderby=sorted_field[0], sort=sorted_field[1], page=page)

    def _on_page(self, table_pagination_instance):
        widgets = window.PhanterPWA.Request.widgets
        page = widgets["artigos-table-footer"].page()
        search = widgets["search_artigos"].value()
        field = widgets["campos_artigos"].value()
        sorted_field = widgets["artigos-table-head"].sorted_field()
        self._get_data_search(search=search, field=field, orderby=sorted_field[0], sort=sorted_field[1], page=page)

    def process_data(self, json):

        if self.current_hash is not json.hash:
            self.current_hash = json.hash
            artigos = json.artigos
            jQuery("#lista-artigos-subtitle").text(json.message)
            new_select_widget = widgets.Select(
                "campos_artigos",
                label=artigos.search_fields.label,
                placeholder="Escolha o Campo",
                value=artigos.search_fields.value,
                data_set=artigos.search_fields.data_set
            )
            new_select_widget.html_to("#phanterpwa-input-search_field")
            new_select_widget.reload()
            table = XTABLE(
                "artigos-table",
                XTRH(
                    "artigos-table-head",
                    *artigos.searcher.data_set,
                    DIV(
                        I(_class="fas fa-plus"),
                        **{
                            "_phanterpwa-way": "artigos/novo",
                            "_class": "icon_button wave_on_click"
                        }
                    ),
                    sort_by=artigos.searcher.sort_by,
                    sort_order=artigos.searcher.sort_order,
                    sortable=artigos.searcher.sortable,
                    on_click_sortable=self._on_sort,
                )
            )
            artigos_content = DIV(_class="p-row")
            if artigos.data is not js_undefined:
                for x in artigos.data:
                    logo = "{0}/api/artigos/{1}/image".format(
                        window.PhanterPWA.ApiServer.remote_address,
                        x.id
                    )
                    html_section = CONCATENATE(
                        DIV(
                            XSECTION(
                                DIV(
                                    "{0} - {1}".format(x.id, x.abreviacao),
                                    _class="artigos-container-abreviacao phanterpwa-xsection-title"
                                ),
                                DIV(
                                    DIV(
                                        IMG(_src=logo),
                                        _class="artigos-container-info-image"
                                    ),
                                    DIV(
                                        SPAN(x.nome),
                                        _class="e-tagger-wrapper p-col w1p100"
                                    ),
                                    _class="artigos-container-info"
                                ),
                                DIV(
                                    widgets.MenuBox(
                                        "drop_{0}".format(x.id),
                                        I(_class="fas fa-ellipsis-v"),
                                        widgets.MenuOption("Editar", **{
                                            "_class": "botao_editar_artigo wave_on_click",
                                            "_href": "#_phanterpwa:/artigos/{0}/editar".format(x.id)
                                        }),
                                        widgets.MenuOption("Configuração", **{
                                            "_class": "botao_visualizar_socio wave_on_click",
                                            "_href": "#_phanterpwa:/artigos/{0}/configuracao".format(x.id)
                                        })
                                    ),
                                    _class="phanterpwa-xsection-menu_buttom"
                                ),
                                # HR(),

                                # html_votos,

                                _class="artigos-wrapper has_menu_button"
                            ),
                            _class="p-col w4p50 w1p100 e-padding_10"
                        )
                    )

                    artigos_content.append(html_section)

                table.append(
                    CONCATENATE(
                        TR(
                            TD(
                                artigos_content,
                                _colspan=5
                            )
                        ),
                        XFOOTER(
                            "artigos-table-footer",
                            page=artigos.searcher.page,
                            total_pages=artigos.searcher.total_pages,
                            on_click_page=self._on_page,
                            colspan=5
                        )
                    )
                )
            # def editar_artigo(el):
            #     id_artigo = jQuery(el).attr("register_target")
            #     artigos_editar_novo.start(id_artigo)
            table.html_to("#lista-artigos-container")

            # jQuery(
            #     ".botao_editar_artigo"
            # ).off(
            #     "click.botao_editar_artigo"
            # ).on(
            #     "click.botao_editar_artigo",
            #     lambda: editar_artigo(this)
            # )
            # jQuery(
            #     ".botao_visualizar_artigo"
            # ).off(
            #     "click.botao_visualizar_artigo"
            # ).on(
            #     "click.botao_visualizar_artigo",
            #     lambda: visualizar_artigo(this)
            # )

            # def change_attr_drop(el):
            #     targ = jQuery(el).attr("phanterpwa_dowpdown_target")
            #     jQuery(el).attr("data-target", targ)
            #     # jQuery(el).dropdown()

            # jQuery("[phanterpwa_dowpdown_target]").each(lambda: change_attr_drop(this))

    def _get_data_search(self, search="", field="id", orderby="id", sort="asc", page=1):
        window.PhanterPWA.ApiServer.GET(**{
            'url_args': ["api", "artigos"],
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
        search = widgets["search_artigos"].value()
        field = widgets["campos_artigos"].value()
        self._get_data_search(search=search, field=field, orderby=field, sort="desc", page=1)


class Artigo(helpers.XmlConstructor):
    def __init__(self, index_instance, id_artigo, action, target="#content-artigos", on_submit=None):
        self.target = target
        self.on_submit = on_submit
        self.id_artigo = id_artigo
        self.action = action
        if action == "editar" or id_artigo == "novo":
            self.get_form_artigo(id_artigo)
        elif action == "visualizar":
            self.visualizar(id_artigo, index_instance.request.params)

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            self.process_data(json)

    def process_data(self, json):
        self.form = forms.Form(json.data.artigos)
        self.form.html_to(self.target)
        self.binds()

    def binds(self):
        forms.SignForm("#form-artigos", after_sign=lambda: forms.ValidateForm("#form-artigos"))
        
        jQuery(
            "#phanterpwa-widget-form-submit_button-artigos"
        ).off(
            "click.submit_artigos_button"
        ).on(
            "click.submit_artigos_button",
            lambda: self.submit(this)
        )
        window.PhanterPWA.Request.widgets["artigos-naturalidades"].set_on_click_new_button(self.modal_add_naturalidade)

    def get_form_artigo(self, id_artigo):
        window.PhanterPWA.ApiServer.GET(**{
            'url_args': ["api", "artigos", id_artigo],
            'onComplete': self.after_get,
            'get_cache': self.process_data
        })

    def submit(self, el):
        if jQuery(el)[0].hasAttribute("disabled"):
            window.PhanterPWA.flash(html=I18N("The form has errors!"))
        else:
            form_artigo = jQuery("#form-artigos")[0]
            form_artigo = __new__(FormData(form_artigo))
            if self.id_artigo == "novo":
                window.PhanterPWA.ApiServer.POST(**{
                    'url_args': ["api", "artigos", self.id_artigo],
                    'form_data': form_artigo,
                    'onComplete': self.after_submit
                })
            elif self.id_artigo.isdigit():
                window.PhanterPWA.ApiServer.PUT(**{
                    'url_args': ["api", "artigos", self.id_artigo],
                    'form_data': form_artigo,
                    'onComplete': self.after_submit
                })

    def after_submit(self, data, ajax_status):
        forms.SignForm("#form-artigos")
        if ajax_status == "success":
            self.form.process_api_response(data)
            if callable(self.on_submit):
                self.on_submit(data, ajax_status)
            else:
                if data.status == 200 and self.id_artigo == 'novo':
                    window.PhanterPWA.open_way("artigos/novo")
                elif data.status == 200:
                    window.PhanterPWA.open_way("artigos")


__pragma__('nokwargs')
