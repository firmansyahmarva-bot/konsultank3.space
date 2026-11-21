type GuideSource = keyof typeof guideSources;

type Guide = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  asset: { title: string; columns: string[]; examples: string[][] };
  faqItems: { question: string; answer: string }[];
  source: GuideSource | GuideSource[];
  lastUpdated?: string;
  parents: string[];
  related: string[];
  cta: string;
};

export const guideSources = {
  smk3: { title: 'PP Nomor 50 Tahun 2012 dan lampirannya', url: 'https://jdih.kemnaker.go.id/asset/data_puu/PPNOMOR50_TAHUN_2012.pdf' },
  smkk: { title: 'Permen PUPR Nomor 10 Tahun 2021 dan lampirannya', url: 'https://jdih.pu.go.id/detail-dokumen/PermenPUPR-nomor-10-tahun-2021-Pedoman-Sistem-Manajemen-Keselamatan-Konstruksi' },
  csms: { title: 'Contoh formulir prakualifikasi CSMS Pertamina', url: 'https://www.pertamina.com/Media/Upload/Files/Form-Isian-PQ-CSMS.pdf' },
  p2k3: { title: 'Permenaker Nomor 13 Tahun 2025 tentang P2K3', url: 'https://jdih.kemnaker.go.id/asset/data_puu/2025pmnaker013.pdf' },
  jsa: { title: 'Contoh formulir JSA pada pedoman Badan Karantina Indonesia', url: 'https://jdih.karantinaindonesia.go.id/storage/common/dokumen/2024KepDeputiKI14.pdf' },
  lingkungan: { title: 'Permenaker Nomor 5 Tahun 2018 tentang K3 Lingkungan Kerja', url: 'https://jdih.kemnaker.go.id/asset/data_puu/Permen_5_2018.pdf' },
  forklift: { title: 'Permenaker Nomor 8 Tahun 2020 tentang K3 Pesawat Angkat dan Angkut', url: 'https://jdih.kemnaker.go.id/asset/data_puu/Permen_8_Tahun_2020.pdf' },
  apar: { title: 'PER.04/MEN/1980 tentang Pemasangan dan Pemeliharaan APAR', url: 'https://temank3.kemnaker.go.id/page/perundangan_detail/52/2b6f3f64664cea53d9527b9388c9e67d' },
  iso: { title: 'ISO 45001:2018 dan Amandemen 1:2024', url: 'https://www.iso.org/standard/45001' },
  bina: { title: 'Contoh program komunikasi keselamatan konstruksi pada SE Dirjen Bina Marga 16/SE/Db/2025', url: 'https://binamarga.pu.go.id/uploads/files/2105/surat-edaran-direktur-jenderal-bina-marga-nomor-16sedb2025-tentang-tata-cara-penetapan-persyaratan-kualifikasi-ldk-dan-mdp-paket-pekerjaan-konstruksi-preservasi-jalan-dan-jembatan-dengan-skema-long-segment-modifikasi-.pdf' },
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
  '/izin-kerja-k3-ptw/': 'Sistem izin kerja K3',
  '/dokumen-smk3/': 'Dokumen penerapan SMK3',
  '/membentuk-p2k3/': 'Cara membentuk P2K3',
  '/laporan-p2k3-disnaker/': 'Cara melaporkan kegiatan P2K3 ke Disnaker',
  '/sio-dan-sia-k3/': 'Lisensi operator dan dokumen pemeriksaan alat',
  '/checklist-inspeksi-k3/': 'Checklist inspeksi area kerja',
  '/arti-rambu-k3/': 'Panduan arti rambu K3',
  '/isi-kotak-p3k-permenaker/': 'Daftar isi kotak P3K di tempat kerja',
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
  {
    "slug": "contoh-jsa",
    "title": "Contoh JSA: Cara Mengisi Job Safety Analysis",
    "description": "Lihat contoh JSA untuk penerimaan material, cara menghubungkan langkah kerja dengan bahaya, dan unduh formulir Job Safety Analysis.",
    "intro": "Job Safety Analysis (JSA) menguraikan satu pekerjaan menjadi langkah yang bisa diamati, lalu menghubungkan tiap langkah dengan bahaya, pengendalian, dan pemeriksaan sebelum mulai. Contoh ini memakai penerimaan material di gudang dengan jalur yang juga digunakan pejalan kaki.",
    "sections": [
      {
        "heading": "Mulai dari pekerjaan yang benar-benar dilakukan",
        "paragraphs": [
          "Tetapkan awal dan akhir pekerjaan. Untuk contoh ini, lingkup dimulai dari kendaraan tiba dan berakhir setelah material berada di area penempatan. Ajak supervisor dan pekerja yang menjalankan tugas menjelaskan urutan aktual, termasuk variasi saat jalur sibuk, barang terlambat, atau pekerja dari area lain menggunakan akses yang sama.",
          "Pisahkan langkah ketika sumber bahaya atau orang yang terpapar berubah. Kedatangan kendaraan, pembongkaran, dan pemindahan material layak dipisah. Untuk langkah yang terlalu umum seperti “bongkar barang”, peninjau sulit melihat kapan kendaraan bergerak, kapan material perlu diperiksa, serta kapan area dapat dibuka kembali."
        ]
      },
      {
        "heading": "Ubah bahaya menjadi pengendalian yang bisa diperiksa",
        "paragraphs": [
          "Untuk langkah kedatangan kendaraan, bahaya spesifiknya adalah pertemuan kendaraan dan orang di akses bersama. Pertimbangkan jadwal pengiriman serta pemisahan jalur sesuai kondisi lokasi. Tulis siapa yang memeriksa akses dan apa yang akan dilihat. Kalimat “periksa jalur yang disepakati dan pastikan akses pejalan kaki tetap tersedia” memberi supervisor objek pemeriksaan.",
          "Untuk pemindahan material, periksa rute, kestabilan barang, dan kapasitas peralatan yang akan digunakan sesuai prosedur lokasi. Jika material berbeda dari yang direncanakan, tinjau ulang langkah dan aturan penggunaannya bersama pihak yang berwenang. Pastikan kelompok yang mungkin terdampak mengetahui perubahan sebelum pekerjaan dilanjutkan."
        ]
      },
      {
        "heading": "Bawa contoh JSA ke pengarahan sebelum mulai",
        "paragraphs": [
          "Pada pengarahan, minta pengemudi atau penerima material menunjukkan titik koordinasi pada denah. Minta seorang pekerja menjelaskan apa yang dilakukan jika jalur tidak dapat dipisahkan. Gunakan jawaban untuk memeriksa apakah pembagian peran, titik komunikasi, dan keputusan menunda pekerjaan dapat dipahami. Catat perubahan kondisi serta siapa yang memverifikasi pengendaliannya.",
          "JSA dapat menjadi masukan pada izin kerja jika prosedur tempat kerja mensyaratkannya. Cocokkan identitas tugas, lokasi, waktu, serta pengendalian pada kedua dokumen. Apabila izin menyebut syarat tambahan, bawa syarat tersebut ke pengarahan dan pastikan tim mengetahui siapa yang memberi persetujuan."
        ]
      },
      {
        "heading": "Ketahui kapan contoh harus direvisi",
        "paragraphs": [
          "Setelah tugas selesai, tanyakan apakah ada langkah yang berbeda dari rencana. Misalnya, jika area penempatan penuh, alur mungkin berbelok melalui akses yang digunakan tim lain. Catat kondisi baru, orang yang dapat terpapar, dan pengendalian yang dibutuhkan. Pilih tanggal serta penanggung jawab untuk meninjau revisi sebelum pekerjaan serupa diulang.",
          "Gunakan HIRADC untuk melihat bahaya pada lingkup proses atau area yang lebih luas. Turunkan bahaya yang relevan ke JSA dan periksa tiap langkah sesuai kondisi tempat kerja. Jika temuan JSA menunjukkan bahaya berulang pada beberapa tugas, bawa informasi itu kembali ke tinjauan HIRADC."
        ]
      }
    ],
    "asset": {
      "title": "Form JSA penerimaan material",
      "columns": [
        "Langkah",
        "Bahaya dan pihak terpapar",
        "Pengendalian yang direncanakan",
        "Cara verifikasi",
        "PIC"
      ],
      "examples": [
        [
          "Kendaraan tiba",
          "Orang dan kendaraan berbagi akses",
          "Atur jadwal dan pisahkan jalur sesuai lokasi",
          "Periksa denah dan kondisi jalur",
          "Supervisor gudang"
        ],
        [
          "Barang dipindahkan",
          "Barang tidak stabil dan orang melintas",
          "Periksa kemasan, alat, dan rute sesuai prosedur",
          "Tinjau kondisi barang dan jalur sebelum mulai",
          "Pemimpin tugas"
        ],
        [
          "Area dibuka kembali",
          "Material menghalangi jalur",
          "Kembalikan jalur ke kondisi yang disepakati",
          "Periksa akses sebelum dibuka",
          "Penerima material"
        ]
      ]
    },
    "faqItems": [
      {
        "question": "Kapan JSA ditinjau ulang?",
        "answer": "Tinjau ulang saat metode, orang yang terpapar, kondisi lokasi, atau peralatan berubah, serta setelah temuan yang memengaruhi pengendalian."
      },
      {
        "question": "Siapa yang dilibatkan dalam pengisian?",
        "answer": "Libatkan orang yang menjalankan pekerjaan, supervisor, dan pihak yang memeriksa pengendalian sesuai prosedur lokasi."
      }
    ],
    "source": "jsa",
    "parents": [
      "/contoh-hiradc/",
      "/izin-kerja-k3-ptw/"
    ],
    "related": [
      "contoh-toolbox-meeting",
      "checklist-inspeksi-k3"
    ],
    "cta": "Bahas JSA untuk pekerjaan Anda",
    "lastUpdated": "2026-11-21"
  },
  {
    "slug": "checklist-inspeksi-k3",
    "title": "Checklist Inspeksi K3 Gudang dan Pabrik",
    "description": "Unduh checklist inspeksi K3 untuk gudang atau pabrik. Lihat contoh temuan, tindakan sementara, penanggung jawab, dan verifikasi penutupan.",
    "intro": "Checklist inspeksi K3 membantu tim mencatat kondisi yang dapat diperiksa dan mengubah temuan menjadi tindakan. Contoh ini berfokus pada jalur, material, dan kondisi yang berubah antargiliran kerja di gudang atau pabrik.",
    "sections": [
      {
        "heading": "Siapkan rute dan tentukan kriteria",
        "paragraphs": [
          "Gunakan denah, hasil inspeksi sebelumnya, dan daftar aktivitas untuk memilih area. Pada satu rute gudang, periksa akses, penerimaan material, area penyimpanan, titik pertemuan orang dan kendaraan, serta jalur keluar. Pilih waktu ketika proses yang ingin diamati berlangsung. Catat area yang belum dapat dilihat dan masukkan ke jadwal berikutnya.",
          "Gunakan pertanyaan yang mengacu pada keadaan nyata. Contohnya, “Apakah jalur pejalan kaki yang ditetapkan bebas hambatan?” lebih mudah diperiksa daripada “Apakah housekeeping baik?” Gunakan status sesuai, temuan, tidak berlaku, atau belum diperiksa. Tambahkan alasan ketika kondisi belum bisa diverifikasi."
        ]
      },
      {
        "heading": "Tulis temuan seperti orang lain akan memeriksanya",
        "paragraphs": [
          "Alih-alih menulis “jalur berbahaya”, catat “dua palet menutup sebagian jalur pejalan kaki di sisi pintu penerimaan, terlihat saat pergantian giliran sore”. Tambahkan tanggal, lokasi tepat, siapa yang dapat terdampak, dan rujukan foto bila pengambilan foto diizinkan. Bukti membantu penanggung jawab menemukan titik yang dimaksud.",
          "Bila kondisi perlu tindakan segera, sampaikan kepada supervisor dan ikuti prosedur lokasi. Dalam contoh, tim memindahkan palet ke lokasi yang ditetapkan dan memeriksa akses sebelum membuka kembali jalur. Catat tindakan sementara, waktu, dan siapa yang memeriksa. Untuk mencegah pengulangan, telusuri apakah ruang transit, pengaturan jadwal, atau pengawasan serah terima perlu diperbaiki."
        ]
      },
      {
        "heading": "Tutup tindakan dengan bukti dan periksa temuan berulang",
        "paragraphs": [
          "Berikan ID, penanggung jawab, dan batas waktu untuk setiap tindakan. Setelah menerima bukti perbaikan, periksa kondisi melalui kunjungan atau rekaman yang sesuai. Untuk temuan jalur, gunakan observasi ulang pada waktu aktivitas serupa. Jika hambatan muncul lagi, buka kembali tindakan dan periksa apakah penyebab sebelumnya sudah ditangani.",
          "Pada tinjauan bulanan internal, kelompokkan temuan berdasarkan area dan pola. Perhatikan tindakan lewat tenggat serta temuan serupa di tempat lain. Dua area yang sama-sama kekurangan tempat transit mungkin memerlukan keputusan yang lebih luas daripada memindahkan palet satu per satu."
        ]
      },
      {
        "heading": "Sesuaikan checklist dengan peralatan dan lingkup",
        "paragraphs": [
          "Tambahkan kategori sesuai proses, misalnya keterbacaan petunjuk, penempatan bahan, atau kondisi akses ke sarana darurat. Untuk pemeriksaan teknis, rujuk daftar khusus dan pihak yang kompeten. Catat nomor aset, lokasi, dan kapan pemeriksaan perlu ditindaklanjuti. Checklist umum dapat menjadi pintu masuk untuk mengarahkan kondisi yang perlu diperiksa lebih mendalam."
        ]
      }
    ],
    "asset": {
      "title": "Checklist inspeksi area",
      "columns": [
        "Area",
        "Item pemeriksaan",
        "Status",
        "Temuan atau bukti",
        "Tindakan",
        "PIC",
        "Tenggat",
        "Verifikasi"
      ],
      "examples": [
        [
          "Penerimaan",
          "Jalur sesuai denah bebas hambatan",
          "Temuan",
          "Palet di sisi pintu",
          "Pindahkan dan tinjau area transit",
          "Supervisor",
          "",
          "Cek ulang saat pergantian giliran"
        ],
        [
          "Gudang",
          "Label lokasi penyimpanan terbaca",
          "Belum diperiksa",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "Akses keluar",
          "Akses terjaga sesuai prosedur lokasi",
          "Belum diperiksa",
          "",
          "",
          "",
          "",
          ""
        ]
      ]
    },
    "faqItems": [
      {
        "question": "Bolehkah satu checklist dipakai untuk semua area?",
        "answer": "Gunakan daftar umum sebagai dasar, lalu tambahkan item yang sesuai aktivitas, aset, dan kriteria area."
      },
      {
        "question": "Apa beda tindakan sementara dan penutupan?",
        "answer": "Tindakan sementara mengendalikan kondisi saat itu. Penutupan membutuhkan bukti penyelesaian serta pemeriksaan sesuai sifat temuan."
      }
    ],
    "source": "smk3",
    "parents": [
      "/dokumen-smk3/"
    ],
    "related": [
      "contoh-program-kerja-p2k3",
      "tindak-lanjut-temuan-audit-smk3"
    ],
    "cta": "Bahas sistem inspeksi K3 perusahaan",
    "lastUpdated": "2026-11-21"
  },
  {
    "slug": "contoh-program-kerja-p2k3",
    "title": "Contoh Program Kerja P2K3 dan Kalender Tahunan",
    "description": "Susun program kerja P2K3 sesuai Pasal 10 Permenaker 13/2025. Lihat contoh target, PIC, kalender, bukti kegiatan, dan unduh tabel kerja.",
    "intro": "Program kerja P2K3 mengatur cara panitia menindaklanjuti masalah K3 sepanjang tahun. Gunakan contoh ini untuk mengubah lima komponen program pada Pasal 10 Permenaker 13/2025 menjadi kegiatan, penanggung jawab, ukuran keberhasilan, dan bukti.",
    "sections": [
      {
        "heading": "Mulai dari lima komponen Pasal 10",
        "paragraphs": [
          "Susun daftar masalah K3 dari laporan pekerja, inspeksi, evaluasi sebelumnya, dan perubahan proses. Identifikasi potensi bahaya, termasuk pihak yang dapat terdampak. Pilih kegiatan pemeriksaan penerapan yang bisa memvalidasi apakah pengendalian yang disepakati benar-benar digunakan di area kerja.",
          "Siapkan kegiatan analisis statistik kecelakaan dan penyakit akibat kerja dengan sumber dan periode data yang jelas. Setelah meninjau hasil, rumuskan saran perbaikan untuk pengusaha atau pengurus. Kelima komponen ini dapat dibuat dalam satu format kalender, dengan tambahan register tindakan agar hambatan serta rekomendasi tetap mudah dilacak."
        ]
      },
      {
        "heading": "Contoh mengubah temuan menjadi program tahunan",
        "paragraphs": [
          "Misalnya, pekerja dari dua giliran melaporkan akses penerimaan barang sering dipakai bersamaan oleh pejalan kaki dan kendaraan. Pada bulan pertama, inventarisasi titik persinggungan dan masukkan ke penilaian bahaya. Setelah manajemen memutuskan pengaturan akses, jadwalkan inspeksi saat penerimaan berlangsung. Keluaran yang diminta adalah catatan kondisi jalur, waktu, dan tindakan bila pengendalian belum tersedia.",
          "Tetapkan penanggung jawab yang bisa menjalankan kegiatan, misalnya supervisor gudang sebagai pemilik pengaturan akses dan anggota P2K3 sebagai peninjau hasil. Contoh indikatornya adalah seluruh titik akses yang diidentifikasi telah ditinjau pada waktu operasi. Jika target belum tercapai, catat alasan, kebutuhan sumber daya, dan tanggal tindak lanjut."
        ]
      },
      {
        "heading": "Pakai rapat untuk mengambil keputusan",
        "paragraphs": [
          "Pada rapat, mulai dengan tindakan lama yang belum selesai dan kondisi berisiko yang berubah. Untuk setiap rekomendasi, tentukan keputusan yang diminta, penerima usulan, dan batas respons. Misalnya, perubahan akses bisa membutuhkan persetujuan penggunaan ruang dan perubahan jadwal pengiriman. Catat keputusan manajemen dan cara memeriksa hasil.",
          "Bedakan indikator pelaksanaan dari hasil. Jumlah inspeksi menunjukkan kegiatan dilakukan. Frekuensi akses terhalang pada waktu yang sebanding dapat menunjukkan perubahan kondisi. Pilih ukuran yang dapat diuji dengan catatan yang sudah tersedia dan sepakati kapan hasilnya dinilai."
        ]
      },
      {
        "heading": "Siapkan bahan laporan setiap enam bulan",
        "paragraphs": [
          "Rekap realisasi, hambatan, dan rekomendasi dari kalender dan notulen. Untuk kegiatan yang terlambat, catat sebab, tindakan sementara, serta jadwal revisi. Simpan versi kalender yang dipakai pada periode laporan agar angka rencana dan realisasi dapat diperiksa. Pasal 11 menetapkan pelaporan kegiatan setiap enam bulan atau sewaktu-waktu apabila diperlukan.",
          "Contoh kalender memakai tahun berjalan sebagai periode perencanaan. Tempat kerja dapat mengatur frekuensi rapat, inspeksi, dan evaluasi internal berdasarkan risiko serta kebutuhan. Hubungkan tiap baris kegiatan dengan bukti yang dapat digunakan pada format laporan resmi."
        ]
      }
    ],
    "asset": {
      "title": "Kalender program kerja P2K3",
      "columns": [
        "Komponen Pasal 10",
        "Kegiatan",
        "Contoh jadwal",
        "PIC",
        "Ukuran atau keluaran",
        "Bukti",
        "Status"
      ],
      "examples": [
        [
          "Inventarisasi masalah",
          "Rekap laporan akses gudang",
          "Januari",
          "Sekretaris",
          "Daftar isu per area",
          "Register isu",
          "Rencana"
        ],
        [
          "Identifikasi bahaya",
          "Tinjau akses saat bongkar muat",
          "Februari",
          "Tim gudang",
          "Peta titik persinggungan",
          "Catatan penilaian",
          "Rencana"
        ],
        [
          "Pemeriksaan penerapan",
          "Periksa perubahan akses saat operasi",
          "Maret–Juni",
          "Supervisor",
          "Hasil observasi dan tindakan",
          "Checklist dan foto bila diizinkan",
          "Rencana"
        ],
        [
          "Statistik",
          "Telaah kecelakaan dan PAK",
          "Akhir periode",
          "HSE",
          "Rekap dan definisi data",
          "Register sumber",
          "Rencana"
        ],
        [
          "Saran perbaikan",
          "Ajukan keputusan penataan jalur",
          "Setelah tinjauan",
          "Ketua",
          "Tanggapan manajemen dan PIC",
          "Notulen",
          "Rencana"
        ]
      ]
    },
    "faqItems": [
      {
        "question": "Apakah program harus menggunakan format tahunan ini?",
        "answer": "Kalender ini adalah alat perencanaan. Sesuaikan dengan kondisi perusahaan dan pastikan lima komponen Pasal 10 tercakup."
      },
      {
        "question": "Kapan kegiatan dilaporkan?",
        "answer": "Ketua menyampaikan laporan setiap enam bulan atau sewaktu-waktu bila diperlukan sesuai Pasal 11. Gunakan format lampiran peraturan."
      }
    ],
    "source": "p2k3",
    "parents": [
      "/membentuk-p2k3/",
      "/laporan-p2k3-disnaker/"
    ],
    "related": [
      "checklist-inspeksi-k3",
      "tindak-lanjut-temuan-audit-smk3"
    ],
    "cta": "Bahas program dan rencana kegiatan P2K3",
    "lastUpdated": "2026-11-21"
  },
  {
    "slug": "materi-safety-induction",
    "title": "Materi Safety Induction untuk Pekerja dan Tamu",
    "description": "Susun materi safety induction sesuai akses pekerja, kontraktor, dan tamu. Unduh checklist induksi dan contoh pertanyaan pemahaman.",
    "intro": "Safety induction memperkenalkan kondisi lokasi, batas akses, cara melapor, peran kontak, dan langkah saat keadaan darurat sebelum seseorang memasuki area kerja. Susun materi berdasarkan siapa yang datang dan apa yang akan mereka lakukan.",
    "sections": [
      {
        "heading": "Bedakan kebutuhan pekerja, kontraktor, dan pengunjung",
        "paragraphs": [
          "Pekerja baru perlu mengenal area penempatan, risiko utama, pelaporan bahaya, jalur evakuasi, dan cara meminta klarifikasi pekerjaan. Kontraktor juga perlu memahami batas pekerjaan, siapa yang mendampingi, dan bagaimana pengendalian antarpekerjaan dikoordinasikan. Pengunjung biasanya perlu mengetahui rute, pendamping, pembatasan area, dan tindakan ketika alarm berbunyi.",
          "Mulai dari denah terkini. Tandai titik penerimaan, jalur yang boleh dipakai, area dengan akses terbatas, titik kumpul, serta cara menghubungi kontak lokasi. Periksa informasi tersebut dengan penanggung jawab di lapangan sebelum materi dipakai. Untuk pengunjung yang hanya berada di ruang rapat, pilih informasi yang relevan dengan akses tersebut."
        ]
      },
      {
        "heading": "Contoh susunan materi untuk lokasi renovasi aktif",
        "paragraphs": [
          "Pada awal sesi, jelaskan pekerjaan yang sedang berlangsung dan siapa yang dapat masuk ke area renovasi. Gunakan denah untuk memperlihatkan titik pemisahan penghuni dan tim proyek. Bahas cara melaporkan jalur terhalang, siapa yang bisa menghentikan aktivitas, dan bagaimana pekerja menerima perubahan rute.",
          "Pada bagian keadaan darurat, jelaskan cara mengenali tanda, rute keluar yang berlaku, titik kumpul, dan bagaimana melapor kepada pendamping atau petugas. Gunakan satu skenario singkat: seorang tamu melihat jalur keluar yang biasanya dipakai terhalang. Minta ia menunjukkan rute yang berlaku dan menyebutkan siapa yang harus diberi tahu."
        ]
      },
      {
        "heading": "Periksa pemahaman dan dokumentasikan akses",
        "paragraphs": [
          "Akhiri dengan pertanyaan yang bisa dijawab lewat penjelasan ulang atau menunjuk denah. Tanyakan siapa yang dihubungi saat pengendalian belum tersedia dan di mana pengunjung menunggu instruksi. Jika peserta belum dapat menjelaskan kembali, ulangi bagian tersebut dengan bahasa yang dipahami dan cek ulang sebelum memberikan akses yang direncanakan.",
          "Catat nama atau ID sesuai prosedur, peran, tanggal, lokasi, fasilitator, versi materi, hasil cek pemahaman, dan kebutuhan tindak lanjut. Bila peserta bekerja di lokasi berbeda pada hari berikutnya, periksa apakah materi yang diterima sudah mencakup area baru. Gunakan akses terbatas untuk data kehadiran sesuai kebutuhan."
        ]
      },
      {
        "heading": "Perbarui induksi ketika kondisi lokasi berubah",
        "paragraphs": [
          "Jika pintu masuk atau titik kumpul berpindah, perbarui denah dan materi, lalu beri tahu peserta yang sudah mendapat induksi melalui mekanisme komunikasi proyek. Simpan tanggal perubahan serta cara penyampaiannya. Untuk instruksi pekerjaan hari itu, gunakan pengarahan tugas dan rujuk JSA yang berlaku."
        ]
      }
    ],
    "asset": {
      "title": "Checklist penyampaian safety induction",
      "columns": [
        "Peserta atau peran",
        "Topik",
        "Contoh cek pemahaman",
        "Hasil",
        "Tindakan atau PIC"
      ],
      "examples": [
        [
          "Pengunjung",
          "Akses dan pendamping",
          "Tunjukkan jalur dari titik penerimaan",
          "",
          ""
        ],
        [
          "Kontraktor",
          "Koordinasi area kerja",
          "Siapa kontak jika batas akses berubah?",
          "",
          ""
        ],
        [
          "Seluruh peserta",
          "Keadaan darurat",
          "Tunjukkan titik kumpul dan cara melapor",
          "",
          ""
        ],
        [
          "Pekerja",
          "Pelaporan bahaya",
          "Jelaskan cara melapor bila pengendalian belum tersedia",
          "",
          ""
        ]
      ]
    },
    "faqItems": [
      {
        "question": "Kapan induksi perlu diulang?",
        "answer": "Tinjau ulang ketika akses, kondisi lokasi, prosedur, atau lingkup pekerjaan berubah. Ikuti ketentuan induksi lokasi."
      },
      {
        "question": "Apa beda safety induction dan toolbox meeting?",
        "answer": "Induksi memberi orientasi awal terhadap lokasi dan aturan yang relevan. Toolbox meeting membahas kondisi dan pengendalian pekerjaan yang akan dilakukan."
      }
    ],
    "source": "bina",
    "parents": [
      "/smkk-konstruksi/"
    ],
    "related": [
      "contoh-toolbox-meeting",
      "contoh-jsa"
    ],
    "cta": "Bahas materi induksi untuk proyek Anda",
    "lastUpdated": "2026-11-21"
  },
  {
    "slug": "contoh-toolbox-meeting",
    "title": "Contoh Toolbox Meeting: Tiga Briefing sebelum Kerja",
    "description": "Lihat tiga contoh toolbox meeting singkat untuk penerimaan material, perubahan akses proyek, dan pergantian giliran kerja. Unduh format catatan.",
    "intro": "Toolbox meeting adalah pengarahan singkat sebelum tugas untuk membahas pekerjaan, perubahan kondisi, pengendalian yang harus tersedia, dan hal yang perlu diselesaikan sebelum aktivitas mulai. Mulailah dari pekerjaan dan kondisi yang benar-benar dihadapi tim hari itu.",
    "sections": [
      {
        "heading": "Contoh 1. Penerimaan material di gudang",
        "paragraphs": [
          "Pembuka: “Pagi ini material datang lewat pintu penerimaan timur. Jalur di sebelahnya juga dipakai pejalan kaki.” Tunjukkan denah dan minta penerima material menjelaskan siapa yang memeriksa jalur sebelum kendaraan bergerak. Sepakati bagaimana tim menyampaikan bahwa jalur belum siap serta siapa yang menghubungi supervisor.",
          "Pertanyaan untuk tim: “Apa yang dilakukan jika area transit penuh ketika kendaraan tiba?” Gunakan jawaban untuk menguji rencana. Bila tempat penempatan belum diputuskan dan jalur akan terganggu, catat tindakan dan tunda langkah terkait sampai supervisor memverifikasi pengaturan."
        ]
      },
      {
        "heading": "Contoh 2. Perubahan akses di proyek renovasi",
        "paragraphs": [
          "Pembuka: “Akses biasa ditutup hari ini. Jalur pengganti berbagi titik persinggungan dengan penghuni gedung.” Perlihatkan titik perubahan, peran pendamping, dan batas area kerja. Minta satu pekerja menunjukkan rute pengganti dan menyebut kondisi yang harus dilaporkan sebelum membawa material.",
          "Pertanyaan untuk tim: “Siapa yang perlu diberi tahu jika jalur baru kembali terhalang?” Cocokkan jawaban dengan kontak pengelola gedung dan prosedur proyek. Jika perubahan memengaruhi penilaian risiko, minta pemilik metode meninjau JSA dan dokumen terkait sebelum mengandalkan pengendalian lama."
        ]
      },
      {
        "heading": "Contoh 3. Serah terima pada pergantian giliran",
        "paragraphs": [
          "Pembuka: “Giliran sebelumnya menunda satu pengiriman. Dua barang masih berada di area yang akan dipakai tim berikutnya.” Minta penerima giliran menunjukkan lokasi barang, status pekerjaan, serta apa yang perlu diverifikasi sebelum transfer dilanjutkan. Pastikan informasi yang dipakai sesuai kondisi, terutama jika catatan dan situasi di lantai kerja berbeda.",
          "Pertanyaan untuk tim: “Apa yang masih terbuka, siapa pemiliknya, dan kapan akan diperiksa?” Catat jawaban dalam serah terima. Jika ada pembatasan akses yang masih berlaku, konfirmasi kepada tim baru bagaimana pembatasan dipertahankan hingga dinyatakan selesai."
        ]
      },
      {
        "heading": "Gunakan catatan yang bisa ditindaklanjuti",
        "paragraphs": [
          "Simpan tanggal, lokasi, kegiatan, fasilitator, peserta, rujukan JSA bila berlaku, serta perubahan yang dibahas. Untuk setiap aksi, catat pemilik, tenggat atau kondisi sebelum mulai, dan siapa yang memeriksa. Tambahkan hasil cek pemahaman singkat, misalnya pekerja dapat menunjukkan akses yang diizinkan pada denah.",
          "Tinjau ulang pengarahan bila kondisi berubah selama giliran. Beri kesempatan pekerja mengangkat masalah yang belum tercakup. Jika muncul hambatan yang membutuhkan keputusan, masukkan ke register tindakan dan sampaikan kepada pihak yang berwenang. Bahas statusnya pada serah terima atau pengarahan berikutnya."
        ]
      }
    ],
    "asset": {
      "title": "Log toolbox meeting",
      "columns": [
        "Lokasi atau tugas",
        "Perubahan atau topik",
        "Pertanyaan cek",
        "Tindakan",
        "PIC",
        "Syarat verifikasi",
        "Status"
      ],
      "examples": [
        [
          "Penerimaan material",
          "Jalur dipakai bersama",
          "Apa tindakan jika area transit penuh?",
          "Periksa jalur sebelum mulai",
          "Supervisor",
          "Konfirmasi akses dan tempat transit",
          "Terbuka"
        ],
        [
          "Renovasi",
          "Akses berpindah",
          "Siapa kontak bila jalur terhalang?",
          "Tinjau rute dan komunikasi penghuni",
          "Koordinator",
          "Cocokkan denah dengan lokasi",
          "Terbuka"
        ],
        [
          "Pergantian giliran",
          "Pekerjaan sebelumnya tertunda",
          "Apa yang masih terbuka?",
          "Konfirmasi kondisi dengan tim penerima",
          "Pemimpin giliran",
          "Catat hasil serah terima",
          "Terbuka"
        ]
      ]
    },
    "faqItems": [
      {
        "question": "Berapa lama toolbox meeting berlangsung?",
        "answer": "Gunakan waktu yang cukup untuk menjelaskan perubahan, menjawab pertanyaan, dan menentukan tindakan. Ikuti ketentuan proyek dan tingkat kompleksitas tugas."
      },
      {
        "question": "Siapa yang sebaiknya memimpin?",
        "answer": "Pilih pemimpin tugas atau pihak yang memahami kondisi dan dapat mengoordinasikan tindakan sesuai prosedur lokasi."
      }
    ],
    "source": "bina",
    "parents": [
      "/smkk-konstruksi/"
    ],
    "related": [
      "contoh-jsa",
      "materi-safety-induction"
    ],
    "cta": "Bahas pengarahan K3 untuk tim lapangan",
    "lastUpdated": "2026-11-21"
  },
  {
    slug: "pengukuran-lingkungan-kerja",
    title: "Pengukuran Lingkungan Kerja K3: Panduan dan Checklist",
    description: "Siapkan pengukuran lingkungan kerja K3 sesuai Permenaker 5/2018. Tentukan faktor pajanan, lingkup pengujian, dan tindak lanjut melalui worksheet.",
    intro: "Untuk menyiapkan pengukuran lingkungan kerja K3, petakan aktivitas, sumber pajanan, pekerja yang terdampak, dan kondisi operasi sebelum meminta penawaran. Peta ini membantu lembaga penguji memilih metode serta titik atau pekerja yang perlu dinilai. Hasilnya kemudian dipakai untuk memeriksa kecukupan pengendalian.",
    sections: [
      { heading: "Faktor yang perlu dipetakan", paragraphs: [
        "Permenaker 5/2018 mencakup faktor fisika, kimia, biologi, ergonomi, dan psikologi. Mulai dari sumber pada proses kerja. Mesin pemotong dapat memunculkan kebisingan, aktivitas tertentu bisa menimbulkan debu atau uap, dan pekerjaan pemindahan barang berulang dapat memerlukan penilaian ergonomi. Pilihan metode bergantung pada faktor dan tujuan evaluasi.",
        "Tulis aktivitas normal serta aktivitas yang sesekali terjadi, seperti pembersihan, penggantian bahan, dan pemeliharaan. Sebutkan siapa yang bekerja di sekitar sumber, termasuk pekerja dari unit lain dan kontraktor. Cantumkan pengendalian yang sudah ada, perubahan proses terakhir, dan alasan memilih aktivitas untuk diperiksa.",
      ] },
      { heading: "Siapa yang melakukan pengujian dan kapan", paragraphs: [
        "Pasal 59 membedakan pemeriksaan atau pengujian internal dan eksternal. Personel K3 bidang lingkungan kerja dapat menjalankan pemeriksaan internal sesuai ketentuan. Pemeriksaan internal tetap menyisakan kewajiban pengukuran eksternal. Untuk lembaga eksternal di luar unit pemerintah yang tercantum pada pasal tersebut, periksa akreditasi dan penunjukan Menteri serta kesesuaiannya dengan lingkup pengujian.",
        "Pasal 62 mengatur pemeriksaan atau pengujian berkala secara eksternal setidaknya setahun sekali atau sesuai penilaian risiko maupun ketentuan yang berlaku. Saat membuat kalender, catat tanggal pemeriksaan terakhir, dasar jadwal berikutnya, dan kondisi yang memerlukan review. Perubahan bahan, kapasitas produksi, tata letak, atau ventilasi dapat mengubah penilaian pajanan.",
      ] },
      { heading: "Contoh menyusun brief untuk pabrik dua giliran", paragraphs: [
        "Pada contoh pabrik, pekerja pemotongan menghadapi sumber bising yang menyala selama beberapa bagian giliran. Gudang memakai peralatan dan pola kerja berbeda. Siapkan denah, jenis mesin, waktu operasi, jumlah pekerja per giliran, dan kegiatan yang paling mewakili pekerjaan mereka. Sertakan lembar data keselamatan bahan jika ada potensi pajanan kimia.",
        "Tanyakan apakah metode yang diusulkan menilai kondisi pada titik tetap, pajanan personal, atau keduanya. Sebuah pembacaan dekat mesin membantu memetakan sumber. Evaluasi pajanan pekerja juga perlu mempertimbangkan tempat ia bekerja dan durasi tiap aktivitas. Minta penyedia mencatat alasan pemilihan titik atau pekerja serta kondisi produksi pada saat pengukuran.",
      ] },
      { heading: "Cara membaca hasil dan menentukan tindakan", paragraphs: [
        "Cocokkan setiap hasil dengan faktor, satuan, durasi, metode, dan dasar pembanding pada laporan. Untuk hasil yang dibandingkan dengan nilai ambang batas, periksa apakah dasar waktu dan ukuran pajanan sesuai. Bila hasil berasal dari giliran dengan produksi lebih rendah, diskusikan keterwakilannya sebelum menerapkan kesimpulan pada giliran lain.",
        "Misalnya, pengujian mencatat potensi pajanan tinggi selama aktivitas pemotongan. Telusuri waktu kerja dan kondisi pengendalian saat sampel diambil. Diskusikan perbaikan pada sumber atau jalur pajanan, tetapkan penanggung jawab dan jadwal, lalu rencanakan verifikasi dengan metode yang sesuai setelah perubahan. Catat keputusan dalam register agar dapat ditelusuri saat tinjauan K3.",
      ] },
      { heading: "Apa yang perlu diminta sebelum menyetujui penawaran", paragraphs: [
        "Minta rincian parameter, metode, cakupan lokasi, jumlah sampel, jadwal, dan hasil yang diserahkan. Bandingkan penawaran dengan skenario produksi yang sama. Sepakati siapa yang menyiapkan izin akses, denah, catatan giliran, serta narahubung operasi. Jika mesin yang relevan berhenti pada hari pengukuran, tentukan cara menjadwalkan kembali atau mendokumentasikan batas hasil.",
        "Pada serah terima, simpan lembar lingkup, laporan, dan daftar tindak lanjut bersama bukti verifikasi. Gunakan nomor sampel atau rujukan halaman saat mencatat tindakan. Untuk pengukuran ulang, catat pengendalian yang berubah dan kondisi operasi yang perlu diamati agar hasil sebelumnya dapat dibandingkan secara bermakna.",
      ] },
    ],
    asset: { title: "Worksheet lingkup pengukuran lingkungan kerja", columns: ["Lokasi dan aktivitas","Faktor atau sumber","Pekerja dan durasi","Kondisi operasi","Bukti untuk penyedia","Keputusan atau tindak lanjut"], examples: [
      ["Pemotongan logam","Kebisingan mesin","Operator, dua giliran","Catat lama mesin aktif","Denah, jadwal, dan daftar aktivitas","Diskusikan metode pajanan personal"],
      ["Area pencampuran","Potensi pajanan bahan kimia","Operator pencampuran","Catat bahan dan periode proses","Lembar data keselamatan, catatan ventilasi","Konfirmasi parameter dengan penguji"],
      ["Gudang","Pemindahan barang berulang","Pekerja penerimaan","Catat variasi volume dan giliran","Daftar tugas dan pola pemindahan","Bahas metode penilaian ergonomi"],
    ] },
    faqItems: [
      { question: "Apakah hasil pengukuran internal cukup untuk kewajiban eksternal?", answer: "Pasal 59 Permenaker 5/2018 menyatakan pengukuran internal tidak menggugurkan kewajiban pengukuran eksternal." },
      { question: "Apa yang dilakukan bila hasil melebihi pembanding?", answer: "Tinjau metode dan kondisi pengukuran bersama pihak kompeten, putuskan pengendalian, tetapkan pemilik tindakan, dan siapkan verifikasi efektivitas." },
    ],
    source: "lingkungan",
    parents: ["/dokumen-smk3/","/contoh-hiradc/"],
    related: ["checklist-inspeksi-k3","gap-analysis-smk3"],
    cta: "Konsultasikan lingkup pengukuran lingkungan kerja",
    lastUpdated: "2026-11-21",
  },
  {
    slug: "riksa-uji-forklift",
    title: "Riksa Uji Forklift: Syarat, Jadwal, dan Checklist",
    description: "Ketahui jadwal riksa uji forklift menurut Permenaker 8/2020. Siapkan identitas unit, dokumen, lokasi, dan register tindak lanjut.",
    intro: "Riksa uji forklift adalah pemeriksaan dan pengujian K3 terhadap unit forklift. Untuk menyiapkannya, cocokkan identitas setiap unit dengan bukti pemeriksaan sebelumnya, tentukan jenis pemeriksaan yang diperlukan, dan atur akses dengan pihak pemeriksa yang berwenang.",
    sections: [
      { heading: "Jadwal pemeriksaan pertama, berkala, dan khusus", paragraphs: [
        "Permenaker 8/2020 Pasal 176 ayat (1) menetapkan pemeriksaan berkala pertama paling lambat dua tahun setelah pemeriksaan dan pengujian pertama untuk pesawat angkat dan angkut. Setelah itu, pemeriksaan berkala dilakukan setiap tahun. Gunakan tanggal yang tercatat pada dokumen pemeriksaan, bukan perkiraan tahun pembelian atau tanggal servis.",
        "Pasal 177 mengatur pemeriksaan dan pengujian khusus setelah kecelakaan kerja, kebakaran, atau peledakan. Jika riwayat unit tidak jelas, ada perubahan pada unit, atau terjadi kejadian yang dapat memengaruhi kelayakan, catat faktanya dan konsultasikan pemeriksaan yang diperlukan sebelum merencanakan penggunaan berikutnya.",
      ] },
      { heading: "Bedakan kelayakan unit, lisensi operator, dan cek harian", paragraphs: [
        "Bukti pemeriksaan forklift melekat pada unit yang diperiksa. Lisensi K3 operator berkaitan dengan orang yang mengoperasikan peralatan. Catat kedua jenis bukti di register terpisah yang dapat dihubungkan. Untuk unit sewa, minta bukti yang sesuai dengan nomor seri aktual dan periksa dokumen operator yang ditugaskan.",
        "Cek sebelum penggunaan membantu menemukan perubahan kondisi dari satu giliran ke giliran berikutnya. Servis rutin membantu pemeliharaan. Gunakan bukti tersebut untuk menunjukkan riwayat unit saat riksa uji. Jika cek harian menemukan gejala yang dapat memengaruhi keselamatan, ikuti prosedur penghentian penggunaan dan pemeriksaan di tempat kerja.",
      ] },
      { heading: "Dokumen dan lokasi yang perlu disiapkan", paragraphs: [
        "Siapkan daftar aset, merek dan model, nomor seri, data kapasitas pada pelat, lokasi pemakaian, riwayat pemeriksaan, catatan pemeliharaan, serta informasi perlengkapan tambahan yang dipasang. Catat ketidaksesuaian identitas sejak awal. Apabila laporan lama tidak ditemukan, tandai statusnya sebagai perlu konfirmasi dan hubungi pihak yang berwenang.",
        "Sepakati waktu, akses, penanggung jawab lokasi, aktivitas yang perlu dijadwalkan ulang, dan cara mengendalikan area pemeriksaan. Serahkan penetapan metode serta pelaksanaan pengujian kepada pemeriksa yang berwenang. Konfirmasikan bentuk laporan atau dokumen hasil serta bagaimana temuan disampaikan kepada perusahaan.",
      ] },
      { heading: "Contoh menghitung tanggal untuk dua unit", paragraphs: [
        "Misalkan F-01 pertama kali diperiksa pada 12 Februari 2025. Dengan ketentuan umum dua tahun, pemeriksaan berkala pertamanya dijadwalkan paling lambat 12 Februari 2027. Jika pemeriksaan berkala dilaksanakan pada 20 Januari 2027, jadwalkan siklus tahunan berikutnya berdasarkan rekaman tersebut dan konfirmasikan tanggal yang berlaku dengan pihak pemeriksa.",
        "Untuk unit sewa F-02, pemasok menyerahkan dokumen yang menyebut nomor seri berbeda dari pelat. Jangan menyalin tanggal dokumen itu sebagai dasar jadwal F-02. Periksa berkas serah terima, minta dokumen sesuai unit, dan eskalasikan status yang belum terverifikasi kepada penanggung jawab penggunaan.",
      ] },
      { heading: "Tutup temuan dan pelihara register", paragraphs: [
        "Setelah menerima hasil, cocokkan identitas unit dan ruang lingkupnya, lalu catat keputusan pemeriksa serta tindakan yang diminta. Untuk temuan yang memengaruhi kelayakan, ikuti pembatasan penggunaan dan persyaratan verifikasi dari pihak berwenang. Bukti perbaikan dapat berupa catatan pekerjaan atau hasil pemeriksaan lanjutan sesuai temuan.",
        "Tentukan pemilik register dan tanggal pemeriksaan rutin atas kelengkapan data. Saat unit pindah, diganti, dikembalikan, atau memperoleh perlengkapan tambahan, perbarui data dan periksa dampaknya pada lingkup pemeriksaan. Simpan rekaman sebelumnya agar perubahan dapat ditelusuri tanpa mencampur riwayat dari dua nomor seri.",
      ] },
    ],
    asset: { title: "Register persiapan riksa uji forklift", columns: ["ID unit","Nomor seri","Jenis pemeriksaan","Tanggal pemeriksaan terakhir","Target berikutnya","Dokumen atau kondisi","PIC","Status"], examples: [
      ["F-01","Seri contoh A","Berkala pertama","2025-02-12","2027-02-12","Cocokkan berita acara pemeriksaan pertama","Penanggung jawab aset","Siapkan jadwal"],
      ["F-02","Seri contoh B","Perlu konfirmasi","","","Nomor seri pada dokumen pemasok berbeda","Koordinator sewa","Telusuri bukti"],
      ["F-03","Seri contoh C","Berkala tahunan","","","Periksa laporan terakhir dan catatan servis","Pemeliharaan","Isi tanggal dari laporan"],
    ] },
    faqItems: [
      { question: "Berapa kali riksa uji forklift dilakukan?", answer: "Pasal 176 ayat (1) menetapkan pemeriksaan berkala pertama paling lambat dua tahun setelah pemeriksaan pertama dan selanjutnya setahun sekali. Keadaan tertentu dapat memerlukan pemeriksaan khusus." },
      { question: "Apakah bukti riksa uji cukup untuk operator?", answer: "Bukti riksa uji berkaitan dengan unit. Periksa lisensi K3 dan penugasan operator secara terpisah sesuai kelas dan ketentuan yang berlaku." },
    ],
    source: "forklift",
    parents: ["/sio-dan-sia-k3/"],
    related: ["checklist-inspeksi-k3","contoh-jsa"],
    cta: "Bahas kesiapan dokumen dan jadwal riksa uji forklift",
    lastUpdated: "2026-11-21",
  },
  {
    slug: "checklist-inspeksi-apar",
    title: "Checklist Inspeksi APAR: Form dan Contoh Isian",
    description: "Unduh checklist inspeksi APAR untuk mencatat lokasi, akses, kondisi tabung, jadwal pemeriksaan, serta tindakan perbaikan dan verifikasinya.",
    intro: "Checklist inspeksi APAR membantu memastikan setiap alat pemadam api ringan dapat ditemukan, diakses, dan ditindaklanjuti bila ada cacat. Mulai dari daftar unit dan lokasi. Gunakan hasil pemeriksaan visual rutin sebagai masukan bagi pemeliharaan dan pemeriksaan berkala.",
    sections: [
      { heading: "Bedakan pengecekan rutin dan pemeriksaan berkala", paragraphs: [
        "Pasal 11 PER.04/MEN/1980 menetapkan dua pemeriksaan dalam setahun, yaitu pemeriksaan jangka enam bulan dan dua belas bulan. Pasal 12 dan 13 merinci lingkup pemeriksaan masing-masing, sebagian bergantung pada tipe alat. Jika inspeksi visual internal dijadwalkan lebih sering, simpan rekamannya terpisah dari bukti pemeriksaan berkala.",
        "Tentukan siapa yang mengecek akses dan kondisi visual pada rute rutin. Untuk pemeriksaan teknis, pemeriksaan isi, servis, atau penggantian, ikuti petunjuk pabrikan dan libatkan pihak yang kompeten. Jangan menggunakan posisi jarum tekanan sebagai satu-satunya dasar status. Beberapa jenis APAR memakai indikator atau cara pemeriksaan yang berbeda.",
      ] },
      { heading: "Urutan pemeriksaan visual per unit", paragraphs: [
        "Cocokkan ID alat, titik pada denah, dan jenisnya dengan register. Lihat apakah alat berada pada posisi yang ditetapkan, tanda terlihat dari rute, akses bebas hambatan, serta dudukan atau lemari dalam kondisi baik. Catat jika tata letak, mesin, atau bahan di area telah berubah sejak penempatan APAR ditinjau.",
        "Periksa bagian luar tabung, label, segel dan pin yang terlihat, selang atau nosel sesuai tipe, serta indikator yang tersedia. Laporkan penyok, korosi, kebocoran, atau tanda pernah digunakan. Catat tanggal pemeriksaan terakhir dan tanggal berikutnya berdasarkan rekaman. Unit yang tidak ditemukan perlu dicatat agar kekosongan perlindungan dapat segera ditinjau.",
      ] },
      { heading: "Contoh temuan dan tindakan di gudang", paragraphs: [
        "Pada putaran pagi, unit G-07 tetap terpasang, tetapi palet menghalangi akses. Catat titik, waktu, bukti, dan pihak yang mengelola area. Minta akses dipulihkan segera sesuai prosedur. Periksa ulang titik yang sama saat kegiatan penerimaan berlangsung untuk melihat apakah palet kembali ditempatkan di sana. Jika berulang, ajukan perubahan zona transit dan periksa hasilnya pada giliran berikutnya.",
        "Pada titik lain, tabung H-03 menunjukkan korosi. Catat cacat dan laporkan agar alat segera diperbaiki atau diganti sebagaimana ditentukan Pasal 11. Koordinasikan penanganan dengan pemilik peralatan agar ketersediaan proteksi di lokasi terjaga. Setelah penggantian, cocokkan ID baru dan tanggal pemasangan dengan register serta denah.",
      ] },
      { heading: "Pakai status yang menunjukkan keputusan berikutnya", paragraphs: [
        "Gunakan status seperti baik secara visual, temuan akses, perlu tindakan teknis, atau tidak ditemukan. Pisahkan catatan inspeksi dari keputusan teknis yang dibuat petugas berwenang. Tambahkan PIC, tenggat, dan bukti setelah tindakan dilakukan. Pengecekan berikutnya dapat dimulai dari unit dengan temuan terbuka dan unit yang baru dipindahkan.",
        "Jika pekerjaan dilakukan oleh penyedia, cocokkan daftar unit pada laporan dengan register lokasi. Simpan bukti yang menunjukkan jenis pemeriksaan, tanggal, identitas unit, dan hasilnya. Periksa bahwa unit sementara atau pengganti juga tercatat dan mudah ditemukan oleh pekerja.",
      ] },
      { heading: "Sesuaikan checklist saat area berubah", paragraphs: [
        "Perubahan jenis material, tata letak, atau penggunaan ruang dapat memengaruhi penempatan dan jenis APAR yang dibutuhkan. Gunakan laporan inspeksi untuk menandai perubahan tersebut, lalu mintakan tinjauan kepada pihak yang menangani proteksi kebakaran. Dalam template, buat satu baris per unit dan sisakan ruang untuk nomor tindakan jika lebih dari satu masalah ditemukan.",
        "Pada rapat tindak lanjut, pilih satu unit dan telusuri alurnya dari denah ke rekaman pemeriksaan serta bukti koreksi. Jika peninjau kesulitan menemukan unit atau tanggal pemeriksaan berikutnya, perbaiki penamaan atau struktur register sebelum inspeksi berikutnya.",
      ] },
    ],
    asset: { title: "Log checklist inspeksi APAR", columns: ["ID unit","Lokasi","Tipe APAR","Akses dan tanda","Kondisi visual","Tanggal cek","Pemeriksaan berkala berikutnya","Tindakan dan PIC","Bukti verifikasi"], examples: [
      ["G-07","Pintu penerimaan","Sesuai label unit","Akses terhalang palet","Bagian luar tampak baik","","","Pulihkan akses dan tinjau zona transit, supervisor","Periksa kembali saat penerimaan aktif"],
      ["H-03","Lorong gudang","Sesuai label unit","Akses terbuka","Tampak korosi","","","Laporkan untuk perbaikan atau penggantian, pemilik aset","Cocokkan unit pengganti dan register"],
      ["K-01","Koridor kantor","Sesuai label unit","Belum diperiksa","Belum diperiksa","","","",""],
    ] },
    faqItems: [
      { question: "Apakah cek bulanan menggantikan pemeriksaan enam dan dua belas bulan?", answer: "Cek visual internal melengkapi pemeriksaan berkala. Jadwalkan pemeriksaan enam dan dua belas bulan sesuai Pasal 11 dan lingkup pada Pasal 12 dan 13." },
      { question: "Bagaimana jika APAR ditemukan cacat?", answer: "Laporkan kepada pihak yang berwenang menangani alat agar cacat segera diperbaiki atau unit diganti. Catat tindakan, jaga ketersediaan proteksi, dan verifikasi hasilnya." },
    ],
    source: "apar",
    parents: ["/checklist-inspeksi-k3/","/arti-rambu-k3/"],
    related: ["contoh-sop-tanggap-darurat"],
    cta: "Bahas program inspeksi dan pencatatan APAR",
    lastUpdated: "2026-11-21",
  },
  {
    slug: "contoh-sop-tanggap-darurat",
    title: "Contoh SOP Tanggap Darurat: Evakuasi dan Simulasi",
    description: "Lihat contoh SOP tanggap darurat untuk gudang atau tempat kerja, dari aktivasi alarm dan evakuasi hingga penghitungan orang serta evaluasi simulasi.",
    intro: "Contoh SOP tanggap darurat berikut memakai skenario asap di area penerimaan gudang. Alurnya mencakup pemberitahuan, evakuasi, pendataan orang, koordinasi bantuan, dan keputusan masuk kembali. Isi peran, nomor kontak, denah, dan syarat aktivasi berdasarkan rencana yang disahkan di lokasi Anda.",
    sections: [
      { heading: "Isi pokok SOP dan dasar penetapan", paragraphs: [
        "Cantumkan tujuan dan lingkup, skenario yang dicakup, kondisi untuk mengaktifkan respons, peran utama dan pengganti, saluran komunikasi, jalur evakuasi, titik kumpul, pendataan, dan prosedur pemulihan. PP 50/2012 Pasal 11 dan Lampiran II bagian 6.7 mengaitkan kesiapsiagaan dengan identifikasi potensi darurat, dokumentasi, komunikasi, pengujian, dan peninjauan rutin.",
        "Untuk gudang, skenario dapat mencakup kebakaran, terhalangnya akses keluar, atau keadaan darurat kesehatan. Pilih skenario dari penilaian risiko lokasi. Tetapkan dalam dokumen siapa yang memanggil bantuan, bagaimana tamu dan kontraktor dihitung, dan siapa yang berwenang memberi izin masuk kembali. Minta petugas berkompeten meninjau denah dan alur sebelum SOP digunakan.",
      ] },
      { heading: "Langkah 1–2. Laporkan dan aktifkan respons", paragraphs: [
        "Dalam contoh, pekerja melihat asap dekat pintu penerimaan. Pekerja menjauh dari bahaya, memberi tahu orang di sekitar, dan mengaktifkan atau melaporkan melalui sarana yang ditetapkan SOP. Isi pesan dengan lokasi tepat, jenis kejadian, potensi orang terdampak, dan akses yang diketahui. Koordinator atau petugas yang ditunjuk meneruskan informasi kepada layanan darurat sesuai prosedur lokasi.",
        "Siapkan cara alternatif jika saluran komunikasi utama gagal. Tulis siapa yang memiliki daftar kontak dan siapa penggantinya pada giliran malam. Pada area dengan tamu atau pekerja yang membutuhkan bantuan, siapkan cara agar instruksi dapat diterima dan pendamping sudah ditetapkan.",
      ] },
      { heading: "Langkah 3–4. Evakuasi dan periksa siapa yang sudah aman", paragraphs: [
        "Tim menuju jalur aman yang ditetapkan, mengikuti instruksi petugas, dan melapor di titik kumpul. Jika jalur utama terdampak, gunakan jalur alternatif yang sudah ditinjau. Petugas titik kumpul membandingkan orang yang hadir dengan data pekerja, tamu, dan kontraktor untuk periode tersebut. Catat informasi terakhir tentang orang yang belum ditemukan lalu sampaikan kepada koordinator dan petugas darurat.",
        "Contoh latihan: dua pengunjung tertulis di buku tamu tetapi baru satu tiba di titik kumpul. Petugas menanyakan informasi terakhir kepada pendamping dan menyampaikan status kepada komando respons. Pekerja tetap di tempat aman dan mengikuti arahan petugas. Koordinator memperbarui status saat informasi baru diterima.",
      ] },
      { heading: "Langkah 5. Masuk kembali dan pulihkan kegiatan", paragraphs: [
        "Pisahkan berakhirnya evakuasi dari izin masuk kembali. SOP harus menentukan pihak yang memberi izin dan cara menyampaikannya setelah kondisi dinyatakan aman. Catat waktu keputusan, area yang boleh dimasuki, serta pembatasan yang masih berlaku. Bila aktivitas harus dipindah atau dijadwalkan ulang, sampaikan kepada pemilik proses dan pihak yang terdampak.",
        "Simpan catatan waktu alarm, pergerakan ke titik kumpul, informasi orang yang belum terkonfirmasi, dan koordinasi eksternal. Untuk kejadian nyata, jalankan prosedur pelaporan dan investigasi yang berlaku. Waktu respons membantu evaluasi, bersama kualitas pendataan, kejelasan instruksi, dan keterjangkauan jalur.",
      ] },
      { heading: "Uji dengan simulasi dan tindak lanjuti temuan", paragraphs: [
        "Rancang simulasi bersama penanggung jawab lokasi. Tetapkan tujuan, misalnya menguji rute alternatif dan kelengkapan data tamu. Amati apakah alarm diterima pada area bising, daftar orang tersedia, petugas pengganti mengetahui tugasnya, dan akses bantuan terjaga. Gunakan pengamat untuk mencatat bukti pada tahapan yang disepakati.",
        "Jika daftar kontraktor ternyata tidak tersedia saat simulasi, beri pemilik tindakan dan waktu penyelesaian. Uji kembali dengan satu skenario dari giliran berbeda. Perbarui SOP dan materi induksi bila hasilnya mengubah rute, peran, atau cara pelaporan. Simpan riwayat revisi serta hasil uji agar karyawan tahu versi yang digunakan.",
      ] },
    ],
    asset: { title: "Matriks peran dan evaluasi tanggap darurat", columns: ["Tahap","Peran utama","Pengganti","Keputusan atau tindakan","Bukti simulasi","Temuan atau tindak lanjut"], examples: [
      ["Pemberitahuan","Sesuai SOP lokasi","","Aktifkan alarm atau laporkan posisi kejadian","Waktu dan jangkauan alarm",""],
      ["Evakuasi","Petugas evakuasi","","Arahkan ke jalur aman atau alternatif","Catatan jalur yang digunakan",""],
      ["Pendataan","Petugas titik kumpul","","Cocokkan pekerja, tamu, dan kontraktor","Daftar orang dan status",""],
      ["Masuk kembali","Pihak berwenang sesuai SOP","","Sampaikan izin dan batas area setelah dinyatakan aman","Waktu keputusan dan penerima informasi",""],
    ] },
    faqItems: [
      { question: "Apakah contoh ini dapat langsung menjadi SOP perusahaan?", answer: "Gunakan sebagai kerangka. Isi skenario, denah, kontak, peran, dan kewenangan setempat. Tinjau dan uji bersama petugas yang kompeten sebelum digunakan." },
      { question: "Apa yang sebaiknya dinilai saat simulasi?", answer: "Periksa penerimaan alarm, akses jalur, pemahaman instruksi, kelengkapan pendataan, koordinasi bantuan, dan kemampuan menindaklanjuti temuan." },
    ],
    source: "smk3",
    parents: ["/dokumen-smk3/","/isi-kotak-p3k-permenaker/"],
    related: ["materi-safety-induction","checklist-inspeksi-apar"],
    cta: "Bahas penyusunan SOP dan evaluasi simulasi",
    lastUpdated: "2026-11-21",
  },
  {
    slug: "perbedaan-smk3-dan-iso-45001",
    title: "Perbedaan SMK3 dan ISO 45001 untuk Perusahaan",
    description: "Bandingkan SMK3 PP 50/2012 dan ISO 45001 dari dasar penerapan, lingkup, audit, dan bukti. Unduh matriks integrasi untuk persiapan perusahaan.",
    intro: "Perbedaan utama SMK3 dan ISO 45001 terletak pada dasar penerapan dan skema penilaiannya. SMK3 dalam panduan ini mengacu pada PP 50/2012 di Indonesia. ISO 45001 adalah standar internasional sistem manajemen K3. Perusahaan dapat menggunakan sebagian bukti yang sama untuk keduanya, dengan verifikasi terpisah terhadap persyaratan masing-masing.",
    sections: [
      { heading: "Dasar penerapan dan kapan perusahaan perlu keduanya", paragraphs: [
        "Pasal 5 PP 50/2012 menetapkan kewajiban penerapan SMK3 bagi perusahaan dengan sedikitnya 100 pekerja atau tingkat potensi bahaya tinggi. Periksa kedua kondisi dan aturan sektoral yang berlaku untuk perusahaan Anda. ISO 45001 dapat diterapkan oleh organisasi berbagai ukuran. Sertifikasi ISO 45001 dapat dipilih perusahaan, meski pelanggan atau kontrak tertentu dapat menjadikannya syarat komersial.",
        "Jika tender meminta ISO 45001, baca persyaratan lingkup, lokasi, masa berlaku, dan badan sertifikasi yang diterima. Konfirmasi apakah bukti masih diperlukan pada saat penawaran atau saat pelaksanaan. Secara terpisah, evaluasi kewajiban nasional dan bukti yang relevan. Sertifikat ISO 45001 tidak menggantikan kewajiban penerapan SMK3.",
      ] },
      { heading: "Perbedaan ruang lingkup dan pola penilaian", paragraphs: [
        "PP 50/2012 menguraikan kebijakan, perencanaan, pelaksanaan, evaluasi, dan peningkatan. Lampiran II memuat kriteria audit dengan tingkat awal, transisi, dan lanjutan. Untuk penilaian eksternal SMK3, konfirmasikan tingkat, cakupan, dan pelaksana audit sesuai mekanisme nasional. Tentukan bukti per lokasi dan proses sebelum menyusun rencana audit.",
        "ISO 45001 menekankan konteks organisasi, kepemimpinan serta partisipasi pekerja, perencanaan, dukungan, operasi, evaluasi, dan peningkatan. Untuk sertifikasi, bahas lingkup dan penilaian dengan badan sertifikasi. ISO mencantumkan ISO 45001:2018 sebagai edisi terbit dengan Amandemen 1:2024. Saat memulai proyek, cek edisi yang digunakan dan jadwal transisi pada sumber resmi.",
      ] },
      { heading: "Contoh pabrik yang menghadapi kewajiban dan tender", paragraphs: [
        "Pabrik ilustratif mempekerjakan 180 pekerja dan mendapat tender yang meminta sertifikat ISO 45001 untuk kegiatan manufaktur di lokasi yang ditawarkan. Tim mencatat dasar kewajiban SMK3 berdasarkan jumlah pekerja. Pada jalur tender, tim membaca ruang lingkup sertifikat yang diminta, batas penerimaan dokumen, serta proses sertifikasi yang terkait.",
        "Saat melakukan gap analysis, tim menemukan penilaian risiko sudah tersedia, tetapi kriteria SMK3 belum dipetakan dan daftar pihak berkepentingan untuk ISO perlu ditinjau. Tim memakai satu daftar tindakan dengan kolom rujukan masing-masing skema. PIC produksi memperbaiki penerapan, HSE memeriksa bukti, dan tim tender memantau persyaratan kontrak serta tenggatnya.",
      ] },
      { heading: "Bukti yang bisa dikelola bersama", paragraphs: [
        "Inventarisasi kebijakan K3, penilaian risiko, rekaman konsultasi pekerja, inspeksi, investigasi, audit internal, dan tinjauan manajemen. Catat versi, lokasi, pemilik, serta periode. Satu rekaman konsultasi bisa mendukung penilaian di kedua skema jika isi, keterlibatan pekerja, dan lingkupnya sesuai. Tandai kriteria yang masih membutuhkan bukti lain.",
        "Untuk contoh inspeksi gudang, simpan jadwal, laporan, keputusan perbaikan, serta bukti pengujian efektivitas sekali dalam repositori. Rujuk dokumen yang sama dari pemetaan SMK3 dan ISO 45001. Bila salah satu lingkup sertifikasi mengecualikan suatu lokasi, tetap periksa apakah lokasi tersebut perlu tercakup dalam penerapan atau penilaian nasional.",
      ] },
      { heading: "Urutan keputusan untuk rencana implementasi", paragraphs: [
        "Mulai dari daftar kewajiban hukum dan persyaratan pelanggan, lalu buat peta lokasi dan aktivitas. Setelah itu, tentukan proses yang dapat dipakai bersama dan pekerjaan yang hanya diperlukan untuk salah satu skema. Susun jadwal yang memuat waktu menghasilkan bukti, menutup kesenjangan, dan menjalani proses penilaian yang disepakati.",
        "Gunakan matriks di bawah untuk memulai diskusi dengan manajemen. Untuk setiap baris, catat bukti yang tersedia dan kekurangannya. Tetapkan penanggung jawab dan tenggat yang sesuai kenyataan. Lakukan pemeriksaan terpisah atas hasil penilaian dan keputusan sertifikasi pada tiap skema, terutama bila satu hasil menjadi prasyarat kontrak.",
      ] },
    ],
    asset: { title: "Matriks perbandingan bukti SMK3 dan ISO 45001", columns: ["Aspek","SMK3 PP 50/2012","ISO 45001","Bukti yang bisa dipakai bersama","Tindakan atau PIC"], examples: [
      ["Dasar","Kewajiban menurut ruang lingkup Pasal 5","Standar internasional, cek persyaratan pelanggan","Daftar kewajiban dan persyaratan kontrak","Validasi dua ruang lingkup"],
      ["Risiko","Pedoman penerapan dan kriteria audit nasional","Proses identifikasi bahaya serta perencanaan K3","Register risiko dan bukti verifikasi pengendalian","Tinjau lokasi serta aktivitas"],
      ["Partisipasi","Keterlibatan dan konsultasi pekerja","Konsultasi serta partisipasi pekerja","Catatan rapat, masukan, dan keputusan","Periksa keterwakilan pada lingkup"],
      ["Penilaian","Audit menurut skema SMK3 nasional","Audit badan sertifikasi bila sertifikasi dituju","Kertas kerja internal dan register tindakan","Jadwalkan penilaian sesuai skema"],
    ] },
    faqItems: [
      { question: "Apakah ISO 45001 bisa menggantikan SMK3?", answer: "Periksa kewajiban SMK3 berdasarkan PP 50/2012 dan ketentuan terkait. Sertifikasi ISO 45001 tidak menggantikan kewajiban tersebut." },
      { question: "Perusahaan sebaiknya mulai dari mana?", answer: "Petakan kewajiban nasional, kebutuhan kontrak, dan lingkup operasi. Prioritaskan pekerjaan yang menjawab kewajiban dan risiko, lalu gunakan bukti yang relevan untuk memenuhi kedua skema." },
    ],
    source: ["smk3","iso"],
    parents: ["/syarat-sertifikasi-smk3/","/kriteria-audit-smk3/"],
    related: ["gap-analysis-smk3","audit-internal-smk3"],
    cta: "Bahas pemetaan kebutuhan SMK3 dan ISO 45001",
    lastUpdated: "2026-11-21",
  },
];
