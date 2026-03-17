import { legalCtasByLocale } from "./ctas";
import type { FinalCtaLink } from "./ctas";
import type { Locale, LocaleLink, NavItem } from "./site";

type LegalPageKind = "privacy" | "terms";

interface LegalSection {
	title: string;
	paragraphs: string[];
}

export interface LegalPageContent {
	locale: Locale;
	kind: LegalPageKind;
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
	heroTitle: string;
	heroLead: string;
	heroSubnote: string;
	updatedLabel: string;
	updatedValue: string;
	dividerLabel: string;
	sections: LegalSection[];
	finalCtaEyebrow: string;
	finalCtaTitle: string;
	finalCtaIntro: string;
	finalCtaLinks: FinalCtaLink[];
}

const privacyPaths: Record<Locale, string> = {
	en: "/privacy/",
	ru: "/ru/privacy/",
	ar: "/ar/privacy/",
};

const termsPaths: Record<Locale, string> = {
	en: "/terms/",
	ru: "/ru/terms/",
	ar: "/ar/terms/",
};

const legalLocaleLinksByKind: Record<LegalPageKind, LocaleLink[]> = {
	privacy: [
		{ code: "en", label: "EN", href: privacyPaths.en },
		{ code: "ru", label: "RU", href: privacyPaths.ru },
		{ code: "ar", label: "AR", href: privacyPaths.ar },
	],
	terms: [
		{ code: "en", label: "EN", href: termsPaths.en },
		{ code: "ru", label: "RU", href: termsPaths.ru },
		{ code: "ar", label: "AR", href: termsPaths.ar },
	],
};

const legalNavByLocale: Record<Locale, Record<LegalPageKind, NavItem[]>> = {
	en: {
		privacy: [
			{ label: "Privacy", href: "#overview" },
			{ label: "Terms", href: "/terms/" },
			{ label: "Contact", href: "#contact" },
		],
		terms: [
			{ label: "Terms", href: "#overview" },
			{ label: "Privacy", href: "/privacy/" },
			{ label: "Contact", href: "#contact" },
		],
	},
	ru: {
		privacy: [
			{ label: "Приватность", href: "#overview" },
			{ label: "Условия", href: "/ru/terms/" },
			{ label: "Контакт", href: "#contact" },
		],
		terms: [
			{ label: "Условия", href: "#overview" },
			{ label: "Приватность", href: "/ru/privacy/" },
			{ label: "Контакт", href: "#contact" },
		],
	},
	ar: {
		privacy: [
			{ label: "الخصوصية", href: "#overview" },
			{ label: "الشروط", href: "/ar/terms/" },
			{ label: "تواصل", href: "#contact" },
		],
		terms: [
			{ label: "الشروط", href: "#overview" },
			{ label: "الخصوصية", href: "/ar/privacy/" },
			{ label: "تواصل", href: "#contact" },
		],
	},
};

const sharedFooterByLocale = {
	en: {
		brandMeta: "AI CRM for rental teams",
		footerTitle: "Cursivo",
		footerCopy: "Multilingual AI CRM for car rental operators.",
		footerMetaLabel: "Public site",
		footerMetaValue: "Legal pages for the current marketing surface",
		updatedLabel: "Updated",
		updatedValue: "March 16, 2026",
	},
	ru: {
		brandMeta: "AI CRM для команд проката",
		footerTitle: "Cursivo",
		footerCopy: "Мультиязычная AI CRM для операторов автопроката.",
		footerMetaLabel: "Публичный сайт",
		footerMetaValue: "Юридические страницы для текущей маркетинговой поверхности",
		updatedLabel: "Обновлено",
		updatedValue: "16 марта 2026",
	},
	ar: {
		brandMeta: "CRM ذكية لفرق التأجير",
		footerTitle: "Cursivo",
		footerCopy: "CRM ذكية متعددة اللغات لمشغلي تأجير السيارات.",
		footerMetaLabel: "الموقع العام",
		footerMetaValue: "صفحات قانونية لسطح الموقع التسويقي الحالي",
		updatedLabel: "آخر تحديث",
		updatedValue: "16 مارس 2026",
	},
} satisfies Record<
	Locale,
	{
		brandMeta: string;
		footerTitle: string;
		footerCopy: string;
		footerMetaLabel: string;
		footerMetaValue: string;
		updatedLabel: string;
		updatedValue: string;
	}
