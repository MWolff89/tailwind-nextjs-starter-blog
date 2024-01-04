import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const yogaMalaExampleMessages = [
  // {
  //   heading: 'List the benefits of hot yoga',
  //   message: `What are the benefits of hot yoga?`
  // },
  {
    heading: 'What are your services?',
    message: `What are your services?`,
  },
  {
    heading: 'What classes do you have?',
    message: `What classes are available?`,
  },
  {
    heading: 'What is the pricing?',
    message: 'What is the pricing for Nam Kee Pau classes?',
  },
  {
    heading: 'Do you have a free trial?',
    message: `Do you have a free trial?`,
  },
]

const namkeepauExampleMessages = [
  {
    heading: 'Tell me more about Nam Kee Pau',
    message: `Tell me more about Nam Kee Pau`,
  },
  {
    heading: 'Where are you located?',
    message: `Where are you located?`,
  },
  {
    heading: 'What special bundles do you have?',
    message: `What special bundles do you have?`,
  },
]

const yogaMandalaExampleMessages = [
  {
    heading: 'Tell me more about Yoga Mandala',
    message: `Tell me more about Yoga Mandala`,
  },
  {
    heading: 'Where are you located?',
    message: `Where are you located?`,
  },
  {
    heading: 'What are your rates?',
    message: `What are your rates?`,
  },
  {
    heading: 'What classes do you have?',
    message: `What classes do you have?`,
  },
  {
    heading: `I'm a beginner at yoga, what would you recommend?`,
    message: `I'm a beginner at yoga, what would you recommend?`,
  },
]

const lavaYogaExampleMessages = [
  {
    heading: 'Tell me more about Lava Yoga',
    message: `Tell me more about Lava Yoga`,
  },
  {
    heading: 'Where are you located?',
    message: `Where are you located?`,
  },
  {
    heading: 'What are your rates?',
    message: `What are your rates?`,
  },
  {
    heading: 'What classes do you have?',
    message: `What classes do you have?`,
  },
  {
    heading: `I'm a beginner at yoga, what would you recommend?`,
    message: `I'm a beginner at yoga, what would you recommend?`,
  },
]

const unionYogaExampleMessages = [
  {
    heading: 'Tell me more about Union Yoga',
    message: `Tell me more about Union Yoga`,
  },
  {
    heading: 'Where are you located?',
    message: `Where are you located?`,
  },
  {
    heading: 'What are your rates?',
    message: `What are your rates?`,
  },
  {
    heading: 'What classes do you have?',
    message: `What classes do you have?`,
  },
]

const yogaPlusExampleMessages = [
  {
    heading: 'Tell me more about Yoga Plus',
    message: `Tell me more about Yoga Plus`,
  },
  {
    heading: 'Where are you located?',
    message: `Where are you located?`,
  },
  {
    heading: 'What are your rates?',
    message: `What are your rates?`,
  },
  {
    heading: 'What classes do you have?',
    message: `What classes do you have?`,
  },
]

const kalidassLawExampleMessages = [
  {
    heading: 'Tell me more about Kalidass Law',
    message: `Tell me more about Kalidass Law`,
  },
  {
    heading: 'Where are you located?',
    message: `Where are you located?`,
  },
  {
    heading: 'What are your rates?',
    message: `What are your rates?`,
  },
  {
    heading: 'What services do you provide?',
    message: `What services do you provide?`,
  },
]

const rexLegalExampleMessages = [
  {
    heading: 'Tell me more about Rex Legal',
    message: `Tell me more about Rex Legal`,
  },
  {
    heading: "I'm facing criminal charges. How can Rex Legal assist me in my defense?",
    message: `I'm facing criminal charges. How can Rex Legal assist me in my defense?`,
  },
  {
    heading:
      "I'm interested in learning about the recent cases Rex Legal has handled. Can you share some insights or direct me to where I can find more information?",
    message: `I'm interested in learning about the recent cases Rex Legal has handled. Can you share some insights or direct me to where I can find more information?`,
  },
  {
    heading:
      'What steps should I take if I want to schedule a free consultation with one of your lawyers?',
    message: `What steps should I take if I want to schedule a free consultation with one of your lawyers?`,
  },
]

