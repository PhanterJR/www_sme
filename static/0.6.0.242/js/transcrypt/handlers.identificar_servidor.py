import phanterpwa.frontend.gatehandler as gatehandler
import phanterpwa.frontend.helpers as helpers
import phanterpwa.frontend.components.snippets as snippets
import phanterpwa.frontend.components.widgets as widgets
import phanterpwa.frontend.forms as forms
import phanterpwa.frontend.validations as validations
import phanterpwa.frontend.components.modal as modal
import phanterpwa.frontend.decorators as decorators
from org.transcrypt.stubs.browser import __pragma__
__pragma__('alias', "jQuery", "$")
__pragma__('skip')
jQuery = window = setTimeout = js_undefined = console = JSON = __new__ = FormData = localStorage = 0
__pragma__('noskip')

DIV = helpers.XmlConstructor.tagger("div")
I = helpers.XmlConstructor.tagger("i")
H1 = helpers.XmlConstructor.tagger("h1")
H2 = helpers.XmlConstructor.tagger("h2")
H3 = helpers.XmlConstructor.tagger("h3")
P = helpers.XmlConstructor.tagger("p")
A = helpers.XmlConstructor.tagger("a")
IMG = helpers.XmlConstructor.tagger("img")
BUTTON = helpers.XmlConstructor.tagger("button")
STRONG = helpers.XmlConstructor.tagger("strong")
TABLE = helpers.XmlConstructor.tagger("table")
TR = helpers.XmlConstructor.tagger("tr")
TD = helpers.XmlConstructor.tagger("td")
FORM = helpers.XmlConstructor.tagger("form")
SPAN = helpers.XmlConstructor.tagger("span")
BR = helpers.XmlConstructor.tagger("br", True)
HR = helpers.XmlConstructor.tagger("hr", True)
I18N = helpers.I18N
XML = helpers.XML
CONCATENATE = helpers.CONCATENATE


__pragma__('kwargs')


