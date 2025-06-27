import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Facility from '../Components/Facility'
import Instragram from '../Components/Instragram'

export default function Mice_problem() {
  return (
    <div>
      <Navbar />
      {/* <!-- Start Page Title --> */}
        <div className="page-title-area">
            <div className="container">
                <div className="page-title-content">
                    <h2>Mice problem</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li>Mice problem</li>
                    </ul>
                </div>
            </div>
        </div>
        {/* <!-- End Page Title --> */}

        {/* <!-- Start Customer Service Area --> */}
        <section className="customer-service-area ptb-100">
            <div className="container">
                <div className="customer-service-content">
                    <h3 className='p-0'>🐭 Common Mouse Problems Around the World</h3>
                    <ul>
                        <li >House mice are more than just a nuisance — they can spread diseases, carry ticks and parasites, and contaminate food with their droppings and urine. This can create serious health risks for your family and pets.</li>
                        <li>One big issue is that mice reproduce rapidly, so a small problem can become a big infestation fast. Both wild rodents (like rats and mice) and pet rodents (like hamsters and guinea pigs) can carry and spread dangerous diseases.</li>
                        <li>They can even damage your property by chewing wires inside homes, cars, and appliances.</li>
                        
                    </ul>
                    <h3 className='p-0'>🦠 Diseases Carried by Wild Rodents</h3>
                    <p>🔹 Hantavirus</p>
                    <ul>
                        <li className='mb-3'>Hantavirus Pulmonary Syndrome (HPS) is a rare but deadly disease caused by contact with droppings or urine from infected deer mice. It's most often contracted in cabins, sheds, or trailers where rodents have nested. About 1 to 5 cases are reported each year in Washington, with around one-third of them being fatal.</li>
                       
                    </ul>
                    
                    <p>🔹 Leptospirosis</p>
                    <ul>
                        <li className='mb-3'>Leptospirosis is a bacterial infection spread through the urine of infected animals like rats, raccoons, or dogs. It can contaminate soil and water, especially in tropical or humid climates. While some people don’t show symptoms, others can become seriously ill.</li>
                    </ul>
                    <p>🔹 Plague</p>
                    <ul>
                        <li className='mb-3'>Plague is a serious infection caused by a bacteria called Yersinia pestis. It’s usually transmitted by the bite of an infected flea that’s fed on rodents. While not found in wild animals in Washington state, it can still be contracted by people or pets when traveling to areas where it's present. Thankfully, it is treatable with antibiotics.</li>
                    </ul>
                    <p>🔹 Tularemia</p>
                    <ul>
                        <li className='mb-3'>Tularemia is caused by Francisella tularensis and mostly affects wild rodents, rabbits, and squirrels. People can get it through animal bites, contact with contaminated blood or meat, tick bites, or even drinking untreated water. About 1 to 10 cases are reported yearly.</li>
                    </ul>
                 

                    <h3 className='p-0'>🐹 Diseases Spread by Pet Rodents (Pocket Pets)</h3>
                    <p>Rodents like hamsters, guinea pigs, gerbils, and mice are common pets, but they can sometimes pick up or carry diseases — especially if exposed to wild animals.</p>
                    <p>🔹 Rat Bite Fever</p>
                    <ul>
                        <li className='mb-3'>This bacterial illness is spread through bites or scratches from rats. Around 10% of rat bites may lead to infection. It can also be spread by other rodents, and even cats and dogs. People in rat-infested areas or who handle rats for work are at higher risk.</li>
                       
                    </ul>
                    <p>🔹 Salmonellosis</p>
                    <ul>
                        <li className='mb-3'>Caused by Salmonella bacteria, this infection affects the intestines. It spreads through contact with contaminated food, water, or animal droppings. It’s especially dangerous for young children, elderly people, and anyone with a weakened immune system.</li>
                    </ul>

                    <h3 className='p-0'>🛑 Prevention Tips</h3>
                    
                    <ul>
                        <li>Keep rodents out of your home by sealing entry points.</li>
                        <li>Store food properly and keep surfaces clean.</li>
                        <li>Avoid handling dead or wild rodents.</li>
                        <li>Use gloves when cleaning rodent droppings or urine.</li>
                        <li>Don’t let pets roam in rodent-prone areas.</li>
                       
                    </ul>
                </div>
            </div>
        </section>
        {/* <!-- End Customer Service Area --> */}
      <Facility />
      {/* <Instragram /> */}
      <Footer />
    </div>
  )
}