const minmedExampleMessages = [
  {
    heading: 'Tell me more about Minmed',
    message: `Tell me more about Minmed`,
  },
  {
    heading: 'Where are you located?',
    message: `Where are you located?`,
  },
  {
    heading: 'What services do you provide?',
    message: `What services do you provide?`,
  },
  {
    heading: 'I saw your cycle shop near robertson',
    message: `I saw your cycle shop near robertson`,
  },
]

const jcpLawExampleMessages = [
  {
    heading: 'Tell me more about JCP Law',
    message: `Tell me more about JCP Law`,
  },
  {
    heading: 'Where are you located?',
    message: `Where are you located?`,
  },
  {
    heading: 'How can I prepare for my first legal consultation with a JCP Law attorney?',
    message: `How can I prepare for my first legal consultation with a JCP Law attorney?`,
  },
  {
    heading: 'What are the steps involved in scheduling an appointment with a lawyer at JCP Law?',
    message: `What are the steps involved in scheduling an appointment with a lawyer at JCP Law?`,
  },
  {
    heading: 'Are there any specific areas of law that JCP Law specializes in?',
    message: `Are there any specific areas of law that JCP Law specializes in?`,
  },
]

const irbLawExampleMessages = [
  {
    heading: 'Tell me more about I.R.B Law',
    message: `Tell me more about I.R.B Law`,
  },
  {
    heading: 'What services do you provide?',
    message: `What services do you provide?`,
  },
  {
    heading: 'What are the requirements for obtaining a Personal Protection Order?',
    message: `What are the requirements for obtaining a Personal Protection Order?`,
  },
  {
    heading:
      'Can you provide information on the services related to Syariah Law, such as Faraid and Muslim Wills?',
    message: `Can you provide information on the services related to Syariah Law, such as Faraid and Muslim Wills?`,
  },
  {
    heading:
      'Could you explain the concept of Lasting Power of Attorney and when it might be necessary?',
    message: `Could you explain the concept of Lasting Power of Attorney and when it might be necessary?`,
  },
]

const ensoulClinicExampleMessages = [
  {
    heading: 'Tell me more about Ensoul Clinic',
    message: `Tell me more about Ensoul Clinic`,
  },
  {
    heading: 'What services do you provide?',
    message: `What services do you provide?`,
  },
  {
    heading:
      "What's the difference between pico laser and traditional laser treatments for pigmentation?",
    message:
      "What's the difference between pico laser and traditional laser treatments for pigmentation?",
  },
  {
    heading: 'What safety measures does Ensoul Clinic have in place for its treatments?',
    message: 'What safety measures does Ensoul Clinic have in place for its treatments?',
  },
  {
    heading: 'How does Ensoul Clinic personalize treatments for individual aesthetic goals?',
    message: 'How does Ensoul Clinic personalize treatments for individual aesthetic goals?',
  },
]

const farallonLawExampleMessages = [
  {
    heading: 'Tell me more about Farallon Law',
    message: `Tell me more about Farallon Law`,
  },
  {
    heading: 'What services do you provide?',
    message: `What services do you provide?`,
  },
  {
    heading:
      "Could you explain the process of dealing with the CAD if they've contacted me for an interview?",
    message:
      "Could you explain the process of dealing with the CAD if they've contacted me for an interview?",
  },
  {
    heading: 'What should I know about breach of fiduciary duties in Singapore?',
    message: 'What should I know about breach of fiduciary duties in Singapore?',
  },
  {
    heading: 'What is minority oppression in the context of Singaporean corporate law?',
    message: 'What is minority oppression in the context of Singaporean corporate law?',
  },
]

const regalLawExampleMessages = [
  {
    heading: 'Tell me more about Regal Law',
    message: `Tell me more about Regal Law`,
  },
  {
    heading: 'What services do you provide?',
    message: `What services do you provide?`,
  },
  {
    heading:
      'Can you provide information on the process for obtaining a free legal consultation with Regal Law?',
    message:
      'Can you provide information on the process for obtaining a free legal consultation with Regal Law?',
  },
  {
    heading: 'What makes your team of expert lawyers stand out in handling criminal law cases?',
    message: 'What makes your team of expert lawyers stand out in handling criminal law cases?',
  },
  {
    heading:
      'Can you explain the legal process for someone charged with a criminal offense in Singapore?',
    message:
      'Can you explain the legal process for someone charged with a criminal offense in Singapore?',
  },
]

