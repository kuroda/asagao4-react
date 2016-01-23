# React化の作業手順

## インストール

* `Gemfile` に `gem 'react-rails', '~> 1.5.0'` を追加
* ターミナルで `bundle install`
* ターミナルで `bin/rails g react:install`

## `ArticleForm` コンポーネントの生成

ターミナルで次のコマンドを実行:

```
bin/rails g react:component ArticleForm
```

## `api/articles#show` アクションを作成
