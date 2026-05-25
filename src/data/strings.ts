import type { Locale } from "./site";

export interface UIStrings {
	ctaPrimary: string;
	ctaSecondary: string;
	ctaSticky: string;
	nav: {
		home: string;
		product: string;
		blog: string;
		useCases: string;
		changelog: string;
	};
	home: {
		eyebrow: string;
		h1Line1: string;
		h1Line2: string;
		lede: string;
		twinNote: string;
		heroChip1: string;
		heroChip2: string;
		heroChip3: string;
		painEyebrow: string;
		painTitle: string;
		painBigTitle: string;
		painBigCopy: string;
		painBigMetric: string;
		painBigMetricLabel: string;
		painPipelineTitle: string;
		painPipelineCopy: string;
		painQuotesTitle: string;
		painQuotesCopy: string;
		painBranchesTitle: string;
		painBranchesCopy: string;
		solutionEyebrow: string;
		solutionTitle: string;
		solutionLede: string;
		tabAgent: string;
		tabInbox: string;
		tabLeads: string;
		tabCatalog: string;
		tabQuotes: string;
		panelAgentTitle: string;
		panelAgentCopy: string;
		panelInboxTitle: string;
		panelInboxCopy: string;
		panelLeadsTitle: string;
		panelLeadsCopy: string;
		panelCatalogTitle: string;
		panelCatalogCopy: string;
		panelQuotesTitle: string;
		panelQuotesCopy: string;
		flowEyebrow: string;
		flowTitle: string;
		flowCopy: string;
		flowChatMsg1: string;
		flowChatMsg2: string;
		flowChatMsg3: string;
		flowCrmLabel: string;
		flowCrmLeadTitle: string;
		flowCrmItem1: string;
		flowCrmItem2: string;
		flowCrmItem3: string;
		flowTaskLabel: string;
		flowTaskTitle: string;
		flowTaskAssigned: string;
		flowLiveLabel: string;
		flowSecondsAgo: string;
		stepsEyebrow: string;
		stepsTitle: string;
		step1Eyebrow: string;
		step1Title: string;
		step1Copy: string;
		step1Hint: string;
		step2Eyebrow: string;
		step2Title: string;
		step2Copy: string;
		step2Hint: string;
		step3Eyebrow: string;
		step3Title: string;
		step3Copy: string;
		step3Hint: string;
		trustEyebrow: string;
		trustTitle: string;
		trust1Value: string;
		trust1Label: string;
		trust1Hint: string;
		trust2Value: string;
		trust2Label: string;
		trust2Hint: string;
		trust3Value: string;
		trust3Label: string;
		trust3Hint: string;
		trust4Value: string;
		trust4Label: string;
		trust4Hint: string;
		trustFootnote: string;
		trustFootnoteLink: string;
	};
	footer: {
		metaLine: string;
		madeIn: string;
		socials: {
			telegram: string;
			linkedin: string;
			github: string;
		};
	};
}

export const socialLinks = {
	telegram: "https://t.me/cursivohq",
	linkedin: "https://www.linkedin.com/company/cursivo",
	github: "https://github.com/RebSem/cursivosite",
};