const jooToonLLCExampleMessages = [
  {
    heading: 'Tell me more about Joo Toon LLC',
    message: `Tell me more about Joo Toon LLC`,
  },
  {
    heading: 'What services do you provide?',
    message: `What services do you provide?`,
  },
  {
    heading: 'How does Joo Toon LLC determine fees for legal services?',
    message: 'How does Joo Toon LLC determine fees for legal services?',
  },
  {
    heading: 'What should I consider when dealing with a breach of director’s duties?',
    message: 'What should I consider when dealing with a breach of director’s duties?',
  },
  {
    heading: 'Can you tell me more about your experience with commercial litigation cases?',
    message: 'Can you tell me more about your experience with commercial litigation cases?',
  },
]

const yuenLawExampleMessages = [
  {
    heading: 'Tell me more about Yuen Law',
    message: `Tell me more about Yuen Law`,
  },
  {
    heading: 'What services do you provide?',
    message: `What services do you provide?`,
  },
  {
    heading: 'How does Yuen Law assist with intellectual property registration and enforcement?',
    message: 'How does Yuen Law assist with intellectual property registration and enforcement?',
  },
  {
    heading: 'Could you provide guidance on estate planning and the creation of wills?',
    message: 'Could you provide guidance on estate planning and the creation of wills?',
  },
  {
    heading: 'How does Yuen Law approach client management and ensure high-quality service?',
    message: 'How does Yuen Law approach client management and ensure high-quality service?',
  },
]

const gjcLawExampleMessages = [
  {
    heading: 'Tell me more about GJC Law',
    message: `Tell me more about GJC Law`,
  },
  {
    heading:
      'Can you explain the divorce process in Singapore and what are the grounds for divorce?',
    message:
      'Can you explain the divorce process in Singapore and what are the grounds for divorce?',
  },
  {
    heading:
      'How can I prepare for a custody battle, and what factors will the court consider when determining child custody?',
    message:
      'How can I prepare for a custody battle, and what factors will the court consider when determining child custody?',
  },
  {
    heading:
      'What are the financial implications of divorce, including division of assets and spousal maintenance?',
    message:
      'What are the financial implications of divorce, including division of assets and spousal maintenance?',
  },
]

const wmhLawExampleMessages = [
  {
    heading: 'Tell me more about WMH Law',
    message: `Tell me more about WMH Law`,
  },
  {
    heading: 'What services do you provide?',
    message: `What services do you provide?`,
  },
  {
    heading:
      'How does WMH Law Corporation integrate legal technology to enhance productivity and reduce costs?',
    message:
      'How does WMH Law Corporation integrate legal technology to enhance productivity and reduce costs?',
  },
  {
    heading: `Can you tell me more about the firm's recognition as a "SmartLaw" Singapore Law Practice?`,
    message: `Can you tell me more about the firm's recognition as a "SmartLaw" Singapore Law Practice?`,
  },
  {
    heading: `How can I arrange a preliminary Skype consultation with a lawyer from WMH Law Corporation?`,
    message: `How can I arrange a preliminary Skype consultation with a lawyer from WMH Law Corporation?`,
  },
]

const godwinCamposLLCExampleMessages = [
  {
    heading: 'Tell me more about Godwin Campos LLC',
    message: `Tell me more about Godwin Campos LLC`,
  },
  {
    heading: 'What services do you provide?',
    message: `What services do you provide?`,
  },
  {
    heading:
      'Can you provide more details about the free first consultation offered by Godwin Campos LLC?',
    message:
      'Can you provide more details about the free first consultation offered by Godwin Campos LLC?',
  },
  {
    heading: "Could you explain the firm's approach to handling divorce and litigation cases?",
    message: "Could you explain the firm's approach to handling divorce and litigation cases?",
  },
  {
    heading:
      'Can you share some success stories or testimonials from previous clients of the firm?',
    message:
      'Can you share some success stories or testimonials from previous clients of the firm?',
  },
]

