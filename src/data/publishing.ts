import type { FinalCtaLink } from "./ctas";
import { finalCtasByLocale } from "./ctas";
import type { Locale, LocaleLink, NavItem } from "./site";

export type PublishCollection = "blog" | "changelog";

export interface PublishIndexCopy {
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

export interface PublishEntryCopy {
	backLabel: string;
	translationLabel: string;
	metaPublishedLabel: string;
	metaCategoryLabel: string;
	metaVersionLabel: string;
}

const sharedNavByLocale: Record<Locale, NavItem[]> = {
	en: [
		{ label: "Home", href: "/" },
		{ label: "Product", href: "/product/" },
		{ label: "Blog", href: "/blog/" },
	],
	ru: [
		{ label: "Главная", href: "/ru/" },
		{ label: "Продукт", href: "/ru/product/" },
		{ label: "Блог", href: "/ru/blog/" },
	],
	ar: [
		{ label: "الرئيسية", href: "/ar/" },
		{ label: "المنتج", href: "/ar/product/" },
		{ label: "المدونة", href: "/ar/blog/" },
	],
};

export const blogIndexPaths: Record<Locale, string> = {
	en: "/blog/",
	ru: "/ru/blog/",
	ar: "/ar/blog/",
};

export const changelogIndexPaths: Record<Locale, string> = {
	en: "/changelog/",
	ru: "/ru/changelog/",
	ar: "/ar/changelog/",
};

export function getCollectionIndexPath(collection: PublishCollection, locale: Locale) {
	return (collection === "blog" ? blogIndexPaths : changelogIndexPaths)[locale];
}

export function getCollectionEntryPath(
	collection: PublishCollection,
	locale: Locale,
	translationKey: string,
) {
	return `${getCollectionIndexPath(collection, locale)}${translationKey}/`;
}

export function getCollectionLocaleLinks(
	collection: PublishCollection,
	overridePaths?: Partial<Record<Locale, string>>,
): LocaleLink[] {
	// Only return English for now
	return (["en"] as Locale[]).map((locale) => ({
		code: locale,
		label: locale.toUpperCase(),
		href: overridePaths?.[locale] ?? getCollectionIndexPath(collection, locale),
	}));
}

export function getPublishingNav(locale: Locale) {
	return sharedNavByLocale[locale];
}

export const publishIndexCopyByLocale: Record<
	Locale,
	Record<PublishCollection, PublishIndexCopy>
> = {
	en: {
		blog: {
			path: blogIndexPaths.en,
			alternatePaths: blogIndexPaths,
			title: "Cursivo Blog | Operations-first insights for rental teams",
			description:
				"Editorial insights about rental chat workflows, AI boundaries, multilingual operations, and the practical realities of moving demand into a usable workflow.",
			eyebrow: "Editorial journal",
			heroTitle: "Operational writing for buyers who want more than a landing-page promise.",
			intro:
				"The blog is where the product story expands into practical questions: how chat leads are lost, what AI should not automate, and why multilingual operations change real team performance.",
			emptyLabel: "No posts published yet for this locale.",
			finalCtaEyebrow: "Next step",
			finalCtaTitle: "Read the product page or continue the conversation directly.",
			finalCtaIntro:
				"The editorial layer supports trust and SEO, but the next step should still stay simple and direct.",
			finalCtaLinks: finalCtasByLocale.en,
		},
		changelog: {
			path: changelogIndexPaths.en,
			alternatePaths: changelogIndexPaths,
			title: "Cursivo Changelog | Public site release notes",
			description:
				"Visible public-site updates for Cursivo, including structure, content, and release-direction changes that matter to buyers and partners.",
			eyebrow: "Release notes",
			heroTitle: "A public change trail for the marketing surface and release direction.",
			intro:
				"The changelog makes the public site easier to evaluate over time by showing how the surface evolves instead of pretending it arrived complete on day one.",
			emptyLabel: "No changelog entries published yet for this locale.",
			finalCtaEyebrow: "Technical next step",
			finalCtaTitle: "Inspect the public build or move back to the product story.",
			finalCtaIntro:
				"This route supports technical buyers and partners who want visible release discipline around the public surface.",
			finalCtaLinks: finalCtasByLocale.en,
		},
	},
	ru: {
		blog: {
			path: blogIndexPaths.ru,
			alternatePaths: blogIndexPaths,
			title: "Cursivo Blog | Операционные материалы для команд проката",
			description:
				"Редакционные материалы о чатовом спросе, границах AI, мультиязычном операционном потоке и реальной организации handoff для аренды.",
			eyebrow: "Редакционный журнал",
			heroTitle: "Операционные тексты для покупателей, которым мало одной лендинговой формулы.",
			intro:
				"Блог нужен там, где продуктовая история переходит в практические вопросы: где теряются лиды в чатах, что AI не должен автоматизировать и почему мультиязычность влияет на работу команды.",
			emptyLabel: "Для этой локали еще нет опубликованных материалов.",
			finalCtaEyebrow: "Следующий шаг",
			finalCtaTitle: "Перейдите к странице продукта или продолжите разговор напрямую.",
			finalCtaIntro:
				"Редакционный слой усиливает доверие и SEO, но следующий шаг все равно должен оставаться простым и прямым.",
			finalCtaLinks: finalCtasByLocale.ru,
		},
		changelog: {
			path: changelogIndexPaths.ru,
			alternatePaths: changelogIndexPaths,
			title: "Cursivo Changelog | Публичные release notes сайта",
			description:
				"Видимые обновления публичного сайта Cursivo: изменения структуры, контента и релизного направления, которые важны для buyers и партнеров.",
			eyebrow: "Release notes",
			heroTitle: "Публичный след изменений для маркетинговой поверхности и релизного направления.",
			intro:
				"Changelog нужен, чтобы публичный сайт можно было оценивать по мере развития, а не делать вид, что он появился сразу в завершенном виде.",
			emptyLabel: "Для этой локали еще нет опубликованных release notes.",
			finalCtaEyebrow: "Технический следующий шаг",
			finalCtaTitle: "Посмотрите публичную сборку или вернитесь к продуктовой логике.",
			finalCtaIntro:
				"Этот маршрут поддерживает технических buyers и партнеров, которым нужна видимая дисциплина релизов на публичной поверхности.",
			finalCtaLinks: finalCtasByLocale.ru,
		},
	},
	ar: {
		blog: {
			path: blogIndexPaths.ar,
			alternatePaths: blogIndexPaths,
			title: "Cursivo Blog | مقالات تحريرية لفرق التأجير",
			description:
				"مقالات تحريرية عن طلبات الدردشة وحدود الذكاء الاصطناعي والتشغيل متعدد اللغات والواقع العملي لتحويل الطلب إلى سير عمل قابل للتنفيذ.",
			eyebrow: "مجلة تحريرية",
			heroTitle: "كتابة تشغيلية للمشترين الذين يحتاجون أكثر من وعد في الصفحة الرئيسية.",
			intro:
				"المدونة هي المكان الذي تتوسع فيه قصة المنتج إلى أسئلة عملية: كيف تضيع طلبات الدردشة، وما الذي لا يجب أن يؤتمته الذكاء الاصطناعي، ولماذا تغير العمليات متعددة اللغات أداء الفريق فعليا.",
			emptyLabel: "لا توجد مقالات منشورة لهذه اللغة بعد.",
			finalCtaEyebrow: "الخطوة التالية",
			finalCtaTitle: "انتقل إلى صفحة المنتج أو واصل التواصل مباشرة.",
			finalCtaIntro:
				"تدعم الطبقة التحريرية الثقة وSEO، لكن الخطوة التالية يجب أن تبقى بسيطة ومباشرة.",
			finalCtaLinks: finalCtasByLocale.ar,
		},
		changelog: {
			path: changelogIndexPaths.ar,
			alternatePaths: changelogIndexPaths,
			title: "Cursivo Changelog | ملاحظات إصدار الموقع العام",
			description:
				"تحديثات مرئية للموقع العام لـ Cursivo تشمل البنية والمحتوى واتجاه الإطلاق بما يهم المشترين والشركاء.",
			eyebrow: "ملاحظات الإصدارات",
			heroTitle: "أثر عام للتغييرات في السطح التسويقي واتجاه الإطلاق.",
			intro:
				"يساعد سجل التغييرات على تقييم الموقع العام مع تطوره بدلا من الادعاء بأنه وصل كاملا من اليوم الأول.",
			emptyLabel: "لا توجد ملاحظات إصدار منشورة لهذه اللغة بعد.",
			finalCtaEyebrow: "الخطوة التقنية التالية",
			finalCtaTitle: "راجع البناء العام أو عد إلى منطق المنتج.",
			finalCtaIntro:
				"هذا المسار يفيد المشترين التقنيين والشركاء الذين يريدون رؤية انضباط الإطلاق على السطح العام.",
			finalCtaLinks: finalCtasByLocale.ar,
		},
	},
};

export const publishEntryCopyByLocale: Record<Locale, PublishEntryCopy> = {
	en: {
		backLabel: "Back to list",
		translationLabel: "Available in",
		metaPublishedLabel: "Published",
		metaCategoryLabel: "Category",
		metaVersionLabel: "Version",
	},
	ru: {
		backLabel: "Назад к списку",
		translationLabel: "Доступно на",
		metaPublishedLabel: "Дата",
		metaCategoryLabel: "Категория",
		metaVersionLabel: "Версия",
	},
	ar: {
		backLabel: "العودة إلى القائمة",
		translationLabel: "متاح أيضا",
		metaPublishedLabel: "تاريخ النشر",
		metaCategoryLabel: "الفئة",
		metaVersionLabel: "الإصدار",
	},
};
