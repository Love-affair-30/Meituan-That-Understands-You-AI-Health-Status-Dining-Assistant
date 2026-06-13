const pages = {
  home: document.querySelector("#homePage"),
  assistant: document.querySelector("#assistantPage"),
  detail: document.querySelector("#productDetailPage"),
  checkout: document.querySelector("#checkoutPage"),
  report: document.querySelector("#reportPage")
};

const flowSteps = ["supplement", "analysis", "results"];
const stateProfiles = {
  "嗓子疼": {
    icon: "🗣️",
    advice: "你可能更适合：温润、清淡、少油、少辣、少冰的餐食。",
    question: "现在嗓子疼到什么程度？",
    direction: "温润、清淡、少刺激、易吞咽",
    analysis: {
      title: "现在更适合温润清淡",
      tag: "咽喉友好",
      lead: "根据你现在的嗓子不适状态，更适合选择温热、软润、刺激性低的餐食，比如冰糖雪梨、小米南瓜粥、蒸蛋和清炖汤类。",
      eat: "雪梨汤、小米粥、蒸蛋、清炖汤",
      benefit: "补充水分，减少吞咽时的刺激感，让喉咙更舒服。",
      avoid: "冰饮、重辣、油炸、过硬食物"
    },
    foods: [["🍐", "冰糖雪梨", "口感温润，刺激性较低。", "控糖时请选择少糖版本。"], ["🥣", "小米南瓜粥", "清淡温热，容易吞咽。", "不喜甜口可换白粥。"], ["🍲", "山药排骨汤", "温热有饱腹感，口味温和。", "汤底偏咸时少喝汤。"], ["🐟", "清蒸鱼", "高蛋白、少油少辣。", "鱼类过敏用户不要选择。"]],
    products: [["冰糖雪梨 · 润喉推荐", "汤小满甜品 · 月售256 · 约28分钟", "口感温润，刺激性较低，适合嗓子不舒服时选择。", "真材实料 / 不太甜 / 送来还是热的", "¥12.8"], ["南瓜小米粥", "粥员外 · 月售382 · 约25分钟", "清淡温热、容易吞咽，没胃口时也更容易接受。", "粥很稠 / 热乎 / 甜度刚好", "¥10.9"], ["山药菌菇鸡汤", "汤先生 · 月售294 · 约33分钟", "温热、有饱腹感，口味相对温和。", "肉量足 / 不油腻 / 汤还是热的", "¥18.8"], ["鲜蒸鸡蛋羹", "真功夫 · 月售452 · 约28分钟", "质地软嫩、少油少辣，吞咽时刺激更低。", "很嫩 / 不咸 / 分量合适", "¥9.9"]]
  },
  "感冒发烧": {
    icon: "🤒",
    advice: "你可能更适合：温热汤粥、补充水分、富含维生素的餐食。",
    question: "现在感冒不适到什么程度？",
    direction: "温热、补水、清淡、好消化",
    analysis: {
      title: "优先补水和好消化",
      tag: "感冒友好",
      lead: "根据你现在的感冒发烧状态，更适合选择温热、含水分、容易消化的食物，比如清炖鸡汤、蔬菜粥、蒸蛋和常温水果。",
      eat: "鸡汤、蔬菜粥、蒸蛋、常温水果",
      benefit: "帮助补充水分和能量，胃口差时也更容易接受。",
      avoid: "冰饮、重油、重辣、过甜饮品"
    },
    foods: [["🍲", "清炖鸡汤", "温热汤食可补充水分和蛋白质。", "高盐汤底不宜多喝。"], ["🥣", "蔬菜粥", "清淡、含水分且易消化。", "发热没胃口时少量多餐。"], ["🥝", "维C水果杯", "方便补充水果和水分。", "避免过冰版本。"], ["🥚", "蒸蛋", "口感柔软，蛋白质来源稳定。", "鸡蛋过敏者避开。"]],
    products: [["清炖菌菇鸡汤", "汤先生 · 月售294 · 约33分钟", "温热清淡，能补充水分和优质蛋白。", "汤很鲜 / 不油腻 / 包装保温", "¥18.8"], ["蔬菜瘦肉粥", "曼玲粥店 · 月售426 · 约26分钟", "清淡好消化，发热没胃口时更易接受。", "食材新鲜 / 粥很稠 / 送来热乎", "¥15.8"], ["鲜切水果杯", "果切日记 · 月售318 · 约22分钟", "补充水果和水分，优先选择常温配送。", "水果新鲜 / 分量足 / 不冰", "¥16.8"], ["鲜蒸鸡蛋羹", "真功夫 · 月售452 · 约28分钟", "柔软少油，是温和的蛋白质选择。", "很嫩 / 不咸 / 分量合适", "¥9.9"]]
  },
  "痛经": {
    icon: "💧",
    advice: "你可能更适合：温热、含铁、少冰、少咖啡因的餐食。",
    question: "现在经期不适到什么程度？",
    direction: "温热、补铁、少冰、易消化",
    analysis: {
      title: "温热补能量更合适",
      tag: "经期友好",
      lead: "根据你现在的痛经状态，更适合选择温热、少冰、能补充能量和蛋白质的餐食，比如红枣小米粥、山药粥、少油牛肉饭和菌菇鸡汤。",
      eat: "红枣小米粥、山药粥、牛肉蔬菜饭、鸡汤",
      benefit: "温热食物更舒服，适量蛋白质和主食能帮助补充体力。",
      avoid: "冰饮、咖啡因、重辣、过油食物"
    },
    foods: [["🍚", "红枣小米粥", "温热清淡，适合作为轻食。", "需要控糖时少加糖。"], ["🥩", "牛肉蔬菜饭", "提供蛋白质和含铁食材。", "选择少辣少油版本。"], ["🥣", "山药粥", "口感细腻，胃口不佳时更易接受。", "按个人食量选择规格。"], ["🍲", "菌菇鸡汤", "温热、有饱腹感，口味温和。", "注意汤底盐分。"]],
    products: [["红枣小米粥", "三米粥铺 · 月售368 · 约31分钟", "温热清淡，适合经期胃口不佳时选择。", "红枣足 / 热乎 / 甜度可选", "¥11.8"], ["少油牛肉蔬菜饭", "小碗菜 · 月售512 · 约29分钟", "包含蛋白质与蔬菜，可选择少辣少油。", "牛肉嫩 / 蔬菜多 / 不油", "¥22.8"], ["山药瘦肉粥", "曼玲粥店 · 月售426 · 约26分钟", "细腻温热，更容易入口和消化。", "粥很稠 / 肉量足 / 保温好", "¥15.8"], ["清炖菌菇鸡汤", "汤先生 · 月售294 · 约33分钟", "温热有饱腹感，避免冰冷刺激。", "汤清淡 / 不油腻 / 送来热", "¥18.8"]]
  },
  "胃不舒服": {
    icon: "🫛",
    advice: "你可能更适合：软烂、清淡、少油、低刺激的餐食。",
    question: "现在胃部不适到什么程度？",
    direction: "软烂、清淡、少油、易消化",
    analysis: {
      title: "先选软烂低刺激",
      tag: "肠胃友好",
      lead: "根据你现在的胃部不适状态，更适合选择软烂、清淡、少油、低刺激的食物，比如白粥、蒸蛋、清汤面和山药粥。",
      eat: "白粥、蒸蛋、清汤面、山药粥",
      benefit: "更容易消化，能减少肠胃负担，适合反酸、胃胀或没胃口时选择。",
      avoid: "油炸、重辣、浓汤、过甜过冷食物"
    },
    foods: [["🥣", "白粥", "配料简单、口感软烂。", "可搭配少量清淡小菜。"], ["🥚", "蒸蛋", "质地柔软，油脂较少。", "鸡蛋过敏者避开。"], ["🍜", "清汤面", "温热软烂，饱腹感适中。", "选择少油不辣汤底。"], ["🍚", "山药粥", "细腻温和，比较容易消化。", "避免过甜版本。"]],
    products: [["清淡白粥套餐", "三米粥铺 · 月售521 · 约24分钟", "配料简单、软烂清淡，胃部不适时负担更低。", "粥很稠 / 小菜清淡 / 送来热", "¥9.8"], ["鲜蒸鸡蛋羹", "真功夫 · 月售452 · 约28分钟", "质地软嫩、少油，适合搭配主食。", "很嫩 / 不咸 / 分量合适", "¥9.9"], ["清汤鸡丝面", "陈香贵 · 月售507 · 约24分钟", "温热软烂，选择少油汤底更温和。", "面条软 / 汤清淡 / 不油", "¥16.9"], ["山药瘦肉粥", "曼玲粥店 · 月售426 · 约26分钟", "细腻易消化，同时补充适量蛋白质。", "粥很稠 / 肉量足 / 保温好", "¥15.8"]]
  },
  "熬夜疲惫": {
    icon: "🌙",
    advice: "你可能更适合：补水、高蛋白、少糖、不过度油腻的餐食。",
    question: "现在熬夜后的疲惫程度？",
    direction: "补水、高蛋白、少糖、清淡",
    analysis: {
      title: "补水加蛋白更稳",
      tag: "熬夜恢复",
      lead: "根据你现在的熬夜疲惫状态，更适合选择补水、优质蛋白、少糖少油的餐食，比如低脂鸡胸肉饭、常温水果、蒸蛋和蔬菜菌菇汤。",
      eat: "鸡胸肉饭、常温水果、蒸蛋、蔬菜汤",
      benefit: "补充水分和蛋白质，减少高糖高油带来的困倦感。",
      avoid: "奶茶、炸物、重酱、过量甜品"
    },
    foods: [["🍗", "鸡胸肉饭", "提供蛋白质且可选择少油做法。", "避免重酱和油炸版本。"], ["🥝", "常温水果杯", "补充水果和水分。", "避免额外糖浆。"], ["🥚", "蒸蛋", "柔软清淡，蛋白质稳定。", "鸡蛋过敏者避开。"], ["🍲", "蔬菜鸡汤", "温热补水，饱腹感适中。", "注意汤底盐分。"]],
    products: [["低脂鸡胸肉饭", "轻食记 · 月售610 · 约26分钟", "高蛋白并可选少油酱汁，适合熬夜后补充正餐。", "鸡肉嫩 / 菜量多 / 酱汁分装", "¥21.8"], ["常温鲜切水果杯", "果切日记 · 月售318 · 约22分钟", "补充水果和水分，减少高糖饮料选择。", "水果新鲜 / 分量足 / 无糖浆", "¥16.8"], ["鲜蒸鸡蛋羹", "真功夫 · 月售452 · 约28分钟", "柔软清淡，可补充优质蛋白。", "很嫩 / 不咸 / 分量合适", "¥9.9"], ["蔬菜菌菇鸡汤", "汤先生 · 月售294 · 约33分钟", "温热补水，不会像炸物一样过度油腻。", "蔬菜多 / 不油腻 / 汤还是热的", "¥18.8"]]
  },
  "酒后恢复": {
    icon: "💧",
    advice: "你可能更适合：补水、电解质、清淡且易消化的餐食。",
    question: "现在酒后不适到什么程度？",
    direction: "补水、电解质、清淡、易消化",
    analysis: {
      title: "补水清淡优先",
      tag: "酒后恢复",
      lead: "根据你现在的酒后恢复状态，更适合选择补水、清淡、易消化的食物，比如低糖电解质饮品、白粥、清汤面和香蕉燕麦。",
      eat: "电解质饮品、白粥、清汤面、香蕉燕麦",
      benefit: "帮助补充水分和简单能量，胃口差时更温和。",
      avoid: "烧烤、重辣、油炸、继续饮酒"
    },
    foods: [["💧", "电解质饮品", "补充水分，选择低糖常温版本。", "不作为药物或治疗手段。"], ["🥣", "白粥", "清淡软烂，胃口差时更易接受。", "少量多次进食。"], ["🍜", "清汤面", "温热有一定饱腹感。", "避免辛辣油腻汤底。"], ["🍌", "香蕉燕麦", "口感柔软，适合简单补充能量。", "牛奶不耐受时选择无奶版本。"]],
    products: [["低糖电解质饮品", "便利蜂 · 月售680 · 约18分钟", "方便补充水分，已优先筛选低糖常温版本。", "不太甜 / 常温送达 / 日期新鲜", "¥8.8"], ["清淡白粥套餐", "三米粥铺 · 月售521 · 约24分钟", "软烂清淡，酒后胃口不佳时更易接受。", "粥很稠 / 小菜清淡 / 送来热", "¥9.8"], ["清汤鸡丝面", "陈香贵 · 月售507 · 约24分钟", "温热有饱腹感，少油汤底刺激更低。", "面条软 / 汤清淡 / 不油", "¥16.9"], ["香蕉燕麦杯", "麦田轻食 · 月售286 · 约23分钟", "柔软易入口，适合作为简单能量补充。", "香蕉新鲜 / 不太甜 / 分量适中", "¥13.8"]]
  }
};