const tembusuLawExampleMessages = [
  {
    heading: 'Tell me more about Tembusu Law',
    message: `Tell me more about Tembusu Law`,
  },
  {
    heading: 'What services do you provide?',
    message: `What services do you provide?`,
  },
  {
    heading: 'Can you explain the typical fee structure for legal services at Tembusu Law?',
    message: 'Can you explain the typical fee structure for legal services at Tembusu Law?',
  },
  {
    heading:
      'What are the differences between divorce and separation in Singapore, and how can I choose the right option for my situation?',
    message:
      'What are the differences between divorce and separation in Singapore, and how can I choose the right option for my situation?',
  },
  {
    heading:
      'What are the latest updates or changes in corporate and commercial law that might affect my business?',
    message:
      'What are the latest updates or changes in corporate and commercial law that might affect my business?',
  },
]

const writeConnectionExampleMessages = [
  {
    heading: 'Tell me more about Write Connection',
    message: `Tell me more about Write Connection`,
  },
  {
    heading: 'Can you explain the teaching methodology used and how it benefits students?',
    message: 'Can you explain the teaching methodology used and how it benefits students?',
  },
  {
    heading:
      'What are the key learning outcomes for students at different levels of the Writing Enrichment program?',
    message:
      'What are the key learning outcomes for students at different levels of the Writing Enrichment program?',
  },
  {
    heading:
      'How do you cater to the individual needs of students with different strengths and challenges?',
    message:
      'How do you cater to the individual needs of students with different strengths and challenges?',
  },
  {
    heading: 'How do you incorporate technology into your curriculum to enhance learning?',
    message: 'How do you incorporate technology into your curriculum to enhance learning?',
  },
]

const cushmanWakefieldExampleMessages = [
  {
    heading: 'Tell me more about Cushman & Wakefield',
    message: `Tell me more about Cushman & Wakefield`,
  },
  {
    heading:
      'Can you provide an overview of the current commercial real estate market trends in Singapore?',
    message:
      'Can you provide an overview of the current commercial real estate market trends in Singapore?',
  },
  {
    heading: 'Can you detail the process of leasing commercial property through you in Singapore?',
    message: 'Can you detail the process of leasing commercial property through you in Singapore?',
  },
  {
    heading:
      'What are some future-proof real estate strategies that you recommend for new developments?',
    message:
      'What are some future-proof real estate strategies that you recommend for new developments?',
  },
  {
    heading:
      'Could you explain how AI is transforming the commercial real estate industry and what that means for investors?',
    message:
      'Could you explain how AI is transforming the commercial real estate industry and what that means for investors?',
  },
]

const IVREscentExampleMessages = [
  {
    heading: 'Tell me more about I.V. Resg',
    message: `Tell me more about I.V. Resg`,
  },
  {
    heading: `How does the I'VRE perfume subscription service work, and what are the options available?`,
    message: `How does the I'VRE perfume subscription service work, and what are the options available?`,
  },
  {
    heading: `I'm looking for a gift for my friend who loves fragrances. What does I'VRE offer that could help me?`,
    message: `I'm looking for a gift for my friend who loves fragrances. What does I'VRE offer that could help me?`,
  },
  {
    heading: `What scents pair well together for layering, and how can I create a unique fragrance profile?`,
    message: `What scents pair well together for layering, and how can I create a unique fragrance profile?`,
  },
  {
    heading: `Can you suggest a perfume that would suit my preference for woody and spicy notes?`,
    message: `Can you suggest a perfume that would suit my preference for woody and spicy notes?`,
  },
]

const fopticsClubExampleMessages = [
  {
    heading: 'Tell me more about Foptics Club',
    message: `Tell me more about Foptics Club`,
  },
  {
    heading:
      'Can you recommend a pair of glasses for someone who spends a lot of time in front of a computer?',
    message:
      'Can you recommend a pair of glasses for someone who spends a lot of time in front of a computer?',
  },
  {
    heading: 'What frame shapes would suit a round face best?',
    message: 'What frame shapes would suit a round face best?',
  },
  {
    heading: 'What are the perks of joining the Foptics+ membership program?',
    message: 'What are the perks of joining the Foptics+ membership program?',
  },
  {
    heading: 'Are there any ongoing promotions for first-time buyers at Foptics Club?',
    message: 'Are there any ongoing promotions for first-time buyers at Foptics Club?',
  },
]

