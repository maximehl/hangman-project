/**
 * Created by Maxime on 10/3/17.
 */

/*This list of easy words came from http://www.manythings.org/vocabulary/lists/l/
 * From the three "Qualities," "General Things," and "Picturable Words" lists.
 * Processed by me in TextEdit.
 */
EASY_WORDS = ["ACCOUNT", "ACT", "ADDITION", "ADJUSTMENT", "ADVERTISEMENT", "AGREEMENT", "AIR",
    "AMOUNT", "AMUSEMENT", "ANIMAL", "ANSWER", "APPARATUS", "APPROVAL", "ARGUMENT",
    "ART", "ATTACK", "ATTEMPT", "ATTENTION", "ATTRACTION", "AUTHORITY", "BACK",
    "BALANCE", "BASE", "BEHAVIOR", "BELIEF", "BIRTH", "BIT", "BITE", "BLOOD", "BLOW",
    "BODY", "BRASS", "BREAD", "BREATH", "BROTHER", "BUILDING", "BURN", "BURST",
    "BUSINESS", "BUTTER", "CANVAS", "CARE", "CAUSE", "CHALK", "CHANCE", "CHANGE",
    "CLOTH", "COAL", "COLOR", "COMFORT", "COMMITTEE", "COMPANY", "COMPARISON",
    "COMPETITION", "CONDITION", "CONNECTION", "CONTROL", "COOK", "COPPER", "COPY",
    "CORK", "COTTON", "COUGH", "COUNTRY", "COVER", "CRACK", "CREDIT", "CRIME", "CRUSH",
    "CRY", "CURRENT", "CURVE", "DAMAGE", "DANGER", "DAUGHTER", "DAY", "DEATH", "DEBT",
    "DECISION", "DEGREE", "DESIGN", "DESIRE", "DESTRUCTION", "DETAIL", "DEVELOPMENT",
    "DIGESTION", "DIRECTION", "DISCOVERY", "DISCUSSION", "DISEASE", "DISGUST",
    "DISTANCE", "DISTRIBUTION", "DIVISION", "DOUBT", "DRINK", "DRIVING", "DUST", "EARTH",
    "EDGE", "EDUCATION", "EFFECT", "END", "ERROR", "EVENT", "EXAMPLE", "EXCHANGE",
    "EXISTENCE", "EXPANSION", "EXPERIENCE", "EXPERT", "FACT", "FALL", "FAMILY", "FATHER",
    "FEAR", "FEELING", "FICTION", "FIELD", "FIGHT", "FIRE", "FLAME", "FLIGHT", "FLOWER",
    "FOLD", "FOOD", "FORCE", "FORM", "FRIEND", "FRONT", "FRUIT", "GLASS", "GOLD",
    "GOVERNMENT", "GRAIN", "GRASS", "GRIP", "GROUP", "GROWTH", "GUIDE", "HARBOR",
    "HARMONY", "HATE", "HEARING", "HEAT", "HELP", "HISTORY", "HOLE", "HOPE", "HOUR",
    "HUMOR", "ICE", "IDEA", "IMPULSE", "INCREASE", "INDUSTRY", "INK", "INSECT",
    "INSTRUMENT", "INSURANCE", "INTEREST", "INVENTION", "IRON", "JELLY", "JOIN",
    "JOURNEY", "JUDGE", "JUMP", "KICK", "KISS", "KNOWLEDGE", "LAND", "LANGUAGE", "LAUGH",
    "LAW", "LEAD", "LEARNING", "LEATHER", "LETTER", "LEVEL", "LIFT", "LIGHT", "LIMIT",
    "LINEN", "LIQUID", "LIST", "LOOK", "LOSS", "LOVE", "MACHINE", "MAN", "MANAGER",
    "MARK", "MARKET", "MASS", "MEAL", "MEASURE", "MEAT", "MEETING", "MEMORY", "METAL",
    "MIDDLE", "MILK", "MIND", "MINE", "MINUTE", "MIST", "MONEY", "MONTH", "MORNING",
    "MOTHER", "MOTION", "MOUNTAIN", "MOVE", "MUSIC", "NAME", "NATION", "NEED", "NEWS",
    "NIGHT", "NOISE", "NOTE", "NUMBER", "OBSERVATION", "OFFER", "OIL", "OPERATION",
    "OPINION", "ORDER", "ORGANIZATION", "ORNAMENT", "OWNER", "PAGE", "PAIN", "PAINT",
    "PAPER", "PART", "PASTE", "PAYMENT", "PEACE", "PERSON", "PLACE", "PLANT", "PLAY",
    "PLEASURE", "POINT", "POISON", "POLISH", "PORTER", "POSITION", "POWDER", "POWER",
    "PRICE", "PRINT", "PROCESS", "PRODUCE", "PROFIT", "PROPERTY", "PROSE", "PROTEST",
    "PULL", "PUNISHMENT", "PURPOSE", "PUSH", "QUALITY", "QUESTION", "RAIN", "RANGE",
    "RATE", "RAY", "REACTION", "READING", "REASON", "RECORD", "REGRET", "RELATION",
    "RELIGION", "REPRESENTATIVE", "REQUEST", "RESPECT", "REST", "REWARD", "RHYTHM",
    "RICE", "RIVER", "ROAD", "ROLL", "ROOM", "RUB", "RULE", "RUN", "SALT", "SAND",
    "SCALE", "SCIENCE", "SEA", "SEAT", "SECRETARY", "SELECTION", "SELF", "SENSE",
    "SERVANT", "SEX", "SHADE", "SHAKE", "SHAME", "SHOCK", "SIDE", "SIGN", "SILK",
    "SILVER", "SISTER", "SIZE", "SKY", "SLEEP", "SLIP", "SLOPE", "SMASH", "SMELL",
    "SMILE", "SMOKE", "SNEEZE", "SNOW", "SOAP", "SOCIETY", "SON", "SONG", "SORT",
    "SOUND", "SOUP", "SPACE", "STAGE", "START", "STATEMENT", "STEAM", "STEEL", "STEP",
    "STITCH", "STONE", "STOP", "STORY", "STRETCH", "STRUCTURE", "SUBSTANCE", "SUGAR",
    "SUGGESTION", "SUMMER", "SUPPORT", "SURPRISE", "SWIM", "SYSTEM", "TALK", "TASTE",
    "TAX", "TEACHING", "TENDENCY", "TEST", "THEORY", "THING", "THOUGHT", "THUNDER",
    "TIME", "TIN", "TOP", "TOUCH", "TRADE", "TRANSPORT", "TRICK", "TROUBLE", "TURN",
    "TWIST", "UNIT", "USE", "VALUE", "VERSE", "VESSEL", "VIEW", "VOICE", "WALK", "WAR",
    "WASH", "WASTE", "WATER", "WAVE", "WAX", "WAY", "WEATHER", "WEEK", "WEIGHT", "WIND",
    "WINE", "WINTER", "WOMAN", "WOOD", "WOOL", "WORD", "WORK", "WOUND", "WRITING",
    "YEAR", "ANGLE", "ANT", "APPLE", "ARCH", "ARM", "ARMY", "BABY", "BAG", "BALL",
    "BAND", "BASIN", "BASKET", "BATH", "BED", "BEE", "BELL", "BERRY", "BIRD", "BLADE",
    "BOARD", "BOAT", "BONE", "BOOK", "BOOT", "BOTTLE", "BOX", "BOY", "BRAIN", "BRAKE",
    "BRANCH", "BRICK", "BRIDGE", "BRUSH", "BUCKET", "BULB", "BUTTON", "CAKE", "CAMERA",
    "CARD", "CART", "CARRIAGE", "CAT", "CHAIN", "CHEESE", "CHEST", "CHIN", "CHURCH",
    "CIRCLE", "CLOCK", "CLOUD", "COAT", "COLLAR", "COMB", "CORD", "COW", "CUP",
    "CURTAIN", "CUSHION", "DOG", "DOOR", "DRAIN", "DRAWER", "DRESS", "DROP", "EAR",
    "EGG", "ENGINE", "EYE", "FACE", "FARM", "FEATHER", "FINGER", "FISH", "FLAG", "FLOOR",
    "FLY", "FOOT", "FORK", "FOWL", "FRAME", "GARDEN", "GIRL", "GLOVE", "GOAT", "GUN",
    "HAIR", "HAMMER", "HAND", "HAT", "HEAD", "HEART", "HOOK", "HORN", "HORSE",
    "HOSPITAL", "HOUSE", "ISLAND", "JEWEL", "KETTLE", "KEY", "KNEE", "KNIFE", "KNOT",
    "LEAF", "LEG", "LIBRARY", "LINE", "LIP", "LOCK", "MAP", "MATCH", "MONKEY", "MOON",
    "MOUTH", "MUSCLE", "NAIL", "NECK", "NEEDLE", "NERVE", "NET", "NOSE", "NUT", "OFFICE",
    "ORANGE", "OVEN", "PARCEL", "PEN", "PENCIL", "PICTURE", "PIG", "PIN", "PIPE",
    "PLANE", "PLATE", "PLOW", "POCKET", "POT", "POTATO", "PRISON", "PUMP", "RAIL", "RAT",
    "RECEIPT", "RING", "ROD", "ROOF", "ROOT", "SAIL", "SCHOOL", "SCISSORS", "SCREW",
    "SEED", "SHEEP", "SHELF", "SHIP", "SHIRT", "SHOE", "SKIN", "SKIRT", "SNAKE", "SOCK",
    "SPADE", "SPONGE", "SPOON", "SPRING", "SQUARE", "STAMP", "STAR", "STATION", "STEM",
    "STICK", "STOCKING", "STOMACH", "STORE", "STREET", "SUN", "TABLE", "TAIL", "THREAD",
    "THROAT", "THUMB", "TICKET", "TOE", "TONGUE", "TOOTH", "TOWN", "TRAIN", "TRAY",
    "TREE", "TROUSERS", "UMBRELLA", "WALL", "WATCH", "WHEEL", "WHIP", "WHISTLE",
    "WINDOW", "WING", "WIRE", "WORM", "ABLE", "ACID", "ANGRY", "AUTOMATIC", "AWAKE",
    "BAD", "BEAUTIFUL", "BENT", "BITTER", "BLACK", "BLUE", "BOILING", "BRIGHT", "BROKEN",
    "BROWN", "CERTAIN", "CHEAP", "CHEMICAL", "CHIEF", "CLEAN", "CLEAR", "COLD", "COMMON",
    "COMPLETE", "COMPLEX", "CONSCIOUS", "CRUEL", "CUT", "DARK", "DEAD", "DEAR", "DEEP",
    "DELICATE", "DEPENDENT", "DIFFERENT", "DIRTY", "DRY", "EARLY", "ELASTIC", "ELECTRIC",
    "EQUAL", "FALSE", "FAT", "FEEBLE", "FEMALE", "FERTILE", "FIRST", "FIXED", "FLAT",
    "FOOLISH", "FREE", "FREQUENT", "FULL", "FUTURE", "GENERAL", "GOOD", "GRAY", "GREAT",
    "GREEN", "HANGING", "HAPPY", "HARD", "HEALTHY", "HIGH", "HOLLOW", "ILL", "IMPORTANT",
    "KIND", "LAST", "LATE", "LEFT", "LIKE", "LIVING", "LONG", "LOOSE", "LOUD", "LOW",
    "MALE", "MARRIED", "MATERIAL", "MEDICAL", "MILITARY", "MIXED", "NARROW", "NATURAL",
    "NECESSARY", "NEW", "NORMAL", "OLD", "OPEN", "OPPOSITE", "PARALLEL", "PAST",
    "PHYSICAL", "POLITICAL", "POOR", "POSSIBLE", "PRESENT", "PRIVATE", "PROBABLE",
    "PUBLIC", "QUICK", "QUIET", "READY", "RED", "REGULAR", "RESPONSIBLE", "RIGHT",
    "ROUGH", "ROUND", "SAD", "SAFE", "SAME", "SECOND", "SECRET", "SEPARATE", "SERIOUS",
    "SHARP", "SHORT", "SHUT", "SIMPLE", "SLOW", "SMALL", "SMOOTH", "SOFT", "SOLID",
    "SPECIAL", "STICKY", "STIFF", "STRAIGHT", "STRANGE", "STRONG", "SUDDEN", "SWEET",
    "TALL", "THICK", "THIN", "TIGHT", "TIRED", "TRUE", "VIOLENT", "WAITING", "WARM",
    "WET", "WHITE", "WIDE", "WISE", "WRONG", "YELLOW", "YOUNG"];
