import type { Locale, LocaleLink, NavItem } from "./site";

export interface FooterLinkGroup {
	title: string;
	links: Array<{ label: string; href: string }>;
}

export const localeLinks: LocaleLink[] = [
	{ code: "en", label: "EN", href: "/" },
	// { code: "ru", label: "RU", href: "/ru/" },
	// { code: "ar", label: "AR", href: "/ar/" },
];

export const navigationByLocale: Record<Locale, NavItem[]> = {
	en: [
		{ label: "Home", href: "/" },
		{ label: "Product", href: "/product/" },
		{ label: "Blog", href: "/blog/" },
		// TODO: uncomment when cases are ready.
		// { label: "Cases", href: "/cases/" },
	],
	ru: [
		{ label: "Главная", href: "/ru/" },
		{ label: "Продукт", href: "/ru/product/" },
		{ label: "Блог", href: "/ru/blog/" },
		// TODO: uncomment when cases are ready.
		// { label: "Кейсы", href: "/cases/" },
	],
	ar: [
		{ label: "الرئيسية", href: "/ar/" },
		{ label: "المنتج", href: "/ar/product/" },
		{ label: "المدونة", href: "/ar/blog/" },
		// TODO: uncomment when cases are ready.
		// { label: "دراسات الحالة", href: "/cases/" },
	],
};

export const footerLinkGroupsByLocale: Record<Locale, FooterLinkGroup[]> = {
	en: [
		{
			title: "Pages",
			links: [
				{ label: "Home", href: "/" },
				{ label: "Product", href: "/product/" },
				{ label: "Blog", href: "/blog/" },
			],
		},
		{
			title: "Explore",
			links: [
				{ label: "Why Cursivo", href: "/#why-cursivo" },
				{ label: "How it works", href: "/#how-it-works" },
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
			title: "Страницы",
			links: [
				{ label: "Главная", href: "/ru/" },
				{ label: "Продукт", href: "/ru/product/" },
				{ label: "Блог", href: "/ru/blog/" },
			],
		},
		{
			title: "Навигация",
			links: [
				{ label: "Почему Cursivo", href: "/ru/#benefits" },
				{ label: "Как это работает", href: "/ru/#how-it-works" },
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
			title: "الصفحات",
			links: [
				{ label: "الرئيسية", href: "/ar/" },
				{ label: "المنتج", href: "/ar/product/" },
				{ label: "المدونة", href: "/ar/blog/" },
			],
		},
		{
			title: "التنقل",
			links: [
				{ label: "لماذا Cursivo", href: "/ar/#benefits" },
				{ label: "كيف يعمل", href: "/ar/#how-it-works" },
				{ label: "اطلب عرضا", href: "/ar/#contact" },
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
