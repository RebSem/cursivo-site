import type { FinalCtaLink } from "./ctas";

export type Locale = "en" | "ru" | "ar";

export interface NavItem {
	label: string;
	href: string;
}

export interface LocaleLink {
	code: Locale;
	label: string;
	href: string;
}

export interface RouteCard {
	label: string;
	title: string;
	meta: string;
	tone: "terracotta" | "navy" | "success" | "warning";
}

export interface ToneChip {
	label: string;
	tone: "terracotta" | "navy" | "success" | "warning";
}

export interface ValueCard {
	label: string;
	title: string;
	meta: string;
	tone: "terracotta" | "navy" | "success" | "warning";
}

export interface ControlStrip {
	label: string;
	value: string;
	meta: string;
	tone: "terracotta" | "navy" | "success" | "warning";
}

export interface BranchCard {
	name: string;
	status: string;
	meta: string;
	chips: ToneChip[];
}

export interface InsightMetric {
	label: string;
	value: string;
}

export interface ScreenshotAsset {
	src: string;
	alt: string;
}

export interface SetupStep {
	label: string;
	title: string;
	meta: string;
	tone: "terracotta" | "navy" | "success" | "warning";
}

export interface WorkspaceCard {
	title: string;
	meta: string;
}

export interface LanguageCard {
	code: string;
	name: string;
	tagline: string;
	meta: string;
}

export interface RtlPreviewLine {
	label: string;
	value: string;
}

export interface TrustCard {
	label: string;
	title: string;
	meta: string;
	tone: "terracotta" | "navy" | "success" | "warning";
}

export interface TrustSignal {
	label: string;
	value: string;
}

export interface HomeContent {
	locale: Locale;
	title: string;
	description: string;
	brandMeta: string;
	navItems: NavItem[];
	localeLinks: LocaleLink[];
	heroEyebrow: string;
	heroPills: Array<{ label: string; tone: "terracotta" | "navy" | "success" }>;
	heroTitle: string;
	heroLead: string;
	heroSubnote: string;
	heroActions: Array<{ label: string; href: string }>;
	heroOutcomeItems: string[];
	heroDemoMessage: string;
	heroDemoSignals: string[];
	heroDemoQuoteItems: string[];
	heroDemoManagerItems: string[];
	proofRibbonTitle: string;
	proofRibbonItems: string[];
	valueSectionEyebrow: string;
	valueSectionTitle: string;
	valueSectionIntro: string;
	valueCards: ValueCard[];
	routeCards: RouteCard[];
	operatingLoopEyebrow: string;
	operatingLoopTitle: string;
	operatingLoopIntro: string;
	operatingLoopSteps: RouteCard[];
	featureMatrixTitle: string;
	dividerLabel: string;
	splitEyebrow: string;
	splitTitle: string;
	splitRuleLabel: string;
	splitRuleText: string;
	splitConnectorLabel: string;
	leftTitle: string;
	leftMeta: string;
	leftItems: string[];
	rightTitle: string;
	rightMeta: string;
	rightItems: string[];
	shellEyebrow: string;
	shellTitle: string;
	shellIntro: string;
	shellNotes: string[];
	controlEyebrow: string;
	controlTitle: string;
	controlIntro: string;
	controlStrips: ControlStrip[];
	controlBranches: BranchCard[];
	controlInsightLabel: string;
	controlInsightTitle: string;
	controlInsightCopy: string;
	controlInsightMetrics: InsightMetric[];
	controlScreenshot?: ScreenshotAsset;
	setupEyebrow: string;
	setupTitle: string;
	setupIntro: string;
	setupSourceLabel: string;
	setupSourceTitle: string;
	setupSourceMeta: string;
	setupSteps: SetupStep[];
	setupWorkspaceLabel: string;
	setupWorkspaceTitle: string;
	setupWorkspaceMeta: string;
	setupWorkspaceCards: WorkspaceCard[];
	marketEyebrow: string;
	marketTitle: string;
	marketIntro: string;
	marketLanguages: LanguageCard[];
	marketDisciplineLabel: string;
	marketDisciplineItems: string[];
	marketRtlLabel: string;
	marketRtlTitle: string;
	marketRtlMeta: string;
	marketRtlLines: RtlPreviewLine[];
	insightsEyebrow: string;
	insightsTitle: string;
	insightsIntro: string;
	trustEyebrow: string;
	trustTitle: string;
	trustIntro: string;
	trustCards: TrustCard[];
	trustBuyerLabel: string;
	trustBuyerTitle: string;
	trustBuyerCopy: string;
	trustSignals: TrustSignal[];
	scopeTitle: string;
	scopeItems: string[];
	coreTitle: string;
	coreItems: string[];
	footerTitle: string;
	footerCopy: string;
	footerMetaLabel: string;
	footerMetaValue: string;
	finalCtaEyebrow: string;
	finalCtaTitle: string;
	finalCtaIntro: string;
	finalCtaLinks: FinalCtaLink[];
}

import { finalCtasByLocale, heroCtasByLocale } from "./ctas";
import { featureMatrixByLocale } from "./features";
import { localeLinks, navigationByLocale } from "./navigation";