/*This list of hard words came from https://satvocabulary.us/INDEX.ASP?CATEGORY=CHALLENGING2
 * and from https://satvocabulary.us/INDEX.ASP?CATEGORY=CHALLENGING1
 * Processed by me in Google Sheets and TextEdit.
 */
HARD_WORDS = ["AERATE", "AFFECTATION", "AKIMBO", "APEX", "APLOMB", "ARABLE", "ARBOREAL",
    "BELEAGUER", "BOWDLERIZE", "BROMIDE", "BUCOLIC", "CAPTIOUS", "CHICANERY",
    "CHIMERICAL", "COIN", "CORRUGATED", "CUPIDITY", "DALLIANCE", "DELIMIT", "DESPOILED",
    "DILETTANTE", "DIRGE", "EDIFY", "EFFUSIVE", "ELAN", "EMEND", "EUPHEMISM", "EUPHONY",
    "EVINCE", "EXECRATE", "EXIGUOUS", "EXPEDITIOUS", "EXPUNGE", "EXPURGATE", "EXTANT",
    "EXTIRPATION", "FALLOW", "FECUND", "FELL", "FELONIOUS", "FLAY", "FLOTSAM", "GESTATE",
    "GLUT", "GREENHORN", "GUBERNATORIAL", "HALCYON", "HARBINGER", "HUSBANDRY",
    "INDIGENT", "INQUISITION", "INSOUCIANT", "JUGGERNAUT", "LAMBASTE", "LASSITUDE",
    "LIONIZE", "MALFEASANCE", "MARTINET", "MISSIVE", "MYOPIC", "OBSTREPEROUS",
    "OCCLUSION", "ODORIFEROUS", "OPPUGN", "PANACEA", "PANACHE", "PANEGYRIZE",
    "PAROCHIAL", "PERFIDIOUS", "PORTENT", "PRESAGE", "PROCLIVITY", "PROGNOSTICATOR",
    "PROLETARIAN", "PROSPECTUS", "QUAGMIRE", "QUASH", "QUERULOUS", "RACONTEUR",
    "REDOUBLE", "REFRACTORY", "REMUNERATE", "RESTITUTION", "RIBALD", "SALVO", "SHOPWORN",
    "SINECURE", "SOPORIFIC", "SPATE", "STOCKPILE", "SUBTERFUGE", "SUPINE", "SYMBIOSIS",
    "TALISMAN", "TEMERARIOUS", "TENDENTIOUS", "TENEBROUS", "TEPID", "TRAVAIL",
    "VAGABOND", "VAGARY", "VAINGLORIOUS", "VERTIGINOUS", "VISCID", "VITIATE",
    "VOCIFEROUS", "VOLITION", "WATERSHED", "ZEPHYR", "ABSTEMIOUS", "ACCEDE",
    "ACQUISITIVE", "ACRID", "AGNOSTIC", "ALLAY", "ALLUSION", "AMORPHOUS", "ANARCHIST",
    "ANNOTATE", "ANTIPODAL", "APOCRYPHAL", "APROPOS", "ARID", "ASPERSION", "AURAL",
    "AVOCATION", "BANE", "BEGUILE", "BELABOR", "BENT", "BEREAVEMENT", "BOON", "BRAVADO",
    "BRUSQUE", "BUNGLER", "CALUMNIATE", "CAPITULATE", "CARPING", "CATHARSIS", "CHARY",
    "CIRCUMLOCUTION", "CIRCUMSPECT", "COMPLAISANT", "COMPLICITY", "COMPORTMENT",
    "CONDUCIVE", "CONFLATE", "CONSECRATION", "CONSONANCE", "CONSPICUOUS", "CONSUMMATE",
    "CONTIGUOUS", "CONTINGENCY", "CONTRABAND", "CONTRITE", "COROLLARY", "CORPULENCE",
    "CRAVEN", "DECRY", "DEMAGOGUE", "DENUDED", "DESICCATE", "DIATRIBE", "DISARMING",
    "DISENFRANCHISE", "DISSEMBLER", "DISSOLUTE", "DISTENSION", "DRACONIAN", "DROUGHT",
    "EFFRONTERY", "ELEGY", "EMACIATED", "EMANCIPATE", "ENDEMIC", "ENFRANCHISE",
    "ENGENDER", "EPIDEMIC", "ESCHEW", "EVANESCENT", "EVENTUALITY", "EXCISE", "EXCORIATE",
    "EXCULPATE", "EXONERATE", "EXPEDITE", "EXTEMPORIZE", "FACETIOUS", "FALLIBLE",
    "FEIGN", "FINAGLE", "FLAG", "FLANK", "FOIL", "FORBEARANCE", "GALVANIZE", "GARRULOUS",
    "GINGERLY", "GLIB", "GOAD", "GRANDILOQUENT", "GRATIFICATION", "GRATUITOUS",
    "GREGARIOUS", "GUILE", "GUILELESS", "HARANGUING", "HARBOR", "HEDONIST", "HEEDFUL",
    "HYPERBOLE", "ICONOCLASTIC", "IDEALOGUE", "ILLUSORY", "IMBUE", "IMPECUNIOUS",
    "IMPEDIMENT", "IMPERTINENT", "IMPETUS", "IMPLACABLE", "IMPREGNABLE", "IMPUGN",
    "INCARNATE", "INCENSE", "INCONTROVERTIBLE", "INCORRIGIBLE", "INDEFATIGABLE",
    "INDISPOSED", "INDUCTION", "INEXORABLE", "INFELICITOUS", "INSIDIOUS", "INSOLVENT",
    "INSUPERABLE", "INSURGENT", "INSURRECTION", "INTONATION", "INTRACTABLE",
    "INTRANSIGENCE", "IRASCIBLE", "IREFUL", "IRRESOLUTE", "ITINERANT", "JUXTAPOSITION",
    "LABORIOUS", "LABYRINTH", "LAMPOON", "LETHARGIC", "LEVITY", "LIBELOUS", "LICENTIOUS",
    "LITIGIOUS", "LOCALIZE", "LOQUACIOUS", "LUGUBRIOUS", "MACHINATION", "MAGISTERIAL",
    "MALADY", "MALIGN", "MANIFESTO", "MAVERICK", "MEANDER", "MELODRAMA", "MEMBRANOUS",
    "METAMORPHOSE", "MISANTHROPE", "MISCREANT", "MISNOMER", "MOLLIFY", "MUNIFICENT",
    "MYRIAD", "NADIR", "NARCISSIST", "NETTLE", "NONPARTISAN", "NULLIFY", "OBFUSCATE",
    "OBLIVION", "OBSEQUIOUS", "ODIOUS", "ONUS", "OPENHANDED", "OPPORTUNE", "OSMOSIS",
    "OSSIFY", "OSTENTATIOUS", "OSTRACIZE", "PALL", "PALLID", "PALTRY", "PANDEMIC",
    "PARAGON", "PARIAH", "PARSIMONIOUS", "PARTICULARITY", "PATHOS", "PECUNIOUS",
    "PEDAGOGY", "PENURY", "PERENNIAL", "PERNICIOUS", "PERSPICACIOUS", "PESTILENCE",
    "PHLEGMATIC", "PITHY", "PLATITUDE", "PLATITUDINOUS", "PLAUDIT", "PLEBIAN",
    "POLARIZE", "PONDEROUS", "POPULACE", "POPULOUS", "PREDILECTION", "PREMONITION",
    "PRESCIENT", "PRESUMPTION", "PRESUMPTIVE", "PRETENSION", "PRODIGAL", "PROFANE",
    "PROFLIGATE", "PROPITIATE", "PROSTRATE", "PUGNACIOUS", "QUANDARY", "QUIESCENT",
    "RAREFY", "REBUFF", "RECOURSE", "RECRIMINATION", "REMISSION", "RENEGADE", "REPLETE",
    "REPRIEVE", "REPROVE", "RESPITE", "RESPLENDENT", "RESURGENT", "RHAPSODIZE",
    "SACCHARINE", "SACRILEGIOUS", "SACROSANCT", "SALUTARY", "SARDONIC", "SCOUR",
    "SECLUSION", "SEDITIOUS", "SEDULOUS", "SERMONIZE", "SKINFLINTY", "SKIRT", "SLEIGHT",
    "SLOVENLY", "SOLEMNIZE", "SOVEREIGN", "SPARENESS", "SPECIOUS", "SPORTIVE",
    "STALWART", "STIPULATE", "STOIC", "STOLID", "STRATIFIED", "STYMIE", "SUBJUGATE",
    "SUPPOSITION", "SURREPTITIOUS", "SWOON", "SYNCHRONY", "SYNERGY", "TACIT", "TACITURN",
    "TANDEM", "TANTAMOUNT", "TAWDRY", "TEMPESTUOUS", "TIMOROUS",
    "TITILLATING", "TREACLY", "TREMULOUS", "TRENCHANT", "TROVE", "UNASSUMING",
    "UNDEFILED", "UNSIGHTLY", "UPBRAID", "VALOROUS", "VENERATE", "VERITY", "VERVE",
    "VIGNETTE", "VILIFY", "VITRIOLIC", "VITUPERATIVE", "VOLUBLE", "WINNOW", "WITTICISM",
    "ZENITH"];
