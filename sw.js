
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('0.6.0.238').then(function(cache) {
      return cache.addAll([
        '/static/0.6.0.238/css/normalize.css',
        '/static/0.6.0.238/css/all.min.css',
        '/static/0.6.0.238/css/phanterpwa.css',
        '/static/0.6.0.238/css/application.css',
        '/static/0.6.0.238/favicons/android-chrome-144x144.png',
        '/static/0.6.0.238/favicons/android-chrome-192x192.png',
        '/static/0.6.0.238/favicons/android-chrome-256x256.png',
        '/static/0.6.0.238/favicons/android-chrome-512x512.png',
        '/static/0.6.0.238/favicons/apple-touch-icon.png',
        '/static/0.6.0.238/favicons/browserconfig.xml',
        '/static/0.6.0.238/favicons/favicon-16x16.png',
        '/static/0.6.0.238/favicons/favicon-32x32.png',
        '/static/0.6.0.238/favicons/favicon.ico',
        '/static/0.6.0.238/favicons/manifest.json',
        '/static/0.6.0.238/favicons/mstile-150x150.png',
        '/static/0.6.0.238/favicons/safari-pinned-tab.svg',
        '/static/0.6.0.238/favicons/site.webmanifest',
        '/static/0.6.0.238/favicons/apple-icon-114x114.png',
        '/static/0.6.0.238/favicons/apple-icon-120x120.png',
        '/static/0.6.0.238/favicons/apple-icon-144x144.png',
        '/static/0.6.0.238/favicons/android-icon-48x48.png',
        '/static/0.6.0.238/favicons/apple-icon-152x152.png',
        '/static/0.6.0.238/favicons/apple-icon-180x180.png',
        '/static/0.6.0.238/favicons/apple-icon-57x57.png',
        '/static/0.6.0.238/favicons/apple-icon-60x60.png',
        '/static/0.6.0.238/favicons/apple-icon-72x72.png',
        '/static/0.6.0.238/favicons/apple-icon-precomposed.png',
        '/static/0.6.0.238/favicons/apple-icon-76x76.png',
        '/static/0.6.0.238/favicons/apple-icon.png',
        '/static/0.6.0.238/favicons/android-icon-144x144.png',
        '/static/0.6.0.238/favicons/favicon-96x96.png',
        '/static/0.6.0.238/favicons/android-icon-192x192.png',
        '/static/0.6.0.238/favicons/ms-icon-144x144.png',
        '/static/0.6.0.238/favicons/ms-icon-150x150.png',
        '/static/0.6.0.238/favicons/ms-icon-310x310.png',
        '/static/0.6.0.238/favicons/ms-icon-70x70.png',
        '/static/0.6.0.238/favicons/android-icon-72x72.png',
        '/static/0.6.0.238/favicons/android-icon-36x36.png',
        '/static/0.6.0.238/favicons/android-icon-96x96.png',
        '/static/0.6.0.238/fonts/88bdc70ec292cc29451932f9875b378a.svg',
        '/static/0.6.0.238/fonts/88bdc70ec292cc29451932f9875b378a.eot',
        '/static/0.6.0.238/fonts/88bdc70ec292cc29451932f9875b378a.ttf',
        '/static/0.6.0.238/fonts/88bdc70ec292cc29451932f9875b378a.woff',
        '/static/0.6.0.238/fonts/88bdc70ec292cc29451932f9875b378a.woff2',
        '/static/0.6.0.238/fonts/d6lIkaiiRdih4SpP_SovzAbt.woff2',
        '/static/0.6.0.238/fonts/d6lIkaiiRdih4SpP_SQvzA.woff2',
        '/static/0.6.0.238/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2',
        '/static/0.6.0.238/fonts/L0x5DF4xlVMF-BfR8bXMIjhFq3-OXg.woff2',
        '/static/0.6.0.238/fonts/L0x5DF4xlVMF-BfR8bXMIjhLq38.woff2',
        '/static/0.6.0.238/fonts/Roboto-Thin.eot',
        '/static/0.6.0.238/fonts/Roboto-Thin.ttf',
        '/static/0.6.0.238/fonts/Roboto-Thin.woff',
        '/static/0.6.0.238/fonts/Roboto-Thin.woff2',
        '/static/0.6.0.238/fonts/roboto-v20-latin-regular.eot',
        '/static/0.6.0.238/fonts/roboto-v20-latin-regular.svg',
        '/static/0.6.0.238/fonts/roboto-v20-latin-regular.ttf',
        '/static/0.6.0.238/fonts/roboto-v20-latin-regular.woff',
        '/static/0.6.0.238/fonts/roboto-v20-latin-regular.woff2',
        '/static/0.6.0.238/fonts/Segoe UI Bold Italic.woff',
        '/static/0.6.0.238/fonts/Segoe UI Bold.woff',
        '/static/0.6.0.238/fonts/Segoe UI Italic.woff',
        '/static/0.6.0.238/fonts/Segoe UI.woff',
        '/static/0.6.0.238/fonts/DejaVuSans.eot',
        '/static/0.6.0.238/fonts/DejaVuSans.svg',
        '/static/0.6.0.238/fonts/DejaVuSans.ttf',
        '/static/0.6.0.238/fonts/DejaVuSans.woff',
        '/static/0.6.0.238/fonts/DejaVuSans.woff2',
        '/static/0.6.0.238/images/background.jpg',
        '/static/0.6.0.238/images/user.png',
        '/static/0.6.0.238/images/warning.png',
        '/static/0.6.0.238/images/contra_cheque.jpg',
        '/static/0.6.0.238/images/perfil_robo-min.jpg',
        '/static/0.6.0.238/images/logo_escola.jpg',
        '/static/0.6.0.238/images/cabecalho_background.jpg',
        '/static/0.6.0.238/images/share.jpg',
        '/static/0.6.0.238/js/hammer.min.js.map',
        '/static/0.6.0.238/js/hammer.min.js',
        '/static/0.6.0.238/js/jquery.hammer.js',
        '/static/0.6.0.238/js/jquery.min.js',
        '/static/0.6.0.238/js/phanterweb.js',
        '/static/0.6.0.238/js/jquery.min.map',
        '/static/0.6.0.238/js/qrcode.min.js',
        '/static/0.6.0.238/js/touch-emulator.js',
        '/static/0.6.0.238/js/highcharts.js',
        '/static/0.6.0.238/js/transcrypt/org.transcrypt.__runtime__.map',
        '/static/0.6.0.238/js/transcrypt/org.transcrypt.__runtime__.py',
        '/static/0.6.0.238/js/transcrypt/org.transcrypt.__runtime__.js',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.fmasks.map',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.fmasks.py',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.fmasks.js',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.validations.map',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.validations.py',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.validations.js',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.helpers.map',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.helpers.py',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.helpers.js',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.websocket.map',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.websocket.py',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.websocket.js',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.components.snippets.map',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.components.snippets.py',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.components.snippets.js',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.components.modal.map',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.components.modal.py',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.components.modal.js',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.decorators.map',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.decorators.py',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.decorators.js',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.gatehandler.map',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.gatehandler.py',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.gatehandler.js',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.components.events.map',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.components.events.py',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.components.events.js',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.components.datetimepicker.map',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.components.datetimepicker.py',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.components.datetimepicker.js',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.components.widgets.map',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.components.widgets.py',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.components.widgets.js',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.i18n.map',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.i18n.py',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.i18n.js',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.progressbar.map',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.progressbar.py',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.progressbar.js',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.server.map',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.server.py',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.server.js',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.application.map',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.application.py',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.application.js',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.components.left_bar.map',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.components.left_bar.py',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.components.left_bar.js',
        '/static/0.6.0.238/js/transcrypt/plugins.servidor_sme.map',
        '/static/0.6.0.238/js/transcrypt/plugins.servidor_sme.py',
        '/static/0.6.0.238/js/transcrypt/plugins.servidor_sme.js',
        '/static/0.6.0.238/js/transcrypt/auto.config.map',
        '/static/0.6.0.238/js/transcrypt/auto.config.py',
        '/static/0.6.0.238/js/transcrypt/auto.config.js',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.preloaders.map',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.preloaders.py',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.preloaders.js',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.forms.map',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.forms.py',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.forms.js',
        '/static/0.6.0.238/js/transcrypt/handlers.rootcmd.map',
        '/static/0.6.0.238/js/transcrypt/handlers.rootcmd.py',
        '/static/0.6.0.238/js/transcrypt/handlers.rootcmd.js',
        '/static/0.6.0.238/js/transcrypt/handlers.anos_letivos.map',
        '/static/0.6.0.238/js/transcrypt/handlers.anos_letivos.py',
        '/static/0.6.0.238/js/transcrypt/handlers.anos_letivos.js',
        '/static/0.6.0.238/js/transcrypt/handlers.escolas.map',
        '/static/0.6.0.238/js/transcrypt/handlers.escolas.py',
        '/static/0.6.0.238/js/transcrypt/handlers.escolas.js',
        '/static/0.6.0.238/js/transcrypt/handlers.registro_de_atividades.map',
        '/static/0.6.0.238/js/transcrypt/handlers.registro_de_atividades.py',
        '/static/0.6.0.238/js/transcrypt/handlers.registro_de_atividades.js',
        '/static/0.6.0.238/js/transcrypt/handlers.controle_de_atividades.map',
        '/static/0.6.0.238/js/transcrypt/handlers.controle_de_atividades.py',
        '/static/0.6.0.238/js/transcrypt/handlers.controle_de_atividades.js',
        '/static/0.6.0.238/js/transcrypt/handlers.boletins.map',
        '/static/0.6.0.238/js/transcrypt/handlers.boletins.py',
        '/static/0.6.0.238/js/transcrypt/handlers.boletins.js',
        '/static/0.6.0.238/js/transcrypt/handlers.conselho_de_classe.map',
        '/static/0.6.0.238/js/transcrypt/handlers.conselho_de_classe.py',
        '/static/0.6.0.238/js/transcrypt/handlers.conselho_de_classe.js',
        '/static/0.6.0.238/js/transcrypt/handlers.diario_integrado.map',
        '/static/0.6.0.238/js/transcrypt/handlers.diario_integrado.py',
        '/static/0.6.0.238/js/transcrypt/handlers.diario_integrado.js',
        '/static/0.6.0.238/js/transcrypt/handlers.registro_de_faltas.map',
        '/static/0.6.0.238/js/transcrypt/handlers.registro_de_faltas.py',
        '/static/0.6.0.238/js/transcrypt/handlers.registro_de_faltas.js',
        '/static/0.6.0.238/js/transcrypt/handlers.registro_de_aulas_educacao_infantil.map',
        '/static/0.6.0.238/js/transcrypt/handlers.registro_de_aulas_educacao_infantil.py',
        '/static/0.6.0.238/js/transcrypt/handlers.registro_de_aulas_educacao_infantil.js',
        '/static/0.6.0.238/js/transcrypt/handlers.registro_de_aulas.map',
        '/static/0.6.0.238/js/transcrypt/handlers.registro_de_aulas.py',
        '/static/0.6.0.238/js/transcrypt/handlers.registro_de_aulas.js',
        '/static/0.6.0.238/js/transcrypt/handlers.ficha_avaliativa.map',
        '/static/0.6.0.238/js/transcrypt/handlers.ficha_avaliativa.py',
        '/static/0.6.0.238/js/transcrypt/handlers.ficha_avaliativa.js',
        '/static/0.6.0.238/js/transcrypt/handlers.calendarios.map',
        '/static/0.6.0.238/js/transcrypt/handlers.calendarios.py',
        '/static/0.6.0.238/js/transcrypt/handlers.calendarios.js',
        '/static/0.6.0.238/js/transcrypt/handlers.diario_de_notas.map',
        '/static/0.6.0.238/js/transcrypt/handlers.diario_de_notas.py',
        '/static/0.6.0.238/js/transcrypt/handlers.diario_de_notas.js',
        '/static/0.6.0.238/js/transcrypt/handlers.excepcional.map',
        '/static/0.6.0.238/js/transcrypt/handlers.excepcional.py',
        '/static/0.6.0.238/js/transcrypt/handlers.excepcional.js',
        '/static/0.6.0.238/js/transcrypt/handlers.imprimir.map',
        '/static/0.6.0.238/js/transcrypt/handlers.imprimir.py',
        '/static/0.6.0.238/js/transcrypt/handlers.imprimir.js',
        '/static/0.6.0.238/js/transcrypt/handlers.turmas.map',
        '/static/0.6.0.238/js/transcrypt/handlers.turmas.py',
        '/static/0.6.0.238/js/transcrypt/handlers.turmas.js',
        '/static/0.6.0.238/js/transcrypt/handlers.disciplinas.map',
        '/static/0.6.0.238/js/transcrypt/handlers.disciplinas.py',
        '/static/0.6.0.238/js/transcrypt/handlers.disciplinas.js',
        '/static/0.6.0.238/js/transcrypt/handlers.series.map',
        '/static/0.6.0.238/js/transcrypt/handlers.series.py',
        '/static/0.6.0.238/js/transcrypt/handlers.series.js',
        '/static/0.6.0.238/js/transcrypt/handlers.professores.map',
        '/static/0.6.0.238/js/transcrypt/handlers.professores.py',
        '/static/0.6.0.238/js/transcrypt/handlers.professores.js',
        '/static/0.6.0.238/js/transcrypt/handlers.views.funcionario.map',
        '/static/0.6.0.238/js/transcrypt/handlers.views.funcionario.py',
        '/static/0.6.0.238/js/transcrypt/handlers.views.funcionario.js',
        '/static/0.6.0.238/js/transcrypt/handlers.views.funcionarios.map',
        '/static/0.6.0.238/js/transcrypt/handlers.views.funcionarios.py',
        '/static/0.6.0.238/js/transcrypt/handlers.views.funcionarios.js',
        '/static/0.6.0.238/js/transcrypt/handlers.funcionarios.map',
        '/static/0.6.0.238/js/transcrypt/handlers.funcionarios.py',
        '/static/0.6.0.238/js/transcrypt/handlers.funcionarios.js',
        '/static/0.6.0.238/js/transcrypt/handlers.servidores.map',
        '/static/0.6.0.238/js/transcrypt/handlers.servidores.py',
        '/static/0.6.0.238/js/transcrypt/handlers.servidores.js',
        '/static/0.6.0.238/js/transcrypt/handlers.pais_e_alunos.map',
        '/static/0.6.0.238/js/transcrypt/handlers.pais_e_alunos.py',
        '/static/0.6.0.238/js/transcrypt/handlers.pais_e_alunos.js',
        '/static/0.6.0.238/js/transcrypt/plugins.highcharts.map',
        '/static/0.6.0.238/js/transcrypt/plugins.highcharts.py',
        '/static/0.6.0.238/js/transcrypt/plugins.highcharts.js',
        '/static/0.6.0.238/js/transcrypt/handlers.estatisticas.map',
        '/static/0.6.0.238/js/transcrypt/handlers.estatisticas.py',
        '/static/0.6.0.238/js/transcrypt/handlers.estatisticas.js',
        '/static/0.6.0.238/js/transcrypt/handlers.administrar_escola.map',
        '/static/0.6.0.238/js/transcrypt/handlers.administrar_escola.py',
        '/static/0.6.0.238/js/transcrypt/handlers.administrar_escola.js',
        '/static/0.6.0.238/js/transcrypt/handlers.indicadores_de_desempenho.map',
        '/static/0.6.0.238/js/transcrypt/handlers.indicadores_de_desempenho.py',
        '/static/0.6.0.238/js/transcrypt/handlers.indicadores_de_desempenho.js',
        '/static/0.6.0.238/js/transcrypt/handlers.identificar_servidor.map',
        '/static/0.6.0.238/js/transcrypt/handlers.identificar_servidor.py',
        '/static/0.6.0.238/js/transcrypt/handlers.identificar_servidor.js',
        '/static/0.6.0.238/js/transcrypt/handlers.artigos.map',
        '/static/0.6.0.238/js/transcrypt/handlers.artigos.py',
        '/static/0.6.0.238/js/transcrypt/handlers.artigos.js',
        '/static/0.6.0.238/js/transcrypt/handlers.alunos.map',
        '/static/0.6.0.238/js/transcrypt/handlers.alunos.py',
        '/static/0.6.0.238/js/transcrypt/handlers.alunos.js',
        '/static/0.6.0.238/js/transcrypt/handlers.vinculos.map',
        '/static/0.6.0.238/js/transcrypt/handlers.vinculos.py',
        '/static/0.6.0.238/js/transcrypt/handlers.vinculos.js',
        '/static/0.6.0.238/js/transcrypt/handlers.matriculas.map',
        '/static/0.6.0.238/js/transcrypt/handlers.matriculas.py',
        '/static/0.6.0.238/js/transcrypt/handlers.matriculas.js',
        '/static/0.6.0.238/js/transcrypt/handlers.matricular.map',
        '/static/0.6.0.238/js/transcrypt/handlers.matricular.py',
        '/static/0.6.0.238/js/transcrypt/handlers.matricular.js',
        '/static/0.6.0.238/js/transcrypt/handlers.matricula.map',
        '/static/0.6.0.238/js/transcrypt/handlers.matricula.py',
        '/static/0.6.0.238/js/transcrypt/handlers.matricula.js',
        '/static/0.6.0.238/js/transcrypt/handlers.home.map',
        '/static/0.6.0.238/js/transcrypt/handlers.home.py',
        '/static/0.6.0.238/js/transcrypt/handlers.home.js',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.components.admin.map',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.components.admin.py',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.components.admin.js',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.components.gallery.map',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.components.gallery.py',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.components.gallery.js',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.components.top_slide.map',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.components.top_slide.py',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.components.top_slide.js',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.components.auth_user.map',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.components.auth_user.py',
        '/static/0.6.0.238/js/transcrypt/phanterpwa.frontend.components.auth_user.js',
        '/static/0.6.0.238/js/transcrypt/application.map',
        '/static/0.6.0.238/js/transcrypt/application.py',
        '/static/0.6.0.238/js/transcrypt/application.js',
        '/static/0.6.0.238/js/transcrypt/application.project',
        '/static/0.6.0.238/json/manifest.json',
        '/static/0.6.0.238/json/manifest.webmanifest',
        '/static/0.6.0.238/lib/codemirror.js',
        '/static/0.6.0.238/lib/codemirror.css',
        '/static/0.6.0.238/webfonts/fa-brands-400.svg',
        '/static/0.6.0.238/webfonts/fa-brands-400.eot',
        '/static/0.6.0.238/webfonts/fa-brands-400.ttf',
        '/static/0.6.0.238/webfonts/fa-brands-400.woff',
        '/static/0.6.0.238/webfonts/fa-brands-400.woff2',
        '/static/0.6.0.238/webfonts/fa-regular-400.eot',
        '/static/0.6.0.238/webfonts/fa-regular-400.ttf',
        '/static/0.6.0.238/webfonts/fa-regular-400.svg',
        '/static/0.6.0.238/webfonts/fa-regular-400.woff',
        '/static/0.6.0.238/webfonts/fa-regular-400.woff2',
        '/static/0.6.0.238/webfonts/fa-solid-900.eot',
        '/static/0.6.0.238/webfonts/fa-solid-900.svg',
        '/static/0.6.0.238/webfonts/fa-solid-900.ttf',
        '/static/0.6.0.238/webfonts/fa-solid-900.woff',
        '/static/0.6.0.238/webfonts/fa-solid-900.woff2',
        '/static/0.6.0.238/mode/python/python.js',
        '/static/0.6.0.238/mode/python/index.html',
        '/static/0.6.0.238/mode/python/test.js',
        '/static/0.6.0.238/xml/browserconfig.xml'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  if (event.request.method == "GET"){
      event.respondWith(caches.match(event.request).then(function(response) {
        if (response !== undefined) {
          return response;
        } else {
          return fetch(event.request).then(function (response) {
            return response;
          }).catch(function () {
            return caches.match('/static/0.6.0.238/images/warning.png');
          });
        }
      }));
  } else {
    if (window.PhanterPWA.DEBUG){
        console.info(event.request.method)
    };
  };
});