const resultCatalog = {
  "嗓子疼": {
    "综合推荐": [
      ["冰糖雪梨 · 润喉推荐", "汤小满甜品 · 月售256 · 约28分钟", "温热软润，刺激性低，适合嗓子不舒服时作为甜汤选择。", "真材实料 / 不太甜 / 送来还是热的", "¥12.8", "assets/food/fruit-cup.jpg", "最推荐", "92%"],
      ["南瓜小米粥", "粥员外 · 月售382 · 约25分钟", "清淡温热、容易吞咽，没胃口时也更容易接受。", "粥很稠 / 热乎 / 甜度刚好", "¥10.9", "assets/food/rice-bowl.jpg", "", "95%"],
      ["鲜蒸鸡蛋羹", "真功夫 · 月售452 · 约28分钟", "质地软嫩、少油少辣，吞咽时刺激更低。", "很嫩 / 不咸 / 分量合适", "¥9.9", "assets/food/steamed-egg.jpg", "", "94%"]
    ],
    "30分钟内": [
      ["热乎蔬菜粥", "曼玲粥店 · 月售426 · 约24分钟", "配送更快，粥类含水分高，嗓子不舒服时更容易入口。", "出餐快 / 保温好 / 口味清淡", "¥14.8", "assets/food/rice-bowl.jpg", "快送", "91%"],
      ["清汤鸡丝面", "陈香贵 · 月售507 · 约24分钟", "温热汤面能补充水分，选择少油汤底更温和。", "面条软 / 汤清淡 / 不油", "¥16.9", "assets/food/noodle-soup.jpg", "", "89%"],
      ["鲜蒸鸡蛋羹", "真功夫 · 月售452 · 约28分钟", "软嫩温和，出餐稳定，适合想快速吃点热食。", "很嫩 / 不咸 / 速度快", "¥9.9", "assets/food/steamed-egg.jpg", "", "93%"]
    ],
    "评分 4.8+": [
      ["银耳雪梨汤", "汤小满甜品 · 4.9分 · 约31分钟", "高评分甜汤，口感温润，适合替代冰饮和重糖饮品。", "料足 / 不腻 / 甜度可选", "¥13.8", "assets/food/fruit-cup.jpg", "4.9分", "96%"],
      ["山药菌菇鸡汤", "汤先生 · 4.8分 · 约33分钟", "汤类温热有饱腹感，口味比重辣菜更温和。", "肉量足 / 不油腻 / 汤还是热的", "¥18.8", "assets/food/chicken-soup.jpg", "", "93%"],
      ["清蒸鱼套餐", "鱼你在一起 · 4.8分 · 约35分钟", "高蛋白、少油少辣，相比炸物和烧烤刺激更低。", "鱼肉嫩 / 少油 / 配菜清淡", "¥24.8", "assets/food/steamed-fish.jpg", "", "90%"]
    ],
    "少糖": [
      ["无糖雪梨银耳汤", "轻甜甜品 · 月售218 · 约29分钟", "保留温润口感，减少额外糖分，更适合少糖偏好。", "少糖 / 温热 / 甜度刚好", "¥13.9", "assets/food/fruit-cup.jpg", "少糖", "94%"],
      ["原味白粥套餐", "三米粥铺 · 月售521 · 约24分钟", "配料简单、低刺激，想吃清淡时更稳妥。", "清淡 / 热乎 / 小菜可选", "¥9.8", "assets/food/rice-bowl.jpg", "", "92%"],
      ["清炖鸡汤", "汤先生 · 月售294 · 约33分钟", "少糖且温热，能补充水分和蛋白质。", "不油腻 / 少盐可选 / 保温好", "¥18.8", "assets/food/chicken-soup.jpg", "", "91%"]
    ]
  },
  "感冒发烧": {
    "综合推荐": [
      ["清炖菌菇鸡汤", "汤先生 · 月售294 · 约33分钟", "温热清淡，能补充水分和优质蛋白。", "汤很鲜 / 不油腻 / 包装保温", "¥18.8", "assets/food/chicken-soup.jpg", "最推荐", "94%"],
      ["蔬菜瘦肉粥", "曼玲粥店 · 月售426 · 约26分钟", "清淡好消化，发热没胃口时更易接受。", "食材新鲜 / 粥很稠 / 送来热乎", "¥15.8", "assets/food/rice-bowl.jpg", "", "95%"],
      ["常温鲜切水果杯", "果切日记 · 月售318 · 约22分钟", "补充水果和水分，优先选择常温配送。", "水果新鲜 / 分量足 / 不冰", "¥16.8", "assets/food/fruit-cup.jpg", "", "90%"]
    ],
    "30分钟内": [
      ["蔬菜瘦肉粥", "曼玲粥店 · 约24分钟", "热粥配送快，含水分且容易消化。", "出餐快 / 热乎 / 清淡", "¥15.8", "assets/food/rice-bowl.jpg", "快送", "93%"],
      ["清汤鸡丝面", "陈香贵 · 约24分钟", "温热汤面比油炸快餐更适合当前状态。", "面软 / 汤清 / 少油", "¥16.9", "assets/food/noodle-soup.jpg", "", "90%"],
      ["蒸蛋配米饭", "真功夫 · 约28分钟", "蒸蛋柔软，蛋白质来源稳定。", "很嫩 / 不咸 / 配送稳", "¥12.9", "assets/food/steamed-egg.jpg", "", "91%"]
    ],
    "评分 4.8+": [
      ["菌菇鸡汤套餐", "汤先生 · 4.8分 · 约33分钟", "评分高且汤底温和，适合补水和补充蛋白质。", "汤清淡 / 不油腻 / 送来热", "¥18.8", "assets/food/chicken-soup.jpg", "4.8分", "95%"],
      ["山药瘦肉粥", "曼玲粥店 · 4.9分 · 约26分钟", "粥体细腻，更适合胃口不佳时少量进食。", "粥很稠 / 肉量足 / 保温好", "¥15.8", "assets/food/rice-bowl.jpg", "", "96%"],
      ["维C水果杯", "果切日记 · 4.8分 · 约22分钟", "常温水果方便补水，减少冰饮刺激。", "水果新鲜 / 不冰 / 分量足", "¥16.8", "assets/food/fruit-cup.jpg", "", "89%"]
    ],
    "少糖": [
      ["低糖电解质饮品", "便利蜂 · 月售680 · 约18分钟", "发热时更需要补水，低糖版本更清爽。", "不太甜 / 常温送达 / 日期新鲜", "¥8.8", "assets/food/fruit-cup.jpg", "少糖", "88%"],
      ["原味蔬菜粥", "粥员外 · 约25分钟", "少糖清淡，适合没胃口时慢慢吃。", "清淡 / 热乎 / 无额外糖", "¥11.9", "assets/food/rice-bowl.jpg", "", "92%"],
      ["清炖鸡汤", "汤先生 · 约33分钟", "少糖温热，兼顾水分和蛋白质。", "不油腻 / 汤清 / 保温好", "¥18.8", "assets/food/chicken-soup.jpg", "", "91%"]
    ]
  },
  "痛经": {
    "综合推荐": [
      ["红枣小米粥", "三米粥铺 · 月售368 · 约31分钟", "温热清淡，适合经期胃口不佳时选择。", "红枣足 / 热乎 / 甜度可选", "¥11.8", "assets/food/rice-bowl.jpg", "最推荐", "92%"],
      ["少油牛肉蔬菜饭", "小碗菜 · 月售512 · 约29分钟", "包含蛋白质与蔬菜，可选择少辣少油。", "牛肉嫩 / 蔬菜多 / 不油", "¥22.8", "assets/food/rice-bowl.jpg", "", "90%"],
      ["清炖菌菇鸡汤", "汤先生 · 月售294 · 约33分钟", "温热有饱腹感，避免冰冷刺激。", "汤清淡 / 不油腻 / 送来热", "¥18.8", "assets/food/chicken-soup.jpg", "", "93%"]
    ],
    "30分钟内": [
      ["山药瘦肉粥", "曼玲粥店 · 约26分钟", "温热细腻，配送较快，适合不想等太久。", "粥很稠 / 保温好 / 肉量足", "¥15.8", "assets/food/rice-bowl.jpg", "快送", "94%"],
      ["蒸蛋牛肉饭", "真功夫 · 约28分钟", "软嫩蒸蛋搭配主食，能补充能量。", "出餐稳 / 不辣 / 分量合适", "¥19.8", "assets/food/steamed-egg.jpg", "", "89%"],
      ["热汤鸡丝面", "陈香贵 · 约24分钟", "温热汤面饱腹，选择少辣更舒服。", "热乎 / 面软 / 少油", "¥16.9", "assets/food/noodle-soup.jpg", "", "90%"]
    ],
    "评分 4.8+": [
      ["红枣山药粥", "三米粥铺 · 4.9分 · 约31分钟", "高评分粥品，温热细腻，适合作为轻食。", "热乎 / 甜度可选 / 料足", "¥12.8", "assets/food/rice-bowl.jpg", "4.9分", "95%"],
      ["清炖鸡汤套餐", "汤先生 · 4.8分 · 约33分钟", "温热汤品更适合经期少冰少刺激的需求。", "汤清 / 不油 / 保温好", "¥18.8", "assets/food/chicken-soup.jpg", "", "92%"],
      ["少油牛肉饭", "小碗菜 · 4.8分 · 约29分钟", "蛋白质和主食搭配更完整，可备注少辣少油。", "牛肉嫩 / 菜多 / 不腻", "¥22.8", "assets/food/rice-bowl.jpg", "", "91%"]
    ],
    "少糖": [
      ["原味山药粥", "曼玲粥店 · 约26分钟", "少糖软糯，胃口不佳时更容易接受。", "细腻 / 热乎 / 原味", "¥13.8", "assets/food/rice-bowl.jpg", "少糖", "93%"],
      ["清蒸蛋羹套餐", "真功夫 · 约28分钟", "几乎不额外加糖，质地软嫩，温和饱腹。", "很嫩 / 不咸 / 不甜", "¥12.9", "assets/food/steamed-egg.jpg", "", "91%"],
      ["菌菇鸡汤", "汤先生 · 约33分钟", "少糖温热，有饱腹感，口味相对温和。", "不油腻 / 汤热 / 菌菇多", "¥18.8", "assets/food/chicken-soup.jpg", "", "90%"]
    ]
  },
  "胃不舒服": {
    "综合推荐": [
      ["清淡白粥套餐", "三米粥铺 · 月售521 · 约24分钟", "配料简单、软烂清淡，胃部不适时负担更低。", "粥很稠 / 小菜清淡 / 送来热", "¥9.8", "assets/food/rice-bowl.jpg", "最推荐", "95%"],
      ["鲜蒸鸡蛋羹", "真功夫 · 月售452 · 约28分钟", "质地软嫩、少油，适合搭配主食。", "很嫩 / 不咸 / 分量合适", "¥9.9", "assets/food/steamed-egg.jpg", "", "94%"],
      ["清汤鸡丝面", "陈香贵 · 月售507 · 约24分钟", "温热软烂，选择少油汤底更温和。", "面条软 / 汤清淡 / 不油", "¥16.9", "assets/food/noodle-soup.jpg", "", "90%"]
    ],
    "30分钟内": [
      ["清淡白粥套餐", "三米粥铺 · 约24分钟", "快速送达且软烂清淡，胃不舒服时更稳。", "快送 / 热乎 / 清淡", "¥9.8", "assets/food/rice-bowl.jpg", "快送", "94%"],
      ["清汤鸡丝面", "陈香贵 · 约24分钟", "配送快，少油汤底能减少肠胃刺激。", "面软 / 汤清 / 不辣", "¥16.9", "assets/food/noodle-soup.jpg", "", "91%"],
      ["蒸蛋配小碗饭", "真功夫 · 约28分钟", "蒸蛋柔软，搭配米饭更容易控制食量。", "很嫩 / 出餐稳 / 不咸", "¥12.9", "assets/food/steamed-egg.jpg", "", "92%"]
    ],
    "评分 4.8+": [
      ["山药瘦肉粥", "曼玲粥店 · 4.9分 · 约26分钟", "细腻易消化，同时补充适量蛋白质。", "粥很稠 / 肉量足 / 保温好", "¥15.8", "assets/food/rice-bowl.jpg", "4.9分", "96%"],
      ["清蒸蛋羹", "真功夫 · 4.8分 · 约28分钟", "少油软嫩，适合胃口不佳时补充蛋白质。", "嫩滑 / 不油 / 口味淡", "¥9.9", "assets/food/steamed-egg.jpg", "", "93%"],
      ["清汤面", "陈香贵 · 4.8分 · 约24分钟", "高评分快送汤面，备注少油更温和。", "汤清 / 面软 / 热乎", "¥16.9", "assets/food/noodle-soup.jpg", "", "90%"]
    ],
    "少糖": [
      ["原味白粥", "三米粥铺 · 约24分钟", "少糖少油，配料简单，适合胃部不适时选择。", "原味 / 热乎 / 无额外糖", "¥8.8", "assets/food/rice-bowl.jpg", "少糖", "94%"],
      ["清蒸蛋羹", "真功夫 · 约28分钟", "不依赖甜味调味，质地软嫩，胃负担低。", "嫩滑 / 不甜 / 少油", "¥9.9", "assets/food/steamed-egg.jpg", "", "92%"],
      ["清汤鸡丝面", "陈香贵 · 约24分钟", "少糖温热，饱腹感适中。", "汤清 / 不辣 / 面软", "¥16.9", "assets/food/noodle-soup.jpg", "", "90%"]
    ]
  },
  "熬夜疲惫": {
    "综合推荐": [
      ["低脂鸡胸肉饭", "轻食记 · 月售610 · 约26分钟", "高蛋白并可选少油酱汁，适合熬夜后补充正餐。", "鸡肉嫩 / 菜量多 / 酱汁分装", "¥21.8", "assets/food/rice-bowl.jpg", "最推荐", "92%"],
      ["常温鲜切水果杯", "果切日记 · 月售318 · 约22分钟", "补充水果和水分，减少高糖饮料选择。", "水果新鲜 / 分量足 / 无糖浆", "¥16.8", "assets/food/fruit-cup.jpg", "", "90%"],
      ["蔬菜菌菇鸡汤", "汤先生 · 月售294 · 约33分钟", "温热补水，不会像炸物一样过度油腻。", "蔬菜多 / 不油腻 / 汤还是热的", "¥18.8", "assets/food/chicken-soup.jpg", "", "91%"]
    ],
    "30分钟内": [
      ["鸡胸肉能量饭", "轻食记 · 约26分钟", "配送较快，蛋白质更足，适合补充正餐。", "快送 / 菜多 / 少油", "¥21.8", "assets/food/rice-bowl.jpg", "快送", "91%"],
      ["常温水果杯", "果切日记 · 约22分钟", "快速补水，避免再点高糖奶茶。", "新鲜 / 不冰 / 无糖浆", "¥16.8", "assets/food/fruit-cup.jpg", "", "88%"],
      ["蒸蛋套餐", "真功夫 · 约28分钟", "柔软清淡，补充优质蛋白。", "很嫩 / 不咸 / 出餐稳", "¥12.9", "assets/food/steamed-egg.jpg", "", "90%"]
    ],
    "评分 4.8+": [
      ["低脂鸡胸肉饭", "轻食记 · 4.8分 · 约26分钟", "高评分轻食，蛋白质更足，酱汁可分装。", "鸡肉嫩 / 菜量多 / 不油", "¥21.8", "assets/food/rice-bowl.jpg", "4.8分", "94%"],
      ["蔬菜鸡汤", "汤先生 · 4.8分 · 约33分钟", "温热补水，适合熬夜后不想吃油腻时选择。", "蔬菜多 / 汤热 / 不油腻", "¥18.8", "assets/food/chicken-soup.jpg", "", "92%"],
      ["香蕉燕麦杯", "麦田轻食 · 4.8分 · 约23分钟", "口感柔软，适合作为简单能量补充。", "香蕉新鲜 / 不太甜 / 分量适中", "¥13.8", "assets/food/oatmeal.jpg", "", "89%"]
    ],
    "少糖": [
      ["无糖香蕉燕麦杯", "麦田轻食 · 约23分钟", "少糖但有饱腹感，适合熬夜后补充能量。", "无糖浆 / 香蕉新鲜 / 燕麦足", "¥13.8", "assets/food/oatmeal.jpg", "少糖", "91%"],
      ["常温水果杯", "果切日记 · 约22分钟", "不加糖浆，补充水果和水分。", "无糖浆 / 不冰 / 分量足", "¥16.8", "assets/food/fruit-cup.jpg", "", "88%"],
      ["清炖蔬菜鸡汤", "汤先生 · 约33分钟", "少糖温热，不会像甜饮一样加重困倦感。", "不油 / 汤热 / 蔬菜多", "¥18.8", "assets/food/chicken-soup.jpg", "", "90%"]
    ]
  },
  "酒后恢复": {
    "综合推荐": [
      ["低糖电解质饮品", "便利蜂 · 月售680 · 约18分钟", "方便补充水分，已优先筛选低糖常温版本。", "不太甜 / 常温送达 / 日期新鲜", "¥8.8", "assets/food/fruit-cup.jpg", "最推荐", "88%"],
      ["清淡白粥套餐", "三米粥铺 · 月售521 · 约24分钟", "软烂清淡，酒后胃口不佳时更易接受。", "粥很稠 / 小菜清淡 / 送来热", "¥9.8", "assets/food/rice-bowl.jpg", "", "94%"],
      ["清汤鸡丝面", "陈香贵 · 月售507 · 约24分钟", "温热有饱腹感，少油汤底刺激更低。", "面条软 / 汤清淡 / 不油", "¥16.9", "assets/food/noodle-soup.jpg", "", "90%"]
    ],
    "30分钟内": [
      ["低糖电解质饮品", "便利蜂 · 约18分钟", "最快补水选择，适合先缓解口渴。", "快送 / 常温 / 低糖", "¥8.8", "assets/food/fruit-cup.jpg", "快送", "88%"],
      ["清淡白粥套餐", "三米粥铺 · 约24分钟", "软烂清淡，胃口差时更容易接受。", "热乎 / 清淡 / 快送", "¥9.8", "assets/food/rice-bowl.jpg", "", "93%"],
      ["清汤鸡丝面", "陈香贵 · 约24分钟", "温热有饱腹感，少油汤底更稳。", "汤清 / 面软 / 不辣", "¥16.9", "assets/food/noodle-soup.jpg", "", "89%"]
    ],
    "评分 4.8+": [
      ["香蕉燕麦杯", "麦田轻食 · 4.8分 · 约23分钟", "柔软易入口，适合作为简单能量补充。", "香蕉新鲜 / 不太甜 / 分量适中", "¥13.8", "assets/food/oatmeal.jpg", "4.8分", "90%"],
      ["原味白粥", "三米粥铺 · 4.8分 · 约24分钟", "高评分粥品，简单温和，适合酒后恢复。", "粥稠 / 热乎 / 清淡", "¥8.8", "assets/food/rice-bowl.jpg", "", "94%"],
      ["清汤面", "陈香贵 · 4.8分 · 约24分钟", "温热汤面比烧烤炸物更适合当前状态。", "汤清 / 面软 / 出餐快", "¥16.9", "assets/food/noodle-soup.jpg", "", "90%"]
    ],
    "少糖": [
      ["低糖电解质饮品", "便利蜂 · 约18分钟", "低糖常温，方便补充水分。", "不太甜 / 常温 / 快送", "¥8.8", "assets/food/fruit-cup.jpg", "少糖", "89%"],
      ["原味白粥套餐", "三米粥铺 · 约24分钟", "无额外糖分，胃口差时更温和。", "原味 / 热乎 / 清淡", "¥9.8", "assets/food/rice-bowl.jpg", "", "92%"],
      ["香蕉燕麦杯", "麦田轻食 · 约23分钟", "选择无糖浆版本，简单补充能量。", "无糖浆 / 软糯 / 分量适中", "¥13.8", "assets/food/oatmeal.jpg", "", "88%"]
    ]
  }
};

