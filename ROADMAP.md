# 🗺️ Project Roadmap: From Prototype to Shutout 2.0

แผนการยกระดับโปรเจกต์ **SHUTOUT** จากเว็บไซต์ต้นแบบ (Static Front-end Prototype) ให้กลายเป็นแพลตฟอร์มจัดการแข่งขัน E-Sport แบบ **Full-Stack Web Application**

---

## ✅ Phase 1: Front-end Prototype (Completed — v1.0)
* [x] ออกแบบ Brand Identity, Logo, Color Scheme และ Typography (`Kanit` & `Anuphan`)
* [x] พัฒนาหน้า Homepage พร้อมการ์ดแสดงรายการแข่งขันและ Swiper Carousel
* [x] พัฒนาระบบสลับแท็บ (Details, Participants, Schedule, Results)
* [x] พัฒนาฟอร์มสมัครแข่งขันแบบ Dynamic (เพิ่ม/ลดผู้เล่นและโค้ช)

---

## 🚧 Phase 2: Shutout 2.0 — Full-Stack Upgrade (Planned)

### 🛠️ Target Tech Stack
* **Frontend:** Next.js, TypeScript, Tailwind CSS
* **Backend & ORM:** Node.js / Bun, Prisma ORM
* **Database:** PostgreSQL
* **DevOps:** Docker, GitHub Actions (CI/CD)

### 📋 Planned Features (แก้จุดที่ยังไม่สมบูรณ์จาก v1.0)
* [ ] **Authentication & RBAC:** ระบบสมัครสมาชิก เข้าสู่ระบบ และแยกสิทธิ์ระหว่างผู้เล่น (Player), หัวหน้าทีม (Captain) และผู้จัดแข่ง (Organizer/Admin)
* [ ] **Database & Real Registration:** เชื่อมต่อฐานข้อมูลจริง บันทึกข้อมูลทีม สมาชิก และแสดงรายชื่อทีมในแท็บ *Participants* แบบเรียลไทม์
* [ ] **Concurrency Control (Database Transaction):** ใช้ Prisma Transaction ป้องกันการสมัครเกินจำนวนทีมที่จำกัด (Slot Limit) และการส่งฟอร์มซ้ำ
* [ ] **Tournament Creation & Management:** เพิ่มหน้าสร้างทัวร์นาเมนต์ใหม่ (แก้จุดขาดใน v1.0) พร้อมระบบอัปเดตตารางแข่งและผลการแข่งขัน
* [ ] **Live Search & Multi-Filter:** ทำให้ช่องค้นหาและตัวกรองหน้าแรกสามารถคิวรีรายการแข่งขันจากฐานข้อมูลได้จริง
* [ ] **UI Polish:** ปรับปรุง Layout การ์ดข้อมูลแบบ Grid ให้มีขนาดสมดุลและรองรับ Responsive เต็มรูปแบบ
