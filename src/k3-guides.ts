type Guide = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  asset: { title: string; columns: string[]; examples: string[][] };
  faqItems: { question: string; answer: string }[];
  source: 'smk3' | 'smkk' | 'csms';
  parents: string[];
  related: string[];
  cta: string;
};

export const guideSources = {
  smk3: { title: 'PP Nomor 50 Tahun 2012 dan lampirannya', url: 'https://jdih.kemnaker.go.id/asset/data_puu/PPNOMOR50_TAHUN_2012.pdf' },
  smkk: { title: 'Permen PUPR Nomor 10 Tahun 2021 dan lampirannya', url: 'https://jdih.pu.go.id/detail-dokumen/PermenPUPR-nomor-10-tahun-2021-Pedoman-Sistem-Manajemen-Keselamatan-Konstruksi' },
  csms: { title: 'Contoh formulir prakualifikasi CSMS Pertamina', url: 'https://www.pertamina.com/Media/Upload/Files/Form-Isian-PQ-CSMS.pdf' },
};

export const guideParentTitles: Record<string, string> = {
  '/': 'Layanan Konsultan K3',
  '/syarat-sertifikasi-smk3/': 'Syarat sertifikasi SMK3',
  '/biaya-konsultan-k3/': 'Biaya jasa konsultan K3',
  '/kriteria-audit-smk3/': 'Kriteria audit SMK3',
  '/audit-smk3/': 'Persiapan audit eksternal SMK3',
  '/smkk-konstruksi/': 'Panduan SMKK konstruksi',
  '/panduan-csms-kontraktor/': 'Panduan CSMS kontraktor',
  '/contoh-hiradc/': 'Contoh HIRADC dan matriks risiko',
};

