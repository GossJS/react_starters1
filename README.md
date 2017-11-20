# SSR + client routing

yarn run ssr:StaticRouter

и далее на порту 4321 - щелкайте по ссылкам, обновляйте страницы...

Отдаём весь app и делаем hydrate на клиенте.

В этой версии (step3a-material-router-ssr-step4) используется MaterialUI.

Ср. с веткой step3-material-router

Это не просто серверный рендеринг, а ещё и поддержка роутинга.

Сначала в браузере появляется отрендеренный на сервере контент, а затем начинает работать уже клиентская часть. Это важно для SEO.

*Задания*:

 - спроектировать работу серверного роутера не по одному маршруту /* - а по отдельным, которые можно импортировать из  Page.jsx и к которым подключить какое-то API (т.е. реализовать контроллер).

 - спроектировать улучшение девелоперской работы в скриптовой части package.json (возможно npmrunall) для одновременного отслеживания изменений в клиентской и серверной части и оперативного перебилдинга обоих бандлов.

 - обдумать покрытие тестами :-)

 - исследовать, какие изменения может внести во всё сделанное использование redux etc




В файлах PDF для удобства представлена наглядная разница.

git diff --no-index Pageold.jsx Page.jsx | diff2html -s side -i stdin
