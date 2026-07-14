const WORD_DATA = [
  {
    id: 1, word: "abandon", difficulty: 1,
    ukPhonetic: "/əˈbændən/", usPhonetic: "/əˈbændən/",
    root: "a- (加强) + bandon (控制/命令) → 放弃控制",
    definitions: [
      { context: "口语/通用", meaning: "放弃，抛弃（某人/某物）" },
      { context: "新闻/正式", meaning: "中止，放弃（计划/活动）" },
      { context: "法律/写作", meaning: "遗弃（权益/索赔）" }
    ],
    examples: [
      { en: "They had to abandon the project due to lack of funding.", zh: "由于缺乏资金，他们不得不放弃该项目。" },
      { en: "The driver abandoned his car on the highway.", zh: "司机把车丢弃在高速公路上。" }
    ]
  },
  {
    id: 2, word: "benefit", difficulty: 1,
    ukPhonetic: "/ˈbenɪfɪt/", usPhonetic: "/ˈbenəfɪt/",
    root: "bene- (好) + fit (做) → 做好事 → 利益",
    definitions: [
      { context: "口语/通用", meaning: "好处，益处" },
      { context: "职场/正式", meaning: "福利，津贴" },
      { context: "新闻/写作", meaning: "得益于（动词用法）" }
    ],
    examples: [
      { en: "Regular exercise has many health benefits.", zh: "定期锻炼对健康有很多好处。" },
      { en: "Employees receive excellent benefits including health insurance.", zh: "员工享受包括医疗保险在内的优厚福利。" }
    ]
  },
  {
    id: 3, word: "contradict", difficulty: 2,
    ukPhonetic: "/ˌkɒntrəˈdɪkt/", usPhonetic: "/ˌkɑːntrəˈdɪkt/",
    root: "contra- (相反) + dict (说) → 说相反的话 → 反驳",
    definitions: [
      { context: "口语/通用", meaning: "反驳，驳斥" },
      { context: "学术/写作", meaning: "与…矛盾，与…抵触" },
      { context: "新闻", meaning: "否认（说法/陈述）" }
    ],
    examples: [
      { en: "His actions contradict his words.", zh: "他的言行自相矛盾。" },
      { en: "The new evidence contradicts the earlier findings.", zh: "新证据与早先的发现相矛盾。" }
    ]
  },
  {
    id: 4, word: "exclude", difficulty: 1,
    ukPhonetic: "/ɪkˈskluːd/", usPhonetic: "/ɪkˈskluːd/",
    root: "ex- (向外) + clude (关闭) → 关在外面 → 排除",
    definitions: [
      { context: "口语/通用", meaning: "排除，不包括" },
      { context: "职场/正式", meaning: "拒绝加入，排斥" },
      { context: "法律/学术", meaning: "排除（可能性）" }
    ],
    examples: [
      { en: "The price excludes tax and delivery fees.", zh: "价格不含税费和运费。" },
      { en: "Children under five are excluded from the competition.", zh: "五岁以下儿童不得参加比赛。" }
    ]
  },
  {
    id: 5, word: "inspire", difficulty: 1,
    ukPhonetic: "/ɪnˈspaɪə(r)/", usPhonetic: "/ɪnˈspaɪər/",
    root: "in- (进入) + spire (呼吸/精神) → 注入精神 → 激励",
    definitions: [
      { context: "口语/通用", meaning: "激励，鼓舞" },
      { context: "艺术/写作", meaning: "赋予灵感" },
      { context: "新闻", meaning: "引起（某种情感/反应）" }
    ],
    examples: [
      { en: "Her teacher inspired her to pursue a career in science.", zh: "她的老师激励她从事科学事业。" },
      { en: "The beautiful landscape inspired his best painting.", zh: "美丽的风景激发了他最好的画作。" }
    ]
  },
  {
    id: 6, word: "predict", difficulty: 1,
    ukPhonetic: "/prɪˈdɪkt/", usPhonetic: "/prɪˈdɪkt/",
    root: "pre- (提前) + dict (说) → 提前说 → 预测",
    definitions: [
      { context: "口语/通用", meaning: "预测，预料" },
      { context: "学术/写作", meaning: "预报，预言" },
      { context: "新闻", meaning: "预计（经济/趋势）" }
    ],
    examples: [
      { en: "Economists predict that inflation will rise next year.", zh: "经济学家预测明年通胀将上升。" },
      { en: "It's hard to predict what will happen in the future.", zh: "很难预测未来会发生什么。" }
    ]
  },
  {
    id: 7, word: "transport", difficulty: 1,
    ukPhonetic: "/ˈtrænspɔːt/", usPhonetic: "/ˈtrænspɔːrt/",
    root: "trans- (跨越) + port (搬运) → 搬运到对面 → 运输",
    definitions: [
      { context: "口语/通用", meaning: "交通，运输系统" },
      { context: "新闻/写作", meaning: "运输（动词），运送" },
      { context: "物流/商务", meaning: "运输业，交通方式" }
    ],
    examples: [
      { en: "Public transport in the city is efficient and affordable.", zh: "这座城市的公共交通高效且实惠。" },
      { en: "The goods were transported by ship to Europe.", zh: "货物通过船舶运输到欧洲。" }
    ]
  },
  {
    id: 8, word: "inevitable", difficulty: 2,
    ukPhonetic: "/ɪnˈevɪtəbl/", usPhonetic: "/ɪnˈevɪtəbl/",
    root: "in- (不) + evit- (避免) + -able (能) → 不可避免的",
    definitions: [
      { context: "口语/通用", meaning: "不可避免的，必然发生的" },
      { context: "新闻/写作", meaning: "（结果/结局）必然的" },
      { context: "学术", meaning: "（逻辑上）必然的" }
    ],
    examples: [
      { en: "Change is inevitable in any organization.", zh: "变革在任何组织中都是不可避免的。" },
      { en: "It was inevitable that they would eventually disagree.", zh: "他们最终产生分歧是不可避免的。" }
    ]
  },
  {
    id: 9, word: "comprehend", difficulty: 2,
    ukPhonetic: "/ˌkɒmprɪˈhend/", usPhonetic: "/ˌkɑːmprɪˈhend/",
    root: "com- (一起) + prehend (抓住) → 一起抓住 → 理解",
    definitions: [
      { context: "学术/正式", meaning: "理解，领悟" },
      { context: "写作", meaning: "包含，包括（正式用法）" }
    ],
    examples: [
      { en: "The child couldn't comprehend the complexity of the problem.", zh: "孩子无法理解这个问题的复杂性。" },
      { en: "It's difficult to comprehend how such a mistake could happen.", zh: "很难理解这样的错误怎么会发生。" }
    ]
  },
  {
    id: 10, word: "distribute", difficulty: 2,
    ukPhonetic: "/dɪˈstrɪbjuːt/", usPhonetic: "/dɪˈstrɪbjuːt/",
    root: "dis- (分开) + tribute (给予) → 分开给予 → 分配",
    definitions: [
      { context: "商务/通用", meaning: "分发，分配" },
      { context: "物流", meaning: "分销，配送" },
      { context: "统计/学术", meaning: "分布" }
    ],
    examples: [
      { en: "The company distributes its products to over 50 countries.", zh: "该公司将产品分销到50多个国家。" },
      { en: "Food was distributed among the refugees.", zh: "食物被分发给了难民。" }
    ]
  }
];

