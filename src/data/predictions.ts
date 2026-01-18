export const FORTUNE_CATEGORIES = {
  FUTURE: "What's next for us?",
  DATE_NIGHT: "Date night idea",
  LOVE_LANGUAGE: "Our love language today",
  ADVENTURE: "Adventure prediction"
} as const;

export const FORTUNE_PREDICTIONS = {
  [FORTUNE_CATEGORIES.FUTURE]: [
    "A surprise romantic gesture is coming your way this week",
    "Your bond will grow stronger through shared adventures",
    "Deep conversations will lead to new understanding",
    "A special celebration of your love is on the horizon",
    "Together you'll overcome a small challenge and emerge stronger",
    "New opportunities for quality time will present themselves",
    "Your connection will inspire those around you",
    "A journey together will create lasting memories",
    "Mutual support will help you both achieve your dreams",
    "An unexpected moment will remind you why you fell in love",
    "Your partnership will reach new levels of trust and intimacy",
    "Shared laughter will light up your days ahead",
    "A meaningful gift will symbolize your growing bond",
    "Together you'll discover a new favorite place",
    "Your love story will write its next beautiful chapter",
    "Compliments and appreciation will flow freely between you",
    "A dream you share will begin to manifest",
    "Your emotional connection will deepen significantly",
    "New traditions will strengthen your relationship",
    "The stars align for romantic breakthrough moments",
    "Your teamwork will impress everyone, including yourselves"
  ],
  [FORTUNE_CATEGORIES.DATE_NIGHT]: [
    "Cook a new recipe together while dancing in the kitchen",
    "Stargaze at a romantic spot with blankets and hot cocoa",
    "Take a sunset walk hand-in-hand at the beach or park",
    "Have a picnic with all your favorite foods and music",
    "Recreate your first date with modern twists",
    "Try a dance class together and laugh at your mistakes",
    "Visit a museum or art gallery and discuss your favorites",
    "Go bowling or mini-golf with playful bets",
    "Have a game night with romantic prizes",
    "Take a scenic drive and discover new places",
    "Go ice skating or rollerblading holding hands",
    "Attend a local concert or live performance",
    "Have a spa night at home with massages and candles",
    "Go to a farmers market and cook what you find",
    "Take a pottery or art class together",
    "Go to an aquarium or zoo and act like kids again",
    "Have a movie marathon with themed snacks",
    "Go wine tasting or visit a brewery",
    "Take a sunset boat ride or gondola ride",
    "Have a progressive dinner through different restaurants"
  ],
  [FORTUNE_CATEGORIES.LOVE_LANGUAGE]: [
    "Today speaks the language of thoughtful surprises",
    "Quality time will be your love currency today",
    "Words of affirmation will flow naturally and sincerely",
    "Physical touch will communicate volumes of affection",
    "Acts of service will show your deep care",
    "Gift-giving will express your heart perfectly",
    "Your love language today is shared laughter",
    "Listening deeply will be your greatest gift",
    "Eye contact will speak the words your heart feels",
    "Small gestures will carry enormous meaning",
    "Patience and understanding will be your love language",
    "Vulnerability will strengthen your connection",
    "Playfulness will be your dialect of love today",
    "Support will be spoken through encouraging actions",
    "Your love language today is presence and attention",
    "Compliments will be your love vocabulary",
    "Shared dreams will be your love conversation",
    "Your love language is expressed through teamwork",
    "Today speaks in the language of gentle care",
    "Your love will be communicated through shared memories"
  ],
  [FORTUNE_CATEGORIES.ADVENTURE]: [
    "A spontaneous road trip awaits you both",
    "You'll discover a hidden gem in your own city",
    "An outdoor adventure will test and delight you",
    "A new hobby will become your shared passion",
    "You'll explore a place neither of you has been",
    "A challenge will bring out the best in your teamwork",
    "You'll create a story you'll tell for years",
    "An unexpected invitation will lead to adventure",
    "You'll master a new skill together",
    "A mystery will unfold that you'll solve as a team",
    "You'll find adventure in the most ordinary moment",
    "A seasonal activity will become your new tradition",
    "You'll venture outside your comfort zone together",
    "A friendly competition will spark excitement",
    "You'll explore nature and find yourselves",
    "An urban exploration will reveal surprises",
    "You'll embark on a culinary adventure",
    "A cultural experience will broaden your horizons",
    "You'll find magic in a familiar place",
    "Adventure will find you when you least expect it"
  ]
};

export const ZODIAC_SIGNS = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
] as const;