const additionalProducts = {
  "嗓子疼": [
    { name: "百合莲子小米粥", store: "三米粥铺 · 4.9分 · 约27分钟", reason: "粥体温热细腻，百合和莲子口感柔和，嗓子不舒服时更容易入口。", keywords: "软糯 / 热乎 / 原味不甜", price: "¥13.8", image: "assets/food/rice-bowl.jpg", badge: "新品", verify: "96%", filters: ["综合推荐", "30分钟内", "评分 4.8+", "少糖"], ingredients: "小米、大米、百合、莲子", allergens: [] },
    { name: "冬瓜瘦肉清汤", store: "汤好喝 · 4.8分 · 约29分钟", reason: "清汤少油、温热补水，瘦肉也能提供适量蛋白质。", keywords: "汤清 / 肉嫩 / 不油腻", price: "¥17.8", image: "assets/food/chicken-soup.jpg", badge: "", verify: "93%", filters: ["综合推荐", "30分钟内", "评分 4.8+", "少糖"], ingredients: "冬瓜、猪瘦肉、枸杞、清汤", allergens: [] },
    { name: "清蒸鲈鱼配软饭", store: "蒸味馆 · 4.9分 · 约32分钟", reason: "蒸制少油，鱼肉软嫩，搭配软饭比煎炸主食刺激更低。", keywords: "鱼肉嫩 / 少油 / 米饭软", price: "¥26.8", image: "assets/food/steamed-fish.jpg", badge: "高蛋白", verify: "95%", filters: ["综合推荐", "评分 4.8+", "少糖"], ingredients: "鲈鱼、大米、姜、葱", allergens: ["海鲜"] },
    { name: "菌菇豆腐汤面", store: "和府小面 · 4.8分 · 约26分钟", reason: "汤面温热、面条柔软，菌菇和豆腐让餐食更有饱腹感。", keywords: "面软 / 汤鲜 / 清淡", price: "¥18.9", image: "assets/food/noodle-soup.jpg", badge: "快送", verify: "92%", filters: ["综合推荐", "30分钟内", "评分 4.8+", "少糖"], ingredients: "小麦面、豆腐、香菇、青菜", allergens: [] }
  ],
  "感冒发烧": [
    { name: "番茄土豆牛肉汤", store: "汤好喝 · 4.9分 · 约29分钟", reason: "温热汤食兼顾水分、蔬菜和蛋白质，口味可备注少盐。", keywords: "牛肉软 / 汤热 / 食材足", price: "¥22.8", image: "assets/food/chicken-soup.jpg", badge: "营养搭配", verify: "95%", filters: ["综合推荐", "30分钟内", "评分 4.8+", "少糖"], ingredients: "牛肉、番茄、土豆、胡萝卜", allergens: [] },
    { name: "青菜豆腐粥", store: "粥员外 · 4.8分 · 约24分钟", reason: "清淡好消化，含水分较多，胃口较差时也方便少量进食。", keywords: "青菜新鲜 / 粥稠 / 热乎", price: "¥12.9", image: "assets/food/rice-bowl.jpg", badge: "快送", verify: "94%", filters: ["综合推荐", "30分钟内", "评分 4.8+", "少糖"], ingredients: "大米、青菜、豆腐、清汤", allergens: [] },
    { name: "玉米山药排骨汤", store: "汤先生 · 4.9分 · 约33分钟", reason: "温热有饱腹感，山药和玉米口感柔和，适合作为恢复期正餐。", keywords: "排骨嫩 / 山药软 / 汤不咸", price: "¥23.8", image: "assets/food/chicken-soup.jpg", badge: "", verify: "93%", filters: ["综合推荐", "评分 4.8+", "少糖"], ingredients: "排骨、玉米、山药、胡萝卜", allergens: [] },
    { name: "香菇鸡丝软面", store: "陈香贵 · 4.8分 · 约25分钟", reason: "软面温热易入口，鸡丝补充蛋白质，可备注清汤少油。", keywords: "面软 / 鸡丝多 / 不辣", price: "¥17.9", image: "assets/food/noodle-soup.jpg", badge: "", verify: "92%", filters: ["综合推荐", "30分钟内", "评分 4.8+", "少糖"], ingredients: "小麦面、鸡胸肉、香菇、青菜", allergens: [] }
  ],
  "痛经": [
    { name: "红豆山药小米粥", store: "三米粥铺 · 4.9分 · 约27分钟", reason: "温热软糯，甜度可选，适合经期胃口一般时作为轻食。", keywords: "山药软 / 热乎 / 可选无糖", price: "¥13.8", image: "assets/food/rice-bowl.jpg", badge: "暖食", verify: "95%", filters: ["综合推荐", "30分钟内", "评分 4.8+", "少糖"], ingredients: "小米、红豆、山药、大米", allergens: [] },
    { name: "番茄牛肉软饭", store: "小碗菜 · 4.8分 · 约28分钟", reason: "牛肉搭配主食和蔬菜，口味可选少油少辣，正餐结构更完整。", keywords: "牛肉嫩 / 米饭软 / 不油", price: "¥23.8", image: "assets/food/rice-bowl.jpg", badge: "高蛋白", verify: "93%", filters: ["综合推荐", "30分钟内", "评分 4.8+", "少糖"], ingredients: "牛肉、番茄、大米、西兰花", allergens: [] },
    { name: "莲藕排骨清汤", store: "汤先生 · 4.9分 · 约32分钟", reason: "温热清汤有饱腹感，莲藕和排骨口感温和，避免冰冷刺激。", keywords: "藕粉糯 / 肉量足 / 汤清", price: "¥22.8", image: "assets/food/chicken-soup.jpg", badge: "", verify: "94%", filters: ["综合推荐", "评分 4.8+", "少糖"], ingredients: "排骨、莲藕、胡萝卜、清汤", allergens: [] },
    { name: "菌菇豆腐煲配米饭", store: "家常小馆 · 4.8分 · 约26分钟", reason: "热食配主食更有饱腹感，菌菇豆腐版本不依赖重油重辣。", keywords: "豆腐嫩 / 菌菇多 / 清淡", price: "¥19.8", image: "assets/food/rice-bowl.jpg", badge: "快送", verify: "92%", filters: ["综合推荐", "30分钟内", "评分 4.8+", "少糖"], ingredients: "豆腐、香菇、口蘑、大米", allergens: [] }
  ],
  "胃不舒服": [
    { name: "南瓜山药软粥", store: "粥员外 · 4.9分 · 约24分钟", reason: "食材软烂、少油低刺激，胃部不适时更容易控制进食量。", keywords: "细腻 / 热乎 / 原味", price: "¥12.8", image: "assets/food/rice-bowl.jpg", badge: "最推荐", verify: "96%", filters: ["综合推荐", "30分钟内", "评分 4.8+", "少糖"], ingredients: "大米、南瓜、山药、小米", allergens: [] },
    { name: "青菜肉末软饭", store: "家常小馆 · 4.8分 · 约27分钟", reason: "软饭搭配少量肉末和青菜，兼顾能量与蛋白质，口味可做清淡。", keywords: "米饭软 / 肉末细 / 少油", price: "¥16.8", image: "assets/food/rice-bowl.jpg", badge: "快送", verify: "93%", filters: ["综合推荐", "30分钟内", "评分 4.8+", "少糖"], ingredients: "大米、猪瘦肉、青菜、胡萝卜", allergens: [] },
    { name: "冬瓜豆腐瘦肉汤", store: "汤好喝 · 4.9分 · 约31分钟", reason: "清汤少油，豆腐和瘦肉口感柔软，减少胃部消化负担。", keywords: "汤清 / 豆腐嫩 / 不咸", price: "¥18.8", image: "assets/food/chicken-soup.jpg", badge: "", verify: "94%", filters: ["综合推荐", "评分 4.8+", "少糖"], ingredients: "冬瓜、豆腐、猪瘦肉、清汤", allergens: [] },
    { name: "香菇青菜清汤面", store: "和府小面 · 4.8分 · 约25分钟", reason: "面条柔软、汤底清淡，可备注少油，不含辛辣调味。", keywords: "汤清 / 面软 / 青菜多", price: "¥15.9", image: "assets/food/noodle-soup.jpg", badge: "", verify: "92%", filters: ["综合推荐", "30分钟内", "评分 4.8+", "少糖"], ingredients: "小麦面、香菇、青菜、清汤", allergens: [] }
  ],
  "熬夜疲惫": [
    { name: "牛肉杂粮能量饭", store: "轻食记 · 4.9分 · 约28分钟", reason: "牛肉、杂粮和蔬菜搭配完整，酱汁分装，适合补充一顿正餐。", keywords: "牛肉嫩 / 杂粮香 / 菜量足", price: "¥24.8", image: "assets/food/rice-bowl.jpg", badge: "能量餐", verify: "95%", filters: ["综合推荐", "30分钟内", "评分 4.8+", "少糖"], ingredients: "牛肉、糙米、玉米、西兰花", allergens: [] },
    { name: "虾仁藜麦蔬菜碗", store: "麦田轻食 · 4.8分 · 约26分钟", reason: "虾仁和藜麦提供蛋白质与主食，蔬菜量充足，酱汁可分装。", keywords: "虾仁弹 / 蔬菜多 / 清爽", price: "¥25.8", image: "assets/food/steamed-fish.jpg", badge: "高蛋白", verify: "93%", filters: ["综合推荐", "30分钟内", "评分 4.8+", "少糖"], ingredients: "虾仁、藜麦、生菜、南瓜", allergens: ["海鲜"] },
    { name: "无糖坚果燕麦杯", store: "麦田轻食 · 4.9分 · 约22分钟", reason: "燕麦和香蕉提供简单能量，无额外糖浆，适合不想吃油腻正餐时选择。", keywords: "燕麦足 / 无糖浆 / 坚果香", price: "¥15.8", image: "assets/food/oatmeal.jpg", badge: "少糖", verify: "94%", filters: ["综合推荐", "30分钟内", "评分 4.8+", "少糖"], ingredients: "燕麦、香蕉、牛奶、杏仁、核桃", allergens: ["牛奶", "坚果"] },
    { name: "番茄菌菇牛肉汤", store: "汤先生 · 4.8分 · 约32分钟", reason: "温热汤食搭配牛肉和菌菇，少糖少油，减少继续摄入甜饮。", keywords: "牛肉足 / 汤热 / 菌菇鲜", price: "¥22.8", image: "assets/food/chicken-soup.jpg", badge: "", verify: "92%", filters: ["综合推荐", "评分 4.8+", "少糖"], ingredients: "牛肉、番茄、香菇、口蘑", allergens: [] }
  ],
  "酒后恢复": [
    { name: "番茄土豆疙瘩汤", store: "家常小馆 · 4.9分 · 约25分钟", reason: "温热汤食有一定饱腹感，面疙瘩柔软，适合胃口一般时少量进食。", keywords: "汤热 / 疙瘩软 / 不油", price: "¥15.8", image: "assets/food/noodle-soup.jpg", badge: "快送", verify: "94%", filters: ["综合推荐", "30分钟内", "评分 4.8+", "少糖"], ingredients: "小麦粉、番茄、土豆、青菜", allergens: [] },
    { name: "山药青菜瘦肉粥", store: "曼玲粥店 · 4.8分 · 约26分钟", reason: "粥体软烂、含水分较多，搭配少量瘦肉可补充简单能量。", keywords: "粥稠 / 山药软 / 肉末细", price: "¥16.8", image: "assets/food/rice-bowl.jpg", badge: "", verify: "95%", filters: ["综合推荐", "30分钟内", "评分 4.8+", "少糖"], ingredients: "大米、山药、青菜、猪瘦肉", allergens: [] },
    { name: "冬瓜玉米排骨汤", store: "汤好喝 · 4.9分 · 约32分钟", reason: "温热清汤能补充水分，口味比烧烤、炸物和重辣餐食更温和。", keywords: "汤清 / 玉米甜 / 排骨嫩", price: "¥22.8", image: "assets/food/chicken-soup.jpg", badge: "", verify: "93%", filters: ["综合推荐", "评分 4.8+", "少糖"], ingredients: "排骨、冬瓜、玉米、胡萝卜", allergens: [] },
    { name: "香蕉南瓜燕麦粥", store: "麦田轻食 · 4.8分 · 约23分钟", reason: "口感软糯，选择无糖无奶版本可简单补充碳水和水分。", keywords: "香蕉熟 / 南瓜甜 / 无糖浆", price: "¥14.8", image: "assets/food/oatmeal.jpg", badge: "少糖", verify: "92%", filters: ["综合推荐", "30分钟内", "评分 4.8+", "少糖"], ingredients: "燕麦、香蕉、南瓜、饮用水", allergens: [] }
  ]
};

