// ==UserScript==
// @name        Travian: Attack Builder is back (T4 & T3)
// @author      سكربت تحديد وقت وصول الهجوم
// @author      Update by TDS // سلطان الصعبي
// @include     *travian*a2b.php*
// @include     *travian*build.php?*id=39*
// @version     4.0.2
// ==/UserScript==

if (getCords() == 'undefined') return;
function splitN (a, c) {
	var value = a.split(c);

	for (var i=0; i<value.length; i++) {
		value[i] = parseInt(value[i]);
	}

	return value;
}

function $(id) {
  return document.getElementById(id);
}
function $t(iHTML) {return document.createTextNode(iHTML);};
        function GM_addStyle(css) {
            var head = document.getElementsByTagName('head')[0];
            if (head) {
                var style = document.createElement("style");
                style.type = "text/css";
                style.appendChild($t(css));
                head.appendChild(style);
            }
        };

var targetSplit = ",";
var cordsSplit = "|";
var referenceSeconds = 0;

timerIntervalId = 0;

addInfoDiv();

var text = [];
var cataText = [];
var sLang = "";
detectLanguage();

switch(sLang)
{

	case "br": // by nbittencourt
	case "pt":
		text = ["Descendo o dedo =)","Tipo inválido de ataque!","Sem coordenadas!","Tropas insuficientes! (Tropas #","Tropas não informadas","Iniciando","Coordenadas inválidas","Sem unidades de reconhecimento","Concluído","Configuração da Onda:","Adicionar Onda","Reiniciar","Configuração de Ataque:","Tipo de Ataque:","Normal","Reforço","Assalto","Espiar recursos e tropas","Espiar defesas e tropas","Coordenadas","Senta o dedo! =)","Hora de Chegada","Chegada às:","Definir hora de chegada","Número de ataques desta onda","com '|' ex: 0,0|1,1","ERRO:","Impossível pegar a aldeia ativa. Considerando que a conta só possui uma aldeia","Chegada programada para:","Time between waves in ms: (default 500) "];
		cataText = ["Escolha um alvo =)","Aleatório","Bosque","Poço de Barro","Mina de Ferro","Campo de Cereais","Serraria","Alvenaria","Fundição","Moinho","Padaria","Armazém","Celeiro","Ferreiro","Fábrica de Armaduras","Praça de Torneios","Edifício Principal","Ponto de Reunião Militar","Mercado","Embaixada","Quartel","Cavalaria","Oficina","Academia","Casa do Povo","Residência","Palácio","Companhia do Comércio","Grande Quartel","Grande Cavalaria","Mansão do Herói","Grande Armazém","Grande Celeiro","Maravilha do Mundo","Tesouraria"];
		break;

	case "et"://by jeje
		text = ["Ataca!!! =)","Tipo de ataque invalido!","No hay coordenadas!","No hay suficientes Tropas! (Tropas #","No tropas introducidas","Empezando","Problamente malas coordenadas","No hay exploradores","Correcto-Hecho","Configurar Ataque:","Añadir nuevo ataque","Resetear","Configurar ataque:","Tipo de ataque:","Normal","Refuerzos","Atraco","Acechar Produccion/Tropas","Achechar Defensas/Tropas","Coordenadas","Ataca camarada! =)","Tiempo de Llegada","Llegara a las :","Establecer tiempo de llegada","Numero de ataques de esta estrategia","con '|' ex: 0,0|1,1","ERROR:","Incapaz de encontrar la aldea activa. Assuming one village account","Tiempo de llegada establecido a las:","Time between waves in ms: (default 500) "];
		cataText = ["Selecciona un objectivo =)","Aleatorio","Leñador","Barrena","Mina Hierro","Campo de Cereales","Serreria","Ladrillar","Fundicion","Molino","Panaderia","Almacen","Granero","Herreria","Armeria","Plaza de Torneos","Edificio Principal","Plaza de Reuniones","Mercado","Embajada","Cuartel","Establo","Oficina","Academia","Ayuntamiento","Residencia","Palacio","Oficina de comercio","Cuartel Grande","Establo Grande","Casa del Heroe","Almacen Grande","Granero Grande","Maravilla","Tesoro"];
		break;

	case "lt":
		text = ["Ataka vykdoma","Klaidingas atakos tipas","Nepasirinktos koordinatės","Nepakanka karių (Karių skaičius","Nepasirinkti kariai","Pradedama","Klaidingos koordinatės","Trūksta žvalgybinių karių","Įvykdyta","Bangų nustatymai:","Pridėti naują bangą","Pradiniai nustatymai","Atakų nustatymai:","Atakos tipas:","Ataka","Pastiprinimas","Reidas","Resursų bei pajėgų žvalgyba","Gynybinių fortifikacijų bei pajėgų žvalgyba","Koordinatės","Ataka","Atvykimas","Atakos laikas:","Nustatyti atakos laiką","atakų skaičius","atskirti su \'|\' pvz.: 0,0|1,1","KLAIDA:","Neįmanoma gauti gyvenviečių koordinačių. Tikriausiai yra tik viena gyvenvietė.","Karių atvykimo laikas nustatytas:","Vykdoma","Time between waves in ms: (default 500) "];
		cataText = ["Nustatyti taikinį","Atsitiktinai","Medžių kirtavietė","Molio karjeras","Geležies kasykla","Grūdų ferma","Lentpjūvė","Plytinė","Liejykla","Malūnas","Kepykla","Sandėlis","Klėtis","Ginklų kalvė","Šarvų kalvė","Arena","Gyvenamasis pastatas","Susibūrimo vieta","Turgavietė","Ambasada","Kareivinės","Arklidė","Dirbtuvės","Akademija","Rotušė","Rezidencija","Valdovo rūmai","Iždinė","Prekybos rūmai","Didžiosios kareivinės","Didžioji arklidė","Karžygio namai","Didysis sandėlis","Didžioji klėtis","Pasaulio stebuklas","Treasury"];
		break;

	case "tr"://by kustah
		text = ["vur tekmeyi =)","yanlış atak tipi!","cordinat yok!","yeterli asker yok! (askerler #","asker seçilmedi","başlıyor","yanlış kordinat","gözcü yok","Bitti","Dalga ayarı:","Yeni dalga ekle","Reset","Atak ayarı:","Atak tipi:","Normal","Destek","Yağmalama","Hammade gözle","Defans gözle","Kordinat","Vur tekmeyi! =)","Ulaşım zamanı","Varış saati:","Ulaşım zamanı ayarı","Dalgadaki saldırı sayısı","with '|' ex: 0,0|1,1","Hata:","Hesap kapalı","Ulaşım zamanı :","Time between waves in ms: (default 500) "];
		cataText = ["Select a target =)","Random","Orman","Tugla ocagı","Demir madeni","Tarla","Marangozhane","Tuğla Fırını","Demir dökümhanesi","Değirmen","Ekmek fırını","Hammadde deposu","Tahıl ambarı","Silah dökümhanesi","Zırh dökümhanesi","Turnuva alanı","Merkez binası","Askeri üs","Pazar yeri","Elçilik","Kışla","Ahır","Tamirhane","Akademi","Belediye","Köşk","Saray","Ticaret merkezi","Büyük kışla","Büyük ahır","Kahraman kışlası","Büyük hammadde deposu","Büyük Tahıl ambarı","Dünya harikası","Treasury"];
		break;

	case "de":
		text = ["Whooping some ass =)","Falscher Angriffs Typ!","Keine Koordinaten!","nicht genug Truppen! (Truppen #","Keine Truppen Eingabe","Startet","Falsche Koordinaten","Keine Späher!","Fertig","Wellen Einstellung:","Neue Welle hinzufügen","Abbrechen","Angriffs Einstellungen:","Angriffs Typ:","Angriff: Normal","Unterstützung","Angriff: Raubzug","Res/Truppen ausspähen","Def/Truppen ausspähen","Koordinaten","Whoop some ass! =)","Ankunftszeit","Ankunft in:","Ankunftszeit festlegen","Anzahl der Angriffe der spezifischen Welle","mit '|' ex: 0,0|1,1","ERROR:","Unable to get active village. Assuming one village account","Ankunftszeit gesetzt für:","Time between waves in ms: (default 500) "];
		cataText = ["Select a target =)","Random","Holzfäller","Lehmgrube","Eisenmiene","Getreidefeld","Sägewerk","Lehmbrennerei","Eisengießerei","Getreidemühle","Bäckerei","Rohstofflager","Kornspeicher","Rüstungsschmiede","Waffenschmiede","Tunierplatz","Hauptgebäude","Versammlungsplatz","Marktplatz","Botschaft","Kaserne","Stall","Siege Workshop","Akademie","Rathaus","Residenz","Palast","Marktplatz","Große Kaserne","Großer Stall","Heldenhof","Goßes Rohstofflager","Großer Kornspeicher","Weltwunder","Treasury"];
		break;

	case "bg": //от IYI-Aryan
		text = ["Айде, секса почва =)","Невалиден тип атака!","Не сте въвели координати!","недостатъчно войски! (Армии #","Не сте въвели войски","Започваме","Вероятно кофти координати","Нямате разузнавачи","Готово","Настройка на вълните:","Добави нова вълна","Изчисти","Настройка на атаката:","Тип атака:","Нападение","Подкрепление","Набег","Разузнаване рес/войски","Разузнаване укрепл/войски","Координати","Скъсай му шортите! =)","Час на пристигане","Пристигни в:","Нагласи пристигане в точен час","Бр. идентични атаки с тази специфична настройка","разделете координатите на всяка отделна цел с '|' например: 0,0|1,1","ГРЕШКА:","Неуспех при извличане на информация за активното село. Вероятно акаунтът е само с едно село","Пристигането в точен час нагласено за:","Time between waves in ms: (default 500) "];
		cataText = ["Избери цел =)","Случайно","Сечище","Глинена кариера","Рудник","Житно поле","Дъскорезница","Тухларна","Леярна","Мелница","Пекарна","Склад","Хамбар","Ковачница за оръжия","Ковачница за брони","Арена","Главна сграда","Сборен пункт","Пазар","Посолство","Казарма","Конюшня","Работилница","Академия","Кметство","Резиденция","Дворец","Търговска палата","Голяма казарма","Голяма конюшня","Таверна","Голям склад","Голям хамбар","Чудо","Treasury"];
		break;

	case "cz": //CeP
		text = ["Odesílám","Chybný typ útoku!","Chybí souřadnice!","Nedostatek jednotek! (Jednotka #","Neurčil jsi útočné jednotky :)","Start","Asi špatné souřadnice","Nemáš špehy","Hotovo","Nastavení vlny:","Přidat další vlnu","Reset","Nastavení útoku:","Typ útoku:","Útok","Podpora","Loupež","Špehovat suroviny/jednotky","Špehovat obranu/jednotky","Souřadnice","Odeslat útok","Zjistit čas příchodu","Přijít v:","Načasovat příchod","Počet útoků ve vlně","oddělovač souřadnic - ';' - středník - např.: -5|10;51|-110","CHYBA:","Nelze odeslat ..","Příchod nastaven na:","Time between waves in ms: (default 500) "];
		cataText = ["Vyber cíl =)","Náhodný","Dřevorubec","Hliněný důl","Železný důl","Obilné pole","Pila","Cihelna","Slévárna","Mlýn","Pekárna","Sklad","Sýpka","Kovárna","Zbrojnice","Turnajové hřiště","Hlavní budova","Shromaždiště","Tržiště","Ambasáda","Kasárny","Stáje","Dílna","Akademie","Radnice","Rezidence","Palác","Obchodní kancelář","Velké kasárny","Velké stáje","Hrdinský dvůr","Velký sklad","Velká sýpka","Div světa","Treasury"];
		break;

	case "pt"://by MauDaFaca
		text = ["Vai-te a eles =)","Tipo de ataque invalido!","Sem coordenadas!","Sem tropas suficientes! (Tropas #","Sem especificação de tropas","Começando","Provavelmente más coordenadas","Sem batedores","Feito","Configuração da onda:","Adicionar nova onda","Zerar","Configurar ataque:","Tipo de ataque:","Normal","Reforço","Assalto","Espiar Rec/Tropas","Scout Def/Tropas","Coordenadas","Vai-te a eles! =)","tempo de chegada","Chegada às:","Devem chegar às","Numero de ataques desta onda","Com '|' ex: 0,0|1,1","ERRO:","Incapaz de encontrar uma aldeia activa. Assumindo uma conta de aldeia","Tempo de chegada às:","Time between waves in ms: (default 500) "];
		cataText = ["Escolha um alvo =)","À sorte","Floresta","Pço de barro","Mina de ferro","Campo de cereais","Serração","Oleiro","Fundição","Moinho","Padaria","Armazem","Celeiro","Ferreiro","Fábrica de Armaduras","Praça de troneios","Edificio principal","Ponto de reunião","Mercado","Embaixada","Quartel","Estábulo","Oficina","Academia","Casa do povo","Residencia","Palacio","Companhia do comércio","Grande quartel","Grande estábulo","Residência do heroi","Grande armazem","Grande celeiro","Maravilha do mundo","Treasury"];
		break;

	case "sk": //by eth4rendil
		text = ["Rozbi tú lamu =)","Chybný typ útoku!","žiadne súradnice!","Nedostatok vojakov! (Vojak #","Žiadny vojaci na utočenie :)","Začínam","Pravdepodobne zlé súradnice","žiadny špeh","Hotovo","Nastavenie vlny:","Pridať novú vlnu","Reset","Nastavenie útoku:","Typ útoku:","Útok","Podpora","Lúpež","Špehovať suroviny a vojakov","Špehovat obranne budovy a vojakov","Súradnice","Rozbi tú lamu! =)","Čas príchodu","Prísť o:","Nastaviť časovaný príchod","Počet útokov v danej vlne","with '|' ex: 0,0|1,1","Error:","Nemozno odoslat ..","Čas príchodu nastaveny na:","Time between waves in ms: (default 500) "];
		cataText = ["Vyberte si cieľ =)","Náhodne","Drevorubač","Hlinená baňa","Železná baňa","Obilné pole","Píla","Teheľňa","Zlievareň","Mlyn","Pekáreň","Sklad","Sýpka","Kováčska dielňa","Zbrojnica","Aréna","Hlavná budova","Bod stretunutia","Trhovisko","Ambasáda","Kasárne","Stajne","Dielňa","Akadémia","Radnica","Rezidencia","Palác","Obchodná kancelária","Velké kasárne","Velké stajne","Hrdinský dvoj","Velký sklad","Velká sýpka","Div sveta","Treasury"];
		break;

	case "pl": //by robertnik
		text = ["Liczę coś tam :P","Zły typ ataku!","Brak współrzędnych!","Źle wybrałeś jednostki! (Atak #","Nie wybrano jednostek!","Zaplanowany ATAK","Złe współrzędne","Nie wybrałeś szpiegów","Atakuj ","Wybierz jednostki:","Dodaj nowy atak","Wyczyść","Szczegóły ataku:","Typ ataku:","Atak: Normalny","Posiłki","Atak: Grabież","Obserwuj surowce","Obserwuj fortyfikacje","Współrzędne","Zaplanuj, później odśwież ;)","Pokaż aktualny czas ataku","Przybycie o:","Zaplanuj atak o czasie dojścia","Ilość ataków","inny cel po ',' przykład: 0|0,1|1","BŁĄD: ","Niezdolny dostać aktywną wieś.","Zaplanowany atak dojdzie o: ","Czas pomiędzy falami w ms: (domyślnie 500) "];
		cataText = ["Wybierz cel =)","Losowy cel","Las","Kopalnia gliny","Kopalnia żelaza","Pole","Tartak","Cegielnia","Huta żelaza","Młyn","Piekarnia","Magazyn","Spichlerz","Kuźnia","Zbrojownia","Plac turniejowy","Główny budynek","Miejsce zbiórki","Rynek","Ambasada","Koszary","Stajnia","Warsztat","Akademia","Ratusz","Rezydencja","Pałac","Targ","Duże koszary","Duża stajnia","Dwór bohaterów","Duży magazyn","Duży spichlerz","Cud :P","Treasury"];
		break;

	case "ua": //By Optimusik
		text = ["Надерти сідниці! =)","Невірний тип атаки!","Вкажіть координати!","більше немає військ! (Військо #","Не вказані війська","Початок","Ймовірно невірні координати","Немає розвідників","Готово","Налаштування хвилі:","Додати хвилю","Скинути","Налаштування атаки:","Тип атаки:","Звичайна","Підкріплення","Набіг","Розвідати ресурси та військо","Розвідати оборонні споруди та військо","Координати","Надерти сідниці! =)","Час прибуття","Прибуття в:","Встановлення часу прибуття","Кількість атак для вказаної хвилі","роздільник '|' наприклад: 0,0|1,1","Помилка:","Неможливо визначити активне поселення. Вкажіть одне з поселень","Час прибуття встановлений в:","Time between waves in ms: (default 500) "];
		cataText = ["Оберіть ціль =)","Випадково","Лісоповал","Глиняний кар'єр","Залізна копальня","Ферма","Деревообробний завод","Цегельний завод","Чавуноливарний завод","Млин","Пекарня","Склад","Зернова комора","Кузня зброї","Кузня обладунків","Арена","Головна будівля","Пункт збору","Ринок","Посольство","Казарма","Стайня","Майстерня","Академія","Ратуша","Резиденція","Палац","Торгівельна палата","Велика казарма","Велика стайня","Таверна","Великий склад","Велика зернова комора","Диво світу","Treasury"];
		break;

	case "ru": //by KrasivayaSvo
		text = ["Надрать задницу =)","Неправильный тип атаки!","Укажите координаты!","больше нет войск! (Войско #","Не указаны войска","Начало","Верояно неправильные координаты","Нет разведчиков","Готово","Настройки волны:","Добавить волну","Сброс","Настройки атаки:","Тип атаки:","Нормальная","Подкрепление","Нападение","Разведка ресурсов и войск","Разведка обороны и войск","Координаты","Надрать задницу! =)","Время прибытия","Прибытие в:","Установка времени прибытия","Число атак для указанной волны","разделитель '|' например: 0,0|1,1","Ошибка:","Невозможно определить активную деревню. Укажите одну из деревень","Время прибытия установлено в:","Интервал между волнами в мс.: (по умолчанию 500) "];
		cataText = ["Выберите цель =)","Случайно","Лесопильный завод","Глиняный карьер","Железный рудник","Ферма","Деревообрабатывающий завод","Кирпичный завод","Чугунолитейный завод","Мукомольная мельница","Пекарня","Склад","Амбар","Кузница оружия","Кузница доспехов","Арена","Главное здание","Пункт сбора","Рынок","Посольство","Казарма","Конюшня","Мастерская","Академия","Ратуша","Резиденция","Дворец","Торговая палата","Большая казарма","Большая конюшня","Таверна","Большой склад","Большой амбар","Чудо света","Treasury"];
		break;

	case "fr": //by gedi
		text = ["Envoyer ! =)","Type d'attaque incorrect!","Pas de coord!","Pas assez de troupes! (Troupe #","Pas de troupe saisie","Départ","Mauvaises coord ?","Pas d'espions","Parti","Vague :","Autre vague","RAZ","Attaque :","Type d'attaque:","Normal","Assistance","Pillage","Espion. Res/Troupes","Espion. Def/Troupes","Coord.","Envoyer ! =)","Arrivée ","Arrivée a :","Fixe l'heure d'arrivée","Nombre d'attaques de cette vague","avec '|' ex: 0,0|1,1","ERREUR:","Impossible d'obtenir le village actif. Assume un seul village","Heure d'arrivée fixée à :","Time between waves in ms: (default 500) "];
		cataText = ["Selectionner une cible =)","Hasard","Bucheron","Carrière de terre","Mine Fer","Ferme de céréales","Scierie","Usine de poterie","Fonderie","Moulin","Boulangerie","Dépot de ressources","Silot","Usine d'armure","Armurerie","Place du tournoi","Bat Principal","Place rassemblement","Marché","Ambassade","Caserne","Ecurie","Atelier","Academie","Hotel de ville","Residence","Palais","Comptoire de commerce","Grande caserne","Grande Ecurie","Manoir du héros","Grand dépot","Grand Silot","Merveille","Treasury"];
		break;

	case "ae": ///by TDS
	case "sa": ///by TDS
    case "sy":
    case "eg":
		text = ["تم الهجوم =)","نوع الهجوم خاطئ!","لاتوجد إحداثيات!","عدد القوات الموجوده غير كافي! القوات رقم  #","لم يتم إختيار القوات","البداية","ربما الإحداثيات خاطئة","لم تختار وحدات كشافه","تم الهجوم","أعدادات القوات:","أضافة قوات هجوم جديدة","مسح القوات","أعدادات الهجوم:","نوع الهجوم:","هجوم: كامل","مساندة","هجوم: للنهب","التجسس على الموارد والقوات","التجسس على التحصينات والقوات","الإحداثيات","هجوم الآن! =)","وقت الوصول","الوصول في:","إختار وقت الوصول","عدد الهجمات","للهجوم على أكثر من قريه ضع هذه بين الإحداثيات',' مثال: 00|1,1|0","خطأ: ","تعذر الوصول الى القريه النشطه. من المفترض ان يكون من حساب واحد وقريه واحده","وقت الوصول حدد على:","الوقت بين الهجمات: (الإفتراضي 500) "," تعريب:سلطان الصعبي(TDS)"];
		cataText = ["أختار الهدف =)","عشوائي","الحطاب","حفرة الطين","منجم حديد","حقل القمح","معمل النشارة","مصنع الطوب","حديد مسبك","المطاحن","مخبز","مخزن","مخزن الحبوب","الحداد","مستودع الاسلحة","ساحة البطولة","المبنى الرئيسي","نقطة التجمع","السوق","السفارة","ثكنه","إسطبل","المصانع الحربية","الأكاديمية","البلدية","السكن","قصر","المكتب التجاري","ثكنة كبيرة","إسطبل كبير","قصر الأبطال","مخزن كبير","مخزن حبوب كبير","معجزة العالم","الخزنة"];
		break;

	case "dk": //Credit to Kennetha for the translation.
		text = ["Klargør angreb...","Ugyldig angrebstype!","Ingen koordinater!","Ikke nok tropper! (Enhed #","Ingen tropper valgt","Starter","Sandsynligvis ugyldige koordinater","Ingen spionenheder","Færdig","Angrebsindstillinger:","Tilføj ny angrebsbølge","Nulstil","Angrebsindstillinger:","Angrebstype:","Normalt","Opbakning","Plyndringstogt","Spionage Res/Tropper","Spionage Forsvar/Tropper","Koordinater","Angrib! =)","Ankomst tid","Ankomst:","Sæt timet ankomst","Antal angreb af den specifikke angrebsbølge","Adskil med '|' f.eks.: 0,0|1,1 for at sende angreb på flere byer af gangen","Fejl:","Kunne ikke finde aktiv landsby. Antager kontoen har én by.","Timet ankomst sat til:","Time between waves in ms: (default 500) "];
		cataText = ["Vælg et mål =)","Tilfælde","Skovhugger","Lergrav","Jernmine","Kornavler","Savværk","Lerbrænderi","Jernstøberi","Kornmølle","Bageri","Råstoflager","Kornkammer","Våbensmedje","Rustningssmedje","Turneringsplads","Hovedbygning","Forsamlingsplads","Markedsplads","Ambassade","Kaserne","Stald","Værksted","Akademi","Rådhus","Residens","Palads","Handelskontor","Stor kaserne","Stor stald","Heltebygning","Stort råstoflager","Stort kornkammer","Verdens Vidunder","Treasury"];
		break;

	case "hu": // by Mijo
		text = ["Zúzás folyamatban =)","Érvénytelen támadási típus!","Mik a koordináták?!","nincs elég sereg! (Sereg #","Nincs sereg megadva!","Indítás","Valószínűleg hibás cél!","Nincs kémed!","Kész!","Hullámok beállítása:","Új hullám","Lenulláz","Támadás beállítása:","Támadási forma:","Normál","Támogatás","Fosztogatás","Kémkedés Nyersanyagok/Seregek","Kémkedés Védelmi Berendezések/Seregek","Koordináták","Zúzzunk oda! =)","Érkezési idő","Érkezés ekkor:","Időzített érkezés","Az adott hullám támadásainak száma","Több cél elválasztása '|'-val pl: 0,0|1,1","HIBA: ","Nem lehet meghatározni az aktuális falut! Feltételezhetően egy falus játékos.","Időzített érkezés beállítva:","Time between waves in ms: (default 500) "];
		cataText = ["Válassz célpontot! =)","Véletlen","Favágó","Agyagbánya","Vasércbánya","Búzafarm","Fűrész üzem","Agyagégető","Vasöntöde","Malom","Pékség","Raktár","Magtár","Fegyverkovács","Páncélkovács","Gyakorlótér","Főépület","Gyülekezőtér","Piac","Követség","Kaszárnya","Istálló","Műhely","Akadémia","Tanácsháza","Rezidencia","Palota","Kereskedelmi központ","Nagy kaszárnya","Nagy istálló","Hősök háza","Nagy raktár","Nagy magtár","Világcsoda","Treasury"];
		break;

	case "no":
		text = ["Whooping some ass =)","Ugyldig angreps type!","Ingen koordinater!","Ikke nok tropper! (Enhet #","Ingen tropper valgt","Starter","Sannsynligvis ugyldige koordinater","Ingen spion enheter","Ferdig","Angrepsbølge oppsett:","Ny angrepsbølge","Nullstill","Angreps oppsett:","Angreps type:","Normal","Forsterkninger","Plyndringstokt","Spioner Res/Tropper","Spioner Forsvar/Tropper","Koordinater","Whoop some ass! =)","Ankomst tid","Ankommer:","Sett beregned ankomst tid","Antall repetisjoner av den angrepsbølgen","Skill med '|' f.eks: 0,0|1,1","Feil:","Klarte ikke å finne aktiv landsby. Antar konto med en landsby","Beregnet ankomst satt til:","Time between waves in ms: (default 500) "];
		cataText = ["Velg et mål =) ","Tilfeldig","Tømrer","Leirgrop","Jernmine","Kornåker","Sagbruk","Mursteinsopplag","Smelteverk","Mølle","Bakeri","Varehus","Silo","Våpensmed","Rustningssmed","Turneringsområde","Hovedbygning","Møteplass","Markedsplass","Ambassade","Kaserne","Stall","Verksted","Akademi","Rådhus","Residens","Palass","Handelskontor","Stor kaserne","Stor stall","Heltens villa","Stort varehus","Stor silo","Verdens underverk","Skattekammer"];
		break;
		
	case "ro":
		text = ["Se aplica bataia","Tip de atac incorect!","Lipsa coordonate!","N-ai trupe destule! (Trupa #","Nu ai bagat trupe","Start","Probabil coord gresite","Nu ai spioni","Terminat","Setare val:","Adaugare val","Resetare","Setare atac:","Tip de atac:","Normal","Intariri","Raid","Spionaj Res/Trupe","Spionaj Def/Trupe","Coordonate","Rupe-i curu!","Ora sosire","Soseste la:","Seteaza ora sosire","Nr. de atacuri/val specific","cu ',' ex: 0|0,1|1","EROARE:","Imposibil de gasit sat activ. Probabil cont cu un singur sat","Timp sosire setat la:","Timp intre valuri in ms: (default 500) "];
		cataText = ["Alege tinta","Aleator","Lemn","Put de lut","Mina de fier","Lan de grau","Fabrica de cherestea","Fabrica de caramida","Topitorie","Moara","Brutarie","Hambar","Granar","Fierarie","Armurier","Arena","Primarie","Adunare","Targ","Ambasada","Cazarma","Grajd","Atelier","Academie","Casa de cultura","Vila","Palat","Oficiu de comert","Cazarma extinsa","Grajd extins","Resedinta eroului","Hambar extins","Granar extins","Minunea lumii","Trezorerie"];
		break;
		
	case "us":
	case "com":
		text = ["Whooping some ass =)","Invalid attack type!","No cords!","not enough troops! (Troop #","No troop input","Starting","Probably bad cords","No scout units","Done","Wave setup:","Add new wave","Reset","Attack setup:","Attack type:","Normal","Reinforcement","Raid","Scout Res/Troops","Scout Def/Troops","Cords","Whoop some ass! =)","Arrival time","Arrive at:","Set timed arrival","Number of attacks of that specific wave","with '|' ex: 0,0|1,1","ERROR:","Unable to get active village. Assuming one village account","Timed arrival set at:","Time between waves in ms: (default 500) "];
		cataText = ["Select a target =)","Random","Woodcutter","Clay Pit","Iron Mine","Wheat Field","Sawmill","Brickworks","Iron Foundry","Flour Mill","Bakery","Warehouse","Granary","Blacksmith","Armory","Tournament Square","Main Building","Rally Point","Marketplace","Embassy","Barracks","Stable","Siege Workshop","Academy","Town Hall","Residence","Palace","Trade Office","Great Barracks","Great Stable","Hero\'s Mansion","Great Warehouse","Great Granary","Wonder of the World","Treasury"];
		break;

	case "hk":
	case "tw": //credit to chihsun for the translation.
	default:
		text = ["Whooping some ass =)","Invalid attack type!","No cords!","not enough troops! (Troop #","No troop input","Starting","Probably bad cords","No scout units","Done","Wave setup:","Add new wave","Reset","Attack setup:","Attack type:","Normal","Reinforcement","Raid","Scout Res/Troops","Scout Def/Troops","Cords","Whoop some ass! =)","Arrival time","Arrive at:","Set timed arrival","Number of attacks of that specific wave","with ',' ex: 0|0,1|1","ERROR:","Unable to get active village. Assuming one village account","Timed arrival set at:","Time between waves in ms: (default 500) ",""];
		cataText = ["Select a target =)","Random","Woodcutter","Clay Pit","Iron Mine","Wheat Field","Sawmill","Brickworks","Iron Foundry","Flour Mill","Bakery","Warehouse","Granary","Blacksmith","Armory","Tournament Square","Main Building","Rally Point","Marketplace","Embassy","Barracks","Stable","Siege Workshop","Academy","Town Hall","Residence","Palace","Trade Office","Great Barracks","Great Stable","Hero\'s Mansion","Great Warehouse","Great Granary","Wonder of the World","Treasury"];
		break;
};

