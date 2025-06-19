// locales/en/cases/banka.js
export default {
    id: "banka",
    emoji: "🐈 🏦 🫙",
    title: "Concept for improving user experience of the «Banka» product by mono",
    
    // Structured case content as an array of sections
    sections: [
      // Section 1: Introduction and general information
      {
        id: "section1",
        components: [
          {
            id: "intro-text",
            type: "richText",
            content: "It all started with a comment on LinkedIn: «Take any product from mono and create an improved UI/UX version, send it to me. If I like it — you'll have a job at mono.» I chose «Banka». Because it's not just a feature, it's a cultural phenomenon. It collects money for drones, weddings, repairs, barbecues, and victory.",
            details: [
              {
                label: "Project:",
                text: "Concept for improving the «Banka» product in the Mono mobile application."
              },
              {
                label: "Goals:",
                items: [
                  "Identify key pain points and user needs of the «Banka» feature.",
                  "Propose solutions for UI/UX improvements based on research.",
                  "Create consistent design with other Monobank products.",
                  "Reduce cognitive load and improve usability."
                ]
              },
              {
                label: "Approach:",
                items: [
                  "Research current functionality and competitor analysis.",
                  "Collect user feedback through surveys.",
                  "Segment needs and form behavioral personas.",
                  "Generate hypotheses and solutions with subsequent prioritization.",
                  "Create consistent design and interactive prototype."
                ]
              },
              {
                label: "Important clarification:",
                text: "This is a concept. Without final validation. Because:",
                items: [
                  "real product data is needed for this,",
                  "success metrics need to be clearly defined,",
                  "and it's still unknown how many iterations will be needed for refinement."
                ]
              }
            ]
          },
          {
            id: "user-roles",
            type: "richText",
            content: "So I decided to focus on solutions, not verification. Waiting for feedback, and meanwhile — thank you for your attention 💜",
          }
        ]
      },
      
      // Section 2: Research
      {
        id: "section2",
        title: "Research Stage",
        components: [
          {
            id: "research-methodology",
            type: "richText",
            content: "During the research stage, I gathered the most complete picture of the current product state, analyzed competitors, and identified real user needs.",
            details: [
              {
                label: "Current functionality research",
                text: "Conducted detailed analysis of all key «Banka» screens — from creation to top-up. Studied flows of related products (Cards, Savings, Market) to understand patterns, navigation logic, and overall interface consistency.",
                items: [
                  "Analysis of all screens from bank creation to usage",
                  "Study of related product flows to understand patterns",
                  "Identification of inconsistencies in design across different sections"
                ]
              },
              {
                label: "Competitor analysis",
                text: "Conducted benchmarking of Monobank, PrivatBank, and PUMB. Compared savings creation flows (banka, envelope, moneybox), top-up methods, goal settings, shared access features, and visual presentation.",
                figmaLink: {
                  url: "https://www.figma.com/board/s1tv4e2pkxSU9WwknvhF2K/Mono?node-id=44-1691&t=6yDY6nDoVTURSzwF-4",
                  title: "Full competitor comparison table –",
                  imageUrl: "/images/Mono-Competitors.png"
                }
              },
              {
                label: "Competitor analysis results",
                text: "Monobank scored 42 points out of 100 possible, indicating significant potential for improvement:",
                items: [
                  "Monobank: 42 points — basic functionality, but with UX drawbacks",
                  "PrivatBank: 71 points — most functional, but complex",
                  "PUMB: 27 points — minimal functionality"
                ]
              },
              {
                type: "image",
                src: "/images/Benchmarking.png", 
                alt: "Competitor benchmarking results",
                title: "Comparison of banking product functionality"
              }
            ]
          }
        ]
      },
      
      // Section 3: User Survey
      {
        id: "section3",
        title: "User Survey",
        components: [
          {
            id: "user-survey",
            type: "richText",
            content: "Conducted a survey among 160 users of the «Banka» feature. Respondents answered 10 questions about convenience, usage scenarios, and problems. The average product rating is 4.55 out of 5, so «Banka» is already a beloved tool. But that's exactly why it's important not to break the good experience, but rather — enhance it with simplicity, logic, and flexibility.",
            details: [
              {
                type: "image",
                src: "/images/Mono-Rating.png",
                alt: "Overall Banka product rating",
                title: "User rating of the Banka feature"
              },
              {
                label: "Key statistical indicators:",
                items: [
                  "23% — only donate and don't create their own bankas",
                  "31% — constantly organize fundraising",
                  "4% — have more than 7 bankas simultaneously",
                  "32% — still don't use bankas or mono"
                ]
              },
              {
                figmaLink: {
                  url: "https://docs.google.com/spreadsheets/d/19N4xVCXEZHu5KABMYfXfsLj02uFjTwcYym8ttRLdn8U/edit?usp=sharing",
                  title: "Full response table –",
                  imageUrl: "/images/Mono-Survey.png",
                  linkText: "open in Google Sheets"
                }
              }
            ]
          }
        ]
      },
      
      // Section 4: Analysis and segmentation
      {
        id: "section4",
        title: "Feedback Analysis and Segmentation",
        components: [
          {
            id: "feedback-segmentation",
            type: "richText",
            content: "Based on the received feedback, I formed a list of the most frequent pain points and needs that prevent full use of the «Banka» feature. Identified 11 main problems and grouped them by themes.",
            details: [
              {
                label: "11 main problems:",
                items: [
                  "Inability to conveniently organize bankas",
                  "Banka screen — important actions are unclear or hidden",
                  "No history of interactions with others' bankas is saved",
                  "Cannot pay directly from banka",
                  "No possibility to have shared bankas and save together",
                  "Inability to withdraw all funds without breaking the banka",
                  "Cannot transfer to cards of other banks or other people",
                  "Cannot top up from cards of other banks",
                  "No anonymous top-up option",
                  "Inconsistent interface design",
                  "Creating a banka takes time"
                ]
              },
              {
                label: "Behavioral roles",
                text: "Based on the responses, I identified five main user roles of «Banka» — according to their goals, usage scenarios, and behavior. This helped better understand needs and design solutions that consider real context.",
              }
            ]
          },
          {
            id: "roles-row-1",
            type: "twoColumns",
            columns: [
              {
                type: "card",
                id: "role-card-donator",
                title: "🥈 Donor",
                description: "When I see an interesting fundraising campaign or want to support an important cause, I want to quickly make a donation and easily return to the banka for repeat top-ups, so I don't have to search for it again among many other campaigns.",
                backgroundColor: "#d4e1ff",
                darkBackgroundColor: "#213559"
              },
              {
                type: "card",
                id: "role-card-volunteer",
                title: "🏆 Volunteer",
                description: "When I organize fundraising for charitable causes or Armed Forces support, I want to have a reliable tool that inspires donor trust and protects me from fraud accusations, so I can focus on collecting funds rather than explanations.",
                backgroundColor: "#ffd4d4",
                darkBackgroundColor: "#5c3636"
              }
            ]
          },
          // Second row of cards - Budgeter and Organizer
          {
            id: "roles-row-2",
            type: "twoColumns",
            columns: [
              {
                type: "card",
                id: "role-card-budgeter",
                title: "💰 Budgeter",
                description: "When I plan my expenses and want to control my budget, I use bankas as «envelopes» for different purposes and want to easily transfer funds between them or spend directly from the banka, so I don't disrupt my planning system.",
                backgroundColor: "#fff1d4",
                darkBackgroundColor: "#5c4f30"
              },
              {
                type: "card",
                id: "role-card-organizer",
                title: "👥 Organizer",
                description: "When I organize joint events with friends or colleagues (barbecues, gifts, repairs), I want to have a transparent way to collect funds from all participants and show how much has been collected, so everyone can see progress and fairness.",
                backgroundColor: "#ddffd8",
                darkBackgroundColor: "#2c5e28"
              }
            ]
          },
          // Third row - Saver (one card)
          {
            id: "roles-row-3",
            type: "twoColumns",
            columns: [
              {
                type: "card",
                id: "role-card-saver",
                title: "🎯 Saver",
                description: "When I save money for big personal goals (vacation, tech, education), I want to see my progress, get motivation, and have the ability to easily top up the banka in various ways, so I can reach my goal faster and not lose motivation.",
                backgroundColor: "#ddf9ff",
                darkBackgroundColor: "#2d4f5c"
              },
              // Empty column for symmetry
              {
                type: "custom",
                id: "empty-column",
                component: <div></div>
              }
            ]
          }
        ]
      },
      
      // Section 5: Jobs To Be Done and hypotheses
      {
        id: "section5",
        title: "Jobs To Be Done and Hypotheses",
        components: [
          {
            id: "jtbd-intro",
            type: "richText",
            content: "For each of the 11 problems, I formulated a JTBD — what exactly the user wants to do and why it's important, as well as a hypothesis — an assumption of how to solve the problem to improve the experience. These hypotheses became the foundation for new scenarios and features.",
            details: [
              {
                label: "Each JTBD + hypothesis pair helps:",
                items: [
                  "Understand the real user need behind the problem.",
                  "Formulate a specific solution to improve the experience.",
                  "Assess potential impact on user satisfaction."
                ]
              }
            ]
          },

          // Problem 1: Organizing bankas
          {
            id: "problem-card-1",
            type: "personaCard",
            name: "Problem 1",
            role: "Inability to conveniently organize bankas",
            backgroundColor: "#d4e1ff",
            darkBackgroundColor: "#213559",
            columns: [
              {
                title: "JTBD:",
                items: [
                  "When I have many bankas, I want to be able to organize them as convenient for me, so I can quickly find the needed one and not get lost in a chaotic list."
                ]
              },
              {
                title: "Hypothesis:",
                items: [
                  "If we allow changing the order of bankas (drag&drop or action menu) and add new bankas to the top of the list, this will improve navigation and reduce search time for the needed banka."
                ]
              }
            ]
          },

          // Problem 2: Unclear actions
          {
            id: "problem-card-2",
            type: "personaCard",
            name: "Problem 2",
            role: "Banka screen — important actions are unclear or hidden",
            backgroundColor: "#ffd4d4",
            darkBackgroundColor: "#5c3636",
            columns: [
              {
                title: "JTBD:",
                items: [
                  "When I open a banka, I want to see all main actions immediately and clearly distinguish them, so I don't confuse 'top up' and 'withdraw' and don't waste time searching for the needed function."
                ]
              },
              {
                title: "Hypothesis:",
                items: [
                  "If we move main actions out of horizontal scroll, make their icons more understandable, and separate them by importance (main vs additional), users will find it easier to navigate."
                ]
              }
            ]
          },

          // Problem 3: Interaction history
          {
            id: "problem-card-3",
            type: "personaCard",
            name: "Problem 3",
            role: "No history of interactions with others' bankas is saved",
            backgroundColor: "#fff1d4",
            darkBackgroundColor: "#5c4f30",
            columns: [
              {
                title: "JTBD:",
                items: [
                  "When I donated to a banka, I want to easily find it again later to check the fundraising progress or top up again, without searching for links in messengers."
                ]
              },
              {
                title: "Hypothesis:",
                items: [
                  "If we add a section with history of bankas the user donated to and show their current status, this will increase repeat donations and platform loyalty."
                ]
              }
            ]
          },

          // Problem 4: Payment from banka
          {
            id: "problem-card-4",
            type: "personaCard",
            name: "Problem 4",
            role: "Cannot pay directly from banka",
            backgroundColor: "#ddffd8",
            darkBackgroundColor: "#2c5e28",
            columns: [
              {
                title: "JTBD:",
                items: [
                  "When I've saved money for something specific, I want to immediately pay for this purchase from the banka, so I don't transfer funds to the card and don't disrupt the saving logic."
                ]
              },
              {
                title: "Hypothesis:",
                items: [
                  "If we allow paying for Market products directly from banka and add the ability to transfer from banka to accounts, this will expand usage scenarios for bankas as a payment instrument."
                ]
              }
            ]
          },

          // Problem 5: Shared bankas
          {
            id: "problem-card-5",
            type: "personaCard",
            name: "Problem 5",
            role: "No possibility to have shared bankas and save together",
            backgroundColor: "#ddf9ff",
            darkBackgroundColor: "#2d4f5c",
            columns: [
              {
                title: "JTBD:",
                items: [
                  "When my partner/family and I want to save for a common goal, I want to have a banka where several people can add funds with equal rights, so we can share responsibility and motivation."
                ]
              },
              {
                title: "Hypothesis:",
                items: [
                  "If we add the ability to create shared bankas with multiple owners and access settings, this will open new scenarios for family planning and common goals."
                ]
              }
            ]
          },

          // Problem 6: Withdraw without breaking
          {
            id: "problem-card-6",
            type: "personaCard",
            name: "Problem 6",
            role: "Inability to withdraw all funds without breaking the banka",
            backgroundColor: "#f0d4ff",
            darkBackgroundColor: "#4a2c5e",
            columns: [
              {
                title: "JTBD:",
                items: [
                  "When I've reached my goal or need all saved funds, I want to withdraw them but keep the banka active for future savings, so I don't have to recreate it and lose history."
                ]
              },
              {
                title: "Hypothesis:",
                items: [
                  "If we add an option to 'withdraw all funds' without deleting the banka, users will be able to reuse bankas for cyclical goals (vacations, gifts, etc.)."
                ]
              }
            ]
          },

          // Problem 7: Transfers to other banks
          {
            id: "problem-card-7",
            type: "personaCard",
            name: "Problem 7",
            role: "Cannot transfer to cards of other banks or other people",
            backgroundColor: "#ffe6d4",
            darkBackgroundColor: "#5e3c2c",
            columns: [
              {
                title: "JTBD:",
                items: [
                  "When I've saved funds and want to transfer them to someone or to an account at another bank, I want to do this directly from the banka, so I'm not dependent only on the Monobank ecosystem."
                ]
              },
              {
                title: "Hypothesis:",
                items: [
                  "If we add the ability to transfer from banka to any cards through standard details, this will make bankas a more universal saving tool."
                ]
              }
            ]
          },

          // Problem 8: Top up from other banks
          {
            id: "problem-card-8",
            type: "personaCard",
            name: "Problem 8",
            role: "Cannot top up from cards of other banks",
            backgroundColor: "#d4ffd4",
            darkBackgroundColor: "#2c5e2c",
            columns: [
              {
                title: "JTBD:",
                items: [
                  "When I want to top up a banka with funds from another bank's card or cash, I want to be able to do this conveniently, so I'm not limited to only the Monobank card."
                ]
              },
              {
                title: "Hypothesis:",
                items: [
                  "If we add support for top-ups through Apple Pay/Google Pay and other payment methods, this will expand the audience of banka users among other banks' customers."
                ]
              }
            ]
          },

          // Problem 9: Anonymous top-up
          {
            id: "problem-card-9",
            type: "personaCard",
            name: "Problem 9",
            role: "No anonymous top-up option",
            backgroundColor: "#ffd4f0",
            darkBackgroundColor: "#5e2c4a",
            columns: [
              {
                title: "JTBD:",
                items: [
                  "When I want to make a donation but don't want to be identified (for personal reasons or security), I want to be able to top up the banka anonymously."
                ]
              },
              {
                title: "Hypothesis:",
                items: [
                  "If we add a 'donate anonymously' toggle when donating, this will increase user comfort and the number of donations in sensitive situations."
                ]
              }
            ]
          },

          // Problem 10: Inconsistent design
          {
            id: "problem-card-10",
            type: "personaCard",
            name: "Problem 10",
            role: "Inconsistent interface design",
            backgroundColor: "#d4ffe1",
            darkBackgroundColor: "#2c5e36",
            columns: [
              {
                title: "JTBD:",
                items: [
                  "When I use different app sections, I want to see unified style and interface logic, so I can navigate faster and feel product coherence."
                ]
              },
              {
                title: "Hypothesis:",
                items: [
                  "If we bring banka design to a unified style with other sections (cards, savings), this will improve overall UX and reduce cognitive load."
                ]
              }
            ]
          },

          // Problem 11: Creating banka takes time
          {
            id: "problem-card-11",
            type: "personaCard",
            name: "Problem 11",
            role: "Creating a banka takes time",
            backgroundColor: "#ffe1d4",
            darkBackgroundColor: "#5e3d2c",
            columns: [
              {
                title: "JTBD:",
                items: [
                  "When I want to quickly create a banka for a specific need, I want to do this in minimal steps with ready templates, so I don't waste time thinking of a name and settings."
                ]
              },
              {
                title: "Hypothesis:",
                items: [
                  "If we add quick categories and templates when creating a banka (vacation, gift, repair, etc.), this will lower the entry barrier and speed up the creation process."
                ]
              }
            ]
          }
        ]
      },

      // Section 6: Current interface analysis
      {
        id: "section6",
        title: "Current Interface Problems Analysis",
        components: [
          {
            id: "current-interface-analysis",
            type: "richText",
            content: "To understand how exactly to improve user experience, I analyzed the current «Banka» interface in detail. Focused on real scenarios, complex areas, and unclear actions that cause confusion or frustration.",
            details: [
              {
                label: "Savings screen problems:",
                items: [
                  "Why hryvnias here when I have savings in other currencies too",
                  "Main actions hidden in horizontal scroll",
                  "Horizontal scroll in main banka list",
                  "Favorite bankas below main list and duplicated"
                ]
              },
              {
                type: "image",
                src: "/images/Mono-Savings.png",
                alt: "Current savings screen with UX problems",
                title: "Current savings screen - identified problems"
              },
              {
                label: "Individual banka screen problems:",
                items: [
                  "Main actions in horizontal scroll",
                  "All actions are equivalent, unclear which are main and which are secondary",
                  "Information duplication",
                  "Design inconsistency with other app sections"
                ]
              },
              {
                type: "image",
                src: "/images/Mono-Banka.png",
                alt: "Current banka details screen with UX problems",
                title: "Current banka screen - action hierarchy problems"
              },
              {
                label: "General consistency problems:",
                text: "Visual incompatibility is observed across different app sections: button styles, headers, colors, etc. differ."
              },
              {
                type: "image",
                src: "/images/Mono-Incosistency.png",
                alt: "Design consistency problems",
                title: "Different styles across different app sections"
              }
            ]
          }
        ]
      },
      
      // Section 7: Ideation and solution prioritization
      {
        id: "section7",
        title: "Ideation and Solution Prioritization",
        components: [
          {
            id: "ideation-intro",
            type: "richText",
            content: "Based on 11 formed hypotheses, I generated a set of solutions for each. Some solutions are obvious responses to pain points, others are experimental ideas. Everything — with focus on simplicity, flexibility, and real user scenarios.",
            details: [
              {
                label: "Prioritization criteria (impact / effort):",
                items: [
                  "Number of mentions in feedback",
                  "Impact on user experience", 
                  "Technical feasibility within concept scope",
                  "Alignment with overall Monobank philosophy"
                ]
              }
            ]
          },

          // First row of cards
          {
            id: "solutions-row-1",
            type: "twoColumns",
            columns: [
              {
                type: "card",
                id: "solution-card-1",
                title: "🧭 Navigation and Organization",
                backgroundColor: "#d4e1ff",
                darkBackgroundColor: "#213559",
                items: [
                  "New banka is added to the top of the list",
                  "Show only own bankas on main screen",
                  "Add section with list of bankas user interacted with",
                  "Enable repeat top-up of others' bankas from list",
                  "Link to banka from transaction history"
                ]
              },
              {
                type: "card",
                id: "solution-card-2",
                title: "🎨 Interface and Actions",
                backgroundColor: "#ffd4d4",
                darkBackgroundColor: "#5c3636",
                items: [
                  "Place main banka actions without horizontal scroll",
                  "Create clear visual action hierarchy based on usage frequency",
                  "Remove favorite bankas functionality"
                ]
              }
            ]
          },

          // Second row of cards
          {
            id: "solutions-row-2",
            type: "twoColumns",
            columns: [
              {
                type: "card",
                id: "solution-card-3",
                title: "💳 Payment Capabilities",
                backgroundColor: "#fff1d4",
                darkBackgroundColor: "#5c4f30",
                items: [
                  "Add ability to add banka to Apple Pay",
                  "Add ability to withdraw or transfer funds to other cards",
                  "Auto-payment capability from banka",
                  "Ability to pay for monomarke products from banka"
                ]
              },
              {
                type: "card",
                id: "solution-card-4",
                title: "📱 Accessibility and Convenience",
                backgroundColor: "#ddffd8",
                darkBackgroundColor: "#2c5e28",
                items: [
                  "Add ability to top up bankas through Apple Pay, GPay or payment form",
                  "Add «Top up banka anonymously» toggle on top-up screen",
                  "Move «Break banka» function to settings"
                ]
              }
            ]
          },

          // Third row of cards
          {
            id: "solutions-row-3",
            type: "twoColumns",
            columns: [
              {
                type: "card",
                id: "solution-card-5",
                title: "⚙️ Management Flexibility",
                backgroundColor: "#ddf9ff",
                darkBackgroundColor: "#2d4f5c",
                items: [
                  "Add ability to add co-owner to banka with limited rights",
                  "Allow withdrawing all funds from banka",
                  "Keep banka open even with zero balance"
                ]
              },
              {
                type: "card",
                id: "solution-card-6",
                title: "🎭 Design and Creation",
                backgroundColor: "#f0d4ff",
                darkBackgroundColor: "#4a2c5e",
                items: [
                  "Create design based on updated mono product components (Cards, Market)",
                  "Add typical banka names to first creation screen",
                  "Ability to create bankas through market interface"
                ]
              }
            ]
          }
        ]
      },
      
      // Section 8: UX/UI design solution
      {
        id: "section8",
        title: "UX/UI Design Solution",
        components: [
          {
            id: "design-approach",
            type: "richText",
            content: "To ensure visual integrity and familiarity for users, I extracted key components from other Monobank app sections. This allowed maintaining unified style in new screens and avoiding interface fragmentation.",
            details: [
              {
                label: "Key principles of new design:",
                items: [
                  "Consistency with Card and Market product components",
                  "Elimination of horizontal scrolls for main actions",
                  "Clear action hierarchy: main vs secondary",
                  "Maintaining familiar experience in main user scenarios"
                ]
              }
            ]
          },
          {
            id: "key-improvements",
            type: "richText",
            content: "Main improvements of the new design:",
            details: [
              {
                label: "Empty «Savings» screen:",
                items: [
                  "Screen design became unified for all states — with or without bankas",
                  "Removed horizontal scroll for main actions",
                  "Added «All» button so user can view bankas they donated to",
                  "Savings amount slider always active — even if no bankas in specific currency"
                ]
              },
              {
                type: "image",
                src: "/images/Mono-Empty-Savings-Screen.png",
                alt: "New empty savings screen design",
                title: "Updated «Savings» screen without bankas"
              },
              {
                label: "«Savings» screen with banka list:",
                items: [
                  "Visually separated banka block from other sections",
                  "New banka now added to top of list",
                  "Added three-dot menu — access to quick banka actions",
                  "Removed duplication in «Favorites» section — list became more concise"
                ]
              },
              {
                type: "image",
                src: "/images/Mono-Savings-With-Jars.png",
                alt: "New savings screen design with bankas",
                title: "Updated «Savings» screen with banka list"
              },
              {
                label: "Banka creation screen:",
                items: [
                  "Added currency toggle for savings type selection (UAH, USD, EUR)",
                  "Added quick categories for inspiration — to fill name in one tap",
                  "Show banka avatar that will be used in the list",
                  "Avatar changes to emoji if name is selected from quick categories"
                ]
              },
              {
                type: "image",
                src: "/images/Mono-Create-Jar-Screen.png",
                alt: "New banka creation screen design",
                title: "Updated banka creation process with quick categories"
              },
              {
                label: "Banka details screen:",
                items: [
                  "Regrouped all interactive elements for better logic and convenience",
                  "Left only money-related actions in main actions block",
                  "Added large separate button for «Share banka»",
                  "Moved «Break banka» action to settings",
                  "Gradient changes to warmer color as goal approaches"
                ]
              },
              {
                type: "image",
                src: "/images/Mono-Jar-Details-Screen.png",
                alt: "New banka details screen design",
                title: "Updated banka screen with improved action hierarchy"
              }
            ]
          },
          {
            id: "new-features",
            type: "richText",
            content: "New functions and capabilities:",
            details: [
              {
                label: "All bankas screen:",
                items: [
                  "Added list of others' bankas that user supported",
                  "In supported bankas show only active bankas where fundraising hasn't ended yet",
                  "Ability to quickly return to banka for repeat donation"
                ]
              },
              {
                type: "image",
                src: "/images/Mono-All-Jars-Screen.png",
                alt: "New all bankas screen with donation history",
                title: "«All bankas» screen with supported bankas"
              },
              {
                label: "Fund banka screen:",
                items: [
                  "Moved all main actions to bottom of screen",
                  "Made secondary actions (share and friendly fundraising) more visible and understandable"
                ]
              },
              {
                type: "image",
                src: "/images/Mono-Fund-Jar-Screen.png",
                alt: "Charity fund banka screen",
                title: "Special design for fund bankas"
              },
              {
                label: "Others' banka top-up screen:",
                items: [
                  "Replaced payment purpose change function with anonymous top-up function. But more analytics needed to find out how often purpose is changed. Maybe it's an integral component.",
                  "Added ability to top up from other cards through Apple Pay function. But additional research is needed here too, as no bank has this function, so it's interesting what this is related to."
                ]
              },
              {
                type: "image",
                src: "/images/Mono-Donate-Screen.png",
                alt: "Others' banka top-up screen with options",
                title: "Updated donation process with new capabilities"
              },
              {
                label: "Quick banka actions:",
                items: [
                  "Added interactive icon (three dots) that calls popup with list of quick banka actions.",
                  "Added to quick actions: share banka, top up and withdraw funds, as well as banka list customization function!"
                ]
              },
              {
                type: "image",
                src: "/images/Mono-Quick-Actions-Menu.png",
                alt: "Quick banka actions menu",
                title: "Context menu with quick actions"
              },
              {
                label: "Banka settings screen:",
                items: [
                  "Regrouped settings by action logic: first key parameters, then optional ones.",
                  "Added new function — ability to add banka to Apple Wallet.",
                  "Moved «Break banka» option to end of list and made it less prominent, as it's an extreme scenario.",
                  "Added icons to all items for faster visual perception."
                ]
              },
              {
                type: "image",
                src: "/images/Mono-Jar-Settings-Screen.png",
                alt: "Banka settings screen",
                title: "Banka settings with all options"
              },
              {
                label: "Conceptual innovations:",
                items: [
                  "Can add quick banka creation function for market products. Banka name would be product name, price - target amount. Maybe some additional settings like auto-payment if target amount is collected. But this all requires additional research.",
                  "Implement iOS widget concept that allows quickly viewing balance in own bankas right from home screen. User sees most relevant goals, savings status and currency without entering the app."
                ]
              },
              {
                type: "image",
                src: "/images/Mono-Conceptual-Features.png",
                alt: "Conceptual innovations: market integration and iOS widget",
                title: "New conceptual capabilities for bankas"
              }
            ]
          }
        ]
      },
      
      // Section 9: Prototype and validation
      {
        id: "section9", 
        title: "Interactive Prototype",
        components: [
          {
            id: "prototype-description",
            type: "richText",
            content: "Created an interactive prototype for main scenarios: creating and topping up own banka, searching and donating to fund banka. Since the prototype is linear, added click hints to better guide user through the flow.",
            details: [
              {
                label: "Main flows in prototype:",
                items: [
                  "Creating new banka using quick categories",
                  "Topping up own banka",
                  "Viewing interaction history with bankas",
                  "Searching and donating to fund banka",
                  "Using quick actions through context menu"
                ]
              },
              {
                figmaLink: {
                  url: "https://www.figma.com/proto/Zi0hIbGfryLyyqApPdTtHf/Banka?page-id=54%3A4302&node-id=221-4966&viewport=109%2C549%2C0.09&t=NQp6ErfomjEyb1EG-8&scaling=scale-down&content-scaling=fixed&starting-point-node-id=221%3A4966&show-proto-sidebar=1&hide-ui=1",
                  title: "Interactive prototype in Figma –",
                  imageUrl: "/images/Mono-Prototype.png"
                }
              }
            ]
          }
        ]
      },
      
      // Section 10: Summary
      {
        id: "section10",
        title: "Summary and Results",
        components: [
          {
            id: "project-summary",
            type: "richText",
            content: "This project showed the importance of a comprehensive approach to UX improvement — from research to prototyping. Even for a product with high rating (4.55/5), significant improvement opportunities can be found if you listen carefully to users.",
            details: [
              {
                label: "How I approached the task:",
                items: [
                  "Conducted current interface and competitor analysis (Privat, PUMB)",
                  "Collected feedback from 160 users: survey + interviews",
                  "Identified key pain points, JTBD and hypotheses",
                  "Segmented feedback and formed behavioral roles",
                  "Generated solutions for each hypothesis, assessed effort",
                  "Tested ideas for logic and fit into Monobank UX",
                  "Built linear prototype of main scenarios with hints"
                ]
              },
              {
                label: "Main improvements:",
                items: [
                  "Add «All bankas» button even if no own bankas — to see those donated to",
                  "Remove horizontal scroll for main actions",
                  "Categories when creating banka — convenient start, less friction",
                  "Updated savings screen — unified look regardless of banka presence",
                  "New banka — to top of list so it doesn't get lost",
                  "Add quick actions (three dots) — share, top up, withdraw, order settings",
                  "Removed «favorite bankas» — now can independently organize list"
                ]
              },
              {
                label: "Why exactly these changes:",
                items: [
                  "Based on real research and user feedback",
                  "Don't break familiar experience (4.55 rating is valuable)",
                  "Reduce cognitive load",
                  "Give users more control",
                  "Support consistency with other Monobank products"
                ]
              }
            ]
          }
        ]
      },
      
      // Section 11: Conclusion
      {
        id: "section11",
        title: "THANK YOU FOR YOUR ATTENTION! 🙌"
      }
    ]
  };