const analysisFallbackFoods = [
  ["🥣", "山药瘦肉粥", "温热细腻，同时补充适量蛋白质。", "可备注少盐少油。"],
  ["🍲", "冬瓜瘦肉清汤", "清汤少油，能补充水分和饱腹感。", "汤底偏咸时少喝汤。"],
  ["🍚", "青菜肉末软饭", "软饭搭配蔬菜和肉末，正餐结构更完整。", "选择清淡做法。"],
  ["🍜", "香菇青菜汤面", "面条柔软、汤底温热，比较容易入口。", "备注不辣少油。"],
  ["🎃", "南瓜山药粥", "食材软烂，清淡且容易控制食量。", "需要控糖时选原味。"],
  ["🥬", "菌菇豆腐汤", "口味温和，豆腐和菌菇提供饱腹感。", "选择清汤版本。"]
];

const allergenPatterns = {
  "海鲜": /海鲜|鱼|虾|蟹|贝|鲍|鱿|蛤|鲈/,
  "牛奶": /牛奶|奶油|奶酪|芝士|乳制品|乳酪/,
  "坚果": /坚果|花生|腰果|杏仁|核桃|榛子|开心果/,
  "鸡蛋": /鸡蛋|蛋羹|蒸蛋|滑蛋|荷包蛋|卤蛋|蛋花|蛋炒|蛋黄|蛋白(?!质)/,
  "香菜": /香菜|芫荽/
};