//start variabler
var DID;
var timedAttacktimer = false;
cordN = 1;
var nthWave = 1;
firstRun = true;
wavesSent = 0;
nThisWave = 0;
numberattacks = 0;
var totalattacks = 0;
var troops = new Array();
var totTroops = new Array();
var cord;
var timestamp,timestamp_checksum;
var Race = getRace();
var referenceTime;
function exp(href) { return document.location.href.match(href) };
var ver4FL = true;
if(exp(/a2b/)) {
	ver4FL = false;
}
var a2bURL = ver4FL ? "build.php?tt=2&id=39": "a2b.php";
var ts = new Array(13);
function $g(aID) {return (aID != '' ? document.getElementById(aID) : null);};
function $gt(str,m) { return (typeof m == 'undefined' ? document:m).getElementsByTagName(str); };
function $at(aElem, att) {if (att !== undefined) {for (var xi = 0; xi < att.length; xi++) {aElem.setAttribute(att[xi][0], att[xi][1]); if (att[xi][0].toUpperCase() == 'TITLE') aElem.setAttribute('alt', att[xi][1]);};};};
function $t(iHTML) {return document.createTextNode(iHTML);};
function $e(nElem, att) {var Elem = document.createElement(nElem); $at(Elem, att); return Elem;};
function $ee(nElem, oElem, att) {var Elem = $e(nElem, att); if (oElem !== undefined) if( typeof(oElem) == 'object' ) Elem.appendChild(oElem); else Elem.innerHTML = oElem; return Elem;};
var timestamp1,timestamp_checksum1,rpPage;
function httpPost(url,data) {
	var xhttp = new XMLHttpRequest();
	data = encodeURI(data);
	xhttp.open("POST", url, false);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8");
	xhttp.send(data);
	return xhttp.responseText;
}

