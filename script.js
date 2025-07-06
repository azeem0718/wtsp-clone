const chats = [
  {
    name: "RAYYAN AZEEM",
    message: "Hey, are we still on for the meeting at 10 AM?",
    time: "6:30",
  },
  {
    name: "JOHN DOE",
    message: "Don't forget to submit the report by EOD.",
    time: "7:45",
  },
  {
    name: "JANE SMITH",
    message: "Can you review the document I sent you?",
    time: "8:15",
  },
  {
    name: "ALICE JOHNSON",
    message: "Happy Birthday! Hope you have a great day!",
    time: "9:00",
  },
  {
    name: "BOB BROWN",
    message: "Let's catch up over lunch tomorrow.",
    time: "10:30",
  },
  {
    name: "CHARLIE DAVIS",
    message: "I'll be late to the party.",
    time: "11:00",
  },
  { name: "DAVID EVANS", message: "Can you send me the files?", time: "11:30" },
  {
    name: "EMMA FOSTER",
    message: "Great job on the presentation!",
    time: "12:00",
  },
  { name: "FRANK GREEN", message: "Are you free this weekend?", time: "12:30" },
  { name: "GRACE HILL", message: "Let's go for a hike.", time: "1:00" },
];

// $(block).on('click', chatting_to_html);

function chatToHtml(chat, idx) {
  const html = `<div class="block" onclick="openChat(${idx})" >
    <div class="prof">
        <img src="prof1.jpg"></div>
            <div class="details">
                <div class="thalf">
                    <h4 id="name"  >${chat.name}</h4>
                    <P class="time">${chat.time}</P>
                </div>
                <div class="msg">${chat.message}</div>   
            </div>
        </div>
    </div>`;
  return html;
}
const result = chats.map(chatToHtml).join("");
document.getElementById("chatlist").innerHTML = result;
const messages = [
  [
    { type: "my_msg", text: "HI BRO", time: "12:00" },
    { type: "frnd_msg", text: "HA BRO", time: "12:00" },
    { type: "my_msg", text: "HOW ARE U MAN..?", time: "12:00" },
    { type: "frnd_msg", text: "FINE BRO WHAT ABOUT YOU..?", time: "12:00" },
    { type: "my_msg", text: "NOT BAD..!", time: "12:10" },
    {
      type: "frnd_msg",
      text: "BRO WE ARE PLANNING FOR A TRIP ARE U READY..?",
      time: "12:12",
    },
    { type: "my_msg", text: "WHERE ..?", time: "12:14" },
    { type: "frnd_msg", text: "HA BRO TO JAMMU AND KASHMIR", time: "12:15" },
  ],
  [
    { type: "my_msg", text: "HELLO BUDDY", time: "11:00" },
    { type: "frnd_msg", text: "HEY MAN", time: "11:01" },
    { type: "my_msg", text: "WHAT'S NEW?", time: "11:02" },
    { type: "frnd_msg", text: "NOTHING MUCH, JUST WORKING.", time: "11:03" },
    { type: "my_msg", text: "COOL, LET'S CATCH UP LATER!", time: "11:04" },
    { type: "frnd_msg", text: "SURE, SEE YOU!", time: "11:05" },
  ],
  [
    { type: "my_msg", text: "HEY! LONG TIME NO SEE.", time: "10:30" },
    { type: "frnd_msg", text: "YEAH, BEEN BUSY.", time: "10:31" },
    { type: "my_msg", text: "WHEN CAN WE MEET?", time: "10:32" },
    { type: "frnd_msg", text: "HOW ABOUT THIS WEEKEND?", time: "10:33" },
    { type: "my_msg", text: "SOUNDS GOOD!", time: "10:34" },
  ],

  [
    { type: "my_msg", text: "GOOD MORNING!", time: "08:00" },
    { type: "frnd_msg", text: "GOOD MORNING, BRO!", time: "08:02" },
    { type: "my_msg", text: "HAD BREAKFAST?", time: "08:03" },
    { type: "frnd_msg", text: "YEAH, YOU?", time: "08:04" },
    { type: "my_msg", text: "JUST FINISHED.", time: "08:05" },
    { type: "frnd_msg", text: "LET'S MEET UP LATER?", time: "08:06" },
    { type: "my_msg", text: "SURE, WHAT TIME?", time: "08:07" },
    { type: "frnd_msg", text: "MAYBE AROUND 5 PM.", time: "08:08" },
  ],
  [
    { type: "my_msg", text: "HELLO! HOW'S THE DAY GOING?", time: "14:00" },
    {
      type: "frnd_msg",
      text: "HEY! PRETTY GOOD, WHAT ABOUT YOU?",
      time: "14:01",
    },
    { type: "my_msg", text: "BUSY, BUT CAN'T COMPLAIN!", time: "14:02" },
    {
      type: "frnd_msg",
      text: "SAME HERE. LET'S GRAB A COFFEE SOON.",
      time: "14:03",
    },
    {
      type: "my_msg",
      text: "DEFINITELY. WHAT'S YOUR SCHEDULE LIKE TOMORROW?",
      time: "14:04",
    },
    {
      type: "frnd_msg",
      text: "FREE IN THE EVENING. DOES 6 PM WORK?",
      time: "14:05",
    },
  ],
  [
    {
      type: "my_msg",
      text: "BRO, DID YOU WATCH THE GAME LAST NIGHT?",
      time: "21:00",
    },
    { type: "frnd_msg", text: "OF COURSE! WHAT A MATCH!", time: "21:01" },
    { type: "my_msg", text: "THAT FINAL GOAL WAS INSANE!", time: "21:02" },
    {
      type: "frnd_msg",
      text: "YEAH, TOTALLY. WE SHOULD GO TO THE STADIUM NEXT TIME.",
      time: "21:03",
    },
    { type: "my_msg", text: "I'M IN. LET'S BOOK TICKETS!", time: "21:04" },
  ],
  [
    {
      type: "my_msg",
      text: "HEY, WHAT ARE YOUR WEEKEND PLANS?",
      time: "17:30",
    },
    { type: "frnd_msg", text: "NOTHING SPECIAL. YOU?", time: "17:31" },
    { type: "my_msg", text: "THINKING OF GOING FOR A HIKE.", time: "17:32" },
    { type: "frnd_msg", text: "THAT SOUNDS FUN! COUNT ME IN.", time: "17:33" },
  ],
  [
    { type: "my_msg", text: "YO! LONG TIME NO CHAT.", time: "13:00" },
    { type: "frnd_msg", text: "YEAH, HOW HAVE YOU BEEN?", time: "13:01" },
    { type: "my_msg", text: "DOING GOOD. WHAT ABOUT YOU?", time: "13:02" },
    {
      type: "frnd_msg",
      text: "NOT BAD AT ALL. WE SHOULD MEET UP.",
      time: "13:03",
    },
    { type: "my_msg", text: "AGREED. HOW ABOUT TOMORROW?", time: "13:04" },
  ],
];

function messagesToHtml(n) {
  const htmls = messages[n]
    .map(
      (msg) => `
        <div class="${msg.type}">
            <p>${msg.text}
                <br>
                <span>${msg.time}</span>
            </p>
        </div>
    `
    )
    .join("");
  return htmls;
}

function openChat(idx) {
  document.getElementById("chatting").innerHTML = messagesToHtml(idx);
}
