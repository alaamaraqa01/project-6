const countriesData = [
	{
		name: 'Afghanistan',
		capital: 'Kabul',
		languages: ['Pashto', 'Uzbek', 'Turkmen'],
		population: 27657145,
		flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Afghanistan_%281928%29.svg/1163px-Flag_of_Afghanistan_%281928%29.svg.png",
		currency: 'Afghan afghani'
	},
	{
		name: 'Åland Islands',
		capital: 'Mariehamn',
		languages: ['Swedish'],
		population: 28875,
		flag: 'https://www.crwflags.com/fotw/images/a/ax.gif',
		currency: 'Euro'
	},
	{
		name: 'Albania',
		capital: 'Tirana',
		languages: ['Albanian'],
		population: 2886026,
		flag: 'https://www.worldometers.info//img/flags/small/tn_al-flag.gif',
		currency: 'Albanian lek'
	},
	{
		name: 'Algeria',
		capital: 'Algiers',
		languages: ['Arabic'],
		population: 40400000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ag-flag.gif',
		currency: 'Algerian dinar'
		
	},
	{
		name: 'American Samoa',
		capital: 'Pago Pago',
		languages: ['English', 'Samoan'],
		population: 57100,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Flag_of_American_Samoa.svg',
		currency: 'United State Dollar'
	},
	{
		name: 'Andorra',
		capital: 'Andorra la Vella',
		languages: ['Catalan'],
		population: 78014,
		flag: 'https://www.worldometers.info//img/flags/small/tn_an-flag.gif',
		currency: 'Euro'
	},
	{
		name: 'Angola',
		capital: 'Luanda',
		languages: ['Portuguese'],
		population: 25868000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ao-flag.gif',
		currency: 'Angolan kwanza'
	},
	{
		name: 'Anguilla',
		capital: 'The Valley',
		languages: ['English'],
		population: 13452,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_the_Governor_of_Anguilla.svg',
		currency: 'East Caribbean dollar'
	},
	{
		name: 'Antarctica',
		capital: '',
		languages: ['English', 'Russian'],
		population: 1000,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Proposed_flag_of_Antarctica_%28Graham_Bartram%29.svg',
		currency: 'Australian dollar'
	},
	{
		name: 'Antigua and Barbuda',
		capital: "Saint John's",
		languages: ['English'],
		population: 86295,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ac-flag.gif',
		currency: 'East Caribbean dollar'
	},
	{
		name: 'Argentina',
		capital: 'Buenos Aires',
		languages: ['Spanish', 'Guaraní'],
		population: 43590400,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ar-flag.gif',
		currency: 'Argentine peso'
	},
	{
		name: 'Armenia',
		capital: 'Yerevan',
		languages: ['Armenian', 'Russian'],
		population: 2994400,
		flag: 'https://www.worldometers.info//img/flags/small/tn_am-flag.gif',
		currency: 'Armenian dram'
	},
	{
		name: 'Aruba',
		capital: 'Oranjestad',
		languages: ['Dutch', '(Eastern) Punjabi'],
		population: 107394,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Aruba.svg',
		currency: 'Aruban florin'
	},
	{
		name: 'Australia',
		capital: 'Canberra',
		languages: ['English'],
		population: 24117360,
		flag: 'https://www.worldometers.info//img/flags/small/tn_as-flag.gif',
		currency: 'Australian dollar',
	},
	{
		name: 'Austria',
		capital: 'Vienna',
		languages: ['German'],
		population: 8725931,
		flag: 'https://www.worldometers.info//img/flags/small/tn_au-flag.gif',
		currency: 'Euro'
	},
	{
		name: 'Azerbaijan',
		capital: 'Baku',
		languages: ['Azerbaijani'],
		population: 9730500,
		flag: 'https://www.worldometers.info//img/flags/small/tn_aj-flag.gif',
		currency: 'Azerbaijani manat'
	},
	{
		name: 'Bahamas',
		capital: 'Nassau',
		languages: ['English'],
		population: 378040,
		flag: 'https://www.worldometers.info//img/flags/small/tn_bf-flag.gif',
		currency: 'Bahamian dollar'
	},
	{
		name: 'Bahrain',
		capital: 'Manama',
		languages: ['Arabic'],
		population: 1404900,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ba-flag.gif',
		currency: 'Bahraini dinar'
	},
	{
		name: 'Bangladesh',
		capital: 'Dhaka',
		languages: ['Bengali'],
		population: 161006790,
		flag: 'https://www.worldometers.info//img/flags/small/tn_bg-flag.gif',
		currency: 'Bangladeshi taka'
	},
	{
		name: 'Barbados',
		capital: 'Bridgetown',
		languages: ['English'],
		population: 285000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_bb-flag.gif',
		currency: 'Barbadian dollar'
	},
	{
		name: 'Belarus',
		capital: 'Minsk',
		languages: ['Belarusian', 'Russian'],
		population: 9498700,
		flag: 'https://www.worldometers.info//img/flags/small/tn_bo-flag.gif',
		currency: 'New Belarusian ruble'
	},
	{
		name: 'Belgium',
		capital: 'Brussels',
		languages: ['Dutch', 'French', 'German'],
		population: 11319511,
		flag: 'https://www.worldometers.info//img/flags/small/tn_be-flag.gif',
		currency: 'Euro'
	},
	{
		name: 'Belize',
		capital: 'Belmopan',
		languages: ['English', 'Spanish'],
		population: 370300,
		flag: 'https://www.worldometers.info//img/flags/small/tn_bh-flag.gif',
		currency: 'Belize dollar'
	},
	{
		name: 'Benin',
		capital: 'Porto-Novo',
		languages: ['French'],
		population: 10653654,
		flag: 'https://www.worldometers.info//img/flags/small/tn_bn-flag.gif',
		currency: 'West African CFA franc'
	},
	{
		name: 'Bermuda',
		capital: 'Hamilton',
		languages: ['English'],
		population: 61954,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bermuda.svg',
		currency: 'Bermudian dollar'
	},
	{
		name: 'Bhutan',
		capital: 'Thimphu',
		languages: ['Dzongkha'],
		population: 775620,
		flag: 'https://www.worldometers.info//img/flags/small/tn_bt-flag.gif',
		currency: 'Bhutanese ngultrum'
	},
	{
		name: 'Bolivia ',
		capital: 'Sucre',
		languages: ['Spanish', 'Aymara', 'Quechua'],
		population: 10985059,
		flag: 'https://www.worldometers.info//img/flags/small/tn_bl-flag.gif',
		currency: 'Bolivian boliviano'
	},
	{
		name: 'Bonaire',
		capital: 'Kralendijk',
		languages: ['Dutch'],
		population: 17408,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Flag_of_Bonaire.svg',
		currency: 'United States dollar'
	},
	{
		name: 'Bosnia and Herzegovina',
		capital: 'Sarajevo',
		languages: ['Bosnian', 'Croatian', 'Serbian'],
		population: 3531159,
		flag: 'https://www.worldometers.info//img/flags/small/tn_bk-flag.gif',
		currency: 'Bosnia and Herzegovina convertible mark'
	},
	{
		name: 'Botswana',
		capital: 'Gaborone',
		languages: ['English', 'Tswana'],
		population: 2141206,
		flag: 'https://www.worldometers.info//img/flags/small/tn_bc-flag.gif',
		currency: 'Botswana pula'
	},
	{
		name: 'Bouvet Island',
		capital: '',
		languages: ['Norwegian', 'Norwegian Bokmål', 'Norwegian Nynorsk'],
		population: 0,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Bouvet_Island_Proposal.webp',
		currency: 'Norwegian krone'
	},
	{
		name: 'Brazil',
		capital: 'Brasília',
		languages: ['Portuguese'],
		population: 206135893,
		flag: 'https://www.worldometers.info//img/flags/small/tn_br-flag.gif',
		currency: 'Brazilian real'
	},
	{
		name: 'British Indian Ocean ',
		capital: 'Diego Garcia',
		languages: ['English'],
		population: 3000,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_the_Commissioner_of_the_British_Indian_Ocean_Territory.svg',
		currency: 'United States dollar'
	},
	{
		name: 'United States Minor Outlying Islands',
		capital: '',
		languages: ['English'],
		population: 300,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg',
		currency: 'United States Dollar'
	},
	{
		name: 'Virgin Islands (British)',
		capital: 'Road Town',
		languages: ['English'],
		population: 28514,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_British_Virgin_Islands.svg',
		currency: '[D]'
	},
	{
		name: 'Virgin Islands (U.S.)',
		capital: 'Charlotte Amalie',
		languages: ['English'],
		population: 114743,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Flag_of_the_United_States_Virgin_Islands.svg',
		currency: 'United States dollar'
	},
	{
		name: 'Brunei Darussalam',
		capital: 'Bandar Seri Begawan',
		languages: ['Malay'],
		population: 411900,
		flag: 'https://www.worldometers.info//img/flags/small/tn_bx-flag.gif',
		currency: 'Brunei dollar'
	},
	{
		name: 'Bulgaria',
		capital: 'Sofia',
		languages: ['Bulgarian'],
		population: 7153784,
		flag: 'https://www.worldometers.info//img/flags/small/tn_bu-flag.gif',
		currency: 'Bulgarian lev'
	},
	{
		name: 'Burkina Faso',
		capital: 'Ouagadougou',
		languages: ['French', 'Fula'],
		population: 19034397,
		flag: 'https://www.worldometers.info//img/flags/small/tn_uv-flag.gif',
		currency: 'West African CFA franc'
	},
	{
		name: 'Burundi',
		capital: 'Bujumbura',
		languages: ['French', 'Kirundi'],
		population: 10114505,
		flag: 'https://www.worldometers.info//img/flags/small/tn_by-flag.gif',
		currency: 'Burundian franc'
	},
	{
		name: 'Cambodia',
		capital: 'Phnom Penh',
		languages: ['Khmer'],
		population: 15626444,
		flag: 'https://www.worldometers.info//img/flags/small/tn_cb-flag.gif',
		currency: 'Cambodian riel'
	},
	{
		name: 'Cameroon',
		capital: 'Yaoundé',
		languages: ['English', 'French'],
		population: 22709892,
		flag: 'https://www.worldometers.info//img/flags/small/tn_cm-flag.gif',
		currency: 'Central African CFA franc'
	},
	{
		name: 'Canada',
		capital: 'Ottawa',
		languages: ['English', 'French'],
		population: 36155487,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ca-flag.gif',
		currency: 'Canadian dollar'
	},
	{
		name: 'Cabo Verde',
		capital: 'Praia',
		languages: ['Portuguese'],
		population: 531239,
		flag: 'https://www.worldometers.info//img/flags/small/tn_cv-flag.gif',
		currency: 'Cape Verdean escudo'
	},
	{
		name: 'Cayman Islands',
		capital: 'George Town',
		languages: ['English'],
		population: 58238,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_the_Cayman_Islands.svg',
		currency: 'Cayman Islands dollar'
	},
	{
		name: 'Central African Republic',
		capital: 'Bangui',
		languages: ['French', 'Sango'],
		population: 4998000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ct-flag.gif',
		currency: 'Central African CFA franc'
	},
	{
		name: 'Chad',
		capital: "N'Djamena",
		languages: ['French', 'Arabic'],
		population: 14497000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_cd-flag.gif',
		currency: 'Central African CFA franc'
	},
	{
		name: 'Chile',
		capital: 'Santiago',
		languages: ['Spanish'],
		population: 18191900,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ci-flag.gif',
		currency: 'Chilean peso'
	},
	{
		name: 'China',
		capital: 'Beijing',
		languages: ['Chinese'],
		population: 1377422166,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ch-flag.gif',
		currency: 'Chinese yuan'
	},
	{
		name: 'Christmas Island',
		capital: 'Flying Fish Cove',
		languages: ['English'],
		population: 2072,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Flag_of_Christmas_Island.svg',
		currency: 'Australian dollar'
	},
	{
		name: 'Cocos (Keeling) Islands',
		capital: 'West Island',
		languages: ['English'],
		population: 550,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Cocos_%28Keeling%29_Islands.svg',
		currency: 'Australian dollar'
	},
	{
		name: 'Colombia',
		capital: 'Bogotá',
		languages: ['Spanish'],
		population: 48759958,
		flag: 'https://www.worldometers.info//img/flags/small/tn_co-flag.gif',
		currency: 'Colombian peso'
	},
	{
		name: 'Comoros',
		capital: 'Moroni',
		languages: ['Arabic', 'French'],
		population: 806153,
		flag: 'https://www.worldometers.info//img/flags/small/tn_cn-flag.gif',
		currency: 'Comorian franc'
	},
	{
		name: 'Congo',
		capital: 'Brazzaville',
		languages: ['French', 'Lingala'],
		population: 4741000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_cg-flag.gif',
		currency: 'Central African CFA franc'
	},
	{
		name: 'Congo (Democratic Republic of the)',
		capital: 'Kinshasa',
		languages: ['French', 'Lingala', 'Kongo', 'Swahili', 'Luba-Katanga'],
		population: 85026000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_congo-flag.gif',
		currency: 'Congolese franc'
	},
	{
		name: 'Cook Islands',
		capital: 'Avarua',
		languages: ['English'],
		population: 18100,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_the_Cook_Islands.svg',
		currency: 'New Zealand dollar'
	},
	{
		name: 'Costa Rica',
		capital: 'San José',
		languages: ['Spanish'],
		population: 4890379,
		flag: 'https://www.worldometers.info//img/flags/small/tn_cs-flag.gif',
		currency: 'Costa Rican colón'
	},
	{
		name: 'Croatia',
		capital: 'Zagreb',
		languages: ['Croatian'],
		population: 4190669,
		flag: 'https://www.worldometers.info//img/flags/small/tn_hr-flag.gif',
		currency: 'Croatian kuna'
	},
	{
		name: 'Cuba',
		capital: 'Havana',
		languages: ['Spanish'],
		population: 11239004,
		flag: 'https://www.worldometers.info//img/flags/small/tn_cu-flag.gif',
		currency: 'Cuban convertible peso'
	},
	{
		name: 'Curaçao',
		capital: 'Willemstad',
		languages: ['Dutch', '(Eastern) Punjabi', 'English'],
		population: 154843,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_Cura%C3%A7ao.svg',
		currency: 'Netherlands Antillean guilder'
	},
	{
		name: 'Cyprus',
		capital: 'Nicosia',
		languages: ['Greek (modern)', 'Turkish', 'Armenian'],
		population: 847000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_cy-flag.gif',
		currency: 'Euro'
	},
	{
		name: 'Czech Republic',
		capital: 'Prague',
		languages: ['Czech', 'Slovak'],
		population: 10558524,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ez-flag.gif',
		currency: 'Czech koruna'
	},
	{
		name: 'Denmark',
		capital: 'Copenhagen',
		languages: ['Danish'],
		population: 5717014,
		flag: 'https://www.worldometers.info//img/flags/small/tn_da-flag.gif',
		currency: 'Danish krone'
	},
	{
		name: 'Djibouti',
		capital: 'Djibouti',
		languages: ['French', 'Arabic'],
		population: 900000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_dj-flag.gif',
		currency: 'Djiboutian franc'
	},
	{
		name: 'Dominica',
		capital: 'Roseau',
		languages: ['English'],
		population: 71293,
		flag: 'https://www.worldometers.info//img/flags/small/tn_do-flag.gif',
		currency: 'East Caribbean dollar'
	},
	{
		name: 'Dominican Republic',
		capital: 'Santo Domingo',
		languages: ['Spanish'],
		population: 10075045,
		flag: 'https://www.worldometers.info//img/flags/small/tn_dr-flag.gif',
		currency: 'Dominican peso'
	},
	{
		name: 'Ecuador',
		capital: 'Quito',
		languages: ['Spanish'],
		population: 16545799,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ec-flag.gif',
		currency: 'United States dollar'
	},
	{
		name: 'Egypt',
		capital: 'Cairo',
		languages: ['Arabic'],
		population: 91290000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_eg-flag.gif',
		currency: 'Egyptian pound'
	},
	{
		name: 'El Salvador',
		capital: 'San Salvador',
		languages: ['Spanish'],
		population: 6520675,
		flag: 'https://www.worldometers.info//img/flags/small/tn_es-flag.gif',
		currency: 'United States dollar'
	},
	{
		name: 'Equatorial Guinea',
		capital: 'Malabo',
		languages: ['Spanish', 'French'],
		population: 1222442,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ek-flag.gif',
		currency: 'Central African CFA franc'
	},
	{
		name: 'Eritrea',
		capital: 'Asmara',
		languages: ['Tigrinya', 'Arabic', 'English'],
		population: 5352000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_er-flag.gif',
		currency: 'Eritrean nakfa'
	},
	{
		name: 'Estonia',
		capital: 'Tallinn',
		languages: ['Estonian'],
		population: 1315944,
		flag: 'https://www.worldometers.info//img/flags/small/tn_en-flag.gif',
		currency: 'Euro'
	},
	{
		name: 'Ethiopia',
		capital: 'Addis Ababa',
		languages: ['Amharic'],
		population: 92206005,
		flag: 'https://www.worldometers.info//img/flags/small/tn_et-flag.gif',
		currency: 'Ethiopian birr'
	},
	{
		name: 'Falkland Islands (Malvinas)',
		capital: 'Stanley',
		languages: ['English'],
		population: 2563,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_Falkland_Islands.svg',
		currency: 'Falkland Islands pound'
	},
	{
		name: 'Faroe Islands',
		capital: 'Tórshavn',
		languages: ['Faroese'],
		population: 49376,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Flag_of_the_Faroe_Islands.svg',
		currency: 'Danish krone'
	},
	{
		name: 'Fiji',
		capital: 'Suva',
		languages: ['English', 'Fijian', 'Hindi', 'Urdu'],
		population: 867000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_fj-flag.gif',
		currency: 'Fijian dollar'
	},
	{
		name: 'Finland',
		capital: 'Helsinki',
		languages: ['Finnish', 'Swedish'],
		population: 5491817,
		flag: 'https://www.worldometers.info//img/flags/small/tn_fi-flag.gif',
		currency: 'Euro'
	},
	{
		name: 'France',
		capital: 'Paris',
		languages: ['French'],
		population: 66710000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_fr-flag.gif',
		currency: 'Euro'
	},
	{
		name: 'French Guiana',
		capital: 'Cayenne',
		languages: ['French'],
		population: 254541,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_French_Guiana.svg',
		currency: 'Euro'
	},
	{
		name: 'French Polynesia',
		capital: 'Papeetē',
		languages: ['French'],
		population: 271800,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Flag_of_French_Polynesia.svg',
		currency: 'CFP franc'
	},
	{
		name: 'French Southern Territories',
		capital: 'Port-aux-Français',
		languages: ['French'],
		population: 140,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Flag_of_the_French_Southern_and_Antarctic_Lands.svg',
		currency: 'Euro'
	},
	{
		name: 'Gabon',
		capital: 'Libreville',
		languages: ['French'],
		population: 1802278,
		flag: 'https://www.worldometers.info//img/flags/small/tn_gb-flag.gif',
		currency: 'Central African CFA franc'
	},
	{
		name: 'Gambia',
		capital: 'Banjul',
		languages: ['English'],
		population: 1882450,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ga-flag.gif',
		currency: 'Gambian dalasi'
	},
	{
		name: 'Georgia',
		capital: 'Tbilisi',
		languages: ['Georgian'],
		population: 3720400,
		flag: 'https://www.worldometers.info//img/flags/small/tn_gg-flag.gif',
		currency: 'Georgian Lari'
	},
	{
		name: 'Germany',
		capital: 'Berlin',
		languages: ['German'],
		population: 81770900,
		flag: 'https://www.worldometers.info//img/flags/small/tn_gm-flag.gif',
		currency: 'Euro'
	},
	{
		name: 'Ghana',
		capital: 'Accra',
		languages: ['English'],
		population: 27670174,
		flag: 'https://www.worldometers.info//img/flags/small/tn_gh-flag.gif',
		currency: 'Ghanaian cedi'
	},
	{
		name: 'Gibraltar',
		capital: 'Gibraltar',
		languages: ['English'],
		population: 33140,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Flag_of_Gibraltar.svg',
		currency: 'Gibraltar pound'
	},
	{
		name: 'Greece',
		capital: 'Athens',
		languages: ['Greek (modern)'],
		population: 10858018,
		flag: 'https://www.worldometers.info//img/flags/small/tn_gr-flag.gif',
		currency: 'Euro'
	},
	{
		name: 'Greenland',
		capital: 'Nuuk',
		languages: ['Kalaallisut'],
		population: 55847,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_Greenland.svg',
		currency: 'Danish krone'
	},
	{
		name: 'Grenada',
		capital: "St. George's",
		languages: ['English'],
		population: 103328,
		flag: 'https://www.worldometers.info//img/flags/small/tn_gj-flag.gif',
		currency: 'East Caribbean dollar'
	},
	{
		name: 'Guadeloupe',
		capital: 'Basse-Terre',
		languages: ['French'],
		population: 400132,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Unofficial_flag_of_Guadeloupe_%28local%29.svg',
		currency: 'Euro'
	},
	{
		name: 'Guam',
		capital: 'Hagåtña',
		languages: ['English', 'Chamorro', 'Spanish'],
		population: 184200,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Flag_of_Guam.svg',
		currency: 'United States dollar'
	},
	{
		name: 'Guatemala',
		capital: 'Guatemala City',
		languages: ['Spanish'],
		population: 16176133,
		flag: 'https://www.worldometers.info//img/flags/small/tn_gt-flag.gif',
		currency: 'Guatemalan quetzal'
	},
	{
		name: 'Guernsey',
		capital: 'St. Peter Port',
		languages: ['English', 'French'],
		population: 62999,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Guernsey.svg',
		currency: 'British pound'
	},
	{
		name: 'Guinea',
		capital: 'Conakry',
		languages: ['French', 'Fula'],
		population: 12947000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_gv-flag.gif',
		currency: 'Guinean franc'
	},
	{
		name: 'Guinea-Bissau',
		capital: 'Bissau',
		languages: ['Portuguese'],
		population: 1547777,
		flag: 'https://www.worldometers.info//img/flags/small/tn_pu-flag.gif',
		currency: 'West African CFA franc'
	},
	{
		name: 'Guyana',
		capital: 'Georgetown',
		languages: ['English'],
		population: 746900,
		flag: 'https://www.worldometers.info//img/flags/small/tn_gy-flag.gif',
		currency: 'Guyanese dollar'
	},
	{
		name: 'Haiti',
		capital: 'Port-au-Prince',
		languages: ['French', 'Haitian'],
		population: 11078033,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ha-flag.gif',
		currency: 'Haitian gourde'
	},
	{
		name: 'Heard Island and McDonald Islands',
		capital: '',
		languages: ['English'],
		population: 0,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Flag_Map_of_the_Heard_Island_and_McDonald_Islands.png',
		currency: 'Australian dollar'
	},
	{
		name: 'Holy See',
		capital: 'Rome',
		languages: ['Latin', 'Italian', 'French', 'German'],
		population: 451,
		flag: 'https://www.worldometers.info//img/flags/small/tn_vt-flag.gif',
		currency: 'Euro'
	},
	{
		name: 'Honduras',
		capital: 'Tegucigalpa',
		languages: ['Spanish'],
		population: 8576532,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ho-flag.gif',
		currency: 'Honduran lempira'
	},
	{
		name: 'Hong Kong',
		capital: 'City of Victoria',
		languages: ['English', 'Chinese'],
		population: 7324300,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg',
		currency: 'Hong Kong dollar'
	},
	{
		name: 'Hungary',
		capital: 'Budapest',
		languages: ['Hungarian'],
		population: 9823000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_hu-flag.gif',
		currency: 'Hungarian forint'
	},
	{
		name: 'Iceland',
		capital: 'Reykjavík',
		languages: ['Icelandic'],
		population: 334300,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ic-flag.gif',
		currency: 'Icelandic króna'
	},
	{
		name: 'India',
		capital: 'New Delhi',
		languages: ['Hindi', 'English'],
		population: 1295210000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_in-flag.gif',
		currency: 'Indian rupee'
	},
	{
		name: 'Indonesia',
		capital: 'Jakarta',
		languages: ['Indonesian'],
		population: 258705000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_id-flag.gif',
		currency: 'Indonesian rupiah'
	},
	{
		name: "Côte d'Ivoire",
		capital: 'Yamoussoukro',
		languages: ['French'],
		population: 22671331,
		flag: 'https://www.worldometers.info//img/flags/small/tn_iv-flag.gif',
		currency: 'West African CFA franc'
	},
	{
		name: 'Iran (Islamic Republic of)',
		capital: 'Tehran',
		languages: ['Persian (Farsi)'],
		population: 79369900,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ir-flag.gif',
		currency: 'Iranian rial'
	},
	{
		name: 'Iraq',
		capital: 'Baghdad',
		languages: ['Arabic', 'Kurdish'],
		population: 37883543,
		flag: 'https://www.worldometers.info//img/flags/small/tn_iz-flag.gif',
		currency: 'Iraqi dinar'
	},
	{
		name: 'Ireland',
		capital: 'Dublin',
		languages: ['Irish', 'English'],
		population: 6378000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ei-flag.gif',
		currency: 'Euro'
	},
	{
		name: 'Isle of Man',
		capital: 'Douglas',
		languages: ['English', 'Manx'],
		population: 84497,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Flag_of_the_Isle_of_Mann.svg',
		currency: 'British pound'
	},
	{
		name: 'Italy',
		capital: 'Rome',
		languages: ['Italian'],
		population: 60665551,
		flag: 'https://www.worldometers.info//img/flags/small/tn_it-flag.gif',
		currency: 'Euro'
	},
	{
		name: 'Jamaica',
		capital: 'Kingston',
		languages: ['English'],
		population: 2723246,
		flag: 'https://www.worldometers.info//img/flags/small/tn_jm-flag.gif',
		currency: 'Jamaican dollar'
	},
	{
		name: 'Japan',
		capital: 'Tokyo',
		languages: ['Japanese'],
		population: 126960000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ja-flag.gif',
		currency: 'Japanese yen'
	},
	{
		name: 'Jersey',
		capital: 'Saint Helier',
		languages: ['English', 'French'],
		population: 100800,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Flag_of_Jersey.svg',
		currency: 'British pound'
	},
	{
		name: 'Jordan',
		capital: 'Amman',
		languages: ['Arabic'],
		population: 9531712,
		flag: 'https://www.worldometers.info//img/flags/small/tn_jo-flag.gif',
		currency: 'Jordanian dinar'
	},
	{
		name: 'Kazakhstan',
		capital: 'Astana',
		languages: ['Kazakh', 'Russian'],
		population: 17753200,
		flag: 'https://www.worldometers.info//img/flags/small/tn_kz-flag.gif',
		currency: 'Kazakhstani tenge'
	},
	{
		name: 'Kenya',
		capital: 'Nairobi',
		languages: ['English', 'Swahili'],
		population: 47251000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ke-flag.gif',
		currency: 'Kenyan shilling'
	},
	{
		name: 'Kiribati',
		capital: 'South Tarawa',
		languages: ['English'],
		population: 113400,
		flag: 'https://www.worldometers.info//img/flags/small/tn_kr-flag.gif',
		currency: 'Australian dollar'
	},
	{
		name: 'Kuwait',
		capital: 'Kuwait City',
		languages: ['Arabic'],
		population: 4183658,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ku-flag.gif',
		currency: 'Kuwaiti dinar'
	},
	{
		name: 'Kyrgyzstan',
		capital: 'Bishkek',
		languages: ['Kyrgyz', 'Russian'],
		population: 6047800,
		flag: 'https://www.worldometers.info//img/flags/small/tn_kg-flag.gif',
		currency: 'Kyrgyzstani som'
	},
	{
		name: "Lao People's Democratic Republic",
		capital: 'Vientiane',
		languages: ['Lao'],
		population: 6492400,
		flag: 'https://www.worldometers.info//img/flags/small/tn_la-flag.gif',
		currency: 'Lao kip'
	},
	{
		name: 'Latvia',
		capital: 'Riga',
		languages: ['Latvian'],
		population: 1961600,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg',
		currency: 'Euro'
	},
	{
		name: 'Lebanon',
		capital: 'Beirut',
		languages: ['Arabic', 'French'],
		population: 5988000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_le-flag.gif',
		currency: 'Lebanese pound'
	},
	{
		name: 'Lesotho',
		capital: 'Maseru',
		languages: ['English', 'Southern Sotho'],
		population: 1894194,
		flag: 'https://www.worldometers.info//img/flags/small/tn_lt-flag.gif',
		currency: 'Lesotho loti'
	},
	{
		name: 'Liberia',
		capital: 'Monrovia',
		languages: ['English'],
		population: 4615000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_li-flag.gif',
		currency: 'Liberian dollar'
	},
	{
		name: 'Libya',
		capital: 'Tripoli',
		languages: ['Arabic'],
		population: 6385000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ly-flag.gif',
		currency: 'Libyan dinar'
	},
	{
		name: 'Liechtenstein',
		capital: 'Vaduz',
		languages: ['German'],
		population: 37623,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ls-flag.gif',
		currency: 'Swiss franc'
	},
	{
		name: 'Lithuania',
		capital: 'Vilnius',
		languages: ['Lithuanian'],
		population: 2872294,
		flag: 'https://www.worldometers.info//img/flags/small/tn_lh-flag.gif',
		currency: 'Euro'
	},
	{
		name: 'Luxembourg',
		capital: 'Luxembourg',
		languages: ['French', 'German', 'Luxembourgish'],
		population: 576200,
		flag: 'https://www.worldometers.info//img/flags/small/tn_lu-flag.gif',
		currency: 'Euro'
	},
	{
		name: 'Macao',
		capital: '',
		languages: ['Chinese', 'Portuguese'],
		population: 649100,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Flag_of_Macau.svg',
		currency: 'Macanese pataca'
	},
	{
		name: 'Macedonia (the former Yugoslav Republic of)',
		capital: 'Skopje',
		languages: ['Macedonian'],
		population: 2058539,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_North_Macedonia.svg',
		currency: 'Macedonian denar'
	},
	{
		name: 'Madagascar',
		capital: 'Antananarivo',
		languages: ['French', 'Malagasy'],
		population: 22434363,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ma-flag.gif',
		currency: 'Malagasy ariary'
	},
	{
		name: 'Malawi',
		capital: 'Lilongwe',
		languages: ['English', 'Chichewa'],
		population: 16832910,
		flag: 'https://www.worldometers.info//img/flags/small/tn_mi-flag.gif',
		currency: 'Malawian kwacha'
	},
	{
		name: 'Malaysia',
		capital: 'Kuala Lumpur',
		languages: ['Malaysian'],
		population: 31405416,
		flag: 'https://www.worldometers.info//img/flags/small/tn_my-flag.gif',
		currency: 'Malaysian ringgit'
	},
	{
		name: 'Maldives',
		capital: 'Malé',
		languages: ['Divehi'],
		population: 344023,
		flag: 'https://www.worldometers.info//img/flags/small/tn_mv-flag.gif',
		currency: 'Maldivian rufiyaa'
	},
	{
		name: 'Mali',
		capital: 'Bamako',
		languages: ['French'],
		population: 18135000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ml-flag.gif',
		currency: 'West African CFA franc'
	},
	{
		name: 'Malta',
		capital: 'Valletta',
		languages: ['Maltese', 'English'],
		population: 425384,
		flag: 'https://www.worldometers.info//img/flags/small/tn_mt-flag.gif',
		currency: 'Euro'
	},
	{
		name: 'Marshall Islands',
		capital: 'Majuro',
		languages: ['English', 'Marshallese'],
		population: 54880,
		flag: 'https://www.worldometers.info//img/flags/small/tn_rm-flag.gif',
		currency: 'United States dollar'
	},
	{
		name: 'Martinique',
		capital: 'Fort-de-France',
		languages: ['French'],
		population: 378243,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Flag-of-Martinique.svg',
		currency: 'Euro'
	},
	{
		name: 'Mauritania',
		capital: 'Nouakchott',
		languages: ['Arabic'],
		population: 3718678,
		flag: 'https://www.worldometers.info//img/flags/small/tn_mr-flag.gif',
		currency: 'Mauritanian ouguiya'
	},
	{
		name: 'Mauritius',
		capital: 'Port Louis',
		languages: ['English'],
		population: 1262879,
		flag: 'https://www.worldometers.info//img/flags/small/tn_mp-flag.gif',
		currency: 'Mauritian rupee'
	},
	{
		name: 'Mayotte',
		capital: 'Mamoudzou',
		languages: ['French'],
		population: 226915,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Mayotte_%28Local%29.svg',
		currency: 'Euro'
	},
	{
		name: 'Mexico',
		capital: 'Mexico City',
		languages: ['Spanish'],
		population: 122273473,
		flag: 'https://www.worldometers.info//img/flags/small/tn_mx-flag.gif',
		currency: 'Mexican peso'
	},
	{
		name: 'Micronesia (Federated States of)',
		capital: 'Palikir',
		languages: ['English'],
		population: 102800,
		flag: 'https://www.worldometers.info//img/flags/small/tn_fm-flag.gif',
		currency: '[D]'
	},
	{
		name: 'Moldova (Republic of)',
		capital: 'Chișinău',
		languages: ['Romanian'],
		population: 3553100,
		flag: 'https://www.worldometers.info//img/flags/small/tn_md-flag.gif',
		currency: 'Moldovan leu'
	},
	{
		name: 'Monaco',
		capital: 'Monaco',
		languages: ['French'],
		population: 38400,
		flag: 'https://www.worldometers.info//img/flags/small/tn_mn-flag.gif',
		currency: 'Euro'
	},
	{
		name: 'Mongolia',
		capital: 'Ulan Bator',
		languages: ['Mongolian'],
		population: 3093100,
		flag: 'https://www.worldometers.info//img/flags/small/tn_mg-flag.gif',
		currency: 'Mongolian tögrög'
	},
	{
		name: 'Montenegro',
		capital: 'Podgorica',
		languages: ['Serbian', 'Bosnian', 'Albanian', 'Croatian'],
		population: 621810,
		flag: 'https://www.worldometers.info//img/flags/small/tn_mj-flag.gif',
		currency: 'Euro'
	},
	{
		name: 'Montserrat',
		capital: 'Plymouth',
		languages: ['English'],
		population: 4922,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Montserrat.svg',
		currency: 'East Caribbean dollar'
	},
	{
		name: 'Morocco',
		capital: 'Rabat',
		languages: ['Arabic'],
		population: 33337529,
		flag: 'https://www.worldometers.info//img/flags/small/tn_mo-flag.gif',
		currency: 'Moroccan dirham'
	},
	{
		name: 'Mozambique',
		capital: 'Maputo',
		languages: ['Portuguese'],
		population: 26423700,
		flag: 'https://www.worldometers.info//img/flags/small/tn_mz-flag.gif',
		currency: 'Mozambican metical'
	},
	{
		name: 'Myanmar',
		capital: 'Naypyidaw',
		languages: ['Burmese'],
		population: 51419420,
		flag: 'https://www.worldometers.info//img/flags/small/tn_bm-flag.gif',
		currency: 'Burmese kyat'
	},
	{
		name: 'Namibia',
		capital: 'Windhoek',
		languages: ['English', 'Afrikaans'],
		population: 2324388,
		flag: 'https://www.worldometers.info//img/flags/small/tn_wa-flag.gif',
		currency: 'Namibian dollar'
	},
	{
		name: 'Nauru',
		capital: 'Yaren',
		languages: ['English', 'Nauruan'],
		population: 10084,
		flag: 'https://www.worldometers.info//img/flags/small/tn_nr-flag.gif',
		currency: 'Australian dollar'
	},
	{
		name: 'Nepal',
		capital: 'Kathmandu',
		languages: ['Nepali'],
		population: 28431500,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Pre-1962_Flag_of_Nepal_%28with_spacing%2C_aspect_ratio_3-2%29.svg',
		currency: 'Nepalese rupee'
	},
	{
		name: 'Netherlands',
		capital: 'Amsterdam',
		languages: ['Dutch'],
		population: 17019800,
		flag: 'https://www.worldometers.info//img/flags/small/tn_nl-flag.gif',
		currency: 'Euro'
	},
	{
		name: 'New Caledonia',
		capital: 'Nouméa',
		languages: ['French'],
		population: 268767,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_FLNKS.svg',
		currency: 'CFP franc'
	},
	{
		name: 'New Zealand',
		capital: 'Wellington',
		languages: ['English', 'Māori'],
		population: 4697854,
		flag: 'https://www.worldometers.info//img/flags/small/tn_nz-flag.gif',
		currency: 'New Zealand dollar'
	},
	{
		name: 'Nicaragua',
		capital: 'Managua',
		languages: ['Spanish'],
		population: 6262703,
		flag: 'https://www.worldometers.info//img/flags/small/tn_nu-flag.gif',
		currency: 'Nicaraguan córdoba'
	},
	{
		name: 'Niger',
		capital: 'Niamey',
		languages: ['French'],
		population: 20715000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ng-flag.gif',
		currency: 'West African CFA franc'
	},
	{
		name: 'Nigeria',
		capital: 'Abuja',
		languages: ['English'],
		population: 186988000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ni-flag.gif',
		currency: 'Nigerian naira'
	},
	{
		name: 'Niue',
		capital: 'Alofi',
		languages: ['English'],
		population: 1470,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Niue.svg',
		currency: 'New Zealand dollar'
	},
	{
		name: 'Norfolk Island',
		capital: 'Kingston',
		languages: ['English'],
		population: 2302,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Norfolk_Island.svg',
		currency: 'Australian dollar'
	},
	{
		name: "Korea (Democratic People's Republic of)",
		capital: 'Pyongyang',
		languages: ['Korean'],
		population: 25281000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_kn-flag.gif',
		currency: 'North Korean won'
	},
	{
		name: 'Northern Mariana Islands',
		capital: 'Saipan',
		languages: ['English', 'Chamorro'],
		population: 56940,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Flag_of_the_Northern_Mariana_Islands.svg',
		currency: 'United States dollar'
	},
	{
		name: 'Norway',
		capital: 'Oslo',
		languages: ['Norwegian', 'Norwegian Bokmål', 'Norwegian Nynorsk'],
		population: 5223256,
		flag: 'https://www.worldometers.info//img/flags/small/tn_no-flag.gif',
		currency: 'Norwegian krone'
	},
	{
		name: 'Oman',
		capital: 'Muscat',
		languages: ['Arabic'],
		population: 4420133,
		flag: 'https://www.worldometers.info//img/flags/small/tn_mu-flag.gif',
		currency: 'Omani rial'
	},
	{
		name: 'Pakistan',
		capital: 'Islamabad',
		languages: ['English', 'Urdu'],
		population: 194125062,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg',
		currency: 'Pakistani rupee'
	},
	{
		name: 'Palau',
		capital: 'Ngerulmud',
		languages: ['English'],
		population: 17950,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ps-flag.gif',
		currency: '[E]'
	},
	{
		name: 'Palestine, State of',
		capital: 'Ramallah',
		languages: ['Arabic'],
		population: 4682467,
		flag: 'https://www.worldometers.info//img/flags/small/tn_palestine-flag.gif',
		currency: 'Israeli new sheqel'
	},
	{
		name: 'Panama',
		capital: 'Panama City',
		languages: ['Spanish'],
		population: 3814672,
		flag: 'https://www.worldometers.info//img/flags/small/tn_pm-flag.gif',
		currency: 'Panamanian balboa'
	},
	{
		name: 'Papua New Guinea',
		capital: 'Port Moresby',
		languages: ['English'],
		population: 8083700,
		flag: 'https://www.worldometers.info//img/flags/small/tn_pp-flag.gif',
		currency: 'Papua New Guinean kina'
	},
	{
		name: 'Paraguay',
		capital: 'Asunción',
		languages: ['Spanish', 'Guaraní'],
		population: 6854536,
		flag: 'https://www.worldometers.info//img/flags/small/tn_pa-flag.gif',
		currency: 'Paraguayan guaraní'
	},
	{
		name: 'Peru',
		capital: 'Lima',
		languages: ['Spanish'],
		population: 31488700,
		flag: 'https://www.worldometers.info//img/flags/small/tn_pe-flag.gif',
		currency: 'Peruvian sol'
	},
	{
		name: 'Philippines',
		capital: 'Manila',
		languages: ['English'],
		population: 103279800,
		flag: 'https://www.worldometers.info//img/flags/small/tn_rp-flag.gif',
		currency: 'Philippine peso'
	},
	{
		name: 'Pitcairn',
		capital: 'Adamstown',
		languages: ['English'],
		population: 56,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_the_Pitcairn_Islands.svg',
		currency: 'New Zealand dollar'
	},
	{
		name: 'Poland',
		capital: 'Warsaw',
		languages: ['Polish'],
		population: 38437239,
		flag: 'https://www.worldometers.info//img/flags/small/tn_pl-flag.gif',
		currency: 'Polish złoty'
	},
	{
		name: 'Portugal',
		capital: 'Lisbon',
		languages: ['Portuguese'],
		population: 10374822,
		flag: 'https://www.worldometers.info//img/flags/small/tn_po-flag.gif',
		currency: 'Euro'
	},
	{
		name: 'Puerto Rico',
		capital: 'San Juan',
		languages: ['Spanish', 'English'],
		population: 3474182,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Puerto_Rico.svg',
		currency: 'United States dollar'
	},
	{
		name: 'Qatar',
		capital: 'Doha',
		languages: ['Arabic'],
		population: 2587564,
		flag: 'https://www.worldometers.info//img/flags/small/tn_qa-flag.gif',
		currency: 'Qatari riyal'
	},
	{
		name: 'Republic of Kosovo',
		capital: 'Pristina',
		languages: ['Albanian', 'Serbian'],
		population: 1733842,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Flag_of_Kosovo.svg',
		currency: 'Euro'
	},
	{
		name: 'Réunion',
		capital: 'Saint-Denis',
		languages: ['French'],
		population: 840974,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Proposed_flag_of_R%C3%A9union_%28VAR%29.svg',
		currency: 'Euro'
	},
	{
		name: 'Romania',
		capital: 'Bucharest',
		languages: ['Romanian'],
		population: 19861408,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ro-flag.gif',
		currency: 'Romanian leu'
	},
	{
		name: 'Russia',
		capital: 'Moscow',
		languages: ['Russian'],
		population: 146599183,
		flag: 'https://www.worldometers.info//img/flags/small/tn_rs-flag.gif',
		currency: 'Russian ruble'
	},
	{
		name: 'Rwanda',
		capital: 'Kigali',
		languages: ['Kinyarwanda', 'English', 'French'],
		population: 11553188,
		flag: 'https://www.worldometers.info//img/flags/small/tn_rw-flag.gif',
		currency: 'Rwandan franc'
	},
	{
		name: 'Saint Barthélemy',
		capital: 'Gustavia',
		languages: ['French'],
		population: 9417,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Saint_Barth%C3%A9lemy_%28local%29.svg',
		currency: 'Euro'
	},
	{
		name: 'Saint Helena, Ascension and Tristan da Cunha',
		capital: 'Jamestown',
		languages: ['English'],
		population: 4255,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Saint_Helena.svg',
		currency: 'Saint Helena pound'
	},
	{
		name: 'Saint Kitts and Nevis',
		capital: 'Basseterre',
		languages: ['English'],
		population: 46204,
		flag: 'https://www.worldometers.info//img/flags/small/tn_sc-flag.gif',
		currency: 'East Caribbean dollar'
	},
	{
		name: 'Saint Lucia',
		capital: 'Castries',
		languages: ['English'],
		population: 186000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_st-flag.gif',
		currency: 'East Caribbean dollar'
	},
	{
		name: 'Saint Martin (French part)',
		capital: 'Marigot',
		languages: ['English', 'French', 'Dutch'],
		population: 36979,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Sint_Maarten.svg',
		currency: 'Euro'
	},
	{
		name: 'Saint Pierre and Miquelon',
		capital: 'Saint-Pierre',
		languages: ['French'],
		population: 6069,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_Saint-Pierre_and_Miquelon.svg',
		currency: 'Euro'
	},
	{
		name: 'Saint Vincent and the Grenadines',
		capital: 'Kingstown',
		languages: ['English'],
		population: 109991,
		flag: 'https://www.worldometers.info//img/flags/small/tn_vc-flag.gif',
		currency: 'East Caribbean dollar'
	},
	{
		name: 'Samoa',
		capital: 'Apia',
		languages: ['Samoan', 'English'],
		population: 194899,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ws-flag.gif',
		currency: 'Samoan tālā'
	},
	{
		name: 'San Marino',
		capital: 'City of San Marino',
		languages: ['Italian'],
		population: 33005,
		flag: 'https://www.worldometers.info//img/flags/small/tn_sm-flag.gif',
		currency: 'Euro'
	},
	{
		name: 'Sao Tome and Principe',
		capital: 'São Tomé',
		languages: ['Portuguese'],
		population: 187356,
		flag: 'https://www.worldometers.info//img/flags/small/tn_tp-flag.gif',
		currency: 'São Tomé and Príncipe dobra'
	},
	{
		name: 'Saudi Arabia',
		capital: 'Riyadh',
		languages: ['Arabic'],
		population: 32248200,
		flag: 'https://www.worldometers.info//img/flags/small/tn_sa-flag.gif',
		currency: 'Saudi riyal'
	},
	{
		name: 'Senegal',
		capital: 'Dakar',
		languages: ['French'],
		population: 14799859,
		flag: 'https://www.worldometers.info//img/flags/small/tn_sg-flag.gif',
		currency: 'West African CFA franc'
	},
	{
		name: 'Serbia',
		capital: 'Belgrade',
		languages: ['Serbian'],
		population: 7076372,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ri-flag.gif',
		currency: 'Serbian dinar'
	},
	{
		name: 'Seychelles',
		capital: 'Victoria',
		languages: ['French', 'English'],
		population: 91400,
		flag: 'https://www.worldometers.info//img/flags/small/tn_se-flag.gif',
		currency: 'Seychellois rupee'
	},
	{
		name: 'Sierra Leone',
		capital: 'Freetown',
		languages: ['English'],
		population: 7075641,
		flag: 'https://www.worldometers.info//img/flags/small/tn_sl-flag.gif',
		currency: 'Sierra Leonean leone'
	},
	{
		name: 'Singapore',
		capital: 'Singapore',
		languages: ['English', 'Malay', 'Tamil', 'Chinese'],
		population: 5535000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_sn-flag.gif',
		currency: 'Brunei dollar'
	},
	{
		name: 'Sint Maarten (Dutch part)',
		capital: 'Philipsburg',
		languages: ['Dutch', 'English'],
		population: 38247,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Sint_Maarten.svg',
		currency: 'Netherlands Antillean guilder'
	},
	{
		name: 'Slovakia',
		capital: 'Bratislava',
		languages: ['Slovak'],
		population: 5426252,
		flag: 'https://www.worldometers.info//img/flags/small/tn_lo-flag.gif',
		currency: 'Euro'
	},
	{
		name: 'Slovenia',
		capital: 'Ljubljana',
		languages: ['Slovene'],
		population: 2064188,
		flag: 'https://www.worldometers.info//img/flags/small/tn_si-flag.gif',
		currency: 'Euro'
	},
	{
		name: 'Solomon Islands',
		capital: 'Honiara',
		languages: ['English'],
		population: 642000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_bp-flag.gif',
		currency: 'Solomon Islands dollar'
	},
	{
		name: 'Somalia',
		capital: 'Mogadishu',
		languages: ['Somali', 'Arabic'],
		population: 11079000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_so-flag.gif',
		currency: 'Somali shilling'
	},
	{
		name: 'South Africa',
		capital: 'Pretoria',
		languages: [
			'Afrikaans',
			'English',
			'Southern Ndebele',
			'Southern Sotho',
			'Swati',
			'Tswana',
			'Tsonga',
			'Venda',
			'Xhosa',
			'Zulu'
		],
		population: 55653654,
		flag: 'https://www.worldometers.info//img/flags/small/tn_sf-flag.gif',
		currency: 'South African rand'
	},
	{
		name: 'South Georgia and the South Sandwich Islands',
		capital: 'King Edward Point',
		languages: ['English'],
		population: 30,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_South_Georgia_and_the_South_Sandwich_Islands.svg',
		currency: 'British pound'
	},
	{
		name: 'Korea (Republic of)',
		capital: 'Seoul',
		languages: ['Korean'],
		population: 50801405,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ks-flag.gif',
		currency: 'South Korean won'
	},
	{
		name: 'South Sudan',
		capital: 'Juba',
		languages: ['English'],
		population: 12131000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_od-flag.gif',
		currency: 'South Sudanese pound'
	},
	{
		name: 'Spain',
		capital: 'Madrid',
		languages: ['Spanish'],
		population: 46438422,
		flag: 'https://www.worldometers.info//img/flags/small/tn_sp-flag.gif',
		currency: 'Euro'
	},
	{
		name: 'Sri Lanka',
		capital: 'Colombo',
		languages: ['Sinhalese', 'Tamil'],
		population: 20966000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ce-flag.gif',
		currency: 'Sri Lankan rupee'
	},
	{
		name: 'Sudan',
		capital: 'Khartoum',
		languages: ['Arabic', 'English'],
		population: 39598700,
		flag: 'https://www.worldometers.info//img/flags/small/tn_su-flag.gif',
		currency: 'Sudanese pound'
	},
	{
		name: 'Suriname',
		capital: 'Paramaribo',
		languages: ['Dutch'],
		population: 541638,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ns-flag.gif',
		currency: 'Surinamese dollar'
	},
	{
		name: 'Svalbard and Jan Mayen',
		capital: 'Longyearbyen',
		languages: ['Norwegian'],
		population: 2562,
		flag: 'https://www.worldometers.info//img/flags/small/tn_wz-flag.gif',
		currency: 'Norwegian krone'
	},
	{
		name: 'Swaziland',
		capital: 'Lobamba',
		languages: ['English', 'Swati'],
		population: 1132657,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Flag_of_Eswatini.svg',
		currency: 'Swazi lilangeni'
	},
	{
		name: 'Sweden',
		capital: 'Stockholm',
		languages: ['Swedish'],
		population: 9894888,
		flag: 'https://www.worldometers.info//img/flags/small/tn_sw-flag.gif',
		currency: 'Swedish krona'
	},
	{
		name: 'Switzerland',
		capital: 'Bern',
		languages: ['German', 'French', 'Italian'],
		population: 8341600,
		flag: 'https://www.worldometers.info//img/flags/small/tn_sz-flag.gif',
		currency: 'Swiss franc'
	},
	{
		name: 'Syrian Arab Republic',
		capital: 'Damascus',
		languages: ['Arabic'],
		population: 18564000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_sy-flag.gif',
		currency: 'Syrian pound'
	},
	{
		name: 'Taiwan',
		capital: 'Taipei',
		languages: ['Chinese'],
		population: 23503349,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg',
		currency: 'New Taiwan dollar'
	},
	{
		name: 'Tajikistan',
		capital: 'Dushanbe',
		languages: ['Tajik', 'Russian'],
		population: 8593600,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ti-flag.gif',
		currency: 'Tajikistani somoni'
	},
	{
		name: 'Tanzania, United Republic of',
		capital: 'Dodoma',
		languages: ['Swahili', 'English'],
		population: 55155000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_tz-flag.gif',
		currency: 'Tanzanian shilling'
	},
	{
		name: 'Thailand',
		capital: 'Bangkok',
		languages: ['Thai'],
		population: 65327652,
		flag: 'https://www.worldometers.info//img/flags/small/tn_th-flag.gif',
		currency: 'Thai baht'
	},
	{
		name: 'Timor-Leste',
		capital: 'Dili',
		languages: ['Portuguese'],
		population: 1167242,
		flag: 'https://www.worldometers.info//img/flags/small/tn_tt-flag.gif',
		currency: 'United States dollar'
	},
	{
		name: 'Togo',
		capital: 'Lomé',
		languages: ['French'],
		population: 7143000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_to-flag.gif',
		currency: 'West African CFA franc'
	},
	{
		name: 'Tokelau',
		capital: 'Fakaofo',
		languages: ['English'],
		population: 1411,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Tokelau_%28local%29.svg',
		currency: 'New Zealand dollar'
	},
	{
		name: 'Tonga',
		capital: "Nuku'alofa",
		languages: ['English', 'Tonga (Tonga Islands)'],
		population: 103252,
		flag: 'https://www.worldometers.info//img/flags/small/tn_tn-flag.gif',
		currency: 'Tongan paʻanga'
	},
	{
		name: 'Trinidad and Tobago',
		capital: 'Port of Spain',
		languages: ['English'],
		population: 1349667,
		flag: 'https://www.worldometers.info//img/flags/small/tn_td-flag.gif',
		currency: 'Trinidad and Tobago dollar'
	},
	{
		name: 'Tunisia',
		capital: 'Tunis',
		languages: ['Arabic'],
		population: 11154400,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ts-flag.gif',
		currency: 'Tunisian dinar'
	},
	{
		name: 'Turkey',
		capital: 'Ankara',
		languages: ['Turkish'],
		population: 78741053,
		flag: 'https://www.worldometers.info//img/flags/small/tn_tu-flag.gif',
		currency: 'Turkish lira'
	},
	{
		name: 'Turkmenistan',
		capital: 'Ashgabat',
		languages: ['Turkmen', 'Russian'],
		population: 4751120,
		flag: 'https://www.worldometers.info//img/flags/small/tn_tx-flag.gif',
		currency: 'Turkmenistan manat'
	},
	{
		name: 'Turks and Caicos Islands',
		capital: 'Cockburn Town',
		languages: ['English'],
		population: 31458,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_the_Turks_and_Caicos_Islands.svg',
		currency: 'United States dollar'
	},
	{
		name: 'Tuvalu',
		capital: 'Funafuti',
		languages: ['English'],
		population: 10640,
		flag: 'https://www.worldometers.info//img/flags/small/tn_tv-flag.gif',
		currency: 'Australian dollar'
	},
	{
		name: 'Uganda',
		capital: 'Kampala',
		languages: ['English', 'Swahili'],
		population: 33860700,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ug-flag.gif',
		currency: 'Ugandan shilling'
	},
	{
		name: 'Ukraine',
		capital: 'Kiev',
		languages: ['Ukrainian'],
		population: 42692393,
		flag: 'https://www.worldometers.info//img/flags/small/tn_up-flag.gif',
		currency: 'Ukrainian hryvnia'
	},
	{
		name: 'United Arab Emirates',
		capital: 'Abu Dhabi',
		languages: ['Arabic'],
		population: 9856000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ae-flag.gif',
		currency: 'United Arab Emirates dirham'
	},
	{
		name: 'United Kingdom of Great Britain and Northern Ireland',
		capital: 'London',
		languages: ['English'],
		population: 65110000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_uk-flag.gif',
		currency: 'British pound'
	},
	{
		name: 'America',
		capital: 'Washington, D.C.',
		languages: ['English'],
		population: 323947000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_us-flag.gif',
		currency: 'United States dollar'
	},
	{
		name: 'Uruguay',
		capital: 'Montevideo',
		languages: ['Spanish'],
		population: 3480222,
		flag: 'https://www.worldometers.info//img/flags/small/tn_uy-flag.gif',
		currency: 'Uruguayan peso'
	},
	{
		name: 'Uzbekistan',
		capital: 'Tashkent',
		languages: ['Uzbek', 'Russian'],
		population: 31576400,
		flag: 'https://www.worldometers.info//img/flags/small/tn_uz-flag.gif',
		currency: "Uzbekistani so'm"
	},
	{
		name: 'Vanuatu',
		capital: 'Port Vila',
		languages: ['Bislama', 'English', 'French'],
		population: 277500,
		flag: 'https://www.worldometers.info//img/flags/small/tn_nh-flag.gif',
		currency: 'Vanuatu vatu'
	},
	{
		name: 'Venezuela (Bolivarian Republic of)',
		capital: 'Caracas',
		languages: ['Spanish'],
		population: 31028700,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ve-flag.gif',
		currency: 'Venezuelan bolívar'
	},
	{
		name: 'Viet Nam',
		capital: 'Hanoi',
		languages: ['Vietnamese'],
		population: 92700000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_vm-flag.gif',
		currency: 'Vietnamese đồng'
	},
	{
		name: 'Wallis and Futuna',
		capital: 'Mata-Utu',
		languages: ['French'],
		population: 11750,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Flag_of_Wallis_and_Futuna.svg',
		currency: 'CFP franc'
	},
	{
		name: 'Western Sahara',
		capital: 'El Aaiún',
		languages: ['Spanish'],
		population: 510713,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_the_Sahrawi_Arab_Democratic_Republic.svg',
		currency: 'Moroccan dirham'
	},
	{
		name: 'Yemen',
		capital: "Sana'a",
		languages: ['Arabic'],
		population: 27478000,
		flag: 'https://www.worldometers.info//img/flags/small/tn_ym-flag.gif',
		currency: 'Yemeni rial'
	},
	{
		name: 'Zambia',
		capital: 'Lusaka',
		languages: ['English'],
		population: 15933883,
		flag: 'https://www.worldometers.info//img/flags/small/tn_za-flag.gif',
		currency: 'Zambian kwacha'
	},
	{
		name: 'Zimbabwe',
		capital: 'Harare',
		languages: ['English', 'Shona', 'Northern Ndebele'],
		population: 14240168,
		flag: 'https://www.worldometers.info//img/flags/small/tn_zi-flag.gif',
		currency: 'Botswana pula'
	}
]
export default countriesData;
