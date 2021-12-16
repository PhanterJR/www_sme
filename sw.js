
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('0.6.0.187').then(function(cache) {
      return cache.addAll([
        '/static/0.6.0.187/css/normalize.css',
        '/static/0.6.0.187/css/all.min.css',
        '/static/0.6.0.187/css/phanterpwa.css',
        '/static/0.6.0.187/css/application.css',
        '/static/0.6.0.187/favicons/android-chrome-144x144.png',
        '/static/0.6.0.187/favicons/android-chrome-192x192.png',
        '/static/0.6.0.187/favicons/android-chrome-256x256.png',
        '/static/0.6.0.187/favicons/android-chrome-512x512.png',
        '/static/0.6.0.187/favicons/apple-touch-icon.png',
        '/static/0.6.0.187/favicons/browserconfig.xml',
        '/static/0.6.0.187/favicons/favicon-16x16.png',
        '/static/0.6.0.187/favicons/favicon-32x32.png',
        '/static/0.6.0.187/favicons/favicon.ico',
        '/static/0.6.0.187/favicons/manifest.json',
        '/static/0.6.0.187/favicons/mstile-150x150.png',
        '/static/0.6.0.187/favicons/safari-pinned-tab.svg',
        '/static/0.6.0.187/favicons/site.webmanifest',
        '/static/0.6.0.187/favicons/apple-icon-114x114.png',
        '/static/0.6.0.187/favicons/apple-icon-120x120.png',
        '/static/0.6.0.187/favicons/apple-icon-144x144.png',
        '/static/0.6.0.187/favicons/android-icon-48x48.png',
        '/static/0.6.0.187/favicons/apple-icon-152x152.png',
        '/static/0.6.0.187/favicons/apple-icon-180x180.png',
        '/static/0.6.0.187/favicons/apple-icon-57x57.png',
        '/static/0.6.0.187/favicons/apple-icon-60x60.png',
        '/static/0.6.0.187/favicons/apple-icon-72x72.png',
        '/static/0.6.0.187/favicons/apple-icon-precomposed.png',
        '/static/0.6.0.187/favicons/apple-icon-76x76.png',
        '/static/0.6.0.187/favicons/apple-icon.png',
        '/static/0.6.0.187/favicons/android-icon-144x144.png',
        '/static/0.6.0.187/favicons/favicon-96x96.png',
        '/static/0.6.0.187/favicons/android-icon-192x192.png',
        '/static/0.6.0.187/favicons/ms-icon-144x144.png',
        '/static/0.6.0.187/favicons/ms-icon-150x150.png',
        '/static/0.6.0.187/favicons/ms-icon-310x310.png',
        '/static/0.6.0.187/favicons/ms-icon-70x70.png',
        '/static/0.6.0.187/favicons/android-icon-72x72.png',
        '/static/0.6.0.187/favicons/android-icon-36x36.png',
        '/static/0.6.0.187/favicons/android-icon-96x96.png',
        '/static/0.6.0.187/fonts/88bdc70ec292cc29451932f9875b378a.svg',
        '/static/0.6.0.187/fonts/88bdc70ec292cc29451932f9875b378a.eot',
        '/static/0.6.0.187/fonts/88bdc70ec292cc29451932f9875b378a.ttf',
        '/static/0.6.0.187/fonts/88bdc70ec292cc29451932f9875b378a.woff',
        '/static/0.6.0.187/fonts/88bdc70ec292cc29451932f9875b378a.woff2',
        '/static/0.6.0.187/fonts/d6lIkaiiRdih4SpP_SovzAbt.woff2',
        '/static/0.6.0.187/fonts/d6lIkaiiRdih4SpP_SQvzA.woff2',
        '/static/0.6.0.187/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2',
        '/static/0.6.0.187/fonts/L0x5DF4xlVMF-BfR8bXMIjhFq3-OXg.woff2',
        '/static/0.6.0.187/fonts/L0x5DF4xlVMF-BfR8bXMIjhLq38.woff2',
        '/static/0.6.0.187/fonts/Roboto-Thin.eot',
        '/static/0.6.0.187/fonts/Roboto-Thin.ttf',
        '/static/0.6.0.187/fonts/Roboto-Thin.woff',
        '/static/0.6.0.187/fonts/Roboto-Thin.woff2',
        '/static/0.6.0.187/fonts/roboto-v20-latin-regular.eot',
        '/static/0.6.0.187/fonts/roboto-v20-latin-regular.svg',
        '/static/0.6.0.187/fonts/roboto-v20-latin-regular.ttf',
        '/static/0.6.0.187/fonts/roboto-v20-latin-regular.woff',
        '/static/0.6.0.187/fonts/roboto-v20-latin-regular.woff2',
        '/static/0.6.0.187/fonts/Segoe UI Bold Italic.woff',
        '/static/0.6.0.187/fonts/Segoe UI Bold.woff',
        '/static/0.6.0.187/fonts/Segoe UI Italic.woff',
        '/static/0.6.0.187/fonts/Segoe UI.woff',
        '/static/0.6.0.187/fonts/DejaVuSans.eot',
        '/static/0.6.0.187/fonts/DejaVuSans.svg',
        '/static/0.6.0.187/fonts/DejaVuSans.ttf',
        '/static/0.6.0.187/fonts/DejaVuSans.woff',
        '/static/0.6.0.187/fonts/DejaVuSans.woff2',
        '/static/0.6.0.187/images/background.jpg',
        '/static/0.6.0.187/images/user.png',
        '/static/0.6.0.187/images/warning.png',
        '/static/0.6.0.187/images/contra_cheque.jpg',
        '/static/0.6.0.187/images/perfil_robo-min.jpg',
        '/static/0.6.0.187/images/logo_escola.jpg',
        '/static/0.6.0.187/images/cabecalho_background.jpg',
        '/static/0.6.0.187/images/share.jpg',
        '/static/0.6.0.187/js/hammer.min.js.map',
        '/static/0.6.0.187/js/hammer.min.js',
        '/static/0.6.0.187/js/jquery.hammer.js',
        '/static/0.6.0.187/js/jquery.min.js',
        '/static/0.6.0.187/js/phanterweb.js',
        '/static/0.6.0.187/js/jquery.min.map',
        '/static/0.6.0.187/js/qrcode.min.js',
        '/static/0.6.0.187/js/touch-emulator.js',
        '/static/0.6.0.187/js/highcharts.js',
        '/static/0.6.0.187/js/transcrypt/handlers.matricular.js',
        '/static/0.6.0.187/js/transcrypt/org.transcrypt.__runtime__.js',
        '/static/0.6.0.187/js/transcrypt/phanterpwa.frontend.fmasks.js',
        '/static/0.6.0.187/js/transcrypt/handlers.funcionarios.js',
        '/static/0.6.0.187/js/transcrypt/phanterpwa.frontend.validations.js',
        '/static/0.6.0.187/js/transcrypt/handlers.servidores.js',
        '/static/0.6.0.187/js/transcrypt/phanterpwa.frontend.helpers.js',
        '/static/0.6.0.187/js/transcrypt/handlers.pais_e_alunos.js',
        '/static/0.6.0.187/js/transcrypt/phanterpwa.frontend.websocket.js',
        '/static/0.6.0.187/js/transcrypt/handlers.series.js',
        '/static/0.6.0.187/js/transcrypt/phanterpwa.frontend.components.snippets.js',
        '/static/0.6.0.187/js/transcrypt/handlers.alunos.js',
        '/static/0.6.0.187/js/transcrypt/phanterpwa.frontend.components.modal.js',
        '/static/0.6.0.187/js/transcrypt/plugins.highcharts.js',
        '/static/0.6.0.187/js/transcrypt/phanterpwa.frontend.decorators.js',
        '/static/0.6.0.187/js/transcrypt/handlers.estatisticas.js',
        '/static/0.6.0.187/js/transcrypt/phanterpwa.frontend.gatehandler.js',
        '/static/0.6.0.187/js/transcrypt/handlers.professores.js',
        '/static/0.6.0.187/js/transcrypt/phanterpwa.frontend.components.events.js',
        '/static/0.6.0.187/js/transcrypt/handlers.disciplinas.js',
        '/static/0.6.0.187/js/transcrypt/phanterpwa.frontend.components.datetimepicker.js',
        '/static/0.6.0.187/js/transcrypt/handlers.views.funcionario.js',
        '/static/0.6.0.187/js/transcrypt/phanterpwa.frontend.components.widgets.js',
        '/static/0.6.0.187/js/transcrypt/phanterpwa.frontend.i18n.js',
        '/static/0.6.0.187/js/transcrypt/handlers.vinculos.js',
        '/static/0.6.0.187/js/transcrypt/phanterpwa.frontend.progressbar.js',
        '/static/0.6.0.187/js/transcrypt/phanterpwa.frontend.server.js',
        '/static/0.6.0.187/js/transcrypt/handlers.matriculas.js',
        '/static/0.6.0.187/js/transcrypt/phanterpwa.frontend.application.js',
        '/static/0.6.0.187/js/transcrypt/handlers.views.funcionarios.js',
        '/static/0.6.0.187/js/transcrypt/phanterpwa.frontend.components.left_bar.js',
        '/static/0.6.0.187/js/transcrypt/plugins.servidor_sme.js',
        '/static/0.6.0.187/js/transcrypt/auto.config.js',
        '/static/0.6.0.187/js/transcrypt/handlers.matricula.js',
        '/static/0.6.0.187/js/transcrypt/phanterpwa.frontend.preloaders.js',
        '/static/0.6.0.187/js/transcrypt/phanterpwa.frontend.forms.js',
        '/static/0.6.0.187/js/transcrypt/handlers.rootcmd.js',
        '/static/0.6.0.187/js/transcrypt/handlers.anos_letivos.js',
        '/static/0.6.0.187/js/transcrypt/handlers.escolas.js',
        '/static/0.6.0.187/js/transcrypt/handlers.home.js',
        '/static/0.6.0.187/js/transcrypt/handlers.registro_de_atividades.js',
        '/static/0.6.0.187/js/transcrypt/phanterpwa.frontend.components.admin.js',
        '/static/0.6.0.187/js/transcrypt/handlers.controle_de_atividades.js',
        '/static/0.6.0.187/js/transcrypt/handlers.boletins.js',
        '/static/0.6.0.187/js/transcrypt/phanterpwa.frontend.components.gallery.js',
        '/static/0.6.0.187/js/transcrypt/handlers.conselho_de_classe.js',
        '/static/0.6.0.187/js/transcrypt/handlers.diario_integrado.js',
        '/static/0.6.0.187/js/transcrypt/phanterpwa.frontend.components.top_slide.js',
        '/static/0.6.0.187/js/transcrypt/handlers.registro_de_faltas.js',
        '/static/0.6.0.187/js/transcrypt/handlers.registro_de_aulas.js',
        '/static/0.6.0.187/js/transcrypt/handlers.ficha_avaliativa.js',
        '/static/0.6.0.187/js/transcrypt/handlers.calendarios.js',
        '/static/0.6.0.187/js/transcrypt/handlers.diario_de_notas.js',
        '/static/0.6.0.187/js/transcrypt/handlers.excepcional.js',
        '/static/0.6.0.187/js/transcrypt/handlers.imprimir.js',
        '/static/0.6.0.187/js/transcrypt/handlers.turmas.js',
        '/static/0.6.0.187/js/transcrypt/handlers.administrar_escola.js',
        '/static/0.6.0.187/js/transcrypt/phanterpwa.frontend.components.auth_user.js',
        '/static/0.6.0.187/js/transcrypt/handlers.indicadores_de_desempenho.js',
        '/static/0.6.0.187/js/transcrypt/application.js',
        '/static/0.6.0.187/js/transcrypt/handlers.identificar_servidor.js',
        '/static/0.6.0.187/js/transcrypt/handlers.artigos.js',
        '/static/0.6.0.187/js/transcrypt/application.project',
        '/static/0.6.0.187/json/manifest.json',
        '/static/0.6.0.187/json/manifest.webmanifest',
        '/static/0.6.0.187/lib/codemirror.js',
        '/static/0.6.0.187/lib/codemirror.css',
        '/static/0.6.0.187/webfonts/fa-brands-400.svg',
        '/static/0.6.0.187/webfonts/fa-brands-400.eot',
        '/static/0.6.0.187/webfonts/fa-brands-400.ttf',
        '/static/0.6.0.187/webfonts/fa-brands-400.woff',
        '/static/0.6.0.187/webfonts/fa-brands-400.woff2',
        '/static/0.6.0.187/webfonts/fa-regular-400.eot',
        '/static/0.6.0.187/webfonts/fa-regular-400.ttf',
        '/static/0.6.0.187/webfonts/fa-regular-400.svg',
        '/static/0.6.0.187/webfonts/fa-regular-400.woff',
        '/static/0.6.0.187/webfonts/fa-regular-400.woff2',
        '/static/0.6.0.187/webfonts/fa-solid-900.eot',
        '/static/0.6.0.187/webfonts/fa-solid-900.svg',
        '/static/0.6.0.187/webfonts/fa-solid-900.ttf',
        '/static/0.6.0.187/webfonts/fa-solid-900.woff',
        '/static/0.6.0.187/webfonts/fa-solid-900.woff2',
        '/static/0.6.0.187/mode/python/python.js',
        '/static/0.6.0.187/mode/python/index.html',
        '/static/0.6.0.187/mode/python/test.js',
        '/static/0.6.0.187/xml/browserconfig.xml'
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
            return caches.match('/static/0.6.0.187/images/warning.png');
          });
        }
      }));
  } else {
    if (window.PhanterPWA.DEBUG){
        console.info(event.request.method)
    };
  };
});
