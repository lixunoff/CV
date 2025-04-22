// locales/en/cases/veterinary-app.js
export default {
    id: "veterinary-app",
    emoji: "🐶 🐹 🐱",
    title: "Discovery stage of developing a mobile application for a network of veterinary clinics",
    
    // Structured case content as an array of sections
    sections: [
      // Section 1: Introduction and general information
      {
        id: "section1",
        components: [
          {
            id: "intro-text",
            type: "richText",
            content: "Discovery is the initial stage of product creation, which includes user research, market analysis, hypothesis formulation, and designing basic interaction scenarios. During Discovery, we collected the most complete information to create a solution that would meet the real needs of future users and the business goals of the clinic.",
            details: [
              {
                label: "Project:",
                text: "Mobile application for a network of veterinary clinics."
              },
              {
                label: "Goal:",
                items: [
                  "Reduce the workload on clinics, maintain customer loyalty and prevent them from switching to competitors due to inconvenience.",
                  "Attract new users with a mobile application, and convert them into regular visitors of offline clinics if they live close to the clinic."
                ]
              },
              {
                label: "Focus:",
                items: [
                  "Quick access to veterinary consultations online 24/7.",
                  "Convenient appointment booking without calls.",
                  "Personalized support through the mobile application."
                ]
              },
              {
                label: "Problems identified by the client:",
                items: [
                  "Lack of a convenient way to quickly get veterinarian consultation on minor issues.",
                  "Inability to make veterinary appointments outside of working hours.",
                  "Lack of constant contact with the clinic reduces trust and the number of repeat visits.",
                  "Clinics overloaded with simple consultations that can be resolved online.",
                  "Risk of losing loyal customers due to dissatisfaction with the service."
                ]
              }
            ]
          }
        ]
      },
      
      // Section 2: Research and analysis
      {
        id: "section2",
        title: "Research and analysis",
        components: [
          {
            id: "research-text",
            type: "richText",
            content: "To better understand customer needs and the market environment, we conducted an initial analysis of available data, organized basic qualitative research among users, and studied competitive solutions.",
            details: [
              {
                label: "Quantitative data from the client",
                text: "From the client, we received internal statistics on customer interaction with offline clinics, which helped us understand the profile of existing users:",
                items: [
                  "Average number of animals per owner: 1-4.",
                  "About 30% of clients have more than one animal",
                  "Types of animals: 65% dogs, 30% cats, 5% others.",
                  "Average number of visits per year: 2-3 per client.",
                  "Percentage of clients with a regular veterinarian: 60%.",
                  "Peak months for appointments: spring and autumn (preventive care).",
                  "Average percentage of missed vaccinations: 35%.",
                  "Average percentage of appointments not requiring clinic visits: 38%"
                ]
              },
              {
                label: "Competitor analysis",
                text: "To understand existing solutions in the market, we conducted a basic analysis of popular pet care services and online veterinary consultations:",
                items: [
                  "Services examined: PetDesk, PawSquad, Vets Now.",
                  "Evaluation criteria: ease of appointment booking, availability of reminders for treatments and vaccinations, possibility of online consultations, support for multiple pets in one account, UX/UI quality."
                ],
                figmaPreview: {
                    url: "https://www.figma.com/board/yb0aq19zELS4fZBf70jrpx/Discovery-stage-of-developing-a-mobile-application-for-a-network-of-veterinary-clinics?node-id=35-40&t=I4DCY9AAF86MYyiW-4",
                    title: "Full competitor analysis and comparison table:"
                }
              },
              {
                label: "Online user survey",
                text: "To collect qualitative data, we conducted an online survey among existing clinic clients, as well as other pet owners.",
                items: [
                  "Google form link distributed via WhatsApp, email after visiting the clinic, and open distribution through local pet owner communities.",
                  "Format: anonymous survey with 20 questions.",
                  "Goal: to better understand barriers, expectations, and real needs of both current clinic clients and potential new users."
                ],
                figmaPreview: {
                    url: "https://www.figma.com/board/yb0aq19zELS4fZBf70jrpx/Survey-for-Pet-Owners--Experience-with-Veterinary-Clinics-and-Digital-Service?node-id=69-84&t=rwXYuCAN6fRoAbOF-4",
                    title: "Example of the form and response processing:"
                }
              }
            ]
          }
        ]
      },
      
      // Section 3: User personas
      {
        id: "section3",
        title: "User personas",
        components: [
          {
            id: "personas-intro",
            type: "text",
            content: "Personas were created based on survey results from existing veterinary clinic clients and other pet owners, to better understand real needs, behaviors, and barriers clients face in pet care. The collected responses allowed us to identify typical service usage scenarios and form four main user profiles that became the foundation for product development."
          },
          {
            id: "persona-1",
            type: "personaCard",
            name: "Linda, 42 years old",
            role: "Sales Manager. Married, two children. One cat (Milo), 5 years old",
            image: "persona-1.png",
            backgroundColor: "#ffddf5",
            darkBackgroundColor: "#5c2d4f",
            description: "Linda works full-time and is raising two children. She loves her cat Milo, but due to constant work and household chores, she has limited time for planning veterinary visits. She strives to be a responsible owner but often worries about missing something important.",
            columns: [
              {
                title: "Goals:",
                items: [
                  "Ensure health and preventive care for her cat.",
                  "Receive reminders about necessary procedures.",
                  "Easily schedule appointments at a convenient time."
                ]
              },
              {
                title: "Needs:",
                items: [
                  "Automatic reminders about vaccinations and treatments.",
                  "Convenient appointment booking through a mobile application."
                ]
              },
              {
                title: "Desires:",
                items: [
                  "Possibility of online consultations via chat without the need to call.",
                  "Vaccination history available in the app."
                ]
              },
              {
                title: "Fears:",
                items: [
                  "Missing an important procedure.",
                  "Problems with booking at the needed time."
                ]
              }
            ]
          },
          {
            id: "persona-2",
            type: "personaCard",
            name: "Janet, 61 years old",
            role: "Retired. Lives alone. Two dogs (Oliver, 8 years old; Misty, 5 years old)",
            image: "persona-2.png",
            backgroundColor: "#ddf9ff",
            darkBackgroundColor: "#2d4f5c",
            description: "Janet adores her dogs and spends a lot of time with them outdoors. However, she's not very tech-savvy, so complex digital services scare her. She wants a simple and convenient way to monitor her pets' health.",
            columns: [
              {
                title: "Goals:",
                items: [
                  "Maintain stable health for her dogs.",
                  "Be confident that she won't miss important preventive procedures."
                ]
              },
              {
                title: "Needs:",
                items: [
                  "SMS or phone reminders about visits.",
                  "A simple way to book appointments without complex applications."
                ]
              },
              {
                title: "Desires:",
                items: [
                  "A regular veterinarian who knows both dogs.",
                  "Ability to receive recommendations in a simple format."
                ]
              },
              {
                title: "Fears:",
                items: [
                  "Missing an important procedure due to confusion.",
                  "Difficulties in using new technologies."
                ]
              }
            ]
          },
          {
            id: "persona-3",
            type: "personaCard",
            name: "Daniel, 34 years old",
            role: "Software Developer. Married. One kitten (Luna), 6 months old",
            image: "persona-3.png",
            backgroundColor: "#dcffd8",
            darkBackgroundColor: "#2c5e28",
            description: "Daniel works in IT and is used to modern technologies for all daily tasks. After adopting a kitten, he encountered a lot of conflicting information on the internet and wants to have a reliable source of truthful advice about pet care.",
            columns: [
              {
                title: "Goals:",
                items: [
                  "Properly care for the kitten at each stage of development.",
                  "Be confident that everything is done on time and correctly."
                ]
              },
              {
                title: "Needs:",
                items: [
                  "Access to structured recommendations through a mobile application.",
                  "Quick online consultations via chat."
                ]
              },
              {
                title: "Desires:",
                items: [
                  "Integration of reminders with Google Calendar.",
                  "Access to service prices without calling."
                ]
              },
              {
                title: "Fears:",
                items: [
                  "Getting incorrect advice due to inexperience.",
                  "Missing a necessary procedure or vaccination."
                ]
              }
            ]
          }
        ]
      },
      
      // Section 4: User roles
      {
        id: "section4",
        title: "User roles",
        components: [
          {
            id: "user-roles-list",
            type: "list",
            items: [
              {
                title: "Current offline clinic client / Potential online client",
                description: "Users who already regularly visit the clinic offline for vaccinations, treatments, and consultations. They are looking for convenient ways to maintain contact with the clinic, receive reminders, and simplify the appointment booking process."
              },
              {
                title: "Online client / Potential offline client",
                description: "Users who seek consultations and help online but are ready to switch to offline visits if needed. They are a key target audience for conversion through the application."
              },
              {
                title: "Pure online client",
                description: "Users who live beyond the reach of physical clinics and will only use online services. They may seek consultations but are unlikely to come offline."
              },
              {
                title: "Pure offline client",
                description: "Users who don't use digital services and don't plan to switch to the online format. These are mostly older people who are accustomed to live communication, personal visits to the clinic, and phone appointments. Such users may feel distrust or difficulty in using new technologies, even if they have a smartphone."
              }
            ]
          }
        ]
      },
      
      // Section 5: Jobs To Be Done (JTBD)
      {
        id: "section5",
        title: "Jobs To Be Done (JTBD)",
        components: [
          {
            id: "jtbd-intro",
            type: "richText",
            content: "Based on research and personas, we formulated the main user tasks they aim to solve with our application.",
            details: [
              {
                label: "Each JTBD helps better understand:",
                items: [
                  "Why the user will download the application.",
                  "What they want to accomplish at each stage.",
                  "How we can offer them a solution through product functionality."
                ]
              }
            ]
          },
          // First row of cards
          {
            id: "jtbd-row-1",
            type: "twoColumns",
            columns: [
              {
                type: "card",
                id: "jtbd-card-1",
                title: "JTBD A",
                description: "When I face a pet health problem in the evening or on weekends, I want to find veterinary help available online 24/7, so I don't have to wait for the clinic to open and can get at least basic recommendations.",
                backgroundColor: "#d4e1ff",
                darkBackgroundColor: "#213559"
              },
              {
                type: "card",
                id: "jtbd-card-2",
                title: "JTBD B",
                description: "When I care for my pet and have scheduled visits, I want to receive reminders and quickly make appointments with a familiar veterinarian, so I don't have to call or go to the clinic.",
                backgroundColor: "#ffd4d4",
                darkBackgroundColor: "#5c3636"
              }
            ]
          },
          // Second row of cards
          {
            id: "jtbd-row-2",
            type: "twoColumns",
            columns: [
              {
                type: "card",
                id: "jtbd-card-3",
                title: "JTBD C",
                description: "When I need to learn how to better care for my pet, I want to get quality online recommendations and treatment plans, so I can solve simple problems on my own without visiting the clinic.",
                backgroundColor: "#fff1d4",
                darkBackgroundColor: "#5c4f30"
              },
              {
                type: "card",
                id: "jtbd-card-4",
                title: "JTBD D",
                description: "When my pet has minor symptoms or the nearest clinic is too far away, I want to get an online consultation to assess the situation without wasting time and trips.",
                backgroundColor: "#ddffd8",
                darkBackgroundColor: "#2c5e28"
              }
            ]
          },
          // Odd fifth card (in a separate row, but not full width)
          {
            id: "jtbd-row-3",
            type: "twoColumns",
            columns: [
              {
                type: "card",
                id: "jtbd-card-5",
                title: "JTBD E",
                description: "When I care for my pets and am used to communicating with the clinic by phone, I want to receive reminders about treatments and visits, so I don't miss important procedures and feel that the clinic cares about us.",
                backgroundColor: "#ddf9ff",
                darkBackgroundColor: "#2d4f5c"
              },

            ]
          }
        ]
      },
      
      
      // Section 6: Customer Journey Map
      {
        id: "section6",
        title: "Customer Journey Map",
        components: [
          {
            id: "cjm-text",
            type: "richText",
            content: "The main role for achieving the clinic's business goals became the \"Online client / Potential offline client\". Based on the collected data, we selected Linda as the most typical representative of this role. To better understand the user's journey from downloading the application for online consultation to a possible offline visit, it was decided to create a Customer Journey Map.",
            details: [
              {
                label: "Purpose of creating CJM:",
                items: [
                  "Identify key points of influence after an online consultation.",
                  "Build a path to an offline visit through trust and care.",
                  "Create personalized communication without direct pressure.",
                  "Anticipate barriers and the emotional state of the user at each stage."
                ],
                figmaPreview: {
                    url: "https://www.figma.com/board/yb0aq19zELS4fZBf70jrpx/Survey-for-Pet-Owners--Experience-with-Veterinary-Clinics-and-Digital-Service?node-id=35-45&t=HE3QyvnAETdQnZ14-4",
                    title: "Full Customer Journey Map:"
                }
              }
            ]
          }
        ]
      },
      
      // Section 7: Key insights
      {
        id: "section7",
        title: "Key insights",
        components: [
          {
            id: "insights-text",
            type: "richText",
            content: "Based on our research, we gained a deep understanding of our users' real needs, behaviors, and motivations.",
            details: [
              {
                label: "User needs and behavior",
                items: [
                  "Pet owners want to maintain constant contact with the clinic, even if they don't visit often.",
                  "Over 50% have more than one animal, requiring a convenient way to manage multiple pets.",
                  "The main channel for appointments remains the phone, but there is a high willingness to switch to a mobile application if it's simple."
                ]
              },
              {
                label: "Openness to digital services",
                items: [
                  "About 65% of users are ready to make appointments through a mobile application.",
                  "Over 90% don't use any apps for pet care.",
                  "The main barriers are the lack of a simple solution and distrust of technology."
                ]
              },
              {
                label: "Communication",
                items: [
                  "Support for various channels is expected: chat, video calls, phone, SMS, messengers.",
                  "Users want to receive notifications about vaccinations and treatments.",
                  "Older users prefer SMS or phone calls instead of applications."
                ]
              },
              {
                label: "Motivation to download the application",
                items: [
                  "Most often it's the need for quick consultation outside working hours.",
                  "The need to assess symptoms without panic or unnecessary trips to the clinic.",
                  "The ability to get recommendations without calling is an important trigger for new users."
                ]
              },
              {
                label: "Conversion from online to offline",
                items: [
                  "After an online consultation, the user can be delicately transferred offline through personalized reminders.",
                  "Requests for offline visits can be based on symptoms identified during chat or video calls.",
                  "Using seasonal reminders, promotions, and loyalty programs encourages clinic visits.",
                  "Automatic recommendations based on the animal's profile can increase trust in the service."
                ]
              },
              {
                label: "Onboarding for offline clients",
                items: [
                  "Current clinic clients can be transferred to the application with a simple login via phone number.",
                  "All visit history can be automatically pulled, increasing the value of the digital profile.",
                  "Connecting reminders and being able to see vaccination status will be a useful advantage."
                ]
              },
              {
                label: "JTBD and CJM showed",
                items: [
                  "Each user has their own context in which the application can be useful.",
                  "Online consultation is an entry point for building trust.",
                  "After consultation, the app can personalize suggestions on when it's better to come to the clinic.",
                  "Any subsequent communication is an opportunity for conversion through care, not pressure."
                ]
              }
            ]
          }
        ]
      }      
    ],
    
  };