function reset()
{
	abort();
	nthWave = 1;

	waveInterfaceElement.innerHTML = table;
	addNewWave();

	var newWaveButton = document.getElementById('newWaveButton');
	newWaveButton.addEventListener("click", addNewWave, true);

	var resetButton = document.getElementById('resetButton');
	resetButton.addEventListener("click", reset, true);
}

/////////////////////////////////////////////////
/////////////////Angrep//////////////////////////
/////////////////////////////////////////////////

function attack(WavesSent)
{
	if (firstRun)
	{
		myimbabutton.innerHTML = '<div class=\"button-container\"><div class=\"button-position\"><div class="btl"><div class=\"btr"\><div class=\"btc"\></div></div></div><div class=\"bml"\><div class=\"bmr"\><div class=\"bmc"\></div></div></div><div class=\"bbl"\><div class=\"bbr"\><div class=\"bbc"\></div></div></div></div><div class=\"button-contents\">'+text[20]+'</div></div>';
		cordN = 1;
		numberOfWaves = nthWave -1;
		wavesSent = 0;
		c = document.getElementById('typeAttack').value;
		cords = document.getElementById('cords').value;
		cord = cords.split(targetSplit);
		spy = false;
		if (c>4)
		{
			spy = c-4;
			c=3;
		}
		if (c>6 || c<2)
		{
			errorMsg(text[1]);
			abort()
			return;
		}
		if (!cords)
		{
			errorMsg(text[2])
			abort()
			return;
		}

		ts = new Array(13);

		for (var num = 0;num<=13;num++)
		{
			troops[num] = new Array;
			if (num <=11)
			{

				if (!num)
				{
					troop = document.getElementsByName('number');
				}else {
					troop = document.getElementsByName('troop_' + num);
				}
				
				totTroops[num] = 0;
				for (var x = 0; x < troop.length;x++)
				{
					if (!num){totalattacks = totalattacks + parseInt(troop[x].value);}
					totTroops[num] = parseInt(totTroops[num]) + (parseInt(troop[x].value)) * (parseInt(troops[0][x]));
					troops[num][x] = troop[x].value				
				}
			}else{
				//troops[num] = new Array;
				troops[num+1] = new Array;
				for (var x = 0;x< troop.length; x++)
				{
					troops[12][x] = document.getElementById('gm_kata_' +(x+1) ).value;
					troops[13][x] = document.getElementById('gm_kata2_' +(x+1) ).value;
				}
			}
		}

		check = false;
		for(var x=1;x<=11;x++) //Sjekker om man har nok tropper
		{
			tempX = x;
			if(exp(/a2b/) && x==10) {tempX++;}
			//alert(getTotalUnit('t'+tempX) +'-'+ totTroops[x] + '-' + x);
			if ((totTroops[x] * cord.length)  > getTotalUnit('t'+tempX) ) {errorMsg(text[3] + x+ ")"); abort(); return;}
			if (totTroops[x] > 0) {check = true;}
		}
		if (!check)
		{
			errorMsg(text[4]);
			abort();
			return;
		}

		totalattacks = totalattacks * cord.length;
		firstRun = false;

		var sTime = document.evaluate(
				"id('tp1')",
				document,
				null,
				XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
				null);

		sTime = sTime.snapshotItem(0).textContent;
		var aMatch = sTime.match(/^([0-9]{1,2}):([0-9]{2}):([0-9]{2})$/i);

		addCount("<b>" + text[5] +"</b> ( "+aMatch[0]+" )", 1);


	}


	if (numberOfWaves > wavesSent)
	{
		var targetCord = splitN(cord[cordN-1], cordsSplit);
		var xcord = targetCord[0];
		var ycord = targetCord[1];
		timestamp = document.getElementsByName('timestamp')[0].value;
		timestamp_checksum = document.getElementsByName('timestamp_checksum')[0].value;	
		var postvar2 = 'timestamp='+timestamp+'&timestamp_checksum='+timestamp_checksum +'&b=1';
		/*for(var i = 1; i <= 9; i++) {
			postvar2 += "&t" +i+ "=" +troops[i][wavesSent];
		}
		postvar2 += "&t10="+troops[10][wavesSent]+"&t11=" +troops[11][wavesSent];

		if(troops[8][wavesSent] > 0) {
			if(troops[12][wavesSent]) {
				postvar2 += "&kata=" +troops[12][wavesSent];
			}
			if(troops[13][wavesSent]) {
				postvar2 += "&kata2=" +troops[13][wavesSent];
			}
		} else if (spy){
			if (Race == 2 && troops[3][wavesSent] > 0)
			{
				for(var i = 1; i <= 11; i++) {
					postvar2 += "&t" +i+ "=" + (i == 3 ? troops[i][wavesSent] : 0);
				}
			}
			else if (Race != 2 && troops[4][wavesSent] >0)
			{
				for(var i = 1; i <= 11; i++) {
					postvar2 += "&t" +i+ "=" + (i == 4 ? troops[i][wavesSent] : 0);
				}
			}
			postvar2 += "&spy=" +spy;
		}
		
		postvar2 += "&c=" + c + "&dname=&x=" + xcord + "&y=" + ycord + "&s1=ok";*/
		postvar2 +='&t1=' + troops[1][wavesSent] + '&t4=' + troops[4][wavesSent] + '&t7='+ troops[7][wavesSent] +'&t9='+ troops[9][wavesSent] +'&t2='+ troops[2][wavesSent] +'&t5='+ troops[5][wavesSent] +'&t8='+ troops[8][wavesSent] +'&t10='+ troops[10][wavesSent] +'&t3='+ troops[3][wavesSent] +'&t6='+ troops[6][wavesSent] +'&c='+ c +'&dname=&x='+xcord+'&y='+ ycord +'&s1=ok';

		
		rpPage = $ee('div',httpPost(a2bURL,postvar2),[['style','display:none;']]);
		var tInputs = $gt('INPUT',rpPage);
		
		for( var i=0; i< tInputs.length; i++ ) {
		t = tInputs[i].name;
		if( t == "timestamp" ) {
			timestamp1 = tInputs[i].value;
		}
		if( t == "timestamp_checksum" ) {
			timestamp_checksum1 = tInputs[i].value;
		}
		if( t == "a" ) {
			a = tInputs[i].value;
		}
		}
		
		var postvar = "timestamp="+timestamp1+"&timestamp_checksum="+timestamp_checksum1 + "&id=39&c=" +c+ "&kid=" +coordsXYToZ(xcord, ycord)+ "&a=" + a;

		for(var i = 1; i <= 9; i++) {
			postvar += "&t" +i+ "=" +troops[i][wavesSent];
		}

		postvar += "&t10=0&t11=" +troops[11][wavesSent];
		//postvar += "&t10=0&t11=" +troops[10][wavesSent];

		if(troops[8][wavesSent] > 0) {
			if(troops[12][wavesSent]) {
				postvar += "&kata=" +troops[12][wavesSent];
			}
			if(troops[13][wavesSent]) {
				postvar += "&kata2=" +troops[13][wavesSent];
			}
		} else if (spy){
			if (Race == 2 && troops[3][wavesSent] > 0)
			{
				for(var i = 1; i <= 11; i++) {
					postvar += "&t" +i+ "=" + (i == 3 ? troops[i][wavesSent] : 0);
				}
			}
			else if (Race != 2 && troops[4][wavesSent] >0)
			{
				for(var i = 1; i <= 11; i++) {
					postvar += "&t" +i+ "=" + (i == 4 ? troops[i][wavesSent] : 0);
				}
			}
			postvar += "&spy=" +spy;
		}

		postvar = postvar + '&s1=ok';
		

		
		post3(a2bURL, postvar);
	

		nThisWave++
		if (nThisWave >= troops[0][wavesSent]) {wavesSent++; nThisWave = 0;}
		timebetweenwaves = document.getElementById('timebetween').value;
		setTimeout(function(){attack()},timebetweenwaves);
	}else{
		if (cord.length > cordN )
		{
			cordN++;
			nThisWave = 0;
			wavesSent = 0;
			attack();
		}
	}
}


