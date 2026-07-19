const WORD_DATA = [
  { id: 1, word: "abandon", difficulty: 1,
    ukPhonetic: "/əˈbændən/", usPhonetic: "/əˈbændən/",
    root: "a- (ad-, 朝向) + bandon (控制/权力) → 置于他人控制之下 → 放弃",
    definitions: [
      { context: "通用", meaning: "放弃，抛弃" },
      { context: "正式", meaning: "中止（计划）" }
    ],
    examples: [
      { en: "They had to abandon the project due to lack of funding.", zh: "由于缺乏资金，他们不得不放弃该项目。" },
      { en: "The driver abandoned his car on the highway.", zh: "司机把车丢弃在高速公路上。" }
    ] },
  { id: 2, word: "benefit", difficulty: 1,
    ukPhonetic: "/ˈbenɪfɪt/", usPhonetic: "/ˈbenəfɪt/",
    root: "bene- (好) + factum (做) → 做得好 → 利益",
    definitions: [
      { context: "通用", meaning: "好处，益处" },
      { context: "职场", meaning: "福利，津贴" }
    ],
    examples: [
      { en: "Regular exercise has many health benefits.", zh: "定期锻炼对健康有很多好处。" },
      { en: "Employees receive excellent benefits including health insurance.", zh: "员工享受包括医疗保险在内的优厚福利。" }
    ] },
  { id: 3, word: "contradict", difficulty: 2,
    ukPhonetic: "/ˌkɒntrəˈdɪkt/", usPhonetic: "/ˌkɑːntrəˈdɪkt/",
    root: "contra- (相反) + dict (说) → 反驳",
    definitions: [
      { context: "通用", meaning: "反驳，驳斥" },
      { context: "学术", meaning: "与…矛盾" }
    ],
    examples: [
      { en: "His actions contradict his words.", zh: "他的言行自相矛盾。" },
      { en: "The new evidence contradicts the earlier findings.", zh: "新证据与早先的发现相矛盾。" }
    ] },
  { id: 4, word: "exclude", difficulty: 1,
    ukPhonetic: "/ɪkˈskluːd/", usPhonetic: "/ɪkˈskluːd/",
    root: "ex- (向外) + clude (关闭) → 排除",
    definitions: [
      { context: "通用", meaning: "排除，不包括" },
      { context: "正式", meaning: "拒绝加入" }
    ],
    examples: [
      { en: "The price excludes tax and delivery fees.", zh: "价格不含税费和运费。" },
      { en: "Children under five are excluded from the competition.", zh: "五岁以下儿童不得参加比赛。" }
    ] },
  { id: 5, word: "inspire", difficulty: 1,
    ukPhonetic: "/ɪnˈspaɪə(r)/", usPhonetic: "/ɪnˈspaɪər/",
    root: "in- (进入) + spire (呼吸) → 注入气息 → 赋予灵感",
    definitions: [
      { context: "通用", meaning: "激励，鼓舞" },
      { context: "艺术", meaning: "赋予灵感" }
    ],
    examples: [
      { en: "Her teacher inspired her to pursue a career in science.", zh: "她的老师激励她从事科学事业。" },
      { en: "The beautiful landscape inspired his best painting.", zh: "美丽的风景激发了他最好的画作。" }
    ] },
  { id: 6, word: "predict", difficulty: 1,
    ukPhonetic: "/prɪˈdɪkt/", usPhonetic: "/prɪˈdɪkt/",
    root: "pre- (提前) + dict (说) → 预测",
    definitions: [
      { context: "通用", meaning: "预测，预料" },
      { context: "学术", meaning: "预报" }
    ],
    examples: [
      { en: "Economists predict that inflation will rise next year.", zh: "经济学家预测明年通胀将上升。" },
      { en: "It's hard to predict what will happen in the future.", zh: "很难预测未来会发生什么。" }
    ] },
  { id: 7, word: "transport", difficulty: 1,
    ukPhonetic: "/ˈtrænspɔːt/", usPhonetic: "/ˈtrænspɔːrt/",
    root: "trans- (跨越) + port (搬运) → 运输",
    definitions: [
      { context: "通用", meaning: "交通，运输" },
      { context: "商务", meaning: "运输业" }
    ],
    examples: [
      { en: "Public transport in the city is efficient and affordable.", zh: "这座城市的公共交通高效且实惠。" },
      { en: "The goods were transported by ship to Europe.", zh: "货物通过船舶运输到欧洲。" }
    ] },
  { id: 8, word: "inevitable", difficulty: 2,
    ukPhonetic: "/ɪnˈevɪtəbl/", usPhonetic: "/ɪnˈevɪtəbl/",
    root: "in- (不) + evit- (避免) + -able → 不可避免的",
    definitions: [
      { context: "通用", meaning: "不可避免的" },
      { context: "写作", meaning: "必然的" }
    ],
    examples: [
      { en: "Change is inevitable in any organization.", zh: "变革在任何组织中都是不可避免的。" },
      { en: "It was inevitable that they would eventually disagree.", zh: "他们最终产生分歧是不可避免的。" }
    ] },
  { id: 9, word: "comprehend", difficulty: 2,
    ukPhonetic: "/ˌkɒmprɪˈhend/", usPhonetic: "/ˌkɑːmprɪˈhend/",
    root: "com- (完全) + prehend (抓住) → 完全掌握 → 理解",
    definitions: [
      { context: "学术", meaning: "理解，领悟" }
    ],
    examples: [
      { en: "The child couldn't comprehend the complexity of the problem.", zh: "孩子无法理解这个问题的复杂性。" },
      { en: "It's difficult to comprehend how such a mistake could happen.", zh: "很难理解这样的错误怎么会发生。" }
    ] },
  { id: 10, word: "distribute", difficulty: 2,
    ukPhonetic: "/dɪˈstrɪbjuːt/", usPhonetic: "/dɪˈstrɪbjuːt/",
    root: "dis- (分开) + tribute (给予) → 分配",
    definitions: [
      { context: "商务", meaning: "分发，分配" },
      { context: "统计", meaning: "分布" }
    ],
    examples: [
      { en: "The company distributes its products to over 50 countries.", zh: "该公司将产品分销到50多个国家。" },
      { en: "Food was distributed among the refugees.", zh: "食物被分发给了难民。" }
    ] },
  { id: 11, word: "analyze", difficulty: 2,
    ukPhonetic: "/ˈænəlaɪz/", usPhonetic: "/ˈænəlaɪz/",
    root: "ana- (贯穿) + lysis (解开) → 彻底解开 → 分析",
    definitions: [
      { context: "学术", meaning: "分析，解析" }
    ],
    examples: [
      { en: "Scientists analyzed the data carefully before drawing conclusions.", zh: "科学家在下结论之前仔细分析了数据。" },
      { en: "The report analyzes the impact of climate change on agriculture.", zh: "这份报告分析了气候变化对农业的影响。" }
    ] },
  { id: 12, word: "contribute", difficulty: 1,
    ukPhonetic: "/kənˈtrɪbjuːt/", usPhonetic: "/kənˈtrɪbjuːt/",
    root: "con- (一起) + tribute (给予) → 贡献",
    definitions: [
      { context: "通用", meaning: "贡献，捐献" },
      { context: "职场", meaning: "促成，导致" }
    ],
    examples: [
      { en: "Everyone should contribute to protecting the environment.", zh: "每个人都应该为保护环境做出贡献。" },
      { en: "Several factors contributed to the company's success.", zh: "多个因素促成了公司的成功。" }
    ] },
  { id: 13, word: "demonstrate", difficulty: 2,
    ukPhonetic: "/ˈdemənstreɪt/", usPhonetic: "/ˈdemənstreɪt/",
    root: "de- (完全) + monstrate (展示) → 充分展示",
    definitions: [
      { context: "学术", meaning: "证明，论证" },
      { context: "通用", meaning: "演示，示范" }
    ],
    examples: [
      { en: "The experiment demonstrates the theory of gravity.", zh: "这个实验证明了万有引力理论。" },
      { en: "He demonstrated how to use the new software.", zh: "他演示了如何使用新软件。" }
    ] },
  { id: 14, word: "environment", difficulty: 1,
    ukPhonetic: "/ɪnˈvaɪrənmənt/", usPhonetic: "/ɪnˈvaɪrənmənt/",
    root: "environ (围绕) + ment (名词) → 周围环境",
    definitions: [
      { context: "通用", meaning: "环境" },
      { context: "生态", meaning: "自然环境" }
    ],
    examples: [
      { en: "We need to protect the environment for future generations.", zh: "我们需要为子孙后代保护环境。" },
      { en: "The school provides a supportive learning environment.", zh: "这所学校提供了一个支持性的学习环境。" }
    ] },
  { id: 15, word: "establish", difficulty: 2,
    ukPhonetic: "/ɪˈstæblɪʃ/", usPhonetic: "/ɪˈstæblɪʃ/",
    root: "e- (出) + stabilish (使稳固) → 建立",
    definitions: [
      { context: "通用", meaning: "建立，创立" },
      { context: "学术", meaning: "确立，证实" }
    ],
    examples: [
      { en: "The company was established in 1995.", zh: "这家公司成立于1995年。" },
      { en: "Scientists have established a link between diet and health.", zh: "科学家已经确定了饮食与健康之间的联系。" }
    ] },
  { id: 16, word: "evaluate", difficulty: 2,
    ukPhonetic: "/ɪˈvæljueɪt/", usPhonetic: "/ɪˈvæljueɪt/",
    root: "e- (出) + val (价值) + -ate → 评出价值 → 评估",
    definitions: [
      { context: "学术", meaning: "评估，评价" },
      { context: "职场", meaning: "考核" }
    ],
    examples: [
      { en: "Teachers evaluate students' performance through various assessments.", zh: "老师通过多种评估方式来评价学生的表现。" },
      { en: "We need to evaluate the risks before making a decision.", zh: "在做决定之前我们需要评估风险。" }
    ] },
  { id: 17, word: "evidence", difficulty: 1,
    ukPhonetic: "/ˈevɪdəns/", usPhonetic: "/ˈevɪdəns/",
    root: "e- (出) + vid (看) + -ence → 看得见的东西 → 证据",
    definitions: [
      { context: "学术", meaning: "证据，迹象" }
    ],
    examples: [
      { en: "There is strong evidence that exercise improves mental health.", zh: "有强有力的证据表明运动能改善心理健康。" },
      { en: "The police found evidence linking him to the crime.", zh: "警方找到了将他与犯罪联系起来的证据。" }
    ] },
  { id: 18, word: "global", difficulty: 1,
    ukPhonetic: "/ˈɡləʊbl/", usPhonetic: "/ˈɡloʊbl/",
    root: "glob (球) + -al (形容词) → 全球的",
    definitions: [
      { context: "通用", meaning: "全球的" },
      { context: "学术", meaning: "全面的，整体的" }
    ],
    examples: [
      { en: "Global warming is one of the most serious issues we face.", zh: "全球变暖是我们面临的最严峻的问题之一。" },
      { en: "The company has a global presence in over 50 countries.", zh: "该公司在全球50多个国家都有业务。" }
    ] },
  { id: 19, word: "impact", difficulty: 1,
    ukPhonetic: "/ˈɪmpækt/", usPhonetic: "/ˈɪmpækt/",
    root: "im- (向内) + pact (撞击) → 冲击",
    definitions: [
      { context: "通用", meaning: "影响，冲击" },
      { context: "学术", meaning: "影响（程度）" }
    ],
    examples: [
      { en: "The new policy had a significant impact on the economy.", zh: "新政策对经济产生了重大影响。" },
      { en: "Technology has transformed the impact of education worldwide.", zh: "技术改变了全球教育的影响力。" }
    ] },
  { id: 20, word: "individual", difficulty: 1,
    ukPhonetic: "/ˌɪndɪˈvɪdʒuəl/", usPhonetic: "/ˌɪndɪˈvɪdʒuəl/",
    root: "in- (不) + divid (分割) + -ual → 不可分割的 → 个体",
    definitions: [
      { context: "通用", meaning: "个人的，个体的" },
      { context: "职场", meaning: "个人（名词）" }
    ],
    examples: [
      { en: "Each individual has their own unique talents.", zh: "每个人都有自己的独特才能。" },
      { en: "The course is designed for individual learning needs.", zh: "这门课程是为个人学习需求设计的。" }
    ] },
  { id: 21, word: "interpret", difficulty: 2,
    ukPhonetic: "/ɪnˈtɜːprɪt/", usPhonetic: "/ɪnˈtɜːrprɪt/",
    root: "inter- (在...之间) + pret (传达) → 在中间传达 → 解释",
    definitions: [
      { context: "学术", meaning: "解释，解读" },
      { context: "职场", meaning: "口译" }
    ],
    examples: [
      { en: "It's important to interpret the data correctly.", zh: "正确解读数据非常重要。" },
      { en: "She interpreted the speech for foreign guests.", zh: "她为外宾做了口译。" }
    ] },
  { id: 22, word: "maintain", difficulty: 1,
    ukPhonetic: "/meɪnˈteɪn/", usPhonetic: "/meɪnˈteɪn/",
    root: "main (手) + tain (保持) → 握在手中 → 维持",
    definitions: [
      { context: "通用", meaning: "维持，保持" },
      { context: "职场", meaning: "维护，保养" }
    ],
    examples: [
      { en: "It's important to maintain a healthy lifestyle.", zh: "保持健康的生活方式很重要。" },
      { en: "The company maintains high standards of quality.", zh: "这家公司保持着高质量标准。" }
    ] },
  { id: 23, word: "occur", difficulty: 2,
    ukPhonetic: "/əˈkɜː(r)/", usPhonetic: "/əˈkɜːr/",
    root: "oc- (朝向) + cur (跑) → 跑向 → 发生",
    definitions: [
      { context: "通用", meaning: "发生" },
      { context: "学术", meaning: "出现，存在" }
    ],
    examples: [
      { en: "The accident occurred late at night.", zh: "事故发生在深夜。" },
      { en: "A new idea occurred to me while reading the article.", zh: "读这篇文章时我想到了一个新主意。" }
    ] },
  { id: 24, word: "participate", difficulty: 1,
    ukPhonetic: "/pɑːˈtɪsɪpeɪt/", usPhonetic: "/pɑːrˈtɪsɪpeɪt/",
    root: "part (部分) + cip (拿) + -ate → 拿一份 → 参与",
    definitions: [
      { context: "通用", meaning: "参与，参加" }
    ],
    examples: [
      { en: "Students are encouraged to participate in class discussions.", zh: "鼓励学生参与课堂讨论。" },
      { en: "Twenty countries participated in the international conference.", zh: "二十个国家参加了这次国际会议。" }
    ] },
  { id: 25, word: "significant", difficulty: 1,
    ukPhonetic: "/sɪɡˈnɪfɪkənt/", usPhonetic: "/sɪɡˈnɪfɪkənt/",
    root: "sign (标记) + fic (做) + -ant → 做出标记 → 重要的",
    definitions: [
      { context: "通用", meaning: "重要的，显著的" },
      { context: "学术", meaning: "有意义的" }
    ],
    examples: [
      { en: "There has been a significant increase in sales this year.", zh: "今年销售额有了显著增长。" },
      { en: "This is a significant achievement for the team.", zh: "这对团队来说是一项重大成就。" }
    ] },
  { id: 26, word: "approximately", difficulty: 2,
    ukPhonetic: "/əˈprɒksɪmətli/", usPhonetic: "/əˈprɑːksɪmətli/",
    root: "ad- (朝向) + proxim (最近) + -ate + -ly → 大约",
    definitions: [
      { context: "学术", meaning: "大约，近似地" }
    ],
    examples: [
      { en: "The project will take approximately six months to complete.", zh: "这个项目大约需要六个月完成。" },
      { en: "Approximately 200 people attended the conference.", zh: "大约有200人参加了会议。" }
    ] },
  { id: 27, word: "consequence", difficulty: 2,
    ukPhonetic: "/ˈkɒnsɪkwəns/", usPhonetic: "/ˈkɑːnsɪkwens/",
    root: "con- (一起) + sequ (跟随) + -ence → 跟随其后 → 后果",
    definitions: [
      { context: "学术", meaning: "结果，后果" }
    ],
    examples: [
      { en: "Every action has consequences.", zh: "每个行动都有后果。" },
      { en: "The consequence of pollution is damage to our health.", zh: "污染的后果是损害我们的健康。" }
    ] },
  { id: 28, word: "eliminate", difficulty: 2,
    ukPhonetic: "/ɪˈlɪmɪneɪt/", usPhonetic: "/ɪˈlɪmɪneɪt/",
    root: "e- (出) + limen (门槛) + -ate → 赶出门槛 → 消除",
    definitions: [
      { context: "通用", meaning: "消除，消灭" },
      { context: "职场", meaning: "淘汰" }
    ],
    examples: [
      { en: "We need to eliminate waste to reduce costs.", zh: "我们需要消除浪费以降低成本。" },
      { en: "He was eliminated in the first round of the competition.", zh: "他在第一轮比赛就被淘汰了。" }
    ] },
  { id: 29, word: "identify", difficulty: 1,
    ukPhonetic: "/aɪˈdentɪfaɪ/", usPhonetic: "/aɪˈdentɪfaɪ/",
    root: "idem (相同) + fy (使成为) → 确认相同 → 识别",
    definitions: [
      { context: "通用", meaning: "确认，识别" },
      { context: "学术", meaning: "发现，找出" }
    ],
    examples: [
      { en: "Police have identified the suspect.", zh: "警方已经确认了嫌疑人。" },
      { en: "Researchers identified a link between sleep and memory.", zh: "研究人员发现了睡眠和记忆之间的联系。" }
    ] },
  { id: 30, word: "migrate", difficulty: 2,
    ukPhonetic: "/maɪˈɡreɪt/", usPhonetic: "/ˈmaɪɡreɪt/",
    root: "migr (移动) + -ate → 迁移",
    definitions: [
      { context: "通用", meaning: "迁移，移居" },
      { context: "自然", meaning: "（鸟类等）迁徙" }
    ],
    examples: [
      { en: "Many birds migrate south for the winter.", zh: "许多鸟类冬天迁徙到南方。" },
      { en: "People migrate to cities in search of better opportunities.", zh: "人们迁移到城市寻找更好的机会。" }
    ] },
  { id: 31, word: "option", difficulty: 1,
    ukPhonetic: "/ˈɒpʃn/", usPhonetic: "/ˈɑːpʃn/",
    root: "opt (选择) + -ion → 选择，选项",
    definitions: [
      { context: "通用", meaning: "选择，选项" }
    ],
    examples: [
      { en: "We have several options to choose from.", zh: "我们有多个选项可供选择。" },
      { en: "Students have the option to study abroad.", zh: "学生有出国留学的选择。" }
    ] },
  { id: 32, word: "positive", difficulty: 1,
    ukPhonetic: "/ˈpɒzətɪv/", usPhonetic: "/ˈpɑːzətɪv/",
    root: "posit (放置) + -ive → 摆好的 → 积极的",
    definitions: [
      { context: "通用", meaning: "积极的，正面的" },
      { context: "学术", meaning: "肯定的" }
    ],
    examples: [
      { en: "Try to stay positive even in difficult situations.", zh: "即使在困难的情况下也要保持积极。" },
      { en: "The feedback from customers was very positive.", zh: "来自客户的反馈非常正面。" }
    ] },
  { id: 33, word: "previous", difficulty: 1,
    ukPhonetic: "/ˈpriːviəs/", usPhonetic: "/ˈpriːviəs/",
    root: "pre- (在前) + via (路) + -ous → 走在前面 → 之前的",
    definitions: [
      { context: "通用", meaning: "之前的，先前的" }
    ],
    examples: [
      { en: "I had no previous experience in teaching.", zh: "我之前没有教学经验。" },
      { en: "The previous chapter discussed climate change.", zh: "前一章讨论了气候变化。" }
    ] },
  { id: 34, word: "process", difficulty: 1,
    ukPhonetic: "/ˈprəʊses/", usPhonetic: "/ˈprɑːses/",
    root: "pro- (向前) + cess (走) → 向前走 → 过程",
    definitions: [
      { context: "通用", meaning: "过程，流程" },
      { context: "职场", meaning: "处理（动词）" }
    ],
    examples: [
      { en: "Learning a language is a gradual process.", zh: "学习语言是一个渐进的过程。" },
      { en: "The application will be processed within two weeks.", zh: "申请将在两周内处理。" }
    ] },
  { id: 35, word: "require", difficulty: 1,
    ukPhonetic: "/rɪˈkwaɪə(r)/", usPhonetic: "/rɪˈkwaɪər/",
    root: "re- (再) + quire (询问/寻求) → 反复寻求 → 需要",
    definitions: [
      { context: "通用", meaning: "需要，要求" }
    ],
    examples: [
      { en: "This job requires strong communication skills.", zh: "这份工作需要很强的沟通能力。" },
      { en: "All students are required to attend the meeting.", zh: "所有学生都必须参加会议。" }
    ] },
  { id: 36, word: "respond", difficulty: 1,
    ukPhonetic: "/rɪˈspɒnd/", usPhonetic: "/rɪˈspɑːnd/",
    root: "re- (回) + spond (承诺) → 回应承诺 → 回应",
    definitions: [
      { context: "通用", meaning: "回应，回答" },
      { context: "职场", meaning: "响应" }
    ],
    examples: [
      { en: "Please respond to the email by Friday.", zh: "请在周五之前回复邮件。" },
      { en: "The company responded quickly to customer complaints.", zh: "公司迅速回应了客户的投诉。" }
    ] },
  { id: 37, word: "strategy", difficulty: 2,
    ukPhonetic: "/ˈstrætədʒi/", usPhonetic: "/ˈstrætədʒi/",
    root: "stratos (军队) + ag (领导) + -y → 领导军队的方法 → 策略",
    definitions: [
      { context: "职场", meaning: "策略，战略" }
    ],
    examples: [
      { en: "The company developed a new marketing strategy.", zh: "公司制定了一项新的营销策略。" },
      { en: "A good study strategy can help you improve your IELTS score.", zh: "一个好的学习策略可以帮助你提高雅思成绩。" }
    ] },
  { id: 38, word: "sufficient", difficulty: 2,
    ukPhonetic: "/səˈfɪʃnt/", usPhonetic: "/səˈfɪʃnt/",
    root: "sub- (在...之下) + fic (做) + -ient → 在下面做好 → 足够的",
    definitions: [
      { context: "通用", meaning: "足够的，充分的" }
    ],
    examples: [
      { en: "We have sufficient evidence to support the argument.", zh: "我们有足够的证据支持这个论点。" },
      { en: "Make sure you get sufficient sleep before the exam.", zh: "考试前确保有充足的睡眠。" }
    ] },
  { id: 39, word: "vary", difficulty: 1,
    ukPhonetic: "/ˈveəri/", usPhonetic: "/ˈveri/",
    root: "var (变化) + -y → 变化，不同",
    definitions: [
      { context: "通用", meaning: "变化，不同" },
      { context: "学术", meaning: "随...而变化" }
    ],
    examples: [
      { en: "Prices vary depending on the season.", zh: "价格随季节而变化。" },
      { en: "Opinions on this issue vary from person to person.", zh: "对这个问题的看法因人而异。" }
    ] },
  { id: 40, word: "achieve", difficulty: 1,
    ukPhonetic: "/əˈtʃiːv/", usPhonetic: "/əˈtʃiːv/",
    root: "a- (到) + chief (头/终点) → 到达终点 → 达成",
    definitions: [
      { context: "通用", meaning: "实现，达到" },
      { context: "职场", meaning: "取得（成就）" }
    ],
    examples: [
      { en: "She achieved her goal of scoring Band 8 in IELTS.", zh: "她实现了雅思8分的目标。" },
      { en: "The company achieved record profits this year.", zh: "公司今年取得了创纪录的利润。" }
    ] }
];