export const stringsByLocale: Record<Locale, UIStrings> = {
	en: {
		ctaPrimary: "Request demo",
		ctaSecondary: "See it in motion",
		ctaSticky: "Request demo",
		nav: {
			home: "Home",
			product: "Product",
			blog: "Blog",
			useCases: "Use cases",
			changelog: "Changelog",
		},
		home: {
			eyebrow: "AI agent + CRM for car rental teams",
			h1Line1: "Your AI agent replies in the chat.",
			h1Line2: "Your CRM fills itself.",
			lede:
				"Cursivo is one product, not two. An AI agent answers Telegram and WhatsApp at 03:14, qualifies the lead, prices the rental, and lands the manager-ready card inside the CRM — branch, dates, deposit and all.",
			twinNote:
				"Not a chatbot bolted on top of a CRM. Not a CRM with a “reply” button. One operating layer where the agent and the pipeline are the same thing.",
			heroChip1: "Telegram & WhatsApp",
			heroChip2: "Auto-fills the CRM",
			heroChip3: "Handoff-ready cards",
			painEyebrow: "Where rental teams lose money",
			painTitle: "Four leaks every rental ops manager already knows by heart.",
			painBigTitle: "Night-time chats die alone.",
			painBigCopy:
				"Renters in Dubai send the hottest inquiries between 22:00 and 03:00. Your team is asleep. Theirs isn’t — the next operator who replies, wins the booking.",
			painBigMetric: "62%",
			painBigMetricLabel: "of late-night Dubai rental inquiries are lost to whoever answers first.",
			painPipelineTitle: "Pipeline hides in chat history",
			painPipelineCopy:
				"You can’t see which branch owns which lead, what was quoted, or what is one nudge away from a deposit.",
			painQuotesTitle: "Quotes are still copy-paste",
			painQuotesCopy:
				"Price lookups, car class matching, deposit terms — your senior operators do this by hand, every time.",
			painBranchesTitle: "Branches turn into islands",
			painBranchesCopy:
				"Marina, Downtown and the airport desk drift into separate spreadsheets, separate Telegrams, separate stories.",
			solutionEyebrow: "Inside Cursivo",
			solutionTitle: "Five surfaces that all share the same record.",
			solutionLede:
				"Open any tab and you’re looking at the same lead. The agent that replied, the pipeline it created, the car class it matched, the quote it prepped — one source of truth, five windows into it.",
			tabAgent: "AI Agent",
			tabInbox: "Inbox",
			tabLeads: "Pipeline",
			tabCatalog: "Fleet",
			tabQuotes: "Quote",
			panelAgentTitle: "The agent answers in seconds, then writes the CRM card itself.",
			panelAgentCopy:
				"It speaks the customer’s language, asks for the three things missing from the message, and creates the lead before the conversation has cooled.",
			panelInboxTitle: "Every live conversation in one operator workspace.",
			panelInboxCopy:
				"Telegram-first, WhatsApp next. Owner, branch, AI status and the next action travel with the thread.",
			panelLeadsTitle: "A pipeline you can actually steer.",
			panelLeadsCopy:
				"Kanban and list views with rental-shaped statuses: qualified, quoted, deposit, reserved, picked up.",
			panelCatalogTitle: "Fleet availability sits next to the quote.",
			panelCatalogCopy:
				"Car class, branch, daily price and readiness state — the agent and the operator see the same shelf.",
			panelQuotesTitle: "From qualified lead to sendable quote in one click.",
			panelQuotesCopy:
				"Pickup window, deposit, vehicle, total — all attached to the same record the agent created.",
			flowEyebrow: "The loop",
			flowTitle: "Customer writes. Agent answers. CRM fills itself.",
			flowCopy:
				"One unbroken motion from Telegram bubble to manager-ready card. The agent talks. The pipeline shows up.",
			flowChatMsg1: "Need a G63 in Marina, Fri night → Sun. Cash deposit ok?",
			flowChatMsg2: "Agent: tagged luxury · 3 days · Marina · cash deposit · high intent.",
			flowChatMsg3: "Agent: quote prepared at AED 6,400. Ready for manager review.",
			flowCrmLabel: "CRM card · auto-created",
			flowCrmLeadTitle: "Marina · Luxury SUV · 3 days",
			flowCrmItem1: "Source · Telegram",
			flowCrmItem2: "Deposit · AED 2,800 cash",
			flowCrmItem3: "Next · Approve quote",
			flowTaskLabel: "Manager task",
			flowTaskTitle: "Approve AED 6,400 quote, confirm pickup window.",
			flowTaskAssigned: "Assigned · Marina branch lead",
			flowLiveLabel: "Live",
			flowSecondsAgo: "sec ago",
			stepsEyebrow: "From signup to first qualified lead",
			stepsTitle: "Under one hour. No engineering team required.",
			step1Eyebrow: "Step 01",
			step1Title: "Drop in your fleet sheet.",
			step1Copy:
				"XLSX or CSV — branches, cars, classes, daily prices. The agent learns your shelf before it speaks to anyone.",
			step1Hint: "Average import time · 6 minutes",
			step2Eyebrow: "Step 02",
			step2Title: "Plug Telegram in with one token.",
			step2Copy:
				"Paste the bot token. The agent picks up the next incoming message in your existing channel, no migration needed.",
			step2Hint: "WhatsApp Business · next quarter",
			step3Eyebrow: "Step 03",
			step3Title: "Wake up to qualified leads.",
			step3Copy:
				"Open the CRM in the morning. The night already paid for itself — Marina has three quotes ready for your sign-off.",
			step3Hint: "Median first lead · 42 minutes after activation",
			trustEyebrow: "Built for operators who don’t have time for vendor decks",
			trustTitle: "Honest numbers, not target slides.",
			trust1Value: "27 sec",
			trust1Label: "Median first-reply time",
			trust1Hint: "Measured across pilot Telegram channels in Dubai.",
			trust2Value: "24/7",
			trust2Label: "Night demand captured",
			trust2Hint: "No chat goes to a “we’ll get back tomorrow” silence.",
			trust3Value: "EN · RU · AR",
			trust3Label: "Languages in one queue",
			trust3Hint: "Same agent, same CRM record, RTL handled properly.",
			trust4Value: "< 1 hr",
			trust4Label: "From fleet sheet to first lead",
			trust4Hint: "No implementation project. No CSM playbook.",
			trustFootnote: "Built in the open.",
			trustFootnoteLink: "Inspect the codebase",
		},
		footer: {
			metaLine: "EN · RU · AR",
			madeIn: "Made in Dubai for rental teams.",
			socials: {
				telegram: "Telegram",
				linkedin: "LinkedIn",
				github: "GitHub",
			},
		},
	},
	ru: {
		ctaPrimary: "Запросить демо",
		ctaSecondary: "Посмотреть в движении",
		ctaSticky: "Запросить демо",
		nav: {
			home: "Главная",
			product: "Продукт",
			blog: "Блог",
			useCases: "Кейсы",
			changelog: "Changelog",
		},
		home: {
			eyebrow: "AI-агент и CRM для команд автопроката",
			h1Line1: "AI-агент отвечает в чате.",
			h1Line2: "CRM заполняет себя сама.",
			lede:
				"Cursivo — это один продукт, а не два. AI-агент отвечает в Telegram и WhatsApp в 03:14, квалифицирует лида, считает аренду и складывает готовую карточку в CRM — с филиалом, датами, депозитом и следующим шагом менеджера.",
			twinNote:
				"Это не чат-бот поверх CRM. И не CRM с кнопкой «ответить». Один операционный слой, в котором агент и пайплайн — одна сущность.",
			heroChip1: "Telegram и WhatsApp",
			heroChip2: "Сама заполняет CRM",
			heroChip3: "Карточки готовы к handoff",
			painEyebrow: "Где команды проката теряют деньги",
			painTitle: "Четыре утечки, которые ваш ops-менеджер уже знает наизусть.",
			painBigTitle: "Ночные чаты умирают в одиночестве.",
			painBigCopy:
				"Самые горячие запросы в Дубае приходят с 22:00 до 03:00. Ваша команда спит. У конкурента — не спит. Кто первый ответил, тот и получил бронь.",
			painBigMetric: "62%",
			painBigMetricLabel: "ночных дубайских запросов уходят тому, кто ответил первым.",
			painPipelineTitle: "Пайплайн прячется в истории чата",
			painPipelineCopy:
				"Вы не видите, какой филиал ведёт лида, что уже отправили в оффере, и кто в одном касании от депозита.",
			painQuotesTitle: "Оффера всё ещё copy-paste",
			painQuotesCopy:
				"Проверка цены, подбор класса, условия депозита — сеньоры делают это руками каждый раз.",
			painBranchesTitle: "Филиалы превращаются в острова",
			painBranchesCopy:
				"Marina, Downtown и airport-desk расходятся по разным таблицам, Telegram-каналам и устным договорённостям.",
			solutionEyebrow: "Внутри Cursivo",
			solutionTitle: "Пять поверхностей, у которых одна запись.",
			solutionLede:
				"Откройте любую вкладку — это всё тот же лид. Агент, который ответил. Пайплайн, который из него родился. Машина, которую он подобрал. Оффер, который он подготовил. Один источник правды, пять окон в него.",
			tabAgent: "AI-агент",
			tabInbox: "Инбокс",
			tabLeads: "Пайплайн",
			tabCatalog: "Автопарк",
			tabQuotes: "Оффер",
			panelAgentTitle: "Агент отвечает за секунды и сам пишет карточку в CRM.",
			panelAgentCopy:
				"Говорит на языке клиента, дозапрашивает три вещи, которых не хватает в сообщении, и создаёт лида до того, как разговор остыл.",
			panelInboxTitle: "Все живые диалоги в одном операторском рабочем месте.",
			panelInboxCopy:
				"Сначала Telegram, потом WhatsApp. С тредом едет владелец, филиал, AI-статус и следующее действие.",
			panelLeadsTitle: "Пайплайн, которым можно реально управлять.",
			panelLeadsCopy:
				"Канбан и список со статусами под прокат: qualified, quoted, deposit, reserved, picked up.",
			panelCatalogTitle: "Наличие автопарка стоит рядом с оффером.",
			panelCatalogCopy:
				"Класс, филиал, дневная цена и готовность — агент и оператор смотрят на одну и ту же полку.",
			panelQuotesTitle: "От квалифицированного лида до готового оффера за один клик.",
			panelQuotesCopy:
				"Окно подачи, депозит, машина, итог — всё привязано к той карточке, которую создал агент.",
			flowEyebrow: "Цикл",
			flowTitle: "Клиент пишет. Агент отвечает. CRM заполняет себя.",
			flowCopy:
				"Один непрерывный жест от пузырька в Telegram до карточки, готовой к подписанию. Агент говорит. Пайплайн появляется.",
			flowChatMsg1: "Нужен G63 в Marina, с пятницы вечера до воскресенья. Депозит налом ок?",
			flowChatMsg2: "Агент: тегировано luxury · 3 дня · Marina · депозит наличными · горячий лид.",
			flowChatMsg3: "Агент: оффер 6 400 AED готов. Жду подтверждения менеджера.",
			flowCrmLabel: "Карточка CRM · создана автоматически",
			flowCrmLeadTitle: "Marina · Luxury SUV · 3 дня",
			flowCrmItem1: "Источник · Telegram",
			flowCrmItem2: "Депозит · 2 800 AED наличными",
			flowCrmItem3: "Дальше · подтвердить оффер",
			flowTaskLabel: "Задача менеджера",
			flowTaskTitle: "Подтвердить оффер 6 400 AED и окно подачи.",
			flowTaskAssigned: "Назначено · лид филиала Marina",
			flowLiveLabel: "Live",
			flowSecondsAgo: "сек назад",
			stepsEyebrow: "От регистрации до первого квалифицированного лида",
			stepsTitle: "Меньше часа. Без команды разработки.",
			step1Eyebrow: "Шаг 01",
			step1Title: "Загрузите таблицу автопарка.",
			step1Copy:
				"XLSX или CSV — филиалы, машины, классы, дневные цены. Агент изучает вашу полку до первого сообщения.",
			step1Hint: "Средний импорт · 6 минут",
			step2Eyebrow: "Шаг 02",
			step2Title: "Подключите Telegram одним токеном.",
			step2Copy:
				"Вставьте bot token. Агент подхватывает следующее входящее сообщение в вашем канале, без миграции.",
			step2Hint: "WhatsApp Business · следующий квартал",
			step3Eyebrow: "Шаг 03",
			step3Title: "Утром просыпайтесь с готовыми лидами.",
			step3Copy:
				"Откройте CRM. Ночь окупила себя — три оффера из Marina ждут вашего подтверждения.",
			step3Hint: "Медиана первого лида · 42 минуты после активации",
			trustEyebrow: "Для операторов, у которых нет времени на vendor-презентации",
			trustTitle: "Честные цифры, а не target-слайды.",
			trust1Value: "27 сек",
			trust1Label: "Медианное время первого ответа",
			trust1Hint: "Замер на пилотных Telegram-каналах в Дубае.",
			trust2Value: "24/7",
			trust2Label: "Ночной спрос захвачен",
			trust2Hint: "Ни один чат не уходит в «ответим завтра».",
			trust3Value: "EN · RU · AR",
			trust3Label: "Языки в одной очереди",
			trust3Hint: "Один агент, одна карточка, RTL обработан корректно.",
			trust4Value: "< 1 ч",
			trust4Label: "От таблицы автопарка до первого лида",
			trust4Hint: "Без внедрения. Без CSM-плейбука.",
			trustFootnote: "Собран открыто.",
			trustFootnoteLink: "Посмотреть код",
		},
		footer: {
			metaLine: "EN · RU · AR",
			madeIn: "Сделано в Дубае для команд автопроката.",
			socials: {
				telegram: "Telegram",
				linkedin: "LinkedIn",
				github: "GitHub",
			},
		},
	},
	ar: {
		ctaPrimary: "اطلب عرضًا",
		ctaSecondary: "شاهده في الحركة",
		ctaSticky: "اطلب عرضًا",
		nav: {
			home: "الرئيسية",
			product: "المنتج",
			blog: "المدونة",
			useCases: "حالات الاستخدام",
			changelog: "سجل التغييرات",
		},
		home: {
			eyebrow: "وكيل ذكاء اصطناعي وCRM لفرق تأجير السيارات",
			h1Line1: "وكيل الذكاء الاصطناعي يرد في الدردشة.",
			h1Line2: "CRM تملأ نفسها بنفسها.",
			lede:
				"Cursivo منتج واحد، لا اثنان. وكيل ذكاء اصطناعي يجيب على Telegram وWhatsApp في الساعة 03:14، يؤهل العميل، يسعّر التأجير، ويضع البطاقة الجاهزة للمدير داخل CRM — مع الفرع والتواريخ والوديعة والإجراء التالي.",
			twinNote:
				"ليس روبوت دردشة فوق CRM. وليس CRM بزر «رد». طبقة تشغيل واحدة، يصبح فيها الوكيل وخط الأنابيب نفس الشيء.",
			heroChip1: "Telegram وWhatsApp",
			heroChip2: "يملأ CRM تلقائيًا",
			heroChip3: "بطاقات جاهزة للتسليم",
			painEyebrow: "أين تخسر فرق التأجير المال",
			painTitle: "أربع تسريبات يعرفها كل مدير عمليات تأجير عن ظهر قلب.",
			painBigTitle: "محادثات الليل تموت وحدها.",
			painBigCopy:
				"يرسل المستأجرون في دبي أحرّ الطلبات بين الساعة 22:00 و03:00. فريقك نائم. فريقهم لا. من يرد أولاً يكسب الحجز.",
			painBigMetric: "62%",
			painBigMetricLabel: "من طلبات تأجير دبي الليلية تذهب لمن يرد أولاً.",
			painPipelineTitle: "خط الأنابيب يختبئ في تاريخ الدردشة",
			painPipelineCopy:
				"لا ترى أي فرع يدير أي عميل، وما تم تسعيره، ومن يبعد لمسة واحدة عن دفع الوديعة.",
			painQuotesTitle: "العروض ما زالت نسخ ولصق",
			painQuotesCopy:
				"البحث عن السعر، مطابقة فئة السيارة، شروط الوديعة — يفعلها كبار المشغلين يدويًا في كل مرة.",
			painBranchesTitle: "تتحول الفروع إلى جزر",
			painBranchesCopy:
				"Marina وDowntown ومكتب المطار تتباعد إلى جداول مستقلة وقنوات Telegram مستقلة وقصص مستقلة.",
			solutionEyebrow: "داخل Cursivo",
			solutionTitle: "خمسة أسطح تتشارك السجل نفسه.",
			solutionLede:
				"افتح أي تبويب وستجد نفس العميل. الوكيل الذي رد، خط الأنابيب الذي ولده، الفئة التي طابقها، العرض الذي جهزه — مصدر واحد للحقيقة، خمس نوافذ عليه.",
			tabAgent: "وكيل الذكاء",
			tabInbox: "صندوق الوارد",
			tabLeads: "خط الأنابيب",
			tabCatalog: "الأسطول",
			tabQuotes: "العرض",
			panelAgentTitle: "يجيب الوكيل خلال ثوانٍ، ثم يكتب بطاقة CRM بنفسه.",
			panelAgentCopy:
				"يتحدث بلغة العميل، ويسأل عن الأشياء الثلاثة الناقصة في الرسالة، ويُنشئ العميل قبل أن تبرد المحادثة.",
			panelInboxTitle: "كل محادثة حية في مساحة عمل واحدة للمشغل.",
			panelInboxCopy:
				"Telegram أولاً، ثم WhatsApp. يسافر مع المحادثة المالك والفرع وحالة الذكاء الاصطناعي والإجراء التالي.",
			panelLeadsTitle: "خط أنابيب يمكنك توجيهه فعلاً.",
			panelLeadsCopy:
				"عرض كانبان وقائمة بحالات على شكل تأجير: مؤهل، عُرض، وديعة، محجوز، تم الاستلام.",
			panelCatalogTitle: "توفر الأسطول يقف بجانب العرض.",
			panelCatalogCopy:
				"الفئة والفرع والسعر اليومي وحالة الجاهزية — يرى الوكيل والمشغل الرف نفسه.",
			panelQuotesTitle: "من عميل مؤهل إلى عرض قابل للإرسال بضغطة واحدة.",
			panelQuotesCopy:
				"نافذة الاستلام، الوديعة، السيارة، الإجمالي — كله مرتبط بنفس السجل الذي أنشأه الوكيل.",
			flowEyebrow: "الحلقة",
			flowTitle: "العميل يكتب. الوكيل يرد. CRM تملأ نفسها.",
			flowCopy:
				"حركة واحدة متصلة من فقاعة Telegram إلى بطاقة جاهزة للمدير. الوكيل يتحدث. خط الأنابيب يظهر.",
			flowChatMsg1: "أحتاج G63 في Marina، من ليلة الجمعة إلى الأحد. وديعة نقدية تمام؟",
			flowChatMsg2: "الوكيل: مُصنّف luxury · 3 أيام · Marina · وديعة نقدية · نية عالية.",
			flowChatMsg3: "الوكيل: عرض بـ 6,400 AED جاهز. بانتظار موافقة المدير.",
			flowCrmLabel: "بطاقة CRM · أُنشئت تلقائيًا",
			flowCrmLeadTitle: "Marina · سيارة دفع رباعي فاخرة · 3 أيام",
			flowCrmItem1: "المصدر · Telegram",
			flowCrmItem2: "الوديعة · 2,800 AED نقدًا",
			flowCrmItem3: "التالي · اعتماد العرض",
			flowTaskLabel: "مهمة المدير",
			flowTaskTitle: "اعتماد العرض 6,400 AED وتأكيد نافذة الاستلام.",
			flowTaskAssigned: "مُعيّن · قائد فرع Marina",
			flowLiveLabel: "مباشر",
			flowSecondsAgo: "ثانية مضت",
			stepsEyebrow: "من التسجيل إلى أول عميل مؤهل",
			stepsTitle: "أقل من ساعة. بدون فريق هندسة.",
			step1Eyebrow: "الخطوة 01",
			step1Title: "أسقط جدول الأسطول.",
			step1Copy:
				"XLSX أو CSV — الفروع والسيارات والفئات والأسعار اليومية. يتعلم الوكيل رفك قبل أن يتحدث إلى أي شخص.",
			step1Hint: "وقت الاستيراد الوسطي · 6 دقائق",
			step2Eyebrow: "الخطوة 02",
			step2Title: "وصّل Telegram بتوكن واحد.",
			step2Copy:
				"ألصق رمز البوت. يلتقط الوكيل الرسالة الواردة التالية في قناتك الحالية، دون أي ترحيل.",
			step2Hint: "WhatsApp Business · الربع القادم",
			step3Eyebrow: "الخطوة 03",
			step3Title: "استيقظ على عملاء مؤهلين.",
			step3Copy:
				"افتح CRM في الصباح. الليلة دفعت ثمن نفسها — Marina لديها ثلاثة عروض تنتظر اعتمادك.",
			step3Hint: "متوسط أول عميل · 42 دقيقة بعد التفعيل",
			trustEyebrow: "لمشغلين ليس لديهم وقت لعروض البائعين",
			trustTitle: "أرقام صادقة، لا شرائح أهداف.",
			trust1Value: "27 ثانية",
			trust1Label: "الزمن الوسطي لأول رد",
			trust1Hint: "قياس على قنوات Telegram التجريبية في دبي.",
			trust2Value: "24/7",
			trust2Label: "طلب الليل ملتقَط",
			trust2Hint: "لا تذهب أي دردشة إلى صمت «سنرد غدًا».",
			trust3Value: "EN · RU · AR",
			trust3Label: "اللغات في طابور واحد",
			trust3Hint: "نفس الوكيل، نفس سجل CRM، RTL معالج بشكل صحيح.",
			trust4Value: "< 1 س",
			trust4Label: "من جدول الأسطول إلى أول عميل",
			trust4Hint: "لا مشروع تنفيذ. لا دليل CSM.",
			trustFootnote: "مبني بشكل علني.",
			trustFootnoteLink: "تفحّص الكود",
		},
		footer: {
			metaLine: "EN · RU · AR",
			madeIn: "صُنع في دبي لفرق تأجير السيارات.",
			socials: {
				telegram: "Telegram",
				linkedin: "LinkedIn",
				github: "GitHub",
			},
		},
	},
};

export function getStrings(locale: Locale): UIStrings {
	return stringsByLocale[locale];
}