const feiSiongGroupExampleMessages = [
  {
    heading: 'Tell me more about Fei Siong Group',
    message: `Tell me more about Fei Siong Group`,
  },
  {
    heading: `Can you recommend a dish from Encik Tan that's both popular and Halal-certified?`,
    message: `Can you recommend a dish from Encik Tan that's both popular and Halal-certified?`,
  },
  {
    heading: `I had an experience at one of your outlets I'd like to share. How can I provide feedback?`,
    message: `I had an experience at one of your outlets I'd like to share. How can I provide feedback?`,
  },
  {
    heading: `Does Fei Siong Group offer catering services for corporate events, and how can I arrange for it?`,
    message: `Does Fei Siong Group offer catering services for corporate events, and how can I arrange for it?`,
  },
  {
    heading: `I'm interested in opening a franchise. What are the requirements and process to franchise one of Fei Siong Group's brands?`,
    message: `I'm interested in opening a franchise. What are the requirements and process to franchise one of Fei Siong Group's brands?`,
  },
  {
    heading: `How is Fei Siong Group utilizing technology to enhance the dining experience for customers?`,
    message: `How is Fei Siong Group utilizing technology to enhance the dining experience for customers?`,
  },
]

const cartrackExampleMessages = [
  {
    heading: 'Tell me more about Cartrack',
    message: `Tell me more about Cartrack`,
  },
  {
    heading: `What are the benefits of using Cartrack's fleet management system?`,
    message: `What are the benefits of using Cartrack's fleet management system?`,
  },
  {
    heading: `Could you provide a comparison of ROI for businesses before and after implementing Cartrack's solutions?`,
    message: `Could you provide a comparison of ROI for businesses before and after implementing Cartrack's solutions?`,
  },
  {
    heading: `In what ways can Cartrack's platform integrate with my existing business systems?`,
    message: `In what ways can Cartrack's platform integrate with my existing business systems?`,
  },
  {
    heading: `How can AI-powered telematics improve the safety and efficiency of my fleet operations?`,
    message: `How can AI-powered telematics improve the safety and efficiency of my fleet operations?`,
  },
  {
    heading: `What are the latest trends in telematics that Cartrack is leveraging to enhance its services?`,
    message: `What are the latest trends in telematics that Cartrack is leveraging to enhance its services?`,
  },
]

const capitalHrmExampleMessages = [
  {
    heading: 'Tell me more about Capital HRM',
    message: `Tell me more about Capital HRM`,
  },
  {
    heading: `Can you provide guidance on how to develop a strategic HR plan to improve employee engagement and retention?`,
    message: `Can you provide guidance on how to develop a strategic HR plan to improve employee engagement and retention?`,
  },
  {
    heading: `What are the key legal considerations we should be aware of when hiring internationally?`,
    message: `What are the key legal considerations we should be aware of when hiring internationally?`,
  },
  {
    heading: `What are the best practices for setting up a performance management system that aligns with our company's goals?`,
    message: `What are the best practices for setting up a performance management system that aligns with our company's goals?`,
  },
  {
    heading: `What HR technologies are available to automate our recruitment process, and how can we integrate them effectively`,
    message: `What HR technologies are available to automate our recruitment process, and how can we integrate them effectively`,
  },
]

const royalTGroupExampleMessages = [
  {
    heading: 'Tell me more about Royal T Group',
    message: `Tell me more about Royal T Group`,
  },
  {
    heading: `Could you recommend a menu item from Paik's Bibim that's suitable for someone with a gluten allergy?`,
    message: `Could you recommend a menu item from Paik's Bibim that's suitable for someone with a gluten allergy?`,
  },
  {
    heading: `Does Royal T Group offer catering services for corporate events, and if so, what are the options and pricing?`,
    message: `Does Royal T Group offer catering services for corporate events, and if so, what are the options and pricing?`,
  },
  {
    heading: `I have several questions about different aspects of your services. Can you help me with a complex inquiry?`,
    message: `I have several questions about different aspects of your services. Can you help me with a complex inquiry?`,
  },
]