const PASSAGES = [
  { id: 1, title: "Why Exercise Matters", level: "B2",
    embedWords: [2],
    content: [
      { en: "Regular exercise has many health benefits.", zh: "定期锻炼对健康有很多好处。" },
      { en: "It can help prevent heart disease and improve mental health.", zh: "它有助于预防心脏病并改善心理健康。" },
      { en: "Many people benefit greatly from just 30 minutes of daily activity.", zh: "许多人每天只需30分钟的活动就能受益匪浅。" },
      { en: "Scientists predict that regular exercise can extend your lifespan.", zh: "科学家预测定期锻炼可以延长寿命。" },
      { en: "The benefits are inevitable if you stay consistent.", zh: "如果坚持下去，好处是不可避免的。" }
    ] },
  { id: 2, title: "Urban Transport", level: "B2",
    embedWords: [7, 10],
    content: [
      { en: "Public transport in big cities is constantly improving.", zh: "大城市的公共交通在不断改善。" },
      { en: "Efficient transport systems help reduce traffic congestion.", zh: "高效的交通系统有助于减少交通拥堵。" },
      { en: "Many cities distribute free transport maps to tourists.", zh: "许多城市向游客分发免费的交通地图。" },
      { en: "It is inevitable that more people will use public transport.", zh: "越来越多的人使用公共交通是不可避免的。" },
      { en: "Good transport benefits both the economy and the environment.", zh: "良好的交通对经济和环境都有益。" }
    ] },
  { id: 3, title: "Climate Change", level: "B2",
    embedWords: [6, 8, 14, 27],
    content: [
      { en: "Climate change is one of the biggest challenges we face today.", zh: "气候变化是我们当今面临的最大挑战之一。" },
      { en: "Scientists predict that global temperatures will continue to rise.", zh: "科学家预测全球气温将继续上升。" },
      { en: "Many countries are working together to reduce carbon emissions.", zh: "许多国家正在共同努力减少碳排放。" },
      { en: "It is inevitable that we must change our energy sources.", zh: "我们不可避免地必须改变能源来源。" },
      { en: "Renewable energy like solar and wind power is becoming more affordable.", zh: "太阳能和风能等可再生能源变得越来越实惠。" },
      { en: "Individuals can also make small changes to help the environment.", zh: "个人也可以做出小改变来帮助环境。" },
      { en: "For example, using public transport instead of private cars.", zh: "例如，使用公共交通代替私家车。" },
      { en: "If we take action now, future generations will benefit greatly.", zh: "如果我们现在就采取行动，后代将大大受益。" }
    ] },
  { id: 4, title: "Lifelong Learning", level: "B2",
    embedWords: [5, 1, 9, 15, 34],
    content: [
      { en: "Learning does not stop when you leave school.", zh: "离开学校后学习并不会停止。" },
      { en: "Lifelong learning is essential in today's rapidly changing world.", zh: "终身学习在当今快速变化的世界中至关重要。" },
      { en: "Many people are inspired to learn new skills later in life.", zh: "许多人受到启发在晚年学习新技能。" },
      { en: "Online courses make it easier to access knowledge anytime.", zh: "在线课程使随时获取知识变得更加容易。" },
      { en: "Some adults feel they must abandon old habits to make room for learning.", zh: "一些成年人觉得必须放弃旧习惯来为学习腾出空间。" },
      { en: "It takes time to fully comprehend complex subjects.", zh: "充分理解复杂的科目需要时间。" },
      { en: "However, the effort is worth it for personal growth.", zh: "然而，为了个人成长，这种努力是值得的。" },
      { en: "People who keep learning tend to have more fulfilling careers.", zh: "持续学习的人往往拥有更充实的职业生涯。" },
      { en: "In the end, education benefits everyone, regardless of age.", zh: "归根结底，教育使每个人受益，无论年龄大小。" }
    ] },
  { id: 5, title: "Technology & Communication", level: "B2",
    embedWords: [9, 2, 19, 21],
    content: [
      { en: "Technology has changed the way we communicate with each other.", zh: "技术改变了我们彼此沟通的方式。" },
      { en: "Social media allows us to stay connected with friends across the world.", zh: "社交媒体让我们与世界各地的朋友保持联系。" },
      { en: "However, some people feel that online communication lacks depth.", zh: "然而，有些人觉得在线交流缺乏深度。" },
      { en: "It is hard to fully comprehend emotions through text messages alone.", zh: "仅通过短信很难完全理解情感。" },
      { en: "Young people often contradict their parents' views on technology.", zh: "年轻人常常反驳父母对技术的看法。" },
      { en: "Despite these challenges, technology brings many benefits to communication.", zh: "尽管有这些挑战，技术给沟通带来了许多好处。" },
      { en: "Video calls make it possible to see loved ones from a distance.", zh: "视频通话让人们能见到远方的亲人。" },
      { en: "The key is to find a balance between online and offline interaction.", zh: "关键是在线上和线下互动之间找到平衡。" }
    ] },
  { id: 6, title: "Choosing a Career Path", level: "B2",
    embedWords: [5, 1],
    content: [
      { en: "Choosing a career path is one of the most important decisions in life.", zh: "选择职业道路是人生中最重要的决定之一。" },
      { en: "Many young people feel pressure to choose a stable profession.", zh: "许多年轻人感到要选择稳定职业的压力。" },
      { en: "Parents often want their children to become doctors or lawyers.", zh: "父母通常希望孩子成为医生或律师。" },
      { en: "However, following your passion can lead to greater satisfaction.", zh: "然而，追随自己的热情可以带来更大的满足感。" },
      { en: "My teacher inspired me to pursue a career in education.", zh: "我的老师激励我从事教育事业。" },
      { en: "Some people abandon their dream jobs because of financial concerns.", zh: "有些人因为经济顾虑而放弃了梦想的工作。" },
      { en: "But doing what you love can benefit both your happiness and performance.", zh: "但做你喜欢的事情既有利于幸福感也有利于表现。" },
      { en: "In the end, the best career is one that matches your skills and values.", zh: "归根结底，最好的职业是符合你技能和价值观的那个。" }
    ] },
  { id: 7, title: "Healthy Eating Habits", level: "B1",
    embedWords: [2, 4],
    content: [
      { en: "A balanced diet is essential for maintaining good health.", zh: "均衡饮食对保持健康至关重要。" },
      { en: "Many people benefit from eating more fruits and vegetables.", zh: "许多人从多吃水果和蔬菜中受益。" },
      { en: "Experts advise excluding processed foods from your daily diet.", zh: "专家建议将加工食品排除在日常饮食之外。" },
      { en: "It can be difficult to abandon the habit of eating junk food.", zh: "放弃吃垃圾食品的习惯可能很困难。" },
      { en: "Cooking at home is a great way to control what you eat.", zh: "在家做饭是控制饮食的好方法。" },
      { en: "Drinking enough water is also important for your body.", zh: "喝足够的水对你的身体也很重要。" },
      { en: "Small changes in your diet can lead to big health improvements.", zh: "饮食上的小改变可以带来健康的大改善。" },
      { en: "The key is to be consistent and not give up after a few days.", zh: "关键是要坚持，不要几天后就放弃。" }
    ] },
  { id: 8, title: "Teamwork & Success", level: "B2",
    embedWords: [12, 13, 24, 25],
    content: [
      { en: "Teamwork is essential for success in any organization.", zh: "团队合作在任何组织中都是成功的关键。" },
      { en: "Each individual contributes their unique skills to the team.", zh: "每个个体都贡献自己独特的技能给团队。" },
      { en: "Studies demonstrate that diverse teams perform better.", zh: "研究表明多元化的团队表现更好。" },
      { en: "It is important to participate actively in group discussions.", zh: "积极参与小组讨论非常重要。" },
      { en: "Team members must maintain good communication at all times.", zh: "团队成员必须始终保持良好的沟通。" },
      { en: "A positive attitude can make a significant difference in teamwork.", zh: "积极的态度可以给团队合作带来显著的不同。" },
      { en: "When everyone contributes equally, the team achieves better results.", zh: "當每个人都平等贡献时，团队会取得更好的成果。" },
      { en: "The process of working together builds trust and understanding.", zh: "一起工作的过程建立了信任和理解。" }
    ] },
  { id: 9, title: "Career Planning", level: "B2",
    embedWords: [16, 29, 31, 37, 39],
    content: [
      { en: "Choosing the right career path requires careful planning.", zh: "选择正确的职业道路需要仔细规划。" },
      { en: "You should evaluate your skills and interests before deciding.", zh: "在做决定之前你应该评估自己的技能和兴趣。" },
      { en: "It helps to identify what you are truly passionate about.", zh: "找出你真正热爱的领域会很有帮助。" },
      { en: "There are many options available in today's job market.", zh: "如今的就业市场有很多选择。" },
      { en: "Previous work experience can help you make better decisions.", zh: "以前的工作经验可以帮助你做更好的决定。" },
      { en: "A good strategy is to gain experience in different fields first.", zh: "一个好的策略是先在不同的领域积累经验。" },
      { en: "Career paths vary greatly depending on the industry.", zh: "职业道路因行业而异。" },
      { en: "With sufficient preparation, you can achieve your career goals.", zh: "有充分的准备，你就能实现职业目标。" }
    ] },
  { id: 10, title: "Global Issues", level: "B2",
    embedWords: [14, 18, 19, 26, 27, 38],
    content: [
      { en: "The global population has grown significantly in the past century.", zh: "全球人口在过去一个世纪里显著增长。" },
      { en: "Approximately 8 billion people now live on our planet.", zh: "现在大约有80亿人生活在地球上。" },
      { en: "Climate change has a serious impact on the environment.", zh: "气候变化对环境有严重影响。" },
      { en: "One consequence of pollution is the loss of biodiversity.", zh: "污染的一个后果是生物多样性的丧失。" },
      { en: "Global cooperation is required to solve these problems.", zh: "解决这些问题需要全球合作。" },
      { en: "Countries must respond quickly to environmental challenges.", zh: "各国必须迅速应对环境挑战。" },
      { en: "Sufficient funding for renewable energy is essential.", zh: "为可再生能源提供充足的资金至关重要。" },
      { en: "Every individual can contribute to a more sustainable future.", zh: "每个个体都可以为一个更可持续的未来做出贡献。" }
    ] }
];