export const homeContentByLocale: Record<Locale, HomeContent> = {
	en: {
		locale: "en",
		title: "Cursivo | AI CRM for car rental operators",
		description:
			"Cursivo is a multilingual AI CRM for car rental operators that turns inbound demand into structured leads, quotes, reservations, and manager actions.",
		brandMeta: "AI CRM for rental teams",
		navItems: navigationByLocale.en,
		localeLinks,
		heroEyebrow: "AI CRM for car rental sales teams",
		heroPills: [
			{ label: "24/7 lead capture", tone: "terracotta" },
			{ label: "AI replies and qualification", tone: "navy" },
			{ label: "Manager-ready handoff", tone: "success" },
		],
		heroTitle: "Cursivo handles lead communication so your rental team closes more deals.",
		heroLead:
			"It replies fast, qualifies intent, prepares quote context, and keeps every lead tied to the right branch so you stop losing hot demand in chat and scale sales without drowning managers in repetitive work.",
		heroSubnote:
			"Built for operators who need after-hours coverage, cleaner handoff, and higher conversion from inbound chat.",
		heroActions: heroCtasByLocale.en,
		heroOutcomeItems: [
			"Reply in seconds",
			"Capture leads 24/7",
			"Raise conversion",
			"Save manager hours",
		],
		heroDemoMessage:
			"Hi, I need an SUV in Dubai Marina from Apr 12 to Apr 15. Can you confirm price and availability tonight?",
		heroDemoSignals: ["Dubai Marina", "SUV", "Apr 12-15", "High intent"],
		heroDemoQuoteItems: [
			"Dates and branch matched",
			"Vehicle class confirmed",
			"Pricing prep ready",
		],
		heroDemoManagerItems: [
			"Manager sees a clean summary",
			"Follow-up starts from context",
			"No lead leakage after hours",
		],
		proofRibbonTitle: "Why operators care",
		proofRibbonItems: [
			"Faster replies",
			"Night demand stays captured",
			"Less manual triage",
			"Branch context stays attached",
			"More rentals closed",
		],
		valueSectionEyebrow: "Commercial value",
		valueSectionTitle: "One system that keeps rental revenue moving even when your team is offline.",
		valueSectionIntro:
			"Buyers should understand the upside fast: more conversations handled, fewer leads lost, and managers pulled only into cases worth their time.",
		valueCards: [
			{
				label: "24/7 communication",
				title: "Reply before competitors do.",
				meta: "The system keeps customer communication moving after hours, during rush periods, and whenever the team cannot answer every chat by hand.",
				tone: "terracotta",
			},
			{
				label: "Qualification and prep",
				title: "Turn raw chats into ready sales cases.",
				meta: "Intent, dates, branch fit, and quote context are organized before the manager joins, so the next step is obvious and conversion-ready.",
				tone: "navy",
			},
			{
				label: "Branch control",
				title: "Scale across branches without losing ownership.",
				meta: "Every lead stays tied to the right branch, workflow state, and manager handoff instead of vanishing into a generic CRM queue.",
				tone: "success",
			},
		],
		routeCards: [
			{
				label: "Customer chat",
				title: "New request lands in chat",
				meta: "The lead arrives with dates, branch intent, and urgency already visible.",
				tone: "terracotta",
			},
			{
				label: "AI qualification",
				title: "AI cleans up the conversation",
				meta: "Intent, timing, and branch fit turn into a structured case instead of another loose thread.",
				tone: "navy",
			},
			{
				label: "Quote prep",
				title: "Quote path is ready",
				meta: "Reservation inputs, availability context, and pricing prep stay together before handoff.",
				tone: "warning",
			},
			{
				label: "Manager handoff",
				title: "Manager closes from context",
				meta: "The team steps into a ready case instead of rereading chat history to figure out what matters.",
				tone: "success",
			},
		],
		operatingLoopEyebrow: "Operating loop",
		operatingLoopTitle: "From customer message to manager handoff, one route stays visible.",
		operatingLoopIntro:
			"The workflow should read like an operational board: demand arrives, AI qualifies it, branch context is checked, the quote path is prepared, and the manager receives a ready handoff.",
		operatingLoopSteps: [
			{
				label: "Step 1",
				title: "Customer message arrives",
				meta: "The inbound request enters through chat with dates, branch hints, and vehicle intent.",
				tone: "terracotta",
			},
			{
				label: "Step 2",
				title: "AI qualifies the request",
				meta: "The system captures timing, needs, and context so the team works from structure, not noise.",
				tone: "navy",
			},
			{
				label: "Step 3",
				title: "Branch inventory is checked",
				meta: "Availability and branch relevance are surfaced before the conversation drifts further.",
				tone: "warning",
			},
			{
				label: "Step 4",
				title: "Quote path is prepared",
				meta: "Pricing and reservation preparation become visible as the next operational action.",
				tone: "navy",
			},
			{
				label: "Step 5",
				title: "Manager receives the handoff",
				meta: "The manager steps into a prepared context instead of a long unstructured message thread.",
				tone: "success",
			},
		],
		featureMatrixTitle: "Core workflow strengths",
		dividerLabel: "Operational workflow",
		splitEyebrow: "AI and team roles",
		splitTitle: "Automation handles the repetitive path. Managers keep the judgment.",
		splitRuleLabel: "Handoff rule",
		splitRuleText:
			"Cursivo prepares the case, checks branch-fit details, and hands off before approvals, negotiation, or client commitment are needed.",
		splitConnectorLabel: "Prepared handoff",
		leftTitle: "Platform handles",
		leftMeta:
			"Structured, repeatable steps that need speed and consistency before a manager is pulled in.",
		leftItems: [
			"Lead qualification",
			"Context capture and request structure",
			"Branch and inventory check",
			"Quote preparation inputs",
		],
		rightTitle: "Team owns",
		rightMeta:
			"Commercial judgment, accountability, and exceptions stay with people who can commit on behalf of the branch.",
		rightItems: [
			"Approvals and pricing sign-off",
			"Exceptions and non-standard cases",
			"Negotiation and commercial judgment",
			"Final confirmation with the client",
		],
		shellEyebrow: "Market-ready structure",
		shellTitle: "The site foundation is built for multilingual product communication.",
		shellIntro:
			"The public site is now structured around reusable sections and route-first locale paths instead of a single internal placeholder page.",
		shellNotes: [
			"English is the default public route.",
			"Russian and Arabic have dedicated localized paths.",
			"Arabic uses RTL layout handling instead of just translated text.",
		],
		controlEyebrow: "Operational proof",
		controlTitle: "One live control layer keeps qualified demand, quote pressure, and manager workload visible.",
		controlIntro:
			"This is the proof layer for buyers: Cursivo does not just answer chats. It keeps branch pressure, prepared quote work, and follow-up states visible so the team can act on revenue, not reconstruct context.",
		controlStrips: [
			{
				label: "Qualified leads in queue",
				value: "26",
				meta: "Requests already structured with pickup timing, branch context, and vehicle intent.",
				tone: "navy",
			},
			{
				label: "Quotes prepared today",
				value: "14",
				meta: "Prepared before the manager needs to make a pricing or approval decision.",
				tone: "terracotta",
			},
			{
				label: "Manager follow-ups pending",
				value: "05",
				meta: "Only the cases that need judgment or direct customer commitment remain open.",
				tone: "success",
			},
		],
		controlBranches: [
			{
				name: "Dubai Marina",
				status: "Stable flow",
				meta: "High intent requests are already grouped by weekend pickup windows.",
				chips: [
					{ label: "Reservations ready", tone: "success" },
					{ label: "2 approvals pending", tone: "warning" },
					{ label: "SUV demand spike", tone: "terracotta" },
				],
			},
			{
				name: "Downtown",
				status: "Manager review",
				meta: "Branch load is balanced, but late-night requests need commercial confirmation.",
				chips: [
					{ label: "6 quote tasks", tone: "navy" },
					{ label: "3 exception cases", tone: "warning" },
					{ label: "Arabic queue active", tone: "success" },
				],
			},
			{
				name: "Airport desk",
				status: "Fast turnover",
				meta: "Short-term rentals are moving quickly, with AI handling the early triage layer.",
				chips: [
					{ label: "Inventory matched", tone: "success" },
					{ label: "4 handoffs ready", tone: "navy" },
					{ label: "Price check required", tone: "terracotta" },
				],
			},
		],
		controlInsightLabel: "Buyer signal",
		controlInsightTitle: "Managers work the cases that matter instead of digging through raw chat traffic.",
		controlInsightCopy:
			"The value is operational clarity: the team sees where approvals are stacking up, where quote prep is already covered, and which branch needs direct action before a lead cools down.",
		controlInsightMetrics: [
			{ label: "Branches in view", value: "3" },
			{ label: "Task states visible", value: "11" },
			{ label: "Languages in one queue", value: "3" },
			{ label: "Handoffs ready", value: "4" },
		],
		setupEyebrow: "Setup and onboarding",
		setupTitle: "From branch spreadsheets to a live workspace without a messy rollout.",
		setupIntro:
			"The onboarding story should feel concrete: branch and fleet data come in, the workspace is structured, and the team starts from a usable operating setup instead of a long implementation project.",
		setupSourceLabel: "Input source",
		setupSourceTitle: "Branch and fleet data arrive as XLSX",
		setupSourceMeta:
			"Existing branch sheets, fleet groups, pricing columns, and manager ownership can be imported as the starting operational map.",
		setupSteps: [
			{
				label: "Step 1",
				title: "Upload branch and fleet sheets",
				meta: "Current operating data is brought in without rewriting the team’s structure by hand.",
				tone: "terracotta",
			},
			{
				label: "Step 2",
				title: "Map branches, classes, and pricing logic",
				meta: "The import is shaped into branch-aware records, fleet group rules, and reservation inputs.",
				tone: "navy",
			},
			{
				label: "Step 3",
				title: "Open a live workspace for the team",
				meta: "Managers see a usable environment with branch context, ownership, and workflows already in place.",
				tone: "success",
			},
		],
		setupWorkspaceLabel: "Live result",
		setupWorkspaceTitle: "The workspace is ready for real branch operations",
		setupWorkspaceMeta:
			"Instead of a blank CRM, the team starts with branches, fleet structure, manager ownership, and workflows aligned to day-to-day rental work.",
		setupWorkspaceCards: [
			{
				title: "Branch directories",
				meta: "Each location starts with its own operating context and manager ownership.",
			},
			{
				title: "Fleet classes",
				meta: "Vehicle groups and commercial logic are already attached to the right branch records.",
			},
			{
				title: "Pricing inputs",
				meta: "Quote preparation starts from imported logic instead of rebuilding pricing from zero.",
			},
			{
				title: "Team-ready flows",
				meta: "The manager handoff path is visible from day one, not added later as cleanup work.",
			},
		],
		marketEyebrow: "Market readiness",
		marketTitle: "Multilingual support is built as interface discipline, not an afterthought.",
		marketIntro:
			"English, Russian, and Arabic are part of the operating surface itself. The product reads as market-ready because content structure, routing, and RTL behavior are handled deliberately.",
		marketLanguages: [
			{
				code: "EN",
				name: "English default route",
				tagline: "Primary product language for broad market communication.",
				meta: "The main route carries the core positioning, product flow, and conversion story.",
			},
			{
				code: "RU",
				name: "Russian market path",
				tagline: "Localized product language for operator-facing credibility.",
				meta: "The Russian route is a dedicated page, not a machine-translated layer over the default site.",
			},
			{
				code: "AR",
				name: "Arabic RTL route",
				tagline: "Real right-to-left presentation for regional market readiness.",
				meta: "Arabic uses direction-aware layout and content flow rather than a footer-level language mention.",
			},
		],
		marketDisciplineLabel: "Why it matters",
		marketDisciplineItems: [
			"Locale routing is handled as part of public market entry, not as a late translation add-on.",
			"Content blocks stay structured across languages so the product story remains consistent.",
			"RTL handling shows interface discipline for Arabic-speaking operators and managers.",
		],
		marketRtlLabel: "RTL preview",
		marketRtlTitle: "واجهة عربية باتجاه صحيح وسياق تشغيلي واضح",
		marketRtlMeta:
			"هذا ليس مجرد نص مترجم. البنية واتجاه القراءة وترتيب المعلومات كلها مضبوطة لتظهر كواجهة جاهزة للسوق.",
		marketRtlLines: [
			{ label: "الفرع", value: "دبي مارينا" },
			{ label: "الحالة", value: "طلب مؤهل وجاهز للتسليم" },
			{ label: "السيارة", value: "SUV فئة متوسطة" },
			{ label: "الإجراء", value: "مراجعة المدير واعتماد السعر" },
		],
		insightsEyebrow: "Insights preview",
		insightsTitle: "Editorial topics that deepen trust, SEO coverage, and product clarity.",
		insightsIntro:
			"The homepage can preview the questions serious buyers ask before they trust the workflow: where leads are lost, what AI should not automate, and how multilingual operations affect follow-up speed.",
		trustEyebrow: "Transparency and trust",
		trustTitle: "Public build discipline creates trust for technical buyers and partners.",
		trustIntro:
			"The trust signal is not branding. It is the fact that the public codebase, deployment path, changelog direction, and release notes can be inspected as part of how the product is built.",
		trustCards: [
			{
				label: "Public repository",
				title: "The marketing surface is built in the open",
				meta: "Technical partners can inspect how the public site is structured instead of guessing from polished screenshots.",
				tone: "navy",
			},
			{
				label: "Static deploy",
				title: "Deployment stays simple and observable",
				meta: "A static delivery path reduces hidden complexity and makes the public surface easier to reason about.",
				tone: "success",
			},
			{
				label: "Changelog path",
				title: "Visible changes build credibility over time",
				meta: "Transparent updates make the product story feel maintained rather than frozen after launch.",
				tone: "terracotta",
			},
			{
				label: "Roadmap direction",
				title: "Future public notes can stay aligned with releases",
				meta: "A public-facing release-note and roadmap direction gives buyers a clearer signal of execution discipline.",
				tone: "warning",
			},
		],
		trustBuyerLabel: "Why technical teams care",
		trustBuyerTitle: "This is a trust layer for evaluators, partners, and implementation-minded buyers.",
		trustBuyerCopy:
			"The public site can signal that the team ships with visible structure, transparent updates, and a maintainable delivery model. That matters for partners who look beyond marketing copy before they trust a product.",
		trustSignals: [
			{ label: "Public build surface", value: "Open" },
			{ label: "Deploy model", value: "Static" },
			{ label: "Change trail", value: "Visible" },
			{ label: "Release direction", value: "Public" },
		],
		scopeTitle: "What the site needs to communicate",
		scopeItems: [
			"Cursivo is an AI CRM for car rental operations, not a generic chatbot.",
			"The product connects inbound demand, quote work, reservations, and handoff.",
			"The workflow is designed for real branches, managers, and multilingual teams.",
		],
		coreTitle: "What operators need to understand quickly",
		coreItems: [
			"What Cursivo is",
			"Why it is different from generic CRMs",
			"Why the workflow is credible for a rental team",
		],
		footerTitle: "Cursivo",
		footerCopy: "Multilingual AI CRM for car rental operators.",
		footerMetaLabel: "Locales",
		footerMetaValue: "English, Russian, and Arabic with route-first structure",
		finalCtaEyebrow: "Final CTA",
		finalCtaTitle: "Keep the next step simple: inspect the public build or start the conversation directly.",
		finalCtaIntro:
			"The v1 site does not force a backend form. The closing actions stay lightweight: review the public code, request a pilot or demo, or open a direct technical conversation.",
		finalCtaLinks: finalCtasByLocale.en,
	},
	ru: {
		locale: "ru",
		title: "Cursivo | AI CRM для автопроката",
		description:
			"Cursivo — мультиязычная AI CRM для команд автопроката, которая превращает входящий спрос в структурированные лиды, подготовку оффера, бронирования и действия менеджера.",
		brandMeta: "AI CRM для команд проката",
		navItems: navigationByLocale.ru,
		localeLinks,
		heroEyebrow: "AI CRM для команд продаж автопроката",
		heroPills: [
			{ label: "24/7 захват лидов", tone: "terracotta" },
			{ label: "AI-ответы и квалификация", tone: "navy" },
			{ label: "Handoff для менеджера", tone: "success" },
		],
		heroTitle: "Cursivo берет общение с лидами на себя, чтобы ваша команда закрывала больше сделок.",
		heroLead:
			"Cursivo быстро отвечает, квалифицирует намерение, готовит контекст для оффера и держит лид привязанным к нужному филиалу, чтобы вы не теряли горячий спрос в чатах и могли масштабировать продажи без перегруза менеджеров.",
		heroSubnote:
			"Подходит операторам, которым нужны покрытие вне рабочего времени, чище handoff и выше конверсия из входящего чата.",
		heroActions: heroCtasByLocale.ru,
		heroOutcomeItems: [
			"Ответ за секунды",
			"Лиды 24/7",
			"Рост конверсии",
			"Экономия часов менеджера",
		],
		heroDemoMessage:
			"Здравствуйте, нужен SUV в Dubai Marina с 12 по 15 апреля. Можете сегодня подтвердить цену и наличие?",
		heroDemoSignals: ["Dubai Marina", "SUV", "12-15 апреля", "Горячий лид"],
		heroDemoQuoteItems: [
			"Даты и филиал сопоставлены",
			"Класс машины подтвержден",
			"Подготовка цены готова",
		],
		heroDemoManagerItems: [
			"Менеджер видит чистое summary",
			"Follow-up идет из контекста",
			"Лид не теряется ночью",
		],
		proofRibbonTitle: "Почему это важно оператору",
		proofRibbonItems: [
			"Быстрее ответ",
			"Ночной спрос не теряется",
			"Меньше ручного triage",
			"Контекст филиала не отваливается",
			"Больше закрытых аренд",
		],
		valueSectionEyebrow: "Коммерческая ценность",
		valueSectionTitle: "Одна система, которая держит выручку от аренды в движении, даже когда команда офлайн.",
		valueSectionIntro:
			"Покупатель должен сразу увидеть выгоду: больше обработанных диалогов, меньше потерянных лидов и подключение менеджера только там, где он реально нужен.",
		valueCards: [
			{
				label: "24/7 коммуникация",
				title: "Отвечайте раньше конкурентов.",
				meta: "Система держит общение с клиентом в движении после рабочего дня, в пиковые часы и тогда, когда команда не успевает вручную разобрать каждый чат.",
				tone: "terracotta",
			},
			{
				label: "Квалификация и prep",
				title: "Превращайте сырой чат в готовый sales-кейс.",
				meta: "Намерение, даты, филиал и контекст для оффера собираются до подключения менеджера, поэтому следующий шаг понятен и готов к конверсии.",
				tone: "navy",
			},
			{
				label: "Контроль филиалов",
				title: "Масштабируйте продажи без потери ownership.",
				meta: "Каждый лид остается привязан к нужному филиалу, статусу потока и handoff менеджеру, а не растворяется в общей CRM-очереди.",
				tone: "success",
			},
		],
		routeCards: [
			{
				label: "Чат клиента",
				title: "Новый запрос падает в чат",
				meta: "Лид приходит уже с датами, филиалом и срочностью на поверхности.",
				tone: "terracotta",
			},
			{
				label: "AI-квалификация",
				title: "AI собирает разговор в структуру",
				meta: "Намерение, сроки и привязка к филиалу превращаются в рабочий кейс, а не в еще один loose thread.",
				tone: "navy",
			},
			{
				label: "Подготовка оффера",
				title: "Путь к офферу уже готов",
				meta: "Входные данные для бронирования, наличие и подготовка цены остаются вместе до handoff.",
				tone: "warning",
			},
			{
				label: "Handoff менеджеру",
				title: "Менеджер закрывает из контекста",
				meta: "Команда входит в готовый кейс вместо того, чтобы перечитывать историю чата и собирать суть заново.",
				tone: "success",
			},
		],
		operatingLoopEyebrow: "Операционный цикл",
		operatingLoopTitle: "От сообщения клиента до handoff менеджеру весь маршрут остается видимым.",
		operatingLoopIntro:
			"Поток должен читаться как операционная доска: спрос приходит, AI его квалифицирует, контекст филиала проверяется, путь оффера готовится, а менеджер получает готовый handoff.",
		operatingLoopSteps: [
			{
				label: "Шаг 1",
				title: "Сообщение клиента приходит",
				meta: "Входящий запрос попадает в чат с датами, филиалом и намерением по машине.",
				tone: "terracotta",
			},
			{
				label: "Шаг 2",
				title: "AI квалифицирует запрос",
				meta: "Система фиксирует сроки, потребности и контекст, чтобы команда работала не из хаоса.",
				tone: "navy",
			},
			{
				label: "Шаг 3",
				title: "Проверяется инвентарь филиала",
				meta: "Доступность и привязка к филиалу видны до того, как диалог уйдет дальше.",
				tone: "warning",
			},
			{
				label: "Шаг 4",
				title: "Готовится путь оффера",
				meta: "Цена и подготовка бронирования становятся понятным следующим действием.",
				tone: "navy",
			},
			{
				label: "Шаг 5",
				title: "Менеджер получает handoff",
				meta: "Менеджер входит в подготовленный контекст, а не в длинную неструктурированную переписку.",
				tone: "success",
			},
		],
		featureMatrixTitle: "Ключевые сильные стороны потока",
		dividerLabel: "Операционный поток",
		splitEyebrow: "Роли AI и команды",
		splitTitle: "Автоматизация закрывает повторяемую часть. Решение остается у менеджера.",
		splitRuleLabel: "Правило handoff",
		splitRuleText:
			"Cursivo подготавливает кейс, проверяет привязку к филиалу и передает менеджеру до момента согласования, переговоров или обязательств перед клиентом.",
		splitConnectorLabel: "Подготовленный handoff",
		leftTitle: "Платформа берет на себя",
		leftMeta:
			"Повторяемые и структурированные шаги, где важны скорость и единый формат до подключения менеджера.",
		leftItems: [
			"Квалификацию лида",
			"Фиксацию контекста и структуры запроса",
			"Проверку филиала и инвентаря",
			"Подготовку входных данных для оффера",
		],
		rightTitle: "Команда контролирует",
		rightMeta:
			"Коммерческое решение, ответственность и нестандартные случаи остаются у людей, которые реально подтверждают сделку.",
		rightItems: [
			"Согласования и подтверждение цены",
			"Нестандартные случаи и исключения",
			"Переговоры и коммерческие решения",
			"Финальное подтверждение с клиентом",
		],
		shellEyebrow: "Основа для рынка",
		shellTitle: "Сайт уже построен как мультиязычная продуктовая площадка.",
		shellIntro:
			"Публичный сайт теперь опирается на переиспользуемые секции и route-first локали, а не на одну внутреннюю заглушку.",
		shellNotes: [
			"Английский остается основной публичной страницей.",
			"Для русского и арабского есть отдельные маршруты.",
			"Арабский поддерживает RTL-разметку, а не только перевод текста.",
		],
		controlEyebrow: "Операционное доказательство",
		controlTitle: "Единый live-слой держит на виду квалифицированный спрос, давление по офферам и загрузку менеджеров.",
		controlIntro:
			"Это proof-секция для buyer: Cursivo не просто отвечает в чате. Он показывает, где скапливается спрос, где оффер уже подготовлен и какому филиалу нужен прямой action, пока лид не остыл.",
		controlStrips: [
			{
				label: "Квалифицированных лидов в очереди",
				value: "26",
				meta: "Запросы уже собраны с датами, контекстом филиала и намерением по машине.",
				tone: "navy",
			},
			{
				label: "Офферов подготовлено сегодня",
				value: "14",
				meta: "Подготовлены до того, как менеджеру нужно принять ценовое решение или согласование.",
				tone: "terracotta",
			},
			{
				label: "Follow-up менеджера в ожидании",
				value: "05",
				meta: "Открыты только кейсы, где нужен judgment или прямое подтверждение клиенту.",
				tone: "success",
			},
		],
		controlBranches: [
			{
				name: "Dubai Marina",
				status: "Стабильный поток",
				meta: "Запросы с высоким намерением уже сгруппированы по окнам выдачи на выходные.",
				chips: [
					{ label: "Бронирования готовы", tone: "success" },
					{ label: "2 согласования ждут", tone: "warning" },
					{ label: "Пик спроса на SUV", tone: "terracotta" },
				],
			},
			{
				name: "Downtown",
				status: "Нужен review",
				meta: "Нагрузка по филиалу сбалансирована, но поздние заявки требуют коммерческого решения.",
				chips: [
					{ label: "6 задач на оффер", tone: "navy" },
					{ label: "3 исключения", tone: "warning" },
					{ label: "AR-очередь активна", tone: "success" },
				],
			},
			{
				name: "Airport desk",
				status: "Быстрый оборот",
				meta: "Краткосрочная аренда движется быстро, а AI забирает ранний этап triage.",
				chips: [
					{ label: "Инвентарь сопоставлен", tone: "success" },
					{ label: "4 handoff готовы", tone: "navy" },
					{ label: "Нужна проверка цены", tone: "terracotta" },
				],
			},
		],
		controlInsightLabel: "Сигнал для buyer",
		controlInsightTitle: "Менеджер работает с тем, что влияет на выручку, а не копается в сыром чате.",
		controlInsightCopy:
			"Главная ценность в ясности: команда видит, где копятся согласования, где подготовка уже закрыта и какому филиалу нужно прямое вмешательство до того, как спрос уйдет конкуренту.",
		controlInsightMetrics: [
			{ label: "Филиалов в обзоре", value: "3" },
			{ label: "Состояний задач видно", value: "11" },
			{ label: "Языка в одной очереди", value: "3" },
			{ label: "Handoff готовы", value: "4" },
		],
		setupEyebrow: "Настройка и онбординг",
		setupTitle: "От таблиц филиалов до живого workspace без тяжелого внедрения.",
		setupIntro:
			"История онбординга должна быть конкретной: данные по филиалам и автопарку загружаются, workspace структурируется, и команда начинает работу не с пустой системы, а с готовой операционной базы.",
		setupSourceLabel: "Источник данных",
		setupSourceTitle: "Данные филиалов и автопарка приходят в XLSX",
		setupSourceMeta:
			"Текущие таблицы по филиалам, группам машин, колонкам цены и ownership менеджеров можно использовать как стартовую операционную карту.",
		setupSteps: [
			{
				label: "Шаг 1",
				title: "Загружаются таблицы филиалов и автопарка",
				meta: "Действующие данные команды переносятся без ручной пересборки структуры с нуля.",
				tone: "terracotta",
			},
			{
				label: "Шаг 2",
				title: "Связываются филиалы, классы и логика цен",
				meta: "Импорт превращается в записи по филиалам, правила групп машин и входные данные для бронирования.",
				tone: "navy",
			},
			{
				label: "Шаг 3",
				title: "Для команды открывается живой workspace",
				meta: "Менеджеры получают рабочую среду, где уже есть контекст филиалов, ownership и операционные потоки.",
				tone: "success",
			},
		],
		setupWorkspaceLabel: "Результат",
		setupWorkspaceTitle: "Workspace готов к реальным операциям филиалов",
		setupWorkspaceMeta:
			"Вместо пустой CRM команда получает филиалы, структуру автопарка, ownership менеджеров и рабочие потоки, привязанные к ежедневной аренде.",
		setupWorkspaceCards: [
			{
				title: "Каталог филиалов",
				meta: "Каждая локация стартует со своим контекстом и назначенным ответственным менеджером.",
			},
			{
				title: "Классы автопарка",
				meta: "Группы машин и коммерческая логика уже связаны с нужными филиалами.",
			},
			{
				title: "Ценовые входы",
				meta: "Подготовка оффера начинается из импортированной логики, а не с ручной пересборки цен.",
			},
			{
				title: "Потоки для команды",
				meta: "Путь handoff менеджеру виден с первого дня, а не появляется позже как доработка.",
			},
		],
		marketEyebrow: "Готовность к рынку",
		marketTitle: "Мультиязычность построена как дисциплина интерфейса, а не как поздний перевод.",
		marketIntro:
			"Английский, русский и арабский встроены в саму продуктовую поверхность. Сайт выглядит готовым к рынку, потому что структура контента, маршруты и RTL-поведение продуманы заранее.",
		marketLanguages: [
			{
				code: "EN",
				name: "Основной маршрут на английском",
				tagline: "Базовый язык продукта для широкой рыночной коммуникации.",
				meta: "Главный маршрут несет позиционирование, логику продукта и основную конверсионную историю.",
			},
			{
				code: "RU",
				name: "Русскоязычный маршрут",
				tagline: "Локализованный язык продукта для доверия со стороны операторов.",
				meta: "Русская версия существует как отдельная страница, а не как автоматический слой поверх основного сайта.",
			},
			{
				code: "AR",
				name: "Арабский RTL-маршрут",
				tagline: "Реальное right-to-left представление для региональной готовности.",
				meta: "Арабский маршрут использует direction-aware верстку и структуру, а не просто упоминание языка внизу страницы.",
			},
		],
		marketDisciplineLabel: "Почему это важно",
		marketDisciplineItems: [
			"Локали и маршруты оформлены как часть выхода на рынок, а не как поздняя надстройка.",
			"Структура секций сохраняется между языками, чтобы продуктовая история не распадалась.",
			"RTL-поддержка показывает дисциплину интерфейса для арабоязычных операторов и менеджеров.",
		],
		marketRtlLabel: "RTL preview",
		marketRtlTitle: "واجهة عربية باتجاه صحيح وسياق تشغيلي واضح",
		marketRtlMeta:
			"Это не просто переведенный текст. Направление, структура и порядок информации настроены так, чтобы интерфейс выглядел реально готовым к рынку.",
		marketRtlLines: [
			{ label: "الفرع", value: "دبي مارينا" },
			{ label: "الحالة", value: "طلب مؤهل وجاهز للتسليم" },
			{ label: "السيارة", value: "SUV فئة متوسطة" },
			{ label: "الإجراء", value: "مراجعة المدير واعتماد السعر" },
		],
		insightsEyebrow: "Превью материалов",
		insightsTitle: "Редакционные темы, которые усиливают доверие, SEO и ясность продукта.",
		insightsIntro:
			"На главной можно заранее показать вопросы, которые задают серьезные покупатели: где теряются лиды, что AI не должен автоматизировать и как мультиязычность влияет на скорость follow-up.",
		trustEyebrow: "Прозрачность и доверие",
		trustTitle: "Открытая дисциплина сборки усиливает доверие со стороны технических покупателей и партнеров.",
		trustIntro:
			"Сигнал доверия здесь не в брендинге. Он в том, что публичная кодовая база, модель деплоя, направление changelog и release notes можно проследить как часть того, как команда реально работает.",
		trustCards: [
			{
				label: "Публичный репозиторий",
				title: "Маркетинговая поверхность собирается открыто",
				meta: "Технические партнеры могут видеть, как устроен публичный сайт, а не полагаться только на красивые экраны.",
				tone: "navy",
			},
			{
				label: "Статический деплой",
				title: "Поставка остается простой и наблюдаемой",
				meta: "Статическая модель снижает скрытую сложность и делает публичную поверхность понятнее.",
				tone: "success",
			},
			{
				label: "Направление changelog",
				title: "Видимые изменения накапливают доверие",
				meta: "Прозрачные обновления показывают, что продукт поддерживается, а не замер после запуска.",
				tone: "terracotta",
			},
			{
				label: "Публичный roadmap",
				title: "Заметки о релизах могут идти в одном контуре с развитием",
				meta: "Публичное направление release notes и roadmap дает покупателям более ясный сигнал о дисциплине исполнения.",
				tone: "warning",
			},
		],
		trustBuyerLabel: "Почему это важно техкомандам",
		trustBuyerTitle: "Это слой доверия для оценщиков, партнеров и покупателей, которые смотрят глубже маркетинга.",
		trustBuyerCopy:
			"Публичный сайт может показывать, что команда работает через видимую структуру, прозрачные обновления и поддерживаемую модель поставки. Для партнеров это важнее, чем просто обещания в тексте.",
		trustSignals: [
			{ label: "Публичная сборка", value: "Открыта" },
			{ label: "Модель деплоя", value: "Static" },
			{ label: "След изменений", value: "Виден" },
			{ label: "Релизное направление", value: "Публично" },
		],
		scopeTitle: "Что сайт должен объяснять",
		scopeItems: [
			"Cursivo — это AI CRM для операций автопроката, а не общий чат-бот.",
			"Продукт связывает входящий спрос, подготовку оффера, бронирование и handoff.",
			"Поток спроектирован для реальных филиалов, менеджеров и мультиязычных команд.",
		],
		coreTitle: "Что оператор должен понять быстро",
		coreItems: [
			"Что такое Cursivo",
			"Чем он отличается от обычных CRM",
			"Почему этот поток реалистичен для команды проката",
		],
		footerTitle: "Cursivo",
		footerCopy: "Мультиязычная AI CRM для операторов автопроката.",
		footerMetaLabel: "Локали",
		footerMetaValue: "Английский, русский и арабский с route-first структурой",
		finalCtaEyebrow: "Финальный CTA",
		finalCtaTitle: "Следующий шаг должен быть простым: посмотреть публичную сборку или выйти на прямой контакт.",
		finalCtaIntro:
			"В v1 нет навязчивой backend-формы. Завершающие действия остаются легкими: изучить публичный код, запросить pilot или demo, либо начать прямой технический разговор.",
		finalCtaLinks: finalCtasByLocale.ru,
	},
	ar: {
		locale: "ar",
		title: "Cursivo | CRM ذكية لتأجير السيارات",
		description:
			"Cursivo هي CRM ذكية متعددة اللغات لفرق تأجير السيارات وتحول الطلبات الواردة إلى عملاء محتملين منظمين وتجهيز عروض وحجوزات وإجراءات واضحة للمدير.",
		brandMeta: "CRM ذكية لفرق التأجير",
		navItems: navigationByLocale.ar,
		localeLinks,
		heroEyebrow: "AI CRM لفرق مبيعات تأجير السيارات",
		heroPills: [
			{ label: "التقاط العملاء 24/7", tone: "terracotta" },
			{ label: "ردود ذكية وتأهيل", tone: "navy" },
			{ label: "تسليم جاهز للمدير", tone: "success" },
		],
		heroTitle: "Cursivo تتولى التواصل مع العملاء المحتملين حتى يغلق فريقك صفقات أكثر.",
		heroLead:
			"ترد بسرعة وتؤهل النية وتجهز سياق العرض وتحافظ على ارتباط العميل بالفرع الصحيح، حتى لا يضيع الطلب الساخن داخل الدردشة ويتمكن الفريق من توسيع المبيعات من دون إنهاك المديرين بالعمل المتكرر.",
		heroSubnote:
			"مبنية للمشغلين الذين يحتاجون إلى تغطية بعد ساعات العمل وتسليم أنظف ومعدل تحويل أعلى من الدردشة الواردة.",
		heroActions: heroCtasByLocale.ar,
		heroOutcomeItems: [
			"رد خلال ثوان",
			"التقاط 24/7",
			"رفع التحويل",
			"توفير وقت المدير",
		],
		heroDemoMessage:
			"مرحبا، أحتاج SUV في Dubai Marina من 12 إلى 15 أبريل. هل يمكنكم تأكيد السعر والتوفر الليلة؟",
		heroDemoSignals: ["Dubai Marina", "SUV", "12-15 أبريل", "طلب ساخن"],
		heroDemoQuoteItems: [
			"تمت مطابقة التاريخ والفرع",
			"تم تأكيد فئة السيارة",
			"أصبح تجهيز السعر جاهزا",
		],
		heroDemoManagerItems: [
			"المدير يرى ملخصا واضحا",
			"تبدأ المتابعة من سياق كامل",
			"لا يضيع العميل ليلا",
		],
		proofRibbonTitle: "لماذا يهتم المشغل",
		proofRibbonItems: [
			"رد أسرع",
			"الطلبات الليلية لا تضيع",
			"فرز يدوي أقل",
			"سياق الفرع يبقى واضحا",
			"إغلاقات أكثر",
		],
		valueSectionEyebrow: "القيمة التجارية",
		valueSectionTitle: "نظام واحد يبقي إيراد التأجير في حركة مستمرة حتى عندما يكون الفريق خارج الخدمة.",
		valueSectionIntro:
			"يجب أن يرى المشتري الفائدة بسرعة: محادثات أكثر يتم التعامل معها وطلبات أقل تضيع ومديرون يدخلون فقط في الحالات التي تستحق وقتهم.",
		valueCards: [
			{
				label: "تواصل 24/7",
				title: "رد قبل أن يصل العميل إلى المنافس.",
				meta: "يبقي النظام التواصل مع العميل متحركا بعد ساعات العمل وفي أوقات الضغط وعندما لا يستطيع الفريق الرد على كل محادثة يدويا.",
				tone: "terracotta",
			},
			{
				label: "تأهيل وتجهيز",
				title: "حول الدردشة الخام إلى حالة مبيعات جاهزة.",
				meta: "تتجمع النية والتواريخ والفرع وسياق العرض قبل انضمام المدير، لذلك تصبح الخطوة التالية واضحة وجاهزة للتحويل.",
				tone: "navy",
			},
			{
				label: "التحكم بالفروع",
				title: "وسع المبيعات من دون فقدان المسؤولية.",
				meta: "يبقى كل عميل مرتبطا بالفرع الصحيح وحالة التدفق وتسليم المدير بدلا من أن يختفي داخل طابور CRM عام.",
				tone: "success",
			},
		],
		routeCards: [
			{
				label: "دردشة العميل",
				title: "يصل طلب جديد إلى الدردشة",
				meta: "يظهر العميل مع التواريخ والفرع والاستعجال من اللحظة الأولى.",
				tone: "terracotta",
			},
			{
				label: "تأهيل ذكي",
				title: "يجمع الذكاء الاصطناعي المحادثة في بنية واضحة",
				meta: "تتحول النية والتوقيت وملاءمة الفرع إلى حالة عمل بدلا من سلسلة رسائل منفصلة.",
				tone: "navy",
			},
			{
				label: "تجهيز العرض",
				title: "يصبح مسار العرض جاهزا",
				meta: "تبقى مدخلات الحجز والسعة وتجهيز السعر معا قبل التسليم.",
				tone: "warning",
			},
			{
				label: "تسليم للمدير",
				title: "يغلق المدير من سياق واضح",
				meta: "يدخل الفريق إلى حالة جاهزة بدلا من إعادة قراءة تاريخ المحادثة لاستخراج المطلوب.",
				tone: "success",
			},
		],
		operatingLoopEyebrow: "حلقة التشغيل",
		operatingLoopTitle: "من رسالة العميل إلى تسليم المدير يبقى المسار واضحا بالكامل.",
		operatingLoopIntro:
			"يجب أن يقرأ سير العمل مثل لوحة تشغيل: يصل الطلب، يقوم الذكاء الاصطناعي بتأهيله، يتم فحص سياق الفرع، يجهز مسار العرض، ثم يصل التسليم الجاهز إلى المدير.",
		operatingLoopSteps: [
			{
				label: "الخطوة 1",
				title: "تصل رسالة العميل",
				meta: "يدخل الطلب عبر الدردشة مع التاريخ والفرع ونية الاستئجار.",
				tone: "terracotta",
			},
			{
				label: "الخطوة 2",
				title: "يؤهل الذكاء الاصطناعي الطلب",
				meta: "يتم تسجيل الزمن والاحتياج والسياق حتى يعمل الفريق من بنية واضحة لا من ضوضاء.",
				tone: "navy",
			},
			{
				label: "الخطوة 3",
				title: "يتم فحص توفر الفرع",
				meta: "يظهر التوفر وارتباط الفرع قبل أن يبتعد الحوار عن المسار.",
				tone: "warning",
			},
			{
				label: "الخطوة 4",
				title: "يتم تجهيز مسار العرض",
				meta: "يصبح التسعير وتجهيز الحجز هو الخطوة التشغيلية التالية بوضوح.",
				tone: "navy",
			},
			{
				label: "الخطوة 5",
				title: "يتسلم المدير الحالة",
				meta: "يدخل المدير إلى سياق جاهز بدلا من سلسلة طويلة وغير منظمة من الرسائل.",
				tone: "success",
			},
		],
		featureMatrixTitle: "نقاط قوة سير العمل",
		dividerLabel: "سير العمل التشغيلي",
		splitEyebrow: "دور المنصة والفريق",
		splitTitle: "المنصة تنجز الجزء المتكرر. والقرار يبقى عند المدير.",
		splitRuleLabel: "قاعدة التسليم",
		splitRuleText:
			"تقوم Cursivo بتجهيز الحالة والتحقق من ملاءمة الفرع ثم تسلمها قبل الحاجة إلى الموافقات أو التفاوض أو أي التزام نهائي مع العميل.",
		splitConnectorLabel: "تسليم جاهز",
		leftTitle: "المنصة تتولى",
		leftMeta:
			"الخطوات المنظمة والمتكررة التي تحتاج إلى سرعة واتساق قبل تدخل المدير.",
		leftItems: [
			"تأهيل العميل المحتمل",
			"تسجيل السياق وتنظيم الطلب",
			"فحص الفرع والمخزون",
			"تجهيز مدخلات العرض السعري",
		],
		rightTitle: "الفريق يتولى",
		rightMeta:
			"القرارات التجارية والمسؤولية والحالات الاستثنائية تبقى مع الفريق الذي يملك صلاحية الالتزام أمام العميل.",
		rightItems: [
			"الموافقات واعتماد السعر",
			"الحالات الاستثنائية وغير القياسية",
			"التفاوض والحكم التجاري",
			"التأكيد النهائي مع العميل",
		],
		shellEyebrow: "بنية جاهزة للسوق",
		shellTitle: "الموقع أصبح مبنيا لمسارات عامة متعددة اللغات.",
		shellIntro:
			"الموقع العام يعتمد الآن على أقسام قابلة لإعادة الاستخدام ومسارات منفصلة للغات بدلا من صفحة داخلية واحدة.",
		shellNotes: [
			"الإنجليزية هي المسار العام الافتراضي.",
			"الروسية والعربية لهما مسارات مستقلة.",
			"العربية تستخدم دعما حقيقيا لاتجاه RTL وليس مجرد ترجمة نصية.",
		],
		controlEyebrow: "دليل تشغيلي",
		controlTitle: "طبقة تشغيل حية تبقي الطلبات المؤهلة وضغط العروض وعبء المديرين مرئية في مكان واحد.",
		controlIntro:
			"هذه هي طبقة الإثبات للمشتري: Cursivo لا تكتفي بالرد على الدردشة، بل تظهر أين يتراكم الطلب وأين تم تجهيز العرض وأي فرع يحتاج إلى تدخل مباشر قبل أن يبرد العميل.",
		controlStrips: [
			{
				label: "العملاء المؤهلون في الطابور",
				value: "26",
				meta: "الطلبات أصبحت منظمة مع التوقيت وسياق الفرع ونية اختيار السيارة.",
				tone: "navy",
			},
			{
				label: "العروض المحضرة اليوم",
				value: "14",
				meta: "تم تجهيزها قبل أن يحتاج المدير إلى اعتماد السعر أو اتخاذ قرار.",
				tone: "terracotta",
			},
			{
				label: "متابعات المدير المعلقة",
				value: "05",
				meta: "لا تبقى مفتوحة إلا الحالات التي تحتاج إلى حكم تجاري أو التزام مباشر مع العميل.",
				tone: "success",
			},
		],
		controlBranches: [
			{
				name: "Dubai Marina",
				status: "تدفق مستقر",
				meta: "الطلبات عالية النية أصبحت مجمعة حسب نوافذ الاستلام في عطلة نهاية الأسبوع.",
				chips: [
					{ label: "حجوزات جاهزة", tone: "success" },
					{ label: "2 موافقات معلقة", tone: "warning" },
					{ label: "ارتفاع طلب SUV", tone: "terracotta" },
				],
			},
			{
				name: "Downtown",
				status: "مراجعة المدير",
				meta: "ضغط الفرع متوازن لكن الطلبات الليلية تحتاج إلى قرار تجاري مباشر.",
				chips: [
					{ label: "6 مهام عرض", tone: "navy" },
					{ label: "3 حالات استثنائية", tone: "warning" },
					{ label: "طابور عربي نشط", tone: "success" },
				],
			},
			{
				name: "Airport desk",
				status: "دوران سريع",
				meta: "الإيجارات القصيرة تتحرك بسرعة بينما يتولى الذكاء الاصطناعي الفرز الأولي.",
				chips: [
					{ label: "المخزون مطابق", tone: "success" },
					{ label: "4 حالات تسليم جاهزة", tone: "navy" },
					{ label: "فحص سعر مطلوب", tone: "terracotta" },
				],
			},
		],
		controlInsightLabel: "إشارة للمشتري",
		controlInsightTitle: "يعمل المدير على الحالات التي تؤثر على الإيراد لا على حركة الدردشة الخام.",
		controlInsightCopy:
			"القيمة هنا هي الوضوح التشغيلي: يرى الفريق أين تتراكم الموافقات وأين أصبح تجهيز العرض مكتملا وأي فرع يحتاج إلى تدخل مباشر قبل أن يضيع الطلب.",
		controlInsightMetrics: [
			{ label: "فروع ظاهرة", value: "3" },
			{ label: "حالات مهام مرئية", value: "11" },
			{ label: "لغات في طابور واحد", value: "3" },
			{ label: "حالات تسليم جاهزة", value: "4" },
		],
		setupEyebrow: "الإعداد والانطلاق",
		setupTitle: "من جداول الفروع إلى مساحة عمل جاهزة بدون إطلاق مربك.",
		setupIntro:
			"يجب أن تبدو قصة الإعداد عملية وواضحة: يتم إدخال بيانات الفروع والأسطول، ثم تبنى مساحة العمل، ويبدأ الفريق من بيئة تشغيل قابلة للاستخدام لا من مشروع تنفيذ طويل.",
		setupSourceLabel: "مصدر الإدخال",
		setupSourceTitle: "بيانات الفروع والأسطول تصل كملف XLSX",
		setupSourceMeta:
			"يمكن استخدام الجداول الحالية للفروع ومجموعات السيارات وأعمدة التسعير وملكية المديرين كنقطة البداية التشغيلية.",
		setupSteps: [
			{
				label: "الخطوة 1",
				title: "رفع جداول الفروع والأسطول",
				meta: "يتم إدخال البيانات الحالية من دون إعادة بناء هيكل الفريق يدويا من الصفر.",
				tone: "terracotta",
			},
			{
				label: "الخطوة 2",
				title: "ربط الفروع والفئات ومنطق التسعير",
				meta: "يتحول الاستيراد إلى سجلات حسب الفروع وقواعد مجموعات السيارات ومدخلات الحجز.",
				tone: "navy",
			},
			{
				label: "الخطوة 3",
				title: "فتح مساحة عمل حية للفريق",
				meta: "يرى المديرون بيئة قابلة للاستخدام فيها سياق الفروع والملكية ومسارات العمل جاهزة.",
				tone: "success",
			},
		],
		setupWorkspaceLabel: "النتيجة الحية",
		setupWorkspaceTitle: "تصبح مساحة العمل جاهزة لتشغيل الفروع الحقيقي",
		setupWorkspaceMeta:
			"بدلا من CRM فارغة يبدأ الفريق بفروع وبنية أسطول وملكية للمديرين ومسارات عمل مرتبطة بعمليات التأجير اليومية.",
		setupWorkspaceCards: [
			{
				title: "أدلة الفروع",
				meta: "كل موقع يبدأ بسياقه التشغيلي وملكية المدير المناسبة له.",
			},
			{
				title: "فئات الأسطول",
				meta: "مجموعات السيارات والمنطق التجاري مرتبطان مسبقا بسجلات الفروع الصحيحة.",
			},
			{
				title: "مدخلات التسعير",
				meta: "يبدأ تجهيز العرض من المنطق المستورد بدلا من بناء الأسعار من جديد.",
			},
			{
				title: "مسارات جاهزة للفريق",
				meta: "يكون مسار التسليم إلى المدير واضحا من اليوم الأول لا كعمل تنظيف لاحق.",
			},
		],
		marketEyebrow: "جاهزية السوق",
		marketTitle: "الدعم متعدد اللغات مبني كانضباط واجهة لا كترجمة مضافة لاحقا.",
		marketIntro:
			"الإنجليزية والروسية والعربية جزء من سطح المنتج نفسه. يبدو المنتج جاهزا للسوق لأن بنية المحتوى والمسارات وسلوك RTL كلها مضبوطة بشكل مقصود.",
		marketLanguages: [
			{
				code: "EN",
				name: "المسار الإنجليزي الافتراضي",
				tagline: "لغة المنتج الأساسية للتواصل مع السوق الأوسع.",
				meta: "يحمل المسار الرئيسي التموضع الأساسي ومسار المنتج ورسالة التحويل الرئيسية.",
			},
			{
				code: "RU",
				name: "المسار الروسي",
				tagline: "لغة منتج محلية تبني المصداقية مع المشغلين.",
				meta: "المسار الروسي صفحة مستقلة وليس طبقة ترجمة آلية فوق الموقع الأساسي.",
			},
			{
				code: "AR",
				name: "المسار العربي RTL",
				tagline: "عرض فعلي من اليمين إلى اليسار ليثبت الجاهزية الإقليمية.",
				meta: "المسار العربي يستخدم تخطيطا واتجاها مناسبين فعليا وليس مجرد ذكر اللغة في التذييل.",
			},
		],
		marketDisciplineLabel: "لماذا يهم ذلك",
		marketDisciplineItems: [
			"مسارات اللغات جزء من دخول السوق العام وليست إضافة ترجمة متأخرة.",
			"تحافظ كتل المحتوى على بنيتها عبر اللغات حتى تبقى قصة المنتج متماسكة.",
			"دعم RTL يثبت انضباط الواجهة للمشغلين والمديرين الناطقين بالعربية.",
		],
		marketRtlLabel: "معاينة RTL",
		marketRtlTitle: "واجهة عربية باتجاه صحيح وسياق تشغيلي واضح",
		marketRtlMeta:
			"هذا ليس مجرد نص مترجم. البنية واتجاه القراءة وترتيب المعلومات كلها مضبوطة لتظهر كواجهة جاهزة للسوق.",
		marketRtlLines: [
			{ label: "الفرع", value: "دبي مارينا" },
			{ label: "الحالة", value: "طلب مؤهل وجاهز للتسليم" },
			{ label: "السيارة", value: "SUV فئة متوسطة" },
			{ label: "الإجراء", value: "مراجعة المدير واعتماد السعر" },
		],
		insightsEyebrow: "معاينة المقالات",
		insightsTitle: "موضوعات تحريرية تعمق الثقة وتوسع SEO وتوضح المنتج أكثر.",
		insightsIntro:
			"يمكن للصفحة الرئيسية أن تعرض مسبقا الأسئلة التي يطرحها المشترون الجادون: أين تضيع الطلبات، وما الذي لا يجب أن يؤتمته الذكاء الاصطناعي، وكيف تؤثر العمليات متعددة اللغات على سرعة المتابعة.",
		trustEyebrow: "الشفافية والثقة",
		trustTitle: "الانضباط العلني في البناء يخلق ثقة لدى المشترين التقنيين والشركاء.",
		trustIntro:
			"إشارة الثقة هنا ليست مجرد شكل بصري. بل هي أن قاعدة الكود العامة ومسار النشر واتجاه سجل التغييرات وملاحظات الإصدارات يمكن تفقدها كجزء من طريقة العمل نفسها.",
		trustCards: [
			{
				label: "مستودع عام",
				title: "السطح العام يبنى بشكل يمكن تفقده",
				meta: "يمكن للشركاء التقنيين فهم كيفية تنظيم الموقع العام بدلا من الاعتماد فقط على لقطات مصقولة.",
				tone: "navy",
			},
			{
				label: "نشر ثابت",
				title: "مسار النشر يبقى بسيطا وقابلا للملاحظة",
				meta: "النشر الثابت يقلل التعقيد المخفي ويجعل السطح العام أوضح من ناحية التشغيل.",
				tone: "success",
			},
			{
				label: "اتجاه سجل التغييرات",
				title: "التغييرات المرئية تبني المصداقية مع الوقت",
				meta: "التحديثات الواضحة تعطي انطباعا بأن المنتج يتطور فعليا ولا يتجمد بعد الإطلاق.",
				tone: "terracotta",
			},
			{
				label: "اتجاه خارطة الطريق",
				title: "يمكن أن تبقى الملاحظات العامة مرتبطة بالإصدارات",
				meta: "اتجاه عام لملاحظات الإصدارات وخارطة الطريق يمنح المشترين إشارة أوضح على انضباط التنفيذ.",
				tone: "warning",
			},
		],
		trustBuyerLabel: "لماذا يهم ذلك للفرق التقنية",
		trustBuyerTitle: "هذه طبقة ثقة للمقيّمين والشركاء والمشترين الذين ينظرون أبعد من النص التسويقي.",
		trustBuyerCopy:
			"يمكن للموقع العام أن يثبت أن الفريق يشحن عبر بنية واضحة وتحديثات شفافة ونموذج نشر قابل للصيانة. وهذا مهم للشركاء الذين لا يكتفون بالرسائل التسويقية قبل الثقة بالمنتج.",
		trustSignals: [
			{ label: "سطح البناء العام", value: "مفتوح" },
			{ label: "نموذج النشر", value: "ثابت" },
			{ label: "أثر التغييرات", value: "مرئي" },
			{ label: "اتجاه الإصدارات", value: "عام" },
		],
		scopeTitle: "ما الذي يجب أن يوضحه الموقع",
		scopeItems: [
			"Cursivo هي CRM ذكية لعمليات تأجير السيارات وليست روبوت دردشة عاما.",
			"المنتج يربط الطلب الوارد وتجهيز العرض والحجز وتسليم المهمة للمدير.",
			"سير العمل مخصص للفروع والمديرين والفرق متعددة اللغات.",
		],
		coreTitle: "ما الذي يجب أن يفهمه المشغل بسرعة",
		coreItems: [
			"ما هي Cursivo",
			"لماذا تختلف عن أنظمة CRM العامة",
			"لماذا يبدو هذا التدفق موثوقا لفريق التأجير",
		],
		footerTitle: "Cursivo",
		footerCopy: "CRM ذكية متعددة اللغات لمشغلي تأجير السيارات.",
		footerMetaLabel: "اللغات",
		footerMetaValue: "الإنجليزية والروسية والعربية مع بنية مسارات مستقلة",
		finalCtaEyebrow: "الخطوة الأخيرة",
		finalCtaTitle: "اجعل الخطوة التالية بسيطة: راجع البناء العام أو ابدأ التواصل مباشرة.",
		finalCtaIntro:
			"إصدار v1 لا يفرض نموذجا يعتمد على backend. تبقى الخطوات الختامية خفيفة: مراجعة الكود العام، طلب pilot أو demo، أو فتح نقاش تقني مباشر.",
		finalCtaLinks: finalCtasByLocale.ar,
	},
};

export function getHomeContent(locale: Locale): HomeContent {
	return homeContentByLocale[locale];
}

export function getFeatureMatrix(locale: Locale) {
	return featureMatrixByLocale[locale];
}
