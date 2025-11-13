import { XMLParser } from "fast-xml-parser";

export default async function handler(req, res) {
  try {
    const rssUrl = "https://www.youtube.com/feeds/videos.xml?channel_id=UCK3r2WczIjIMctItrAv2-BQ";
    const response = await fetch(rssUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch RSS: ${response.status}`);
    }

    console.log("Status:", response.status);
    console.log("Headers:", Object.fromEntries(response.headers.entries()));

    const xml = await response.text();
    console.log("RECEIVED VIDEOS:", xml.slice(0,500));
    const parser = new XMLParser({ ignoreAttributes: false });
    const data = parser.parse(xml);

    const entries = Array.isArray(data?.feed?.entry)
      ? data.feed.entry
      : data?.feed?.entry
      ? [data.feed.entry]
      : [];

    const videos = entries.map(entry => ({
      title: entry.title || "",
      published: entry.published || "",
      link: entry.link?.["@_href"] || "",
      videoId: entry["yt:videoId"] || ""
    }));

    res.status(200).json(videos.slice(0, 5));
  } catch (err) {
    console.error("api err:",err);
    res.status(500).json({ type: "api error" , error: err.message });
  }
}
