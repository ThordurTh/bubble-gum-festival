import NewsCard from "./NewsCard";
import newsImage1 from "../../assets/news-image1.webp";
import newsImage2 from "../../assets/news-image2.webp";
import newsImage3 from "../../assets/news-image3.webp";

const news = [
  {
    key: 1,
    heading: "Shocking news",
    paragraph: "Alligator buys candyfloss at Bubble Gum Festival",
    image: newsImage1,
  },
  {
    key: 2,
    heading: "OMG",
    paragraph:
      "Doctors don't want you to know about these festival toilet tips",
    image: newsImage2,
  },
  {
    key: 3,
    heading: "Wait what?!",
    paragraph:
      "Jimi Hendrix decides to resurrect to perform at Bubble Gum Festival",
    image: newsImage3,
  },
];

function NewsSection() {
  return (
    <section className="news-section">
      <h2 className="underline">News</h2>
      <div className="news-cards">
        {news.map((item) => (
          <NewsCard
            key={item.key}
            heading={item.heading}
            paragraph={item.paragraph}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}

export default NewsSection;
