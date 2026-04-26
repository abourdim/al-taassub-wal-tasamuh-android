/* التعصب والتسامح — FANATICISM & TOLERANCE — app.js v1.0 */
/* Based on "Al-Taassub wal-Tasamuh bayna al-Masihiyyah wal-Islam" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'التعصب والتسامح',
    splashSub: 'المقارنة العادلة بين الحضارات',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة البقرة ٢: ٢٥٦',
    tabHome: 'الرئيسية', tabCards: 'البطاقات', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    cardsTitle: 'بطاقات التسامح',
    cardsDesc: '١٥ بطاقة عن التسامح الإسلامي مقارنة بالتعصب — كل بطاقة بآية وحديث وتطبيق عملي',
    quizTitle: '🏆 من سيصبح عالماً؟',
    quizDesc: 'اختبر معلوماتك عن التسامح الإسلامي — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلتي في التسامح',
    progressDesc: 'تقدمك وإنجازاتك في رحلة التعرف على التسامح الإسلامي',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية التسامح والهداية',
    dailyLabel: '✨ بطاقة اليوم',
    searchPlaceholder: 'ابحث في البطاقات...',
    share: 'مشاركة',
    verse: 'الآية',
    hadith: 'الحديث',
    apply: '💡 طبّق الآن',
    youngMode: '🌟 مستكشف صغير',
    teenMode: '📖 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    streakMsg: 'يوم متتالي!',
    readMore: 'اقرأ المزيد',
    nextQ: 'السؤال التالي',
    lifeline5050: '50/50',
    lifelineHint: '💡 تلميح',
    lifelineQuran: '📖 مرجع قرآني',
    correct: 'أحسنت! إجابة صحيحة! 🎉',
    wrong: 'حاول مرة أخرى 💪',
    quizComplete: 'انتهت المسابقة!',
    score: 'النتيجة',
    tryAgain: 'أعد المسابقة',
    badge_beginner: 'مبتدئ',
    badge_reader: 'قارئ',
    badge_scholar: 'عالم',
    badge_persistent: 'مثابر',
    badge_expert: 'خبير',
    splashFeatures: [
      '١٥ بطاقة عن التسامح الإسلامي والمقارنة العادلة',
      'مسابقة "من سيصبح عالماً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
    ],
  },
  en: {
    appTitle: 'Fanaticism & Tolerance',
    splashSub: 'A fair comparison between civilizations',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Baqarah 2:256',
    tabHome: 'Home', tabCards: 'Cards', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    cardsTitle: 'Tolerance Cards',
    cardsDesc: '15 cards on Islamic tolerance vs. fanaticism — each with a verse, hadith, and practical application',
    quizTitle: '🏆 Who Wants to Be a Scholar?',
    quizDesc: 'Test your knowledge of Islamic tolerance — 4 choices per question',
    progressTitle: 'My Tolerance Journey',
    progressDesc: 'Your progress and achievements in the tolerance journey',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas for Tolerance & Guidance',
    dailyLabel: "✨ Today's Card",
    searchPlaceholder: 'Search cards...',
    share: 'Share',
    verse: 'Verse',
    hadith: 'Hadith',
    apply: '💡 Apply Now',
    youngMode: '🌟 Young Explorer',
    teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    streakMsg: 'day streak!',
    readMore: 'Read More',
    nextQ: 'Next Question',
    lifeline5050: '50/50',
    lifelineHint: '💡 Hint',
    lifelineQuran: '📖 Quran Ref',
    correct: 'Well done! Correct answer! 🎉',
    wrong: 'Try again next time 💪',
    quizComplete: 'Quiz Complete!',
    score: 'Score',
    tryAgain: 'Retry Quiz',
    badge_beginner: 'Beginner',
    badge_reader: 'Reader',
    badge_scholar: 'Scholar',
    badge_persistent: 'Persistent',
    badge_expert: 'Expert',
    splashFeatures: [
      '15 cards on Islamic tolerance and fair comparison',
      '"Who Wants to Be a Scholar?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: 'Fanatisme & Tolerance',
    splashSub: 'Une comparaison equitable entre civilisations',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Baqarah 2:256',
    tabHome: 'Accueil', tabCards: 'Cartes', tabQuiz: 'Quiz',
    tabProgress: 'Progres', tabAbout: 'Livre',
    cardsTitle: 'Cartes de Tolerance',
    cardsDesc: '15 cartes sur la tolerance islamique face au fanatisme — chacune avec un verset, un hadith et une application pratique',
    quizTitle: '🏆 Qui Veut Devenir Savant ?',
    quizDesc: 'Testez vos connaissances sur la tolerance islamique — 4 choix par question',
    progressTitle: 'Mon Parcours de Tolerance',
    progressDesc: 'Vos progres et realisations dans le parcours de la tolerance',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas pour la Tolerance et la Guidance',
    dailyLabel: '✨ Carte du Jour',
    searchPlaceholder: 'Rechercher les cartes...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Hadith',
    apply: '💡 Appliquez Maintenant',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: "Points d'Experience",
    levelLabel: 'Niveau',
    streakMsg: 'jours consecutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Ref. Coran',
    correct: 'Bravo ! Bonne reponse ! 🎉',
    wrong: 'Reessayez la prochaine fois 💪',
    quizComplete: 'Quiz Termine !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Debutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Perseverant',
    badge_expert: 'Expert',
    splashFeatures: [
      '15 cartes sur la tolerance islamique et la comparaison equitable',
      'Quiz "Qui Veut Devenir Savant ?" avec recompenses',
      'Systeme de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 15 TOLERANCE CARDS DATA ═══════════════
const CARDS = [
  {
    id:1, emoji:'🕊️',
    ar:{title:'لا إكراه في الدين',desc:'يرى الغزالي في "التعصب والتسامح": الإسلام يرفض إجبار أي شخص على اعتناقه. الإيمان الحقيقي ينبع من القلب لا من السيف. الشيخ الغزالي يبيّن أن الإسلام انتشر بالحجة والبرهان لا بالقوة والإكراه. تاريخياً بقيت أقليات غير مسلمة في البلاد الإسلامية لقرون تمارس عباداتها بحرية.',verse:'لَا إِكْرَاهَ فِي الدِّينِ قَدْ تَبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ',verseRef:'البقرة ٢٥٦',hadith:'من ظلم معاهداً أو انتقصه أو كلفه فوق طاقته أو أخذ منه شيئاً بغير طيب نفس فأنا حجيجه يوم القيامة — رواه أبو داود',action:'احترم اختيارات الآخرين الدينية ولا تجبر أحداً على رأيك — الحوار الجميل هو الطريق',young:'لا نُجبر أحداً على ما نؤمن به! نحترم الجميع ونتحاور بأدب 🕊️'},
    en:{title:'No Compulsion in Religion',desc:'Al-Ghazali in "Fanaticism and Tolerance" sees: Islam rejects forcing anyone to convert. True faith comes from the heart, not the sword. Sheikh al-Ghazali explains that Islam spread through evidence and reason, not force. Historically, non-Muslim minorities lived in Muslim lands for centuries practicing their faith freely.',verse:'There is no compulsion in religion. The right path has become clear from the wrong',verseRef:'Al-Baqarah 256',hadith:'Whoever wrongs a person with a treaty, or diminishes their rights, or burdens them beyond their capacity, or takes something from them without their consent — I will be their advocate on Judgment Day — Abu Dawud',action:'Respect the religious choices of others and never force your opinion — beautiful dialogue is the way',young:'We never force anyone to believe what we believe! We respect everyone and talk kindly 🕊️'},
    fr:{title:'Pas de Contrainte en Religion',desc:"L'Islam rejette toute contrainte en matiere de foi. La vraie foi vient du coeur, pas de l'epee. Sheikh al-Ghazali explique que l'Islam s'est repandu par la preuve et la raison. Historiquement, des minorites non-musulmanes ont vecu dans les terres islamiques pendant des siecles.",verse:'Nulle contrainte en religion. Le bon chemin s\'est distingue de l\'egarement',verseRef:'Al-Baqarah 256',hadith:'Quiconque opprime une personne ayant un traite, diminue ses droits ou la charge au-dela de sa capacite — je serai son avocat le Jour du Jugement — Abu Dawud',action:'Respectez les choix religieux des autres et ne forcez jamais votre opinion — le beau dialogue est le chemin',young:'On ne force personne a croire ce qu\'on croit ! On respecte tout le monde et on parle gentiment 🕊️'}
  },
  {
    id:2, emoji:'📜',
    ar:{title:'العهدة العمرية',desc:'يرى الغزالي في "التعصب والتسامح": عندما فتح عمر بن الخطاب القدس، أعطى أهلها أماناً على أنفسهم وكنائسهم وصلبانهم. لم يُهدم معبد ولم تُصادر ملكية. هذا نموذج فريد في التاريخ للتسامح عند الفتح. المسيحيون واليهود عاشوا بأمان في ظل الحكم الإسلامي.',verse:'وَإِنْ جَنَحُوا لِلسَّلْمِ فَاجْنَحْ لَهَا وَتَوَكَّلْ عَلَى اللَّهِ',verseRef:'الأنفال ٦١',hadith:'ألا من ظلم معاهداً أو انتقصه فأنا حجيجه يوم القيامة — رواه أبو داود',action:'تعلم عن العهدة العمرية وشاركها مع أصدقائك كنموذج للتسامح',young:'سيدنا عمر فتح القدس وحمى كنائس المسيحيين — هذا هو التسامح الحقيقي! 📜'},
    en:{title:'Covenant of Umar',desc:'Al-Ghazali in "Fanaticism and Tolerance" sees: When Umar ibn al-Khattab entered Jerusalem, he gave its people safety for themselves, their churches, and their crosses. No temple was destroyed, no property seized. This is a unique model of tolerance in history. Christians and Jews lived safely under Islamic rule.',verse:'And if they incline to peace, then incline to it and rely upon Allah',verseRef:'Al-Anfal 61',hadith:'Whoever wrongs a person with a treaty — I will be their advocate on Judgment Day — Abu Dawud',action:'Learn about the Covenant of Umar and share it with friends as a model of tolerance',young:'Umar opened Jerusalem and protected the churches of Christians — that is real tolerance! 📜'},
    fr:{title:'Pacte d\'Umar',desc:'Al-Ghazali dans "Fanatisme et Tolérance" voit: Quand Umar ibn al-Khattab est entre a Jerusalem, il a donne securite aux habitants pour eux-memes, leurs eglises et leurs croix. Aucun temple ne fut detruit, aucune propriete saisie. C\'est un modele unique de tolerance dans l\'histoire.',verse:'Et s\'ils inclinent a la paix, incline vers celle-ci et place ta confiance en Allah',verseRef:'Al-Anfal 61',hadith:'Quiconque opprime une personne ayant un traite — je serai son avocat le Jour du Jugement — Abu Dawud',action:'Decouvrez le Pacte d\'Umar et partagez-le comme modele de tolerance',young:'Umar a ouvert Jerusalem et a protege les eglises des chretiens — c\'est la vraie tolerance ! 📜'}
  },
  {
    id:3, emoji:'⚔️',
    ar:{title:'الحروب الصليبية مقابل الفتح الإسلامي',desc:'يرى الغزالي في "التعصب والتسامح": الحروب الصليبية ارتكبت مجازر فظيعة عند دخول القدس. أما الفتح الإسلامي فكان نموذجاً للرحمة. صلاح الدين عندما استعاد القدس لم يقتل مدنياً واحداً وسمح للمسيحيين بالخروج آمنين. المقارنة العادلة تكشف الفرق الكبير.',verse:'وَلَا يَجْرِمَنَّكُمْ شَنَآنُ قَوْمٍ عَلَى أَلَّا تَعْدِلُوا اعْدِلُوا هُوَ أَقْرَبُ لِلتَّقْوَى',verseRef:'المائدة ٨',hadith:'انصر أخاك ظالماً أو مظلوماً — قال: كيف أنصره ظالماً؟ قال: تمنعه من الظلم — متفق عليه',action:'اقرأ عن تاريخ القدس من مصادر متعددة وقارن بين الفتح الإسلامي والصليبي بإنصاف',young:'صلاح الدين فتح القدس بالرحمة — لم يؤذِ المدنيين وسمح لهم بالخروج بسلام ⚔️'},
    en:{title:'Crusades vs Islamic Conquest',desc:'Al-Ghazali in "Fanaticism and Tolerance" sees: The Crusaders committed terrible massacres when entering Jerusalem. The Islamic conquest was a model of mercy. When Saladin recaptured Jerusalem, he did not kill a single civilian and allowed Christians to leave safely. A fair comparison reveals the great difference.',verse:'And do not let the hatred of a people prevent you from being just. Be just; that is nearer to righteousness',verseRef:'Al-Maidah 8',hadith:'Support your brother whether he is the oppressor or the oppressed — He said: How do I support him as oppressor? He said: Prevent him from oppression — Agreed upon',action:'Read about the history of Jerusalem from multiple sources and compare the Islamic and Crusader conquests fairly',young:'Saladin conquered Jerusalem with mercy — he did not hurt civilians and let them leave safely ⚔️'},
    fr:{title:'Croisades vs Conquete Islamique',desc:'Al-Ghazali dans "Fanatisme et Tolérance" voit: Les Croises ont commis de terribles massacres en entrant a Jerusalem. La conquete islamique fut un modele de misericorde. Quand Saladin a repris Jerusalem, il n\'a tue aucun civil et a permis aux chretiens de partir en securite.',verse:'Et que la haine d\'un peuple ne vous incite pas a etre injustes. Soyez justes : c\'est plus proche de la piete',verseRef:'Al-Maidah 8',hadith:'Soutiens ton frere qu\'il soit oppresseur ou opprime — Il dit : Comment le soutenir s\'il opprime ? Il dit : Empeche-le d\'opprimer — Unanimement reconnu',action:'Lisez l\'histoire de Jerusalem de plusieurs sources et comparez les conquetes equitablement',young:'Saladin a conquis Jerusalem avec misericorde — il n\'a blesse personne et les a laisses partir en paix ⚔️'}
  },
  {
    id:4, emoji:'🤝',
    ar:{title:'حقوق غير المسلمين',desc:'يرى الغزالي في "التعصب والتسامح": في الإسلام، لغير المسلمين حقوق محفوظة: حرية العبادة، حماية الأنفس والأموال، حق التقاضي، والإعفاء من الخدمة العسكرية. الجزية كانت أقل من الزكاة التي يدفعها المسلمون. الشيخ الغزالي يؤكد أن العدل مع غير المسلمين فريضة إسلامية.',verse:'لَا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ لَمْ يُقَاتِلُوكُمْ فِي الدِّينِ وَلَمْ يُخْرِجُوكُمْ مِنْ دِيَارِكُمْ أَنْ تَبَرُّوهُمْ وَتُقْسِطُوا إِلَيْهِمْ',verseRef:'الممتحنة ٨',hadith:'من آذى ذمياً فقد آذاني ومن آذاني فقد آذى الله — رواه الطبراني',action:'تعامل بالعدل والإحسان مع كل جيرانك بغض النظر عن دينهم',young:'في الإسلام نحمي حقوق الجميع — المسلم وغير المسلم! العدل للكل 🤝'},
    en:{title:'Rights of Non-Muslims',desc:'Al-Ghazali in "Fanaticism and Tolerance" sees: In Islam, non-Muslims have protected rights: freedom of worship, protection of life and property, right to legal recourse, and exemption from military service. The jizya tax was less than the zakat paid by Muslims. Sheikh al-Ghazali confirms that justice toward non-Muslims is an Islamic obligation.',verse:'Allah does not forbid you from those who do not fight you because of religion and do not expel you from your homes — from being righteous toward them and acting justly toward them',verseRef:'Al-Mumtahanah 8',hadith:'Whoever harms a person with a covenant has harmed me, and whoever harms me has harmed Allah — Tabarani',action:'Treat all your neighbors with justice and kindness regardless of their faith',young:'In Islam we protect everyone\'s rights — Muslim and non-Muslim! Justice for all 🤝'},
    fr:{title:'Droits des Non-Musulmans',desc:'Al-Ghazali dans "Fanatisme et Tolérance" voit: En Islam, les non-musulmans ont des droits proteges : liberte de culte, protection de la vie et des biens, droit au recours juridique, et exemption du service militaire. La jizya etait inferieure a la zakat payee par les musulmans.',verse:'Allah ne vous interdit pas la bienfaisance et l\'equite envers ceux qui ne vous ont pas combattus pour la religion et ne vous ont pas chasses de vos demeures',verseRef:'Al-Mumtahanah 8',hadith:'Quiconque nuit a une personne sous pacte m\'a nui, et quiconque me nuit a nui a Allah — Tabarani',action:'Traitez tous vos voisins avec justice et bonte quelle que soit leur foi',young:'En Islam on protege les droits de tous — musulmans et non-musulmans ! La justice pour tous 🤝'}
  },
  {
    id:5, emoji:'🌺',
    ar:{title:'الأندلس نموذج التعايش',desc:'يرى الغزالي في "التعصب والتسامح": الأندلس الإسلامية كانت نموذجاً فريداً للتعايش بين المسلمين والمسيحيين واليهود. ازدهرت العلوم والفنون والترجمة. اليهود اعتبروا تلك الفترة عصرهم الذهبي. عندما سقطت الأندلس، طُرد المسلمون واليهود معاً في محاكم التفتيش.',verse:'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُمْ مِنْ ذَكَرٍ وَأُنْثَى وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',verseRef:'الحجرات ١٣',hadith:'الناس سواسية كأسنان المشط — رواه أحمد',action:'اقرأ عن العصر الذهبي في الأندلس وكيف تعاون المسلمون واليهود والمسيحيون في العلوم',young:'في الأندلس عاش المسلمون والمسيحيون واليهود معاً وصنعوا حضارة رائعة! 🌺'},
    en:{title:'Al-Andalus Coexistence',desc:'Al-Ghazali in "Fanaticism and Tolerance" sees: Islamic Spain was a unique model of coexistence between Muslims, Christians, and Jews. Sciences, arts, and translation flourished. Jews considered that period their golden age. When Andalusia fell, Muslims and Jews were expelled together during the Inquisition.',verse:'O mankind, We have created you from male and female and made you peoples and tribes that you may know one another',verseRef:'Al-Hujurat 13',hadith:'People are equal like the teeth of a comb — Ahmad',action:'Read about the Golden Age of Andalusia and how Muslims, Jews, and Christians cooperated in sciences',young:'In Andalusia, Muslims, Christians, and Jews lived together and built an amazing civilization! 🌺'},
    fr:{title:'Coexistence en Al-Andalus',desc:'Al-Ghazali dans "Fanatisme et Tolérance" voit: L\'Espagne islamique etait un modele unique de coexistence entre musulmans, chretiens et juifs. Les sciences, les arts et la traduction ont prospere. Les juifs consideraient cette periode comme leur age d\'or. A la chute de l\'Andalousie, musulmans et juifs furent expulses ensemble lors de l\'Inquisition.',verse:'O hommes, Nous vous avons crees d\'un male et d\'une femelle et Nous avons fait de vous des nations et des tribus pour que vous vous entre-connaissiez',verseRef:'Al-Hujurat 13',hadith:'Les gens sont egaux comme les dents d\'un peigne — Ahmad',action:'Lisez sur l\'age d\'or de l\'Andalousie et la cooperation entre musulmans, juifs et chretiens',young:'En Andalousie, musulmans, chretiens et juifs vivaient ensemble et ont bati une civilisation incroyable ! 🌺'}
  },
  {
    id:6, emoji:'🗣️',
    ar:{title:'الحوار بين الأديان',desc:'يرى الغزالي في "التعصب والتسامح": الإسلام يدعو إلى الحوار مع أهل الكتاب بالحكمة والموعظة الحسنة. القرآن يأمر المسلمين بمجادلة أهل الكتاب بالتي هي أحسن. الشيخ الغزالي يرى أن الحوار الحقيقي يبني جسور التفاهم ويزيل سوء الفهم بين الأديان.',verse:'وَلَا تُجَادِلُوا أَهْلَ الْكِتَابِ إِلَّا بِالَّتِي هِيَ أَحْسَنُ',verseRef:'العنكبوت ٤٦',hadith:'ادعُ إلى سبيل ربك بالحكمة والموعظة الحسنة — رواه البخاري',action:'ابدأ حواراً محترماً مع شخص من ديانة مختلفة — اسأل واستمع بإنصاف',young:'تكلم مع الجميع بأدب واحترام — الحوار الجميل يبني صداقات رائعة! 🗣️'},
    en:{title:'Interfaith Dialogue',desc:'Al-Ghazali in "Fanaticism and Tolerance" sees: Islam calls for dialogue with People of the Book with wisdom and good counsel. The Quran commands Muslims to argue with People of the Book in the best manner. Sheikh al-Ghazali sees that true dialogue builds bridges of understanding and removes misunderstandings between religions.',verse:'And do not argue with the People of the Book except in a way that is best',verseRef:'Al-Ankabut 46',hadith:'Invite to the way of your Lord with wisdom and good instruction — Bukhari',action:'Start a respectful conversation with someone of a different faith — ask and listen fairly',young:'Talk to everyone with kindness and respect — beautiful dialogue builds wonderful friendships! 🗣️'},
    fr:{title:'Dialogue Interreligieux',desc:'Al-Ghazali dans "Fanatisme et Tolérance" voit: L\'Islam appelle au dialogue avec les Gens du Livre avec sagesse et bonne exhortation. Le Coran ordonne aux musulmans de discuter avec les Gens du Livre de la meilleure maniere. Sheikh al-Ghazali voit que le vrai dialogue construit des ponts de comprehension.',verse:'Et ne discutez avec les Gens du Livre que de la meilleure facon',verseRef:'Al-Ankabut 46',hadith:'Invite au sentier de ton Seigneur avec sagesse et bonne exhortation — Bukhari',action:'Commencez une conversation respectueuse avec quelqu\'un d\'une autre foi — ecoutez equitablement',young:'Parle a tout le monde avec gentillesse et respect — le beau dialogue construit de belles amities ! 🗣️'}
  },
  {
    id:7, emoji:'🕌',
    ar:{title:'حماية دور العبادة',desc:'يرى الغزالي في "التعصب والتسامح": الإسلام يحمي الكنائس والمعابد والأديرة. القرآن يذكر أن الله يدافع عن أماكن العبادة كلها. النبي ﷺ في عهوده مع المسيحيين حمى كنائسهم. عمر بن الخطاب رفض أن يصلي في كنيسة القيامة حتى لا يتخذها المسلمون مسجداً.',verse:'وَلَوْلَا دَفْعُ اللَّهِ النَّاسَ بَعْضَهُمْ بِبَعْضٍ لَهُدِّمَتْ صَوَامِعُ وَبِيَعٌ وَصَلَوَاتٌ وَمَسَاجِدُ',verseRef:'الحج ٤٠',hadith:'من هدم كنيسة أو بيعة فقد بعُد عن الله — أثر',action:'احترم جميع أماكن العبادة ودافع عن حق الجميع في ممارسة شعائرهم',young:'نحترم جميع أماكن العبادة — المساجد والكنائس والمعابد! الله يحمي الجميع 🕌'},
    en:{title:'Protecting Worship Places',desc:'Al-Ghazali in "Fanaticism and Tolerance" sees: Islam protects churches, temples, and monasteries. The Quran mentions that Allah defends all places of worship. The Prophet (PBUH) in his treaties with Christians protected their churches. Umar ibn al-Khattab refused to pray inside the Church of the Holy Sepulchre so Muslims would not turn it into a mosque.',verse:'And were it not that Allah checks people by means of others, there would have been demolished monasteries, churches, synagogues, and mosques',verseRef:'Al-Hajj 40',hadith:'Whoever destroys a church or synagogue has distanced himself from Allah — narration',action:'Respect all places of worship and defend everyone\'s right to practice their rituals',young:'We respect all places of worship — mosques, churches, and temples! Allah protects everyone 🕌'},
    fr:{title:'Protection des Lieux de Culte',desc:'Al-Ghazali dans "Fanatisme et Tolérance" voit: L\'Islam protege les eglises, les temples et les monasteres. Le Coran mentionne qu\'Allah defend tous les lieux de culte. Le Prophete (PSL) dans ses traites avec les chretiens a protege leurs eglises. Umar ibn al-Khattab a refuse de prier dans l\'Eglise du Saint-Sepulcre.',verse:'Et si Allah ne repoussait pas les gens les uns par les autres, des monasteres, des eglises, des synagogues et des mosquees seraient demolies',verseRef:'Al-Hajj 40',hadith:'Quiconque detruit une eglise ou une synagogue s\'est eloigne d\'Allah — narration',action:'Respectez tous les lieux de culte et defendez le droit de chacun a pratiquer ses rites',young:'On respecte tous les lieux de culte — mosquees, eglises et temples ! Allah protege tout le monde 🕌'}
  },
  {
    id:8, emoji:'🌟',
    ar:{title:'احترام جميع الأنبياء',desc:'يرى الغزالي في "التعصب والتسامح": المسلم يؤمن بجميع الأنبياء والرسل دون تفريق: آدم ونوح وإبراهيم وموسى وعيسى ومحمد عليهم السلام جميعاً. لا يصح إسلام من لا يؤمن بنبي واحد منهم. هذا الإيمان الشامل يبني جسور الاحترام مع أتباع الديانات الأخرى.',verse:'لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ',verseRef:'البقرة ٢٨٥',hadith:'أنا أولى الناس بعيسى ابن مريم في الدنيا والآخرة والأنبياء إخوة — رواه البخاري',action:'تعلم عن قصص الأنبياء جميعهم واحترم الديانات التي جاؤوا بها',young:'نحب جميع الأنبياء! آدم ونوح وإبراهيم وموسى وعيسى ومحمد — كلهم إخوة 🌟'},
    en:{title:'Respecting All Prophets',desc:'Al-Ghazali in "Fanaticism and Tolerance" sees: A Muslim believes in all prophets and messengers without distinction: Adam, Noah, Abraham, Moses, Jesus, and Muhammad, peace be upon them all. No Muslim\'s faith is valid without believing in every single one. This comprehensive belief builds bridges of respect with followers of other faiths.',verse:'We make no distinction between any of His messengers',verseRef:'Al-Baqarah 285',hadith:'I am the closest of people to Jesus son of Mary in this life and the hereafter. The prophets are brothers — Bukhari',action:'Learn about the stories of all prophets and respect the religions they brought',young:'We love all prophets! Adam, Noah, Abraham, Moses, Jesus, and Muhammad — they are all brothers 🌟'},
    fr:{title:'Respect de Tous les Prophetes',desc:'Al-Ghazali dans "Fanatisme et Tolérance" voit: Le musulman croit en tous les prophetes et messagers sans distinction : Adam, Noe, Abraham, Moise, Jesus et Muhammad, que la paix soit sur eux tous. La foi d\'un musulman n\'est pas valide sans croire en chacun d\'eux. Cette croyance globale construit des ponts de respect.',verse:'Nous ne faisons aucune distinction entre Ses messagers',verseRef:'Al-Baqarah 285',hadith:'Je suis le plus proche de Jesus fils de Marie dans cette vie et dans l\'au-dela. Les prophetes sont freres — Bukhari',action:'Apprenez les histoires de tous les prophetes et respectez les religions qu\'ils ont apportees',young:'On aime tous les prophetes ! Adam, Noe, Abraham, Moise, Jesus et Muhammad — ils sont tous freres 🌟'}
  },
  {
    id:9, emoji:'🌹',
    ar:{title:'مريم في القرآن',desc:'القرآن الكريم خصّ السيدة مريم بسورة كاملة باسمها — وهي الوحيدة من النساء التي ذُكر اسمها في القرآن. مريم مذكورة في القرآن أكثر من الإنجيل! القرآن يصفها بالصديقة والعابدة والمصطفاة على نساء العالمين.',verse:'وَإِذْ قَالَتِ الْمَلَائِكَةُ يَا مَرْيَمُ إِنَّ اللَّهَ اصْطَفَاكِ وَطَهَّرَكِ وَاصْطَفَاكِ عَلَى نِسَاءِ الْعَالَمِينَ',verseRef:'آل عمران ٤٢',hadith:'كمُل من الرجال كثير ولم يكمل من النساء إلا آسية وخديجة ومريم — متفق عليه',action:'اقرأ سورة مريم وتأمل كيف يكرّم الإسلام أم عيسى عليه السلام',young:'سورة مريم في القرآن تحكي قصة أم النبي عيسى — الإسلام يكرّمها جداً! 🌹'},
    en:{title:'Mary in the Quran',desc:'The Quran dedicated an entire chapter to Mary — she is the only woman mentioned by name in the Quran. Mary is mentioned more in the Quran than in the Bible! The Quran describes her as the truthful, the devout worshipper, and the chosen one above all women of the worlds.',verse:'And when the angels said, O Mary, indeed Allah has chosen you and purified you and chosen you above the women of the worlds',verseRef:'Al Imran 42',hadith:'Many men achieved perfection, but no women achieved it except Asiyah, Khadijah, and Mary — Agreed upon',action:'Read Surah Maryam and reflect on how Islam honors the mother of Prophet Jesus',young:'Surah Maryam in the Quran tells the story of Prophet Jesus\'s mother — Islam honors her so much! 🌹'},
    fr:{title:'Marie dans le Coran',desc:'Al-Ghazali dans "Fanatisme et Tolérance" voit: Le Coran a consacre un chapitre entier a Marie — elle est la seule femme mentionnee par son nom dans le Coran. Marie est mentionnee plus dans le Coran que dans la Bible ! Le Coran la decrit comme la veridique, la devote et l\'elue au-dessus de toutes les femmes des mondes.',verse:'Et quand les anges dirent : O Marie, Allah t\'a choisie et purifiee et t\'a elue au-dessus des femmes des mondes',verseRef:'Al Imran 42',hadith:'Beaucoup d\'hommes ont atteint la perfection, mais parmi les femmes, seules Asiya, Khadija et Marie l\'ont atteinte — Unanimement reconnu',action:'Lisez la Sourate Maryam et reflechissez a comment l\'Islam honore la mere du Prophete Jesus',young:'La Sourate Maryam dans le Coran raconte l\'histoire de la mere du Prophete Jesus — l\'Islam l\'honore beaucoup ! 🌹'}
  },
  {
    id:10, emoji:'🏰',
    ar:{title:'رحمة صلاح الدين',desc:'عندما حرر صلاح الدين الأيوبي القدس، لم ينتقم من الصليبيين رغم أنهم ارتكبوا مجازر عند دخولها. سمح للمسيحيين بالخروج آمنين مع أموالهم. عالج جنود العدو المرضى وأرسل طبيبه الشخصي لملك إنجلترا ريتشارد. هذه الأخلاق لا مثيل لها.',verse:'وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ',verseRef:'آل عمران ١٣٤',hadith:'ارحموا من في الأرض يرحمكم من في السماء — رواه الترمذي',action:'اغفر لمن أساء إليك وعامله بالإحسان — هذا هو خلق صلاح الدين',young:'صلاح الدين عفا عن أعدائه وأرسل لهم أطباء — هذا هو البطل الحقيقي! 🏰'},
    en:{title:'Saladin\'s Mercy',desc:'When Saladin liberated Jerusalem, he did not take revenge on the Crusaders despite their massacres when they first entered. He allowed Christians to leave safely with their money. He treated sick enemy soldiers and sent his personal physician to the King of England. Such character is unmatched.',verse:'Those who restrain their anger and pardon people — and Allah loves those who do good',verseRef:'Al Imran 134',hadith:'Show mercy to those on earth and the One in heaven will show mercy to you — Tirmidhi',action:'Forgive those who wronged you and treat them with kindness — this is the character of Saladin',young:'Saladin forgave his enemies and sent doctors to them — that\'s a real hero! 🏰'},
    fr:{title:'Misericorde de Saladin',desc:'Quand Saladin a libere Jerusalem, il ne s\'est pas venge des Croises malgre leurs massacres. Il a permis aux chretiens de partir en securite avec leur argent. Il a soigne les soldats ennemis malades et envoye son medecin personnel au roi d\'Angleterre.',verse:'Ceux qui dominent leur colere et pardonnent aux gens — et Allah aime les bienfaisants',verseRef:'Al Imran 134',hadith:'Soyez misericordieux envers ceux sur terre et Celui dans le ciel sera misericordieux envers vous — Tirmidhi',action:'Pardonnez a ceux qui vous ont fait du tort et traitez-les avec bonte — c\'est le caractere de Saladin',young:'Saladin a pardonne a ses ennemis et leur a envoye des medecins — c\'est un vrai heros ! 🏰'}
  },
  {
    id:11, emoji:'⚖️',
    ar:{title:'محاكم التفتيش مقابل العدالة الإسلامية',desc:'محاكم التفتيش الإسبانية أحرقت الكتب وعذّبت وقتلت من رفض التحول للمسيحية. في المقابل، القضاء الإسلامي كفل حق التقاضي لغير المسلمين. قضاة مسلمون حكموا ضد مسلمين لصالح ذميين. الفرق بين النموذجين واضح وصارخ.',verse:'إِنَّ اللَّهَ يَأْمُرُكُمْ أَنْ تُؤَدُّوا الْأَمَانَاتِ إِلَى أَهْلِهَا وَإِذَا حَكَمْتُمْ بَيْنَ النَّاسِ أَنْ تَحْكُمُوا بِالْعَدْلِ',verseRef:'النساء ٥٨',hadith:'إن الله لا يقدس أمة لا يأخذ الضعيف فيها حقه — رواه ابن ماجه',action:'كن عادلاً مع الجميع حتى مع من تختلف معهم — العدل أساس الحضارة',young:'في الإسلام القاضي يحكم بالعدل للجميع — حتى لو كان أحدهم غير مسلم! ⚖️'},
    en:{title:'Inquisition vs Islamic Justice',desc:'The Spanish Inquisition burned books, tortured, and killed those who refused to convert to Christianity. In contrast, Islamic judiciary guaranteed the right to legal recourse for non-Muslims. Muslim judges ruled against Muslims in favor of non-Muslim subjects. The difference is stark.',verse:'Indeed, Allah commands you to render trusts to whom they are due and when you judge between people to judge with justice',verseRef:'An-Nisa 58',hadith:'Allah does not sanctify a nation in which the weak cannot get their rights — Ibn Majah',action:'Be just with everyone, even those you disagree with — justice is the foundation of civilization',young:'In Islam the judge rules fairly for everyone — even if one party is not Muslim! ⚖️'},
    fr:{title:'Inquisition vs Justice Islamique',desc:'L\'Inquisition espagnole a brule des livres, torture et tue ceux qui refusaient de se convertir au christianisme. En revanche, la justice islamique a garanti le droit de recours pour les non-musulmans. Des juges musulmans ont tranche contre des musulmans en faveur de non-musulmans.',verse:'Allah vous ordonne de rendre les depots a qui de droit et quand vous jugez entre les gens de juger avec justice',verseRef:'An-Nisa 58',hadith:'Allah ne sanctifie pas une nation ou le faible ne peut obtenir ses droits — Ibn Majah',action:'Soyez juste avec tous, meme ceux avec qui vous etes en desaccord — la justice est le fondement de la civilisation',young:'En Islam le juge decide equitablement pour tous — meme si l\'une des parties n\'est pas musulmane ! ⚖️'}
  },
  {
    id:12, emoji:'🗽',
    ar:{title:'الحرية الدينية',desc:'الحرية الدينية مبدأ أصيل في الإسلام. دستور المدينة الذي كتبه النبي ﷺ كفل لليهود حرية الدين والأمان. الإسلام لا يُجبر أحداً على ترك دينه. الشيخ الغزالي يؤكد أن حرية الاعتقاد حق إنساني أقره الإسلام قبل المواثيق الحديثة.',verse:'وَقُلِ الْحَقُّ مِنْ رَبِّكُمْ فَمَنْ شَاءَ فَلْيُؤْمِنْ وَمَنْ شَاءَ فَلْيَكْفُرْ',verseRef:'الكهف ٢٩',hadith:'لهم ما لنا وعليهم ما علينا — النبي ﷺ في وصف أهل الذمة',action:'دافع عن حرية المعتقد لكل إنسان — هذا من صميم الإسلام',young:'كل إنسان حر في اختيار ما يؤمن به — هذا ما علمنا الإسلام! 🗽'},
    en:{title:'Religious Freedom',desc:'Religious freedom is a core principle of Islam. The Constitution of Medina written by the Prophet (PBUH) guaranteed Jews freedom of religion and safety. Islam does not force anyone to leave their faith. Sheikh al-Ghazali confirms that freedom of belief is a human right established by Islam before modern charters.',verse:'And say: The truth is from your Lord, so whoever wills — let him believe; and whoever wills — let him disbelieve',verseRef:'Al-Kahf 29',hadith:'They have the same rights as us and the same obligations as us — The Prophet (PBUH) about non-Muslim citizens',action:'Defend the freedom of belief for every person — this is at the core of Islam',young:'Every person is free to choose what they believe — that is what Islam teaches us! 🗽'},
    fr:{title:'Liberte Religieuse',desc:'La liberte religieuse est un principe fondamental de l\'Islam. La Constitution de Medine ecrite par le Prophete (PSL) a garanti aux juifs la liberte de religion et la securite. L\'Islam ne force personne a quitter sa foi. Sheikh al-Ghazali confirme que la liberte de croyance est un droit humain etabli par l\'Islam.',verse:'Et dis : La verite vient de votre Seigneur. Quiconque veut, qu\'il croie ; quiconque veut, qu\'il mecroie',verseRef:'Al-Kahf 29',hadith:'Ils ont les memes droits que nous et les memes obligations — Le Prophete (PSL) sur les citoyens non-musulmans',action:'Defendez la liberte de croyance pour chaque personne — c\'est au coeur de l\'Islam',young:'Chaque personne est libre de choisir ce en quoi elle croit — c\'est ce que l\'Islam nous enseigne ! 🗽'}
  },
  {
    id:13, emoji:'🇪🇬',
    ar:{title:'نموذج التعايش في مصر',desc:'مصر نموذج حي للتعايش بين المسلمين والمسيحيين منذ الفتح الإسلامي. الأقباط رحّبوا بالمسلمين لأنهم حرروهم من الاضطهاد الروماني. عاش المسلمون والأقباط جنباً إلى جنب لأكثر من ١٤ قرناً يتشاركون الأعياد والأفراح والأحزان.',verse:'وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا إِنَّ أَكْرَمَكُمْ عِنْدَ اللَّهِ أَتْقَاكُمْ',verseRef:'الحجرات ١٣',hadith:'استوصوا بأهل مصر خيراً فإن لهم ذمة ورحماً — رواه مسلم',action:'شارك جيرانك أفراحهم وأحزانهم بغض النظر عن دينهم — هذا نموذج التعايش المصري',young:'في مصر يعيش المسلمون والمسيحيون معاً منذ قرون — جيران وأصدقاء! 🇪🇬'},
    en:{title:'Egypt Coexistence Model',desc:'Egypt is a living model of coexistence between Muslims and Christians since the Islamic conquest. The Copts welcomed Muslims because they freed them from Roman persecution. Muslims and Copts lived side by side for over 14 centuries sharing holidays, joys, and sorrows.',verse:'And We made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of Allah is the most righteous',verseRef:'Al-Hujurat 13',hadith:'Treat the people of Egypt well, for they have a covenant and kinship — Muslim',action:'Share your neighbors\' joys and sorrows regardless of their faith — this is the Egyptian coexistence model',young:'In Egypt, Muslims and Christians have lived together for centuries — neighbors and friends! 🇪🇬'},
    fr:{title:'Modele de Coexistence Egyptien',desc:'L\'Egypte est un modele vivant de coexistence entre musulmans et chretiens depuis la conquete islamique. Les Coptes ont accueilli les musulmans parce qu\'ils les ont liberes de la persecution romaine. Musulmans et Coptes vivent cote a cote depuis plus de 14 siecles.',verse:'Et Nous avons fait de vous des nations et des tribus pour que vous vous entre-connaissiez. Le plus noble d\'entre vous aupres d\'Allah est le plus pieux',verseRef:'Al-Hujurat 13',hadith:'Traitez bien les gens d\'Egypte, car ils ont un pacte et des liens de parente — Muslim',action:'Partagez les joies et les peines de vos voisins quelle que soit leur foi — c\'est le modele egyptien',young:'En Egypte, musulmans et chretiens vivent ensemble depuis des siecles — voisins et amis ! 🇪🇬'}
  },
  {
    id:14, emoji:'🔑',
    ar:{title:'مفاتيح كنيسة القيامة',desc:'مفاتيح كنيسة القيامة في القدس — أقدس مكان مسيحي — تحتفظ بها عائلة مسلمة منذ عهد صلاح الدين! عائلة نسيبة وعائلة جودة تتناوبان على فتح الكنيسة كل صباح. هذا رمز حي للثقة المتبادلة بين المسلمين والمسيحيين منذ قرون.',verse:'لَتَجِدَنَّ أَقْرَبَهُمْ مَوَدَّةً لِلَّذِينَ آمَنُوا الَّذِينَ قَالُوا إِنَّا نَصَارَى',verseRef:'المائدة ٨٢',hadith:'خير الناس أنفعهم للناس — رواه الطبراني',action:'ابحث عن قصة مفاتيح كنيسة القيامة وشاركها لتبيّن التسامح الحقيقي',young:'عائلة مسلمة تفتح كنيسة القيامة كل صباح منذ مئات السنين — ثقة وصداقة! 🔑'},
    en:{title:'Keys to the Holy Sepulchre',desc:'The keys to the Church of the Holy Sepulchre in Jerusalem — the holiest Christian site — have been kept by a Muslim family since the time of Saladin! The Nusseibeh and Joudeh families take turns opening the church every morning. This is a living symbol of mutual trust between Muslims and Christians for centuries.',verse:'You will find the nearest of them in affection to the believers are those who say: We are Christians',verseRef:'Al-Maidah 82',hadith:'The best of people are those most beneficial to people — Tabarani',action:'Research the story of the keys to the Holy Sepulchre and share it to show true tolerance',young:'A Muslim family has opened the Church of the Holy Sepulchre every morning for hundreds of years — trust and friendship! 🔑'},
    fr:{title:'Cles du Saint-Sepulcre',desc:'Les cles de l\'Eglise du Saint-Sepulcre a Jerusalem — le lieu le plus sacre pour les chretiens — sont gardees par une famille musulmane depuis l\'epoque de Saladin ! Les familles Nusseibeh et Joudeh ouvrent l\'eglise chaque matin a tour de role. C\'est un symbole vivant de confiance mutuelle.',verse:'Tu trouveras les plus proches en affection pour les croyants ceux qui disent : Nous sommes chretiens',verseRef:'Al-Maidah 82',hadith:'Les meilleurs des gens sont les plus utiles aux gens — Tabarani',action:'Recherchez l\'histoire des cles du Saint-Sepulcre et partagez-la pour montrer la vraie tolerance',young:'Une famille musulmane ouvre l\'Eglise du Saint-Sepulcre chaque matin depuis des centaines d\'annees — confiance et amitie ! 🔑'}
  },
  {
    id:15, emoji:'🔬',
    ar:{title:'منهج المقارنة العادلة',desc:'الشيخ الغزالي يدعو إلى المقارنة العادلة: قارن المثال بالمثال والنص بالنص. لا تقارن مثاليات دينك بواقع دين آخر. انظر إلى النصوص المقدسة وتطبيقاتها بإنصاف. المقارنة العادلة تكشف أن الإسلام سبق العالم في التسامح والحرية الدينية.',verse:'وَلَا تَبْخَسُوا النَّاسَ أَشْيَاءَهُمْ',verseRef:'هود ٨٥',hadith:'الدين النصيحة — رواه مسلم',action:'عندما تقارن بين الأديان أو الحضارات، كن عادلاً وموضوعياً — لا تحكم من جانب واحد',young:'كن عادلاً دائماً! لا تحكم على شيء قبل أن تعرف كل الحقائق 🔬'},
    en:{title:'Fair Comparison Method',desc:'Sheikh al-Ghazali calls for fair comparison: compare ideal with ideal and text with text. Do not compare the ideals of your religion with the reality of another. Look at sacred texts and their applications fairly. Fair comparison reveals that Islam preceded the world in tolerance and religious freedom.',verse:'And do not deprive people of their due',verseRef:'Hud 85',hadith:'The religion is sincere advice — Muslim',action:'When comparing religions or civilizations, be fair and objective — do not judge from one side only',young:'Always be fair! Do not judge anything before you know all the facts 🔬'},
    fr:{title:'Methode de Comparaison Equitable',desc:'Sheikh al-Ghazali appelle a la comparaison equitable : comparez l\'ideal a l\'ideal et le texte au texte. Ne comparez pas les ideaux de votre religion a la realite d\'une autre. Regardez les textes sacres et leurs applications equitablement.',verse:'Et ne leser pas les gens dans leurs droits',verseRef:'Hud 85',hadith:'La religion est le bon conseil — Muslim',action:'Quand vous comparez des religions ou des civilisations, soyez equitable et objectif',young:'Sois toujours equitable ! Ne juge rien avant de connaitre tous les faits 🔬'}
  }
];

// ═══════════════ QUIZ DATA (10 questions) ═══════════════
const QUIZ = [
  {
    ar:{q:'ما الآية التي تنفي الإكراه في الدين؟',opts:['لا إكراه في الدين','ادع إلى سبيل ربك','وجادلهم بالتي هي أحسن','لكم دينكم ولي دين'],correct:0,hint:'هذه الآية في سورة البقرة',quran:'البقرة ٢٥٦'},
    en:{q:'Which verse negates compulsion in religion?',opts:['There is no compulsion in religion','Invite to the way of your Lord','And argue with them in the best manner','For you is your religion and for me is mine'],correct:0,hint:'This verse is in Surah Al-Baqarah',quran:'Al-Baqarah 256'},
    fr:{q:'Quel verset nie la contrainte en religion ?',opts:['Nulle contrainte en religion','Invite au sentier de ton Seigneur','Et discute avec eux de la meilleure facon','A vous votre religion et a moi la mienne'],correct:0,hint:'Ce verset est dans la Sourate Al-Baqarah',quran:'Al-Baqarah 256'}
  },
  {
    ar:{q:'من فتح القدس بالرحمة ولم يقتل مدنياً واحداً؟',opts:['خالد بن الوليد','صلاح الدين الأيوبي','طارق بن زياد','هارون الرشيد'],correct:1,hint:'هذا القائد حرر القدس من الصليبيين',quran:'آل عمران ١٣٤'},
    en:{q:'Who conquered Jerusalem with mercy and did not kill a single civilian?',opts:['Khalid ibn al-Walid','Saladin','Tariq ibn Ziyad','Harun al-Rashid'],correct:1,hint:'This leader freed Jerusalem from the Crusaders',quran:'Al Imran 134'},
    fr:{q:'Qui a conquis Jerusalem avec misericorde sans tuer un seul civil ?',opts:['Khalid ibn al-Walid','Saladin','Tariq ibn Ziyad','Harun al-Rashid'],correct:1,hint:'Ce leader a libere Jerusalem des Croises',quran:'Al Imran 134'}
  },
  {
    ar:{q:'ما اسم العهد الذي أعطاه عمر بن الخطاب لأهل القدس؟',opts:['صلح الحديبية','العهدة العمرية','ميثاق المدينة','معاهدة القدس'],correct:1,hint:'هذا العهد سمي باسم الخليفة الثاني',quran:'الأنفال ٦١'},
    en:{q:'What is the name of the covenant Umar ibn al-Khattab gave to the people of Jerusalem?',opts:['Treaty of Hudaybiyyah','Covenant of Umar','Constitution of Medina','Treaty of Jerusalem'],correct:1,hint:'This covenant is named after the second caliph',quran:'Al-Anfal 61'},
    fr:{q:'Comment s\'appelle le pacte qu\'Umar ibn al-Khattab a donne aux habitants de Jerusalem ?',opts:['Traite de Hudaybiyyah','Pacte d\'Umar','Constitution de Medine','Traite de Jerusalem'],correct:1,hint:'Ce pacte porte le nom du deuxieme calife',quran:'Al-Anfal 61'}
  },
  {
    ar:{q:'أي سورة في القرآن سُميت باسم السيدة مريم؟',opts:['سورة النساء','سورة مريم','سورة آل عمران','سورة الممتحنة'],correct:1,hint:'هذه السورة تحكي قصة ولادة عيسى عليه السلام',quran:'مريم ١'},
    en:{q:'Which surah in the Quran is named after Mary?',opts:['Surah An-Nisa','Surah Maryam','Surah Al Imran','Surah Al-Mumtahanah'],correct:1,hint:'This surah tells the story of the birth of Jesus',quran:'Maryam 1'},
    fr:{q:'Quelle sourate du Coran porte le nom de Marie ?',opts:['Sourate An-Nisa','Sourate Maryam','Sourate Al Imran','Sourate Al-Mumtahanah'],correct:1,hint:'Cette sourate raconte l\'histoire de la naissance de Jesus',quran:'Maryam 1'}
  },
  {
    ar:{q:'أي حضارة شهدت تعايشاً بين المسلمين والمسيحيين واليهود في العصر الذهبي؟',opts:['الدولة العثمانية','الأندلس','الدولة العباسية','دولة المماليك'],correct:1,hint:'هذه الحضارة كانت في شبه الجزيرة الإيبيرية',quran:'الحجرات ١٣'},
    en:{q:'Which civilization witnessed coexistence of Muslims, Christians, and Jews in a Golden Age?',opts:['Ottoman Empire','Al-Andalus','Abbasid Caliphate','Mamluk Sultanate'],correct:1,hint:'This civilization was in the Iberian Peninsula',quran:'Al-Hujurat 13'},
    fr:{q:'Quelle civilisation a connu la coexistence de musulmans, chretiens et juifs dans un age d\'or ?',opts:['Empire Ottoman','Al-Andalus','Califat Abbasside','Sultanat Mamelouk'],correct:1,hint:'Cette civilisation etait dans la peninsule iberique',quran:'Al-Hujurat 13'}
  },
  {
    ar:{q:'من يحتفظ بمفاتيح كنيسة القيامة في القدس؟',opts:['الفاتيكان','عائلة مسلمة','الحكومة الإسرائيلية','الكنيسة الأرثوذكسية'],correct:1,hint:'هذه العائلة تحتفظ بالمفاتيح منذ عهد صلاح الدين',quran:'المائدة ٨٢'},
    en:{q:'Who keeps the keys to the Church of the Holy Sepulchre in Jerusalem?',opts:['The Vatican','A Muslim family','The Israeli government','The Orthodox Church'],correct:1,hint:'This family has kept the keys since the time of Saladin',quran:'Al-Maidah 82'},
    fr:{q:'Qui garde les cles de l\'Eglise du Saint-Sepulcre a Jerusalem ?',opts:['Le Vatican','Une famille musulmane','Le gouvernement israelien','L\'Eglise orthodoxe'],correct:1,hint:'Cette famille garde les cles depuis l\'epoque de Saladin',quran:'Al-Maidah 82'}
  },
  {
    ar:{q:'أكمل الآية: "ادْعُ إِلَى سَبِيلِ رَبِّكَ بِ..."',opts:['القوة والشدة','الحكمة والموعظة الحسنة','السيف والجهاد','المال والسلطة'],correct:1,hint:'هذه الآية تدعو إلى أسلوب الحوار الراقي',quran:'النحل ١٢٥'},
    en:{q:'Complete the verse: "Invite to the way of your Lord with..."',opts:['Force and severity','Wisdom and good instruction','Sword and jihad','Money and power'],correct:1,hint:'This verse calls for an elevated style of dialogue',quran:'An-Nahl 125'},
    fr:{q:'Completez le verset : "Invite au sentier de ton Seigneur avec..."',opts:['Force et severite','Sagesse et bonne exhortation','Epee et jihad','Argent et pouvoir'],correct:1,hint:'Ce verset appelle a un style de dialogue eleve',quran:'An-Nahl 125'}
  },
  {
    ar:{q:'لماذا رفض عمر بن الخطاب الصلاة داخل كنيسة القيامة؟',opts:['لأنها نجسة','حتى لا يتخذها المسلمون مسجداً','لأنه لم يكن وقت الصلاة','لأنها صغيرة'],correct:1,hint:'عمر كان يحمي حق المسيحيين في كنيستهم',quran:'الحج ٤٠'},
    en:{q:'Why did Umar refuse to pray inside the Church of the Holy Sepulchre?',opts:['Because it was impure','So Muslims would not turn it into a mosque','Because it was not prayer time','Because it was small'],correct:1,hint:'Umar was protecting the Christians\' right to their church',quran:'Al-Hajj 40'},
    fr:{q:'Pourquoi Umar a-t-il refuse de prier dans l\'Eglise du Saint-Sepulcre ?',opts:['Parce qu\'elle etait impure','Pour que les musulmans ne la transforment pas en mosquee','Parce que ce n\'etait pas l\'heure de la priere','Parce qu\'elle etait petite'],correct:1,hint:'Umar protegeait le droit des chretiens a leur eglise',quran:'Al-Hajj 40'}
  },
  {
    ar:{q:'ماذا فعل صلاح الدين مع ملك إنجلترا المريض؟',opts:['حاربه','أرسل له طبيبه الشخصي','تجاهله','سجنه'],correct:1,hint:'صلاح الدين عامل عدوه بالرحمة',quran:'آل عمران ١٣٤'},
    en:{q:'What did Saladin do when the King of England was sick?',opts:['Fought him','Sent him his personal physician','Ignored him','Imprisoned him'],correct:1,hint:'Saladin treated his enemy with mercy',quran:'Al Imran 134'},
    fr:{q:'Qu\'a fait Saladin quand le roi d\'Angleterre etait malade ?',opts:['L\'a combattu','Lui a envoye son medecin personnel','L\'a ignore','L\'a emprisonne'],correct:1,hint:'Saladin a traite son ennemi avec misericorde',quran:'Al Imran 134'}
  },
  {
    ar:{q:'ما منهج الشيخ الغزالي في المقارنة بين الأديان؟',opts:['إظهار عيوب الآخر فقط','المقارنة العادلة: النص بالنص والمثال بالمثال','عدم المقارنة أصلاً','التركيز على الإسلام فقط'],correct:1,hint:'الشيخ الغزالي يدعو إلى الإنصاف في المقارنة',quran:'هود ٨٥'},
    en:{q:'What is Sheikh al-Ghazali\'s method for comparing religions?',opts:['Showing only the flaws of others','Fair comparison: text with text and example with example','Not comparing at all','Focusing only on Islam'],correct:1,hint:'Sheikh al-Ghazali calls for fairness in comparison',quran:'Hud 85'},
    fr:{q:'Quelle est la methode de Sheikh al-Ghazali pour comparer les religions ?',opts:['Montrer seulement les defauts des autres','Comparaison equitable : texte a texte et exemple a exemple','Ne pas comparer du tout','Se concentrer uniquement sur l\'Islam'],correct:1,hint:'Sheikh al-Ghazali appelle a l\'equite dans la comparaison',quran:'Hud 85'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء الهداية',text:'اللَّهُمَّ اهْدِنَا فِيمَنْ هَدَيْتَ وَعَافِنَا فِيمَنْ عَافَيْتَ',tr:'دعاء القنوت'},
    en:{label:'Dua for Guidance',text:'اللَّهُمَّ اهْدِنَا فِيمَنْ هَدَيْتَ وَعَافِنَا فِيمَنْ عَافَيْتَ',tr:'O Allah, guide us among those You have guided, and grant us well-being — Qunut dua'},
    fr:{label:'Dua pour la Guidance',text:'اللَّهُمَّ اهْدِنَا فِيمَنْ هَدَيْتَ وَعَافِنَا فِيمَنْ عَافَيْتَ',tr:'O Allah, guide-nous parmi ceux que Tu as guides, et accorde-nous le bien-etre — Dua du Qunut'} },
  { ar:{label:'دعاء التسامح',text:'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',tr:'رواه الترمذي'},
    en:{label:'Dua for Tolerance',text:'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',tr:'O Allah, You are Forgiving and love forgiveness, so forgive me — Tirmidhi'},
    fr:{label:'Dua pour la Tolerance',text:'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',tr:'O Allah, Tu es Pardonneur et Tu aimes le pardon, alors pardonne-moi — Tirmidhi'} },
  { ar:{label:'دعاء حسن الخلق',text:'اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الأَخْلاقِ لا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ',tr:'رواه مسلم'},
    en:{label:'Dua for Good Character',text:'اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الأَخْلاقِ لا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ',tr:'O Allah, guide me to the best of character, none can guide to the best of it except You — Muslim'},
    fr:{label:'Dua pour le Bon Caractere',text:'اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الأَخْلاقِ لا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ',tr:'O Allah, guide-moi vers le meilleur caractere, nul ne peut y guider sauf Toi — Muslim'} },
  { ar:{label:'دعاء الألفة',text:'اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا وَأَصْلِحْ ذَاتَ بَيْنِنَا',tr:'دعاء مأثور'},
    en:{label:'Dua for Unity',text:'اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا وَأَصْلِحْ ذَاتَ بَيْنِنَا',tr:'O Allah, unite our hearts and mend relations between us'},
    fr:{label:'Dua pour l\'Unite',text:'اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا وَأَصْلِحْ ذَاتَ بَيْنِنَا',tr:'O Allah, unis nos coeurs et repare les relations entre nous'} },
  { ar:{label:'دعاء العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'طه ١١٤'},
    en:{label:'Dua for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge — Taha 114'},
    fr:{label:'Dua pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir — Taha 114'} },
  { ar:{label:'دعاء السلام',text:'اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ',tr:'رواه مسلم'},
    en:{label:'Dua for Peace',text:'اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ',tr:'O Allah, You are Peace and from You comes peace. Blessed are You, O Possessor of Glory and Honor — Muslim'},
    fr:{label:'Dua pour la Paix',text:'اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ',tr:'O Allah, Tu es la Paix et de Toi vient la paix. Beni sois-Tu, O Possesseur de Gloire et d\'Honneur — Muslim'} }
];

// ═══════════════ XP / BADGE SYSTEM ═══════════════
const XP_KEY = 'tasamuh-xp';
const BADGES_KEY = 'tasamuh-badges';
const READ_KEY = 'tasamuh-read';
const STREAK_KEY = 'tasamuh-streak';
const MODE_KEY = 'tasamuh-mode';
const QUIZ_BEST_KEY = 'tasamuh-quiz-best';

const BADGE_DEFS = [
  { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Debutant' },
  { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' },
  { id:'scholar', emoji:'🎓', xp:300, ar:'عالم', en:'Scholar', fr:'Savant' },
  { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Perseverant' },
  { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' }
];

function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) {
  const xp = getXP() + pts;
  localStorage.setItem(XP_KEY, xp);
  checkBadges(xp);
  updateXPDisplay();
  return xp;
}
function getLevel(xp) {
  if (xp >= 1000) return 5;
  if (xp >= 500) return 4;
  if (xp >= 300) return 3;
  if (xp >= 100) return 2;
  return 1;
}
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) {
  const earned = getEarnedBadges();
  BADGE_DEFS.forEach(b => {
    if (xp >= b.xp && !earned.includes(b.id)) {
      earned.push(b.id);
      localStorage.setItem(BADGES_KEY, JSON.stringify(earned));
      showToast(`${b.emoji} ${b[lang]}!`);
      playSound('success');
    }
  });
}
function getReadCards() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markCardRead(id) {
  const read = getReadCards();
  if (!read.includes(id)) {
    read.push(id);
    localStorage.setItem(READ_KEY, JSON.stringify(read));
    addXP(10);
  }
}

// ═══════════════ STREAK ═══════════════
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() {
  const today = new Date().toDateString();
  const s = getStreak();
  if (s.lastDate === today) return s.count;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
  if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; }
  s.lastDate = today;
  localStorage.setItem(STREAK_KEY, JSON.stringify(s));
  return s.count;
}

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() {
  ageMode = ageMode === 'young' ? 'teen' : 'young';
  localStorage.setItem(MODE_KEY, ageMode);
  document.body.classList.toggle('young-mode', ageMode === 'young');
  renderAll();
  showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode);
  playSound('theme');
}

// ═══════════════ LANGUAGE & THEME ═══════════════
let lang = document.documentElement.lang || 'ar';
let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean'];
const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' };
let currentCardIdx = -1;

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  renderAll();
}

function cycleTheme() {
  const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length;
  currentTheme = THEMES[idx];
  document.documentElement.dataset.theme = currentTheme;
  { const _e=document.getElementById('themeIcon'); if(_e) _e.textContent=THEME_ICONS[currentTheme]; }
  playSound('theme');
}

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  { const _e=document.getElementById('appTitle'); if(_e) _e.textContent=t.appTitle; }
  { const _e=document.getElementById('splashSub'); if(_e) _e.textContent=t.splashSub; }
  { const _e=document.getElementById('splashHint'); if(_e) _e.textContent=t.splashHint; }
  { const _e=document.getElementById('tabHome'); if(_e) _e.textContent=t.tabHome; }
  { const _e=document.getElementById('tabCards'); if(_e) _e.textContent=t.tabCards; }
  { const _e=document.getElementById('tabQuiz'); if(_e) _e.textContent=t.tabQuiz; }
  { const _e=document.getElementById('tabProgress'); if(_e) _e.textContent=t.tabProgress; }
  { const _e=document.getElementById('tabAbout'); if(_e) _e.textContent=t.tabAbout; }
  { const _e=document.getElementById('cardsTitle'); if(_e) _e.textContent=t.cardsTitle; }
  { const _e=document.getElementById('cardsDesc'); if(_e) _e.textContent=t.cardsDesc; }
  { const _e=document.getElementById('quizTitle'); if(_e) _e.textContent=t.quizTitle; }
  { const _e=document.getElementById('quizDesc'); if(_e) _e.textContent=t.quizDesc; }
  { const _e=document.getElementById('progressTitle'); if(_e) _e.textContent=t.progressTitle; }
  { const _e=document.getElementById('progressDesc'); if(_e) _e.textContent=t.progressDesc; }
  { const _e=document.getElementById('helpTitle'); if(_e) _e.textContent=t.helpTitle; }
  { const _e=document.getElementById('duaPanelTitle'); if(_e) _e.textContent=t.duaPanelTitle; }
  { const _e=document.getElementById('ageModeBtn'); if(_e) _e.textContent=ageMode === 'young' ? t.youngMode : t.teenMode; }
  renderHome();
  renderCards();
  renderProgress();
  renderAbout();
  renderHelp();
  renderDuas();
  renderTicker();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % CARDS.length;
  const card = CARDS[dayIdx];
  const d = card[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${card.emoji} ${d.title}</div>
    <div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div>
    <div class="daily-action" onclick="switchTab('cards');toggleCard('card-${card.id}')">${t.readMore} &#8594;</div>`;
  (document.getElementById('homeGrid')||{}).innerHTML= CARDS.map(c => {
    const dd = c[lang];
    return `<div class="home-card" onclick="switchTab('cards');toggleCard('card-${c.id}')">
      <span class="hc-icon">${c.emoji}</span>
      <div class="hc-title">${dd.title}</div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: CARDS ═══════════════
function renderCards() {
  const t = T[lang];
  const readCards = getReadCards();
  const container = document.getElementById('cardsContainer');
  if (!container) return;
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="cardsSearch" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"></div>`;
  container.innerHTML = searchHTML + CARDS.map(c => {
    const d = c[lang];
    const isRead = readCards.includes(c.id);
    return `
    <div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="card-${c.id}">
      <div class="trait-head" onclick="toggleCard('card-${c.id}');markCardRead(${c.id})">
        <span class="trait-num">${c.id}</span>
        <span class="trait-emoji">${c.emoji}</span>
        <span class="trait-title">${d.title}</span>
        ${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}
        <span class="trait-chev">&#9660;</span>
      </div>
      <div class="trait-body">
        <div class="trait-inner">
          <div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="hadith-box">
            <span class="hadith-label">📜 ${t.hadith}</span>
            <div class="hadith-text">${d.hadith}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="shareCard(${c.id})"><span class="share-icon">📤</span> ${t.share}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterCards(query) {
  const cards = document.querySelectorAll('.trait-card');
  const q = query.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('.trait-title').textContent.toLowerCase();
    const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : '';
    card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none';
  });
}

function shareCard(id) {
  const card = CARDS.find(c => c.id === id);
  if (!card) return;
  const d = card[lang];
  const text = `${card.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`;
  if (navigator.share) { navigator.share({ title: d.title, text }); }
  else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); }
}

// ═══════════════ RENDER: QUIZ (Who Wants to Be a Scholar?) ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };

function renderQuiz() {
  quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true };
  showQuizQuestion();
}

function showQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  if (!container) return;
  const result = document.getElementById('quizResult');
  result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) {
    showQuizResult();
    return;
  }
  const q = QUIZ[quizState.current][lang];
  const total = QUIZ.length;
  const num = quizState.current + 1;
  container.innerHTML = `
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div>
    <div class="quiz-counter">${num} / ${total}</div>
    <div class="quiz-question-card scroll-reveal">
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options" id="quizOpts">
        ${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}
      </div>
      <div class="quiz-lifelines">
        <button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button>
        <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button>
        <button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button>
      </div>
      <div id="quizFeedback" class="quiz-feedback hidden"></div>
    </div>`;
}

function answerQuiz(idx) {
  if (!quizState.active) return;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === correct) o.classList.add('correct');
    if (i === idx && i !== correct) o.classList.add('wrong');
  });
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  if (idx === correct) {
    quizState.score++;
    addXP(5);
    feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`;
    playSound('success');
  } else {
    feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`;
    playSound('click');
  }
  quizState.answers.push(idx);
  quizState.current++;
  setTimeout(() => showQuizQuestion(), 1800);
}

function useFiftyFifty() {
  if (!quizState.lifelines.fifty) return;
  quizState.lifelines.fifty = false;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const wrongIdxs = [0,1,2,3].filter(i => i !== correct);
  const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2);
  toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }});
  document.querySelector('.lifeline-btn').classList.add('used');
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint) return;
  quizState.lifelines.hint = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`;
  playSound('click');
}

function useQuranRef() {
  if (!quizState.lifelines.quran) return;
  quizState.lifelines.quran = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`;
  playSound('click');
}

function showQuizResult() {
  const t = T[lang];
  const total = QUIZ.length;
  const pct = Math.round(quizState.score / total * 100);
  const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct);
  addXP(20);
  let emoji, title;
  if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'عالم حقيقي!':lang==='fr'?'Un vrai savant !':'A True Scholar!'; }
  else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Tres bien !':'Very Good!'; }
  else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; }
  (document.getElementById('quizContainer')||{}).innerHTML= '';
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${quizState.score}/${total}</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${pct}%</div>
    <button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  if (pct >= 80) launchConfetti();
  quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang];
  const xp = getXP();
  const level = getLevel(xp);
  const streak = getStreak().count;
  const readCards = getReadCards();
  const earned = getEarnedBadges();
  const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id));
  const nextXP = nextBadge ? nextBadge.xp : 1000;
  const progressPct = Math.min(100, (xp / nextXP) * 100);

  (document.getElementById('progressContainer')||{}).innerHTML= `
    <div class="progress-xp-card">
      <div class="xp-header">
        <span class="xp-icon">⭐</span>
        <span class="xp-amount">${xp} ${t.xpLabel}</span>
      </div>
      <div class="xp-bar-wrap">
        <div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div>
        <span class="xp-level">${t.levelLabel} ${level}</span>
      </div>
      ${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}
    </div>
    ${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}
    <div class="progress-stats">
      <div class="stat-card"><span class="stat-num">${readCards.length}</span><span class="stat-label">${lang==='ar'?'بطاقة مقروءة':lang==='fr'?'Cartes lues':'Cards Read'}</span><span class="stat-total">/ ${CARDS.length}</span></div>
      <div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div>
      <div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div>
    </div>
    <div class="badges-section">
      <h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3>
      <div class="badges-grid">
        ${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}
      </div>
    </div>`;
}

function updateXPDisplay() {
  const panel = document.getElementById('panel-progress');
  if (panel && panel.classList.contains('active')) renderProgress();
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل. عُرف بالدفاع عن التسامح والعدالة في الإسلام.',
      bookTitle: 'عن الكتاب',
      bookDesc: '«التعصب والتسامح بين المسيحية والإسلام» كتاب يقارن بين موقف الإسلام والمسيحية من التسامح الديني بمنهج علمي عادل. يستعرض الشيخ الغزالي نماذج تاريخية من الحروب الصليبية ومحاكم التفتيش مقابل العهدة العمرية ورحمة صلاح الدين.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "التعصب والتسامح" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن الترمذي وأبي داود'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner. Known for defending tolerance and justice in Islam.',
      bookTitle: 'About the Book',
      bookDesc: '"Fanaticism and Tolerance Between Christianity and Islam" compares the positions of Islam and Christianity on religious tolerance using a fair scholarly method. Sheikh al-Ghazali reviews historical examples from the Crusades and the Inquisition against the Covenant of Umar and Saladin\'s mercy.',
      sourcesTitle: 'Sources',
      sources: ['"Fanaticism and Tolerance" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan at-Tirmidhi and Abu Dawud'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme "Le Litteraire de la Predication". Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '"Fanatisme et Tolerance entre le Christianisme et l\'Islam" compare les positions de l\'Islam et du Christianisme sur la tolerance religieuse avec une methode scientifique equitable. Sheikh al-Ghazali examine des exemples historiques des Croisades et de l\'Inquisition face au Pacte d\'Umar et a la misericorde de Saladin.',
      sourcesTitle: 'Sources',
      sources: ['"Fanatisme et Tolerance" — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan at-Tirmidhi et Abu Dawud'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section">
      <p class="about-text">${a.contact}</p>
    </div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "التعصب والتسامح" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ١٥ بطاقة، مسابقة تفاعلية، نظام نقاط وشارات، وضعان للأعمار.'},
      {title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي، خط أكبر.'},
      {title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وتحليل.'},
      {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/tasamuh'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},
      {title:'📚 Sources',body:'"Fanaticism and Tolerance" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 15 cards, interactive quiz, XP and badges system, 2 age modes.'},
      {title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis, larger font.'},
      {title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and analysis.'},
      {title:'🤝 Contributing',body:'GitHub: github.com/abourdim/tasamuh'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'"Fanatisme et Tolerance" par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},
      {title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 15 cartes, quiz interactif, systeme XP et badges, 2 modes d\'age.'},
      {title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis, police plus grande.'},
      {title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et analyse.'},
      {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/tasamuh'},
    ]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = {
    ar: ['📖 اقرأ بطاقة جديدة كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء بالهداية والتسامح','⭐ أكمل ١٥ بطاقة لتصبح خبيراً'],
    en: ['📖 Read a new card every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget to make dua for guidance','⭐ Complete all 15 cards to become an Expert'],
    fr: ['📖 Lisez une nouvelle carte chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas pour la guidance','⭐ Completez les 15 cartes pour devenir Expert']
  };
  const items = tips[lang];
  const doubled = [...items, ...items];
  const ticker = document.getElementById('tickerText');
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() {
  const features = document.getElementById('splashFeatures');
  if (features) {
    features.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`
    ).join('');
  }
  let count = 5;
  const counter = document.getElementById('splashCount');
  splashTimer = setInterval(() => {
    count--;
    if (counter) counter.textContent = count;
    if (count <= 0) dismissSplash();
  }, 1000);
}
function dismissSplash() {
  clearInterval(splashTimer);
  const splash = document.getElementById('splash');
  if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); }
}

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const name = tab.dataset.tab;
      switchTab(name);
    });
  });
}
function switchTab(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const panel = document.getElementById('panel-' + name);
  const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`);
  if (panel) panel.classList.add('active');
  if (tabBtn) tabBtn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  playSound('click');
  setTimeout(() => {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
      if (window._scrollObserver) window._scrollObserver.observe(el);
    });
    initTypewriter();
  }, 100);
  // Auto-render quiz when switching to quiz tab
  if (name === 'quiz' && document.getElementById('quizContainer') && !document.getElementById('quizContainer').innerHTML.trim()) {
    renderQuiz();
  }
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  window._scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        window._scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel');
      if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel');
      if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const panel = document.getElementById('panel-cards');
      if (!panel || !panel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'cardsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentCardIdx >= 0 && currentCardIdx < cards.length) cards[currentCardIdx].classList.remove('open');
      const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1);
      currentCardIdx = Math.max(0, Math.min(cards.length-1, currentCardIdx+dir));
      cards[currentCardIdx].classList.add('open');
      cards[currentCardIdx].scrollIntoView({ behavior:'smooth', block:'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) { card.classList.toggle('open'); playSound('click'); }
}
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); });
}

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; }
    else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; }
    else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7'];
  for (let i = 0; i < 120; i++) {
    particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() {
  const dailyTitle = document.querySelector('.daily-card .daily-title');
  if (!dailyTitle || dailyTitle.dataset.twDone) return;
  const fullText = dailyTitle.textContent;
  dailyTitle.textContent = '';
  dailyTitle.classList.add('typewriter-text');
  dailyTitle.dataset.twDone = '1';
  let i = 0;
  const speed = Math.max(30, 2000 / fullText.length);
  function typeChar() {
    if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); }
    else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); }
  }
  setTimeout(typeChar, 500);
}

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home','cards','quiz','progress','about'];
  document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return;
    const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); });
    if (current < 0) return;
    const isRTL = document.documentElement.dir === 'rtl';
    let next;
    if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1;
    if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]);
  }, { passive: true });
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.toggle('young-mode', ageMode === 'young');
  updateStreak();
  initSplash();
  renderAll();
  initTabs();
  initScrollReveal();
  initScrollTop();
  initKeyboardNav();
  initSwipeGestures();
  initTypewriter();
});
