import { buildRssResponse } from "../../../data/rss";

export function GET() {
	return buildRssResponse("changelog", "ar");
}