function coordsXYToZ(x, y) {
	x = parseInt(x);
	y = parseInt(y);
	var coordZ = (x + 401) + ((400 - y) * 801);
	return coordZ;
}

function post3 (url, data) {
	GM_xmlhttpRequest({
		method: "POST",
		url: url,
		headers:{'Content-type':'application/x-www-form-urlencoded'},
		data:encodeURI(data),
		onload: function(responseDetails) {
			numberattacks++;
			if (numberattacks >= totalattacks)
			{

				var sTime = document.evaluate(
						"id('tp1')",
						document,
						null,
						XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
						null);

				sTime = sTime.snapshotItem(0).textContent;
				var aMatch = sTime.match(/^([0-9]{1,2}):([0-9]{2}):([0-9]{2})$/i);

				addCount(".");
				if (exp(/a2b/)){
					addCount("<a href='build.php?id=39'>"+text[8]+" ("+aMatch[0]+") x "+numberattacks+"("+totalattacks+")</a>");  //legg inn delay her
				}else{	
					addCount("<a href='build.php?tt=1&id=39'>"+text[8]+" ("+aMatch[0]+") x "+numberattacks+"("+totalattacks+")</a>");  //legg inn delay her
				}
				abort();
			}else{
				addCount(".");
			}

		}
	});
}

