/* =====================================================================
   SITE CONTENT: edit the words on your website here.
   =====================================================================
   HOW TO EDIT
   - Change only the text between the "quotes".
   - Keep every quote mark, comma and bracket where it is.
   - To make words bold, wrap them in double stars:  **like this**
   - Anything that still says [PLACEHOLDER: ...] shows on the site as an
     amber tag, so you can see what still needs filling in.
   - After you save (Commit on GitHub), the live site updates in ~1 minute.
   ===================================================================== */

window.SITE = {

  /* ---------- Top of the page ---------- */
  name: "Andrew Pocta",
  role: "Builder · Virginia Beach, VA",
  headlineWords: ["apps", "games", "tools"],          // the word that rotates in "I build useful ___ with AI."
  intro: "Wetland scientist and business owner. I design and ship software for the people around me: families, kids learning at home and field crews.",

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
      summary: "An always-on wall-tablet calendar and AI family assistant, with phone companion apps and a Mac app.",
      details: "An always-on wall-tablet calendar and organizer plus an AI family assistant, with phone companion apps.",
      what: [
        "Runs on a dedicated iPad on the wall, with the same app on Mac",
        "Setup wizard starts in voice mode and learns about each family member",
        "Brings the family's calendars, iCloud and Gmail together; email integration is in the first build",
        "Voice control for the adults in the household, chosen during setup"
      ],
      how: [
        "Built in Claude Code with a CLAUDE.md, a decisions log and a verification skill",
        "v1 is a private build for my own family and has to work fully before any public release",
        "App Store release and linking an AI subscription are planned for later versions"
      ],
      statusLong: "In build · v1, private family release first",
      link: "[PLACEHOLDER: demo link or video]"
    },
    {
      id: "math",
      title: "Math Mystic",
      status: "Prototype · try it",
      color: "violet",
      demo: true,                                      // shows the playable 7 × 8 demo on the tile
      summary: "Voice-based math practice. Kids say the answer out loud.",
      details: "Voice-based math practice for kids. They answer out loud and the app listens.",
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
      link: "[PLACEHOLDER: demo link or video]"
    },
    {
      id: "game",
      title: "Game Night",
      status: "[PLACEHOLDER: status]",
      color: "neutral",
      summary: "A family game built for the living-room TV. [PLACEHOLDER: one-line description]",
      details: "A family game built for the living-room TV.",
      what: ["[PLACEHOLDER: what the game is and how a family plays it]"],
      how: ["[PLACEHOLDER: how you built it with AI]"],
      statusLong: "[PLACEHOLDER: status]",
      link: "[PLACEHOLDER: demo link or video]"
    },
    {
      id: "wet",
      title: "Wetlands of Hampton Roads",
      status: "[PLACEHOLDER: status]",
      color: "blue",
      contours: true,                                  // draws map contour lines behind the tile
      summary: "Wetland science software from a working Professional Wetland Delineator. [PLACEHOLDER: what it does]",
      details: "Wetland science software built by a working Professional Wetland Delineator.",
      why: "Built on more than a decade of wetland delineation and Section 404 work in southeastern Virginia and northeastern North Carolina.",
      what: ["[PLACEHOLDER: what the app does and who uses it]"],
      how: ["[PLACEHOLDER: how you built it with AI]"],
      statusLong: "[PLACEHOLDER: status]",
      link: "[PLACEHOLDER: demo link or video]"
    }
  ],

  /* ---------- Small tiles under the projects ---------- */
  aboutShort: "Owner of MAP Environmental since 2012. Wetland scientist, bilingual, homeschool dad.",
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
  quote: "Fourteen years reading the **land** in the field. Now I'm building the **tools**.",
  bio: [
    "I'm **Andrew Pocta**. I founded **MAP Environmental Inc.** in Hampton Roads, Virginia, in 2012, and I still run it as owner, project manager and **Professional Wetland Delineator**. The work covers wetland delineations, Phase I and II Environmental Site Assessments, Joint Permit Applications, NEPA documentation and Section 404 permitting across southeastern Virginia and northeastern North Carolina.",
    "I'm also a homeschool parent and a board member of **SEEN**, a 501(c)(3) nonprofit. Those roles keep showing me problems worth solving. AI lets one person with domain knowledge build real software for them."
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
  email: "[PLACEHOLDER: email]",
  links: [
    { label: "GitHub ↗",            url: "https://github.com/apocta-stack" },
    { label: "MAP Environmental ↗", url: "https://mapenvironmental.com" },
    { label: "[PLACEHOLDER: LinkedIn]", url: "" }
  ],

  footer: "© 2026 Andrew Pocta · Virginia Beach, VA"
};