const daikinExampleMessages = [
  {
    heading: 'Tell me more about Daikin',
    message: `Tell me more about Daikin`,
  },
  {
    heading: `Can you provide me with the latest energy-efficient air conditioning solutions for my home?`,
    message: `Can you provide me with the latest energy-efficient air conditioning solutions for my home?`,
  },
  {
    heading: `What are the benefits of Daikin's air purifier range, and how do they contribute to healthier indoor air quality?`,
    message: `What are the benefits of Daikin's air purifier range, and how do they contribute to healthier indoor air quality?`,
  },
  {
    heading: `How does Daikin's Smart Control technology integrate with home automation systems like Google Home and Amazon Alexa?`,
    message: `How does Daikin's Smart Control technology integrate with home automation systems like Google Home and Amazon Alexa?`,
  },
  {
    heading: `What are the steps to troubleshoot connectivity issues with the Daikin Mobile Controller app?`,
    message: `What are the steps to troubleshoot connectivity issues with the Daikin Mobile Controller app?`,
  },
]

const zansanExampleMessages = [
  {
    heading: 'Tell me more about Zansan',
    message: `Tell me more about Zansan`,
  },
  {
    heading: `How can Zansan digital locks be integrated with existing smart home systems or IoT devices?`,
    message: `How can Zansan digital locks be integrated with existing smart home systems or IoT devices?`,
  },
  {
    heading: `How does Zansan stay ahead of the competition in the digital lock industry in Singapore?`,
    message: `How does Zansan stay ahead of the competition in the digital lock industry in Singapore?`,
  },
  {
    heading: `What advanced security features do Zansan digital locks offer, such as biometric recognition or blockchain technology?`,
    message: `What advanced security features do Zansan digital locks offer, such as biometric recognition or blockchain technology?`,
  },
  {
    heading: `Could you guide me through troubleshooting a problem with my Zansan digital lock?`,
    message: `Could you guide me through troubleshooting a problem with my Zansan digital lock?`,
  },
]

const dasherSmartHomeExampleMessages = [
  {
    heading: 'Tell me more about Dasher',
    message: `Tell me more about Dasher`,
  },
  {
    heading:
      'Can you compare the features of the Dreame L10s Ultra SE and the DreameBot L20 Ultra for me?',
    message:
      'Can you compare the features of the Dreame L10s Ultra SE and the DreameBot L20 Ultra for me?',
  },
  {
    heading: `Based on a home with two pets and a mix of carpet and hardwood floors, which robot vacuum cleaner would you recommend?`,
    message: `Based on a home with two pets and a mix of carpet and hardwood floors, which robot vacuum cleaner would you recommend?`,
  },
  {
    heading: `How can I manage devices from different brands within a single smart home ecosystem?`,
    message: `How can I manage devices from different brands within a single smart home ecosystem?`,
  },
  {
    heading: `What factors should I consider when planning to convert my home into a fully automated smart home?`,
    message: `What factors should I consider when planning to convert my home into a fully automated smart home?`,
  },
]

const joArtysanExampleMessages = [
  {
    heading: 'Tell me more about Jo Artysan',
    message: `Tell me more about Jo Artysan`,
  },
  {
    heading: 'Can you explain the difference between microblading and eyebrow embroidery?',
    message: 'Can you explain the difference between microblading and eyebrow embroidery?',
  },
  {
    heading: 'What should I expect during my first semi-permanent makeup session?',
    message: 'What should I expect during my first semi-permanent makeup session?',
  },
  {
    heading: 'How can I book an appointment for a beauty consultation at Jo Artysan?',
    message: 'How can I book an appointment for a beauty consultation at Jo Artysan?',
  },
  {
    heading: 'Can you provide tips on how to maintain my semi-permanent makeup results for longer?',
    message: 'Can you provide tips on how to maintain my semi-permanent makeup results for longer?',
  },
]

const jhKimTaekwondoExampleMessages = [
  {
    heading: 'Tell me more about JH Kim Taekwondo',
    message: `Tell me more about JH Kim Taekwondo`,
  },
  {
    heading: `What Taekwondo program would you recommend for a 7-year-old beginner?`,
    message: `What Taekwondo program would you recommend for a 7-year-old beginner?`,
  },
  {
    heading: `How can I register for a free trial session for my child?`,
    message: `How can I register for a free trial session for my child?`,
  },
  {
    heading: `How does JH Kim Taekwondo Institute foster a sense of community among its students?`,
    message: `How does JH Kim Taekwondo Institute foster a sense of community among its students?`,
  },
  {
    heading: `Can you suggest a training regimen for improving my sparring techniques?`,
    message: `Can you suggest a training regimen for improving my sparring techniques?`,
  },
]

