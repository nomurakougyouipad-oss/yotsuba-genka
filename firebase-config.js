// 原価かんたん計算 Firebase 設定（プロジェクト: yotsuba-genka）
// Firebase コンソール → プロジェクトの設定 → マイアプリ（ウェブ）に出る値をここに貼る。
// apiKey が空のあいだは、Firebase につながず、その端末の中だけに保存して動く（試し用）。
export const firebaseConfig = {
  apiKey: "AIzaSyBdK-PkdIr6x4RTrNWpFabdbIBQIOYymEQ",
  authDomain: "yotsuba-genka.firebaseapp.com",
  projectId: "yotsuba-genka",
  storageBucket: "yotsuba-genka.firebasestorage.app",
  messagingSenderId: "344401714638",
  appId: "1:344401714638:web:ef15c2e3035a50130adf9f"
};
// Firebase JS SDK（CDN / script type="module" で読み込む）。社用車管理アプリと同じ版。
export const FIREBASE_SDK_VERSION = "12.19.0";
