from org.transcrypt.stubs.browser import __pragma__

import phanterpwa.frontend.gatehandler as gatehandler
import phanterpwa.frontend.helpers as helpers
import phanterpwa.frontend.validations as validations
import phanterpwa.frontend.components.widgets as widgets
import phanterpwa.frontend.components.left_bar as left_bar
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
        self.requires_login = True
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("USERS", _class="phanterpwa-breadcrumb"),
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
                    _id="content-users",
                    _class='p-row card e-padding_20'
                ),

                _class="phanterpwa-container p-container"
            )
        )
        html.html_to("#main-container")
        if self.request.get_arg(0) is not None:
            self.User = User(self, self.request.get_arg(0), self.request.get_arg(1))
            BackButton = left_bar.LeftBarButton(
                "back_localizar_users",
                "Voltar",
                I(_class="fas fa-arrow-circle-left"),
                **{"_phanterpwa-way": "users",
                    "position": "top",
                    "ways": [lambda r: True if r.startswith("users") or r.startswith("users/") else False]}
            )
        else:
            self.Users = Users(self)
            BackButton = left_bar.LeftBarButton(
                "back_localizar_users",
                "Voltar",
                I(_class="fas fa-arrow-circle-left"),
                **{"_phanterpwa-way": "restrito",
                    "position": "top",
                    "ways": [lambda r: True if r.startswith("users") or r.startswith("users/") else False]}
            )

        window.PhanterPWA.Components['left_bar'].add_button(BackButton)