HANGMAN_IMAGES =["d/d6/Hangman-6.png", "6/6b/Hangman-5.png", "2/27/Hangman-4.png",
    "9/97/Hangman-3.png", "7/70/Hangman-2.png", "3/30/Hangman-1.png", "8/8b/Hangman-0.png"];
GUESSES_LEFT_MESSAGES = ["A man just died because of you. I hope you&#8217re happy.",
    "1 guess left? That was altogether too close.", "2 guesses left? That was a close one.",
    "3 guesses left? Not bad.", "4 guesses left. Well done!", "5 guesses left. He was never in any danger.",
    "Missed not a single letter? You must be using cheat codes."];
LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var nonGuessedLetters;
var guessedLetters;
var guessesLeft;
var secret;
var finish;

function startGame(){
    guessesLeft = 6;
    nonGuessedLetters = LETTERS.slice(0);
    guessedLetters = [];
    setImage(guessesLeft);
    finish = 0;
    document.getElementById("guesses-left").innerHTML = "Guesses left: " + guessesLeft;
    document.getElementById("start-button").innerHTML = "<span title='I&#8217m giving up.'>Restart game!</span>";
    document.getElementById("guessed-letters").innerHTML = "";
    document.getElementById("letter-select").innerHTML = buildSelectList(nonGuessedLetters);
    document.getElementById("guess-title").innerHTML= "Guess the letters in this word:";
    document.getElementById("letter-select").style.display = "block";
    document.getElementById("guess-button").style.display = "block";
    var list = parseInt(document.getElementById("difficulty").value);
    if(list===1){
        secret = EASY_WORDS[Math.floor(Math.random()*(EASY_WORDS.length))];
    }else{
        secret = HARD_WORDS[Math.floor(Math.random()*(HARD_WORDS.length))];
    }
    console.log(secret);
    printWord(secret);
}