export const ZODIAC_DATES = {
  "Aries": { start: [3, 21], end: [4, 19] },
  "Taurus": { start: [4, 20], end: [5, 20] },
  "Gemini": { start: [5, 21], end: [6, 20] },
  "Cancer": { start: [6, 21], end: [7, 22] },
  "Leo": { start: [7, 23], end: [8, 22] },
  "Virgo": { start: [8, 23], end: [9, 22] },
  "Libra": { start: [9, 23], end: [10, 22] },
  "Scorpio": { start: [10, 23], end: [11, 21] },
  "Sagittarius": { start: [11, 22], end: [12, 21] },
  "Capricorn": { start: [12, 22], end: [1, 19] },
  "Aquarius": { start: [1, 20], end: [2, 18] },
  "Pisces": { start: [2, 19], end: [3, 20] }
} as const;

export const PERSONALITY_TRAITS = {
  creative: ["Creative", "Imaginative", "Artistic", "Innovative", "Inspired"],
  loyal: ["Loyal", "Devoted", "Faithful", "Committed", "Trustworthy"],
  adventurous: ["Adventurous", "Bold", "Daring", "Courageous", "Explorer"],
  caring: ["Caring", "Nurturing", "Compassionate", "Supportive", "Loving"],
  intelligent: ["Intelligent", "Smart", "Wise", "Insightful", "Brilliant"],
  funny: ["Funny", "Witty", "Humorous", "Playful", "Charming"],
  romantic: ["Romantic", "Passionate", "Affectionate", "Sweet", "Tender"],
  ambitious: ["Ambitious", "Driven", "Motivated", "Determined", "Focused"]
} as const;

export const RELATIONSHIP_STRENGTHS = [
  "Excellent communication and understanding",
  "Strong emotional connection and intimacy",
  "Shared values and life goals",
  "Mutual respect and admiration",
  "Great chemistry and attraction",
  "Supportive partnership through challenges",
  "Complementary personalities that balance each other",
  "Shared sense of humor and joy",
  "Trust and honesty in your relationship",
  "Ability to grow together as individuals and as a couple",
  "Deep friendship alongside romantic love",
  "Effective conflict resolution",
  "Shared dreams and aspirations",
  "Physical and emotional affection",
  "Teamwork in daily life",
  "Appreciation for each other's uniqueness",
  "Patience and forgiveness",
  "Adventure and excitement together",
  "Comfort and security in each other",
  "Inspiring each other to be better"
];

export const GROWTH_AREAS = [
  "Continue building deeper emotional intimacy",
  "Explore new shared experiences and adventures",
  "Practice even more open communication",
  "Support each other's individual growth",
  "Create more quality time together",
  "Learn more about each other's love languages",
  "Balance personal space with togetherness",
  "Develop shared financial goals",
  "Strengthen your conflict resolution skills",
  "Plan for your future together",
  "Practice more spontaneous romance",
  "Build stronger friendship foundation",
  "Explore spiritual connection together",
  "Improve work-life balance as a couple",
  "Create meaningful traditions",
  "Express appreciation more frequently",
  "Learn more about each other's past",
  "Support each other's career goals",
  "Build stronger family connections",
  "Practice more patience and understanding"
];

export const HOROSCOPE_PREDICTIONS = [
  "Love surrounds you like a warm embrace today",
  "Your connection sparkles with extra magic",
  "Romance blooms in unexpected moments",
  "Your hearts beat in perfect harmony",
  "Love's energy flows strongly between you",
  "The stars bless your union with joy",
  "Passion and tenderness dance together",
  "Your love story shines brightly today",
  "Emotional depths bring you closer",
  "Laughter and love fill your days",
  "Your bond strengthens through understanding",
  "Romantic gestures will be especially meaningful",
  "Love's adventure calls to you both",
  "Your hearts speak the same language",
  "Tenderness and passion unite perfectly",
  "Love's mystery reveals beautiful truths",
  "Your connection feels divinely guided",
  "Romance flourishes in your presence",
  "Love's light illuminates your path together",
  "Your souls recognize their perfect match"
];

export const LUCKY_DAYS = [
  "Monday", "Tuesday", "Wednesday", "Thursday", 
  "Friday", "Saturday", "Sunday"
];

export const RECOMMENDED_ACTIVITIES = [
  "Watch the sunset together",
  "Cook a romantic dinner",
  "Take a moonlit walk",
  "Share your dreams and goals",
  "Write love letters to each other",
  "Dance under the stars",
  "Have a deep conversation",
  "Plan your next adventure",
  "Create something together",
  "Practice gratitude for each other",
  "Share childhood memories",
  "Plan a surprise date",
  "Learn something new together",
  "Visit a meaningful place",
  "Take couples photos",
  "Read to each other",
  "Meditate together",
  "Play a romantic game",
  "Share a bath or spa experience",
  "Plan your future together"
];

export const LOVE_EMOJIS = [
  "💕", "💖", "💗", "💓", "💝", "💘", "💞", "💟", 
  "❤️", "🧡", "💛", "💚", "💙", "💜", "🤍", "🤎",
  "🥰", "😍", "🤗", "💑"
];