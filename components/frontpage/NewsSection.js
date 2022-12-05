import Anchor from "../Anchor";
import NewsCard from "./NewsCard";

const news = [
  {
    key: 1,
    heading: "Shocking news",
    paragraph: "Alligator buys candyfloss at Bubble Gum Festival",
  },
  {
    key: 2,
    heading: "OMG",
    paragraph:
      "Doctors don't want you to know about these festival toilet tips",
  },
  {
    key: 3,
    heading: "Wait what?!",
    paragraph:
      "Jimi Hendrix decides to resurrect to perform at Bubble Gum Festival",
  },
];

function NewsSection() {
  return (
    <section className="news-section">
      <h2>News</h2>
      <div>
        {news.map((item) => (
          <NewsCard
            key={item.key}
            heading={item.heading}
            paragraph={item.paragraph}
          />
        ))}
      </div>
    </section>
  );
}

export default NewsSection;