const toast = document.querySelector("#toast");
const homeStateText = document.querySelector("#homeStateText");
const currentStateIcon = document.querySelector("#currentStateIcon");
const currentStateName = document.querySelector("#currentStateName");
const currentStateAdvice = document.querySelector("#currentStateAdvice");
const analysisStateName = document.querySelector("#analysisStateName");
const analysisSummary = document.querySelector("#analysisSummary");
const analysisAdviceTitle = document.querySelector("#analysisAdviceTitle");
const analysisAdviceTag = document.querySelector("#analysisAdviceTag");
const analysisAdviceLead = document.querySelector("#analysisAdviceLead");
const analysisEatText = document.querySelector("#analysisEatText");
const analysisBenefitText = document.querySelector("#analysisBenefitText");
const analysisAvoidText = document.querySelector("#analysisAvoidText");
const resultTitle = document.querySelector("#resultTitle");
const resultSubtitle = document.querySelector("#resultSubtitle");
const statePicker = document.querySelector("#statePicker");
const feedbackCard = document.querySelector("#feedbackCard");
const verifiedProductList = document.querySelector(".verified-product-list");
const resultRestriction = document.querySelector("#resultRestriction");
const detailProductImage = document.querySelector("#detailProductImage");
const detailProductPrice = document.querySelector("#detailProductPrice");
const detailBottomPrice = document.querySelector("#detailBottomPrice");
const detailProductName = document.querySelector("#detailProductName");
const detailVerifyBadge = document.querySelector("#detailVerifyBadge");
const detailRating = document.querySelector("#detailRating");
const detailTags = document.querySelector("#detailTags");
const detailStateTag = document.querySelector("#detailStateTag");
const detailReason = document.querySelector("#detailReason");
const detailSafetyNote = document.querySelector("#detailSafetyNote");
const detailStoreName = document.querySelector("#detailStoreName");
const detailDelivery = document.querySelector("#detailDelivery");
const detailIngredients = document.querySelector("#detailIngredients");
const detailPraiseRate = document.querySelector("#detailPraiseRate");
const detailReviewKeywords = document.querySelector("#detailReviewKeywords");
const detailReviewText = document.querySelector("#detailReviewText");
const detailCartCount = document.querySelector("#detailCartCount");
const cartSheet = document.querySelector("#cartSheet");
const cartItemsElement = document.querySelector("#cartItems");
const cartSelectAll = document.querySelector("#cartSelectAll");
const cartTotal = document.querySelector("#cartTotal");
const cartSelectedCount = document.querySelector("#cartSelectedCount");
const goCheckoutButton = document.querySelector("#goCheckoutButton");
const checkoutItems = document.querySelector("#checkoutItems");
const checkoutSubtotal = document.querySelector("#checkoutSubtotal");
const checkoutPackingFee = document.querySelector("#checkoutPackingFee");
const checkoutDiscount = document.querySelector("#checkoutDiscount");
const checkoutTotal = document.querySelector("#checkoutTotal");
const checkoutSavings = document.querySelector("#checkoutSavings");

