const foodData = [
  {
    dish: "京抹茶プリン (1個)",
    categories: ["スイーツ", "入りやすい"],
    restaurant: "私のプリン 桜",
    url: "https://i.gyazo.com/e7d416b9ecf5c1071425aa290e353c18.jpg",
    comment:
      "大阪発のプリン専門店、盛岡は東北第一号店！一般的なプリンと異なりムースのような食感でした。",
    instagram: "https://www.instagram.com/watashinopurin/",
    link: "https://watashinopurin.com/",
    price: 660,
    recommendation: 5,
    twitter: "https://twitter.com/watashinopurin",
    openingHours: {
      月曜日: "",
      火曜日: "11:00〜18:30",
      水曜日: "11:00〜18:30",
      木曜日: "11:00〜18:30",
      金曜日: "11:00〜18:30",
      土曜日: "11:00〜18:30",
      日曜日: "11:00〜18:30",
    },
  },
  {
    dish: "牛スープ温めん",
    categories: ["麺類", "入りやすい"],
    restaurant: "冷麺専門店冷麺ダイニングつるしこ",
    url: "/images/food9.jpg",
    comment:
      "ほろほろとした牛肉と温かいスープに絡んだ麺が美味しい。冬にぜひ",
    instagram: "https://www.instagram.com/reimendiningtsurushiko/",
    link: "https://tsurushiko.jp/",
    price: 1490,
    recommendation: 6,
    twitter: "https://twitter.com/rd_tsurushiko",
    openingHours: {
      月曜日: "11:00〜20:00",
      火曜日: "11:00〜20:00",
      水曜日: "11:00〜20:00",
      木曜日: "11:00〜20:00",
      金曜日: "11:00〜20:00",
      土曜日: "11:00〜20:00",
      日曜日: "11:00〜20:00",
    },
  },
  {
    dish: "じゃじゃ麺(小盛)",
    categories: ["和食", "麺類"],
    restaurant: "白龍",
    url: "https://i.gyazo.com/6e32e23b4bc04dca2033a206ab879941.jpg",
    comment:
      "味付け自体は薄いため、肉みそ・酢・にんにく・ラー油を用いて自分好みの味を見つけましょう。",
    instagram: "",
    link: "https://www.pairon.iwate.jp/",
    price: 450,
    recommendation: 2,
    twitter: "https://twitter.com/officialpairong",
    openingHours: {
      月曜日: "11:00〜21:30",
      火曜日: "11:00〜21:30",
      水曜日: "11:00〜21:30",
      木曜日: "11:00〜21:30",
      金曜日: "11:00〜21:30",
      土曜日: "11:00〜21:30",
      日曜日: "11:00〜21:30",
    },
  },
  {
    dish: "アイスティー",
    categories: ["カフェ","スイーツ","Wifi有"],
    restaurant: "若草文庫",
    url: "https://i.gyazo.com/8ad7423156e13cb7d4e6a2146f117239.jpg",
    comment: "早朝から開店している,おしゃれなカフェ。",
    instagram: "https://www.instagram.com/cafe_wakakusabunko/",
    link: "https://weare-bestcafe.com/wakakusabunko/",
    price: 770,
    recommendation: 8,
    twitter: "",
    openingHours: {
      月曜日: "7:00〜21:00",
      火曜日: "7:00〜21:00",
      水曜日: "7:00〜21:00",
      木曜日: "7:00〜21:00",
      金曜日: "7:00〜21:00",
      土曜日: "7:00〜21:00",
      日曜日: "7:00〜21:00",
    },
  },
  {
    dish: "ランチセットパスタ",
    categories: ["洋食", "麺類","カフェ","スイーツ"],
    restaurant: "銀河堂1890 Sweets&Bakery",
    url: "https://i.gyazo.com/b1ca1eab3ffc293ead654c89f01879b7.jpg",
    comment: "コメント",
    instagram: "https://www.instagram.com/gingado1890/",
    link: "",
    price: 1450,
    recommendation: 5,
    twitter: "",
    openingHours: {
      月曜日: "9:00〜21:30",
      火曜日: "9:00〜21:30",
      水曜日: "9:00〜21:30",
      木曜日: "9:00〜21:30",
      金曜日: "9:00〜21:30",
      土曜日: "9:00〜21:30",
      日曜日: "9:00〜21:30",
    },
  },
  {
    dish: "わらじかつ定食",
    categories: ["和食", "入りやすい"],
    restaurant: "むら八",
    url: "https://i.gyazo.com/d15ae02a8a3efed7e565a7e51ee7f501.jpg",
    comment:
      "1頭の豚から2枚しか取れない岩手県産の厳選された肉を使用した「とんかつ定食」",
    instagram: "https://www.instagram.com/mura_hachi/",
    link: "https://murahachi.co.jp/",
    price: 2068,
    recommendation: 7,
    twitter: "https://twitter.com/katu_murahachi",
    openingHours: {
      月曜日: "11:00〜21:00",
      火曜日: "11:00〜21:00",
      水曜日: "11:00〜21:00",
      木曜日: "11:00〜21:00",
      金曜日: "11:00〜21:00",
      土曜日: "11:00〜21:00",
      日曜日: "11:00〜21:00",
    },
  },
  {
    dish: "スティックチーズケーキ,ホットチョコ",
    categories: ["スイーツ", "カフェ"],
    restaurant: "４番目の珈琲店",
    url: "https://i.gyazo.com/340c39c5dee850b2991b18ecd5f9248f.png",
    comment: "スティックチーズケーキとホットチョコレート",
    instagram: "",
    link: "https://hatayacoffee.com/information/#hataya4nd",
    price: 900,
    recommendation: 5,
    twitter: "",
    openingHours: {
      月曜日: "10:00〜19:00",
      火曜日: "10:00〜19:00",
      水曜日: "10:00〜19:00",
      木曜日: "10:00〜19:00",
      金曜日: "10:00〜19:00",
      土曜日: "10:00〜19:00",
      日曜日: "10:00〜19:00",
    },
  },
  {
    dish: "よくばり天ざる",
    categories: ["和食", "入りやすい", "麺類"],
    restaurant: "えびすそば",
    url: "https://i.gyazo.com/9778bd2ed3c174561e895152047a979d.jpg",
    comment: "気軽に入店できる蕎麦屋さん",
    instagram: "https://www.instagram.com/yebisu_soba/",
    link: "https://yebisu-soba.com/",
    price: 1580,
    recommendation: 6,
    twitter: "https://twitter.com/yebisu_soba",
    openingHours: {
      月曜日: "10:00〜20:30",
      火曜日: "10:00〜20:30",
      水曜日: "10:00〜20:30",
      木曜日: "10:00〜20:30",
      金曜日: "10:00〜20:30",
      土曜日: "10:00〜20:30",
      日曜日: "10:00〜20:30",
    },
  },

  {
    dish: "紅茶",
    categories: ["カフェ", "Wifi有", "充電有"],
    restaurant: "NAGAHAMA COFFEE",
    url: "https://i.gyazo.com/17b6a27d4f51706f62dda218c5e90260.jpg",
    comment: "コメント",
    instagram: "https://www.instagram.com/nagahamacoffee_moriokanishi/",
    link: "http://www.ncafe.co.jp/",
    price: 900,
    recommendation: 5,
    twitter: "https://twitter.com/NagahamaCoffee",
    openingHours: {
      月曜日: "7:00〜18:00",
      火曜日: "7:00〜18:00",
      水曜日: "7:00〜18:00",
      木曜日: "7:00〜18:00",
      金曜日: "7:00〜18:00",
      土曜日: "7:00〜18:00",
      日曜日: "7:00〜18:00",
    },
  },
  {
    dish: "季節のタルト",
    categories: ["カフェ", "充電有"],
    restaurant: "Cafe Bar West38",
    url: "https://i.gyazo.com/dc9ac3e7d893ebc32f1a5cdc033fbdec.jpg",
    comment:
      "さつまいもを使用した季節のタルトとアイスティーのセット。季節のタルト定期的に変わります。",
    instagram: "https://www.instagram.com/p/CjQX4wMNd3w/",
    link: "https://akiyoshi-jazz.com/west38/",
    price: 1100,
    recommendation: 3,
    twitter: "",
    openingHours: {
      月曜日: "10:30〜18:00",
      火曜日: "10:30〜18:00",
      水曜日: "10:30〜18:00",
      木曜日: "10:30〜18:00",
      金曜日: "10:30〜21:30",
      土曜日: "10:30〜21:30",
      日曜日: "10:30〜21:30",
    },
  },
  {
    dish: "寿司",
    categories: ["和食", "海鮮"],
    restaurant: "清次郎",
    url: "https://i.gyazo.com/cd22300a3db30a141b2ba1e80c6294ef.jpg",
    comment: "フェザン店のランチメニュー「日替わり 大漁12貫ランチ」",
    instagram: "",
    link: "http://seijiro.jp/",
    price: 2178,
    recommendation: 7,
    twitter: "https://twitter.com/seijiro1101",
    openingHours: {
      月曜日: "11:00〜21:30",
      火曜日: "11:00〜21:30",
      水曜日: "11:00〜21:30",
      木曜日: "11:00〜21:30",
      金曜日: "11:00〜21:30",
      土曜日: "11:00〜21:30",
      日曜日: "11:00〜21:30",
    },
  },
  {
    dish: "バナナ ピスタチオ",
    categories: ["カフェ"],
    restaurant: "𝐝𝐢𝐠𝐞𝐥𝐚(ディジェーラ)",
    url: "https://i.gyazo.com/72d1c9c61827a73a0aa269d1740518e5.jpg",
    comment: "北上川沿いの木伏に店舗を構えるジェラート店",
    instagram: "https://www.instagram.com/digela_morioka/",
    link: "https://weare-bestcafe.com/wakakusabunko/",
    price: 650,
    recommendation: 4,
    twitter: "",
    openingHours: {
      月曜日: "11:00〜20:00",
      火曜日: "11:00〜20:00",
      水曜日: "11:00〜20:00",
      木曜日: "11:00〜20:00",
      金曜日: "11:00〜20:00",
      土曜日: "11:00〜20:00",
      日曜日: "11:00〜20:00",
    },
  },
  {
    dish: "つけ麺 並盛",
    categories: ["麺類"],
    restaurant: "つけ麺 和",
    url: "https://i.gyazo.com/95a1b976ee6f8adf1d0387a625567388.jpg",
    comment: "麺は2種類の小麦粉を使用し、濃厚なスープと絡んで美味!",
    instagram: "https://www.instagram.com/kazu_morioka.fezan/",
    link: "",
    price: 1200,
    recommendation: 6,
    twitter: "https://twitter.com/kazu_morioka",
    openingHours: {
      月曜日: "11:00〜21:00",
      火曜日: "11:00〜21:00",
      水曜日: "11:00〜21:00",
      木曜日: "11:00〜21:00",
      金曜日: "11:00〜21:00",
      土曜日: "11:00〜21:00",
      日曜日: "11:00〜21:00",
    },
  },
  {
    dish: "ミルクコーヒー バニラと黒ごまアイス",
    categories: ["カフェ", "スイーツ"],
    restaurant: "茶廊 車門",
    url: "https://i.gyazo.com/439357c263e9b2668ee33f0ac3b8fe5f.jpg",
    comment: "レトロな雰囲気のカフェ",
    instagram: "",
    link: "https://www.google.com/search?q=%E8%8C%B6%E5%BB%8A%E8%BB%8A%E9%96%80",
    price: 1010,
    recommendation: 3,
    twitter: "",
    openingHours: {
      月曜日: "11:00〜19:00",
      火曜日: "11:00〜19:00",
      水曜日: "11:00〜19:00",
      木曜日: "11:00〜19:00",
      金曜日: "11:00〜19:00",
      土曜日: "11:00〜19:00",
      日曜日: "11:00〜19:00",
    },
  },
  {
    dish: "わらびもち(5個)",
    categories: ["スイーツ", "入りやすい"],
    restaurant: "甘味処鎌倉",
    url: "https://i.gyazo.com/bf6a42b53622fff047431bceb90e50ae.jpg",
    comment: "わらびドリンクも美味しい。黒蜜は別売り(120円)でした",
    instagram: "https://www.instagram.com/kamakura.cafe/",
    link: "https://www.warabimochi-kamakura.com/",
    price: 820,
    recommendation: 6,
    twitter:
      "https://twitter.com/kamakura_warabi",
      openingHours: {
        月曜日: "10:00〜18:00",
        火曜日: "10:00〜18:00",
        水曜日: "10:00〜18:00",
        木曜日: "10:00〜18:00",
        金曜日: "10:00〜18:00",
        土曜日: "10:00〜18:00",
        日曜日: "10:00〜18:00",
      },
  },
  {
    dish: "選べるプレート",
    categories: ["洋食","スイーツ"],
    restaurant: "みのるダイニング",
    url: "/images/food10.jpg",
    comment: "コメント",
    instagram: "https://www.instagram.com/minoru_junjo/",
    link: "https://www.minoriminoru.jp/morioka",
    price: 1639,
    recommendation: 7,
    twitter:
      "https://twitter.com/minoriminoru_pj",
      openingHours: {
        月曜日: "11:00〜21:30",
        火曜日: "11:00〜21:30",
        水曜日: "11:00〜21:30",
        木曜日: "11:00〜21:30",
        金曜日: "11:00〜21:30",
        土曜日: "11:00〜21:30",
        日曜日: "11:00〜21:30",
      },
  },
  {
    dish: "海鮮ちらし",
    categories: ["和食", "海鮮"],
    restaurant: "磯乃",
    url: "https://i.gyazo.com/29463dd3092c3858e4aa56c9549b4305.jpg",
    comment:
      "新鮮な魚介が美味しい海鮮ちらし、とびっこのぷちぷちした食感がたまりません。",
    instagram: "",
    link: "https://hideyoshi-inc.com/isono/",
    price: 1298,
    recommendation: 5,
    twitter: "",
    openingHours: {
      月曜日: "11:00〜21:30",
      火曜日: "11:00〜21:30",
      水曜日: "11:00〜21:30",
      木曜日: "11:00〜21:30",
      金曜日: "11:00〜21:30",
      土曜日: "11:00〜21:30",
      日曜日: "11:00〜21:30",
    },
  },
]

export default foodData;
