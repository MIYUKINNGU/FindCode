const DataBase = {
    "char":["-", "イ゛", "ウ゛", "エ゛", "オ゛", "ガ", "ギ", "グ", "ゲ", "ゴ", "ザ", "ジ", "ズ", "ゼ", "ゾ", "ダ", "ヂ", "ヅ", "デ", "ド", "ナ゛", "ニ゛", "ヌ゛", "ネ゛", "ノ゛", "バ", "ビ", "ブ", "ボ", "マ゛", "ミ゛", "ム゛", "ィ゛", "あ゛", "い゛", "?", "え゛", "お゛", "が", "ぎ", "ぐ", "げ", "ご", "ざ", "じ", "ず", "ぜ", "ぞ", "だ", "ぢ", "づ", "で", "ど", "な゛", "に゛", "ぬ゛", "ね゛", "の゛", "ば", "び", "ぶ", "べ", "ぼ", "ま゛", "パ", "ピ", "プ", "ポ", "ぱ", "ぴ", "ぷ", "ぺ", "ぽ", "ま゜", "み゜", "文字送り", "自動送り", "も゜", "1行改行", "改行", "終", "文字送り", "主人公の名前", "ライバル名前", "0", "文字送り", "……", "無効", "改ページ", "ポケモン1", "ポケモン2", "パソコン", "わざマシン", "トレーナー", "ロケットだん", "、、゜", "A", "B", "] ：| ,", "HPゲージ0/8", "HPゲージ1/8", "HPゲージ2/8", "HPゲージ3/8", "HPゲージ4/8", "HPゲージ5/8", "HPゲージ6/8", "HPゲージ7/8", "HPゲージ8/8", ",", ",||", ":L", "左とんがり", "ど", "H1", "『", "ID", "No", "…", "━", "￣", "右とんがり", "┏", "＝", "┓", "||", "┗", "┛", "スペース", "ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ホ", "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ", "ラ", "ル", "レ", "ロ", "ワ", "ヲ", "ン", "ッ", "ャ", "ュ", "ョ", "ィ", "あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", " に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "を", "ん", "っ", "ゃ", "ゅ", "ょ", "ー", "ﾟ", "゛", "？", "！", "。", "ァ", "ゥ", "ェ", "白カーソル", "黒カーソル", "▼", "♂", "円", "×", "．", "／", "ォ", "♀", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "検索範囲外",""],
    "pokemon":["けつばん", "サイドン", "ガルーラ", "ニドラン♂", "ピッピ", "オニスズメ", "ビリリダマ", "ニドキング", "ヤドラン", "フシギソウ", "ナッシー", "ベロリンガ", "タマタマ", "ベトベター", "ゲンガー", "ニドラン♀", "ニドクイン", "カラカラ", "サイホーン", "ラプラス", "ウインディ", "ミュウ", "ギャラドス", "シェルダー", "メノクラゲ", "ゴース", "ストライク", "ヒトデマン", "カメックス", "カイロス", "モンジャラ", "け つばん", "けつばん", "ガーディ", "イワーク", "オニドリル", "ポッポ", "ヤドン", "ユンゲラー", "ゴローン", "ラッキー", "ゴーリキー", "バリヤード", "サワムラー", "エビワラー", "アーボック", "パラセクト", "コダック", "スリープ", "ゴローニャ", "けつばん", "ブーバー", "けつばん", "エレブー", "レアコイル", "ドガース", "けつばん", "マンキー", "パウワウ", "ディグダ", "ケンタロス", "けつばん", "けつばん", "けつばん", "カモネギ", "コンパン", "カイリュー", "けつばん", "けつばん", "けつばん", "ドードー", "ニョロモ", "ルージュラ", "ファイヤー", "フリーザー", "サンダー", "メタモン", "ニャース", "クラブ", "けつばん", "けつばん", "けつばん", "ロコン", "キュウコン", "ピカチュウ", "ライチュウ", "けつばん", "けつばん", "ミニリュウ", "ハクリュー", "カブト", "カブトプス", "タッツー", "シードラ", "けつばん", "けつばん", "サンド", "サンドパン", "オムナイト", "オムスター", "プリン", "プクリン", "イーブイ", "ブースター", "サンダース", "シャワーズ", "ワンリキー", "ズバット", "アーボ", "パラス", "ニョロゾ", "ニョロボン", "ビードル", "コクーン", "スピアー", "けつばん", "ドードリオ", "オコリザル", "ダグトリオ", "モルフォン", "ジュゴン", "けつばん", "けつばん", "キャタピー", "トランセル", "バタフリー", "カイリキー", "けつばん", "ゴルダック", "スリーパー", "ゴルバット", "ミュウツー", "カビゴン", "コイキング", "けつばん", "けつばん", "ベトベトン", "けつばん", "キングラー", "パルシェン", "ゆうれい", "マルマイン", "ピクシー", "マタドガス", "ペルシアン", "ガラガラ", "けつばん", "ゴースト", "ケーシィ", "フーディン", "ピジョン", "ピジョット", "スターミー", "フシギダネ", "フシギバナ", "ドククラゲ", "けつばん", "トサキント", "アズマオウ", "けつばん", "けつばん", "けつばん", "けつばん", "ポニータ", "ギャロップ", "コラッタ", "ラッタ", "ニドリーノ", "ニドリーナ", "イシツブテ", "ポリゴン", "プテラ", "けつばん", "コイル", "けつばん", "けつばん", "ヒトカゲ", "ゼニガメ", "リザード", "カメール", "リザードン", "けつばん", "けつばん", "けつばん", "ゆうれい", "ナゾノクサ", "クサイハナ", "ラフレシア", "マダツボミ", "ウツドン", "ウツボット", "バグポケモン", "バグポケモン", "バグポケモン", "バグポケモン", "バグポケモン", "バグポケモン", "バグポケモン", "バグポケモン", "バグポケモン", "バグポケモン", "たんぱんこぞう", "むしとりしょうねん", "ミニスカート", "ふなのり", "ボーイスカウト", "ガールスカウト", "かいじゅうマニア", "りかけいのおとこ", "やまおとこ", "ぼうそうぞく", "かじばどろぼう", "でんきやのおやじ", "ジプシージャグラー", "つりびと", "かいパンやろう", "スキンヘッズ", "ギャンブラー", "おとなのおねえさん", "サイキッカー", "でんきグループ", "ジプシージャグラー", "もうじゅうつかい", "とりつかい", "からておう", "ライバル（序盤）", "オーキドせんせい", "シルフのチーフ", "はぐれけんきゅういん", "サカキ", "ロケットだんいん", "エリートトレーナー♂", "エリートトレーナー♀", "シバ", "タケシ", "カスミ", "マチス", "エリカ", "キョウ", "カツラ", "ナツメ", "ジェントルマン", "ライバル（中盤）", "ライバル（終盤）", "カンナ", "きとうし", "キクコ", "ワタル", "バグトレーナー", "バグトレーナー", "バグトレーナー", "バグトレーナー", "バグトレーナー", "バグトレーナー", "バグトレーナー", "バグトレーナー",
        "検索範囲外",""],
    "skill":["-", "はたく", "からてチョップ", "おうふくビンタ", "れんぞくパンチ", "メガトンパンチ", "ネコにこばん", "ほのおのパンチ", "れいとうパンチ", "かみなりパンチ", "ひっかく", "はさむ", "ハサミギロチン", "かまいたち", "つるぎのまい", "いあいぎり", "かぜおこし", "つばさでうつ", "ふきとばし", "そらをとぶ", "しめつける", "たたきつける", "つるのムチ", "ふみつけ", "にどげり", "メガトンキック", "とびげり", "まわしげり", "すなかけ", "ずつき", "つのでつく", "みだれづき", "つのドリル", "たいあたり", "のしかかり", "まきつく", "とっしん", "あばれる", "すてみタックル", "しっぽをふる", "どくばり", "ダブルニードル", "ミサイルばり", "にらみつける", "かみつく", "なきごえ", "ほえる", "うたう", "ちょうおんぱ", "ソニックブーム", "かなしばり", "ようかいえき", "ひのこ", "かえんほうしゃ", "しろいきり", "みずでっぽう", "ハイドロポンプ", "なみのり", "れいとうビーム", "ふぶき", "サイケこうせん", "バブルこうせん", "オーロラビーム", "はかいこうせん", "つつく", "ドリルくちばし", "じごくぐるま", "けたぐり", "カウンター", "ちきゅうなげ", "かいりき", "すいとる", "メガドレイン", "やどりぎのタネ", "せいちょう", "はっぱカッター", "ソーラービーム", "どくのこな", "しびれごな", "ねむりごな", "はなびらのまい", "いとをはく", "りゅうのいかり", "ほのおのうず", "でんきショック", "１０まんボルト", "でんじは", "かみなり", "いわおとし", "じしん", "じわれ", "あなをほる", "どくどく", "ねんりき", "サイコキネシス", "さいみんじゅつ", "ヨガのポーズ", "こうそくいどう", "でんこうせっか", "いかり", "テレポート", "ナイトヘッド", "ものまね", "いやなおと", "かげぶんしん", "じこさいせい", "かたくなる", "ちいさくなる", "えんまく", "あやしいひかり", "からにこもる", "まるくなる", "バリアー", "ひかりのかべ", "くろいきり", "リフレクター", "きあいだめ", "がまん", "ゆびをふる", "オウムがえし", "じばく", "タマゴばくだん", "したでなめる", "スモッグ", "ヘドロこうげき", "ホネこんぼう", "だいもんじ", "たきのぼり", "からではさむ", "スピードスター", "ロケットずつき", "とげキャノン", "からみつく", "ドわすれ", "スプーンまげ", "タマゴうみ", "とびひざげり", "へびにらみ", "ゆめくい", "どくガス", "たまなげ", "きゅうけつ", "あくまのキッス", "ゴッドバード", "へんしん", "あわ", "ピヨピヨパンチ", "キノコのほうし", "フラッシュ", "サイコウェーブ", "はねる", "とける", "クラブハンマー", "だいばくはつ", "みだれひっかき", "ホネブーメラン", "ねむる", "いわなだれ", "ひっさつまえば", "かくばる", "テクスチャー", "トライアタック", "いかりのまえば", "きりさく", "みがわり", "わるあがき", "バグ技(危険)", "バグ技(危険)", "バグ技(危険)", "バグ技( 危険)", "バグ技(危険)", "バグ技(危険)", "バグ技(危険)", "バグ技(危険)", "バグ技(危険)", "バグ技(危険)", "バグ技(危険)", "バグ技(危険)", "バグ技(危険)", "バグ技(危険)", "バグ技(危険)", "バグ技(危険)", "バグ技(危険)", "バグ技(危険)", "バグ技(危険)", "バグ技(危険)", "バグ技(危険)", "バグ技(危険)", "バグ技(危険)", "バグ技(危険)", "バグ技(危険)", "バグ技(危険)", "バグ技(危険)", "バグ技(危険)", "バグ技(危険)", "バグ技(危険)", "ひでんマシン01", "ひでんマシン02", "ひでんマシン03", "ひでんマシン04", "ひでんマシン05", "わざマシン01", "わざマシン02", "わざマシン03", "わざマシン04", "わざマシン05", "わざマシン06", "わざマシン07", "わざマシン08", "わざマシン09", "わざマシン10", "わざマシン11", "わざマシン12", "わざマシン13", "わざマシン14", "わざマシン15", "わざマシン16", "わざマシン17", "わざマシン18", "わざマシン19", "わざマシン20", "わざマシン21", "わざマシン22", "わざマシン23", "わざマシン24", "わざマシン25", "わざマシン26", "わざマシン27", "わざマシン28", "わざマシン29", "わざマシン30", 
    "わざマシン31", "わざマシン32", "わざマシン33", "わざマシン34", "わざマシン35", "わざマシン36", "わざマシン37", "わざマシン38", "わざマシン39", "わざマシン40", "わざマシン41", "わざマシン42", "わざマシン43", "わざマシン44", "わざマシン45", "わざマシン46", "わざマシン47", "わざマシン48", "わざマシン49", "わざマシン50", "わざマシン51", "わざマシン52", "わざマシン53", "わざマシン54", "わざマシン55",
        "検索範囲外",""],
    "item":["名称・効果不定", "マスターボール", "ハイパーボール", "スーパーボール", "モンスターボール", "タウンマップ", "じてんしゃ", "？？？？？", "サファリボール", "ポケモンずかん", "つきのいし", "どくけし", "やけどなおし", "こおりなおし", "ねむけざまし", "まひなおし", "かいふくのくすり", "まんたんのくすり", "すごいキズぐすり", "いいキズぐすり", "キズぐすり", "グレーバッジ", "ブルーバッジ", "オレンジバッジ", "レインボーバッジ", "ピンクバッジ", "ゴールドバッジ", "クリムゾンバッジ", "グリーンバッジ", "あなぬけのヒモ", "むしよけスプレー", "ひみつのコハク", "ほのおのいし", "かみなりのいし", "みずのいし", "マックスアップ", "タウリン", "ブロムへキシン", "インドメタシン", "リゾチウム", "ふしぎなアメ", "こうらのカセキ", "かいのカセキ", "ひみつのカギ", "？？？？？(効果なし)", "ひきかえけん", "ヨクアタール", "リーフのいし", "カードキー", "きんのたま", "ポイントアップ", "ピッピにんぎょう", "なんでもなおし", "げんきのかけら", "げんきのかたまり", "エフェクトガード", "シルバースプレー", "ゴールドスプレー", "クリティカッター", "コイン", "おいしいみず", "サイコソーダ", "ミックスオレ", "ふねのチケット", "きんのいれば", "プラスパワー", "ディフェンダー", "スピーダー", "スペシャルアップ", "コインケース", "おとどけもの", "ダウジングマシン", "シルフスコープ", "ポケモンのふえ", "エレべータのカギ", "がくしゅうそうち", "ボロのつりざお", "いいつりざお", "すごいつりざお", "ポイントアップ", "ピーピーエイド", "ピーピーリカバー", "ピーピーエイダー", "ピーピーマックス", "ちか２かい", "ちか１かい", "１かい", "２かい", "３かい", "４かい", "５かい", "６かい", "７かい", "８かい", "９かい", "１０かい", "１１かい", "ちか４かい", "かみなりバッヂ", "かいがらバッヂ", "おじぞうバッヂ", "はやぶさバッヂ", "ひんやりバッヂ", "なかよしバッヂ", "バラバッヂ", "ひのたまバッヂ", "ゴールドバッヂ", "たまご", "ひよこ", "ブロンズ", "シルバー", "ゴールド", "プチキャプテン", "キャプテン", "プチマスター", "マスター", "エクセレン……", "0", "ハィあ┓ダ……", "やまぐち", "いしはら", "あﾞＬとギ……", "がちえﾞぼ……", "てへ(自動……", "(文字送り……", "(文字送り……", "(文字送り……", "イﾞぴま", "ジ", "0", "８ゃはとも……", "ノﾞギへガ……", "へ＝ぼぺ４……", "ヌﾞＡごこ……", "あﾞネふ４……", "ゾオﾞぼ８……", "ゾ", "ゾゲぼ８ノ……", "ゾズぼヴノ……", "あﾞドまな……", "ぼオﾞぺノ……", "あﾞ", "へぅぬﾞへ……", "あﾞネﾞむ……", "あﾞざ(改……", "４がわぺ４……", "４べふあﾞ……", "へ４べへゥ……", "へシぼゾづ……", "イﾞ?へ", "ざんねんな……", "ぜ(ライバ……", "べぐヴピみ……", "トレードセンター……", "ョゃこあﾞだ……", "あﾞメてギエﾞ……", "せんとう　アニメ……", "しあいの　ルール……", "おわり", "あﾞアロケッ……", "ぐズガィﾞ２ョゥ", "ナﾞ", "たポケモン……", "ぐバあﾞ", "ゥぴまョあﾞﾞ……", "ぼチへでゾ……", "の４がふ８……", "アカサタナ……", "にゅうりょく", "ヘデＩ┏ゥ ﾟ……", "ねうﾞズノﾞ２……", "ライバル", "のなまえは？", "ニックネームは？", "へ[変化1]Ｖヅ……", "ぐ♂へそエﾞ……", "ぐ▼へそエﾞ……", "じぶんできめる……", "じぶんできめる……", "ペゾ", "ィﾞ５ぉけぐ……", "グリーン", "シゲル", "ジョン", "じぶんできめる", "レッド", "サトシ", "ジャック", "0", "ヅひめあﾞム……", "ヴム９て", "ヴム９て", "イﾞぴま", "ジギ", "0", "イﾞぴま", "ひでんマシン01", "ひでんマシン02", "ひでんマシン03", "ひでんマシン04", "ひでんマシン05", "わざマシ ン01", "わざマシン02", "わざマシン03", "わざマシン04", "わざマシン05", "わざマシン06", "わざマシン07", "わざマシン08", "わざマシン09", "わざマシン10", "わざマシン11", "わざマシン12", "わざマシン13", "わざマシン14", "わざマシン15", "わざマシン16", "わざマシン17", "わざマシン18", "わざマシン19", "わざマシン20", 
    "わざマシン21", "わざマシン22", "わざマシン23", "わざマシン24", "わざマシン25", "わざマシン26", "わざマシン27", "わざマシン28", "わざマシン29", "わざマシン30", "わざマシン31", "わざマシン32", "わざマシン33", "わざマシン34", "わざマシン35", "わざマシン36", "わざマシン37", "わざマシン38", "わざマシン39", "わざマシン40", "わざマシン41", "わざマシン42", "わざマシン43", "わざマシン44", "わざマシン45", "わざマシン46", "わざマシン47", "わざマシン48", "わざマシン49", "わざマシン50", "わざマシン51", "わざマシン52", "わざマシン53", "わざマシン54", "やめる",
        "検索範囲外",""],
    "map":["マサラタウン", "トキワシティ", "ニビシティ", "ハナダシティ", "シオンタウン", "クチバシティ", "タマムシシティ", "セキチクシティ", "グレンタウン", "セキエイこうげん", "ヤマブキシティ", "フリーズ", "1ばんどうろ", "2ばんどうろ", "3ばんどうろ", "4ばんどうろ", "5ばんどうろ", "6ばんどうろ", "7ばんどうろ", "8ばんどうろ", "9ばんどうろ", "10ばんどうろ", "11ばんどうろ", "12ばんどうろ", "13ばんどうろ", "14ばんどうろ", "15ばんどうろ", "16ばんどうろ", "17ばんどうろ", "18ばんどうろ", "19ばんすいどう", "20ばんすいどう", "21ばんすいどう", "22ばんどうろ", "23ばんどうろ", "24ばんどうろ", "25ばんどうろ", "マサラ自宅1階", "マ サラ自宅2階", "マサラライバル宅", "オーキド研究所", "トキワPC", "トキワFS", "トキワ南民家", "トキワ北民家", "トキワジム", "ディグダの穴ニビ側", "トキワの森北ゲート", "2ばんどうろ民家", "2ばんどうろゲート", " トキワの森南ゲート", "トキワの森", "ニビ博物館1階", "ニビ博物館2階", "ニビジム", "ニビ北民家", "ニビFS", "ニビ南民家", "ニビPC", "おつきみやま1階", "おつきみやまＢ1階", "おつきみやまＢ2階", "ハナダ泥棒された 家", "ハナダ中央民家　　　　　　　　　", "ハナダポケセン", "ハナダジム", "ハナダミラクルサイクル", "ハナダFS", "おつきみやまPC", "洞窟BGMのハナダ泥棒された家", "ヤマブキ北ゲート", "ちかつうろ（タテ）北入り口", "そだてやさん", "ヤマブキ南ゲート", "ちかつうろ（タテ）南入り口", "クチバBGMの地下通路南入り口", "ヤマブキ西ゲート", "ちかつうろ（よこ）西ゲート", "タマムシBGMの完全没部屋", "ヤマブキ東ゲート", "ちかつうろ （よこ）東入り口", "イワヤマトンネルPC", "イワヤマトンネルB1階", "むじんはつでんしょ", "11ばんどうろゲート1階", "ディグダの穴クチバ側", "11ばんどうろゲート2階", "12ばんどうろゲートシオン側1階", "みさきのこや （マサキ）", "クチバPC", "クチバだいすきクラブ", "クチバFS", "クチバジム", "クチバ南民家", "サント・アンヌ号船外", "サント・アンヌ号1階", "サント・アンヌ号2階", "サント・アンヌ号1階", "サント・アンヌ号B1階", "サント・アンヌ号デッキ", "サント・アンヌ号キッチン", "サント・アンヌ号船長室", "サント・アンヌ号1階客室", "サント・アンヌ号2階客室", "サント・アンヌ号B1階客室", "フリーズ", "フリーズ", "フリーズ", "チャンピ オンロード1階", "フリーズ", "フリーズ", "フリーズ", "フリーズ", "ポケモンリーグワタルの間", "フリーズ", "フリーズ", "フリーズ", "フリーズ", "殿堂入りの部屋", "ちかつうろ（タテ）", "ポケモンリーグチャンピオン の間", "ちかつうろ（よこ）", "タマムシデパート1階", "タマムシデパート2階", "タマムシデパート3階", "タマムシデパート4階", "タマムシデパート屋上", "タマムシデパートエレベータ　　　", "タマムシマンション1階", " タマムシマンション2階", "タマムシマンション3階", "タマムシマンション屋上", "タマムシマンション屋上部屋", "タマムシPC", "タマムシジム", "タマムシゲームコーナー", "タマムシデパート5階", "タマムシゲームコーナー 交換所", "タマムシ食堂", "タマムシ南民家", "タマムシ旅館", "シオンPC", "シオンポケモンタワー1階", "シオンポケモンタワー2階", "シオンポケモンタワー3階", "シオンポケモンタワー4階", "シオンポケモンタワー5階", " シオンポケモンタワー6階", "シオンポケモンタワー7階", "シオンフジろうじん宅", "シオンFS", "シオン南民家", "セキチクFS", "セキチク南民家", "セキチクPC", "セキチクえんちょう宅", "セキチクサファリ入り口", "セキチクジム", "セキチクサファリいいんかい", "ふたごじまB1階", "ふたごじまB2階", "ふたごじまB3階", "ふたごじまB4階", "クチバつりオヤジ宅", "セキチクつりオヤジ宅", "ポケモンやしき1階", "グレンジム", "グレン研究所入 り口", "グレン研究所応接室", "グレン研究所研究室", "グレン研究所実験室", "グレンPC", "グレンFS", "グレンBGMの没グレンFS", "セキエイ高原PC", 
    "ヤマブキものまね娘宅1階", "ヤマブキものまね娘宅2階", "ヤマブキ格闘 道場", "ヤマブキジム", "ヤマブキ北西民家", "ヤマブキFS", "シルフカンパニー1階", "ヤマブキPC", "ヤマブキエスパー親父宅", "セキチク南ゲート1階", "セキチク南ゲート1階", "サイクリングロード北ゲート1階", "サイクリングロード北ゲート2階", "サイクリングロード民家", "12ばんどうろつりオヤジ宅", "サイクリングロード南ゲート1階", "サイクリングロード南ゲート2階　", "ふたごじま1階", "グレーバッジチェックゲート", "チャンピオンロード2階", "12ばんどうろゲートシオン側2階", "クチバ中央民家", "ディグダの穴内部", "チャンピオンロード3階", "ロケット団アジトB1階", "ロケット団アジトB2階", "ロケット団アジトB3階", "ロケット団アジトB4階", "ロケ ット団アジトエレベータ", "", "アジトBGMのバグ空間", "", "シルフカンパニー2階", "シルフカンパニー3階", "シルフカンパニー4階", "シルフカンパニー5階", "シルフカンパニー6階", "シルフカンパニー7階", "シルフカンパ ニー8階", "ポケモンやしき2階", "ポケモンやしき3階", "ポケモンやしきB1階", "サファリゾーン東", "サファリゾーン北", "サファリゾーン西", "サファリゾーン南", "サファリ南休憩所", "サファリトレジャーハウス", "サフ ァリ西休憩所", "サファリ東休憩所", "サファリ北休憩所", "ハナダななしの洞窟2階", "ハナダななしの洞窟B1階", "ハナダななしの洞窟1階", "シオン姓名判断氏", "ハナダバッジおじさん", "フリーズ", "イワヤマトンネルB2階", "シルフカンパニー9階", "シルフカンパニー10階", "シルフカンパニー11階", "シルフカンパニーエレベータ", "フリーズ", "フリーズ", "通信交換ルーム", "通信対戦ルーム", "フリーズ", "フリーズ", "フリーズ", "フリー ズ", "ポケモンリーグカンナの間", "ポケモンリーグシバの間", "ポケモンリーグキクコの間", "バグ空間", "バグ空間", "バグ空間", "フリーズ", "バグ空間", "バグ空間", "フリーズ", "フリーズ　　",
        "検索範囲外",""],
    "code":["nop", "ld bc nn", "ld (bc) a", "inc bc", "inc b", "dec b", "ld b n", "rlca", "ld (nn),sp", "add hl,bc", "ld a,(bc)", "dec bc", "inc c", "dec c", "ld c,n", "rrca", "stop", "ld de,nn", "ld (de),a", "inc de", "inc d", "dec d", "ld d,n", "rla", "jr n", "add hl,de", "ld a,(de)", "dec de", "inc e", "dec e", "ld e,n", "rra", "jr nz,n", "ld hl,nn", "ldi (hl),a", "inc hl", "inc h", "dec h", "ld h,n", "daa", "jr z,n", "add hl,hl", "ldi a,(hl)", "dec hl", "inc l", "dec l", "ld l,n", "cpl", "jr nc,n", "ld sp,nn", "ldd (hl),a", "inc sp", "inc (hl)", "dec(hl)", "ld (hl),n", "scf", "jr c,n", "add hl,sp", "ldd a,(hl)", "dec sp", "inc a", "dec a", "ld a,n", "ccf", "ld b,b", "ld b.c", "ld b,d", "ld b,e", "ld b,h", "ld b,l", "ld b,(hl)", "ld b,a", "ld c,b", "ld c,c", "ld c,d", "ld c,e", "ld c,h", "ld c,l", "ld c(hl)", "ld c,a", "ld d,b", "ld d,c", "ld d,d", "ld d,e", "ld d,h", "ld d,l", "ld d,(hl)", "ld d,a", "ld e,b", "ld e,c", "ld e,d", "ld e,e", "ld e,h", "ld e,l", "ld e,(hl)", "ld e,a", "ld h,b", "ld h,c", "ld h,d", "ld h,e", "ld h,h", "ld h,l", "ld h,(hl)", "ld h,a", "ld l,b", "ld l,c", "ld l,d", "ld l,e", "ld l,h", "ld l,l", "ld l,(hl)", "ld l,a", "ld (hl),b", "ld (hl),c", "ld (hl),d", "ld (hl),e", "ld (hl),h", "ld (hl),l", "halt", "ld (hl),a", "ld a,b", "ld a,c", "ld a,d", "ld a,e", "ld a,h", "ld a,l", "ld a,(hl)", "ld a,a", "add,b", "add,c", "add,d", "add,e", "add,h", "add,l", "add,(hl)", "add,a", "adc,b", "adc,c", "adc,d", "adc,e", "adc,h", "adc,l", "adc,(hl)", "adc,a", "sub,b", "sub,c", "sub,d", "sub,e", "sub,h", "sub,l", "sub,(hl)", "sub a,a", "sbc,b", "sbc,c", "sbc,d", "sbc,e", "sbc,h", "sbc,l", "sbc,(hl)", "sbc,a", "and,b", "and,c", "and,d", "and,e", "and,h", "and,l", "and,(hl)", "and,a", "xor,b", "xor,c", "xor,d", "xor,e", "xor,h", "xor,l", "xor,(hl)", "xor,a", "or,b", "or,c", "or,d", "or,e", "or,h", "or,l", "or,(hl)", "or,a", "cp,b", "cp,c", "cp,d", "cp,e", "cp,h", "cp,l", "cp,(hl)", "cp,a", "ret nz", "pop bc", "jp nz nn", "jp nn", "call nz nn", "push bc", "add a,n", "rst 0000(call 0000)", "ret z", "ret", "jp z,nn", "2byteP", "call z,nn", "call nn", "adc a,n", "rst 0008(call 0008)", "ret nc", "pop de", "jp nc nn", "undifined opcode", "call nc,nn", "push de", "sub a,n", "rst 10(call 0010)", "ret c", "reti", "jp c,nn", "undifined opcode", "call c,nn", 
    "undifined opcode", "sbc a,n", "rst 18(call 0018)", "ld (ff00+n),a:joypad", "pop hl", "ld (ff00+c),a", "undifined opcode", "undifined opcode", "push hl", "and a,n","rst 20(call 0020)", "add sp,n", "jp hl", "ld (nn),a", "undifined opcode", "undifined opcode", "undifined opcode", "xor a,n", "rst 28(call 0028)", "ld a,(ff00+n):joypad", "pop af", "ld a,(ff00+c)", "di", "undifined opcode", "push af", "or a,n", "rst 30(call 0030)", "ld hl,sp+n", "ld sp,hl", "ld a,(nn)", "ei", "undifined opcode", "undifined opcode", "cp a,n", "rst 38(call 0038)",
        "検索範囲外",""],
    "asmcode":["rlc,b", "rlc,c", "rlc,d", "rlc,e", "rlc,h", "rlc,l", "rlc,(hl)", "rlc,a", "rrc,b", "rrc,c", "rrc,d", "rrc,e", "rrc,h", "rrc,l", "rrc,(hl)", "rrc,a", "rl,b", "rl,c", "rl,d", "rl,e", "rl,h", "rl,l", "rl,(hl)", "rl,a", "rr,b", "rr,c", "rr,d", "rr,e", "rr,h", "rr,l", "rr,(hl)", "rr,a", "sla,b", "sla,c", "sla,d", "sla,e", "sla,h", "sla,l", "sla,(hl)", "sla,a", "sra,b", "sra,c", "sra,d", "sra,e", "sra,h", "sra,l", "sra,(hl)", "sra,a", "swap,b", "swap,c", "swap,d", "swap,e", "swap,h", "swap,l", "swap,(hl)", "swap,a", "srl,b", "srl,c", "srl,d", "srl,e", "srl,h", "srl,l", "srl,(hl)", "srl,a", "bit 0,b", "bit 0,c", "bit 0,d", "bit 0,e", "bit 0,h", "bit 0,l", "bit 0,(hl)", "bit 0,a", "bit 1,b", "bit 1,c", "bit 1,d", "bit 1,e", "bit 1,h", "bit 1,l", "bit 1,(hl)", "bit 1,a", "bit 2,b", "bit 2,c", "bit 2,d", "bit 2,e", "bit 2,h", "bit 2,l", "bit 2,(hl)", "bit 2,a", "bit 3,b", "bit 3,c", "bit 3,d", "bit 3,e", "bit 3,h", "bit 3,l", "bit 3,(hl)", "bit 3,a", "bit 4,b", "bit 4,c", "bit 4,d", "bit 4,e", "bit 4,h", "bit 4,l", "bit 4,(hl)", "bit 4,a", "bit 5,b", "bit 5,c", "bit 5,d", "bit 5,e", "bit 5,h", "bit 5,l", "bit 5,(hl)", "bit 5,a", "bit 6,b", "bit 6,c", "bit 6,d", "bit 6,e", "bit 6,h", "bit 6,l", "bit 6,(hl)", "bit 6,a", "bit 7,b", "bit 7,c", "bit 7,d", "bit 7,e", "bit 7,h", "bit 7,l", "bit 7,(hl)", "bit 7,a", "res 0,b", "res 0,c", "res 0,d", "res 0,e", "res 0,h", "res 0,l", "res 0,(hl)", "res 0,a", "res 1,b", "res 1,c", "res 1,d", "res 1,e", "res 1,h", "res 1,l", "res 1,(hl)", "res 1,a", "res 2,b", "res 2,c", "res 2,d", "res 2,e", "res 2,h", "res 2,l", "res 2,(hl)", "res 2,a", "res 3,b", "res 3,c", "res 3,d", "res 3,e", "res 3,h", "res 3,l", "res 3,(hl)", "res 3,a", "res 4,b", "res 4,c", "res 4,d", "res 4,e", "res 4,h", "res 4,l", "res 4,(hl)", "res 4,a", "res 5,b", "res 5,c", "res 5,d", "res 5,e", "res 5,h", "res 5,l", "res 5,(hl)", "res 5,a", "res 6,b", "res 6,c", "res 6,d", "res 6,e", "res 6,h", "res 6,l", "res 6,(hl)", "res 6,a", "res 7,b", "res 7,c", "res 7,d", "res 7,e", "res 7,h", "res 7,l", "res 7,(hl)", "res 7,a", "set 0,b", "set 0,c", "set 0,d", "set 0,e", "set 0,h", "set 0,l", "set 0,(hl)", "set 0,a", "set 1,b", "set 1,c", "set 1,d", "set 1,e", "set 1,h", "set 1,l", "set 1,(hl)", "set 1,a", "set 2,b", "set 2,c", "set 2,d", "set 2,e", "set 2,h", 
    "set 2,l", "set 2,(hl)", "set 2,a", "set 3,b", "set 3,c", "set 3,d", "set 3,e", "set 3,h", "set 3,l", "set 3,(hl)", "set 3,a", "set 4,b", "set 4,c", "set 4,d", "set 4,e", "set ,h", "set 4,l", "set 4,(hl)", "set 4,a", "set 5,b", "set 5,c", "set 5,d", "set 5,e", "set 5,h", "set 5,l", "set 5,(hl)", "set 5,a", "set 6,b", "set 6,c", "set 6,d", "set 6,e", "set 6,h", "set 6,l", "set 6,(hl)", "set 6,a", "set 7,b", "set 7,c", "set 7,d", "set 7,e", "set 7,h", "set 7,l", "set 7,(hl)", "set 7,a",
        "検索範囲外",""]
}

function A(event) {
    const a = this.id[0]
    let i = 0;
    if (0 <= parseInt(event.target.value, 16) && parseInt(event.target.value, 16) <= 255) i = parseInt(event.target.value, 16);
    else i = 256;
    if ("" == event.target.value) i = 257;
    const CHAR = document.getElementById(a+"Achar");
    const POKEMON = document.getElementById(a+"Apokemon");
    const SKILL = document.getElementById(a+"Askill");
    const ITEM = document.getElementById(a+"Aitem");
    const MAP = document.getElementById(a+"Amap");
    const CODE = document.getElementById(a+"Acode");
    const ASM = document.getElementById(a+"Aasmcode");
    CHAR.innerText = DataBase.char[i];
    POKEMON.innerText = DataBase.pokemon[i];
    SKILL.innerText = DataBase.skill[i];
    ITEM.innerText = DataBase.item[i];
    MAP.innerText = DataBase.map[i];
    CODE.innerText = DataBase.code[i];
    ASM.innerText = DataBase.asmcode[i];
}

function B(event) {
    const a = this.id[0]
    let i = DataBase.char.indexOf(event.target.value)
    if (i==-1) i = 256;
    if ("" == event.target.value) i = 257;
    const NUM = document.getElementById(a+"Bnum");
    const POKEMON = document.getElementById(a+"Bpokemon");
    const SKILL = document.getElementById(a+"Bskill");
    const ITEM = document.getElementById(a+"Bitem");
    const MAP = document.getElementById(a+"Bmap");
    const CODE = document.getElementById(a+"Bcode");
    const ASM = document.getElementById(a+"Basmcode");
    let n = i.toString(16);
    if (n=="100") n = "検索範囲外";
    else if (n=="101") n = "";
    NUM.innerText = n;
    POKEMON.innerText = DataBase.pokemon[i];
    SKILL.innerText = DataBase.skill[i];
    ITEM.innerText = DataBase.item[i];
    MAP.innerText = DataBase.map[i];
    CODE.innerText = DataBase.code[i];
    ASM.innerText = DataBase.asmcode[i];
}

let INPUT = document.getElementById("0NUMINPUT");

let CHARINPUT = document.getElementById("0CHARINPUT");

INPUT.addEventListener("input", A)

CHARINPUT.addEventListener("input", B)

function AddListA() {
    const AA = document.getElementById("A")
    const Length = AA.children.length-1
    AA.insertAdjacentHTML("beforeend", `<tr>
    <td><input type="text" value="" id="${Length}NUMINPUT" placeholder="内部番号を16進数で入力"></td>
    <td id="${Length}Achar"></td>
    <td id="${Length}Apokemon"></td>
    <td id="${Length}Askill"></td>
    <td id="${Length}Aitem"></td>
    <td id="${Length}Amap"></td>
    <td id="${Length}Acode"></td>
    <td id="${Length}Aasmcode"></td>
</tr>`)
    INPUT = document.getElementById(Length+"NUMINPUT");
    INPUT.addEventListener("input", A)
}

function AddListB() {
    const A = document.getElementById("B")
    const Length = A.children.length-1
    A.insertAdjacentHTML("beforeend", `<tr>
    <td><input type="text" value="" id="${Length}CHARINPUT" placeholder="検索文字を入力"></td>
    <td id="${Length}Bnum"></td>
    <td id="${Length}Bpokemon"></td>
    <td id="${Length}Bskill"></td>
    <td id="${Length}Bitem"></td>
    <td id="${Length}Bmap"></td>
    <td id="${Length}Bcode"></td>
    <td id="${Length}Basmcode"></td>
</tr>`)
    CHARINPUT = document.getElementById(Length+"CHARINPUT");
    CHARINPUT.addEventListener("input", B)
}

