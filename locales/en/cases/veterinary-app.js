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
              label: "Problems identified by the client:",
              items: [
                "Lack of a convenient way to quickly get veterinarian consultation on minor issues.",
                "Inability to make veterinary appointments outside of working hours.",
                "Lack of constant contact with the clinic reduces trust and the number of repeat visits.",
                "Clinics overloaded with simple consultations that can be resolved online.",
                "Risk of losing loyal customers due to dissatisfaction with the service."
              ]
            },
            {
              label: "Competitor analysis",
              text: "To understand existing solutions in the market, we conducted a basic analysis of popular pet care services and online veterinary consultations:",
              items: [
                "Services examined: PetDesk, PawSquad, Vets Now.",
                "Evaluation criteria: ease of appointment booking, availability of reminders for treatments and vaccinations, possibility of online consultations, support for multiple pets in one account, UX/UI quality."
              ],
              figmaLink: {
                url: "https://www.figma.com/board/yb0aq19zELS4fZBf70jrpx/Discovery-stage-of-developing-a-mobile-application-for-a-network-of-veterinary-clinics?node-id=35-40&t=I4DCY9AAF86MYyiW-4",
                title: "Full competitor analysis and comparison table –",
                imageUrl: "/images/Vet-Competitors.png"
              }
            },
            {
              label: "Online user survey",
              text: "To collect qualitative data, we conducted an online survey among existing clinic clients, as well as other pet owners.",
              items: [
                "Google form link distributed via WhatsApp, email after visiting the clinic, and open distribution through local pet owner communities.",
                "Format: anonymous survey with 24 questions.",
                "Goal: to better understand barriers, expectations, and real needs of both current clinic clients and potential new users."
              ],
              figmaLink: {
                url: "https://www.figma.com/board/yb0aq19zELS4fZBf70jrpx/Survey-for-Pet-Owners--Experience-with-Veterinary-Clinics-and-Digital-Service?node-id=69-84&t=rwXYuCAN6fRoAbOF-4",
                title: "Example of the form and response processing –",
                imageUrl: "/images/Vet-Survey.png"
              }
            },
            {
              label: "Key findings from market analysis and user needs",
              items: [
                "All competitors claim 24/7 support, but actually operate until 11:00 PM or 1:00 AM.",
                "Almost all have the same functionality: appointments, consultation history, chats, pet profiles.",
                "Interesting but unnecessary feature — weight and growth monitoring (none of the users found it useful).",
                "Users want to get consultations in the evening or on weekends — this is the main motivation for downloading the app.",
                "Key trigger — vaccination reminders and the ability to quickly make appointments.",
                "Over 50% of users have multiple pets — this requires multi-profile capability.",
                "To build trust, it's important to immediately show a familiar doctor or provide a simple profile with history."
              ]
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

    // Section 6: User Stories
    {
      id: "section6",
      title: "User Stories",
      components: [
        {
          id: "user-stories-intro",
          type: "richText",
          content: "Based on the formulated Jobs To Be Done, we created a set of User Stories for each main user role. This helped us detail the expected behavior in the application, formulate functional requirements for the product, and understand which functionality would help achieve the goals of each user type.",
          details: [
            {
              label: "Why we did this:",
              items: [
                "To check if all JTBDs are covered by the application's functionality.",
                "To simplify task setting for designers and developers.",
                "To maintain focus on real user needs during the development process."
              ],
              figmaLink: {
                url: "https://www.figma.com/board/yb0aq19zELS4fZBf70jrpx/Discovery-stage-of-developing-a-mobile-application-for-a-network-of-veterinary-clinics?node-id=230-1980&t=NslWTNXFmnjQqh1X-4",
                title: "List of User Stories –",
                imageUrl: "/images/Vet-UserScenarios.png"
              }
            }
          ]
        }
      ]
    },
    
    // Section 7: Customer Journey Map
    {
      id: "section7",
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
              figmaLink: {
                url: "https://www.figma.com/board/yb0aq19zELS4fZBf70jrpx/Survey-for-Pet-Owners--Experience-with-Veterinary-Clinics-and-Digital-Service?node-id=35-45&t=HE3QyvnAETdQnZ14-4",
                title: "Full Customer Journey Map –",
                imageUrl: "/images/Vet-CJM.png"
              }
            }
          ]
        }
      ]
    },
    
    // Section 8: Key insights
    {
      id: "section8",
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
                "Older users prefer SMS or phone calls instead of applications.",
                "The application includes a chat that remains active for 24 hours after an online or offline visit — in case of additional questions or unforeseen situations."
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
                "Connecting reminders and being able to see vaccination status will be a useful advantage.",
                "To reduce the load on the clinic, when booking an offline appointment, an online consultation can be offered if the described symptoms do not require a physical visit."
              ]
            },
            {
              label: "New user acquisition funnel",
              text: "Most often, new users turn to the service at critical moments — in the evening or at night, when their usual clinics are closed. It is at these moments of maximum need that we have a chance to intercept the user, provide them with quality online consultation, and earn trust. Quick response, professional support, and service convenience form a positive first experience, which becomes the basis for further loyalty. After online interaction, the user can be delicately transferred offline — through recommendations to visit the clinic for examination, procedure, or vaccination."
            }
          ]
        }
      ]
    },
    
    // Section 9: Screens map and information architecture
    {
      id: "section9",
      title: "Screens map and information architecture",
      components: [
        {
          id: "screens-map-and-ia-intro",
          type: "richText",
          content:
            "After forming User Stories, JTBD, and analyzing user needs, we developed the first app screen map and information architecture. Both artifacts helped structure functionality, define main interaction flows, links between sections, and check the completeness of all scenario coverage.",
          details: [
            {
              label: "Why we created a screen map:",
              items: [
                "To visualize the application structure at the level of individual screens and transitions between them.",
                "To form the basis for creating prototypes that cover key interaction scenarios.",
                "To ensure a consistent team vision regarding the scope of the first product version (MVP).",
                "To identify dependencies between modules and filter out unnecessary or unjustified screens.",
                "To identify potential functionality duplications or areas that remain uncovered."
              ],
              figmaLink: {
                url: "https://www.figma.com/board/yb0aq19zELS4fZBf70jrpx/Discovery-stage-of-developing-a-mobile-application-for-a-network-of-veterinary-clinics?node-id=485-12502&t=NslWTNXFmnjQqh1X-4",
                title: "Screen map –",
                imageUrl: "/images/Vet-ScreenMap.png"
              }
            },
            {
              label: "What information architecture shows:",
              items: [
                "Application structure and section hierarchy.",
                "Grouping screens by navigation logic.",
                "Construction of tabs, menus, and main user routes.",
                "Functional purpose of each section — from registration and appointment booking to post-consultation support.",
                "Relationships between key modules: profile, pets, consultations, appointments, visit history, support chat."
              ],
              figmaLink: {
                url: "https://www.figma.com/board/yb0aq19zELS4fZBf70jrpx/Discovery-stage-of-developing-a-mobile-application-for-a-network-of-veterinary-clinics?node-id=826-3047&t=NslWTNXFmnjQqh1X-4",
                title: "Information architecture –",
                imageUrl: "/images/Vet-IA.png"
              }
            },
            {
              label: "Problems and solutions:",
              items: [
                "We didn't want to complicate the main menu to maintain navigation simplicity for new users.",
                "There were challenges with placing 'My Pets' and 'Treatments' functionality, which logically deserve visibility at the top level.",
                "To avoid overloading the main menu, we decided to add dynamic blocks to the home screen — when a user has just added their first pet or received a treatment plan.",
                "Thus, the intuitive structure is preserved, and at the same time, important functions become available at the appropriate moment, without forcing the user to search for them."
              ]
            }
          ]
        }
      ]
    },      
    {
      id: "section10",
      title: "User Flow Diagram",
      components: [
        {
          id: "userflow-intro",
          type: "richText",
          content:
            "For each key scenario, we created user flow diagrams to work out the functionality in detail, identify hidden dependencies, and think through the logic of actions for different types of users. This allowed us to see the complete picture of interaction with the service, avoid navigation errors, and better distribute responsibilities between frontend and backend.",
          details: [
            {
              label: "What User Flow diagrams gave us:",
              items: [
                "Helped structure Sign in / Sign up scenarios and creating online and offline visits.",
                "Identified moments where user verification in the clinic database is needed, and where a new user needs to be created.",
                "Determined at which stages to add a pet, create a visit, or process payment.",
                "Allowed us to design a universal scenario for both existing and new clients.",
                "Opened possibilities for gently transitioning offline users to online if a visit is not necessary."
              ]
            },
            {
              figmaLink: {
                url: "https://www.figma.com/board/yb0aq19zELS4fZBf70jrpx/Discovery-stage-of-developing-a-mobile-application-for-a-network-of-veterinary-clinics?node-id=1098-4343&t=I1eMDwowlNXfBWWH-4",
                title: "User Flow Sign in/up –",
                imageUrl: "/images/Vet-UserFlow.png"
              }
            },
            {
              figmaLink: {
                url: "https://www.figma.com/board/yb0aq19zELS4fZBf70jrpx/Discovery-stage-of-developing-a-mobile-application-for-a-network-of-veterinary-clinics?node-id=1073-2197&t=I1eMDwowlNXfBWWH-4",
                title: "User Flow Online/Offline appointment –",
                imageUrl: "/images/Vet-UserFlow.png"
              }
            },
            {
              label: "Key decisions:",
              items: [
                "Determined the moment of synchronization with the clinic database — after entering the phone number, if the user already exists.",
                "If the user is new — account creation occurs only after PIN code confirmation.",
                "Pet and profile data are automatically imported from the database if the user is a clinic client.",
                "Provided scenarios for re-entry through PIN/Face ID without unnecessary steps.",
                "The entire flow is adapted for new and existing users without unnecessary confusion.",
                "A new visit is recorded in the database after selecting the animal, describing symptoms, choosing the type of appointment, and payment method.",
                "In case of mild symptoms, an offline user is offered an online consultation with an explanation of the benefits.",
                "Ability to add a new pet before making an appointment or while describing symptoms.",
                "After completing a visit — automatic history update and sending recommendations."
              ]
            }
          ]
        }
      ]
    },      
    {
      id: "section11",
      title: "Application design",
      components: [
        {
          id: "design-intro",
          type: "richText",
          content:
            "The goal of the Discovery stage was not to create a complete application design. The main task was to present the client with a visual concept — what the application could be in terms of style, interface structure, and UX principles. Full design development involves creating interactive prototypes, testing key scenarios, collecting feedback, iterations, and improving the user experience.",
          details: [
            {
              label: "What was done:",
              items: [
                "Built a visual concept of the main scenario.",
                "Demonstrated onboarding of a current offline clinic client.",
                "The prototype covers the scenario of booking an offline visit.",
                "All screens correspond to the formed insights and requirements of the user role."
              ]
            },
            {
              figmaLink: {
                url: "https://www.figma.com/proto/qYnVmPsceXBUqKwYktOK56/Vet?page-id=0%3A1&node-id=19-4478&viewport=1329%2C219%2C0.12&scaling=scale-down",
                title: "Prototype of onboarding and booking an offline visit –",
                imageUrl: "/images/Vet-Prototype.png"
              }
            }
          ]
        }
      ]
    },
    {
      id: "section12",
      title: "Discovery stage summary",
      components: [
        {
          id: "final-conclusions",
          type: "richText",
          content:
            "The Discovery stage allowed us to deeply immerse ourselves in the user context and address both business needs and client pain points. We not only formed a vision of the product but also proposed real solutions that will form the basis of an effective MVP.",
          details: [
            {
              label: "Client problems and our solutions:",
              items: [
                "There was no unified registration method. We tested options and chose registration by phone number — this simplified synchronization with the database and immediately allowed using the number for calls and consultations.",
                "Reducing clinic workload — implemented through online consultations and a special interception screen for minor symptoms.",
                "Maintaining loyalty — implemented personal profiles, visit history, preferred doctor, and a support chat after the visit, available for 24 hours.",
                "Preventing switching to competitors — when there's no available slot at the clinic, the user can choose an online consultation.",
                "Attracting new users — focus on evening and night requests when other clinics are closed.",
                "Online → offline conversion — developed a personalized funnel with recommendations, reminders, promotions.",
                "For quick questions — asynchronous chat, AI assistant, and 24/7 booking for online appointments.",
                "Scheduling regardless of business hours — visits can be planned at any time.",
                "Rejecting unnecessary functionality — instead of weight tracking, we focused on notifications, reminders, and personalized advice."
              ]
            },
            {
              label: "Product success criteria:",
              items: [
                "Transition of at least 50% of consultation bookings to online format.",
                "Moving half of the users with minor symptoms (38%) to online.",
                "Converting new online users to offline if they are located near a clinic."
              ]
            },
            {
              label: "Implementation roadmap:",
              items: [
                "MVP for existing clients: profile, history, online clinic booking.",
                "Adding online visit functionality and payments (Pay-as-you-go), testing on loyal clients.",
                "Development of AI assistant, subscriptions, and insurance integrations.",
                "Validation with existing users. Only after this — marketing launch and attracting new users."
              ]
            },
            {
              label: "Methods we used:",
              items: [
                "Quantitative and qualitative analysis of existing clinic clients.",
                "Survey of an external audience of pet owners.",
                "CJM, JTBD, User Stories, information architecture, User Flow.",
                "Prototyping the key scenario taking into account the user role."
              ]
            },
            {
              label: "What we achieved as a result:",
              items: [
                "Complete understanding of user expectations, fears, and barriers.",
                "Formalized functionality structure for MVP.",
                "Confidence in the design's match to real scenarios.",
                "Unified logic for new and existing users, which is easy to scale."
                ]
              }
            ]
          }
        ]
      },
      {
        id: "section13",
        title: "THANK YOU FOR YOUR ATTENTION! 🙌",
        components: []
      }
    ],
    
  };