let selectedState = "嗓子疼";
let currentFlowStep = "supplement";
let activeResultFilter = "综合推荐";
let renderedProducts = [];
let currentProduct = null;
let cartItems = [];
let toastTimer;

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function showPage(pageName) {
  Object.entries(pages).forEach(([name, page]) => {
    page.classList.toggle("is-active", name === pageName);
  });
  const activePage = pages[pageName];
  if (activePage) activePage.scrollTop = 0;
  window.scrollTo({ top: 0, behavior: "instant" });
}

function setHash(hash) {
  history.replaceState({}, "", hash);
}

function priceValue(price) {
  return Number.parseFloat(String(price).replace(/[^\d.]/g, "")) || 0;
}

function money(value) {
  return `¥${value.toFixed(2)}`;
}

function cartItemId(product) {
  return `${product.name}::${product.store}`;
}

function selectedCartItems() {
  return cartItems.filter((item) => item.selected && item.quantity > 0);
}

function updateCartBadge() {
  const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  detailCartCount.textContent = count;
}

function renderCart() {
  const selectedItems = selectedCartItems();
  const selectedQuantity = selectedItems.reduce((sum, item) => sum + item.quantity, 0);
  const selectedTotal = selectedItems.reduce((sum, item) =>
    sum + priceValue(item.product.price) * item.quantity, 0
  );
  const allSelected = cartItems.length > 0 && cartItems.every((item) => item.selected);

  cartItemsElement.innerHTML = cartItems.length ? cartItems.map((item) => `
    <article class="cart-item" data-cart-id="${item.id}">
      <label class="cart-check">
        <input type="checkbox" data-cart-action="select" ${item.selected ? "checked" : ""} aria-label="选择${item.product.name}">
      </label>
      <img src="${item.product.image}" alt="${item.product.name}">
      <div class="cart-item-main">
        <h3>${item.product.name}</h3>
        <p>${item.product.ingredients || inferIngredients(item.product.name)}</p>
        <div class="cart-item-bottom">
          <strong>${item.product.price}</strong>
          <div class="quantity-control" aria-label="${item.product.name}数量">
            <button type="button" data-cart-action="decrease" aria-label="减少${item.product.name}">−</button>
            <span>${item.quantity}</span>
            <button type="button" data-cart-action="increase" aria-label="增加${item.product.name}">＋</button>
          </div>
        </div>
      </div>
    </article>
  `).join("") : `
    <div class="cart-empty">
      <span>🛒</span><b>购物车还是空的</b><p>返回推荐列表挑选适合当前状态的餐品吧</p>
    </div>
  `;

  cartSelectAll.checked = allSelected;
  cartSelectAll.disabled = cartItems.length === 0;
  cartTotal.textContent = money(selectedTotal);
  cartSelectedCount.textContent = `已选 ${selectedQuantity} 件`;
  goCheckoutButton.disabled = selectedItems.length === 0;
  updateCartBadge();
}

function addToCart(product) {
  const id = cartItemId(product);
  const existingItem = cartItems.find((item) => item.id === id);

  if (existingItem) {
    existingItem.quantity += 1;
    existingItem.selected = true;
  } else {
    cartItems.push({ id, product: { ...product }, quantity: 1, selected: true });
  }
  renderCart();
}

function openCart() {
  renderCart();
  cartSheet.hidden = false;
}

function closeCart() {
  cartSheet.hidden = true;
}

function renderCheckout() {
  const items = selectedCartItems();
  const subtotal = items.reduce((sum, item) =>
    sum + priceValue(item.product.price) * item.quantity, 0
  );
  const packingFee = items.length * 1.2;
  const discount = subtotal > 0 ? Math.min(4, Math.max(1, subtotal * .08)) : 0;
  const total = Math.max(0, subtotal + packingFee - discount);

  checkoutItems.innerHTML = items.map((item) => `
    <article class="checkout-item">
      <img src="${item.product.image}" alt="${item.product.name}">
      <div><h3>${item.product.name}</h3><p>${item.quantity} 份 · ${item.product.ingredients || inferIngredients(item.product.name)}</p></div>
      <strong>${money(priceValue(item.product.price) * item.quantity)}</strong>
    </article>
  `).join("");
  checkoutSubtotal.textContent = money(subtotal);
  checkoutPackingFee.textContent = money(packingFee);
  checkoutDiscount.textContent = `-${money(discount)}`;
  checkoutTotal.textContent = money(total);
  checkoutSavings.textContent = `已优惠 ${money(discount + 3)}`;
}

function selectedAllergens() {
  return selectedChoice("过敏").filter((item) => item !== "＋ 自定义");
}

function inferIngredients(name) {
  if (/粥/.test(name)) return "大米、小米、时令配料、饮用水";
  if (/面|疙瘩/.test(name)) return "小麦面、时令蔬菜、清汤";
  if (/汤/.test(name)) return "主料、时令蔬菜、清汤";
  if (/鱼/.test(name)) return "鲜鱼、姜、葱、蒸鱼汁";
  if (/饭/.test(name)) return "大米、主菜、时令蔬菜";
  if (/水果|雪梨/.test(name)) return "新鲜水果、饮用水";
  if (/燕麦/.test(name)) return "燕麦、香蕉、南瓜";
  return "当日新鲜主料、时令配菜";
}

const productImageRules = [
  [/电解质/, "assets/food/electrolyte-drink.png"],
  [/雪梨|银耳/, "assets/food/pear-tremella-soup.png"],
  [/虾仁|藜麦/, "assets/food/shrimp-quinoa-bowl.png"],
  [/番茄.*(?:土豆|菌菇).*牛肉汤|番茄牛肉汤/, "assets/food/tomato-potato-beef-soup.png"],
  [/番茄.*牛肉.*饭|牛肉蔬菜饭|牛肉杂粮|牛肉能量饭|少油牛肉饭/, "assets/food/tomato-beef-rice.png"],
  [/(?:冬瓜|玉米|莲藕|山药).*排骨|排骨.*汤/, "assets/food/winter-melon-rib-soup.png"],
  [/菌菇豆腐.*面|香菇青菜.*面/, "assets/food/mushroom-tofu-noodles.png"],
  [/青菜.*瘦肉粥|蔬菜瘦肉粥|山药.*瘦肉粥|青菜肉末|蔬菜粥/, "assets/food/pork-vegetable-congee.png"],
  [/南瓜.*粥|南瓜.*燕麦/, "assets/food/pumpkin-yam-congee.png"],
  [/红枣|百合莲子|红豆山药/, "assets/food/red-date-lotus-millet-congee.png"],
  [/白粥|原味.*粥/, "assets/food/plain-congee.png"],
  [/香蕉.*燕麦|坚果燕麦/, "assets/food/banana-nut-oatmeal.png"],
  [/蒸蛋|蛋羹/, "assets/food/steamed-egg.jpg"],
  [/清蒸.*鱼|鲈鱼/, "assets/food/steamed-fish.jpg"],
  [/鸡汤/, "assets/food/chicken-soup.jpg"],
  [/鸡丝面|汤面|清汤面/, "assets/food/noodle-soup.jpg"],
  [/水果杯|鲜切水果/, "assets/food/fruit-cup.jpg"]
];

