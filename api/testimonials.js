import * as cheerio from "cheerio";

export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://www.doctify.com/en-ae/specialist/javaria-zahra#reviews",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
        },
      },
    );

    console.log("Fetch status:", response.status);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const html = await response.text();
    const $ = cheerio.load(html);
    const reviews = [];

    $(".MuiCardContent-root").each((_, el) => {
      const text = $(el).find("p").first().text().trim();
      const date = $(el).find("span").first().text().trim();
      reviews.push({ text, date });
    });

    return res.status(200).json(reviews);
  } catch (err) {
    console.error("Error:", err);
    return res.status(500).json({ error: err.message });
  }
}
