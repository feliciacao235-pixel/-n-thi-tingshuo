// Dữ liệu thành ngữ theo từng Unit
const IDIOMS_DATA = {
    4: [
        {
            chinese: "无拘无束",
            pinyin: "wújū-wúshù",
            meaning: "Tự do tự tại / Không gò bó",
            example: "他的父母非常疼爱她，给了她无拘无束的童年。"
        },
        {
            chinese: "江山易改，本性难移",
            pinyin: "jiāngshān yì gǎi, běnxìng nán yí",
            meaning: "Giang sơn dễ đổi, bản tính khó dời",
            example: "10年后，他又因为盗窃被抓进警察局了，真是江山易改，本性难移。"
        },
        {
            chinese: "十全十美",
            pinyin: "shíquán-shíměi",
            meaning: "Mười phân vẹn mười / Hoàn mỹ",
            example: "世界上就没有十全十美的人，所以我们要学会宽容。"
        },
        {
            chinese: "天上掉馅饼",
            pinyin: "tiān shang diào xiànbǐng",
            meaning: "Bánh bao từ trên trời rơi xuống / Há miệng chờ sung",
            example: "现在出现的很多诈骗利用的都是人们相信天上掉馅饼的心理。"
        }
    ],
    5: [
        {
            chinese: "分道扬镳",
            pinyin: "fēndào-yángbiāo",
            meaning: "Mỗi người một ngả / Đường ai nấy đi",
            example: "现在许多歌唱组合都解散了，组员们分道扬镳。"
        },
        {
            chinese: "稳扎稳打",
            pinyin: "wěnzhā-wěndǎ",
            meaning: "Đánh chắc thắng chắc / Từng bước vững chắc",
            example: "体育训练必须稳扎稳打，一步一个脚印。"
        },
        {
            chinese: "水到渠成",
            pinyin: "shuǐdào-qúchéng",
            meaning: "Nước chảy thành mương",
            example: "莫言获得诺贝尔文学奖是水到渠成的事。"
        },
        {
            chinese: "鱼和熊掌不可兼得",
            pinyin: "yú hé xióngzhǎng bùkě jiān dé",
            meaning: "Cá và tay gấu không thể cùng có",
            example: "金钱和健康在现代社会似乎成了一个鱼和熊掌不可兼得的问题。"
        }
    ],
    6: [
        {
            chinese: "哑口无言",
            pinyin: "yǎkǒu-wúyán",
            meaning: "Câm nín / Không nói được lời nào",
            example: "面对警察的质问，犯人哑口无言，只得承认自己的罪行。"
        },
        {
            chinese: "知足常乐",
            pinyin: "zhīzú-chánglè",
            meaning: "Biết đủ là hạnh phúc",
            example: "从小爸爸就教育我要知足常乐，所以我一直都觉得比较幸福。"
        },
        {
            chinese: "有钱能使鬼推磨",
            pinyin: "yǒu qián néng shǐ guǐ tuī mò",
            meaning: "Có tiền khiến quỷ kéo cối xay",
            example: "为什么会出现贪污腐败，就是因为那些行贿者有有钱能使鬼推磨的想法。"
        }
    ],
    9: [
        {
            chinese: "鸦雀无声",
            pinyin: "yāquè-wúshēng",
            meaning: "Lặng ngắt như tờ / Im phăng phắc",
            example: "开始考试了，教室里鸦雀无声，非常安静。"
        },
        {
            chinese: "众所周知",
            pinyin: "zhòngsuǒzhōuzhī",
            meaning: "Ai ai cũng biết / Mọi người đều biết",
            example: "众所周知，每个人的学习情况都不一样。"
        },
        {
            chinese: "朝夕相处",
            pinyin: "zhāoxī-xiāngchǔ",
            meaning: "Bên nhau sớm tối / Sớm tối có nhau",
            example: "情侣之间朝夕相处，有时候，对方一个眼神，就知道他是什么意思。"
        },
        {
            chinese: "一刀切",
            pinyin: "yīdāoqiē",
            meaning: "Cào bằng / Đánh đồng",
            example: "生活中，我们遇到一些问题时，不能一刀切，应该一分为二地看待。"
        },
        {
            chinese: "针锋相对",
            pinyin: "zhēnfēng-xiāngduì",
            meaning: "Đối chọi gay gắt / Ăn miếng trả miếng",
            example: "大学生辩论会中，甲方与乙方的观点一般是针锋相对的。"
        }
    ],
    10: [
        {
            chinese: "十八般武艺",
            pinyin: "shíbā bān wǔyì",
            meaning: "Mười tám ban võ nghệ",
            example: "我什么都会，十八般武艺，样样都会！"
        },
        {
            chinese: "五花八门",
            pinyin: "wǔhuā-bāmén",
            meaning: "Muôn hình muôn vẻ / Đa dạng phong phú",
            example: "我和朋友去逛庙会，里面有各种各样的老北京小吃，真是五花八门。"
        },
        {
            chinese: "水可载舟亦可覆舟",
            pinyin: "shuǐ kě zài zhōu yì kě fù zhōu",
            meaning: "Nước có thể nâng thuyền, cũng có thể lật thuyền",
            example: "管理者要明白水可载舟亦可覆舟的道理，真心对待众人。"
        }
    ],
    11: [
        {
            chinese: "寸步难行",
            pinyin: "cùnbù-nánxíng",
            meaning: "Nửa bước cũng khó đi / Bước đi gian nan",
            example: "如果没有摩托车，那简直是寸步难行。"
        },
        {
            chinese: "束手无策",
            pinyin: "shùshǒu-wúcè",
            meaning: "Bó tay hết cách / Vô phương cứu chữa",
            example: "面对已经摔坏的电脑，这位电脑高手也有点儿束手无策。"
        },
        {
            chinese: "随心所欲",
            pinyin: "suíxīnsuǒyù",
            meaning: "Tùy tâm sở dục / Làm theo ý muốn",
            example: "即使是皇帝也不能随心所欲，想做什么就做什么。"
        },
        {
            chinese: "死记硬背",
            pinyin: "sǐjì-yìngbèi",
            meaning: "Học vẹt / Ghi nhớ máy móc",
            example: "我们应该充分理解词语的意思和用法，而不是死记硬背。"
        }
    ]
};