export const guides: Guide[] = [
  {
    slug: 'jasa-pendampingan-smk3',
    title: 'Jasa Pendampingan SMK3 untuk Persiapan Audit',
    description: 'Konsultasikan pendampingan SMK3 untuk perusahaan Anda. Lihat tahapan gap analysis, penguatan bukti penerapan, simulasi audit, dan cara meminta proposal.',
    intro: 'Jasa pendampingan SMK3 membantu perusahaan menilai kesiapan, memperbaiki penerapan Sistem Manajemen Keselamatan dan Kesehatan Kerja, lalu menyiapkan bukti untuk audit. Lingkup pekerjaan paling mudah ditentukan dari jumlah lokasi, proses berisiko, dan bukti yang sudah tersedia.',
    sections: [
      { heading: 'Apa yang Anda terima pada setiap tahap?', paragraphs: [
        'Tinjauan awal menghasilkan daftar kesenjangan per lokasi, termasuk bukti yang telah diperiksa dan tindakan yang perlu didahulukan. Pada tahap penerapan, perusahaan menetapkan pemilik tindakan dan menjalankan perbaikan bersama tim operasional. Konsultan dapat membantu menyusun atau meninjau prosedur dan memeriksa apakah catatan dari lapangan mendukungnya.',
        'Menjelang audit, tinjau sampel bukti dan lakukan simulasi wawancara dengan orang yang menjalankan proses. Keluaran yang berguna adalah daftar kesiapan per kriteria dan daftar pekerjaan terbuka, dengan batas waktu yang disepakati.'
      ] },
      { heading: 'Cara meminta proposal dengan lingkup yang jelas', paragraphs: [
        'Kirim jenis usaha, alamat tiap lokasi yang masuk lingkup, jumlah pekerja, aktivitas utama, dan target tanggal audit. Jika pernah diaudit, sertakan ringkasan temuan serta tingkat penilaian yang digunakan. Sampaikan juga apakah Anda membutuhkan kunjungan lapangan, peninjauan dokumen, atau bantuan koordinasi lintas lokasi.',
        'Contohnya, perusahaan dengan kantor pusat dan pabrik dapat meminta tinjauan kebijakan terpusat sekaligus pemeriksaan sampel bukti di pabrik. Di proposal, minta rincian jumlah kunjungan, hasil yang diserahkan, tanggung jawab kedua pihak, dan cara menangani penambahan lokasi.'
      ] },
    ],
    asset: { title: 'Brief permintaan proposal SMK3', columns: ['Data', 'Contoh isian', 'Isian perusahaan'], examples: [
      ['Lokasi dan proses', 'Pabrik A: produksi dan gudang', ''],
      ['Bukti saat ini', 'HIRADC tersedia, catatan inspeksi tersebar', ''],
      ['Kebutuhan', 'Tinjauan lapangan dan simulasi audit', ''],
      ['Target', 'Konfirmasi tanggal audit dengan lembaga audit', ''],
    ] },
    faqItems: [
      { question: 'Siapa yang melakukan audit eksternal SMK3?', answer: 'Audit eksternal dilaksanakan oleh lembaga audit yang ditunjuk sesuai ketentuan. Konsultan mendampingi persiapan, penguatan penerapan, dan tindak lanjut.' },
      { question: 'Berapa lama pendampingan SMK3?', answer: 'Jadwal ditentukan setelah ruang lingkup, ketersediaan bukti, dan waktu penyelesaian perbaikan lapangan dinilai.' },
    ],
    source: 'smk3', parents: ['/', '/syarat-sertifikasi-smk3/'], related: ['gap-analysis-smk3', 'biaya-sertifikasi-smk3'], cta: 'Minta proposal pendampingan SMK3',
  },
  {
    slug: 'biaya-sertifikasi-smk3',
    title: 'Biaya Sertifikasi SMK3: Komponen dan Simulasi Anggaran',
    description: 'Susun anggaran biaya sertifikasi SMK3 dari penawaran audit eksternal, pendampingan, dan kebutuhan perbaikan. Unduh worksheet perhitungan dalam format CSV.',
    intro: 'Untuk menghitung biaya sertifikasi SMK3, kumpulkan penawaran audit eksternal dan estimasi pekerjaan persiapan. Masukkan biaya perbaikan yang ditemukan saat penilaian awal agar anggaran mencerminkan kondisi perusahaan Anda.',
    sections: [
      { heading: 'Komponen yang perlu dimasukkan ke anggaran', paragraphs: [
        'Untuk audit eksternal, minta penawaran tertulis yang mencantumkan lokasi, cakupan, hari audit, biaya perjalanan, pajak, serta ketentuan bila perlu kunjungan tambahan. Untuk pendampingan, rinci paket pekerjaan, misalnya tinjauan bukti, penyusunan rencana perbaikan, dan simulasi audit.',
        'Untuk perbaikan, ambil angka dari daftar tindakan yang benar-benar dibutuhkan. Contohnya, masukkan pengujian atau pelatihan ketika hasil pemeriksaan menunjukkan kebutuhan tersebut. Tetapkan siapa yang memverifikasi penawaran, dan catat apakah angka masih perkiraan atau sudah disetujui.'
      ] },
      { heading: 'Contoh menghitung total untuk satu lokasi', paragraphs: [
        'Jika penyedia menggunakan tarif per hari, kalikan tarif dengan hari yang tercantum dalam penawaran dan tambahkan komponen yang ditagihkan terpisah. Masukkan biaya tetap sebagai satu unit. Jumlahkan semua subtotal, lalu tambahkan cadangan internal yang disetujui untuk kebutuhan yang belum pasti.',
        'Untuk membandingkan dua proposal, samakan dahulu lokasi, kegiatan, perjalanan, pajak, dan ketentuan verifikasi temuan. Worksheet berikut menyediakan kolom kosong agar angka berasal dari penawaran perusahaan Anda.'
      ] },
      { heading: 'Simulasi dengan angka ilustratif', paragraphs: [
        'Misalkan penawaran mencantumkan tiga hari audit dengan tarif Rp4 juta per hari dan perjalanan Rp2 juta. Subtotal audit dan perjalanan adalah Rp14 juta. Jika perusahaan mengalokasikan Rp8 juta untuk pendampingan dan Rp5 juta untuk perbaikan, total perencanaan menjadi Rp27 juta sebelum pajak dan cadangan. Angka ini semata-mata contoh aritmetika.',
        'Uji dampak perubahan lingkup. Jika penawaran yang sama menambahkan satu hari audit sebesar Rp4 juta, total berubah menjadi Rp31 juta sebelum pajak dan cadangan. Konfirmasi juga apakah tambahan hari mengubah biaya perjalanan.'
      ] },
    ],
    asset: { title: 'Worksheet anggaran sertifikasi SMK3', columns: ['Pos anggaran', 'Unit', 'Jumlah', 'Tarif (Rp)', 'Subtotal (Rp)', 'Sumber angka'], examples: [
      ['Audit eksternal', 'Sesuai penawaran', '', '', '', 'Penawaran lembaga audit'],
      ['Perjalanan auditor', 'Kunjungan', '', '', '', 'Periksa cakupan penawaran'],
      ['Pendampingan', 'Paket', '', '', '', 'Proposal konsultan jika dibutuhkan'],
      ['Perbaikan prioritas', 'Item', '', '', '', 'Register kesenjangan dan penawaran'],
    ] },
    faqItems: [
      { question: 'Apa data yang diperlukan untuk meminta penawaran audit SMK3?', answer: 'Siapkan profil perusahaan, jumlah pekerja, lokasi, proses utama, riwayat audit, dan lingkup atau tingkat audit yang dibahas dengan lembaga audit.' },
      { question: 'Apakah pendampingan harus masuk anggaran?', answer: 'Masukkan pendampingan jika perusahaan membutuhkan bantuan eksternal. Pertimbangkan kapasitas tim internal dan pekerjaan yang masih terbuka.' },
    ],
    source: 'smk3', parents: ['/biaya-konsultan-k3/'], related: ['jasa-pendampingan-smk3', 'gap-analysis-smk3'], cta: 'Bahas anggaran persiapan SMK3',
  },
  {
    slug: 'gap-analysis-smk3',
    title: 'Gap Analysis SMK3: Cara Menilai Kesiapan dan Contohnya',
    description: 'Pelajari cara melakukan gap analysis SMK3 dan unduh register untuk mencatat kriteria, bukti yang diperiksa, kesenjangan, pemilik tindakan, dan tenggat.',
    intro: 'Gap analysis SMK3 membandingkan penerapan K3 saat ini dengan kriteria yang relevan. Hasilnya berupa daftar kesenjangan berbasis bukti yang bisa dipakai untuk menentukan prioritas sebelum audit.',
    sections: [
      { heading: 'Mulai dari ruang lingkup dan sampel bukti', paragraphs: [
        'Tentukan lokasi, proses, unit kerja, dan tingkat penilaian yang menjadi dasar pemeriksaan. Gunakan Lampiran II PP 50/2012 untuk memetakan kriteria. Untuk setiap kriteria, catat bukti yang ingin dilihat, siapa pemiliknya, dan periode yang diperiksa.',
        'Uji bukti melalui dokumen, wawancara, dan observasi. Misalnya, bila prosedur inspeksi tersedia, cocokkan jadwal dengan sampel catatan dari area kerja. Tanyakan bagaimana temuan diteruskan dan periksa satu tindakan hingga bukti penyelesaiannya.'
      ] },
      { heading: 'Ubah catatan pemeriksaan menjadi rencana perbaikan', paragraphs: [
        'Gunakan status seperti tersedia, perlu verifikasi, atau terdapat kesenjangan. Tuliskan celah spesifik, misalnya dua dari tiga catatan inspeksi yang diperiksa belum menunjukkan penanggung jawab perbaikan. Tetapkan pemilik, tenggat, serta bukti yang akan menunjukkan tindakan selesai.',
        'Dahulukan kesenjangan yang terkait pengendalian risiko serius. Jadwalkan pemeriksaan ulang sebelum mengubah status. Simpan alasan bila suatu kriteria ditandai tidak relevan supaya dasar keputusan dapat ditinjau.'
      ] },
    ],
    asset: { title: 'Register gap analysis SMK3', columns: ['Area', 'Kriteria atau topik', 'Bukti diperiksa', 'Kesenjangan', 'Prioritas', 'Pemilik', 'Tenggat', 'Bukti penutupan'], examples: [
      ['Gudang', 'Inspeksi area', 'Tiga formulir inspeksi', 'Dua temuan tanpa penanggung jawab', 'Tinjau risiko', 'Kepala gudang', 'Isi tanggal', 'Daftar tindakan dan verifikasi lapangan'],
      ['Produksi', 'Pengendalian dokumen', 'Daftar induk dan salinan di area', 'Revisi salinan perlu diverifikasi', 'Tinjau risiko', 'Pengendali dokumen', 'Isi tanggal', 'Catatan pengecekan versi'],
    ] },
    faqItems: [
      { question: 'Apakah gap analysis menghasilkan nilai audit resmi?', answer: 'Hasilnya membantu penilaian kesiapan internal. Nilai audit eksternal mengikuti proses audit dan kriteria penilaian yang berlaku.' },
      { question: 'Kapan register kesenjangan diperbarui?', answer: 'Perbarui saat bukti berubah, tindakan selesai diverifikasi, atau lingkup pemeriksaan berubah.' },
    ],
    source: 'smk3', parents: ['/kriteria-audit-smk3/'], related: ['audit-internal-smk3', 'jasa-pendampingan-smk3'], cta: 'Konsultasikan kesenjangan penerapan SMK3',
  },
  {
    slug: 'audit-internal-smk3',
    title: 'Audit Internal SMK3: Program, Checklist, dan Laporan',
    description: 'Susun program audit internal SMK3, pilih sampel, tulis temuan berbasis bukti, dan unduh contoh lembar kerja auditor internal.',
    intro: 'Audit internal SMK3 menilai penerapan sistem melalui audit yang dijadwalkan, pengumpulan bukti objektif, dan tindak lanjut. Mulailah dengan menetapkan tujuan, ruang lingkup, kriteria, dan tim auditor.',
    sections: [
      { heading: 'Susun program audit dan tentukan sampel', paragraphs: [
        'Prioritaskan area berdasarkan risiko, perubahan proses, hasil audit sebelumnya, dan status tindakan. Tetapkan jadwal serta personel yang kompeten, dan atur pembagian tugas untuk menjaga objektivitas pemeriksaan. Sampaikan agenda kepada pemilik proses sebelum kunjungan.',
        'Sebagai contoh, untuk memeriksa pengelolaan inspeksi gudang, ambil sampel dari lebih dari satu periode atau giliran kerja. Catat jumlah dan alasan pemilihan sampel. Cocokkan catatan dengan kondisi lapangan dan wawancarai pemilik proses.'
      ] },
      { heading: 'Tulis temuan yang bisa ditindaklanjuti', paragraphs: [
        'Hubungkan setiap temuan dengan ketentuan yang diperiksa dan bukti yang ditemukan. Catat dokumen, tanggal, area, serta sampel yang relevan. Misalnya, tulis “dua dari empat tindakan inspeksi yang melewati tenggat belum memiliki catatan verifikasi” agar pemilik proses tahu apa yang perlu ditelusuri.',
        'Sampaikan hasil kepada pihak terkait dalam rapat penutupan. Laporan memuat tujuan, lingkup, kriteria, sampel, temuan, dan kesimpulan. Serahkan tindakan ke pemilik proses dan jadwalkan verifikasi efektivitasnya.'
      ] },
    ],
    asset: { title: 'Lembar kerja audit internal SMK3', columns: ['Proses', 'Pertanyaan audit', 'Sampel', 'Bukti', 'Temuan', 'Auditor'], examples: [
      ['Gudang', 'Bagaimana tindakan inspeksi ditutup?', 'Empat tindakan dari dua periode', 'Register dan bukti verifikasi', 'Isi setelah pemeriksaan', 'Isi nama'],
      ['Pengadaan', 'Bagaimana kebutuhan K3 dikomunikasikan kepada pemasok?', 'Dua pesanan dengan persyaratan K3', 'Pesanan dan bukti penerimaan', 'Isi setelah pemeriksaan', 'Isi nama'],
    ] },
    faqItems: [
      { question: 'Apa perbedaan audit internal dan gap analysis?', answer: 'Gap analysis memetakan kesenjangan awal. Audit internal mengikuti program, lingkup, kriteria, dan metode pengumpulan bukti yang ditetapkan serta menghasilkan laporan dan tindak lanjut.' },
      { question: 'Siapa yang memverifikasi penyelesaian temuan?', answer: 'Tentukan petugas verifikasi dalam program audit, dengan pembagian tugas yang menjaga objektivitas pemeriksaan.' },
    ],
    source: 'smk3', parents: ['/audit-smk3/'], related: ['tindak-lanjut-temuan-audit-smk3', 'gap-analysis-smk3'], cta: 'Bahas program audit internal SMK3',
  },
  {
    slug: 'tindak-lanjut-temuan-audit-smk3',
    title: 'Tindak Lanjut Temuan Audit SMK3 dan Contoh Register',
    description: 'Lihat contoh tindak lanjut temuan audit SMK3, dari koreksi dan analisis penyebab sampai tindakan sistemik dan verifikasi efektivitas.',
    intro: 'Tindak lanjut temuan audit SMK3 dimulai dengan memperjelas bukti temuan dan menunjuk pemilik tindakan. Temuan dapat ditutup setelah bukti penyelesaian dan efektivitasnya diperiksa sesuai prosedur audit yang digunakan.',
    sections: [
      { heading: 'Contoh temuan dan analisis penyebab', paragraphs: [
        'Dalam contoh gudang, dua tindakan dari inspeksi sebelumnya melewati batas waktu dan belum diverifikasi. Koreksi awalnya adalah memeriksa kedua kondisi dan menetapkan tindakan segera sesuai tingkat risiko. Berikutnya, telusuri kapan temuan diteruskan, siapa yang menerimanya, dan bagaimana keterlambatan diketahui.',
        'Jika pemeriksaan menunjukkan daftar tindakan tidak memiliki pemilik dan mekanisme eskalasi, gunakan bukti tersebut untuk menentukan perbaikan proses. Tetapkan satu pemilik untuk tiap tindakan dan jadwalkan tinjauan berkala untuk pekerjaan yang mendekati tenggat.'
      ] },
      { heading: 'Verifikasi tindakan dan uji efektivitasnya', paragraphs: [
        'Periksa apakah register telah diperbarui dan apakah tindakan langsung di lapangan selesai. Pada siklus berikutnya, pilih sampel temuan baru dan periksa apakah pemilik serta tenggat tercatat, dan apakah keterlambatan ditindaklanjuti. Catat tanggal, sampel, hasil, dan petugas yang memverifikasi.',
        'Jika masalah berulang, buka kembali tindakan dan periksa asumsi penyebab awal. Untuk temuan audit eksternal, ikuti bentuk bukti dan tenggat yang disampaikan lembaga audit.'
      ] },
    ],
    asset: { title: 'Register tindak lanjut temuan SMK3', columns: ['ID', 'Temuan', 'Koreksi', 'Penyebab terverifikasi', 'Tindakan perbaikan', 'Pemilik', 'Tenggat', 'Uji efektivitas', 'Status'], examples: [
      ['INT-01', 'Dua tindakan inspeksi lewat tenggat', 'Periksa kondisi dan tangani temuan terbuka', 'Pemilik dan eskalasi belum ditetapkan', 'Tetapkan pemilik dan tinjauan mingguan', 'Kepala gudang', 'Isi tanggal', 'Ambil sampel tindakan pada siklus berikutnya', 'Terbuka'],
    ] },
    faqItems: [
      { question: 'Apa perbedaan koreksi dan tindakan perbaikan?', answer: 'Koreksi menangani masalah yang ditemukan. Tindakan perbaikan menyasar penyebab agar tidak terulang.' },
      { question: 'Apakah foto cukup untuk menutup temuan?', answer: 'Foto bisa mendukung bukti koreksi fisik. Pilih juga bukti yang menunjukkan penyebab sudah ditangani dan tindakan bekerja, sesuai sifat temuan.' },
    ],
    source: 'smk3', parents: ['/audit-smk3/'], related: ['audit-internal-smk3', 'jasa-pendampingan-smk3'], cta: 'Konsultasikan tindak lanjut temuan audit',
  },
  {
    slug: 'contoh-rkk-penawaran',
    title: 'Contoh RKK Penawaran: Format dan Checklist Tender',
    description: 'Pelajari contoh RKK penawaran untuk tender konstruksi, dari elemen SMKK hingga pemeriksaan konsistensi dengan metode kerja dan dokumen pemilihan.',
    intro: 'Rencana Keselamatan Konstruksi (RKK) penawaran menjelaskan bagaimana peserta tender merencanakan keselamatan untuk paket pekerjaan yang ditawarkan. Gunakan format dokumen pemilihan dan adendum paket sebagai dasar pengisian.',
    sections: [
      { heading: 'Peta isi RKK terhadap lingkup penawaran', paragraphs: [
        'Telusuri elemen kepemimpinan dan partisipasi pekerja, perencanaan, dukungan, operasi, serta evaluasi kinerja keselamatan konstruksi. Catat tabel dan bukti yang diminta pada tahapan penawaran, termasuk instruksi pengisian dan penandatanganan pada dokumen pemilihan.',
        'Pada contoh renovasi gedung aktif, pekerjaan dan area terdampak perlu konsisten dengan metode penawaran. Masukkan interaksi pekerja dengan penghuni gedung pada bagian risiko yang relevan. Tunjukkan siapa yang bertanggung jawab atas koordinasi akses dan bagaimana pengendalian akan diperiksa.'
      ] },
      { heading: 'Tinjauan sebelum mengunggah penawaran', paragraphs: [
        'Cocokkan identitas paket, versi dokumen, metode, jadwal, sumber daya, dan personel yang disebut di RKK dengan dokumen penawaran lain. Periksa adendum terakhir, catat halaman bukti, dan gunakan satu peninjau untuk membaca dokumen sebagai evaluator.',
        'Setelah kontrak, gunakan RKK yang berlaku untuk tahap pelaksanaan dan sesuaikan dengan metode, kondisi lapangan, serta mekanisme persetujuan proyek. Simpan catatan revisi agar perubahan dapat ditelusuri.'
      ] },
      { heading: 'Contoh isian RKK untuk renovasi gedung aktif', paragraphs: [
        'Ruang lingkup contoh meliputi renovasi interior lantai dasar dengan gedung tetap beroperasi. Pada elemen kepemimpinan, manajer proyek meninjau rencana pemisahan area dan menunjuk PIC koordinasi dengan pengelola gedung. Pada perencanaan, IBPRP mencatat potensi interaksi kendaraan pengiriman dengan pengguna gedung.',
        'Pada elemen dukungan, jadwalkan sosialisasi batas area kepada pekerja dan petugas gedung. Pada operasi, hubungkan jadwal pengiriman dengan persetujuan akses. Pada evaluasi, jadwalkan pemeriksaan jalur dan catat tindakan bila kondisi di lapangan menyimpang dari rencana. Cocokkan setiap isian dengan kolom yang diminta di dokumen pemilihan.'
      ] },
    ],
    asset: { title: 'Checklist review RKK penawaran', columns: ['Bagian', 'Pemeriksaan', 'Contoh catatan', 'Rujukan tender', 'Status'], examples: [
      ['Identitas', 'Cocokkan nama paket dan versi dokumen', 'Periksa adendum terakhir', '', ''],
      ['Risiko', 'Cocokkan aktivitas dengan metode', 'Renovasi di gedung aktif: interaksi dengan penghuni', '', ''],
      ['Dukungan', 'Periksa konsistensi personel dan sumber daya', 'Bandingkan dengan daftar personel penawaran', '', ''],
      ['Pengiriman', 'Periksa kelengkapan dan bentuk persetujuan', 'Gunakan daftar unggahan paket', '', ''],
    ] },
    faqItems: [
      { question: 'Apakah satu format cocok untuk seluruh tender?', answer: 'Gunakan format dan instruksi pada dokumen pemilihan paket. Rujukan umum membantu memahami isinya.' },
      { question: 'Apakah RKK penawaran bisa dipakai saat pelaksanaan?', answer: 'Gunakan RKK penawaran sebagai masukan dan siapkan dokumen pelaksanaan sesuai ketentuan kontrak, kondisi lapangan, dan proses persetujuan proyek.' },
    ],
    source: 'smkk', parents: ['/smkk-konstruksi/'], related: ['contoh-ibprp-konstruksi', 'jasa-pendampingan-smkk'], cta: 'Minta tinjauan RKK untuk paket tender Anda',
  },
  {
    slug: 'jasa-pendampingan-smkk',
    title: 'Jasa Pendampingan SMKK Konstruksi untuk Tender dan Proyek',
    description: 'Konsultasikan pendampingan SMKK konstruksi untuk review RKK penawaran, persiapan mobilisasi, dan pemeriksaan bukti penerapan di proyek.',
    intro: 'Jasa pendampingan SMKK konstruksi dapat dimulai saat dokumen tender disusun, sebelum mobilisasi, atau saat proyek sudah berjalan. Tentukan tahap proyek supaya permintaan bantuan menghasilkan keluaran yang dapat dipakai oleh tim.',
    sections: [
      { heading: 'Pilih lingkup berdasarkan tahap proyek', paragraphs: [
        'Untuk tender, tinjau kesesuaian draf RKK dengan dokumen pemilihan, metode kerja, dan personel yang ditawarkan. Keluaran yang dapat diminta berupa daftar revisi, catatan bukti yang masih kurang, serta peninjauan draf akhir.',
        'Sebelum mobilisasi, gunakan ruang lingkup kontrak dan kondisi lokasi untuk meninjau rencana kerja, pembagian tanggung jawab, dan bukti kesiapan. Pada tahap pelaksanaan, sepakati area yang akan ditinjau, sampel catatan, serta pengendalian yang perlu diperiksa bersama tim proyek.'
      ] },
      { heading: 'Data untuk meminta penawaran pendampingan', paragraphs: [
        'Sampaikan jenis paket, lokasi, fase, aktivitas utama, tanggal yang mengikat, dan dokumen yang sudah tersedia. Untuk pekerjaan dengan beberapa kontraktor, jelaskan pembagian lokasi, akses, dan tanggung jawab koordinasi.',
        'Minta proposal yang mencantumkan jumlah siklus review, kunjungan, keluaran, dan PIC persetujuan. Sisihkan waktu untuk klarifikasi dengan pengguna jasa jika penafsiran syarat tender atau kontrak masih terbuka.'
      ] },
    ],
    asset: { title: 'Brief lingkup pendampingan SMKK', columns: ['Tahap', 'Dokumen awal', 'Keluaran yang diminta', 'Target', 'PIC'], examples: [
      ['Tender', 'Dokumen pemilihan dan draf RKK', 'Daftar revisi dan review akhir', '', ''],
      ['Mobilisasi', 'Kontrak, metode, dan jadwal', 'Daftar kesiapan per area', '', ''],
      ['Pelaksanaan', 'RKK berlaku dan catatan inspeksi', 'Daftar tindakan dan bukti verifikasi', '', ''],
    ] },
    faqItems: [
      { question: 'Bisakah pendampingan dimulai setelah kontrak?', answer: 'Ya. Lingkup dapat diarahkan ke kesiapan mobilisasi, peninjauan RKK pelaksanaan, atau pemeriksaan bukti penerapan.' },
      { question: 'Apa yang perlu disiapkan untuk review awal?', answer: 'Kirim ringkasan paket, fase proyek, dokumen tender atau kontrak yang relevan, draf RKK, dan tenggat peninjauan.' },
    ],
    source: 'smkk', parents: ['/smkk-konstruksi/'], related: ['contoh-rkk-penawaran', 'contoh-ibprp-konstruksi'], cta: 'Kirim brief proyek untuk pendampingan SMKK',
  },
  {
    slug: 'contoh-dokumen-csms',
    title: 'Contoh Dokumen CSMS untuk Prakualifikasi Kontraktor',
    description: 'Lihat contoh dokumen CSMS dan unduh matriks yang memetakan pertanyaan prakualifikasi kontraktor ke bukti K3, versi dokumen, dan penanggung jawab.',
    intro: 'Contoh dokumen CSMS berikut membantu kontraktor menghubungkan pertanyaan prakualifikasi dengan bukti yang dapat diperiksa. Mulailah dengan kuesioner klien dan susun daftar bukti berdasarkan nomor pertanyaan.',
    sections: [
      { heading: 'Pasangkan pertanyaan dengan bukti penerapan', paragraphs: [
        'Untuk kebijakan K3, siapkan kebijakan yang disahkan dan, bila diminta, bukti sosialisasi atau evaluasinya. Untuk organisasi K3, cocokkan bagan dengan peran dan personel yang berlaku. Untuk inspeksi, pilih sampel catatan, temuan, dan tindakan yang sesuai ruang lingkup pertanyaan.',
        'Satu dokumen dapat mendukung beberapa pertanyaan. Cantumkan halaman atau bagian tertentu supaya peninjau dapat menemukan bukti dengan cepat. Jika pertanyaan meminta bukti dari periode tertentu, periksa tanggalnya sebelum dicantumkan.'
      ] },
      { heading: 'Atur folder dan lakukan pemeriksaan silang', paragraphs: [
        'Kelompokkan bukti berdasarkan elemen kuesioner atau ikuti struktur unggahan yang ditetapkan pembeli. Gunakan nama berkas yang membantu penelusuran, misalnya 01-Kebijakan-K3-Rev02.pdf. Simpan indeks terpisah dengan kolom lokasi berkas, pemilik, tanggal, dan status.',
        'Minta peninjau membuka lampiran dari indeks. Periksa apakah berkas dapat dibaca, versinya tepat, dan jawabannya sesuai pertanyaan. Catat bukti yang masih kurang dan tindakan untuk melengkapinya. Kelola data pribadi sesuai kebutuhan unggahan dan aturan yang berlaku.'
      ] },
      { heading: 'Contoh jawaban prakualifikasi dengan bukti silang', paragraphs: [
        'Untuk pertanyaan tentang sosialisasi kebijakan, contoh jawaban adalah “Kebijakan revisi 02 disampaikan saat induksi. Lihat kebijakan halaman 1 dan catatan induksi pada lampiran A.” Pastikan tanggal dan peserta pada catatan benar-benar mendukung jawaban. Jika catatan hanya mencakup satu lokasi, jelaskan lingkupnya.',
        'Untuk pertanyaan mengenai temuan inspeksi, hubungkan nomor temuan pada laporan dengan baris register tindakan dan bukti verifikasi. Jika tindakan masih berjalan, cantumkan status serta target penyelesaian sesuai format yang diminta klien.'
      ] },
    ],
    asset: { title: 'Matriks bukti dokumen CSMS', columns: ['Butir klien', 'Topik', 'Contoh bukti', 'File atau halaman', 'Pemilik', 'Status'], examples: [
      ['Isi nomor', 'Kebijakan K3', 'Kebijakan disahkan dan rekaman sosialisasi', '', 'Manajemen dan HSE', 'Periksa versi'],
      ['Isi nomor', 'Organisasi K3', 'Bagan dan uraian tanggung jawab', '', 'HR dan HSE', 'Periksa personel'],
      ['Isi nomor', 'Inspeksi', 'Catatan inspeksi dan tindak lanjut', '', 'Supervisor area', 'Periksa periode'],
    ] },
    faqItems: [
      { question: 'Apakah dokumen CSMS sama di semua perusahaan pemberi kerja?', answer: 'Kuesioner dan persyaratan bukti mengikuti masing-masing pemberi kerja dan lingkup kontrak. Gunakan daftar terbaru untuk paket Anda.' },
      { question: 'Bagaimana jika bukti belum tersedia?', answer: 'Catat kesenjangan, siapa yang menindaklanjuti, dan waktunya. Klarifikasi kepada pemberi kerja jika ketentuan pengajuan untuk butir tersebut belum jelas.' },
    ],
    source: 'csms', parents: ['/panduan-csms-kontraktor/'], related: ['jasa-pendampingan-csms'], cta: 'Bahas kelengkapan dokumen CSMS Anda',
  },
  {
    slug: 'jasa-pendampingan-csms',
    title: 'Jasa Pendampingan CSMS: Review Prakualifikasi Kontraktor',
    description: 'Ajukan konsultasi pendampingan CSMS. Siapkan kuesioner klien, tenggat prakualifikasi, dan dokumen K3 untuk menentukan lingkup review.',
    intro: 'Jika Anda mencari jasa pendampingan CSMS, siapkan kuesioner dari pemberi kerja, ruang lingkup kontrak, tenggat, dan daftar bukti yang tersedia. Informasi ini membantu menentukan apakah kebutuhan utama Anda berupa review pengajuan atau perbaikan penerapan di lapangan.',
    sections: [
      { heading: 'Lingkup yang perlu disepakati sebelum mulai', paragraphs: [
        'Mulai dari pemetaan butir kuesioner ke bukti perusahaan. Kelompokkan butir menjadi siap diajukan, perlu verifikasi, atau perlu tindakan. Misalnya, bila klien meminta jejak tindak lanjut inspeksi, tim dapat mencocokkan sampel laporan dengan register dan catatan penutupan.',
        'Sepakati keluaran dan siapa yang mengerjakannya. Untuk review dokumen, keluaran dapat berupa matriks bukti dan daftar revisi. Jika penilaian mencakup verifikasi lapangan, tentukan lokasi, PIC, dan waktu untuk melihat catatan serta praktik kerja.'
      ] },
      { heading: 'Cara mempersiapkan review menjelang tenggat', paragraphs: [
        'Atur waktu untuk membuat draf jawaban, memvalidasi lampiran, dan meminta persetujuan internal. Tandai bukti yang harus diminta dari lokasi atau subkontraktor. Sisakan waktu untuk menangani berkas tidak terbaca, perubahan instruksi klien, atau pertanyaan lanjutan.',
        'Saat konsultasi awal, sampaikan apakah evaluasi berbentuk unggahan, wawancara, atau kunjungan. Ketersediaan dan lingkup pendampingan dikonfirmasi setelah dokumen kebutuhan ditinjau. Keputusan prakualifikasi berada pada pihak yang menilai pengajuan.'
      ] },
    ],
    asset: { title: 'Brief permintaan review CSMS', columns: ['Data', 'Contoh isian', 'Isian kontraktor'], examples: [
      ['Paket dan pemberi kerja', 'Pemeliharaan fasilitas', ''],
      ['Tenggat dan metode', 'Unggah dokumen melalui portal', ''],
      ['Bukti yang perlu diperiksa', 'Rekaman inspeksi dan bukti tindakan', ''],
      ['Bantuan yang diminta', 'Pemetaan bukti dan tinjauan pengajuan', ''],
    ] },
    faqItems: [
      { question: 'Apa yang perlu dikirim untuk konsultasi awal CSMS?', answer: 'Kirim ruang lingkup pekerjaan, kuesioner yang berlaku, tenggat, dan daftar bukti yang tersedia. Ringkasan cukup untuk pembahasan awal.' },
      { question: 'Siapa yang menilai kelulusan prakualifikasi?', answer: 'Penilaian dilakukan oleh pemberi kerja atau pihak yang ditunjuk sesuai proses prakualifikasi paket.' },
    ],
    source: 'csms', parents: ['/panduan-csms-kontraktor/'], related: ['contoh-dokumen-csms'], cta: 'Tanyakan ketersediaan pendampingan CSMS',
  },
  {
    slug: 'contoh-ibprp-konstruksi',
    title: 'Contoh IBPRP Konstruksi dan Cara Mengisi Tabel Risiko',
    description: 'Lihat contoh IBPRP konstruksi untuk proyek renovasi, dengan aktivitas, bahaya, pihak terpapar, pengendalian, dan verifikasi dalam tabel yang bisa diedit.',
    intro: 'IBPRP konstruksi memetakan aktivitas proyek, bahaya, tingkat risiko, dan pengendalian yang direncanakan. Gunakan contoh renovasi gedung aktif ini untuk memahami alur pengisian tabel sebelum menilainya dengan matriks paket Anda.',
    sections: [
      { heading: 'Uraikan aktivitas dan siapa yang bisa terdampak', paragraphs: [
        'Gunakan metode kerja dan jadwal untuk mengidentifikasi aktivitas. Pisahkan aktivitas saat bahaya, peralatan, atau orang yang terpapar berubah. Untuk renovasi, pengiriman material, pemindahan material ke area kerja, dan pembuangan limbah dapat membutuhkan baris terpisah.',
        'Tulis kondisi yang menimbulkan bahaya dan dampaknya. Pada pengiriman material di gedung aktif, kendaraan dan pejalan kaki dapat berbagi akses. Pertimbangkan pekerja, pengunjung, dan penghuni yang menggunakan jalur tersebut.'
      ] },
      { heading: 'Tetapkan pengendalian dan kaitkan dengan RKK', paragraphs: [
        'Nilai risiko dengan definisi kemungkinan dan dampak yang digunakan pada paket. Untuk akses bersama, pertimbangkan pengaturan jadwal dan pemisahan jalur sebagai pilihan pengendalian. Tetapkan penanggung jawab dan bukti pemeriksaan, misalnya denah jalur yang disepakati dan catatan pengecekan kondisi akses.',
        'Nilai kembali risiko setelah pengendalian ditetapkan dengan metode yang sama. Dalam RKK, gunakan hasil IBPRP untuk menelusuri kebutuhan sumber daya, inspeksi, dan komunikasi. Tinjau ulang saat akses, metode, urutan, atau kondisi lokasi berubah.'
      ] },
    ],
    asset: { title: 'Tabel contoh IBPRP konstruksi', columns: ['Aktivitas', 'Bahaya dan dampak', 'Pihak terpapar', 'Risiko awal', 'Rencana pengendalian', 'Risiko sisa', 'PIC', 'Bukti verifikasi'], examples: [
      ['Pengiriman material', 'Akses bersama: potensi tertabrak', 'Penghuni dan pekerja', '', 'Atur jadwal dan pisahkan jalur sesuai kondisi lokasi', '', 'Supervisor proyek', 'Denah akses dan catatan pemeriksaan'],
      ['Pemindahan material', 'Material di jalur: potensi tersandung', 'Pekerja dan penghuni', '', 'Tetapkan area penempatan dan pertahankan jalur bebas hambatan', '', 'Mandor', 'Catatan tinjauan area'],
    ] },
    faqItems: [
      { question: 'Mengapa skor risiko pada contoh masih kosong?', answer: 'Isi skor berdasarkan kriteria penilaian paket, kondisi lapangan, dan pengendalian yang benar-benar tersedia.' },
      { question: 'Kapan IBPRP perlu ditinjau ulang?', answer: 'Tinjau kembali saat terjadi perubahan metode, peralatan, kondisi lokasi, pihak terpapar, atau temuan yang mengubah penilaian risiko.' },
    ],
    source: 'smkk', parents: ['/smkk-konstruksi/', '/contoh-hiradc/'], related: ['contoh-rkk-penawaran', 'jasa-pendampingan-smkk'], cta: 'Bahas penyusunan IBPRP untuk proyek Anda',
  },
];
