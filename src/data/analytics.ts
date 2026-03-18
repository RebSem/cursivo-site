export interface AnalyticsConfig {
	posthogToken?: string;
	posthogHost?: string;
	scriptUrl?: string; // Legacy / Plausible
	domain?: string;    // Legacy / Plausible
	apiHost?: string;   // Legacy / Plausible
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

	const posthogToken = import.meta.env.PUBLIC_POSTHOG_TOKEN?.trim();
	const posthogHost = import.meta.env.PUBLIC_POSTHOG_HOST?.trim() || "https://eu.i.posthog.com";

	// If PostHog is configured, prioritize it
	if (posthogToken) {
		return {
			posthogToken,
			posthogHost,
		};
	}

	// Legacy config check (Plausible etc)
	const scriptUrl = normalizeUrl(import.meta.env.PUBLIC_ANALYTICS_SCRIPT_URL ?? "");
	const domain = import.meta.env.PUBLIC_ANALYTICS_DOMAIN?.trim();
	const apiHost = normalizeUrl(import.meta.env.PUBLIC_ANALYTICS_API_HOST ?? "");

	if (scriptUrl && domain) {
		return {
			scriptUrl,
			domain,
			apiHost: apiHost ?? undefined,
		};
	}

	return null;
}