function imageForProduct(name, fallback) {
  const match = productImageRules.find(([pattern]) => pattern.test(name));
  return match ? match[1] : fallback;
}

function normalizeProduct(entry) {
  if (!Array.isArray(entry)) {
    return {
      badge: "",
      verify: "92%",
      filters: ["综合推荐"],
      allergens: [],
      ...entry,
      image: imageForProduct(entry.name, entry.image)
    };
  }

  const [name, store, reason, keywords, price, image, badge, verify] = entry;
  return {
    name,
    store,
    reason,
    keywords,
    price,
    image: imageForProduct(name, image),
    badge,
    verify,
    filters: [activeResultFilter],
    ingredients: inferIngredients(name),
    allergens: []
  };
}

function allergensForProduct(product) {
  const detected = new Set(product.allergens || []);
  const searchableText = [
    product.name,
    product.ingredients,
    product.reason,
    product.keywords
  ].filter(Boolean).join(" ");

  Object.entries(allergenPatterns).forEach(([allergen, pattern]) => {
    if (pattern.test(searchableText)) detected.add(allergen);
  });
  return [...detected];
}

function isProductAllowed(product, allergies = selectedAllergens()) {
  const productAllergens = allergensForProduct(product);
  return !allergies.some((allergen) => productAllergens.includes(allergen));
}

function productsForCurrentFilter() {
  const stateCatalog = resultCatalog[selectedState] || resultCatalog["嗓子疼"];
  const baseProducts = stateCatalog[activeResultFilter] || stateCatalog["综合推荐"];
  const extraProducts = (additionalProducts[selectedState] || [])
    .filter((product) => product.filters.includes(activeResultFilter));
  const allergies = selectedAllergens();
  const candidates = [...baseProducts, ...extraProducts].map(normalizeProduct);
  const uniqueProducts = candidates.filter((product, index, list) =>
    list.findIndex((item) => item.name === product.name) === index
  );
  const allowedProducts = uniqueProducts.filter((product) => isProductAllowed(product, allergies));

  resultRestriction.hidden = allergies.length === 0;
  if (allergies.length) {
    const excludedCount = uniqueProducts.length - allowedProducts.length;
    resultRestriction.textContent = excludedCount
      ? `已启用硬性忌口：${allergies.join("、")}，本组已排除 ${excludedCount} 道相关餐品`
      : `已启用硬性忌口：${allergies.join("、")}，当前结果均未发现相关食材`;
  }

  return allowedProducts;
}

function renderResultFilters() {
  document.querySelectorAll(".result-filters button").forEach((button) => {
    button.classList.toggle("selected", button.textContent.trim() === activeResultFilter);
  });
}

function renderResultProducts() {
  const products = productsForCurrentFilter();
  renderedProducts = products;
  verifiedProductList.innerHTML = products.length ? products.map((product, index) => `
    <article class="verified-product" data-product-index="${index}">
      <div class="verified-image">
        <img src="${product.image}" alt="${product.name}">
        ${product.badge ? `<b>${product.badge}</b>` : ""}
      </div>
      <div class="verified-main">
        <h3>${product.name}</h3>
        <p class="store-line">${product.store}</p>
        <div class="verify-reason"><b>推荐理由</b><span>${product.reason}</span></div>
        <p class="verify-line">✦ AI核验：评论图文一致度 <b>${product.verify}</b></p>
        <p class="keyword-line">用户评价关键词：${product.keywords}</p>
        <div class="product-bottom"><strong>${product.price}</strong><button class="order-button" type="button" aria-label="查看${product.name}详情">＋ 加入</button></div>
      </div>
    </article>
  `).join("") : `
    <div class="empty-recommendation">
      <b>没有符合全部忌口条件的餐品</b>
      <p>请调整筛选条件，系统不会用含有已选忌口食材的餐品补位。</p>
    </div>
  `;
  feedbackCard.hidden = true;
}

function renderAnalysisFoods() {
  const profile = stateProfiles[selectedState];
  const allergies = selectedAllergens();
  const foods = [...profile.foods, ...analysisFallbackFoods]
    .filter(([icon, name, reason, note], index, list) =>
      list.findIndex((item) => item[1] === name) === index
    )
    .filter(([icon, name, reason, note]) => isProductAllowed({
      name,
      reason,
      keywords: note,
      ingredients: inferIngredients(name),
      allergens: []
    }, allergies))
    .slice(0, 4);

  document.querySelector(".analysis-food-list").innerHTML = foods.map(([icon, name, reason, note]) => `
    <article><span>${icon}</span><div><h3>${name}</h3><p><b>推荐原因：</b>${reason}</p><small><b>注意：</b>${note}</small></div></article>
  `).join("");
  return foods;
}

function updateSelectedState(stateName) {
  selectedState = stateProfiles[stateName] ? stateName : "嗓子疼";
  const profile = stateProfiles[selectedState];

  homeStateText.textContent = selectedState;
  currentStateIcon.textContent = profile.icon;
  currentStateName.textContent = selectedState;
  currentStateAdvice.textContent = profile.advice;
  analysisStateName.textContent = `当前状态：${selectedState}`;
  analysisAdviceTitle.textContent = profile.analysis.title;
  analysisAdviceTag.textContent = profile.analysis.tag;
  analysisAdviceLead.textContent = profile.analysis.lead;
  analysisEatText.textContent = profile.analysis.eat;
  analysisBenefitText.textContent = profile.analysis.benefit;
  analysisAvoidText.textContent = profile.analysis.avoid;
  resultTitle.textContent = `适合${selectedState}的外卖推荐`;
  resultSubtitle.textContent = `已为你优先筛选：${profile.direction}的餐食`;

  document.querySelector(".choice-section h3").childNodes[0].textContent = `${profile.question} `;
  document.querySelectorAll("[data-quick-state]").forEach((button) => {
    button.classList.toggle("selected", button.dataset.quickState === selectedState);
  });
  document.querySelectorAll(".flow-state").forEach((button) => {
    button.classList.toggle("selected", button.dataset.flowState === selectedState);
  });

  renderAnalysisFoods();

  activeResultFilter = "综合推荐";
  renderResultFilters();
  renderResultProducts();
}

function selectedChoice(groupName) {
  return [...document.querySelectorAll(`[data-choice-group="${groupName}"] .choice-chip.selected`)]
    .map((button) => button.textContent.replace(/[♨️🍚🍯🥣😶🧊🌶️🍗]/gu, "").trim());
}

function updateAnalysisSummary() {
  const profile = stateProfiles[selectedState];
  const severity = selectedChoice("程度")[0] || "轻微不适";
  const craving = selectedChoice("想吃")[0] || "想喝热的";
  const avoid = selectedChoice("避开");
  const allergy = selectedAllergens();
  const parts = [severity, craving];

  if (avoid.length) parts.push(`避开${avoid.join("、")}`);
  if (allergy.length) parts.push(`忌口${allergy.join("、")}`);
  analysisSummary.textContent = parts.join("｜");

  const directionCard = document.querySelector(".direction-tags");
  directionCard.innerHTML = profile.direction
    .split("、")
    .map((label) => `<span>${label}</span>`)
    .join("");
  const safeFoods = renderAnalysisFoods();
  analysisAdviceLead.textContent = allergy.length
    ? `已将${allergy.join("、")}设为硬性忌口。结合你当前的${selectedState}状态，系统只会保留配料不涉及这些食材、并符合${profile.direction}方向的餐食。`
    : profile.analysis.lead;
  analysisEatText.textContent = allergy.length
    ? safeFoods.map((food) => food[1]).join("、")
    : profile.analysis.eat;
  analysisAvoidText.textContent = [...profile.analysis.avoid.split("、"), ...allergy]
    .filter((item, index, list) => list.indexOf(item) === index)
    .join("、");
}

function showFlowStep(stepName) {
  currentFlowStep = flowSteps.includes(stepName) ? stepName : "supplement";
  const currentIndex = flowSteps.indexOf(currentFlowStep);

  document.querySelectorAll(".flow-step").forEach((step) => {
    step.classList.toggle("is-active", step.dataset.flowStep === currentFlowStep);
  });

  const progressItems = [...document.querySelectorAll("[data-progress-step]")];
  progressItems.forEach((item, index) => {
    item.classList.toggle("active", index === currentIndex);
    item.classList.toggle("done", index < currentIndex);
  });

  document.querySelectorAll(".flow-progress > i").forEach((line, index) => {
    line.classList.toggle("done", index < currentIndex);
  });

  pages.assistant.scrollTop = 0;
  setHash(currentFlowStep === "supplement" ? "#assistant" : `#${currentFlowStep}`);
}

function openAssistant(stateName = selectedState) {
  updateSelectedState(stateName);
  showPage("assistant");
  showFlowStep("supplement");
}