cssString = '' +
			'#AttackB input,#myTable {-webkit-border-radius: 8px;-moz-border-radius: 8px;border-radius: 8px;border: 1px solid white; border-color: rgb(170, 170, 170);}' +
			'#attackt, #myTable {-webkit-border-radius: 8px;-moz-border-radius: 8px;border-radius: 8px;background-color: #E4E4E4; border-collapse: separate;empty-cells: show;line-height: 16px;margin: 0;width: 100%;}'+
			'#attackt td,#myTable td {-webkit-border-radius: 8px;-moz-border-radius: 8px;border-radius: 8px;border: 1px solid white; border-color: rgb(170, 170, 170);background-color: #fff; padding: 5px 5px; }';
GM_addStyle(cssString);

var attackInterface = document.createElement("div");
attackInterface.id = "AttackB"
attackInterface.innerHTML = '<fieldset style=\"margin: 5px 0;-webkit-border-radius: 8px;-moz-border-radius: 8px;border-radius: 8px;border:2px dotted #969796\"><legend style=\"background: #C3F199;border: dotted 1px #969796;-webkit-border-radius: 8px;border-radius: 8px;padding: 3px;\">'+text[12]+'</legend><div id=start>' +
	'<table id="attackt"><tr><td style=\"text-align:center;\">'+text[13]+'</td>'+
	'<td style=\"text-align:center;\" colspan="2">' +
		'<select style=\"-webkit-border-radius: 8px;-moz-border-radius: 8px;border-radius: 8px; background: #F7F7F7\" name=\"typeAttack\" id=\"typeAttack\" class=\"fm\">' +
			'<option value=\"3\">'+text[14]+'</option>' +
			'<option value=\"2\">'+text[15]+'</option>' +
			'<option value=\"4\">'+text[16]+'</option>' +
			'<option value=\"5\">'+text[17]+'</option>' +
			'<option value=\"6\">'+text[18]+'</option>' +
		'</select>' +
	'</td></tr><tr><td colspan="3" style=\"text-align:center;\">'+text[19]+' ' + ' <span style="font: 11px/1.5em Tahoma,Verdana,Arial !important; color:grey;">( '+text[25]+' )</span>' + '</td>'+
	'</tr><tr><td colspan="3">'+
		'<input type=\"text\" value="' +getCords() +  '" name=\"cords\" id=\"cords\" class=\"fm\" style=\"width: 98%\" /></td></tr><tr><td style=\"text-align:center;\" colspan="3">'+ text[29] +'<input class=\"fm\" style=\"text-align:center; color:#0000ff;\" id=\"timebetween\" type=\"text\" value=\"500\" size=\"4\" />' +
	'</td>'+
	'</tr><tr><td style=\"text-align:center;\">'+
	'<button id=\"myimbabutton\" ><div class=\"button-container\"><div class=\"button-position\"><div class="btl"><div class=\"btr"\><div class=\"btc"\></div></div></div><div class=\"bml"\><div class=\"bmr"\><div class=\"bmc"\></div></div></div><div class=\"bbl"\><div class=\"bbr"\><div class=\"bbc"\></div></div></div></div><div class=\"button-contents\">'+text[20]+'</div></div></button>' +
	'</td><td style=\"text-align:center;\">'+
		'<button id=\"arrivalTime\"><div class=\"button-container\"><div class=\"button-position\"><div class="btl"><div class=\"btr"\><div class=\"btc"\></div></div></div><div class=\"bml"\><div class=\"bmr"\><div class=\"bmc"\></div></div></div><div class=\"bbl"\><div class=\"bbr"\><div class=\"bbc"\></div></div></div></div><div class=\"button-contents\">'+text[21]+'</div></div></button>'+
	'</td><td style=\"text-align:center;\">'+
	'<div id=\"arrivalTimeDiv\"></div>'+
	'</td></tr><tr><td >' 
	+text[22]+
	'</td><td colspan="2" style=\"text-align:center;\">'+
	'<input style=\"width: 30%; text-align:center;\" id=\"timedArrivalInput\" value=\"00:00:00" class=\"fm\"> <button id=\"timedArrivalButton"><div class=\"button-container\"><div class=\"button-position\"><div class="btl"><div class=\"btr"\><div class=\"btc"\></div></div></div><div class=\"bml"\><div class=\"bmr"\><div class=\"bmc"\></div></div></div><div class=\"bbl"\><div class=\"bbr"\><div class=\"bbc"\></div></div></div></div><div class=\"button-contents\">'+text[23]+'</div></div></button>'+
	'</td></tr></table>';


