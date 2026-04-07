# yasuo-dev-portal-mini-public

2026.04.07 公開版

静的ホスティング向けの軽量プロフィール / ポータルテンプレートです。  
発信先、技術情報、試作デモへの導線を1ページにまとめる用途を想定しています。

GitHub Pages などの静的ホスティング環境でそのまま公開でき、`links.js` を主に書き換えるだけで、自分用のミニポータルとして使える構成です。

## Overview

このリポジトリは、以下のような発信先や導線をまとめるための最小構成サイトです。

- note
- Qiita
- Zenn
- X
- GitHub

単なるリンク集ではなく、以下のような用途を想定しています。

- 個人の発信先をまとめるポータル
- プロフィール補助ページ
- ポートフォリオ入口
- 試作デモや制作例への導線
- 案内ページや相談導線のベース

## Files

### `index.html`
ページ全体の骨組みを定義する HTML

### `style.css`
レイアウト、配色、カードUI、レスポンシブ表示などのスタイル定義

### `links.js`
表示文言、Hero 文言、バッジ、What I build の制作例、Where I write のリンク先などを管理する設定ファイル

### `assets/icons/`
favicon や各種サービスアイコン

### `assets/images/`
OGP 画像などの共有用画像

## Main Edit Points

主に編集するのは `links.js` です。

### 変更しやすい項目

- `avatarText`
- `eyebrow`
- `pageTitle`
- `leadTextLines`
- `aboutTextJa`
- `aboutTextEn`
- `footerText`
- `badges`
- `works`
- `links`

### リンク設定

`links` 配列の各要素で、以下を変更できます。

- `className`
- `iconSrc`
- `iconAlt`
- `title`
- `description`
- `url`

### 制作例設定

`works` 配列では、試作デモや制作例を追加できます。

- `className`
- `title`
- `description`
- `url`

## Current Purpose

現時点では、以下の用途を想定しています。

- 個人の発信先を集約する軽量ポータル
- 技術情報と制作例を整理して見せる入口ページ
- 静的サイト構成の試作・検証
- 将来的なテンプレート化のベース

## Publish

静的ファイルのみで構成されているため、以下のような環境でそのまま公開できます。

- GitHub Pages
- Cloudflare Pages
- Netlify
- 静的ホスティング対応サーバー

## Notes

- JavaScript は軽量な設定反映用途を中心に使用
- 構成はできるだけシンプルに維持
- 静的サイトとして軽く動作することを優先
- 将来的には OGP、favicon、問い合わせ導線、実績ページ導線などの追加を想定

## Status

検証・改善を進めながら調整中のサンプルリポジトリです。  
現時点では、発信先リンクに加えて、試作デモや制作例を掲載するミニポータルとして整理を進めています。
