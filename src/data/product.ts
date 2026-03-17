import { finalCtasByLocale } from "./ctas";
import type { FinalCtaLink } from "./ctas";
import type { Locale, LocaleLink, NavItem, RouteCard } from "./site";

interface CapabilitySection {
	title: string;
	intro: string;
	items: string[];
}

export interface ProductContent {
	locale: Locale;
	path: string;
	alternatePaths: Record<Locale, string>;
	title: string;
	description: string;
	brandMeta: string;
	navItems: NavItem[];
	localeLinks: LocaleLink[];
	footerTitle: string;
	footerCopy: string;
	footerMetaLabel: string;
	footerMetaValue: string;
	heroEyebrow: string;
	heroPills: Array<{ label: string; tone: "terracotta" | "navy" | "success" }>;
	heroTitle: string;
	heroLead: string;
	heroSubnote: string;
	heroActions: Array<{ label: string; href: string }>;
	heroCards: RouteCard[];
	dividerLabel: string;
	workflowEyebrow: string;
	workflowTitle: string;
	workflowIntro: string;
	workflowSteps: RouteCard[];
	capabilitySections: CapabilitySection[];
	ownershipEyebrow: string;
	ownershipTitle: string;
	ownershipRuleLabel: string;
	ownershipRuleText: string;
	ownershipConnectorLabel: string;
	ownershipLeftTitle: string;
	ownershipLeftMeta: string;
	ownershipLeftItems: string[];
	ownershipRightTitle: string;
	ownershipRightMeta: string;
	ownershipRightItems: string[];
	liveTitle: string;
	liveIntro: string;
	liveItems: string[];
	upcomingTitle: string;
	upcomingIntro: string;
	upcomingItems: string[];
	finalCtaEyebrow: string;
	finalCtaTitle: string;
	finalCtaIntro: string;
	finalCtaLinks: FinalCtaLink[];
}

const productPaths: Record<Locale, string> = {
	en: "/product/",
	ru: "/ru/product/",
	ar: "/ar/product/",
};

const productLocaleLinks: LocaleLink[] = [
	{ code: "en", label: "EN", href: productPaths.en },
	{ code: "ru", label: "RU", href: productPaths.ru },
	{ code: "ar", label: "AR", href: productPaths.ar },
];

const productNavByLocale: Record<Locale, NavItem[]> = {
	en: [
		{ label: "Overview", href: "#overview" },
		{ label: "Capabilities", href: "#capabilities" },
		{ label: "Contact", href: "#contact" },
	],
	ru: [
		{ label: "Обзор", href: "#overview" },
		{ label: "Возможности", href: "#capabilities" },
		{ label: "Контакт", href: "#contact" },
	],
	ar: [
		{ label: "نظرة عامة", href: "#overview" },
		{ label: "القدرات", href: "#capabilities" },
		{ label: "تواصل", href: "#contact" },
	],
};