class Users(helpers.XmlConstructor):
    """way: users"""

    def __init__(self, index_instance):
        self.index_instance = index_instance
        html = DIV(
            DIV(
                FORM(
                    DIV(
                        DIV(
                            DIV(
                                widgets.Input(
                                    "search_users",
                                    label="Search User",
                                    placeholder="Nome ou parte do nome do sócio",
                                    icon=I(_class="fab fa-sistrix"),
                                    icon_on_click=lambda: self.search()
                                ),
                                _class="p-col w1p100 w3p50 w4p75",
                            ),
                            DIV(
                                widgets.Select(
                                    "campos_users",
                                    label="Search Fields",
                                    placeholder="Choice a Field",
                                    value="id",
                                    data_set=[
                                        ["id", "ID"],
                                        ["first_name", "First Name"],
                                        ["last_name", "Last Name"],
                                        ['email', "E-mail"],
                                        ["permit_mult_login", "Allows Multiple Logins"],
                                        ["activated", "Activated"],
                                        ["online", "Online"]
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
                    _id="search_users",
                    _class="form-search_users",
                    _enctype="multipart/form-data",
                    _method="post",
                    _autocomplete="off"
                ),
                _class="phanterpwa_tables_search_wrapper"
            ),
            DIV(_id='lista-users-subtitle', _class="phanterpwa-subtitle"),
            DIV(
                DIV(
                    DIV(preloaders.android, _style="width: 300px; height: 300px; overflow: hidden; margin: auto;"),
                    _style="text-align:center; padding: 50px 0;"
                ),
                _id='lista-users-container',
                _class="phanterpwa_tables_container"
            ),
            _class='users-container phanterpwa-card-container'
        )
        helpers.XmlConstructor.__init__(self, "div", False, html, _class="lista_de_users")
        self.html_to("#content-users")
        self._get_data_search()

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            if json.users is None:
                window.PhanterPWA.open_way("/users/novo")
            else:
                self.process_data(json)

    def _on_sort(self, table_head_instance):
        widgets = window.PhanterPWA.Request.widgets
        page = widgets["users-table-footer"].page()
        search = widgets["search_users"].value()
        field = widgets["campos_users"].value()
        sorted_field = widgets["users-table-head"].sorted_field()
        self._get_data_search(search=search, field=field, orderby=sorted_field[0], sort=sorted_field[1], page=page)

    def _on_page(self, table_pagination_instance):
        widgets = window.PhanterPWA.Request.widgets
        page = widgets["users-table-footer"].page()
        search = widgets["search_users"].value()
        field = widgets["campos_users"].value()
        sorted_field = widgets["users-table-head"].sorted_field()
        self._get_data_search(search=search, field=field, orderby=sorted_field[0], sort=sorted_field[1], page=page)

    def process_data(self, json):
        def onSearch(el):
            search_value = jQuery("#phanterpwa-input-search").val()
            if search_value is not None and search_value is not js_undefined and search_value is not "":
                breadcrumbs = CONCATENATE(
                    DIV("Sócios", _phanterpwa_way="users", _class="link phanterpwa-breadcrumb"),
                    DIV("Pesquisar", _class="phanterpwa-breadcrumb")
                )
                jQuery(".phanterpwa-breadcrumb-wrapper").html(breadcrumbs.xml())
                window.PhanterPWA.ApiServer.GET(**{
                    'url_args': ["api", "usermanager"],
                    'onComplete': lambda data: self.after_get(data.responseJSON)
                })

            else:
                window.PhanterPWA.ApiServer.GET(**{
                    'url_args': ["api", "usermanager"],
                    'onComplete': lambda data: self.after_get(data.responseJSON)
                })
                breadcrumbs = CONCATENATE(
                    DIV("Users", _class="phanterpwa-breadcrumb")
                )
                jQuery(".phanterpwa-breadcrumb-wrapper").html(breadcrumbs.xml())
        if self.current_hash is not json.hash:
            self.current_hash = json.hash
            users = json.users
            jQuery("#lista-users-subtitle").text(json.message)
            new_select_widget = widgets.Select(
                "campos_users",
                label=users.search_fields.label,
                placeholder="Escolha o Campo",
                value=users.search_fields.value,
                data_set=users.search_fields.data_set
            )
            new_select_widget.html_to("#phanterpwa-input-search_field")
            new_select_widget.reload()
            table = XTABLE(
                "users-table",
                XTRH(
                    "users-table-head",
                    *users.searcher.data_set,
                    DIV(
                        I(_class="fas fa-plus"),
                        **{
                            "_phanterpwa-way": "users/novo",
                            "_class": "icon_button wave_on_click"
                        }
                    ),
                    sort_by=users.searcher.sort_by,
                    sort_order=users.searcher.sort_order,
                    sortable=users.searcher.sortable,
                    on_click_sortable=self._on_sort,
                )
            )
            if users.data is not js_undefined:
                for x in users.data:
                    table.append(
                        XTRD(
                            "users-table-data-{0}".format(x.id),
                            x.id,
                            x.first_name,
                            x.last_name,
                            x.email,
                            x.permit_mult_login,
                            x.activated,
                            x.websocket_opened,
                            widgets.MenuBox(
                                "drop_{0}".format(x.id),
                                xml_menu=UL(
                                    LI("Editar", **{
                                        "_class": "botao_editar_user",
                                        "_phanterpwa-way": "users/{0}/editar".format(x.id)
                                    }),
                                    **{"data-menubox": "drop_{0}".format(x.id),
                                    "_class": 'dropdown-content'},
                                )
                            )
                        )
                    )
                table.append(
                    XFOOTER(
                        "users-table-footer",
                        page=users.searcher.page,
                        total_pages=users.searcher.total_pages,
                        on_click_page=self._on_page,
                    )
                )
            def editar_user(el):
                id_user = jQuery(el).attr("register_target")
                users_editar_novo.start(id_user)

            def visualizar_user(el):
                id_user = jQuery(el).attr("register_target")
                users_visualizar.start(id_user)

            table.html_to("#lista-users-container")

            jQuery(
                ".botao_editar_user"
            ).off(
                "click.botao_editar_user"
            ).on(
                "click.botao_editar_user",
                lambda: editar_user(this)
            )
            jQuery(
                ".botao_visualizar_user"
            ).off(
                "click.botao_visualizar_user"
            ).on(
                "click.botao_visualizar_user",
                lambda: visualizar_user(this)
            )

            def change_attr_drop(el):
                targ = jQuery(el).attr("phanterpwa_dowpdown_target")
                jQuery(el).attr("data-target", targ)
                # jQuery(el).dropdown()

            jQuery("[phanterpwa_dowpdown_target]").each(lambda: change_attr_drop(this))

    def _get_data_search(self, search="", field="nome_completo", orderby="nome_completo", sort="asc", page=1):
        window.PhanterPWA.ApiServer.GET(**{
            'url_args': ["api", "admin", "usermanager"],
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
        search = widgets["search_users"].value()
        field = widgets["campos_users"].value()
        self._get_data_search(search=search, field=field, orderby=field, sort="asc", page=1)

__pragma__('nokwargs')
