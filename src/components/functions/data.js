import { readonly, ref } from 'vue'
export default () => {
	const skillArr = ref([
		{
			'category': 'Front-end',
			'visible': false,
			'skills': [
				{
					'title': 'Vuejs',
					'icon': 'devicon-vuejs-plain',
					'rating': 4.5,
					'description': 'Vuejsをフロントエンド、Laravelをバックエンドとしたレスポンシブページ開発を経験。'
				},
				{
					'title': 'React',
					'icon': 'devicon-react-original colored',
					'rating': 2,
					'description': 'Youtube(freeCodeCamp)のチュートリアル動画で学習中。'
				},
				{
					'title': 'Electron',
					'icon': 'devicon-electron-original colored',
					'rating': 3.5,
					'description': '自分用のダッシュボードを開発。Vue3を併用。'
				}
			]
		},
		{
			'category': 'Back-end',
			'visible': false,
			'skills': [
				{
					'title': 'Laravel',
					'icon': 'devicon-laravel-plain colored',
					'rating': 4,
					'description': 'LaravelでのAPI開発、Laravelを用いたShopifyアプリの開発を経験。'
				},
				{
					'title': 'Postgres,MySQL,Sqlite',
					'icon': 'devicon-postgresql-plain colored',
					'rating': 3,
					'description': 'Linuxサーバへの導入・テーブル設計等も経験。'
				}
			]
		},
		{
			'category': 'Mobile app',
			'visible': false,
			'skills': [
				{
					'title': 'Flutter',
					'icon': 'devicon-flutter-plain colored',
					'rating': 3.5,
					'description': 'iOS,Android向けアプリ開発～申請までを経験。\n開発・ステージング・本番環境の設定や、Firebaseを用いたプッシュ通知機能作成も可能。'
				},
			]
		},
		{
			'category': 'Server admin',
			'visible': false,
			'skills': [
				{
					'title': 'Linux',
					'icon': 'devicon-linux-plain',
					'rating': 4,
					'description': '基本的なコマンドは問題なく使用可能。DB、WEBサーバ環境の構築やバッジ処理の作成などを経験。'
				},
				{
					'title': 'Apache',
					'icon': 'devicon-apache-plain colored',
					'rating': 2.5,
					'description': 'AliasやVirtual host作成など基本的な設定が可能。'
				},
				{
					'title': 'Vim',
					'icon': 'devicon-vim-plain colored',
					'rating': 4.5,
					'description': 'Configファイルの編集や簡易的なスクリプトを書く際に使用。お気に入りのカラーはMolokai。'
				},
				{
					'title': 'Shell script',
					'icon': 'devicon-bash-plain',
					'rating': 2.5,
					'description': '簡易的なスクリプトを作成可能。'
				},
			]
		}
	])

	const history = ref([
		{
			'year': '2009-2011',
			'title': '陸上自衛隊少年工科学校',
			'description': '一般高校と同程度の教育を受けつつ自衛官としての訓練や教育を受ける'
		},
		{
			'year': '2011-2020',
			'title': '陸上自衛隊仙台駐屯地\n市ヶ谷駐屯地',
			'description': 'IP電話サーバ管理、海外訓練に関する業務を担当。\n業務を通じて「管理」から「開発」に興味を持つ。'
		},
		{
			'year': '2021-',
			'title': '宮城県仙台市のIT企業へ転職',
			'description': 'フロントエンド・バックエンドエンジニアとして勤務中。サーバ管理、Flutterアプリ開発も担当。'
		},
	])

	return {
		skillArr: skillArr,
		history: readonly(history)
	}
}