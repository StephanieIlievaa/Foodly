import Seafood from "../categories/Seafood.jsx";
import Italianfood from "../categories/ItalianFood.jsx";
import styles from "./Home.module.scss";
// import { data } from "../../components/data/data.json";

export default function Home() {
  let firstCategorie = [
    {
      name: "Chicken pasta bake",
      mediaUrl:
        "https://s3-alpha-sig.figma.com/img/e871/da64/a35753471f17b64c70ac13e6affbafab?Expires=1640563200&Signature=eMbBK00Qlc95RmStm52X3cDw~0z3ATX0d1cbfIxWLrsATl7ZK7BJ2uQ4W~GR8T1PEnBgz0JAhVfLA8sxwYAVb4eIUmkhSv1KGWrkxQjqxz219CDeL~aLElPgQe-Ijw4Z5uwZ1HC-GIQIK-FabWqppOMiVZGrjdJ~NlD~ZP13GEusyelbzmP9brkN2WAGSvHihzCeABpxvZEYWuXeG57tTtZ8sPlLzj0ybaSao4jrwzkzKY249D0B5nZLYxoJyQ3Y-XMc8gRdi9Jj0EagZZ8w7K931dLBfvKyJ9SqSbVnUPxmUFXTyAtH4sm9KSnB097DEA5pMnifDnacvCxSIUiT4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      tags: "pasta, curry",
      instructions:
        "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.",
      ingrediens: "penne rigate, cheese, chicken",
    },
    {
      name: "Chicken & bacon pasta",
      tags: "pasta, curry",
      mediaUrl:
        "https://s3-alpha-sig.figma.com/img/7c47/403c/32a2d597e40e42c6c591281b28f6dafe?Expires=1640563200&Signature=SoH86xPCP8xaaimsq1aQKZjTtXRyrUMUInHaIsmReiH0urm6sfL8mKiPCJ3PNMBMvnAloGgtcVlc-BAhi9DCCo9yt-ZtKSHwMbh9~xtrjv2Hcg1j4RLppgDSsnsX8WdW61z0mFhv68UNIc~8eAiJRJDXyjNAJNrgsM34G0iw1ykwoDKyhyQz7hAz-rezQQd4ftDe4Up-NFJ5b2d3Bg7Z13hOihGI~KAysOhQjmWz~jDbZtyRvjYCo1pJzEmg5vTtTb~uwPPe2Eq6lHFVMSaEU9sYM8AuTTqNevP0ONt69P962w25uo~tRJg1mTt1grZDydfWiTJYR4OiuMv7C5unww__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      instructions:
        "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.",
      ingrediens: "penne rigate, cheese, chicken",
    },
    {
      name: "Tuna pasta bake",
      tags: "pasta, curry",
      mediaUrl:
        "https://s3-alpha-sig.figma.com/img/bf0c/d668/2ffd310ebc565db25af55720702f8d21?Expires=1640563200&Signature=Fuqamecvjq-rvsE-y~rSWQDjhuS3WwUAuMXpWUrd2Tjhc3zzDTjf8lezbyTZpwQwBJYsRQms8631tbicmBJ58yTwtMp9tk2TmXnvMXGbnZSD4-8TMc2lh1SJSCmYg4yrq1pRP-irWISpBHdsxLb5IlrFIMAnVrvdkkb-YTcGJNfz5HZiR0ghJzyskpWlrmpWgo274k6U37AJthMqWiIM7-bwWAKFlNlzXv8udVsZ7TM7n-zwstTvEfzfjWTyoYIslIfILNrOa4hqONBzc4d2y~HdAkjuZuHJ7H4tUPtGatbAc5GG~LLo~LWEMPsudCQWAI6Xo1UZy4mqRT8XjJJRaA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      instructions:
        "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.",
      ingrediens: "penne rigate, cheese, chicken",
    },
    {
      name: "Classic lasagne",
      tags: "pasta, curry",
      mediaUrl:
        "https://s3-alpha-sig.figma.com/img/f86f/7bcb/7b168dd061dc7cb4036fe02812096acc?Expires=1640563200&Signature=LMXNQYgeg9KoMvXlfR26PbTpxJnMD5jFKms-WwGPS7zjciGwdY9arZTAhofcZD6Ku2LUcFESzWGyhzpR-6Ji-dAjOYBdLkKa2UHdK~odGm-~I~CQG-W2lRfxHDO4WcQ7neydB20n5-1Fw87K2w62-AaWPFLj9FJecZlLz4AtzRnd4VzlReXwQxZcREtygALjNRlxbYah8bc3VdMYN0lkyXaEOl9AOiIeiF0fBW~19a-y0ZxdzQDZtcM8BcHoJbttNaFCxyop2jfyW77zLBfneL~Bxk-Sozpkg2Xrk2PvVrw1mA2YlD8yb13wjTlpVB1zK4pAg2i9Euj0kMCRwTr-fg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      instructions:
        "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.",
      ingrediens: "penne rigate, cheese, chicken",
    },
  ];
  let secondCategorie = [
    {
      name: "Chicken pasta bake",
      mediaUrl:
        "https://s3-alpha-sig.figma.com/img/e871/da64/a35753471f17b64c70ac13e6affbafab?Expires=1640563200&Signature=eMbBK00Qlc95RmStm52X3cDw~0z3ATX0d1cbfIxWLrsATl7ZK7BJ2uQ4W~GR8T1PEnBgz0JAhVfLA8sxwYAVb4eIUmkhSv1KGWrkxQjqxz219CDeL~aLElPgQe-Ijw4Z5uwZ1HC-GIQIK-FabWqppOMiVZGrjdJ~NlD~ZP13GEusyelbzmP9brkN2WAGSvHihzCeABpxvZEYWuXeG57tTtZ8sPlLzj0ybaSao4jrwzkzKY249D0B5nZLYxoJyQ3Y-XMc8gRdi9Jj0EagZZ8w7K931dLBfvKyJ9SqSbVnUPxmUFXTyAtH4sm9KSnB097DEA5pMnifDnacvCxSIUiT4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      tags: "pasta, curry",
      instructions:
        "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.",
      ingrediens: "penne rigate, cheese, chicken",
    },
    {
      name: "Chicken & bacon pasta",
      tags: "pasta, curry",
      mediaUrl:
        "https://s3-alpha-sig.figma.com/img/7c47/403c/32a2d597e40e42c6c591281b28f6dafe?Expires=1640563200&Signature=SoH86xPCP8xaaimsq1aQKZjTtXRyrUMUInHaIsmReiH0urm6sfL8mKiPCJ3PNMBMvnAloGgtcVlc-BAhi9DCCo9yt-ZtKSHwMbh9~xtrjv2Hcg1j4RLppgDSsnsX8WdW61z0mFhv68UNIc~8eAiJRJDXyjNAJNrgsM34G0iw1ykwoDKyhyQz7hAz-rezQQd4ftDe4Up-NFJ5b2d3Bg7Z13hOihGI~KAysOhQjmWz~jDbZtyRvjYCo1pJzEmg5vTtTb~uwPPe2Eq6lHFVMSaEU9sYM8AuTTqNevP0ONt69P962w25uo~tRJg1mTt1grZDydfWiTJYR4OiuMv7C5unww__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      instructions:
        "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.",
      ingrediens: "penne rigate, cheese, chicken",
    },
    {
      name: "Tuna pasta bake",
      tags: "pasta, curry",
      mediaUrl:
        "https://s3-alpha-sig.figma.com/img/bf0c/d668/2ffd310ebc565db25af55720702f8d21?Expires=1640563200&Signature=Fuqamecvjq-rvsE-y~rSWQDjhuS3WwUAuMXpWUrd2Tjhc3zzDTjf8lezbyTZpwQwBJYsRQms8631tbicmBJ58yTwtMp9tk2TmXnvMXGbnZSD4-8TMc2lh1SJSCmYg4yrq1pRP-irWISpBHdsxLb5IlrFIMAnVrvdkkb-YTcGJNfz5HZiR0ghJzyskpWlrmpWgo274k6U37AJthMqWiIM7-bwWAKFlNlzXv8udVsZ7TM7n-zwstTvEfzfjWTyoYIslIfILNrOa4hqONBzc4d2y~HdAkjuZuHJ7H4tUPtGatbAc5GG~LLo~LWEMPsudCQWAI6Xo1UZy4mqRT8XjJJRaA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      instructions:
        "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.",
      ingrediens: "penne rigate, cheese, chicken",
    },
    {
      name: "Classic lasagne",
      tags: "pasta, curry",
      mediaUrl:
        "https://s3-alpha-sig.figma.com/img/f86f/7bcb/7b168dd061dc7cb4036fe02812096acc?Expires=1640563200&Signature=LMXNQYgeg9KoMvXlfR26PbTpxJnMD5jFKms-WwGPS7zjciGwdY9arZTAhofcZD6Ku2LUcFESzWGyhzpR-6Ji-dAjOYBdLkKa2UHdK~odGm-~I~CQG-W2lRfxHDO4WcQ7neydB20n5-1Fw87K2w62-AaWPFLj9FJecZlLz4AtzRnd4VzlReXwQxZcREtygALjNRlxbYah8bc3VdMYN0lkyXaEOl9AOiIeiF0fBW~19a-y0ZxdzQDZtcM8BcHoJbttNaFCxyop2jfyW77zLBfneL~Bxk-Sozpkg2Xrk2PvVrw1mA2YlD8yb13wjTlpVB1zK4pAg2i9Euj0kMCRwTr-fg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
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