class Index(gatehandler.Handler):
    @decorators.check_authorization(lambda: window.PhanterPWA.logged())
    def initialize(self):
        self.url_image = None
        self.nome_completo = None
        self.cpf = None
        self.sabe_matricula = None
        self.matricula = None
        self.data_de_nascimento = None
        self.data_de_nascimento_iso = None
        self.nome_da_mae = None
        self.fazer_alteracoes = False
        self.fazer_alteracoes2 = False
        self.telefone_celular = None
        self.numero_celularfunc = None
        self.has_whatsapp = False
        self.nome_usuario = "{0} {1}".format(
            window.PhanterPWA.get_auth_user().first_name,
            window.PhanterPWA.get_auth_user().last_name,
        )
        self.foi_identificado = False
        texto_inicial = DIV(
            H1("SISTEMA DE IDENTIFICAÇÃO DO SERVIDOR", _class="phanterpwa-the_title"),
            H3(
                P("Bem vindo ao sistema de indentificação do servidor. Nele iremos vincular esta conta ",
                    "ao seu cadastro de servidor, desta forma poderá acessar seus dados e serviços vinculados ",
                    "ao seu cadastro. Então para o procedimento alguns dados terão que ser fornecidos, são ",
                    "eles: ", STRONG("Nome completo, Data de Nascimento, CPF, Matrícula e Nome da mãe.")
                ),
                P("Clique em ", STRONG("Iniciar"), " para darmos início ao processo"
                ),
                DIV(
                    BUTTON("Iniciar", _id="iniciar_ava", _class="btn wave-on-click"),
                    _class="button_container"
                ),
                _class="phanterpwa-the_subtitle"
            ),
            _id="text-inicio"
        )
        dados_localstorage = localStorage.getItem("identificar-servidor")
        try:
            dados_localstorage = JSON.parse(dados_localstorage)
        except:
            dados_localstorage = None

        if dados_localstorage is not js_undefined and dados_localstorage is not None and window.PhanterPWA.auth_user_has_role(["servidor"]):
            if int(dados_localstorage.auth_user) == int(window.PhanterPWA.get_auth_user().id):
                self.foi_identificado = True
                self.nome_completo = dados_localstorage.nome_completo
                self.cpf = dados_localstorage.cpf
                self.sabe_matricula = dados_localstorage.sabe_matricula
                self.matricula = dados_localstorage.matricula
                self.data_de_nascimento_iso = dados_localstorage.data_de_nascimento
                self.data_de_nascimento = dados_localstorage.data_de_nascimento_formatado
                self.nome_da_mae = dados_localstorage.nome_da_mae
            else:
                localStorage.removeItem("identificar-servidor")
                dados_localstorage = None

        self.imagem_usuario = jQuery("#url_image_user").attr("src")

        arbritary_id_menu = window.PhanterPWA.get_id()
        arbritary_id_choice = window.PhanterPWA.get_id()
        botao_sair = widgets.MenuBox(
            arbritary_id_menu,
            I(_class="fas fa-ellipsis-v"),
            DIV("Sair", _id=arbritary_id_choice),
            **{
                "_class": "icon_button button_sair",
                "z_index": 2001,
                "onOpen": lambda: (
                    jQuery("#{0}".format(arbritary_id_choice)).on("click",
                        lambda: (self._sair())),
                )
            }
        )
        html = DIV(
            DIV(
                DIV(
                    DIV(
                        IMG(_src="/static/{0}/images/perfil_robo-min.jpg".format(self.config['PROJECT']['versioning'])),
                        _class="background-robo"
                    ),
                    _class="head-questionario"
                ),
                DIV(
                    texto_inicial,
                    _id="row_content",
                    _class="row"
                ),
                DIV(_class="footer-questionario"),
                DIV(
                    HR(_class="separador_servidor"),
                    DIV(
                        TABLE(
                            TR(
                                TD(   
                                    SPAN(DIV(IMG(_src=self.imagem_usuario), _class="servidor_image")),
                                ),
                                TD(
                                    SPAN(self.nome_usuario, _class="servidor_nome"),
                                    _id="nome_servidor_chat"
                                ),
                                TD(
                                    botao_sair
                                )
                            )
                        ),
                        _class="servidor_atual_wrapper"
                    ),
                    _class="servidor_atual"
                ),
                _id="container-questionario",
                _class="container container-questionario"
            ),
            _id="app-content-questionario",
            _class="app-content"
        )
        jQuery("#app-content-questionario").removeClass("has_servidor")
        jQuery("#main-container").removeClass("iniciar")
        html.html_to("#main-container")


        # DIV("doideira").append_to("#main-container")
        xml = jQuery("#row_content")
        xml.height(jQuery(window).height() - 280).css("width", "100%")
        jQuery(window).resize(lambda: xml.css("min-height", jQuery(window).height() - 280).css("width", "100%"))
        self._check_token()


    def _sair(self):
        window.PhanterPWA.logout()

    def binds(self):
        jQuery("#iniciar_ava").off(
            "click.iniciar"
        ).on(
            "click.iniciar",
            lambda: self.etapa1()
        )

    def _check_token(self):
        window.PhanterPWA.GET(**{
            'url_args': ["api", "auth-servidor"],
            'onComplete': self._on_check_token
        })

    def _on_check_token(self, data, ajax_status):
        if ajax_status == "success":
            if data.status == 200:
                window.PhanterPWA.open_way("home")
            else:
                if self.foi_identificado:
                    self.etapa1()
                else:
                    self.binds()
        else:
            if self.foi_identificado:
                self.etapa1()
            else:
                self.binds()

    def etapa1(self):
        jQuery("#app-content-questionario").removeClass("etapa2")
        jQuery("#text-inicio").fadeOut(500)
        jQuery("#main-container").addClass("iniciar")
        titulo = CONCATENATE(
            TABLE(TR(TD("SISTEMA DE INDENTIFICAÇÃO DE SERVIDORES")), _id="nome_escola_chat"),
            DIV(I(_class="fas fa-expand"), _class="botao_expand")
        )

        titulo.append_to("#container-questionario .head-questionario")
        jQuery("#main-container").find(".botao_expand").off("click.expand").on(
            "click.expand",
            self._expand
        )
        localStorage.removeItem('servidor-token')
        self._comeco()

    def _expand(self):
        el = jQuery("#main-container")
        if el.hasClass("expand"):
            el.removeClass("expand")
            el.find(".botao_expand").find("i").addClass("fa-expand").removeClass("fa-compress")
        else:
            el.find(".botao_expand").find("i").addClass("fa-compress").removeClass("fa-expand")
            el.addClass("expand")

    def abreviar_nome(self, nome):
        n = nome
        n = n.split(" ")
        nome_abreviado = nome
        if len(n) > 2:
            if len(n[1]) > 3:
                nome_abreviado = " ".join(n[0:2])
            else:
                nome_abreviado = " ".join(n[0:3])
        return nome_abreviado

    def _comeco(self, alteracao=False):
        jQuery("#app-content-questionario").addClass("has_servidor")
        if self.foi_identificado:
            msg_inicial = P("Confirmando Identidade... Aguarde...", _class="remsc")
        else:
            msg_inicial = P(
                "Antes de continuar irei dar algumas instruções... Algumas das respostas que você der aqui poderão ser",
                " editadas, basta clicar no ícone ", I(_class="fas fa-edit"), " quando ele aparecer do lado esquerdo",
                " de sua resposta. Dito isto, vamos dar início ao processo.",
                _class="remsc"
            )
        nome_completo = self.nome_completo if self.nome_completo is not None else ""
        cpf = self.cpf if self.cpf is not None else ""
        matricula = self.matricula if self.matricula is not None else ""
        data_de_nascimento = "{0} 00:00:00".format(self.data_de_nascimento_iso) if self.data_de_nascimento_iso is not None else ""
        nome_da_mae = self.nome_da_mae if self.nome_da_mae is not None else ""
        num_cel = self.numero_celularfunc if self.numero_celularfunc is not None else ""
        mensagem = DIV(
            msg_inicial,
            DIV(
                FORM(
                    forms.FormWidget(
                        "checkservidor_funcionario",
                        "nome_completo",
                        **{
                            "type": "string",
                            "value": nome_completo,
                            "_class": "e-display_hidden"
                        },
                    ),
                    forms.FormWidget(
                        "checkservidor_funcionario",
                        "cpf",
                        **{
                            "type": "string",
                            "value": cpf,
                            "_class": "e-display_hidden"
                        },
                    ),
                    forms.FormWidget(
                        "checkservidor_funcionario",
                        "matricula",
                        **{
                            "type": "string",
                            "value": matricula,
                            "_class": "e-display_hidden"
                        },
                    ),
                    forms.FormWidget(
                        "checkservidor_funcionario",
                        "data_de_nascimento",
                        **{
                            "type": "string",
                            "value": data_de_nascimento,
                            "_class": "e-display_hidden"
                        },
                    ),
                    forms.FormWidget(
                        "checkservidor_funcionario",
                        "nome_da_mae",
                        **{
                            "type": "string",
                            "value": nome_da_mae,
                            "_class": "e-display_hidden"
                        },
                    ),
                    forms.FormWidget(
                        "checkservidor_funcionario",
                        "telefone_celular",
                        **{
                            "type": "string",
                            "value": num_cel,
                            "_class": "e-display_hidden"
                        },
                    ),
                    **{"_phanterpwa-form": "checkservidor_funcionario", "_id": "form-checkservidor_funcionario"}
                ),
                _style="display: none;",
                _class="remsc"
            ),
            _id="menssage_captcha",
            _class="mensagem",
            _style="display: none;"
        )

        setTimeout(lambda: (
            mensagem.html_to("#row_content"),
            jQuery("#menssage_captcha").fadeIn(),
            self._get_nome_completo()

        ), 1000)

    def binder_enter_key(self, widget):
        p = jQuery(widget.target_selector)
        inp = p.find("input")
        inp.off("keyup.enter_key").on("keyup.enter_key", lambda event:
            p.find(".phanterpwa-widget-icon-wrapper").trigger("click") if event.keyCode == 13
                else None)

    def _get_nome_completo(self, change=False):
        if self.nome_completo is None or change or self.fazer_alteracoes:
            if change or self.fazer_alteracoes:
                resp = CONCATENATE(
                    P("Quero mudar o nome completo.",
                        _class="rclient"),
                    P("Tudo bem, digite agora seu nome completo.",
                        _class="remsc"),
                )
            else:
                resp = P("Me informe o seu nome completo.",
                    _class="remsc")

            arbritary_id = window.PhanterPWA.get_id()
            mensagem = DIV(
                resp,
                _id=arbritary_id,
                _style="display: none;"
            )
            mensagem.append_to("#row_content")
            jQuery("#{0}".format(arbritary_id)).slideDown(500)
            jQuery("#row_content").animate({"scrollTop": 2000000}, "slow")

            self.wd_nome_completo = widgets.Input(
                "nome_completo",
                icon=I(_class="fab fa-telegram-plane"),
                placeholder="Nome completo",
                wear="shadows",
                checker=False,
                value=self.nome_completo if self.fazer_alteracoes and self.nome_completo is not None else ""
            )
            self.wd_nome_completo.html_to("#container-questionario .footer-questionario")
            self.binder_enter_key(self.wd_nome_completo)

            jQuery(
                "#phanterpwa-widget-input-input-nome_completo"
            ).off(
                "keydown.nome_completo_input"
            ).on(
                "keydown.nome_completo_input",
                lambda: self.wd_nome_completo.del_message_error()
            ).focus()
            jQuery("#phanterpwa-widget-nome_completo").find(
                ".phanterpwa-widget-icon-wrapper"
            ).off(
                "click.button_nome_completo"
            ).on(
                "click.button_nome_completo",
                lambda: self._validate_nome_completo()
            )
        else:
            self._get_cpf()

    def _validate_nome_completo(self):
        value = jQuery("#phanterpwa-widget-input-input-nome_completo").val()
        if value is not None and value is not js_undefined and value != "" and value.length > 5:
            self.nome_completo = value
            jQuery("#phanterpwa-widget-input-input-checkservidor_funcionario-nome_completo").val(value)
            arbritary_id = window.PhanterPWA.get_id()
            arbritary_id_menu = window.PhanterPWA.get_id()
            arbritary_id_choice = window.PhanterPWA.get_id()
            botao_edit = widgets.MenuBox(
                arbritary_id_menu,
                I(_class="fas fa-edit"),
                DIV("Quero mudar o nome", _id=arbritary_id_choice),
                **{
                    "_class": "button_editar",
                    "z_index": 2001,
                    "onOpen": lambda: (
                        jQuery("#{0}".format(arbritary_id_choice)).on("click",
                            lambda: (self._get_nome_completo(change=True))),
                    )
                }
            )

            mensagem = DIV(
                P(botao_edit, self.nome_completo, _class="rclient"),
                _id=arbritary_id,
                _style="display: none;"
            )
            mensagem.append_to("#row_content")
            jQuery("#{0}".format(arbritary_id)).slideDown(500)
            jQuery("#row_content").animate({"scrollTop": 2000000}, "slow")
            self._get_cpf()
        else:
            self.wd_nome_completo.set_message_error("Nome inválido!")

    def _get_cpf(self, change=False):
        if self.cpf is None or change or self.fazer_alteracoes:
            if change or self.fazer_alteracoes:
                resp = CONCATENATE(
                    P("Quero mudar o CPF.",
                        _class="rclient"),
                    P("Tudo bem, digite agora seu CPF.",
                        _class="remsc"),
                )
            else:
                resp = P("Me informe o seu CPF.",
                    _class="remsc")

            arbritary_id = window.PhanterPWA.get_id()
            mensagem = DIV(
                resp,
                _id=arbritary_id,
                _style="display: none;"
            )
            mensagem.append_to("#row_content")
            jQuery("#{0}".format(arbritary_id)).slideDown(500)
            jQuery("#row_content").animate({"scrollTop": 2000000}, "slow")

            self.wd_cpf = widgets.Input(
                "cpf",
                icon=I(_class="fab fa-telegram-plane"),
                placeholder="CPF",
                wear="shadows",
                mask="###.###.###-##",
                checker=False,
                value=self.cpf if self.fazer_alteracoes and self.cpf is not None else ""
            )
            self.wd_cpf.html_to("#container-questionario .footer-questionario")
            self.binder_enter_key(self.wd_cpf)

            jQuery(
                "#phanterpwa-widget-input-input-cpf"
            ).off(
                "keydown.cpf_input"
            ).on(
                "keydown.cpf_input",
                lambda: self.wd_cpf.del_message_error()
            ).focus()
            jQuery("#phanterpwa-widget-cpf").find(
                ".phanterpwa-widget-icon-wrapper"
            ).off(
                "click.button_cpf"
            ).on(
                "click.button_cpf",
                lambda: self._validate_cpf()
            )
        else:
            self._get_matricula()

    def _validate_cpf(self):
        value = jQuery("#phanterpwa-widget-input-input-cpf").val()
        if value is not None and value is not js_undefined and value != "" and value.length > 5:
            self.cpf = value
            jQuery("#phanterpwa-widget-input-input-checkservidor_funcionario-cpf").val(value)
            arbritary_id = window.PhanterPWA.get_id()
            arbritary_id_menu = window.PhanterPWA.get_id()
            arbritary_id_choice = window.PhanterPWA.get_id()
            botao_edit = widgets.MenuBox(
                arbritary_id_menu,
                I(_class="fas fa-edit"),
                DIV("Quero mudar o CPF", _id=arbritary_id_choice),
                **{
                    "_class": "button_editar",
                    "z_index": 2001,
                    "onOpen": lambda: (
                        jQuery("#{0}".format(arbritary_id_choice)).on("click",
                            lambda: (self._get_cpf(change=True))),
                    )
                }
            )

            mensagem = DIV(
                P(botao_edit, self.cpf, _class="rclient"),
                _id=arbritary_id,
                _style="display: none;"
            )
            mensagem.append_to("#row_content")
            jQuery("#{0}".format(arbritary_id)).slideDown(500)
            jQuery("#row_content").animate({"scrollTop": 2000000}, "slow")
            self._get_matricula()
        else:
            self.wd_cpf.set_message_error("CPF inválido!")

    def _get_matricula(self, change=False):
        if self.sabe_matricula is None or change or self.fazer_alteracoes:
            if change or self.fazer_alteracoes:
                resp = CONCATENATE(
                    P("Quero mudar a matrícula.",
                        _class="rclient"),
                    P("Tudo bem. Você sabe o número de sua matrícula?.",
                        _class="remsc"),
                )
            else:
                resp = CONCATENATE(P("Para uma localização mais precisa, quanto mais informações tivermos, melhor.",
                    " Você sabe o número de sua matrícula? Esta informação pode ser encontrada em seu conta-cheque",
                    ". Vou mostrar...",
                    _class="remsc"),
                    P(
                        IMG(_src="/static/{0}/images/contra_cheque.jpg".format(
                            window.PhanterPWA.VERSIONING), _style="height: auto; width: 300px;"),
                        _class="remsc")
                )

            arbritary_id = window.PhanterPWA.get_id()
            mensagem = DIV(
                resp,
                _id=arbritary_id,
                _style="display: none;"
            )
            mensagem.append_to("#row_content")
            jQuery("#{0}".format(arbritary_id)).slideDown(500)
            jQuery("#row_content").animate({"scrollTop": 2000000}, "slow")


            choice = DIV(
                BUTTON("SEI A MATRÍCULA", _id="sim_matricula", _class="btn wave-on-click"),
                BUTTON("NÃO TENHO ACESSO A MATRÍCULA", _id="nao_matricula", _class="btn wave-on-click"),
                _class="buttons_choice"
            )
            choice.html_to("#container-questionario .footer-questionario")

            jQuery("#sim_matricula").off("click.sim_matricula").on(
                "click.sim_matricula",
                lambda: self._sabe_matricula(sabe=True)
            )
            jQuery("#nao_matricula").off("click.nao_matricula").on(
                "click.nao_matricula",
                lambda: self._sabe_matricula(sabe=False)
            )

        else:
            self._sabe_matricula()

    def _sabe_matricula(self, sabe=None, change=False):
        self.sabe_matricula = sabe
        if self.sabe_matricula is True or change or self.fazer_alteracoes:
            resp = CONCATENATE(
                P("Sei minha Matrícula.",
                    _class="rclient"),
                P("Ok, adicione a sua matrícula.",
                    _class="remsc"),
            )

            arbritary_id = window.PhanterPWA.get_id()
            mensagem = DIV(
                resp,
                _id=arbritary_id,
                _style="display: none;"
            )
            mensagem.append_to("#row_content")
            jQuery("#{0}".format(arbritary_id)).slideDown(500)
            jQuery("#row_content").animate({"scrollTop": 2000000}, "slow")

            self.wd_matricula = widgets.Input(
                "matricula",
                icon=I(_class="fab fa-telegram-plane"),
                placeholder="Matrícula",
                wear="shadows",
                checker=False,
                value=self.matricula if self.fazer_alteracoes and self.matricula is not None else ""
            )
            self.wd_matricula.html_to("#container-questionario .footer-questionario")
            self.binder_enter_key(self.wd_matricula)

            jQuery(
                "#phanterpwa-widget-input-input-matricula"
            ).off(
                "keydown.matricula_input"
            ).on(
                "keydown.matricula_input",
                lambda: self.wd_matricula.del_message_error()
            ).focus()
            jQuery("#phanterpwa-widget-matricula").find(
                ".phanterpwa-widget-icon-wrapper"
            ).off(
                "click.button_matricula"
            ).on(
                "click.button_matricula",
                lambda: self._validate_matricula()
            )
        else:

            arbritary_id = window.PhanterPWA.get_id()
            arbritary_id_menu = window.PhanterPWA.get_id()
            arbritary_id_choice = window.PhanterPWA.get_id()
            botao_edit = widgets.MenuBox(
                arbritary_id_menu,
                I(_class="fas fa-edit"),
                DIV("Quero mudar a matrícula", _id=arbritary_id_choice),
                **{
                    "_class": "button_editar",
                    "z_index": 2001,
                    "onOpen": lambda: (
                        jQuery("#{0}".format(arbritary_id_choice)).on("click",
                            lambda: (self._get_matricula(change=True))),
                    )
                }
            )
            resp = CONCATENATE(
                P(botao_edit, "Não sei minha Matrícula.",
                    _class="rclient"),
                P("Ok, vamos pular esta parte.",
                    _class="remsc"),
            )
            mensagem = DIV(
                resp,
                _id=arbritary_id,
                _style="display: none;"
            )
            mensagem.append_to("#row_content")
            jQuery("#{0}".format(arbritary_id)).slideDown(500)
            jQuery("#row_content").animate({"scrollTop": 2000000}, "slow")
            self._get_data_de_nascimento()


    def _validate_matricula(self):
        value = jQuery("#phanterpwa-widget-input-input-matricula").val()
        if value is not None and value is not js_undefined and value != "" and value.length > 0:
            self.matricula = value
            jQuery("#phanterpwa-widget-input-input-checkservidor_funcionario-matricula").val(value)
            arbritary_id = window.PhanterPWA.get_id()
            arbritary_id_menu = window.PhanterPWA.get_id()
            arbritary_id_choice = window.PhanterPWA.get_id()
            botao_edit = widgets.MenuBox(
                arbritary_id_menu,
                I(_class="fas fa-edit"),
                DIV("Quero mudar a matrícula", _id=arbritary_id_choice),
                **{
                    "_class": "button_editar",
                    "z_index": 2001,
                    "onOpen": lambda: (
                        jQuery("#{0}".format(arbritary_id_choice)).on("click",
                            lambda: (self._get_matricula(change=True))),
                    )
                }
            )

            mensagem = DIV(
                P(botao_edit, self.matricula, _class="rclient"),
                _id=arbritary_id,
                _style="display: none;"
            )
            mensagem.append_to("#row_content")
            jQuery("#{0}".format(arbritary_id)).slideDown(500)
            jQuery("#row_content").animate({"scrollTop": 2000000}, "slow")
            self._get_data_de_nascimento()
        else:
            self.wd_matricula.set_message_error("Matrícula inválida!")

    def _get_data_de_nascimento(self, change=False):
        if self.data_de_nascimento is None or change or self.fazer_alteracoes:
            nome_abreviado = self.abreviar_nome(self.nome_completo)
            if change or self.fazer_alteracoes:
                resp = CONCATENATE(
                    P("Tenho que mudar a data de nascimento", _class="rclient"),
                    P("Certo ", nome_abreviado, ", adicione sua data de nascimento, ficarei no aguado...",
                        _class="remsc")
                )
            else:
                resp = CONCATENATE(
                    P("Muito bem ", nome_abreviado, ", ",
                    "agora preciso de sua data de nascimento...", _class="remsc")
                )
            arbritary_id = window.PhanterPWA.get_id()
            mensagem = DIV(
                resp,
                _id=arbritary_id,
                _style="display: none;"
            )
            mensagem.append_to("#row_content")
            jQuery("#{0}".format(arbritary_id)).slideDown(500)
            jQuery("#row_content").animate({"scrollTop": 2000000}, "slow")
            self.wd_data_de_nascimento = widgets.Input(
                "data_de_nascimento",
                kind="date",
                icon=I(_class="far fa-calendar-alt"),
                format="dd/MM/yyyy",
                placeholder="Data de nascimento",
                wear="shadows",
                checker=False,
                onDateorDatetimeChoice=self._on_data_de_nascimento,
                value=self.data_de_nascimento if self.fazer_alteracoes and self.data_de_nascimento is not None else ""
            )
            self.wd_data_de_nascimento.html_to("#container-questionario .footer-questionario")
            jQuery(
                "#phanterpwa-widget-input-input-data_de_nascimento"
            ).focus()
            jQuery(
                "#phanterpwa-widget-input-input-data_de_nascimento"
            ).off(
                "keyup.enter_key_date"
            ).on(
                "keyup.enter_key_date",
                lambda event: self._valid_data_de_nascimento_manual(event)
            )
        else:
            self._get_nome_da_mae()

    def _valid_data_de_nascimento_manual(self, event):
        if event.keyCode == 13:
            value = jQuery("#phanterpwa-widget-input-input-data_de_nascimento").val()
            valider = validations.Valider(value, ["IS_DATE:dd/MM/yyyy"])
            if valider.validate():
                data = {
                    "formated": value,
                    "iso": "{0}-{1}-{2} 00:00:00".format(value[-4:], value[3:5], value[0:2])
                }
                self._on_data_de_nascimento(data)
            else:
                self.wd_data_de_nascimento.set_message_error("Data de nascimento inválido!")
        else:
            self.wd_data_de_nascimento.del_message_error()

    def _on_data_de_nascimento(self, data):
        arbritary_id = window.PhanterPWA.get_id()
        arbritary_id_menu = window.PhanterPWA.get_id()
        arbritary_id_choice = window.PhanterPWA.get_id()
        botao_edit = widgets.MenuBox(
            arbritary_id_menu,
            I(_class="fas fa-edit"),
            DIV("Quero mudar a Data de Nascimento", _id=arbritary_id_choice),
            **{
                "_class": "button_editar",
                "z_index": 2001,
                "onOpen": lambda: (
                    jQuery("#{0}".format(arbritary_id_choice)).on("click",
                        lambda: (self._get_data_de_nascimento(change=True))),
                )
            }
        )
        mensagem = DIV(
            P(botao_edit, data.formated, _class="rclient"),
            _id=arbritary_id,
            _style="display: none;"
        )
        jQuery("#phanterpwa-widget-input-input-checkservidor_funcionario-data_de_nascimento").val(data.iso)
        self.data_de_nascimento = data.formated
        mensagem.append_to("#row_content")
        jQuery("#{0}".format(arbritary_id)).slideDown(500)
        jQuery("#row_content").animate({"scrollTop": 2000000}, "slow")
        self._get_nome_da_mae()

    def _get_nome_da_mae(self, change=False):
        if self.nome_da_mae is None or change or self.fazer_alteracoes:
            if change or self.fazer_alteracoes:
                resp = CONCATENATE(
                    P("Eu quero mudar o nome de minha mãe!", _class="rclient"),
                    P("Certo, então digite o nome de sua mãe completo.", _class="remsc")
                )
            else:
                resp = CONCATENATE(
                    P("Estamos quase na reta final! Agora preciso do nome completo de sua mãe.", _class="remsc")
                )
            arbritary_id = window.PhanterPWA.get_id()
            mensagem = DIV(
                resp,
                _id=arbritary_id,
                _style="display: none;"
            )
            mensagem.append_to("#row_content")
            jQuery("#{0}".format(arbritary_id)).slideDown(500)
            jQuery("#row_content").animate({"scrollTop": 2000000}, "slow")
            self.wd_nome_da_mae = widgets.Input(
                "nome_da_mae",
                icon=I(_class="fab fa-telegram-plane"),
                placeholder="Nome completo da mãe",
                wear="shadows",
                checker=False,
                value=self.nome_da_mae if self.fazer_alteracoes and self.nome_da_mae is not None else ""
            )
            self.wd_nome_da_mae.html_to("#container-questionario .footer-questionario")
            self.binder_enter_key(self.wd_nome_da_mae)
            jQuery(
                "#phanterpwa-widget-input-input-nome_da_mae"
            ).off(
                "keydown.nome_da_mae_input"
            ).on(
                "keydown.nome_da_mae_input",
                lambda: self.wd_nome_da_mae.del_message_error()
            ).focus()
            jQuery("#phanterpwa-widget-nome_da_mae").find(
                ".phanterpwa-widget-icon-wrapper"
            ).off(
                "click.button_nome_da_mae"
            ).on(
                "click.button_nome_da_mae",
                lambda: self._validate_nome_da_mae()
            )
        else:
            self._get_numero_celularfunc()

    def _validate_nome_da_mae(self):
        value = jQuery("#phanterpwa-widget-input-input-nome_da_mae").val()
        if value is not None and value is not js_undefined and value != "" and value.length > 5:
            arbritary_id = window.PhanterPWA.get_id()
            arbritary_id_menu = window.PhanterPWA.get_id()
            arbritary_id_choice = window.PhanterPWA.get_id()
            botao_edit = widgets.MenuBox(
                arbritary_id_menu,
                I(_class="fas fa-edit"),
                DIV("Quero mudar o Nome da Mãe", _id=arbritary_id_choice),
                **{
                    "_class": "button_editar",
                    "z_index": 2001,
                    "onOpen": lambda: (
                        jQuery("#{0}".format(arbritary_id_choice)).on("click",
                            lambda: (self._get_nome_da_mae(change=True))),
                    )
                }
            )
            mensagem = DIV(
                P(botao_edit, value, _class="rclient"),
                P("Blz! Última etapa...", _class="remsc"),
                _id=arbritary_id,
                _style="display: none;"
            )
            mensagem.append_to("#row_content")
            self.nome_da_mae = value
            jQuery("#phanterpwa-widget-input-input-checkservidor_funcionario-nome_da_mae").val(value)
            jQuery("#{0}".format(arbritary_id)).slideDown(500)
            jQuery("#row_content").animate({"scrollTop": 2000000}, "slow")
            self._get_numero_celularfunc()

        else:
            self.wd_nome_da_mae.set_message_error("Nome inválido!")

    def _get_numero_celularfunc(self, change=False):
        if self.numero_celularfunc is None or change or self.fazer_alteracoes:
            if change or self.fazer_alteracoes:
                resp = CONCATENATE(
                    P("Eu quero mudar o número do celular!", _class="rclient"),
                    P("Certo, adicione o novo número do celular.", _class="remsc")
                )
            else:
                resp = CONCATENATE(
                    P("É importante por um número de celular. Usaremos este número para entrar em contato pelo ",
                        "Whatsapp se houver algo errado", _class="remsc")
                )
            arbritary_id = window.PhanterPWA.get_id()
            mensagem = DIV(
                resp,
                _id=arbritary_id,
                _style="display: none;"
            )
            mensagem.append_to("#row_content")
            jQuery("#{0}".format(arbritary_id)).slideDown(500)
            jQuery("#row_content").animate({"scrollTop": 2000000}, "slow")
            self.wd_numero_celularfunc = widgets.Input(
                "numero_celularfunc",
                icon=I(_class="fab fa-telegram-plane"),
                placeholder="Número de Celular",
                can_empty=True,
                mask="fone",
                wear="shadows",
                checker=False,
                value=self.numero_celularfunc if self.fazer_alteracoes and self.numero_celularfunc is not None else ""
            )
            self.wd_numero_celularfunc.html_to("#container-questionario .footer-questionario")
            self.binder_enter_key(self.wd_numero_celularfunc)
            jQuery(
                "#phanterpwa-widget-input-input-numero_celularfunc"
            ).off(
                "keydown.numero_celularfunc_input"
            ).on(
                "keydown.numero_celularfunc_input",
                lambda: self.wd_numero_celularfunc.del_message_error()
            ).focus()
            jQuery("#phanterpwa-widget-numero_celularfunc").find(
                ".phanterpwa-widget-icon-wrapper"
            ).off(
                "click.button_numero_celularfunc"
            ).on(
                "click.button_numero_celularfunc",
                lambda: self._validate_numero_celularfunc()
            )
        else:
            self._check_dados()

    def _validate_numero_celularfunc(self):
        value = jQuery("#phanterpwa-widget-input-input-numero_celularfunc").val()
        if value == "" or value.length > 14:
            arbritary_id = window.PhanterPWA.get_id()
            arbritary_id_menu = window.PhanterPWA.get_id()
            arbritary_id_choice = window.PhanterPWA.get_id()
            botao_edit = widgets.MenuBox(
                arbritary_id_menu,
                I(_class="fas fa-edit"),
                DIV("Quero mudar o número do celular.", _id=arbritary_id_choice),
                **{
                    "_class": "button_editar",
                    "z_index": 2001,
                    "onOpen": lambda: (
                        jQuery("#{0}".format(arbritary_id_choice)).on("click",
                            lambda: (self._get_numero_celularfunc(change=True))),
                    )
                }
            )
            mensagem = DIV(
                P(botao_edit, value, _class="rclient"),
                P("Ok! Vou tentar te identificar agora, aguarde um pouquinho...", _class="remsc"),
                _id=arbritary_id,
                _style="display: none;"
            )
            mensagem.append_to("#row_content")
            self.numero_celularfunc = value
            jQuery("#phanterpwa-widget-input-input-checkservidor_funcionario-numero_celularfunc").val(value)
            jQuery("#{0}".format(arbritary_id)).slideDown(500)
            jQuery("#row_content").animate({"scrollTop": 2000000}, "slow")
            self._check_dados()

        else:
            self.wd_numero_celularfunc.set_message_error("Celular inválido!")

    def _check_dados(self):
        formdata = __new__(FormData(jQuery("#form-checkservidor_funcionario")[0]))
        window.PhanterPWA.POST(**{
            'url_args': ["api", "identificar-servidor"],
            'form_data': formdata,
            'onComplete': self.after_submit2
        })

    def after_submit(self, data, ajax_status):
        if ajax_status == "success":
            data = data.responseJSON
            nome_abreviado = self.abreviar_nome(data.servidor.nome_completo)
            artigo = "o(a)"
            if data.servidor.sexo == "Masculino":
                artigo = "o"
            elif data.servidor.sexo == "Feminino":
                artigo = "a"
            nome_pai = ""
            if data.servidor.nome_do_pai is not None and\
                    data.servidor.nome_do_pai is not js_undefined and data.servidor.nome_do_pai != "":
                nome_pai = SPAN(STRONG(data.servidor.nome_do_pai), " e ")
            matricula = SPAN("Está matriculad", artigo, " no(a) ", STRONG(data.servidor.turma))
            arbritary_id = window.PhanterPWA.get_id()
            mensagem = DIV(
                P(
                    "Muito bem! Já sei quem você é. ",
                    "Você é ", STRONG(data.servidor.nome_completo), " que nasceu em ", STRONG(data.servidor.data_de_nascimento),
                    " e é filh", artigo, " de ", nome_pai, STRONG(data.servidor.nome_da_mae), ". ", matricula,
                    ". Mora no seguinte endereço: ", STRONG(data.servidor.endereco), "...",
                    _class="remsc"
                ),
                P(
                    "Tudo bom com você, ",
                    nome_abreviado, "?",
                    " Espero que sim...",
                    _class="remsc"
                ),
                _id=arbritary_id,
                _style="display: none;"
            )
            mensagem.append_to("#row_content")
            jQuery("#{0}".format(arbritary_id)).slideDown(500)
            jQuery("#row_content").animate({"scrollTop": 2000000}, "slow")
            jQuery(".button_editar").fadeOut()
            localStorage.setItem('servidor-token', data.servidor.token)
            self.token = data.servidor.token
            jQuery("#nome_servidor_chat").html(data.servidor.nome_completo)
            jQuery("#app-content-questionario").addClass("has_servidor")


            self._area_do_servidor(inicio=True)


        else:
            arbritary_id = window.PhanterPWA.get_id()
            mensagem = DIV(
                P("Não consegui achar nenhum servidor com o número de carteira que você forneceu.",
                    " Tente novamente ou eu posso tentar te identificar utilizando dados fornecidos",
                    " por você. O que quer fazer?",
                    _class="remsc"),
                _id=arbritary_id,
                _style="display: none;"
            )
            mensagem.append_to("#row_content")
            jQuery("#{0}".format(arbritary_id)).slideDown(500)
            jQuery("#row_content").animate({"scrollTop": 2000000}, "slow")
            choice = DIV(
                BUTTON("TENTAR NOVAMENTE", _id="sim_carteirinha", _class="btn wave-on-click"),
                BUTTON("FORNECER DADOS", _id="nao_carteirinha", _class="btn wave-on-click"),
                _class="buttons_choice"
            )
            choice.html_to("#container-questionario .footer-questionario")

            jQuery("#sim_carteirinha").off("click.carteirinha_sim").on(
                "click.carteirinha_sim",
                lambda: self._tem_carteirinha(True, change=True)
            )
            jQuery("#nao_carteirinha").off("click.carteirinha_nao").on(
                "click.carteirinha_nao",
                lambda: self._tem_carteirinha(False, change=True)
            )

    def after_submit2(self, data, ajax_status):
        if ajax_status == "success":
            data = data.responseJSON

            nome_abreviado = self.abreviar_nome(data.nome_completo)
            artigo = "o(a)"
            if data.sexo == "Masculino":
                artigo = "o"
            elif data.sexo == "Feminino":
                artigo = "a"
            nome_pai = ""
            if data.nome_do_pai is not None and\
                    data.nome_do_pai is not js_undefined and data.nome_do_pai != "":
                nome_pai = SPAN(STRONG(data.nome_do_pai), " e ")
            matricula = SPAN(" Possui CPF nº ", STRONG(data.cpf), " e Matrícula")
            mensagem = DIV(
                P(
                    "Confirmei sua identidade ", nome_abreviado, ". Recapitulando..."
                    "Você é ", STRONG(data.nome_completo), " que nasceu em ", STRONG(data.data_de_nascimento_formatado),
                    " e é filh", artigo, " de ", nome_pai, STRONG(data.nome_da_mae), ".", matricula,
                    _class="remsc"
                ),
                P(
                    "Sua conta foi vinculada ao seu cadastro, agora é possível acessar a ",
                    STRONG("Área do Servidor"), " e utilizar os serviços do SME, confira clicando abaixo.",
                    _class="remsc"
                ),
                _id="identificado",
                _style="display: none;"
            )
            mensagem.append_to("#row_content")
            jQuery("#identificado").slideDown(500)
            jQuery("#row_content").animate({"scrollTop": 2000000}, "slow")
            jQuery(".button_editar").fadeOut()
            choice = DIV(
                A("ÁREA DO SERVIDOR", _href="#_phanterpwa:/area-do-servidor", _class="btn wave-on-click"),
                A("VOLTAR (PÁGINA PRINCIPAL)", _href="#_phanterpwa:/home", _class="btn wave-on-click"),
                _class="buttons_choice"
            )
            choice.html_to("#container-questionario .footer-questionario")

            localStorage.setItem('identificar-servidor', JSON.stringify(data))
            window.PhanterPWA.update_auth_user()
        else:
            arbritary_id = window.PhanterPWA.get_id()
            mensagem = DIV(
                P("Não consegui te identificar com os dados que você me deu...", _class="remsc"),
                P("Nome completo: ", STRONG(self.nome_completo), BR(),
                    "CPF: ", STRONG(self.cpf), BR(),
                    "Marícula: ", STRONG(self.matricula), BR(),
                    "Data de Nascimento: ", STRONG(self.data_de_nascimento), BR(),
                    "Nome da mãe: ", STRONG(self.nome_da_mae), BR(),
                    "Celular: ", STRONG(self.numero_celularfunc),
                    _class="remsc"),
                P("Pode ser que você tenha digitado algo errado!",
                    " Faça as alterações necessárias em ", STRONG("CONSERTAR ALGO ERRADO"),
                    " que eu tento te identificar novamente.",
                    " Se você tem certeza que os dados inseridos estão corretos, o jeito é falar com alguém da administração do SME",
                    " ou você pode (opção mais recomendada) deixar uma mensagem em ", STRONG("MANDAR MENSAGEM"),
                    _class="remsc"),
                _id=arbritary_id,
                _style="display: none;"
            )
            mensagem.append_to("#row_content")
            jQuery("#{0}".format(arbritary_id)).slideDown(500)
            jQuery("#row_content").animate({"scrollTop": 2000000}, "slow")
            choice = DIV(
                widgets.MenuBox(
                    "alterar_dados",
                    BUTTON("CONSERTAR ALGO ERRADO", _id="alterar_dados", _class="btn wave-on-click"),
                    DIV("Quero mudar o Nome Completo", _id="algo_errado_nome_completo"),
                    DIV("Quero mudar o CPF", _id="algo_errado_cpf"),
                    DIV("Quero mudar a Matrícula", _id="algo_errado_matricula"),
                    DIV("Quero mudar o Data de Nascimento", _id="algo_errado_data_de_nascimento"),
                    DIV("Quero mudar o Nome da Mãe", _id="algo_errado_nome_da_mae"),
                    DIV("Quero mudar o Número Celular", _id="algo_errado_numero_celular"),
                    **{
                        "_class": "button_editar",
                        "_style": "width: auto; display: inline-block;",
                        "z_index": 2001,
                        "onOpen": lambda: (
                            jQuery("#{0}".format("algo_errado_nome_completo")).on("click",
                                lambda: (self._get_nome_completo(change=True))),
                            jQuery("#{0}".format("algo_errado_cpf")).on("click",
                                lambda: (self._get_cpf(change=True))),
                            jQuery("#{0}".format("algo_errado_matricula")).on("click",
                                lambda: (self._get_matricula(change=True))),
                            jQuery("#{0}".format("algo_errado_data_de_nascimento")).on("click",
                                lambda: (self._get_data_de_nascimento(change=True))),
                            jQuery("#{0}".format("algo_errado_nome_da_mae")).on("click",
                                lambda: (self._get_nome_da_mae(change=True))),
                            jQuery("#{0}".format("algo_errado_numero_celular")).on("click",
                                lambda: (self._get_numero_celularfunc(change=True))),
                        )
                    }
                ),
                
                BUTTON("MANDAR MENSAGEM", _id="mandar_mensagem", _class="btn wave-on-click"),
                _class="buttons_choice"
            )
            choice.html_to("#container-questionario .footer-questionario")

            # jQuery("#alterar_dados").off("click.alterar_dados").on(
            #     "click.alterar_dados",
            #     lambda: self._comeco(alteracao=True)
            # )
            jQuery("#mandar_mensagem").off("click.mandar_mensagem").on(
                "click.mandar_mensagem",
                lambda: self._mandar_mensagem()
            )

    def _mandar_mensagem(self):
        self.Modal = ModalMensagem(
            "#modal-container",
            **{
                "nome_completo": self.nome_completo,
                "cpf": self.cpf,
                "matricula": self.matricula,
                "data_de_nascimento": self.data_de_nascimento,
                "nome_da_mae": self.nome_da_mae,
                "celular": self.numero_celularfunc
            }
        )
        self.Modal.open()
        forms.SignForm("#form-mensagem", after_sign=lambda: forms.ValidateForm("#form-mensagem"))
        