function printWord(word){
    var printout = "";
    var correctLetters = 0;
    for (var num = 0; num<word.length; num++){
        if(guessedLetters.indexOf(word[num])>=0){
            printout += word[num] + " ";
            correctLetters++;
        }else{
            printout += "_ ";
        }
    }
    document.getElementById("word").innerHTML = printout;
    if (correctLetters===word.length){
        finish = 1;
    }
}

function guessLetter(){
    var guessedLetter = document.getElementById("letter-select").value;
    guessedLetters.push(guessedLetter);
    var place = nonGuessedLetters.indexOf(guessedLetter);
    nonGuessedLetters.splice(place, 1);
    document.getElementById("letter-select").innerHTML = buildSelectList(nonGuessedLetters);
    if(!(secret.indexOf(guessedLetter)>=0)){
        guessesLeft--;
        setImage(guessesLeft);
        document.getElementById("guesses-left").innerHTML = "Guesses left: " + guessesLeft;
    }
    printWord(secret);
    if(guessesLeft===0){
        document.getElementById("guess-title").innerHTML = "You've  Lost!";
        document.getElementById("start-button").innerHTML = "<span title='You&#8217ve just killed " +
            "a man for fun, you murderer. How can you just start playing another game?'>Start a new game!</span>";
    }else if(finish===1){
        document.getElementById("guess-title").innerHTML = "You've  Won!";
        document.getElementById("start-button").innerHTML = "<span title='Let&#8217s get hanging!'>Start a new game!</span>";
    }else{
        document.getElementById("guessed-letters").innerHTML = "You've guessed the letters: " + guessedLetters.toString();
    }
    if(guessesLeft===0 || finish===1){
        document.getElementById("word").innerHTML = "The word was: " + secret;
        document.getElementById("letter-select").style.display = "none";
        document.getElementById("guess-button").style.display = "none";
        document.getElementById("guessed-letters").innerHTML = "You guessed the letters: " + guessedLetters.toString();
        document.getElementById("guesses-left").innerHTML = "<span title='" + GUESSES_LEFT_MESSAGES[guessesLeft] +
            "'>Guesses left: " + guessesLeft + "</span>";
    }
}

function buildSelectList(letters){
    var str = "";
    for (var count = 0; count < letters.length; count++){
        str += ("<option value='" + letters[count] + "'>" + letters[count]
        + "</option>");
    }
    return str;
}

function setImage(number){
    document.getElementById("image").innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/" +
        HANGMAN_IMAGES[number] + "'>";
}