targetLogo = "<img src=data:image/gif,GIF89a%0F%00%0F%00%F7%00%00%00%00%00%FF%FF%FF%CC%00%00%CB%00%00%CA%00%00%C9%00%00%C8%00%00%C7%00%00%CC%01%01%CC%03%03%CB%03%03%C9%03%03%CD%05%05%CB%05%05%CC%06%06%CB%06%06%CE%07%07%CC%08%08%CE%09%09%CB%09%09%CE%0A%0A%CD%0B%0B%CF%0D%0D%CC%0D%0D%CF%0E%0E%CD%0E%0E%CF%11%11%CD%11%11%D0%12%12%CF%13%13%D0%15%15%CF%15%15%D1%17%17%D1%18%18%D1%19%19%CF%19%19%D2%1A%1A%D1%1B%1B%D2%1D%1D%D3%1F%1F%D3%20%20%D3%23%23%D2%24%24%D4))%D4%2B%2B%D4%2C%2C%D6%2F%2F%D5%2F%2F%D500%D611%D622%D744%D777%D888%D788%D8%3B%3B%D8%3D%3D%D9%3F%3F%D9CC%DAEE%DAGG%DBII%DBKK%DCLL%DBMM%DBNN%DDTT%DDWW%DEXX%DF%5B%5B%DF%5C%5C%DF%5E%5E%E0__%E0aa%DF%60%60%E0bb%E1gg%E0hh%E2kk%E1kk%E2ll%E3oo%E3pp%E3rr%E3tt%E4ww%E4xx%E4zz%E5%7C%7C%E5~~%E6%7F%7F%E6%80%80%E6%82%82%E7%84%84%E8%86%86%E7%87%87%E8%88%88%E7%88%88%E8%8A%8A%E7%8B%8B%E9%8F%8F%E9%90%90%EA%93%93%E9%92%92%EA%95%95%EB%97%97%EB%99%99%EB%9A%9A%EC%9B%9B%EC%9D%9D%EC%9E%9E%EB%9D%9D%EB%9E%9E%EC%A0%A0%EC%A3%A3%ED%A4%A4%ED%A9%A9%EF%AB%AB%EF%AD%AD%EF%AF%AF%EF%B1%B1%F0%B3%B3%EF%B2%B2%F0%B4%B4%F1%B9%B9%F1%BB%BB%F2%BD%BD%F1%BD%BD%F2%BF%BF%F2%C0%C0%F4%C4%C4%F3%C3%C3%F3%C5%C5%F4%C7%C7%F4%C8%C8%F5%CA%CA%F5%CD%CD%F5%CF%CF%F6%D1%D1%F6%D2%D2%F7%D5%D5%F8%D8%D8%F7%D7%D7%F7%D8%D8%F8%DA%DA%F8%DC%DC%F8%DE%DE%FA%E1%E1%F9%E1%E1%FA%E3%E3%F9%E2%E2%FA%E4%E4%FA%E5%E5%FA%E7%E7%FB%EA%EA%FA%E9%E9%FC%ED%ED%FB%EC%EC%FC%EF%EF%FB%EE%EE%FC%F0%F0%FD%F3%F3%FD%F4%F4%FE%F6%F6%FE%F8%F8%FD%F7%F7%FE%F9%F9%FE%FB%FB%FF%FD%FD%FF%FE%FE%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%2C%00%00%00%00%0F%00%0F%00%00%08%81%00%03%08%0C%80%A8%09%0C%185%9A%20%1A%C8%10%86%80%87%10%05%C0%60%18%00%E2%81%845%0E%40%1C%E8P%40%13%8AM%1E%8E%20%F8%F0%23%C5%00!%05%B0%C9%F2P%20%22%87%23%16%06%18%E1%11%C6E%81%1D%5B%06p%F2%D0%A1%C9%88%02%04%A2yxB%22N%01%1A%83%06%F8%F1%90%A5%D2%00%40%24%CA%2C%89H%E3%C4%93!%0F%E4%09%D0%11%08H%91%03%91B%04RT%ECW%A0FObBS%03!%1A%99%02%03%02%00%3B>"

var startIcon = (getRace()*10)+1;
var waveInterfaceElement = document.createElement('fieldset');
	waveInterfaceElement.setAttribute('style',"border:2px dotted #969796;-webkit-border-radius: 8px;-moz-border-radius: 8px;border-radius: 8px;");
var table = "<legend  style=\"background: #C3F199;border: dotted 1px #969796;-webkit-border-radius: 8px;border-radius: 8px;padding: 3px;\">"+text[9]+"</legend><table style=\"margin-bottom: 7px;\" id=\"myTable\"  ><tr><td style=\"text-align:center;\">#*</td>";

for (var count = startIcon;count<startIcon+10;count++) //icons
{
    table += "<td style=\"text-align:center;\"><img src=\"img/x.gif\" class=\"unit u"+count+"\"></td>";
}

table += "<td style=\"text-align:center;\"><img src=\"img/x.gif\" class=\"unit uhero\"></td>";
table += '</tr></table><button id="newWaveButton"><div class=\"button-container\"><div class=\"button-position\"><div class="btl"><div class=\"btr"\><div class=\"btc"\></div></div></div><div class=\"bml"\><div class=\"bmr"\><div class=\"bmc"\></div></div></div><div class=\"bbl"\><div class=\"bbr"\><div class=\"bbc"\></div></div></div></div><div class=\"button-contents\">'+text[10]+'</div></div></button> <button id="resetButton"><div class=\"button-container\"><div class=\"button-position\"><div class="btl"><div class=\"btr"\><div class=\"btc"\></div></div></div><div class=\"bml"\><div class=\"bmr"\><div class=\"bmc"\></div></div></div><div class=\"bbl"\><div class=\"bbr"\><div class=\"bbc"\></div></div></div></div><div class=\"button-contents\">'+text[11]+'</div></div></button> <span style="font: 11px/1.5em Tahoma,Verdana,Arial !important; color:grey;">( * - '+text[24]+' )</span><span style="font: 11px/1.5em Tahoma,Verdana,Arial !important; color:#ff0000;">'+text[30]+'</span>';

waveInterfaceElement.innerHTML = table;


attackInterface.appendChild(waveInterfaceElement);



if (exp(/a2b/)) {
var interfaceStart = document.evaluate(
	"//form[@action='a2b.php'][@name='snd']",
	document,
	null,
	XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
	null);

} else {
var interfaceStart = document.evaluate(
	"//form[@action='build.php?id=39&tt=2'][@name='snd']",
	document,
	null,
	XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
	null);
}

interfaceStart = interfaceStart.snapshotItem(0);

var InGameDiv = interfaceStart.parentNode;
InGameDiv.insertBefore(attackInterface, interfaceStart.nextSibling);

addNewWave();

//angrepsbølge interface
function addNewWave() {

	newRow = document.createElement('tr');
	col = document.createElement('td');
	col.style.width = '30px';
	col.setAttribute('style',"text-align:center;");
	input ="<input  size=\"1%\"  style=\"width: 22px;text-align:center;\" maxlengt=\"6\" type=\"text\" name=\"number\" value=\"1\" class=\"fm\">";
	col.innerHTML = (input);
	newRow.appendChild(col);

	for (var i=1;i<=10;i++){
		col = document.createElement('td');
		col.style.width = '30px';
		col.setAttribute('style',"text-align:center;");
		input ="<input size=\"2\"  style=\"width: 22px;text-align:center;\" maxlengt=\"6\" type=\"text\" name=\"troop_" + i + "\" value=\"0\" class=\"fm\">";

		col.innerHTML = (input);
		newRow.appendChild(col);
	}

	col = document.createElement('td');
	col.style.width = '30px';
	col.setAttribute('style',"text-align:center;");
	input ="<input size=\"1\"  style=\"width: 22px;text-align:center;\" maxlengt=\"6\" type=\"text\" name=\"troop_11\" value=\"0\" class=\"fm\">";
	col.innerHTML = (input);
	newRow.appendChild(col);

	var cataRow = document.createElement('tr');
	
	
	col = document.createElement('td');
	//Added by Hill
	col.setAttribute('colspan', "6");
	col.setAttribute('rowspan',"1");
	col.setAttribute('style',"text-align:center;");
	//end Hill's edition

	select = '<select style=\"-webkit-border-radius: 8px;-moz-border-radius: 8px;border-radius: 8px; background: #F7F7F7\" id="gm_kata_' + nthWave + '" name="gm_kata_' + nthWave + '" class="fm">'+
	'<option value=\"99\">'+cataText[1]+'</option><option value=\"1\">'+cataText[2]+'</option><option value=\"2\">'+cataText[3]+'</option><option value=\"3\">'+cataText[4]+'</option><option value=\"4\">'+cataText[5]+'</option><option value=\"5\">'+cataText[6]+'</option><option value=\"6\">'+cataText[7]+'</option><option value=\"7\">'+cataText[8]+'</option><option value=\"8\">'+cataText[9]+'</option><option value=\"9\">'+cataText[10]+'</option><option value=\"10\">'+cataText[11]+'</option><option value=\"11\">'+cataText[12]+'</option><option value=\"12\">'+cataText[13]+'</option><option value=\"13\">'+cataText[14]+'</option><option value=\"14\">'+cataText[15]+'</option><option value=\"15\">'+cataText[16]+'</option><option value=\"16\">'+cataText[17]+'</option><option value=\"17\">'+cataText[18]+'</option><option value=\"18\">'+cataText[19]+'</option><option value=\"19\">'+cataText[20]+'</option><option value=\"20\">'+cataText[21]+'</option><option value=\"21\">'+cataText[22]+'</option><option value=\"22\">'+cataText[23]+'</option><option value=\"24\">'+cataText[24]+'</option><option value=\"25\">'+cataText[25]+'</option><option value=\"26\">'+cataText[26]+'</option><option value=\"28\">'+cataText[27]+'</option></option><option value=\"29\">'+cataText[28]+'</option><option value=\"30\">'+cataText[29]+'</option><option value=\"37\">'+cataText[30]+'</option><option value="38">'+cataText[31]+'</option><option value="39">'+cataText[32]+'</option><option value="40">'+cataText[33]+'</option>'+
	'</select>';
	col.innerHTML = (select);
	cataRow.appendChild(col);

	col = document.createElement('td');
	//Added by Hill
	col.setAttribute('colspan', "6");
	col.setAttribute('rowspan',"1");
	col.setAttribute('style',"text-align:center;");
	//end Hill's edition

	select = '<select style=\"-webkit-border-radius: 8px;-moz-border-radius: 8px;border-radius: 8px; background: #F7F7F7\" id="gm_kata2_' + nthWave + '" name="gm_kata2_' + nthWave + '" class="fm">' +
	'<option value=\"0\"></option><option value=\"99\" selected=\"true\">'+cataText[1]+'</option><option value=\"1\">'+cataText[2]+'</option><option value=\"2\">'+cataText[3]+'</option><option value=\"3\">'+cataText[4]+'</option><option value=\"4\">'+cataText[5]+'</option><option value=\"5\">'+cataText[6]+'</option><option value=\"6\">'+cataText[7]+'</option><option value=\"7\">'+cataText[8]+'</option><option value=\"8\">'+cataText[9]+'</option><option value=\"9\">'+cataText[10]+'</option><option value=\"10\">'+cataText[11]+'</option><option value=\"11\">'+cataText[12]+'</option><option value=\"12\">'+cataText[13]+'</option><option value=\"13\">'+cataText[14]+'</option><option value=\"14\">'+cataText[15]+'</option><option value=\"15\">'+cataText[16]+'</option><option value=\"16\">'+cataText[17]+'</option><option value=\"17\">'+cataText[18]+'</option><option value=\"18\">'+cataText[19]+'</option><option value=\"19\">'+cataText[20]+'</option><option value=\"20\">'+cataText[21]+'</option><option value=\"21\">'+cataText[22]+'</option><option value=\"22\">'+cataText[23]+'</option><option value=\"24\">'+cataText[24]+'</option><option value=\"25\">'+cataText[25]+'</option><option value=\"26\">'+cataText[26]+'</option><option value=\"28\">'+cataText[27]+'</option></option><option value=\"29\">'+cataText[28]+'</option><option value=\"30\">'+cataText[29]+'</option><option value=\"37\">'+cataText[30]+'</option><option value="38">'+cataText[31]+'</option><option value="39">'+cataText[32]+'</option><option value="40">'+cataText[33]+'</option>'+
	'</select>';

	col.innerHTML = (select);
	cataRow.appendChild(col);

	var myTable = document.getElementById('myTable');
	myTable.tBodies[0].appendChild(newRow);
	myTable.tBodies[0].appendChild(cataRow);

	nthWave++;
}

