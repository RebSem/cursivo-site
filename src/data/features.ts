import type { Locale } from "./site";

export interface FeatureMatrixItem {
	title: string;
	description: string;
}

export const featureMatrixByLocale: Record<Locale, FeatureMatrixItem[]> = {
	en: [
		{
			title: "Lead qualification",
			description: "Turn raw rental chat demand into structured lead context for the team.",
		},
		{
			title: "Branch-aware operations",
			description: "Keep requests tied to branches, availability, and real operating constraints.",
		},
		{
			title: "Manager handoff",
			description: "Prepare the next action so managers step into context instead of message chaos.",
		},
	],
	ru: [
		{
			title: "Квалификация лида",
			description: "Переводит сырой спрос из чатов в структурированный контекст для команды.",
		},
		{
			title: "Операции по филиалам",
			description: "Привязывает запросы к филиалам, доступности и реальным ограничениям.",
		},
		{
			title: "Передача менеджеру",
			description: "Готовит следующий шаг так, чтобы менеджер входил в контекст, а не в хаос сообщений.",
		},
	],
	ar: [
		{
			title: "تأهيل العميل المحتمل",
			description: "تحول الطلب الخام في الدردشة إلى سياق منظم يمكن للفريق العمل عليه.",
		},
		{
			title: "عمليات حسب الفروع",
			description: "تربط الطلبات بالفروع والتوفر والقيود التشغيلية الحقيقية.",
		},
		{
			title: "تسليم للمدير",
			description: "تجهز الخطوة التالية بحيث يدخل المدير إلى سياق واضح لا إلى فوضى رسائل.",
		},
	],
};
