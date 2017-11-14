# react_starters1
gentle introduction to react


Вариант для деплойинга на Хироку

здесь два компонента MaterialUI работают как страницы клиентского роутера

следует обратить внимание на "filename": "./bundle.js" в конфиге веб-пака...

и на "engines": {
    "node": ">=8.5.0"
  }
  
ИТАК

git clone -b step4-heroku-express https://github.com/GossJS/react_starters1.git

rm -rf .git

git init

git add .

git commit -m 'ready to heroku'

heroku create

git push heroku master