function popup(id)
{
	select =  	'<form><select id=\"popup_' + id + '\" size=\"\" \">'+
	'<option value=\"0\">'+cataText[0]+'</option><option value=\"99\">'+cataText[1]+'</option><option value=\"1\">'+cataText[2]+'</option><option value=\"2\">'+cataText[3]+'</option><option value=\"3\">'+cataText[4]+'</option><option value=\"4\">'+cataText[5]+'</option><option value=\"5\">'+cataText[6]+'</option><option value=\"6\">'+cataText[7]+'</option><option value=\"7\">'+cataText[8]+'</option><option value=\"8\">'+cataText[9]+'</option><option value=\"9\">'+cataText[10]+'</option><option value=\"10\">'+cataText[11]+'</option><option value=\"11\">'+cataText[12]+'</option><option value=\"12\">'+cataText[13]+'</option><option value=\"13\">'+cataText[14]+'</option><option value=\"14\">'+cataText[15]+'</option><option value=\"15\">'+cataText[16]+'</option><option value=\"16\">'+cataText[17]+'</option><option value=\"17\">'+cataText[18]+'</option><option value=\"18\">'+cataText[19]+'</option><option value=\"19\">'+cataText[20]+'</option><option value=\"20\">'+cataText[21]+'</option><option value=\"21\">'+cataText[22]+'</option><option value=\"22\">'+cataText[23]+'</option><option value=\"24\">'+cataText[24]+'</option><option value=\"25\">'+cataText[25]+'</option><option value=\"26\">'+cataText[26]+'</option><option value=\"28\">'+cataText[27]+'</option></option><option value=\"29\">'+cataText[28]+'</option><option value=\"30\">'+cataText[29]+'</option><option value=\"37\">'+cataText[30]+'</option><option value="38">'+cataText[31]+'</option><option value="39">'+cataText[32]+'</option><option value="40">'+cataText[33]+'</option>'+
	'</select></form>';


	eval("window" + id + " = window.open('', '" + id + "', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=200,height=20');");
	if (!eval("window" + id).document.getElementById('thatDiv'))
	{
		div = "<div id=\"thatDiv\">Loading..</div>";
		eval("window" + id).document.write(div);
	}
	thatDiv = eval("window" + id).document.getElementById('thatDiv');
	thatDiv.innerHTML = select;

	if (window.focus) {eval("window" + id).focus()}

	element = eval("window" + id).document.forms[0].elements[0];
	element.addEventListener("change", function() { test(id) }, true);

	function test(id){
		field = document.getElementById(id);
		field.innerHTML = "<option value=\"" + element.options[element.selectedIndex].value + "\">" + element.options[element.selectedIndex].value + "</option>";
		eval ("window" +id + ".close()");
	}

}

/////////////////////////////////////////////////
/////////////////Events//////////////////////////
/////////////////////////////////////////////////

var newWaveButton = document.getElementById('newWaveButton');
newWaveButton.addEventListener("click", addNewWave, true);

var resetButton = document.getElementById('resetButton');
resetButton.addEventListener("click", reset, true);

var myimbabutton = document.getElementById('myimbabutton');
myimbabutton.addEventListener("click", attack, true);

var arrivalButton = document.getElementById('arrivalTime');
arrivalButton.addEventListener("click", getArrivalTime, true);

var timedArrivalButton = document.getElementById('timedArrivalButton');
timedArrivalButton.addEventListener("click", setArrivalTimer, true);



/////////////////////////////////////////////////
/////////////////misc////////////////////////////
/////////////////////////////////////////////////

function getRace()
{
//Function completely changed by Hill
	var ex = "//img[starts-with(@class, 'unit')]";

	result = document.evaluate(
		ex,
		document,
		null,
		XPathResult.FIRST_ORDERED_NODE_TYPE,
		null).singleNodeValue;
var index = getTroopIndexTitleFromImage(result)[0];

	switch (index)
	{
	case '1': return 0;
	case '11': return 1;
	case '21': return 2;
	
	}
	
}
//Added by Hill
function getTroopIndexTitleFromImage(tImg) {
		var tInfo = [0, ""];
		if (tImg.src.match(/img\/un\/u\/(\d+)\.gif/)) {
			tInfo[0] = RegExp.$1;
			tInfo[1] = tImg.title;
		} else {
			var imgCN = tImg.getAttribute("class");
			if (imgCN != null) {
				if (imgCN.indexOf("unit") != -1 && imgCN.indexOf(" ") != -1) {
					tInfo[0] = imgCN.split(" ")[1].replace("u", "");
					tInfo[1] = tImg.title;
				}
			}
		}
		return tInfo;
	}