const VIDEOS = [
  {
    id: 1,
    youtubeId: "KhI7Ncl61i0",
    title: "谷爱凌：关于未来与目标",
    source: "Bloomberg Interview",
    embedWords: [],
    segments: [
      { start: 0, end: 6,
        en: "When you think about the future, what's in it for Eileen Gu?",
        zh: "当你想到未来，谷爱凌的未来会是什么？",
        keywords: [{ word: "future", start: 24, end: 30 }] },
      { start: 6, end: 14,
        en: "People talk about movies, business, entrepreneurship.",
        zh: "人们谈到电影、商业和创业。",
        keywords: [{ word: "entrepreneurship", start: 28, end: 43 }] },
      { start: 14, end: 22,
        en: "How do you look at the future for someone who's achieved so much?",
        zh: "你怎么看待一个已经取得这么多成就的人的未来？",
        keywords: [{ word: "achieved", start: 46, end: 54 }] },
      { start: 22, end: 30,
        en: "I'm investing more now and growing interest in that area.",
        zh: "我现在投入更多，对这个领域兴趣渐浓。",
        keywords: [{ word: "investing", start: 4, end: 13 }] },
      { start: 30, end: 37,
        en: "I'd love to start a company and write a book.",
        zh: "我想创办一家公司并写一本书。",
        keywords: [{ word: "company", start: 18, end: 25 }] },
      { start: 37, end: 44,
        en: "I don't really sit still for very long.",
        zh: "我不会长时间闲坐着。",
        keywords: [] },
      { start: 44, end: 52,
        en: "I don't like declaring goals until I meet them.",
        zh: "我不喜欢在实现目标之前就宣告出来。",
        keywords: [{ word: "declaring", start: 13, end: 22 }] },
      { start: 52, end: 60,
        en: "You'll never find an interview of me saying I'm going to win.",
        zh: "你永远不会找到我说『我要赢』的采访。",
        keywords: [{ word: "interview", start: 19, end: 28 }] },
      { start: 60, end: 68,
        en: "I can only say retrospectively, this is what I have done.",
        zh: "我只能回顾性地说出我已经做到了什么。",
        keywords: [{ word: "retrospectively", start: 13, end: 27 }] },
      { start: 68, end: 74,
        en: "My goal is to make the world a better place.",
        zh: "我的目标是让世界变得更美好。",
        keywords: [{ word: "goal", start: 3, end: 7 }] }
    ]
  },
  {
    id: 2,
    youtubeId: "t9PRLpkCUSM",
    title: "雅思口语：完美发音与词汇",
    source: "IELTS Advantage",
    embedWords: [],
    segments: [
      { start: 0, end: 7,
        en: "I like daylight, so if I had more windows in my house, that would make it better.",
        zh: "我喜欢日光，所以如果我家有更多窗户就更好了。",
        keywords: [{ word: "daylight", start: 7, end: 15 }] },
      { start: 7, end: 14,
        en: "Now let's talk about shopping. Do you prefer shopping online or in stores?",
        zh: "现在我们来谈谈购物。你更喜欢网购还是去商店？",
        keywords: [{ word: "prefer", start: 44, end: 50 }] },
      { start: 14, end: 22,
        en: "I like shopping with others because I can get their opinion.",
        zh: "我喜欢和别人一起购物，因为可以听取他们的意见。",
        keywords: [{ word: "opinion", start: 47, end: 54 }] },
      { start: 22, end: 30,
        en: "I would consider grocery shopping important — food is essential.",
        zh: "我认为购买日用品很重要——食物是必需品。",
        keywords: [{ word: "essential", start: 42, end: 51 }] },
      { start: 30, end: 38,
        en: "In my free time, I'm currently obsessed with a game on my Nintendo.",
        zh: "空闲时，我最近沉迷于任天堂上的一个游戏。",
        keywords: [{ word: "obsessed", start: 25, end: 33 }] },
      { start: 38, end: 46,
        en: "I spend time with friends almost every day, going to the gym or running errands.",
        zh: "我几乎每天都和朋友在一起，去健身房或跑腿办事。",
        keywords: [{ word: "errands", start: 76, end: 83 }] },
      { start: 46, end: 54,
        en: "I do want to get into new hobbies and develop new skills.",
        zh: "我确实想培养新的爱好和技能。",
        keywords: [{ word: "develop", start: 30, end: 37 }] },
      { start: 54, end: 62,
        en: "It's important to keep learning and growing as a person.",
        zh: "不断学习和成长对一个人来说很重要。",
        keywords: [{ word: "growing", start: 37, end: 44 }] },
      { start: 62, end: 70,
        en: "That is how you become a well-rounded individual.",
        zh: "这样才能成为一个全面发展的人。",
        keywords: [] }
    ]
  },
  {
    id: 3,
    youtubeId: "EIYfzuZ-mL4",
    title: "雅思口语：Band 9 高分技巧",
    source: "English Pro Tips",
    embedWords: [],
    segments: [
      { start: 0, end: 8,
        en: "How did you get to such a high level of English?",
        zh: "你是如何达到这么高的英语水平的？",
        keywords: [{ word: "level", start: 33, end: 38 }] },
      { start: 8, end: 16,
        en: "I studied in the UK and took the TOEFL about ten years ago.",
        zh: "我在英国学习，大约十年前考了托福。",
        keywords: [] },
      { start: 16, end: 24,
        en: "When I was younger, I watched a lot of American TV shows.",
        zh: "年轻的时候，我看了很多美国电视节目。",
        keywords: [{ word: "shows", start: 45, end: 51 }] },
      { start: 24, end: 32,
        en: "I started with French subtitles and gradually switched to English ones.",
        zh: "我开始时看法语字幕，逐渐换成了英文字幕。",
        keywords: [{ word: "gradually", start: 27, end: 36 }] },
      { start: 32, end: 40,
        en: "That gave me a head start compared to others in my English class.",
        zh: "这让我在英语班上比别人有了一个先发优势。",
        keywords: [{ word: "head start", start: 9, end: 18 }] },
      { start: 40, end: 48,
        en: "I was really bad at English at first — my teacher was worried.",
        zh: "一开始我的英语真的很差——老师很担心。",
        keywords: [{ word: "worried", start: 53, end: 60 }] },
      { start: 48, end: 56,
        en: "Living in an English-speaking country is the best way to learn.",
        zh: "生活在英语国家是最好的学习方式。",
        keywords: [] },
      { start: 56, end: 64,
        en: "You are forced to immerse yourself in the language every day.",
        zh: "你被迫每天沉浸在语言环境中。",
        keywords: [{ word: "immerse", start: 18, end: 25 }] },
      { start: 64, end: 72,
        en: "It was difficult at first, but I improved gradually over time.",
        zh: "一开始很困难，但我随着时间的推移逐渐进步了。",
        keywords: [{ word: "improved", start: 28, end: 36 }] }
    ]
  },
  {
    id: 4,
    youtubeId: "t4q2e-HNViU",
    title: "雅思口语：满分学员经验分享",
    source: "English Pro Tips",
    embedWords: [],
    segments: [
      { start: 0, end: 7,
        en: "I decided to prepare ten hours a day for ten days before my test.",
        zh: "我决定在考试前十天每天准备十小时。",
        keywords: [{ word: "prepare", start: 17, end: 24 }] },
      { start: 7, end: 15,
        en: "When it comes to speaking, you should concentrate on your fluency.",
        zh: "说到口语，你应该专注于流利度。",
        keywords: [{ word: "fluency", start: 51, end: 58 }] },
      { start: 15, end: 23,
        en: "Most people tend to speak like a robot with ready-made phrases.",
        zh: "大多数人倾向于用现成的短语像机器人一样说话。",
        keywords: [{ word: "phrases", start: 56, end: 63 }] },
      { start: 23, end: 31,
        en: "You should also understand the whole idea of the listening passage.",
        zh: "你应该理解听力文章的整体意思。",
        keywords: [{ word: "passage", start: 47, end: 54 }] },
      { start: 31, end: 39,
        en: "Many students just hear a keyword and rush to write it down.",
        zh: "许多学生一听到关键词就急着写下来。",
        keywords: [{ word: "keyword", start: 24, end: 31 }] },
      { start: 39, end: 47,
        en: "But that doesn't always give you the correct answer.",
        zh: "但这并不总能给你正确的答案。",
        keywords: [] },
      { start: 47, end: 55,
        en: "Listen carefully and understand the full context before answering.",
        zh: "仔细听，理解完整的上下文再作答。",
        keywords: [{ word: "context", start: 46, end: 53 }] },
      { start: 55, end: 63,
        en: "My best tip is to be natural and let your ideas come from you.",
        zh: "我最好的建议是要自然，让想法从你内心产生。",
        keywords: [{ word: "natural", start: 20, end: 27 }] },
      { start: 63, end: 72,
        en: "Examiners read thousands of essays, so avoid cliché phrases.",
        zh: "考官会读数千篇作文，所以避免陈词滥调。",
        keywords: [{ word: "cliché", start: 46, end: 53 }] }
    ]
  },
  {
    id: 5,
    youtubeId: "k4715CJ0Ii8",
    title: "雅思口语：满分发音与流利度",
    source: "IELTS Advantage",
    embedWords: [],
    segments: [
      { start: 0, end: 7,
        en: "Let's start by talking about the mountains. Do you like to go on holiday there?",
        zh: "我们先谈谈山。你喜欢去山里度假吗？",
        keywords: [{ word: "mountains", start: 29, end: 38 }] },
      { start: 7, end: 15,
        en: "Definitely, I love nature and I always pick locations with beautiful landscapes.",
        zh: "当然，我热爱大自然，总是选风景优美的地方。",
        keywords: [{ word: "landscapes", start: 73, end: 83 }] },
      { start: 15, end: 23,
        en: "There are lodges in the mountains that they rent out to visitors.",
        zh: "山里有小屋出租给游客。",
        keywords: [] },
      { start: 23, end: 31,
        en: "It's a beautiful experience to see how local people live.",
        zh: "体验当地人的生活是一种美好的经历。",
        keywords: [{ word: "experience", start: 17, end: 27 }] },
      { start: 31, end: 39,
        en: "Do you like trees? I love spending time around trees.",
        zh: "你喜欢树吗？我喜欢在树周围度过时光。",
        keywords: [] },
      { start: 39, end: 47,
        en: "There are many benefits of planting more trees in cities.",
        zh: "在城市里种更多树有很多好处。",
        keywords: [{ word: "benefits", start: 20, end: 28 }] },
      { start: 47, end: 55,
        en: "It protects you and is much better for your health to have trees around.",
        zh: "树木保护你，周围有树对你的健康更好。",
        keywords: [{ word: "health", start: 55, end: 61 }] },
      { start: 55, end: 63,
        en: "The weather has changed drastically in recent years due to global warming.",
        zh: "近年来由于全球变暖，天气发生了剧烈变化。",
        keywords: [{ word: "drastically", start: 23, end: 34 }] },
      { start: 63, end: 72,
        en: "I enjoy winter the most because it's cold and I can go outside to play.",
        zh: "我最喜欢冬天，因为很冷，我可以出去玩。",
        keywords: [{ word: "enjoy", start: 3, end: 8 }] }
    ]
  },
  {
    id: 6,
    youtubeId: "VRZPb4S_SBA",
    title: "雅思口语：Band 9 模考反馈",
    source: "IELTS Daily",
    embedWords: [],
    segments: [
      { start: 0, end: 8,
        en: "How often do you listen to music? I listen in the car and when I drive.",
        zh: "你多久听一次音乐？我在车里和开车时听。",
        keywords: [] },
      { start: 8, end: 16,
        en: "Let me give you some feedback on your performance today.",
        zh: "让我给你一些你今天表现的反馈。",
        keywords: [{ word: "feedback", start: 17, end: 25 }] },
      { start: 16, end: 24,
        en: "Pronunciation is one of your strong points. You speak very clearly.",
        zh: "发音是你的强项之一。你说话非常清晰。",
        keywords: [{ word: "pronunciation", start: 0, end: 13 }] },
      { start: 24, end: 32,
        en: "You also use intonation extremely well to convey meaning.",
        zh: "你也很擅长用语调传达意思。",
        keywords: [{ word: "intonation", start: 17, end: 27 }] },
      { start: 32, end: 40,
        en: "Fluency is about speaking without unnatural pauses.",
        zh: "流利度是指没有不自然的停顿。",
        keywords: [{ word: "Fluency", start: 0, end: 7 }] },
      { start: 40, end: 48,
        en: "You should try to answer each question explicitly and directly.",
        zh: "你应该试着直接明确地回答每个问题。",
        keywords: [{ word: "explicitly", start: 31, end: 41 }] },
      { start: 48, end: 56,
        en: "Coherence means did you answer the question and develop your ideas.",
        zh: "连贯性是指你是否回答了问题并展开了观点。",
        keywords: [{ word: "Coherence", start: 0, end: 9 }] },
      { start: 56, end: 64,
        en: "Your grammar is very strong and you use complex structures well.",
        zh: "你的语法很强，复杂结构也运用得很好。",
        keywords: [{ word: "grammar", start: 5, end: 12 }] },
      { start: 64, end: 72,
        en: "Overall, your performance is at a very high level. Well done!",
        zh: "总体而言，你的表现处于非常高的水平。做得好！",
        keywords: [{ word: "performance", start: 17, end: 28 }] }
    ]
  },
  {
    id: 7,
    youtubeId: "0HOf9IIt7wg",
    title: "雅思口语：越南考生 Band 9 实战",
    source: "AcademicEnglishHelp",
    embedWords: [],
    segments: [
      { start: 0, end: 8,
        en: "What is your full name? My name is Brendan, but please call me by my nickname.",
        zh: "你的全名是什么？我叫 Brendan，但请叫我昵称。",
        keywords: [{ word: "nickname", start: 50, end: 58 }] },
      { start: 8, end: 16,
        en: "Do you work or study? I work part-time and I'm also studying for the IELTS exam.",
        zh: "你工作还是学习？我兼职工作，同时也在备考雅思。",
        keywords: [{ word: "exam", start: 82, end: 86 }] },
      { start: 16, end: 24,
        en: "How often do you meet your friends? I meet them almost every day.",
        zh: "你多久见一次朋友？我几乎每天都见他们。",
        keywords: [] },
      { start: 24, end: 32,
        en: "What do you usually do with your friends? We go to coffee shops or nature places.",
        zh: "你通常和朋友做什么？我们去咖啡店或大自然。",
        keywords: [] },
      { start: 32, end: 40,
        en: "I met my best friend at a music festival back in 2009.",
        zh: "我是在 2009 年的一个音乐节上遇到我最好的朋友的。",
        keywords: [{ word: "festival", start: 31, end: 39 }] },
      { start: 40, end: 48,
        en: "How do you keep in touch? Through social media, messaging apps and texting.",
        zh: "你如何保持联系？通过社交媒体、通讯应用和短信。",
        keywords: [{ word: "social media", start: 25, end: 37 }] },
      { start: 48, end: 56,
        en: "The games I play have changed over the years, now I prefer board games.",
        zh: "这些年来我玩的游戏变了，现在我喜欢桌游。",
        keywords: [{ word: "prefer", start: 53, end: 59 }] },
      { start: 56, end: 64,
        en: "If I could give a gift, I would buy a motorbike for my best friend.",
        zh: "如果我能送礼物，我会给我最好的朋友买一辆摩托车。",
        keywords: [] },
      { start: 64, end: 73,
        en: "One of my most successful days was taking part in an emergency rescue effort.",
        zh: "我最成功的日子之一是参与了一次紧急救援行动。",
        keywords: [{ word: "emergency", start: 40, end: 49 }, { word: "rescue", start: 54, end: 60 }] }
    ]
  }
];