class ModalMensagem(modal.Modal):
    def __init__(self, target_element, **parameters):
        nome_completo = parameters.get("nome_completo", "")
        nome_da_mae = parameters.get("nome_da_mae", "")
        data_de_nascimento = parameters.get("data_de_nascimento", "")
        cpf = parameters.get("cpf", "")
        matricula = parameters.get("matricula", "")
        celular = parameters.get("celular", "")
        self.element_target = jQuery(target_element)
        tcontent = DIV(
            P("Em anexo irão as informações que foram coletadas.",
                " Coloque um número de contato que entraremos em contato. Caso seja celular, tentaremos",
                " entrar em contato pelo Whatsapp. Em último caso responderemos pelo seu email: ",
                STRONG(window.PhanterPWA.get_auth_user().email), _style="text-align: center; color: red;"),
            DIV(
                forms.FormWidget(
                    "mensagem",
                    "nome_completo",
                    **{
                        "type": "string",
                        "label": "Nome completo",
                        "value": nome_completo,
                        "_class": "e-display_hidden"
                    }
                ),
                forms.FormWidget(
                    "mensagem",
                    "cpf",
                    **{
                        "type": "string",
                        "label": "CPF",
                        "value": cpf,
                        "_class": "e-display_hidden"
                    }
                ),
                forms.FormWidget(
                    "mensagem",
                    "matricula",
                    **{
                        "type": "string",
                        "label": "Matrícula",
                        "value": matricula,
                        "_class": "e-display_hidden"
                    }
                ),
                forms.FormWidget(
                    "mensagem",
                    "nome_da_mae",
                    **{
                        "type": "string",
                        "label": "Nome mãe",
                        "value": nome_da_mae,
                        "_class": "e-display_hidden"
                    }
                ),
                forms.FormWidget(
                    "mensagem",
                    "data_de_nascimento",
                    **{
                        "type": "string",
                        "label": "Data de nascimento",
                        "value": data_de_nascimento,
                        "_class": "e-display_hidden"
                    }
                ),
                forms.FormWidget(
                    "mensagem",
                    "celular",
                    **{
                        "type": "string",
                        "label": "Telefone/Celular",
                        "mask": "fone",
                        "value": celular
                    }
                ),
                forms.FormWidget(
                    "mensagem",
                    "email",
                    **{
                        "type": "string",
                        "label": "Email",
                        "value": window.PhanterPWA.get_auth_user().email,
                        "_class": "e-display_hidden"
                    }
                ),
                forms.FormWidget(
                    "mensagem",
                    "mensagem",
                    **{
                        "label": "Mensagem (Opcional)",
                        "type": "text"
                    }
                ),
                _class="p-col w1p100"
            ),
            _class="mensagem-form-inputs"
        ).jquery()

        tfooter = DIV(
            DIV(
                forms.SubmitButton(
                    "mensagem",
                    "Enviar mensagem",
                    _class="btn-autoresize wave_on_click waves-phanterpwa"
                ),
                _class='phanterpwa-form-buttons-container'
            ),
            _class="p-col w1p100"
        ).jquery()

        modal.Modal.__init__(
            self,
            self.element_target,
            **{
                "_phanterpwa-form": "mensagem",
                "_id": "form-mensagem",
                "header_height": 50,
                "footer_height": 80,
                "title": "Enviar Mensagem",
                "content": tcontent,
                "footer": tfooter,
                "after_open": self.binds,
                "z_index": 2002
            }
        )

    def binds(self):
        self.element_target.find(
            "#phanterpwa-widget-form-submit_button-mensagem"
        ).off(
            'click.modal_submit_mensagem'
        ).on(
            'click.modal_submit_mensagem',
            lambda: self.submit()
        )
        forms.SignForm("#form-mensagem", after_sign=lambda: forms.ValidateForm("#form-mensagem"))

    def after_submit(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            self.close()
            window.PhanterPWA.flash("Mensagem enviada com sucesso")
        else:
            if data.status == 400:
                json = data.responseJSON
                window.PhanterPWA.flash(**{'html': json.message})
                forms.SignForm("#form-mensagem")


    def submit(self):
        formdata = __new__(FormData())
        formdata.append(
            "csrf_token",
            jQuery("#phanterpwa-widget-input-mensagem-csrf_token").val()
        )
        formdata.append(
            "nome_completo",
            jQuery("#phanterpwa-widget-input-input-mensagem-nome_completo").val()
        )
        formdata.append(
            "cpf",
            jQuery("#phanterpwa-widget-input-input-mensagem-cpf").val()
        )
        formdata.append(
            "matricula",
            jQuery("#phanterpwa-widget-input-input-mensagem-matricula").val()
        )
        formdata.append(
            "nome_da_mae",
            jQuery("#phanterpwa-widget-input-input-mensagem-nome_da_mae").val()
        )
        formdata.append(
            "data_de_nascimento",
            jQuery("#phanterpwa-widget-input-input-mensagem-data_de_nascimento").val()
        )
        formdata.append(
            "celular",
            jQuery("#phanterpwa-widget-input-input-mensagem-celular").val()
        )
        formdata.append(
            "email",
            jQuery("#phanterpwa-widget-input-input-mensagem-email").val()
        )
        formdata.append(
            "mensagem",
            jQuery("#phanterpwa-widget-textarea-textarea-mensagem-mensagem").val()
        )

        window.PhanterPWA.POST(**{
            'url_args': ["api", "mensagem"],
            'form_data': formdata,
            'onComplete': self.after_submit
        })


__pragma__('nokwargs')
