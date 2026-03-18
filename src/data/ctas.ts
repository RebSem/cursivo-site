import type { Locale } from "./site";

const telegramHref = "https://t.me/Michael_Semenov";

export interface CtaLink {
	label: string;
	href: string;
}

export interface FinalCtaLink extends CtaLink {
	meta: string;
	tone: "primary" | "secondary" | "ghost";
}

export const heroCtasByLocale: Record<Locale, CtaLink[]> = {
	en: [
		{ label: "Request pilot or demo", href: telegramHref },
		{ label: "See how it works", href: "/#how-it-works" },
	],
	ru: [
		{ label: "Запросить pilot или demo", href: telegramHref },
		{ label: "Смотреть как это работает", href: "/ru/#how-it-works" },
	],
	ar: [
		{ label: "اطلب pilot أو demo", href: telegramHref },
		{ label: "اعرض كيف يعمل", href: "/ar/#how-it-works" },
	],
};

export const finalCtasByLocale: Record<Locale, FinalCtaLink[]> = {
	en: [
		{
			label: "Request pilot or demo",
			href: telegramHref,
			meta: "Telegram contact",
			tone: "primary",
		},
		{
			label: "Start a technical conversation",
			href: telegramHref,
			meta: "Partner or buyer contact",
			tone: "secondary",
		},
		{
			label: "See use cases",
			href: "/use-cases/",
			meta: "Real rental team scenarios",
			tone: "ghost",
		},
	],
	ru: [
		{
			label: "Запросить pilot или demo",
			href: telegramHref,
			meta: "Связь в Telegram",
			tone: "primary",
		},
		{
			label: "Начать техразговор",
			href: telegramHref,
			meta: "Для партнера или buyer",
			tone: "secondary",
		},
		{
			label: "Смотреть сценарии",
			href: "/ru/use-cases/",
			meta: "Реальные сценарии команд проката",
			tone: "ghost",
		},
	],
	ar: [
		{
			label: "اطلب pilot или demo",
			href: telegramHref,
			meta: "تواصل عبر تيليجرام",
			tone: "primary",
		},
		{
			label: "ابدأ نقاشا تقنيا",
			href: telegramHref,
			meta: "للشركاء أو المشترين",
			tone: "secondary",
		},
		{
			label: "اعرض الحالات",
			href: "/ar/use-cases/",
			meta: "سيناريوهات حقيقية لفرق التأجير",
			tone: "ghost",
		},
	],
};

export const legalCtasByLocale: Record<Locale, FinalCtaLink[]> = {
	en: [
		{
			label: "See product page",
			href: "/product/",
			meta: "Operations overview",
			tone: "primary",
		},
		{
			label: "Request a direct conversation",
			href: telegramHref,
			meta: "Telegram contact",
			tone: "secondary",
		},
		{
			label: "Return to homepage",
			href: "/",
			meta: "Main overview",
			tone: "ghost",
		},
	],
	ru: [
		{
			label: "Смотреть страницу продукта",
			href: "/ru/product/",
			meta: "Операционный обзор",
			tone: "primary",
		},
		{
			label: "Написать напрямую",
			href: telegramHref,
			meta: "Контакт в Telegram",
			tone: "secondary",
		},
		{
			label: "Вернуться на главную",
			href: "/ru/",
			meta: "Основной обзор",
			tone: "ghost",
		},
	],
	ar: [
		{
			label: "اعرض صفحة المنتج",
			href: "/ar/product/",
			meta: "نظرة تشغيلية",
			tone: "primary",
		},
		{
			label: "تواصل مباشرة",
			href: telegramHref,
			meta: "تواصل عبر تيليجرام",
			tone: "secondary",
		},
		{
			label: "العودة إلى الرئيسية",
			href: "/ar/",
			meta: "النظرة العامة",
			tone: "ghost",
		},
	],
};