const rnCareExampleMessages = [
  {
    heading: 'Tell me more about RN Care',
    message: `Tell me more about RN Care`,
  },
  {
    heading: `Based on my resume and work experience in healthcare, what roles would I be best suited for?`,
    message: `Based on my resume and work experience in healthcare, what roles would I be best suited for?`,
  },
  {
    heading: `What are the latest advancements in recruitment technology, and how can they be leveraged to improve candidate sourcing?`,
    message: `What are the latest advancements in recruitment technology, and how can they be leveraged to improve candidate sourcing?`,
  },
  {
    heading: `What are the key considerations for ensuring compliance with Singapore's employment laws when hiring foreign talent?`,
    message: `What are the key considerations for ensuring compliance with Singapore's employment laws when hiring foreign talent?`,
  },
  {
    heading: `What strategies should a company consider when trying to attract top engineering talent in a competitive market?`,
    message: `What strategies should a company consider when trying to attract top engineering talent in a competitive market?`,
  },
]

const storhubExampleMessages = [
  {
    heading: 'Tell me more about Storhub',
    message: `Tell me more about Storhub`,
  },
  {
    heading:
      'Can you guide me through the process of estimating the right storage unit size for my needs?',
    message:
      'Can you guide me through the process of estimating the right storage unit size for my needs?',
  },
  {
    heading: 'How does StorHub ensure the security and safety of my stored items?',
    message: 'How does StorHub ensure the security and safety of my stored items?',
  },
  {
    heading: 'Can you explain the different insurance options available for my stored belongings?',
    message: 'Can you explain the different insurance options available for my stored belongings?',
  },
  {
    heading: `Can you assist me in understanding the terms and conditions of StorHub's storage rental agreement?`,
    message: `Can you assist me in understanding the terms and conditions of StorHub's storage rental agreement?`,
  },
]

