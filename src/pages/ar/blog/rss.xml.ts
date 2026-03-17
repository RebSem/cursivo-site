import { buildRssResponse } from "../../../data/rss";

export function GET() {
	return buildRssResponse("blog", "ar");
}