function getTotalUnit(t)
{
	if (ts[t] > 0) return ts[t];

	var ex = "//a[contains(@OnClick,'" + t + "')]";
	result = document.evaluate(
		ex,
		document,
		null,
		XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
		null);

	if (result.snapshotLength)
	{
		if(exp(/a2b/)) {
			thisResult = result.snapshotItem(0).innerHTML;
			ts[t] = ((thisResult.substring(1,thisResult.length-1)));
		}else{
			ts[t] = result.snapshotItem(0).innerHTML;		
		}

		
		return ts[t];
	} else {
		return 0;
	}

}
function errorMsg (msg)
{
	errDiv = document.getElementById('err');
	errDiv.innerHTML = errDiv.innerHTML +  "<br><b>"+text[26]+"</b>" + msg;
}
function getActiveDid()
{

if(exp(/a2b/)) {
	tag = document.getElementById('vlist').getElementsByClassName('dot hl')[0].nextSibling.nextSibling.getElementsByTagName('a')[0];

} else {
	tag = document.evaluate( "//a[contains(@href,'newdid')][@class='active']", 	document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(0);
}
	if (tag)
	{
		temp = tag.href.split("?")[1].split('&');
		return temp[0];
	}
}
//alert(DID)
function getValue(doc, name)
{
	var ex = ".//input[@type='hidden'][@name='" + name + "']";
	tag = document.evaluate(
		ex,
		doc,
		null,
		XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
		null);

	if (tag.snapshotLength)
	{
		aTag = tag.snapshotItem(0);
		return(aTag.value);
	}else{
		return 0;
	}

}

function addCount(msg, br)
{
	countDiv = document.getElementById('count');
	countDiv.innerHTML = countDiv.innerHTML + (countDiv.innerHTML && br ? '<br>' : '')+msg;
}

function getCords()
{
	var tempX = document.getElementsByName('x');
	var tempY = document.getElementsByName('y');
	if (tempX.length)
	{
		if (tempX[0].value.length && tempY[0].value.length)
		{

			return tempX[0].value + cordsSplit + tempY[0].value;
		}else{
			return '';
		}
	}
	return 'undefined';
}

function addInfoDiv()
{
	var infoDiv = document.createElement("div");
	infoDiv.innerHTML = "<div><div id=\"err\"></div><br><br><div id=\"count\"></div></div>"
	thisDiv = document.getElementById('content');
	if(!thisDiv){
		var tempDiv = document.createElement('div');
		
		var midDiv = document.getElementById('lmidlc');
		
		if(!midDiv)
		{
			midDiv = document.getElementById('content');
			tempDiv.setAttribute('id','m');
		}
			else
			tempDiv.setAttribute('id','lright1');
		thisDiv = midDiv.parentNode.appendChild(tempDiv);
	}

	thisDiv.appendChild(infoDiv);
}
function abort()
{
	setTimeout(function(){realAbort()},500);
}

function realAbort ()
{
	cordN = 1;
	firstRun = true;
	wavesSent = 0;
	nThisWave = 0;
	numberattacks = 0;
	totalattacks = 0;
	myimbabutton.innerHTML = '<div class=\"button-container\"><div class=\"button-position\"><div class="btl"><div class=\"btr"\><div class=\"btc"\></div></div></div><div class=\"bml"\><div class=\"bmr"\><div class=\"bmc"\></div></div></div><div class=\"bbl"\><div class=\"bbr"\><div class=\"bbc"\></div></div></div></div><div class=\"button-contents\">'+text[20]+'</div></div>';
}

function getCheckTroops()
{
		for (var num = 0;num<=13;num++)
		{
			troops[num] = new Array;
			if (num <=11)
			{

				if (!num)
				{
					troop = document.getElementsByName('number');
				}else {
					troop = document.getElementsByName('troop_' + num);
				}
				
				totTroops[num] = 0;
				for (var x = 0; x < troop.length;x++)
				{
					if (!num){totalattacks = totalattacks + parseInt(troop[x].value);}
					totTroops[num] = parseInt(totTroops[num]) + (parseInt(troop[x].value)) * (parseInt(troops[0][x]));
					troops[num][x] = troop[x].value				
				}
			}else{
				//troops[num] = new Array;
				troops[num+1] = new Array;
				for (var x = 0;x< troop.length; x++)
				{
					troops[12][x] = document.getElementById('gm_kata_' +(x+1) ).value;
					troops[13][x] = document.getElementById('gm_kata2_' +(x+1) ).value;
				}
			}
		}

	check = false;
	for(var x=1;x<=11;x++) //Sjekker om man har nok tropper
	{
		tempX = x;
		if(exp(/a2b/) && x==10) {tempX++;}
		if (totTroops[x] > getTotalUnit('t'+tempX) ) {errorMsg(text[3] + x+ ")"); abort(); return;}
		if (totTroops[x] > 0) {check = true;}
	}
	if (!check)
	{
		errorMsg(text[4]);
		abort();
		return;
	}
}



//Skal implementeres asap
function getArrivalTime(tempWaveNumber, Xcord, Ycord)
{
	tempWaveNumber = 0;
	getCheckTroops();

	
		c = document.getElementById('typeAttack').value;
		cords = document.getElementById('cords').value;
		cord = cords.split(targetSplit);
		spy = false;
		if (c>4)
		{
			spy = c-4;
			c=3;
		}
		if (c>6 || c<2)
		{
			errorMsg(text[1]);
			abort()
			return;
		}
		if (!cords)
		{
			errorMsg(text[2])
			abort()
			return;
		}
		var targetCord = splitN(cord[cordN-1], cordsSplit);
		var xcord = targetCord[0];
		var ycord = targetCord[1];
		timestamp = document.getElementsByName('timestamp')[0].value;
		timestamp_checksum = document.getElementsByName('timestamp_checksum')[0].value;	
		
		var tempUrl = document.location.href.split('?')[0];
		
		
if( exp(/a2b/) ) {
	var tempPostvar = 'timestamp='+timestamp+'&timestamp_checksum='+timestamp_checksum +'&b=1';
} else {
	var currentDid = document.getElementsByName('currentDid')[0].value;
	var tempPostvar = 'currentDid='+currentDid+'&timestamp='+timestamp+'&timestamp_checksum='+timestamp_checksum +'&b=1';
	
	}

		/*for(var i = 1; i <= 9; i++) {
			tempPostvar += "&t" +i+ "=" +troops[i][wavesSent];
		}
		tempPostvar += "&t10="+troops[10][wavesSent]+"&t11=" +troops[11][wavesSent];

		if(troops[8][wavesSent] > 0) {
			if(troops[12][wavesSent]) {
				tempPostvar += "&kata=" +troops[12][wavesSent];
			}
			if(troops[13][wavesSent]) {
				tempPostvar += "&kata2=" +troops[13][wavesSent];
			}
		} else if (spy){
			if (Race == 2 && troops[3][wavesSent] > 0)
			{
				for(var i = 1; i <= 11; i++) {
					tempPostvar += "&t" +i+ "=" + (i == 3 ? troops[i][wavesSent] : 0);
				}
			}
			else if (Race != 2 && troops[4][wavesSent] >0)
			{
				for(var i = 1; i <= 11; i++) {
					tempPostvar += "&t" +i+ "=" + (i == 4 ? troops[i][wavesSent] : 0);
				}
			}
			tempPostvar += "&spy=" +spy;
		}
		
		tempPostvar += "&c=" + c + "&dname=&x=" + xcord + "&y=" + ycord + "&s1=ok";*/
		tempPostvar +='&t1=' + troops[1][tempWaveNumber] + '&t4=' + troops[4][tempWaveNumber] + '&t7='+ troops[7][tempWaveNumber] +'&t9='+ troops[9][tempWaveNumber] +'&t2='+ troops[2][tempWaveNumber] +'&t5='+ troops[5][tempWaveNumber] +'&t8='+ troops[8][tempWaveNumber] +'&t10='+ troops[10][tempWaveNumber] +'&t3='+ troops[3][tempWaveNumber] +'&t6='+ troops[6][tempWaveNumber] +'&c='+ c +'&dname=&x='+xcord+'&y='+ ycord +'&s1=ok';

		rpPage = $ee('div',httpPost(a2bURL,tempPostvar),[['style','display:none;']]);
		var tspans = $gt('div',rpPage);
		
		
	for( var i=0; i< tspans.length; i++ ) {
		t = tspans[i].className;
		if( t == "in" ) {
			sTim = tspans[i].textContent;
		}

		}
		
		
		if (sTim)
			{
				
				var aTim = sTim.match(/([0-9]{1,2}):([0-9]{2}):([0-9]{2})/i);

				referenceSeconds = parseInt(aTim[1],10)*60*60+parseInt(aTim[2],10)*60+parseInt(aTim[3],10);

				document.getElementById('arrivalTimeDiv').innerHTML = text[21] +':' + sTim;
				clearInterval(timerIntervalId);
                timerIntervalId = setInterval(function(){arrivalCounter();},100);
                arrivalCounter();
                DID = getActiveDid()
                
			}else{
				alert(text[26]);
			}
			

}


function arrivalCounter()
{
		var sTime = document.evaluate(
				"id('tp1')",
				document,
				null,
				XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
				null);

		sTime = sTime.snapshotItem(0).textContent;
		var aMatch = sTime.match(/^([0-9]{1,2}):([0-9]{2}):([0-9]{2})$/i);

		var hours = minutes = seconds = 0;

		var sDate = new Date();
		var ad = 1;

	sDate.setHours((parseInt(aMatch[1]) + ((sDate.getSeconds >= (60-ad) && sDate.getMinutes >= 59) ? 1 : 0)) % 24);

		sDate.setMinutes((parseInt(aMatch[2]) + ((sDate.getSeconds >= (60-ad)) ? 1 : 0)) % 60);

		sDate.setSeconds((parseInt(aMatch[3]) ) % 60);

		sDate.setMilliseconds(0);



		var aDate = new Date(sDate.getTime()+ referenceSeconds*1000);

		var aad=0;
		
		seconds = (aDate.getSeconds()+1)%60;
		if(aDate.getSeconds()+1==60)
		aad=1;

		minutes = aDate.getMinutes()+aad;

		hours = aDate.getHours();


		seconds = seconds.toString();
		minutes = minutes.toString();
		hours = hours.toString();
		seconds = seconds.replace(/\b(\d)\b/g, '0$1');
		minutes = minutes.replace(/\b(\d)\b/g, '0$1');
		hours = hours.replace(/\b(\d)\b/g, '0$1');

		if (timedAttacktimer)
		{
			tTimer = timedAttacktimer.split(':');
			if (tTimer.length == 3) {
				tSeconds = tTimer[2]
				tMinutes = tTimer[1]
				tHours = tTimer[0]

				if (tHours == hours && tMinutes == minutes && tSeconds == seconds)
				{
					myimbabutton.click();
					timedAttacktimer = false;
				} else if (tHours == hours && tMinutes == minutes && (tSeconds+6) >= seconds) {
					switchActiveVillage(DID);
				}
			}
		}
		document.getElementById('arrivalTimeDiv').innerHTML = text[21] +':' + hours + ":" + minutes + ":" + seconds;
}

function switchActiveVillage(did) {
	if(!did) { return; }
	GM_xmlhttpRequest({
		method: "GET",
		url: 'http://' + document.domain + "/dorf1.php?"+did,
		headers:{'Content-type':'application/x-www-form-urlencoded'}
	});
	return;
}

function setArrivalTimer() {
	getArrivalTime();
	timedAttacktimer = document.getElementById('timedArrivalInput').value;

	if (referenceSeconds) {
		var aMatch = timedAttacktimer.match(/^([0-9]{1,2}):([0-9]{2}):([0-9]{2})$/i);

		var hours = minutes = seconds = 0;

		var sDate = new Date();
		var ad = 0;

		sDate.setHours((parseInt(aMatch[1]) + ((sDate.getSeconds >= (60-ad) && sDate.getMinutes >= 59) ? 1 : 0)) % 24);
		sDate.setMinutes((parseInt(aMatch[2]) + ((sDate.getSeconds >= (60-ad)) ? 1 : 0)) % 60);
		sDate.setSeconds((parseInt(aMatch[3]) + ad) % 60);


		var aDate = new Date(sDate.getTime() - referenceSeconds*1000);

		if(aDate.getSeconds()==0)
		minutes = aDate.getMinutes();
		hours = aDate.getHours();

		addCount(text[28] + timedAttacktimer + '( ' + referenceSeconds + 's -> ' + hours + ':' + minutes + ':' + seconds + ')', 1);
	} else {
		addCount(text[28] + timedAttacktimer, 1);
	}
}

function detectLanguage() {
	if(sLang != "") {return;}
	var re = null; re = new RegExp("^http://[^/]*\.([a-zA-Z]{2,3})\/.*$", "i");
	var lang = window.location.href.match(re);
	if(!lang) {
		return;
	} else {
		sLang = lang.pop();
	}
}