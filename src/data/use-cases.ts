import type { FinalCtaLink } from "./ctas";
import { finalCtasByLocale } from "./ctas";
import type { Locale, LocaleLink, NavItem } from "./site";

export interface UseCaseIndexCopy {
	path: string;
	alternatePaths: Record<Locale, string>;
	title: string;
	description: string;
	eyebrow: string;
	heroTitle: string;
	intro: string;
	emptyLabel: string;
	finalCtaEyebrow: string;
	finalCtaTitle: string;
	finalCtaIntro: string;
	finalCtaLinks: FinalCtaLink[];
}

export interface UseCaseEntryCopy {
	backLabel: string;
	translationLabel: string;
	industryLabel: string;
	audienceLabel: string;
}

export const useCaseIndexPaths: Record<Locale, string> = {
	en: "/use-cases/",
	ru: "/ru/use-cases/",
	ar: "/ar/use-cases/",
};

export function getUseCaseEntryPath(locale: Locale, translationKey: string) {
	return `${useCaseIndexPaths[locale]}${translationKey}/`;
}

export function getUseCaseLocaleLinks(
	overridePaths?: Partial<Record<Locale, string>>,
): LocaleLink[] {
	return (["en", "ru", "ar"] as Locale[]).map((locale) => ({
		code: locale,
		label: locale.toUpperCase(),
		href: overridePaths?.[locale] ?? useCaseIndexPaths[locale],
	}));
}

export function buildUseCaseLocaleLinks(
	overridePaths?: Partial<Record<Locale, string>>,
): LocaleLink[] {
	return getUseCaseLocaleLinks(overridePaths);
}

const useCaseNavByLocale: Record<Locale, NavItem[]> = {
	en: [
		{ label: "Product", href: "/product/" },
		{ label: "Use cases", href: "/use-cases/" },
		{ label: "Blog", href: "/blog/" },
		{ label: "Contact", href: "/#contact" },
	],
	ru: [
		{ label: "Продукт", href: "/ru/product/" },
		{ label: "Сценарии", href: "/ru/use-cases/" },
		{ label: "Блог", href: "/ru/blog/" },
		{ label: "Контакт", href: "/ru/#contact" },
	],
	ar: [
		{ label: "المنتج", href: "/ar/product/" },
		{ label: "الحالات", href: "/ar/use-cases/" },
		{ label: "المدونة", href: "/ar/blog/" },
		{ label: "تواصل", href: "/ar/#contact" },
	],
};

export function getUseCaseNav(locale: Locale) {
	return useCaseNavByLocale[locale];
}

export const useCaseIndexCopyByLocale: Record<Locale, UseCaseIndexCopy> = {
	en: {
		path: useCaseIndexPaths.en,
		alternatePaths: useCaseIndexPaths,
		title: "Cursivo Use Cases | Rental workflows by operating context",
		description:
			"Intent-specific use-case pages for rental teams evaluating Cursivo across multilingual intake, Telegram-first demand, and multi-branch operating workflows.",
		eyebrow: "Use-case library",
		heroTitle: "Operational landing pages for buyers who want the product framed around their actual workflow.",
		intro:
			"These pages focus on specific rental operating contexts rather than repeating the generic homepage story. Each one stays grounded in the live workflow: inbound demand, qualification, branch context, and manager-ready handoff.",
		emptyLabel: "No use cases published yet for this locale.",
		finalCtaEyebrow: "Next step",
		finalCtaTitle: "Move from a use case into the product page or continue the conversation directly.",
		finalCtaIntro:
			"Intent-specific pages should narrow the fit clearly, then make the next action simple.",
		finalCtaLinks: finalCtasByLocale.en,
	},
	ru: {
		path: useCaseIndexPaths.ru,
		alternatePaths: useCaseIndexPaths,
		title: "Cursivo Use Cases | Сценарии для команд проката по операционному контексту",
		description:
			"Intent-specific страницы для команд проката, которые оценивают Cursivo в сценариях мультиязычного intake, Telegram-first спроса и multi-branch workflow.",
		eyebrow: "Библиотека сценариев",
		heroTitle: "Операционные landing pages для buyers, которым нужно видеть продукт через их реальный workflow.",
		intro:
			"Эти страницы описывают конкретные операционные контексты проката, а не повторяют общий рассказ главной. Каждая из них держится за живой workflow: входящий спрос, квалификация, branch-context и handoff для менеджера.",
		emptyLabel: "Для этой локали пока нет опубликованных сценариев.",
		finalCtaEyebrow: "Следующий шаг",
		finalCtaTitle: "Перейдите от сценария к странице продукта или продолжите разговор напрямую.",
		finalCtaIntro:
			"Такие страницы должны сужать fit честно, а следующий шаг оставлять простым.",
		finalCtaLinks: finalCtasByLocale.ru,
	},
	ar: {
		path: useCaseIndexPaths.ar,
		alternatePaths: useCaseIndexPaths,
		title: "Cursivo Use Cases | صفحات حالات تشغيلية لفرق التأجير",
		description:
			"صفحات حالات موجهة حسب النية لفرق التأجير التي تقيّم Cursivo عبر التشغيل متعدد اللغات والطلب القادم من Telegram وسير العمل متعدد الفروع.",
		eyebrow: "مكتبة الحالات",
		heroTitle: "صفحات تشغيلية للمشترين الذين يريدون رؤية المنتج ضمن سير العمل الحقيقي لديهم.",
		intro:
			"تركز هذه الصفحات على سياقات تشغيلية محددة في التأجير بدلا من تكرار قصة الصفحة الرئيسية. كل صفحة تبقى مرتبطة بسير العمل الفعلي: الطلб الوارد والتأهيل وسياق الفرع وhandoff الجاهز للمدير.",
		emptyLabel: "لا توجد حالات منشورة لهذه اللغة بعد.",
		finalCtaEyebrow: "الخطوة التالية",
		finalCtaTitle: "انتقل من الحالة إلى صفحة المنتج أو واصل التواصل مباشرة.",
		finalCtaIntro:
			"يجب أن تضيق صفحات الحالات نطاق الملاءمة بوضوح ثم تجعل الخطوة التالية بسيطة.",
		finalCtaLinks: finalCtasByLocale.ar,
	},
};

export const useCaseEntryCopyByLocale: Record<Locale, UseCaseEntryCopy> = {
	en: {
		backLabel: "Back to use cases",
		translationLabel: "Available in",
		industryLabel: "Industry",
		audienceLabel: "Best fit",
	},
	ru: {
		backLabel: "Назад к сценариям",
		translationLabel: "Доступно на",
		industryLabel: "Индустрия",
		audienceLabel: "Кому подходит",
	},
	ar: {
		backLabel: "العودة إلى الحالات",
		translationLabel: "متاح أيضا",
		industryLabel: "القطاع",
		audienceLabel: "أفضل ملاءمة",
	},
};
