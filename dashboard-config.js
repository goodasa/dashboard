window.DASHBOARD_CONFIG = {
    appId: "my-github-todo",
    firebase: {
        apiKey: "AIzaSyA9NGhnuq4Dsf4qq_JqIv1qlgoQ3ocvowM",
        authDomain: "mytodo-3fb4d.firebaseapp.com",
        projectId: "mytodo-3fb4d",
        storageBucket: "mytodo-3fb4d.firebasestorage.app",
        messagingSenderId: "5187329075",
        appId: "1:5187329075:web:d0ba327669c08534365746"
    },
    weather: {
        locationName: "서울",
        latitude: 37.5665,
        longitude: 126.9780,
        timezone: "Asia/Seoul"
    },
    schoolSchedule: {
        weekendMessage: "주말입니다. 학교 정규 시간표가 없습니다.",
        weeklySchedule: {
            monday: [
                { day: "monday", startTime: "09:10", title: "과학" },
                { day: "monday", startTime: "10:05", title: "사회" },
                { day: "monday", startTime: "11:00", title: "음악" },
                { day: "monday", startTime: "11:55", title: "영어" },
                { day: "monday", startTime: "13:40", title: "주선A" },
                { day: "monday", startTime: "14:35", title: "주선A" }
            ],
            tuesday: [
                { day: "tuesday", startTime: "09:10", title: "국어" },
                { day: "tuesday", startTime: "10:05", title: "가정" },
                { day: "tuesday", startTime: "11:00", title: "수학" },
                { day: "tuesday", startTime: "11:55", title: "영어" },
                { day: "tuesday", startTime: "13:40", title: "체육" },
                { day: "tuesday", startTime: "14:35", title: "주선B" },
                { day: "tuesday", startTime: "15:30", title: "주선B" }
            ],
            wednesday: [
                { day: "wednesday", startTime: "09:10", title: "미술" },
                { day: "wednesday", startTime: "10:05", title: "미술" },
                { day: "wednesday", startTime: "11:00", title: "음악" },
                { day: "wednesday", startTime: "11:55", title: "진탐" },
                { day: "wednesday", startTime: "13:40", title: "수학" },
                { day: "wednesday", startTime: "14:35", title: "진로" }
            ],
            thursday: [
                { day: "thursday", startTime: "09:10", title: "국어" },
                { day: "thursday", startTime: "10:05", title: "도덕" },
                { day: "thursday", startTime: "11:00", title: "수학" },
                { day: "thursday", startTime: "11:55", title: "가정" },
                { day: "thursday", startTime: "13:40", title: "사회" },
                { day: "thursday", startTime: "14:35", title: "체육" }
            ],
            friday: [
                { day: "friday", startTime: "09:10", title: "체육" },
                { day: "friday", startTime: "10:05", title: "과학" },
                { day: "friday", startTime: "11:00", title: "국어" },
                { day: "friday", startTime: "11:55", title: "가정" },
                { day: "friday", startTime: "13:40", title: "도덕" },
                { day: "friday", startTime: "14:35", title: "스클" }
            ]
        }
    },
    cram: {
        source: "./cram/cram.md",
        refreshMs: 60000
    },
    githubSync: {
        api: "/api/memory-sync",
        repoUrl: "https://github.com/goodasa/dashboard",
        branch: "main",
        sourceDir: "memory"
    },
    memoryDecks: {
        refreshMs: 60000,
        selectorApi: "/api/studyset-selection",
        english: {
            title: "StudySet 01",
            subject: "영어",
            source: "./memory/english.md"
        },
        korean: {
            title: "StudySet 02",
            subject: "국어",
            source: "./memory/korean.md"
        }
    }
};
