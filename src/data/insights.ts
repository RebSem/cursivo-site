import { getCollection } from "astro:content";
import type { Locale } from "./site";

export interface InsightPreviewItem {
	category: string;
	title: string;
	description: string;
	statusLabel: string;
	meta: string;
	href?: string;
}

interface InsightSeed extends InsightPreviewItem {
	key: string;
}

const statusByLocale: Record<Locale, { published: string; queued: string }> = {
	en: { published: "Published", queued: "Editorial queue" },
	ru: { published: "Опубликовано", queued: "Редакционный план" },
	ar: { published: "منشور", queued: "خطة تحريرية" },
};

const fallbackByLocale: Record<Locale, InsightSeed[]> = {
	en: [
		{
			key: "rental-chat-leads-drop",
			category: "Operations",
			title: "Why rental chat leads drop before a quote is ready",
			description:
				"An operations-focused look at how unstructured chat demand disappears when no one owns qualification before quoting starts.",
			statusLabel: "Editorial queue",
			meta: "Lost chat leads",
		},
		{
			key: "what-ai-should-not-automate",
			category: "AI boundaries",
			title: "What AI should not automate in booking workflows",
			description:
				"A practical boundary-setting piece on approvals, exceptions, negotiation, and why some decisions should stay human-owned.",
			statusLabel: "Editorial queue",
			meta: "Approval and exception handling",
		},
		{
			key: "multilingual-ops-impact",
			category: "Market readiness",
			title: "How multilingual operations change follow-up speed across branches",
			description:
				"A field-level view of why English, Russian, and Arabic support changes team responsiveness in branch-aware rental operations.",
			statusLabel: "Editorial queue",
			meta: "EN / RU / AR operating impact",
		},
	],
	ru: [
		{
			key: "rental-chat-leads-drop",
			category: "Операции",
			title: "Почему лиды из чатов теряются еще до подготовки оффера",
			description:
				"Операционный разбор того, как спрос из переписок исчезает, если до оффера никто не берет на себя квалификацию запроса.",
			statusLabel: "Редакционный план",
			meta: "Потеря лидов в чатах",
		},
		{
			key: "what-ai-should-not-automate",
			category: "Границы AI",
			title: "Что AI не должен автоматизировать в процессе бронирования",
			description:
				"Практический материал о согласованиях, исключениях и переговорах, которые не стоит убирать из зоны ответственности менеджера.",
			statusLabel: "Редакционный план",
			meta: "Согласования и исключения",
		},
		{
			key: "multilingual-ops-impact",
			category: "Готовность к рынку",
			title: "Как мультиязычный поток меняет скорость follow-up по филиалам",
			description:
				"Разбор того, почему английский, русский и арабский реально влияют на скорость ответа и handoff в филиальной аренде.",
			statusLabel: "Редакционный план",
			meta: "EN / RU / AR в операциях",
		},
	],
	ar: [
		{
			key: "rental-chat-leads-drop",
			category: "العمليات",
			title: "لماذا تضيع طلبات الدردشة قبل أن يصبح العرض السعري جاهزا",
			description:
				"قراءة تشغيلية لكيفية ضياع الطلبات الواردة من المحادثات عندما لا يملك أحد خطوة التأهيل قبل بدء إعداد العرض.",
			statusLabel: "خطة تحريرية",
			meta: "فقدان العملاء في الدردشة",
		},
		{
			key: "what-ai-should-not-automate",
			category: "حدود الذكاء الاصطناعي",
			title: "ما الذي لا يجب أن يؤتمته الذكاء الاصطناعي في سير الحجز",
			description:
				"مادة عملية عن الموافقات والحالات الاستثنائية والتفاوض ولماذا يجب أن تبقى بعض القرارات بيد المدير.",
			statusLabel: "خطة تحريرية",
			meta: "الموافقات والحالات الاستثنائية",
		},
		{
			key: "multilingual-ops-impact",
			category: "جاهزية السوق",
			title: "كيف يغير التشغيل متعدد اللغات سرعة المتابعة بين الفروع",
			description:
				"عرض ميداني لكيفية تأثير الإنجليزية والروسية والعربية على سرعة الاستجابة وتسليم الحالات في التأجير متعدد الفروع.",
			statusLabel: "خطة تحريرية",
			meta: "أثر EN / RU / AR",
		},
	],
};

function formatDate(date: Date, locale: Locale) {
	const localeName = locale === "ar" ? "ar" : locale === "ru" ? "ru-RU" : "en-US";
	return new Intl.DateTimeFormat(localeName, {
		year: "numeric",
		month: "short",
		day: "numeric",
	}).format(date);
}

export async function getHomepageInsights(locale: Locale): Promise<InsightPreviewItem[]> {
	const publishedEntries = await getCollection(
		"blog",
		({ data }) => data.locale === locale && data.draft === false,
	);

	const published = publishedEntries
		.sort((left, right) => right.data.publishedAt.getTime() - left.data.publishedAt.getTime())
		.map((entry) => ({
			key: entry.data.translationKey,
			category: entry.data.category,
			title: entry.data.title,
			description: entry.data.description,
			statusLabel: statusByLocale[locale].published,
			meta: formatDate(entry.data.publishedAt, locale),
		}));

	const seenKeys = new Set(published.map((item) => item.key));
	const fallback = fallbackByLocale[locale].filter((item) => !seenKeys.has(item.key));

	return [...published, ...fallback].slice(0, 3).map(({ key: _key, ...item }) => item);
}