export const productContentByLocale: Record<Locale, ProductContent> = {
	en: {
		locale: "en",
		path: productPaths.en,
		alternatePaths: productPaths,
		title: "Cursivo Product | Operations-first AI CRM for rental teams",
		description:
			"Cursivo turns inbound rental chat into qualified leads, quote preparation, reservation context, and manager action without pretending AI should own every decision.",
		brandMeta: "AI CRM for rental teams",
		navItems: productNavByLocale.en,
		localeLinks: productLocaleLinks,
		footerTitle: "Cursivo",
		footerCopy: "Multilingual AI CRM for car rental operators.",
		footerMetaLabel: "Locales",
		footerMetaValue: "English, Russian, and Arabic with route-first structure",
		heroEyebrow: "Product workflow",
		heroPills: [
			{ label: "Inbound chat", tone: "terracotta" },
			{ label: "Quote preparation", tone: "navy" },
			{ label: "Manager action", tone: "success" },
		],
		heroTitle: "The AI CRM that captures rental demand before revenue slips away.",
		heroLead:
			"Cursivo keeps inbound rental chat covered, qualifies demand, prepares quote context, and hands managers ready cases so the sales team responds faster and converts more without living inside message threads all day.",
		heroSubnote:
			"Built for operators who need 24/7 lead capture, clean branch routing, and human control at the decision point.",
		heroActions: [
			{ label: "Request pilot", href: "#contact" },
			{ label: "See workflow", href: "#workflow" },
		],
		heroCards: [
			{
				label: "Lead capture",
				title: "Demand is caught immediately",
				meta: "Inbound chat turns into a live case instead of waiting in an unmanaged queue.",
				tone: "terracotta",
			},
			{
				label: "Qualification",
				title: "Intent is structured fast",
				meta: "Dates, branch fit, and customer intent become a usable sales record before the team reacts.",
				tone: "navy",
			},
			{
				label: "Quote prep",
				title: "Commercial context stays visible",
				meta: "Reservation inputs, branch logic, and pricing prep stay attached before the case moves on.",
				tone: "warning",
			},
			{
				label: "Handoff",
				title: "Managers receive a ready case",
				meta: "Approvals and decisions stay with people, but they start from context instead of raw chat.",
				tone: "success",
			},
		],
		dividerLabel: "Product flow",
		workflowEyebrow: "Workflow detail",
		workflowTitle: "From inbound chat to manager action, the product keeps the operational path visible.",
		workflowIntro:
			"The product page should explain the whole route clearly: customer demand arrives, AI structures the case, branch and quote context become usable, and the manager receives a prepared handoff instead of noise.",
		workflowSteps: [
			{
				label: "Step 1",
				title: "Customer demand enters through chat",
				meta: "Telegram-first inbound requests reach the team as raw dates, branch hints, and vehicle intent.",
				tone: "terracotta",
			},
			{
				label: "Step 2",
				title: "The lead is qualified and organized",
				meta: "AI captures context, timing, and basic fit so the team can work from structure.",
				tone: "navy",
			},
			{
				label: "Step 3",
				title: "Quote and reservation context are prepared",
				meta: "Branch constraints, inventory context, and pricing inputs move into a workable operational frame.",
				tone: "warning",
			},
			{
				label: "Step 4",
				title: "Manager action happens with context",
				meta: "The manager steps into approvals, exceptions, and final confirmation with the case already prepared.",
				tone: "success",
			},
		],
		capabilitySections: [
			{
				title: "Capture every lead",
				intro: "Inbound rental demand is caught and qualified before it cools down.",
				items: [
					"Capture demand around the clock.",
					"Keep customer intent, timing, and branch relevance together.",
					"Give the team structured cases instead of scattered messages.",
				],
			},
			{
				title: "Prepare quotes faster",
				intro: "Quote and reservation context are ready before a manager rebuilds the thread.",
				items: [
					"Show reservation inputs before manager touch.",
					"Keep branch and inventory context inside the workflow.",
					"Support the next pricing action without replacing judgment.",
				],
			},
			{
				title: "Hand off manager-ready cases",
				intro: "Managers step into approvals and exceptions with the context already assembled.",
				items: [
					"Deliver context-rich cases instead of long chats.",
					"Keep approvals and exceptions visible as explicit states.",
					"Tie follow-up work back to real branch operations.",
				],
			},
		],
		ownershipEyebrow: "Ownership model",
		ownershipTitle: "AI handles the repeatable path. Managers keep the accountable decisions.",
		ownershipRuleLabel: "Product boundary",
		ownershipRuleText:
			"Cursivo is designed to prepare, structure, and surface the case. It hands off before pricing approvals, negotiation, or customer commitment become human-critical.",
		ownershipConnectorLabel: "Prepared handoff",
		ownershipLeftTitle: "Automation handles",
		ownershipLeftMeta:
			"The repeatable work stays fast and consistent so the team does not spend time reconstructing every request from scratch.",
		ownershipLeftItems: [
			"Lead qualification and context capture",
			"Branch-aware request structure",
			"Inventory and reservation preparation signals",
			"Quote-prep inputs before manager review",
		],
		ownershipRightTitle: "Team owns",
		ownershipRightMeta:
			"Commercial decisions remain with the people who carry accountability for the branch and the customer relationship.",
		ownershipRightItems: [
			"Approvals and pricing sign-off",
			"Exceptions and non-standard requests",
			"Negotiation and commercial judgment",
			"Final confirmation with the customer",
		],
		liveTitle: "Live now",
		liveIntro: "These are the capabilities the page can describe as active today without stretching the story.",
		liveItems: [
			"Telegram-first inbound demand workflow",
			"Lead qualification and structured handoff path",
			"Branch-aware operating logic",
			"Manager and admin-oriented operational surfaces",
			"English, Russian, and Arabic site direction",
		],
		upcomingTitle: "Clearly marked next layers",
		upcomingIntro: "These belong in the page only as expansions or direction, not as live promises.",
		upcomingItems: [
			"Additional inbound channels beyond Telegram",
			"Expanded public content surfaces",
			"Broader release-note and changelog coverage",
			"Further use-case pages and SEO expansion",
		],
		finalCtaEyebrow: "Next step",
		finalCtaTitle: "Inspect the product story, then choose the lightest next action.",
		finalCtaIntro:
			"The product page closes the same way the site should behave overall: no forced form, no fake urgency, just direct ways to continue the conversation.",
		finalCtaLinks: finalCtasByLocale.en,
	},
	ru: {
		locale: "ru",
		path: productPaths.ru,
		alternatePaths: productPaths,
		title: "Cursivo Product | AI CRM для операционного потока проката",
		description:
			"Cursivo превращает входящий чат-спрос в квалифицированные лиды, подготовку оффера, контекст бронирования и действие менеджера без обещаний, что AI должен брать на себя все решения.",
		brandMeta: "AI CRM для команд проката",
		navItems: productNavByLocale.ru,
		localeLinks: productLocaleLinks,
		footerTitle: "Cursivo",
		footerCopy: "Мультиязычная AI CRM для операторов автопроката.",
		footerMetaLabel: "Локали",
		footerMetaValue: "Английский, русский и арабский с route-first структурой",
		heroEyebrow: "Продуктовый поток",
		heroPills: [
			{ label: "Входящий чат", tone: "terracotta" },
			{ label: "Подготовка оффера", tone: "navy" },
			{ label: "Действие менеджера", tone: "success" },
		],
		heroTitle: "AI CRM, которая ловит спрос на аренду до того, как уходит выручка.",
		heroLead:
			"Cursivo закрывает входящий чат, быстро квалифицирует спрос, готовит контекст для оффера и передает менеджеру уже собранный кейс, чтобы команда отвечала быстрее и конвертировала больше без жизни внутри бесконечных переписок.",
		heroSubnote:
			"Подходит операторам, которым нужны 24/7 захват лидов, чистая маршрутизация по филиалам и человеческий контроль в точке решения.",
		heroActions: [
			{ label: "Запросить pilot", href: "#contact" },
			{ label: "Смотреть поток", href: "#workflow" },
		],
		heroCards: [
			{
				label: "Захват лида",
				title: "Спрос ловится сразу",
				meta: "Входящий чат превращается в живой sales-кейс, а не ждет в неуправляемой очереди.",
				tone: "terracotta",
			},
			{
				label: "Квалификация",
				title: "Намерение быстро структурируется",
				meta: "Сроки, филиал и намерение клиента собираются в рабочую продажную запись до реакции команды.",
				tone: "navy",
			},
			{
				label: "Подготовка оффера",
				title: "Коммерческий контекст не теряется",
				meta: "Контекст бронирования, филиала и цены остается с кейсом до передачи менеджеру.",
				tone: "warning",
			},
			{
				label: "Handoff",
				title: "Менеджер получает готовый кейс",
				meta: "Согласования и решения остаются у людей, но стартуют уже из контекста, а не из сырого чата.",
				tone: "success",
			},
		],
		dividerLabel: "Продуктовый маршрут",
		workflowEyebrow: "Деталь потока",
		workflowTitle: "От входящего чата до действия менеджера продукт сохраняет весь операционный путь видимым.",
		workflowIntro:
			"Страница продукта должна ясно объяснять весь маршрут: спрос приходит, AI структурирует кейс, контекст филиала и оффера становится рабочим, а менеджер получает подготовленный handoff вместо шума.",
		workflowSteps: [
			{
				label: "Шаг 1",
				title: "Спрос приходит через чат",
				meta: "Telegram-first запросы попадают в команду как даты, филиал и намерение по машине.",
				tone: "terracotta",
			},
			{
				label: "Шаг 2",
				title: "Лид квалифицируется и упорядочивается",
				meta: "AI фиксирует контекст, сроки и базовую релевантность, чтобы команда работала из структуры.",
				tone: "navy",
			},
			{
				label: "Шаг 3",
				title: "Готовится контекст оффера и бронирования",
				meta: "Ограничения филиала, инвентарь и ценовые входы переходят в рабочую операционную рамку.",
				tone: "warning",
			},
			{
				label: "Шаг 4",
				title: "Менеджер действует с контекстом",
				meta: "Менеджер входит в согласования, исключения и финальное подтверждение уже с подготовленным кейсом.",
				tone: "success",
			},
		],
		capabilitySections: [
			{
				title: "Захватывать каждый лид",
				intro: "Входящий спрос фиксируется и квалифицируется до того, как успевает остыть.",
				items: [
					"Ловить спрос в течение суток.",
					"Держать вместе намерение клиента, сроки и нужный филиал.",
					"Давать команде структурированные кейсы вместо обрывков чата.",
				],
			},
			{
				title: "Быстрее готовить офферы",
				intro: "Контекст оффера и бронирования уже собран до ручного включения менеджера.",
				items: [
					"Показывать входные данные для бронирования до касания менеджера.",
					"Держать контекст филиала и инвентаря внутри потока.",
					"Поддерживать следующий ценовой шаг, не заменяя judgment.",
				],
			},
			{
				title: "Передавать готовые кейсы менеджеру",
				intro: "Менеджер входит в согласования и исключения, когда весь контекст уже собран.",
				items: [
					"Передавать кейсы с контекстом вместо длинных переписок.",
					"Оставлять согласования и исключения видимыми состояниями.",
					"Привязывать follow-up к реальным операциям филиала.",
				],
			},
		],
		ownershipEyebrow: "Модель ролей",
		ownershipTitle: "AI берет повторяемую часть. Ответственные решения остаются у менеджеров.",
		ownershipRuleLabel: "Граница продукта",
		ownershipRuleText:
			"Cursivo создан для подготовки, структуры и видимости кейса. Он передает его до того, как цена, переговоры или обязательство перед клиентом становятся критически человеческими.",
		ownershipConnectorLabel: "Подготовленный handoff",
		ownershipLeftTitle: "Автоматизация берет на себя",
		ownershipLeftMeta:
			"Повторяемая работа остается быстрой и последовательной, чтобы команде не приходилось каждый раз собирать запрос заново.",
		ownershipLeftItems: [
			"Квалификацию лида и фиксацию контекста",
			"Структуру запроса по филиалу",
			"Сигналы по инвентарю и бронированию",
			"Входные данные для оффера до review менеджера",
		],
		ownershipRightTitle: "Команда контролирует",
		ownershipRightMeta:
			"Коммерческие решения остаются у людей, которые несут ответственность за филиал и отношения с клиентом.",
		ownershipRightItems: [
			"Согласования и подтверждение цены",
			"Исключения и нестандартные запросы",
			"Переговоры и коммерческий judgment",
			"Финальное подтверждение с клиентом",
		],
		liveTitle: "Что уже можно показывать как live",
		liveIntro: "Эти возможности страница может описывать как активные уже сейчас без натяжки.",
		liveItems: [
			"Telegram-first поток входящего спроса",
			"Квалификация лида и структурированный handoff",
			"Логика по филиалам",
			"Операционные поверхности для менеджера и админа",
			"Направление EN, RU и AR на сайте",
		],
		upcomingTitle: "Что нужно явно помечать как next",
		upcomingIntro: "Эти слои стоит упоминать только как направление развития, а не как live promise.",
		upcomingItems: [
			"Дополнительные каналы кроме Telegram",
			"Расширенные публичные контентные поверхности",
			"Более широкое покрытие release notes и changelog",
			"Новые use-case страницы и SEO-расширение",
		],
		finalCtaEyebrow: "Следующий шаг",
		finalCtaTitle: "Изучите продуктовую логику и выберите самый легкий следующий шаг.",
		finalCtaIntro:
			"Страница продукта должна закрываться так же, как ведет себя весь сайт: без навязчивой формы, без искусочной срочности, только прямые способы продолжить разговор.",
		finalCtaLinks: finalCtasByLocale.ru,
	},
	ar: {
		locale: "ar",
		path: productPaths.ar,
		alternatePaths: productPaths,
		title: "Cursivo Product | CRM ذكية لمسار تشغيل التأجير",
		description:
			"تحول Cursivo الطلبات الواردة من الدردشة إلى عملاء محتملين مؤهلين وتجهيز عروض وسياق حجز وإجراء واضح للمدير دون الادعاء بأن الذكاء الاصطناعي يجب أن يملك كل قرار.",
		brandMeta: "CRM ذكية لفرق التأجير",
		navItems: productNavByLocale.ar,
		localeLinks: productLocaleLinks,
		footerTitle: "Cursivo",
		footerCopy: "CRM ذكية متعددة اللغات لمشغلي تأجير السيارات.",
		footerMetaLabel: "اللغات",
		footerMetaValue: "الإنجليزية والروسية والعربية مع بنية مسارات مستقلة",
		heroEyebrow: "سير المنتج",
		heroPills: [
			{ label: "دردشة واردة", tone: "terracotta" },
			{ label: "تجهيز العرض", tone: "navy" },
			{ label: "إجراء المدير", tone: "success" },
		],
		heroTitle: "AI CRM تلتقط طلبات التأجير قبل أن تضيع الإيرادات.",
		heroLead:
			"تغطي Cursivo الدردشة الواردة وتؤهل الطلب بسرعة وتجهز سياق العرض وتسلم للمدير حالة جاهزة، حتى يرد الفريق أسرع ويحول أكثر من دون أن يعيش داخل سلاسل رسائل طويلة طوال اليوم.",
		heroSubnote:
			"مبنية للمشغلين الذين يحتاجون إلى التقاط العملاء 24/7 وتوجيه واضح بحسب الفرع وتحكم بشري عند نقطة القرار.",
		heroActions: [
			{ label: "اطلب pilot", href: "#contact" },
			{ label: "اعرض سير العمل", href: "#workflow" },
		],
		heroCards: [
			{
				label: "التقاط الطلب",
				title: "يتم التقاط الطلب فورا",
				meta: "تتحول الدردشة الواردة إلى حالة مبيعات حية بدلا من الانتظار داخل طابور غير منظم.",
				tone: "terracotta",
			},
			{
				label: "التأهيل",
				title: "تنظم النية بسرعة",
				meta: "يصبح التوقيت والفرع واحتياج العميل سجلا واضحا قبل أن يبدأ الفريق بالعمل اليدوي.",
				tone: "navy",
			},
			{
				label: "تجهيز العرض",
				title: "يبقى السياق التجاري مرئيا",
				meta: "يبقى سياق الحجز والفرع والتسعير مرتبطا بالحالة قبل انتقالها إلى المدير.",
				tone: "warning",
			},
			{
				label: "التسليم",
				title: "يستلم المدير حالة جاهزة",
				meta: "تبقى الموافقات والقرارات عند البشر لكنها تبدأ من سياق منظم لا من دردشة خام.",
				tone: "success",
			},
		],
		dividerLabel: "مسار المنتج",
		workflowEyebrow: "تفصيل سير العمل",
		workflowTitle: "من الدردشة الواردة إلى إجراء المدير يحافظ المنتج على وضوح المسار التشغيلي بالكامل.",
		workflowIntro:
			"يجب أن تشرح صفحة المنتج الطريق كله بوضوح: يصل الطلب، ينظم الذكاء الاصطناعي الحالة، يصبح سياق الفرع والعرض قابلا للعمل، ثم يصل التسليم الجاهز إلى المدير بدلا من الضوضاء.",
		workflowSteps: [
			{
				label: "الخطوة 1",
				title: "يدخل الطلب عبر الدردشة",
				meta: "تصل الطلبات الواردة عبر Telegram كتواريخ وتلميحات فرع ونية اختيار السيارة.",
				tone: "terracotta",
			},
			{
				label: "الخطوة 2",
				title: "يتم تأهيل الطلب وتنظيمه",
				meta: "يلتقط الذكاء الاصطناعي السياق والتوقيت والملاءمة الأولية حتى يعمل الفريق من بنية واضحة.",
				tone: "navy",
			},
			{
				label: "الخطوة 3",
				title: "يتم تجهيز سياق العرض والحجز",
				meta: "تنتقل قيود الفرع وسياق المخزون ومدخلات التسعير إلى إطار تشغيلي قابل للاستخدام.",
				tone: "warning",
			},
			{
				label: "الخطوة 4",
				title: "يتصرف المدير مع سياق كامل",
				meta: "يدخل المدير إلى الموافقات والاستثناءات والتأكيد النهائي بعد أن تكون الحالة جاهزة.",
				tone: "success",
			},
		],
		capabilitySections: [
			{
				title: "التقاط كل عميل محتمل",
				intro: "يتم التقاط الطلب الوارد وتأهيله قبل أن يبرد.",
				items: [
					"التقاط الطلبات على مدار الساعة.",
					"الحفاظ على النية والتوقيت وارتباط الفرع معا.",
					"إعطاء الفريق حالات منظمة بدلا من رسائل متناثرة.",
				],
			},
			{
				title: "تجهيز العروض بسرعة أكبر",
				intro: "يصبح سياق العرض والحجز جاهزا قبل أن يعيد المدير بناء المحادثة يدويا.",
				items: [
					"إظهار مدخلات الحجز قبل تدخل المدير.",
					"إبقاء سياق الفرع والمخزون داخل سير العمل.",
					"دعم الخطوة السعرية التالية من دون استبدال الحكم التجاري.",
				],
			},
			{
				title: "تسليم حالات جاهزة للمدير",
				intro: "يدخل المدير إلى الموافقات والاستثناءات بعد أن يصبح السياق كاملا وجاهزا.",
				items: [
					"تسليم حالات غنية بالسياق بدلا من محادثات طويلة.",
					"إبقاء الموافقات والاستثناءات كحالات واضحة ومرئية.",
					"ربط المتابعة بعمليات الفرع الحقيقية.",
				],
			},
		],
		ownershipEyebrow: "نموذج المسؤولية",
		ownershipTitle: "يتولى الذكاء الاصطناعي المسار المتكرر. وتبقى القرارات المسؤولة عند المدير.",
		ownershipRuleLabel: "حد المنتج",
		ownershipRuleText:
			"صممت Cursivo لتجهيز الحالة وتنظيمها وإظهارها. وهي تسلمها قبل أن تصبح الموافقة السعرية أو التفاوض أو الالتزام مع العميل مسألة بشرية حاسمة.",
		ownershipConnectorLabel: "تسليم جاهز",
		ownershipLeftTitle: "تتولى الأتمتة",
		ownershipLeftMeta:
			"يبقى العمل المتكرر سريعا ومتسقا حتى لا يضطر الفريق إلى إعادة بناء كل طلب من الصفر.",
		ownershipLeftItems: [
			"تأهيل العميل المحتمل وتسجيل السياق",
			"تنظيم الطلب بحسب الفرع",
			"إشارات المخزون وتجهيز الحجز",
			"مدخلات العرض قبل مراجعة المدير",
		],
		ownershipRightTitle: "يتولى الفريق",
		ownershipRightMeta:
			"تبقى القرارات التجارية مع الأشخاص الذين يتحملون مسؤولية الفرع والعلاقة مع العميل.",
		ownershipRightItems: [
			"الموافقات واعتماد السعر",
			"الطلبات الاستثنائية وغير القياسية",
			"التفاوض والحكم التجاري",
			"التأكيد النهائي مع العميل",
		],
		liveTitle: "ما يمكن عرضه كحي الآن",
		liveIntro: "هذه هي القدرات التي يمكن للصفحة وصفها كفعالة اليوم من دون مبالغة.",
		liveItems: [
			"تدفق طلبات واردة عبر Telegram",
			"تأهيل الطلب ومسار تسليم منظم",
			"منطق تشغيل مرتبط بالفروع",
			"واجهات تشغيل للمدير والإدارة",
			"اتجاهات EN وRU وAR على الموقع",
		],
		upcomingTitle: "ما يجب وسمه بوضوح كطبقة لاحقة",
		upcomingIntro: "يجب ذكر هذه العناصر كاتجاه توسع فقط لا كوعود حية الآن.",
		upcomingItems: [
			"قنوات واردة إضافية خارج Telegram",
			"مساحات محتوى عامة أوسع",
			"تغطية أوسع لملاحظات الإصدارات وسجل التغييرات",
			"صفحات use-case إضافية وتوسع SEO",
		],
		finalCtaEyebrow: "الخطوة التالية",
		finalCtaTitle: "راجع منطق المنتج ثم اختر أخف خطوة تالية.",
		finalCtaIntro:
			"يجب أن تنتهي صفحة المنتج بالطريقة نفسها التي يتصرف بها الموقع كله: بلا نموذج مفروض ولا استعجال مصطنع، فقط طرق مباشرة لمواصلة الحوار.",
		finalCtaLinks: finalCtasByLocale.ar,
	},
};

export function getProductContent(locale: Locale) {
	return productContentByLocale[locale];
}