>;

const legalContentByLocale: Record<Locale, Record<LegalPageKind, LegalPageContent>> = {
	en: {
		privacy: {
			locale: "en",
			kind: "privacy",
			path: privacyPaths.en,
			alternatePaths: privacyPaths,
			title: "Cursivo Privacy | Public marketing site privacy notice",
			description:
				"Privacy notice for the current Cursivo public marketing site, including contact handling, analytics posture, and public-content data limits.",
			brandMeta: sharedFooterByLocale.en.brandMeta,
			navItems: legalNavByLocale.en.privacy,
			localeLinks: legalLocaleLinksByKind.privacy,
			footerTitle: sharedFooterByLocale.en.footerTitle,
			footerCopy: sharedFooterByLocale.en.footerCopy,
			footerMetaLabel: sharedFooterByLocale.en.footerMetaLabel,
			footerMetaValue: sharedFooterByLocale.en.footerMetaValue,
			heroEyebrow: "Privacy notice",
			heroTitle: "The public site should explain data handling simply, without pretending to be a product policy for flows that do not exist here.",
			heroLead:
				"This page covers the current public marketing surface only: what happens when someone browses the site, follows public links, or contacts Cursivo directly by email.",
			heroSubnote:
				"If the product later adds account access, forms, or analytics beyond the current surface, this notice should be reviewed and expanded before those flows go live.",
			updatedLabel: sharedFooterByLocale.en.updatedLabel,
			updatedValue: sharedFooterByLocale.en.updatedValue,
			dividerLabel: "Data handling",
			sections: [
				{
					title: "Scope of this notice",
					paragraphs: [
						"This notice applies to the public Cursivo marketing site and related public content pages such as the product page, blog, changelog, and legal routes.",
						"It does not describe private product workspaces, customer operations data, or future account flows that are not available on this site today.",
					],
				},
				{
					title: "What information may be received",
					paragraphs: [
						"The site itself is primarily static. Cursivo may receive information only when a visitor sends an email, follows a direct contact link, or shares information voluntarily in a conversation.",
						"That information may include a name, company, email address, and the contents of the message needed to continue the discussion.",
					],
				},
				{
					title: "How information is used",
					paragraphs: [
						"Contact details and message content are used to reply to inbound questions, discuss pilots or partnerships, and understand whether the product is relevant for the team making the request.",
						"Cursivo does not position this public site as a consumer advertising surface, and the intention is to keep outreach direct rather than turn messages into broad mailing activity.",
					],
				},
				{
					title: "Public hosting and third parties",
					paragraphs: [
						"Like most public sites, the hosting provider or delivery layer may process basic technical request data such as IP address, browser details, and log timestamps in order to serve pages and maintain reliability.",
						"If lightweight analytics is enabled later for this public site, it should remain privacy-conscious, limited to aggregate page-level measurement, and should not introduce invasive tracking as a condition of using the site.",
						"When visitors use external destinations such as email clients or public repository links, those services operate under their own terms and privacy practices.",
					],
				},
				{
					title: "Retention and updates",
					paragraphs: [
						"Direct contact records are kept only as long as they are useful for the conversation, relationship, or reasonable business follow-up around the request.",
						"This notice should be updated whenever the marketing surface changes materially, especially if forms, analytics, user accounts, or customer data workflows are added later.",
					],
				},
			],
			finalCtaEyebrow: "Next step",
			finalCtaTitle: "Read the product story or contact Cursivo directly if you need clarification.",
			finalCtaIntro:
				"The legal layer should stay simple and readable, then hand control back to the visitor without friction.",
			finalCtaLinks: legalCtasByLocale.en,
		},
		terms: {
			locale: "en",
			kind: "terms",
			path: termsPaths.en,
			alternatePaths: termsPaths,
			title: "Cursivo Terms | Public site terms of use",
			description:
				"Terms of use for the current Cursivo public marketing site and its public content routes.",
			brandMeta: sharedFooterByLocale.en.brandMeta,
			navItems: legalNavByLocale.en.terms,
			localeLinks: legalLocaleLinksByKind.terms,
			footerTitle: sharedFooterByLocale.en.footerTitle,
			footerCopy: sharedFooterByLocale.en.footerCopy,
			footerMetaLabel: sharedFooterByLocale.en.footerMetaLabel,
			footerMetaValue: sharedFooterByLocale.en.footerMetaValue,
			heroEyebrow: "Terms of use",
			heroTitle: "These terms cover the public marketing surface and public content, not private product agreements that may be negotiated separately.",
			heroLead:
				"The site exists to explain the product, publish public content, and provide direct ways to start a conversation. Using the site means accepting these basic public-site terms.",
			heroSubnote:
				"Commercial pilots, customer deployments, and product access should be governed by separate written agreements instead of being implied by the marketing surface.",
			updatedLabel: sharedFooterByLocale.en.updatedLabel,
			updatedValue: sharedFooterByLocale.en.updatedValue,
			dividerLabel: "Usage boundaries",
			sections: [
				{
					title: "Permitted use",
					paragraphs: [
						"You may browse the site, read public content, and use the published contact routes to ask questions about the product, partnerships, or pilots.",
						"You may not use the site in a way that interferes with its operation, attempts to gain unauthorized access, or misrepresents a relationship with Cursivo.",
					],
				},
				{
					title: "Public content and accuracy",
					paragraphs: [
						"The site is intended to describe the product direction and current public surface as clearly as possible, but it should not be treated as a guarantee that every future feature, deployment path, or roadmap item will ship exactly as described.",
						"Public materials may be updated, expanded, corrected, or removed as the marketing site and product story evolve.",
					],
				},
				{
					title: "Intellectual property",
					paragraphs: [
						"The Cursivo name, branding, site copy, and original public materials remain protected by applicable intellectual property rights unless a separate license says otherwise.",
						"References to public code or public content do not grant rights over private product logic, customer data, or non-public commercial materials.",
					],
				},
				{
					title: "Links, external services, and contact",
					paragraphs: [
						"The site may link to public repositories, email clients, or other external services. Cursivo is not responsible for how third-party services operate once a visitor leaves the site.",
						"If you contact Cursivo through a published email route, you are responsible for ensuring the information you send is appropriate to share through that channel.",
					],
				},
				{
					title: "No product commitment through the site alone",
					paragraphs: [
						"Nothing on this site creates a customer relationship, service-level commitment, hosting obligation, or production support promise by itself.",
						"Any real product access, pilot, or commercial engagement should be confirmed through direct communication and a separate agreement where needed.",
					],
				},
			],
			finalCtaEyebrow: "Next step",
			finalCtaTitle: "Return to the product surface or continue the conversation directly.",
			finalCtaIntro:
				"The terms page should clarify boundaries, then stay out of the way of a normal buyer conversation.",
			finalCtaLinks: legalCtasByLocale.en,
		},
	},
	ru: {
		privacy: {
			locale: "ru",
			kind: "privacy",
			path: privacyPaths.ru,
			alternatePaths: privacyPaths,
			title: "Cursivo Privacy | Уведомление о приватности публичного сайта",
			description:
				"Уведомление о приватности для текущего публичного маркетингового сайта Cursivo, включая прямой контакт и границы обработки данных на открытой поверхности.",
			brandMeta: sharedFooterByLocale.ru.brandMeta,
			navItems: legalNavByLocale.ru.privacy,
			localeLinks: legalLocaleLinksByKind.privacy,
			footerTitle: sharedFooterByLocale.ru.footerTitle,
			footerCopy: sharedFooterByLocale.ru.footerCopy,
			footerMetaLabel: sharedFooterByLocale.ru.footerMetaLabel,
			footerMetaValue: sharedFooterByLocale.ru.footerMetaValue,
			heroEyebrow: "Privacy notice",
			heroTitle: "Публичный сайт должен объяснять работу с данными просто, а не выдавать себя за продуктовую политику для несуществующих здесь потоков.",
			heroLead:
				"Эта страница описывает только текущую маркетинговую поверхность: что происходит, когда посетитель просматривает сайт, переходит по публичным ссылкам или пишет Cursivo напрямую по email.",
			heroSubnote:
				"Если позже появятся аккаунты, формы или расширенная аналитика, этот текст нужно пересмотреть и расширить до запуска таких сценариев.",
			updatedLabel: sharedFooterByLocale.ru.updatedLabel,
			updatedValue: sharedFooterByLocale.ru.updatedValue,
			dividerLabel: "Работа с данными",
			sections: [
				{
					title: "Границы этого уведомления",
					paragraphs: [
						"Это уведомление относится к публичному маркетинговому сайту Cursivo и связанным публичным страницам, включая продуктовую страницу, блог, changelog и legal-маршруты.",
						"Оно не описывает приватные продуктовые workspace, данные клиентских операций или будущие account-flow, которых на этом сайте сейчас нет.",
					],
				},
				{
					title: "Какая информация может поступать",
					paragraphs: [
						"Сам сайт в основном статический. Cursivo может получить информацию только когда посетитель пишет на email, использует прямую контактную ссылку или добровольно делится данными в разговоре.",
						"Такая информация может включать имя, компанию, email и содержание сообщения, которое нужно для продолжения обсуждения.",
					],
				},
				{
					title: "Как используется информация",
					paragraphs: [
						"Контактные данные и содержание сообщения используются для ответа на входящие вопросы, обсуждения pilot или партнерства и понимания того, подходит ли продукт команде, которая обратилась.",
						"Cursivo не позиционирует этот публичный сайт как массовую рекламную поверхность и старается держать коммуникацию прямой, а не превращать сообщения в широкую рассылку.",
					],
				},
				{
					title: "Публичный хостинг и третьи стороны",
					paragraphs: [
						"Как и у большинства публичных сайтов, хостинг-провайдер или delivery-слой могут обрабатывать базовые технические данные запроса, включая IP-адрес, данные браузера и метки времени, чтобы отдавать страницы и поддерживать надежность.",
						"Если позже для этого публичного сайта будет включена легкая аналитика, она должна оставаться privacy-conscious, ограничиваться агрегированным page-level измерением и не превращаться в навязчивый трекинг как условие использования сайта.",
						"Когда посетитель уходит во внешние сервисы, например в email-клиент или публичный репозиторий, такие сервисы работают по своим собственным условиям и правилам приватности.",
					],
				},
				{
					title: "Срок хранения и обновления",
					paragraphs: [
						"Данные прямых контактов хранятся только столько, сколько это разумно нужно для разговора, отношений или делового follow-up по запросу.",
						"Этот текст должен обновляться при существенных изменениях маркетинговой поверхности, особенно если позже появятся формы, аналитика, аккаунты или реальные customer-data workflow.",
					],
				},
			],
			finalCtaEyebrow: "Следующий шаг",
			finalCtaTitle: "Перейдите к продуктовой странице или напишите напрямую, если нужен комментарий.",
			finalCtaIntro:
				"Юридический слой должен оставаться простым и читаемым, а затем возвращать контроль посетителю без лишнего трения.",
			finalCtaLinks: legalCtasByLocale.ru,
		},
		terms: {
			locale: "ru",
			kind: "terms",
			path: termsPaths.ru,
			alternatePaths: termsPaths,
			title: "Cursivo Terms | Условия использования публичного сайта",
			description:
				"Условия использования для текущего публичного маркетингового сайта Cursivo и его открытых контентных маршрутов.",
			brandMeta: sharedFooterByLocale.ru.brandMeta,
			navItems: legalNavByLocale.ru.terms,
			localeLinks: legalLocaleLinksByKind.terms,
			footerTitle: sharedFooterByLocale.ru.footerTitle,
			footerCopy: sharedFooterByLocale.ru.footerCopy,
			footerMetaLabel: sharedFooterByLocale.ru.footerMetaLabel,
			footerMetaValue: sharedFooterByLocale.ru.footerMetaValue,
			heroEyebrow: "Terms of use",
			heroTitle: "Эти условия относятся к публичной маркетинговой поверхности и открытому контенту, а не к приватным продуктовым соглашениям, которые могут оформляться отдельно.",
			heroLead:
				"Сайт нужен для объяснения продукта, публикации открытого контента и прямого старта разговора. Использование сайта означает принятие этих базовых условий для публичной поверхности.",
			heroSubnote:
				"Коммерческие pilot, customer deployment и доступ к продукту должны оформляться отдельными письменными соглашениями, а не подразумеваться через маркетинговый сайт.",
			updatedLabel: sharedFooterByLocale.ru.updatedLabel,
			updatedValue: sharedFooterByLocale.ru.updatedValue,
			dividerLabel: "Границы использования",
			sections: [
				{
					title: "Допустимое использование",
					paragraphs: [
						"Вы можете просматривать сайт, читать публичные материалы и использовать опубликованные контактные маршруты для вопросов о продукте, партнерстве или pilot.",
						"Нельзя использовать сайт так, чтобы мешать его работе, пытаться получить несанкционированный доступ или вводить в заблуждение относительно отношений с Cursivo.",
					],
				},
				{
					title: "Публичный контент и точность",
					paragraphs: [
						"Сайт должен максимально честно описывать продукт и текущую публичную поверхность, но его нельзя считать гарантией того, что каждая будущая функция, деплойный путь или roadmap-элемент будет выпущен ровно в указанном виде.",
						"Публичные материалы могут обновляться, расширяться, исправляться или удаляться по мере развития маркетингового сайта и продуктовой истории.",
					],
				},
				{
					title: "Интеллектуальная собственность",
					paragraphs: [
						"Название Cursivo, бренд, тексты сайта и оригинальные публичные материалы защищены применимыми правами интеллектуальной собственности, если иное не указано отдельной лицензией.",
						"Ссылки на публичный код или открытый контент не дают прав на приватную продуктовую логику, клиентские данные или непубличные коммерческие материалы.",
					],
				},
				{
					title: "Ссылки, внешние сервисы и контакт",
					paragraphs: [
						"Сайт может вести на публичные репозитории, email-клиенты и другие внешние сервисы. Cursivo не отвечает за то, как такие сервисы работают после ухода посетителя с сайта.",
						"Если вы обращаетесь к Cursivo через опубликованный email-канал, вы сами отвечаете за то, чтобы отправляемая информация была уместна для такого способа связи.",
					],
				},
				{
					title: "Сам сайт не создает продуктовых обязательств",
					paragraphs: [
						"Ничто на этом сайте само по себе не создает customer relationship, SLA-обязательства, hosting-обязательства или promises по production-support.",
						"Любой реальный доступ к продукту, pilot или коммерческое взаимодействие должны подтверждаться через прямую коммуникацию и при необходимости отдельное соглашение.",
					],
				},
			],
			finalCtaEyebrow: "Следующий шаг",
			finalCtaTitle: "Вернитесь к продуктовой поверхности или продолжите разговор напрямую.",
			finalCtaIntro:
				"Страница terms должна прояснять границы и не мешать нормальному разговору с потенциальным buyer.",
			finalCtaLinks: legalCtasByLocale.ru,
		},
	},
	ar: {
		privacy: {
			locale: "ar",
			kind: "privacy",
			path: privacyPaths.ar,
			alternatePaths: privacyPaths,
			title: "Cursivo Privacy | إشعار خصوصية الموقع العام",
			description:
				"إشعار الخصوصية الخاص بالموقع التسويقي العام الحالي لـ Cursivo بما يشمل التواصل المباشر وحدود معالجة البيانات على السطح العام.",
			brandMeta: sharedFooterByLocale.ar.brandMeta,
			navItems: legalNavByLocale.ar.privacy,
			localeLinks: legalLocaleLinksByKind.privacy,
			footerTitle: sharedFooterByLocale.ar.footerTitle,
			footerCopy: sharedFooterByLocale.ar.footerCopy,
			footerMetaLabel: sharedFooterByLocale.ar.footerMetaLabel,
			footerMetaValue: sharedFooterByLocale.ar.footerMetaValue,
			heroEyebrow: "إشعار الخصوصية",
			heroTitle: "يجب أن يشرح الموقع العام طريقة التعامل مع البيانات ببساطة، من دون الادعاء بأنه سياسة منتج لعمليات غير موجودة هنا.",
			heroLead:
				"تغطي هذه الصفحة السطح التسويقي الحالي فقط: ما الذي يحدث عندما يتصفح الزائر الموقع أو يتبع الروابط العامة أو يتواصل مع Cursivo مباشرة عبر البريد الإلكتروني.",
			heroSubnote:
				"إذا تمت إضافة حسابات أو نماذج أو تحليلات أوسع لاحقا، فيجب مراجعة هذا النص وتوسيعه قبل إطلاق تلك التدفقات.",
			updatedLabel: sharedFooterByLocale.ar.updatedLabel,
			updatedValue: sharedFooterByLocale.ar.updatedValue,
			dividerLabel: "التعامل مع البيانات",
			sections: [
				{
					title: "نطاق هذا الإشعار",
					paragraphs: [
						"ينطبق هذا الإشعار على موقع Cursivo التسويقي العام وعلى صفحات المحتوى العامة المرتبطة به مثل صفحة المنتج والمدونة وسجل التحديثات والمسارات القانونية.",
						"ولا يصف مساحات العمل الخاصة بالمنتج أو بيانات عمليات العملاء أو تدفقات الحسابات المستقبلية غير المتاحة في هذا الموقع حاليا.",
					],
				},
				{
					title: "ما المعلومات التي قد يتم استلامها",
					paragraphs: [
						"الموقع نفسه ثابت في الأساس. وقد تتلقى Cursivo معلومات فقط عندما يرسل الزائر رسالة بريد إلكتروني أو يستخدم رابط تواصل مباشر أو يشارك معلومات طوعا في محادثة.",
						"وقد تتضمن هذه المعلومات الاسم واسم الشركة وعنوان البريد الإلكتروني ومحتوى الرسالة اللازم لمتابعة النقاش.",
					],
				},
				{
					title: "كيف تستخدم المعلومات",
					paragraphs: [
						"تستخدم بيانات التواصل ومحتوى الرسالة للرد على الأسئلة الواردة ومناقشة التجارب أو الشراكات وفهم ما إذا كان المنتج مناسبا للفريق الذي أرسل الطلب.",
						"ولا يتم تقديم هذا الموقع العام كسطح إعلاني استهلاكي واسع، والهدف هو إبقاء التواصل مباشرا بدلا من تحويل الرسائل إلى نشاط بريدي واسع.",
					],
				},
				{
					title: "الاستضافة العامة والأطراف الثالثة",
					paragraphs: [
						"مثل معظم المواقع العامة، قد يقوم مزود الاستضافة أو طبقة التسليم بمعالجة بيانات طلب تقنية أساسية مثل عنوان IP وتفاصيل المتصفح والطوابع الزمنية من أجل تقديم الصفحات والحفاظ على الاعتمادية.",
						"وإذا تم تفعيل تحليلات خفيفة لاحقا لهذا الموقع العام فيجب أن تبقى موجهة للخصوصية ومحصورة في قياس مجمع على مستوى الصفحات وألا تتحول إلى تتبع متطفل كشرط لاستخدام الموقع.",
						"وعندما يستخدم الزوار وجهات خارجية مثل عملاء البريد أو الروابط العامة إلى المستودعات، فإن تلك الخدمات تعمل وفقا لشروطها وممارسات الخصوصية الخاصة بها.",
					],
				},
				{
					title: "مدة الاحتفاظ والتحديثات",
					paragraphs: [
						"يتم الاحتفاظ بسجلات التواصل المباشر فقط طالما كانت مفيدة للمحادثة أو للعلاقة أو للمتابعة التجارية المعقولة المرتبطة بالطلب.",
						"ويجب تحديث هذا الإشعار كلما تغير السطح التسويقي بشكل جوهري، خاصة إذا تمت إضافة نماذج أو تحليلات أو حسابات أو تدفقات بيانات عملاء لاحقا.",
					],
				},
			],
			finalCtaEyebrow: "الخطوة التالية",
			finalCtaTitle: "انتقل إلى صفحة المنتج أو تواصل مباشرة إذا كنت تحتاج إلى توضيح.",
			finalCtaIntro:
				"يجب أن تبقى الطبقة القانونية بسيطة وقابلة للقراءة ثم تعيد السيطرة إلى الزائر من دون احتكاك.",
			finalCtaLinks: legalCtasByLocale.ar,
		},
		terms: {
			locale: "ar",
			kind: "terms",
			path: termsPaths.ar,
			alternatePaths: termsPaths,
			title: "Cursivo Terms | شروط استخدام الموقع العام",
			description:
				"شروط الاستخدام الخاصة بالموقع التسويقي العام الحالي لـ Cursivo ومسارات المحتوى العامة التابعة له.",
			brandMeta: sharedFooterByLocale.ar.brandMeta,
			navItems: legalNavByLocale.ar.terms,
			localeLinks: legalLocaleLinksByKind.terms,
			footerTitle: sharedFooterByLocale.ar.footerTitle,
			footerCopy: sharedFooterByLocale.ar.footerCopy,
			footerMetaLabel: sharedFooterByLocale.ar.footerMetaLabel,
			footerMetaValue: sharedFooterByLocale.ar.footerMetaValue,
			heroEyebrow: "شروط الاستخدام",
			heroTitle: "تغطي هذه الشروط السطح التسويقي العام والمحتوى المنشور، لا الاتفاقيات الخاصة بالمنتج التي قد يتم التفاوض عليها بشكل منفصل.",
			heroLead:
				"يوجد الموقع لشرح المنتج ونشر المحتوى العام وتوفير طرق مباشرة لبدء الحوار. ويعني استخدام الموقع قبول هذه الشروط الأساسية الخاصة بالسطح العام.",
			heroSubnote:
				"يجب أن تخضع التجارب التجارية وعمليات النشر للعملاء والوصول إلى المنتج لاتفاقيات مكتوبة منفصلة بدلا من افتراضها من خلال الموقع التسويقي.",
			updatedLabel: sharedFooterByLocale.ar.updatedLabel,
			updatedValue: sharedFooterByLocale.ar.updatedValue,
			dividerLabel: "حدود الاستخدام",
			sections: [
				{
					title: "الاستخدام المسموح",
					paragraphs: [
						"يمكنك تصفح الموقع وقراءة المحتوى العام واستخدام وسائل التواصل المنشورة لطرح أسئلة عن المنتج أو الشراكات أو التجارب.",
						"ولا يجوز استخدام الموقع بطريقة تعطل تشغيله أو تحاول الوصول غير المصرح به أو تقدم علاقة غير صحيحة مع Cursivo.",
					],
				},
				{
					title: "المحتوى العام والدقة",
					paragraphs: [
						"يهدف الموقع إلى وصف اتجاه المنتج والسطح العام الحالي بأكبر قدر ممكن من الوضوح، لكنه لا يجب أن يعامل كضمان بأن كل ميزة مستقبلية أو مسار نشر أو بند من خارطة الطريق سيصدر تماما كما هو موصوف.",
						"وقد يتم تحديث المواد العامة أو توسيعها أو تصحيحها أو إزالتها مع تطور الموقع التسويقي وقصة المنتج.",
					],
				},
				{
					title: "الملكية الفكرية",
					paragraphs: [
						"يبقى اسم Cursivo والعلامة التجارية ونصوص الموقع والمواد العامة الأصلية محمية بحقوق الملكية الفكرية المعمول بها ما لم تنص رخصة منفصلة على خلاف ذلك.",
						"ولا تمنح الإشارات إلى الكود العام أو المحتوى العام حقوقا على منطق المنتج الخاص أو بيانات العملاء أو المواد التجارية غير العامة.",
					],
				},
				{
					title: "الروابط والخدمات الخارجية والتواصل",
					paragraphs: [
						"قد يتضمن الموقع روابط إلى مستودعات عامة أو عملاء بريد أو خدمات خارجية أخرى. ولا تتحمل Cursivo مسؤولية كيفية عمل تلك الخدمات بعد مغادرة الزائر للموقع.",
						"إذا تواصلت مع Cursivo عبر مسار بريد منشور فأنت مسؤول عن التأكد من أن المعلومات التي ترسلها مناسبة لتلك القناة.",
					],
				},
				{
					title: "لا التزام بالمنتج من خلال الموقع وحده",
					paragraphs: [
						"لا ينشئ أي شيء في هذا الموقع وحده علاقة عميل أو التزام مستوى خدمة أو التزام استضافة أو وعد دعم إنتاجي بمفرده.",
						"ويجب تأكيد أي وصول فعلي إلى المنتج أو تجربة أو تعامل تجاري من خلال تواصل مباشر واتفاق منفصل عند الحاجة.",
					],
				},
			],
			finalCtaEyebrow: "الخطوة التالية",
			finalCtaTitle: "عد إلى سطح المنتج أو واصل النقاش مباشرة.",
			finalCtaIntro:
				"يجب أن توضح صفحة الشروط الحدود ثم تبتعد عن طريق محادثة المشتري الطبيعية.",
			finalCtaLinks: legalCtasByLocale.ar,
		},
	},
};

export function getLegalContent(locale: Locale, kind: LegalPageKind) {
	return legalContentByLocale[locale][kind];
}
