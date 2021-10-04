import phanterpwa.frontend.helpers as helpers
import phanterpwa.frontend.components.widgets as widgets
import phanterpwa.frontend.preloaders as preloaders
import phanterpwa.frontend.validations as validations
import phanterpwa.frontend.components.modal as modal
import phanterpwa.frontend.forms as forms
from org.transcrypt.stubs.browser import __pragma__

__pragma__('alias', "jQuery", "$")
__pragma__('skip')
jQuery = sessionStorage = JSON = M = js_undefined = Date = window =\
    this = __new__ = FormData = console = localStorage = QRCode = 0
__pragma__('noskip')

CONCATENATE = helpers.CONCATENATE
DIV = helpers.XmlConstructor.tagger("div")
I = helpers.XmlConstructor.tagger("i")
A = helpers.XmlConstructor.tagger("a")
FORM = helpers.XmlConstructor.tagger("form")
TD = helpers.XmlConstructor.tagger("td")
P = helpers.XmlConstructor.tagger("p")
STRONG = helpers.XmlConstructor.tagger("strong")
XTABLE = widgets.Table
XTRD = widgets.TableData
XTRH = widgets.TableHead
XFOOTER = widgets.TableFooterPagination

__pragma__('kwargs')


class Lista():
    def __init__(self, index_instance=None):
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("LISTA DE FUNCIONÁRIOS", _class="phanterpwa-breadcrumb"),
                        _class="phanterpwa-breadcrumb-wrapper"
                    ),
                    _class="p-container"),
                _class='title_page_container card'
            ),
            DIV(
                DIV(
                    DIV(
                        DIV(
                            FORM(
                                DIV(
                                    DIV(
                                        DIV(
                                            widgets.Input(
                                                "search_funcionarios",
                                                label="Localizar funcionario",
                                                placeholder="Nome ou parte do nome do funcionario",
                                                icon=I(_class="fab fa-sistrix"),
                                                icon_on_click=lambda: self.search()
                                            ),
                                            _class="p-col w1p100 w3p50 w4p75",
                                        ),
                                        DIV(
                                            widgets.Select(
                                                "campos_funcionarios",
                                                label="Campos à pesquisar",
                                                placeholder="Escolha o Campo",
                                                value="nome_completo",
                                                data_set=[
                                                    ["id", "id"],
                                                    ["nome_completo", "Nome do Funcionario"],
                                                    ["matricula", "Matrícula"],
                                                    ["cpf", "CPF"],
                                                    ["nome_do_pai", "Nome do pai"],
                                                    ["nome_da_mae", "Nome da mãe"],
                                                ]
                                            ),
                                            _id="phanterpwa-input-search_field-funcionarios",
                                            _class="p-col w1p100 w3p50 w4p25"
                                        ),
                                        _class="p-row e-padding_20w"
                                    ),
                                    _class="phanterpwa-container-section"
                                ),
                                _action="#",
                                _id="search_funcionarios",
                                _class="form-search_funcionarios",
                                _enctype="multipart/form-data",
                                _method="post",
                                _autocomplete="off"
                            ),
                            _class="phanterpwa_tables_search_wrapper"
                        ),
                        DIV(_id='lista-funcionarios-subtitle', _class="phanterpwa-subtitle"),
                        DIV(
                            DIV(
                                DIV(preloaders.android, _style="width: 300px; height: 300px; overflow: hidden; margin: auto;"),
                                _style="text-align:center; padding: 50px 0;"
                            ),
                            _id='lista-funcionarios-container',
                            _class="phanterpwa_tables_container"
                        ),
                        _class='funcionarios-container phanterpwa-card-container'
                    ),

                    _id="content-funcionarios",
                    _class='p-row card e-padding_20'
                ),
                DIV(_id="modal_visualizar_funcionario"),
                _class="phanterpwa-container p-container expand"
            )
        )
        html.html_to("#main-container")
        self._get_data_search()

    def binds(self):
        jQuery(
            "#phanterpwa-widget-input-input-search_funcionarios"
        ).off(
            "keyup.search_funcionario_vinculo"
        ).on(
            "keyup.search_funcionario_vinculo",
            self._onkeyup
        )

    def _onkeyup(self, event):
        key = event.which or event.keyCode
        if key == 13:
            value = jQuery(
                "#phanterpwa-widget-input-input-search_funcionarios"
            ).val()
            if value is not "":
                self.search()

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            if json.funcionarios is None:
                window.PhanterPWA.open_way("funcionarios/novo")
            else:
                self.process_data(json)

    def _on_sort(self, table_head_instance):
        widgets = window.PhanterPWA.Request.widgets
        page = widgets["funcionarios-table-footer"].page()
        search = widgets["search_funcionarios"].value()
        field = widgets["campos_funcionarios"].value()
        sorted_field = widgets["funcionarios-table-head"].sorted_field()
        self._get_data_search(search=search, field=field, orderby=sorted_field[0], sort=sorted_field[1], page=page)

    def _on_page(self, table_pagination_instance):
        widgets = window.PhanterPWA.Request.widgets
        page = widgets["funcionarios-table-footer"].page()
        search = widgets["search_funcionarios"].value()
        field = widgets["campos_funcionarios"].value()
        sorted_field = widgets["funcionarios-table-head"].sorted_field()
        self._get_data_search(search=search, field=field, orderby=sorted_field[0], sort=sorted_field[1], page=page)

    def process_data(self, json):
        if self.current_hash is not json.hash:
            self.current_hash = json.hash
            funcionarios = json.funcionarios
            jQuery("#lista-funcionarios-subtitle").text(json.message)
            new_select_widget = widgets.Select(
                "campos_funcionarios",
                label=funcionarios.search_fields.label,
                placeholder="Escolha o Campo",
                value=funcionarios.search_fields.value,
                data_set=funcionarios.search_fields.data_set
            )
            new_select_widget.html_to("#phanterpwa-input-search_field-funcionarios")
            new_select_widget.reload()
            table = XTABLE(
                "funcionarios-table",
                XTRH(
                    "funcionarios-table-head",
                    *funcionarios.searcher.data_set,
                    ["auth_user", "Tem Conta?"],
                    ["vinculos", "Vínculos"],
                    DIV(
                        I(_class="fas fa-plus"),
                        **{
                            "_phanterpwa-way": "funcionarios/novo",
                            "_class": "icon_button wave_on_click"
                        }
                    ),
                    sort_by=funcionarios.searcher.sort_by,
                    sort_order=funcionarios.searcher.sort_order,
                    sortable=funcionarios.searcher.sortable,
                    on_click_sortable=self._on_sort,
                )
            )
            if funcionarios.data is not js_undefined:
                for x in funcionarios.data:
                    html_menus = widgets.MenuBox(
                        "quant_vinculos_{0}".format(x.id),
                        I("0", _class="phanterpwa-icon_numb"),
                        widgets.MenuOption("Novo Vínculo", **{
                            "_class": "botao_vincular_funcionario wave_on_click",
                            "_href": "#_phanterpwa:/vinculos/novo/{0}".format(x.id)
                        }),
                        **{"_class": "borda_color_botao_icone"}
                    )
                    if x.total_vinculos:
                        bot_menus = [widgets.MenuOption("Novo Vínculo", **{
                            "_class": "botao_vincular_funcionario wave_on_click",
                            "_href": "#_phanterpwa:/vinculos/novo/{0}".format(x.id)
                        })]
                        for m in x.vinculos:
                            bot_menus.append(
                                widgets.MenuOption("{0} - {1}".format(m.ano_letivo, m.abreviacao_escola), **{
                                    "_class": "botao_vinculos_funcionarios wave_on_click",
                                    "_title": "{0} - {1}".format(m.atribuicoes, m.nome_escola),
                                    "_href": "#_phanterpwa:/vinculos/editar/{0}/".format(m.id_vinculo)
                                })
                            )
                        html_menus = widgets.MenuBox(
                                "quant_vinculos_{0}".format(x.id),
                                I(x.total_vinculos, _class="phanterpwa-icon_numb"),
                                *bot_menus,
                                **{"_class": "borda_color_botao_icone"}
                            )
                    data_de_nascimento_formated = ""
                    if x.data_de_nascimento is not None and x.data_de_nascimento is not js_undefined:
                        data_de_nascimento_formated = validations.format_iso_date_datetime(
                            x.data_de_nascimento, "dd/MM/yyyy", "date"
                        )
                    __pragma__("jsiter")
                    vars_funcionario = {
                        "funcionario": x.funcionario,
                        "data_de_nascimento": data_de_nascimento_formated,
                        "nome_do_pai": x.nome_do_pai,
                        "nome_da_mae": x.nome_da_mae,
                    }
                    __pragma__("nojsiter")
                    vars_serialized = jQuery.param(vars_funcionario)
                    ano_letivo = ""
                    id_escola = ""

                    if self.ano_letivo is not None and self.ano_letivo is not js_undefined:
                        ano_letivo = "/{0}".format(self.ano_letivo)

                    if self.escola is not None and self.escola is not js_undefined:
                        id_escola = "/{0}".format(self.escola["id"])
                    tem_conta = TD(I(_class="fas fa-times-circle", _style="color: red;"), _style="text-align: center;")
                    if x.auth_user is not None and x.auth_user is not js_undefined:
                        tem_conta = TD(I(_class="fas fa-check-circle", _style="color:green;"), _style="text-align: center;")
                    table.append(
                        XTRD(
                            "funcionarios-table-data-{0}".format(x.id),
                            x.id,
                            x.nome_completo,
                            data_de_nascimento_formated,
                            x.matricula,
                            x.cpf,
                            x.nome_do_pai,
                            x.nome_da_mae,
                            tem_conta,
                            html_menus,
                            widgets.MenuBox(
                                "drop_{0}".format(x.id),
                                I(_class="fas fa-ellipsis-v"),
                                widgets.MenuOption("Visualizar", **{
                                    "_class": "botao_visualizar_funcionario wave_on_click",
                                    "_data-id_funcionario": x.id,
                                }),
                                widgets.MenuOption("Editar", **{
                                    "_class": "botao_editar_funcionario wave_on_click",
                                    "_href": "#_phanterpwa:/funcionarios/{0}/editar".format(x.id)
                                }),
                                onOpen=lambda: self.binds_menu_funcionario()
                            ),
                            **{"drag_and_drop": False}
                        )
                    )
                table.append(
                    XFOOTER(
                        "funcionarios-table-footer",
                        page=funcionarios.searcher.page,
                        total_pages=funcionarios.searcher.total_pages,
                        on_click_page=self._on_page,
                    )
                )
            # def editar_funcionario(el):
            #     id_funcionario = jQuery(el).attr("register_target")
            #     funcionarios_editar_novo.start(id_funcionario)

            # def visualizar_funcionario(el):
            #     id_funcionario = jQuery(el).attr("register_target")
            #     funcionarios_visualizar.start(id_funcionario)

            table.html_to("#lista-funcionarios-container")

            # jQuery(
            #     ".botao_editar_funcionario"
            # ).off(
            #     "click.botao_editar_funcionario"
            # ).on(
            #     "click.botao_editar_funcionario",
            #     lambda: editar_funcionario(this)
            # )
            # jQuery(
            #     ".botao_visualizar_funcionario"
            # ).off(
            #     "click.botao_visualizar_funcionario"
            # ).on(
            #     "click.botao_visualizar_funcionario",
            #     lambda: visualizar_funcionario(this)
            # )
            self.binds()
            def change_attr_drop(el):
                targ = jQuery(el).attr("phanterpwa_dowpdown_target")
                jQuery(el).attr("data-target", targ)
                # jQuery(el).dropdown()

            jQuery("[phanterpwa_dowpdown_target]").each(lambda: change_attr_drop(this))

    def binds_menu_funcionario(self):
        jQuery(
            ".botao_visualizar_funcionario"
        ).off(
            "click.botao_visualizar_funcionario"
        ).on(
            "click.botao_visualizar_funcionario",
            lambda: self.get_visualizar_funcionario(this)
        )

    def _get_data_search(self, search="", field="nome_completo", orderby="nome_completo", sort="asc", page=1):
        window.PhanterPWA.ApiServer.GET(**{
            'url_args': ["api", "funcionarios"],
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
        search = widgets["search_funcionarios"].value()
        field = widgets["campos_funcionarios"].value()
        self._get_data_search(search=search, field=field, orderby=field, sort="asc", page=1)

    def get_visualizar_funcionario(self, widget_instance):
        id_funcionario = jQuery(widget_instance).data("id_funcionario")
        window.PhanterPWA.GET(
            "api",
            "funcionario",
            "visualizar",
            id_funcionario,
            onComplete=lambda data, ajax_status: self.modal_add_funcinario_visualizar(data, ajax_status)
        )

    def modal_add_funcinario_visualizar(self, data, ajax_status):
        json = data.responseJSON
        if ajax_status == "success":
            html_vinculos =  DIV(
                    DIV("VÍNCULOS DO FUNCIONÁRIO", _class="p-col w1p100 phanterpwa-widget-form-separator"),
                    P("O Funcionário não possui vínculos"),
                    _class="vinculos-conteudo"
                )
            if json.data.vinculos is not None and json.data.vinculos is not js_undefined:
                html_vinculos = DIV(
                    DIV("VÍNCULOS DO FUNCIONÁRIO", _class="p-col w1p100 phanterpwa-widget-form-separator"),
                    _class="vinculos-conteudo"
                )
                tabela = XTABLE(
                    "tabela_ficha_individual",
                    XTRH(
                        "tabela_ficha_individual_head",
                        "Ano Letivo",
                        "Escola",
                        "Atribuições",
                        "Data Limite",
                        "Autorização"
                    ),

                )
                for x in json.data.vinculos:
                    data_limite = "31/12/{0}".format(x.anos_letivo.ano)
                    if x.vinculos_funcionarios.data_limite is not None and x.vinculos_funcionarios.data_limite is not js_undefined:
                        data_limite = validations.format_iso_date_datetime(
                            x.vinculos_funcionarios.data_limite, "dd/MM/yyyy", "date"
                        )

                    tabela.append(
                        XTRD(
                            "tabela_ficha_individual_linhas_{0}".format(x.vinculos_funcionarios.id),
                            x.anos_letivo.ano,
                            x.escolas.nome,
                            x.profissoes.profissao,
                            data_limite,
                            x.vinculos_funcionarios.autorizacao,
                            **{"drag_and_drop": False}
                        )
                    )
                html_vinculos.append(tabela)
            content = DIV(
                forms.Form(json.data.funcionario),
                html_vinculos,
                _class="p-row"
            )
            self.modal_visualizar_funcionario = modal.Modal(
                "#modal_visualizar_funcionario",
                **{
                    "title": CONCATENATE(DIV("Visualizar dados do funcionário"),
                        DIV(STRONG(json.data.nome))),
                    "content": content
                }
            )
            self.modal_visualizar_funcionario.open()

        else:
            window.PhanterPWA.flash("Não há alunos_visualizar matriculados para a série da turma")


__pragma__('nokwargs')