const INITIAL_WORDS_COUNT = 10;

const PASSAGES = [
  {
    id: 1, title: "Why Exercise Matters",
    level: "B2",
    embedWords: [2],
    content: [
      { en: "Regular exercise has many health benefits.", zh: "定期锻炼对健康有很多好处。" },
      { en: "It can help prevent heart disease and improve mental health.", zh: "它有助于预防心脏病并改善心理健康。" },
      { en: "Many people benefit greatly from just 30 minutes of daily activity.", zh: "许多人每天只需30分钟的活动就能受益匪浅。" },
      { en: "Scientists predict that regular exercise can extend your lifespan.", zh: "科学家预测定期锻炼可以延长寿命。" },
      { en: "The benefits are inevitable if you stay consistent.", zh: "如果坚持下去，好处是不可避免的。" }
    ]
  },
  {
    id: 2, title: "Urban Transport",
    level: "B2",
    embedWords: [7, 10],
    content: [
      { en: "Public transport in big cities is constantly improving.", zh: "大城市的公共交通在不断改善。" },
      { en: "Efficient transport systems help reduce traffic congestion.", zh: "高效的交通系统有助于减少交通拥堵。" },
      { en: "Many cities distribute free transport maps to tourists.", zh: "许多城市向游客分发免费的交通地图。" },
      { en: "It is inevitable that more people will use public transport.", zh: "越来越多的人使用公共交通是不可避免的。" },
      { en: "Good transport benefits both the economy and the environment.", zh: "良好的交通对经济和环境都有益。" }
    ]
  }
];
