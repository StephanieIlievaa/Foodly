import Seafood from "../categories/Seafood.jsx";
import Italianfood from "../categories/ItalianFood.jsx";
import styles from "./Home.module.scss";
// import { data } from "../../components/data/data.json";

export default function Home() {
  let firstCategorie = [
    {
      name: "Chicken pasta bake",
      mediaUrl:
        "https://i.ibb.co/Tq2rpWN/pasta-spaghetti-with-shrimps-sauce.jpg",
      tags: "pasta, curry",
      instructions:
        "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.",
      ingrediens: "penne rigate, cheese, chicken",
    },
    {
      name: "Chicken & bacon pasta",
      tags: "pasta, curry",
      mediaUrl:
        "https://i.ibb.co/mFVvPN6/top-view-cooked-italian-pasta-inside-plate-white-background.jpg",
      instructions:
        "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.",
      ingrediens: "penne rigate, cheese, chicken",
    },
    {
      name: "Tuna pasta bake",
      tags: "pasta, curry",
      mediaUrl:
        "https://i.ibb.co/9NQ4Hyk/penne-pasta-with-pesto-sauce-zucchini-green-peas-basil-italian-food-top-view-flat-lay.jpg",
      instructions:
        "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.",
      ingrediens: "penne rigate, cheese, chicken",
    },
    {
      name: "Classic lasagne",
      tags: "pasta, curry",
      mediaUrl:
        "https://i.ibb.co/wyVpmBT/pasta-fettuccine-bolognese-with-tomato-sauce-white-bowl.jpg",
      instructions:
        "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.",
      ingrediens: "penne rigate, cheese, chicken",
    },
  ];
  let secondCategorie = [
    {
      name: "Chicken pasta bake",
      mediaUrl:
        "https://i.ibb.co/NnfJm0x/classic-lasagna-with-bolognese-sauce.jpg",
      tags: "pasta, curry",
      instructions:
        "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.",
      ingrediens: "penne rigate, cheese, chicken",
    },
    {
      name: "Chicken & bacon pasta",
      tags: "pasta, curry",
      mediaUrl:
        "https://i.ibb.co/MgzgbBY/pasta-with-tomato-sauce-with-vegetables.jpg",
      instructions:
        "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.",
      ingrediens: "penne rigate, cheese, chicken",
    },
    {
      name: "Tuna pasta bake",
      tags: "pasta, curry",
      mediaUrl:
        "https://i.ibb.co/Vmv45ps/pasta-spaghetti-with-tomato-sauce-cheese-served-plate.jpg",
      instructions:
        "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.",
      ingrediens: "penne rigate, cheese, chicken",
    },
    {
      name: "Classic lasagne",
      tags: "pasta, curry",
      mediaUrl:
        "https://i.ibb.co/q99xLW1/rigatoni-pasta-with-chicken-meat-eggplant-tomato-sauce-bowl.jpg",
      instructions:
        "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.",
      ingrediens: "penne rigate, cheese, chicken",
    },
  ];
  return (
    <div className={styles.home} pt={60}>
      <Seafood cards={firstCategorie} />
      <Italianfood cards={secondCategorie} />
    </div>
  );
}
