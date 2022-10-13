
const tiers = [
  {
    href: '/contact',
    features: [
      '¿Tienes una propiedad que deseas vender?'
    ],
    description: '¿Quieres vender la casa que compraste con Infonavit que no ocupas o está invadida o desvalijada y ya no quieres que te sigan descontando?',
    button: 'Vender',
  },
  {
    href: '/gallery',
    features: [
      '¿Buscas aprovechar al máximo tu dinero al comprar una propiedad?'
    ],
    description: 'Revisa entre el catálogo de opciones para encontrar tu casa ideal.',
    button: 'Comprar',
  },  
]

const people = [
  {
    name: '"Vendí mi propiedad y me liberé de deudas y problemas"',
    role: 'Tenía 5 años pagando una casa que ya no podía mantener, estaba abandonada y vandalizada. El crédito me estaba dejando sin dinero. En TE VENDO MI CANTÓN, me ayudaron a deshacerme de la deuda y volver a cotizar en INFONAVIT.',
    imageUrl:
      'https://pregonerobaja.com.mx/wp-content/uploads/2021/02/IMG_6934.jpg',
    names: 'Juan y Patricia, Ciudad de México'
    },
  {
    name: '"Encontré la casa de mis sueños"',
    role: 'Encontré la opción ideal para mi y para mi familia, a un precio accesible y con la asesoría durante todo el proceso de compra.',
    imageUrl:
      'https://i.pinimg.com/550x/a8/f3/db/a8f3db5df7900d600a381d3568c81676.jpg',
    names: 'Samuel, Estado de México'
    },
  {
    name: '"Liberé mi deuda, vendí mi casa"',
    role: 'Me asesoraron y acompañaron durante todo el proceso para vender mi casa. Me liberé de la deuda INFONAVIT que tenía al seguir pagando una casa que no ocupabamos.',
    imageUrl:
      'https://rio19.mx/wp-content/uploads/2021/11/casa-infonavit.jpg',
    names: 'Carolina, Ciudad de México'
    },
]

export default function HomePage() {
  return (
    <div>

{/* HEADER */}
<div className="bg-white">
    <div className="relative  pb-40">
        <div className="absolute inset-2">
          <img
            className="h-full w-full object-cover"
            src="/images/header.png"
            alt=""
          />        
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">        
        </div>
      </div>  
    </div>


{/* BOTONES */}

      <div className="mt-8 bg-white pb-12 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md space-y-4 lg:grid lg:max-w-5xl lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              {tiers.map((tier) => (
                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                  <div className="bg-white px-6 py-8 sm:p-10 sm:pb-6">
                   
                    <div className="mt-4 flex items-baseline text-6xl font-bold tracking-tight">       
                      <span className="ml-1 text-2xl text-center font-medium tracking-normal text-black">{tier.features}</span>
                    </div>
                    <div className="mt-4 flex items-baseline text-6xl font-bold tracking-tight">       
                      <span className="ml-1 text-base text-center font-medium tracking-normal text-gray-600">{tier.description}</span>
                    </div>         
                  </div>
                  <div className="flex flex-1 flex-col justify-between space-y-6 bg-gray-50 px-6 pt-6 pb-8 sm:p-10 sm:pt-6">        
                    <div className="rounded-md shadow">
                      <a
                        href={tier.href}
                        className="flex items-center justify-center rounded-md border border-transparent bg-cyan-600 px-5 py-3 text-base font-medium text-white hover:bg-cyan-700"
                        aria-describedby="tier-standard"
                      >
                        {tier.button}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>     
      </div>
   
      {/* TESTIMONIOS */}

      <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-0">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Experiencias con TE VENDO MI CANTÓN</h2>
            
          </div>
          <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <img className="rounded-lg object-cover shadow-lg" src={person.imageUrl} alt="" />
                  </div>

                  <div className="space-y-2">
                    <div className="space-y-4 text-center text-lg font-small leading-6">
                      <h3>{person.name}</h3>
                      <p className="text-gray-600 text-base">{person.role}</p>
                    </div>         
                  </div>
                  <div className="space-y-2 text-center">
                    <div className="space-y-1 text-lg font-small leading-6">
                      <p className="text-black" >{person.names}</p>
                    </div>         
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>


    </div>







  )
  
}


