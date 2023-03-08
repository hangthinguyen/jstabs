import { useCallback, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import styles from "./Tabs.module.scss";
const contents = [
  {
    id: 1,
    title: "History",
    text: "I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.",
  },
  {
    id: 2,
    title: "Vision",
    text: "Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin,tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.",
  },
  {
    id: 3,
    title: "Goals",
    text: "Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.",
  },
];

const map = {
  1: contents[0],
  2: contents[1],
  3: contents[2],
};

const Tabs = () => {
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();

  console.log("search params", searchParams);
  const tabContentById = searchParams.get("t") ?? 1;

  // if the search param doesnt exist, i want to navigate to another page
  //   if (tabContentById === undefined) {
  //     navigate(`/home`);
  //   }

  //   const [tabContentById, setTabContentById] = useState(1);
  //   const [tabContentById, setTabContentById] = useState(
  //     searchParams.get("tabContentById") ?? 1
  //   );

  const handleOnClick = useCallback(
    (selectedCategory) => {
      //   setTabContentById(selectedCategory);
      navigate(`?t=${selectedCategory}`);
    },
    [navigate]
  );

  return (
    <div className={styles.tabsContainer}>
      <section className={styles.btnsContainer}>
        {contents.map((content) => (
          <button
            className={styles.btn}
            key={content.id}
            onClick={() => handleOnClick(content.id)}
          >
            {content.title}
          </button>
        ))}
      </section>
      <section className={styles.content}>
        <div>
          <h3 className={styles.title}>{map[tabContentById].title}</h3>
          <p>{map[tabContentById].text}</p>
        </div>
      </section>
    </div>
  );
};

export default Tabs;
