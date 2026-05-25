import type { Locale, LocaleLink, NavItem } from "./site";

export interface FooterLinkGroup {
	title: string;
	links: Array<{ label: string; href: string }>;
}

export const localeLinks: LocaleLink[] = [
	{ code: "en", label: "EN", href: "/" },
	{ code: "ru", label: "RU", href: "/ru/" },
	{ code: "ar", label: "AR", href: "/ar/" },
];

export const navigationByLocale: Record<Locale, NavItem[]> = {
	en: [
		{ label: "Product", href: "/product/" },
		{ label: "Use cases", href: "/use-cases/" },
		{ label: "Blog", href: "/blog/" },
		{ label: "Changelog", href: "/changelog/" },
	],
	ru: [
		{ label: "Продукт", href: "/ru/product/" },
		{ label: "Кейсы", href: "/ru/use-cases/" },
		{ label: "Блог", href: "/ru/blog/" },
		{ label: "Changelog", href: "/ru/changelog/" },
	],
	ar: [
		{ label: "المنتج", href: "/ar/product/" },
		{ label: "حالات الاستخدام", href: "/ar/use-cases/" },
		{ label: "المدونة", href: "/ar/blog/" },
		{ label: "سجل التغييرات", href: "/ar/changelog/" },
	],
};

export const footerLinkGroupsByLocale: Record<Locale, FooterLinkGroup[]> = {
	en: [
		{
			title: "Product",
			links: [
				{ label: "Overview", href: "/product/" },
				{ label: "Use cases", href: "/use-cases/" },
				{ label: "Changelog", href: "/changelog/" },
			],
		},
		{
			title: "Read",
			links: [
				{ label: "Blog", href: "/blog/" },
				{ label: "Open source", href: "/open-source/" },
				{ label: "Request demo", href: "/#contact" },
			],
		},
		{
			title: "Legal",
			links: [
				{ label: "Privacy", href: "/privacy/" },
				{ label: "Terms", href: "/terms/" },
			],
		},
	],
	ru: [
		{
			title: "Продукт",
			links: [
				{ label: "Обзор", href: "/ru/product/" },
				{ label: "Кейсы", href: "/ru/use-cases/" },
				{ label: "Changelog", href: "/ru/changelog/" },
			],
		},
		{
			title: "Читать",
			links: [
				{ label: "Блог", href: "/ru/blog/" },
				{ label: "Open source", href: "/ru/open-source/" },
				{ label: "Запросить демо", href: "/ru/#contact" },
			],
		},
		{
			title: "Правила",
			links: [
				{ label: "Приватность", href: "/ru/privacy/" },
				{ label: "Условия", href: "/ru/terms/" },
			],
		},
	],
	ar: [
		{
			title: "المنتج",
			links: [
				{ label: "نظرة عامة", href: "/ar/product/" },
				{ label: "حالات الاستخدام", href: "/ar/use-cases/" },
				{ label: "سجل التغييرات", href: "/ar/changelog/" },
			],
		},
		{
			title: "اقرأ",
			links: [
				{ label: "المدونة", href: "/ar/blog/" },
				{ label: "المصدر المفتوح", href: "/ar/open-source/" },
				{ label: "اطلب عرضًا", href: "/ar/#contact" },
			],
		},
		{
			title: "قانوني",
			links: [
				{ label: "الخصوصية", href: "/ar/privacy/" },
				{ label: "الشروط", href: "/ar/terms/" },
			],
		},
	],
};