// Dữ liệu bài tập theo từng Unit
const EXERCISES_DATA = {
    4: [
        // Bài tập chọn thành ngữ
        {
            type: "idiom",
            question: "现在出现的很多诈骗利用的都是人们相信_____的心理。",
            options: ["无拘无束", "天上掉馅饼", "十全十美", "江山易改，本性难移"],
            correct: 1,
            explanation: "Câu này nói về tâm lý chờ đợi may mắn từ trên trời rơi xuống, nên dùng '天上掉馅饼'."
        },
        {
            type: "idiom",
            question: "10年后，他又因为盗窃被抓进警察局了，真是_____。",
            options: ["无拘无束", "天上掉馅饼", "十全十美", "江山易改，本性难移"],
            correct: 3,
            explanation: "Anh ta vẫn phạm tội sau 10 năm, cho thấy bản tính khó thay đổi: '江山易改，本性难移'."
        },
        {
            type: "idiom",
            question: "世界上就没有_____的人，所以我们要学会宽容。",
            options: ["无拘无束", "天上掉馅饼", "十全十美", "江山易改，本性难移"],
            correct: 2,
            explanation: "Không ai hoàn hảo cả, nên dùng '十全十美' (hoàn mỹ)."
        },
        {
            type: "idiom",
            question: "他的父母非常疼爱她，给了她_____的童年。",
            options: ["无拘无束", "天上掉馅饼", "十全十美", "江山易改，本性难移"],
            correct: 0,
            explanation: "Tuổi thơ tự do tự tại, không bị ràng buộc: '无拘无束'."
        },
        // Bài tập hoàn thành hội thoại
        {
            type: "structure",
            structure: "A是A，B是B",
            question: "朋友：我担心自己的长相不是很出众。<br>你：长相___长相，汉语___汉语，汉语比赛怎么会考虑长相问题呢？",
            blanks: ["是", "是"],
            hints: "Điền chữ thích hợp vào chỗ trống để hoàn thành cấu trúc A是A，B是B"
        },
        {
            type: "structure",
            structure: "要A有A，要B有B",
            question: "我很羡慕公司老总的生活，因为他___房___房，___车___车。",
            blanks: ["要", "有", "要", "有"],
            hints: "Điền chữ thích hợp để tạo thành cấu trúc 要A有A，要B有B"
        },
        {
            type: "structure",
            structure: "A也好，B也好",
            question: "___成功___好，___失败___好，这都是一次经历啊！",
            blanks: ["", "也", "", "也"],
            hints: "Điền chữ thích hợp vào chỗ trống"
        }
    ],
    5: [
        {
            type: "idiom",
            question: "现在许多歌唱组合都解散了，组员们_____。",
            options: ["分道扬镳", "稳扎稳打", "水到渠成", "鱼和熊掌不可兼得"],
            correct: 0,
            explanation: "Các thành viên đi riêng từng người: '分道扬镳'."
        },
        {
            type: "idiom",
            question: "体育训练必须_____，一步一个脚印。",
            options: ["分道扬镳", "稳扎稳打", "水到渠成", "鱼和熊掌不可兼得"],
            correct: 1,
            explanation: "Phải từng bước vững chắc: '稳扎稳打'."
        },
        {
            type: "idiom",
            question: "金钱和健康在现代社会似乎成了一个_____的问题。",
            options: ["分道扬镳", "稳扎稳打", "水到渠成", "鱼和熊掌不可兼得"],
            correct: 3,
            explanation: "Không thể có cả hai: '鱼和熊掌不可兼得'."
        },
        {
            type: "idiom",
            question: "莫言获得诺贝尔文学奖是_____的事。",
            options: ["分道扬镳", "稳扎稳打", "水到渠成", "鱼和熊掌不可兼得"],
            correct: 2,
            explanation: "Là kết quả tất yếu, tự nhiên: '水到渠成'."
        },
        {
            type: "structure",
            structure: "奔着……去的",
            question: "他是___稳定___的。如果考不上北大，他就要一直复读。",
            blanks: ["奔着", "去"],
            hints: "Điền chữ thích hợp để hoàn thành cấu trúc 奔着……去的"
        },
        {
            type: "structure",
            structure: "A不A无所谓",
            question: "能去就行，时间长___长___无所谓。",
            blanks: ["不"],
            hints: "Điền chữ thích hợp để tạo thành cấu trúc A不A无所谓"
        }
    ],
    6: [
        {
            type: "idiom",
            question: "从小爸爸就教育我要_____，所以我一直都觉得比较幸福。",
            options: ["哑口无言", "知足常乐", "有钱能使鬼推磨"],
            correct: 1,
            explanation: "Biết đủ là hạnh phúc: '知足常乐'."
        },
        {
            type: "idiom",
            question: "面对警察的质问，犯人_____，只得承认自己的罪行。",
            options: ["哑口无言", "知足常乐", "有钱能使鬼推磨"],
            correct: 0,
            explanation: "Không nói được gì: '哑口无言'."
        },
        {
            type: "idiom",
            question: "为什么会出现贪污腐败，就是因为那些行贿者有_____的想法。",
            options: ["哑口无言", "知足常乐", "有钱能使鬼推磨"],
            correct: 2,
            explanation: "Nghĩ rằng tiền có thể giải quyết mọi thứ: '有钱能使鬼推磨'."
        }
    ],
    9: [
        {
            type: "idiom",
            question: "生活中，我们遇到一些问题时，不能_____，应该一分为二地看待。",
            options: ["一刀切", "针锋相对", "鸦雀无声", "朝夕相处", "众所周知"],
            correct: 0,
            explanation: "Không thể đánh đồng tất cả: '一刀切'."
        },
        {
            type: "idiom",
            question: "开始考试了，教室里_____，非常安静。",
            options: ["一刀切", "针锋相对", "鸦雀无声", "朝夕相处", "众所周知"],
            correct: 2,
            explanation: "Im lặng hoàn toàn: '鸦雀无声'."
        },
        {
            type: "idiom",
            question: "面对警察的质问，犯人_____，只得承认自己的罪行。",
            options: ["哑口无言", "针锋相对", "鸦雀无声", "朝夕相处", "众所周知"],
            correct: 0,
            explanation: "Không nói được gì: '哑口无言'."
        },
        {
            type: "idiom",
            question: "大学生辩论会中，甲方与乙方的观点一般是_____的。",
            options: ["一刀切", "针锋相对", "鸦雀无声", "朝夕相处", "众所周知"],
            correct: 1,
            explanation: "Đối lập gay gắt với nhau: '针锋相对'."
        },
        {
            type: "idiom",
            question: "情侣之间_____，有时候，对方一个眼神，就知道他是什么意思。",
            options: ["一刀切", "针锋相对", "鸦雀无声", "朝夕相处", "众所周知"],
            correct: 3,
            explanation: "Ở bên nhau suốt ngày: '朝夕相处'."
        },
        {
            type: "structure",
            structure: "为……说句话",
            question: "我是一个老北京了，___北京___句话，这里的人口已经超过2400万了。",
            blanks: ["为", "说"],
            hints: "Điền chữ thích hợp để hoàn thành cấu trúc 为……说句话"
        },
        {
            type: "structure",
            structure: "A也得A，不A也得A",
            question: "你今天是唱___得唱，不唱___得唱！",
            blanks: ["也", "也"],
            hints: "Điền chữ thích hợp để hoàn thành cấu trúc"
        }
    ],
    10: [
        {
            type: "idiom",
            question: "我什么都会，_____，样样都会！",
            options: ["十八般武艺", "五花八门", "水可载舟亦可覆舟"],
            correct: 0,
            explanation: "Biết nhiều kỹ năng: '十八般武艺'."
        },
        {
            type: "idiom",
            question: "我和朋友去逛庙会，里面有各种各样的老北京小吃，真是_____。",
            options: ["十八般武艺", "五花八门", "水可载舟亦可覆舟"],
            correct: 1,
            explanation: "Đa dạng phong phú: '五花八门'."
        },
        {
            type: "idiom",
            question: "管理者要明白_____的道理，真心对待众人。",
            options: ["十八般武艺", "五花八门", "水可载舟亦可覆舟"],
            correct: 2,
            explanation: "Nước vừa nâng vừa lật thuyền: '水可载舟亦可覆舟'."
        },
        {
            type: "structure",
            structure: "这样一来",
            question: "我每天游泳，再加上晚上只吃水果，_____，很快就瘦了。",
            blanks: ["这样一来"],
            hints: "Điền cụm từ thích hợp"
        }
    ],
    11: [
        {
            type: "idiom",
            question: "如果没有摩托车，那简直是_____。",
            options: ["寸步难行", "束手无策", "随心所欲", "死记硬背"],
            correct: 0,
            explanation: "Khó di chuyển: '寸步难行'."
        },
        {
            type: "idiom",
            question: "面对已经摔坏的电脑，这位电脑高手也有点儿_____。",
            options: ["寸步难行", "束手无策", "随心所欲", "死记硬背"],
            correct: 1,
            explanation: "Không còn cách nào: '束手无策'."
        },
        {
            type: "idiom",
            question: "即使是皇帝也不能_____，想做什么就做什么。",
            options: ["寸步难行", "束手无策", "随心所欲", "死记硬背"],
            correct: 2,
            explanation: "Làm theo ý muốn: '随心所欲'."
        },
        {
            type: "idiom",
            question: "我们应该充分理解词语的意思和用法，而不是_____。",
            options: ["寸步难行", "束手无策", "随心所欲", "死记硬背"],
            correct: 3,
            explanation: "Học vẹt không hiểu: '死记硬背'."
        }
    ]
};
