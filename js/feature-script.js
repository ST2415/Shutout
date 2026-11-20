//FEATURE TABS 
function activeFeatureTab(evt, tabLink) {
  var i, featureContent, featureLink;
  featureContent = document.getElementsByClassName("game-content-select");
  featureLink = document.getElementsByClassName("tab-box");

  for(i=0; i<featureContent.length; i++) {
    featureContent[i].style.display = "none";
  }

  for(i=0; i<featureLink.length; i++) {
    featureLink[i].className = featureLink[i].className.replace(" active", "");
  }

  document.getElementById(tabLink).style.display = "flex";
  evt.currentTarget.className += " active";
}

// Check if user click register button that has #page-register from homepage
if (location.hash == "#page-register") {
    // Find register button in feature page
    const registerTab = document.getElementById("registration-link");

    if (registerTab) {
        registerTab.click(); // Open registration tab
    }
} 
else {
    // Check if user didn't click register button that has #page-register from homepage
    const detailTab = document.getElementById("tab-detail");

    if (detailTab) {
        detailTab.click(); // Open detail tab
    }
}



// ตั้งค่าเริ่มต้นว่าตอนนี้เปิดกล่องผู้เล่นและโค้ชไปกี่คนแล้ว
let playerCount = 1;
let coachCount = 0;
// กำหนดเพดานสูงสุด (รวมตัวจริงและสำรอง)
const max_player = 7; 
const max_coach = 2;

// ฟังก์ชันสำหรับเปิดกล่องผู้เล่นที่ซ่อนอยู่
function addPlayer() {
    // เช็กเงื่อนไขว่าเกินโควต้าหรือยัง
    if (playerCount >= max_player) {
        alert("สามารถเพิ่มสมาชิกรวมตัวสำรองได้สูงสุด " + max_player + " คน");
        return;
    }

    playerCount++;

    const playerContainer = document.getElementById("player-box");
    const addBox = document.getElementById("player-add-box");

    // ก๊อปปี้กล่องสมาชิกคนที่ 1
    const originalBox = document.getElementById("player-form-box");
    const newBox = originalBox.cloneNode(true); 

    // เปลี่ยน player ID ใหม่
    newBox.id = "player-form-box-" + playerCount;

    // เปลี่ยนตัวเลขหัวกล่อง
    newBox.querySelector(".highlight-title").innerText = "สมาชิกคนที่ " + playerCount;
    
    // ✨ พระเอกอยู่ตรงนี้: วิ่งหากล่อง input-container ย่อยๆ ในการ์ด
    const inputContainers = newBox.querySelectorAll(".input-container");
    inputContainers.forEach(container => {
        const label = container.querySelector("label");
        const input = container.querySelector("input");

        if (label && input) {
            // นำ id เดิมจากแม่พิมพ์ (เช่น player-name) มาต่อด้วยเลขคนที่ (เช่น -2)
            const newId = input.id + "-" + playerCount; 
            
            label.setAttribute("for", newId); // แก้ for ของ label ให้ตรง
            input.setAttribute("id", newId);  // แก้ id ของ input ให้ตรง
            input.setAttribute("name", newId); // แก้ name ด้วยเลย
            input.value = ""; // ล้างค่าที่ค้างอยู่
        }
    });

    // แทรกกล่องใหม่เข้าไปก่อนหน้ากล่องปุ่มกด
    playerContainer.insertBefore(newBox, addBox);

    if (playerCount >= max_player) {
        addBox.style.display = "none"; 
    }
}

// ฟังก์ชันสำหรับเปิดกล่องโค้ชที่ซ่อนอยู่
function addCoach() {
    if (coachCount >= max_coach) {
        alert("สามารถเพิ่มโค้ชได้สูงสุด " + max_coach + " คน");
        addBox.style.display = "none"; 
        return;
    }

    coachCount++; // กด 1 ครั้ง ก็บวกจำนวนโค้ชเพิ่มขึ้นทีละ 1

    const coachContainer = document.getElementById("coach-box");
    const addBox = document.getElementById("coach-add-box");

    // 1. ก๊อปปี้แม่พิมพ์ที่ถูกซ่อนไว้มาใช้งาน
    const originalBox = document.getElementById("coach-form-box");
    const newBox = originalBox.cloneNode(true);
    
    // 2. เปลี่ยน coach ID ใหม่
    newBox.for = "coach-form-box-" + coachCount;
    newBox.id = "coach-form-box-" + coachCount;
    
    // ✨ 3. จุดสำคัญ: สั่งเปิดให้กล่องใหม่นี้มองเห็นได้ (ยกเลิกการซ่อน)
    newBox.style.display = "flex"; 

    // 4. เปลี่ยนหัวข้อให้ตรงกับลำดับ
    newBox.querySelector(".highlight-title").innerText = "โค้ชคนที่ " + coachCount;

    // 5. เคลียร์ข้อมูลที่อาจค้างอยู่ และจัดชื่อช่องกรอกให้พร้อมส่งเข้า Database
    const inputContainers = newBox.querySelectorAll(".input-container");
    inputContainers.forEach(container => {
        const label = container.querySelector("label");
        const input = container.querySelector("input");

        if (label && input) {
            const newId = input.id + "-" + coachCount; 
            
            label.setAttribute("for", newId);
            input.setAttribute("id", newId);
            input.setAttribute("name", newId);
            input.value = "";
        }
    });

    // 6. แทรกกล่องโค้ชใหม่เข้าไปก่อนหน้าปุ่ม
    coachContainer.insertBefore(newBox, addBox);

    if (coachCount >= max_coach) {
        addBox.style.display = "none"; 
    }
}



// DISABLE REGISTERED BUTTON
function disableButton(event) {
    //Stop from auto refreshing page
    if (event) {
        event.preventDefault();
    }
    
    // ล็อกปุ่ม Submit หลัก
    const submitBtn = document.querySelector("button[type='submit']");
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = "สมัครรายการแข่งนี้แล้ว";
    }

    //Disable registration button
    var btnOverallCard = document.getElementById("registration-link");
    btnOverallCard.disabled = true; //Set disabled
    btnOverallCard.innerText = "สมัครรายการแข่งนี้แล้ว";

    //Active participant tab by click the button
    var participantTab = document.getElementById("tab-participant");
    if(participantTab) {
        participantTab.click();
    }
}
