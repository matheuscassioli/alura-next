  
import FAQScreens from '../src/componentes/screens/FaqScreens/index';


export default FAQScreens; 


export async function getStaticProps() {

  const URL_FETCH_FAQ = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'

  const faq = await fetch(URL_FETCH_FAQ)
    .then((response) => {
      return response.json()
    })
    .then((resposta) => {
      return resposta
    })

  return {
    props: {
      faq
    },
  };
}
// export default function Faq({ faq }) {
//   return (
//     <>
    
//       <PageTitle>FAQ - Alura Cases Campanha</PageTitle>
//       <Title as="h1">Alura Cases - FAQ</Title>
//       <Link href="/">Ir para Home</Link>
//       <ul>
//         {faq.map((k) => {
//           return <li key={k.question}>
//             <h2>{k.question}</h2>
//             <p>{k.answer}</p>
//           </li>
//         })}
//       </ul>
//     </>
//   )
// }