function openProductDetail(product) {
  currentProduct = product;
  const ratingMatch = product.store.match(/4\.\d/);
  const deliveryMatch = product.store.match(/约\d+分钟/);
  const storeName = product.store.split("·")[0].trim();
  const keywords = product.keywords.split("/").map((item) => item.trim()).filter(Boolean);
  const selectedRestrictions = selectedAllergens();
  const directionTags = stateProfiles[selectedState].direction.split("、").slice(0, 3);
  const praiseRate = Math.min(99, Number.parseInt(product.verify, 10) + 2);

  detailProductImage.src = product.image;
  detailProductImage.alt = product.name;
  detailProductPrice.textContent = product.price;
  detailBottomPrice.textContent = product.price;
  detailProductName.textContent = product.name;
  detailVerifyBadge.textContent = `图文核验 ${product.verify}`;
  detailRating.textContent = `${ratingMatch ? ratingMatch[0] : "4.8"}分`;
  detailTags.innerHTML = [...directionTags, "可备注少油少盐"]
    .map((tag) => `<span>${tag}</span>`)
    .join("");
  detailStateTag.textContent = stateProfiles[selectedState].analysis.tag;
  detailReason.textContent = product.reason;
  detailSafetyNote.textContent = selectedRestrictions.length
    ? `已按你的忌口核验：该商品未发现${selectedRestrictions.join("、")}相关食材。下单前仍建议查看商家完整配料表。`
    : "当前未设置食物忌口。下单前如有过敏，请再次核对商家完整配料表。";
  detailStoreName.textContent = storeName;
  detailDelivery.textContent = `${deliveryMatch ? deliveryMatch[0] : "约30分钟"} · 2.6km`;
  detailIngredients.textContent = product.ingredients || inferIngredients(product.name);
  detailPraiseRate.textContent = `好评率 ${praiseRate}%`;
  detailReviewKeywords.innerHTML = keywords.map((keyword) => `<span>${keyword}</span>`).join("");
  detailReviewText.textContent = `${keywords.join("，")}。包装完整，送到时状态不错，会考虑再次购买。`;
  document.querySelector("#detailFavorite").classList.remove("selected");
  document.querySelector("#detailFavorite").textContent = "☆";

  showPage("detail");
  document.querySelector(".detail-scroll").scrollTop = 0;
  setHash("#product");
}

document.querySelector("#openAssistant").addEventListener("click", () => openAssistant());

document.querySelectorAll("[data-quick-state]").forEach((button) => {
  button.addEventListener("click", () => openAssistant(button.dataset.quickState));
});

document.querySelector("#historyButton").addEventListener("click", () => {
  showPage("report");
  setHash("#report");
});

document.querySelector("#assistantHistory").addEventListener("click", () => {
  showPage("report");
  setHash("#report");
});

document.querySelector("#reportBack").addEventListener("click", () => {
  showPage("home");
  setHash("#home");
});

document.querySelector("#assistantBack").addEventListener("click", () => {
  const stepIndex = flowSteps.indexOf(currentFlowStep);
  if (stepIndex > 0) {
    showFlowStep(flowSteps[stepIndex - 1]);
    return;
  }
  showPage("home");
  setHash("#home");
});

document.querySelector("#changeStateButton").addEventListener("click", () => {
  statePicker.hidden = !statePicker.hidden;
});

document.querySelectorAll(".flow-state").forEach((button) => {
  button.addEventListener("click", () => {
    updateSelectedState(button.dataset.flowState);
    statePicker.hidden = true;
  });
});

document.querySelectorAll(".single-choice").forEach((group) => {
  group.addEventListener("click", (event) => {
    const button = event.target.closest(".choice-chip");
    if (!button) return;
    group.querySelectorAll(".choice-chip").forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
  });
});

document.querySelectorAll(".multi-choice").forEach((group) => {
  group.addEventListener("click", (event) => {
    const button = event.target.closest(".choice-chip");
    if (!button) return;
    if (button.classList.contains("custom-choice")) {
      showToast("原型中可在这里填写自定义忌口");
      return;
    }
    button.classList.toggle("selected");
    if (group.dataset.choiceGroup === "过敏") {
      renderAnalysisFoods();
      if (currentFlowStep === "results") renderResultProducts();
    }
  });
});

document.querySelector("#viewAnalysisButton").addEventListener("click", () => {
  updateAnalysisSummary();
  showFlowStep("analysis");
});

document.querySelector("#generateResultsButton").addEventListener("click", () => {
  renderResultProducts();
  showFlowStep("results");
  showToast("AI 已完成商家履约与评论一致性核验");
});

document.querySelectorAll(".result-filters button").forEach((button) => {
  button.addEventListener("click", () => {
    activeResultFilter = button.textContent.trim();
    renderResultFilters();
    renderResultProducts();
    showToast(`已切换「${activeResultFilter}」推荐`);
  });
});

verifiedProductList.addEventListener("click", (event) => {
  const button = event.target.closest(".order-button");
  if (!button) return;
  const productIndex = Number(button.closest(".verified-product").dataset.productIndex);
  const product = renderedProducts[productIndex];
  if (product) openProductDetail(product);
});

document.querySelector("#detailBack").addEventListener("click", () => {
  showPage("assistant");
  showFlowStep("results");
});

document.querySelector("#detailFavorite").addEventListener("click", (event) => {
  const button = event.currentTarget;
  const isSelected = button.classList.toggle("selected");
  button.textContent = isSelected ? "★" : "☆";
  showToast(isSelected ? "已收藏该商品" : "已取消收藏");
});

document.querySelector("#detailShare").addEventListener("click", () => {
  showToast("商品分享卡片已生成");
});

document.querySelector("#detailAddButton").addEventListener("click", () => {
  if (!currentProduct) return;
  addToCart(currentProduct);
  feedbackCard.hidden = false;
  showToast(`已将${currentProduct.name}加入购物车`);
});

document.querySelector("#detailCartButton").addEventListener("click", openCart);
document.querySelector("#cartBackdrop").addEventListener("click", closeCart);

document.querySelector("#clearCartButton").addEventListener("click", () => {
  cartItems = [];
  renderCart();
  showToast("购物车已清空");
});

cartSelectAll.addEventListener("change", () => {
  cartItems.forEach((item) => {
    item.selected = cartSelectAll.checked;
  });
  renderCart();
});

cartItemsElement.addEventListener("change", (event) => {
  const checkbox = event.target.closest('[data-cart-action="select"]');
  if (!checkbox) return;
  const itemElement = checkbox.closest(".cart-item");
  const item = cartItems.find((entry) => entry.id === itemElement.dataset.cartId);
  if (!item) return;
  item.selected = checkbox.checked;
  renderCart();
});

cartItemsElement.addEventListener("click", (event) => {
  const button = event.target.closest("[data-cart-action]");
  if (!button || button.dataset.cartAction === "select") return;
  const itemElement = button.closest(".cart-item");
  const item = cartItems.find((entry) => entry.id === itemElement.dataset.cartId);
  if (!item) return;

  if (button.dataset.cartAction === "increase") {
    item.quantity += 1;
  } else if (button.dataset.cartAction === "decrease" && item.quantity > 1) {
    item.quantity -= 1;
  } else if (button.dataset.cartAction === "decrease") {
    cartItems = cartItems.filter((entry) => entry.id !== item.id);
  }
  renderCart();
});

goCheckoutButton.addEventListener("click", () => {
  if (!selectedCartItems().length) return;
  closeCart();
  renderCheckout();
  showPage("checkout");
  setHash("#checkout");
});

document.querySelector("#checkoutBack").addEventListener("click", () => {
  showPage("detail");
  setHash("#product");
  openCart();
});

document.querySelectorAll(".checkout-mode button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".checkout-mode button").forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
    showToast(button.textContent.trim() === "到店自取" ? "已切换为到店自取" : "已切换为外卖配送");
  });
});

document.querySelectorAll(".delivery-choice").forEach((choice) => {
  choice.addEventListener("click", () => {
    document.querySelectorAll(".delivery-choice").forEach((item) => item.classList.remove("selected"));
    choice.classList.add("selected");
  });
});

document.querySelector("#checkoutRemark").closest("button").addEventListener("click", () => {
  showToast("已使用健康备注：少油少盐，不要香菜");
});

document.querySelector("#checkoutUtensils").closest("button").addEventListener("click", () => {
  const value = document.querySelector("#checkoutUtensils");
  value.textContent = value.textContent.includes("无需") ? "需要 1 份餐具 ›" : "无需餐具 ›";
});

document.querySelector("#payNowButton").addEventListener("click", () => {
  showToast("订单已提交，正在等待商家接单");
});

document.querySelectorAll(".feedback-main button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".feedback-main button").forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
    showToast("反馈已记录，将用于优化下次推荐");
  });
});

document.querySelectorAll(".feedback-reasons button").forEach((button) => {
  button.addEventListener("click", () => button.classList.toggle("selected"));
});

document.querySelector("#searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  showToast("AI 正在结合你的状态搜索附近餐品");
});

document.querySelectorAll(".nav-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".nav-tab").forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    if (tab.textContent.trim() === "自取") showToast("已切换到自取频道");
  });
});

document.querySelector("#shareButton").addEventListener("click", async () => {
  const shareData = {
    title: "我的状态周报",
    text: "这周 AI 为我匹配了 7 次更合适的餐品，推荐命中率 93%。"
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }
  showToast("周报分享卡片已生成");
});

document.querySelectorAll(".reminder-list button").forEach((button) => {
  button.addEventListener("click", () => showToast("下周饮食提醒已开启"));
});

updateSelectedState(selectedState);
renderCart();

if (location.hash === "#report") {
  showPage("report");
} else if (location.hash === "#checkout" && selectedCartItems().length) {
  renderCheckout();
  showPage("checkout");
} else if (location.hash === "#analysis" || location.hash === "#results" || location.hash === "#assistant") {
  showPage("assistant");
  showFlowStep(location.hash.slice(1) === "assistant" ? "supplement" : location.hash.slice(1));
} else {
  showPage("home");
}