const SPEAKING_TOPICS = [
  {
    question: "Do you think exercise is important?",
    hint: "Use PRE structure",
    model: "P: I believe exercise is extremely important for overall health.\nR: Regular physical activity can prevent many diseases and improve mental well-being.\nE: For example, my father started jogging every morning and his blood pressure dropped significantly within three months.",
    keywords: ["benefit", "inevitable", "predict", "positive"]
  },
  {
    question: "Should cities invest more in public transport?",
    hint: "Use PRE structure",
    model: "P: Yes, cities should invest more in public transport systems.\nR: Efficient transport can reduce traffic congestion and air pollution significantly.\nE: In my hometown, the new subway line reduced commute time by half and thousands of people benefit from it every day.",
    keywords: ["transport", "benefit", "distribute", "environment"]
  },
  {
    question: "Is lifelong learning important?",
    hint: "Use PRE structure",
    model: "P: Lifelong learning is essential in today's rapidly changing world.\nR: New technologies and knowledge emerge constantly, and those who fail to adapt will be left behind.\nE: My aunt learned coding at age 50 and completely changed her career path, which inspired many people around her.",
    keywords: ["inspire", "inevitable", "comprehend", "achieve"]
  },
  {
    question: "Has technology improved education?",
    hint: "Use PRE structure",
    model: "P: I strongly agree that technology has transformed education for the better.\nR: Online resources and digital tools make learning more accessible and personalized.\nE: During the pandemic, schools distributed tablets to students and shared learning materials online, which prevented education from being interrupted.",
    keywords: ["distribute", "exclude", "benefit", "significant"]
  },
  {
    question: "Do you think climate change is a serious issue?",
    hint: "Use PRE structure",
    model: "P: Absolutely, climate change is one of the most serious challenges we face today.\nR: Rising temperatures and extreme weather events have a significant impact on our planet.\nE: For example, scientists have identified that global temperatures have risen by approximately 1°C since the industrial revolution, and the consequences are already visible.",
    keywords: ["global", "significant", "impact", "identify", "consequence", "approximately"]
  },
  {
    question: "What is the most important skill for young people to learn?",
    hint: "Use PRE structure",
    model: "P: I believe critical thinking is one of the most important skills for young people.\nR: In an age of information overload, individuals need to evaluate sources and analyze data carefully.\nE: For instance, when my younger brother learned to identify fake news online, he became much better at making informed decisions about what to believe.",
    keywords: ["analyze", "individual", "evaluate", "identify"]
  }
];