const indexToContent = {
  namkeepau: {
    title: 'Nam Kee Pau',
    description: 'Nam Kee Pau Chatbot',
    exampleMessages: namkeepauExampleMessages,
  },
  'yoga-mala': {
    title: 'Yoga Mala',
    description: 'Yoga Mala Chatbot',
    exampleMessages: yogaMalaExampleMessages,
  },
  'yoga-mandala': {
    title: 'Yoga Mandala',
    description: 'Yoga Mandala Chatbot',
    exampleMessages: yogaMandalaExampleMessages,
  },
  'lava-yoga': {
    title: 'Lava Yoga',
    description: 'Lava Yoga Chatbot',
    exampleMessages: lavaYogaExampleMessages,
  },
  'union-yoga': {
    title: 'Union Yoga',
    description: 'Union Yoga Chatbot',
    exampleMessages: unionYogaExampleMessages,
  },
  'yoga-plus': {
    title: 'Yoga Plus',
    description: 'Yoga Plus Chatbot',
    exampleMessages: yogaPlusExampleMessages,
  },
  'kalidass-law': {
    title: 'Kalidass Law',
    description: 'Kalidass Law Chatbot',
    exampleMessages: kalidassLawExampleMessages,
  },
  'rex-legal': {
    title: 'Rex Legal',
    description: 'Rex Legal Chatbot',
    exampleMessages: rexLegalExampleMessages,
  },
  minmed: {
    title: 'Minmed',
    description: 'Minmed Chatbot',
    exampleMessages: minmedExampleMessages,
  },
  'jcp-law': {
    title: 'JCP Law',
    description: 'JCP Law Chatbot',
    exampleMessages: jcpLawExampleMessages,
  },
  'irb-law': {
    title: 'I.R.B Law',
    description: 'I.R.B Law Chatbot',
    exampleMessages: irbLawExampleMessages,
  },
  'ensoul-clinic': {
    title: 'Ensoul Clinic',
    description: 'Ensoul Clinic Chatbot',
    exampleMessages: ensoulClinicExampleMessages,
  },
  'farallon-law': {
    title: 'Farallon Law',
    description: 'Farallon Law Chatbot',
    exampleMessages: farallonLawExampleMessages,
  },
  'regal-law': {
    title: 'Regal Law',
    description: 'Regal Law Chatbot',
    exampleMessages: regalLawExampleMessages,
  },
  'joo-toon-llc': {
    title: 'Joo Toon LLC',
    description: 'Joo Toon LLC Chatbot',
    exampleMessages: jooToonLLCExampleMessages,
  },
  'yuen-law': {
    title: 'Yuen Law',
    description: 'Yuen Law Chatbot',
    exampleMessages: yuenLawExampleMessages,
  },
  'gjc-law': {
    title: 'GJC Law',
    description: 'GJC Law Chatbot',
    exampleMessages: gjcLawExampleMessages,
  },
  'wmh-law': {
    title: 'WMH Law',
    description: 'WMH Law Chatbot',
    exampleMessages: wmhLawExampleMessages,
  },
  'godwin-campos-llc': {
    title: 'Godwin Campos LLC',
    description: 'Godwin Campos LLC Chatbot',
    exampleMessages: godwinCamposLLCExampleMessages,
  },
  'tembusu-law': {
    title: 'Tembusu Law',
    description: 'Tembusu Law Chatbot',
    exampleMessages: tembusuLawExampleMessages,
  },
  'write-connection': {
    title: 'Write Connection',
    description: 'Write Connection Chatbot',
    exampleMessages: writeConnectionExampleMessages,
  },
  cushmanwakefield: {
    title: 'Cushman & Wakefield',
    description: 'Cushman & Wakefield Chatbot',
    exampleMessages: cushmanWakefieldExampleMessages,
  },
  'ivre-sg': {
    title: 'I.VRE',
    description: 'I.VRE Chatbot',
    exampleMessages: IVREscentExampleMessages,
  },
  'foptics-club': {
    title: 'Foptics Club',
    description: 'Foptics Club Chatbot',
    exampleMessages: fopticsClubExampleMessages,
  },
  'feisiong-group': {
    title: 'Fei Siong Group',
    description: 'Fei Siong Group Chatbot',
    exampleMessages: feiSiongGroupExampleMessages,
  },
  cartrack: {
    title: 'Cartrack',
    description: 'Cartrack Chatbot',
    exampleMessages: cartrackExampleMessages,
  },
  'capital-hrm': {
    title: 'Capital HRM',
    description: 'Capital HRM Chatbot',
    exampleMessages: capitalHrmExampleMessages,
  },
  'royal-t-group': {
    title: 'Royal T Group',
    description: 'Royal T Group Chatbot',
    exampleMessages: royalTGroupExampleMessages,
  },
  daikin: {
    title: 'Daikin',
    description: 'Daikin Chatbot',
    exampleMessages: daikinExampleMessages,
  },
  zansan: {
    title: 'Zansan',
    description: 'Zansan Chatbot',
    exampleMessages: zansanExampleMessages,
  },
  'dasher-smart-home': {
    title: 'Dasher Smart Home',
    description: 'Dasher Smart Home Chatbot',
    exampleMessages: dasherSmartHomeExampleMessages,
  },
  'jo-artysan': {
    title: 'Jo Artysan',
    description: 'Jo Artysan Chatbot',
    exampleMessages: joArtysanExampleMessages,
  },
  'jhkim-taekwondo': {
    title: 'JH Kim Taekwondo',
    description: 'JH Kim Taekwondo Chatbot',
    exampleMessages: jhKimTaekwondoExampleMessages,
  },
  'rn-care': {
    title: 'RN Care',
    description: 'RN Care Chatbot',
    exampleMessages: rnCareExampleMessages,
  },
  'storhub-sg': {
    title: 'Storhub',
    description: 'Storhub Chatbot',
    exampleMessages: storhubExampleMessages,
  },
}

type EmptyScreenProps = {
  setInput: UseChatHelpers['setInput']
  index: string
}

export function EmptyScreen({ setInput, index }: EmptyScreenProps) {
  const { title, description, exampleMessages } =
    indexToContent[index as keyof typeof indexToContent]
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="bg-background rounded-lg border p-8">
        <h1 className="mb-2 text-lg font-semibold">Welcome to {title} Chatbot!</h1>
        <p className="text-muted-foreground mb-2 leading-normal">
          This is a demo AI chatbot built for {title} by{' '}
          <ExternalLink href="https://www.blackorchidai.com/about">BlackOrchid AI</ExternalLink>.
        </p>
        <p className="text-muted-foreground leading-normal">
          You can start a conversation here or try the following examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-left text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="text-muted-foreground mr-2" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
