importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// আপনার ফায়ারবেস কনফিগারেশন
const firebaseConfig = {
    apiKey: "AIzaSyD2bjTccAy_8Cmy0y8ELqXx3Hlq76qnPLE",
    authDomain: "mycoinbazar-1bc49.firebaseapp.com",
    projectId: "mycoinbazar-1bc49",
    storageBucket: "mycoinbazar-1bc49.firebasestorage.app",
    messagingSenderId: "550287421845",
    appId: "1:550287421845:web:333412320b8c382a0f469c"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// ব্যাকগ্রাউন্ডে নোটিফিকেশন রিসিভ করার কোড
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification?.title || 'Coin Bazar | New Alert';
    const notificationOptions = {
        body: payload.notification?.body || 'You have a new request pending.',
        icon: 'https://placehold.co/192x192/122B45/E8C779?text=CB',
        vibrate: [1000, 500, 1000, 500, 1000] // ফোন কাঁপানোর জন্য
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
