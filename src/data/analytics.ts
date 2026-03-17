export interface AnalyticsConfig {
	scriptUrl: string;
	domain: string;
	apiHost?: string;
}

function normalizeUrl(value: string) {
	const trimmed = value.trim();
	if (!trimmed) {
		return null;
	}

	if (trimmed.startsWith("/") || trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
		return trimmed;
	}

	return null;
}

export function getAnalyticsConfig(): AnalyticsConfig | null {
	const enabled = import.meta.env.PUBLIC_ANALYTICS_ENABLED?.trim();
	if (enabled && enabled.toLowerCase() === "false") {
		return null;
	}

	const scriptUrl = normalizeUrl(import.meta.env.PUBLIC_ANALYTICS_SCRIPT_URL ?? "");
	const domain = import.meta.env.PUBLIC_ANALYTICS_DOMAIN?.trim();
	const apiHost = normalizeUrl(import.meta.env.PUBLIC_ANALYTICS_API_HOST ?? "");

	if (!scriptUrl || !domain) {
		return null;
	}

	return {
		scriptUrl,
		domain,
		apiHost: apiHost ?? undefined,
	};
}
