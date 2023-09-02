Catatan :

1. Untuk Soal Nomor 1 dapat di jalankan dengan nodejs "node index"

2. Untuk Soal nomor 2 merupakan sebuah API dengan menggunakan frame work NestJS.
3. Setelah Men Clone Soal nomor 2 yaitu folder "project-name"  harap di lakukan penginstalan node modules terlebih dahalu dengan perintah di terminal "npm install"
4. Untuk menjalankan server dapat dengan perintah "npm run start:dev"
5. Sebelum menjalankan Back End di harapkan Importlah database ke dalam aplikasi database PostgreSQL yaitu file "backup_db_merkle_innovation.sql"
6. Tampunglah database di atas ke dalam database baru yang di beri nama database "db_merkle_innovation" agar tidak terjadi error
7. Harap database di masukkan ke dalam default postgreSQL yaitu dengan -user postgres -host localhost -port 5432
8. Untuk Function API membuat Guest Form dan API mendapatkan Note Gallery terdapat dalam src/guest_form/entities/guest_form.service.ts
9. Untuk Controller Url API membuat Guest Form dan API mendapatkan Note Gallery terdapat dalam src/guest_form/entities/guest_form.controller.ts
10. Untuk Function API membuat API Create User Tamu dan API mendapatkan data semua User tamu terdapat dalam src/user_tamu/user_tamu.service.ts
11. Untuk Controller Url API membuat API Create User Tamu dan API mendapatkan data semua User tamu terdapat dalam src/user_tamu/user_tamu.controller.ts
12. Untuk Function API Login dan Mendapatkan token terdapat dalam src/login/login.service.ts
13. Untuk Controller Url API Login dan Mendapatkan token terdapat dalam src/login/login.controller.ts
14. Untuk Function Pengaturan MiddleWare Token terdapat dalam src/token/token.middleware.ts
15. Sehingga Pengaturan Middleware Token di atas dapat di atur dalam src/app.module.ts pada bagian "export class AppModule implements NestModule" 
16. Untuk login Masukkan ke dalam Header dan beri key "authorization" dengan value Token hasil login
17. Akun yang dapat di gunakan untuk login adalah "username : admin" dan "password:12345"
18. Importlah Link API nya pada file "API_Merkle.postman_collection.json"
