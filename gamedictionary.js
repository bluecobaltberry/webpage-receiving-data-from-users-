/*multi-lang Dictionary*/
const langResource = {
  en : {
      title: "Game Dictionary",
      line1: "This is Game Dictionary. This applies to the Discord bot. You can search for the game keyword that people usually use and check it. If there are any words that require addition or correction, please inform us.",
      line2: "Dictionary Explanation2",
      line3: "Language:",
      discordbot: "Hi! Click me!",
      discordbot2: "You can choose your language and change themes",
      LOL:"LOL",
      Valorant:"Valorant",
      Overwatch:"Overwatch",
      Battlegrounds:"Battlegrounds"
  },
  ko : {
      title: "게임 사전",
      line1: "사전 설명란",
      line2: "사전 설명란2",
      line3: "언어:",
      discordbot: "안녕! 절 눌러보세요!",
      discordbot2: "언어를 고르거나 테마를 바꿀 수 있습니다",
      LOL:"롤",
      Valorant:"발로란트",
      Overwatch:"오버워치",
      Battlegrounds:"배틀그라운드"
  },
  tr : { /*영어버전 다만들면 eren에게 부탁하기*/
  }
}

/* 초기 언어는 영어(en)로 설정하고, 변경되면 맞춰서 업데이트 하는 리스너 구현 */
window.addEventListener("load", function() {
   document.getElementById("langbutton").value = "en";
   updateLanguage("en");
   
   document.getElementById("langbutton").addEventListener("change", function() {
    const selectedLang = this.value;
    updateLanguage(selectedLang);
  });
});
  
/* 딕셔너리 내 모든 key 값을 순회하며 변경하는 함수 */
function updateLanguage(lang) {
  for (let key in langResource[lang]) {
    const element = document.getElementById(key);
    if (element) {
      element.textContent = langResource[lang][key];
    }
  }
}

/*Change Theme*/
const setTheme = theme => document.documentElement.className = theme;

/*Side Bar*/
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}