/* =====================================================================
   SITE CONTENT: edit the words on your website here.
   =====================================================================
   HOW TO EDIT
   - Change only the text between the "quotes".
   - Keep every quote mark, comma and bracket where it is.
   - To make words bold, wrap them in double stars:  **like this**
   - Anything that still says [PLACEHOLDER: ...] is HIDDEN from visitors.
     To see what's still missing, add ?draft to the address:
     https://andrewpocta.netlify.app/?draft  (shows amber tags)
   - Pictures: upload them into the "images" folder on GitHub, then put
     the path in quotes, e.g. "images/math-mystic-1.png".
   - After you save (Commit on GitHub), the live site updates in ~1 minute.
   ===================================================================== */

window.SITE = {

  /* ---------- Top of the page ---------- */
  name: "Andrew Pocta",
  role: "Builder · Virginia Beach, VA",
  photo: "",                                        // your headshot, e.g. "images/andrew.jpg" (leave "" to show initials)
  headlineWords: ["apps", "games", "tools"],          // the word that rotates in "I build useful ___ with AI."
  intro: "Environmental Consultant by day and app/game/tool builder by night. I design and ship software for the people around me: educational apps for students, games and helpful tools for families, apps that solve problems that popular apps haven't yet.",

  /* ---------- Projects ----------
     Each project is one tile. "color" can be: teal, violet, blue or neutral.
     The first project with nowBuilding: true gets the big tile at the top. */
  projects: [
    {
      id: "hub",
      title: "Family Hub",
      status: "Now building · v1",
      color: "teal",
      nowBuilding: true,
      summary: "An always-on AI family assistant, with phone companion apps and desktop apps.",
      details: "An always-on AI family assistant that helps manage your life and keep you on track, with phone companion apps.",
      what: [
        "Runs on a dedicated tablet on the wall or desktop",
        "Setup wizard starts in voice mode and learns about each family member",
        "Brings the family's calendars, iCloud and Gmail together",
        "Voice control for the adults in the household, chosen during setup"
      ],
      how: [
        "Built in Claude Code with a CLAUDE.md, a decisions log and a verification skill",
        "v1 is a private build for my own family and has to work fully before any public release",
        "App Store release and linking an AI subscription are planned for later versions"
      ],
      statusLong: "In build · v1, private family release first",
      link: "https://andrewpocta.netlify.app/family-hub/",
      images: []                                         // screenshots, e.g. ["images/game-night-1.png", "images/game-night-2.png"]
    },
    {
      id: "math",
      title: "Math Mystic",
      status: "Prototype · try it",
      color: "violet",
      demo: true,                                      // shows the playable 7 × 8 demo on the tile
      summary: "Voice-based math practice. Kids say the answer out loud.",
      details: "Voice-based math practice for kids. Equations and answers spoken out loud and the app listens.",
      what: [
        "Children practice math facts by speaking their answers",
        "Designed for my own kids' practice at home"
      ],
      how: [
        "Built on the browser's Web Speech API",
        "Code is in a private GitHub repo and moving into a Claude Code workflow",
        "Known engineering issue being solved: unlocking audio on iPad"
      ],
      statusLong: "Prototype",
      link: "[PLACEHOLDER: demo link or video]",
      images: []                                         // screenshots, e.g. ["images/game-night-1.png", "images/game-night-2.png"]
    },
    {
      id: "game",
      title: "Game Night",
      status: "Prototype",
      color: "neutral",
      summary: "A family game built for the living-room TV. Mini-games designed by the whole family, with trivia topics added by us.",
      details: "A family game built for the living-room TV.",
      what: ["Family game built for up to 10 players: displayed on the TV and each player joins through the QR code"],
      how: ["Built with Claude Code"],
      statusLong: "Prototype",
      link: "[PLACEHOLDER: demo link or video]",
      images: []                                         // screenshots, e.g. ["images/game-night-1.png", "images/game-night-2.png"]
    },
    {
      id: "wet",
      title: "Wetlands of Hampton Roads",
      status: "[PLACEHOLDER: status]",
      color: "blue",
      contours: true,                                  // draws map contour lines behind the tile
      summary: "Interactive app that explains what wetlands are, how they function and what happens when they are filled or impacted without proper planning.",
      details: "Wetland science software built by a working Professional Wetland Delineator.",
      why: "Built on more than a decade of wetland delineation and Section 404 work in southeastern Virginia and northeastern North Carolina.",
      what: ["Interactive app that explains what wetlands are, how they function and what happens when they are filled or impacted without proper planning."],
      how: ["[PLACEHOLDER: how you built it with AI]"],
      statusLong: "[PLACEHOLDER: status]",
      link: "[PLACEHOLDER: demo link or video]",
      images: []                                         // screenshots, e.g. ["images/game-night-1.png", "images/game-night-2.png"]
    }
  ],

  /* ---------- Small tiles under the projects ---------- */
  aboutShort: "Environmental Consultant at MAP Environmental Inc. for 14+ years. Wetland scientist and project manager, bilingual in English & Spanish, homeschool dad.",
  buildChips: ["Validate first", "CLAUDE.md rules", "Verify before features", "Claude Code", "Xcode"],

  /* ---------- How I build section ---------- */
  processIntro: "A repeatable process for building with AI: validate first, write the rules down, check every build before adding features.",
  process: [
    { title: "Validate the idea",       text: "Each concept gets a dossier covering the competition, MVP scope and risks, plus a clear advance-or-kill gate before any code is written." },
    { title: "Write the rules down",    text: "Every app starts with its own repo and a CLAUDE.md that holds decisions, constraints and the definition of done." },
    { title: "Verify before features",  text: "A deterministic verification checklist runs before anything new ships. Fixes run as goals with clear exit criteria." },
    { title: "Right model, right job",  text: "The strongest model designs the system. Faster models handle routine iterations. Quality comes first." }
  ],
  tools: ["Claude Code", "Claude", "GitHub", "Playwright", "Netlify", "Web Speech API", "Xcode", "Adobe Firefly", "Gemini Imagen", "ArcGIS Online"],

  /* ---------- About section ---------- */
  quote: "Fourteen years learning the **land** by being in the field. Now I'm building the **tools**.",
  bio: [
    "I’m Andrew Pocta, Environmental Consultant, Project Manager and Professional Wetland Delineator at MAP Environmental Inc. in Hampton Roads, Virginia. App/Game/Tool creator, building things that can improve our lives. My work covers everything environmental: wetland delineations, Phase I and II Environmental Site Assessments, Joint Permit Applications, NEPA documentation and Section 404 permitting across southeastern Virginia and northeastern North Carolina.",
    "I'm also a father of three (two oldest are disabled and wheelchair users), board member of **SEEN**, a 501(c)(3) nonprofit serving families struggling with disability or cancer. Those roles keep showing me problems worth solving. AI lets one person with domain knowledge build real software for them."
  ],
  cv: [
    ["MAP Environmental Inc. · Owner & PWD", "2012 – now"],
    ["SEEN (501(c)(3)) · Board member", "2024 – now"],
    ["Virginia Commonwealth University · BA", "2010"],
    ["Languages", "English · Spanish"]
  ],

  /* ---------- Contact section ----------
     For email, put the plain address in "email" (example: "you@example.com"). */
  contactKicker: "Grant reviewers, collaborators, curious people",
  email: "andrew.c.pocta@gmail.com",
  links: [
    { label: "GitHub ↗",            url: "https://github.com/somethingaboutandrew-svg" },
    { label: "MAP Environmental ↗", url: "https://mapenvironmental.com" },
    { label: "LinkedIn ↗",          url: "https://www.linkedin.com/in/andrew-pocta-pwd-961b2859/" }
  ],

  footer: "© 2026 Andrew Pocta · Virginia Beach, VA"
};
